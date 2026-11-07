# Propuesta de temario de ML y Deep Learning, versión 1 (y el reparto con Data Science)

> **Estado:** propuesta para tu feedback (pedido 94). **El sitio sigue mostrando la v3** hasta que la apruebes.
>
> **Cómo se hizo:** sin subagentes, como pediste. Sale de tus 9 decisiones ([feedback.md](feedback.md)), del reparto entre ML y Data Science ([ml-vs-ds.md](ml-vs-ds.md)) y del [mapa de skills](mapa-de-skills.md) (NeuralWorks, diplomado PUCV y libros de BrainFran).
>
> **Se genera** desde `research_notes/propuesta_ml/estructura.py` con `gen_doc.py`, que también comprueba que no se pierda ninguna lección de la v3, ningún desvío de AI Engineering y ningún puente.

## Cifras

- **ML y Deep Learning:** 109 lecciones (88 esenciales) en 25 módulos, más 8 repasos. La v3 tenía 57: las 57 siguen con la misma dirección (una, «probabilidad para ML», pasa a repaso), y 53 son nuevas (🆕).
- **Data Science (esqueleto):** 24 lecciones (21 esenciales) en 10 módulos, más 7 repasos. Hoy el sitio muestra 13, todas «pronto».
- **Repaso (↺):** una lección corta que recuerda lo justo de un tema que se profundiza en otro curso, con el enlace a la lección completa. Así cada curso se puede estudiar solo, sin profundizar dos veces en lo mismo.

## Qué cambió desde la v3

1. **Un tronco común y dos salidas** (decisión 5). **Industria:** el ML engineer de NeuralWorks o Suncast. **Research:** modelos por dentro y dos ramas aplicadas, deporte y neurociencia.
2. **Todos los modelos viven en ML** (decisión 1):
   - **el modelo lineal a fondo** pasa de 1 lección a 8, como en la PUCV;
   - **las series de tiempo** pasan de Data Science a ML, con 6 lecciones más pronosticar con redes (decisión 2);
   - kNN y Naive Bayes, SVM, anomalías y recomendación pasan a ser esenciales.
3. **MLOps y datos a escala** (decisión 3): de 3 lecciones a 20, en la salida de Industria. Incluye SQL avanzado, Spark, colas, GCP y diseño de sistemas de ML. Con eso, cada una de las 36 skills de NeuralWorks que se pueden enseñar tiene al menos una lección: en ML, o en Data Science o AI Engineering con su repaso.
4. **GCP como ejemplo** (decisión 6). AWS llega en una versión siguiente.
5. **Cierre de carrera** con las entrevistas de Chang. La de código va en pseudocódigo (decisión 7A); practicar código a mano llega después (7B).
6. **Entrenar y ajustar** pasa después de «Redes neuronales»: las épocas y los lotes se entienden mejor con una red delante.
7. **Lo que vive en AI Engineering no se repite:** post-entrenamiento (SFT, DPO, LoRA), el oficio de investigador y Docker con CI/CD llegan como repaso.
8. **R entra:** a fondo en Data Science y como repaso en ML.

## Los proyectos (decisión 8A)

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

**Optativo:** sumar la suciedad de los paneles, detectada con visión como en tu FONDEF, como un feature más.

### Research: tu propio modelo

Son los hitos M0 a M10 de la v2 (`docs/roadmap/propuesta-roadmap-final.md`): predecir memoria y tiempo, entrenar un modelo diminuto en CPU, un Transformer chico, cazar bugs, limpiar un corpus, LoRA, refuerzo, servir, reproducir un paper, un laboratorio con tu sistema multi-agente y el informe público.

**Cada rama aplicada suma un mini-proyecto:**

- **Deporte:** predecir los partidos de una liga con probabilidades calibradas, y seguir a los jugadores en un video.
- **Neurociencia:** decodificar un dataset abierto de EEG.
- **Biomecánica:** corregir un ejercicio con la cámara del celular.

## Antes de escribir, falta verificar

Todo lo marcado «por verificar» en la columna Origen:

- el nombre actual de la plataforma de ML de GCP;
- las fuentes de teoría de la información, de GLM, de calibración y de SRE;
- Kaggle Learn Time Series y Rules of ML;
- el capítulo de SVM de Géron (2.ª ed.);
- las fuentes de las ramas: Dixon y Coles, SoccerNet, OpenCap, MNE-Python, Nilearn y Neuromatch.

Tres libros ayudarían a cerrar varias de estas: *Designing Machine Learning Systems* (Huyen), ISLP y el Lakshmanan completo.

## Preguntas abiertas

1. **¿El proyecto de Research sigue siendo «tu propio modelo»?** Elegiste la A antes de nombrar deporte y neurociencia. Otra opción: el proyecto principal de Research es uno de deporte o de cerebro, y «tu propio modelo» pasa a optativo.
2. **¿Las ramas aplicadas son «elige al menos una», o se recorren las dos?** Hoy dice «elige al menos una», y sus lecciones no son esenciales.
3. **¿Te parece el tamaño?** ML pasa de 57 a 109 lecciones, cerca de las 126 de AI Engineering. Si es mucho, se puede recortar marcando más lecciones como no esenciales.

## ML y Deep Learning

### Empezar · para las dos salidas


**Módulo 1 · El oficio y el mapa**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 1 | El mapa del ML: problemas, tipos de aprendizaje y datos | sí | Nota, Pilar 2, bloque 1; Géron 2025, cap. 1 |
| 2 | ML engineer, data scientist y los demás: quién hace qué 🆕 | sí | Chang, cap. 1 (ciclo A a D y tabla 1-3); guía PMLE 2026; Provost y Fawcett, cap. 1 |
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


> El modelo más importante del ML, a fondo: como en el diplomado de la PUCV y como pide NeuralWorks («OLS y sus extensiones»).


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 12 | Regresión lineal: predecir y explicar un número | sí | Géron 2025, cap. 4; PUCV, básico 3b; Grus, caps. 14 y 15 |
| 13 | MCO por dentro: coeficientes, tests t y F, y tipos de predicción 🆕 | sí | PUCV, avanzado 1a; Data 100 (Ordinary Least Squares) |
| 14 | Variables categóricas y ANOVA de una y dos vías 🆕 | sí | PUCV, básico 3c y 3d |
| 15 | Diagnosticar el modelo: normalidad, heteroscedasticidad y autocorrelación 🆕 | sí | PUCV, básico 3b y avanzado 1e (Durbin-Watson, Breusch-Pagan, MCG, ARMA en residuos) |
| 16 | Outliers e influencia: leverage, distancia de Cook y regresión robusta 🆕 | sí | PUCV, avanzado 1d |
| 17 | Colinealidad y elegir variables: AIC, BIC, forward, backward y stepwise 🆕 | sí | PUCV, avanzado 1b y 1c |
| 18 | Ridge, LASSO, PCR y PLS: muchas variables sin perder el control 🆕 | sí | PUCV, avanzado 1c; Géron 2025, cap. 4 (modelos regularizados) |
| 19 | Más allá de la recta: regresión polinomial y modelos lineales generalizados 🆕 | no | Géron 2025, cap. 4 (polinomial); GLM y Poisson por verificar |

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
| 37 | Probabilidades en las que se puede confiar: calibración 🆕 | no | Docs de scikit-learn (por verificar) |
| 38 | Explicar un modelo: importancia de features y SHAP | sí | Nota, Pilar 2, bloque 18; NeuralWorks #6; Guía PMLE 2026, 6.1 |
| 39 | Comparar modelos con estadística: semillas, ablaciones y significancia | sí | Nota, Pilar 2, bloque 32; desvío desde AI Engineering |

### Series de tiempo y pronóstico


**Módulo 10 · Series de tiempo**


> Viven en ML; Data Science lleva un repaso (pedido 94). Lo piden Suncast (generación solar y eólica) y NeuralWorks (predecir fallas).


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
| 57 | Redes convolucionales: de AlexNet a ResNet | sí | PUCV, avanzado 14; Géron 2025, cap. 12 |
| 58 | Transfer learning y fine-tuning | sí | Géron 2025, caps. 11 y 12; Hugging Face, caps. 1 a 4 |
| 59 | Computer vision: detección, segmentación y pose | sí | Nota, Pilar 2, bloque 22; Géron 2025, cap. 12; NeuralWorks #15 |
| 60 | Seguir objetos en video: tracking 🆕 | no | Géron 2025, cap. 12 (Object Tracking) |
| 61 | Transformers de visión y modelos multimodales 🆕 | sí | Géron 2025, cap. 16 |

**Módulo 14 · Secuencias y lenguaje**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 62 | Secuencias: RNN, LSTM y GRU | sí | Géron 2025, cap. 13; Nota, Pilar 2, bloque 21 |
| 63 | Pronosticar con redes: RNN, CNN y Transformers para series 🆕 | sí | Géron 2025, cap. 13 (Forecasting a Time Series); Nota, Pilar 2, bloque 16 |
| 64 | Lenguaje: del texto a los embeddings, y textos parecidos | sí | Nota, Pilar 2, bloque 23; PUCV, avanzado 11a; Géron 2025, cap. 14 |
| 65 | Atención y el Transformer, a fondo | sí | Géron 2025, caps. 14 y 15; Raschka; CS224N |

**Módulo 15 · Modelos generativos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 66 | Autoencoders y VAE | no | Géron 2025, cap. 18; MIT 6.S191 |
| 67 | GANs y modelos de difusión | no | Géron 2025, cap. 18; MIT 6.S191 |

### Salida 1 · Industria: ML engineer en una empresa


**Módulo 16 · Del notebook a producción**


> Salida 1. Llevas modelos a producción, como el ML engineer de NeuralWorks o de Suncast. Los ejemplos son en GCP; AWS llega después (pedido 94).


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 68 | El ciclo de vida de un modelo en una empresa | sí | Chang, caps. 1 y 6; Nota, Pilar 2, bloque 27; CMU 17-645 |
| 69 | Empaquetar y servir: serializar, contenedores y API, por lotes o en línea 🆕 | sí | Guía PMLE 2026, 4.1; NeuralWorks #4, #23 y #34 |
| ↺ | *Repaso: Docker y CI/CD* | repaso | Repaso corto · a fondo en AI Engineering (lección 77) |
| 70 | Seguir experimentos y versionar datos y modelos | sí | Nota, Pilar 2, bloque 27 (MLflow y DVC); Guía PMLE 2026, 2.3 y 4.1 |
| 71 | Pipelines de ML: orquestar datos, entrenamiento y despliegue 🆕 | sí | Guía PMLE 2026, 5.1; NeuralWorks #1 |
| 72 | CI/CD/CT: probar, desplegar y reentrenar de forma automática 🆕 | sí | Guía PMLE 2026, 5.2; NeuralWorks #22 |
| 73 | Feature store, y el desfase entre entrenar y servir 🆕 | sí | Guía PMLE 2026, 2.1, 4.2 y 6.2 (training-serving skew) |

**Módulo 17 · Operar modelos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 74 | Monitorear un modelo vivo: deriva de datos y de concepto | sí | Guía PMLE 2026, 6.2; Nota, Pilar 2, bloque 28; NeuralWorks #5 |
| 75 | Cerrar el ciclo: recoger lo que pasa y reentrenar 🆕 | sí | NeuralWorks #3; Guía PMLE 2026, 5.2 (política de reentrenamiento) |
| 76 | Lanzar sin miedo: A/B, canary y volver atrás 🆕 | sí | Guía PMLE 2026, 4.1 (estrategias de lanzamiento) |
| 77 | IA responsable en producción: sesgo, privacidad y seguridad 🆕 | sí | Guía PMLE 2026, 6.1 y 2.1 (datos personales); Nota, Pilar 2, bloque 28 |
| 78 | DevSecOps y SRE para ML, lo justo 🆕 | no | NeuralWorks #7; fuente por verificar |

**Módulo 18 · Datos a escala**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 79 | SQL avanzado: funciones de ventana, CTE y optimizar consultas 🆕 | sí | NeuralWorks #21; Chang, cap. 5 (SQL) |
| 80 | Spark y PySpark: datos que no caben en un computador 🆕 | sí | PUCV, avanzado 5; NeuralWorks #35; Lakshmanan, caps. 6 y 7 |
| 81 | Pipelines de datos, streaming y colas de mensajes 🆕 | sí | NeuralWorks #31; Lakshmanan, cap. 4 (Pub/Sub y Dataflow) |
| 82 | Infraestructura como código, lo justo 🆕 | no | NeuralWorks #29; Chang, cap. 1 (Terraform) |

**Módulo 19 · ML en GCP**


> GCP es el ejemplo principal (pedido 94). La tabla con su equivalente en AWS llega en una versión siguiente.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 83 | El mapa de GCP para ML: Cloud Storage, BigQuery y la plataforma de ML 🆕 | sí | Guía PMLE 2026 (todas las secciones); Lakshmanan, caps. 1, 2 y 5; nombre actual de la plataforma por verificar |
| 84 | Modelos con SQL y con pocos clics: BigQuery ML y AutoML 🆕 | sí | Guía PMLE 2026, 1.1 |
| 85 | Entrenar, registrar, servir y monitorear en GCP 🆕 | sí | Guía PMLE 2026, 3.2, 4.1, 4.2 y 6.2 |

**Módulo 20 · Diseñar sistemas de ML**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 86 | Diseñar un sistema de ML: requisitos, costo, latencia y escala 🆕 | sí | NeuralWorks #28; Chang, cap. 6; Guía PMLE 2026, 3.1; Designing ML Systems de Chip Huyen (falta en la biblioteca) |
| 87 | Casos de industria: fallas, precios, personalización y combustible 🆕 | no | NeuralWorks #11 a #14 |
| ↺ | *Repaso: econometría e inferencia causal* | repaso | Repaso corto · a fondo en Data Science |

### Salida 2 · Research: investigar con ML


**Módulo 21 · Modelos por dentro: pre-entrenar y escalar**


> Salida 2. Investigas de dos formas: cómo funcionan los modelos por dentro, y usar ML para descubrir cosas en otros campos. Elige al menos una rama aplicada.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: leer, reproducir y publicar papers* | repaso | Repaso corto · a fondo en AI Engineering (lecciones 111 a 114) |
| 88 | Construir un tokenizador: BPE | sí | Karpathy (tokenizador BPE); CS336, tarea 1 |
| 89 | Pre-entrenar un modelo de lenguaje desde cero | sí | Nota, Pilar 2, bloque 24; CS336; Raschka, caps. 2 a 5 |
| 90 | Datos para pre-entrenar: filtrar, deduplicar y mezclar | sí | Nota, Pilar 2, bloque 24; CS336, clases 13 y 14 |
| 91 | Arquitectura a escala: mezcla de expertos y alternativas a la atención | no | CS336, clases 3 y 4; Raschka (Qwen3) |
| 92 | Leyes de escala: datos, parámetros y cómputo | sí | Nota, Pilar 2, bloque 24; CS336 |
| 93 | GPU y memoria: dónde se va el tiempo | sí | CS336, clases 5 a 8; avisos de modelos: GPU 30 % |
| 94 | Entrenar en muchas GPUs: paralelismo | no | CS336; MIT 6.S191; Guía PMLE 2026, 3.3 |

**Módulo 22 · Aprender con recompensas**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 95 | Aprendizaje por refuerzo desde la base | sí | Géron 2025, cap. 19; CS229; Chang, cap. 3 |
| 96 | Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables | sí | Nota, Pilar 2, bloque 25; CS336, clases 15 y 16 |
| 97 | Destilación: un modelo grande le enseña a uno chico | no | Nota, Pilar 2, bloque 25; Raschka, Build a Reasoning Model |
| ↺ | *Repaso: SFT, DPO y LoRA* | repaso | Repaso corto · a fondo en AI Engineering (lecciones 98 a 101) |

**Módulo 23 · Rama: deporte con ML y visión**


> Rama aplicada (pedido 94): predecir partidos, seguir jugadores y analizar fútbol y tenis con visión.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 98 | Predecir partidos: goles con Poisson, ratings y probabilidades 🆕 | no | Pedido 94; Dixon y Coles (1997) por verificar |
| 99 | Seguir jugadores y pelota en video 🆕 | no | Géron 2025, cap. 12 (Object Tracking); SoccerNet por verificar |
| 100 | Del tracking a métricas de juego: velocidad, posesión y mapas de calor 🆕 | no | Pedido 94; fuente por verificar |
| 101 | Biomecánica con visión: pose, ángulos y corregir la técnica | no | Nota, Pilar 2, bloque 30; OpenCap de Stanford por verificar |

**Módulo 24 · Rama: neurociencia con ML**


> Rama aplicada (pedido 94): entender el cerebro con ML, DL o visión.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 102 | Los datos del cerebro: EEG, fMRI y actividad de neuronas 🆕 | no | Nota, Pilar 2, bloque 31; pedido 94 |
| 103 | Señales: filtrar y ver frecuencias con Fourier y wavelets 🆕 | no | Brunton y Kutz, cap. 2 |
| 104 | Decodificar el cerebro: de la señal a lo que la persona hace o percibe 🆕 | no | Nota, Pilar 2, bloque 31; MNE-Python, Nilearn y Neuromatch por verificar |
| 105 | Interfaces cerebro-computador 🆕 | no | Nota, Pilar 2, bloque 31 |

### Cierre · tu carrera de ML


**Módulo 25 · Tu carrera**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 106 | Tu CV y tu portafolio de ML 🆕 | sí | Chang, cap. 2 |
| 107 | La entrevista técnica: algoritmos, entrenamiento y despliegue 🆕 | sí | Chang, caps. 3, 4 y 6 |
| 108 | La entrevista de código: estructuras de datos, algoritmos y SQL en pseudocódigo 🆕 | sí | Chang, cap. 5; NeuralWorks #19 y #38; decisión 7A (pedido 94). Practicar código a mano llega después (7B) |
| 109 | Comunicar a no técnicos y la entrevista conductual 🆕 | sí | Chang, cap. 7; NeuralWorks #27 |
| ↺ | *Repaso: entrar a investigación* | repaso | Repaso corto · a fondo en AI Engineering (lección 115) |

## Data Science (esqueleto v1)

Sale de la regla de reparto: Data Science es responder preguntas y tomar decisiones con datos. Se detalla después de cerrar ML.

### Empezar


**Módulo 1 · El mapa**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 1 | Qué es la ciencia de datos: entender y decidir con datos | sí | Provost y Fawcett, cap. 1; Nota, Pilar 2, bloque 1 |
| ↺ | *Repaso: ML engineer, data scientist y los demás* | repaso | Repaso corto · a fondo en ML y DL |
| 2 | De la pregunta a la decisión: el proceso de un análisis | sí | Provost y Fawcett, cap. 2; Nota, Pilar 2, bloque 2; O'Neil y Schutt, cap. 2 |

### Los datos


**Módulo 2 · Conseguir y ordenar datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 3 | Conseguir datos: archivos, APIs y web scraping | sí | Grus, cap. 9; PUCV, avanzado 11b |
| 4 | SQL como operaciones: filtrar, unir y agrupar | sí | Nota, Pilar 2, bloque 3; PUCV, avanzado 4; Grus, cap. 24 |
| 5 | Pandas como operaciones | sí | Nota, Pilar 2, bloque 4 |
| 6 | R: qué es, para qué sirve y cuándo usarlo | sí | Pedido 94; PUCV (software) |
| 7 | Expresiones regulares: buscar patrones en texto | no | Data 100 (Regular Expressions) |

**Módulo 3 · Calidad de datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 8 | Limpieza y calidad: faltantes, duplicados, outliers y unidades | sí | Nota, Pilar 2, bloque 5 |
| ↺ | *Repaso: features y fuga de datos* | repaso | Repaso corto · a fondo en ML y DL |

### Explorar y comunicar


**Módulo 4 · Explorar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 9 | Estadística descriptiva y tipos de variables | sí | PUCV, básico 1; Data 100 (EDA) |
| 10 | Análisis exploratorio y correlación: Pearson, Spearman o Kendall | sí | PUCV, básico 3a; Nota, Pilar 2, bloque 6 |
| ↺ | *Repaso: explorar series de tiempo* | repaso | Repaso corto · a fondo en ML y DL (pedido 94) |

**Módulo 5 · Comunicar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 11 | Visualizar: qué gráfico responde qué pregunta | sí | Data 100 (Visualization I y II); Grus, cap. 3 |
| 12 | Contar hallazgos y armar dashboards | sí | Nota, Pilar 2, bloque 6; Lakshmanan, cap. 3 |

### Estadística para decidir


**Módulo 6 · Probabilidad e inferencia**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 13 | Probabilidad, variables aleatorias y distribuciones | sí | Nota, Pilar 2, bloque 8; Data 100 (Random Variables); Grus, cap. 6 |
| 14 | Muestreo, estimadores, sesgo y varianza | sí | Data 100 (Sampling; Estimators, Bias, and Variance) |
| 15 | Intervalos de confianza, tests de hipótesis y p-valor | sí | PUCV, básico 2; Nota, Pilar 2, bloque 8; Grus, cap. 7 |
| 16 | Bootstrap: medir la incertidumbre remuestreando | sí | PUCV, avanzado 2b; Data 100 (Parameter Inference and Bootstrapping) |
| 17 | Experimentos A/B: decidir con un experimento | sí | Chang, cap. 1 (paso C.2); Nota, Pilar 2, bloque 8 |

**Módulo 7 · Causalidad y econometría**


> Viven en Data Science (pedido 94). NeuralWorks las pide como deseables.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 18 | Correlación no es causalidad: confusores y experimentos | sí | Nota, Pilar 2, bloque 10; O'Neil y Schutt, cap. 11 |
| ↺ | *Repaso: el modelo lineal* | repaso | Repaso corto · a fondo en ML y DL |
| 19 | Diferencias en diferencias | sí | Nota, Pilar 2, bloque 10; NeuralWorks #36 |
| 20 | Variables instrumentales y regresión discontinua | sí | Nota, Pilar 2, bloque 10 |
| 21 | Datos de panel y efectos fijos (statsmodels y pyfixest) | sí | NeuralWorks #33 y #37 |
| 22 | Decidir con incertidumbre: enfoque bayesiano y frecuentista | no | Data 102 de Berkeley (catálogo de fuentes) |

### Modelos como herramienta


**Módulo 8 · Usar modelos para entender**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| ↺ | *Repaso: los modelos de ML que usa un data scientist* | repaso | Repaso corto · a fondo en ML y DL |
| ↺ | *Repaso: explicar un modelo para contarlo* | repaso | Repaso corto · a fondo en ML y DL |

### Especialización y oficio


**Módulo 9 · Energía con datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 23 | Analizar plantas fotovoltaicas: PR, disponibilidad y SCADA | no | Nota, Pilar 2, bloque 29; ofertas de IM2 Solar y Rising Sun |

**Módulo 10 · Ética y carrera**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 24 | Ética de datos y privacidad | sí | Grus, cap. 26; Data 100 (Human Contexts and Ethics); O'Neil y Schutt, cap. 16 |
| ↺ | *Repaso: CV y entrevistas* | repaso | Repaso corto · a fondo en ML y DL |
