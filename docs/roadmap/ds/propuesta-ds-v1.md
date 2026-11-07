# Propuesta de temario de Data Science, versión 1

> **Estado:** **aprobada y publicada el 2026-11-07 (pedido 104)** en https://academy.woorky.app/es/data-science/, junto con sus 3 cambios para ML y DL.
>
> **Cómo se hizo:** sin subagentes. Sale de tus 5 decisiones ([feedback.md](feedback.md)), de cubrir cada punto de la oferta de data scientist de NeuralWorks ([mapa-neuralworks-ds.md](mapa-neuralworks-ds.md)), de los 9 temarios verificados en el [README](README.md) y de la regla de reparto con ML ([ml-vs-ds.md](../ml-dl/ml-vs-ds.md)).
>
> **Se genera** desde `research_notes/propuesta_ml/estructura.py` (bloque `DS`) con `gen_doc_ds.py`, que comprueba que cada repaso y cada requisito apunten a una lección que existe.

## Cifras

- **Data Science:** 55 lecciones (51 esenciales) en 17 módulos, más 10 repasos y 3 requisitos. Hoy el sitio muestra 24.
- **ML y DL:** pasa de 114 a 113 lecciones, por los cambios de abajo.
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

### Empezar · para los dos caminos


**Módulo 1 · El oficio**


> Cada práctica de Data Science termina en un análisis y una recomendación.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 1 | Qué es la ciencia de datos: entender y decidir con datos | sí | Provost y Fawcett, cap. 1; Nota, Pilar 2, bloque 1; Harvard CS 1090A (las 5 caras de una investigación con datos) |
| ↺ | *Repaso: ML engineer, data scientist y los demás* | repaso | Repaso corto · a fondo en ML y DL · `ml/ml-engineer-o-data-scientist` |
| 2 | Trabajar en un equipo de datos: ML engineers, data engineers, translators y negocio | sí | NeuralWorks DS D2, D4, E9, R7 y R8; Chang, cap. 1; Kästner, Machine Learning in Production, cap. 21 |
| 3 | De la pregunta a la decisión: el proceso de un análisis | sí | Provost y Fawcett, cap. 2; Nota, Pilar 2, bloque 2; O'Neil y Schutt, cap. 2 |

**Módulo 2 · Plantear el problema**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 4 | Elegir el problema que más impacta: valor esperado y prioridades | sí | NeuralWorks DS E1; Provost y Fawcett, caps. 2 y 7 |
| 5 | Entender el problema con los expertos: preguntas, facts y opiniones | sí | NeuralWorks DS E2; Kästner, Machine Learning in Production, cap. 6 (Gathering Requirements) |
| ↺ | *Repaso: investigar lo que ya se sabe en papers, documentación y casos* | repaso | Repaso corto · a fondo en AI Engineering (lección 111) · `ai/m-leer-papers` |
| 6 | Hipótesis y plan de análisis: datos, variables y período | sí | NeuralWorks DS E4; O'Neil y Schutt, cap. 2 |

### Los datos


**Módulo 3 · Conseguir datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: Python como lenguaje técnico* | repaso | Repaso corto · a fondo en AI Engineering (lección 5) · `ai/python-lenguaje-tecnico` |
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
| ↺ | *Repaso: features y fuga de datos* | repaso | Repaso corto · a fondo en ML y DL · `ml/features-para-modelar` |

### Explorar y comunicar


**Módulo 6 · Explorar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 21 | Estadística descriptiva y tipos de variables | sí | PUCV, básico 1; Data 100 (EDA) |
| 22 | Análisis exploratorio y correlación: Pearson, Spearman o Kendall | sí | PUCV, básico 3a; Nota, Pilar 2, bloque 6 |
| 23 | Encontrar patrones y tendencias: comparar grupos, cohortes y el tiempo | sí | NeuralWorks DS E8; O'Neil y Schutt, cap. 6 |
| ↺ | *Repaso: explorar series de tiempo* | repaso | Repaso corto · a fondo en ML y DL · `ml/series-por-dentro` |
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
| ⇢ | *Requisito: el modelo lineal a fondo (8 lecciones)* | requisito | Requisito · se estudia completo en ML y DL, módulo «Regresión lineal: el modelo base» · `ml/regresion` |
| ⇢ | *Requisito: ML clásico (clasificación, sin etiquetas y evaluar)* | requisito | Requisito · se estudia completo en ML y DL, módulos «Clasificación», «Sin etiquetas» y «Evaluar e interpretar» · `ml/clasificacion` |
| ⇢ | *Requisito: visión por computador (OpenCV, CNN, YOLO y Detectron2)* | requisito | Requisito · se estudia completo en ML y DL, módulo «Visión» · `ml/imagenes-y-opencv` |
| ↺ | *Repaso: explicar un modelo para contarlo* | repaso | Repaso corto · a fondo en ML y DL · `ml/interpretar-un-modelo` |

**Módulo 11 · Del análisis al producto de datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: el ciclo de vida de un modelo en producción* | repaso | Repaso corto · a fondo en ML y DL · `ml/del-notebook-a-produccion` |
| 39 | Productos de datos: del análisis a algo que el negocio usa, junto a los ML engineers | sí | NeuralWorks DS D3, D4, E9 y R6; Provost y Fawcett, cap. 13 |
| ↺ | *Repaso: Docker y CI/CD* | repaso | Repaso corto · a fondo en AI Engineering (lección 77) · `ai/desplegar` |

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
| ↺ | *Repaso: escribir y publicar un estudio* | repaso | Repaso corto · a fondo en AI Engineering (lección 114) · `ai/m-publicar` |

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
| ↺ | *Repaso: CV, portafolio y la entrevista conductual* | repaso | Repaso corto · a fondo en ML y DL · `ml/cv-y-portafolio-ml` |
