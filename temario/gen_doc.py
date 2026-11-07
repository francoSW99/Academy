# Genera docs/roadmap/ml-dl/propuesta-ml-v2.md desde estructura.py, y valida ids, desvíos y puentes.
# La v1 (propuesta-ml-v1.md) queda como historia: la generó la versión anterior de este script.
import importlib.util, os, re, sys
AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
from estructura import ML, DS

def cargar(nombre, ruta):
    spec = importlib.util.spec_from_file_location(nombre, ruta)
    mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)
    return mod

v3 = cargar("v3", os.path.join(AQUI, "estructura_ai.py"))
lecs = lambda B: [l for _, mods in B for _, _, ls in mods for l in ls]
propia = lambda l: len(l) == 4

# Validaciones: ids únicos, ninguna lección de la v3 se pierde, y los desvíos y puentes siguen apuntando a algo.
for B in (ML, DS):
    ids = [l[0] for l in lecs(B)]
    assert len(ids) == len(set(ids)), "id repetido"
ml_ids = {l[0] for l in lecs(ML)}
assert not ({l[0] for l in lecs(v3.ML)} - ml_ids), "se perdió una lección de la v3"
assert not ({l[1] for l in lecs(v3.AI) if l[0] == "→"} - ml_ids), "un desvío de AI Engineering quedó sin destino"
con = open(os.path.join(AQUI, "..", "src", "ruta", "conexiones.ts")).read()
assert not (set(re.findall(r'"ml/([a-z0-9-]+)"', con)) - ml_ids), "un puente quedó sin destino"

v3_ids = {l[0] for l in lecs(v3.ML)}

def filas(bloques, marcar_nuevas):
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
                    out.append(f"| {marca} | *{l[1]}* | {l[4]} | {l[3]} |")
                else:
                    n += 1
                    nueva = " 🆕" if marcar_nuevas and l[0] not in v3_ids else ""
                    out.append(f"| {n} | {l[1]}{nueva} | {'sí' if l[2] else 'no'} | {l[3]} |")
    return "\n".join(out), n, m

def cifras(B):
    L = lecs(B); p = [l for l in L if propia(l)]
    return sum(l[2] for l in p), sum(1 for l in L if len(l) == 5 and l[4] == "repaso"), sum(1 for l in L if len(l) == 5 and l[4] == "requisito")

ml_md, nml, mml = filas(ML, True)
ds_md, nds, mds = filas(DS, False)
eml, rml, qml = cifras(ML)
eds, rds, qds = cifras(DS)
nuevas = len([l for l in lecs(ML) if propia(l) and l[0] not in v3_ids])

FICHA = """
## Ficha de la lección «ML engineer, data scientist y los demás: quién hace qué»

Es la lección 2 de ML y DL, y Data Science la usa como repaso. Lleva las 16 fuentes de la investigación (pedidos 94 a 96). Las citas se comprobaron textuales contra la copia guardada en BrainFran. El formato es el de Academy: se lee de corrido, con un visual por idea, el ejemplo real dentro del texto y los consejos de experto al final.

**Qué se aprende:** qué hace cada rol, qué entrega, cómo trabaja y por qué los títulos engañan. Así puedes leer una oferta y saber a qué rol apunta de verdad.

### Las ideas, en orden

1. **Un proyecto de ML pasa por varias manos.** El ciclo de Chang: datos (A), entrenar (B), infraestructura para desplegar (C.1), A/B y monitoreo (C.2), y reportes para decidir (D). Google Cloud lo dice directo: «The process separates data scientists who create the model and engineers who serve the model as a prediction service».
   - **Visual:** el ciclo A a D, con cada paso pintado del color del rol que lo hace.
   - **Fuentes:** Chang (2024), p. 11; Google Cloud (2024).
2. **El data scientist entiende y decide.** «the ultimate goal of data science as improving decision making» (Provost y Fawcett). Google describe su objetivo: «build the most optimal model to solve a business problem». Para el MIT, los data scientists ayudan a «drive important decision-making processes».
   - **Ejemplo real:** en NeuralWorks, los data scientists crean los modelos.
   - **Fuentes:** Provost y Fawcett (2013), pp. 4-5; Google Cloud (2026a, 2026b); MITx e IDSS (s. f.); Coursera Staff (2026).
3. **El ML engineer lleva a producción, escala y opera.** Google: «core MLOps users, with expertise in code, ML, and deployment», con la meta de «operationalize models for deployment». En la guía de su examen de 2026, la mitad del examen pasa después de entrenar. AWS pide «build, operationalize, deploy, and maintain AI and ML solutions and pipelines».
   - **Ejemplo real:** en NeuralWorks, el ML engineer pone en producción, sirve, vigila y explica los modelos (skills 1 a 6 del mapa).
   - **Fuentes:** Google Cloud (2026a, 2026c); Amazon Web Services (2026).
4. **Comparten mucho, y los títulos engañan.** Los dos tienen ★★★ en teoría de ML, estadística, exploración y programación (Chang, tabla 1-3). Chang cuenta que en algunas empresas los ML engineers entrenan los modelos y en otras no. AWS acepta al data scientist como rol de entrada al ML engineer. CMU: «As the term unicorn suggests, such multi-talented people are rare or might not even exist»; conviene ser una persona con forma de T.
   - **Ejemplo real:** en Suncast, el ML engineer investiga los modelos y también los despliega.
   - **Fuentes:** Chang (2024), pp. 7 y 15; Amazon Web Services (2026); Kästner (2025), cap. 21.
5. **Trabajan con otra mentalidad.** CMU: el modelado es «highly iterative and exploratory» y usa «a science mindset». El software, en cambio, tiene «much more of an engineering flavor than a science flavor». Los notebooks «are usually not a good tool to develop and maintain production pipelines».
   - **Visual:** de notebook a pipeline.
   - **Fuentes:** Kästner (2025), cap. 20.
6. **En 2026, el ML engineer se mueve hacia operaciones.** Microsoft retiró su certificación de data scientist (DP-100) y la reemplazó por la de MLOps engineer (AI-300): «AI roles have evolved from model experimentation to enterprise-scale AI operations». Google y AWS sumaron IA generativa y agentes al examen de ML engineer.
   - **Fuentes:** Microsoft (2026); Google Cloud (2026c); Amazon Web Services (2026).
7. **Cómo los forman las universidades.** El núcleo de Data Science de Stanford es estadística: regresión y ANOVA, inferencia causal o diseño de experimentos, y aprendizaje estadístico. Su curso del lado ML engineer es CS 329S, Machine Learning Systems Design. En Berkeley, Data 100 es casi todo datos y estadística, y los modelos a fondo van en CS 189. Por eso Academy tiene dos cursos, y en cada uno un tema se profundiza una sola vez.
   - **Fuentes:** Stanford University (s. f.); Huyen (2022); UC Berkeley (2025); Google (s. f.).

### Al final de la lección

- **Lo que haría un experto,** un consejo por idea:
  1. Ubica cada tarea de una oferta en el ciclo A a D antes de postular.
  2. Si eliges data science, muestra decisiones que salieron de tus análisis.
  3. Si eliges ML engineering, muestra un sistema que funciona solo.
  4. Lee las tareas de la oferta, no el título.
  5. Cuando algo pase a producción, sácalo del notebook.
  6. Prepara MLOps aunque tu título diga «data scientist».
  7. Usa los temarios universitarios como mapa de lo que se espera.
- **Práctica:** toma las ofertas de NeuralWorks, Suncast y Claro. Ubica cada responsabilidad en el ciclo A a D y decide a qué rol apunta cada una. Después elige tu salida, Industria o Research, y justifícalo.
- **Sigue aprendiendo con tu LLM:**
  - «Dame 3 ofertas reales de ML engineer y 3 de data scientist, y separa sus tareas según el ciclo de Chang».
  - «¿Qué tendría que agregar a mi portafolio para pasar de data scientist a ML engineer?».
  - «Explícame training-serving skew con un ejemplo de pronóstico solar».

### Fuentes (APA)

- Amazon Web Services. (2026). *AWS Certified Machine Learning Engineer - Associate (MLA-C02) exam guide*. https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html
- Brown, S. (2020, 27 de mayo). *How to build a data analytics dream team*. MIT Sloan. https://mitsloan.mit.edu/ideas-made-to-matter/how-to-build-a-data-analytics-dream-team
- Chang, S. S. (2024). *Machine learning interviews: Kickstart your machine learning and data career* (1.ª ed.). O'Reilly Media.
- Coursera Staff. (2026, 21 de septiembre). *Machine learning engineer vs. data scientist: What's the difference?* Coursera. https://www.coursera.org/articles/machine-learning-engineer-vs-data-scientist
- Google. (s. f.). *Google Advanced Data Analytics Professional Certificate*. Coursera. https://www.coursera.org/professional-certificates/google-advanced-data-analytics
- Google Cloud. (2024, 28 de agosto). *MLOps: Continuous delivery and automation pipelines in machine learning*. https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning
- Google Cloud. (2026a). *Common GKE user roles and tasks*. https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks
- Google Cloud. (2026b). *Predefined roles for job functions*. https://docs.cloud.google.com/iam/docs/job-functions/roles-for-job-functions
- Google Cloud. (2026c). *Professional Machine Learning Engineer certification exam guide* (vigente desde el 1 de junio de 2026). https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf
- Huyen, C. (2022). *CS 329S: Machine learning systems design* [Curso]. Stanford University. https://stanford-cs329s.github.io/
- Kästner, C. (2025). *Machine learning in production: From models to products* (caps. 20 y 21). MIT Press. https://mlip-cmu.github.io/book/
- Microsoft. (2026, 5 de marzo). *New certification for machine learning operations (MLOps) engineers*. Microsoft Tech Community. https://techcommunity.microsoft.com/blog/skills-hub-blog/new-certification-for-machine-learning-operations-mlops-engineers/4494111
- MITx y MIT Institute for Data, Systems, and Society. (s. f.). *MicroMasters Program in Statistics and Data Science*. https://micromasters.mit.edu/ds/
- Provost, F. y Fawcett, T. (2013). *Data science for business*. O'Reilly Media.
- Stanford University, Department of Statistics. (s. f.). *Statistics data science curriculum*. https://statistics.stanford.edu/academic-programs/graduate-programs/statistics-data-science-curriculum
- UC Berkeley. (2025). *Data 100: Principles and techniques of data science, course notes* (Fall 2025). https://ds100.org/course-notes/

**Dónde está cada fuente:** cada una tiene su ficha en BrainFran (`04-Biblioteca/Fuentes/`) con sus citas, y la copia de la página en `04-Biblioteca/_archivos/web/`. Microsoft es la excepción: bloquea las descargas, y sus citas hay que volver a abrirlas antes de escribir. El análisis completo está en `05-Estudio/Investigación roadmap ML-DL-DS/Búsqueda 2 · ML engineer vs data scientist`.
"""

doc = f"""# Propuesta de temario de ML y Deep Learning, versión 2 (y el reparto con Data Science)

> **Estado:** **aprobada por Fran (pedido 98) y publicada el 2026-11-07 (pedido 99)**. El mismo día se reordenó el refuerzo (pedido 101) y entraron los 3 cambios que pidió la oferta de data scientist de NeuralWorks (pedidos 103 y 104) en https://academy.woorky.app/es/, junto con Data Science. También está en la nota de BrainFran, en «Temario aprobado». La v1 queda como historia en [propuesta-ml-v1.md](propuesta-ml-v1.md).
>
> **Cómo se hizo:** sin subagentes. Aplica la investigación de [ml-vs-ds.md](ml-vs-ds.md), con 16 fuentes, y tus respuestas del pedido 96 ([feedback.md](feedback.md)). Todas las fuentes quedaron guardadas en BrainFran.
>
> **Se genera** desde `temario/estructura.py` con `gen_doc.py`, que también comprueba que no se pierda ninguna lección de la v3, ningún desvío de AI Engineering y ningún puente.

## Cifras

- **ML y Deep Learning:** {nml} lecciones ({eml} esenciales) en {mml} módulos, más {rml} repasos. Las 57 de la v3 siguen con la misma dirección («probabilidad para ML» pasa a repaso), y {nuevas} son nuevas (🆕).
- **Data Science (esqueleto):** {nds} lecciones ({eds} esenciales) en {mds} módulos, más {rds} repasos y {qds} requisito.
- **Repaso (↺):** una lección corta que recuerda lo justo de un tema que se profundiza en otro curso, con el enlace a la lección completa.
- **Requisito (⇢):** un tema que el otro curso necesita entero. No se repite: se manda a estudiarlo donde vive.

## Cambios de los pedidos 103 y 104 (la oferta de data scientist de NeuralWorks)

1. **Nueva lección en «Visión»:** «Imágenes como datos: píxeles, OpenCV y preprocesamiento». La oferta pide OpenCV.
2. **«Computer vision» nombra YOLO y Detectron2** en su título.
3. **SQL avanzado y Spark pasan a Data Science,** al módulo «Gestionar datos», donde un data scientist los aprende a fondo. En «Datos a escala», ML los pide como requisito (⇢) y se queda con «Streaming y colas de mensajes» y con la infraestructura como código.

El detalle está en `docs/roadmap/ds/mapa-neuralworks-ds.md` y `docs/roadmap/ds/propuesta-ds-v1.md`.

## Cambios del pedido 101

1. **La base del aprendizaje por refuerzo pasa al tronco común,** al final de Deep Learning, para las dos salidas. Así lo hacen MIT 6.390 (clases 10 y 11 de otoño de 2026: procesos de decisión de Markov y refuerzo, después de los Transformers) y Stanford CS229. Además, Chang cuenta que Q-learning entra en la entrevista técnica. Son 2 lecciones: «Decidir paso a paso: procesos de decisión de Markov» y «Aprendizaje por refuerzo desde la base», que conserva su dirección.
2. **La lección 1 lo sigue presentando** como uno de los tipos de aprendizaje.
3. **Research se queda con lo avanzado:** una lección nueva, «Refuerzo profundo: policy gradients, métodos de valor y actor-critic» (Géron, cap. 19), más el refuerzo para modelos de lenguaje y la destilación.

## Cambios del pedido 98

1. **2 lecciones nuevas de biomecánica,** para que el proyecto grande se apoye en más que una lección: «Pose en 2D y 3D: de puntos clave a ángulos articulares» y «Contar repeticiones y corregir en vivo». Salen de los bloques 22 y 30 del Pilar 2 de tu nota.
2. **La rama de deporte se divide en 2 módulos:** «predecir y seguir el juego», que termina en el proyecto de deporte, y «biomecánica y movimiento», que termina en el de biomecánica.
3. **Cada repaso y el requisito llevan su destino:** la lección donde el tema se ve a fondo. En el sitio, el repaso es una lección corta con un puente a esa lección, y el requisito se ve como desvío («Sigue en ML y DL»).

## Cambios del pedido 97

1. **Industria:** se quita el optativo de sumar la suciedad de los paneles. El pronóstico solar queda igual.
2. **Research tiene 3 proyectos grandes:** deporte (predecir partidos y seguir jugadores), neurociencia (decodificar el cerebro) y biomecánica (corregir la técnica con la cámara). Antes eran mini-proyectos. Se hacen los tres, porque las ramas se recorren las dos.
3. **«Tu primer estudio» pasa a ser el mini-proyecto:** es corto y va primero. Enseña el método que usan los proyectos grandes, con una pregunta más chica para no repetirlos.
4. **2 lecciones pasan a ser esenciales,** porque el proyecto de deporte las necesita: «Más allá de la recta», donde está Poisson, y «Calibración».

## Qué cambió desde la v1 (pedido 96)

1. **Los 4 ajustes de la investigación:**
   - **El modelo lineal es requisito en Data Science.** Stanford y Google ponen la regresión en el núcleo del data scientist. El módulo sigue viviendo solo en ML, y Data Science lo pide entero (⇢).
   - **Una lección nueva en Industria: «Operar IA generativa en producción, lo justo».** En 2026, Google, Microsoft y AWS la piden en sus exámenes de ML engineer. RAG, agentes y evals se repasan desde AI Engineering.
   - **«Datos a escala» queda como bases para un ML engineer.** AWS pide «Data engineering fundamentals», y la ingeniería de datos a fondo es otro rol.
   - **Cada curso entrega algo distinto.** Las prácticas de Data Science terminan en un análisis y una recomendación; las de Industria, en un pipeline o un servicio que funciona; las de Research, en un resultado medido y explicado.
2. **La lección de roles lleva las 16 fuentes,** con su ficha completa más abajo, lista para escribirla.
3. **Las dos ramas de Research se recorren:** deporte y neurociencia. Sus 8 lecciones pasan a ser esenciales.
4. **El proyecto de Research es más rápido:** «tu primer estudio», en 6 hitos. «Tu propio modelo» queda como proyecto propuesto, optativo. En el pedido 97 se reestructuró: ver arriba.
5. **Data Science suma diseño de experimentos** a su lección de A/B, como el núcleo de Stanford (STATS 263).
6. **Tamaño:** {nml} lecciones. Aprobaste 109, y se sumaron la de IA generativa (pedido 96), 2 de biomecánica (pedido 98) y 2 de refuerzo (pedido 101), y con la oferta de data scientist se sumó OpenCV y salieron SQL avanzado y Spark (pedido 103).

## Lo que se mantiene de la v1

- **Tronco común y dos salidas:** Industria (ML engineer en una empresa) y Research (investigar con ML).
- **Todos los modelos viven en ML:** el lineal a fondo (8 lecciones) y las series de tiempo (6 lecciones, más pronosticar con redes).
- **MLOps y datos a escala** van en Industria, con GCP como ejemplo; AWS llega después.
- **La entrevista de código** va en pseudocódigo ahora, y con código más adelante.
- **R** vive a fondo en Data Science, con un repaso en ML.
- **Lo que vive en AI Engineering no se repite:** el post-entrenamiento (SFT, DPO, LoRA), el oficio de investigador y Docker con CI/CD llegan como repaso.

## Los proyectos

### Industria: tu pronóstico solar en producción

Calza con Suncast (generación solar) y con lo que hace un ML engineer en NeuralWorks.

| Hito | Qué se logra | Comprobación | Lecciones |
|---|---|---|---|
| I0 | Plantear qué se predice, con qué métrica y contra qué baseline | La métrica y la persistencia como baseline quedan escritas antes de ver los datos | proyecto-de-punta-a-punta, validar-un-pronostico |
| I1 | Datos de generación y clima, limpios y sin fuga en el tiempo | Un informe de calidad, y ningún dato del futuro en el entrenamiento | features-para-modelar, pipelines-sin-fuga |
| I2 | Persistencia y SARIMA | SARIMA le gana a la persistencia en walk-forward, o explicas por qué no | arima-y-sarima, raiz-unitaria |
| I3 | XGBoost con rezagos y features del dominio | La mejora se mide en varias ventanas | pronostico-con-ml, ensambles |
| I4 | Una red para series | Le gana a XGBoost, o concluyes que no vale lo que cuesta | pronostico-con-redes |
| I5 | Servirlo en GCP, por lotes cada día | Un pedido real devuelve el pronóstico, con el mismo preprocesamiento que al entrenar | empaquetar-y-servir, entrenar-y-servir-en-gcp |
| I6 | Pipeline con CI/CD/CT | Un cambio malo no llega a producción, y el modelo se reentrena solo | pipelines-de-ml, ci-cd-ct |
| I7 | Monitorear la deriva | Una deriva simulada dispara la alarma de reentrenar | operar-modelos, reentrenar-con-la-realidad |
| I8 | Informe y demo | Lo explicas en 3 minutos a alguien no técnico y defiendes el diseño | disenar-un-sistema-de-ml, entrevista-de-ml |

### Research: un mini-proyecto y 3 proyectos grandes (pedido 97)

Primero va el mini-proyecto, que enseña el método con una pregunta corta. Después vienen los 3 proyectos grandes, uno por tema. Como las dos ramas se recorren, se hacen los tres. Cada proyecto termina en un resultado medido y explicado.

#### Mini-proyecto: tu primer estudio

Una sola pregunta, pensada para 1 a 2 semanas dirigiendo al agente. Enseña lo que usan los proyectos grandes: escribir la pregunta y el baseline antes de ver los datos, validar sin hacer trampa, comparar de forma justa e informar. La pregunta es más chica que la de los proyectos grandes, para no repetirlos. Ejemplos:
- **Deporte:** ¿jugar de local cambia la probabilidad de ganar en una liga?
- **Neurociencia:** ¿se distingue en el EEG si una persona tiene los ojos abiertos o cerrados?

| Hito | Qué se logra | Comprobación | Lecciones |
|---|---|---|---|
| R0 | Una pregunta medible, con su métrica y su baseline | Pregunta, métrica y baseline quedan escritos y fechados antes de ver los datos | experimentos-y-significancia, repaso-oficio-investigador |
| R1 | Un dataset abierto, entendido y documentado | Una ficha del dataset (origen, qué mide y sus límites) y un chequeo de fuga | fuga-de-datos-y-baseline |
| R2 | El baseline corrido | Su métrica, con una validación honesta | entrenar-validar-probar |
| R3 | Un modelo mejor | Le gana al baseline, o concluyes por qué no | clasificacion, ensambles |
| R4 | Una comparación justa | Varias semillas o particiones, y la significancia | experimentos-y-significancia |
| R5 | Informe corto y repo | 2 páginas y un repo que un agente limpio reproduce con el README | repaso-oficio-investigador |

#### Proyecto 1 · Deporte: predecir partidos y seguir jugadores

Tiene dos partes: predecir con datos de partidos, y seguir a los jugadores en video, de fútbol o de tenis.

| Hito | Qué se logra | Comprobación | Lecciones |
|---|---|---|---|
| D0 | Qué se predice (gana el local, empatan o gana la visita, o los goles), con qué métrica y contra qué baseline | La métrica y el baseline (las frecuencias de la temporada anterior) quedan escritos antes de ver los datos | predecir-partidos, evaluar-e-interpretar |
| D1 | Los partidos de una liga, sin fuga | Cada predicción usa solo datos de antes del partido | fuga-de-datos-y-baseline, features-para-modelar |
| D2 | Un modelo de goles con Poisson y ratings de los equipos | Le gana al baseline en temporadas que no vio, o explicas por qué no | regresion-polinomial-y-glm, predecir-partidos |
| D3 | Probabilidades confiables | Cuando el modelo dice 60 %, el resultado ocurre cerca del 60 % de las veces | calibracion, experimentos-y-significancia |
| D4 | Detectar jugadores y pelota en un video | Una muestra de cuadros, revisada contra una anotación hecha a mano | computer-vision, transfer-learning |
| D5 | Seguir a cada jugador durante la jugada | En una secuencia anotada, cada jugador conserva su identidad, y los cambios se cuentan | seguir-jugadores, seguimiento-de-objetos |
| D6 | Del tracking a métricas: distancia, velocidad y mapa de calor | Explicas cómo pasaste de píxeles a metros, y las cifras quedan en un rango creíble que respaldas con una fuente | metricas-de-juego |
| D7 | Informe y demo | Un informe tipo paper y un video con el tracking y las métricas encima | repaso-oficio-investigador |

#### Proyecto 2 · Neurociencia: decodificar el cerebro

| Hito | Qué se logra | Comprobación | Lecciones |
|---|---|---|---|
| N0 | Un dataset abierto de EEG y una pregunta (por ejemplo, qué mano imagina mover una persona), con métrica y baseline | Escritos antes de ver los datos | datos-del-cerebro |
| N1 | Entender y limpiar la señal: filtrar, ver frecuencias y marcar artefactos | Un informe de lo que se filtró y por qué | senales-y-frecuencias |
| N2 | Una validación que no hace trampa | Las personas del test no aparecen en el entrenamiento, o se dice que el modelo es por persona | entrenar-validar-probar, fuga-de-datos-y-baseline |
| N3 | Un decodificador clásico | Le gana al azar, con una prueba de significancia | decodificar-el-cerebro, clasificacion, experimentos-y-significancia |
| N4 | Una red para EEG | Le gana al clásico, o concluyes que no vale lo que cuesta | cnn, decodificar-el-cerebro |
| N5 | Qué aprendió el modelo | Muestras qué frecuencias y zonas pesan, y lo contrastas con lo que dice una fuente sobre esa tarea | interpretar-un-modelo |
| N6 | Informe, y una interfaz simple si quieres | Un informe tipo paper; la interfaz es optativa | interfaces-cerebro-computador, repaso-oficio-investigador |

#### Proyecto 3 · Biomecánica: corregir la técnica con la cámara

Sale de los bloques 22 y 30 del Pilar 2 de tu nota: la pose en un video propio, y corregir un ejercicio de pilates con el celular.

| Hito | Qué se logra | Comprobación | Lecciones |
|---|---|---|---|
| B0 | Un ejercicio (una sentadilla o uno de pilates) y qué es hacerlo bien | Los ángulos de referencia quedan escritos, con su fuente | biomecanica-con-vision |
| B1 | La pose en 2D, en un video propio | Los puntos del cuerpo siguen a la persona en todo el video | computer-vision, pose-y-angulos |
| B2 | Los ángulos de las articulaciones, y contar las repeticiones | Las repeticiones contadas coinciden con las reales | pose-y-angulos, repeticiones-y-feedback |
| B3 | Comparar contra una medición a mano | El error del ángulo, medido contra una anotación manual | evaluar-e-interpretar, analisis-de-errores |
| B4 | Detectar el error y decir cuál es | Encuentra los errores que cometiste a propósito en un video de prueba | clasificacion, anomalias |
| B5 | Feedback en vivo con la cámara del celular | Funciona en el celular con una demora que no estorba | repeticiones-y-feedback, empaquetar-y-servir |
| B6 | Informe y demo con otra persona | Otra persona lo usa, y el feedback la corrige | repaso-oficio-investigador |

**Proyecto propuesto, optativo: «tu propio modelo».** Son los hitos M0 a M10 de la v2 del roadmap (`docs/roadmap/propuesta-roadmap-final.md`): predecir memoria y tiempo, entrenar un modelo diminuto, un Transformer chico, cazar bugs, limpiar un corpus, LoRA, refuerzo, servir, reproducir un paper, un laboratorio con tu sistema multi-agente y el informe público. Es para quien quiera ir a fondo en los modelos por dentro.
{FICHA}
## Antes de escribir, falta verificar

Todo lo marcado «por verificar» en la columna Origen:

- el nombre actual de la plataforma de ML de GCP;
- las fuentes de teoría de la información, de GLM, de calibración y de SRE;
- Kaggle Learn Time Series y Rules of ML;
- el capítulo de SVM de Géron (2.ª ed.);
- las fuentes de las ramas: Dixon y Coles, SoccerNet, OpenCap, MNE-Python, Nilearn y Neuromatch;
- las citas de Microsoft, porque no hay copia guardada.

Tres libros ayudarían a cerrar varias de estas: *Designing Machine Learning Systems* (Huyen), ISLP y el Lakshmanan completo.

## ML y Deep Learning
{ml_md}

## Data Science (esqueleto)

Sale de la regla de reparto: Data Science es responder preguntas y tomar decisiones con datos. Se detalla después de cerrar ML.
{ds_md}
"""
out = os.path.join(AQUI, "..", "docs", "roadmap", "ml-dl", "propuesta-ml-v2.md")
open(out, "w").write(doc)
print(f"ML: {nml} lecciones, {eml} esenciales, {mml} módulos, {rml} repasos, {nuevas} nuevas | DS: {nds} lecciones, {eds} esenciales, {mds} módulos, {rds} repasos, {qds} requisitos")
