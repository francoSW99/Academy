# Temario de Data Science al 100 %

> **Pedido 100 (2026-11-07):** «AHORA TENEMOS QUE MEJORAR EL TEMARIO DE DATA SCIENCE ASI Q PREPARATE». **Pedido 101:** «luego ponte a investigar lo de datascience (temario)».
>
> **Pedido 103 (2026-11-07):** Fran tomó las 5 decisiones y entregó la oferta de data scientist de NeuralWorks ([feedback.md](feedback.md)).
>
> **Pedido 104 (2026-11-07):** aprobada y publicada.
>
> **Estado:** la **[propuesta v1](propuesta-ds-v1.md)** está **publicada** en https://academy.woorky.app/es/data-science/ y en la nota de BrainFran: 55 lecciones, dos caminos y cada punto de la oferta de NeuralWorks cubierto ([mapa](mapa-neuralworks-ds.md)). La fase 5f está terminada.

## La meta

**Qué es un data scientist,** según la investigación de los roles ([ml-vs-ds.md](../ml-dl/ml-vs-ds.md), 16 fuentes): alguien que **entiende un problema con datos y ayuda a decidir.** Entrega un análisis, un experimento o un prototipo, con su recomendación. Trabaja como científico: explora, prueba y descarta. Provost y Fawcett lo dicen así: «the ultimate goal of data science as improving decision making» (cap. 1, p. 5).

**Lo que buscas tú** (Pilar 2 de tu nota): un puesto corporativo de data scientist o de ML engineer, también en energía, y entender por qué funciona cada cosa.

**La regla con ML y DL** (pedido 94): todos los modelos viven en ML. Data Science los usa con repasos, y el modelo lineal lo pide como requisito. Cada tema se profundiza en un solo curso.

## Cómo está hoy

Lo que está publicado es el **esqueleto** que salió de la propuesta ML v2: **24 lecciones (21 esenciales), 6 repasos y 1 requisito, en 10 módulos.**

| Bloque | Lecciones | Además |
|---|---:|---|
| Empezar | 2 | 1 repaso (roles) |
| Los datos | 6 | 1 repaso (features) |
| Explorar y comunicar | 4 | 1 repaso (series de tiempo) |
| Estadística para decidir | 10 | 1 requisito (modelo lineal) |
| Modelos como herramienta | 0 | 2 repasos |
| Especialización y oficio | 2 | 1 repaso (carrera) |

**De dónde salió:** del reparto con ML (pedidos 94 a 98) y del Pilar 2. **Nunca se comparó con los temarios de Data Science de las universidades**, y le falta lo que sí tiene ML: un proyecto, ofertas de referencia y un mapa de skills.

## Qué enseñan los temarios de Data Science

Los verifiqué el 2026-11-07. Sus links están en tu Catálogo de fuentes (Búsqueda 1).

| Fuente | Qué enseña | Lo que nos importa |
|---|---|---|
| **Harvard CS 1090A**, Data Science 1 (otoño de 2026) | Las 5 caras de una investigación con datos: recolectar («wrangling, cleaning, and sampling»), gestionar los datos, explorar, predecir y **comunicar** | Gestionar datos y comunicar son partes completas del oficio |
| **Berkeley Data 102**, Data, Inference, and Decisions (otoño de 2026) | Lo describe así: «develops the probabilistic foundations of inference in data science». Ve decisiones bayesianas y frecuentistas, tests de permutación, **tasa de falsos descubrimientos**, modelos jerárquicos, diseño de experimentos, intervalos, inferencia causal, **Thompson sampling**, control óptimo, Q-learning, **privacidad diferencial**, clustering y recomendación | Data Science también es **decidir con incertidumbre**, y eso casi no está en nuestro esqueleto |
| **Berkeley Data 8 → Data 100 → Data 140** | Pensamiento computacional e inferencial; datos, exploración, visualización, muestreo, inferencia y bootstrap; probabilidad | Ya estaba en la investigación de roles |
| **Stanford, Data Science B.S.** (desde septiembre de 2026) | Programación, matemática, DATASCI 112 *Principles of Data Science* (Python), probabilidad, estadística aplicada (STATS 191) y **optimización** (MS&E 111) | La optimización es parte del núcleo: falta |
| **Stanford, MS en Estadística con mención Data Science** | Teoría, **regresión y ANOVA**, inferencia causal o diseño de experimentos, procesos estocásticos y aprendizaje estadístico | Ya estaba en la investigación de roles |
| **HarvardX, Professional Certificate in Data Science** | **Todo en R:** herramientas de productividad (git, Unix, RStudio, reportes reproducibles), R, wrangling, visualización con ggplot2, probabilidad, inferencia y modelado, regresión lineal, ML con un recomendador y un capstone | Respalda tu decisión de que **R entra**, y suma **reportes reproducibles** |
| **DeepLearning.AI, Data Analytics** (actualizado el 2026-09-29) | Planillas, estadística aplicada, Python, datos con SQL y APIs (incluido scraping), storytelling con **Tableau** y la búsqueda de trabajo. Usa **LLMs para explorar y analizar datos** en varios cursos | Planillas, BI y análisis con IA: faltan o quedan cortos |
| **Google Advanced Data Analytics** (en Coursera, 2026) | Fundamentos de DS, ir más allá de los números, estadística, regresión y lo básico de ML, con un capstone. Prepara para «associate data scientist» | Ya estaba en la investigación de roles |
| **Diplomado PUCV** (versión 30) | Estadística descriptiva, tests, correlación, ANOVA, componentes principales, SQL, Spark y AWS | Casi todo lo estadístico ya quedó repartido |

## Diagnóstico

### Lo que falta

| # | Hueco | Por qué |
|---|---|---|
| 1 | **Un proyecto propio** | ML tiene 5 (el de Industria, el mini-proyecto y los 3 grandes de Research, más uno optativo); Data Science, ninguno |
| 2 | **Decidir con incertidumbre:** optimización, decisiones bayesianas, bandits y Thompson sampling, y analítica prescriptiva | Está en el núcleo de Stanford (MS&E 111), en Berkeley (Data 102) y en tu diplomado de IA para negocios («Analítica predictiva y prescriptiva»). Hoy es 1 lección optativa |
| 3 | **Muchas pruebas a la vez:** tasa de falsos descubrimientos y tests de permutación | Berkeley Data 102. Sin esto, se encuentran efectos que no existen |
| 4 | **Métricas de producto y de negocio:** KPIs, embudos, cohortes y retención | Chang describe al «product data scientist» (paso C.2: A/B y monitoreo). Provost y Fawcett dedican capítulos a pensar en el negocio |
| 5 | **Analizar datos dirigiendo a un LLM** | DeepLearning.AI ya lo enseña en 2026, y es la forma de trabajar de Academy |

### Lo que queda corto

| # | Tema | Hoy | Lo que piden |
|---|---|---|---|
| 6 | **Gestionar datos:** bases, data warehouse y ETL | Solo «SQL como operaciones» | Harvard lo pone como una cara completa del oficio. Tus notas de BrainFran tienen material de ETL y de ingeniería de datos |
| 7 | **Herramientas de BI y planillas:** Power BI, Tableau o Looker, y Excel | 1 lección de dashboards | DeepLearning.AI y Google usan Tableau, IM2 Solar pide Power BI y tus notas de Platzi son de Power BI |
| 8 | **Reportes reproducibles** | No está | HarvardX abre con eso: git, notebooks y reportes que se pueden volver a correr |
| 9 | **Carrera de data scientist:** su entrevista (SQL, estadística, A/B y sentido de producto) | Solo un repaso de la de ML | Chang cubre los dos roles, pero la entrevista de data scientist pesa distinto |
| 10 | **Privacidad diferencial** | No está; la ética es 1 lección | Berkeley Data 102 |

## Fuentes listas

| Fuente | Qué cubre | Estado |
|---|---|---|
| **Catálogo de fuentes, Búsqueda 1** («de cero a data scientist especializado en ML») | 134 fuentes: MIT (18.05, 18.650, 15.071 *The Analytics Edge*, MicroMasters SDS), Stanford (Data Science B.S., CS109, MS&E 228 de causalidad con ML), Berkeley (Data 8, 100, 140 y 102), Harvard (CS 1090A/B y HarvardX), Google, IBM, Microsoft, DeepLearning.AI y Databricks | En BrainFran; los links se revisaron el 2026-10-24 |
| **Búsqueda 2** (ML engineer contra data scientist) | Las 16 fuentes de los roles | En BrainFran, con fichas y copias |
| **Libros:** Provost y Fawcett; O'Neil y Schutt; Grus; Lakshmanan (incompleto); Chang | Pensar en el negocio, el proceso de DS, causalidad, fuga de datos, SQL y entrevistas | PDFs en BrainFran |
| **Libros gratis del catálogo:** *Computational and Inferential Thinking* (Data 8), *Probability for Data Science* (Data 140), *Learning Data Science* (Lau, Gonzalez y Nolan), ISLP, *Applied Causal Inference Powered by ML and AI* (Chernozhukov y otros) | Los textos de los cursos | Links en el catálogo |
| **Tus notas de Data Science** | Ruta de DS (pasos, Excel, Python, R, SQL, Power BI, Tableau y estadística), la guía para empezar una carrera (analista, data scientist y data engineer), bases de datos con SQL, ETL e ingeniería de datos con Power BI | `04-Biblioteca/IA/DATA SCIENCE/`, 82 KB |
| **Diplomado de IA aplicada a negocios** | Analítica predictiva y prescriptiva, recomendación, visualización y storytelling, e implementar en una empresa | `05-Estudio/Diplomado IA aplicada a negocios/` |
| **Diplomado PUCV** | El lado estadístico | `fuentes/` de ML y DL, y en BrainFran |
| **Ofertas** | IM2 Solar (PR, SCADA, Power BI y Python), Rising Sun (ejercicio con un dataset) y Fintoc (SQL, Python y métricas) | `08-Carrera/Ofertas/`. **No hay ninguna oferta de data scientist guardada** |

**Lo que falta:** libros clásicos que no están en tu biblioteca. Son candidatos, sin verificar: *Practical Statistics for Data Scientists*, *Storytelling with Data*, *Trustworthy Online Controlled Experiments*, *Causal Inference: The Mixtape* y *The Effect* (gratis), *Python for Data Analysis* y *R for Data Science* (gratis).

## Cómo se trabaja

Igual que con ML: tus decisiones, después la propuesta v1 generada desde `estructura.py` (el mismo archivo de ML, bloque `DS`), tu feedback, el borrador y publicar. Las fuentes nuevas se guardan en BrainFran como «Búsqueda 3».

## Decisiones

Las 5 decisiones se tomaron en el pedido 103 y están en [feedback.md](feedback.md). Las preguntas que quedan abiertas están al final de la [propuesta v1](propuesta-ds-v1.md).
