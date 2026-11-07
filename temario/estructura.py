# Estructura de la propuesta v2 del temario de ML y DL (pedido 96), con el reparto de Data Science.
# v2: aplica la investigación de ml-vs-ds.md (4 ajustes), el proyecto de Research rápido y las dos ramas obligatorias.
# Decisiones de Fran en docs/roadmap/ml-dl/feedback.md; reparto ML ↔ DS en docs/roadmap/ml-dl/ml-vs-ds.md.
# Lección: (id, título, esencial, origen). Repaso: rep(id, título, curso donde vive a fondo).
# Bloque: (título, [(módulo, aviso o None, [lecciones])]).

def rep(i, titulo, destino):
    return (i, titulo, 1, f"Repaso corto · a fondo en {destino}", "repaso")

def req(i, titulo, destino):
    # Requisito: el tema se estudia completo en el otro curso (no se repite aquí). Ajuste 1 de ml-vs-ds.md.
    return (i, titulo, 1, f"Requisito · se estudia completo en {destino}", "requisito")

ROLES = ("Las 16 fuentes de ml-vs-ds.md: Chang, cap. 1; Provost y Fawcett, cap. 1; Google Cloud (roles de GKE e IAM, MLOps, "
         "guía PMLE 2026, Advanced Data Analytics); Microsoft (AI-300, 2026); AWS (MLA-C02, 2026); Stanford (Statistics: Data Science, "
         "CS 329S); MIT (MicroMasters SDS, MIT Sloan); CMU (Kästner, caps. 20 y 21); Berkeley (Data 100); Coursera")

G = "Géron 2025"
P2 = "Nota, Pilar 2"
PM = "Guía PMLE 2026"
NW = "NeuralWorks"
NWD = "NeuralWorks DS"  # la oferta de data scientist (pedido 103); los códigos D, E, R y N están en docs/roadmap/ds/mapa-neuralworks-ds.md
PV = "por verificar"

# ─────────────────────────────── ML y Deep Learning ───────────────────────────────
ML = [
("Empezar · para las dos salidas", [
 ("El oficio y el mapa", None, [
  ("mapa-del-ml", "El mapa del ML: problemas, tipos de aprendizaje y datos", 1, f"{P2}, bloque 1; {G}, cap. 1"),
  ("ml-engineer-o-data-scientist", "ML engineer, data scientist y los demás: quién hace qué", 1,
   ROLES),
  ("proyecto-de-punta-a-punta", "Un proyecto de ML de punta a punta: del problema al modelo vivo", 1,
   f"{G}, cap. 2; Géron TF 2.ª ed., apéndice B (checklist); {P2}, bloque 2"),
  ("herramientas-del-ml", "Las herramientas: Python, notebooks, scikit-learn, PyTorch, SQL y R", 1,
   f"{P2}, bloque 1; PUCV (Python, R, Spark y SQL); pedido 94 (R entra)"),
  rep("repaso-datos", "Repaso: datos, limpieza y exploración", "Data Science"),
 ]),
]),
("Matemática y probabilidad para modelar", [
 ("Matemática para ML", None, [
  ("algebra-lineal", "Álgebra lineal: los datos como matriz, y la SVD", 1, f"{P2}, bloque 9; Brunton y Kutz, cap. 1; Grus, cap. 4"),
  ("derivadas-y-gradientes", "Derivadas, gradientes y la regla de la cadena", 1, f"{P2}, bloque 9; Karpathy, micrograd"),
  ("descenso-de-gradiente", "Descenso de gradiente: cómo aprende casi todo modelo", 1, f"{P2}, bloque 9; {G}, cap. 4; Grus, cap. 8"),
  ("entropia-y-perdidas", "Entropía, entropía cruzada y KL: de dónde salen las funciones de pérdida", 1, f"{G}, cap. 4 (entropía cruzada); fuente de teoría de la información {PV}"),
 ]),
 ("Probabilidad para modelar", None, [
  rep("probabilidad-para-ml", "Repaso: probabilidad y distribuciones", "Data Science"),
  ("maxima-verosimilitud", "Máxima verosimilitud: de dónde sale la función de pérdida", 1, "CS229 (supervisado paramétrico y generativo)"),
  ("bayes-y-modelos-generativos", "Bayes y modelos generativos", 1, f"{P2}, bloques 8 y 13; CS229"),
  ("sesgo-varianza", "Sesgo, varianza y curvas de aprendizaje", 1, f"{P2}, bloque 11; {G}, cap. 4 (Learning Curves); CS229"),
  rep("repaso-inferencia", "Repaso: muestreo, intervalos, tests y bootstrap", "Data Science"),
 ]),
]),
("El modelo lineal a fondo", [
 ("Regresión lineal: el modelo base",
  "El modelo más importante del ML, a fondo. Las ofertas de ML engineer lo piden como «OLS y sus extensiones», y es la base de casi todo lo que sigue.", [
  ("regresion", "Regresión lineal: predecir y explicar un número", 1, f"{G}, cap. 4; PUCV, básico 3b; Grus, caps. 14 y 15"),
  ("mco-por-dentro", "MCO por dentro: coeficientes, tests t y F, y tipos de predicción", 1, "PUCV, avanzado 1a; Data 100 (Ordinary Least Squares)"),
  ("categoricas-y-anova", "Variables categóricas y ANOVA de una y dos vías", 1, "PUCV, básico 3c y 3d"),
  ("diagnostico-de-residuos", "Diagnosticar el modelo: normalidad, heteroscedasticidad y autocorrelación", 1,
   "PUCV, básico 3b y avanzado 1e (Durbin-Watson, Breusch-Pagan, MCG, ARMA en residuos)"),
  ("outliers-e-influencia", "Outliers e influencia: leverage, distancia de Cook y regresión robusta", 1, "PUCV, avanzado 1d"),
  ("colinealidad-y-seleccion", "Colinealidad y elegir variables: AIC, BIC, forward, backward y stepwise", 1, "PUCV, avanzado 1b y 1c"),
  ("ridge-lasso-pcr-pls", "Ridge, LASSO, PCR y PLS: muchas variables sin perder el control", 1, f"PUCV, avanzado 1c; {G}, cap. 4 (modelos regularizados)"),
  ("regresion-polinomial-y-glm", "Más allá de la recta: regresión polinomial y modelos lineales generalizados", 1, f"{G}, cap. 4 (polinomial); GLM y Poisson {PV}"),
 ]),
]),
("Machine Learning clásico", [
 ("Cómo aprende un modelo", None, [
  ("entrenar-validar-probar", "Entrenar, validar y probar", 1, f"{P2}, bloque 11; {G}, cap. 1"),
  ("regularizacion-y-validacion-cruzada", "Regularización y validación cruzada", 1, f"{P2}, bloque 11; Data 100"),
  ("fuga-de-datos-y-baseline", "La fuga de datos y el baseline", 1, f"{P2}, bloques 5 y 11; O'Neil y Schutt, cap. 13"),
 ]),
 ("Features para el modelo", None, [
  ("features-para-modelar", "Features: crear, codificar y escalar para el modelo", 1, f"Zheng y Casari, caps. 2 a 5; {G}, cap. 2; Chang, cap. 4"),
  ("pipelines-sin-fuga", "Preprocesar sin fugas: el mismo pipeline para entrenar y para servir", 1,
   f"{G}, cap. 2; {PM}, 5.1 (preprocesamiento consistente); Rules of ML de Google ({PV})"),
 ]),
 ("Clasificación", None, [
  ("clasificacion", "Regresión logística: predecir una categoría con probabilidad", 1, f"PUCV, avanzado 8; {G}, cap. 4; Grus, cap. 16"),
  ("knn-y-naive-bayes", "kNN y Naive Bayes", 1, f"{P2}, bloque 13; Grus, caps. 12 y 13"),
  ("svm-y-kernels", "SVM: margen máximo, kernels y regresión con SVM", 1, f"PUCV, avanzado 9 y 1f; Géron TF 2.ª ed., cap. 5 ({PV})"),
  ("arboles-de-decision", "Árboles de decisión", 1, f"{P2}, bloque 13; {G}, cap. 5"),
  ("ensambles", "Ensambles: random forest, boosting y XGBoost", 1, f"PUCV, avanzado 7 (out-of-bag); {G}, cap. 6; {P2}, bloque 14"),
 ]),
 ("Sin etiquetas", None, [
  ("clustering", "Clustering: k-medias, jerárquico, DBSCAN y mezclas gaussianas", 1, f"PUCV, avanzado 6; {G}, cap. 8"),
  ("reduccion-de-dimensiones", "Reducción de dimensiones: PCA, t-SNE y UMAP", 1, f"PUCV, básico 4; {G}, cap. 7; Brunton y Kutz, cap. 1"),
  ("anomalias", "Detección de anomalías: encontrar lo raro antes de que falle", 1, f"{P2}, bloque 15; {NW} #11 (predecir fallas)"),
  ("recomendacion", "Sistemas de recomendación", 1, f"PUCV, avanzado 13; Chang, cap. 3; Grus, cap. 23; {NW} #13"),
 ]),
 ("Evaluar e interpretar", None, [
  ("evaluar-e-interpretar", "Métricas y umbral de decisión", 1, f"{P2}, bloque 18; {G}, cap. 3"),
  ("desbalance", "Clases desbalanceadas", 1, f"{P2}, bloque 18"),
  ("analisis-de-errores", "Análisis de errores: dónde y por qué falla el modelo", 1, f"{G}, cap. 3 (Error Analysis)"),
  ("calibracion", "Probabilidades en las que se puede confiar: calibración", 1, f"Docs de scikit-learn ({PV})"),
  ("interpretar-un-modelo", "Explicar un modelo: importancia de features y SHAP", 1, f"{P2}, bloque 18; {NW} #6; {PM}, 6.1"),
  ("experimentos-y-significancia", "Comparar modelos con estadística: semillas, ablaciones y significancia", 1, f"{P2}, bloque 32; desvío desde AI Engineering"),
 ]),
]),
("Series de tiempo y pronóstico", [
 ("Series de tiempo", "Pronosticar es de lo más pedido en la industria: generación solar y eólica, demanda o fallas antes de que ocurran. Data Science lleva un repaso.", [
  ("series-por-dentro", "Una serie por dentro: tendencia, estacionalidad, autocorrelación y estacionariedad", 1, f"PUCV, avanzado 3a (test de Box); {P2}, bloque 16"),
  ("arima-y-sarima", "ARIMA y SARIMA: identificar, ajustar, diagnosticar y predecir", 1, f"PUCV, avanzado 3b y 3c; {PM}, 3.1 (ARIMA)"),
  ("raiz-unitaria", "Raíz unitaria y regresión espuria: cuando dos series engañan juntas", 1, "PUCV, avanzado 3d"),
  ("validar-un-pronostico", "Validar un pronóstico: walk-forward, persistencia e intervalos", 1, f"{P2}, bloques 16 y 18; PUCV, básico 2b"),
  ("pronostico-con-ml", "Pronosticar con ML: rezagos, ventanas y XGBoost", 1, f"{P2}, bloque 16; Kaggle Learn, Time Series ({PV})"),
  ("pronostico-probabilistico", "Pronóstico probabilístico: un rango, no un número", 0, f"{P2}, bloque 16"),
 ]),
]),
("Deep Learning", [
 ("Redes neuronales", None, [
  ("perceptron-y-mlp", "De la neurona a la red: perceptrón y MLP", 1, f"{P2}, bloque 19; PUCV, avanzado 10; {G}, cap. 9"),
  ("backprop", "Backpropagation", 1, f"{P2}, bloque 19; Karpathy; {G}, apéndice A (autodiff)"),
  ("optimizadores", "Optimizadores: SGD, momentum y Adam", 1, f"{G}, cap. 11; CS230"),
  ("inicializacion-y-normalizacion", "Inicialización y normalización", 1, f"{G}, cap. 11; CS230"),
  ("regularizar-una-red", "Regularizar una red: dropout, weight decay y augmentation", 1, f"{G}, cap. 11; {P2}, bloque 20"),
  ("pytorch-y-tensores", "PyTorch y tensores, para dirigir al agente", 1, f"{G}, cap. 10; CS336, clase 2"),
 ]),
 ("Entrenar y ajustar", None, [
  ("ciclo-de-entrenamiento", "El ciclo de entrenamiento: épocas, lotes e iteraciones", 1, f"{P2}, bloque 20"),
  ("hiperparametros", "Buscar hiperparámetros con método", 1, f"Deep Learning Tuning Playbook de Google; {G}, cap. 9"),
  ("learning-rate", "El learning rate y su calendario", 1, f"{G}, cap. 11; Tuning Playbook"),
  ("diagnosticar-entrenamiento", "Diagnosticar un entrenamiento por sus curvas", 1, f"{P2}, bloque 20; Karpathy; Tuning Playbook"),
  ("rendimiento-de-entrenamiento", "Entrenar más rápido y más barato: precisión mixta y más", 0, f"{G}, apéndice B; CS336"),
 ]),
 ("Visión", None, [
  ("imagenes-y-opencv", "Imágenes como datos: píxeles, OpenCV y preprocesamiento", 1, f"{P2}, bloque 22 (la imagen como matriz de píxeles); {NWD} N3 (OpenCV); pedido 103"),
  ("cnn", "Redes convolucionales: de AlexNet a ResNet", 1, f"PUCV, avanzado 14; {G}, cap. 12"),
  ("transfer-learning", "Transfer learning y fine-tuning", 1, f"{G}, caps. 11 y 12; Hugging Face, caps. 1 a 4"),
  ("computer-vision", "Computer vision: detección (YOLO, Detectron2), segmentación y pose", 1, f"{P2}, bloque 22; {G}, cap. 12; {NW} #15; {NWD} E11 y N3"),
  ("seguimiento-de-objetos", "Seguir objetos en video: tracking", 0, f"{G}, cap. 12 (Object Tracking)"),
  ("vit-y-multimodales", "Transformers de visión y modelos multimodales", 1, f"{G}, cap. 16"),
 ]),
 ("Secuencias y lenguaje", None, [
  ("rnn-y-lstm", "Secuencias: RNN, LSTM y GRU", 1, f"{G}, cap. 13; {P2}, bloque 21"),
  ("pronostico-con-redes", "Pronosticar con redes: RNN, CNN y Transformers para series", 1, f"{G}, cap. 13 (Forecasting a Time Series); {P2}, bloque 16"),
  ("nlp", "Lenguaje: del texto a los embeddings, y textos parecidos", 1, f"{P2}, bloque 23; PUCV, avanzado 11a; {G}, cap. 14"),
  ("atencion-y-transformers", "Atención y el Transformer, a fondo", 1, f"{G}, caps. 14 y 15; Raschka; CS224N"),
 ]),
 ("Modelos generativos", None, [
  ("autoencoders-y-vae", "Autoencoders y VAE", 0, f"{G}, cap. 18; MIT 6.S191"),
  ("gans-y-difusion", "GANs y modelos de difusión", 0, f"{G}, cap. 18; MIT 6.S191"),
 ]),
 ("Aprender con recompensas: la base",
  "Para las dos salidas. El refuerzo se presenta en la lección 1, y aquí se aprende su base, como en MIT 6.390 y Stanford CS229. Lo avanzado sigue en Research.", [
  ("procesos-de-decision-de-markov", "Decidir paso a paso: procesos de decisión de Markov", 1,
   f"MIT 6.390, clase 10 (Markov Decision Processes, otoño 2026); Stanford CS229 (refuerzo y control); {G}, cap. 19"),
  ("refuerzo-desde-la-base", "Aprendizaje por refuerzo desde la base: valor, política y Q-learning", 1,
   f"MIT 6.390, clase 11 (Reinforcement Learning, otoño 2026); {G}, cap. 19 (Value-Based Methods); Chang, cap. 3 (Q-learning); CS229"),
 ]),
]),
("Salida 1 · Industria: ML engineer en una empresa", [
 ("Del notebook a producción",
  "Salida 1 · Industria. Llevas modelos a producción, como un ML engineer en una empresa. Cada práctica termina en un pipeline o un servicio que funciona. Los ejemplos son en Google Cloud; AWS llega después.", [
  ("del-notebook-a-produccion", "El ciclo de vida de un modelo en una empresa", 1, f"Chang, caps. 1 y 6; {P2}, bloque 27; CMU 17-645"),
  ("empaquetar-y-servir", "Empaquetar y servir: serializar, contenedores y API, por lotes o en línea", 1, f"{PM}, 4.1; {NW} #4, #23 y #34"),
  rep("repaso-docker-y-ci", "Repaso: Docker y CI/CD", "AI Engineering (lección 77)"),
  ("experimentos-y-versiones", "Seguir experimentos y versionar datos y modelos", 1, f"{P2}, bloque 27 (MLflow y DVC); {PM}, 2.3 y 4.1"),
  ("pipelines-de-ml", "Pipelines de ML: orquestar datos, entrenamiento y despliegue", 1, f"{PM}, 5.1; {NW} #1"),
  ("ci-cd-ct", "CI/CD/CT: probar, desplegar y reentrenar de forma automática", 1, f"{PM}, 5.2; {NW} #22"),
  ("feature-store-y-skew", "Feature store, y el desfase entre entrenar y servir", 1, f"{PM}, 2.1, 4.2 y 6.2 (training-serving skew)"),
 ]),
 ("Operar modelos", None, [
  ("operar-modelos", "Monitorear un modelo vivo: deriva de datos y de concepto", 1, f"{PM}, 6.2; {P2}, bloque 28; {NW} #5"),
  ("reentrenar-con-la-realidad", "Cerrar el ciclo: recoger lo que pasa y reentrenar", 1, f"{NW} #3; {PM}, 5.2 (política de reentrenamiento)"),
  ("lanzar-con-cuidado", "Lanzar sin miedo: A/B, canary y volver atrás", 1, f"{PM}, 4.1 (estrategias de lanzamiento)"),
  ("ia-responsable", "IA responsable en producción: sesgo, privacidad y seguridad", 1, f"{PM}, 6.1 y 2.1 (datos personales); {P2}, bloque 28"),
  ("operar-ia-generativa", "Operar IA generativa en producción, lo justo", 1,
   f"{PM}, 1.2 y 6.2 (evaluar y monitorear IA generativa); Microsoft AI-300 (GenAIOps, 2026); AWS MLA-C02 (flujos con agentes, 2026). RAG, agentes y evals se repasan desde AI Engineering"),
  ("devsecops-y-sre", "DevSecOps y SRE para ML, lo justo", 0, f"{NW} #7; fuente {PV}"),
 ]),
 ("Datos a escala", "Gestionar datos a escala (SQL avanzado, data warehouse, ETL, Spark y datos en la nube) se estudia en Data Science, como requisito. Aquí va lo propio de servir modelos: datos en tiempo real e infraestructura.", [
  req("req-datos-a-escala", "Requisito: gestionar datos a escala (SQL avanzado, warehouse, ETL, Spark y la nube)", "Data Science, módulo «Gestionar datos»"),
  ("pipelines-de-datos-y-colas", "Streaming y colas de mensajes: datos que llegan en tiempo real", 1, f"{NW} #31; Lakshmanan, cap. 4 (Pub/Sub y Dataflow)"),
  ("infraestructura-como-codigo", "Infraestructura como código, lo justo", 0, f"{NW} #29; Chang, cap. 1 (Terraform)"),
 ]),
 ("ML en GCP", "Google Cloud es el ejemplo principal. La tabla con su equivalente en AWS llega más adelante.", [
  ("mapa-de-gcp", "El mapa de GCP para ML: la plataforma de ML y cómo se conecta con los datos", 1,
   f"{PM} (todas las secciones); Lakshmanan, caps. 1 y 5; los servicios de datos se ven en Data Science; nombre actual de la plataforma {PV}"),
  ("bigquery-ml-y-automl", "Modelos con SQL y con pocos clics: BigQuery ML y AutoML", 1, f"{PM}, 1.1"),
  ("entrenar-y-servir-en-gcp", "Entrenar, registrar, servir y monitorear en GCP", 1, f"{PM}, 3.2, 4.1, 4.2 y 6.2"),
 ]),
 ("Diseñar sistemas de ML", None, [
  ("disenar-un-sistema-de-ml", "Diseñar un sistema de ML: requisitos, costo, latencia y escala", 1,
   f"{NW} #28; Chang, cap. 6; {PM}, 3.1; Designing ML Systems de Chip Huyen (falta en la biblioteca)"),
  ("casos-de-industria", "Casos de industria: fallas, precios, personalización y combustible", 0, f"{NW} #11 a #14"),
  rep("repaso-causal", "Repaso: econometría e inferencia causal", "Data Science"),
 ]),
]),
("Salida 2 · Research: investigar con ML", [
 ("Modelos por dentro: pre-entrenar y escalar",
  "Salida 2 · Research. Investigas de dos formas: cómo funcionan los modelos por dentro, y usar ML para descubrir cosas en otros campos. Se recorren las dos ramas aplicadas, deporte y neurociencia. Cada práctica termina en un resultado medido y explicado.", [
  rep("repaso-oficio-investigador", "Repaso: leer, reproducir y publicar papers", "AI Engineering (lecciones 111 a 114)"),
  ("tokenizador", "Construir un tokenizador: BPE", 1, "Karpathy (tokenizador BPE); CS336, tarea 1"),
  ("pre-entrenar", "Pre-entrenar un modelo de lenguaje desde cero", 1, f"{P2}, bloque 24; CS336; Raschka, caps. 2 a 5"),
  ("datos-pre-entrenamiento", "Datos para pre-entrenar: filtrar, deduplicar y mezclar", 1, f"{P2}, bloque 24; CS336, clases 13 y 14"),
  ("arquitectura-a-escala", "Arquitectura a escala: mezcla de expertos y alternativas a la atención", 0, "CS336, clases 3 y 4; Raschka (Qwen3)"),
  ("leyes-de-escala", "Leyes de escala: datos, parámetros y cómputo", 1, f"{P2}, bloque 24; CS336"),
  ("gpu-y-memoria", "GPU y memoria: dónde se va el tiempo", 1, "CS336, clases 5 a 8; avisos de modelos: GPU 30 %"),
  ("entrenamiento-distribuido", "Entrenar en muchas GPUs: paralelismo", 0, f"CS336; MIT 6.S191; {PM}, 3.3"),
 ]),
 ("Refuerzo avanzado", "La base del refuerzo se vio en el tronco común; aquí va lo avanzado.", [
  ("refuerzo-profundo", "Refuerzo profundo: policy gradients, métodos de valor y actor-critic", 1,
   f"{G}, cap. 19 (Policy Gradients, Value-Based Methods, Actor-Critic Algorithms); pedido 101"),
  ("rl-para-llms", "Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables", 1, f"{P2}, bloque 25; CS336, clases 15 y 16"),
  ("destilacion", "Destilación: un modelo grande le enseña a uno chico", 0, f"{P2}, bloque 25; Raschka, Build a Reasoning Model"),
  rep("repaso-post-entrenamiento", "Repaso: SFT, DPO y LoRA", "AI Engineering (lecciones 98 a 101)"),
 ]),
 ("Rama: deporte · predecir y seguir el juego", "Rama aplicada, obligatoria en esta salida: predecir partidos, seguir jugadores y analizar fútbol y tenis con visión. Termina en el proyecto grande de deporte.", [
  ("predecir-partidos", "Predecir partidos: goles con Poisson, ratings y probabilidades", 1, f"Pedido 94; Dixon y Coles (1997) {PV}"),
  ("seguir-jugadores", "Seguir jugadores y pelota en video", 1, f"{G}, cap. 12 (Object Tracking); SoccerNet {PV}"),
  ("metricas-de-juego", "Del tracking a métricas de juego: velocidad, posesión y mapas de calor", 1, f"Pedido 94; fuente {PV}"),
 ]),
 ("Rama: deporte · biomecánica y movimiento", "Parte de la rama de deporte. Termina en el proyecto grande de biomecánica: corregir la técnica de un ejercicio con la cámara del celular.", [
  ("biomecanica-con-vision", "Biomecánica con visión: medir un movimiento y juzgar la técnica", 1, f"{P2}, bloque 30; OpenCap y OpenSim de Stanford {PV}"),
  ("pose-y-angulos", "Pose en 2D y 3D: de puntos clave a ángulos articulares", 1,
   f"{P2}, bloques 22 (pose: puntos clave, top-down y bottom-up, mapas de calor) y 30 (pose 2D y 3D, ángulos articulares); pedido 98"),
  ("repeticiones-y-feedback", "Contar repeticiones y corregir en vivo", 1,
   f"{P2}, bloque 30 (contar repeticiones, comparar con una postura de referencia y feedback en tiempo real); pedido 98"),
 ]),
 ("Rama: neurociencia con ML", "Rama aplicada, obligatoria en esta salida: entender el cerebro con ML, deep learning o visión. Termina en el proyecto grande de neurociencia.", [
  ("datos-del-cerebro", "Los datos del cerebro: EEG, fMRI y actividad de neuronas", 1, f"{P2}, bloque 31; pedido 94"),
  ("senales-y-frecuencias", "Señales: filtrar y ver frecuencias con Fourier y wavelets", 1, "Brunton y Kutz, cap. 2"),
  ("decodificar-el-cerebro", "Decodificar el cerebro: de la señal a lo que la persona hace o percibe", 1, f"{P2}, bloque 31; Stanford STATS 220 (ML Methods for Neural Data Analysis); MNE-Python, Nilearn y Neuromatch {PV}"),
  ("interfaces-cerebro-computador", "Interfaces cerebro-computador", 1, f"{P2}, bloque 31"),
 ]),
]),
("Cierre · tu carrera de ML", [
 ("Tu carrera", None, [
  ("cv-y-portafolio-ml", "Tu CV y tu portafolio de ML", 1, "Chang, cap. 2"),
  ("entrevista-de-ml", "La entrevista técnica: algoritmos, entrenamiento y despliegue", 1, "Chang, caps. 3, 4 y 6"),
  ("entrevista-de-codigo", "La entrevista de código: estructuras de datos, algoritmos y SQL en pseudocódigo", 1,
   f"Chang, cap. 5; {NW} #19 y #38; decisión 7A (pedido 94). Practicar código a mano llega después (7B)"),
  ("entrevista-conductual", "Comunicar a no técnicos y la entrevista conductual", 1, f"Chang, cap. 7; {NW} #27"),
  rep("repaso-entrar-a-investigacion", "Repaso: entrar a investigación", "AI Engineering (lección 115)"),
 ]),
]),
]

# ─────────────────────────────── Data Science (propuesta v1, pedido 103) ───────────────────────────────
# Decisiones de Fran (pedido 103): gestionar datos sí (warehouse, ETL…), BI solo lo justo, dos caminos, curso general
# (sin especialización en energía), proyecto de producto con A/B, y cubrir cada punto de la oferta de data scientist de NeuralWorks.
PF = "Provost y Fawcett"
OS = "O'Neil y Schutt"
K = "Kästner, Machine Learning in Production"
D102 = "Berkeley Data 102 (otoño 2026)"
DLA = "DeepLearning.AI Data Analytics (2026-09-29)"
HX = "HarvardX Professional Certificate in Data Science"
DS = [
("Empezar · para los dos caminos", [
 ("El oficio", "Cada práctica de Data Science termina en un análisis y una recomendación.", [
  ("ds-que-es", "Qué es la ciencia de datos: entender y decidir con datos", 1, f"{PF}, cap. 1; {P2}, bloque 1; Harvard CS 1090A (las 5 caras de una investigación con datos)"),
  rep("repaso-roles", "Repaso: ML engineer, data scientist y los demás", "ML y DL"),
  ("equipo-de-datos", "Trabajar en un equipo de datos: ML engineers, data engineers, translators y negocio", 1, f"{NWD} D2, D4, E9, R7 y R8; Chang, cap. 1; {K}, cap. 21"),
  ("de-la-pregunta-a-la-decision", "De la pregunta a la decisión: el proceso de un análisis", 1, f"{PF}, cap. 2; {P2}, bloque 2; {OS}, cap. 2"),
 ]),
 ("Plantear el problema", None, [
  ("elegir-el-problema", "Elegir el problema que más impacta: valor esperado y prioridades", 1, f"{NWD} E1; {PF}, caps. 2 y 7"),
  ("entender-con-expertos", "Entender el problema con los expertos: preguntas, facts y opiniones", 1, f"{NWD} E2; {K}, cap. 6 (Gathering Requirements)"),
  rep("repaso-leer-papers", "Repaso: investigar lo que ya se sabe en papers, documentación y casos", "AI Engineering (lección 111)"),
  ("hipotesis-y-plan", "Hipótesis y plan de análisis: datos, variables y período", 1, f"{NWD} E4; {OS}, cap. 2"),
 ]),
]),
("Los datos", [
 ("Conseguir datos", None, [
  rep("repaso-python", "Repaso: Python como lenguaje técnico", "AI Engineering (lección 5)"),
  ("obtener-datos", "Conseguir datos de muchas fuentes: archivos, bases, APIs y web scraping", 1, f"{NWD} E5; Grus, cap. 9; {DLA}, curso 4; PUCV, avanzado 11b"),
  ("datos-no-estructurados", "Datos no estructurados: texto, imágenes y logs, convertidos en tablas", 1, f"{NWD} E5 y R4; Harvard CS 1090A"),
  ("pandas-como-operaciones", "Pandas como operaciones", 1, f"{P2}, bloque 4; Grus, cap. 10"),
  ("r-para-datos", "R: qué es, para qué sirve y cuándo usarlo", 1, f"Pedido 94; {HX} (todo en R); PUCV (software)"),
  ("expresiones-regulares", "Expresiones regulares: buscar patrones en texto", 0, "Data 100 (Regular Expressions)"),
 ]),
 ("Gestionar datos", "Gestionar datos es parte del oficio: Harvard la pone entre las 5 caras de una investigación con datos. ML y DL pide este módulo como requisito.", [
  ("sql-como-operaciones", "SQL como operaciones: filtrar, unir y agrupar", 1, f"{P2}, bloque 3; PUCV, avanzado 4; Grus, cap. 24"),
  ("sql-avanzado", "SQL avanzado: funciones de ventana, CTE y optimizar consultas", 1, f"{NWD} R5; {NW} #21; Chang, cap. 5 (SQL)"),
  ("modelar-datos", "Modelar datos: tablas, relaciones y esquema estrella", 1, f"{P2}, bloque 3; nota «Bases de datos con SQL» (modelo entidad-relación)"),
  ("warehouse-y-lake", "Data warehouse, data lake y lakehouse: dónde viven los datos de una empresa", 1, f"{P2}, bloque 3; nota «Ingeniería de datos»; Harvard CS 1090A (gestionar datos)"),
  ("etl-y-elt", "ETL y ELT: mover y transformar datos con pipelines programados", 1, f"Nota «Proceso ETL» (Platzi); Lakshmanan, cap. 2; {P2}, bloque 27"),
  ("spark-y-pyspark", "Spark y PySpark: datos que no caben en un computador", 1, f"PUCV, avanzado 5; {NW} #35; Lakshmanan, caps. 6 y 7; {OS}, cap. 14"),
  ("datos-en-la-nube", "Datos en la nube: almacenamiento, BigQuery y procesamiento en GCP", 1, f"{NWD} N1; Lakshmanan, caps. 2 a 6; {PM}, 2.1"),
 ]),
 ("Calidad de datos", None, [
  ("limpieza-y-calidad", "Limpieza y calidad: faltantes, duplicados, outliers y unidades", 1, f"{NWD} E6; {P2}, bloque 5"),
  ("validar-datos", "Validar datos: tests de calidad y contratos que avisan antes de que algo se rompa", 1, f"{NWD} E6 (validar correctitud); {K}, cap. 16 (Data Quality)"),
  rep("repaso-features", "Repaso: features y fuga de datos", "ML y DL"),
 ]),
]),
("Explorar y comunicar", [
 ("Explorar", None, [
  ("estadistica-descriptiva", "Estadística descriptiva y tipos de variables", 1, "PUCV, básico 1; Data 100 (EDA)"),
  ("eda-y-correlaciones", "Análisis exploratorio y correlación: Pearson, Spearman o Kendall", 1, f"PUCV, básico 3a; {P2}, bloque 6"),
  ("patrones-y-tendencias", "Encontrar patrones y tendencias: comparar grupos, cohortes y el tiempo", 1, f"{NWD} E8; {OS}, cap. 6"),
  rep("repaso-series", "Repaso: explorar series de tiempo", "ML y DL"),
  ("analizar-con-un-llm", "Analizar datos dirigiendo a un LLM, y verificar lo que entrega", 1, f"{DLA} (LLMs para explorar y analizar datos); {NWD} D5 (automatizar)"),
 ]),
 ("Comunicar", None, [
  ("visualizacion", "Visualizar: qué gráfico responde qué pregunta", 1, "Data 100 (Visualization I y II); Grus, cap. 3"),
  ("storytelling", "Contar hallazgos y discutirlos con quienes deciden", 1, f"{NWD} E10; {P2}, bloque 6; Harvard CS 1090A (comunicar)"),
  ("bi-lo-justo", "Dashboards y BI, lo justo: Power BI, Tableau o Looker", 1, f"Pedido 103 (solo lo justo); {DLA}, curso 5; Lakshmanan, cap. 3"),
  ("reportes-reproducibles", "Reportes reproducibles: notebooks, git y análisis que se vuelven a correr solos", 1, f"{HX} (Productivity Tools); {K}, cap. 24; {NWD} D5"),
 ]),
]),
("Estadística para decidir", [
 ("Probabilidad e inferencia", None, [
  ("probabilidad-y-distribuciones", "Probabilidad, variables aleatorias y distribuciones", 1, f"{P2}, bloque 8; Data 100 (Random Variables); Grus, cap. 6"),
  ("simulacion-monte-carlo", "Simular para decidir: Monte Carlo", 1, f"NeuralWorks (un modelo predictor basado en Monte Carlo); {DLA}, curso 2 (simulación)"),
  ("muestreo-y-estimacion", "Muestreo, estimadores, sesgo y varianza", 1, "Data 100 (Sampling; Estimators, Bias, and Variance)"),
  ("intervalos-y-tests", "Intervalos de confianza, tests de hipótesis y p-valor", 1, f"PUCV, básico 2; {P2}, bloque 8; Grus, cap. 7"),
  ("bootstrap", "Bootstrap: medir la incertidumbre remuestreando", 1, "PUCV, avanzado 2b; Data 100 (Parameter Inference and Bootstrapping)"),
  ("muchas-pruebas", "Muchas pruebas a la vez: tasa de falsos descubrimientos y tests de permutación", 1, f"{D102}"),
  ("inferencia-bayesiana", "Inferencia bayesiana: actualizar lo que crees con evidencia", 1, f"{D102} (decisiones bayesianas y frecuentistas); {P2}, bloque 8"),
 ]),
 ("Experimentos y causalidad", None, [
  ("experimentos-ab", "Diseño de experimentos y pruebas A/B: decidir con un experimento", 1, f"Chang, cap. 1 (paso C.2); Stanford STATS 263; {D102}; {P2}, bloque 8"),
  ("correlacion-y-causalidad", "Correlación no es causalidad: confusores y experimentos", 1, f"{P2}, bloque 10; {OS}, cap. 11"),
  ("diferencias-en-diferencias", "Diferencias en diferencias: medir un efecto cuando no se puede hacer un A/B", 1, f"{P2}, bloque 10; {NW} #36; {D102} (inferencia causal); pedido 104"),
 ]),
]),
("Los modelos y el ciclo de vida", [
 ("Modelos de ML para el data scientist", "Los modelos viven en ML y DL. Un data scientist los necesita completos, así que aquí se piden como requisito.", [
  req("req-modelo-lineal", "Requisito: el modelo lineal a fondo (8 lecciones)", "ML y DL, módulo «Regresión lineal: el modelo base»"),
  req("req-ml-clasico", "Requisito: ML clásico (clasificación, sin etiquetas y evaluar)", "ML y DL, módulos «Clasificación», «Sin etiquetas» y «Evaluar e interpretar»"),
  req("req-vision", "Requisito: visión por computador (OpenCV, CNN, YOLO y Detectron2)", "ML y DL, módulo «Visión»"),
  rep("repaso-explicar", "Repaso: explicar un modelo para contarlo", "ML y DL"),
 ]),
 ("Del análisis al producto de datos", None, [
  rep("repaso-ciclo-de-vida", "Repaso: el ciclo de vida de un modelo en producción", "ML y DL"),
  ("productos-de-datos", "Productos de datos: del análisis a algo que el negocio usa, junto a los ML engineers", 1, f"{NWD} D3, D4, E9 y R6; {PF}, cap. 13"),
  rep("repaso-docker-y-ci", "Repaso: Docker y CI/CD", "AI Engineering (lección 77)"),
 ]),
]),
("Camino 1 · Negocio y producto", [
 ("Métricas y producto",
  "Camino 1 · Negocio y producto. Datos al servicio de las decisiones de una empresa, integrado con el negocio. Termina en tu experimento A/B de producto.", [
  ("metricas-de-negocio", "KPIs y métricas: medir lo que de verdad le importa al negocio", 1, f"{PF}, caps. 2 y 13; Chang, cap. 1 (product data scientist)"),
  ("embudos-y-cohortes", "Embudos, cohortes y retención", 1, f"Chang, cap. 1 (paso C.2); {DLA}"),
  ("experimentar-en-serio", "Experimentar en serio: potencia, tamaño de muestra y métricas guardianas", 1, f"{D102} (diseño de experimentos); Kohavi y otros, Trustworthy Online Controlled Experiments {PV}"),
 ]),
 ("Decidir y optimizar", "Los problemas que nombra la oferta de NeuralWorks: precios, personalización, combustible y fallas.", [
  ("decidir-con-predicciones", "Decidir con un modelo: costos, umbrales y valor esperado", 1, f"{PF}, caps. 7, 8 y 11; {NWD} D1 (detectar y predecir fallas)"),
  ("optimizacion", "Optimizar una decisión: objetivo, restricciones y programación lineal", 1, f"Stanford Data Science B.S. (MS&E 111, optimización); {NWD} D1 (optimizar el uso de combustible)"),
  ("pricing", "Precios: elasticidad, experimentos y optimizar", 1, f"{NWD} D1 (optimizar pricing); fuente {PV}"),
  ("personalizacion", "Personalizar: segmentar clientes y medir el efecto real (uplift)", 1, f"{NWD} D1 (personalizar la experiencia del cliente); {D102} (recomendación); fuente de uplift {PV}"),
  ("bandits", "Explorar o explotar: bandits y Thompson sampling", 1, f"{D102} (Thompson sampling)"),
 ]),
]),
("Camino 2 · Investigación con datos", [
 ("Causalidad y econometría",
  "Camino 2 · Investigación con datos. Responder preguntas de causa y efecto con datos observacionales, con el rigor de un paper. Diferencias en diferencias se vio en el tronco común; aquí van los métodos que siguen. Termina en tu estudio causal.", [
  ("variables-instrumentales-y-rd", "Variables instrumentales y regresión discontinua", 1, f"{P2}, bloque 10"),
  ("efectos-fijos-y-paneles", "Datos de panel y efectos fijos (statsmodels y pyfixest)", 1, f"{NW} #33 y #37"),
  ("causalidad-con-ml", "Inferencia causal con ML: double machine learning", 0, f"Chernozhukov y otros, Applied Causal Inference Powered by ML and AI (2024); Stanford MS&E 228"),
 ]),
 ("Ciencia con datos", None, [
  ("modelos-jerarquicos", "Modelos jerárquicos bayesianos: grupos que se ayudan entre sí", 0, f"{D102}"),
  ("estudio-reproducible", "Un estudio que otro puede repetir: pre-registro, datos y código abiertos", 1, f"{K}, cap. 24; {HX} (Productivity Tools)"),
  rep("repaso-publicar", "Repaso: escribir y publicar un estudio", "AI Engineering (lección 114)"),
 ]),
]),
("Cierre · ética y carrera", [
 ("Ética y privacidad", None, [
  ("etica-de-datos", "Ética de datos y privacidad", 1, "Grus, cap. 26; Data 100 (Human Contexts and Ethics); O'Neil y Schutt, cap. 16"),
  ("privacidad-diferencial", "Privacidad diferencial: publicar datos sin exponer a nadie", 0, f"{D102}"),
 ]),
 ("Tu carrera", None, [
  ("entrevista-de-data-scientist", "La entrevista de data scientist: SQL, estadística, experimentos y producto", 1, f"Chang, caps. 3 a 5 y 7; {NWD} R3 a R5"),
  rep("repaso-carrera", "Repaso: CV, portafolio y la entrevista conductual", "ML y DL"),
 ]),
]),
]

# ─────────────────────── Destinos de repasos y requisitos (pedido 98) ───────────────────────
# Cada repaso enlaza con la lección donde el tema se ve a fondo; el requisito se muestra como desvío.
DESTINOS = {
    # ML y DL
    "repaso-datos": "ds/limpieza-y-calidad",
    "probabilidad-para-ml": "ds/probabilidad-y-distribuciones",
    "repaso-inferencia": "ds/intervalos-y-tests",
    "repaso-docker-y-ci": "ai/desplegar",
    "repaso-causal": "ds/correlacion-y-causalidad",
    "repaso-oficio-investigador": "ai/m-leer-papers",
    "repaso-post-entrenamiento": "ai/m-sft",
    "repaso-entrar-a-investigacion": "ai/m-entrar",
    # Data Science
    "repaso-roles": "ml/ml-engineer-o-data-scientist",
    "repaso-features": "ml/features-para-modelar",
    "repaso-series": "ml/series-por-dentro",
    "req-modelo-lineal": "ml/regresion",
    "req-ml-clasico": "ml/clasificacion",
    "req-vision": "ml/imagenes-y-opencv",
    "repaso-leer-papers": "ai/m-leer-papers",
    "repaso-python": "ai/python-lenguaje-tecnico",
    "repaso-ciclo-de-vida": "ml/del-notebook-a-produccion",
    "repaso-publicar": "ai/m-publicar",
    # ML y DL (pedido 103)
    "req-datos-a-escala": "ds/sql-avanzado",
    "repaso-explicar": "ml/interpretar-un-modelo",
    "repaso-carrera": "ml/cv-y-portafolio-ml",
}
