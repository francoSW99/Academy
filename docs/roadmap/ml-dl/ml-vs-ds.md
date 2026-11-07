# ML engineer y data scientist: en qué se diferencian, y cómo se reparten los temarios

> **Pedido 94 (2026-11-07):** investigar en qué se diferencian, para repartir los temarios de ML y de Data Science sin profundizar dos veces en lo mismo. Primera versión, hecha con tu biblioteca (Chang, Provost y Fawcett), la guía de Google y Berkeley.
>
> **Pedido 95 (2026-11-07):** antes de aprobar, investigar más a fondo en la web, en MIT, Stanford, cursos de Google y otras fuentes confiables, lo más actuales posible. Esta versión suma 12 fuentes web, y quedan 16 en total. Todas se leyeron el 2026-11-07, y cada una lleva su fecha.

## 1. La respuesta corta

| | Data scientist | ML engineer |
|---|---|---|
| **Para qué está** | Entender un problema con datos y ayudar a decidir | Convertir modelos en sistemas que funcionan solos, a escala y por mucho tiempo |
| **Qué entrega** | Un análisis, un experimento, un modelo prototipo y una recomendación | Un pipeline o un servicio en producción, monitoreado |
| **Cómo trabaja** | Como científico: explora, prueba y descarta | Como ingeniero: diseña, prueba, versiona y automatiza |
| **Lo que comparten** | La teoría de ML y la estadística, Python y SQL. **Los dos saben crear y entrenar modelos** | |

Lo apoyan **las 16 fuentes**, con una advertencia que repiten varias: cada empresa usa los títulos a su manera.

## 2. Universidades

### MIT

- **MicroMasters in Statistics and Data Science** (MITx e IDSS, página © 2016-2026). Así describe al data scientist: «Data scientists bring value to organizations across industries because they are able to solve complex challenges with data and drive important decision-making processes». Todos sus alumnos cursan **Probability** y **Machine Learning**. → [micromasters.mit.edu/ds](https://micromasters.mit.edu/ds/)
- **MIT Sloan**, Sara Brown (27 de mayo de 2020, **antigua**). «While engineers maintain the data, data scientists figure out what to do with it.» Llama a los ML engineers «data engineers with specific knowledge in machine learning and artificial intelligence». → [mitsloan.mit.edu](https://mitsloan.mit.edu/ideas-made-to-matter/how-to-build-a-data-analytics-dream-team)

### Stanford

- **El MS en Estadística, mención Data Science,** tiene este núcleo obligatorio:
  - STATS 200 Introduction to Statistics Theory;
  - **STATS 203 Regression Models and ANOVA**;
  - STATS 209 Causal Inference o STATS 263 Design of Experiments;
  - STATS 217 Stochastic Processes;
  - STATS 202 Statistical Learning and Data Science.

  Después vienen métodos computacionales (cómputo paralelo, sistemas para ML, datos masivos) y ML aplicado (CS 229, CS 224N, CS 234 y otros). En ML aplicado ofrece **«Machine Learning Methods for Neural Data Analysis»**, y la práctica final puede hacerse en el laboratorio de neurociencia computacional. → [statistics.stanford.edu](https://statistics.stanford.edu/academic-programs/graduate-programs/statistics-data-science-curriculum)
- **CS 329S, Machine Learning Systems Design** (Chip Huyen, invierno de 2022), es el curso del lado ML engineer: «Machine learning systems design is the process of defining the software architecture, infrastructure, algorithms, and data». Ve datos e ingeniería de datos, features, entrenar, escalar, desplegar y monitorear, la estructura del equipo, privacidad y fairness. → [stanford-cs329s.github.io](https://stanford-cs329s.github.io/)

### Berkeley

- **Data 100** (apuntes de Fall 2025) es casi todo datos y estadística: exploración, visualización, muestreo, inferencia y bootstrap. De modelos, ve OLS, regresión logística, clustering y PCA. Los modelos a fondo van en CS 189. → [ds100.org/course-notes](https://ds100.org/course-notes/)

### CMU

- **Christian Kästner, *Machine Learning in Production*** (libro de CMU; el cap. 20 se actualizó el 2024-06-17).
  - El cap. 20 dice que los procesos de los dos roles «differ significantly». Del data scientist: «the actual model development process is usually highly iterative and exploratory» y «model development uses a science mindset». De la ingeniería: «Traditional software projects have much more of an engineering flavor than a science flavor». Y sobre los notebooks: «they are usually not a good tool to develop and maintain production pipelines».
  - El cap. 21, sobre la persona que sabe todo: «As the term unicorn suggests, such multi-talented people are rare or might not even exist». Recomienda equipos interdisciplinarios de personas con forma de T: expertas en un tema y con nociones de los demás.
  → [mlip-cmu.github.io/book](https://mlip-cmu.github.io/book/)

## 3. Empresas tech

### Google

- **Google Cloud, roles en GKE** (actualizada el 2026-11-07).
  - **Data scientist:** «Their aim is to build the most optimal model to solve a business problem». Sus tareas: «Analyze data, create statistical and ML models», «Create, train, and improve ML algorithms and models», «Clean data sets for use in statistical models» y «Consult on defining business goals and objectives through use of ML».
  - **ML engineer:** «Machine learning (ML) engineers are core MLOps users, with expertise in code, ML, and deployment. Their goal is to standardize ML practice and operationalize models for deployment». Sus tareas: preparar el ambiente, desplegar, lo que viene después de producción y la gobernanza.
  - **Data engineer:** «bring data from data sources and make it available to the right people».

  → [docs.cloud.google.com](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks)
- **Google Cloud, roles de IAM por función** (actualizada el 2026-11-04).
  - **Data Scientist:** «collecting and validating data, classifying data types, and identifying patterns in data sets. These users use the analyzed data to build models that can suggest potential solutions to business problems».
  - **ML Engineer:** «specialize in developing machine learning (ML) models and techniques. Their goal is to standardize ML practices as well as operationalize and scale ML models for deployment».

  → [docs.cloud.google.com](https://docs.cloud.google.com/iam/docs/job-functions/roles-for-job-functions)
- **Google Cloud, MLOps** (actualizada el 2024-08-28). «The process separates data scientists who create the model and engineers who serve the model as a prediction service.» → [docs.cloud.google.com](https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)
- **Guía del examen Professional ML Engineer** («as of June 1, 2026»). La mitad del examen pasa después de entrenar: servir, pipelines y monitorear. Desde 2026 también pide nociones de prompt y context engineering y de modelos fundacionales. → [guía en PDF](https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf)
- **Google Advanced Data Analytics**, en Coursera (página de 2026). Es el certificado de Google para el lado data scientist; prepara para «associate data scientist» y «junior data scientist». Sus cursos, en orden:
  1. Foundations of Data Science;
  2. Go Beyond the Numbers;
  3. The Power of Statistics;
  4. **Regression Analysis**;
  5. The Nuts and Bolts of Machine Learning;
  6. el capstone.

  → [coursera.org](https://www.coursera.org/professional-certificates/google-advanced-data-analytics)

### Microsoft: la señal más clara de 2026

- **Microsoft retiró el 2026-06-01 su certificación de data scientist (DP-100) y la reemplazó por una de MLOps engineer (AI-300),** según su blog oficial (5 de marzo de 2026, actualizado el 12 de mayo). La razón que da: «AI roles have evolved from model experimentation to enterprise-scale AI operations». El examen nuevo pone «much stronger emphasis on validating your knowledge and experience in automation»: CI/CD completo, infraestructura como código, versionar, lanzar y volver atrás, monitorear y operar IA generativa. → [techcommunity.microsoft.com](https://techcommunity.microsoft.com/blog/skills-hub-blog/new-certification-for-machine-learning-operations-mlops-engineers/4494111)

### AWS

- **AWS Certified ML Engineer – Associate, MLA-C02** (beta desde septiembre de 2026). Valida «a candidate's ability to build, operationalize, deploy, and maintain AI and ML solutions and pipelines». Pide 1 año en un rol cercano, «such as a backend software developer, DevOps developer, data engineer, or data scientist»: **el data scientist es uno de los caminos de entrada al ML engineer.** Pide también las bases de la ingeniería de datos, código modular y reutilizable, CI/CD e infraestructura como código. El examen se reparte en preparar datos (28 %), desarrollar modelos (24 %), desplegar y orquestar (24 %) y operar, monitorear y asegurar (24 %). → [docs.aws.amazon.com](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)

### Coursera

- **Coursera Staff** (actualizado el 2026-09-21). «Data scientists help their organizations utilize data to make better decisions. This process involves collecting and cleaning data and creating statistical models that analyze the data.» «Machine learning engineers build programs such as software applications, predictive models, and algorithms.» → [coursera.org](https://www.coursera.org/articles/machine-learning-engineer-vs-data-scientist)

## 4. Tu biblioteca (de la primera versión)

- **Provost y Fawcett, *Data Science for Business*, cap. 1, pp. 4-5:** «the ultimate goal of data science as improving decision making». En la p. 7 separan la ingeniería de datos: «Data engineering and processing are critical to support data science, but they are more general».
- **Chang, *Machine Learning Interviews*, cap. 1:**
  - **p. 7:** «my teams had data scientists train ML models while MLEs built the infrastructure […] In some other companies, MLEs are the ones who train ML models».
  - **p. 11:** el ciclo de un proyecto, del paso A al D: datos, entrenar, infraestructura, A/B y reportes.
  - **p. 15, tabla 1-3:** los dos roles tienen ★★★ en teoría de ML y estadística, en explorar datos y en programar. Se separan en infraestructura (★ contra ★ a ★★★) y en comunicar (★★★ contra ★★).

## 5. Lo que cambia con la investigación nueva

> **Aplicado el 2026-11-07 (pedido 96):** Fran aprobó los 4 ajustes, y están en `docs/roadmap/ml-dl/propuesta-ml-v2.md`.

1. **La frontera se confirma.** Las 16 fuentes coinciden: el data scientist entiende y decide, y el ML engineer lleva a producción, escala y opera.
2. **Los modelos son terreno compartido, y la regresión pesa del lado de Data Science.** Stanford pone «Regression Models and ANOVA» en el núcleo de Data Science, Google pone «Regression Analysis» en su certificado de data scientist, y la PUCV es un instituto de estadística. **Tu decisión 1 se mantiene:** todos los modelos viven en ML. Pero un data scientist necesita el modelo lineal a fondo, y un repaso corto no le alcanza. **Ajuste propuesto:** Data Science manda a estudiar el módulo del modelo lineal de ML como requisito, en vez de un repaso de 5 minutos. No se profundiza dos veces: es una sola lección, que los dos cursos usan.
3. **En 2026, el ML engineer se mueve hacia operaciones y también opera IA generativa.**
   - Microsoft cambió su certificación de data scientist por una de MLOps.
   - Google pide prompt y context engineering en su examen de ML engineer.
   - AWS sumó flujos con agentes.

   **Ajuste propuesto:** una lección en la salida de Industria, «Operar IA generativa en producción, lo justo», con repaso hacia AI Engineering, sin repetir su contenido.
4. **La ingeniería de datos es un tercer rol.** Google, MIT y Chang la separan, y AWS le pide al ML engineer sus bases («data engineering fundamentals»). **Ajuste propuesto:** las 3 lecciones de datos a escala de Industria (Spark, colas y pipelines de datos) se marcan como bases para un ML engineer, no como formación de data engineer. Eso calza con tu decisión 3.
5. **Cambia lo que se entrega, no solo el tema.** Según CMU, cada rol trabaja con otra mentalidad. **Ajuste propuesto:** las prácticas de Data Science terminan en un análisis y una recomendación; las de la salida de Industria, en un pipeline o un servicio que funciona.
6. **Tu rama de neurociencia tiene respaldo.** Stanford ofrece «Machine Learning Methods for Neural Data Analysis» dentro de su mención de Data Science.

## 6. La regla para repartir (se mantiene)

1. **ML y Deep Learning = construir modelos que predicen, y llevarlos a producción o a la investigación.** Todos los modelos viven aquí, a fondo.
2. **Data Science = responder preguntas y tomar decisiones con datos.** Abarca obtener, limpiar y explorar los datos; visualizar y comunicar; la estadística para decidir; la inferencia causal, la econometría y R.
3. **Un tema se profundiza en un solo curso.** El otro lleva una **lección de repaso** (corta, con enlace) o, si lo necesita entero, la marca como **requisito** y manda a la lección del otro curso.

## 7. Los temas de frontera

| Tema | Vive a fondo en | El otro curso lleva |
|---|---|---|
| Regresión lineal: MCO, tests t y F, diagnóstico y colinealidad | ML | DS: **requisito** (el módulo completo de ML), y lo usa en econometría |
| Series de tiempo: SARIMA, raíz unitaria, ML y redes | ML | DS: repaso para explorar series |
| Clustering, PCA y recomendación | ML | DS: repaso, para segmentar |
| Probabilidad de base: variables aleatorias, distribuciones, ley de los grandes números y teorema central del límite | DS | ML: repaso. Lo propio de ML (verosimilitud, Bayes para modelar) queda en ML |
| Muestreo, intervalos, tests, p-valor y bootstrap | DS | ML: repaso. Los tests t y F de la regresión son parte del modelo y quedan en ML |
| Comparar modelos con semillas y ablaciones | ML | — |
| Experimentos A/B y diseño de experimentos | DS | ML: lanzar un modelo con A/B o canary es MLOps y queda en ML, con repaso de la estadística |
| Limpiar datos, calidad y exploración | DS | ML: repaso dentro del proyecto de punta a punta |
| Features para el modelo y pipelines sin fuga | ML | DS: repaso |
| SQL como operaciones | DS (y AI Engineering) | ML: SQL avanzado y optimizar consultas, que es otro nivel |
| Spark, colas y pipelines de datos | ML (Industria), solo las bases | — |
| Visualización, storytelling y dashboards | DS | — |
| Explicar un modelo (SHAP) | ML | DS: repaso, para contar resultados |
| Ética de datos y privacidad | DS | ML: sesgo y seguridad del modelo en producción son IA responsable y quedan en ML |
| Inferencia causal y econometría | DS | ML Industria: repaso |
| Operar IA generativa en producción | ML (Industria), lo justo | AI Engineering lo enseña a fondo; ML lleva repaso |
| R | DS: qué es, para qué sirve y cuándo usarlo | ML: repaso en la lección de herramientas |
| Roles, CV y entrevistas | ML (cierre) | DS: repaso |
| Energía | ML: el pronóstico solar es el proyecto de Industria | DS: analítica de plantas (PR, disponibilidad, SCADA y reportes), como piden IM2 Solar y Rising Sun |
| Neurociencia | ML (Research) | — |

## 8. Lo que no se pudo verificar o se descartó

- **Harvard Data Science Review (MIT Press), «From Unicorn Data Scientist to Key Roles in Data Science» (2022).** No se pudo abrir: el sitio devuelve 403. Según la búsqueda, deja 3 roles clave (data scientist, data analyst y data engineer) sin el ML engineer, pero eso no está leído en la fuente.
- **IBM Think, «Data science vs. machine learning».** Lo descarté: no tiene fecha y dice que SQL no hace falta para ML, lo que contradice a Google, AWS, Chang y tus ofertas.
- **El nombre de la plataforma de ML de Google.** La guía de 2026 dice «Gemini Enterprise Agent Platform», y el libro de Lakshmanan (2022), «Vertex AI». Falta confirmar si es un cambio de nombre oficial.
- **Varias citas web salen de una herramienta que resume la página.** Las frases entre comillas son las que devolvió textuales. Antes de usarlas en una lección, se vuelven a abrir en la fuente.
