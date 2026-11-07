# Propuesta de temario de ML y Deep Learning, versión 2 (y el reparto con Data Science)

> **Estado:** **aprobada por Fran (pedido 98) y publicada el 2026-11-07 (pedido 99)**. El mismo día se reordenó el refuerzo (pedido 101) y entraron los 3 cambios que pidió la oferta de data scientist de NeuralWorks (pedidos 103 y 104) en https://academy.woorky.app/es/, junto con Data Science. También está en la nota de BrainFran, en «Temario aprobado». La v1 queda como historia en [propuesta-ml-v1.md](propuesta-ml-v1.md).
>
> **Cómo se hizo:** sin subagentes. Aplica la investigación de [ml-vs-ds.md](ml-vs-ds.md), con 16 fuentes, y tus respuestas del pedido 96 ([feedback.md](feedback.md)). Todas las fuentes quedaron guardadas en BrainFran.
>
> **Se genera** desde `research_notes/propuesta_ml/estructura.py` con `gen_doc.py`, que también comprueba que no se pierda ninguna lección de la v3, ningún desvío de AI Engineering y ningún puente.

## Cifras

- **ML y Deep Learning:** 113 lecciones (102 esenciales) en 27 módulos, más 8 repasos. Las 57 de la v3 siguen con la misma dirección («probabilidad para ML» pasa a repaso), y 57 son nuevas (🆕).
- **Data Science (esqueleto):** 55 lecciones (51 esenciales) en 17 módulos, más 10 repasos y 3 requisito.
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
6. **Tamaño:** 113 lecciones. Aprobaste 109, y se sumaron la de IA generativa (pedido 96), 2 de biomecánica (pedido 98) y 2 de refuerzo (pedido 101), y con la oferta de data scientist se sumó OpenCV y salieron SQL avanzado y Spark (pedido 103).

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

### Empezar · para las dos salidas


**Módulo 1 · El oficio y el mapa**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 1 | El mapa del ML: problemas, tipos de aprendizaje y datos | sí | Nota, Pilar 2, bloque 1; Géron 2025, cap. 1 |
| 2 | ML engineer, data scientist y los demás: quién hace qué 🆕 | sí | Las 16 fuentes de ml-vs-ds.md: Chang, cap. 1; Provost y Fawcett, cap. 1; Google Cloud (roles de GKE e IAM, MLOps, guía PMLE 2026, Advanced Data Analytics); Microsoft (AI-300, 2026); AWS (MLA-C02, 2026); Stanford (Statistics: Data Science, CS 329S); MIT (MicroMasters SDS, MIT Sloan); CMU (Kästner, caps. 20 y 21); Berkeley (Data 100); Coursera |
| 3 | Un proyecto de ML de punta a punta: del problema al modelo vivo 🆕 | sí | Géron 2025, cap. 2; Géron TF 2.ª ed., apéndice B (checklist); Nota, Pilar 2, bloque 2 |
| 4 | Las herramientas: Python, notebooks, scikit-learn, PyTorch, SQL y R 🆕 | sí | Nota, Pilar 2, bloque 1; PUCV (Python, R, Spark y SQL); pedido 94 (R entra) |
| ↺ | *Repaso: datos, limpieza y exploración* | repaso | Repaso corto · a fondo en Data Science |

### Matemática y probabilidad para modelar


**Módulo 2 · Matemática para ML**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 5 | Álgebra lineal: los datos como matriz, y la SVD | sí | Nota, Pilar 2, bloque 9; Brunton y Kutz, cap. 1; Grus, cap. 4 |
| 6 | Derivadas, gradientes y la regla de la cadena | sí | Nota, Pilar 2, bloque 9; Karpathy, micrograd |
| 7 | Descenso de gradiente: cómo aprende casi todo modelo | sí | Nota, Pilar 2, bloque 9; Géron 2025, cap. 4; Grus, cap. 8 |
| 8 | Entropía, entropía cruzada y KL: de dónde salen las funciones de pérdida 🆕 | sí | Géron 2025, cap. 4 (entropía cruzada); fuente de teoría de la información por verificar |

**Módulo 3 · Probabilidad para modelar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: probabilidad y distribuciones* | repaso | Repaso corto · a fondo en Data Science |
| 9 | Máxima verosimilitud: de dónde sale la función de pérdida | sí | CS229 (supervisado paramétrico y generativo) |
| 10 | Bayes y modelos generativos | sí | Nota, Pilar 2, bloques 8 y 13; CS229 |
| 11 | Sesgo, varianza y curvas de aprendizaje | sí | Nota, Pilar 2, bloque 11; Géron 2025, cap. 4 (Learning Curves); CS229 |
| ↺ | *Repaso: muestreo, intervalos, tests y bootstrap* | repaso | Repaso corto · a fondo en Data Science |

### El modelo lineal a fondo


**Módulo 4 · Regresión lineal: el modelo base**


> El modelo más importante del ML, a fondo. Las ofertas de ML engineer lo piden como «OLS y sus extensiones», y es la base de casi todo lo que sigue.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 12 | Regresión lineal: predecir y explicar un número | sí | Géron 2025, cap. 4; PUCV, básico 3b; Grus, caps. 14 y 15 |
| 13 | MCO por dentro: coeficientes, tests t y F, y tipos de predicción 🆕 | sí | PUCV, avanzado 1a; Data 100 (Ordinary Least Squares) |
| 14 | Variables categóricas y ANOVA de una y dos vías 🆕 | sí | PUCV, básico 3c y 3d |
| 15 | Diagnosticar el modelo: normalidad, heteroscedasticidad y autocorrelación 🆕 | sí | PUCV, básico 3b y avanzado 1e (Durbin-Watson, Breusch-Pagan, MCG, ARMA en residuos) |
| 16 | Outliers e influencia: leverage, distancia de Cook y regresión robusta 🆕 | sí | PUCV, avanzado 1d |
| 17 | Colinealidad y elegir variables: AIC, BIC, forward, backward y stepwise 🆕 | sí | PUCV, avanzado 1b y 1c |
| 18 | Ridge, LASSO, PCR y PLS: muchas variables sin perder el control 🆕 | sí | PUCV, avanzado 1c; Géron 2025, cap. 4 (modelos regularizados) |
| 19 | Más allá de la recta: regresión polinomial y modelos lineales generalizados 🆕 | sí | Géron 2025, cap. 4 (polinomial); GLM y Poisson por verificar |

### Machine Learning clásico


**Módulo 5 · Cómo aprende un modelo**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 20 | Entrenar, validar y probar | sí | Nota, Pilar 2, bloque 11; Géron 2025, cap. 1 |
| 21 | Regularización y validación cruzada | sí | Nota, Pilar 2, bloque 11; Data 100 |
| 22 | La fuga de datos y el baseline | sí | Nota, Pilar 2, bloques 5 y 11; O'Neil y Schutt, cap. 13 |

**Módulo 6 · Features para el modelo**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 23 | Features: crear, codificar y escalar para el modelo 🆕 | sí | Zheng y Casari, caps. 2 a 5; Géron 2025, cap. 2; Chang, cap. 4 |
| 24 | Preprocesar sin fugas: el mismo pipeline para entrenar y para servir 🆕 | sí | Géron 2025, cap. 2; Guía PMLE 2026, 5.1 (preprocesamiento consistente); Rules of ML de Google (por verificar) |

**Módulo 7 · Clasificación**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 25 | Regresión logística: predecir una categoría con probabilidad | sí | PUCV, avanzado 8; Géron 2025, cap. 4; Grus, cap. 16 |
| 26 | kNN y Naive Bayes 🆕 | sí | Nota, Pilar 2, bloque 13; Grus, caps. 12 y 13 |
| 27 | SVM: margen máximo, kernels y regresión con SVM | sí | PUCV, avanzado 9 y 1f; Géron TF 2.ª ed., cap. 5 (por verificar) |
| 28 | Árboles de decisión | sí | Nota, Pilar 2, bloque 13; Géron 2025, cap. 5 |
| 29 | Ensambles: random forest, boosting y XGBoost | sí | PUCV, avanzado 7 (out-of-bag); Géron 2025, cap. 6; Nota, Pilar 2, bloque 14 |

**Módulo 8 · Sin etiquetas**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 30 | Clustering: k-medias, jerárquico, DBSCAN y mezclas gaussianas | sí | PUCV, avanzado 6; Géron 2025, cap. 8 |
| 31 | Reducción de dimensiones: PCA, t-SNE y UMAP | sí | PUCV, básico 4; Géron 2025, cap. 7; Brunton y Kutz, cap. 1 |
| 32 | Detección de anomalías: encontrar lo raro antes de que falle | sí | Nota, Pilar 2, bloque 15; NeuralWorks #11 (predecir fallas) |
| 33 | Sistemas de recomendación | sí | PUCV, avanzado 13; Chang, cap. 3; Grus, cap. 23; NeuralWorks #13 |

**Módulo 9 · Evaluar e interpretar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 34 | Métricas y umbral de decisión | sí | Nota, Pilar 2, bloque 18; Géron 2025, cap. 3 |
| 35 | Clases desbalanceadas | sí | Nota, Pilar 2, bloque 18 |
| 36 | Análisis de errores: dónde y por qué falla el modelo 🆕 | sí | Géron 2025, cap. 3 (Error Analysis) |
| 37 | Probabilidades en las que se puede confiar: calibración 🆕 | sí | Docs de scikit-learn (por verificar) |
| 38 | Explicar un modelo: importancia de features y SHAP | sí | Nota, Pilar 2, bloque 18; NeuralWorks #6; Guía PMLE 2026, 6.1 |
| 39 | Comparar modelos con estadística: semillas, ablaciones y significancia | sí | Nota, Pilar 2, bloque 32; desvío desde AI Engineering |

### Series de tiempo y pronóstico


**Módulo 10 · Series de tiempo**


> Pronosticar es de lo más pedido en la industria: generación solar y eólica, demanda o fallas antes de que ocurran. Data Science lleva un repaso.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 40 | Una serie por dentro: tendencia, estacionalidad, autocorrelación y estacionariedad 🆕 | sí | PUCV, avanzado 3a (test de Box); Nota, Pilar 2, bloque 16 |
| 41 | ARIMA y SARIMA: identificar, ajustar, diagnosticar y predecir 🆕 | sí | PUCV, avanzado 3b y 3c; Guía PMLE 2026, 3.1 (ARIMA) |
| 42 | Raíz unitaria y regresión espuria: cuando dos series engañan juntas 🆕 | sí | PUCV, avanzado 3d |
| 43 | Validar un pronóstico: walk-forward, persistencia e intervalos 🆕 | sí | Nota, Pilar 2, bloques 16 y 18; PUCV, básico 2b |
| 44 | Pronosticar con ML: rezagos, ventanas y XGBoost 🆕 | sí | Nota, Pilar 2, bloque 16; Kaggle Learn, Time Series (por verificar) |
| 45 | Pronóstico probabilístico: un rango, no un número 🆕 | no | Nota, Pilar 2, bloque 16 |

### Deep Learning


**Módulo 11 · Redes neuronales**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 46 | De la neurona a la red: perceptrón y MLP | sí | Nota, Pilar 2, bloque 19; PUCV, avanzado 10; Géron 2025, cap. 9 |
| 47 | Backpropagation | sí | Nota, Pilar 2, bloque 19; Karpathy; Géron 2025, apéndice A (autodiff) |
| 48 | Optimizadores: SGD, momentum y Adam | sí | Géron 2025, cap. 11; CS230 |
| 49 | Inicialización y normalización | sí | Géron 2025, cap. 11; CS230 |
| 50 | Regularizar una red: dropout, weight decay y augmentation | sí | Géron 2025, cap. 11; Nota, Pilar 2, bloque 20 |
| 51 | PyTorch y tensores, para dirigir al agente | sí | Géron 2025, cap. 10; CS336, clase 2 |

**Módulo 12 · Entrenar y ajustar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 52 | El ciclo de entrenamiento: épocas, lotes e iteraciones | sí | Nota, Pilar 2, bloque 20 |
| 53 | Buscar hiperparámetros con método | sí | Deep Learning Tuning Playbook de Google; Géron 2025, cap. 9 |
| 54 | El learning rate y su calendario | sí | Géron 2025, cap. 11; Tuning Playbook |
| 55 | Diagnosticar un entrenamiento por sus curvas | sí | Nota, Pilar 2, bloque 20; Karpathy; Tuning Playbook |
| 56 | Entrenar más rápido y más barato: precisión mixta y más | no | Géron 2025, apéndice B; CS336 |

**Módulo 13 · Visión**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 57 | Imágenes como datos: píxeles, OpenCV y preprocesamiento 🆕 | sí | Nota, Pilar 2, bloque 22 (la imagen como matriz de píxeles); NeuralWorks DS N3 (OpenCV); pedido 103 |
| 58 | Redes convolucionales: de AlexNet a ResNet | sí | PUCV, avanzado 14; Géron 2025, cap. 12 |
| 59 | Transfer learning y fine-tuning | sí | Géron 2025, caps. 11 y 12; Hugging Face, caps. 1 a 4 |
| 60 | Computer vision: detección (YOLO, Detectron2), segmentación y pose | sí | Nota, Pilar 2, bloque 22; Géron 2025, cap. 12; NeuralWorks #15; NeuralWorks DS E11 y N3 |
| 61 | Seguir objetos en video: tracking 🆕 | no | Géron 2025, cap. 12 (Object Tracking) |
| 62 | Transformers de visión y modelos multimodales 🆕 | sí | Géron 2025, cap. 16 |

**Módulo 14 · Secuencias y lenguaje**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 63 | Secuencias: RNN, LSTM y GRU | sí | Géron 2025, cap. 13; Nota, Pilar 2, bloque 21 |
| 64 | Pronosticar con redes: RNN, CNN y Transformers para series 🆕 | sí | Géron 2025, cap. 13 (Forecasting a Time Series); Nota, Pilar 2, bloque 16 |
| 65 | Lenguaje: del texto a los embeddings, y textos parecidos | sí | Nota, Pilar 2, bloque 23; PUCV, avanzado 11a; Géron 2025, cap. 14 |
| 66 | Atención y el Transformer, a fondo | sí | Géron 2025, caps. 14 y 15; Raschka; CS224N |

**Módulo 15 · Modelos generativos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 67 | Autoencoders y VAE | no | Géron 2025, cap. 18; MIT 6.S191 |
| 68 | GANs y modelos de difusión | no | Géron 2025, cap. 18; MIT 6.S191 |

**Módulo 16 · Aprender con recompensas: la base**


> Para las dos salidas. El refuerzo se presenta en la lección 1, y aquí se aprende su base, como en MIT 6.390 y Stanford CS229. Lo avanzado sigue en Research.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 69 | Decidir paso a paso: procesos de decisión de Markov 🆕 | sí | MIT 6.390, clase 10 (Markov Decision Processes, otoño 2026); Stanford CS229 (refuerzo y control); Géron 2025, cap. 19 |
| 70 | Aprendizaje por refuerzo desde la base: valor, política y Q-learning | sí | MIT 6.390, clase 11 (Reinforcement Learning, otoño 2026); Géron 2025, cap. 19 (Value-Based Methods); Chang, cap. 3 (Q-learning); CS229 |

### Salida 1 · Industria: ML engineer en una empresa


**Módulo 17 · Del notebook a producción**


> Salida 1 · Industria. Llevas modelos a producción, como un ML engineer en una empresa. Cada práctica termina en un pipeline o un servicio que funciona. Los ejemplos son en Google Cloud; AWS llega después.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 71 | El ciclo de vida de un modelo en una empresa | sí | Chang, caps. 1 y 6; Nota, Pilar 2, bloque 27; CMU 17-645 |
| 72 | Empaquetar y servir: serializar, contenedores y API, por lotes o en línea 🆕 | sí | Guía PMLE 2026, 4.1; NeuralWorks #4, #23 y #34 |
| ↺ | *Repaso: Docker y CI/CD* | repaso | Repaso corto · a fondo en AI Engineering (lección 77) |
| 73 | Seguir experimentos y versionar datos y modelos | sí | Nota, Pilar 2, bloque 27 (MLflow y DVC); Guía PMLE 2026, 2.3 y 4.1 |
| 74 | Pipelines de ML: orquestar datos, entrenamiento y despliegue 🆕 | sí | Guía PMLE 2026, 5.1; NeuralWorks #1 |
| 75 | CI/CD/CT: probar, desplegar y reentrenar de forma automática 🆕 | sí | Guía PMLE 2026, 5.2; NeuralWorks #22 |
| 76 | Feature store, y el desfase entre entrenar y servir 🆕 | sí | Guía PMLE 2026, 2.1, 4.2 y 6.2 (training-serving skew) |

**Módulo 18 · Operar modelos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 77 | Monitorear un modelo vivo: deriva de datos y de concepto | sí | Guía PMLE 2026, 6.2; Nota, Pilar 2, bloque 28; NeuralWorks #5 |
| 78 | Cerrar el ciclo: recoger lo que pasa y reentrenar 🆕 | sí | NeuralWorks #3; Guía PMLE 2026, 5.2 (política de reentrenamiento) |
| 79 | Lanzar sin miedo: A/B, canary y volver atrás 🆕 | sí | Guía PMLE 2026, 4.1 (estrategias de lanzamiento) |
| 80 | IA responsable en producción: sesgo, privacidad y seguridad 🆕 | sí | Guía PMLE 2026, 6.1 y 2.1 (datos personales); Nota, Pilar 2, bloque 28 |
| 81 | Operar IA generativa en producción, lo justo 🆕 | sí | Guía PMLE 2026, 1.2 y 6.2 (evaluar y monitorear IA generativa); Microsoft AI-300 (GenAIOps, 2026); AWS MLA-C02 (flujos con agentes, 2026). RAG, agentes y evals se repasan desde AI Engineering |
| 82 | DevSecOps y SRE para ML, lo justo 🆕 | no | NeuralWorks #7; fuente por verificar |

**Módulo 19 · Datos a escala**


> Gestionar datos a escala (SQL avanzado, data warehouse, ETL, Spark y datos en la nube) se estudia en Data Science, como requisito. Aquí va lo propio de servir modelos: datos en tiempo real e infraestructura.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ⇢ | *Requisito: gestionar datos a escala (SQL avanzado, warehouse, ETL, Spark y la nube)* | requisito | Requisito · se estudia completo en Data Science, módulo «Gestionar datos» |
| 83 | Streaming y colas de mensajes: datos que llegan en tiempo real 🆕 | sí | NeuralWorks #31; Lakshmanan, cap. 4 (Pub/Sub y Dataflow) |
| 84 | Infraestructura como código, lo justo 🆕 | no | NeuralWorks #29; Chang, cap. 1 (Terraform) |

**Módulo 20 · ML en GCP**


> Google Cloud es el ejemplo principal. La tabla con su equivalente en AWS llega más adelante.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 85 | El mapa de GCP para ML: la plataforma de ML y cómo se conecta con los datos 🆕 | sí | Guía PMLE 2026 (todas las secciones); Lakshmanan, caps. 1 y 5; los servicios de datos se ven en Data Science; nombre actual de la plataforma por verificar |
| 86 | Modelos con SQL y con pocos clics: BigQuery ML y AutoML 🆕 | sí | Guía PMLE 2026, 1.1 |
| 87 | Entrenar, registrar, servir y monitorear en GCP 🆕 | sí | Guía PMLE 2026, 3.2, 4.1, 4.2 y 6.2 |

**Módulo 21 · Diseñar sistemas de ML**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 88 | Diseñar un sistema de ML: requisitos, costo, latencia y escala 🆕 | sí | NeuralWorks #28; Chang, cap. 6; Guía PMLE 2026, 3.1; Designing ML Systems de Chip Huyen (falta en la biblioteca) |
| 89 | Casos de industria: fallas, precios, personalización y combustible 🆕 | no | NeuralWorks #11 a #14 |
| ↺ | *Repaso: econometría e inferencia causal* | repaso | Repaso corto · a fondo en Data Science |

### Salida 2 · Research: investigar con ML


**Módulo 22 · Modelos por dentro: pre-entrenar y escalar**


> Salida 2 · Research. Investigas de dos formas: cómo funcionan los modelos por dentro, y usar ML para descubrir cosas en otros campos. Se recorren las dos ramas aplicadas, deporte y neurociencia. Cada práctica termina en un resultado medido y explicado.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: leer, reproducir y publicar papers* | repaso | Repaso corto · a fondo en AI Engineering (lecciones 111 a 114) |
| 90 | Construir un tokenizador: BPE | sí | Karpathy (tokenizador BPE); CS336, tarea 1 |
| 91 | Pre-entrenar un modelo de lenguaje desde cero | sí | Nota, Pilar 2, bloque 24; CS336; Raschka, caps. 2 a 5 |
| 92 | Datos para pre-entrenar: filtrar, deduplicar y mezclar | sí | Nota, Pilar 2, bloque 24; CS336, clases 13 y 14 |
| 93 | Arquitectura a escala: mezcla de expertos y alternativas a la atención | no | CS336, clases 3 y 4; Raschka (Qwen3) |
| 94 | Leyes de escala: datos, parámetros y cómputo | sí | Nota, Pilar 2, bloque 24; CS336 |
| 95 | GPU y memoria: dónde se va el tiempo | sí | CS336, clases 5 a 8; avisos de modelos: GPU 30 % |
| 96 | Entrenar en muchas GPUs: paralelismo | no | CS336; MIT 6.S191; Guía PMLE 2026, 3.3 |

**Módulo 23 · Refuerzo avanzado**


> La base del refuerzo se vio en el tronco común; aquí va lo avanzado.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 97 | Refuerzo profundo: policy gradients, métodos de valor y actor-critic 🆕 | sí | Géron 2025, cap. 19 (Policy Gradients, Value-Based Methods, Actor-Critic Algorithms); pedido 101 |
| 98 | Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables | sí | Nota, Pilar 2, bloque 25; CS336, clases 15 y 16 |
| 99 | Destilación: un modelo grande le enseña a uno chico | no | Nota, Pilar 2, bloque 25; Raschka, Build a Reasoning Model |
| ↺ | *Repaso: SFT, DPO y LoRA* | repaso | Repaso corto · a fondo en AI Engineering (lecciones 98 a 101) |

**Módulo 24 · Rama: deporte · predecir y seguir el juego**


> Rama aplicada, obligatoria en esta salida: predecir partidos, seguir jugadores y analizar fútbol y tenis con visión. Termina en el proyecto grande de deporte.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 100 | Predecir partidos: goles con Poisson, ratings y probabilidades 🆕 | sí | Pedido 94; Dixon y Coles (1997) por verificar |
| 101 | Seguir jugadores y pelota en video 🆕 | sí | Géron 2025, cap. 12 (Object Tracking); SoccerNet por verificar |
| 102 | Del tracking a métricas de juego: velocidad, posesión y mapas de calor 🆕 | sí | Pedido 94; fuente por verificar |

**Módulo 25 · Rama: deporte · biomecánica y movimiento**


> Parte de la rama de deporte. Termina en el proyecto grande de biomecánica: corregir la técnica de un ejercicio con la cámara del celular.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 103 | Biomecánica con visión: medir un movimiento y juzgar la técnica | sí | Nota, Pilar 2, bloque 30; OpenCap y OpenSim de Stanford por verificar |
| 104 | Pose en 2D y 3D: de puntos clave a ángulos articulares 🆕 | sí | Nota, Pilar 2, bloques 22 (pose: puntos clave, top-down y bottom-up, mapas de calor) y 30 (pose 2D y 3D, ángulos articulares); pedido 98 |
| 105 | Contar repeticiones y corregir en vivo 🆕 | sí | Nota, Pilar 2, bloque 30 (contar repeticiones, comparar con una postura de referencia y feedback en tiempo real); pedido 98 |

**Módulo 26 · Rama: neurociencia con ML**


> Rama aplicada, obligatoria en esta salida: entender el cerebro con ML, deep learning o visión. Termina en el proyecto grande de neurociencia.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 106 | Los datos del cerebro: EEG, fMRI y actividad de neuronas 🆕 | sí | Nota, Pilar 2, bloque 31; pedido 94 |
| 107 | Señales: filtrar y ver frecuencias con Fourier y wavelets 🆕 | sí | Brunton y Kutz, cap. 2 |
| 108 | Decodificar el cerebro: de la señal a lo que la persona hace o percibe 🆕 | sí | Nota, Pilar 2, bloque 31; Stanford STATS 220 (ML Methods for Neural Data Analysis); MNE-Python, Nilearn y Neuromatch por verificar |
| 109 | Interfaces cerebro-computador 🆕 | sí | Nota, Pilar 2, bloque 31 |

### Cierre · tu carrera de ML


**Módulo 27 · Tu carrera**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 110 | Tu CV y tu portafolio de ML 🆕 | sí | Chang, cap. 2 |
| 111 | La entrevista técnica: algoritmos, entrenamiento y despliegue 🆕 | sí | Chang, caps. 3, 4 y 6 |
| 112 | La entrevista de código: estructuras de datos, algoritmos y SQL en pseudocódigo 🆕 | sí | Chang, cap. 5; NeuralWorks #19 y #38; decisión 7A (pedido 94). Practicar código a mano llega después (7B) |
| 113 | Comunicar a no técnicos y la entrevista conductual 🆕 | sí | Chang, cap. 7; NeuralWorks #27 |
| ↺ | *Repaso: entrar a investigación* | repaso | Repaso corto · a fondo en AI Engineering (lección 115) |

## Data Science (esqueleto)

Sale de la regla de reparto: Data Science es responder preguntas y tomar decisiones con datos. Se detalla después de cerrar ML.

### Empezar · para los dos caminos


**Módulo 1 · El oficio**


> Cada práctica de Data Science termina en un análisis y una recomendación.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 1 | Qué es la ciencia de datos: entender y decidir con datos | sí | Provost y Fawcett, cap. 1; Nota, Pilar 2, bloque 1; Harvard CS 1090A (las 5 caras de una investigación con datos) |
| ↺ | *Repaso: ML engineer, data scientist y los demás* | repaso | Repaso corto · a fondo en ML y DL |
| 2 | Trabajar en un equipo de datos: ML engineers, data engineers, translators y negocio | sí | NeuralWorks DS D2, D4, E9, R7 y R8; Chang, cap. 1; Kästner, Machine Learning in Production, cap. 21 |
| 3 | De la pregunta a la decisión: el proceso de un análisis | sí | Provost y Fawcett, cap. 2; Nota, Pilar 2, bloque 2; O'Neil y Schutt, cap. 2 |

**Módulo 2 · Plantear el problema**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 4 | Elegir el problema que más impacta: valor esperado y prioridades | sí | NeuralWorks DS E1; Provost y Fawcett, caps. 2 y 7 |
| 5 | Entender el problema con los expertos: preguntas, facts y opiniones | sí | NeuralWorks DS E2; Kästner, Machine Learning in Production, cap. 6 (Gathering Requirements) |
| ↺ | *Repaso: investigar lo que ya se sabe en papers, documentación y casos* | repaso | Repaso corto · a fondo en AI Engineering (lección 111) |
| 6 | Hipótesis y plan de análisis: datos, variables y período | sí | NeuralWorks DS E4; O'Neil y Schutt, cap. 2 |

### Los datos


**Módulo 3 · Conseguir datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: Python como lenguaje técnico* | repaso | Repaso corto · a fondo en AI Engineering (lección 5) |
| 7 | Conseguir datos de muchas fuentes: archivos, bases, APIs y web scraping | sí | NeuralWorks DS E5; Grus, cap. 9; DeepLearning.AI Data Analytics (2026-09-29), curso 4; PUCV, avanzado 11b |
| 8 | Datos no estructurados: texto, imágenes y logs, convertidos en tablas | sí | NeuralWorks DS E5 y R4; Harvard CS 1090A |
| 9 | Pandas como operaciones | sí | Nota, Pilar 2, bloque 4; Grus, cap. 10 |
| 10 | R: qué es, para qué sirve y cuándo usarlo | sí | Pedido 94; HarvardX Professional Certificate in Data Science (todo en R); PUCV (software) |
| 11 | Expresiones regulares: buscar patrones en texto | no | Data 100 (Regular Expressions) |

**Módulo 4 · Gestionar datos**


> Gestionar datos es parte del oficio: Harvard la pone entre las 5 caras de una investigación con datos. ML y DL pide este módulo como requisito.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 12 | SQL como operaciones: filtrar, unir y agrupar | sí | Nota, Pilar 2, bloque 3; PUCV, avanzado 4; Grus, cap. 24 |
| 13 | SQL avanzado: funciones de ventana, CTE y optimizar consultas | sí | NeuralWorks DS R5; NeuralWorks #21; Chang, cap. 5 (SQL) |
| 14 | Modelar datos: tablas, relaciones y esquema estrella | sí | Nota, Pilar 2, bloque 3; nota «Bases de datos con SQL» (modelo entidad-relación) |
| 15 | Data warehouse, data lake y lakehouse: dónde viven los datos de una empresa | sí | Nota, Pilar 2, bloque 3; nota «Ingeniería de datos»; Harvard CS 1090A (gestionar datos) |
| 16 | ETL y ELT: mover y transformar datos con pipelines programados | sí | Nota «Proceso ETL» (Platzi); Lakshmanan, cap. 2; Nota, Pilar 2, bloque 27 |
| 17 | Spark y PySpark: datos que no caben en un computador | sí | PUCV, avanzado 5; NeuralWorks #35; Lakshmanan, caps. 6 y 7; O'Neil y Schutt, cap. 14 |
| 18 | Datos en la nube: almacenamiento, BigQuery y procesamiento en GCP | sí | NeuralWorks DS N1; Lakshmanan, caps. 2 a 6; Guía PMLE 2026, 2.1 |

**Módulo 5 · Calidad de datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 19 | Limpieza y calidad: faltantes, duplicados, outliers y unidades | sí | NeuralWorks DS E6; Nota, Pilar 2, bloque 5 |
| 20 | Validar datos: tests de calidad y contratos que avisan antes de que algo se rompa | sí | NeuralWorks DS E6 (validar correctitud); Kästner, Machine Learning in Production, cap. 16 (Data Quality) |
| ↺ | *Repaso: features y fuga de datos* | repaso | Repaso corto · a fondo en ML y DL |

### Explorar y comunicar


**Módulo 6 · Explorar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 21 | Estadística descriptiva y tipos de variables | sí | PUCV, básico 1; Data 100 (EDA) |
| 22 | Análisis exploratorio y correlación: Pearson, Spearman o Kendall | sí | PUCV, básico 3a; Nota, Pilar 2, bloque 6 |
| 23 | Encontrar patrones y tendencias: comparar grupos, cohortes y el tiempo | sí | NeuralWorks DS E8; O'Neil y Schutt, cap. 6 |
| ↺ | *Repaso: explorar series de tiempo* | repaso | Repaso corto · a fondo en ML y DL |
| 24 | Analizar datos dirigiendo a un LLM, y verificar lo que entrega | sí | DeepLearning.AI Data Analytics (2026-09-29) (LLMs para explorar y analizar datos); NeuralWorks DS D5 (automatizar) |

**Módulo 7 · Comunicar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 25 | Visualizar: qué gráfico responde qué pregunta | sí | Data 100 (Visualization I y II); Grus, cap. 3 |
| 26 | Contar hallazgos y discutirlos con quienes deciden | sí | NeuralWorks DS E10; Nota, Pilar 2, bloque 6; Harvard CS 1090A (comunicar) |
| 27 | Dashboards y BI, lo justo: Power BI, Tableau o Looker | sí | Pedido 103 (solo lo justo); DeepLearning.AI Data Analytics (2026-09-29), curso 5; Lakshmanan, cap. 3 |
| 28 | Reportes reproducibles: notebooks, git y análisis que se vuelven a correr solos | sí | HarvardX Professional Certificate in Data Science (Productivity Tools); Kästner, Machine Learning in Production, cap. 24; NeuralWorks DS D5 |

### Estadística para decidir


**Módulo 8 · Probabilidad e inferencia**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 29 | Probabilidad, variables aleatorias y distribuciones | sí | Nota, Pilar 2, bloque 8; Data 100 (Random Variables); Grus, cap. 6 |
| 30 | Simular para decidir: Monte Carlo | sí | NeuralWorks (un modelo predictor basado en Monte Carlo); DeepLearning.AI Data Analytics (2026-09-29), curso 2 (simulación) |
| 31 | Muestreo, estimadores, sesgo y varianza | sí | Data 100 (Sampling; Estimators, Bias, and Variance) |
| 32 | Intervalos de confianza, tests de hipótesis y p-valor | sí | PUCV, básico 2; Nota, Pilar 2, bloque 8; Grus, cap. 7 |
| 33 | Bootstrap: medir la incertidumbre remuestreando | sí | PUCV, avanzado 2b; Data 100 (Parameter Inference and Bootstrapping) |
| 34 | Muchas pruebas a la vez: tasa de falsos descubrimientos y tests de permutación | sí | Berkeley Data 102 (otoño 2026) |
| 35 | Inferencia bayesiana: actualizar lo que crees con evidencia | sí | Berkeley Data 102 (otoño 2026) (decisiones bayesianas y frecuentistas); Nota, Pilar 2, bloque 8 |

**Módulo 9 · Experimentos y causalidad**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 36 | Diseño de experimentos y pruebas A/B: decidir con un experimento | sí | Chang, cap. 1 (paso C.2); Stanford STATS 263; Berkeley Data 102 (otoño 2026); Nota, Pilar 2, bloque 8 |
| 37 | Correlación no es causalidad: confusores y experimentos | sí | Nota, Pilar 2, bloque 10; O'Neil y Schutt, cap. 11 |
| 38 | Diferencias en diferencias: medir un efecto cuando no se puede hacer un A/B | sí | Nota, Pilar 2, bloque 10; NeuralWorks #36; Berkeley Data 102 (otoño 2026) (inferencia causal); pedido 104 |

### Los modelos y el ciclo de vida


**Módulo 10 · Modelos de ML para el data scientist**


> Los modelos viven en ML y DL. Un data scientist los necesita completos, así que aquí se piden como requisito.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ⇢ | *Requisito: el modelo lineal a fondo (8 lecciones)* | requisito | Requisito · se estudia completo en ML y DL, módulo «Regresión lineal: el modelo base» |
| ⇢ | *Requisito: ML clásico (clasificación, sin etiquetas y evaluar)* | requisito | Requisito · se estudia completo en ML y DL, módulos «Clasificación», «Sin etiquetas» y «Evaluar e interpretar» |
| ⇢ | *Requisito: visión por computador (OpenCV, CNN, YOLO y Detectron2)* | requisito | Requisito · se estudia completo en ML y DL, módulo «Visión» |
| ↺ | *Repaso: explicar un modelo para contarlo* | repaso | Repaso corto · a fondo en ML y DL |

**Módulo 11 · Del análisis al producto de datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: el ciclo de vida de un modelo en producción* | repaso | Repaso corto · a fondo en ML y DL |
| 39 | Productos de datos: del análisis a algo que el negocio usa, junto a los ML engineers | sí | NeuralWorks DS D3, D4, E9 y R6; Provost y Fawcett, cap. 13 |
| ↺ | *Repaso: Docker y CI/CD* | repaso | Repaso corto · a fondo en AI Engineering (lección 77) |

### Camino 1 · Negocio y producto


**Módulo 12 · Métricas y producto**


> Camino 1 · Negocio y producto. Datos al servicio de las decisiones de una empresa, integrado con el negocio. Termina en tu experimento A/B de producto.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 40 | KPIs y métricas: medir lo que de verdad le importa al negocio | sí | Provost y Fawcett, caps. 2 y 13; Chang, cap. 1 (product data scientist) |
| 41 | Embudos, cohortes y retención | sí | Chang, cap. 1 (paso C.2); DeepLearning.AI Data Analytics (2026-09-29) |
| 42 | Experimentar en serio: potencia, tamaño de muestra y métricas guardianas | sí | Berkeley Data 102 (otoño 2026) (diseño de experimentos); Kohavi y otros, Trustworthy Online Controlled Experiments por verificar |

**Módulo 13 · Decidir y optimizar**


> Los problemas que nombra la oferta de NeuralWorks: precios, personalización, combustible y fallas.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 43 | Decidir con un modelo: costos, umbrales y valor esperado | sí | Provost y Fawcett, caps. 7, 8 y 11; NeuralWorks DS D1 (detectar y predecir fallas) |
| 44 | Optimizar una decisión: objetivo, restricciones y programación lineal | sí | Stanford Data Science B.S. (MS&E 111, optimización); NeuralWorks DS D1 (optimizar el uso de combustible) |
| 45 | Precios: elasticidad, experimentos y optimizar | sí | NeuralWorks DS D1 (optimizar pricing); fuente por verificar |
| 46 | Personalizar: segmentar clientes y medir el efecto real (uplift) | sí | NeuralWorks DS D1 (personalizar la experiencia del cliente); Berkeley Data 102 (otoño 2026) (recomendación); fuente de uplift por verificar |
| 47 | Explorar o explotar: bandits y Thompson sampling | sí | Berkeley Data 102 (otoño 2026) (Thompson sampling) |

### Camino 2 · Investigación con datos


**Módulo 14 · Causalidad y econometría**


> Camino 2 · Investigación con datos. Responder preguntas de causa y efecto con datos observacionales, con el rigor de un paper. Diferencias en diferencias se vio en el tronco común; aquí van los métodos que siguen. Termina en tu estudio causal.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 48 | Variables instrumentales y regresión discontinua | sí | Nota, Pilar 2, bloque 10 |
| 49 | Datos de panel y efectos fijos (statsmodels y pyfixest) | sí | NeuralWorks #33 y #37 |
| 50 | Inferencia causal con ML: double machine learning | no | Chernozhukov y otros, Applied Causal Inference Powered by ML and AI (2024); Stanford MS&E 228 |

**Módulo 15 · Ciencia con datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 51 | Modelos jerárquicos bayesianos: grupos que se ayudan entre sí | no | Berkeley Data 102 (otoño 2026) |
| 52 | Un estudio que otro puede repetir: pre-registro, datos y código abiertos | sí | Kästner, Machine Learning in Production, cap. 24; HarvardX Professional Certificate in Data Science (Productivity Tools) |
| ↺ | *Repaso: escribir y publicar un estudio* | repaso | Repaso corto · a fondo en AI Engineering (lección 114) |

### Cierre · ética y carrera


**Módulo 16 · Ética y privacidad**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 53 | Ética de datos y privacidad | sí | Grus, cap. 26; Data 100 (Human Contexts and Ethics); O'Neil y Schutt, cap. 16 |
| 54 | Privacidad diferencial: publicar datos sin exponer a nadie | no | Berkeley Data 102 (otoño 2026) |

**Módulo 17 · Tu carrera**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 55 | La entrevista de data scientist: SQL, estadística, experimentos y producto | sí | Chang, caps. 3 a 5 y 7; NeuralWorks DS R3 a R5 |
| ↺ | *Repaso: CV, portafolio y la entrevista conductual* | repaso | Repaso corto · a fondo en ML y DL |
