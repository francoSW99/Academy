# La oferta de data scientist de NeuralWorks, punto por punto

> **Pedido 103 (2026-11-07):** Fran pidió que el curso y el temario cubran «todos y cada uno de los puntos necesarios sobre la descripción del puesto, requerimientos del cargo y nice to have». Si hace falta, se suma ingeniería de datos o se cambia el temario de ML y DL.
>
> **Fuente:** la oferta que Fran pegó en el chat, guardada en BrainFran (`08-Carrera/Ofertas/Data Scientist - NeuralWorks.md`). Los códigos (D, E, R y N) son los que cita la columna Origen de la [propuesta v1](propuesta-ds-v1.md).

**Resultado:** cada punto que se puede enseñar tiene al menos una lección. Lo que no se enseña son el título universitario y los años de experiencia; los proyectos y el portafolio ayudan a compensarlos.

## Los ejemplos de la empresa (el aviso empieza por ahí)

| # | Lo que dice | Dónde se cubre |
|---|---|---|
| C1 | «un modelo predictor basado en monte carlo» | DS: `simulacion-monte-carlo` |
| C2 | «una red convolucional para detección de caras» | DS: `req-vision` → ML: `cnn` y `computer-vision` |
| C3 | «un sensor de posición bluetooth» | Fuera de alcance: es hardware |
| C4 | «la recreación de un espacio acústico usando finite impulse response» | ML, Research: `senales-y-frecuencias` (filtros y frecuencias). No es parte del puesto |

## Descripción del cargo

| # | Lo que pide | Dónde se cubre |
|---|---|---|
| D1 | Proyectos con datos enormes e IA: **predecir fallas**, **optimizar pricing**, **personalizar la experiencia del cliente**, **optimizar el uso de combustible** y **detectar caras y objetos** | Fallas: `decidir-con-predicciones`, más `req-ml-clasico` y `repaso-series` (anomalías y series viven en ML) · Pricing: `pricing` · Personalizar: `personalizacion` · Combustible: `optimizacion` · Caras y objetos: `req-vision` |
| D2 | Trabajar con ML engineers, translators y data engineers | `equipo-de-datos`, `repaso-roles` |
| D3 | Construir productos basados en datos | `productos-de-datos` |
| D4 | Integrado con los clientes y el negocio, con un ciclo rápido para iterar y corregir | `equipo-de-datos`, `productos-de-datos` y todo el Camino 1 |
| D5 | Colaboración, pasión por la innovación y el código, y automatizar antes que hacer a mano | `reportes-reproducibles`, `etl-y-elt`, `analizar-con-un-llm` |

## El trabajo de cada proyecto

| # | Lo que pide | Dónde se cubre |
|---|---|---|
| E1 | Identificar los problemas de analítica con más impacto | `elegir-el-problema` |
| E2 | Familiarizarse con el problema junto a expertos: información, opiniones y facts | `entender-con-expertos` |
| E3 | Investigar las mejores prácticas de la industria | `repaso-leer-papers` → AI Engineering, lección 111 |
| E4 | Definir hipótesis y enfoque técnico: datos, variables y período | `hipotesis-y-plan` |
| E5 | Recopilar datos estructurados y no estructurados, de muchas fuentes | `obtener-datos`, `datos-no-estructurados` |
| E6 | Limpiar los datos y validar que estén correctos | `limpieza-y-calidad`, `validar-datos` |
| E7 | Aplicar modelos y algoritmos de minería de datos | `req-ml-clasico`, `req-modelo-lineal` |
| E8 | Analizar resultados e identificar patrones y tendencias | `patrones-y-tendencias`, `eda-y-correlaciones` |
| E9 | Diseñar soluciones junto a los ML engineers | `productos-de-datos`, `repaso-ciclo-de-vida` |
| E10 | Comunicar los resultados y discutirlos con expertos o con quienes deciden | `storytelling`, `visualizacion` |
| E11 | Algunos proyectos tienen desafíos complejos de visión por computador | `req-vision` |

## Requerimientos del cargo

| # | Lo que pide | Dónde se cubre |
|---|---|---|
| R1 | Ingeniería civil en computación o similar | No se enseña |
| R2 | Al menos 3 años como data scientist, data engineer o similar | No se enseña; los proyectos de los dos caminos dan portafolio |
| R3 | Python | `repaso-python` → AI Engineering, lección 5; `pandas-como-operaciones` |
| R4 | Estructuras de datos, y análisis de datos no estructurados | `datos-no-estructurados`, `entrevista-de-data-scientist` |
| R5 | SQL avanzado, con optimización de consultas | `sql-avanzado` (pasa de ML a Data Science) |
| R6 | Entender el ciclo de vida completo de los modelos de ML y de los productos de datos | `repaso-ciclo-de-vida`, `productos-de-datos` |
| R7 | Habilidades de análisis, diseño y resolución de problemas | `elegir-el-problema`, `hipotesis-y-plan` y los 2 proyectos |
| R8 | Colaboración y comunicación (la oferta lo pide dos veces) | `equipo-de-datos`, `storytelling` |
| R9 | Inglés de lectura para papers, artículos y documentación | `repaso-leer-papers`; además, todas las lecciones citan fuentes en inglés |

## Deseable (nice to have)

| # | Lo que pide | Dónde se cubre |
|---|---|---|
| N1 | Cloud (GCP, AWS o Azure), sobre todo sus servicios de procesamiento de datos | `datos-en-la-nube`, `spark-y-pyspark`, `etl-y-elt` |
| N2 | Pipelines de CI/CD y Docker | `repaso-docker-y-ci` → AI Engineering, lección 77 |
| N3 | Visión por computador con OpenCV, PyTorch o TensorFlow, YOLO, Detectron2 u otras | `req-vision` → ML: `imagenes-y-opencv` (nueva), `cnn` y `computer-vision`, que ahora nombra YOLO y Detectron2 |

## Lo que la oferta le cambia a ML y DL

1. **Nueva lección en «Visión»:** «Imágenes como datos: píxeles, OpenCV y preprocesamiento» (N3).
2. **«Computer vision» nombra YOLO y Detectron2** en su título (N3).
3. **SQL avanzado y Spark pasan a Data Science,** al módulo «Gestionar datos». ML los pide como requisito, y conserva el streaming y la infraestructura como código.
