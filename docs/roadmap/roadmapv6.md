# roadmapv6 · Temarios de instituciones confiables

> **Fuente para el roadmap final. No es la fuente de verdad.**
> Investigación hecha el 2026-11-04 por pedido de Fran (pedido 77). Es un resumen propio con citas cortas, no una copia de terceros, así que este archivo sí puede ir a GitHub.
>
> **Cómo leerlo.** «Oficial» significa leído en la página de la institución. «Secundario» significa que la página oficial no se pudo leer y el dato sale de otro sitio: hay que confirmarlo antes de usarlo.
>
> **Sirven para ordenar y citar, no para copiar.** Cada curso tiene su licencia.
>
> **Posible sesgo:** esta investigación la hizo Claude, de Anthropic. Los cursos de Anthropic merecen una segunda mirada.

## Las 3 escuelas que aparecen

| Escuela | Quién | Cómo enseña |
|---|---|---|
| **Dirigir agentes** | MIT 6.S950, Stanford CS146S, Google (vibe coding), Anthropic (AI Fluency y Claude Code) | El agente escribe y la persona decide, especifica y verifica |
| **Ingeniería de agentes** | Stanford CS329Z, CMU 11-768, DeepLearning.AI, Hugging Face, Microsoft, LangChain | Se construye el agente por dentro, con código |
| **ML primero** | IBM en Coursera, LLM Course de Hugging Face, MIT 6.S191 | Se parte por datos, ML y entrenamiento, y las apps con LLMs van al final |

---

## 1. Dirigir agentes

### MIT 6.S950 · Agency with AI · otoño 2026 · Oficial

[Sitio](https://agencyai.mit.edu/). Dicta Shen Shen. Curso de pregrado en EECS, para proyectos de ML aplicado. Define agencia como «the judgment about what to delegate, what to verify, and what to keep for oneself to do». Los estudiantes arman un portafolio de flujos de trabajo con IA.

1. **Encuadre y lectura:** qué es este curso, por qué importa leer.
2. **Construir y el harness:** «Vibe or spec», la escalera de abstracción de la programación, «The harness», y multi-agente («the more the merrier?»).
3. **Datos y evaluación:** datos externos, «Auditing the artifact and the judge», evals como diseño experimental, y lo que hay más allá de los Transformers.
4. **Reflexión y escritura:** «What the human had» y cierre.

### Stanford CS146S · The Modern Software Developer · otoño 2026 · Oficial en lo general, secundario en las semanas

[Sitio](https://themodernsoftware.dev/). Dicta Mihail Eric. Pide experiencia de programación (CS111/CS161). Enseña MCP, agent skills, desarrollo guiado por specs, loop engineering y fábrica de software. Dice que el desarrollo pasó «from a primarily manual coding process» a colaborar con agentes de código. [Tareas en GitHub](https://github.com/mihail911/modern-software-dev-assignments).

Semanas de la versión 2025, [según un sitio externo](https://www.beri.net/learning/stanford-cs146s-modern-software-developer):

1. LLMs y bases de programar con IA
2. Anatomía de un agente de código
3. IDEs con IA y context engineering
4. Patrones de agentes de código
5. La terminal moderna
6. Testing y seguridad con IA
7. Revisión de código y soporte
8. Construir apps de forma automática
9. Operación después del despliegue
10. El futuro de la ingeniería de software con IA

### Google y Kaggle · 5-Day AI Agents, Vibe Coding · junio de 2026 · Oficial en lo general, secundario en los días

[Anuncio de Google](https://blog.google/innovation-and-ai/technology/developers-tools/kaggle-genai-intensive-course-vibe-coding-june-2026/). Gratis y ahora a ritmo propio en [Kaggle](https://www.kaggle.com/learn-guide/5-day-agents). Habla de flujos «where natural language becomes the primary programming interface». Google dice que la edición anterior llegó a más de 1,5 millones de personas. Recomienda experiencia en Python para los laboratorios. Cierra con un proyecto final.

Días, según [un capítulo de Google Developer Groups](https://gdg.community.dev/events/details/google-gdg-broward-county-fl-presents-5-day-ai-agents-intensive-vibe-coding-course-with-google-1/):

1. Introducción a agentes y vibe coding
2. Herramientas e interoperabilidad, incluida la comunicación entre agentes
3. Context engineering: sesiones, skills y memoria
4. Calidad y seguridad del agente
5. De prototipo a producción

### Anthropic · AI Fluency: Framework & Foundations · Oficial

[Curso](https://anthropic.skilljar.com/ai-fluency-framework-foundations), con los profesores Joseph Feller y Rick Dakan. Unas 3 horas. Sus materiales son CC BY-NC-SA 4.0. Es un marco para trabajar con IA:

- **Delegation:** decidir qué se le entrega a la IA y qué queda en manos de la persona.
- **Description:** describir el objetivo y el proceso con claridad para obtener lo que se busca.
- **Discernment:** juzgar si lo que entrega sirve y si el razonamiento es sólido.
- **Diligence:** hacerse responsable de lo que se hace con la IA.

### Anthropic · AI Fluency for Builders · Oficial

[Curso](https://anthropic.skilljar.com/ai-fluency-for-builders), pensado para hacerse después del anterior. Aplica las 4D de punta a punta, desde el problema del cliente hasta entregar el producto. Trae lecciones de discernimiento sobre código y sobre experiencia de usuario. La página no pide programar.

### Anthropic · Claude Code in Action · Oficial

[Curso](https://anthropic.skilljar.com/claude-code-in-action), para quien ya usa Claude Code.

1. **Dirigir el trabajo:** plan mode, guiar la compactación, rewind, y cuándo dejarlo correr solo.
2. **Configurar:** un CLAUDE.md conciso, skills de verificación, modos de permiso y hooks.
3. **Automatizar:** rutinas, modo headless, GitHub Actions y revisión de código.
4. **Verificar y compartir:** revisar las corridas sin supervisión «in proportion to how little they watched», y plugins.

El catálogo de [Anthropic Academy](https://anthropic.skilljar.com/) también trae Claude Code 101, Claude Platform 101, Building with the Claude API, Introduction to MCP, MCP Advanced Topics, agent skills y subagents. No propone un orden general.

### DeepLearning.AI y Anthropic · Claude Code: A Highly Agentic Coding Assistant · Oficial

[Curso](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/) de 2 horas, con Elie Schoppik. Sugiere conocer Python y Git. Va de entender un repo a sumar features, testing y depuración, varias features a la vez, GitHub y hooks, y construir una web desde un diseño de Figma.

---

## 2. Ingeniería de agentes

### Stanford CS329Z · Engineering AI Agents · otoño 2026 · Oficial, calendario tentativo

[Sitio](https://cs329z.stanford.edu/). Dictan Diyi Yang, Michael Ryan y John Yang. Primero se construyen las piezas desde cero y después se estudian los frameworks. Es el temario más completo para un AI engineer de los que se revisaron.

1. Fundamentos: anatomía de un agente, sistemas compuestos o agentes
2. LLMs para quien construye: decodificación, contexto, salida estructurada y context engineering
3. RAG: indexar, recuperar, reordenar, RAG agéntico y modos de falla
4. Tool use y function calling, MCP y evaluar el uso de herramientas
5. Frameworks y orquestación: DSPy, LangGraph, agent harnesses, orquestación durable y observabilidad
6. Patrones de diseño de agentes
7. Arquitecturas de memoria
8. Sistemas multi-agente
9. Optimización de contexto y de pesos
10. Terminal-Bench (invitado)
11. Datos para agentes: trazas, feedback, data flywheels y datos sintéticos
12. Selección y calidad de datos
13. Fundamentos de evaluación y diseño de benchmarks
14. Conversación con Andrew Ng
15. LLM como juez e infraestructura de evaluación
16. SWE-bench (invitado)
17. Seguridad: inyección de prompts, sandboxing, red teaming y humano en el loop
18. Agentes de código y de software
19. Agentes proactivos
20. Problemas abiertos y demo final

### CMU 11-768 · AI Agents · otoño 2026 · Secundario

[Sitio oficial](https://www.cmu-agents.com/), que no se pudo leer. Orden según [un blog que extrae su calendario](https://www.heyuan110.com/posts/ai/2026-09-08-cmu-11-768-ai-agents-course/). Dictan Graham Neubig y Daniel Fried. Pide experiencia entrenando modelos de lenguaje. La primera tarea es construir un harness.

1. **Capacidades:** herramientas, contexto largo, skills y memoria, planificación y multi-agente.
2. **Dominios:** agentes de código, de interfaz gráfica (GUI) y de investigación.
3. **Entrenamiento:** fine-tuning supervisado y aprendizaje por refuerzo.
4. **Seguridad y frameworks:** sandboxing y credenciales, OpenHands, LangGraph, observabilidad.
5. **Interacción y búsqueda:** futuro del trabajo, multi-agente, humano y agente, reordenar, búsqueda en árbol.

### DeepLearning.AI · Agentic AI · Oficial

[Curso](https://www.deeplearning.ai/courses/agentic-ai/) de Andrew Ng, de unas 10 horas. Pide Python intermedio.

1. Flujos agénticos: grados de autonomía, dividir en pasos y evaluar
2. Patrón de reflexión
3. Uso de herramientas y MCP
4. Consejos prácticos: **evals, análisis de errores**, evals por componente, latencia y costo
5. Agentes muy autónomos: planificación y multi-agente, con proyecto final

Su [catálogo](https://www.deeplearning.ai/courses/) no propone un orden. Incluye Context Engineering, Loop Engineering con Deep Agents, memoria de largo plazo, RAG, MCP, DSPy, revisión de código con IA, Computer Use y voz para agentes.

### Hugging Face · AI Agents Course · Oficial

[Curso](https://huggingface.co/learn/agents-course/en/unit0/introduction) gratis, de 3 a 4 horas a la semana por capítulo. Pide Python y LLMs básicos.

1. Fundamentos: herramientas, pensamientos, acciones, observaciones, mensajes y tokens especiales
2. Frameworks: smolagents, LangGraph y LlamaIndex
3. Casos de uso
4. Tarea final contra un benchmark, con tabla de posiciones
5. Bonus: fine-tuning para function calling, observabilidad y evaluación, agentes en juegos

### Hugging Face · MCP Course · Oficial

[Curso](https://huggingface.co/learn/mcp-course/en/unit0/introduction): fundamentos, caso de punta a punta, caso desplegado y bonus. Dice usar «the latest MCP standards», sin nombrar una revisión.

### Microsoft · AI Agents for Beginners · Oficial

[Repo](https://github.com/microsoft/ai-agents-for-beginners), MIT, 78.920 estrellas, activo. 18 lecciones:

1. Introducción y casos de uso
2. Frameworks
3. Patrones de diseño
4. Uso de herramientas
5. RAG agéntico
6. Agentes confiables
7. Planificación
8. Multi-agente
9. Metacognición
10. Producción
11. Protocolos: MCP, A2A y NLWeb
12. Context engineering
13. Memoria
14. Microsoft Agent Framework
15. Agentes de computer use
16. Despliegue escalable
17. Agentes locales
18. Seguridad

### LangChain Academy · Oficial

[Sitio](https://academy.langchain.com/). Ordena por ciclo de vida: Build, Test, Deploy y Monitor.

- **Para empezar:** Introduction to LangChain, Introduction to LangGraph e Introduction to Deep Agents, que llama «LangChain's open-source agent harness».
- **Probar y mejorar:** LangSmith Essentials y Autonomous Agent Improvement with LangSmith Engine.
- **Desplegar:** LangSmith Deployment.
- **Certificación:** LangChain Certified Agent Engineer, de pago. No se encontró su temario oficial.

### Anthropic · Cursos en GitHub · Oficial, archivado

[Repo](https://github.com/anthropics/courses), archivado. Es uno de los pocos que dice el orden de forma explícita: «We suggest completing the courses in the following order».

1. Fundamentos de la API
2. Tutorial interactivo de prompting
3. Prompting en el mundo real
4. **Evaluaciones de prompts**
5. Uso de herramientas

### MIT · AI Studio: From AI Agents to the Agentic Web · otoño 2026 · Oficial

[Sitio](https://aiforimpact.github.io/fall26.html). Dicta Ramesh Raskar en el MIT Media Lab. Espera que todos construyan «with modern AI tools and agents». El proyecto pasa de un agente a un equipo y a una organización de agentes.

Temas: agentes personales, loops y trabajo autónomo, multi-agente, productos e infraestructura, modelos abiertos y locales, robótica, web agéntica y aplicaciones.

### Berkeley · Agentic AI MOOC · otoño 2025 · Oficial

[Sitio](https://rdi.berkeley.edu/agentic-ai/f25). Orientado a investigación, con invitados de OpenAI, NVIDIA, Microsoft, Meta, Google DeepMind y Sierra. Pasa por agentes con LLMs, diseño de sistemas, evaluación, entrenamiento, multi-agente, despliegue real y cierra con seguridad. Pide base de ML.

### Stanford CS329A · Self-Improving AI Agents · otoño 2025 · Secundario

[Sitio](https://cs329a.stanford.edu/), sin abrir. Según fuentes externas: más cómputo al responder, verificadores, entrenamiento, agentes de investigación y evaluación. Sirve para el tema de sistemas que se mejoran solos.

---

## 3. ML primero

### IBM en Coursera · Generative AI Engineering · Oficial

[Certificado](https://www.coursera.org/professional-certificates/ibm-generative-ai-engineering) de 16 cursos y 188 horas, para principiantes, sin experiencia previa. «Highly recommended» seguir el orden.

Fundamentos de IA → IA generativa → prompting → Python → apps con Flask → apps generativas → análisis de datos → ML → deep learning → arquitectura de LLMs → modelos de NLP → Transformers → fine-tuning → fine-tuning avanzado → agentes con RAG y LangChain → proyecto.

### IBM en Coursera · AI Engineer · Oficial

[Certificado](https://www.coursera.org/professional-certificates/ai-engineer) de 13 cursos y unas 168 horas, nivel intermedio. Pide Python.

ML → deep learning con Keras y PyTorch → proyecto → LLMs y Transformers → fine-tuning → agentes con RAG y LangChain → proyecto.

### IBM en Coursera · RAG and Agentic AI · Oficial

[Certificado](https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai) de 10 cursos y unas 103 horas, nivel avanzado.

Apps generativas → RAG → bases vectoriales → RAG avanzado → multimodal → agentes → LangChain y LangGraph → multi-agente con varios frameworks → MCP → proyecto.

### Hugging Face · LLM Course · Oficial

[Curso](https://huggingface.co/learn/llm-course/chapter1/1): Transformers (1 a 4), datasets y tokenizers (5 a 8), demos (9), fine-tuning, datos y modelos que razonan (10 a 12). Pide buen Python y recomienda un curso previo de deep learning.

### MIT 6.S191 · Introduction to Deep Learning · 2026 · Oficial

[Sitio](https://introtodeeplearning.com/). Deep learning, secuencias, visión, modelos generativos, aprendizaje por refuerzo y nuevas fronteras, con un laboratorio para hacer fine-tuning de un LLM. Pide álgebra lineal y cálculo elementales. Encaja más en la especialidad de ML y Deep Learning.

---

## 4. Papers y marcos

### Google · Introduction to Agents · noviembre de 2025 · Secundario

Whitepaper del intensivo de Kaggle. No se pudo leer el original. [Según](https://ppc.land/google-cloud-releases-comprehensive-agentic-ai-framework-guideline/) [resúmenes](https://recapio.com/digest/whitepaper-companion-podcast-introduction-to-agents-by-kaggle), propone 5 niveles: 0 razonamiento solo, 1 conectado a herramientas, 2 estratégico (varios pasos y context engineering), 3 multi-agente, 4 que evoluciona solo. Se parecen a los 5 niveles que usa roadmapv1.

### Google DeepMind · Intelligent AI Delegation · febrero de 2026 · Oficial

[arXiv 2602.11865](https://arxiv.org/abs/2602.11865), de Nenad Tomašev, Matija Franklin y Simon Osindero. Trata delegar como una serie de decisiones sobre tareas, autoridad, responsabilidad, roles, intención y confianza.

- **Sus 9 componentes:** dividir la tarea, asignarla, optimizar varios objetivos, coordinar, monitorear, confianza y reputación, permisos, comprobar que se completó y seguridad.
- **Sobre verificar:** «effective verification is not an afterthought but a constraint on design».
- **Sobre MCP:** «lacks the policy layer to govern usage permissions or support deep delegation chains».
- **Riesgo de perder habilidades (§5.6):** delegar «may come at the cost of gradual skill degradation». Sugiere asignar tareas a personas a propósito, pedir fundamentos o pre-mortems a los expertos, y retirar de a poco la ayuda de la IA a quienes están aprendiendo.

### Google DeepMind · AI Agent Traps · 2026 · Secundario

De Matija Franklin, Nenad Tomašev, Julian Jacobs, Joel Z. Leibo y Simon Osindero. No se pudo leer el original; [según un análisis](https://mondoo.com/blog/web-built-for-human-eyes-weaponized-against-ai-agents), describe 6 tipos de trampas: inyectar contenido, manipular semántica, envenenar memoria, controlar conducta, fallas sistémicas y **atacar al humano que revisa**, aprovechando su cansancio y su exceso de confianza para que apruebe.

### Defeating Prompt Injections by Design (CaMeL) · 2025 · Oficial

[arXiv 2503.18813](https://arxiv.org/abs/2503.18813), con el código en `google-research`. La página no indica afiliaciones. En vez de pedirle al modelo que se defienda, le agrega una capa de sistema que impide que los datos no confiables cambien el flujo del programa. Resuelve 77 % de las tareas con seguridad demostrable, frente a 84 % sin defensa.

### Google · Harness² y Amplio · 2026 · Oficial

Ya estaban en roadmapv1. Se confirmó que existen y están activos, ambos con Apache 2.0.

- [Harness²](https://github.com/google-research/harness2), 22.638 estrellas: «A harness is the system around a model that enables it to act as an agent».
- [Amplio](https://github.com/google-deepmind/amplio), de Google DeepMind, 103 estrellas: un harness liviano para corridas largas.
