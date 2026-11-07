# Estructura de la propuesta v3 (pedido 82). Cambia respecto de la v2:
# - Los dos caminos viven DENTRO de AI Engineering, y se separan al final (después de multi-agente y harness).
# - El camino de investigación se queda en AI Engineering y se desvía a ML y DL de a poco: 0, 1, 1, 2, 2 y 4 desvíos por módulo.
#   Cada desvío se ve en el temario de AI Engineering con la marca «Sigue en ML y DL».
# - ML y Deep Learning es un curso propio: estadística, ML clásico, entrenar y ajustar, deep learning,
#   pre-entrenamiento y escala, post-entrenamiento, MLOps. Sale del Pilar 2 de la nota del temario.
# Lección: (id, título, esencial, origen). Desvío: ("→", id de la lección en ML y DL).
import importlib.util, os
_spec = importlib.util.spec_from_file_location("estructura_v2", os.path.join(os.path.dirname(__file__), "estructura_ai_v2.py"))
_v2mod = importlib.util.module_from_spec(_spec); _spec.loader.exec_module(_v2mod)
V2 = _v2mod.BLOQUES

_v2 = {l[0]: l for _, _, mods in V2 for _, ls in mods for l in ls}
_mods_v2 = {nombre: ls for _, _, mods in V2 for nombre, ls in mods}

def de_v2(*ids):
    return [(i, _v2[i][1], _v2[i][3], _v2[i][5]) for i in ids]

def modulo_v2(nombre, sin=()):
    return [(l[0], l[1], l[3], l[5]) for l in _mods_v2[nombre] if l[0] not in sin]

def d(ml_id):
    return ("→", ml_id)

# ─────────────────────────────── AI Engineering ───────────────────────────────
# Bloque: (título, [(módulo, aviso o None, [lecciones])])
AI = [
("Fundamentos · para todos", [
 ("Empezar a dirigir", None, modulo_v2("Empezar a dirigir")),
 ("Software para dirigir", None, modulo_v2("Software para dirigir")),
 ("La IA por dentro, en intuición", None, modulo_v2("La IA por dentro")),
 # Pedido 85: módulo de modelos y proveedores, con benchmarks y dónde comparar.
 ("Modelos y proveedores: elegir con datos", None, [
  ("mapa-de-proveedores", "El mapa de proveedores: quién hace los modelos más usados", 1,
   "Artificial Analysis (creadores: Anthropic, OpenAI, Google, Meta, Alibaba, DeepSeek, Kimi, xAI y más); pedido 85"),
  ("abiertos-o-cerrados", "Modelos abiertos y cerrados: pesos, licencias y dónde se corren", 1,
   "Artificial Analysis (filtro Open Weights / Proprietary); Hugging Face; pedido 85"),
  ("hugging-face-el-hub", "Hugging Face: el hub de los modelos abiertos", 1,
   "Hugging Face LLM Course; Nota del temario, Pilar 1, bloque 5 (tecnologías)"),
  ("benchmarks", "Benchmarks: qué mide cada uno y por qué pueden engañar", 1,
   "Nota, Pilar 2, bloque 26 (contaminación de benchmarks); Harness², EXPERIMENTS.md (rúbrica descargada); CS336 clase 12"),
  ("donde-comparar-modelos", "Dónde comparar modelos: Arena y Artificial Analysis", 1,
   "arena.ai (antes lmarena.ai: el dominio viejo redirige); artificialanalysis.ai (inteligencia, costo y tiempo por tarea; ranking de proveedores de API)"),
 ] + de_v2("elegir-modelo-y-costo")),
 ("Nivel 1: App con un LLM", None, modulo_v2("Nivel 1: App con un LLM", sin=("elegir-modelo-y-costo",))),
 # Pedido 83: el módulo de RAG se abre en 8 lecciones más 1 optativa (antes eran 3, con varios temas cada una).
 ("Nivel 2: RAG con evals", None, [
  ("por-que-rag", "Por qué RAG: darle conocimiento al modelo sin cargarlo todo", 1, "Nota del temario, Pilar 1, bloque 5 (memoria en 3 niveles; RAG o herramienta; prompting, RAG o fine-tuning)"),
  ("primero-los-datos", "Primero, los datos: limpios, sin duplicados y ordenados", 1, "Nota del temario, Pilar 1, bloque 5 (criterio); BettaTech, en roadmapv4"),
  ("cortar-en-trozos", "Cortar en trozos: chunking y metadatos", 1, "Nota del temario, Pilar 1, bloque 5; roadmapv3, semana 3 (chunking strategies)"),
  ("embeddings-y-bases-vectoriales", "Embeddings y bases vectoriales", 1, "Nota del temario, Pilar 1, bloque 5; roadmapv5, proyecto 4"),
  ("buscar-palabras-o-significado", "Buscar: por palabras, por significado o las dos", 1, "Nota del temario, Pilar 1, bloque 5 (BM25, semántica, híbrida, top-k); BettaTech"),
  ("cuando-la-busqueda-falla", "Cuando la búsqueda simple falla: reescribir, reordenar y Text-to-SQL", 1, "Nota del temario, Pilar 1, bloque 5; roadmapv3, semana 3 (why naive RAG fails)"),
  ("responder-con-fuentes", "Responder con fuentes, y saber decir «no lo sé»", 1, "roadmapv5, proyecto 4 (citas); ficha v2 de «recuperar-bien»"),
  ("evaluar-un-rag", "Evaluar un RAG: ¿falló la búsqueda o la respuesta?", 1, "Nota del temario, Pilar 1, bloque 5; roadmapv3, semana 5 (Ragas, 15 a 20 preguntas con juez)"),
  ("rag-agentico-y-graphrag", "RAG agéntico y GraphRAG: cuándo valen la pena (optativo)", 0, "roadmapv5, proyecto 4 (RAG_Techniques); sin verificar si merece lección propia"),
 ]),
]),
("Agentes, harness y Claude Code · para todos", [
 # Pedido 84: la parte de harness se abre en su propio módulo (antes cabía en «Anatomía de un harness»).
 ("Nivel 3: Agentes, workflows y automatizaciones", None,
  de_v2("workflow-o-agente", "automatizar-un-flujo", "mcp", "memoria-del-agente", "evaluar-un-agente")),
 ("El harness por dentro", None, [
  ("anatomia-de-un-harness", "Anatomía de un harness: el sistema alrededor del modelo", 1,
   "arXiv 2609.00006 (11 harnesses, 7 subsistemas); LangChain, mismo modelo y otro harness en Terminal-Bench 2.0; lección 06 actual"),
  ("loop-del-agente", "El loop del agente: turnos, pasos y quién decide terminar", 1,
   "Glosario y /goal de Claude Code; MAST (condición de término); BYO Harness"),
  ("leer-una-sesion", "Leer una sesión real: transcript y trazas", 1,
   "Stanford CS146S, semana 1 (leer el tráfico real); transcript JSONL de Claude Code"),
  ("contexto-y-compactacion", "Qué ve el modelo en cada llamada, y qué sobrevive a compactar", 1,
   "Docs de Claude Code (/context, /compact, memoria); DeepSeek Harness (contexto como proyección del log)"),
  ("estado-y-crash", "Dónde vive la verdad: estado, log y reanudar tras un crash", 1,
   "DeepSeek Harness (log append-only); Amplio de Google DeepMind (base de datos primero y reanudación)"),
  ("herramientas-y-permisos", "Diseñar herramientas y permisos", 1, "Lecciones 06, 07 y 14 actuales; BYO Harness (permisos en la lección 02); DeepSeek Harness (fail-closed)"),
  ("sandbox-y-contencion", "Sandbox y contención: lo que el agente alcanza", 1,
   "Anthropic, contención primero en el ambiente (guía de Fran, por reconfirmar); Harness² (bloquear hosts a nivel de red)"),
  ("lo-obligatorio-en-codigo", "Lo obligatorio va en código, no en el prompt", 1,
   "Docs de Claude Code (CLAUDE.md no se impone; hooks sí); arXiv 2607.08028 (contratos en código, 270 corridas)"),
  ("seguridad-del-agente", "Seguridad del agente", 1, "Lección 14 actual; AI Agent Traps; CaMeL; OWASP agéntico"),
  ("primer-harness", "Dirige la construcción de tu harness", 1, "Lección 07 actual; BYO Harness; CMU 11-768 tarea 1 (sin confirmar); CS146S"),
 ]),
 # Pedido 85, recortado en el 86: frameworks, lo justo (cultura de IA); el resto queda como mapa en la primera lección.
 ("Frameworks de IA, lo justo", "Cultura de IA: los frameworks más pedidos, para reconocerlos y usarlos si tu proyecto lo pide. LlamaIndex, DSPy y Deep Agents se ven como parte del mapa.", [
  ("mapa-de-frameworks", "El mapa de frameworks: qué resuelve cada uno, y framework o loop propio", 1,
   "roadmapv7 («Learn the underlying agent workflow before becoming dependent on frameworks»); arXiv 2609.00006; Stanford CS329Z; Nota del temario, Pilar 1 (tecnologías)"),
  ("langchain-y-langgraph", "LangChain, LangGraph y LangSmith: los más pedidos", 1,
   "Avisos: LangChain o LangGraph en el 16 % de Productos; Nota del temario, Pilar 1 (LangSmith para trazas y evals)"),
  ("sdks-de-agentes", "Los SDK de agentes: Claude Agent SDK, OpenAI Agents SDK y Google ADK", 1, "Nota del temario, Pilar 1 (tecnologías de agentes)"),
 ]),
 ("Dominar Claude Code", None, modulo_v2("Dominar Claude Code")),
 ("Nivel 4: Tu sistema multi-agente", None, modulo_v2("Nivel 4: Tu sistema multi-agente")),
 ("Arquitecto de harness", None, modulo_v2("Arquitecto de harness")),
]),
("Cruce de caminos", [
 ("Elige tu camino",
  "Aquí AI Engineering se abre en dos caminos: Productos, más software, e Investigación, más modelos. Puedes seguir uno o los dos, en el orden que quieras. El cierre de CEO y CTO es para todos.",
  [("elige-tu-camino", "Productos, investigación o los dos: elige tu camino", 1,
    "roadmapv7 (los dos caminos); pedidos 80 y 82 de Fran; 969 avisos reales; roles de Anthropic")]),
]),
("Camino 1 · Productos: crear productos de IA", [
 ("Producción",
  "Camino 1. Llevas tu sistema multi-agente a usuarios reales: desplegarlo, vigilarlo y hacerlo confiable.",
  modulo_v2("Producción")),
 ("Nivel 5: Autonomía y fábrica de software", None, modulo_v2("Nivel 5: Autonomía y fábrica de software")),
 ("Capacidades especiales (optativo)", None, modulo_v2("Capacidades especiales (optativo)")),
]),
("Camino 2 · Investigación: la IA por dentro", [
 ("El LLM a fondo",
  "Camino 2. Empieza aquí, en AI Engineering, y se va desviando de a poco a ML y Deep Learning. Cada desvío lleva la marca «Sigue en ML y DL».",
  [("hf-transformers-y-datasets", "Trabajar con Hugging Face: Transformers, Datasets y el Hub", 1, "Hugging Face LLM Course, caps. 1 a 8; pedido 85")]
  + de_v2("m-tokens-y-embeddings", "m-modelar-lenguaje", "m-arquitectura-moderna", "m-evaluar-llms")),
 ("Adaptar un modelo: fine-tuning",
  "Primer desvío: la base del aprendizaje por refuerzo vive en ML y DL.",
  de_v2("m-sft", "m-rlhf-dpo", "m-lora", "m-dataset-propio") + [d("refuerzo-desde-la-base")]),
 ("Servir un modelo: inferencia",
  "1 desvío: la GPU y su memoria, a fondo, en ML y DL.",
  # Pedido 87: tamaños y cuantización solo en el Camino 2, a fondo.
  [("tamano-de-un-modelo", "Qué significa 4B o 70B: parámetros, parámetros activos y memoria", 1,
    "Raschka (análisis de FLOPs; Qwen3 con mezcla de expertos); CS336 clase 2 (contabilidad de recursos); pedidos 86 y 87")]
  + de_v2("m-servir", "m-muchos-usuarios")
  + [("cuantizacion-a-fondo", "Cuantización a fondo: 8 y 4 bits, GGUF, y cómo medir lo que se pierde", 1,
      "Nota, Pilar 2, bloque 25; MIT 6.5940 (compresión y cuantización); 11-711; docs de Hugging Face (por verificar); pedidos 86 y 87"),
     ("speculative-decoding", "Speculative decoding y otros atajos para generar más rápido", 0, "11-711; MIT 6.5940; ficha v2 de «m-mas-barato»")]
  + de_v2("m-costo-por-token") + [d("gpu-y-memoria")]),
 ("Razonar y mirar adentro",
  "2 desvíos: entrenar el razonamiento con refuerzo y destilar se estudian en ML y DL.",
  de_v2("m-razonamiento", "m-interpretabilidad", "m-seguridad-alineacion") + [d("rl-para-llms"), d("destilacion")]),
 ("El oficio de investigador",
  "2 desvíos: la estadística de los experimentos y la búsqueda de hiperparámetros viven en ML y DL.",
  de_v2("m-leer-papers", "m-reproducir", "m-investigar-con-agentes") + [d("experimentos-y-significancia"), d("hiperparametros")]
  + de_v2("m-publicar", "m-entrar")),
 ("Entrenar desde cero · sigue en ML y DL",
  "Aquí el camino se muda a ML y Deep Learning: entrenar un modelo desde cero es su terreno. Si quieres seguir después, ese es el curso completo.",
  [d("pre-entrenar"), d("datos-pre-entrenamiento"), d("leyes-de-escala"), d("entrenamiento-distribuido")]),
]),
("Cierre · para todos", [
 ("CEO y CTO de una startup de IA", None, modulo_v2("CEO y CTO de una startup de IA")),
 ("Tu carrera", None, modulo_v2("Tu carrera")),
]),
]

# ─────────────────────────────── ML y Deep Learning ───────────────────────────────
P2 = "Nota del temario, Pilar 2"
ML = [
("Fundamentos: matemática y estadística", [
 ("El mapa del ML", None, [
  ("mapa-del-ml", "El mapa del ML: problemas, tipos de aprendizaje y roles", 1, f"{P2}, bloque 1"),
 ]),
 ("Matemática para ML", None, [
  ("algebra-lineal", "Álgebra lineal: los datos como matriz", 1, f"{P2}, bloque 9; CS229 (requisitos)"),
  ("derivadas-y-gradientes", "Derivadas, gradientes y la regla de la cadena", 1, f"{P2}, bloque 9; Karpathy, micrograd"),
  ("descenso-de-gradiente", "Descenso de gradiente: cómo aprende casi todo modelo", 1, f"{P2}, bloque 9"),
 ]),
 ("Estadística para ML", None, [
  ("probabilidad-para-ml", "Probabilidad y distribuciones para modelar", 1, f"{P2}, bloque 8; puente a ds/08"),
  ("maxima-verosimilitud", "Máxima verosimilitud: de dónde sale la función de pérdida", 1, "CS229 (supervisado paramétrico y generativo)"),
  ("bayes-y-modelos-generativos", "Bayes y modelos generativos", 1, f"{P2}, bloques 8 y 13; CS229"),
  ("sesgo-varianza", "Sesgo, varianza y generalización", 1, f"{P2}, bloque 11; CS229 (teoría del aprendizaje)"),
  ("experimentos-y-significancia", "Experimentos con estadística: ablaciones y significancia", 1, f"{P2}, bloque 32; ds/08"),
 ]),
]),
("Machine Learning clásico", [
 ("Cómo aprende un modelo", None, [
  ("entrenar-validar-probar", "Entrenar, validar y probar", 1, f"{P2}, bloque 11"),
  ("regularizacion-y-validacion-cruzada", "Regularización y validación cruzada", 1, f"{P2}, bloque 11"),
  ("fuga-de-datos-y-baseline", "La fuga de datos y el baseline", 1, f"{P2}, bloques 5 y 11"),
 ]),
 ("Modelos supervisados", None, [
  ("regresion", "Regresión: predecir un número", 1, f"{P2}, bloque 12"),
  ("clasificacion", "Clasificación: predecir una categoría", 1, f"{P2}, bloque 13"),
  ("svm-y-kernels", "SVM y kernels", 0, f"{P2}, bloque 13; CS229"),
  ("arboles-de-decision", "Árboles de decisión", 1, f"{P2}, bloque 13"),
  ("ensambles", "Ensambles: random forest y boosting", 1, f"{P2}, bloque 14"),
 ]),
 ("Sin etiquetas", None, [
  ("clustering", "Clustering: encontrar grupos", 1, f"{P2}, bloque 15; CS229"),
  ("reduccion-de-dimensiones", "Reducción de dimensiones: PCA, t-SNE y UMAP", 1, f"{P2}, bloque 15"),
  ("anomalias", "Detección de anomalías", 0, f"{P2}, bloque 15"),
  ("recomendacion", "Sistemas de recomendación", 0, f"{P2}, bloque 17"),
 ]),
 ("Evaluar e interpretar", None, [
  ("evaluar-e-interpretar", "Métricas y umbral de decisión", 1, f"{P2}, bloque 18"),
  ("desbalance", "Clases desbalanceadas", 1, f"{P2}, bloque 18"),
  ("interpretar-un-modelo", "Interpretar un modelo: importancia de features y SHAP", 0, f"{P2}, bloque 18"),
 ]),
]),
("Entrenar y ajustar modelos", [
 ("Training and tuning", None, [
  ("ciclo-de-entrenamiento", "El ciclo de entrenamiento: épocas, lotes e iteraciones", 1, f"{P2}, bloque 20"),
  ("hiperparametros", "Buscar hiperparámetros con método", 1, f"{P2}, bloques 11 y «Training and Tuning Models»; Deep Learning Tuning Playbook de Google"),
  ("learning-rate", "El learning rate y su calendario", 1, f"{P2}, bloque 20; Tuning Playbook"),
  ("diagnosticar-entrenamiento", "Diagnosticar un entrenamiento por sus curvas", 1, f"{P2}, bloque 20; Karpathy; Tuning Playbook"),
  ("rendimiento-de-entrenamiento", "Entrenar más rápido y más barato", 0, f"{P2}, «Training and Tuning Models»; CS336 (entrenar sin GPU propia)"),
 ]),
]),
("Deep Learning", [
 ("Redes neuronales", None, [
  ("perceptron-y-mlp", "De la neurona a la red: perceptrón y MLP", 1, f"{P2}, bloque 19"),
  ("backprop", "Backpropagation", 1, f"{P2}, bloque 19; Karpathy"),
  ("optimizadores", "Optimizadores: SGD, momentum y Adam", 1, f"{P2}, bloque 19; CS230"),
  ("inicializacion-y-normalizacion", "Inicialización y normalización", 1, f"{P2}, bloque 20; CS230"),
  ("regularizar-una-red", "Regularizar una red: dropout, weight decay y augmentation", 1, f"{P2}, bloque 20"),
  ("pytorch-y-tensores", "PyTorch y tensores, para dirigir al agente", 1, f"{P2}, bloque 1 (herramientas); CS336 clase 2"),
 ]),
 ("Arquitecturas", None, [
  ("cnn", "Redes convolucionales (CNN)", 1, f"{P2}, bloque 21"),
  ("rnn-y-lstm", "Secuencias: RNN, LSTM y GRU", 1, f"{P2}, bloque 21"),
  ("atencion-y-transformers", "Atención y el Transformer, a fondo", 1, f"{P2}, bloque 21; Raschka; CS224N"),
  ("autoencoders-y-vae", "Autoencoders y VAE", 0, f"{P2}, bloque 21; MIT 6.S191 (generativos)"),
  ("gans-y-difusion", "GANs y modelos de difusión", 0, f"{P2}, bloque 21; MIT 6.S191"),
  ("transfer-learning", "Transfer learning y fine-tuning", 1, f"{P2}, bloque 21; Hugging Face, caps. 1 a 4"),
 ]),
 ("Visión y lenguaje", None, [
  ("computer-vision", "Computer vision: detección, segmentación y pose", 1, f"{P2}, bloque 22"),
  ("nlp", "Lenguaje: del texto a los embeddings", 1, f"{P2}, bloque 23"),
 ]),
]),
("Pre-entrenamiento y escala", [
 ("Pre-entrenar", None, [
  ("tokenizador", "Construir un tokenizador: BPE", 1, "Karpathy (tokenizador BPE); CS336 tarea 1"),
  ("pre-entrenar", "Pre-entrenar un modelo de lenguaje desde cero", 1, f"{P2}, bloque 24; CS336; Raschka caps. 2 a 5"),
  ("datos-pre-entrenamiento", "Datos para pre-entrenar: filtrar, deduplicar y mezclar", 1, f"{P2}, bloque 24; CS336 clases 13 y 14"),
  ("arquitectura-a-escala", "Arquitectura a escala: mezcla de expertos y alternativas a la atención", 0, "CS336 clases 3 y 4; Raschka (Qwen3)"),
  ("leyes-de-escala", "Leyes de escala: datos, parámetros y cómputo", 1, f"{P2}, bloque 24; CS336"),
 ]),
 ("Entrenar a escala", None, [
  ("gpu-y-memoria", "GPU y memoria: dónde se va el tiempo", 1, "CS336 clases 5 a 8; avisos: GPU 33 %"),
  ("entrenamiento-distribuido", "Entrenar en muchas GPUs: paralelismo", 0, "CS336; MIT 6.S191 «Secrets to Massively Parallel Training»; avisos: 18 %"),
 ]),
]),
("Post-entrenamiento y refuerzo", [
 ("Aprender con recompensas", None, [
  ("refuerzo-desde-la-base", "Aprendizaje por refuerzo desde la base", 1, "CS229 (refuerzo y control); MIT 6.S191"),
  ("rl-para-llms", "Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables", 1, f"{P2}, bloque 25; CS336 clases 15 y 16"),
  ("destilacion", "Destilación: un modelo grande le enseña a uno chico", 0, f"{P2}, bloque 25; Raschka, Build a Reasoning Model"),
 ]),
]),
("MLOps y producción", [
 ("Del notebook a producción", None, [
  ("del-notebook-a-produccion", "Del notebook a producción", 1, f"{P2}, bloque 27"),
  ("experimentos-y-versiones", "Seguir experimentos y versionar datos y modelos", 1, f"{P2}, bloque 27 (MLflow y DVC)"),
  ("operar-modelos", "Operar modelos en producción", 1, f"{P2}, bloque 28"),
 ]),
]),
("Especialización (optativo)", [
 ("Biomecánica con visión", None, [
  ("biomecanica-con-vision", "Biomecánica con visión", 0, f"{P2}, bloque 30"),
 ]),
]),
]
