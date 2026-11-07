// Generado desde temario/estructura_ai.py (AI Engineering) y temario/estructura.py
// (ML y DL, y Data Science; propuesta ML v2, aprobada en el pedido 98). No se edita a mano: se corre gen_temario.py.
import type { Conexion, Modulo } from "./tipos";

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
        "titulo": "Aprendizaje por refuerzo desde la base: valor, política y Q-learning",
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
        "titulo": "Comparar modelos con estadística: semillas, ablaciones y significancia",
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
    "bloque": "Empezar · para las dos salidas",
    "nombre": "El oficio y el mapa",
    "lecciones": [
      {
        "id": "mapa-del-ml",
        "titulo": "El mapa del ML: problemas, tipos de aprendizaje y datos",
        "disponible": false
      },
      {
        "id": "ml-engineer-o-data-scientist",
        "titulo": "ML engineer, data scientist y los demás: quién hace qué",
        "disponible": false
      },
      {
        "id": "proyecto-de-punta-a-punta",
        "titulo": "Un proyecto de ML de punta a punta: del problema al modelo vivo",
        "disponible": false
      },
      {
        "id": "herramientas-del-ml",
        "titulo": "Las herramientas: Python, notebooks, scikit-learn, PyTorch, SQL y R",
        "disponible": false
      },
      {
        "id": "repaso-datos",
        "titulo": "Repaso: datos, limpieza y exploración",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Matemática y probabilidad para modelar",
    "nombre": "Matemática para ML",
    "lecciones": [
      {
        "id": "algebra-lineal",
        "titulo": "Álgebra lineal: los datos como matriz, y la SVD",
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
      },
      {
        "id": "entropia-y-perdidas",
        "titulo": "Entropía, entropía cruzada y KL: de dónde salen las funciones de pérdida",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Matemática y probabilidad para modelar",
    "nombre": "Probabilidad para modelar",
    "lecciones": [
      {
        "id": "probabilidad-para-ml",
        "titulo": "Repaso: probabilidad y distribuciones",
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
        "titulo": "Sesgo, varianza y curvas de aprendizaje",
        "disponible": false
      },
      {
        "id": "repaso-inferencia",
        "titulo": "Repaso: muestreo, intervalos, tests y bootstrap",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "El modelo lineal a fondo",
    "nombre": "Regresión lineal: el modelo base",
    "aviso": "El modelo más importante del ML, a fondo. Las ofertas de ML engineer lo piden como «OLS y sus extensiones», y es la base de casi todo lo que sigue.",
    "lecciones": [
      {
        "id": "regresion",
        "titulo": "Regresión lineal: predecir y explicar un número",
        "disponible": false
      },
      {
        "id": "mco-por-dentro",
        "titulo": "MCO por dentro: coeficientes, tests t y F, y tipos de predicción",
        "disponible": false
      },
      {
        "id": "categoricas-y-anova",
        "titulo": "Variables categóricas y ANOVA de una y dos vías",
        "disponible": false
      },
      {
        "id": "diagnostico-de-residuos",
        "titulo": "Diagnosticar el modelo: normalidad, heteroscedasticidad y autocorrelación",
        "disponible": false
      },
      {
        "id": "outliers-e-influencia",
        "titulo": "Outliers e influencia: leverage, distancia de Cook y regresión robusta",
        "disponible": false
      },
      {
        "id": "colinealidad-y-seleccion",
        "titulo": "Colinealidad y elegir variables: AIC, BIC, forward, backward y stepwise",
        "disponible": false
      },
      {
        "id": "ridge-lasso-pcr-pls",
        "titulo": "Ridge, LASSO, PCR y PLS: muchas variables sin perder el control",
        "disponible": false
      },
      {
        "id": "regresion-polinomial-y-glm",
        "titulo": "Más allá de la recta: regresión polinomial y modelos lineales generalizados",
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
    "nombre": "Features para el modelo",
    "lecciones": [
      {
        "id": "features-para-modelar",
        "titulo": "Features: crear, codificar y escalar para el modelo",
        "disponible": false
      },
      {
        "id": "pipelines-sin-fuga",
        "titulo": "Preprocesar sin fugas: el mismo pipeline para entrenar y para servir",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Machine Learning clásico",
    "nombre": "Clasificación",
    "lecciones": [
      {
        "id": "clasificacion",
        "titulo": "Regresión logística: predecir una categoría con probabilidad",
        "disponible": false
      },
      {
        "id": "knn-y-naive-bayes",
        "titulo": "kNN y Naive Bayes",
        "disponible": false
      },
      {
        "id": "svm-y-kernels",
        "titulo": "SVM: margen máximo, kernels y regresión con SVM",
        "disponible": false
      },
      {
        "id": "arboles-de-decision",
        "titulo": "Árboles de decisión",
        "disponible": false
      },
      {
        "id": "ensambles",
        "titulo": "Ensambles: random forest, boosting y XGBoost",
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
        "titulo": "Clustering: k-medias, jerárquico, DBSCAN y mezclas gaussianas",
        "disponible": false
      },
      {
        "id": "reduccion-de-dimensiones",
        "titulo": "Reducción de dimensiones: PCA, t-SNE y UMAP",
        "disponible": false
      },
      {
        "id": "anomalias",
        "titulo": "Detección de anomalías: encontrar lo raro antes de que falle",
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
        "id": "analisis-de-errores",
        "titulo": "Análisis de errores: dónde y por qué falla el modelo",
        "disponible": false
      },
      {
        "id": "calibracion",
        "titulo": "Probabilidades en las que se puede confiar: calibración",
        "disponible": false
      },
      {
        "id": "interpretar-un-modelo",
        "titulo": "Explicar un modelo: importancia de features y SHAP",
        "disponible": false
      },
      {
        "id": "experimentos-y-significancia",
        "titulo": "Comparar modelos con estadística: semillas, ablaciones y significancia",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Series de tiempo y pronóstico",
    "nombre": "Series de tiempo",
    "aviso": "Pronosticar es de lo más pedido en la industria: generación solar y eólica, demanda o fallas antes de que ocurran. Data Science lleva un repaso.",
    "lecciones": [
      {
        "id": "series-por-dentro",
        "titulo": "Una serie por dentro: tendencia, estacionalidad, autocorrelación y estacionariedad",
        "disponible": false
      },
      {
        "id": "arima-y-sarima",
        "titulo": "ARIMA y SARIMA: identificar, ajustar, diagnosticar y predecir",
        "disponible": false
      },
      {
        "id": "raiz-unitaria",
        "titulo": "Raíz unitaria y regresión espuria: cuando dos series engañan juntas",
        "disponible": false
      },
      {
        "id": "validar-un-pronostico",
        "titulo": "Validar un pronóstico: walk-forward, persistencia e intervalos",
        "disponible": false
      },
      {
        "id": "pronostico-con-ml",
        "titulo": "Pronosticar con ML: rezagos, ventanas y XGBoost",
        "disponible": false
      },
      {
        "id": "pronostico-probabilistico",
        "titulo": "Pronóstico probabilístico: un rango, no un número",
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
    "nombre": "Entrenar y ajustar",
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
        "titulo": "Entrenar más rápido y más barato: precisión mixta y más",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Deep Learning",
    "nombre": "Visión",
    "lecciones": [
      {
        "id": "imagenes-y-opencv",
        "titulo": "Imágenes como datos: píxeles, OpenCV y preprocesamiento",
        "disponible": false
      },
      {
        "id": "cnn",
        "titulo": "Redes convolucionales: de AlexNet a ResNet",
        "disponible": false
      },
      {
        "id": "transfer-learning",
        "titulo": "Transfer learning y fine-tuning",
        "disponible": false
      },
      {
        "id": "computer-vision",
        "titulo": "Computer vision: detección (YOLO, Detectron2), segmentación y pose",
        "disponible": false
      },
      {
        "id": "seguimiento-de-objetos",
        "titulo": "Seguir objetos en video: tracking",
        "disponible": false
      },
      {
        "id": "vit-y-multimodales",
        "titulo": "Transformers de visión y modelos multimodales",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Deep Learning",
    "nombre": "Secuencias y lenguaje",
    "lecciones": [
      {
        "id": "rnn-y-lstm",
        "titulo": "Secuencias: RNN, LSTM y GRU",
        "disponible": false
      },
      {
        "id": "pronostico-con-redes",
        "titulo": "Pronosticar con redes: RNN, CNN y Transformers para series",
        "disponible": false
      },
      {
        "id": "nlp",
        "titulo": "Lenguaje: del texto a los embeddings, y textos parecidos",
        "disponible": false
      },
      {
        "id": "atencion-y-transformers",
        "titulo": "Atención y el Transformer, a fondo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Deep Learning",
    "nombre": "Modelos generativos",
    "lecciones": [
      {
        "id": "autoencoders-y-vae",
        "titulo": "Autoencoders y VAE",
        "disponible": false
      },
      {
        "id": "gans-y-difusion",
        "titulo": "GANs y modelos de difusión",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Deep Learning",
    "nombre": "Aprender con recompensas: la base",
    "aviso": "Para las dos salidas. El refuerzo se presenta en la lección 1, y aquí se aprende su base, como en MIT 6.390 y Stanford CS229. Lo avanzado sigue en Research.",
    "lecciones": [
      {
        "id": "procesos-de-decision-de-markov",
        "titulo": "Decidir paso a paso: procesos de decisión de Markov",
        "disponible": false
      },
      {
        "id": "refuerzo-desde-la-base",
        "titulo": "Aprendizaje por refuerzo desde la base: valor, política y Q-learning",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 1 · Industria: ML engineer en una empresa",
    "nombre": "Del notebook a producción",
    "aviso": "Salida 1 · Industria. Llevas modelos a producción, como un ML engineer en una empresa. Cada práctica termina en un pipeline o un servicio que funciona. Los ejemplos son en Google Cloud; AWS llega después.",
    "lecciones": [
      {
        "id": "del-notebook-a-produccion",
        "titulo": "El ciclo de vida de un modelo en una empresa",
        "disponible": false
      },
      {
        "id": "empaquetar-y-servir",
        "titulo": "Empaquetar y servir: serializar, contenedores y API, por lotes o en línea",
        "disponible": false
      },
      {
        "id": "repaso-docker-y-ci",
        "titulo": "Repaso: Docker y CI/CD",
        "disponible": false
      },
      {
        "id": "experimentos-y-versiones",
        "titulo": "Seguir experimentos y versionar datos y modelos",
        "disponible": false
      },
      {
        "id": "pipelines-de-ml",
        "titulo": "Pipelines de ML: orquestar datos, entrenamiento y despliegue",
        "disponible": false
      },
      {
        "id": "ci-cd-ct",
        "titulo": "CI/CD/CT: probar, desplegar y reentrenar de forma automática",
        "disponible": false
      },
      {
        "id": "feature-store-y-skew",
        "titulo": "Feature store, y el desfase entre entrenar y servir",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 1 · Industria: ML engineer en una empresa",
    "nombre": "Operar modelos",
    "lecciones": [
      {
        "id": "operar-modelos",
        "titulo": "Monitorear un modelo vivo: deriva de datos y de concepto",
        "disponible": false
      },
      {
        "id": "reentrenar-con-la-realidad",
        "titulo": "Cerrar el ciclo: recoger lo que pasa y reentrenar",
        "disponible": false
      },
      {
        "id": "lanzar-con-cuidado",
        "titulo": "Lanzar sin miedo: A/B, canary y volver atrás",
        "disponible": false
      },
      {
        "id": "ia-responsable",
        "titulo": "IA responsable en producción: sesgo, privacidad y seguridad",
        "disponible": false
      },
      {
        "id": "operar-ia-generativa",
        "titulo": "Operar IA generativa en producción, lo justo",
        "disponible": false
      },
      {
        "id": "devsecops-y-sre",
        "titulo": "DevSecOps y SRE para ML, lo justo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 1 · Industria: ML engineer en una empresa",
    "nombre": "Datos a escala",
    "aviso": "Gestionar datos a escala (SQL avanzado, data warehouse, ETL, Spark y datos en la nube) se estudia en Data Science, como requisito. Aquí va lo propio de servir modelos: datos en tiempo real e infraestructura.",
    "lecciones": [
      {
        "titulo": "Requisito: gestionar datos a escala (SQL avanzado, warehouse, ETL, Spark y la nube)",
        "disponible": false,
        "desvio": "ds/sql-avanzado"
      },
      {
        "id": "pipelines-de-datos-y-colas",
        "titulo": "Streaming y colas de mensajes: datos que llegan en tiempo real",
        "disponible": false
      },
      {
        "id": "infraestructura-como-codigo",
        "titulo": "Infraestructura como código, lo justo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 1 · Industria: ML engineer en una empresa",
    "nombre": "ML en GCP",
    "aviso": "Google Cloud es el ejemplo principal. La tabla con su equivalente en AWS llega más adelante.",
    "lecciones": [
      {
        "id": "mapa-de-gcp",
        "titulo": "El mapa de GCP para ML: la plataforma de ML y cómo se conecta con los datos",
        "disponible": false
      },
      {
        "id": "bigquery-ml-y-automl",
        "titulo": "Modelos con SQL y con pocos clics: BigQuery ML y AutoML",
        "disponible": false
      },
      {
        "id": "entrenar-y-servir-en-gcp",
        "titulo": "Entrenar, registrar, servir y monitorear en GCP",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 1 · Industria: ML engineer en una empresa",
    "nombre": "Diseñar sistemas de ML",
    "lecciones": [
      {
        "id": "disenar-un-sistema-de-ml",
        "titulo": "Diseñar un sistema de ML: requisitos, costo, latencia y escala",
        "disponible": false
      },
      {
        "id": "casos-de-industria",
        "titulo": "Casos de industria: fallas, precios, personalización y combustible",
        "disponible": false
      },
      {
        "id": "repaso-causal",
        "titulo": "Repaso: econometría e inferencia causal",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 2 · Research: investigar con ML",
    "nombre": "Modelos por dentro: pre-entrenar y escalar",
    "aviso": "Salida 2 · Research. Investigas de dos formas: cómo funcionan los modelos por dentro, y usar ML para descubrir cosas en otros campos. Se recorren las dos ramas aplicadas, deporte y neurociencia. Cada práctica termina en un resultado medido y explicado.",
    "lecciones": [
      {
        "id": "repaso-oficio-investigador",
        "titulo": "Repaso: leer, reproducir y publicar papers",
        "disponible": false
      },
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
      },
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
    "bloque": "Salida 2 · Research: investigar con ML",
    "nombre": "Refuerzo avanzado",
    "aviso": "La base del refuerzo se vio en el tronco común; aquí va lo avanzado.",
    "lecciones": [
      {
        "id": "refuerzo-profundo",
        "titulo": "Refuerzo profundo: policy gradients, métodos de valor y actor-critic",
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
      },
      {
        "id": "repaso-post-entrenamiento",
        "titulo": "Repaso: SFT, DPO y LoRA",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 2 · Research: investigar con ML",
    "nombre": "Rama: deporte · predecir y seguir el juego",
    "aviso": "Rama aplicada, obligatoria en esta salida: predecir partidos, seguir jugadores y analizar fútbol y tenis con visión. Termina en el proyecto grande de deporte.",
    "lecciones": [
      {
        "id": "predecir-partidos",
        "titulo": "Predecir partidos: goles con Poisson, ratings y probabilidades",
        "disponible": false
      },
      {
        "id": "seguir-jugadores",
        "titulo": "Seguir jugadores y pelota en video",
        "disponible": false
      },
      {
        "id": "metricas-de-juego",
        "titulo": "Del tracking a métricas de juego: velocidad, posesión y mapas de calor",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 2 · Research: investigar con ML",
    "nombre": "Rama: deporte · biomecánica y movimiento",
    "aviso": "Parte de la rama de deporte. Termina en el proyecto grande de biomecánica: corregir la técnica de un ejercicio con la cámara del celular.",
    "lecciones": [
      {
        "id": "biomecanica-con-vision",
        "titulo": "Biomecánica con visión: medir un movimiento y juzgar la técnica",
        "disponible": false
      },
      {
        "id": "pose-y-angulos",
        "titulo": "Pose en 2D y 3D: de puntos clave a ángulos articulares",
        "disponible": false
      },
      {
        "id": "repeticiones-y-feedback",
        "titulo": "Contar repeticiones y corregir en vivo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Salida 2 · Research: investigar con ML",
    "nombre": "Rama: neurociencia con ML",
    "aviso": "Rama aplicada, obligatoria en esta salida: entender el cerebro con ML, deep learning o visión. Termina en el proyecto grande de neurociencia.",
    "lecciones": [
      {
        "id": "datos-del-cerebro",
        "titulo": "Los datos del cerebro: EEG, fMRI y actividad de neuronas",
        "disponible": false
      },
      {
        "id": "senales-y-frecuencias",
        "titulo": "Señales: filtrar y ver frecuencias con Fourier y wavelets",
        "disponible": false
      },
      {
        "id": "decodificar-el-cerebro",
        "titulo": "Decodificar el cerebro: de la señal a lo que la persona hace o percibe",
        "disponible": false
      },
      {
        "id": "interfaces-cerebro-computador",
        "titulo": "Interfaces cerebro-computador",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Cierre · tu carrera de ML",
    "nombre": "Tu carrera",
    "lecciones": [
      {
        "id": "cv-y-portafolio-ml",
        "titulo": "Tu CV y tu portafolio de ML",
        "disponible": false
      },
      {
        "id": "entrevista-de-ml",
        "titulo": "La entrevista técnica: algoritmos, entrenamiento y despliegue",
        "disponible": false
      },
      {
        "id": "entrevista-de-codigo",
        "titulo": "La entrevista de código: estructuras de datos, algoritmos y SQL en pseudocódigo",
        "disponible": false
      },
      {
        "id": "entrevista-conductual",
        "titulo": "Comunicar a no técnicos y la entrevista conductual",
        "disponible": false
      },
      {
        "id": "repaso-entrar-a-investigacion",
        "titulo": "Repaso: entrar a investigación",
        "disponible": false
      }
    ]
  }
];

export const temarioDs: ModuloSinNumero[] = [
  {
    "bloque": "Empezar · para los dos caminos",
    "nombre": "El oficio",
    "aviso": "Cada práctica de Data Science termina en un análisis y una recomendación.",
    "lecciones": [
      {
        "id": "ds-que-es",
        "titulo": "Qué es la ciencia de datos: entender y decidir con datos",
        "disponible": false
      },
      {
        "id": "repaso-roles",
        "titulo": "Repaso: ML engineer, data scientist y los demás",
        "disponible": false
      },
      {
        "id": "equipo-de-datos",
        "titulo": "Trabajar en un equipo de datos: ML engineers, data engineers, translators y negocio",
        "disponible": false
      },
      {
        "id": "de-la-pregunta-a-la-decision",
        "titulo": "De la pregunta a la decisión: el proceso de un análisis",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Empezar · para los dos caminos",
    "nombre": "Plantear el problema",
    "lecciones": [
      {
        "id": "elegir-el-problema",
        "titulo": "Elegir el problema que más impacta: valor esperado y prioridades",
        "disponible": false
      },
      {
        "id": "entender-con-expertos",
        "titulo": "Entender el problema con los expertos: preguntas, facts y opiniones",
        "disponible": false
      },
      {
        "id": "repaso-leer-papers",
        "titulo": "Repaso: investigar lo que ya se sabe en papers, documentación y casos",
        "disponible": false
      },
      {
        "id": "hipotesis-y-plan",
        "titulo": "Hipótesis y plan de análisis: datos, variables y período",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Los datos",
    "nombre": "Conseguir datos",
    "lecciones": [
      {
        "id": "repaso-python",
        "titulo": "Repaso: Python como lenguaje técnico",
        "disponible": false
      },
      {
        "id": "obtener-datos",
        "titulo": "Conseguir datos de muchas fuentes: archivos, bases, APIs y web scraping",
        "disponible": false
      },
      {
        "id": "datos-no-estructurados",
        "titulo": "Datos no estructurados: texto, imágenes y logs, convertidos en tablas",
        "disponible": false
      },
      {
        "id": "pandas-como-operaciones",
        "titulo": "Pandas como operaciones",
        "disponible": false
      },
      {
        "id": "r-para-datos",
        "titulo": "R: qué es, para qué sirve y cuándo usarlo",
        "disponible": false
      },
      {
        "id": "expresiones-regulares",
        "titulo": "Expresiones regulares: buscar patrones en texto",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Los datos",
    "nombre": "Gestionar datos",
    "aviso": "Gestionar datos es parte del oficio: Harvard la pone entre las 5 caras de una investigación con datos. ML y DL pide este módulo como requisito.",
    "lecciones": [
      {
        "id": "sql-como-operaciones",
        "titulo": "SQL como operaciones: filtrar, unir y agrupar",
        "disponible": false
      },
      {
        "id": "sql-avanzado",
        "titulo": "SQL avanzado: funciones de ventana, CTE y optimizar consultas",
        "disponible": false
      },
      {
        "id": "modelar-datos",
        "titulo": "Modelar datos: tablas, relaciones y esquema estrella",
        "disponible": false
      },
      {
        "id": "warehouse-y-lake",
        "titulo": "Data warehouse, data lake y lakehouse: dónde viven los datos de una empresa",
        "disponible": false
      },
      {
        "id": "etl-y-elt",
        "titulo": "ETL y ELT: mover y transformar datos con pipelines programados",
        "disponible": false
      },
      {
        "id": "spark-y-pyspark",
        "titulo": "Spark y PySpark: datos que no caben en un computador",
        "disponible": false
      },
      {
        "id": "datos-en-la-nube",
        "titulo": "Datos en la nube: almacenamiento, BigQuery y procesamiento en GCP",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Los datos",
    "nombre": "Calidad de datos",
    "lecciones": [
      {
        "id": "limpieza-y-calidad",
        "titulo": "Limpieza y calidad: faltantes, duplicados, outliers y unidades",
        "disponible": false
      },
      {
        "id": "validar-datos",
        "titulo": "Validar datos: tests de calidad y contratos que avisan antes de que algo se rompa",
        "disponible": false
      },
      {
        "id": "repaso-features",
        "titulo": "Repaso: features y fuga de datos",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Explorar y comunicar",
    "nombre": "Explorar",
    "lecciones": [
      {
        "id": "estadistica-descriptiva",
        "titulo": "Estadística descriptiva y tipos de variables",
        "disponible": false
      },
      {
        "id": "eda-y-correlaciones",
        "titulo": "Análisis exploratorio y correlación: Pearson, Spearman o Kendall",
        "disponible": false
      },
      {
        "id": "patrones-y-tendencias",
        "titulo": "Encontrar patrones y tendencias: comparar grupos, cohortes y el tiempo",
        "disponible": false
      },
      {
        "id": "repaso-series",
        "titulo": "Repaso: explorar series de tiempo",
        "disponible": false
      },
      {
        "id": "analizar-con-un-llm",
        "titulo": "Analizar datos dirigiendo a un LLM, y verificar lo que entrega",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Explorar y comunicar",
    "nombre": "Comunicar",
    "lecciones": [
      {
        "id": "visualizacion",
        "titulo": "Visualizar: qué gráfico responde qué pregunta",
        "disponible": false
      },
      {
        "id": "storytelling",
        "titulo": "Contar hallazgos y discutirlos con quienes deciden",
        "disponible": false
      },
      {
        "id": "bi-lo-justo",
        "titulo": "Dashboards y BI, lo justo: Power BI, Tableau o Looker",
        "disponible": false
      },
      {
        "id": "reportes-reproducibles",
        "titulo": "Reportes reproducibles: notebooks, git y análisis que se vuelven a correr solos",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Estadística para decidir",
    "nombre": "Probabilidad e inferencia",
    "lecciones": [
      {
        "id": "probabilidad-y-distribuciones",
        "titulo": "Probabilidad, variables aleatorias y distribuciones",
        "disponible": false
      },
      {
        "id": "simulacion-monte-carlo",
        "titulo": "Simular para decidir: Monte Carlo",
        "disponible": false
      },
      {
        "id": "muestreo-y-estimacion",
        "titulo": "Muestreo, estimadores, sesgo y varianza",
        "disponible": false
      },
      {
        "id": "intervalos-y-tests",
        "titulo": "Intervalos de confianza, tests de hipótesis y p-valor",
        "disponible": false
      },
      {
        "id": "bootstrap",
        "titulo": "Bootstrap: medir la incertidumbre remuestreando",
        "disponible": false
      },
      {
        "id": "muchas-pruebas",
        "titulo": "Muchas pruebas a la vez: tasa de falsos descubrimientos y tests de permutación",
        "disponible": false
      },
      {
        "id": "inferencia-bayesiana",
        "titulo": "Inferencia bayesiana: actualizar lo que crees con evidencia",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Estadística para decidir",
    "nombre": "Experimentos y causalidad",
    "lecciones": [
      {
        "id": "experimentos-ab",
        "titulo": "Diseño de experimentos y pruebas A/B: decidir con un experimento",
        "disponible": false
      },
      {
        "id": "correlacion-y-causalidad",
        "titulo": "Correlación no es causalidad: confusores y experimentos",
        "disponible": false
      },
      {
        "id": "diferencias-en-diferencias",
        "titulo": "Diferencias en diferencias: medir un efecto cuando no se puede hacer un A/B",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Los modelos y el ciclo de vida",
    "nombre": "Modelos de ML para el data scientist",
    "aviso": "Los modelos viven en ML y DL. Un data scientist los necesita completos, así que aquí se piden como requisito.",
    "lecciones": [
      {
        "titulo": "Requisito: el modelo lineal a fondo (8 lecciones)",
        "disponible": false,
        "desvio": "ml/regresion"
      },
      {
        "titulo": "Requisito: ML clásico (clasificación, sin etiquetas y evaluar)",
        "disponible": false,
        "desvio": "ml/clasificacion"
      },
      {
        "titulo": "Requisito: visión por computador (OpenCV, CNN, YOLO y Detectron2)",
        "disponible": false,
        "desvio": "ml/imagenes-y-opencv"
      },
      {
        "id": "repaso-explicar",
        "titulo": "Repaso: explicar un modelo para contarlo",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Los modelos y el ciclo de vida",
    "nombre": "Del análisis al producto de datos",
    "lecciones": [
      {
        "id": "repaso-ciclo-de-vida",
        "titulo": "Repaso: el ciclo de vida de un modelo en producción",
        "disponible": false
      },
      {
        "id": "productos-de-datos",
        "titulo": "Productos de datos: del análisis a algo que el negocio usa, junto a los ML engineers",
        "disponible": false
      },
      {
        "id": "repaso-docker-y-ci",
        "titulo": "Repaso: Docker y CI/CD",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 1 · Negocio y producto",
    "nombre": "Métricas y producto",
    "aviso": "Camino 1 · Negocio y producto. Datos al servicio de las decisiones de una empresa, integrado con el negocio. Termina en tu experimento A/B de producto.",
    "lecciones": [
      {
        "id": "metricas-de-negocio",
        "titulo": "KPIs y métricas: medir lo que de verdad le importa al negocio",
        "disponible": false
      },
      {
        "id": "embudos-y-cohortes",
        "titulo": "Embudos, cohortes y retención",
        "disponible": false
      },
      {
        "id": "experimentar-en-serio",
        "titulo": "Experimentar en serio: potencia, tamaño de muestra y métricas guardianas",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 1 · Negocio y producto",
    "nombre": "Decidir y optimizar",
    "aviso": "Los problemas que nombra la oferta de NeuralWorks: precios, personalización, combustible y fallas.",
    "lecciones": [
      {
        "id": "decidir-con-predicciones",
        "titulo": "Decidir con un modelo: costos, umbrales y valor esperado",
        "disponible": false
      },
      {
        "id": "optimizacion",
        "titulo": "Optimizar una decisión: objetivo, restricciones y programación lineal",
        "disponible": false
      },
      {
        "id": "pricing",
        "titulo": "Precios: elasticidad, experimentos y optimizar",
        "disponible": false
      },
      {
        "id": "personalizacion",
        "titulo": "Personalizar: segmentar clientes y medir el efecto real (uplift)",
        "disponible": false
      },
      {
        "id": "bandits",
        "titulo": "Explorar o explotar: bandits y Thompson sampling",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación con datos",
    "nombre": "Causalidad y econometría",
    "aviso": "Camino 2 · Investigación con datos. Responder preguntas de causa y efecto con datos observacionales, con el rigor de un paper. Diferencias en diferencias se vio en el tronco común; aquí van los métodos que siguen. Termina en tu estudio causal.",
    "lecciones": [
      {
        "id": "variables-instrumentales-y-rd",
        "titulo": "Variables instrumentales y regresión discontinua",
        "disponible": false
      },
      {
        "id": "efectos-fijos-y-paneles",
        "titulo": "Datos de panel y efectos fijos (statsmodels y pyfixest)",
        "disponible": false
      },
      {
        "id": "causalidad-con-ml",
        "titulo": "Inferencia causal con ML: double machine learning",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Camino 2 · Investigación con datos",
    "nombre": "Ciencia con datos",
    "lecciones": [
      {
        "id": "modelos-jerarquicos",
        "titulo": "Modelos jerárquicos bayesianos: grupos que se ayudan entre sí",
        "disponible": false
      },
      {
        "id": "estudio-reproducible",
        "titulo": "Un estudio que otro puede repetir: pre-registro, datos y código abiertos",
        "disponible": false
      },
      {
        "id": "repaso-publicar",
        "titulo": "Repaso: escribir y publicar un estudio",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Cierre · ética y carrera",
    "nombre": "Ética y privacidad",
    "lecciones": [
      {
        "id": "etica-de-datos",
        "titulo": "Ética de datos y privacidad",
        "disponible": false
      },
      {
        "id": "privacidad-diferencial",
        "titulo": "Privacidad diferencial: publicar datos sin exponer a nadie",
        "disponible": false
      }
    ]
  },
  {
    "bloque": "Cierre · ética y carrera",
    "nombre": "Tu carrera",
    "lecciones": [
      {
        "id": "entrevista-de-data-scientist",
        "titulo": "La entrevista de data scientist: SQL, estadística, experimentos y producto",
        "disponible": false
      },
      {
        "id": "repaso-carrera",
        "titulo": "Repaso: CV, portafolio y la entrevista conductual",
        "disponible": false
      }
    ]
  }
];

/** Los puentes de cada repaso: la lección corta enlaza con la lección donde el tema se ve a fondo. */
export const puentesDeRepaso: Conexion[] = [
  {
    "desde": "ml/repaso-datos",
    "hacia": "ds/limpieza-y-calidad",
    "tipo": "profundiza",
    "tema": "Datos, limpieza y exploración."
  },
  {
    "desde": "ml/probabilidad-para-ml",
    "hacia": "ds/probabilidad-y-distribuciones",
    "tipo": "profundiza",
    "tema": "Probabilidad y distribuciones."
  },
  {
    "desde": "ml/repaso-inferencia",
    "hacia": "ds/intervalos-y-tests",
    "tipo": "profundiza",
    "tema": "Muestreo, intervalos, tests y bootstrap."
  },
  {
    "desde": "ml/repaso-docker-y-ci",
    "hacia": "ai/desplegar",
    "tipo": "profundiza",
    "tema": "Docker y CI/CD."
  },
  {
    "desde": "ml/repaso-causal",
    "hacia": "ds/correlacion-y-causalidad",
    "tipo": "profundiza",
    "tema": "Econometría e inferencia causal."
  },
  {
    "desde": "ml/repaso-oficio-investigador",
    "hacia": "ai/m-leer-papers",
    "tipo": "profundiza",
    "tema": "Leer, reproducir y publicar papers."
  },
  {
    "desde": "ml/repaso-post-entrenamiento",
    "hacia": "ai/m-sft",
    "tipo": "profundiza",
    "tema": "SFT, DPO y LoRA."
  },
  {
    "desde": "ml/repaso-entrar-a-investigacion",
    "hacia": "ai/m-entrar",
    "tipo": "profundiza",
    "tema": "Entrar a investigación."
  },
  {
    "desde": "ds/repaso-roles",
    "hacia": "ml/ml-engineer-o-data-scientist",
    "tipo": "profundiza",
    "tema": "ML engineer, data scientist y los demás."
  },
  {
    "desde": "ds/repaso-leer-papers",
    "hacia": "ai/m-leer-papers",
    "tipo": "profundiza",
    "tema": "Investigar lo que ya se sabe en papers, documentación y casos."
  },
  {
    "desde": "ds/repaso-python",
    "hacia": "ai/python-lenguaje-tecnico",
    "tipo": "profundiza",
    "tema": "Python como lenguaje técnico."
  },
  {
    "desde": "ds/repaso-features",
    "hacia": "ml/features-para-modelar",
    "tipo": "profundiza",
    "tema": "Features y fuga de datos."
  },
  {
    "desde": "ds/repaso-series",
    "hacia": "ml/series-por-dentro",
    "tipo": "profundiza",
    "tema": "Explorar series de tiempo."
  },
  {
    "desde": "ds/repaso-explicar",
    "hacia": "ml/interpretar-un-modelo",
    "tipo": "profundiza",
    "tema": "Explicar un modelo para contarlo."
  },
  {
    "desde": "ds/repaso-ciclo-de-vida",
    "hacia": "ml/del-notebook-a-produccion",
    "tipo": "profundiza",
    "tema": "El ciclo de vida de un modelo en producción."
  },
  {
    "desde": "ds/repaso-docker-y-ci",
    "hacia": "ai/desplegar",
    "tipo": "profundiza",
    "tema": "Docker y CI/CD."
  },
  {
    "desde": "ds/repaso-publicar",
    "hacia": "ai/m-publicar",
    "tipo": "profundiza",
    "tema": "Escribir y publicar un estudio."
  },
  {
    "desde": "ds/repaso-carrera",
    "hacia": "ml/cv-y-portafolio-ml",
    "tipo": "profundiza",
    "tema": "CV, portafolio y la entrevista conductual."
  }
];
