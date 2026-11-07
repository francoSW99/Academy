# Genera docs/roadmap/ds/propuesta-ds-v1.md (pedido 103) desde estructura.py, y valida ids, repasos y requisitos.
import importlib.util, os, sys
AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
from estructura import ML, DS, DESTINOS

spec = importlib.util.spec_from_file_location("v3", os.path.join(AQUI, "estructura_ai.py"))
v3 = importlib.util.module_from_spec(spec); spec.loader.exec_module(v3)
lecs = lambda B: [l for _, mods in B for _, _, ls in mods for l in ls]
ids = {"ai": {"python-lenguaje-tecnico", "m-leer-papers", "m-publicar", "m-sft", "m-entrar", "desplegar"} | {l[0] for l in lecs(v3.AI) if l[0] != "→"},
       "ml": {l[0] for l in lecs(ML)}, "ds": {l[0] for l in lecs(DS)}}
for B in (ML, DS):
    x = [l[0] for l in lecs(B)]
    assert len(x) == len(set(x)), "id repetido"
assert not ({l[0] for l in lecs(v3.ML)} - ids["ml"]), "se perdió una lección de la v3 de ML"
for l in lecs(ML) + lecs(DS):
    if len(l) == 5:
        esp, i = DESTINOS[l[0]].split("/")
        assert i in ids[esp], f"{l[0]} apunta a una lección que no existe: {DESTINOS[l[0]]}"

def filas(bloques):
    out, n, m = [], 0, 0
    for bloque, mods in bloques:
        out.append(f"\n### {bloque}\n")
        for nombre, aviso, ls in mods:
            m += 1
            out.append(f"\n**Módulo {m} · {nombre}**\n")
            if aviso: out.append(f"\n> {aviso}\n")
            out.append("\n| # | Lección | Esencial | Origen |\n|---|---|---|---|")
            for l in ls:
                if len(l) == 5:
                    marca = "↺" if l[4] == "repaso" else "⇢"
                    out.append(f"| {marca} | *{l[1]}* | {l[4]} | {l[3]} · `{DESTINOS[l[0]]}` |")
                else:
                    n += 1
                    out.append(f"| {n} | {l[1]} | {'sí' if l[2] else 'no'} | {l[3]} |")
    return "\n".join(out), n, m

ds_md, nds, mds = filas(DS)
p = [l for l in lecs(DS) if len(l) == 4]
eds = sum(l[2] for l in p)
rds = sum(1 for l in lecs(DS) if len(l) == 5 and l[4] == "repaso")
qds = sum(1 for l in lecs(DS) if len(l) == 5 and l[4] == "requisito")
nml = sum(1 for l in lecs(ML) if len(l) == 4)

doc = f"""# Propuesta de temario de Data Science, versión 1

> **Estado:** **aprobada y publicada el 2026-11-07 (pedido 104)** en https://academy.woorky.app/es/data-science/, junto con sus 3 cambios para ML y DL.
>
> **Cómo se hizo:** sin subagentes. Sale de tus 5 decisiones ([feedback.md](feedback.md)), de cubrir cada punto de la oferta de data scientist de NeuralWorks ([mapa-neuralworks-ds.md](mapa-neuralworks-ds.md)), de los 9 temarios verificados en el [README](README.md) y de la regla de reparto con ML ([ml-vs-ds.md](../ml-dl/ml-vs-ds.md)).
>
> **Se genera** desde `temario/estructura.py` (bloque `DS`) con `gen_doc_ds.py`, que comprueba que cada repaso y cada requisito apunten a una lección que existe.

## Cifras

- **Data Science:** {nds} lecciones ({eds} esenciales) en {mds} módulos, más {rds} repasos y {qds} requisitos. Hoy el sitio muestra 24.
- **ML y DL:** pasa de 114 a {nml} lecciones, por los cambios de abajo.
- **Repaso (↺):** una lección corta, con enlace a la lección completa en el otro curso.
- **Requisito (⇢):** un tema que Data Science necesita entero. Se estudia en ML y DL, sin repetirlo.

## Tus decisiones (pedido 103)

| # | Decisión | Cómo queda |
|---|---|---|
| 1 | Gestionar datos, sin ser ingeniero de BI | Nuevo módulo «Gestionar datos», con 7 lecciones: SQL, SQL avanzado, modelar datos, warehouse y lake, ETL y ELT, Spark y datos en la nube |
| 2 | Dos caminos | **Camino 1 · Negocio y producto** (como el data scientist de NeuralWorks, integrado con el negocio) y **Camino 2 · Investigación con datos** (causa y efecto con el rigor de un paper) |
| 3 | Curso general, con un proyecto de producto | Sale la especialización en energía. El proyecto del Camino 1 es un experimento A/B de producto |
| 4 | BI, solo lo justo | Una sola lección: «Dashboards y BI, lo justo» |
| 5 | Cubrir la oferta de NeuralWorks | Cada punto que se puede enseñar tiene su lección: ver el [mapa](mapa-neuralworks-ds.md) |

## Lo que cambia en ML y DL

1. **Nueva lección en «Visión»:** «Imágenes como datos: píxeles, OpenCV y preprocesamiento». La oferta pide OpenCV.
2. **«Computer vision: detección (YOLO, Detectron2), segmentación y pose»:** el título nombra las librerías que pide la oferta.
3. **SQL avanzado y Spark pasan a Data Science.** Gestionar datos es parte del oficio del data scientist; el ML engineer lo pide como requisito («Datos a escala») y conserva el streaming, que ahora se llama «Streaming y colas de mensajes», y la infraestructura como código.

## Los proyectos (uno por camino)

### Camino 1 · Tu experimento A/B de producto

Un cambio en un producto digital, por ejemplo el registro de una app. Se mide con un experimento y termina en una recomendación para quien decide.

| Hito | Qué se logra | Comprobación | Lecciones |
|---|---|---|---|
| P0 | La decisión, su métrica principal y sus métricas guardianas | Quedan escritas antes de ver los datos | elegir-el-problema, metricas-de-negocio, hipotesis-y-plan |
| P1 | Entender el producto con quienes lo conocen | Una lista de preguntas, facts y opiniones, separadas | entender-con-expertos |
| P2 | El diseño: qué se aleatoriza, cuántos usuarios y cuánto tiempo | El tamaño de muestra sale de un cálculo de potencia | experimentar-en-serio, experimentos-ab |
| P3 | Los datos, con SQL y validados | Los tests de calidad pasan, y los grupos están balanceados | sql-avanzado, validar-datos |
| P4 | El efecto, con su incertidumbre | Intervalo y p-valor. Si miras segmentos, controlas los falsos descubrimientos | intervalos-y-tests, bootstrap, muchas-pruebas |
| P5 | La decisión | Comparas costo y beneficio con el valor esperado, y explicas a quién conviene el cambio | decidir-con-predicciones, personalizacion |
| P6 | Un reporte reproducible y un dashboard mínimo | Otra persona lo vuelve a correr y le da lo mismo | reportes-reproducibles, bi-lo-justo |
| P7 | La recomendación, presentada | La explicas en 5 minutos a alguien que decide y respondes sus preguntas | storytelling |

**Los datos:** un dataset abierto de un experimento real; si no hay uno bueno, uno simulado con Monte Carlo (simulacion-monte-carlo). Qué dataset usar queda por verificar.

### Camino 2 · Tu estudio causal

Una pregunta de causa y efecto con datos públicos, sin experimento. Por ejemplo, qué efecto tuvo un cambio de política o de precio, comparando a quienes lo vivieron con quienes no.

| Hito | Qué se logra | Comprobación | Lecciones |
|---|---|---|---|
| C0 | La pregunta y la estrategia (diferencias en diferencias, variable instrumental o discontinuidad) | Quedan pre-registradas antes de estimar | correlacion-y-causalidad, estudio-reproducible |
| C1 | Los datos públicos, documentados | Una ficha de los datos: origen, qué miden y sus límites | obtener-datos, limpieza-y-calidad |
| C2 | Los supuestos, revisados | Muestras que el supuesto se cumple (por ejemplo, tendencias paralelas), o lo dices si no | diferencias-en-diferencias, variables-instrumentales-y-rd |
| C3 | La estimación | Efectos fijos y errores estándar correctos | efectos-fijos-y-paneles |
| C4 | La robustez | Placebos, otras especificaciones y control de falsos descubrimientos | muchas-pruebas |
| C5 | Un informe tipo paper y un repo | Un agente limpio lo reproduce solo con el README | estudio-reproducible, repaso-publicar |

## Antes de escribir, falta verificar

- Las fuentes de pricing y de uplift.
- *Trustworthy Online Controlled Experiments*, de Kohavi y otros: es el libro de referencia de los experimentos en línea, pero no está en tu biblioteca.
- Los datasets de los 2 proyectos.
- Que el libro de Chernozhukov y otros tenga las secciones que se citan.

## Lo que decidió Fran en el pedido 104

1. **El tamaño:** aprobado.
2. **Dónde va la causalidad avanzada:** Fran pidió lo que sirva para aprender mejor. **Diferencias en diferencias pasa al tronco común,** junto a la base de la causalidad. Berkeley Data 102 enseña causalidad a todos, y es la herramienta para cuando no se puede hacer un A/B, algo que pasa seguido en negocio: por ejemplo, un cambio de precio que se aplica a una región entera. Las variables instrumentales, los paneles y double ML quedan en el Camino 2.

## Data Science
{ds_md}
"""
out = os.path.join(AQUI, "..", "docs", "roadmap", "ds", "propuesta-ds-v1.md")
open(out, "w").write(doc)
print(f"DS: {nds} lecciones, {eds} esenciales, {mds} módulos, {rds} repasos, {qds} requisitos | ML: {nml} lecciones")
