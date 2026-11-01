"""Canvas de la estación 03 · Cómo funciona un LLM, dibujados con ManimGX (Fase 4b).

No son videos. Cada escena es el storyboard de un canvas interactivo, y cada sección es un momento
que avanzas tú en la página. Al construir los canvas, de aquí salen las piezas que la página junta y
anima con Motion (la frase, las fórmulas, los diagramas); las barras, los contadores y las perillas
se mueven en vivo en el navegador.

TEMA=blanca|negra elige los colores (DESIGN.md). DISENO=1 agrega las marcas del storyboard:
«tocas» donde hay algo que tocar y «en vivo» en lo que cambia al instante.
Los datos son reales: lab/muestreo/ y lab/autocompletado/ (deepseek-r1:8b, sacados antes con Ollama).
"""

import json
import os
import random
from pathlib import Path

import manimgx as m

RAIZ = Path(__file__).resolve().parents[2]
DATOS = RAIZ / "src/componentes/escenas/datos"
TEMA = os.environ.get("TEMA", "blanca")
DISENO = os.environ.get("DISENO") == "1"
# El camino del autocompletado; mientras no esté el árbol completo, se puede apuntar a otro archivo.
AUTOCOMPLETADO = Path(os.environ.get("AUTOCOMPLETADO", DATOS / "autocompletado-es.json"))

COLORES = {
    "blanca": {
        "fondo": "#ffffff", "tinta": "#15171c", "tinta2": "#3d424b", "tenue": "#626875",
        "borde": "#c7cdd7", "rejilla": "#eef1f6", "acento": "#2457d6", "dato": "#86a9e6",
        "verdadero": "#1e7b45", "falso": "#c62828", "primario": "#15171c", "primario_tinta": "#ffffff",
    },
    "negra": {
        "fondo": "#0e121a", "tinta": "#eceff4", "tinta2": "#b9c0cc", "tenue": "#8b93a1",
        "borde": "#3a404c", "rejilla": "#1a1f29", "acento": "#f5c451", "dato": "#5b9be6",
        "verdadero": "#83c167", "falso": "#fc6255", "primario": "#eceff4", "primario_tinta": "#0a0d13",
    },
}[TEMA]
FONDO, TINTA, TINTA2, TENUE = (COLORES[k] for k in ("fondo", "tinta", "tinta2", "tenue"))
BORDE, REJILLA, ACENTO, DATO = (COLORES[k] for k in ("borde", "rejilla", "acento", "dato"))
VERDADERO, FALSO, PRIMARIO, PRIMARIO_TINTA = (COLORES[k] for k in ("verdadero", "falso", "primario", "primario_tinta"))

m.config.background_color = FONDO


# ── Datos ────────────────────────────────────────────────────────────────────────────────────

def frase_de_muestreo(ident: str) -> dict:
    datos = json.loads((DATOS / "muestreo-es.json").read_text())
    return next(f for f in datos["frases"] if f["id"] == ident)


def distribucion(frase: dict, t: float = 1.0) -> list[tuple[str, float, str]]:
    """Igual que src/componentes/escenas/muestreo.ts: la temperatura se aplica token por token
    y se suman los caminos que escriben la misma palabra. Devuelve (palabra, p, veredicto)."""
    total: dict[str, float] = {}

    def bajar(nodo: int, p: float) -> None:
        opciones = frase["nodos"][nodo]
        pesos = [o["p"] ** (1 / t) for o in opciones]
        suma = sum(pesos)
        for o, w in zip(opciones, pesos):
            q = p * w / suma
            if "fin" in o:
                total[o["fin"]] = total.get(o["fin"], 0) + q
            else:
                bajar(o["a"], q)

    bajar(0, 1.0)
    return [(w, p, frase["veredictos"].get(w, "")) for w, p in sorted(total.items(), key=lambda x: -x[1])]


def color_de(veredicto: str) -> str:
    return {"verdadero": VERDADERO, "falso": FALSO}.get(veredicto, TENUE)


def pct(p: float) -> str:
    """Porcentaje con coma decimal y sin decimales de más: 48 %, 2,9 %, <1 %."""
    if p >= 0.095:
        return f"{round(p * 100)} %"
    if p >= 0.01:
        return f"{p * 100:.1f} %".replace(".", ",")
    return "<1 %"


# ── Piezas ───────────────────────────────────────────────────────────────────────────────────

def texto(contenido: str, size: float = 36, color: str = TINTA, **kwargs) -> m.Text:
    """La letra de la pizarra (serif, como 3Blue1Brown)."""
    return m.Text(contenido, font_size=size, color=color, disable_ligatures=True, **kwargs)


def ui(contenido: str, size: float = 22, color: str = TINTA2, **kwargs) -> m.Text:
    """Botones y rótulos: en la página van con Google Sans Flex; en el storyboard, una sans parecida."""
    return m.Text(contenido, font="DejaVu Sans", font_size=size, color=color, **kwargs)


def alinear_base(nuevo: m.Mobject, referencia: m.Mobject) -> None:
    """Deja la primera letra de `nuevo` en la línea base de la primera de `referencia`
    (sirve si esas dos letras no bajan de la línea: nada de g, j, p, q, y)."""
    nuevo.shift(m.UP * (referencia[0].get_bottom()[1] - nuevo[0].get_bottom()[1]))


def en_linea(mob: m.Text, contenido: str, y_base: float, size: float) -> m.Text:
    """Apoya un texto en la línea base `y_base`, aunque tenga letras que bajan de la línea."""
    baja = texto("x", size).get_bottom()[1] - texto("p", size).get_bottom()[1]
    tiene_cola = any(c in "gjpqyç," for c in contenido)
    mob.shift(m.UP * (y_base - (mob.get_bottom()[1] + (baja if tiene_cola else 0))))
    return mob


def flecha(hacia) -> m.VGroup:
    """Botón redondo con una flecha dibujada (no es texto: se ve nítida a cualquier tamaño)."""
    circulo = m.Circle(radius=0.32, stroke_color=BORDE, stroke_width=2)
    punta = m.Arrow(-0.17 * hacia, 0.17 * hacia, buff=0, stroke_width=4, color=TINTA, max_tip_length_to_length_ratio=0.45)
    return m.VGroup(circulo, punta)


def boton(etiqueta: str, primario: bool = True, size: float = 22) -> m.VGroup:
    rotulo = ui(etiqueta, size, PRIMARIO_TINTA if primario else TINTA)
    alto = rotulo.height + 0.42
    caja = m.RoundedRectangle(
        corner_radius=alto / 2, width=rotulo.width + 0.8, height=alto,
        stroke_color=PRIMARIO if primario else BORDE, stroke_width=2,
        fill_color=PRIMARIO if primario else FONDO, fill_opacity=1,
    )
    return m.VGroup(caja, rotulo.move_to(caja))


def tocas(mob: m.Mobject, etiqueta: str = "tocas", lado=m.UP) -> m.VGroup:
    """Marca del storyboard: aquí hay algo que se toca."""
    if not DISENO:
        return m.VGroup()
    marco = m.DashedVMobject(
        m.RoundedRectangle(
            corner_radius=0.18, width=mob.width + 0.36, height=mob.height + 0.3,
            stroke_color=ACENTO, stroke_width=2,
        ),
        num_dashes=36,
    ).move_to(mob)
    rotulo = texto(etiqueta, 22, ACENTO, slant=m.ITALIC).next_to(marco, lado, buff=0.08)
    if lado[1] != 0:
        rotulo.align_to(marco, m.RIGHT)
    return m.VGroup(marco, rotulo)


def en_vivo(junto_a: m.Mobject) -> m.VGroup:
    """Marca del storyboard: esto cambia al instante con lo que tocas (en la página, sin esperar)."""
    if not DISENO:
        return m.VGroup()
    punto = m.Dot(radius=0.06, color=ACENTO)
    rotulo = texto("en vivo", 22, ACENTO, slant=m.ITALIC)
    return m.VGroup(punto, rotulo).arrange(m.RIGHT, buff=0.1).next_to(junto_a, m.RIGHT, buff=0.25)


def narracion(contenido: str) -> m.Text:
    """La narración va debajo de la pizarra en la página; en el storyboard, abajo del cuadro."""
    return texto(contenido, 26, TENUE).move_to([0, -3.62, 0])


def hueco(ancho: float, alto: float, color: str = ACENTO) -> m.DashedVMobject:
    return m.DashedVMobject(
        m.RoundedRectangle(corner_radius=0.1, width=ancho, height=alto, stroke_color=color, stroke_width=2.5),
        num_dashes=40,
    )


class Pizarra(m.Scene):
    """Base: cuadrícula de pizarra y una narración que se cambia entre momentos."""

    def momento(self, nombre: str) -> None:
        self.next_section(nombre)
        self.nombre_momento = nombre

    def cierre(self, segundos: float = 1.0) -> None:
        """Cierra el momento quieto. Con FOTOS=archivo, anota el instante para sacar su foto."""
        self.wait(segundos)
        if os.environ.get("FOTOS"):
            with open(os.environ["FOTOS"], "a") as f:
                f.write(f"{type(self).__name__}\t{self.time - 0.05:.2f}\t{self.nombre_momento}\n")

    def setup(self) -> None:
        rejilla = m.NumberPlane(
            x_range=[-8, 8, 0.5], y_range=[-4.5, 4.5, 0.5],
            background_line_style={"stroke_color": REJILLA, "stroke_width": 1},
            axis_config={"stroke_color": REJILLA, "stroke_width": 1},
        )
        self.add(rejilla)
        self.leyenda: m.Text | None = None

    def narrar(self, contenido: str) -> None:
        nueva = narracion(contenido)
        salida = [m.FadeOut(self.leyenda, shift=m.UP * 0.12)] if self.leyenda is not None else []
        self.play(*salida, m.FadeIn(nueva, shift=m.UP * 0.12), run_time=0.6)
        self.leyenda = nueva


# ── Canvas 1 · Parada 1: «Pregúntale otra vez» ───────────────────────────────────────────────

class PreguntaleOtraVez(Pizarra):
    """La misma pregunta, muchas respuestas: un contador en vivo muestra que lo más probable es falso."""

    def construct(self) -> None:
        frase = frase_de_muestreo("turquia")
        dist = distribucion(frase)
        filas = [d for d in dist if d[0] in ("Estambul", "Ankara", "una")]
        otras_p = 1 - sum(p for _, p, _ in filas)
        filas.append(("otras", otras_p, ""))
        # 100 preguntas con las probabilidades reales (semilla fija: el storyboard sale igual cada vez).
        azar = random.Random(7)
        nombres = [w for w, _, _ in filas]
        sorteo = azar.choices([w for w, _, _ in dist], weights=[p for _, p, _ in dist], k=100)
        cien = {w: sum(1 for x in sorteo if (x if x in nombres else "otras") == w) for w in nombres}
        falsas_100 = sum(1 for x in sorteo if frase["veredictos"].get(x) == "falso")

        # La frase con el hueco.
        enunciado = texto("La capital de Turquía es", 46)
        caja = hueco(3.3, enunciado.height + 0.5)
        caja.next_to(enunciado, m.RIGHT, buff=0.3)
        signo = texto("?", 46, ACENTO).move_to(caja)
        alinear_base(signo, enunciado)
        linea = m.VGroup(enunciado, caja, signo).move_to([0, 2.75, 0])
        pedido = ui("Le pides al modelo que complete:", 20, TENUE).next_to(linea, m.UP, buff=0.3).align_to(linea, m.LEFT)

        # Los botones.
        preguntar = boton("Preguntar").move_to([-4.6, 0.75, 0])
        cien_veces = boton("Preguntar 100 veces", primario=False).move_to([-4.6, -0.35, 0])
        explica = ui("Cada vez es una pregunta nueva\nal mismo modelo.", 18, TENUE).move_to([-4.6, -1.45, 0])

        # El tablero: lo que respondió. Columnas: palabra, barra, cuántas veces, veredicto.
        x_palabra, x_barra, ancho_barra, x_cifra, x_marca = -0.9, 1.15, 3.2, 4.75, 5.3
        ys = [0.55, -0.15, -0.85, -1.55]
        titulo = ui("Lo que respondió", 22, TINTA)
        titulo.move_to([x_palabra + titulo.width / 2, 1.45, 0])
        rotulos, marcas, rieles = m.VGroup(), m.VGroup(), m.VGroup()
        for (w, _, v), y in zip(filas, ys):
            nombre = texto("«una…»" if w == "una" else w, 32, TINTA if w != "otras" else TENUE)
            rotulos.add(nombre.move_to([x_palabra + nombre.width / 2, y, 0]))
            dicho = v or ("sigue la frase" if w == "una" else "")
            marca = texto(dicho, 20, color_de(v), slant=m.ITALIC)
            marcas.add(marca.move_to([x_marca + marca.width / 2, y, 0]))
            rieles.add(m.Rectangle(width=ancho_barra, height=0.3, stroke_width=0, fill_color=BORDE, fill_opacity=0.3)
                       .move_to([x_barra + ancho_barra / 2, y, 0]))
        conteo: dict[str, float] = {w: 0 for w in nombres}

        def tablero() -> m.VGroup:
            grupo = m.VGroup()
            n = max(1, sum(conteo.values()))
            for (w, _, v), y in zip(filas, ys):
                c = conteo[w]
                ancho = max(ancho_barra * c / n, 0.001)
                color = color_de(v) if w != "una" else DATO
                grupo.add(m.Rectangle(width=ancho, height=0.3, stroke_width=0, fill_color=color, fill_opacity=1)
                          .move_to([x_barra + ancho / 2, y, 0]))
                grupo.add(texto(f"{round(c)}", 28, TINTA).move_to([x_cifra, y, 0]))
            total = round(sum(conteo.values()))
            preguntas = ui(f"{total} {'pregunta' if total == 1 else 'preguntas'}", 20, TENUE)
            grupo.add(preguntas.move_to([6.6 - preguntas.width / 2, 1.45, 0]))
            return grupo

        vivo = m.always_redraw(tablero)

        # 1 · La pregunta.
        self.momento("1 · La pregunta")
        self.play(m.FadeIn(pedido), m.Write(enunciado), m.Create(caja), m.FadeIn(signo), run_time=1.6)
        self.play(m.FadeIn(preguntar, shift=m.UP * 0.1), m.FadeIn(cien_veces, shift=m.UP * 0.1), m.FadeIn(explica),
                  m.FadeIn(titulo), m.FadeIn(rotulos), m.FadeIn(marcas), m.FadeIn(rieles), run_time=1.0)
        self.add(vivo)
        self.add(tocas(preguntar), tocas(cien_veces, lado=m.DOWN), en_vivo(titulo))
        self.narrar("Toca «Preguntar»: el modelo completa la frase.")
        self.cierre(1.0)

        def responder(palabra: str) -> m.VGroup:
            escrita = texto(palabra, 46, color_de(frase["veredictos"].get(palabra, "")))
            escrita.move_to(caja)
            alinear_base(escrita, enunciado)
            veredicto = frase["veredictos"].get(palabra, "")
            sello = texto(veredicto, 24, color_de(veredicto), slant=m.ITALIC).next_to(caja, m.DOWN, buff=0.18)
            self.play(m.FadeOut(signo), m.Write(escrita), caja.animate.set_stroke(color=color_de(veredicto)), run_time=0.9)
            conteo[palabra] += 1
            self.play(m.FadeIn(sello, shift=m.DOWN * 0.1), run_time=0.4)
            return m.VGroup(escrita, sello)

        # 2 · Una respuesta.
        self.momento("2 · Una respuesta")
        primera = responder("Ankara")
        self.narrar("Respondió «Ankara». Verdadero.")
        self.cierre(1.0)

        # 3 · Otra vez.
        self.momento("3 · Otra vez")
        self.play(m.FadeOut(primera), caja.animate.set_stroke(color=ACENTO), m.FadeIn(signo), run_time=0.5)
        segunda = responder("Estambul")
        self.narrar("Misma pregunta, otra respuesta: «Estambul». Falso, y con total seguridad.")
        self.play(m.Indicate(segunda[1], color=FALSO, scale_factor=1.2), run_time=0.8)
        self.cierre(1.0)

        # 4 · Cien veces.
        self.momento("4 · Cien veces")
        self.play(m.FadeOut(segunda), caja.animate.set_stroke(color=ACENTO), m.FadeIn(signo), run_time=0.5)
        inicio = dict(conteo)
        avance = m.ValueTracker(0)

        def llenar(mob: m.Mobject) -> None:
            for w in nombres:
                conteo[w] = inicio[w] + (cien[w] - inicio[w]) * avance.get_value()

        dummy = m.VGroup().add_updater(llenar)
        self.add(dummy)
        self.play(avance.animate.set_value(1), run_time=2.4, rate_func=m.linear)
        self.remove(dummy)
        resumen = m.VGroup(
            texto(f"{falsas_100} de 100", 40, FALSO),
            ui("veces respondió algo falso", 20, TINTA2),
        ).arrange(m.DOWN, buff=0.12).move_to([-4.6, -2.45, 0])
        self.play(m.FadeOut(explica), m.FadeIn(resumen, shift=m.UP * 0.15), run_time=0.7)
        self.narrar(f"Lo más probable para el modelo es falso: Estambul ({pct(dist[0][1])}). ¿Por qué? Parada 2.")
        self.cierre(1.5)


# ── Canvas 2 · Parada 2: la pizarra por momentos ─────────────────────────────────────────────

class PizarraMecanismo(Pizarra):
    """Tokens → probabilidades → tirar el dado → temperatura, con datos reales del planeta más caliente."""

    TOKENS = ["El", " planeta", " más", " caliente", " del", " sistema", " solar", " es"]  # o200k (GPT-4o)
    YS = (1.55, 0.95, 0.35, -0.25, -0.85)
    X_MARCA, X_PALABRA, X_BARRA, ANCHO = -6.45, -2.2, -1.9, 5.6

    def construct(self) -> None:
        frase = frase_de_muestreo("planeta")
        t = m.ValueTracker(1.0)
        crece = m.ValueTracker(0.0)
        tiradas: dict[str, int] = {}
        foco = {"i": -1}

        def filas_en(temp: float) -> list[tuple[str, float, str]]:
            d = distribucion(frase, temp)
            return d[:5]

        base = filas_en(1.0)

        # Momentos (la barra de capítulos de DESIGN.md).
        nombres = ["La frase", "Probabilidades", "Elegir", "Temperatura"]
        capitulos = m.VGroup(*[ui(f"{k + 1}  {n}", 18, TENUE) for k, n in enumerate(nombres)]).arrange(m.RIGHT, buff=0.6)
        rayas = m.VGroup(*[m.Line([0, 0, 0], [c.width, 0, 0], stroke_width=3, color=BORDE).next_to(c, m.UP, buff=0.12) for c in capitulos])
        flechas = m.VGroup(flecha(m.LEFT), flecha(m.RIGHT))
        barra_momentos = m.VGroup(capitulos, rayas).move_to([0.6, -2.95, 0])
        flechas[0].next_to(barra_momentos, m.LEFT, buff=0.6)
        flechas[1].next_to(barra_momentos, m.RIGHT, buff=0.6)

        def momento(k: int) -> list[m.Animation]:
            return [
                *[capitulos[j].animate.set_color(TINTA if j == k else TENUE) for j in range(4)],
                *[rayas[j].animate.set_color(ACENTO if j <= k else BORDE) for j in range(4)],
            ]

        # 1 · La frase, cortada en tokens (cortes de GPT-4o), con el hueco al final.
        piezas = m.VGroup()
        for tk in self.TOKENS:
            letras = texto(tk.strip(), 32)
            caja = m.RoundedRectangle(corner_radius=0.08, width=letras.width + 0.3, height=0.74, stroke_color=BORDE, stroke_width=2)
            piezas.add(m.VGroup(caja, letras.move_to(caja)))
        piezas.arrange(m.RIGHT, buff=0.1)
        for p in piezas:  # Todas las palabras sobre la misma línea base.
            alinear_base(p[1], piezas[0][1])
        vacio = hueco(2.1, 0.74)
        signo = texto("?", 32, ACENTO)
        fila = m.VGroup(piezas, vacio).arrange(m.RIGHT, buff=0.1).move_to([0, 2.75, 0])
        signo.move_to(vacio)
        alinear_base(signo, piezas[0][1])
        nota = ui("cortes de GPT-4o · probabilidades de deepseek-r1:8b", 16, TENUE).to_corner(m.UR, buff=0.25)

        self.add(barra_momentos, flechas, nota)
        # La marca de las flechas va solo en el primer momento: después ya se sabe y estorbaría.
        marca_flechas = tocas(flechas[1], "tocas para avanzar", lado=m.UP)
        self.add(marca_flechas)
        self.momento("1 · La frase")
        self.play(*momento(0), run_time=0.3)
        self.play(m.LaggedStart(*[m.FadeIn(p, shift=m.UP * 0.15) for p in piezas], lag_ratio=0.15), run_time=1.6)
        self.play(m.Create(vacio), m.FadeIn(signo), run_time=0.6)
        self.narrar("El texto se corta en tokens: pedazos de palabra. ¿Cuál viene después?")
        self.cierre(1.0)

        # 2 · Una probabilidad para cada palabra posible.
        etiquetas, marcas, rieles = m.VGroup(), m.VGroup(), m.VGroup()
        for (w, _, v), y in zip(base, self.YS):
            e = texto(w, 30)
            etiquetas.add(e.move_to([self.X_PALABRA - e.width / 2, y, 0]))
            mk = texto(v or "sigue la frase", 20, color_de(v), slant=m.ITALIC)
            marcas.add(mk.move_to([self.X_MARCA + mk.width / 2, y, 0]))
            rieles.add(m.Rectangle(width=self.ANCHO, height=0.3, stroke_width=0, fill_color=BORDE, fill_opacity=0.3)
                       .move_to([self.X_BARRA + self.ANCHO / 2, y, 0]))

        def barras() -> m.VGroup:
            grupo = m.VGroup()
            for k, ((w, p, v), y) in enumerate(zip(filas_en(t.get_value()), self.YS)):
                ancho = max(self.ANCHO * p * crece.get_value(), 0.001)
                color = ACENTO if k == foco["i"] else (color_de(v) if v else DATO)
                grupo.add(m.Rectangle(width=ancho, height=0.3, stroke_width=0, fill_color=color, fill_opacity=1)
                          .move_to([self.X_BARRA + ancho / 2, y, 0]))
                grupo.add(texto(pct(p), 24, TINTA2).move_to([self.X_BARRA + self.ANCHO + 0.55, y, 0]))
                if tiradas.get(w):
                    grupo.add(ui(f"×{tiradas[w]}", 18, ACENTO).move_to([self.X_BARRA + self.ANCHO + 1.35, y, 0]))
            return grupo

        self.momento("2 · Probabilidades")
        self.play(*momento(1), m.FadeOut(marca_flechas), run_time=0.3)
        self.add(rieles, m.always_redraw(barras))
        self.play(m.LaggedStart(*[m.TransformFromCopy(signo, e) for e in etiquetas], lag_ratio=0.12), m.FadeIn(rieles), run_time=1.4)
        self.play(crece.animate.set_value(1), m.LaggedStart(*[m.FadeIn(mk) for mk in marcas], lag_ratio=0.1), run_time=1.6)
        self.narrar("El modelo le da una probabilidad a cada palabra que podría seguir.")
        self.cierre(1.0)

        # 3 · Tirar el dado: la ruleta reparte el espacio según la probabilidad.
        x0, largo, y_ruleta = -5.2, 8.0, -1.75
        tramos = m.VGroup()
        cursor = x0
        for w, p, v in base:
            ancho = largo * p
            tramos.add(m.Rectangle(width=ancho, height=0.36, stroke_color=FONDO, stroke_width=1.5,
                                   fill_color=color_de(v) if v else DATO, fill_opacity=0.9).move_to([cursor + ancho / 2, y_ruleta, 0]))
            cursor += ancho
        tirar = boton("Tirar el dado").next_to(tramos, m.RIGHT, buff=0.5)
        cae_en = x0 + largo * 0.31  # Un punto al azar dentro del tramo de Venus.
        pin = m.Triangle(fill_color=ACENTO, fill_opacity=1, stroke_width=0).scale(0.12).rotate(m.PI).move_to([cae_en, y_ruleta + 0.36, 0])

        self.momento("3 · Elegir")
        self.play(*momento(2), run_time=0.3)
        self.play(m.FadeIn(tramos), m.FadeIn(tirar), run_time=0.8)
        marcas_dado = m.VGroup(tocas(tirar, lado=m.UP))
        self.add(marcas_dado)
        self.play(m.FadeIn(pin, shift=m.RIGHT * 2), run_time=0.7)
        foco["i"] = 0
        tiradas.update({"Venus": 3, "Júpiter": 1, "Mercurio": 1})
        elegida = texto("Venus", 32, VERDADERO).move_to(vacio)
        alinear_base(elegida, piezas[0][1])
        self.play(m.TransformFromCopy(etiquetas[0], elegida), m.FadeOut(signo), vacio.animate.set_stroke(color=VERDADERO), run_time=0.9)
        marcas_dado.add(en_vivo(m.Dot([self.X_BARRA + self.ANCHO + 1.6, self.YS[0], 0], radius=0.01, fill_opacity=0)))
        self.add(marcas_dado)
        self.narrar("Tiras el dado: cada palabra ocupa un tramo según su probabilidad. Salió «Venus».")
        self.cierre(1.0)

        # 4 · La temperatura reparte distinto.
        formula = m.MathTex(r"\tilde{p}_i = \frac{p_i^{1/T}}{\sum_j p_j^{1/T}}", tex_to_color_map={"T": ACENTO},
                            color=TINTA, font_size=40).move_to([-4.3, -1.75, 0])
        regla = m.NumberLine(x_range=[0, 2, 1], length=3.4, color=TENUE, include_tip=False).move_to([2.9, -1.75, 0])
        numeros = m.VGroup(*[texto(str(v), 22, TENUE).next_to(regla.n2p(v), m.DOWN, buff=0.15) for v in (0, 1, 2)])

        def lectura() -> m.VGroup:
            igual = m.MathTex("T", "=", color=TINTA, font_size=40)
            igual[0].set_color(ACENTO)
            valor = texto(f"{t.get_value():.1f}".replace(".", ","), 38)
            valor.next_to(igual, m.RIGHT, buff=0.18).align_to(igual[0], m.DOWN)
            return m.VGroup(igual, valor).move_to([-0.6, -1.72, 0])

        def perilla() -> m.Dot:
            return m.Dot(regla.n2p(t.get_value()), radius=0.12, color=ACENTO)

        self.momento("4 · Temperatura")
        self.play(*momento(3), m.FadeOut(tramos), m.FadeOut(tirar), m.FadeOut(pin), m.FadeOut(elegida), m.FadeOut(marcas_dado),
                  vacio.animate.set_stroke(color=ACENTO), m.FadeIn(signo), run_time=0.6)
        foco["i"] = -1
        tiradas.clear()
        self.play(m.Write(formula), m.FadeIn(regla), m.FadeIn(numeros), run_time=1.2)
        perilla_viva = m.always_redraw(perilla)
        self.add(m.always_redraw(lectura), perilla_viva)
        marca_perilla = tocas(m.VGroup(regla, numeros), "arrastras", lado=m.DOWN)
        self.add(marca_perilla)
        self.play(t.animate.set_value(0.3), run_time=1.6)
        self.narrar("T baja: casi siempre gana la más probable (Venus, 98 %).")
        self.cierre(1.0)

        self.momento("4 · Temperatura alta")
        self.play(t.animate.set_value(1.8), run_time=1.6)
        self.narrar("T alta: lo improbable gana terreno. Elige por probabilidad, no por verdad.")
        self.cierre(1.0)


# ── Canvas 3 · Parada 5: «Autocompletado» ────────────────────────────────────────────────────

class Autocompletado(Pizarra):
    """Como el teclado del celular: eliges la palabra sugerida y la frase crece. Eso es un LLM."""

    def construct(self) -> None:
        datos = json.loads(AUTOCOMPLETADO.read_text())
        camino: list[tuple[str, float, list[dict]]] = []  # (palabra elegida, p, sugerencias que había)
        nivel = datos["opciones"]
        while nivel:
            elegida = nivel[0]
            camino.append((elegida["palabra"], elegida["p"], nivel))
            nivel = elegida.get("sigue") or []

        izquierda = -6.2
        escrito = datos["frase"]
        frase = texto(escrito, 52).move_to([0, 2.45, 0])
        frase.align_to([izquierda, 0, 0], m.LEFT)
        y_linea = frase[0].get_center()[1]
        cursor = m.Rectangle(width=0.05, height=0.7, stroke_width=0, fill_color=ACENTO, fill_opacity=1)
        cursor.move_to([frase.get_right()[0] + 0.16, y_linea, 0])

        # El teclado: la barra de sugerencias y las teclas, apenas dibujadas.
        teclas = m.VGroup()
        for fila_n, (n, sangria) in enumerate(((10, 0.0), (9, 0.27), (7, 0.81))):
            for k in range(n):
                teclas.add(m.RoundedRectangle(corner_radius=0.07, width=0.46, height=0.5, stroke_color=BORDE, stroke_width=1.2)
                           .move_to([-5.6 + sangria + k * 0.54 + 0.23, -1.55 - fila_n * 0.62, 0]))
        y_chips = -0.25

        def chips(sugerencias: list[dict]) -> m.VGroup:
            grupo = m.VGroup()
            for k, s in enumerate(sugerencias):
                palabra = texto(s["palabra"], 36, TINTA)
                ancho = max(palabra.width + 0.7, 2.1)
                caja = m.RoundedRectangle(corner_radius=0.16, width=ancho, height=1.2,
                                          stroke_color=ACENTO if k == 0 else BORDE, stroke_width=2.5 if k == 0 else 1.6,
                                          fill_color=FONDO, fill_opacity=1)
                palabra.move_to(caja).shift(m.UP * 0.2)
                # La barrita y su porcentaje, en la misma línea, dentro de la tecla.
                riel = m.Rectangle(width=ancho - 1.25, height=0.09, stroke_width=0, fill_color=BORDE, fill_opacity=0.35)
                riel.move_to(caja).shift(m.DOWN * 0.3 + m.LEFT * 0.37)
                barra = m.Rectangle(width=max((ancho - 1.25) * s["p"], 0.01), height=0.09, stroke_width=0, fill_color=ACENTO, fill_opacity=1)
                barra.align_to(riel, m.LEFT).match_y(riel)
                cifra = ui(pct(s["p"]), 18, TENUE).next_to(riel, m.RIGHT, buff=0.12)
                grupo.add(m.VGroup(caja, palabra, riel, barra, cifra))
            return grupo.arrange(m.RIGHT, buff=0.25).move_to([-2.9, y_chips, 0])

        # El tablero: la probabilidad de toda la frase, multiplicando paso a paso.
        titulo = ui("Probabilidad de la frase", 20, TINTA)
        titulo.move_to([1.6 + titulo.width / 2, 1.0, 0])
        cuentas = m.VGroup()

        def poner_cuenta(pasos: list[tuple[str, float]]) -> m.VGroup:
            """La probabilidad de la frase es el producto de cada paso: × 39 % × 35 % … = 4,9 %."""
            x_por, x_palabra, x_cifra = titulo.get_left()[0] + 0.12, titulo.get_left()[0] + 0.5, titulo.get_left()[0] + 2.75
            y = titulo.get_center()[1] - 0.62
            lineas = m.VGroup()
            total = 1.0
            for k, (w, p) in enumerate(pasos):
                total *= p
                if k > 0:
                    lineas.add(texto("×", 26, TENUE).move_to([x_por, y + 0.1, 0]))
                palabra = texto(w, 28, TINTA)
                lineas.add(en_linea(palabra.move_to([x_palabra + palabra.width / 2, 0, 0]), w, y, 28))
                cifra = texto(pct(p), 26, TINTA2)
                lineas.add(en_linea(cifra.move_to([x_cifra + cifra.width / 2, 0, 0]), pct(p), y, 26))
                y -= 0.5
            raya = m.Line([x_palabra, y + 0.3, 0], [x_cifra + 1.2, y + 0.3, 0], stroke_width=1.5, color=BORDE)
            igual = m.VGroup(*[m.Line([x_por - 0.1, y - 0.05 + d, 0], [x_por + 0.1, y - 0.05 + d, 0], stroke_width=2.5, color=TENUE) for d in (0.05, -0.05)])
            resultado = texto(pct(total), 36, ACENTO)
            en_linea(resultado.move_to([x_cifra + resultado.width / 2, 0, 0]), pct(total), y - 0.2, 36)
            return m.VGroup(lineas, raya, igual, resultado)

        # 1 · Sugiere.
        self.momento("1 · Sugiere")
        self.play(m.Write(frase), run_time=1.0)
        self.add(cursor)
        actuales = chips(camino[0][2])
        self.play(m.FadeIn(teclas, lag_ratio=0.01), m.LaggedStart(*[m.FadeIn(c, shift=m.UP * 0.15) for c in actuales], lag_ratio=0.15), run_time=1.2)
        marca_chips = tocas(actuales, "tocas una", lado=m.UP)
        cuentas = ui("Elige una palabra para empezar.", 18, TENUE)
        cuentas.next_to(titulo, m.DOWN, buff=0.3).align_to(titulo, m.LEFT)
        self.add(titulo, marca_chips, cuentas)
        self.narrar("Como el teclado del celular: sugiere las palabras que suelen venir después.")
        self.cierre(1.0)

        # 2 · Eliges: la palabra sube a la frase y aparecen sugerencias nuevas.
        def elegir(k: int) -> None:
            nonlocal frase, escrito, actuales, cuentas
            palabra, p, _ = camino[k]
            escrito = f"{escrito} {palabra}"
            nueva = texto(escrito, 52)
            nueva.align_to(frase, m.LEFT)
            alinear_base(nueva, frase)
            cola = m.VGroup(*nueva[len(escrito.replace(" ", "")) - len(palabra):])
            self.play(m.TransformFromCopy(actuales[0][1], cola),
                      cursor.animate.move_to([nueva.get_right()[0] + 0.16, y_linea, 0]), run_time=0.8)
            self.remove(frase, cola)
            frase = nueva
            self.add(frase)
            nuevas_cuentas = poner_cuenta([(w, q) for w, q, _ in camino[: k + 1]])
            siguientes = camino[k + 1][2] if k + 1 < len(camino) else []
            animaciones = [m.FadeOut(actuales), m.FadeOut(cuentas), m.FadeIn(nuevas_cuentas)]
            if siguientes:
                otras = chips(siguientes)
                animaciones.append(m.LaggedStart(*[m.FadeIn(c, shift=m.UP * 0.15) for c in otras], lag_ratio=0.15))
            else:
                otras = m.VGroup()
                animaciones.append(m.FadeOut(marca_chips))
            self.play(*animaciones, run_time=0.8)
            actuales, cuentas = otras, nuevas_cuentas

        self.momento("2 · Eliges")
        elegir(0)
        self.add(en_vivo(titulo))
        self.narrar(f"Elegiste «{camino[0][0]}»: sube a la frase y el modelo vuelve a sugerir.")
        self.cierre(1.0)

        # 3 · Siempre la primera.
        self.momento("3 · Siempre la primera")
        for k in range(1, len(camino)):
            elegir(k)
        self.narrar("Eligiendo siempre la primera sale la frase más común.")
        self.cierre(1.0)

        # 4 · La idea.
        self.momento("4 · La idea")
        idea = m.VGroup(
            texto("Un autocompletado gigante:", 36),
            texto("no sabe si es verdad;", 36),
            texto("sabe qué suele venir después.", 36),
        ).arrange(m.DOWN, aligned_edge=m.LEFT, buff=0.2).move_to([-3.2, -0.9, 0])
        self.play(m.FadeOut(actuales), m.FadeOut(teclas), m.FadeIn(idea, shift=m.UP * 0.2), run_time=0.9)
        self.narrar("Prueba otro camino: elige una sugerencia rara y mira cómo cae la probabilidad.")
        self.cierre(1.5)
