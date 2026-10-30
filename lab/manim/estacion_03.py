"""Escenas de la estación 03 · Cómo funciona un LLM, hechas con ManimGX.

Cada escena se renderiza una vez por tema de la pizarra (DESIGN.md): TEMA=blanca o TEMA=negra.
`bash scripts/escenas.sh 03` las renderiza todas y deja video y portada en public/escenas/03/.
Las probabilidades son de ejemplo; las reales saldrán de un modelo (lab/muestreo/, Fase 3).
"""

import os

import manimgx as m

TEMA = os.environ.get("TEMA", "blanca")
COLORES = {
    "blanca": {
        "fondo": "#ffffff", "tinta": "#15171c", "tenue": "#626875", "borde": "#c7cdd7",
        "acento": "#2457d6", "dato": "#86a9e6", "verdadero": "#1e7b45", "falso": "#c62828",
    },
    "negra": {
        "fondo": "#0e121a", "tinta": "#eceff4", "tenue": "#8b93a1", "borde": "#3a404c",
        "acento": "#f5c451", "dato": "#5b9be6", "verdadero": "#83c167", "falso": "#fc6255",
    },
}[TEMA]
FONDO, TINTA, TENUE, BORDE = (COLORES[k] for k in ("fondo", "tinta", "tenue", "borde"))
ACENTO, DATO, VERDADERO, FALSO = (COLORES[k] for k in ("acento", "dato", "verdadero", "falso"))

m.config.background_color = FONDO

TOKENS = ["Canberra", "Sídney", "Melbourne", "una", "la"]
VERDAD = ["verdadero", "falso", "falso", "sigue la frase", "sigue la frase"]
COLOR_VERDAD = [VERDADERO, FALSO, FALSO, TENUE, TENUE]
BASE = [0.58, 0.27, 0.08, 0.04, 0.03]


def con_temperatura(t: float) -> list[float]:
    """p̃_i = p_i^(1/T) / Σ p_j^(1/T): con T baja gana el más probable; con T alta se empareja."""
    t = max(t, 0.05)
    pesos = [p ** (1 / t) for p in BASE]
    total = sum(pesos)
    return [w / total for w in pesos]


def texto(contenido: str, size: float = 36, color: str = TINTA, **kwargs) -> m.Text:
    return m.Text(contenido, font_size=size, color=color, disable_ligatures=True, **kwargs)


def alinear_base(nuevo: m.Mobject, referencia: m.Mobject) -> None:
    """Deja la primera letra de `nuevo` en la línea base de la primera de `referencia`.

    Sirve solo si esas dos letras no bajan de la línea (nada de g, j, p, q, y)."""
    nuevo.shift(m.UP * (referencia[0].get_bottom()[1] - nuevo[0].get_bottom()[1]))


def pasar_leyenda(scene: m.Scene, actual: m.Mobject | None, contenido: str) -> m.Text:
    nueva = texto(contenido, 28, TENUE).move_to([0, -3.6, 0])
    salida = [m.FadeOut(actual, shift=m.UP * 0.15)] if actual is not None else []
    scene.play(*salida, m.FadeIn(nueva, shift=m.UP * 0.15), run_time=0.7)
    return nueva


def nota_de_ejemplo() -> m.Text:
    return texto("probabilidades de ejemplo", 20, TENUE).to_corner(m.UR, buff=0.3)


class Problema(m.Scene):
    """Parada 1: la misma pregunta, dos respuestas."""

    def construct(self) -> None:
        pregunta = texto("¿Cuál es la capital de Australia?", 40)
        caja = m.RoundedRectangle(
            corner_radius=0.2, width=pregunta.width + 1.0, height=pregunta.height + 0.75,
            stroke_color=BORDE, stroke_width=2,
        ).move_to(pregunta)
        burbuja = m.VGroup(caja, pregunta).move_to([0, 2.35, 0])

        def tarjeta(intento: str, respuesta: str, veredicto: str, color: str, x: float) -> m.VGroup:
            contenido = m.VGroup(
                texto(intento, 24, TENUE),
                texto(respuesta, 50),
                texto(veredicto, 28, color, slant=m.ITALIC),
            ).arrange(m.DOWN, buff=0.28)
            # Alto fijo: así las dos tarjetas quedan parejas aunque una palabra baje de la línea.
            marco = m.RoundedRectangle(
                corner_radius=0.22, width=4.3, height=2.5, stroke_color=color, stroke_width=2.5,
            ).move_to([x, -0.45, 0])
            contenido.move_to(marco)
            return m.VGroup(marco, contenido)

        primera = tarjeta("Intento 1", "Canberra", "verdadero", VERDADERO, -3.1)
        segunda = tarjeta("Intento 2", "Sídney", "falso", FALSO, 3.1)
        flecha = {
            "stroke_width": 3, "buff": 0.18, "color": TENUE,
            "max_tip_length_to_length_ratio": 0.12,
        }
        hacia_primera = m.Arrow(burbuja.get_bottom() + m.LEFT * 1.4, primera.get_top(), **flecha)
        hacia_segunda = m.Arrow(burbuja.get_bottom() + m.RIGHT * 1.4, segunda.get_top(), **flecha)

        self.play(m.Create(caja), m.Write(pregunta), run_time=1.6)
        self.play(m.GrowArrow(hacia_primera), m.FadeIn(primera, shift=m.DOWN * 0.3), run_time=1.1)
        self.wait(0.6)
        self.play(m.GrowArrow(hacia_segunda), m.FadeIn(segunda, shift=m.DOWN * 0.3), run_time=1.1)
        leyenda = pasar_leyenda(self, None, "Mismo modelo, misma pregunta, dos respuestas.")
        self.wait(1.4)
        leyenda = pasar_leyenda(self, leyenda, "¿Es una falla… o es el diseño?")
        self.play(m.Indicate(segunda[1][1], color=FALSO, scale_factor=1.12))
        self.wait(1.6)


class Mecanismo(m.Scene):
    """Parada 2: el siguiente token se elige por probabilidad, y la temperatura cambia el reparto."""

    FILAS_Y = (1.65, 0.95, 0.25, -0.45, -1.15)
    X_VERDAD = -6.55
    X_ETIQUETA = -2.55
    X_BARRA = -2.25
    ANCHO_MAX = 6.0
    ALTO_BARRA = 0.34

    def construct(self) -> None:
        self.foco = -1
        t = m.ValueTracker(1.0)
        crece = m.ValueTracker(0.0)

        # 1 · La frase, cortada en tokens, con un hueco al final.
        palabras = ["La", "capital", "de", "Australia", "es"]
        frase = texto(" ".join(palabras), 40)
        pad, separacion = 0.2, 0.18
        alto = frase.height + 0.44
        centro_y = frase.get_center()[1]
        grupos: list[m.VGroup] = []
        cajas: list[m.RoundedRectangle] = []
        cursor, i = 0.0, 0
        for palabra in palabras:
            grupo = m.VGroup(*frase[i : i + len(palabra)])
            i += len(palabra)
            grupo.shift(m.RIGHT * (cursor + pad - grupo.get_left()[0]))
            caja = m.RoundedRectangle(
                corner_radius=0.1, width=grupo.width + 2 * pad, height=alto,
                stroke_color=BORDE, stroke_width=2,
            ).move_to([grupo.get_center()[0], centro_y, 0])
            grupos.append(grupo)
            cajas.append(caja)
            cursor = caja.get_right()[0] + separacion
        ancho_hueco = max(texto(tk, 40).width for tk in TOKENS) + 2 * pad
        hueco = m.DashedVMobject(
            m.RoundedRectangle(
                corner_radius=0.1, width=ancho_hueco, height=alto,
                stroke_color=ACENTO, stroke_width=2.5,
            ),
            num_dashes=44,
        ).move_to([cursor + ancho_hueco / 2, centro_y, 0])
        signo = texto("?", 40, ACENTO)
        signo.move_to(hueco)
        alinear_base(signo, grupos[0])
        fila = m.VGroup(*cajas, *grupos, hueco, signo)
        fila.shift(m.LEFT * fila.get_center()[0] + m.UP * (2.75 - centro_y))

        self.add(nota_de_ejemplo())
        self.play(
            m.LaggedStart(
                *[m.FadeIn(m.VGroup(c, g), shift=m.UP * 0.2) for c, g in zip(cajas, grupos)],
                lag_ratio=0.25,
            ),
            run_time=1.8,
        )
        self.play(m.Create(hueco), m.FadeIn(signo), run_time=0.8)
        leyenda = pasar_leyenda(self, None, "El texto se corta en tokens. ¿Cuál viene después?")
        self.wait(0.8)

        # 2 · Una probabilidad para cada token posible.
        etiquetas = m.VGroup()
        rieles = m.VGroup()
        verdades = m.VGroup()
        for tk, verdad, color, y in zip(TOKENS, VERDAD, COLOR_VERDAD, self.FILAS_Y):
            etiqueta = texto(tk, 30)
            etiqueta.move_to([self.X_ETIQUETA - etiqueta.width / 2, y, 0])
            etiquetas.add(etiqueta)
            riel = m.Rectangle(
                width=self.ANCHO_MAX, height=self.ALTO_BARRA,
                stroke_width=0, fill_color=BORDE, fill_opacity=0.28,
            ).move_to([self.X_BARRA + self.ANCHO_MAX / 2, y, 0])
            rieles.add(riel)
            marca = texto(verdad, 22, color, slant=m.ITALIC)
            marca.move_to([self.X_VERDAD + marca.width / 2, y, 0])
            verdades.add(marca)

        def barras() -> m.VGroup:
            grupo = m.VGroup()
            for k, (p, y) in enumerate(zip(con_temperatura(t.get_value()), self.FILAS_Y)):
                ancho = max(self.ANCHO_MAX * p * crece.get_value(), 0.001)
                grupo.add(
                    m.Rectangle(
                        width=ancho, height=self.ALTO_BARRA, stroke_width=0,
                        fill_color=ACENTO if k == self.foco else DATO, fill_opacity=1,
                    ).move_to([self.X_BARRA + ancho / 2, y, 0])
                )
            return grupo

        # Columna fija a la derecha de las barras, para que las cifras no pisen nada.
        x_cifras = self.X_BARRA + self.ANCHO_MAX + 0.3

        def porcentajes() -> m.VGroup:
            grupo = m.VGroup()
            for p, y in zip(con_temperatura(t.get_value()), self.FILAS_Y):
                n = round(p * 100)
                cifra = texto(f"{n} %" if n >= 1 else "<1 %", 26)
                cifra.move_to([x_cifras + cifra.width / 2, y, 0])
                grupo.add(cifra)
            return grupo

        self.add(rieles, m.always_redraw(barras))
        self.play(
            m.LaggedStart(*[m.TransformFromCopy(signo, e) for e in etiquetas], lag_ratio=0.15),
            m.FadeIn(rieles),
            run_time=1.6,
        )
        self.play(crece.animate.set_value(1), run_time=1.8)
        cifras = porcentajes()
        self.play(m.FadeIn(cifras), run_time=0.6)
        leyenda = pasar_leyenda(self, leyenda, "El modelo le da una probabilidad a cada token posible.")
        self.wait(1.2)

        # 3 · Tira los dados: dos tiradas, dos respuestas.
        izquierda = min(e.get_left()[0] for e in etiquetas) - 0.22
        derecha = x_cifras + 1.1
        marco = m.RoundedRectangle(
            corner_radius=0.12, width=derecha - izquierda, height=0.6,
            stroke_color=ACENTO, stroke_width=2.5, fill_color=ACENTO, fill_opacity=0.07,
        ).move_to([(izquierda + derecha) / 2, self.FILAS_Y[0], 0])

        def ruleta(destino: int) -> None:
            recorrido = [*range(5), *range(5), *range(destino + 1)]
            for k, fila_k in enumerate(recorrido):
                self.foco = fila_k
                marco.move_to([marco.get_center()[0], self.FILAS_Y[fila_k], 0])
                self.wait(0.06 + 0.022 * k)

        def poner_en_hueco(indice: int, color: str) -> m.Text:
            elegido = texto(TOKENS[indice], 40)
            elegido.move_to(hueco)
            alinear_base(elegido, grupos[0])
            self.play(
                m.TransformFromCopy(etiquetas[indice], elegido),
                m.FadeOut(signo),
                hueco.animate.set_stroke(color=color),
                run_time=0.9,
            )
            return elegido

        self.play(m.FadeIn(marco), run_time=0.3)
        ruleta(0)
        primero = poner_en_hueco(0, VERDADERO)
        leyenda = pasar_leyenda(self, leyenda, "Tira los dados con esas probabilidades: salió «Canberra».")
        self.play(m.LaggedStart(*[m.FadeIn(v) for v in verdades], lag_ratio=0.15), run_time=1.0)
        self.wait(1.0)

        self.play(
            m.FadeOut(primero), m.FadeIn(signo), hueco.animate.set_stroke(color=ACENTO), run_time=0.6
        )
        ruleta(1)
        segundo = poner_en_hueco(1, FALSO)
        leyenda = pasar_leyenda(self, leyenda, "Otra tirada, misma pregunta: «Sídney». Falso, pero probable.")
        self.play(m.Indicate(verdades[1], color=FALSO, scale_factor=1.25))
        self.wait(1.4)

        # 4 · La temperatura reparte distinto las probabilidades.
        self.foco = -1
        self.play(
            m.FadeOut(segundo), m.FadeOut(marco), m.FadeIn(signo),
            hueco.animate.set_stroke(color=ACENTO), run_time=0.6,
        )
        self.remove(cifras)
        self.add(m.always_redraw(porcentajes))

        formula = m.MathTex(
            r"\tilde{p}_i = \frac{p_i^{1/T}}{\sum_j p_j^{1/T}}",
            tex_to_color_map={"T": ACENTO}, color=TINTA, font_size=40,
        ).move_to([-4.0, -2.35, 0])
        regla = m.NumberLine(x_range=[0, 2, 1], length=3.6, color=TENUE, include_tip=False)
        regla.move_to([3.0, -2.3, 0])
        numeros = m.VGroup(
            *[texto(str(v), 24, TENUE).next_to(regla.n2p(v), m.DOWN, buff=0.18) for v in (0, 1, 2)]
        )

        def lectura() -> m.VGroup:
            igual = m.MathTex("T", "=", color=TINTA, font_size=40)
            igual[0].set_color(ACENTO)
            # La coma decimal va como texto: en la fórmula quedaría con un espacio después.
            valor = texto(f"{t.get_value():.1f}".replace(".", ","), 40)
            valor.next_to(igual, m.RIGHT, buff=0.2).align_to(igual[0], m.DOWN)
            return m.VGroup(igual, valor).move_to([-0.35, -2.3, 0])

        def punto() -> m.Dot:
            return m.Dot(regla.n2p(t.get_value()), radius=0.11, color=ACENTO)

        leyenda = pasar_leyenda(self, leyenda, "La temperatura T decide cuánto se arriesga.")
        self.play(m.Write(formula), m.FadeIn(regla), m.FadeIn(numeros), run_time=1.4)
        self.add(m.always_redraw(lectura), m.always_redraw(punto))
        self.wait(0.6)
        leyenda = pasar_leyenda(self, leyenda, "T baja: casi siempre gana el más probable.")
        self.play(t.animate.set_value(0.3), run_time=2.2)
        self.wait(1.0)
        leyenda = pasar_leyenda(self, leyenda, "T alta: lo improbable gana terreno.")
        self.play(t.animate.set_value(2.0), run_time=2.4)
        self.wait(1.0)
        self.play(t.animate.set_value(1.0), run_time=1.5)
        leyenda = pasar_leyenda(self, leyenda, "Elige por probabilidad, no por verdad.")
        self.wait(2.0)


class SinEtiqueta(m.Scene):
    """Parada 5: un autocompletado gigante que apuesta por la palabra que suele venir después."""

    def construct(self) -> None:
        pasos = [
            ("El cielo es", [("azul", 0.62), ("gris", 0.14), ("muy", 0.09)]),
            ("El cielo es azul", [("y", 0.41), ("hoy", 0.18), ("como", 0.08)]),
            ("El cielo es azul y", [("el", 0.36), ("las", 0.20), ("no", 0.11)]),
        ]
        final = "El cielo es azul y el"
        tamano = 46
        izquierda = -5.6

        frase = texto(pasos[0][0], tamano)
        frase.move_to([izquierda + frase.width / 2, 2.3, 0])
        linea_y = frase[0].get_center()[1]
        cursor = m.Rectangle(width=0.05, height=0.62, stroke_width=0, fill_color=ACENTO, fill_opacity=1)
        cursor.move_to([frase.get_right()[0] + 0.14, linea_y, 0])
        reloj = {"t": 0.0}

        def parpadeo(mob: m.Mobject, dt: float) -> None:
            reloj["t"] += dt
            mob.set_opacity(1 if reloj["t"] % 1.0 < 0.55 else 0)

        cursor.add_updater(parpadeo)
        titulo = texto("lo que suele venir después", 24, TENUE).move_to([-1.9, 0.95, 0])
        self.add(nota_de_ejemplo())
        self.play(m.Write(frase), run_time=1.2)
        self.add(cursor)
        self.play(m.FadeIn(titulo), run_time=0.5)

        for k, (actual, opciones) in enumerate(pasos):
            filas = m.VGroup()
            for j, (palabra, p) in enumerate(opciones):
                y = 0.2 - j * 0.72
                nombre = texto(palabra, 34)
                nombre.move_to([-3.4 + nombre.width / 2, y, 0])
                barra = m.Rectangle(
                    width=4.2 * p, height=0.3, stroke_width=0,
                    fill_color=ACENTO if j == 0 else DATO, fill_opacity=1,
                ).move_to([-1.2 + 2.1 * p, y, 0])
                cifra = texto(f"{round(p * 100)} %", 24, TENUE).next_to(barra, m.RIGHT, buff=0.2)
                filas.add(m.VGroup(nombre, barra, cifra))
            self.play(m.LaggedStart(*[m.FadeIn(f, shift=m.UP * 0.15) for f in filas], lag_ratio=0.2), run_time=0.9)
            self.play(m.Indicate(filas[0][0], color=ACENTO, scale_factor=1.15), run_time=0.7)

            siguiente = pasos[k + 1][0] if k + 1 < len(pasos) else final
            nueva = texto(siguiente, tamano)
            nueva.align_to(frase, m.LEFT)
            alinear_base(nueva, frase)
            objetivo = m.VGroup(*nueva[len(actual.replace(" ", "")) :])
            self.play(
                m.TransformFromCopy(filas[0][0], objetivo),
                cursor.animate.move_to([nueva.get_right()[0] + 0.14, linea_y, 0]),
                run_time=0.9,
            )
            self.remove(frase, objetivo)
            frase = nueva
            self.add(frase)
            self.play(m.FadeOut(filas), run_time=0.5)

        idea = m.VGroup(
            texto("Un autocompletado gigante:", 36),
            texto("apuesta por la palabra que suele venir después.", 36),
        ).arrange(m.DOWN, buff=0.22).move_to([0, -1.2, 0])
        self.play(m.FadeOut(titulo), m.FadeIn(idea, shift=m.UP * 0.2), run_time=1.0)
        self.wait(2.2)
