// Generado desde research_notes/propuesta_v3/estructura.py (propuesta v3 del roadmap, pedido 82).
// Solo para el borrador: el temario definitivo espera el OK de Fran.
import type { Modulo } from "./tipos";

type ModuloSinNumero = Omit<Modulo, "n" | "lecciones"> & { lecciones: Omit<Modulo["lecciones"][number], "n">[] };

export const temarioAi: ModuloSinNumero[] = [
  {
    "bloque": "Fundamentos · para todos",
    "nombre": "Empezar a dirigir",
    "lecciones": [
      {
        "id": "oficio-ai-engineer",
        "titulo": "El oficio de AI engineer y sus dos caminos",
        "disponible": false
      },
      {
        "id": "dirigir-una-ia",
        "titulo": "Dirigir a una IA: delegar, describir, discernir y responder",
        "disponible": false
      },
      {
        "id": "primer-agente-de-codigo",
        "titulo": "Tu primer agente de código",
        "disponible": false
      },
      {
        "id": "git-y-github",
        "titulo": "Git y GitHub para dirigir al agente",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Fundamentos · para todos",
    "nombre": "Software para dirigir",
    "lecciones": [
      {
        "id": "python-lenguaje-tecnico",
        "titulo": "Python como lenguaje técnico",
        "disponible": false
      },
      {
        "id": "proyecto-por-dentro",
        "titulo": "Un proyecto de software por dentro",
        "disponible": false
      },
      {
        "id": "http-apis-json",
        "titulo": "HTTP, APIs y JSON",
        "disponible": false
      },
      {
        "id": "backend-y-autenticacion",
        "titulo": "Backend, autenticación y webhooks",
        "disponible": false
      },
      {
        "id": "bases-de-datos-y-sql",
        "titulo": "Bases de datos y SQL",
        "disponible": false
      },
      {
        "id": "spec-y-diseno",
        "titulo": "De la idea a la spec: un diseño que el agente no degrade",
        "disponible": false
      },
      {
        "id": "verificar-y-preparar-repo",
        "titulo": "Verificar y preparar tu repo para el agente",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Fundamentos · para todos",
    "nombre": "La IA por dentro, en intuición",
    "lecciones": [
      {
        "id": "matematica-en-intuicion",
        "titulo": "La matemática del ML, en intuición",
        "disponible": false
      },
      {
        "id": "entrenar-validar-probar",
        "titulo": "Entrenar, validar y probar",
        "disponible": false
      },
      {
        "id": "redes-neuronales",
        "titulo": "Redes neuronales desde la base",
        "disponible": false
      },
      {
        "id": "atencion-y-transformers",
        "titulo": "Atención y el Transformer",
        "disponible": false
      },
      {
        "id": "03",
        "titulo": "Cómo funciona un LLM",
        "disponible": true
      },
      {
        "id": "de-donde-sale-un-llm",
        "titulo": "De dónde sale un LLM y cuál usar",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Fundamentos · para todos",
    "nombre": "Modelos y proveedores: elegir con datos",
    "lecciones": [
      {
        "id": "mapa-de-proveedores",
        "titulo": "El mapa de proveedores: quién hace los modelos más usados",
        "disponible": false
      },
      {
        "id": "abiertos-o-cerrados",
        "titulo": "Modelos abiertos y cerrados: pesos, licencias y dónde se corren",
        "disponible": false
      },
      {
        "id": "hugging-face-el-hub",
        "titulo": "Hugging Face: el hub de los modelos abiertos",
        "disponible": false
      },
      {
        "id": "benchmarks",
        "titulo": "Benchmarks: qué mide cada uno y por qué pueden engañar",
        "disponible": false
      },
      {
        "id": "donde-comparar-modelos",
        "titulo": "Dónde comparar modelos: Arena y Artificial Analysis",
        "disponible": false
      },
      {
        "id": "elegir-modelo-y-costo",
        "titulo": "Elegir modelo y controlar el costo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Fundamentos · para todos",
    "nombre": "Nivel 1: App con un LLM",
    "lecciones": [
      {
        "id": "prompting-tecnico",
        "titulo": "Prompting técnico",
        "disponible": false
      },
      {
        "id": "context-engineering",
        "titulo": "Context engineering",
        "disponible": false
      },
      {
        "id": "llamada-a-la-api",
        "titulo": "La llamada a la API por dentro",
        "disponible": false
      },
      {
        "id": "salidas-estructuradas",
        "titulo": "Salidas estructuradas y validación",
        "disponible": false
      },
      {
        "id": "tool-calling",
        "titulo": "Tool calling: el modelo pide y tu código ejecuta",
        "disponible": false
      },
      {
        "id": "primeros-evals",
        "titulo": "Primeros evals: saber si funciona",
        "disponible": false
      },
      {
        "id": "de-script-a-producto",
        "titulo": "De script a producto",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Fundamentos · para todos",
    "nombre": "Nivel 2: RAG con evals",
    "lecciones": [
      {
        "id": "por-que-rag",
        "titulo": "Por qué RAG: darle conocimiento al modelo sin cargarlo todo",
        "disponible": false
      },
      {
        "id": "primero-los-datos",
        "titulo": "Primero, los datos: limpios, sin duplicados y ordenados",
        "disponible": false
      },
      {
        "id": "cortar-en-trozos",
        "titulo": "Cortar en trozos: chunking y metadatos",
        "disponible": false
      },
      {
        "id": "embeddings-y-bases-vectoriales",
        "titulo": "Embeddings y bases vectoriales",
        "disponible": false
      },
      {
        "id": "buscar-palabras-o-significado",
        "titulo": "Buscar: por palabras, por significado o las dos",
        "disponible": false
      },
      {
        "id": "cuando-la-busqueda-falla",
        "titulo": "Cuando la búsqueda simple falla: reescribir, reordenar y Text-to-SQL",
        "disponible": false
      },
      {
        "id": "responder-con-fuentes",
        "titulo": "Responder con fuentes, y saber decir «no lo sé»",
        "disponible": false
      },
      {
        "id": "evaluar-un-rag",
        "titulo": "Evaluar un RAG: ¿falló la búsqueda o la respuesta?",
        "disponible": false
      },
      {
        "id": "rag-agentico-y-graphrag",
        "titulo": "RAG agéntico y GraphRAG: cuándo valen la pena (optativo)",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Agentes, harness y Claude Code · para todos",
    "nombre": "Nivel 3: Agentes, workflows y automatizaciones",
    "lecciones": [
      {
        "id": "workflow-o-agente",
        "titulo": "Workflow o agente",
        "disponible": false
      },
      {
        "id": "automatizar-un-flujo",
        "titulo": "Automatizar un flujo",
        "disponible": false
      },
      {
        "id": "mcp",
        "titulo": "MCP: herramientas para cualquier agente",
        "disponible": false
      },
      {
        "id": "memoria-del-agente",
        "titulo": "Memoria del agente",
        "disponible": false
      },
      {
        "id": "evaluar-un-agente",
        "titulo": "Evaluar un agente",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Agentes, harness y Claude Code · para todos",
    "nombre": "El harness por dentro",
    "lecciones": [
      {
        "id": "anatomia-de-un-harness",
        "titulo": "Anatomía de un harness: el sistema alrededor del modelo",
        "disponible": false
      },
      {
        "id": "loop-del-agente",
        "titulo": "El loop del agente: turnos, pasos y quién decide terminar",
        "disponible": false
      },
      {
        "id": "leer-una-sesion",
        "titulo": "Leer una sesión real: transcript y trazas",
        "disponible": false
      },
      {
        "id": "contexto-y-compactacion",
        "titulo": "Qué ve el modelo en cada llamada, y qué sobrevive a compactar",
        "disponible": false
      },
      {
        "id": "estado-y-crash",
        "titulo": "Dónde vive la verdad: estado, log y reanudar tras un crash",
        "disponible": false
      },
      {
        "id": "herramientas-y-permisos",
        "titulo": "Diseñar herramientas y permisos",
        "disponible": false
      },
      {
        "id": "sandbox-y-contencion",
        "titulo": "Sandbox y contención: lo que el agente alcanza",
        "disponible": false
      },
      {
        "id": "lo-obligatorio-en-codigo",
        "titulo": "Lo obligatorio va en código, no en el prompt",
        "disponible": false
      },
      {
        "id": "seguridad-del-agente",
        "titulo": "Seguridad del agente",
        "disponible": false
      },
      {
        "id": "primer-harness",
        "titulo": "Dirige la construcción de tu harness",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Agentes, harness y Claude Code · para todos",
    "nombre": "Frameworks de IA, lo justo",
    "aviso": "Cultura de IA: los frameworks más pedidos, para reconocerlos y usarlos si tu proyecto lo pide. LlamaIndex, DSPy y Deep Agents se ven como parte del mapa.",
    "lecciones": [
      {
        "id": "mapa-de-frameworks",
        "titulo": "El mapa de frameworks: qué resuelve cada uno, y framework o loop propio",
        "disponible": false
      },
      {
        "id": "langchain-y-langgraph",
        "titulo": "LangChain, LangGraph y LangSmith: los más pedidos",
        "disponible": false
      },
      {
        "id": "sdks-de-agentes",
        "titulo": "Los SDK de agentes: Claude Agent SDK, OpenAI Agents SDK y Google ADK",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Agentes, harness y Claude Code · para todos",
    "nombre": "Dominar Claude Code",
    "lecciones": [
      {
        "id": "instrucciones-y-skills",
        "titulo": "Instrucciones y skills que sí funcionan",
        "disponible": false
      },
      {
        "id": "hooks-y-control",
        "titulo": "Hooks y control determinista",
        "disponible": false
      },
      {
        "id": "delegar-subagentes-y-flujos",
        "titulo": "Delegar: subagentes, equipos y workflows",
        "disponible": false
      },
      {
        "id": "trabajo-sin-supervision",
        "titulo": "Trabajo sin supervisión",
        "disponible": false
      },
      {
        "id": "tokens-y-creditos",
        "titulo": "Optimizar tokens y créditos",
        "disponible": false
      },
      {
        "id": "codex-deepseek-y-el-mercado",
        "titulo": "Codex, DeepSeek Harness y el mercado",
        "disponible": false
      },
      {
        "id": "tu-flujo-agentic",
        "titulo": "Tu flujo de agentic engineering",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Agentes, harness y Claude Code · para todos",
    "nombre": "Nivel 4: Tu sistema multi-agente",
    "lecciones": [
      {
        "id": "multi-agente-o-no",
        "titulo": "¿Hace falta multi-agente?",
        "disponible": false
      },
      {
        "id": "quien-tiene-el-plan",
        "titulo": "Orquestar: quién tiene el plan",
        "disponible": false
      },
      {
        "id": "enrutador-y-contrato",
        "titulo": "Enrutador y contrato de validación",
        "disponible": false
      },
      {
        "id": "lectura-y-unico-escritor",
        "titulo": "Subagentes de lectura y un solo escritor",
        "disponible": false
      },
      {
        "id": "auditor-adversarial",
        "titulo": "El auditor que no vio nada",
        "disponible": false
      },
      {
        "id": "fabrica-de-subagentes",
        "titulo": "Crear subagentes de forma autónoma",
        "disponible": false
      },
      {
        "id": "fabrica-de-herramientas",
        "titulo": "Crear herramientas de forma autónoma",
        "disponible": false
      },
      {
        "id": "mismo-nucleo-varios-dominios",
        "titulo": "Un mismo núcleo para cualquier proyecto",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Agentes, harness y Claude Code · para todos",
    "nombre": "Arquitecto de harness",
    "lecciones": [
      {
        "id": "decisiones-de-un-harness",
        "titulo": "Las decisiones de un harness robusto",
        "disponible": false
      },
      {
        "id": "leer-harnesses-abiertos",
        "titulo": "Leer harnesses abiertos por sus decisiones",
        "disponible": false
      },
      {
        "id": "optimizar-un-harness",
        "titulo": "Optimizar un harness con evidencia",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Cruce de caminos",
    "nombre": "Elige tu camino",
    "aviso": "Aquí AI Engineering se abre en dos caminos: Productos, más software, e Investigación, más modelos. Puedes seguir uno o los dos, en el orden que quieras. El cierre de CEO y CTO es para todos.",
    "lecciones": [
      {
        "id": "elige-tu-camino",
        "titulo": "Productos, investigación o los dos: elige tu camino",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 1 · Productos: crear productos de IA",
    "nombre": "Producción",
    "aviso": "Camino 1. Llevas tu sistema multi-agente a usuarios reales: desplegarlo, vigilarlo y hacerlo confiable.",
    "lecciones": [
      {
        "id": "desplegar",
        "titulo": "Desplegar: APIs, Docker, CI/CD y cloud",
        "disponible": false
      },
      {
        "id": "sistemas-distribuidos",
        "titulo": "Sistemas distribuidos, lo justo",
        "disponible": false
      },
      {
        "id": "observabilidad",
        "titulo": "Observabilidad",
        "disponible": false
      },
      {
        "id": "confiabilidad",
        "titulo": "Confiabilidad y corridas largas",
        "disponible": false
      },
      {
        "id": "privacidad-y-responsabilidad",
        "titulo": "Privacidad y responsabilidad",
        "disponible": false
      },
      {
        "id": "cara-al-cliente",
        "titulo": "Cara al cliente: requisitos y despliegue",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 1 · Productos: crear productos de IA",
    "nombre": "Nivel 5: Autonomía y fábrica de software",
    "lecciones": [
      {
        "id": "loops-autonomos",
        "titulo": "Loops autónomos",
        "disponible": false
      },
      {
        "id": "revisor-y-contrato-en-tu-repo",
        "titulo": "Revisor separado y contrato en tu repo",
        "disponible": false
      },
      {
        "id": "agentes-en-segundo-plano",
        "titulo": "Agentes en segundo plano: de issue a PR",
        "disponible": false
      },
      {
        "id": "mezcla-automatica-y-bucle-meta",
        "titulo": "Mezcla automática por riesgo y bucle meta",
        "disponible": false
      },
      {
        "id": "fabrica-completa",
        "titulo": "La fábrica completa, y cuándo no hacerla",
        "disponible": false
      },
      {
        "id": "sistemas-que-se-mejoran-solos",
        "titulo": "Sistemas que se mejoran solos",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 1 · Productos: crear productos de IA",
    "nombre": "Capacidades especiales (optativo)",
    "lecciones": [
      {
        "id": "voz-imagen-y-video",
        "titulo": "Voz, imagen y video",
        "disponible": false
      },
      {
        "id": "agentes-que-usan-el-computador",
        "titulo": "Agentes que usan el computador",
        "disponible": false
      },
      {
        "id": "modelos-locales",
        "titulo": "Modelos locales y abiertos",
        "disponible": false
      },
      {
        "id": "protocolos-entre-agentes",
        "titulo": "Protocolos entre agentes",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación: la IA por dentro",
    "nombre": "El LLM a fondo",
    "aviso": "Camino 2. Empieza aquí, en AI Engineering, y se va desviando de a poco a ML y Deep Learning. Cada desvío lleva la marca «Sigue en ML y DL».",
    "lecciones": [
      {
        "id": "hf-transformers-y-datasets",
        "titulo": "Trabajar con Hugging Face: Transformers, Datasets y el Hub",
        "disponible": false
      },
      {
        "id": "m-tokens-y-embeddings",
        "titulo": "Del texto a tokens y embeddings",
        "disponible": false
      },
      {
        "id": "m-modelar-lenguaje",
        "titulo": "Modelar lenguaje: predecir el siguiente token",
        "disponible": false
      },
      {
        "id": "m-arquitectura-moderna",
        "titulo": "Decisiones de arquitectura moderna",
        "disponible": false
      },
      {
        "id": "m-evaluar-llms",
        "titulo": "Evaluar modelos de lenguaje",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación: la IA por dentro",
    "nombre": "Adaptar un modelo: fine-tuning",
    "aviso": "Primer desvío: la base del aprendizaje por refuerzo vive en ML y DL.",
    "lecciones": [
      {
        "id": "m-sft",
        "titulo": "De modelo base a asistente: SFT",
        "disponible": false
      },
      {
        "id": "m-rlhf-dpo",
        "titulo": "Preferencias: RLHF y DPO",
        "disponible": false
      },
      {
        "id": "m-lora",
        "titulo": "Fine-tuning eficiente: LoRA, y cuándo no",
        "disponible": false
      },
      {
        "id": "m-dataset-propio",
        "titulo": "Tu dataset y tu evaluación de fine-tuning",
        "disponible": false
      },
      {
        "titulo": "Aprendizaje por refuerzo desde la base",
        "disponible": false,
        "desvio": "ml/refuerzo-desde-la-base"
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación: la IA por dentro",
    "nombre": "Servir un modelo: inferencia",
    "aviso": "1 desvío: la GPU y su memoria, a fondo, en ML y DL.",
    "lecciones": [
      {
        "id": "tamano-de-un-modelo",
        "titulo": "Qué significa 4B o 70B: parámetros, parámetros activos y memoria",
        "disponible": false
      },
      {
        "id": "m-servir",
        "titulo": "Servir un LLM: prefill, decode y KV cache",
        "disponible": false
      },
      {
        "id": "m-muchos-usuarios",
        "titulo": "Muchos usuarios: batching y memoria GPU",
        "disponible": false
      },
      {
        "id": "cuantizacion-a-fondo",
        "titulo": "Cuantización a fondo: 8 y 4 bits, GGUF, y cómo medir lo que se pierde",
        "disponible": false
      },
      {
        "id": "speculative-decoding",
        "titulo": "Speculative decoding y otros atajos para generar más rápido",
        "disponible": false
      },
      {
        "id": "m-costo-por-token",
        "titulo": "La cuenta del costo por token",
        "disponible": false
      },
      {
        "titulo": "GPU y memoria: dónde se va el tiempo",
        "disponible": false,
        "desvio": "ml/gpu-y-memoria"
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación: la IA por dentro",
    "nombre": "Razonar y mirar adentro",
    "aviso": "2 desvíos: entrenar el razonamiento con refuerzo y destilar se estudian en ML y DL.",
    "lecciones": [
      {
        "id": "m-razonamiento",
        "titulo": "Razonamiento: RLVR",
        "disponible": false
      },
      {
        "id": "m-interpretabilidad",
        "titulo": "Interpretabilidad mecanicista",
        "disponible": false
      },
      {
        "id": "m-seguridad-alineacion",
        "titulo": "Seguridad y alineación",
        "disponible": false
      },
      {
        "titulo": "Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables",
        "disponible": false,
        "desvio": "ml/rl-para-llms"
      },
      {
        "titulo": "Destilación: un modelo grande le enseña a uno chico",
        "disponible": false,
        "desvio": "ml/destilacion"
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación: la IA por dentro",
    "nombre": "El oficio de investigador",
    "aviso": "2 desvíos: la estadística de los experimentos y la búsqueda de hiperparámetros viven en ML y DL.",
    "lecciones": [
      {
        "id": "m-leer-papers",
        "titulo": "Leer papers y armar tu mapa, verificando contra la fuente",
        "disponible": false
      },
      {
        "id": "m-reproducir",
        "titulo": "Reproducir un paper",
        "disponible": false
      },
      {
        "id": "m-investigar-con-agentes",
        "titulo": "Investigar con agentes, y sus trampas",
        "disponible": false
      },
      {
        "titulo": "Experimentos con estadística: ablaciones y significancia",
        "disponible": false,
        "desvio": "ml/experimentos-y-significancia"
      },
      {
        "titulo": "Buscar hiperparámetros con método",
        "disponible": false,
        "desvio": "ml/hiperparametros"
      },
      {
        "id": "m-publicar",
        "titulo": "Elegir un problema, escribir y publicar",
        "disponible": false
      },
      {
        "id": "m-entrar",
        "titulo": "Entrar: roles, becas, open source y entrevistas",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación: la IA por dentro",
    "nombre": "Entrenar desde cero · sigue en ML y DL",
    "aviso": "Aquí el camino se muda a ML y Deep Learning: entrenar un modelo desde cero es su terreno. Si quieres seguir después, ese es el curso completo.",
    "lecciones": [
      {
        "titulo": "Pre-entrenar un modelo de lenguaje desde cero",
        "disponible": false,
        "desvio": "ml/pre-entrenar"
      },
      {
        "titulo": "Datos para pre-entrenar: filtrar, deduplicar y mezclar",
        "disponible": false,
        "desvio": "ml/datos-pre-entrenamiento"
      },
      {
        "titulo": "Leyes de escala: datos, parámetros y cómputo",
        "disponible": false,
        "desvio": "ml/leyes-de-escala"
      },
      {
        "titulo": "Entrenar en muchas GPUs: paralelismo",
        "disponible": false,
        "desvio": "ml/entrenamiento-distribuido"
      }
    ]
  },
  {
    "bloque": "Cierre · para todos",
    "nombre": "CEO y CTO de una startup de IA",
    "lecciones": [
      {
        "id": "costo-tarea-exitosa",
        "titulo": "El costo de una tarea que sale bien",
        "disponible": false
      },
      {
        "id": "cobrar-costo-variable",
        "titulo": "Cobrar algo cuyo costo varía",
        "disponible": false
      },
      {
        "id": "que-queda-si-sale-otro-modelo",
        "titulo": "¿Qué queda si mañana sale un modelo mejor?",
        "disponible": false
      },
      {
        "id": "portafolio-de-modelos",
        "titulo": "Portafolio de modelos y salida de emergencia",
        "disponible": false
      },
      {
        "id": "equipo-y-revision",
        "titulo": "El equipo y la revisión cuando escriben los agentes",
        "disponible": false
      },
      {
        "id": "ley-contratos-incidentes",
        "titulo": "Ley, contratos e incidentes",
        "disponible": false
      },
      {
        "id": "primer-cliente",
        "titulo": "Del problema al primer cliente",
        "disponible": false
      },
      {
        "id": "sala-de-datos",
        "titulo": "La sala de datos: defiende tu empresa",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Cierre · para todos",
    "nombre": "Tu carrera",
    "lecciones": [
      {
        "id": "portafolio",
        "titulo": "Tu portafolio",
        "disponible": false
      },
      {
        "id": "entrevistas",
        "titulo": "Entrevistas de AI engineering",
        "disponible": false
      },
      {
        "id": "experiencia-y-contactos",
        "titulo": "Experiencia real, CV y contactos",
        "disponible": false
      }
    ]
  }
];

export const temarioMl: ModuloSinNumero[] = [
  {
    "bloque": "Fundamentos: matemática y estadística",
    "nombre": "El mapa del ML",
    "lecciones": [
      {
        "id": "mapa-del-ml",
        "titulo": "El mapa del ML: problemas, tipos de aprendizaje y roles",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Fundamentos: matemática y estadística",
    "nombre": "Matemática para ML",
    "lecciones": [
      {
        "id": "algebra-lineal",
        "titulo": "Álgebra lineal: los datos como matriz",
        "disponible": false
      },
      {
        "id": "derivadas-y-gradientes",
        "titulo": "Derivadas, gradientes y la regla de la cadena",
        "disponible": false
      },
      {
        "id": "descenso-de-gradiente",
        "titulo": "Descenso de gradiente: cómo aprende casi todo modelo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Fundamentos: matemática y estadística",
    "nombre": "Estadística para ML",
    "lecciones": [
      {
        "id": "probabilidad-para-ml",
        "titulo": "Probabilidad y distribuciones para modelar",
        "disponible": false
      },
      {
        "id": "maxima-verosimilitud",
        "titulo": "Máxima verosimilitud: de dónde sale la función de pérdida",
        "disponible": false
      },
      {
        "id": "bayes-y-modelos-generativos",
        "titulo": "Bayes y modelos generativos",
        "disponible": false
      },
      {
        "id": "sesgo-varianza",
        "titulo": "Sesgo, varianza y generalización",
        "disponible": false
      },
      {
        "id": "experimentos-y-significancia",
        "titulo": "Experimentos con estadística: ablaciones y significancia",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Machine Learning clásico",
    "nombre": "Cómo aprende un modelo",
    "lecciones": [
      {
        "id": "entrenar-validar-probar",
        "titulo": "Entrenar, validar y probar",
        "disponible": false
      },
      {
        "id": "regularizacion-y-validacion-cruzada",
        "titulo": "Regularización y validación cruzada",
        "disponible": false
      },
      {
        "id": "fuga-de-datos-y-baseline",
        "titulo": "La fuga de datos y el baseline",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Machine Learning clásico",
    "nombre": "Modelos supervisados",
    "lecciones": [
      {
        "id": "regresion",
        "titulo": "Regresión: predecir un número",
        "disponible": false
      },
      {
        "id": "clasificacion",
        "titulo": "Clasificación: predecir una categoría",
        "disponible": false
      },
      {
        "id": "svm-y-kernels",
        "titulo": "SVM y kernels",
        "disponible": false
      },
      {
        "id": "arboles-de-decision",
        "titulo": "Árboles de decisión",
        "disponible": false
      },
      {
        "id": "ensambles",
        "titulo": "Ensambles: random forest y boosting",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Machine Learning clásico",
    "nombre": "Sin etiquetas",
    "lecciones": [
      {
        "id": "clustering",
        "titulo": "Clustering: encontrar grupos",
        "disponible": false
      },
      {
        "id": "reduccion-de-dimensiones",
        "titulo": "Reducción de dimensiones: PCA, t-SNE y UMAP",
        "disponible": false
      },
      {
        "id": "anomalias",
        "titulo": "Detección de anomalías",
        "disponible": false
      },
      {
        "id": "recomendacion",
        "titulo": "Sistemas de recomendación",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Machine Learning clásico",
    "nombre": "Evaluar e interpretar",
    "lecciones": [
      {
        "id": "evaluar-e-interpretar",
        "titulo": "Métricas y umbral de decisión",
        "disponible": false
      },
      {
        "id": "desbalance",
        "titulo": "Clases desbalanceadas",
        "disponible": false
      },
      {
        "id": "interpretar-un-modelo",
        "titulo": "Interpretar un modelo: importancia de features y SHAP",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Entrenar y ajustar modelos",
    "nombre": "Training and tuning",
    "lecciones": [
      {
        "id": "ciclo-de-entrenamiento",
        "titulo": "El ciclo de entrenamiento: épocas, lotes e iteraciones",
        "disponible": false
      },
      {
        "id": "hiperparametros",
        "titulo": "Buscar hiperparámetros con método",
        "disponible": false
      },
      {
        "id": "learning-rate",
        "titulo": "El learning rate y su calendario",
        "disponible": false
      },
      {
        "id": "diagnosticar-entrenamiento",
        "titulo": "Diagnosticar un entrenamiento por sus curvas",
        "disponible": false
      },
      {
        "id": "rendimiento-de-entrenamiento",
        "titulo": "Entrenar más rápido y más barato",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Deep Learning",
    "nombre": "Redes neuronales",
    "lecciones": [
      {
        "id": "perceptron-y-mlp",
        "titulo": "De la neurona a la red: perceptrón y MLP",
        "disponible": false
      },
      {
        "id": "backprop",
        "titulo": "Backpropagation",
        "disponible": false
      },
      {
        "id": "optimizadores",
        "titulo": "Optimizadores: SGD, momentum y Adam",
        "disponible": false
      },
      {
        "id": "inicializacion-y-normalizacion",
        "titulo": "Inicialización y normalización",
        "disponible": false
      },
      {
        "id": "regularizar-una-red",
        "titulo": "Regularizar una red: dropout, weight decay y augmentation",
        "disponible": false
      },
      {
        "id": "pytorch-y-tensores",
        "titulo": "PyTorch y tensores, para dirigir al agente",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Deep Learning",
    "nombre": "Arquitecturas",
    "lecciones": [
      {
        "id": "cnn",
        "titulo": "Redes convolucionales (CNN)",
        "disponible": false
      },
      {
        "id": "rnn-y-lstm",
        "titulo": "Secuencias: RNN, LSTM y GRU",
        "disponible": false
      },
      {
        "id": "atencion-y-transformers",
        "titulo": "Atención y el Transformer, a fondo",
        "disponible": false
      },
      {
        "id": "autoencoders-y-vae",
        "titulo": "Autoencoders y VAE",
        "disponible": false
      },
      {
        "id": "gans-y-difusion",
        "titulo": "GANs y modelos de difusión",
        "disponible": false
      },
      {
        "id": "transfer-learning",
        "titulo": "Transfer learning y fine-tuning",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Deep Learning",
    "nombre": "Visión y lenguaje",
    "lecciones": [
      {
        "id": "computer-vision",
        "titulo": "Computer vision: detección, segmentación y pose",
        "disponible": false
      },
      {
        "id": "nlp",
        "titulo": "Lenguaje: del texto a los embeddings",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Pre-entrenamiento y escala",
    "nombre": "Pre-entrenar",
    "lecciones": [
      {
        "id": "tokenizador",
        "titulo": "Construir un tokenizador: BPE",
        "disponible": false
      },
      {
        "id": "pre-entrenar",
        "titulo": "Pre-entrenar un modelo de lenguaje desde cero",
        "disponible": false
      },
      {
        "id": "datos-pre-entrenamiento",
        "titulo": "Datos para pre-entrenar: filtrar, deduplicar y mezclar",
        "disponible": false
      },
      {
        "id": "arquitectura-a-escala",
        "titulo": "Arquitectura a escala: mezcla de expertos y alternativas a la atención",
        "disponible": false
      },
      {
        "id": "leyes-de-escala",
        "titulo": "Leyes de escala: datos, parámetros y cómputo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Pre-entrenamiento y escala",
    "nombre": "Entrenar a escala",
    "lecciones": [
      {
        "id": "gpu-y-memoria",
        "titulo": "GPU y memoria: dónde se va el tiempo",
        "disponible": false
      },
      {
        "id": "entrenamiento-distribuido",
        "titulo": "Entrenar en muchas GPUs: paralelismo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Post-entrenamiento y refuerzo",
    "nombre": "Aprender con recompensas",
    "lecciones": [
      {
        "id": "refuerzo-desde-la-base",
        "titulo": "Aprendizaje por refuerzo desde la base",
        "disponible": false
      },
      {
        "id": "rl-para-llms",
        "titulo": "Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables",
        "disponible": false
      },
      {
        "id": "destilacion",
        "titulo": "Destilación: un modelo grande le enseña a uno chico",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "MLOps y producción",
    "nombre": "Del notebook a producción",
    "lecciones": [
      {
        "id": "del-notebook-a-produccion",
        "titulo": "Del notebook a producción",
        "disponible": false
      },
      {
        "id": "experimentos-y-versiones",
        "titulo": "Seguir experimentos y versionar datos y modelos",
        "disponible": false
      },
      {
        "id": "operar-modelos",
        "titulo": "Operar modelos en producción",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Especialización (optativo)",
    "nombre": "Biomecánica con visión",
    "lecciones": [
      {
        "id": "biomecanica-con-vision",
        "titulo": "Biomecánica con visión",
        "disponible": false
      }
    ]
  }
];
