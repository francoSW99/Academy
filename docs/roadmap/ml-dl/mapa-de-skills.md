# Mapa de skills: NeuralWorks, diplomado PUCV y libros de BrainFran

> **Pedido 93 (2026-11-07).** Compara 3 fuentes con el temario de ML y DL publicado (v3, 57 lecciones). Todavía no cambia el temario.
>
> **Cómo leer las marcas:**
> - ✅ está en ML y DL;
> - ◐ está corto, en una sola lección o como optativa;
> - ↔ está en otra especialidad (AI Engineering o Data Science);
> - ✗ no está en ninguna.
>
> Los números «ML 13» son lecciones de ML y DL; «AI 77», de AI Engineering.

## 1. NeuralWorks, ML Engineer Jr

**Fuente:** `BrainFran/vault/08-Carrera/Ofertas/ML Engineer Jr - NeuralWorks.md` (copiada de Notion, editada el 2026-05-04), con su prueba de HackerRank.

**Lo que muestra:** el puesto es más de **MLOps y datos a escala** que de crear modelos. Los modelos los hacen los data scientists, y el MLE los pone en producción, los sirve, los vigila y les da explicabilidad. Lo deseable suma **econometría e inferencia causal**, con fuerte énfasis en OLS.

### Lo que harías en el puesto

| # | Skill | En el temario |
|---|---|---|
| 1 | Poner modelos en producción, usando y creando pipelines de ML | ◐ ML 54, una sola lección |
| 2 | Recolectar grandes volúmenes de datos, y de muchos tipos | ✗ |
| 3 | Recolectar lo que pasa en la realidad para reentrenar | ◐ ML 56 |
| 4 | Servir modelos en un entorno real y muy escalable | ◐ ML 54 · ↔ AI 77 (Camino Productos) |
| 5 | Monitorear y operar modelos | ◐ ML 56 · ↔ AI 79 |
| 6 | Darles explicabilidad a los modelos | ◐ ML 24, optativa |
| 7 | Prácticas DevSecOps, SRE y MLOps | ✗ DevSecOps y SRE · ◐ MLOps |
| 8 | Entregar más rápido, con código de calidad y seguro | ↔ AI 10, 11 y 84 |
| 9 | Entender la estructura de los datos y optimizar los procesos | ✗ |
| 10 | Automatizar antes que hacer a mano | ↔ AI Engineering, en todo el curso |

**Los proyectos del equipo**

| # | Skill | En el temario |
|---|---|---|
| 11 | Detectar y predecir fallas antes de que ocurran | ◐ ML 20 (anomalías), optativa · ↔ series de tiempo en Data Science |
| 12 | Optimizar precios | ✗ |
| 13 | Personalizar la experiencia del cliente | ◐ ML 21 (recomendación), optativa |
| 14 | Optimizar el uso de combustible | ✗ |
| 15 | Detectar caras y objetos con visión | ✅ ML 36 y 42 |

### Calificaciones clave

| # | Skill | En el temario |
|---|---|---|
| 16 | Ingeniería civil en computación o similar | No se enseña: tú eres ingeniero civil eléctrico |
| 17 | 3 años como software engineer o ML engineer | No se enseña: el portafolio lo compensa en parte |
| 18 | Python | ↔ AI 5, como lenguaje técnico |
| 19 | Estructuras de datos | ✗ |
| 20 | Análisis de datos no estructurados | ◐ ML 42 y 43 (imágenes y texto) |
| 21 | SQL avanzado, con optimización de consultas | ↔ AI 9 y Data Science, solo lo básico · ✗ optimizar consultas |
| 22 | CI/CD | ↔ AI 77 |
| 23 | Docker | ↔ AI 77 |
| 24 | Procesamiento de datos | ↔ Data Science |
| 25 | Cloud, de preferencia GCP, sobre todo sus servicios de datos | ✗ |
| 26 | Inglés para leer papers, artículos y documentación | ◐ AI 111 (leer papers) |
| 27 | Comunicación y trabajo en equipo | ✗ |

### Deseable

| # | Skill | En el temario |
|---|---|---|
| 28 | Ver mejoras y problemas en arquitecturas | ✗ diseño de sistemas de ML |
| 29 | Infraestructura como código | ✗ |
| 30 | Observabilidad y monitoreo | ◐ ML 56 · ↔ AI 79 |
| 31 | Pipelines de datos, colas de mensajes y big data escalable | ✗ |
| 32 | Procesamiento distribuido en la nube | ✗ (ML 50 es repartir el entrenamiento en GPUs: es otra cosa) |
| 33 | Econometría: statsmodels y pyfixest | ↔ Data Science, «Inferencia causal y econometría» |
| 34 | Serializar modelos | ✗ |
| 35 | Motores distribuidos: PySpark, Dask o Modin | ✗ · ↔ AI 78, optativa y general |
| 36 | Inferencia causal: técnicas observacionales e inferencia basada en diseño | ↔ Data Science |
| 37 | Probabilidad y estadística, con fuerte énfasis en OLS y sus extensiones | ◐ ML 13, una sola lección |

### La prueba técnica

| # | Skill | En el temario |
|---|---|---|
| 38 | HackerRank: 2 preguntas de código, 1 de pizarra y 1 «Full Stack (Data Science)». La prueba de muestra: FizzBuzz, y explorar el dataset Iris en un Jupyter sin GPU | ✗ · choca con la regla de aprender sin código a mano |

**Cuenta:** 1 ✅, 11 ◐, 9 ↔, 15 ✗ y 2 que no se enseñan. **ML y DL cubre de verdad 1 de las 38.**

## 2. Diplomado PUCV, versión 30

**Fuente:** `fuentes/pucv-diplomado-v30.md`, transcrito del PDF. Lo dicta el Instituto de Estadística, en 96 horas, con Python, R, Spark, SQL y AWS.

**Lo que muestra:** es **aprendizaje estadístico**. Casi un tercio del programa es el modelo lineal a fondo, con sus supuestos, diagnósticos y arreglos. Eso es justo lo que NeuralWorks pide como «OLS y sus extensiones», y lo que dijiste en el pedido 82: «más especificado en estadística».

### Temas básicos

| Tema | En el temario |
|---|---|
| Estadística descriptiva y tipos de variables | ↔ Data Science (exploración y datos) |
| Tests e intervalos de confianza para pronósticos | ↔ Data Science · ◐ ML 9 (significancia) |
| Correlación: Pearson, Spearman o Kendall | ↔ Data Science (exploración) |
| Regresión simple: MCO, bondad de ajuste y test de normalidad | ◐ ML 13 |
| ANOVA de una y dos vías, razón de correlación | ✗ |
| Variables categóricas en la regresión | ◐ ↔ Data Science (features) |
| Componentes principales | ✅ ML 19 |

### Temas avanzados

| # | Tema | En el temario |
|---|---|---|
| 1a | Regresión múltiple: MCO, test t y F, predicción | ◐ ML 13 |
| 1b | Elegir variables: criterios de información, forward, stepwise y backward | ✗ |
| 1c | Colinealidad: PCR, PLS, Ridge, LASSO y LASSO por grupo | ◐ ML 11 (regularización) |
| 1d | Outliers e influencia: leverage, residuos studentizados, distancia de Cook y estimación robusta | ✗ · ↔ Data Science (limpieza) |
| 1e | Heteroscedasticidad y autocorrelación: Durbin-Watson, Breusch-Pagan, MCG y ARMA en los residuos | ✗ |
| 1f | Regresión con SVM | ◐ ML 15, optativa |
| 2 | Cómputo en la nube (EC2) y bootstrap | ✗ |
| 3 | Series de tiempo: test de Box, SARIMA, diagnóstico, regresión espuria y raíz unitaria | ↔ Data Science (ds/10) |
| 4 | SQL | ↔ AI 9 y Data Science |
| 5 | Spark y PySpark | ✗ · ↔ AI 78, optativa |
| 6 | k-medias, jerárquico, similitud y validación | ✅ ML 18 |
| 7 | Random forest y XGBoost, con error out-of-bag | ✅ ML 17 |
| 8 | Regresión logística | ✅ ML 14 |
| 9 | Máquinas de vectores de soporte | ◐ ML 15, optativa |
| 10 | Redes neuronales | ✅ ML 30 y 31 |
| 11 | Text mining y web scraping | ◐ ML 43 · ✗ web scraping |
| 12 | AWS: S3, IAM, VPC y SageMaker | ✗ |
| 13 | Sistemas de recomendación | ◐ ML 21, optativa |
| 14 | Deep learning: CNN, AlexNet y PyTorch | ✅ ML 35 y 36 |
| 15 | LLM desde la estadística | Fuera de foco: lo cubre AI Engineering, como pediste |

**Cuenta:** de 26 temas (sin el 15), 6 ✅, 8 ◐, 5 ↔ y 7 ✗.

## 3. Libros de ML y DL en BrainFran

Están en `BrainFran/vault/04-Biblioteca/Drive/`. Los índices se leyeron el 2026-11-07 con pypdf.

| Libro | Lo que aporta al temario | Estado del PDF |
|---|---|---|
| **Géron, *Hands-On ML with Scikit-Learn and PyTorch* (2025)** | **La columna de ML clásico y DL.** Lo que el temario no tiene: el proyecto de punta a punta, incluido lanzar, monitorear y mantener (cap. 2); el análisis de errores (cap. 3); DBSCAN y mezclas gaussianas (cap. 8); detección, seguimiento y segmentación (cap. 12); pronosticar series de tiempo (cap. 13); BERT, GPT y de LLM a chatbot (cap. 15); Transformers de visión y multimodales (cap. 16); refuerzo con policy gradients, métodos de valor y actor-critic (cap. 19); precisión mixta y cuantización (apéndice B) | Completo, 878 páginas. El cap. 17 tiene 2 páginas: parece que vive en línea |
| **Géron, *Hands-On ML with Scikit-Learn, Keras and TensorFlow*, 2.ª ed. (2019)** | Lo que no trae la edición de 2025: entrenar y desplegar a escala (cap. 19) y la checklist de un proyecto de ML (apéndice B) | 2 copias: una completa de 851 páginas y otra parcial de 510 |
| **Géron, *Deep Learning avec Keras et TensorFlow*** | En francés. Entrenar y desplegar a gran escala (cap. 11), y autoencoders, GAN y difusión | Se lee, con avisos del PDF |
| **Chang, *Machine Learning Interviews* (2024)** | **Carrera:** roles y matriz de habilidades (cap. 1); CV (cap. 2); entrevistas de algoritmos (cap. 3), de entrenamiento y evaluación (cap. 4), de código en Python y SQL (cap. 5) y de despliegue y monitoreo (cap. 6); entrevista conductual (cap. 7) | Completo, 310 páginas |
| **Zheng y Casari, *Feature Engineering for ML*** | Features de números, texto y categorías; PCA; k-means como feature; features de imágenes | Completo, 217 páginas |
| **Lakshmanan, *Data Science on the Google Cloud Platform*, 2.ª ed. (2022)** | **El GCP que pide NeuralWorks:** llevar datos a la nube, dashboards, streaming con Pub/Sub y Dataflow, Vertex AI Workbench, y Spark en Dataproc | **Incompleto:** termina en la mitad del cap. 7. Faltan los capítulos de ML y MLOps en Vertex AI |
| **Grus, *Data Science from Scratch*, 2.ª ed.** | Cada pieza desde la base: álgebra lineal, estadística, inferencia, descenso de gradiente, kNN, Naive Bayes, regresión, árboles, redes, clustering, recomendación, SQL, MapReduce y ética | Completo, 398 páginas |
| **Brunton y Kutz, *Data-Driven Science and Engineering*** | Para tu lado de ingeniería eléctrica: SVD, Fourier y wavelets (señales, también EEG), regresión y selección de modelos, sistemas dinámicos y control | Completo, 495 páginas |
| **Provost y Fawcett, *Data Science for Business*** | Llevar un problema de negocio a ML, qué es un buen modelo (valor esperado) y curvas de rendimiento | Completo |
| **O'Neil y Schutt, *Doing Data Science*** | Fuga de datos y evaluación en competencias (cap. 13), causalidad (cap. 11) y datos con fecha (cap. 6) | Completo |
| **Chip Huyen, *AI Engineering* (2025)** | Para la salida de Research: fine-tuning, ingeniería de datasets y optimización de inferencia | Completo |

**Lo que falta en la biblioteca** (candidatos, sin verificar todavía):

- ***Designing Machine Learning Systems*, de Chip Huyen:** es MLOps y diseño de sistemas de ML, lo más cercano al puesto de NeuralWorks.
- ***An Introduction to Statistical Learning with Python* (ISLP):** es el enfoque estadístico de la PUCV.
- **Los capítulos de Lakshmanan que faltan en el PDF.**

## 4. Lo que cruza las 3 fuentes

1. **El modelo lineal a fondo es la base que falta.** La PUCV le dedica casi un tercio del programa, y NeuralWorks pide «OLS y sus extensiones». Hoy es una sola lección (ML 13).
2. **Las series de tiempo se piden en todas partes.** Las enseñan la PUCV (SARIMA), Géron (cap. 13) y tu nota, y las piden Suncast y NeuralWorks (fallas). Hoy viven solo en Data Science.
3. **Para conseguir el puesto de MLE hace falta lo que el temario casi no tiene:** MLOps, cloud (GCP o AWS), datos a escala (SQL avanzado y Spark) y explicabilidad. Las 3 fuentes lo traen.
4. **Los modelos clásicos ya están bien cubiertos:** logística, árboles, ensambles, clustering, PCA, redes y CNN coinciden en las 3 fuentes. Hay que subir a esenciales SVM y recomendación, que hoy son optativas, y sumar la detección de anomalías.
5. **La entrevista se da con código en vivo.** NeuralWorks usa HackerRank, y Chang dedica un capítulo a programar en Python y SQL. Eso choca con la regla de no escribir código a mano.
