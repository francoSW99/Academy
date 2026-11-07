# Propuesta de roadmap final, versión 3 (aprobada y publicada el 2026-11-07)

> **Estado:** Fran la aprobó y está publicada en https://academy.woorky.app/es/ (pedido 88). Reemplaza la estructura de la v2 (`propuesta-roadmap-final.md`). Las fichas de la v2 (qué se aprende, plan, construcción, comprobación y fuentes de cada lección) siguen valiendo para las lecciones que se mantienen. Las lecciones nuevas de la v3 todavía no tienen ficha: se escriben junto con su contenido, desde fuentes originales y con cita textual.
>
> **Se genera** desde `research_notes/propuesta_v3/estructura.py` con `gen_doc.py`. El sitio sale del mismo archivo, con `gen_temario.py` → `src/ruta/temario.ts`.

## Qué cambió desde la v2

Todo vino del feedback de Fran (partes 5 a 9 de `feedback-propuesta.md`):

1. **Los dos caminos viven dentro de AI Engineering** y se separan al final, en el módulo «Cruce de caminos». Antes, eso solo pasaba después de agentes, harness y multi-agente. Se puede seguir uno o los dos.
2. **El camino de Investigación se desvía a ML y DL de a poco:** 0, 1, 1, 2, 2 y 4 desvíos por módulo. Cada desvío se ve con la marca «Sigue en ML y DL», y cada módulo avisa cuántos desvíos tiene.
3. **ML y Deep Learning es un curso propio,** sacado del Pilar 2 de la nota del temario: estadística, ML clásico, entrenar y ajustar, deep learning, pre-entrenamiento y escala, post-entrenamiento y MLOps.
4. **El sistema multi-agente y el arquitecto de harness pasan a la parte común.** Según la misión del curso, todos tienen que saber hacerlos.
5. **RAG pasa a 9 lecciones** (antes 3).
6. **Nuevo módulo «El harness por dentro»,** de 10 lecciones.
7. **Nuevo módulo «Modelos y proveedores»,** de 6 lecciones: abiertos y cerrados, benchmarks, Arena y Artificial Analysis.
8. **Frameworks, lo justo:** 3 lecciones, tratadas como cultura de IA.
9. **Hugging Face práctico, tamaños (4B, 70B) y cuantización** se ven solo en el Camino 2.

## Cifras

- **AI Engineering:** 126 lecciones en 24 módulos, más 10 desvíos a ML y DL.
- **ML y Deep Learning:** 57 lecciones en 16 módulos.
- **Por verificar en origen antes de escribir:**
  - La cita de Anthropic sobre contención.
  - La tarea 1 de CMU 11-768.
  - La documentación de cuantización de Hugging Face.
  - Que GraphRAG y el RAG agéntico merezcan una lección propia.

## AI Engineering

### Fundamentos · para todos


**Módulo 1 · Empezar a dirigir**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 1 | El oficio de AI engineer y sus dos caminos | sí | «Dos caras del pilar» y 5 niveles de la nota; roadmapv3 semana 1; roadmapv4; roadmapv7 (dos caminos) |
| 2 | Dirigir a una IA: delegar, describir, discernir y responder | sí | Anthropic AI Fluency; MIT 6.S950; DeepMind; fórmula de la lección 09 actual |
| 3 | Tu primer agente de código | sí | roadmapv2 paso 3; roadmapv3 semana 1; terminal de la 01 actual |
| 4 | Git y GitHub para dirigir al agente | sí | Lección 02 actual |

**Módulo 2 · Software para dirigir**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 5 | Python como lenguaje técnico | sí | Lección 01 actual, ampliada con roadmapv4 y roadmapv7; suma depurar |
| 6 | Un proyecto de software por dentro | sí | Lección 01 actual; roadmapv4 |
| 7 | HTTP, APIs y JSON | sí | Lección 01 actual; roadmapv7 |
| 8 | Backend, autenticación y webhooks | sí | Lección 01 actual; roadmapv7 (backend básico) |
| 9 | Bases de datos y SQL | sí | roadmapv7; falta detectada en la auditoría; Text-to-SQL de la 05 actual |
| 10 | De la idea a la spec: un diseño que el agente no degrade | sí | Lecciones 09 y 10 actuales; MIT «Vibe or spec»; CS146S 2026 semana 2 |
| 11 | Verificar y preparar tu repo para el agente | sí | Lección 10 actual; roadmapv5 proyecto 1; CS146S 2026 semana 5 |

**Módulo 3 · La IA por dentro, en intuición**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 12 | La matemática del ML, en intuición | sí | roadmapv4; roadmapv7 |
| 13 | Entrenar, validar y probar | sí | roadmapv3 semana 6; roadmapv4; roadmapv7 (NumPy, Pandas, Scikit-learn; primer proyecto de ML) |
| 14 | Redes neuronales desde la base | sí | roadmapv7 (deep learning); Karpathy; MIT 6.S191 |
| 15 | Atención y el Transformer | sí | roadmapv7 (atención); Karpathy; Raschka; CS224N |
| 16 | Cómo funciona un LLM | sí | Lección 03 actual, publicada |
| 17 | De dónde sale un LLM y cuál usar | sí | Pendientes de la 03 actual; decisión prompting, RAG o fine-tuning |

**Módulo 4 · Modelos y proveedores: elegir con datos**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 18 | El mapa de proveedores: quién hace los modelos más usados | sí | Artificial Analysis (creadores: Anthropic, OpenAI, Google, Meta, Alibaba, DeepSeek, Kimi, xAI y más); pedido 85 |
| 19 | Modelos abiertos y cerrados: pesos, licencias y dónde se corren | sí | Artificial Analysis (filtro Open Weights / Proprietary); Hugging Face; pedido 85 |
| 20 | Hugging Face: el hub de los modelos abiertos | sí | Hugging Face LLM Course; Nota del temario, Pilar 1, bloque 5 (tecnologías) |
| 21 | Benchmarks: qué mide cada uno y por qué pueden engañar | sí | Nota, Pilar 2, bloque 26 (contaminación de benchmarks); Harness², EXPERIMENTS.md (rúbrica descargada); CS336 clase 12 |
| 22 | Dónde comparar modelos: Arena y Artificial Analysis | sí | arena.ai (antes lmarena.ai: el dominio viejo redirige); artificialanalysis.ai (inteligencia, costo y tiempo por tarea; ranking de proveedores de API) |
| 23 | Elegir modelo y controlar el costo | sí | Lecciones 04 y 12 actuales |

**Módulo 5 · Nivel 1: App con un LLM**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 24 | Prompting técnico | sí | Lección 09 actual; roadmapv2; roadmapv3 |
| 25 | Context engineering | sí | Lección 09 actual; Stanford, CMU, Google |
| 26 | La llamada a la API por dentro | sí | Lección 04 actual; roadmapv3 semana 2 |
| 27 | Salidas estructuradas y validación | sí | Lecciones 03 y 04 actuales; roadmapv2 proyecto 1 |
| 28 | Tool calling: el modelo pide y tu código ejecuta | sí | Lecciones 03 y 06 actuales; roadmapv2 paso 4 |
| 29 | Primeros evals: saber si funciona | sí | Lección 13 actual; roadmapv5 proyecto 3; Anthropic |
| 30 | De script a producto | sí | Lecciones 04 y 01 actuales; roadmapv3 cierre |

**Módulo 6 · Nivel 2: RAG con evals**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 31 | Por qué RAG: darle conocimiento al modelo sin cargarlo todo | sí | Nota del temario, Pilar 1, bloque 5 (memoria en 3 niveles; RAG o herramienta; prompting, RAG o fine-tuning) |
| 32 | Primero, los datos: limpios, sin duplicados y ordenados | sí | Nota del temario, Pilar 1, bloque 5 (criterio); BettaTech, en roadmapv4 |
| 33 | Cortar en trozos: chunking y metadatos | sí | Nota del temario, Pilar 1, bloque 5; roadmapv3, semana 3 (chunking strategies) |
| 34 | Embeddings y bases vectoriales | sí | Nota del temario, Pilar 1, bloque 5; roadmapv5, proyecto 4 |
| 35 | Buscar: por palabras, por significado o las dos | sí | Nota del temario, Pilar 1, bloque 5 (BM25, semántica, híbrida, top-k); BettaTech |
| 36 | Cuando la búsqueda simple falla: reescribir, reordenar y Text-to-SQL | sí | Nota del temario, Pilar 1, bloque 5; roadmapv3, semana 3 (why naive RAG fails) |
| 37 | Responder con fuentes, y saber decir «no lo sé» | sí | roadmapv5, proyecto 4 (citas); ficha v2 de «recuperar-bien» |
| 38 | Evaluar un RAG: ¿falló la búsqueda o la respuesta? | sí | Nota del temario, Pilar 1, bloque 5; roadmapv3, semana 5 (Ragas, 15 a 20 preguntas con juez) |
| 39 | RAG agéntico y GraphRAG: cuándo valen la pena (optativo) | no | roadmapv5, proyecto 4 (RAG_Techniques); sin verificar si merece lección propia |

### Agentes, harness y Claude Code · para todos


**Módulo 7 · Nivel 3: Agentes, workflows y automatizaciones**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 40 | Workflow o agente | sí | Lecciones 04 y 11 actuales; Anthropic; Andrew Ng |
| 41 | Automatizar un flujo | no | roadmapv2 paso 6 y proyecto 4; webhooks de la 01, n8n y Make de la 11 |
| 42 | MCP: herramientas para cualquier agente | sí | Lecciones 06 y 07 actuales; roadmapv2; roadmapv5; revisión 2026-07-28 |
| 43 | Memoria del agente | sí | Lecciones 05 y 06 actuales; roadmapv5 proyecto 2 |
| 44 | Evaluar un agente | sí | Lección 13 actual; Anthropic; Harbor |

**Módulo 8 · El harness por dentro**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 45 | Anatomía de un harness: el sistema alrededor del modelo | sí | arXiv 2609.00006 (11 harnesses, 7 subsistemas); LangChain, mismo modelo y otro harness en Terminal-Bench 2.0; lección 06 actual |
| 46 | El loop del agente: turnos, pasos y quién decide terminar | sí | Glosario y /goal de Claude Code; MAST (condición de término); BYO Harness |
| 47 | Leer una sesión real: transcript y trazas | sí | Stanford CS146S, semana 1 (leer el tráfico real); transcript JSONL de Claude Code |
| 48 | Qué ve el modelo en cada llamada, y qué sobrevive a compactar | sí | Docs de Claude Code (/context, /compact, memoria); DeepSeek Harness (contexto como proyección del log) |
| 49 | Dónde vive la verdad: estado, log y reanudar tras un crash | sí | DeepSeek Harness (log append-only); Amplio de Google DeepMind (base de datos primero y reanudación) |
| 50 | Diseñar herramientas y permisos | sí | Lecciones 06, 07 y 14 actuales; BYO Harness (permisos en la lección 02); DeepSeek Harness (fail-closed) |
| 51 | Sandbox y contención: lo que el agente alcanza | sí | Anthropic, contención primero en el ambiente (guía de Fran, por reconfirmar); Harness² (bloquear hosts a nivel de red) |
| 52 | Lo obligatorio va en código, no en el prompt | sí | Docs de Claude Code (CLAUDE.md no se impone; hooks sí); arXiv 2607.08028 (contratos en código, 270 corridas) |
| 53 | Seguridad del agente | sí | Lección 14 actual; AI Agent Traps; CaMeL; OWASP agéntico |
| 54 | Dirige la construcción de tu harness | sí | Lección 07 actual; BYO Harness; CMU 11-768 tarea 1 (sin confirmar); CS146S |

**Módulo 9 · Frameworks de IA, lo justo**


> Cultura de IA: los frameworks más pedidos, para reconocerlos y usarlos si tu proyecto lo pide. LlamaIndex, DSPy y Deep Agents se ven como parte del mapa.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 55 | El mapa de frameworks: qué resuelve cada uno, y framework o loop propio | sí | roadmapv7 («Learn the underlying agent workflow before becoming dependent on frameworks»); arXiv 2609.00006; Stanford CS329Z; Nota del temario, Pilar 1 (tecnologías) |
| 56 | LangChain, LangGraph y LangSmith: los más pedidos | sí | Avisos: LangChain o LangGraph en el 16 % de Productos; Nota del temario, Pilar 1 (LangSmith para trazas y evals) |
| 57 | Los SDK de agentes: Claude Agent SDK, OpenAI Agents SDK y Google ADK | sí | Nota del temario, Pilar 1 (tecnologías de agentes) |

**Módulo 10 · Dominar Claude Code**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 58 | Instrucciones y skills que sí funcionan | sí | Lección 08 actual; docs de Claude Code; SkillsBench; CS146S 2026 semanas 3 y 4 |
| 59 | Hooks y control determinista | sí | Lección 08 actual; docs de Claude Code |
| 60 | Delegar: subagentes, equipos y workflows | sí | Lecciones 07 y 11 actuales; docs de Claude Code |
| 61 | Trabajo sin supervisión | sí | Lección 15 actual; Claude Code in Action; /goal, /loop y tareas programadas |
| 62 | Optimizar tokens y créditos | no | Lección 12 actual |
| 63 | Codex, DeepSeek Harness y el mercado | no | Lección 08 actual; dsh; comparar con los mismos criterios |
| 64 | Tu flujo de agentic engineering | sí | Misión de Fran; notas de fábrica, etapas 1 y 2; Willison; Karpathy |

**Módulo 11 · Nivel 4: Tu sistema multi-agente**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 65 | ¿Hace falta multi-agente? | sí | Lección 11 actual; Google Research; MAST; Cognition |
| 66 | Orquestar: quién tiene el plan | sí | Lección 11 actual: grafos y máquinas de estado; LangGraph; workflows |
| 67 | Enrutador y contrato de validación | sí | Anthropic; Factory Missions; DeepMind |
| 68 | Subagentes de lectura y un solo escritor | sí | Lección 11 actual; Cognition; Factory |
| 69 | El auditor que no vio nada | sí | Lección 11 actual; Anthropic; Factory; Cognition |
| 70 | Crear subagentes de forma autónoma | sí | Pedido de Fran; Claude Code; Hermes; DeepMind |
| 71 | Crear herramientas de forma autónoma | sí | Pedido de Fran; Code execution with MCP; SkillsBench; EvoSkill |
| 72 | Un mismo núcleo para cualquier proyecto | sí | Pedido de Fran: CRM, personal o cualquier idea |

**Módulo 12 · Arquitecto de harness**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 73 | Las decisiones de un harness robusto | sí | Misión de Fran; notas de harness; dsh; Amplio; arXiv 2607.08028 |
| 74 | Leer harnesses abiertos por sus decisiones | no | Lección 07 actual: Amplio, Harness², BYO; suma DeepSeek Harness, OpenHands y Hermes |
| 75 | Optimizar un harness con evidencia | no | Harness²: Propose, Probe y Compose; Agentic Harness Engineering; ablación |

### Cruce de caminos


**Módulo 13 · Elige tu camino**


> Aquí AI Engineering se abre en dos caminos: Productos, más software, e Investigación, más modelos. Puedes seguir uno o los dos, en el orden que quieras. El cierre de CEO y CTO es para todos.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 76 | Productos, investigación o los dos: elige tu camino | sí | roadmapv7 (los dos caminos); pedidos 80 y 82 de Fran; 969 avisos reales; roles de Anthropic |

### Camino 1 · Productos: crear productos de IA


**Módulo 14 · Producción**


> Camino 1. Llevas tu sistema multi-agente a usuarios reales: desplegarlo, vigilarlo y hacerlo confiable.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 77 | Desplegar: APIs, Docker, CI/CD y cloud | sí | roadmapv4 bloque 6; roadmapv7; avisos |
| 78 | Sistemas distribuidos, lo justo | no | Avisos: 22 % de productos; Kubernetes 19 % |
| 79 | Observabilidad | sí | Lección 14 actual; roadmapv3 semana 5 |
| 80 | Confiabilidad y corridas largas | sí | Lección 14 actual; Stanford; Amplio |
| 81 | Privacidad y responsabilidad | no | Lección 14 actual; roadmapv3 semana 6 |
| 82 | Cara al cliente: requisitos y despliegue | no | Avisos: 53 % de productos pide trato con clientes; rol FDE |

**Módulo 15 · Nivel 5: Autonomía y fábrica de software**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 83 | Loops autónomos | no | Lección 15 actual; Kyle Mistele |
| 84 | Revisor separado y contrato en tu repo | sí | Lección 10 actual; etapa 3 de la fábrica |
| 85 | Agentes en segundo plano: de issue a PR | no | CS146S 2026 semana 8; etapa 4 |
| 86 | Mezcla automática por riesgo y bucle meta | no | Lección 15 actual; etapa 5; Lauren Tan; Dru Knox |
| 87 | La fábrica completa, y cuándo no hacerla | no | Lección 15 actual; StrongDM; OpenAI; METR; DORA |
| 88 | Sistemas que se mejoran solos | no | Lección 15 actual; Darwin Gödel Machine; data flywheel |

**Módulo 16 · Capacidades especiales (optativo)**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 89 | Voz, imagen y video | no | Creativos de la 08 actual; avisos: voz 13 % |
| 90 | Agentes que usan el computador | no | CMU; Microsoft; DeepLearning.AI; avisos: 1 % |
| 91 | Modelos locales y abiertos | no | Pendiente de la 03 actual; `lab/`; enlaza con Inferencia |
| 92 | Protocolos entre agentes | no | Google; Microsoft; DeepMind; avisos: 1 % |

### Camino 2 · Investigación: la IA por dentro


**Módulo 17 · El LLM a fondo**


> Camino 2. Empieza aquí, en AI Engineering, y se va desviando de a poco a ML y Deep Learning. Cada desvío lleva la marca «Sigue en ML y DL».


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 93 | Trabajar con Hugging Face: Transformers, Datasets y el Hub | sí | Hugging Face LLM Course, caps. 1 a 8; pedido 85 |
| 94 | Del texto a tokens y embeddings | sí | ml/12 actual; Karpathy; CS224N |
| 95 | Modelar lenguaje: predecir el siguiente token | sí | Karpathy; 11-711 |
| 96 | Decisiones de arquitectura moderna | no | CS336 clases 3 y 4 |
| 97 | Evaluar modelos de lenguaje | sí | Bloque 26 de la nota; CS336 clase 12; 6.S950 |

**Módulo 18 · Adaptar un modelo: fine-tuning**


> Primer desvío: la base del aprendizaje por refuerzo vive en ML y DL.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 98 | De modelo base a asistente: SFT | sí | ml/14 actual; Raschka; CS336 |
| 99 | Preferencias: RLHF y DPO | sí | ml/14 actual; CS224N |
| 100 | Fine-tuning eficiente: LoRA, y cuándo no | sí | ml/14 actual; roadmapv7 |
| 101 | Tu dataset y tu evaluación de fine-tuning | sí | Hugging Face caps. 10 a 12 |
| → | Aprendizaje por refuerzo desde la base · *Sigue en ML y DL* (`ml/refuerzo-desde-la-base`) | | Vive en ML y Deep Learning |

**Módulo 19 · Servir un modelo: inferencia**


> 1 desvío: la GPU y su memoria, a fondo, en ML y DL.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 102 | Qué significa 4B o 70B: parámetros, parámetros activos y memoria | sí | Raschka (análisis de FLOPs; Qwen3 con mezcla de expertos); CS336 clase 2 (contabilidad de recursos); pedidos 86 y 87 |
| 103 | Servir un LLM: prefill, decode y KV cache | sí | CS336 clase 10; sigue de la lección publicada; roadmapv7 |
| 104 | Muchos usuarios: batching y memoria GPU | sí | Docs de vLLM y SGLang (por verificar); avisos: vLLM 9 % |
| 105 | Cuantización a fondo: 8 y 4 bits, GGUF, y cómo medir lo que se pierde | sí | Nota, Pilar 2, bloque 25; MIT 6.5940 (compresión y cuantización); 11-711; docs de Hugging Face (por verificar); pedidos 86 y 87 |
| 106 | Speculative decoding y otros atajos para generar más rápido | no | 11-711; MIT 6.5940; ficha v2 de «m-mas-barato» |
| 107 | La cuenta del costo por token | sí | Avisos: optimización de inferencia 25 % |
| → | GPU y memoria: dónde se va el tiempo · *Sigue en ML y DL* (`ml/gpu-y-memoria`) | | Vive en ML y Deep Learning |

**Módulo 20 · Razonar y mirar adentro**


> 2 desvíos: entrenar el razonamiento con refuerzo y destilar se estudian en ML y DL.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 108 | Razonamiento: RLVR | no | ml/14 actual; CS336 |
| 109 | Interpretabilidad mecanicista | no | CS224N; avisos de Anthropic |
| 110 | Seguridad y alineación | no | CS336 tarea 5; MATS |
| → | Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables · *Sigue en ML y DL* (`ml/rl-para-llms`) | | Vive en ML y Deep Learning |
| → | Destilación: un modelo grande le enseña a uno chico · *Sigue en ML y DL* (`ml/destilacion`) | | Vive en ML y Deep Learning |

**Módulo 21 · El oficio de investigador**


> 2 desvíos: la estadística de los experimentos y la búsqueda de hiperparámetros viven en ML y DL.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 111 | Leer papers y armar tu mapa, verificando contra la fuente | sí | ml/18 actual; 6.S950; 11-711 |
| 112 | Reproducir un paper | sí | ml/18 actual; PaperBench |
| 113 | Investigar con agentes, y sus trampas | sí | Autoresearch; PaperBenchX; MLReplicate; tu sistema multi-agente como laboratorio |
| → | Experimentos con estadística: ablaciones y significancia · *Sigue en ML y DL* (`ml/experimentos-y-significancia`) | | Vive en ML y Deep Learning |
| → | Buscar hiperparámetros con método · *Sigue en ML y DL* (`ml/hiperparametros`) | | Vive en ML y Deep Learning |
| 114 | Elegir un problema, escribir y publicar | no | ml/18 actual |
| 115 | Entrar: roles, becas, open source y entrevistas | no | Anthropic; MATS; Cohere Labs |

**Módulo 22 · Entrenar desde cero · sigue en ML y DL**


> Aquí el camino se muda a ML y Deep Learning: entrenar un modelo desde cero es su terreno. Si quieres seguir después, ese es el curso completo.


| # | Lección | Esencial | Origen |
|---|---|---|---|
| → | Pre-entrenar un modelo de lenguaje desde cero · *Sigue en ML y DL* (`ml/pre-entrenar`) | | Vive en ML y Deep Learning |
| → | Datos para pre-entrenar: filtrar, deduplicar y mezclar · *Sigue en ML y DL* (`ml/datos-pre-entrenamiento`) | | Vive en ML y Deep Learning |
| → | Leyes de escala: datos, parámetros y cómputo · *Sigue en ML y DL* (`ml/leyes-de-escala`) | | Vive en ML y Deep Learning |
| → | Entrenar en muchas GPUs: paralelismo · *Sigue en ML y DL* (`ml/entrenamiento-distribuido`) | | Vive en ML y Deep Learning |

### Cierre · para todos


**Módulo 23 · CEO y CTO de una startup de IA**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 116 | El costo de una tarea que sale bien | sí | ICONIQ; notas de CEO/CTO |
| 117 | Cobrar algo cuyo costo varía | no | ICONIQ; Cursor; Lovable |
| 118 | ¿Qué queda si mañana sale un modelo mejor? | no | Notas de CEO/CTO |
| 119 | Portafolio de modelos y salida de emergencia | sí | Lección 04 actual; ciclo de vida de proveedores |
| 120 | El equipo y la revisión cuando escriben los agentes | no | CS146S 2026 semana 9; notas de CEO/CTO |
| 121 | Ley, contratos e incidentes | sí | AI Act; Ley 21.719 de Chile; OWASP |
| 122 | Del problema al primer cliente | sí | Lección 16 actual; startup, agencia o producto |
| 123 | La sala de datos: defiende tu empresa | no | Notas de CEO/CTO |

**Módulo 24 · Tu carrera**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 124 | Tu portafolio | sí | roadmapv3 cierre; roadmapv5; MIT |
| 125 | Entrevistas de AI engineering | sí | roadmapv4 bloque 7; secundario sobre entrevistas |
| 126 | Experiencia real, CV y contactos | no | roadmapv4, punto 5 de lo que aporta; roadmapv3 cierre |

## ML y Deep Learning

### Fundamentos: matemática y estadística


**Módulo 1 · El mapa del ML**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 1 | El mapa del ML: problemas, tipos de aprendizaje y roles | sí | Nota del temario, Pilar 2, bloque 1 |

**Módulo 2 · Matemática para ML**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 2 | Álgebra lineal: los datos como matriz | sí | Nota del temario, Pilar 2, bloque 9; CS229 (requisitos) |
| 3 | Derivadas, gradientes y la regla de la cadena | sí | Nota del temario, Pilar 2, bloque 9; Karpathy, micrograd |
| 4 | Descenso de gradiente: cómo aprende casi todo modelo | sí | Nota del temario, Pilar 2, bloque 9 |

**Módulo 3 · Estadística para ML**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 5 | Probabilidad y distribuciones para modelar | sí | Nota del temario, Pilar 2, bloque 8; puente a ds/08 |
| 6 | Máxima verosimilitud: de dónde sale la función de pérdida | sí | CS229 (supervisado paramétrico y generativo) |
| 7 | Bayes y modelos generativos | sí | Nota del temario, Pilar 2, bloques 8 y 13; CS229 |
| 8 | Sesgo, varianza y generalización | sí | Nota del temario, Pilar 2, bloque 11; CS229 (teoría del aprendizaje) |
| 9 | Experimentos con estadística: ablaciones y significancia | sí | Nota del temario, Pilar 2, bloque 32; ds/08 |

### Machine Learning clásico


**Módulo 4 · Cómo aprende un modelo**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 10 | Entrenar, validar y probar | sí | Nota del temario, Pilar 2, bloque 11 |
| 11 | Regularización y validación cruzada | sí | Nota del temario, Pilar 2, bloque 11 |
| 12 | La fuga de datos y el baseline | sí | Nota del temario, Pilar 2, bloques 5 y 11 |

**Módulo 5 · Modelos supervisados**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 13 | Regresión: predecir un número | sí | Nota del temario, Pilar 2, bloque 12 |
| 14 | Clasificación: predecir una categoría | sí | Nota del temario, Pilar 2, bloque 13 |
| 15 | SVM y kernels | no | Nota del temario, Pilar 2, bloque 13; CS229 |
| 16 | Árboles de decisión | sí | Nota del temario, Pilar 2, bloque 13 |
| 17 | Ensambles: random forest y boosting | sí | Nota del temario, Pilar 2, bloque 14 |

**Módulo 6 · Sin etiquetas**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 18 | Clustering: encontrar grupos | sí | Nota del temario, Pilar 2, bloque 15; CS229 |
| 19 | Reducción de dimensiones: PCA, t-SNE y UMAP | sí | Nota del temario, Pilar 2, bloque 15 |
| 20 | Detección de anomalías | no | Nota del temario, Pilar 2, bloque 15 |
| 21 | Sistemas de recomendación | no | Nota del temario, Pilar 2, bloque 17 |

**Módulo 7 · Evaluar e interpretar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 22 | Métricas y umbral de decisión | sí | Nota del temario, Pilar 2, bloque 18 |
| 23 | Clases desbalanceadas | sí | Nota del temario, Pilar 2, bloque 18 |
| 24 | Interpretar un modelo: importancia de features y SHAP | no | Nota del temario, Pilar 2, bloque 18 |

### Entrenar y ajustar modelos


**Módulo 8 · Training and tuning**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 25 | El ciclo de entrenamiento: épocas, lotes e iteraciones | sí | Nota del temario, Pilar 2, bloque 20 |
| 26 | Buscar hiperparámetros con método | sí | Nota del temario, Pilar 2, bloques 11 y «Training and Tuning Models»; Deep Learning Tuning Playbook de Google |
| 27 | El learning rate y su calendario | sí | Nota del temario, Pilar 2, bloque 20; Tuning Playbook |
| 28 | Diagnosticar un entrenamiento por sus curvas | sí | Nota del temario, Pilar 2, bloque 20; Karpathy; Tuning Playbook |
| 29 | Entrenar más rápido y más barato | no | Nota del temario, Pilar 2, «Training and Tuning Models»; CS336 (entrenar sin GPU propia) |

### Deep Learning


**Módulo 9 · Redes neuronales**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 30 | De la neurona a la red: perceptrón y MLP | sí | Nota del temario, Pilar 2, bloque 19 |
| 31 | Backpropagation | sí | Nota del temario, Pilar 2, bloque 19; Karpathy |
| 32 | Optimizadores: SGD, momentum y Adam | sí | Nota del temario, Pilar 2, bloque 19; CS230 |
| 33 | Inicialización y normalización | sí | Nota del temario, Pilar 2, bloque 20; CS230 |
| 34 | Regularizar una red: dropout, weight decay y augmentation | sí | Nota del temario, Pilar 2, bloque 20 |
| 35 | PyTorch y tensores, para dirigir al agente | sí | Nota del temario, Pilar 2, bloque 1 (herramientas); CS336 clase 2 |

**Módulo 10 · Arquitecturas**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 36 | Redes convolucionales (CNN) | sí | Nota del temario, Pilar 2, bloque 21 |
| 37 | Secuencias: RNN, LSTM y GRU | sí | Nota del temario, Pilar 2, bloque 21 |
| 38 | Atención y el Transformer, a fondo | sí | Nota del temario, Pilar 2, bloque 21; Raschka; CS224N |
| 39 | Autoencoders y VAE | no | Nota del temario, Pilar 2, bloque 21; MIT 6.S191 (generativos) |
| 40 | GANs y modelos de difusión | no | Nota del temario, Pilar 2, bloque 21; MIT 6.S191 |
| 41 | Transfer learning y fine-tuning | sí | Nota del temario, Pilar 2, bloque 21; Hugging Face, caps. 1 a 4 |

**Módulo 11 · Visión y lenguaje**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 42 | Computer vision: detección, segmentación y pose | sí | Nota del temario, Pilar 2, bloque 22 |
| 43 | Lenguaje: del texto a los embeddings | sí | Nota del temario, Pilar 2, bloque 23 |

### Pre-entrenamiento y escala


**Módulo 12 · Pre-entrenar**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 44 | Construir un tokenizador: BPE | sí | Karpathy (tokenizador BPE); CS336 tarea 1 |
| 45 | Pre-entrenar un modelo de lenguaje desde cero | sí | Nota del temario, Pilar 2, bloque 24; CS336; Raschka caps. 2 a 5 |
| 46 | Datos para pre-entrenar: filtrar, deduplicar y mezclar | sí | Nota del temario, Pilar 2, bloque 24; CS336 clases 13 y 14 |
| 47 | Arquitectura a escala: mezcla de expertos y alternativas a la atención | no | CS336 clases 3 y 4; Raschka (Qwen3) |
| 48 | Leyes de escala: datos, parámetros y cómputo | sí | Nota del temario, Pilar 2, bloque 24; CS336 |

**Módulo 13 · Entrenar a escala**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 49 | GPU y memoria: dónde se va el tiempo | sí | CS336 clases 5 a 8; avisos: GPU 33 % |
| 50 | Entrenar en muchas GPUs: paralelismo | no | CS336; MIT 6.S191 «Secrets to Massively Parallel Training»; avisos: 18 % |

### Post-entrenamiento y refuerzo


**Módulo 14 · Aprender con recompensas**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 51 | Aprendizaje por refuerzo desde la base | sí | CS229 (refuerzo y control); MIT 6.S191 |
| 52 | Refuerzo para modelos de lenguaje: de RLHF a recompensas verificables | sí | Nota del temario, Pilar 2, bloque 25; CS336 clases 15 y 16 |
| 53 | Destilación: un modelo grande le enseña a uno chico | no | Nota del temario, Pilar 2, bloque 25; Raschka, Build a Reasoning Model |

### MLOps y producción


**Módulo 15 · Del notebook a producción**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 54 | Del notebook a producción | sí | Nota del temario, Pilar 2, bloque 27 |
| 55 | Seguir experimentos y versionar datos y modelos | sí | Nota del temario, Pilar 2, bloque 27 (MLflow y DVC) |
| 56 | Operar modelos en producción | sí | Nota del temario, Pilar 2, bloque 28 |

### Especialización (optativo)


**Módulo 16 · Biomecánica con visión**


| # | Lección | Esencial | Origen |
|---|---|---|---|
| 57 | Biomecánica con visión | no | Nota del temario, Pilar 2, bloque 30 |
