> **Vigente:** `propuesta-roadmap-v3.md`, aprobada y publicada el 2026-11-07. La v2 (`propuesta-roadmap-final.md`) y la v1 quedan como historia.

# Roadmap final de AI Engineering

Fran está juntando roadmaps de otros ingenieros y otras fuentes. Cuando estén todas, se combinan con el temario actual para crear el roadmap final y mejorar el de Academy. La meta es llegar desde cero a ingeniero de IA experto (pedidos 70 a 80 de `AVANCE.md`).

**Estado:** la versión 2 de la propuesta, con el feedback de Fran y una investigación nueva, está en [propuesta-roadmap-final.md](propuesta-roadmap-final.md), y espera su decisión. La versión 1 queda en [propuesta-roadmap-v1.md](propuesta-roadmap-v1.md). Su feedback, todavía sin aplicar, se guarda en [feedback-propuesta.md](feedback-propuesta.md). Este índice guarda las fuentes y las notas de donde salió.

## Reglas

- **Ninguna fuente externa es la fuente de verdad.** Cada una se considera, y lo que entra se decide al combinar.
- **Cada fuente se guarda tal como llegó** en `fuentes/`, con una nota arriba que dice de dónde salió. Las transcripciones de videos ya están en BrainFran: quedan allá, y en `fuentes/` va su resumen.
- **Las copias de `fuentes/` no van a GitHub.** El repo es público y son textos de terceros, así que están en `.gitignore` y solo existen en la VM. Lo que se sube es este índice con sus notas. Fran todavía puede decidir otra cosa («Decisiones que te tocan» en `AVANCE.md`).
- **El temario de Academy no cambia** hasta que Fran apruebe el roadmap final.

## Fuentes

| Nombre | Qué es | De dónde salió | Recibida |
|---|---|---|---|
| roadmapv1 | El temario actual: 16 lecciones en 5 módulos | `src/ruta/especialidades.ts` y el Pilar 1 de la nota de BrainFran `03-Proyectos/Ideas/Plataforma Interactiva de Aprendizaje Visual.md` | Ya estaba |
| [roadmapv2](fuentes/roadmapv2.md) | 7 pasos, 5 proyectos, 7 recursos oficiales y una lista de comprobación | Publicación de un AI engineer, sin nombre ni enlace | 2026-11-04 |
| [roadmapv3](fuentes/roadmapv3.md) | 6 semanas y un cierre de 3 días, 29 recursos con enlace y un proyecto que crece cada semana | PDF de BASWE, [baswe.ai](https://baswe.ai), que vende un acelerador pagado. Original en `fuentes/roadmapv3.pdf` | 2026-11-04 |
| [roadmapv4](fuentes/roadmapv4.md) | 3 videos: 5 niveles de proyectos, 7 bloques de habilidades con 4 pasos hasta conseguir trabajo, y un mapa de la ingeniería de IA | Biblioteca de BrainFran: 2 de Marina Wyss y 1 de BettaTech | 2026-11-04 |
| [roadmapv5](fuentes/roadmapv5.md) | No es una ruta: 5 proyectos independientes, cada uno con artículos y un repo | Guía «5 AI Engineering Projects (Build Guide)», de @aartii.py, sin enlace | 2026-11-04 |
| [roadmapv6](roadmapv6.md) | Temarios y papers de instituciones: MIT, Stanford, CMU, Berkeley, Google, Google DeepMind, Anthropic, Hugging Face, LangChain, DeepLearning.AI, Microsoft e IBM en Coursera | Investigación propia, con enlaces a cada fuente. Este sí va a GitHub | 2026-11-04 |
| [roadmapv7](fuentes/roadmapv7.md) | Video corto: orden por capas (Python → software → ML → deep learning → LLMs → apps → RAG → agentes → evaluación → producción → especialización) y **dos caminos: productos o modelos** | @prasadexplains, transcripción automática en TXT. Fran pidió darle especial importancia | 2026-11-05 |

## Dónde pone cada fuente cada tema

Sirve para ver en qué coinciden. Con cada fuente nueva se suma una columna.

| Tema | roadmapv1 | roadmapv2 | roadmapv3 | roadmapv4 | roadmapv5 | roadmapv6 |
|---|---|---|---|---|---|---|
| Base de software y Git | Lecciones 01 y 02 | No está | Supone que ya programas | Primer bloque: Python a fondo, Git, tests y terminal | No está | Se pide antes de entrar en casi todos. IBM enseña Python desde cero |
| Matemática en intuición | Solo por puente | No está | No está | Segundo bloque | No está | Solo como requisito en los cursos de ML (MIT 6.S191) |
| ML básico | Especialidad aparte, con puentes | No está | Semana 6 | Tercer bloque | No está | IBM lo pone primero; los cursos de agentes lo omiten |
| Prompting | Lección 09 | Paso 2 | Semana 2 | Cuarto bloque; se usa desde el nivel 1 | No está | Al inicio: Anthropic e IBM |
| Context engineering | Lección 09 | No está | No está | Cuarto bloque | Proyecto 2 | Temprano: Stanford (clase 2), CMU (clase 3) y Google (día 3) |
| Memoria entre sesiones | Lecciones 05 y 06 | No está | Semana 4 | No está | Proyecto 2 | Después de herramientas: Google (día 3), CMU (clase 4) y Stanford (clase 7) |
| Usar agentes de código | Lecciones 08 y 09 | Paso 3 | No está | En todos los niveles, pero el primer proyecto a mano | Proyecto 1, dentro del harness | Cursos enteros: Stanford CS146S, Anthropic y Google (vibe coding) |
| RAG | Lección 05 | No está | Semana 3 | Nivel 2 | Proyecto 4 | Stanford (clase 3), IBM (cursos 2 a 4) y Microsoft (lección 5) |
| Evals | Lección 13 | Dentro del paso 7 | Semana 5; en el ritmo intensivo, un eval simple ya en la semana 3 | Junto al RAG, en el nivel 2 | Proyecto 3: 20 a 50 tareas de fallas reales | Sin acuerdo: Anthropic antes de herramientas, Ng antes de los agentes autónomos, Google en el día 4 y Stanford casi al final |
| Tool calling | Lección 06 | Paso 4 | Semana 2 | Con agentes, en el nivel 3 | Proyecto 5 | Temprano: CMU (clase 2), Google (día 2), Ng (módulo 3) y Stanford (clase 4) |
| MCP | Lecciones 06 y 07 | Paso 5 | No está | Quinto bloque, con agentes | Proyecto 5 | Junto a las herramientas, y con cursos propios en Hugging Face y Anthropic |
| Agentes | Lecciones 06 a 08 | Paso 7 | Semana 4 | Nivel 3 | Dentro de los proyectos 1, 2 y 5 | El núcleo de casi todos |
| Harnesses por dentro | Lecciones 06 a 08 | No está | No está | No está | Proyecto 1 | MIT 6.S950 (clase 5), Stanford (clase 5), CMU (tarea 1), LangChain (Deep Agents) y Google (Harness² y Amplio) |
| Multi-agente | Lección 11 | No está | No está | Nivel 4 | No está | Después del agente solo, en todos |
| Aprobación humana y permisos | Lecciones 06 y 14 | Paso 7 | No está | Junto a la seguridad (BettaTech) | Proyecto 5: confirmaciones y login | Junto a las herramientas: Google (día 2) y Anthropic (modos de permiso) |
| Inyección de prompts | Lección 14 | No está | Semana 6 | Justo después de las herramientas (BettaTech) | No está | Tarde: Stanford (clase 17), Microsoft (lección 18) y Google (día 4) |
| Producción y monitoreo | Lecciones 04 y 14 | Registrar resultados y manejar fallas, en el paso 6 | Semana 5 y cierre | Sexto bloque: APIs, cloud, Docker, CI/CD y monitoreo | Solo trazas, en el proyecto 3 | Google (día 5), LangChain (Deploy y Monitor), Microsoft y CMU |
| Sistemas que se mejoran solos | Lección 15 | No está | No está | Nivel 5, con aviso: toma años | No está | Stanford CS329A, Harness² y el nivel 4 de Google |
| Delegar y discernir como disciplina | Repartido en las lecciones 09 y 10 | No está | No está | No está | No está | MIT 6.S950, Anthropic (4D) y Google DeepMind |
| Voz y multimodal | No está | No está | No está | No está | Solo RAG con imágenes, proyecto 4 | DeepLearning.AI (voz) e IBM (multimodal) |
| Computer use y agentes de interfaz | No está | No está | No está | No está | No está | CMU, Microsoft y DeepLearning.AI |
| Protocolo A2A | No está | No está | No está | No está | No está | Google y Microsoft |
| Modelos locales y abiertos | De paso, en la 03 y la 04 | No está | No está | De paso, al elegir modelo | No está | MIT AI Studio y Microsoft |
| Proyectos | Prácticas por bloque, sin terminar de diseñar | 5 separados | 1 que crece cada semana | 1 que crece por niveles y otro para un tercero | 5 independientes, a elegir | Proyecto final en casi todos |
| Carrera y portafolio | Solo de paso, en la 16 | No está | Cierre | Séptimo bloque y cierre: LeetCode, diseño de sistemas, experiencia con terceros y networking | Solo un consejo: publicarlo en GitHub y saber explicarlo en una entrevista | Casi no está: solo MIT 6.S950 pide un portafolio de flujos de trabajo con IA |

## Notas para combinar

Son observaciones sin validar, para no perderlas. Las únicas decisiones son las marcadas como «Decisión de Fran», y el roadmap final todavía no se decide.

### roadmapv1

**Temas que llegan tarde**

| Tema | Está en | Hace falta desde | Por qué |
|---|---|---|---|
| Evals | 13 | 05 | La nota define el nivel 2 como «RAG con evals» |
| Prompting y contexto | 09 | 04 | «Sin prompts versionados» ya es un criterio de la 04 |
| Inyección de prompts | 14 | 07 | La 07 ya crea agentes con herramientas |

**Temas que faltan o quedan cortos.** Sale de buscar palabras clave en la nota; falta contrastarlo con ofertas de trabajo y fuentes actuales.

1. **Base desde cero:** la lección 01 junta terminal, Python/TypeScript, HTTP, APIs, autenticación, webhooks, backend y deploy. Probabilidad solo aparece como puente a Data Science.
2. **Voz, tiempo real y multimodal:** 0 menciones.
3. **Servir modelos abiertos:** Ollama, vLLM, cuantización y GPU tienen 0 menciones.
4. **Agentes más avanzados:** computer use y A2A tienen 0 menciones, y la ejecución durable solo sale de paso, con Amplio.
5. **Carrera:** no hay lección de portafolio ni de entrevistas.

### roadmapv2

**Lo que aporta frente a roadmapv1**

1. **Prompting en el paso 2.** En roadmapv1 está en la 09.
2. **Usar agentes de código en el paso 3, antes de construir.** En roadmapv1, Claude Code y Codex llegan en la 08 y la 09.
3. **Tool calling y MCP como pasos propios.** En roadmapv1 son partes de otras lecciones (03, 06 y 07).
4. **Automatizaciones como paso propio.** En roadmapv1 están repartidas: webhooks en la 01, n8n y Make en la 11, y modo headless en la 15.
5. **Un proyecto concreto por tema y una lista de «ya puedo hacer X».** En roadmapv1, las prácticas están anotadas por bloque y falta terminar de diseñarlas.

**Lo que no cubre:** base de software y Git, RAG, memoria, multi-agente, observabilidad, seguridad más allá de la aprobación humana, costos y deploy. Es una ruta de entrada a los agentes: por sí sola no llega a experto.

### roadmapv3

**Lo que aporta frente a roadmapv1**

1. **ML mínimo dentro de la ruta (semana 6):** entrenar e inferir, sobreajuste, train y test, métricas y descenso de gradiente en concepto, más entrenar un modelo simple de punta a punta. Dice que es lo que aparece en las entrevistas. En roadmapv1 solo se llega por puentes a otra especialidad.
2. **Un solo proyecto que crece:** el RAG de la semana 3 lo usa el agente de la 4, la 5 le suma evals y la 6, guardarraíles. Termina en un proyecto desplegado y documentado.
3. **Cierre de carrera:** README con diagrama, demo de 2 a 3 minutos, CV y LinkedIn con el vocabulario del rol, y postular. Cubre el tema 5 de los que faltan en roadmapv1.
4. **API completa junto al prompting (semana 2):** salida estructurada, tool calling, streaming, costo en tokens, límites de uso y manejo de errores.
5. **Evals con un entregable (semana 5):** 15 a 20 preguntas con su respuesta esperada, un LLM como juez y trazas, para poder decir «mi sistema saca X %».
6. **Dos ritmos con horas:** 10 a 12 horas a la semana, o 3 a 5 al día. roadmapv1 no dice cuánto toma cada lección.

**Lo que no cubre:** base desde cero, MCP, agentes de código y harnesses, context engineering, multi-agente, automatizaciones, voz y multimodal, servir modelos abiertos e ingresos por cuenta propia.

**Con cuidado**

- **Es material de venta:** cierra ofreciendo un acelerador pagado. «45 días» y «six figures» vienen sin respaldo, y no conviene llevarlos a Academy.
- **Supone que ya programas** («You already know how to code»): los 45 días no parten de cero.
- **7 de sus 29 enlaces van a páginas generales**, no al recurso que nombran: `deeplearning.ai` (4), `python.langchain.com` (2) y el canal de Karpathy (1). Ninguno se abrió todavía.

### roadmapv4

Son 3 videos: 2 de Marina Wyss y 1 de BettaTech. **No cuenta como opinión independiente:** los 3 ya alimentaron roadmapv1 (los 5 niveles, las 7 áreas de habilidades y las capas de una app de IA).

**Lo que aporta frente a roadmapv1**

1. **Python de verdad desde cero:** «You need to get really good at Python», con clases, estructuras de datos, errores, tests y entornos virtuales. roadmapv1 pide «lo justo».
2. **Primer proyecto a mano:** «I really recommend coding by hand». Marina Wyss lo dice por lo que ve como manager y en equipos de contratación.
3. **Matemática y ML en intuición:** álgebra lineal, probabilidad, estadística y cálculo; supervisado, overfitting, precision y recall; redes y Transformers a alto nivel.
4. **Entrevistas en paralelo:** LeetCode en Python y diseño de sistemas de IA generativa. No van al final.
5. **Experiencia sin esperar un puesto:** resolver el problema de un tercero y hacer networking real, porque sin título tradicional el CV se filtra.
6. **Docker, CI/CD y cloud como bloque propio.** En roadmapv1, Docker no aparece como tema, aunque el puente `ml/15 → ai/01` dice que la 01 lo enseña. Hay que corregir uno de los dos.

**Decisión de Fran (2026-11-04, pedido 75).** Vale para lo que aporta esta fuente; el roadmap final todavía no se decide. Las 3 fuentes de roadmapv4 quedaron confirmadas.

| Punto | Cómo queda |
|---|---|
| 1. Python de verdad | Entra, sin escribirlo: se aprende su lenguaje técnico con pseudocódigo o flowcharts |
| 2. Primer proyecto a mano | Cambia: se construye dirigiendo al LLM, sin código exacto. «Solamente vibecoding» |
| 3. Matemática y ML en intuición | Entra tal cual |
| 4. Entrevistas en paralelo | Entra. Abierto: LeetCode se practica escribiendo código |
| 5. Experiencia sin esperar un puesto | Sin decidir: no se mostró en el chat |
| 6. Docker, CI/CD y cloud | Entra como bloque propio. El puente `ml/15 → ai/01` se revisa al aplicar el roadmap final |

**Lo que no cubre:** harnesses por dentro, los del mercado, diseño de software y verificación, optimizar tokens, automatizaciones como tema, voz y multimodal, servir modelos abiertos e ingresos propios.

**Con cuidado**

- **Los videos de Marina Wyss tienen venta adentro:** segmento pagado de DataCamp, patrocinio de Supabase y su propia cohorte de 8 semanas. Sus cifras de retención y de sueldos vienen sin respaldo, y no conviene llevarlas a Academy.
- **El de BettaTech es un mapa, no un plan:** no trae proyectos ni tiempos, y avisa que no profundiza.
- **Son subtítulos automáticos**, con errores de palabras.

### roadmapv5

No es una ruta: son 5 proyectos independientes («Pick the one that sounds most fun»), cada uno con artículos y un repo. Sirve más como materia prima para construir que como orden de estudio.

**Lo que aporta frente a roadmapv1**

1. **Construcciones concretas con repos reales.** Es la primera fuente que da material directo para aprender construyendo.
2. **Harness por dentro como proyecto:** `AGENTS.md`, tests y linters como sensores, y un archivo de progreso. roadmapv1 no menciona ese archivo.
3. **Memoria con una herramienta concreta:** Mem0, con el ciclo buscar → responder → guardar. roadmapv1 explica los niveles de memoria, pero no nombra Mem0.
4. **Evals más concretos:** 20 a 50 tareas sacadas de fallas reales, y promptfoo para correrlas. El post de Anthropic separa evals de capacidad (parten con nota baja) de evals de regresión (cerca de 100 %). roadmapv1 no hace esa distinción. roadmapv3 proponía 15 a 20 preguntas.
5. **RAG de 2026:** File Search de Gemini (RAG dentro de la API, con imágenes y citas por página) y técnicas que roadmapv1 no nombra, como HyDE, GraphRAG y RAG agéntico.
6. **MCP con confirmaciones y login**, que apunta directo a evitar que el agente haga lo que el estudiante no quiere.

**Lo que no cubre:** fundamentos de LLM, prompting, base de software, matemática y ML, multi-agente, inyección de prompts, producción y carrera.

**Repos comprobados el 2026-11-04**

| Repo | Licencia · estrellas · último cambio | Lo que se encontró |
|---|---|---|
| [nexu-io/harness-engineering-guide](https://github.com/nexu-io/harness-engineering-guide) | MIT · 692 · 2026-04-19 | Su índice de 25 artículos sirve de mapa para las lecciones 06 a 08 y trae un glosario. Lo mantiene Nexu, que ofrece una plataforma de agentes, y lleva 6 meses y medio sin cambios. Varios artículos resumen posts de Anthropic: conviene ir al original. «Your First Harness» promete 50 líneas, y su bloque de código tiene 105 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Apache-2.0 · 68.388 · activo | El ejemplo tiene 34 líneas y hace lo que dice la guía: busca, responde y guarda. Sus cifras de benchmark son de su plataforma administrada |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | MIT · 26.821 · activo | Tests en un archivo de configuración, como dice la guía. La guía no menciona que ahora es parte de OpenAI, aunque sigue abierto. También trae red teaming, útil para inyección de prompts |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Licencia propia, no comercial · 30.223 · activo | 47 notebooks, con chunking, reranking, reescritura de consultas y RAG agéntico. **Prohíbe el uso comercial sin permiso escrito y pide atribución** |
| [pamelafox/pycon2026-mcp-tutorial](https://github.com/pamelafox/pycon2026-mcp-tutorial) | MIT · 25 · 2026-05-13 | 5 ejercicios, con confirmaciones (elicitation) y login (OAuth 2.1). Se hizo antes de la revisión de MCP de julio |

**Artículos comprobados el 2026-11-04**

| Proyecto | Artículo | Lo que se encontró |
|---|---|---|
| 1 | [Set Up Harness Engineering on Your Python Repo in 30 Minutes](https://learnagentic.substack.com/p/set-up-harness-engineering-on-your) (Kanishk Patel, 18 may 2026) | Es de pago: solo el resumen es libre. Usa Aider, pre-commit, Ruff, pytest y mypy |
| 1 | [Harness engineering](https://openai.com/index/harness-engineering/) (Ryan Lopopolo, OpenAI, feb 2026) | No se pudo abrir (403). La cifra de ~1 millón de líneas sin escribir ninguna a mano sale del resumen en InfoQ que cita la guía de BrainFran |
| 2 | [Building Long-Term Memory in AI Agents with LangGraph and Mem0](https://www.digitalocean.com/community/tutorials/langgraph-mem0-integration-long-term-ai-memory) (DigitalOcean) | Existe, pero no se pudo leer el cuerpo |
| 3 | [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (Anthropic, 9 ene 2026) | Leído: «20-50 simple tasks drawn from real failures is a great start». Ya estaba en la guía de BrainFran |
| 3 | [Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals) (OpenAI) | Confirmado por búsqueda: trazas, graders y datasets |
| 4 | [Gemini API File Search is now multimodal](https://blog.google/innovation-and-ai/technology/developers-tools/expanded-gemini-api-file-search-multimodal-rag/) (Google, 5 may 2026) | Confirmado por búsqueda: imágenes, metadatos y citas por página |
| 4 | [Retrieval](https://developers.openai.com/api/docs/guides/retrieval) (OpenAI) | Confirmado por búsqueda: vector stores y búsqueda semántica |
| 5 | [Build an MCP server](https://modelcontextprotocol.io/docs/develop/build-server) (docs oficiales) | Leído: está al día con la revisión 2026-07-28. «100+ clients» no aparece en las docs revisadas, que dicen «a wide range of clients» |
| 5 | [Build your first MCP server in Python](https://us.pycon.org/2026/schedule/presentation/2/) (PyCon US 2026) | Enlace tomado del README del repo, sin abrir |

**Con cuidado**

- **MCP cambió mucho el 2026-07-28** ([changelog oficial](https://modelcontextprotocol.io/specification/2026-07-28/changelog)): ya no tiene sesiones ni el saludo `initialize`, las confirmaciones pasan a un patrón de reintentos (Multi Round-Trip Requests), y Roots, Sampling y Logging quedan deprecados. El taller de PyCon usa `mcp` 1.27.0 y es de mayo, así que se hizo antes de ese cambio. Roadmapv1 no menciona ninguna revisión: al escribir esa lección hay que enseñar la actual.
- **RAG_Techniques no se puede copiar a Academy** si Academy llega a cobrar, y sin atribución en ningún caso. Sirve para leer y citar. Las técnicas se pueden explicar desde sus papers originales. Conviene que alguien revise la licencia antes de usar algo de ahí.
- **El proyecto 1 depende de un artículo de pago.** El repo de Nexu y el post de OpenAI cubren la misma idea sin pagar.
- **El caso de OpenAI respalda construir sin código a mano, pero lo hizo un equipo de ingenieros de OpenAI:** muestra que el método funciona, no que funcione partiendo de cero.

**Cómo podría encajar con «construir dirigiendo».** Es una idea para discutir al combinar, no una decisión.

| Proyecto | Qué le pide el estudiante al LLM | Cómo lo comprueba |
|---|---|---|
| Harness | Montar `AGENTS.md`, tests, linters y un archivo de progreso en su repo | Rompe una regla a propósito y el chequeo tiene que fallar |
| Memoria | Un agente con el ciclo buscar → responder → guardar, dado como flowchart | El agente recuerda un dato en una sesión nueva |
| Evals | Una suite con 20 a 50 tareas de fallas reales, con el criterio de éxito escrito por el estudiante | Un cambio malo tiene que bajar la nota |
| RAG | Un chat con sus apuntes que responda con fuentes | Preguntas tramposas no dan respuestas sin fuente |
| MCP | Un servidor de algo que use a diario, con confirmación y login | El agente no actúa sin confirmación |

### roadmapv6

Investigación propia de temarios y papers, en [roadmapv6.md](roadmapv6.md), con el nivel de comprobación de cada uno. Aparecen 3 escuelas: dirigir agentes, ingeniería de agentes y ML primero. Con la regla de construir dirigiendo, Academy queda en la primera, y la segunda le puede dar el contenido técnico.

**Lo que aporta frente a roadmapv1**

1. **Un marco sin código para dirigir:** las 4D de Anthropic (delegar, describir, discernir y diligencia) y la idea de MIT de decidir «what to delegate, what to verify, and what to keep for oneself to do».
2. **Cursos enteros sobre dirigir agentes:** MIT 6.S950, Stanford CS146S y Claude Code in Action ya dan un orden para esa parte: spec, contexto, permisos, verificación y automatización.
3. **Harness con respaldo académico:** lo enseñan MIT, Stanford y CMU, LangChain llama harness a Deep Agents, y Google publica Harness² y Amplio.
4. **Evaluar mejor:** análisis de errores (Andrew Ng), auditar el resultado y también al juez, evals como diseño experimental (MIT) y revisar en proporción a lo poco que se supervisó (Anthropic). roadmapv1 no menciona el análisis de errores.
5. **Temas que roadmapv1 no trae:** A2A, computer use, voz, orquestación durable, metacognición y agentes locales.
6. **El humano que revisa también es un blanco:** según AI Agent Traps, se aprovecha su cansancio y su exceso de confianza para que apruebe. roadmapv1 lo trata solo como barrera.

**Qué dicen sobre el orden**

- **Casi todos coinciden:** LLM y prompting primero, herramientas antes de memoria, un agente antes de varios y un proyecto al final.
- **Context engineering va temprano:** Stanford, CMU y Google lo enseñan mucho antes que la lección 09.
- **La seguridad se reparte:** permisos y aprobación van junto a las herramientas, y los ataques, casi al final.
- **Sin acuerdo:** dónde van los evals, y si RAG va antes o después de las herramientas.
- **Los 5 niveles tienen otra fuente:** Google propone 5 niveles parecidos, aunque ese dato es secundario.

**Lo que casi no cubre:** carrera (solo MIT pide un portafolio), ingresos propios y dirigir sin saber programar. Lo más cercano a esto último es AI Fluency de Anthropic, que es un marco general.

**Con cuidado**

- **El sello no garantiza que esté al día:** el repo de cursos de Anthropic está archivado, la descripción de MCP Advanced Topics todavía nombra sampling, que la revisión de julio deprecó, y el curso de MCP de Hugging Face no dice a qué revisión apunta.
- **Comprobación desigual:** CMU, los días del curso de Google, las semanas de CS146S, AI Agent Traps y los niveles de Google salen de fuentes secundarias. El calendario de CS329Z es tentativo.
- **Las horas de IBM no cuadran:** RAG and Agentic AI dice 8 semanas a 3 horas, pero sus cursos suman 103 horas.
- **Posible sesgo:** esta investigación la hizo Claude, de Anthropic.
- **Sirven para ordenar y citar, no para copiar:** los materiales de AI Fluency, por ejemplo, son CC BY-NC-SA 4.0.

### Qué dicen las fuentes de las observaciones sobre roadmapv1

- **Prompting antes:** lo respaldan roadmapv2 y roadmapv3, que lo ponen segundo, roadmapv4, que lo usa desde el nivel 1, y Anthropic e IBM en roadmapv6. roadmapv5 no lo trata.
- **Context engineering antes (observación nueva):** roadmapv1 lo pone en la 09, y Stanford, CMU y Google lo enseñan mucho antes.
- **Evals antes:** más respaldo. Los 3 videos los ponen junto al RAG, y roadmapv3 también en su ritmo intensivo. Ojo: el «RAG con evals» de la nota sale de uno de esos videos. En roadmapv6 no hay acuerdo: Anthropic y Andrew Ng los adelantan, y Stanford y Google los dejan para después.
- **Inyección de prompts antes de crear agentes:** esta observación pierde fuerza. BettaTech la presenta justo después de las herramientas, pero las instituciones la dejan casi para el final. Lo que adelantan son los permisos y la aprobación humana, junto a las herramientas, y roadmapv1 ya separa así (06 y 14).
- **Cuánto código:** roadmapv3 da por hecho que ya programas, roadmapv2 pide proyectos con código y usar agentes de código, y Marina Wyss pide el primer proyecto a mano y agentes de código en todos los niveles. En roadmapv6, MIT 6.S950, Stanford CS146S, Google y Anthropic enseñan a dirigir agentes, aunque casi todos piden saber programar antes. **Decisión de Fran (pedido 75):** nada a mano, como dice la regla «No aprendo su código». Es una diferencia consciente de Academy frente a estas fuentes.

### Lo que cruza a todas las fuentes externas

- **Aprender construyendo:** las 5 piden proyectos reales mientras se estudia, y 2 de ellas (roadmapv3 y roadmapv4) hacen crecer un mismo proyecto. Academy hoy enseña leyendo y tocando escenas, y su práctica es una decisión de ingeniería sobre un caso propio. **Decisión de Fran (pedido 75):** se agrega, pero construir no es escribir código. El estudiante aprende el lenguaje técnico y teórico para darle las mejores indicaciones a Claude Code, Codex o cualquier LLM, y el LLM escribe el código. Así se evitan errores del harness o del LLM, y que el agente haga cosas que el estudiante no quiere.
- **Dónde va tool calling:** sin acuerdo. roadmapv3 y Microsoft lo ponen antes de RAG; roadmapv1, roadmapv4, Stanford e IBM, después.
- **Harnesses por dentro:** estaba solo en roadmapv1. roadmapv5 fue la primera fuente externa que lo respaldó, y ahora también lo hacen MIT, Stanford, CMU, LangChain y Google.

### Lo que la decisión de construir sin código deja abierto

Se resuelve al combinar. Son recomendaciones, no decisiones.

- **LeetCode:** se practica escribiendo código sin ayuda. Se recomienda enseñar algoritmos y estructuras de datos en pseudocódigo y mantener el diseño de sistemas. Quien postule a una empresa con entrevista de código en vivo tendría que prepararla aparte.
- **Leer diffs:** roadmapv1 y roadmapv2 piden revisarlos, y es una forma directa de ver si el agente hizo algo que no se pidió. Se recomienda enseñar a leer qué cambió y qué verificar, sin enseñar a escribir ese código.
- **Mantener el criterio sin escribir código:** Google DeepMind advierte que delegar «may come at the cost of gradual skill degradation», y casi todos los cursos para dirigir agentes piden saber programar antes. Academy sería de los pocos que no lo pide: es su diferencia y su riesgo. Se recomienda aplicar lo que sugiere DeepMind sin código a mano: que el estudiante escriba el fundamento y un pre-mortem antes de delegar, dibuje el flowchart sin ayuda y que la ayuda se retire de a poco.
