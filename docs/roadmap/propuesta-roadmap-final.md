# Propuesta de roadmap final · AI Engineering · versión 2

> **Estado: propuesta para decidir.** Nada de esto cambió el temario, el sitio ni el código.
>
> Escrita el 2026-11-05 (pedidos 79 y 80). Rehace la versión 1 (`propuesta-roadmap-v1.md`) con tu feedback (`feedback-propuesta.md`), roadmapv7 y una investigación nueva en 7 frentes, con 969 avisos de trabajo reales. Las notas de la investigación están en `research_notes/` (fuera de git).

---

## 1. Resumen

**La idea central se mantiene:** si todo se construye dirigiendo, dirigir se aprende primero, y cada lección termina con algo construido y comprobado.

**Lo que cambia, por tu feedback:**

1. **El proyecto ya no es un bot de soporte.** Es **tu sistema multi-agente**: orquestado, con un harness robusto, que se adapta a la query o al proyecto que elija el estudiante (un CRM, algo personal, un laboratorio o cualquier idea), que crea herramientas y subagentes solo, con uno que investiga, otro que programa, otro con RAG y otro que audita.
2. **Dos caminos, como pediste destacar.** Un tronco común para todos, y después **Productos** (crear productos de IA) o **Modelos** (acercarse a la IA por dentro: deep learning, entrenar, fine-tuning, inferencia e investigación). Modelos vive en la especialidad de ML y Deep Learning. **Es tu camino.**
3. **La misión manda.** Quien termina cualquiera de los dos caminos sale con su flujo de agentic engineering, una arquitectura multi-agente, un harness propio medido, dominio de Claude Code y el criterio de CEO o CTO. La sección 2 dice dónde se aprende y cómo se comprueba cada cosa.
4. **Se suma lo que faltaba de roadmapv7:** bases de datos y SQL, backend, redes neuronales, atención y Transformers, y el orden de proyectos de ML a producción.
5. **Un cierre de CEO y CTO** de 8 lecciones, con evidencia y no con motivación: costo por tarea exitosa, precio, foso, dependencia de proveedores, equipo, ley chilena y europea, primer cliente y sala de datos.

| | Versión 1 | Versión 2 |
|---|---|---|
| Lecciones | 54 | 115 en total: 83 en Productos y 88 en Modelos |
| Ruta esencial | 29 | 61 en Productos y 70 en Modelos |
| Proyecto | Bot de soporte | Tu sistema multi-agente (hitos H0 a H15) y, en Modelos, tu propio modelo (hitos M0 a M10) |
| Caminos | Uno | Tronco, compartido, dos caminos y cierre |
| Evidencia | 6 fuentes | 7 fuentes más 7 frentes de investigación y 969 avisos reales |
| Tiempo estimado, ruta esencial | 68 h | 187 h en Productos y 219 h en Modelos |

---

## 2. La misión, y cómo se comprueba

Lo que pediste que logre quien termina, dónde se aprende y qué lo prueba. **Los umbrales son propuesta:** se calibran contigo como primer estudiante.

| Quien termina puede… | Dónde | Cómo se comprueba |
|---|---|---|
| Crear su flujo de agentic engineering | 45, 64 | H6: en 10 tareas seguidas, el agente entrega con la verificación en verde y al menos 7 sin corregir lógica |
| Diseñar una arquitectura multi-agente | 46 a 53; en Modelos, 102 | H7 a H12: el mismo núcleo sirve a 4 dominios sin cambiar, y le gana a un solo agente donde la tarea es paralela |
| Diseñar un harness al nivel de Harness², DeepSeek Harness o Claude Code | 32, 38, 54 a 56 | H5: sobrevive a una suite de fallas (matar el proceso, resultado gigante, texto hostil). H13: una mejora medida por ablación |
| Manejar Claude Code a la perfección | 39 a 45 | Hooks que bloquean lo prohibido, skills con mejora medida y corridas sin supervisión que pasan su verificación |
| Montar su fábrica de software | 63 a 68 | H15: etapas 3 a 5, con 8 de 10 bugs sembrados detectados y automerge sin que suban las fallas |
| Pensar como CEO o CTO | 105 a 112 | La sala de datos: cada cifra del memo se reproduce desde sus archivos |

**Sobre la promesa:** «digno de ser CEO o CTO» no puede prometer un resultado comercial. Lo defendible es: **terminas con la evidencia que un CEO o CTO debe poder mostrar.**

---

## 3. Los dos caminos

roadmapv7 lo dice así: «There isn't one mandatory path for every AI engineer». Productos va más hondo en backend, RAG, agentes, evaluación y producción. Modelos va más hondo en deep learning, fine-tuning, entrenamiento y optimización de inferencia.

```text
TRONCO COMÚN · lecciones 1 a 29
dirigir · software · la IA por dentro · app con LLM · RAG
                     │
             elige tu camino (29)
             ┌───────┴────────┐
        PRODUCTOS          MODELOS (el tuyo)
    compartido →        deep learning y entrenar →
    multi-agente,       compartido →
    harness,            inferencia e investigador
    producción,         (en ML y Deep Learning)
    fábrica                    │
             └───────┬────────┘
     CIERRE · CEO y CTO · tu carrera
```

| Bloque | Lecciones | Para quién |
|---|---|---|
| Tronco común | 1 a 29 | Todos. Termina con elegir camino |
| Compartido: agentes, harness y Claude Code | 30 a 45 | Los dos caminos. En Modelos va en medio, porque el laboratorio autónomo lo necesita |
| Camino Productos | 46 a 72 | Quien quiere crear productos de IA |
| Camino Modelos | 73 a 104 | Quien quiere ML, deep learning e investigación |
| Cierre | 105 a 115 | Todos |

**Tu ruta, en orden:** tronco (1 a 29) → Modelos A a D (73 a 92) → compartido (30 a 45) → Modelos E a G (93 a 104) → cierre (105 a 115).

**Infraestructura**, la tercera orientación que nombra el post de roadmapv7, queda dentro de Productos (producción y sistemas distribuidos) y de Modelos (inferencia y GPU). No justifica un camino propio.

**Combinaciones:** quien hace Productos y quiere alojar modelos suma Modelos E (inferencia). Quien hace Modelos y quiere investigar con agentes ya tiene el compartido, y puede sumar el nivel 4 de Productos.

**Academy no bloquea lecciones:** elegir es una recomendación, no una puerta cerrada.

---

## 4. Los proyectos

### Tu sistema multi-agente (tronco, compartido y Productos)

Lo construye todo estudiante, en un solo repo, en el dominio que elija. Se basa en lo que funciona en producción según la investigación: **un orquestador, trabajadores aislados, un solo escritor a la vez, un auditor que no comparte contexto con quien construye, y un núcleo determinista fino** (Anthropic, Factory, Cognition). La integración completa, con ambas fábricas, es diseño nuestro: ningún sistema publicado reúne todo con una tasa de éxito auditada.

```text
Petición o brief
  → Política en código: presupuesto, permisos, profundidad
  → Enrutador: ficha de plan ("no delegar" es válido)
      simple → un agente con herramientas
      compleja → Orquestador → Planificador (plan + contrato)
                 → Fábrica de subagentes: investigador (lectura),
                   RAG (lectura, con citas), programador (único escritor)
                 → Fábrica de herramientas: sandbox → compuertas → registro
                 → Auditor sin contexto del constructor
  → Entrega con evidencia · traza y evals fuera del alcance del agente
```

| Hito | Qué existe al terminar | Lección |
|---|---|---|
| H0 | Repo y primera llamada a un modelo, sin filtrar la clave | 3 |
| H1 | Spec del sistema y repo que se verifica solo | 10, 11 |
| H2 | Tu clasificador de peticiones, simple o compleja: el proyecto de ML | 13 |
| H3 | App con LLM: cliente robusto, salida estructurada, una herramienta, evals, en internet | 18 a 25 |
| H4 | Especialista RAG con citas | 26 a 28 |
| H5 | Arnés de un agente que sobrevive a una suite de fallas | 30 a 38 |
| H6 | Tu flujo de agentic engineering | 45 |
| H7 a H12 | Enrutador, subagentes, auditor, fábricas y el mismo núcleo en 4 dominios | 46 a 53 |
| H13 | Harness medido por ablación y optimizado | 54 a 56 |
| H14 | En producción | 57 a 62 |
| H15 | Fábrica de software por etapas | 63 a 68 |

**La prueba de que se adapta:** el CRM debería terminar con casi ningún subagente, y el laboratorio con varios, sobre el mismo núcleo. Si los dominios producen la misma forma, el enrutador no se adapta.

### Tu propio modelo (Camino Modelos)

| Hito | Qué se logra | Comprobación |
|---|---|---|
| M0 | Predecir parámetros, memoria y tiempo por paso | Lo medido cae dentro del margen que fijaste antes |
| M1 | Entrenar un modelo diminuto en CPU | Pérdida inicial cerca de ln(vocabulario), y sobreajusta un lote |
| M2 | Un Transformer chico, con GPU alquilada | Le gana a un bigrama de referencia, con varias semillas |
| M3 | Cazar 3 bugs que metió un agente saboteador | Los encuentras sin ayuda, y las curvas vuelven a lo normal |
| M4 | Filtrar y deduplicar un corpus | Efecto medido con y sin limpieza |
| M5 | LoRA de un modelo abierto con tu dataset | Le gana al mismo modelo con buen prompt, o concluyes que no convenía |
| M6 | RLVR o DPO en un problema acotado | Mejora medida en problemas no vistos |
| M7 | Servir con vLLM o SGLang | Tu tabla de latencia, throughput y costo, contra una API |
| M8 | Reproducir una afirmación de un paper reciente | Tolerancia fijada antes. Si no se reproduce, se documenta por qué |
| M9 | Laboratorio autónomo con tu sistema multi-agente | La mejora sobrevive con semillas nuevas y una métrica oculta |
| M10 | Informe y repo públicos | Un agente limpio reproduce todo solo con el README |

**Dónde se unen:** tu sistema multi-agente es el laboratorio del hito M9, y tu modelo servido del M7 puede ser un subagente del sistema. **Sin GPU propia:** se depura en CPU con un modelo diminuto y se alquila GPU por horas solo cuando la prueba pasa. Tu servidor tiene 2 núcleos ARM y no tiene GPU.

---

## 5. El método

**Se mantiene el ciclo de la versión 1:** delegar → dibujar → anticipar → indicar → comprobar → registrar. La ayuda se retira por etapas: en los módulos 1 a 3 el flowchart viene casi listo, y desde el módulo 4 lo dibuja el estudiante.

**Lo nuevo, solo en el Camino Modelos: «no se escribe código, pero se lee, se predice y se defiende».** La investigación encontró que la regla sin código a mano deja de alcanzar en 4 puntos: depurar entrenamientos (un entrenamiento malo corre sin errores), confiar en los números (los agentes pueden inventar resultados), entrevistas de investigación y puestos en laboratorios frontera. CS336 y 11-711 prohíben resolver sus tareas con un LLM. La propuesta respeta tu decisión del pedido 75, porque nada exige teclear código:

1. **Predecir antes de correr:** formas de tensores, pérdida inicial, memoria y tiempo por paso.
2. **Pseudocódigo sin IA:** backprop, atención, LoRA o KV cache, escritos por ti. El agente los traduce literal, y una prueba dice si tu idea era correcta.
3. **Caza de bugs:** un agente saboteador mete errores silenciosos, y los encuentras leyendo código y curvas.
4. **Un paso a mano:** una red de 2 capas en papel.
5. **Defensa oral** con un LLM examinador, sin notas, antes de cerrar un hito.

**Es una compensación sin probar:** hay que medirla contigo.

---

## 6. Lo que dicen 969 avisos reales

Se bajaron 19.572 avisos de 182 tableros públicos (Greenhouse, Ashby, Lever, Workable y Get on Board) el 5 de noviembre de 2026, y se eligieron 969 por título: 465 de productos y 504 de modelos, de 225 empresas. Listado auditable en `research_notes/.../avisos_contados.csv`.

**Límites:** son **menciones por palabra clave, no exigencias**; la muestra está cargada a EE. UU. y a empresas de IA; solo 38 avisos son de Latinoamérica; Waymo y Anthropic pesan mucho en modelos.

| Habilidad | Productos | Modelos | Qué cambia en el temario |
|---|---|---|---|
| Agentes | 79 % | 46 % | Agentes van al compartido, para los dos caminos |
| Multi-agente | 8 % | 5 % | Tu proyecto va más allá que el mercado promedio: por eso exige ganarle a un solo agente |
| Trato con clientes | 55 % | 22 % | Lección 62 |
| Cloud | 53 % | 35 % | Lección 57 |
| Observabilidad (con tracing y monitoreo) | 42 % | 42 % | Esencial en Productos |
| Python | 59 % | 64 % | Tronco |
| TypeScript | 35 % | 4 % | Se pide junto a Python en Productos |
| RAG | 23 % | 7 % | Tronco, porque los dos lo usan |
| Kubernetes | 19 % | 22 % | Dentro de 57 y 58 |
| MCP | 15 % | 2 % | Compartido |
| PyTorch | 5 % | 40 % | Vocabulario de lectura en Modelos |
| Optimización de inferencia | 6 % | 25 % | Bloque E de Modelos |
| Aprendizaje por refuerzo | 6 % | 29 % | Lección 87 |
| PhD | 5 % | 27 % | 104 lo dice con claridad |
| Programar, mencionado de forma explícita | 32 % | 42 % | Riesgo declarado de la regla sin código |
| Herramientas de código con IA | 24 % | 15 % | Compartido, con Claude Code |
| LeetCode | 0 % | 0 % | No prueba que no lo pidan: las entrevistas casi nunca están en el aviso |
| Voz | 13 % | 7 % | Optativa, la más pedida de las cuatro |
| Computer use, A2A, memoria de agentes, ejecución durable | 1 % o menos | 1 % o menos | Optativas o ideas dentro de otras lecciones |

---

## 7. El roadmap completo

**E** = esencial en la ruta mínima de ese camino. El tiempo es lectura + construcción, estimado. El costo es lo que gastaría el estudiante en APIs o GPU, también estimado.

**Módulo 1. Empezar a dirigir** · bloque Tronco

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 1 | El oficio de AI engineer y sus dos caminos | E | Nueva | 20 min + 0,5 h | Gratis |
| 2 | Dirigir a una IA: delegar, describir, discernir y responder | E | Nueva | 20 min + 1 h | Gratis |
| 3 | Tu primer agente de código | E | Nueva | 20 min + 1,5 h | Centavos |
| 4 | Git y GitHub para dirigir al agente | E | Reordenada | 30 min + 1,5 h | Gratis |

**Módulo 2. Software para dirigir** · bloque Tronco

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 5 | Python como lenguaje técnico | E | Reordenada | 25 min + 1,5 h | Gratis |
| 6 | Un proyecto de software por dentro | E | Reordenada | 20 min + 1 h | Gratis |
| 7 | HTTP, APIs y JSON | E | Reordenada | 20 min + 1 h | Centavos |
| 8 | Backend, autenticación y webhooks | E | Reordenada | 25 min + 1,5 h | Gratis |
| 9 | Bases de datos y SQL | E | Nueva · se comparte con `ds/03` | 25 min + 2 h | Gratis |
| 10 | De la idea a la spec: un diseño que el agente no degrade | E | Reordenada | 25 min + 2 h | Centavos |
| 11 | Verificar y preparar tu repo para el agente | E | Reordenada | 25 min + 2 h | Centavos |

**Módulo 3. La IA por dentro** · bloque Tronco

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 12 | La matemática del ML, en intuición | E | Nueva · se comparte con `ml/01` | 25 min + 1 h | Centavos |
| 13 | Entrenar, validar y probar | E | Nueva · se comparte con `ml/02` | 30 min + 3 h | Gratis |
| 14 | Redes neuronales desde la base | E | Nueva · se comparte con `ml/08` | 30 min + 2 h | Gratis |
| 15 | Atención y el Transformer | E | Nueva · se comparte con `ml/10` | 30 min + 2 h | Gratis |
| 16 | Cómo funciona un LLM | E | Publicada | 20 min + 1 h | Centavos |
| 17 | De dónde sale un LLM y cuál usar | E | Reordenada | 20 min + 1,5 h | Centavos |

**Módulo 4. Nivel 1: App con un LLM** · bloque Tronco

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 18 | Prompting técnico | E | Reordenada | 25 min + 2 h | Centavos |
| 19 | Context engineering | E | Reordenada | 25 min + 2 h | Centavos |
| 20 | La llamada a la API por dentro | E | Reordenada | 20 min + 1,5 h | Centavos |
| 21 | Salidas estructuradas y validación | E | Reordenada | 20 min + 1,5 h | Centavos |
| 22 | Tool calling: el modelo pide y tu código ejecuta | E | Reordenada | 25 min + 2 h | Centavos |
| 23 | Primeros evals: saber si funciona | E | Reordenada | 30 min + 3 h | Hasta USD 5 |
| 24 | Elegir modelo y controlar el costo | E | Reordenada | 25 min + 2 h | Hasta USD 5 |
| 25 | De script a producto | E | Reordenada | 25 min + 3 h | Hasta USD 5 |

**Módulo 5. Nivel 2: RAG con evals** · bloque Tronco

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 26 | Indexar conocimiento | E | Reordenada | 25 min + 2 h | Centavos |
| 27 | Recuperar bien y responder con fuentes | E | Reordenada | 25 min + 3 h | Centavos |
| 28 | Evaluar un RAG | E | Reordenada | 25 min + 3 h | Hasta USD 5 |
| 29 | Productos o modelos: elige tu camino | E | Nueva | 25 min + 1,5 h | Centavos |

**Módulo 6. Nivel 3: Agentes y su harness** · bloque Compartido

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 30 | Workflow o agente | E | Reordenada | 25 min + 1,5 h | Centavos |
| 31 | Automatizar un flujo |  | Nueva | 20 min + 1,5 h | Centavos |
| 32 | Anatomía de un harness | E | Reordenada | 25 min + 2 h | Centavos |
| 33 | Diseñar herramientas y permisos | E | Reordenada | 25 min + 2 h | Centavos |
| 34 | MCP: herramientas para cualquier agente | E | Reordenada | 25 min + 3 h | Centavos |
| 35 | Memoria del agente | E | Reordenada | 25 min + 2 h | Centavos |
| 36 | Evaluar un agente | E | Reordenada | 30 min + 3 h | Hasta USD 5 |
| 37 | Seguridad del agente | E | Reordenada | 30 min + 3 h | Centavos |
| 38 | Dirige la construcción de tu harness | E | Reordenada | 30 min + 8 h | USD 5 a 30 |

**Módulo 7. Dominar Claude Code** · bloque Compartido

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 39 | Instrucciones y skills que sí funcionan | E | Reordenada | 25 min + 2,5 h | Hasta USD 5 |
| 40 | Hooks y control determinista | E | Reordenada | 20 min + 1,5 h | Centavos |
| 41 | Delegar: subagentes, equipos y workflows | E | Reordenada | 25 min + 2,5 h | Hasta USD 5 |
| 42 | Trabajo sin supervisión | E | Reordenada | 25 min + 2,5 h | Hasta USD 5 |
| 43 | Optimizar tokens y créditos |  | Reordenada | 20 min + 1 h | Centavos |
| 44 | Codex, DeepSeek Harness y el mercado |  | Reordenada | 25 min + 3 h | Hasta USD 5 |
| 45 | Tu flujo de agentic engineering | E | Nueva | 30 min + 6 h | USD 5 a 30 |

**Módulo 8. Nivel 4: Tu sistema multi-agente** · bloque Productos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 46 | ¿Hace falta multi-agente? | E | Reordenada | 25 min + 2 h | Hasta USD 5 |
| 47 | Orquestar: quién tiene el plan | E | Reordenada | 25 min + 2 h | Centavos |
| 48 | Enrutador y contrato de validación | E | Nueva | 25 min + 3 h | Hasta USD 5 |
| 49 | Subagentes de lectura y un solo escritor | E | Reordenada | 25 min + 4 h | USD 5 a 30 |
| 50 | El auditor que no vio nada | E | Reordenada | 20 min + 3 h | Hasta USD 5 |
| 51 | Crear subagentes de forma autónoma | E | Nueva | 25 min + 3 h | Hasta USD 5 |
| 52 | Crear herramientas de forma autónoma | E | Nueva | 30 min + 5 h | USD 5 a 30 |
| 53 | Un mismo núcleo para cualquier proyecto | E | Nueva | 25 min + 6 h | USD 5 a 30 |

**Módulo 9. Arquitecto de harness** · bloque Productos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 54 | Las decisiones de un harness robusto | E | Nueva | 30 min + 3 h | Hasta USD 5 |
| 55 | Leer harnesses abiertos por sus decisiones |  | Reordenada | 30 min + 2 h | Centavos |
| 56 | Optimizar un harness con evidencia |  | Nueva | 30 min + 6 h | USD 5 a 30 |

**Módulo 10. Producción** · bloque Productos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 57 | Desplegar: APIs, Docker, CI/CD y cloud | E | Nueva | 30 min + 3 h | Hasta USD 5 |
| 58 | Sistemas distribuidos, lo justo |  | Nueva | 25 min + 3 h | Centavos |
| 59 | Observabilidad | E | Reordenada | 25 min + 2 h | Centavos |
| 60 | Confiabilidad y corridas largas | E | Reordenada | 25 min + 3 h | Hasta USD 5 |
| 61 | Privacidad y responsabilidad |  | Reordenada | 25 min + 2 h | Centavos |
| 62 | Cara al cliente: requisitos y despliegue |  | Nueva | 20 min + 2 h | Centavos |

**Módulo 11. Nivel 5: Autonomía y fábrica de software** · bloque Productos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 63 | Loops autónomos |  | Reordenada | 25 min + 3 h | Hasta USD 5 |
| 64 | Revisor separado y contrato en tu repo | E | Reordenada | 25 min + 3 h | Hasta USD 5 |
| 65 | Agentes en segundo plano: de issue a PR |  | Nueva | 25 min + 4 h | USD 5 a 30 |
| 66 | Mezcla automática por riesgo y bucle meta |  | Reordenada | 25 min + 4 h | USD 5 a 30 |
| 67 | La fábrica completa, y cuándo no hacerla |  | Reordenada | 35 min + 4 h | USD 5 a 30 |
| 68 | Sistemas que se mejoran solos |  | Reordenada | 30 min + 4 h | Hasta USD 5 |

**Módulo 12. Capacidades especiales (optativo)** · bloque Productos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 69 | Voz, imagen y video |  | Reordenada | 25 min + 3 h | Hasta USD 5 |
| 70 | Agentes que usan el computador |  | Nueva | 25 min + 2 h | Hasta USD 5 |
| 71 | Modelos locales y abiertos |  | Reordenada | 25 min + 2 h | Gratis |
| 72 | Protocolos entre agentes |  | Nueva | 20 min + 1 h | Gratis |

**Módulo 13. A. Deep learning por dentro** · bloque Modelos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 73 | Tensores y cuentas de recursos | E | Nueva | 20 min + 1,5 h | Hasta USD 5 |
| 74 | Optimización: SGD, momentum, Adam y calendario | E | Reordenada | 25 min + 2 h | Hasta USD 5 |
| 75 | Que la señal sobreviva: inicialización y normalización | E | Reordenada | 25 min + 2 h | Hasta USD 5 |
| 76 | Regularización y generalización | E | Reordenada | 20 min + 1,5 h | Hasta USD 5 |
| 77 | Diagnosticar un entrenamiento | E | Nueva | 25 min + 3 h | Hasta USD 5 |

**Módulo 14. B. Lenguaje** · bloque Modelos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 78 | Del texto a tokens y embeddings | E | Reordenada | 20 min + 1,5 h | Hasta USD 5 |
| 79 | Modelar lenguaje: predecir el siguiente token | E | Nueva | 20 min + 1,5 h | Hasta USD 5 |
| 80 | Secuencias: RNN y por qué no alcanzan |  | Reordenada | 15 min + 1 h | Hasta USD 5 |
| 81 | Decisiones de arquitectura moderna |  | Nueva | 25 min + 2 h | Hasta USD 5 |

**Módulo 15. C. Entrenar un LLM** · bloque Modelos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 82 | Pre-entrenar: el ciclo a escala | E | Reordenada | 25 min + 4 h | USD 5 a 30 |
| 83 | Datos para pre-entrenar | E | Reordenada | 20 min + 3 h | USD 5 a 30 |
| 84 | Evaluar modelos de lenguaje | E | Nueva | 20 min + 2 h | Hasta USD 5 |
| 85 | GPU, memoria y paralelismo |  | Nueva | 25 min + 2,5 h | USD 5 a 30 |
| 86 | Leyes de escala |  | Reordenada | 20 min + 2,5 h | USD 5 a 30 |

**Módulo 16. D. Post-entrenamiento y fine-tuning** · bloque Modelos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 87 | Aprendizaje por refuerzo, lo justo | E | Nueva | 25 min + 2 h | Hasta USD 5 |
| 88 | De modelo base a asistente: SFT | E | Reordenada | 20 min + 3 h | USD 5 a 30 |
| 89 | Preferencias: RLHF y DPO | E | Reordenada | 25 min + 3 h | USD 5 a 30 |
| 90 | Razonamiento: RLVR |  | Reordenada | 25 min + 3 h | USD 5 a 30 |
| 91 | Fine-tuning eficiente: LoRA, y cuándo no | E | Reordenada | 20 min + 3 h | USD 5 a 30 |
| 92 | Tu dataset y tu evaluación de fine-tuning | E | Nueva | 20 min + 4 h | USD 5 a 30 |

**Módulo 17. E. Inferencia** · bloque Modelos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 93 | Servir un LLM: prefill, decode y KV cache | E | Nueva | 20 min + 2,5 h | USD 5 a 30 |
| 94 | Muchos usuarios: batching y memoria GPU | E | Nueva | 25 min + 3 h | USD 5 a 30 |
| 95 | Más barato: cuantización y speculative decoding |  | Nueva | 20 min + 2,5 h | USD 5 a 30 |
| 96 | La cuenta del costo por token | E | Nueva | 20 min + 2 h | USD 5 a 30 |

**Módulo 18. F. Mirar adentro (optativo)** · bloque Modelos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 97 | Interpretabilidad mecanicista |  | Nueva | 25 min + 2,5 h | Hasta USD 5 |
| 98 | Seguridad y alineación |  | Nueva | 20 min + 2 h | Hasta USD 5 |

**Módulo 19. G. El oficio de investigador** · bloque Modelos

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 99 | Leer papers y armar tu mapa, verificando contra la fuente | E | Reordenada | 20 min + 2,5 h | Hasta USD 5 |
| 100 | Diseñar experimentos y medir con estadística | E | Reordenada | 25 min + 2 h | Hasta USD 5 |
| 101 | Reproducir un paper | E | Reordenada | 20 min + 12 h | Más de USD 30 |
| 102 | Investigar con agentes, y sus trampas | E | Nueva | 25 min + 10 h | Más de USD 30 |
| 103 | Elegir un problema, escribir y publicar |  | Reordenada | 20 min + 8 h | USD 5 a 30 |
| 104 | Entrar: roles, becas, open source y entrevistas |  | Nueva | 25 min + 2 h | Centavos |

**Módulo 20. CEO y CTO de una startup de IA** · bloque Cierre

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 105 | El costo de una tarea que sale bien | E | Nueva | 25 min + 3 h | USD 5 a 30 |
| 106 | Cobrar algo cuyo costo varía |  | Nueva | 20 min + 3 h | Centavos |
| 107 | ¿Qué queda si mañana sale un modelo mejor? |  | Nueva | 20 min + 4 h | USD 5 a 30 |
| 108 | Portafolio de modelos y salida de emergencia | E | Reordenada | 20 min + 4 h | USD 5 a 30 |
| 109 | El equipo y la revisión cuando escriben los agentes |  | Nueva | 20 min + 3 h | Hasta USD 5 |
| 110 | Ley, contratos e incidentes | E | Nueva | 30 min + 4 h | Hasta USD 5 |
| 111 | Del problema al primer cliente | E | Reordenada | 25 min + 10 h | Hasta USD 5 |
| 112 | La sala de datos: defiende tu empresa |  | Nueva | 15 min + 3 h | Centavos |

**Módulo 21. Tu carrera** · bloque Cierre

| # | Lección | E | Estado | Tiempo | Costo |
|---|---|---|---|---|---|
| 113 | Tu portafolio | E | Nueva | 20 min + 4 h | Centavos |
| 114 | Entrevistas de AI engineering | E | Nueva | 25 min + 3 h | Centavos |
| 115 | Experiencia real, CV y contactos |  | Nueva | 20 min + 10 h | Hasta USD 5 |

**Productos:** 83 lecciones, unas 267 h. Ruta esencial: 61 lecciones, unas 187 h.
**Modelos:** 88 lecciones, unas 282 h. Ruta esencial: 70 lecciones, unas 219 h.

Las horas son altas porque las construcciones de los niveles 4 y 5 son proyectos de verdad. A 10 o 12 horas por semana, la ruta esencial de Modelos toma unos 5 meses.

---

## 8. Las fichas, lección por lección

**Vocabulario** es lo que el estudiante aprende a usar en sus indicaciones. **Qué evita** es el error que previene. **Ojo** son límites reales de la evidencia.

### Módulo 1. Empezar a dirigir

#### 1. El oficio de AI engineer y sus dos caminos

*Esencial · Nueva · 20 min + 0,5 h · Gratis · hito H0*

- **De dónde sale:** «Dos caras del pilar» y 5 niveles de la nota; roadmapv3 semana 1; roadmapv4; roadmapv7 (dos caminos).
- **Al terminar:** Explicas qué hace un AI engineer, cuáles son sus dos caminos y a qué nivel corresponde un problema tuyo.
- **Ideas:**
  1. Un AI engineer construye sistemas con IA que otros usan de forma fiable. Usar IA no basta.
  2. Hay dos caminos, según tu objetivo. Productos: backend, RAG, agentes, evals y producción. Modelos: deep learning, fine-tuning, entrenamiento y optimización de inferencia.
  3. La misión: criterio de CEO o CTO de una startup de IA, tu flujo de agentic engineering, una arquitectura multi-agente, un harness al nivel de Harness², DeepSeek Harness o Claude Code, Claude Code a la perfección y la sabiduría para montar una fábrica de software.
  4. 5 niveles: app con API, RAG con evals, agente, multi-agente a escala y sistema que se mejora solo. La mayoría del trabajo útil está en el 2 y el 3.
  5. Dirigir: tú decides, dibujas y compruebas, y el agente escribe. Estudias lo justo, construyes y vuelves cuando algo traba.
  6. Filtro anti-hype: un término nuevo entra solo si pasa 5 preguntas.
- **Vocabulario:** AI engineer, ML engineer, research engineer, modelo base, harness, agentic engineering, nivel de autonomía.
- **Flowchart o pseudocódigo:** Viene casi listo: la escalera de 5 niveles, con lo que obliga a subir de cada uno al siguiente, y el punto donde se separan los dos caminos. Tú completas en qué nivel está tu problema y qué camino te atrae hoy.
- **Construcción dirigida:** Una página con el problema que resolverá tu sistema multi-agente (CRM, algo personal o cualquier idea): a qué nivel llega hoy y qué le falta. Es el punto de partida del proyecto.
- **Cómo se comprueba:** Un LLM te interroga sobre esa página (técnica Grill me) hasta que no quedan dudas sin responder. Dices sin la etiqueta qué hace cada nivel y por qué ese nivel te basta hoy.
- **Qué evita:** Empezar por un agente cuando bastaba un buen prompt, y saltar de herramienta en herramienta sin orden.
- **Visual:** Figura: la escalera de 5 niveles y la separación de los 2 caminos.
- **Fuentes:** roadmapv7 (los dos caminos); Feedback de Fran, partes 2 y 3; roadmapv3, semana 1; roadmapv4, los 3 videos; Nota, «Los 5 niveles» (de Marina Wyss) y «Regla anti-hype».
- **Ojo:** El post de roadmapv7 nombra una tercera orientación, infraestructura. Fran pidió destacar 2, y falta decidir si infraestructura queda dentro de productos.

#### 2. Dirigir a una IA: delegar, describir, discernir y responder

*Esencial · Nueva · 20 min + 1 h · Gratis · hito H0*

- **De dónde sale:** Anthropic AI Fluency; MIT 6.S950; DeepMind; fórmula de la lección 09 actual.
- **Al terminar:** Antes de pedirle algo a una IA, sabes qué delegar, cómo describirlo y cómo vas a juzgar lo que entregue.
- **Ideas:**
  1. Delegar: qué entregas, qué verificas y qué te guardas.
  2. Describir: objetivo, contexto, restricciones y criterio de terminado.
  3. Pseudocódigo y flowchart: el idioma para dirigir sin escribir código.
  4. Discernir: decidir qué es «bien» antes de ver el resultado.
  5. Responder: el resultado es tuyo. Haces un pre-mortem antes de delegar.
- **Vocabulario:** delegar, criterio de terminado, restricción, pseudocódigo, flowchart, pre-mortem, alucinación.
- **Flowchart o pseudocódigo:** Viene casi listo: delegar → dibujar → anticipar → indicar → el agente trabaja → comprobar → ¿pasó? → registrar. Si no pasó, corriges la indicación. Tú completas qué entregas, qué verificas y qué te guardas en tu tarea.
- **Construcción dirigida:** Escribes 20 peticiones que le harías a tu sistema, y un chat de IA marca cada una como simple o compleja. Esas peticiones son el inicio de los datos de H2.
- **Cómo se comprueba:** Comparas lo que predijiste con lo que salió. Encuentras al menos 3 errores de la IA y dices qué indicación los habría evitado.
- **Qué evita:** Aceptar lo primero que responde el modelo porque suena bien.
- **Visual:** Figura: el ciclo de dirección.
- **Fuentes:** roadmapv6, Anthropic AI Fluency; roadmapv6, MIT 6.S950; roadmapv6, Google DeepMind, Intelligent AI Delegation; Nota, lección 09 actual; Decisión de Fran, pedido 75.

#### 3. Tu primer agente de código

*Esencial · Nueva · 20 min + 1,5 h · Centavos · hito H0*

- **De dónde sale:** roadmapv2 paso 3; roadmapv3 semana 1; terminal de la 01 actual.
- **Al terminar:** Instalas un agente de código, le das una tarea en plan mode, ves lo que hizo y lo detienes si hace falta.
- **Ideas:**
  1. La terminal y los archivos: lo mismo que ve el agente.
  2. Un agente de código es un modelo con un loop, herramientas y permisos.
  3. Plan mode y modos de permiso: qué puede hacer sin preguntarte.
  4. Ver lo que hizo: herramientas usadas, archivos cambiados, cómo detenerlo y volver atrás.
  5. Las claves van en variables de entorno, nunca dentro del repo.
- **Vocabulario:** terminal, directorio, plan mode, modo de permiso, tool call, variable de entorno, `.gitignore`, API key.
- **Flowchart o pseudocódigo:** Viene casi listo: leer la clave del entorno → armar el pedido → llamar al modelo → imprimir la respuesta y los tokens. Tú completas qué hace si falta la clave y qué parámetros recibe.
- **Construcción dirigida:** H0, primera llamada: le pides a un agente, por ejemplo Claude Code o Codex, un script que manda un prompt a un modelo y muestra la respuesta y los tokens, con temperatura y máximo de tokens como parámetros.
- **Cómo se comprueba:** El script corre dos veces, y la salida cambia al subir la temperatura. Buscas tu clave en la carpeta y no aparece en ningún archivo. Pides borrar un archivo con permisos restringidos, y el agente pregunta antes.
- **Qué evita:** Que el agente borre o cambie archivos sin permiso, y filtrar una API key.
- **Visual:** Figura: una sesión anotada, con cada herramienta que usó el agente.
- **Fuentes:** roadmapv2, paso 3; roadmapv3, semana 1; roadmapv6, Anthropic Claude Code in Action; roadmapv6, DeepLearning.AI Claude Code; Stanford CS146S 2026, semana 1.

#### 4. Git y GitHub para dirigir al agente

*Esencial · Reordenada · 30 min + 1,5 h · Gratis · hito H0*

- **De dónde sale:** Lección 02 actual.
- **Al terminar:** Le pides cada paso de Git con precisión, ves el alcance de un diff y llevas un cambio hasta un PR.
- **Ideas:**
  1. Los cuatro lugares por donde pasa un cambio, y qué entra en un commit.
  2. Ramas y sincronizar: push, fetch, pull, merge, rebase y stash.
  3. GitHub y PRs: push, mezclar y desplegar son pasos distintos. Un CI en rojo que no corrió nada no es culpa del código.
  4. El alcance de un diff: qué archivos cambiaron y qué no se pidió. El agente explica cada bloque.
  5. Deshacer sin miedo y leer la historia.
  6. Permisos precisos: el permiso nombra la acción y el PR.
- **Vocabulario:** commit, rama, staging, stash, PR, CI, merge, rebase, conflicto, diff, revert.
- **Flowchart o pseudocódigo:** Viene casi listo: rama → commits → push → PR en borrador → CI → mezclar con permiso. Tú completas qué haces si el CI queda en rojo y cómo redactas el permiso.
- **Construcción dirigida:** Cierra H0: un repo con tu script, tu página y tus 20 peticiones, y un cambio completo dando solo indicaciones: rama, commits, PR en borrador y CI.
- **Cómo se comprueba:** El PR toca solo los archivos pedidos. Dices con tus palabras qué cambió cada bloque, según la explicación del agente. Deshaces un commit con `revert`, y la historia lo muestra.
- **Qué evita:** Mezclar o desplegar sin querer, perder trabajo y aceptar cambios que no pediste.
- **Visual:** Canvas: los cuatro lugares de Git.
- **Fuentes:** Guía de estudio §1, ya escrita; roadmapv2, paso 3; roadmapv3 (un solo repo como portafolio); Nota, bloque 2.
- **Ojo:** En el Tronco el diff se mira por alcance. Leer código para cazar errores queda solo para el Camino Modelos.

### Módulo 2. Software para dirigir

#### 5. Python como lenguaje técnico

*Esencial · Reordenada · 25 min + 1,5 h · Gratis · hito H1*

- **De dónde sale:** Lección 01 actual, ampliada con roadmapv4 y roadmapv7; suma depurar.
- **Al terminar:** Lees pseudocódigo, pides lógica en términos de funciones, clases, estructuras de datos y errores, y depuras dando evidencia.
- **Ideas:**
  1. Funciones: entrada, salida y efectos secundarios.
  2. Estructuras de datos: listas, diccionarios y cuándo usar cada una.
  3. Clases y objetos: cuándo ayudan y cuándo sobran.
  4. Errores: qué pasa cuando algo falla y cómo se maneja.
  5. Librerías: reusar en vez de reescribir.
  6. Depurar: reproducir el error, leer el mensaje, aislar la causa y pedir el arreglo con esa evidencia.
- **Vocabulario:** función, argumento, retorno, efecto secundario, lista, diccionario, clase, excepción, librería, traceback, depurar.
- **Flowchart o pseudocódigo:** Viene casi listo: pseudocódigo de `normalizar(peticion)`: limpiar el texto, detectar el idioma y extraer los datos. Tú completas qué pasa con una petición vacía o rota.
- **Construcción dirigida:** El normalizador de peticiones, primera pieza de entrada de tu sistema. El agente lo implementa en Python a partir de tu pseudocódigo.
- **Cómo se comprueba:** 5 peticiones de ejemplo dan la salida que predijiste. Una petición rota da un error claro. Rompes el módulo a propósito y, con el mensaje de error, nombras la función y la causa antes de pedir el arreglo.
- **Qué evita:** Pedir «arréglalo» sin poder nombrar qué parte falla.
- **Visual:** Figura: una función como caja, con entrada, salida y efectos.
- **Fuentes:** roadmapv7 (Python y debugging); roadmapv4, video 2, bloque 1; Scrimba, Learn Python (recurso de roadmapv4); Nota, «Regla de tecnologías»; Tabla de 969 avisos (job_market_validation).
- **Ojo:** roadmapv7 y roadmapv4 piden poder escribir código sin IA, y Academy decidió lo contrario (pedido 75). Es un límite real: Python se menciona en 273 avisos de productos (59 %) y 322 de modelos (64 %), y la habilidad explícita de programar en 148 (32 %) y 211 (42 %).

#### 6. Un proyecto de software por dentro

*Esencial · Reordenada · 20 min + 1 h · Gratis · hito H1*

- **De dónde sale:** Lección 01 actual; roadmapv4.
- **Al terminar:** Entiendes cómo se ordena un proyecto, y le pides estructura, dependencias y tests con precisión.
- **Ideas:**
  1. Estructura de carpetas y módulos.
  2. Entornos virtuales y dependencias: por qué fijar versiones.
  3. Configuración: archivos de configuración y `.env`.
  4. Tests unitarios y de integración: qué prueba cada uno.
  5. Python y TypeScript: qué cambia cuando pides uno u otro.
- **Vocabulario:** entorno virtual, dependencia, lockfile, `pyproject.toml`, test unitario, test de integración, mock.
- **Flowchart o pseudocódigo:** Viene casi listo: el árbol del proyecto, con carpetas de código, tests y configuración. Tú completas dónde va cada pieza de tu sistema.
- **Construcción dirigida:** Convertir el normalizador en el proyecto base de tu sistema, con dependencias fijadas, configuración y tests.
- **Cómo se comprueba:** En una carpeta nueva, un clon limpio instala todo y pasa los tests con un solo comando. Quitas una dependencia a propósito, y la instalación o los tests fallan.
- **Qué evita:** Dependencias inventadas por el modelo, y el «en mi máquina funciona».
- **Visual:** Figura: el árbol del proyecto y para qué sirve cada archivo.
- **Fuentes:** roadmapv4, video 2, bloque 1; Nota, bloque 1; Tabla de 969 avisos (job_market_validation).
- **Ojo:** TypeScript se menciona en 161 avisos de productos (35 %) y 20 de modelos (4 %). Son menciones, no exigencias.

#### 7. HTTP, APIs y JSON

*Esencial · Reordenada · 20 min + 1 h · Centavos · hito H1*

- **De dónde sale:** Lección 01 actual; roadmapv7.
- **Al terminar:** Lees un pedido y una respuesta HTTP, y sabes qué significa cada código de estado.
- **Ideas:**
  1. Qué es una API: pedido y respuesta.
  2. Métodos, headers y cuerpo. REST es una forma común de ordenarlos.
  3. Códigos de estado: 200, 400, 401, 404, 429 y 500.
  4. JSON como idioma común.
  5. Llamar a un LLM es una llamada HTTP más.
- **Vocabulario:** endpoint, método, header, cuerpo, REST, código de estado, JSON, `curl`, idempotente.
- **Flowchart o pseudocódigo:** Viene casi listo: cliente → pedido (método, URL, headers y cuerpo) → servidor → respuesta (código y cuerpo). Tú completas qué lleva cada campo en tu llamada de H0.
- **Construcción dirigida:** Repetir tu llamada de H0 con `curl`, y forzar a propósito un 401 y un 400. El agente arma el comando, y tú guardas en el repo qué significó cada error.
- **Cómo se comprueba:** Predices el código de estado antes de cada llamada. Explicas cada error, y qué le dirías al agente para resolverlo.
- **Qué evita:** Que el agente reintente sin parar un error que no se arregla reintentando.
- **Visual:** Escena: armar un pedido y ver la respuesta, con respuestas medidas.
- **Fuentes:** roadmapv7 (HTTP y REST); Nota, bloque 1; roadmapv3, semana 2; roadmapv6, Anthropic API fundamentals.

#### 8. Backend, autenticación y webhooks

*Esencial · Reordenada · 25 min + 1,5 h · Gratis · hito H1*

- **De dónde sale:** Lección 01 actual; roadmapv7 (backend básico).
- **Al terminar:** Pides un backend básico, decides cómo se autentica, dónde viven sus secretos y cómo reacciona a un evento.
- **Ideas:**
  1. Backend: rutas, lógica y datos detrás de una interfaz.
  2. Autenticar es saber quién eres. Autorizar es saber qué puedes hacer.
  3. API keys y OAuth: cuándo usar cada una.
  4. Secretos: variables de entorno, gestores y rotación.
  5. Webhooks: otro sistema te avisa, y verificas su firma.
- **Vocabulario:** backend, servidor, ruta, API key, OAuth, token, scope, secreto, rotación, webhook, firma.
- **Flowchart o pseudocódigo:** Viene casi listo: evento → webhook → ¿firma válida? → normalizar → responder. Tú completas qué responde cada rechazo y qué queda registrado.
- **Construcción dirigida:** La entrada de tu sistema: un backend con una ruta que recibe peticiones por webhook, verifica la firma y las pasa por el normalizador.
- **Cómo se comprueba:** Un pedido sin firma recibe un rechazo. Un pedido con firma pasa por el normalizador. Ningún secreto aparece en el repo ni en los registros.
- **Qué evita:** Secretos filtrados y endpoints abiertos a cualquiera.
- **Visual:** Figura: el flujo de un webhook.
- **Fuentes:** roadmapv7 (autenticación y backend básico); Nota, bloque 1 y su práctica.

#### 9. Bases de datos y SQL

*Esencial · Nueva · 25 min + 2 h · Gratis · hito H1 · se comparte con `ds/03`*

- **De dónde sale:** roadmapv7; falta detectada en la auditoría; Text-to-SQL de la 05 actual.
- **Al terminar:** Diseñas tablas, le pides consultas SQL al agente por su nombre técnico y compruebas sus resultados.
- **Ideas:**
  1. Una base de datos guarda lo que debe sobrevivir a un reinicio.
  2. Tablas, filas, columnas y claves: cómo se relacionan los datos.
  3. SQL pregunta: filtrar, unir tablas, agrupar y contar.
  4. Índices para leer rápido, y transacciones para no dejar cambios a medias.
  5. Migraciones: cambiar la estructura sin perder datos.
  6. Text-to-SQL: el LLM propone la consulta, y sus permisos son de solo lectura.
- **Vocabulario:** tabla, clave primaria, clave foránea, `SELECT`, `WHERE`, `JOIN`, `GROUP BY`, índice, transacción, migración, Text-to-SQL.
- **Flowchart o pseudocódigo:** Viene casi listo: el diagrama de tablas peticiones → corridas → resultados, con sus claves. Tú completas las columnas que necesita tu proyecto.
- **Construcción dirigida:** La base de datos de tu sistema, por ejemplo con Postgres o Supabase. El backend guarda cada petición, y el agente traduce a SQL 3 preguntas tuyas en español.
- **Cómo se comprueba:** Reinicias el backend, y los datos siguen ahí. Con 5 filas de prueba, predices el resultado de cada pregunta, y coincide. Pides un borrado con el usuario de solo lectura, y falla.
- **Qué evita:** Perder datos, y que un LLM con permisos de escritura borre una tabla.
- **Visual:** Figura: dos tablas unidas por una clave, y lo que devuelve un `JOIN`.
- **Fuentes:** roadmapv7 (SQL y bases de datos); Auditoría de cobertura, sección 10; Nota, bloques 4 y 5; Tabla de 969 avisos (job_market_validation).
- **Ojo:** SQL se menciona en 47 avisos de productos (10 %) y 45 de modelos (9 %). Entra por roadmapv7 y porque el proyecto y Text-to-SQL lo usan.

#### 10. De la idea a la spec: un diseño que el agente no degrade

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H1*

- **De dónde sale:** Lecciones 09 y 10 actuales; MIT «Vibe or spec»; CS146S 2026 semana 2.
- **Al terminar:** Escribes una spec con usuario, restricciones, entradas, salidas y métrica, y diseñas módulos que el agente no degrade.
- **Ideas:**
  1. Vibe o spec: cuándo alcanza explorar y cuándo hace falta una spec.
  2. Alinear antes de construir: que el agente te interrogue, y un PRD.
  3. Glosario del dominio: el mismo lenguaje para ti y para el agente.
  4. Complejidad y entropía: cada cambio sin diseño la aumenta.
  5. Módulos profundos: tú diseñas la interfaz, y el agente llena el interior.
- **Vocabulario:** spec, PRD, requisito, métrica de éxito, lenguaje ubicuo, módulo profundo, interfaz, acoplamiento, deuda técnica.
- **Flowchart o pseudocódigo:** Viene casi listo: entrada → enrutador → especialistas (investigar, escribir código, RAG y auditar) → salida, dentro de un harness. Tú completas la interfaz de 3 módulos en pseudocódigo.
- **Construcción dirigida:** La spec de Tu sistema multi-agente, adaptada a tu proyecto: PRD de una página, glosario, lo que queda fuera y la interfaz de 3 módulos.
- **Cómo se comprueba:** Una sesión nueva de un LLM lee solo la spec y no encuentra ambigüedades sin resolver. Explicas cada interfaz sin abrir el código.
- **Qué evita:** Que el agente decida por ti, y un código que se vuelve imposible de cambiar.
- **Visual:** Figura: módulo profundo y módulo superficial.
- **Fuentes:** roadmapv6, MIT 6.S950 («Vibe or spec»); Stanford CS146S 2026, semana 2; Nota, bloques 9 y 10; Matt Pocock, en la biblioteca; John Ousterhout, A Philosophy of Software Design.

#### 11. Verificar y preparar tu repo para el agente

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H1*

- **De dónde sale:** Lección 10 actual; roadmapv5 proyecto 1; CS146S 2026 semana 5.
- **Al terminar:** Tu repo comprueba solo el trabajo del agente, y la siguiente sesión retoma donde quedó.
- **Ideas:**
  1. El agente rinde según cómo pueda comprobar su trabajo.
  2. Sensores: tipos, tests y linters.
  3. `AGENTS.md` o `CLAUDE.md`: corto, con lo que el agente no puede adivinar.
  4. Archivo de progreso: lo que la próxima sesión necesita saber.
  5. Reglas que se cumplen solas: patrones dorados, hooks y CI.
  6. Un repo se puede puntuar según qué tan listo está para un agente.
- **Vocabulario:** sensor, linter, tipos estáticos, TDD, hook, pre-commit, CI, patrón dorado, agent-readiness.
- **Flowchart o pseudocódigo:** Viene casi listo: cambio del agente → tipos → tests → linter → ¿pasa? → sigue o corrige. Tú completas qué regla propia de tu proyecto falta.
- **Construcción dirigida:** Cierra H1: el repo de tu sistema con `AGENTS.md` o `CLAUDE.md`, tests, linter, pre-commit y archivo de progreso. Lo puntúas antes y después, por ejemplo con el informe de agent-readiness de Factory.
- **Cómo se comprueba:** Rompes una regla a propósito, y el chequeo falla. Una sesión nueva lee el progreso y sigue sin preguntarte. El puntaje sube, y dices qué lo subió.
- **Qué evita:** Errores que el agente no ve, y repetir el mismo contexto en cada sesión.
- **Visual:** Escena: meter un cambio malo y ver qué sensor lo detiene.
- **Fuentes:** roadmapv5, proyecto 1; OpenAI, Harness engineering (copia archivada e InfoQ); Stanford CS146S 2026, semanas 4 y 5, y tarea 5; roadmapv6, Anthropic Claude Code in Action; Lauren Tan y Kyle Mistele, en la biblioteca.
- **Ojo:** El caso de OpenAI con 0 líneas manuales lo hicieron ingenieros de OpenAI, y su millón de líneas incluye documentación e infraestructura. Muestra un método, no que funcione partiendo de cero.

### Módulo 3. La IA por dentro

#### 12. La matemática del ML, en intuición

*Esencial · Nueva · 25 min + 1 h · Centavos · hito H2 · se comparte con `ml/01`*

- **De dónde sale:** roadmapv4; roadmapv7.
- **Al terminar:** Reconoces vectores, probabilidad y gradientes cuando aparecen, sin calcular a mano.
- **Ideas:**
  1. Vectores: una lista de números que representa algo.
  2. Similitud entre vectores: la base de los embeddings.
  3. Probabilidad y distribuciones: lo que el modelo calcula antes de cada palabra.
  4. Estadística: promedio, variación, muestra y cuándo una diferencia es azar.
  5. Derivadas y gradiente: hacia dónde ajustar para equivocarse menos.
- **Vocabulario:** vector, dimensión, similitud coseno, distribución, muestra, varianza, gradiente.
- **Flowchart o pseudocódigo:** Viene casi listo: dos vectores → ángulo entre ellos → un número de similitud. Tú completas qué pares de tus peticiones deberían salir parecidos.
- **Construcción dirigida:** Sumar a los datos de H2 un mapa de calor: el agente calcula la similitud entre 10 peticiones tuyas.
- **Cómo se comprueba:** Predices qué pares se parecen antes de ver el mapa, y explicas los que fallaron.
- **Qué evita:** Aceptar explicaciones o gráficos que no sabes leer.
- **Visual:** Canvas con ManimGX: vectores, similitud y distribuciones.
- **Fuentes:** roadmapv7 (estadística y matemática); roadmapv4, video 2, bloque 2; 3Blue1Brown, Essence of Linear Algebra y Essence of Calculus; roadmapv6, MIT 6.S191 (requisitos).

#### 13. Entrenar, validar y probar

*Esencial · Nueva · 30 min + 3 h · Gratis · hito H2 · se comparte con `ml/02`*

- **De dónde sale:** roadmapv3 semana 6; roadmapv4; roadmapv7 (NumPy, Pandas, Scikit-learn; primer proyecto de ML).
- **Al terminar:** Entrenas por indicaciones un clasificador propio, y reconoces un resultado demasiado bueno para ser cierto.
- **Ideas:**
  1. Supervisado aprende de ejemplos con etiqueta. No supervisado busca grupos sin etiqueta.
  2. Entrenar, validar y probar: los datos se separan para medir con lo que el modelo no vio.
  3. Overfitting: aprende de memoria. Underfitting: no alcanza a aprender.
  4. Precision: cuántas de las marcadas eran correctas. Recall: cuántas de las correctas encontró.
  5. Fuga de datos: una respuesta se cuela en el entrenamiento e infla la nota.
  6. NumPy calcula, Pandas ordena tablas y Scikit-learn entrena. Los nombras, y el agente los usa.
- **Vocabulario:** dataset, feature, etiqueta, predicción, set de entrenamiento, set de validación, set de prueba, overfitting, underfitting, precision, recall, fuga de datos, línea base, NumPy, Pandas, Scikit-learn.
- **Flowchart o pseudocódigo:** Viene casi listo: datos → separar → línea base → entrenar → validar → ¿overfitting o underfitting? → probar una vez. Tú completas qué error cuesta más: marcar simple una compleja, o al revés.
- **Construcción dirigida:** H2, tu primer proyecto de ML: un clasificador de peticiones, simple o compleja, entrenado con al menos 100 peticiones que etiquetas tú. Será la primera decisión del enrutador.
- **Cómo se comprueba:** Provocas una fuga de datos: la nota sube demasiado, y explicas por qué. Comparas entrenamiento y prueba, y dices si hay overfitting o underfitting. Mides precision y recall de la clase compleja, y le ganas a la línea base.
- **Qué evita:** Creerle a una métrica inflada, y mirar solo una nota general.
- **Visual:** Canvas con ManimGX: descenso de gradiente, overfitting y underfitting. Escena: mover el umbral y ver precision y recall.
- **Fuentes:** roadmapv7 (ML y primer proyecto); roadmapv4, video 2, bloque 3; roadmapv3, semana 6; Google, Machine Learning Crash Course; Kaggle Learn, Intro to Machine Learning.

#### 14. Redes neuronales desde la base

*Esencial · Nueva · 30 min + 2 h · Gratis · hito H2 · se comparte con `ml/08`*

- **De dónde sale:** roadmapv7 (deep learning); Karpathy; MIT 6.S191.
- **Al terminar:** Explicas cómo aprende una red neuronal, y diriges un entrenamiento mirando su curva de pérdida.
- **Ideas:**
  1. Una neurona combina entradas con pesos y aplica una función no lineal.
  2. Las capas apiladas aprenden relaciones más complejas.
  3. Un tensor es una tabla de números con cualquier cantidad de dimensiones.
  4. Entrenar: pasada hacia adelante, pérdida, backpropagation y ajuste de pesos.
  5. Tasa de aprendizaje, lote y época controlan ese ajuste.
  6. PyTorch hace este trabajo. Lo nombras, y el agente lo usa.
- **Vocabulario:** neurona, peso, capa, función de activación, tensor, pérdida, backpropagation, tasa de aprendizaje, lote, época, PyTorch.
- **Flowchart o pseudocódigo:** Viene casi listo: tensores → red → pérdida → backpropagation → ajustar pesos → ¿baja la pérdida? → repetir. Tú completas qué mirarías si la pérdida no baja.
- **Construcción dirigida:** Competidor para H2: el agente entrena una red chica en PyTorch con tus mismas peticiones. Si no gana, H2 sigue siendo el clasificador simple.
- **Cómo se comprueba:** Con una tasa de aprendizaje exagerada, la pérdida no baja, y predijiste ese resultado. Una tabla compara precision y recall de la red y del clasificador simple en el set de prueba.
- **Qué evita:** Usar una red cuando un modelo simple daba lo mismo, y tratar el deep learning como magia.
- **Visual:** Canvas con ManimGX: una red que ajusta sus pesos mientras baja la pérdida.
- **Fuentes:** roadmapv7 (deep learning); Karpathy, Neural Networks: Zero to Hero (recurso de roadmapv3); roadmapv6, MIT 6.S191; fast.ai, Practical Deep Learning for Coders (recurso de roadmapv3); Tabla de 969 avisos (job_market_validation).
- **Ojo:** PyTorch se menciona en 25 avisos de productos (5 %) y 203 de modelos (40 %). Aquí se entiende. Lo hondo queda en el Camino Modelos.

#### 15. Atención y el Transformer

*Esencial · Nueva · 30 min + 2 h · Gratis · hito H2 · se comparte con `ml/10`*

- **De dónde sale:** roadmapv7 (atención); Karpathy; Raschka; CS224N.
- **Al terminar:** Explicas qué hace la atención y las partes de un Transformer, y conectas eso con lo que ves al usar un LLM.
- **Ideas:**
  1. Embeddings: cada token entra como un vector.
  2. Atención: cada token calcula a qué otros tokens mirar, y cuánto.
  3. Consulta, clave y valor: de dónde sale ese peso, en concepto.
  4. Sin información de posición, el modelo no conoce el orden.
  5. Un Transformer apila bloques de atención y capas simples.
  6. Inferencia: el modelo entrenado predice el siguiente token, uno a la vez.
- **Vocabulario:** embedding, atención, autoatención, consulta, clave y valor, multi-head, codificación de posición, bloque, Transformer, inferencia.
- **Flowchart o pseudocódigo:** Viene casi listo: tokens → embeddings y posición → atención → capas → probabilidades del siguiente token. Tú completas dónde entran la temperatura y la ventana de contexto.
- **Construcción dirigida:** Mejora para H2: el agente pasa tus peticiones por un Transformer abierto chico, muestra el mapa de atención de 3 y usa sus embeddings como features del clasificador.
- **Cómo se comprueba:** Predices qué palabras se miran entre sí, y explicas un acierto y un fallo. Una tabla compara H2 con y sin embeddings, y te quedas con la mejor por sus números.
- **Qué evita:** Decir «Transformer» sin poder explicar qué hace, y confundir el mapa de atención con una explicación completa del modelo.
- **Visual:** Canvas con ManimGX: los pesos de atención sobre una frase.
- **Fuentes:** roadmapv7 (atención y Transformers); Karpathy, Let's build GPT from scratch (recurso de roadmapv3); Raschka; CS224N; Attention Is All You Need (lo cita CMU 11-768, clase 3); Tabla de 969 avisos (job_market_validation).
- **Ojo:** Transformers se menciona en 10 avisos de productos (2 %) y 76 de modelos (15 %), y LLM en 267 (57 %) y 238 (47 %).

#### 16. Cómo funciona un LLM

*Esencial · Publicada · 20 min + 1 h · Centavos*

- **De dónde sale:** Lección 03 actual, publicada.
- **Al terminar:** Explicas por qué un LLM alucina, cuánto cuesta una conversación y por qué tarda.
- **Ideas:**
  1. Predice la siguiente palabra.
  2. Lee en tokens.
  3. Elige con un dado cargado.
  4. Solo ve lo que cabe en su ventana.
  5. Lee rápido y escribe lento.
- **Vocabulario:** token, tokenizador, temperatura, top-p, ventana de contexto, prefill, decode, alucinación.
- **Flowchart o pseudocódigo:** Viene casi listo: la figura del bucle de la lección: leer → calcular probabilidades → elegir un token → agregarlo → repetir. Tú completas dónde entran los tokens, la temperatura y la ventana.
- **Construcción dirigida:** Con tu script de H0, mides los tokens de una petición en español y en inglés, y la corres 10 veces a dos temperaturas. La tabla queda en el repo como base de tu presupuesto.
- **Cómo se comprueba:** Comparas tu diferencia entre idiomas con la de la lección, y explicas por qué no es igual. Cuentas cuántas respuestas distintas salen a cada temperatura, y coincide con lo que predijiste.
- **Qué evita:** Presupuestos mal calculados, y confiar en lo que solo suena probable.
- **Visual:** Ya tiene 5 escenas.
- **Fuentes:** Las fuentes ya publicadas en la lección; roadmapv2, paso 1; roadmapv3, semana 1; roadmapv6, Stanford CS329Z, clase 2.
- **Ojo:** La lección publicada usa un bot de soporte en sus ejemplos, y Fran la aprobó. Falta decidir si el cambio de proyecto llega también a esos ejemplos.

#### 17. De dónde sale un LLM y cuál usar

*Esencial · Reordenada · 20 min + 1,5 h · Centavos · hito H3*

- **De dónde sale:** Pendientes de la 03 actual; decisión prompting, RAG o fine-tuning.
- **Al terminar:** Sabes cómo se entrena un modelo en 3 pasos, y decides entre prompting, RAG y fine-tuning.
- **Ideas:**
  1. Los 3 pasos: pre-entrenamiento, ajuste con instrucciones y alineación con preferencias.
  2. Modelos que razonan: qué ganan y qué cuestan.
  3. Modelos abiertos y cerrados: licencia, privacidad y costo.
  4. Una model card dice cómo se entrenó un modelo y para qué sirve.
  5. Prompting, RAG o fine-tuning: se parte por prompting, y cada capa entra cuando un problema medido la pide.
- **Vocabulario:** pre-entrenamiento, SFT, RLHF, pesos abiertos, licencia, fine-tuning, model card.
- **Flowchart o pseudocódigo:** Viene casi listo: prompting → ¿falta información? → RAG → ¿falla el comportamiento? → fine-tuning. Tú completas cada rama con un caso de tu proyecto.
- **Construcción dirigida:** Probar un modelo abierto, por ejemplo de Hugging Face, y uno por API con tus 20 peticiones. Escribes qué modelo usará tu sistema y por qué.
- **Cómo se comprueba:** La decisión trae tus propios números de calidad, costo y latencia.
- **Qué evita:** Elegir por fama, y hacer fine-tuning cuando lo que faltaba era contexto.
- **Visual:** Figura: los 3 pasos del entrenamiento.
- **Fuentes:** Nota, bloques 3 y 4; Marina Wyss, AI Engineering en 76 minutos; roadmapv3, semana 6; roadmapv6, Hugging Face LLM Course; Tabla de 969 avisos (job_market_validation).
- **Ojo:** Fine-tuning se menciona en 57 avisos de productos (12 %) y 111 de modelos (22 %).

### Módulo 4. Nivel 1: App con un LLM

#### 18. Prompting técnico

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H3*

- **De dónde sale:** Lección 09 actual; roadmapv2; roadmapv3.
- **Al terminar:** Diseñas un prompt, lo versionas y mides si un cambio ayudó.
- **Ideas:**
  1. Prompt de sistema y de usuario: qué va en cada uno.
  2. Ejemplos: cero, uno o pocos (few-shot).
  3. Formato de salida y división en subtareas.
  4. Darle espacio para razonar.
  5. Anti-alucinaciones: anclar en fuentes, pedir citas y permitir «no lo sé».
  6. Los prompts son experimentos: versión, prueba y comparación.
- **Vocabulario:** prompt de sistema, few-shot, rol, chain-of-thought, grounding, prompt defensivo, versión de prompt.
- **Flowchart o pseudocódigo:** Lo dibujas tú: petición → versión del prompt → modelo → comparar con la etiqueta → ¿mejoró? → quedarse o volver. Sumas una tabla de 3 versiones: qué cambia y qué esperas.
- **Construcción dirigida:** 3 versiones del prompt del enrutador, guardadas en el repo. Decide si la petición es simple o compleja, y compite con tu clasificador H2.
- **Cómo se comprueba:** Mides las 3 con 20 peticiones etiquetadas, y te quedas con la mejor por sus números. Comparas esa nota y su costo con los de H2.
- **Qué evita:** Retocar prompts a ojo y no saber si mejoraron.
- **Visual:** Escena: pasar de 0 a 3 ejemplos y ver cómo cambia la clasificación, con datos medidos.
- **Fuentes:** roadmapv2, paso 2; roadmapv3, semana 2; roadmapv4, video 2, bloque 4; roadmapv6, Anthropic, tutorial de prompting; Phoenix y Taylor, Prompt Engineering for Generative AI; Nota, bloque 9.

#### 19. Context engineering

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H3*

- **De dónde sale:** Lección 09 actual; Stanford, CMU, Google.
- **Al terminar:** Decides qué ve el modelo en cada llamada, y qué no.
- **Ideas:**
  1. La ventana es memoria de trabajo: el mínimo de tokens con más señal.
  2. La pila de contexto: instrucciones, pedido, hechos, herramientas, notas, memoria y formato.
  3. 4 fallas: envenenamiento, distracción, confusión y choque entre fuentes.
  4. 4 técnicas: escribir, seleccionar, comprimir y aislar.
  5. Lo crítico no vive en el historial, y la caché del prompt ahorra lo que se repite.
  6. Memoria en 3 niveles: pesos del modelo, ventana y fuentes externas.
- **Vocabulario:** ventana de contexto, compactación, offloading, caché de prompt, señal, presupuesto de contexto.
- **Flowchart o pseudocódigo:** Lo dibujas tú: petición → reunir piezas → ¿cabe en el presupuesto? → recortar o guardar afuera → llamar al modelo. Asignas tokens a cada pieza.
- **Construcción dirigida:** El presupuesto de contexto de tu app. Además, que respete una restricción dada en el primer mensaje cuando se recorta la conversación.
- **Cómo se comprueba:** Con la conversación recortada, la app respeta la restricción en 10 de 10 pruebas. Quitas a propósito la pieza que guarda la restricción, y las pruebas fallan.
- **Qué evita:** Apps que olvidan lo importante, y contextos llenos que se pagan en cada turno.
- **Visual:** Se reusa la escena «contexto» de la lección publicada, con presupuesto.
- **Fuentes:** roadmapv5, proyecto 2; roadmapv4, video 2, bloque 4; Stanford CS146S 2026, semana 2; roadmapv6, Stanford CS329Z, clase 2; CMU 11-768, clase 3; Google, 5-Day AI Agents, día 3 (secundario); Google Cloud Tech, Context engineering, en la biblioteca; Nota, bloque 5.
- **Ojo:** El término exacto se menciona en 23 avisos de productos (5 %) y 2 de modelos (0 %). Eso mide la palabra, no la habilidad.

#### 20. La llamada a la API por dentro

*Esencial · Reordenada · 20 min + 1,5 h · Centavos · hito H3*

- **De dónde sale:** Lección 04 actual; roadmapv3 semana 2.
- **Al terminar:** Tu app sobrevive a errores, límites y demoras del proveedor.
- **Ideas:**
  1. Mensajes y parámetros: qué mandas en cada llamada.
  2. Streaming: mostrar la respuesta mientras se escribe.
  3. Límites de uso y costo por llamada.
  4. Errores, reintentos con espera y tiempos límite.
  5. Respaldo: si un modelo falla, responde otro.
- **Vocabulario:** streaming, rate limit, backoff exponencial, timeout, fallback, idempotencia, tokens de entrada y salida.
- **Flowchart o pseudocódigo:** Lo dibujas tú: llamar → ¿error? → ¿se puede reintentar? → esperar y reintentar, o pasar al respaldo → registrar.
- **Construcción dirigida:** El cliente robusto de tu sistema: streaming, reintentos, tiempo límite y un modelo de respaldo. Todas las llamadas de H3 pasan por él.
- **Cómo se comprueba:** Simulas una caída y un límite de uso, y el registro muestra el reintento y el respaldo. Un 401 no se reintenta.
- **Qué evita:** Una app que se cae cuando falla el proveedor, y gastos sin control.
- **Visual:** Escena: provocar fallas y ver qué camino toma la llamada.
- **Fuentes:** roadmapv7 (streaming); roadmapv3, semana 2; roadmapv2, paso 1; BettaTech, en roadmapv4; roadmapv6, Anthropic API fundamentals; Nota, bloque 4.

#### 21. Salidas estructuradas y validación

*Esencial · Reordenada · 20 min + 1,5 h · Centavos · hito H3*

- **De dónde sale:** Lecciones 03 y 04 actuales; roadmapv2 proyecto 1.
- **Al terminar:** Obtienes JSON válido siempre, y sabes que eso no garantiza que el contenido sea correcto.
- **Ideas:**
  1. Un texto libre no sirve para actuar.
  2. Esquemas: definen la forma de la salida.
  3. Bucle de corrección: le devuelves al modelo el error exacto.
  4. Forma y contenido: una respuesta puede cumplir el esquema y estar mal.
- **Vocabulario:** JSON Schema, validación, structured output, bucle de corrección, Pydantic, Zod.
- **Flowchart o pseudocódigo:** Lo dibujas tú: respuesta → ¿cumple el esquema? → devolver el error, hasta un máximo de intentos → seguir o avisar.
- **Construcción dirigida:** La salida del enrutador pasa a JSON validado, por ejemplo con Pydantic o Zod: complejidad, especialista sugerido y datos de la petición.
- **Cómo se comprueba:** 20 peticiones dan JSON válido. Un error de forma se corrige solo. Encuentras un error de contenido que el esquema no detecta.
- **Qué evita:** JSON roto que tumba el flujo, y creer que válido significa correcto.
- **Visual:** Escena: romper el JSON y ver la corrección.
- **Fuentes:** roadmapv7 (salidas estructuradas); roadmapv2, proyecto 1; roadmapv3, semana 2; BettaTech, en roadmapv4; Nota, bloque 4.

#### 22. Tool calling: el modelo pide y tu código ejecuta

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H3*

- **De dónde sale:** Lecciones 03 y 06 actuales; roadmapv2 paso 4.
- **Al terminar:** Explicas el ciclo modelo → llamada → resultado → respuesta, y lo sigues en una traza.
- **Ideas:**
  1. El modelo solo propone en texto. Tu código decide y ejecuta.
  2. El ciclo: el modelo pide, tu código ejecuta, el resultado vuelve y el modelo responde.
  3. Una traza es el registro ordenado de una corrida: qué recibió el modelo, qué pidió, qué devolvió cada herramienta, con tokens y tiempo.
  4. Una buena herramienta: nombre, descripción y esquema, y un prompt que la tenga en cuenta.
  5. Solo lectura primero. Una herramienta en un flujo fijo todavía no es un agente.
  6. Cuando la herramienta falla, el error vuelve al modelo y no se inventa un resultado.
- **Vocabulario:** function calling, tool call, tool result, esquema de argumentos, tool choice, traza.
- **Flowchart o pseudocódigo:** Lo dibujas tú: pedir al modelo → ¿pidió herramienta? → ¿argumentos válidos? → ejecutar → agregar el resultado → repetir, hasta 3 vueltas → responder o escalar.
- **Construcción dirigida:** La primera herramienta de tu sistema, de solo lectura: consulta una petición guardada en tu base de datos. Cada corrida deja su traza.
- **Cómo se comprueba:** Lees la traza y señalas los 4 pasos. Si la petición no existe, el modelo lo dice sin inventar. Mandas argumentos inválidos a propósito, y la traza muestra el error devuelto.
- **Qué evita:** Que el modelo invente un dato que podía consultar, o que ejecute sin control.
- **Visual:** Escena: seguir una llamada a herramienta paso a paso en su traza.
- **Fuentes:** roadmapv2, paso 4, proyecto 2 y lista final; roadmapv3, semana 2; roadmapv6, Anthropic Tool use y Andrew Ng módulo 3; CMU 11-768, clase 2; Google, 5-Day AI Agents, día 2 (secundario); BettaTech, en roadmapv4; Tabla de 969 avisos (job_market_validation).
- **Ojo:** Tool calling se menciona en 79 avisos de productos (17 %) y 40 de modelos (8 %).

#### 23. Primeros evals: saber si funciona

*Esencial · Reordenada · 30 min + 3 h · Hasta USD 5 · hito H3*

- **De dónde sale:** Lección 13 actual; roadmapv5 proyecto 3; Anthropic.
- **Al terminar:** Tu app tiene una nota, y sabes si un cambio la mejora o la empeora.
- **Ideas:**
  1. Sin evals no hay mejora, solo cambios. La nota se liga a una métrica del negocio.
  2. Se parte con 20 a 50 tareas sacadas de fallas reales.
  3. 3 jueces: código, LLM y humano. El LLM juez prefiere sus propias respuestas, la primera opción y las más largas.
  4. Evals de capacidad y de regresión.
  5. Análisis de errores: abres las trazas, ves qué falla más y arreglas eso primero.
  6. Tests del software y evals del modelo: hacen falta los dos.
- **Vocabulario:** eval, dataset, grader, juez LLM, rúbrica, capacidad, regresión, análisis de errores.
- **Flowchart o pseudocódigo:** Lo dibujas tú: cambio → correr la suite → ¿subió la nota sin bajar otra? → quedarse o volver → registrar.
- **Construcción dirigida:** La suite de evals de H3: al menos 20 tareas escritas por ti, que corre antes de cada cambio con una herramienta, por ejemplo promptfoo.
- **Cómo se comprueba:** Un cambio malo a propósito baja la nota. Puedes decir: mi sistema saca X %. Abres la traza de una falla y dices en qué paso ocurrió.
- **Qué evita:** Mejoras que en realidad empeoran algo que no miraste.
- **Visual:** Escena: comparar dos versiones de un prompt, tarea por tarea.
- **Fuentes:** roadmapv5, proyecto 3; Anthropic, Demystifying evals for AI agents; roadmapv6, Anthropic Prompt evaluations y Andrew Ng módulo 4; roadmapv3, semana 5; CMU 11-768, tarea 2; Marina Wyss, proyecto desde cero; Nota, bloque 13; Tabla de 969 avisos (job_market_validation).
- **Ojo:** Según cómo se cuente: `eval` y `evals` aparecen en 90 avisos de productos (19 %) y 49 de modelos (10 %). Sumando `evaluation`, en 230 (49 %) y 263 (52 %).

#### 24. Elegir modelo y controlar el costo

*Esencial · Reordenada · 25 min + 2 h · Hasta USD 5 · hito H3*

- **De dónde sale:** Lecciones 04 y 12 actuales.
- **Al terminar:** Eliges el modelo con tus evals, y tu app no gasta más de lo que decidiste.
- **Ideas:**
  1. Atributos duros y blandos: licencia, privacidad, precio y calidad.
  2. Evals propios, no benchmarks públicos.
  3. AI gateway: una sola puerta, con reglas y presupuestos.
  4. Caché de respuestas y de prompts.
  5. En línea o por lotes, y medir el tiempo al primer token.
- **Vocabulario:** AI gateway, router de modelos, presupuesto, caché, batch, tiempo al primer token, dependencia de proveedor.
- **Flowchart o pseudocódigo:** Lo dibujas tú: pedido → gateway → regla por complejidad → modelo → ¿queda presupuesto? → seguir, cambiar o cortar → registrar.
- **Construcción dirigida:** Comparar 3 modelos con tu suite, y poner un gateway con presupuesto en tu app, por ejemplo LiteLLM u OpenRouter. El enrutador manda lo simple al modelo más barato que aprueba.
- **Cómo se comprueba:** Una tabla muestra nota, costo y latencia. Al pasar el presupuesto, el gateway corta o cambia de modelo.
- **Qué evita:** Usar el modelo más caro para todo, y las sorpresas en la factura.
- **Visual:** Escena: mover tráfico entre modelos y ver el costo y la nota.
- **Fuentes:** BettaTech, en roadmapv4; Marina Wyss, AI Engineering en 76 minutos; roadmapv6, Andrew Ng módulo 4; Harness engineering §9; Nota, bloques 4 y 12.

#### 25. De script a producto

*Esencial · Reordenada · 25 min + 3 h · Hasta USD 5 · hito H3*

- **De dónde sale:** Lecciones 04 y 01 actuales; roadmapv3 cierre.
- **Al terminar:** Tu app está en internet, con interfaz, datos, guardarraíles y registro de cada llamada.
- **Ideas:**
  1. La IA es una pieza más: interfaz, backend y base de datos.
  2. No todo tiene que ser un chat.
  3. Guardarraíles de entrada y salida: qué no entra y qué no sale.
  4. Registrar cada llamada: versión del prompt, modelo, tokens, costo y errores.
  5. Desplegar simple. Una demo y un producto para usuarios reales son cosas distintas.
- **Vocabulario:** frontend, backend, deploy, guardarraíl, registro estructurado, caché, cloud.
- **Flowchart o pseudocódigo:** Lo dibujas tú: la arquitectura capa por capa: interfaz → backend → guardarraíl → gateway → modelo y herramienta → base de datos → registro.
- **Construcción dirigida:** Cierra H3: tu app con LLM en internet. Usa el cliente robusto, la salida estructurada, una herramienta y la suite de evals, por ejemplo sobre Vercel o una nube.
- **Cómo se comprueba:** Otra persona la usa sin ayuda. Cada llamada aparece en el registro, con su traza. Una entrada que tu guardarraíl prohíbe queda bloqueada.
- **Qué evita:** Demos que solo funcionan en tu máquina.
- **Visual:** Figura: la arquitectura capa por capa.
- **Pregunta de entrevista:** ¿Cómo diseñarías un clasificador para 1.000 peticiones al día?
- **Fuentes:** roadmapv7 (producción); BettaTech, en roadmapv4; roadmapv4, nivel 1; roadmapv3, cierre y guardarraíles; Nota, bloque 4; Tabla de 969 avisos (job_market_validation).
- **Ojo:** Menciones en avisos de productos y de modelos: cloud 245 (53 %) y 178 (35 %), observabilidad 154 (33 %) y 105 (21 %), CI/CD 84 (18 %) y 54 (11 %), Docker 45 (10 %) y 37 (7 %).

### Módulo 5. Nivel 2: RAG con evals

#### 26. Indexar conocimiento

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H4*

- **De dónde sale:** Lección 05 actual; roadmapv7.
- **Al terminar:** Conviertes documentos en trozos buscables, y sabes por qué el orden de tus datos manda.
- **Ideas:**
  1. Primero, los datos: limpios, sin duplicados ni versiones viejas.
  2. Buscar palabras no basta cuando la pregunta usa otros términos.
  3. Trozos: con solapamiento o por estructura.
  4. Embeddings: de texto a vectores.
  5. Bases vectoriales: cuál y cuándo.
- **Vocabulario:** RAG, chunking, solapamiento, embedding, base vectorial, índice, metadatos, pgvector.
- **Flowchart o pseudocódigo:** Lo dibujas tú: documento → limpiar → trozos → embeddings → guardar con metadatos. Marcas dónde se elige el tamaño de trozo.
- **Construcción dirigida:** El conocimiento de tu especialista RAG de H4: indexar los documentos de tu proyecto con 2 tamaños de trozo, por ejemplo en pgvector.
- **Cómo se comprueba:** 5 preguntas traen el trozo correcto entre los primeros resultados, y comparas los 2 tamaños.
- **Qué evita:** Un RAG que alucina porque sus datos estaban viejos o mal cortados.
- **Visual:** Canvas con ManimGX: de texto a vector, y sus vecinos cercanos.
- **Fuentes:** roadmapv7 (RAG); BettaTech, en roadmapv4; roadmapv3, semana 3; roadmapv4, nivel 2; roadmapv6, Stanford CS329Z, clase 3; Nota, bloque 5; Tabla de 969 avisos (job_market_validation).
- **Ojo:** Bases vectoriales se menciona en 49 avisos de productos (11 %) y 22 de modelos (4 %), y embeddings en 49 (11 %) y 45 (9 %).

#### 27. Recuperar bien y responder con fuentes

*Esencial · Reordenada · 25 min + 3 h · Centavos · hito H4*

- **De dónde sale:** Lección 05 actual; roadmapv5 proyecto 4.
- **Al terminar:** Tu especialista trae lo que sirve y cita de dónde lo sacó.
- **Ideas:**
  1. Palabras clave, búsqueda semántica e híbrida.
  2. Cuántos trozos traer: top-k.
  3. Reordenar los resultados y reescribir la pregunta.
  4. Responder con citas, y decir «no lo sé».
  5. RAG o herramienta: lo estable y lo que cambia. Para datos en tablas, Text-to-SQL.
  6. RAG dentro de la API, RAG agéntico y GraphRAG: se comparan con tu caso.
- **Vocabulario:** BM25, búsqueda híbrida, top-k, reranking, reescritura de consulta, HyDE, cita, Text-to-SQL, RAG agéntico, GraphRAG.
- **Flowchart o pseudocódigo:** Lo dibujas tú: pregunta → reescribir → buscar → reordenar → armar contexto → ¿hay respaldo? → responder con citas o decir «no lo sé».
- **Construcción dirigida:** Tu especialista RAG con citas, llamado desde tu app. Tú escribes las preguntas tramposas.
- **Cómo se comprueba:** Cada respuesta trae su fuente, y la fuente dice eso. Si no está en tus documentos, dice que no lo sabe.
- **Qué evita:** Respuestas convincentes sin respaldo.
- **Visual:** Escena: mover top-k y ver qué entra y cuánto cuesta.
- **Fuentes:** roadmapv5, proyecto 4; OpenAI, Retrieval; Google, Gemini File Search; RAG_Techniques, solo para leer y citar; roadmapv3, semana 3; roadmapv6, Microsoft lección 5; Nota, bloque 5; Tabla de 969 avisos (job_market_validation).
- **Ojo:** RAG se menciona en 109 avisos de productos (23 %) y 36 de modelos (7 %).

#### 28. Evaluar un RAG

*Esencial · Reordenada · 25 min + 3 h · Hasta USD 5 · hito H4*

- **De dónde sale:** Lecciones 05 y 13 actuales.
- **Al terminar:** Sabes si falló la búsqueda o la respuesta, y lo arreglas en el lugar correcto.
- **Ideas:**
  1. Definir qué es «bueno» para quien pregunta.
  2. Evaluar la búsqueda: precision, recall, acierto@k y MRR.
  3. Evaluar la respuesta: fidelidad y relevancia.
  4. Romperlo a propósito.
- **Vocabulario:** precision, recall, acierto@k, MRR, fidelidad, relevancia, set de referencia, Ragas.
- **Flowchart o pseudocódigo:** Lo dibujas tú: respuesta mala → ¿llegó el trozo correcto? → no: arreglar la búsqueda → sí: arreglar el prompt → volver a correr la suite.
- **Construcción dirigida:** Cierra H4: evals para tu especialista RAG, con búsqueda y respuesta por separado, y preguntas normales y tramposas. Una herramienta posible es Ragas.
- **Cómo se comprueba:** Separas cada falla en búsqueda o respuesta, leyendo su traza. Un arreglo sube la nota sin bajar otra.
- **Qué evita:** Cambiar de modelo cuando el problema era que el trozo no llegó.
- **Visual:** Figura: qué falló, según lo que trajo y lo que respondió.
- **Pregunta de entrevista:** Diseña un RAG para el manual de una empresa con 10.000 documentos.
- **Fuentes:** roadmapv7 (evaluar la recuperación); roadmapv4, nivel 2; roadmapv3, semanas 3 y 5; roadmapv5, proyecto 4; Ragas; BettaTech, en roadmapv4.

#### 29. Productos o modelos: elige tu camino

*Esencial · Nueva · 25 min + 1,5 h · Centavos*

- **De dónde sale:** roadmapv7 (los dos caminos); pedido de Fran; 969 avisos reales; roles de Anthropic.
- **Al terminar:** Escribes tu decisión, productos o modelos, con evidencia de avisos reales y de tu propio trabajo.
- **Ideas:**
  1. AI engineer de productos: crea apps, RAG y agentes. Se menciona trato con clientes en 255 de sus 465 avisos (55 %).
  2. ML engineer: lleva modelos predictivos a producción, con pipelines, Docker, CI/CD y monitoreo.
  3. Research engineer: construye la infraestructura y los experimentos con que se investiga. Anthropic pide buen software y PyTorch, y en un equipo, 5 a 10 años o más construyendo software.
  4. Research scientist: inventa métodos, corre experimentos y comunica resultados. Anthropic pide trayectoria científica, y sin publicaciones manda a postular a engineer.
  5. El conteo: 969 avisos, 465 de productos y 504 de modelos, separados por título. Son menciones por palabra clave en una muestra cargada a EE. UU. y a empresas de IA, no exigencias.
  6. Productos y modelos: agentes 368 (79 %) y 233 (46 %), RAG 109 (23 %) y 36 (7 %), PyTorch 25 (5 %) y 203 (40 %), optimización de inferencia 28 (6 %) y 126 (25 %), fine-tuning 57 (12 %) y 111 (22 %), PhD 21 (5 %) y 134 (27 %).
- **Vocabulario:** ML engineer, research engineer, research scientist, MLOps, fine-tuning, optimización de inferencia, agenda de investigación, boilerplate.
- **Flowchart o pseudocódigo:** Lo dibujas tú: qué quieres hacer cada día → qué avisos te interesan → qué piden → qué ya hiciste → qué te falta → productos, modelos o una combinación.
- **Construcción dirigida:** Tu decisión en una página, dentro del repo: camino elegido, 10 avisos reales del listado, lo que te falta y qué evidencia te haría cambiar. El agente extrae lo que pide cada aviso. Los dos caminos siguen con el bloque Compartido.
- **Cómo se comprueba:** Cada afirmación cita un aviso o una fila de la tabla. Un LLM intenta refutar tu decisión, y respondes con evidencia o corriges la página. Abres 3 avisos, y lo extraído coincide con su texto.
- **Qué evita:** Elegir por la fama del rol, y leer una mención como si fuera un requisito.
- **Visual:** Figura: las mismas habilidades en 2 columnas, productos y modelos, con sus conteos.
- **Fuentes:** roadmapv7 (los dos caminos); Feedback de Fran, parte 3; Tabla de 969 avisos (job_market_validation) y avisos_contados.csv; models_research_path, sección 3; Anthropic, avisos de Pre-training e Interpretability; Nota, tabla de ofertas de NeuralWorks, Suncast y Claro.
- **Ojo:** Esta muestra no mide Chile ni Latinoamérica por separado. Sin boilerplate, agentes baja a 318 (68 %) y 186 (37 %). Los avisos de research tienen un techo: «Strong software engineering skills» o «5-10+ years» no se cumplen dirigiendo un agente durante un curso, y el Camino Modelos deja leer código, nunca escribirlo.

### Módulo 6. Nivel 3: Agentes y su harness

#### 30. Workflow o agente

*Esencial · Reordenada · 25 min + 1,5 h · Centavos · hito H5*

- **De dónde sale:** Lecciones 04 y 11 actuales; Anthropic; Andrew Ng.
- **Al terminar:** Decides qué partes de tu sistema son workflow y cuáles son agente, y lo justificas con una medición.
- **Ideas:**
  1. Workflow si conoces los pasos. Agente si dependen de lo que encuentre.
  2. La autonomía tiene grados. Parte por el más bajo que resuelva la tarea.
  3. Patrones: encadenar, enrutar, paralelizar, orquestador-trabajadores y evaluador-optimizador.
  4. Orquestar con código es más predecible en velocidad, costo y resultado.
  5. Todo loop necesita una condición de término. No conocerla es 12,4 % de las fallas en MAST.
- **Vocabulario:** workflow, agente, prompt chaining, routing, orquestador, evaluador-optimizador, condición de término.
- **Flowchart o pseudocódigo:** Árbol de decisión: ¿conoces los pasos? → workflow. ¿Dependen de lo que encuentre? → agente con tope. Un flowchart por patrón.
- **Construcción dirigida:** En la spec de tu sistema, marca cada parte como workflow o agente. Pide construir una como workflow: pedido → clasificador H2 → especialista RAG H4 → respuesta con citas.
- **Cómo se comprueba:** Corres workflow y agente sobre las mismas 10 peticiones, y comparas acierto, tiempo y costo. Provocas un caso sin salida: el workflow termina y lo registra.
- **Qué evita:** Pagar un agente donde bastaba un flujo fijo.
- **Visual:** Escena: el mismo pedido pasa por cada patrón, con pasos y costo a la vista.
- **Fuentes:** Anthropic, Building effective agents; Andrew Ng, módulos 1, 2 y 5 (roadmapv6); OpenAI Agents SDK, Orquestación; MAST, arXiv 2503.13657.

#### 31. Automatizar un flujo

*Nueva · 20 min + 1,5 h · Centavos · hito H3*

- **De dónde sale:** roadmapv2 paso 6 y proyecto 4; webhooks de la 01, n8n y Make de la 11.
- **Al terminar:** Un flujo tuyo corre solo, deja registro, avisa cuando falla y no repite acciones.
- **Ideas:**
  1. Un flujo parte por un horario o por un evento.
  2. Se hace con código o con una herramienta visual, por ejemplo n8n o Make.
  3. Cada corrida deja registro.
  4. Ante una falla: reintentar, avisar y no repetir el efecto.
  5. Todo camino de respaldo silencioso necesita log y métrica.
- **Vocabulario:** cron, disparador, webhook, corrida, reintento, idempotencia.
- **Flowchart o pseudocódigo:** Flowchart: disparador → pasos → guardar resultado → ¿falló? → reintentar o avisar.
- **Construcción dirigida:** Pide que tu suite de evals de H3 corra cada noche, guarde el resultado y te avise si baja. Es un primer flujo sin humano sobre tu proyecto.
- **Cómo se comprueba:** Corre a la hora fijada durante 3 días. Rompes una dependencia a propósito y te llega el aviso. Repites una corrida y el efecto no se duplica.
- **Qué evita:** Automatizaciones que fallan en silencio o repiten acciones.
- **Visual:** Figura: el flujo con sus puntos de falla.
- **Fuentes:** roadmapv2, paso 6 y proyecto 4; roadmapv5, repo de Nexu; Nota, bloque 11; Guía de Fran §6.5 y §6.7.

#### 32. Anatomía de un harness

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H5*

- **De dónde sale:** Lección 06 actual; CS146S 2026 semana 1 (leer el tráfico real).
- **Al terminar:** Lees el tráfico o la transcripción de una sesión real, etiquetas cada evento y predices qué sobrevive a una compactación.
- **Ideas:**
  1. El harness es el sistema alrededor del modelo.
  2. Todos comparten un esqueleto: loop, herramientas, contexto, permisos y extensiones.
  3. Difieren en dónde vive la verdad: JSONL en Claude Code, SQLite en Amplio y un log append-only en DeepSeek Harness.
  4. En Claude Code, al compactar, CLAUDE.md raíz, memoria y plan vuelven desde disco.
  5. Las reglas con `paths:` se pierden hasta que se vuelven a disparar.
  6. Control mínimo: tope de iteraciones, presupuesto y corte de doom loops.
- **Vocabulario:** harness, agent loop, turn, step, system reminder, transcript JSONL, proxy, compactación, `/context`, `/compact`, doom loop.
- **Flowchart o pseudocódigo:** Flowchart del loop de 3 harnesses: Claude Code, DeepSeek Harness (abierto) y Amplio. Tabla con 8 columnas: loop, herramientas, contexto y compactación, memoria, permisos y sandbox, subagentes, recuperación y extensibilidad.
- **Construcción dirigida:** Corre una tarea real de tu repo. Pide un proxy o abre el JSONL de `~/.claude/projects/`, y etiqueta cada evento como contexto, acción, verificación o compactación. Es la lectura que guía tu H5.
- **Cómo se comprueba:** Escribes tu predicción, corres `/compact` y comparas con lo que quedó. Revisas tus 3 flowcharts contra la documentación de cada harness, y corriges lo que faltó.
- **Qué evita:** Tratar al agente como magia, y creer que todo lo dicho en la sesión sigue en contexto.
- **Visual:** Escena: correr el loop paso a paso, con contexto y costo creciendo, y compactar para ver qué queda.
- **Fuentes:** Stanford CS146S otoño 2026, semana 1 y tarea 1 (sesión real con proxy); Claude Code docs: How Claude Code works, Context window y Glossary; DeepSeek Harness, architecture.md y compaction.md; Amplio, step_model.md; Harness², README (definición); arXiv 2609.00006 (11 harnesses).
- **Ojo:** El tráfico y el JSONL pueden traer claves o datos privados. No los publiques.

#### 33. Diseñar herramientas y permisos

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H5*

- **De dónde sale:** Lecciones 06, 07 y 14 actuales; BYO Harness.
- **Al terminar:** Le das herramientas tipadas al agente, y nada irreversible corre sin aprobación, aunque falle quien aprueba.
- **Ideas:**
  1. 3 tipos de herramienta: consultar, ampliar y actuar.
  2. Solo lectura primero. Escritura después y con aprobación.
  3. Reglas en orden deny → ask → allow: gana la primera.
  4. Los modos deciden si pregunta. El sandbox decide qué alcanza.
  5. Fail-closed: si quien aprueba no responde, se deniega.
  6. Robusto no es seguro: Amplio se recupera de un crash y no tiene sandbox.
- **Vocabulario:** herramienta tipada, esquema, mínimos permisos, sandbox, human-in-the-loop, fail-closed, acción irreversible, dry-run.
- **Flowchart o pseudocódigo:** Flowchart: pidió herramienta → valida esquema → ¿regla? → denegar, preguntar o permitir → ejecutar → registrar.
- **Construcción dirigida:** Pide herramientas tipadas para tu agente: 2 de lectura y 1 de escritura, por ejemplo borrar archivos de una carpeta de pruebas. Agrega la compuerta de permisos. Es la primera pieza de H5.
- **Cómo se comprueba:** La escritura no corre sin aprobación en 10 intentos, según la traza. Apagas al aprobador: la acción queda denegada. Si rechazas, el agente sigue sin romperse.
- **Qué evita:** Que el agente haga cosas que no pediste, o que un modelo evalúe por sí solo el riesgo de sus propias acciones.
- **Visual:** Escena: simular permisos, modos y sandbox sobre la misma acción.
- **Fuentes:** BYO Harness, lección 02 (permission gate); Claude Code docs, Permission modes; DeepSeek Harness, approval.md; Amplio, README; OpenHands, Security; CMU 11-768, clase 2; Nota, bloques 6, 7 y 14.

#### 34. MCP: herramientas para cualquier agente

*Esencial · Reordenada · 25 min + 3 h · Centavos · hito H5*

- **De dónde sale:** Lecciones 06 y 07 actuales; roadmapv2; roadmapv5; revisión 2026-07-28.
- **Al terminar:** Conectas tu agente a un servidor MCP de confianza y creas uno propio con confirmación y login, en la revisión vigente.
- **Ideas:**
  1. MCP evita conectar cada herramienta con cada agente por separado.
  2. Piezas: host, cliente, servidor, herramientas, recursos y prompts.
  3. La revisión vigente es 2026-07-28: sin `initialize` ni sesiones, y `server/discover` obligatorio en el servidor.
  4. Una confirmación es una pregunta devuelta por una herramienta (Multi Round-Trip Requests).
  5. MCP no trae la capa de política. Los permisos siguen siendo tuyos.
  6. Un servidor externo es código y datos de terceros.
- **Vocabulario:** MCP, host, cliente, servidor, tool, resource, Streamable HTTP, elicitation, MRTR, `server/discover`, OAuth, CIMD, tool search.
- **Flowchart o pseudocódigo:** Diagrama de secuencia: agente → cliente → servidor → herramienta → pregunta de confirmación → resultado.
- **Construcción dirigida:** Conecta un servidor de confianza. Pide uno propio que exponga tu especialista RAG H4 y una acción de escritura, con confirmación y login, usando un SDK al día: por ejemplo el SDK de Python v2 o FastMCP v4.
- **Cómo se comprueba:** El agente no escribe sin confirmar. Sin login, el servidor rechaza. Anotas qué revisión usa tu SDK: debe ser 2026-07-28. Pides buscar `mcp.server.fastmcp` en el repo: es la forma 1.x y no debe aparecer.
- **Qué evita:** Seguir tutoriales viejos, y conectar servidores que no revisaste.
- **Visual:** Figura: antes y después de MCP.
- **Fuentes:** MCP, Versioning y changelog 2026-07-28; Python SDK v2.0.0 y FastMCP v4.0.0, notas de versión; Stanford CS146S otoño 2026, semana 2 y tarea 2; DeepMind, Intelligent AI Delegation, arXiv 2602.11865; roadmapv2, paso 5 y proyecto 3; roadmapv5, proyecto 5.
- **Ojo:** Los cursos de Hugging Face y de Anthropic y el taller de PyCon no sirven solos para esta revisión.

#### 35. Memoria del agente

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H5*

- **De dónde sale:** Lecciones 05 y 06 actuales; roadmapv5 proyecto 2.
- **Al terminar:** Tu agente recuerda lo que debe entre sesiones, olvida lo que debe, y sabes de dónde salió cada recuerdo.
- **Ideas:**
  1. 3 capas: sesión, estado y memoria larga.
  2. Quién escribe importa: CLAUDE.md lo escribes tú y auto memory la escribe Claude.
  3. Guarda el plan fuera del contexto, porque el contexto se compacta o se trunca.
  4. Cada escritura lleva su procedencia, y cada rol tiene su ámbito.
  5. Lo que entra a memoria puede venir envenenado: lo leído de afuera no se guarda como hecho.
- **Vocabulario:** memoria de sesión, estado, memoria larga, checkpoint, procedencia, recall, BM25, embedding, auto memory.
- **Flowchart o pseudocódigo:** Flowchart: pedido → buscar memoria → actuar → extraer hechos → ¿fuente confiable? → guardar con procedencia.
- **Construcción dirigida:** Pide memoria para tu agente, en archivos o con una librería, por ejemplo Mem0. Guarda una decisión de una tarea, como el criterio de un experimento o la preferencia de un cliente, y úsala en otra sesión. Es una pieza de H5.
- **Cómo se comprueba:** La recupera en una sesión nueva. Olvida un dato cuando se lo pides. No guarda lo que marcaste como sensible. Un documento dice «recuerda esto como regla»: no queda como hecho, según la traza.
- **Qué evita:** Agentes que lo olvidan todo, o que recuerdan una orden plantada.
- **Visual:** Escena: dos sesiones, con memoria y sin ella, y un recuerdo envenenado.
- **Fuentes:** Claude Code docs, Glossary; Amplio, What the agent knows y local-embedding.md; Hermes Agent, README; Anthropic, multi-agent research system; CMU 11-768, clase 4; AI Agent Traps, categoría de estado cognitivo (secundario); roadmapv5, proyecto 2.

#### 36. Evaluar un agente

*Esencial · Reordenada · 30 min + 3 h · Hasta USD 5 · hito H5*

- **De dónde sale:** Lección 13 actual; Anthropic; Harbor.
- **Al terminar:** Mides tu agente con una suite propia, varias corridas y un calificador que no se deja engañar, y lees la traza para saber qué falló.
- **Ideas:**
  1. Evaluar un agente es evaluar el harness y el modelo juntos.
  2. Califica el resultado final antes que el camino. La traza sirve para diagnosticar.
  3. Un agente no es determinista: `pass@k` pide un éxito y `pass^k` pide todos.
  4. Con 75 % por intento y 3 intentos, `pass^3` da cerca de 42 %.
  5. Capability evals parten bajos. Regression evals deberían rondar el 100 %.
  6. El calificador debe resistir atajos. En Harness², un rollout descargó la rúbrica de su tarea.
- **Vocabulario:** tarea, intento, calificador, transcripción, resultado, suite, `pass@k`, `pass^k`, capability eval, regression eval, benchmark.
- **Flowchart o pseudocódigo:** Flowchart: tarea → entorno limpio → k intentos → calificador de estado final → chequeos sobre la traza (costo, término, permisos) → reporte.
- **Construcción dirigida:** Pide una suite de 20 tareas salidas de fallas reales de tu agente, que corra antes de cada cambio. Después mide un agente hecho con un comando, por ejemplo Harbor. La suite es parte de H5.
- **Cómo se comprueba:** Empeoras una descripción de herramienta a propósito y la nota baja. Lees una traza fallida y dices si falló el plan, la herramienta o el modelo. El calificador queda fuera del alcance del agente: le pides que lo edite y no puede.
- **Qué evita:** Creer que funciona por una corrida buena, o exigir una secuencia exacta de pasos.
- **Visual:** Escena: leer una trayectoria y encontrar el paso malo.
- **Fuentes:** Anthropic, Demystifying evals for AI agents; CMU 11-768, tarea 2; Harbor, README; Harness², EXPERIMENTS.md; OpenAI, Evaluate agent workflows; Stanford CS329Z, clases 13 a 16 (roadmapv6, secundario).
- **Ojo:** Anthropic recomienda empezar con 20 a 50 tareas. El resto de los números de esta construcción son propuesta.

#### 37. Seguridad del agente

*Esencial · Reordenada · 30 min + 3 h · Centavos · hito H5*

- **De dónde sale:** Lección 14 actual; AI Agent Traps; CaMeL; OWASP agéntico.
- **Al terminar:** Atacas tu propio agente, y lo defiendes con diseño fuera del modelo.
- **Ideas:**
  1. Todo lo que viene de afuera es dato, nunca orden.
  2. Lo más riesgoso es juntar datos privados, contenido no confiable y acciones externas.
  3. 6 trampas por parte atacada: contenido, razonamiento, memoria, acción, sistema multi-agente y humano que revisa.
  4. CaMeL separa control y datos: resuelve 77 % de las tareas de AgentDojo con seguridad demostrable, contra 84 % sin defensa.
  5. La contención va en el ambiente: sandbox de archivos y de red, y permisos mínimos.
  6. Existe una lista propia para agentes: OWASP Top 10 for Agentic Applications, desde el 9 de diciembre de 2025.
- **Vocabulario:** prompt injection, inyección diferida, exfiltración, separación de control y datos, canario, red teaming, guardarraíl, OWASP.
- **Flowchart o pseudocódigo:** Flowchart: ¿de dónde viene este texto? → ¿confiable? → qué puede pedir → qué herramienta queda bloqueada.
- **Construcción dirigida:** Esconde una orden en un documento de tu especialista RAG H4 y otra en un resultado de herramienta, por ejemplo el README de un repo o un paper. Pide rediseñar hasta que no disparen nada. Esta suite pasa a H5.
- **Cómo se comprueba:** La traza muestra que el ataque no disparó ninguna acción. Un secreto canario y un host canario quedan sin acceso. Quitas la defensa a propósito y la prueba falla. Pasa una suite de red teaming, por ejemplo con promptfoo.
- **Qué evita:** Que un texto externo le dé órdenes a tu agente, o creer que un prompt lo impide.
- **Visual:** Escena: seguir un ataque desde un documento hasta una herramienta.
- **Fuentes:** CaMeL, arXiv 2503.18813: autores de Google y Google DeepMind al menos en los 8 primeros; OWASP Top 10 for Agentic Applications, 9 de diciembre de 2025; AI Agent Traps, Franklin, Tomašev, Jacobs, Leibo y Osindero, 2026: título y autores en Crossref; AI Agent Traps, las 6 categorías (secundario); Anthropic, Claude Code sandboxing; Stanford CS146S otoño 2026, semana 7; BettaTech, en roadmapv4.
- **Ojo:** Las cifras de éxito de ataques que la prensa atribuye a AI Agent Traps no se citan: no está confirmado que sean del paper. La lista completa de OWASP se lee en el original.

#### 38. Dirige la construcción de tu harness

*Esencial · Reordenada · 30 min + 8 h · USD 5 a 30 · hito H5*

- **De dónde sale:** Lección 07 actual; BYO Harness; CMU tarea 1; CS146S.
- **Al terminar:** Diriges la construcción de un arnés de un agente que aguanta 5 fallas provocadas, y sabes defenderlo.
- **Ideas:**
  1. Orden de construcción: loop, compuerta de permisos, proveedor, estado, compactación, herramientas y MCP.
  2. Un proveedor simulado responde sin llamar a un modelo: la suite de fallas repite igual y no gasta.
  3. La verdad vive en un log durable: toda petición al modelo se puede reconstruir desde ahí.
  4. Tres preguntas separan un juguete: ¿y si lo mato a mitad de una herramienta, si un resultado es gigante, si un archivo trae una orden?
  5. En 11 harnesses estudiados, ningún runtime importa un framework agéntico general: son loops hechos a medida.
- **Vocabulario:** agent loop, step, herramienta tipada, compuerta de permisos, proveedor simulado, log append-only, reanudar, idempotencia, traza JSONL, presupuesto, condición de término, doom loop.
- **Flowchart o pseudocódigo:** Spec, flowchart y pseudocódigo: pedir al modelo → ¿herramienta? → permiso → ejecutar → escribir al log → ¿presupuesto o término? → repetir. Además, la lista de fallas en lenguaje técnico.
- **Construcción dirigida:** Pide al LLM escribir H5 desde tu spec: loop, herramientas tipadas, permisos, memoria, MCP, traza, presupuesto y término, con proveedor simulado y real. Une las piezas de este nivel en un solo arnés.
- **Cómo se comprueba:** Permiso denegado: la traza muestra que no se ejecutó. `kill -9` a mitad de un paso: reanuda, y el efecto queda una sola vez en el estado final. Resultado gigante: no revienta el contexto y el loop sigue. Texto hostil en un archivo leído: no dispara ninguna acción. Tarea trampa que induce un doom loop: el arnés corta al llegar al tope. Quitas la compuerta a propósito: la primera prueba falla. El agente no puede editar la suite. Con modelo real, anotas tu línea base en 10 tareas de Terminal-Bench con Harbor.
- **Qué evita:** Un loop que funciona en la demo y duplica efectos al caerse, o un framework que no entiendes.
- **Visual:** Figura: las capas del arnés, con el punto donde actúa cada falla.
- **Pregunta de entrevista:** Tu agente se cae a mitad de una herramienta que escribe. ¿Qué pasa con el efecto y cómo reanudas? Si un archivo leído trae una orden, ¿qué pieza la detiene?
- **Fuentes:** BYO Harness, BettaTech: orden de 20 lecciones; BettaTech, proveedores mock (secundario); CMU 11-768, tarea 1 (Build an Agent Harness); Stanford CS146S otoño 2026, semana 1; DeepSeek Harness, architecture.md; Amplio, README; MAST, arXiv 2503.13657; arXiv 2609.00006.
- **Ojo:** La suite con proveedor simulado no gasta. El costo es dirigir la construcción y medir con modelo real. Las 10 tareas de Terminal-Bench son propuesta, y no hay datos de cuánto tarda o cuesta un estudiante. En multi_agent_project.md este hito se llama H1.

### Módulo 7. Dominar Claude Code

#### 39. Instrucciones y skills que sí funcionan

*Esencial · Reordenada · 25 min + 2,5 h · Hasta USD 5 · hito H6*

- **De dónde sale:** Lección 08 actual; docs de Claude Code; SkillsBench; CS146S 2026 semanas 3 y 4.
- **Al terminar:** Decides qué va en CLAUDE.md, en una skill o en otra pieza según su disparador, y mides si tu skill ayuda.
- **Ideas:**
  1. Cada pieza entra cuando aparece su disparador, no todas al inicio.
  2. CLAUDE.md corto: bajo 200 líneas. Las instrucciones cuestan contexto en cada sesión.
  3. En SkillsBench, las skills curadas suman 16,2 puntos de aprobación.
  4. Las autogeneradas restan 1,3 puntos de media: los modelos no escriben bien lo que les sirve leer.
  5. Pocas ganan: 2 a 3 skills dan +18,6, y 4 o más solo +5,9.
  6. Una skill sin mejora medida no se queda.
- **Vocabulario:** CLAUDE.md, AGENTS.md, `.claude/rules/`, output style, `SKILL.md`, progressive disclosure, `/skill-doctor`, plugin, línea base.
- **Flowchart o pseudocódigo:** Orden oficial por disparador: convención equivocada dos veces → CLAUDE.md; mismo formato → output style; mismo prompt → skill; mismo playbook a la tercera → skill; copiar datos de otro sistema → MCP; muchas lecturas para hallar un símbolo → code intelligence; tarea lateral que inunda → subagente; algo debe pasar siempre → hook; segundo repo → plugin.
- **Construcción dirigida:** Anota lo que repites y aplica la tabla. Pide un CLAUDE.md corto y una skill de verificación que tú curas, por ejemplo correr la suite o reproducir un experimento con semilla fija. Abre tu H6.
- **Cómo se comprueba:** Corres las mismas 5 tareas en worktree limpio, con y sin skill, y anotas cuántas pasan. Haces lo mismo con la versión autogenerada, sin curar. `/skill-doctor` muestra costo y uso. Si no ayuda, la retiras.
- **Qué evita:** Llenar el contexto de reglas y skills autogeneradas que nadie midió.
- **Visual:** Figura: la tabla de disparadores, con el costo en contexto de cada pieza.
- **Fuentes:** Claude Code docs, Extend Claude Code y Glossary; SkillsBench, arXiv 2602.12670; Stanford CS146S otoño 2026, semanas 3 y 4; ETH Zurich sobre AGENTS.md, arXiv 2602.11988 (secundario).
- **Ojo:** Falta confirmar si SkillsBench generó esas skills después de una trayectoria exitosa. Por eso se mide en tu caso. Las 5 tareas son propuesta.

#### 40. Hooks y control determinista

*Esencial · Reordenada · 20 min + 1,5 h · Centavos · hito H6*

- **De dónde sale:** Lección 08 actual; docs de Claude Code.
- **Al terminar:** Sabes qué no puede garantizar un prompt, y lo pones en un hook, un permiso o un sandbox.
- **Ideas:**
  1. Un prompt pide. No garantiza: «a prompt alone can't guarantee» que el agente no haga algo prohibido.
  2. CLAUDE.md y output style son instrucciones: ninguno se hace cumplir.
  3. Un hook dispara en un punto fijo, no a discreción del modelo.
  4. Un hook tiene 3 niveles: evento, matcher y handler.
  5. Con el mismo modelo, las instrucciones dejaron pasar lo que la capa de control bloqueó (270 corridas, 3 modelos).
  6. Las reglas duras, como compilador y CI, priman sobre los recordatorios.
- **Vocabulario:** hook, `PreToolUse`, `PostToolUse`, `Stop`, matcher, handler, determinista, sensor, control fuera de banda.
- **Flowchart o pseudocódigo:** Tabla: regla → ¿admite excepción? → si no admite, qué control la hace cumplir → en qué evento → qué ve el agente al fallar.
- **Construcción dirigida:** Pide un hook `PreToolUse` que bloquee lo prohibido, por ejemplo escribir en tus datos originales o leer secretos, y un hook `Stop` que corra tu verificación. Se suman a tu H6.
- **Cómo se comprueba:** Rompes la regla a propósito: el hook bloquea. Le pides al agente que se la salte: sigue bloqueado. Dejas una prueba fallando: la sesión no queda como terminada en verde.
- **Qué evita:** Confiar en una instrucción para algo que no admite excepción.
- **Visual:** Escena: la misma regla como prompt y como hook, sobre la misma tarea.
- **Fuentes:** Claude Code docs: Best practices, Hooks, Glossary y Extend; arXiv 2607.08028; Lauren Tan, taller (biblioteca de Fran); Kyle Mistele, Loop Engineering (biblioteca de Fran); Anthropic, how we contain Claude (secundario).

#### 41. Delegar: subagentes, equipos y workflows

*Esencial · Reordenada · 25 min + 2,5 h · Hasta USD 5 · hito H6*

- **De dónde sale:** Lecciones 07 y 11 actuales; docs de Claude Code.
- **Al terminar:** Eliges entre subagentes, worktrees, equipos y workflows respondiendo quién tiene el plan.
- **Ideas:**
  1. Subagente: contexto y permisos propios. Solo ve el mensaje de delegación y devuelve un resumen.
  2. Worktrees: cada agente escribe en su copia del repo, sin pisar a otro.
  3. Agent teams es experimental y viene apagado. Con compañeros en modo plan consume cerca de 7 veces los tokens.
  4. Dynamic workflows: un script orquesta subagentes, y los resultados intermedios viven en variables.
  5. Quién tiene el plan: en subagentes y equipos, Claude decide turno a turno. En workflows, el script.
  6. Paraleliza solo lo paralelizable: lo secuencial empeoró 39 a 70 %, y lo paralelizable mejoró hasta 80,9 % con orquestador.
- **Vocabulario:** subagente, fork, worktree, `isolation: worktree`, agent teams, dynamic workflow, `/batch`, `/workflows`, traspaso, fan-out.
- **Flowchart o pseudocódigo:** Árbol: ¿tarea secuencial o mismos archivos? → una sesión. ¿Tarea lateral que inunda? → subagente. ¿Cambios a la vez? → worktrees. ¿Agentes que deben coordinarse? → equipo. ¿Pasos fijos y repetibles? → workflow.
- **Construcción dirigida:** Investiga 3 fuentes con subagentes de solo lectura, por ejemplo 3 papers o 3 librerías. Haz 2 cambios en worktrees. Pide un workflow que repita una revisión. Anota el criterio en tu H6.
- **Cómo se comprueba:** Los worktrees se mezclan sin conflicto. `/context` muestra que el contexto principal no se llenó. La traza muestra que el subagente de lectura no escribió. `/workflows` muestra los tokens por agente, y los comparas con una sola sesión.
- **Qué evita:** Paralelizar trabajo secuencial, o aceptar que un agente apruebe un permiso por ti.
- **Visual:** Figura: quién tiene el plan en cada forma, y dónde quedan los resultados intermedios.
- **Fuentes:** Claude Code docs: Subagents, Run agents in parallel, Agent teams, Workflows y Costs; Google Research, Towards a science of scaling agent systems, arXiv 2512.08296; Factory, Missions; Cognition, Multi-agents working.
- **Ojo:** Agent teams es experimental y dynamic workflows es reciente. Se enseña la función, y el nombre es dato a noviembre de 2026.

#### 42. Trabajo sin supervisión

*Esencial · Reordenada · 25 min + 2,5 h · Hasta USD 5 · hito H6*

- **De dónde sale:** Lección 15 actual; Claude Code in Action; /goal, /loop y tareas programadas.
- **Al terminar:** Dejas al agente trabajando sin mirar, con un chequeo que decide cuándo terminó y evidencia para revisar después.
- **Ideas:**
  1. El verification loop es requisito: sin chequeo, «the only thing deciding the agent is finished is the agent itself».
  2. Modo no interactivo (antes `headless`): `claude -p`, con herramientas limitadas por `--allowedTools`.
  3. `/goal` hace que el término lo decida un modelo fresco, no el que hizo el trabajo. `/loop` repite un prompt.
  4. Scheduled tasks (antes `routines`, en research preview) parten por horario, API o GitHub. GitHub Actions corre al agente en tu CI.
  5. Sin humano, lo que no se puede aprobar se deniega.
  6. Verifica en proporción a lo poco que miraste. `/rewind` no deshace lo que hizo Bash.
- **Vocabulario:** verification loop, modo no interactivo, `claude -p`, `--allowedTools`, `/goal`, `/loop`, scheduled task, GitHub Actions, Stop hook, `pass^3`.
- **Flowchart o pseudocódigo:** Ficha previa a cada corrida: objetivo, comando de verificación, permisos, tope de costo, qué pasa si falla y dónde queda la evidencia.
- **Construcción dirigida:** Pide 3 corridas: `claude -p` en worktree limpio, un `/goal` con condición comprobable, y una scheduled task o GitHub Action que corra tus evals de H3. Se suman a tu H6.
- **Cómo se comprueba:** La misma tarea por `claude -p` en worktree limpio pasa los tests 3 de 3. Rompes la verificación a propósito: `/goal` no se da por cumplido. Una acción sin permiso se deniega sin que nadie responda. Lees el transcript de una corrida y encuentras el paso de verificación.
- **Qué evita:** Corridas largas que se declaran terminadas sin poder comprobarlo.
- **Visual:** Figura: las formas de correr sin supervisión, ordenadas por cuánto dejas de mirar.
- **Fuentes:** Claude Code docs: Goal, Routines, Glossary y Best practices; Anthropic, Claude Code in Action; DeepSeek Harness, approval.md; Hermes Agent, Security.
- **Ojo:** El 3 de 3 es propuesta, sin calibrar. Scheduled tasks está en research preview y puede cambiar.

#### 43. Optimizar tokens y créditos

*Reordenada · 20 min + 1 h · Centavos · hito H6*

- **De dónde sale:** Lección 12 actual.
- **Al terminar:** Bajas tu consumo sin perder calidad, y lo demuestras con tus números.
- **Ideas:**
  1. El contexto se reenvía en cada vuelta: `/context` muestra qué lo ocupa.
  2. `/clear` parte de cero. `/compact` resume. Sacar salidas a archivos deja solo una referencia.
  3. Las herramientas MCP y los cuerpos de skills se cargan bajo demanda.
  4. Un modelo por rol: modelo chico en los trabajadores, y caché con prefijo compartido.
  5. Más esfuerzo no siempre rinde: en Terminal-Bench 2.0, solo `xhigh` dio 53,9 % por timeouts, y `high` dio 63,6 %.
  6. Mide el costo de la tarea que pasa, no el de la llamada.
- **Vocabulario:** `/context`, `/clear`, `/compact`, `/autocompact`, offloading, prompt caching, effort, modelo por rol, costo por tarea.
- **Flowchart o pseudocódigo:** Tabla por tipo de tarea: tokens, costo, si pasó la verificación y qué ocupó el contexto.
- **Construcción dirigida:** Mide tu consumo durante una semana en el trabajo de tu sistema. Cambia una cosa a la vez y anota el efecto. El resultado se suma a tu H6.
- **Cómo se comprueba:** Comparas antes y después en 5 tareas parecidas: baja el costo y la verificación sigue en verde. `/skill-doctor` y `/workflows` confirman de dónde salió el ahorro.
- **Qué evita:** Gastar en contexto que nadie usa, o ahorrar quitando la verificación.
- **Visual:** Escena: contexto y costo por turno, con y sin compactar.
- **Fuentes:** Claude Code docs: Context window, Costs, Workflows y Glossary; LangChain, Improving Deep Agents with harness engineering; Nota, bloque 12; BettaTech, Luke Alvoeiro y Harrison Chase, en la biblioteca de Fran.
- **Ojo:** Más una semana de medir mientras trabajas.

#### 44. Codex, DeepSeek Harness y el mercado

*Reordenada · 25 min + 3 h · Hasta USD 5 · hito H6*

- **De dónde sale:** Lección 08 actual; dsh; comparar con los mismos criterios.
- **Al terminar:** Comparas Claude Code, Codex y DeepSeek Harness con los mismos criterios, y eliges por tarea con tus números.
- **Ideas:**
  1. Criterios fijos: loop, herramientas, contexto y compactación, memoria, permisos y sandbox, subagentes, recuperación y extensibilidad.
  2. Claude Code es cerrado y se aprende por sus docs. Codex es abierto, en Rust, con un paralelo casi uno a uno.
  3. DeepSeek Harness (`dsh`) es abierto y todo en él es plugin. Está en preview, no está auditado y avisa que romperá compatibilidad.
  4. Sus estrellas miden interés, no calidad.
  5. Modelo y harness son variables separadas: con el mismo modelo, cambiar el harness movió Terminal-Bench 2.0 de 52,8 a 66,5.
  6. Harness² no ejecuta: optimiza harnesses y usa OpenCode o Codex como ejecutor.
- **Vocabulario:** harness abierto, preview, backend de modelo, plugin, `dsh`, `config.toml`, AGENTS.md, línea base.
- **Flowchart o pseudocódigo:** Tabla de 3 filas por 8 columnas. Cada celda lleva su fuente o dice «sin confirmar». Luego, una fila más por cada harness que te interese.
- **Construcción dirigida:** Corre una misma tarea de tu sistema en los 3, con el mismo comando de verificación. Pon `dsh` en una VM o un contenedor desechable. Es una comparación de H6, no un cambio de herramienta.
- **Cómo se comprueba:** La comparación usa la misma tarea y el mismo criterio, y anotas éxito, tiempo y costo. Un secreto canario fuera del contenedor queda sin acceso. Dices qué cambió por el harness y qué por el modelo.
- **Qué evita:** Elegir por moda o por estrellas, o correr un harness no auditado en tu máquina con tus claves.
- **Visual:** Tabla interactiva: filtrar por criterio y por harness.
- **Fuentes:** Claude Code docs, Glossary y Extend; Codex docs y repo openai/codex; DeepSeek Harness: README, architecture.md y SAFETY.md; DeepSeek API Docs, coding agents; LangChain, Improving Deep Agents; arXiv 2609.00006; Harness², README; OpenAI, Unrolling the Codex agent loop (secundario).
- **Ojo:** Los demás: Gemini CLI, Mistral Vibe, OpenCode, OpenClaw, Aider, Mini-SWE-Agent, Pi, Hermes Agent, OpenHands, LangChain Deep Agents, Amplio, BYO Harness, Qoder y WorkBuddy/CodeBuddy. Deep Code CLI, DeepSeek-TUI y Reasonix son de la comunidad, no de DeepSeek. Las notas no leyeron el cuerpo de las docs de Codex sobre sandbox, permisos y memoria, y no hay benchmark oficial de `dsh` contra Claude Code.

#### 45. Tu flujo de agentic engineering

*Esencial · Nueva · 30 min + 6 h · USD 5 a 30 · hito H6*

- **De dónde sale:** Misión de Fran; notas de fábrica, etapas 1 y 2; Willison; Karpathy.
- **Al terminar:** Tu flujo de agentic engineering está escrito, lo aplicas en cada tarea y pasa una prueba objetiva.
- **Ideas:**
  1. Un flujo tiene 8 partes: spec, plan, contexto, skills, hooks, verificación, memoria y revisión.
  2. Si no lees cada línea, tus criterios y tus pruebas son el control. Es la pieza decisiva.
  3. Antes del plan, alinéate: que la IA te entreviste hasta compartir el diseño.
  4. El agente comprueba su trabajo, y quien hace no se juzga: un revisor aparte.
  5. Cada falla corrige el sistema. También se poda: acumular reglas cuesta.
  6. Hay desacuerdos reales: leer el código o no, en paralelo o en serie, cuánto gastar. Declara tu postura.
- **Vocabulario:** agentic engineering, spec, criterio de aceptación, archivo de progreso, traspaso, sensor determinista, patrón dorado, corrección de lógica.
- **Flowchart o pseudocódigo:** Flowchart de tu flujo: idea → spec con criterios → plan → implementación → verificación → revisión → memoria. En cada flecha, el archivo o el comando que la sostiene.
- **Construcción dirigida:** Documenta tu flujo con las 8 partes, y deja en el repo la plantilla de spec, el archivo de progreso, tus skills y tus hooks. Con esto cierras H6, y lo usas en el resto de tu sistema.
- **Cómo se comprueba:** Etapa 1: en 10 tareas pequeñas seguidas, el agente entrega con la verificación en verde sin que tú corras nada, y al menos 7 no necesitan corrección de lógica. Etapa 2: retomas una tarea en sesión nueva sin repetir contexto. Etapa 2: ningún error se repite en dos semanas, y las correcciones por PR quedan anotadas y a la baja.
- **Qué evita:** Un flujo que solo existe en tu cabeza, o montar una fábrica sin pasar la etapa 1.
- **Visual:** Figura: tu flujo como flowchart, con las 8 partes marcadas.
- **Pregunta de entrevista:** Muéstrame tu flujo con una tarea real. ¿Dónde se detecta un error del agente? ¿Qué cambiaste después de una falla? ¿Lees el código, y por qué?
- **Fuentes:** Simon Willison, Agentic engineering patterns; Matt Pocock, AI Engineer; Lauren Tan, taller; Luke Alvoeiro, Factory; Kyle Mistele, Loop Engineering; Anthropic, Harness design for long-running apps; Karpathy sobre agentic engineering (secundario); software_factory.md, sección 8 (etapas propuestas).
- **Ojo:** Los umbrales (10 tareas, 7 sin corrección, dos semanas) son una propuesta, sin validar, y se calibran con un piloto. Además de las horas, son dos semanas de uso mientras trabajas.

### Módulo 8. Nivel 4: Tu sistema multi-agente

#### 46. ¿Hace falta multi-agente?

*Esencial · Reordenada · 25 min + 2 h · Hasta USD 5 · hito H8*

- **De dónde sale:** Lección 11 actual; Google Research; MAST; Cognition.
- **Al terminar:** Decides con datos si una tarea necesita varios agentes, y «no» cuenta como respuesta válida.
- **Ideas:**
  1. Un solo agente es la línea base contra la que se compara todo.
  2. Google Research: +80,9 % en tarea paralelizable con orquestador central, y 39 a 70 % peor en tarea secuencial.
  3. Los errores se amplifican 17,2 veces sin coordinador y 4,4 veces con coordinador.
  4. MAST, 1.642 trazas: las fallas son de diseño (~44,2 %), desalineación entre agentes (~32,4 %) y verificación (~23,5 %).
  5. Varios agentes cuestan más: unas 15 veces los tokens de un chat en Anthropic.
  6. Solo 8 % de los avisos de productos menciona multi-agente, frente a 68 % a 79 % que menciona agentes.
- **Vocabulario:** línea base, tarea paralelizable, tarea secuencial, amplificación de errores, costo de coordinación, piso de complejidad, MAST.
- **Flowchart o pseudocódigo:** Árbol de decisión: ¿la tarea se divide en partes independientes? ¿Escribe sobre estado compartido? ¿Un rol necesita otro modelo, otros permisos o contexto aislado? Si todo da no, un solo agente.
- **Construcción dirigida:** Pide correr 2 tareas de tu proyecto, una paralelizable y una secuencial, con tu harness de H5 y con subagentes de Claude Code. El proyecto suma su primera tabla de un agente contra varios.
- **Cómo se comprueba:** Escribes tu predicción antes de correr. Si falla, la explicas leyendo las trazas. La tabla compara las mismas tareas en resultado, tokens y tiempo. Clasificas una falla de tus trazas con la taxonomía de MAST.
- **Qué evita:** Armar varios agentes porque suena avanzado, y pagar más por un resultado igual o peor.
- **Visual:** Figura: la misma tarea con uno y con varios agentes, en paralelo y en secuencia, con su resultado medido.
- **Fuentes:** Google Research, Towards a science of scaling agent systems (arXiv 2512.08296); MAST (arXiv 2503.13657, preprint); Cognition, Don't Build Multi-Agents y Multi-Agents: What's Actually Working; Anthropic, sistema de investigación multiagente (autorreportado); Xu et al., Rethinking the Value of Multi-Agent Workflow (solo abstract); Conteo de 969 avisos, job_market_validation.md.
- **Ojo:** Los avisos no justifican este nivel: lo justifica la misión del curso. Los conteos miden menciones, no exigencias. MAST estudia frameworks de 2023 a 2025, no harnesses actuales.

#### 47. Orquestar: quién tiene el plan

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H7*

- **De dónde sale:** Lección 11 actual: grafos y máquinas de estado; LangGraph; workflows.
- **Al terminar:** Decides dónde vive el plan de tu sistema, y lo defiendes con sus costos.
- **Ideas:**
  1. El plan puede estar en el modelo, turno a turno, o en un script o grafo.
  2. En Claude Code, los subagentes y agent teams (experimental) dejan el plan al modelo. Los dynamic workflows lo dejan a un script.
  3. Un grafo es una máquina de estados: estados, transiciones y un estado compartido, por ejemplo con LangGraph.
  4. Factory orquesta con unas 700 líneas de prompt. Lo determinista es poco, pero existe: correr la validación y bloquear el avance.
  5. El plan se puede generar. La política no.
  6. El plan se guarda fuera del contexto, porque el contexto se trunca.
- **Vocabulario:** orquestador, máquina de estados, grafo, transición, handoff, agente como herramienta, workflow.
- **Flowchart o pseudocódigo:** Máquina de estados del orquestador: recibir, planificar, delegar, verificar, reintentar, entregar o escalar. Cada transición dice su condición y su tope.
- **Construcción dirigida:** Dale tu diagrama al agente y pide el orquestador de tu sistema, con el plan guardado en un archivo. El proyecto gana el estado que los subagentes van a compartir por referencia.
- **Cómo se comprueba:** Matas la sesión en medio: el plan sigue en el archivo y la corrida continúa desde ahí. La traza muestra cada transición, y una no declarada se rechaza. Una tarea que nunca aprueba termina al llegar al tope de rondas.
- **Qué evita:** Un plan que vive solo en la conversación y se pierde al compactar, o un grafo rígido para una tarea que necesita adaptarse.
- **Visual:** Escena: la misma tarea con el plan en el modelo y con el plan en un script.
- **Fuentes:** Claude Code, docs de workflows, subagentes y agent teams; Factory Missions y charla de Luke Alvoeiro (autorreportado); OpenAI Agents SDK, handoffs y orquestación; LangChain, patrones multi-agente; BettaTech, Graph Engineering, en tu biblioteca.
- **Ojo:** Agent teams es experimental y está apagado por defecto. Se enseña la función, no el nombre.

#### 48. Enrutador y contrato de validación

*Esencial · Nueva · 25 min + 3 h · Hasta USD 5 · hito H7*

- **De dónde sale:** Anthropic; Factory Missions; DeepMind.
- **Al terminar:** Tu sistema clasifica cada petición, decide si delega y escribe antes del código qué significa terminado.
- **Ideas:**
  1. Lo primero que se adapta es la decisión de delegar: «ninguno» es un rol válido.
  2. Anthropic escala por tarea: 1 agente en un dato simple, 2 a 4 en una comparación, más de 10 en investigación compleja.
  3. Sin esa regla, sus primeras versiones lanzaban 50 subagentes para consultas simples.
  4. Reglas primero, modelo chico después, y modelo grande solo si falla una validación.
  5. El contrato de validación se escribe antes del código, porque los tests escritos después solo confirman decisiones.
  6. Si una subtarea es difícil de verificar, se sigue descomponiendo.
- **Vocabulario:** enrutador, ficha de plan, forma de la tarea, reversibilidad, contrato de validación, aserción, descomposición guiada por el contrato.
- **Flowchart o pseudocódigo:** Esquema de la ficha de plan: forma de la tarea, reversibilidad, sensibilidad de datos, presupuesto, contrato y roles. Flowchart: política, reglas, tu clasificador de H2, y agente único u orquestador.
- **Construcción dirigida:** Pide el enrutador con tu clasificador de H2 y un planificador que escriba el contrato. Es H7: el sistema deja de tratar igual todas las peticiones.
- **Cómo se comprueba:** 40 peticiones etiquetadas de 3 dominios: al menos 85 % de acierto en la forma de la tarea. 0 subagentes en las peticiones simples. 100 % de los contratos con aserciones que el verificador puede ejecutar.
- **Qué evita:** Gastar en subagentes para una pregunta simple, y un respaldo silencioso. En Woorky, 12 de 12 preguntas dudosas se iban al camino caro por un JSON cortado y un `catch` mudo.
- **Visual:** Figura: la ficha de plan llena para una petición simple y para una compleja.
- **Fuentes:** Anthropic, sistema de investigación multiagente; Google Research, arXiv 2512.08296; DeepMind, Intelligent AI Delegation (arXiv 2602.11865; marco sin validación empírica); Factory Missions y charla de Luke Alvoeiro (autorreportado); Guía de Fran, Woorky.
- **Ojo:** Los umbrales son propuesta a calibrar con un piloto, no evidencia. Falta decidir quién entrega el verificador externo: sin él, el check no es objetivo.

#### 49. Subagentes de lectura y un solo escritor

*Esencial · Reordenada · 25 min + 4 h · USD 5 a 30 · hito H8*

- **De dónde sale:** Lección 11 actual; Cognition; Factory.
- **Al terminar:** Tu sistema reparte la lectura en paralelo, escribe en un solo hilo y lo demuestras con la traza.
- **Ideas:**
  1. Las acciones llevan decisiones implícitas, y las decisiones en conflicto dan malos resultados.
  2. Los subagentes de solo lectura son la forma multi-agente más común en la práctica.
  3. Agentes sí para aportar inteligencia. Escritores en paralelo, no.
  4. El hijo parte en blanco: no comparte estado contigo aunque el padre lo suponga.
  5. La delegación lleva objetivo, formato de salida, guía de herramientas y límites.
  6. El traspaso es un esquema: hecho, pendiente, comandos con código de salida, problemas y artefactos por referencia.
- **Vocabulario:** subagente, solo lectura, único escritor, worktree, handoff, artefacto por referencia, profundidad, fan-out.
- **Flowchart o pseudocódigo:** Diagrama: orquestador, investigador y especialista RAG en paralelo, programador en un worktree. Pseudocódigo del esquema de traspaso.
- **Construcción dirigida:** Pide 3 roles: investigador, tu especialista RAG de H4 y el programador. Es H8: el sistema ya delega, y solo uno escribe.
- **Cómo se comprueba:** En la traza: profundidad de 2 o menos, 5 o menos activos y nunca dos escritores a la vez. 100 % de los handoffs válidos contra el esquema. Comparado con tu H5, gana en lo paralelizable y no empeora en lo secuencial. Si no, un informe explica por qué. El costo queda reportado junto al resultado.
- **Qué evita:** Dos agentes que deciden por separado y entregan partes incoherentes, como en el ejemplo de Flappy Bird de Cognition.
- **Visual:** Escena: dos escritores en conflicto, y después un solo escritor con lectores en paralelo.
- **Fuentes:** Cognition, Don't Build Multi-Agents y Multi-Agents: What's Actually Working; Factory Missions (autorreportado); Anthropic, sistema de investigación multiagente; Claude Code, docs de subagentes; Hermes, docs de delegación; Google Research, arXiv 2512.08296.
- **Ojo:** Los umbrales son propuesta a calibrar con un piloto. Profundidad 2 y máximo 5 son valores iniciales extrapolados. Factory dice que el costo de coordinar anuló la ganancia del paralelismo masivo, pero no publica tasa de éxito.

#### 50. El auditor que no vio nada

*Esencial · Reordenada · 20 min + 3 h · Hasta USD 5 · hito H9*

- **De dónde sale:** Lección 11 actual; Anthropic; Factory; Cognition.
- **Al terminar:** Tu sistema tiene un auditor que no vio cómo se construyó, y sabes cuántos defectos encuentra.
- **Ideas:**
  1. Quien se califica a sí mismo elogia su trabajo con confianza.
  2. Un evaluador LLM sigue siendo indulgente, pero es más fácil de calibrar.
  3. El auditor no recibe el contexto del constructor y no puede escribir.
  4. Factory usa dos validadores: uno de tests, tipos y lint, y otro que prueba como usuario.
  5. En MAST, agregar verificación de alto nivel dio +15,6 % en ProgramDev.
  6. El evaluador vale su costo solo cuando la tarea supera lo que el modelo hace bien solo.
- **Vocabulario:** auditor, evaluador separado, defecto sembrado, falsa alarma, ronda de revisión, calibrar, función simulada.
- **Flowchart o pseudocódigo:** Flowchart: entrega, auditor contra el contrato, falla vuelve al orquestador con hallazgos, y corta al llegar a 3 rondas.
- **Construcción dirigida:** Pide el auditor, con otro modelo si se puede, y un filtro que compare sus hallazgos con el contrato. Es H9: el sistema deja de aprobarse a sí mismo.
- **Cómo se comprueba:** 10 entregas con defectos sembrados, incluidas funciones simuladas que pasan tests, y 5 limpias: detecta al menos 80 %, con 1 falsa alarma o menos. La traza prueba que no recibió contexto del constructor. El bucle termina en 3 rondas o menos.
- **Qué evita:** Una verificación que confirma lo que el constructor ya creía, y bucles de revisión sin fin.
- **Visual:** Escena: el mismo defecto visto por el constructor y por el auditor.
- **Fuentes:** Anthropic, Harness design for long-running application development (autorreportado); Factory, charla de Luke Alvoeiro (autorreportado); Cognition, Multi-Agents: What's Actually Working (autorreportado); MAST (arXiv 2503.13657, preprint).
- **Ojo:** Los umbrales son propuesta a calibrar con un piloto, no evidencia.

#### 51. Crear subagentes de forma autónoma

*Esencial · Nueva · 25 min + 3 h · Hasta USD 5 · hito H10*

- **De dónde sale:** Pedido de Fran; Claude Code; Hermes; DeepMind.
- **Al terminar:** Tu sistema crea subagentes para un dominio nuevo, y el código rechaza a los que piden de más.
- **Ideas:**
  1. Crear un subagente es escribir un archivo declarativo dentro de límites fijos.
  2. El modelo propone la ficha y el código la valida.
  3. Un hijo nunca pide más que su padre: ni herramientas, ni presupuesto, ni profundidad.
  4. Las hojas no delegan.
  5. Un mensaje de otro agente no es consentimiento: no aprueba nada.
  6. Los límites existen en todos: Claude Code permite 20 activos, y Hermes es plano por defecto.
- **Vocabulario:** ficha declarativa, reducción de privilegios, hoja, profundidad, presupuesto, lista permitida, diputado confundido, prueba de humo.
- **Flowchart o pseudocódigo:** Esquema de la ficha: nombre, descripción, herramientas, modelo, presupuesto y profundidad. Pseudocódigo del validador: para cada campo, ¿hijo menor o igual que padre? Si no, rechazar.
- **Construcción dirigida:** Pide un generador de fichas y un validador determinista. Es H10: el sistema crea sus roles sin que los escribas tú, y la política queda fuera del modelo.
- **Cómo se comprueba:** Con un brief de dominio no visto, genera fichas válidas que pasan una prueba de humo. Batería de 20 fichas que escalan privilegios, con más herramientas, presupuesto o profundidad que el padre: 100 % rechazadas por código. Intentas aprobar un permiso con un mensaje entre agentes, y no funciona.
- **Qué evita:** Un subagente generado que obtiene permisos que nadie le dio, y árboles de agentes sin tope: profundidad 3 con 3 hijos ya puede dar 27 hojas.
- **Visual:** Figura: el árbol de agentes, con permisos que solo se reducen al bajar.
- **Fuentes:** Claude Code, docs de subagentes y agent teams; Hermes, docs de delegación; DeepMind, Intelligent AI Delegation (arXiv 2602.11865; marco sin validación empírica); Anthropic, sistema de investigación multiagente.
- **Ojo:** Los umbrales son propuesta a calibrar con un piloto. Nadie midió si un rol generado al vuelo rinde más que una plantilla fija.

#### 52. Crear herramientas de forma autónoma

*Esencial · Nueva · 30 min + 5 h · USD 5 a 30 · hito H11*

- **De dónde sale:** Pedido de Fran; Code execution with MCP; SkillsBench; EvoSkill.
- **Al terminar:** Tu sistema crea la herramienta que le falta, y ninguna sube de nivel sin mejora medida.
- **Ideas:**
  1. Escalera de 5 niveles: buscar lo existente, efímera, skill en cuarentena, skill promovida, MCP registrado.
  2. Lo normal es quedarse en efímera: un script en sandbox que muere con la tarea.
  3. Sin mejora medida frente a no tenerla, no hay promoción.
  4. SkillsBench: las skills curadas suman 16,2 puntos y las autogeneradas restan 1,3 de media.
  5. EvoSkill Injection: una capacidad maliciosa se genera, se guarda y se reutiliza como skill legítima.
  6. Regla de contaminación (deducción, no práctica documentada): lo creado en una corrida que leyó contenido no confiable queda marcado y no sube sin auditoría.
- **Vocabulario:** sandbox, efímera, cuarentena, promoción, compuerta, manifiesto, hash fijado, contaminación, canario, SKILL.md.
- **Flowchart o pseudocódigo:** Flowchart de la escalera, con una compuerta por nivel: tests, auditor sin contexto, mejora medida, manifiesto igual a la conducta y hash fijado. Para MCP, además, aprobación humana si tiene escritura o red.
- **Construcción dirigida:** Pide la fábrica con sandbox de archivos y red, compuertas y registro versionado. Es H11: el sistema crea herramientas y las llama solo. Si registra un servidor MCP, usa la revisión 2026-07-28.
- **Cómo se comprueba:** 10 tareas con una capacidad faltante: la herramienta pasa tests ocultos en al menos 70 %, y la promovida da mejora medida. Batería roja con documentos envenenados y pedidos maliciosos: 0 promociones. Un secreto canario y un host canario quedan sin acceso. Lo creado en una corrida contaminada queda marcado.
- **Qué evita:** Una biblioteca que crece sola y envenena corridas futuras. En Hermes, `skills.write_approval` viene en `false`: sin configurarlo, guarda skills sin revisión.
- **Visual:** Figura: la escalera, con lo que frena cada compuerta.
- **Fuentes:** SkillsBench (arXiv 2602.12670); EvoSkill Injection (arXiv 2608.30429; solo abstract, sin cifras); Anthropic, Code execution with MCP (autorreportado); Hermes, docs de skills; Xu y Yan, revisión de skills (arXiv 2602.12430; propuesta sin validación empírica); AI Agent Traps (secundario).
- **Ojo:** Los umbrales son propuesta a calibrar con un piloto. Falta confirmar cómo SkillsBench generó sus skills: si se escribieron antes de resolver, no refuta aprender de la experiencia. No hay datos de que alguien logre este hito sin programar a mano dentro de un curso.

#### 53. Un mismo núcleo para cualquier proyecto

*Esencial · Nueva · 25 min + 6 h · USD 5 a 30 · hito H12*

- **De dónde sale:** Pedido de Fran: CRM, personal o cualquier idea.
- **Al terminar:** Tu sistema sirve para CRM, asistente personal, laboratorio y tu propia idea, sin cambiar el núcleo.
- **Ideas:**
  1. El núcleo no cambia: harness, política, memoria, traza y evals.
  2. Solo cambian los paquetes de dominio: herramientas, corpus, política, plantillas de contrato y evals.
  3. El CRM termina con casi ningún subagente: es secuencial y escribe en datos.
  4. El laboratorio termina con varios: es paralelizable y sobre todo lee.
  5. Si todos los dominios dan la misma topología, el enrutador no se está adaptando.
  6. Lo irreversible cambia por dominio: envíos masivos en CRM, pagos en personal, publicar en laboratorio.
- **Vocabulario:** núcleo, paquete de dominio, topología, hash, ablación, suite de dominio, estado final, caso de regresión.
- **Flowchart o pseudocódigo:** Tabla de 4 columnas, una por dominio: forma típica, roles, herramienta que falta, lo irreversible, riesgo principal, contrato y eval central.
- **Construcción dirigida:** Escribe la spec de los 4 paquetes y pide cargarlos sin tocar el núcleo. Es H12: se cierra «Tu sistema multi-agente», y el paquete de laboratorio sirve también al Camino Modelos.
- **Cómo se comprueba:** El hash del núcleo no cambia entre dominios: solo cambian los paquetes. Pasa las suites de 3 dominios y una propia de 20 tareas o más que corre un tercero. Pasa una suite adversarial por las 6 categorías de trampas. Informe de ablación: qué piezas sí importan, y costo por tarea. Una falla real clasificada según MAST y convertida en caso de regresión.
- **Qué evita:** Reescribir el orquestador en cada proyecto, o forzar la misma topología en un problema que no la necesita.
- **Visual:** Escena: la misma petición en los 4 dominios. El núcleo queda fijo y la topología cambia.
- **Pregunta de entrevista:** Diseña un sistema que atienda un CRM y un laboratorio de investigación. ¿Qué queda fijo, qué cambia y cómo lo demuestras?
- **Fuentes:** multi_agent_project.md, arquitectura y tabla de dominios (propuesta de diseño); Anthropic, Demystifying evals for AI agents; Anthropic, sistema de investigación multiagente; MAST (arXiv 2503.13657, preprint); AI Agent Traps (secundario).
- **Ojo:** Los umbrales son propuesta a calibrar con un piloto. La integración completa es extrapolación: ningún sistema publicado reúne todo con tasa de éxito auditada. El hash del núcleo también es una propuesta. Las calificaciones ocultas deben quedar fuera del alcance de tu LLM.

### Módulo 9. Arquitecto de harness

#### 54. Las decisiones de un harness robusto

*Esencial · Nueva · 30 min + 3 h · Hasta USD 5 · hito H13*

- **De dónde sale:** Misión de Fran; notas de harness; dsh; Amplio; arXiv 2607.08028.
- **Al terminar:** Respondes las 9 decisiones de un harness robusto, cada una con su costo, y tu sistema resiste 3 fallas provocadas.
- **Ideas:**
  1. Verdad y crash: dónde vive el estado (JSONL en Claude Code, base de datos en Amplio, log en DeepSeek Harness), y qué pasa si cae a mitad de una herramienta.
  2. Control: qué es determinista. Lo obligatorio va en código, no en instrucciones.
  3. Término: quién decide terminar. Sin un chequeo, decide el mismo agente.
  4. Delegación: quién tiene el plan y cuánto contexto hereda un subagente.
  5. Contexto y seguridad: qué sobrevive a compactar y dónde está el límite de seguridad.
  6. Medición: una pieza se mide quitándola. Lo robusto no es lo seguro: Amplio se recupera de un crash y no tiene sandbox.
- **Vocabulario:** fuente de verdad, log, fail-closed, determinista, condición de término, compactación, reanudar, límite de seguridad, ablación.
- **Flowchart o pseudocódigo:** Tabla de 9 filas: decisión, tu respuesta, alternativa descartada, costo y cómo se comprueba.
- **Construcción dirigida:** Llena la tabla para tu sistema y pide al agente los cambios que falten en el harness. El proyecto gana un registro de decisiones que H13 va a medir.
- **Cómo se comprueba:** Matas el proceso en medio de una herramienta: reanuda sin duplicar efectos. Una herramienta devuelve un resultado gigante: el contexto no se desborda. Un archivo leído trae una orden escondida: no dispara ninguna acción. Predices qué sobrevive a compactar, y lo comparas con lo que queda.
- **Qué evita:** Un harness que funciona en la demo y se rompe con la primera caída. También dejar en el prompt lo que debe cumplirse siempre.
- **Visual:** Figura: las 9 decisiones sobre el diagrama del loop.
- **Fuentes:** harness_design.md, decisiones robustas; Claude Code, docs de glosario, contexto y permisos; Amplio, README y docs internas; DeepSeek Harness, architecture.md y approval.md; Contratos en código, 270 corridas (arXiv 2607.08028); Estudio de 11 harnesses (arXiv 2609.00006); LangChain, Terminal-Bench de 52,8 a 66,5 solo cambiando el harness (autorreportado).
- **Ojo:** Usa un proveedor mock para las pruebas de falla: no gastan API. Las 3 pruebas y la lista de decisiones son inferencia de las notas.

#### 55. Leer harnesses abiertos por sus decisiones

*Reordenada · 30 min + 2 h · Centavos · hito H13*

- **De dónde sale:** Lección 07 actual: Amplio, Harness², BYO; suma DeepSeek Harness, OpenHands y Hermes.
- **Al terminar:** Lees un harness abierto por sus decisiones, y dices qué copiarías y qué no.
- **Ideas:**
  1. Amplio: base de datos primero y reanudación tras un crash, sin sandbox.
  2. Harness²: no ejecuta tareas. Optimiza un harness, con OpenCode o Codex como ejecutor.
  3. DeepSeek Harness: todo es plugin, y toda petición al modelo debe poder reconstruirse desde el log. Está en preview y no está auditado.
  4. OpenHands: el LLM declara el riesgo dentro de la acción. Es probabilístico, porque el modelo se evalúa a sí mismo.
  5. Hermes: el agente crea skills. BYO Harness: pone la compuerta de permisos en la lección 02.
  6. Las estrellas miden interés, no calidad.
- **Vocabulario:** plugin, seam, fail-closed, log append-only, step, turn, condenser, backend de ejecución.
- **Flowchart o pseudocódigo:** Tabla: 6 harnesses por las 9 decisiones de la lección anterior. Cada celda lleva su enlace a la doc oficial.
- **Construcción dirigida:** Pide a tu agente llenar la tabla desde las docs, con cita en cada celda. Después eliges una decisión para llevar a tu harness. Tu registro de decisiones crece con esa evidencia.
- **Cómo se comprueba:** Abres 5 citas al azar y dicen lo que la celda afirma. Dibujas el flowchart de 3 de los harnesses desde su doc. Ninguna decisión se justifica por estrellas o popularidad.
- **Qué evita:** Copiar un harness por su fama, o confundir robusto con seguro.
- **Visual:** Figura: la tabla comparativa, con cada diferencia marcada.
- **Fuentes:** Amplio, README y docs internas; Harness², README y arXiv 2610.14224; DeepSeek Harness, architecture.md y SAFETY.md; OpenHands, docs del SDK y arXiv 2511.03690 (afirmación propia); Hermes, docs y README; BYO Harness, byoharness.dev; Estudio de 11 harnesses (arXiv 2609.00006).
- **Ojo:** En este camino no se lee código para cazar errores: se leen docs y trazas. Estos proyectos cambian rápido, y DeepSeek Harness avisa que romperá compatibilidad. Hay que fechar la tabla.

#### 56. Optimizar un harness con evidencia

*Nueva · 30 min + 6 h · USD 5 a 30 · hito H13*

- **De dónde sale:** Harness²: Propose, Probe y Compose; Agentic Harness Engineering; ablación.
- **Al terminar:** Mejoras tu harness con evidencia, o demuestras que conviene dejarlo como está.
- **Ideas:**
  1. Propose: dos variantes del harness, una invariante y una de dominio.
  2. Probe: cada variante corre en la misma tarea, con el mismo modelo y ambiente. Los contrastes informan, pero no prueban corrección.
  3. Compose: fusionar, revisar, adoptar o conservar. Cada decisión se ata a una observación de la trayectoria.
  4. `KEEP_BASE` es un resultado válido cuando la evidencia no respalda el cambio.
  5. Harness² con k=1 sube hasta 11,5 puntos en WorkBuddy-Bench, 4,5 en JobBench y 11,8 en LAB. Meta-Harness le gana en 2 casos.
  6. Ablación en el paper: sobre un total de 80,8, sin skills pierde 5,3, sin scripts 3,7 y sin el grupo de prompt 1,5. No son efectos aditivos.
- **Vocabulario:** Propose, Probe y Compose, ablación, worktree, trayectoria, contraste, contrato falsable, `KEEP_BASE`, `EXPERIENCE.md`.
- **Flowchart o pseudocódigo:** Flowchart: correr la base, escribir tu predicción, crear 2 variantes en worktrees, correrlas, comparar, componer o `KEEP_BASE`, validar en tareas separadas y guardar `EXPERIENCE.md`.
- **Construcción dirigida:** Dirige el método a mano sobre tu sistema, usando las variantes de instrucciones, skills y hooks. Es H13: tu harness queda medido por ablación y optimizado.
- **Cómo se comprueba:** Corres `harness2-demo --output runs/demo --k 2`, que no pide credenciales, y lees sus decisiones. Tabla de ablación, una pieza quitada a la vez, con su efecto. Comparación contra la base en tareas separadas, con la predicción escrita antes de correr. Si no hay respaldo, entregas `KEEP_BASE` con su evidencia y cuenta como aprobado.
- **Qué evita:** Elegir una variante sin respuesta correcta y empeorar. En Harness² se eligió una salida de 55 sobre una de 95.
- **Visual:** Escena: dos worktrees compiten, y el compositor cita la observación que decide.
- **Fuentes:** Harness², arXiv 2610.14224 y README; Harness², docs/EXPERIMENTS.md; Agentic Harness Engineering (arXiv 2604.25850); Meta-Harness (arXiv 2603.28052); Anthropic, Harness design for long-running application development.
- **Ojo:** Harness² no entrega costos en dólares ni en tokens. Con k=1 hay al menos 4 ejecuciones por tarea: es cálculo de las notas, no del paper. Sus ejecutores corren con red sin restricción y Codex con sandbox apagado: usa un entorno desechable. La transferencia es desigual entre modelos. El método a mano con worktrees es propuesta de las notas, no del paper.

### Módulo 10. Producción

#### 57. Desplegar: APIs, Docker, CI/CD y cloud

*Esencial · Nueva · 30 min + 3 h · Hasta USD 5 · hito H14*

- **De dónde sale:** roadmapv4 bloque 6; roadmapv7; avisos.
- **Al terminar:** Tu sistema corre en la nube, y solo se despliega si pasa los tests y los evals.
- **Ideas:**
  1. Servir el sistema detrás de una API.
  2. Un contenedor empaqueta la app y sus dependencias, por ejemplo con Docker.
  3. Un orquestador de contenedores, por ejemplo Kubernetes, reparte y reinicia réplicas.
  4. CI/CD: tests y evals son la puerta antes de producción.
  5. Siempre hay una forma de volver atrás.
  6. En avisos de productos: cloud 53 %, Kubernetes 19 %, CI/CD 18 % y Docker 10 %.
- **Vocabulario:** contenedor, imagen, Dockerfile, pipeline, CI/CD, rollback, runtime, Kubernetes, réplica.
- **Flowchart o pseudocódigo:** Flowchart: push, tests, evals, imagen, despliegue y vigilar. Marca dónde se detiene y por dónde se vuelve atrás.
- **Construcción dirigida:** Pide empaquetar tu sistema multi-agente en un contenedor y desplegarlo con un pipeline. Empieza H14: el proyecto queda en producción.
- **Cómo se comprueba:** Un eval que falla a propósito detiene el despliegue. Vuelves a la versión anterior con un comando. El agente desplegado no alcanza secretos de otro entorno.
- **Qué evita:** Desplegar algo que empeoró sin que nadie lo sepa, y darle credenciales de producción al agente que construye.
- **Visual:** Figura: el pipeline, con sus puertas.
- **Fuentes:** roadmapv4, video 2, bloque 6; roadmapv3, semana 5; roadmapv6, Google día 5, LangChain Deploy y Microsoft lección 16; Conteo de 969 avisos, job_market_validation.md.
- **Ojo:** Los conteos usan texto completo y miden menciones, no exigencias. Kubernetes se ve aquí como concepto y se trata más en la lección siguiente.

#### 58. Sistemas distribuidos, lo justo

*Nueva · 25 min + 3 h · Centavos*

- **De dónde sale:** Avisos: 22 % de productos; Kubernetes 19 %.
- **Al terminar:** Separas tu sistema en piezas que caen por separado, y sabes qué pasa cuando una cae.
- **Ideas:**
  1. Varias máquinas fallan por partes, no todas juntas.
  2. Una cola separa recibir trabajo de hacerlo.
  3. Reintentar exige idempotencia: repetir no debe duplicar el efecto.
  4. Kubernetes reinicia y escala réplicas, pero no arregla un diseño con estado mal ubicado.
  5. En avisos de productos: sistemas distribuidos 22 % y Kubernetes 19 %. Kafka y Redis, 3 % cada uno.
- **Vocabulario:** cola, worker, idempotencia, réplica, partición, consistencia, backpressure, Kubernetes.
- **Flowchart o pseudocódigo:** Diagrama: API, cola, workers y base de datos. Marca qué se pierde si cae cada pieza.
- **Construcción dirigida:** Pide separar el orquestador de los workers con una cola, en tu máquina. El sistema de H14 aguanta que caiga un worker.
- **Cómo se comprueba:** Matas un worker: otro toma la tarea y el efecto no se duplica. Envías más trabajo del que caben los workers: sube la espera y no se pierde ninguna tarea.
- **Qué evita:** Montar un clúster para un producto que cabe en una máquina, o perder trabajo cuando cae un proceso.
- **Visual:** Escena: cae un worker, y la cola reparte su trabajo.
- **Fuentes:** Conteo de 969 avisos, job_market_validation.md; Amplio, session_lifecycle.md; Mistele, en tu biblioteca: «we don't need a new cluster».
- **Ojo:** Las notas solo dan el conteo de avisos. No hay fuente didáctica revisada para esta lección: hay que elegirla antes de escribirla.

#### 59. Observabilidad

*Esencial · Reordenada · 25 min + 2 h · Centavos · hito H14*

- **De dónde sale:** Lección 14 actual; roadmapv3 semana 5.
- **Al terminar:** Encuentras dónde falló tu sistema multi-agente leyendo su traza.
- **Ideas:**
  1. Registrar cada llamada y la trayectoria completa de cada agente.
  2. Lo que vio el modelo debe quedar registrado: DeepSeek Harness lo llama «model-visible means logged».
  3. Métricas de servicio y de operación: costo, latencia, errores y tokens por agente.
  4. Los modos más frecuentes de MAST se pueden detectar en la traza: repetir pasos y no conocer el término.
  5. Todo respaldo silencioso necesita su log y su métrica.
  6. Observabilidad aparece en 33 % de los avisos de productos, y 42 % si se suman tracing y monitoring.
- **Vocabulario:** traza, span, panel, latencia, tiempo de detección, OpenTelemetry, check estructural, triage.
- **Flowchart o pseudocódigo:** Diagrama de una traza con sus partes: agente, llamada, herramienta, costo y resultado.
- **Construcción dirigida:** Pide trazas en JSONL y un panel chico con costo, latencia y errores por agente, por ejemplo con LangSmith o OpenTelemetry. H14 ya se puede vigilar.
- **Cómo se comprueba:** Plantas una falla y la encuentras solo con las trazas. Dada una traza ajena, dices qué modo de falla es y qué cambiarías en la spec. Una alarma se dispara al superar el presupuesto.
- **Qué evita:** Agentes que fallan en silencio, y caminos caros que nadie ve.
- **Visual:** Escena: leer una traza.
- **Fuentes:** roadmapv3, semana 5; Nota, bloque 14; Marina Wyss, AI Engineering en 76 minutos; roadmapv6, CMU y Stanford CS329Z clase 5; MAST (arXiv 2503.13657, preprint); DeepSeek Harness, architecture.md; Guía de Fran, Woorky.
- **Ojo:** Un LLM anotador con pocos ejemplos llegó a κ 0,77 con MAST, frente a 0,88 humano: sirve para triage, no para reemplazar la lectura.

#### 60. Confiabilidad y corridas largas

*Esencial · Reordenada · 25 min + 3 h · Hasta USD 5 · hito H14*

- **De dónde sale:** Lección 14 actual; Stanford; Amplio.
- **Al terminar:** Tu sistema se recupera de una caída, no repite efectos y no gasta de más.
- **Ideas:**
  1. Reintentos y respaldo a nivel de agente.
  2. Topes de tiempo, pasos y presupuesto.
  3. Guardar el estado antes de actuar, para retomar tras una caída.
  4. Amplio reanuda desde su base de datos, también los árboles de subagentes.
  5. Corridas largas: inicializador, lista de funciones y cierre limpio.
  6. `/rewind` de Claude Code no deshace lo que hizo Bash: deshacer no siempre es posible.
- **Vocabulario:** ejecución durable, checkpoint, retomar, idempotencia, presupuesto por agente, doom loop, modelo de respaldo.
- **Flowchart o pseudocódigo:** Flowchart de un paso que guarda su estado antes de actuar, y de cómo sabe al retomar si el efecto ya ocurrió.
- **Construcción dirigida:** Pide que tu sistema retome una corrida larga con sus subagentes. H14 aguanta caídas.
- **Cómo se comprueba:** Matas el proceso en medio y sigue sin repetir acciones. El tope de presupuesto lo detiene. Una tarea trampa que induce un bucle se corta sola.
- **Qué evita:** Acciones duplicadas al reanudar, y corridas que agotan el presupuesto.
- **Visual:** Escena: cortar la corrida y retomarla.
- **Fuentes:** roadmapv6, Stanford CS329Z clase 5 y Amplio; roadmapv5, repo de Nexu; Nota, bloque 14; Amplio, README; Anthropic, sistema de investigación multiagente; Claude Code, docs de checkpointing; MAST (arXiv 2503.13657, preprint).
- **Ojo:** Ejecución durable aparece solo en 1 % de los avisos de productos. Se enseña porque el sistema la necesita, no porque los avisos la pidan.

#### 61. Privacidad y responsabilidad

*Reordenada · 25 min + 2 h · Centavos · hito H14*

- **De dónde sale:** Lección 14 actual; roadmapv3 semana 6.
- **Al terminar:** Sabes qué datos salen de tu sistema, y respondes por lo que hace tu IA.
- **Ideas:**
  1. Qué datos salen y hacia dónde, también por cada subagente.
  2. Datos personales: enmascarar, retener y borrar.
  3. El cliente puede tokenizar datos personales para que el modelo no los vea.
  4. Datos de prueba simulados y metadatos.
  5. Sesgos: mirar por segmentos, no solo en promedio.
  6. Transparencia, responsabilidad y licencias.
- **Vocabulario:** PII, retención, anonimización, tokenizar, datos sintéticos, sesgo, segmento, licencia.
- **Flowchart o pseudocódigo:** Mapa de datos: qué entra, qué sale, qué ve cada rol y dónde queda.
- **Construcción dirigida:** Pide un mapa de datos de tu sistema, y enmascarar los datos personales en registros y trazas. Es la parte de H14 que importa más en el paquete de CRM.
- **Cómo se comprueba:** Un dato personal plantado no aparece en registros ni trazas. Un subagente sin permiso no puede leer ese dato.
- **Qué evita:** Filtrar datos de clientes a un proveedor o a un registro.
- **Visual:** Figura: el mapa de datos.
- **Fuentes:** roadmapv3, semana 6; Nota, bloques 13 y 14; roadmapv6, Anthropic (diligencia); Anthropic, Code execution with MCP (autorreportado).
- **Ojo:** Aquí no se ve la ley: eso va en «Ley, contratos e incidentes», del cierre.

#### 62. Cara al cliente: requisitos y despliegue

*Nueva · 20 min + 2 h · Centavos*

- **De dónde sale:** Avisos: 53 % de productos pide trato con clientes; rol FDE.
- **Al terminar:** Sacas requisitos de un cliente, los conviertes en un contrato y haces una prueba de aceptación con él.
- **Ideas:**
  1. Trato con clientes aparece en 55 % de los avisos de productos, y 53 % sin boilerplate.
  2. FDE es forward deployed engineer: un ingeniero que despliega dentro del cliente.
  3. 132 de los 465 títulos de productos dicen FDE o forward deployed, en 55 empresas.
  4. Lo que importa se acuerda antes: qué exactitud vale, con casos reales del cliente.
  5. Un FDE que alimenta el producto se distingue de uno que cubre brechas: se mide cuánto de lo hecho a medida pasa al producto.
  6. Viajes aparece en 22 % de los avisos de productos, y 18 % sin boilerplate.
- **Vocabulario:** requisito, stakeholder, FDE, prueba de aceptación, caso límite, alcance, paquete de dominio.
- **Flowchart o pseudocódigo:** Plantilla: problema del cliente, caso real, resultado esperado, aserción y qué queda fuera. Flowchart de requisito a aserción.
- **Construcción dirigida:** Conversa con un cliente real o simulado, y pide convertir esa conversación en tu paquete de dominio y su contrato. Tu sistema suma su primer dominio con dueño externo.
- **Cómo se comprueba:** Cada requisito tiene una aserción del contrato. Otra persona corre la prueba de aceptación sin tu ayuda. Anotas qué pasó de lo hecho a medida al núcleo o a un paquete reutilizable.
- **Qué evita:** Construir lo que el cliente dijo y no lo que necesita, y un despliegue a medida que nunca vuelve al producto.
- **Visual:** Sin visual nuevo.
- **Fuentes:** Conteo de 969 avisos, job_market_validation.md; Títulos en avisos_contados.csv (conteo propio); ICONIQ, State of AI 2026 (el autor invierte en el sector); ceo_cto_startup.md, roles y validación.
- **Ojo:** La muestra de avisos se eligió por título, así que el 28 % de FDE no es la proporción del mercado. En ICONIQ, N≈200, 50 % los escalará como parte permanente de su venta. La definición de FDE es de esta ficha, no de una fuente.

### Módulo 11. Nivel 5: Autonomía y fábrica de software

#### 63. Loops autónomos

*Reordenada · 25 min + 3 h · Hasta USD 5 · hito H15*

- **De dónde sale:** Lección 15 actual; Kyle Mistele.
- **Al terminar:** Diseñas un loop con sensor, controlador y actuador que trabaja sin ti, y sabes detenerlo.
- **Ideas:**
  1. El loop es un sistema de control: objetivo, sensor, controlador y actuador.
  2. Hay 3 loops: interno, externo y meta.
  3. El sensor queda fuera del alcance del agente: puede apagar reglas de lint con un comentario.
  4. Control de flujo: como máximo un PR abierto por loop.
  5. Mistele parte con un PR al día, en una herramienta de CI que ya tiene el código y los secretos.
  6. Un Ralph loop sirve si trabajas solo y el sistema no es crítico.
- **Vocabulario:** sensor, controlador, actuador, loop engineering, control de flujo, Ralph loop, modo no interactivo.
- **Flowchart o pseudocódigo:** Diagrama de control: objetivo, sensor, controlador y actuador, con la condición que apaga el loop.
- **Construcción dirigida:** Pide un loop sobre el repo de tu sistema que baje errores de lint con PRs chicos, por ejemplo con semgrep y GitHub Actions. Es tu primer paso de H15.
- **Cómo se comprueba:** Se detiene al llegar a la meta. No puede apagar su sensor: lo intentas a propósito. Con un PR anterior abierto, no abre otro.
- **Qué evita:** PRs gigantes que nadie revisa, y PRs apilados que entran en conflicto.
- **Visual:** Escena: un loop que avanza y se pausa.
- **Fuentes:** Kyle Mistele, en tu biblioteca (autorreportado); Dru Knox, en tu biblioteca (autorreportado); Nota, bloque 15; CS146S 2026 semana 10; roadmapv6, DeepLearning.AI Loop Engineering y Anthropic Claude Code in Action.
- **Ojo:** `headless` ahora se llama modo no interactivo.

#### 64. Revisor separado y contrato en tu repo

*Esencial · Reordenada · 25 min + 3 h · Hasta USD 5 · hito H15*

- **De dónde sale:** Lección 10 actual; etapa 3 de la fábrica.
- **Al terminar:** Llevas al repo la etapa 3: un revisor separado y criterios escritos antes del código, con su tasa de detección medida.
- **Ideas:**
  1. Etapa 3 de 6: quien hace no se juzga.
  2. Antes hay que tener la etapa 2, pruebas de punta a punta y QA real en la app.
  3. Si no lees código, tus criterios y escenarios reemplazan la lectura línea por línea.
  4. Aquí se decide si podrás sostener lo demás.
  5. Pasar los tests no es poder mezclar: las tasas de merge quedan 24,2 puntos bajo el evaluador automático.
  6. Los tests del propio agente solo sirven si no hace trampa, como escribir `assert true`.
- **Vocabulario:** revisor con contexto limpio, contrato de validación, escenario, bug sembrado, prueba de punta a punta, QA agéntico.
- **Flowchart o pseudocódigo:** Flowchart: criterios, agente, sensores rápidos, revisor sin contexto, QA en la app real y PR.
- **Construcción dirigida:** Pide instalar el revisor y el contrato en el repo de tu sistema. H15 llega a la etapa 3: lo que aprendiste en H9 pasa de tu producto a tu forma de construirlo.
- **Cómo se comprueba:** Detecta al menos 8 de 10 bugs sembrados a propósito. Los bugs que llegan a usuarios no suben en cuatro semanas.
- **Qué evita:** Tests escritos después que solo confirman lo que el agente ya decidió.
- **Visual:** Figura: las 6 etapas, con la 3 marcada.
- **Fuentes:** software_factory.md, sección 8, etapa 3; METR, Many SWE-bench-passing PRs would not be merged (10 mar 2026); Factory, charla de Luke Alvoeiro (autorreportado); Anthropic, Harness design for long-running application development; Willison, Software factory (7 feb 2026); CS146S 2026 semana 6.
- **Ojo:** Los umbrales son propuesta sin validar empíricamente. La prueba de cuatro semanas necesita usuarios: si no los tienes, cuenta solo los bugs sembrados y dilo.

#### 65. Agentes en segundo plano: de issue a PR

*Nueva · 25 min + 4 h · USD 5 a 30 · hito H15*

- **De dónde sale:** CS146S 2026 semana 8; etapa 4.
- **Al terminar:** Llevas al repo la etapa 4: de un issue sale un PR, sin sesión interactiva y sin alcance a producción.
- **Ideas:**
  1. Etapa 4 de 6: issue, agente aislado y PR, con varios flujos a la vez.
  2. Antes hay que tener sandbox, permisos mínimos, CI rápida y un respaldo restaurado alguna vez.
  3. El agente no tiene credenciales de producción.
  4. Orden de Knox: plano de control, entorno para agentes y bucles de mejora.
  5. Los humanos comentan en el PR, para que quede legible.
  6. En los incidentes documentados se repite lo mismo: credenciales con demasiado alcance y respaldos no aislados.
- **Vocabulario:** agente en segundo plano, plano de control, sandbox, toma de control, modo no interactivo, tareas programadas, worktree.
- **Flowchart o pseudocódigo:** Flowchart: issue, entorno aislado, agente, sensores, PR, revisor y persona. Marca qué credenciales existen en cada paso.
- **Construcción dirigida:** Pide conectar issues del repo de tu sistema con un agente en modo no interactivo o una tarea programada. H15 llega a la etapa 4.
- **Cómo se comprueba:** La mitad de los PR parte de un issue sin sesión interactiva. Menos de 20 % requiere toma de control. Pruebas que el agente no alcanza producción: lo intentas a propósito y falla. Máximo un PR abierto por bucle.
- **Qué evita:** Un agente con un token de producción. En PocketOS, según su fundador, un agente halló un token en un archivo sin relación y borró la base y sus respaldos en 9 segundos.
- **Visual:** Figura: el flujo de issue a PR, con el límite de credenciales.
- **Fuentes:** software_factory.md, sección 8, etapa 4; CS146S 2026 semana 8; Dru Knox, en tu biblioteca (autorreportado); Factory, Agent Readiness (autorreportado); PocketOS, TechRadar y Live Science (secundario); Claude Code, docs de scheduled tasks.
- **Ojo:** Los umbrales son propuesta sin validar. `routines` ahora se llama scheduled tasks, y en la nube sigue en research preview. No saltes etapas: Tan advierte que escalar a la nube sin confianza local malgasta.

#### 66. Mezcla automática por riesgo y bucle meta

*Reordenada · 25 min + 4 h · USD 5 a 30 · hito H15*

- **De dónde sale:** Lección 15 actual; etapa 5; Lauren Tan; Dru Knox.
- **Al terminar:** Llevas al repo la etapa 5: lo de bajo riesgo entra solo, y cada falla mejora el sistema.
- **Ideas:**
  1. Etapa 5 de 6: mezcla automática por nivel de riesgo.
  2. Antes hay que tener clasificación de riesgo, feature flags, rollback automático, observabilidad y costo por PR.
  3. A la mezcla automática se sube por una curva de confianza: Lauren Tan dice que no hay atajo.
  4. Bucle meta: observa registros, PR e issues, y corrige los otros dos bucles.
  5. Métricas de Knox: menos tomas de control, más PR sin humano, y calidad sostenida.
  6. Acumular reglas cuesta: se poda, y se prefiere un sensor determinista a más texto.
- **Vocabulario:** mezcla automática, nivel de riesgo, feature flag, rollback, tasa de fallas de cambio, bucle meta, costo por PR.
- **Flowchart o pseudocódigo:** Flowchart: PR, sensores, revisor, ¿riesgo? Bajo: mezclar y vigilar. Alto: persona. Falla: revertir y escribir regla o sensor.
- **Construcción dirigida:** Pide tu política de riesgo y la mezcla automática solo para lo bajo, en el repo de tu sistema. H15 llega a la etapa 5.
- **Cómo se comprueba:** Un cambio de alto riesgo nunca se mezcla solo: lo intentas a propósito. Un cambio malo se revierte. Ocho semanas sin que suban la tasa de fallas de cambio ni las reversiones. Cada semana, al menos una falla se vuelve regla o sensor, y conoces el costo por PR.
- **Qué evita:** Adelantarte a las verificaciones, y un archivo de reglas que crece hasta costar más de lo que aporta.
- **Visual:** Figura: el flujo por nivel de riesgo.
- **Fuentes:** software_factory.md, sección 8, etapa 5; Lauren Tan, en tu biblioteca; Dru Knox, en tu biblioteca (autorreportado); Lopopolo en Latent Space, habilidad «land» (autorreportado); Gloaguen et al., ETH Zurich, vía devs-group (secundario).
- **Ojo:** Los umbrales son propuesta sin validar. No hay fuente primaria con una taxonomía de riesgo para mezcla automática: la clasificación la diseñas tú. La prueba de ocho semanas excede el tiempo de construcción.

#### 67. La fábrica completa, y cuándo no hacerla

*Reordenada · 35 min + 4 h · USD 5 a 30 · hito H15*

- **De dónde sale:** Lección 15 actual; StrongDM; OpenAI; METR; DORA.
- **Al terminar:** Decides con evidencia si tu proyecto justifica una fábrica, y lo más probable es que elijas una versión mínima.
- **Ideas:**
  1. La etapa 6 es opcional: humano solo diseña y comprueba resultados, en un dominio acotado.
  2. A favor, autorreportado: OpenAI, cerca de un millón de líneas sin código manual. StrongDM, con escenarios fuera del repo y gemelos de dependencias.
  3. Matiz: OpenAI conserva una persona que corta la rama de release y aprueba una prueba de humo.
  4. En contra: METR no halla efecto claro (−18 % de tiempo, IC −38 % a +9 %). DORA asocia la IA a inestabilidad.
  5. Incidentes, según prensa: agentes borraron producción en PocketOS y Replit. El caso de AWS y Kiro está disputado: Amazon dice que fue error de usuario.
  6. No hay ninguna medición independiente de una fábrica completa.
- **Vocabulario:** fábrica de software, dark factory, escenario, holdout, gemelo digital, satisfacción, curva en J, deuda de comprensión.
- **Flowchart o pseudocódigo:** Lista de 6 criterios: tareas salen bien, limita la atención, trabajo repetitivo, CI y rollback, falla recuperable, costo menor que lo ahorrado. Luego: etapa 6, versión mínima o nada.
- **Construcción dirigida:** Escribe la decisión para tu sistema, y pide la versión mínima: un comando de verificación, un loop con un PR, revisor limpio, sin credenciales de producción y compuerta humana. H15 cierra aquí con esa decisión o con la etapa 6.
- **Cómo se comprueba:** Tu decisión cita un dato a favor y uno en contra, con su fuente. Simulacro de falla con reversión exitosa. La compuerta humana sigue activa para lo irreversible. Si haces la etapa 6: una persona que lea código muestrea 50 PR, sin defectos graves.
- **Qué evita:** Montar una fábrica antes de saber qué construir, porque acelera lo equivocado. Y tomar cifras de actividad como prueba de resultados.
- **Visual:** Figura: evidencia a favor y en contra en dos columnas, con quién la midió.
- **Fuentes:** software_factory.md, secciones 4 a 8; METR, actualización del 24 feb 2026; METR, ECA de 2025 (secundario); DORA, informe 2025 vía TechTarget (secundario); DORA, tensiones (10 mar 2026); Faros 2026 (vende analítica); StrongDM, Software Factories (autorreportado); Lopopolo en Latent Space (autorreportado); InfoQ sobre OpenAI (secundario); PocketOS, Replit y AWS con Kiro, prensa (secundario); CS146S 2026 semana 10.
- **Ojo:** La etapa 6 no es meta obligatoria. La evidencia no demuestra que sea mejor. Los criterios y umbrales son propuesta, y METR llama a su estimación evidencia muy débil. StrongDM pide USD 1.000 en tokens al día por ingeniero, y Willison lo discute. Quien no lee código necesita a un tercero para el muestreo.

#### 68. Sistemas que se mejoran solos

*Reordenada · 30 min + 4 h · Hasta USD 5 · hito H15*

- **De dónde sale:** Lección 15 actual; Darwin Gödel Machine; data flywheel.
- **Al terminar:** Montas un ciclo de proponer, probar y quedarse, que no pueda engañar a su métrica.
- **Ideas:**
  1. El ciclo: medir, proponer, probar y decidir.
  2. Data flywheel: de trazas a datos curados y a cambios en el harness.
  3. Un eval a prueba de trampas corre fuera del alcance del agente, con casos ocultos.
  4. Darwin Gödel Machine: al buscar mejorar, burló la detección de alucinaciones quitando el registro que la hacía posible.
  5. En Harness², un rollout de Codex descargó la rúbrica de su tarea sin que se lo pidieran. Por eso se bloquean hosts en la red.
  6. Una persona decide qué métrica importa, por ejemplo al usar un optimizador como DSPy.
- **Vocabulario:** data flywheel, objective hacking, conjunto oculto, calificador, sensor fuera de banda, optimizador, DSPy.
- **Flowchart o pseudocódigo:** Flowchart del ciclo, con el punto donde decide una persona y los casos que el agente no puede ver.
- **Construcción dirigida:** Pide un ciclo que mejore el `CLAUDE.md` o un prompt de tu sistema, y que solo conserve lo que sube la nota en casos ocultos. Cierra H15 y el nivel 5.
- **Cómo se comprueba:** Plantas una falla en la puntuación y vigilas si la explota. El agente intenta leer los casos ocultos o editar el calificador, y no puede. Cada cambio queda registrado y se puede revertir.
- **Qué evita:** Un sistema que sube su nota y empeora el producto.
- **Visual:** Canvas: el ciclo corriendo, con la nota y el producto por separado.
- **Pregunta de entrevista:** ¿Cómo evitarías que un agente que se optimiza solo haga trampa?
- **Fuentes:** Darwin Gödel Machine, vía The Register (secundario); Anthropic, Demystifying evals for AI agents; Harness², docs/EXPERIMENTS.md; roadmapv4, nivel 5; roadmapv6, Stanford CS329A y CS329Z clases 9 y 11; Nota, bloque 15; Harrison Chase, en tu biblioteca; CS146S 2026 semana 10.
- **Ojo:** El caso de Darwin Gödel Machine viene de prensa, y del paper solo se vio un fragmento: hay que cotejarlo antes de publicarlo.

### Módulo 12. Capacidades especiales (optativo)

#### 69. Voz, imagen y video

*Reordenada · 25 min + 3 h · Hasta USD 5*

- **De dónde sale:** Creativos de la 08 actual; avisos: voz 13 %.
- **Al terminar:** Decides cuándo tu sistema necesita voz, imágenes o video, y qué costo trae.
- **Ideas:**
  1. Es optativa: voz aparece en 13 % de los avisos de productos, y 9 % sin boilerplate.
  2. Multimodal: texto, imagen, audio y video como entrada.
  3. Voz: latencia y conversación en tiempo real.
  4. RAG con imágenes.
  5. Generar imagen y video: control de cámara y movimiento.
- **Vocabulario:** multimodal, tiempo real, transcripción, difusión, storyboard.
- **Flowchart o pseudocódigo:** Flowchart de voz: audio, texto, modelo y voz, con el tiempo de cada paso.
- **Construcción dirigida:** Una de dos: pide una entrada por voz para tu sistema, o un video con calidad profesional.
- **Cómo se comprueba:** Mides la latencia de punta a punta, o comparas el video contra tu storyboard.
- **Qué evita:** Sumar voz o video sin medir costo y latencia.
- **Visual:** Figura: el flujo de voz, con tiempos medidos.
- **Fuentes:** roadmapv6, DeepLearning.AI Voice e IBM multimodal; Google, Gemini File Search; Nota, bloque 8 (Higgsfield); Conteo de 969 avisos, job_market_validation.md.
- **Ojo:** El conteo mide la palabra voz en avisos, no si el puesto la exige.

#### 70. Agentes que usan el computador

*Nueva · 25 min + 2 h · Hasta USD 5*

- **De dónde sale:** CMU; Microsoft; DeepLearning.AI; avisos: 1 %.
- **Al terminar:** Sabes cuándo usar computer use, y cómo aislarlo.
- **Ideas:**
  1. Es optativa: computer use aparece en 1 % de los avisos de productos, 3 de 465.
  2. Ver la pantalla y actuar: cómo funciona.
  3. Cuándo conviene, y cuándo es mejor una API.
  4. Aislamiento: entorno desechable y sin cuentas reales.
  5. La web es una entrada no confiable.
  6. Un uso útil: Factory prueba la app como usuario con computer use.
- **Vocabulario:** computer use, agente de interfaz, captura, entorno desechable, navegador automatizado.
- **Flowchart o pseudocódigo:** Flowchart: captura, decidir, actuar y verificar.
- **Construcción dirigida:** Pide un agente que complete un formulario de prueba en un entorno aislado. Se puede sumar a tu auditor como prueba de usuario.
- **Cómo se comprueba:** No sale del entorno. Se detiene antes de enviar si falta un dato.
- **Qué evita:** Un agente con tus sesiones abiertas, expuesto a páginas hostiles.
- **Visual:** Figura: el ciclo con el entorno aislado.
- **Fuentes:** CMU 11-768, clase 7; roadmapv6, Microsoft lección 15 y DeepLearning.AI Computer Use; Factory, charla de Luke Alvoeiro (autorreportado); AI Agent Traps (secundario); Conteo de 969 avisos, job_market_validation.md.

#### 71. Modelos locales y abiertos

*Reordenada · 25 min + 2 h · Gratis*

- **De dónde sale:** Pendiente de la 03 actual; `lab/`; enlaza con Inferencia.
- **Al terminar:** Sabes cuándo correr un modelo propio, con qué hardware y a qué costo.
- **Ideas:**
  1. Es optativa: vLLM aparece en 3 % de los avisos de productos, GPU en 9 % y optimización de inferencia en 6 %.
  2. Cuándo conviene: privacidad, costo y control.
  3. Correrlo: por ejemplo con Ollama o vLLM.
  4. Cuantización y GPU.
  5. Comparar el costo real con una API.
- **Vocabulario:** pesos abiertos, cuantización, GPU, Ollama, vLLM, inferencia, throughput.
- **Flowchart o pseudocódigo:** Árbol de decisión: API o modelo local.
- **Construcción dirigida:** Pide correr un modelo local como subagente de tu sistema, y comparar calidad, latencia y costo contra la API con tu suite.
- **Cómo se comprueba:** Tabla con tus propios números, sobre las mismas tareas.
- **Qué evita:** Comprar hardware para algo que una API hacía mejor.
- **Visual:** Se usan las mediciones de `lab/`, hechas sin GPU.
- **Fuentes:** roadmapv6, MIT AI Studio y Microsoft lección 17; `lab/` de Academy; Conteo de 969 avisos, job_market_validation.md.
- **Ojo:** No hay conteo directo de «modelos locales»: esas cifras son lo más cercano. El tema a fondo vive en Inferencia, del Camino Modelos, donde vLLM sube a 9 % y GPU a 33 %.

#### 72. Protocolos entre agentes

*Nueva · 20 min + 1 h · Gratis*

- **De dónde sale:** Google; Microsoft; DeepMind; avisos: 1 %.
- **Al terminar:** Sabes qué resuelven A2A y MCP, y por qué casi nunca necesitas un protocolo entre agentes hoy.
- **Ideas:**
  1. Es optativa: A2A aparece en 1 % de los avisos de productos, 3 de 465. MCP, en 15 %.
  2. MCP conecta herramientas. A2A conecta agentes.
  3. Delegar entre organizaciones exige confianza y permisos.
  4. DeepMind: a MCP le falta la capa de política, y A2A no está pensado para seguridad adversaria.
  5. Cuándo de verdad hace falta: cuando el otro agente no es tuyo.
- **Vocabulario:** A2A, tarjeta de agente, delegación, web agéntica, cadena de delegación.
- **Flowchart o pseudocódigo:** Diagrama de secuencia entre dos agentes.
- **Construcción dirigida:** Pide un diseño de una página: qué haría falta para que tu sistema delegue en el agente de otra empresa, y qué puede salir mal.
- **Cómo se comprueba:** Tu pre-mortem cubre permisos, identidad y verificación.
- **Qué evita:** Sumar un protocolo sin tener el problema.
- **Visual:** Figura: MCP y A2A, lado a lado.
- **Fuentes:** roadmapv6, Google día 2, Microsoft lección 11, Google DeepMind y MIT AI Studio; DeepMind, Intelligent AI Delegation (arXiv 2602.11865); Conteo de 969 avisos, job_market_validation.md.
- **Ojo:** La última idea es criterio de esta ficha, no de una fuente.

### Módulo 13. A. Deep learning por dentro

#### 73. Tensores y cuentas de recursos

*Esencial · Nueva · 20 min + 1,5 h · Hasta USD 5 · hito M0*

- **De dónde sale:** CS336 clase 2; Raschka.
- **Al terminar:** Antes de correr un modelo chico, predices sus formas de tensores, parámetros, memoria y tiempo por paso, y lo medido cae dentro de tu margen.
- **Ideas:**
  1. Parte de la lección de matemática del tronco: un tensor es un arreglo con forma, y cada operación tiene una regla de formas.
  2. Broadcasting puede dar una forma equivocada sin lanzar error. Por eso se anota cada dimensión.
  3. Memoria = parámetros por bytes por parámetro, más estado del optimizador, gradientes y activaciones.
  4. Tiempo por paso = FLOPs del paso dividido por los FLOPs por segundo que el hardware logra de verdad.
  5. La intensidad aritmética, operaciones por byte movido, dice si te limita el cómputo o la memoria.
- **Vocabulario:** tensor, forma, broadcasting, parámetro, FLOPs, intensidad aritmética, tiempo por paso.
- **Flowchart o pseudocódigo:** Hoja de cuentas por capa: forma de entrada y salida, parámetros, FLOPs y memoria. Fijas tu margen → el agente corre el modelo en CPU → comparas → si erras, explicas por qué.
- **Construcción dirigida:** Pide un script que imprima formas, parámetros, memoria y tiempo por paso de un modelo diminuto en CPU. Nace «Tu propio modelo».
- **Cómo se comprueba:** Lo medido queda dentro del margen que fijaste antes de correr. Un agente auditor nuevo saca las mismas cifras desde cero. Un LLM examinador cambia el tamaño de una capa y predices el efecto, sin notas.
- **Qué evita:** Alquilar una GPU sin saber si el modelo cabe en memoria ni cuánto tardará.
- **Visual:** Escena: un tensor cambia de forma capa por capa, y suben los contadores de parámetros, memoria y FLOPs.
- **Fuentes:** CS336, clase 2; Raschka, repo LLMs-from-scratch, análisis de FLOPs.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU, así que no paga GPU. El servidor de Fran no tiene PyTorch instalado y le quedan 4,9 GB libres: revisarlo antes de este hito.

#### 74. Optimización: SGD, momentum, Adam y calendario

*Esencial · Reordenada · 25 min + 2 h · Hasta USD 5 · hito M1*

- **De dónde sale:** ml/08 y ml/09 actuales; CS230.
- **Al terminar:** Explicas qué guarda y qué cambia cada optimizador, y predices la forma de la curva de pérdida antes de correr.
- **Ideas:**
  1. Parte de redes neuronales del tronco: backprop te da el gradiente, y el optimizador decide el paso.
  2. SGD estima el gradiente con un lote. Esa estimación tiene ruido.
  3. Momentum acumula dirección: reduce la oscilación entre paredes empinadas y avanza en la dirección constante.
  4. Adam escala cada parámetro según la historia de sus gradientes, y por eso exige menos ajuste a mano.
  5. La tasa de aprendizaje es el hiperparámetro que más decide: si es alta diverge, si es baja no avanza.
  6. Un calendario sube la tasa al inicio y la baja al final, porque el paso útil cambia durante el entrenamiento.
- **Vocabulario:** SGD, lote, tasa de aprendizaje, momentum, Adam, weight decay, warmup, calendario.
- **Flowchart o pseudocódigo:** En papel, un paso a mano de una red de 2 capas: pasada hacia adelante, pérdida, gradientes y actualización. Luego pseudocódigo sin IA de SGD, momentum y Adam, con el estado que guarda cada uno. El agente lo traduce literal.
- **Construcción dirigida:** Pide al agente correr tus tres optimizadores en el modelo diminuto del proyecto y graficar sus curvas.
- **Cómo se comprueba:** Una prueba compara tu pseudocódigo traducido con el optimizador de la librería: dan los mismos valores en varios pasos. Tu paso en papel coincide con el que imprime el programa. Antes de correr dijiste qué curva gana y qué pasa con una tasa diez veces mayor. Si erraste, explicas por qué.
- **Qué evita:** Cambiar de optimizador al azar cuando el problema era la tasa de aprendizaje o un bug.
- **Visual:** Escena: tres puntos bajan por la misma superficie de pérdida con SGD, momentum y Adam, y una perilla cambia la tasa de aprendizaje.
- **Fuentes:** CS230; Karpathy, Zero to Hero, clase 5; Lecciones ml/08 y ml/09 actuales.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU.

#### 75. Que la señal sobreviva: inicialización y normalización

*Esencial · Reordenada · 25 min + 2 h · Hasta USD 5 · hito M1*

- **De dónde sale:** ml/09 actual; Karpathy; CS230.
- **Al terminar:** Predices la pérdida inicial, y lees en histogramas si las activaciones y los gradientes llegan sanos a todas las capas.
- **Ideas:**
  1. Cada capa multiplica la señal: su varianza puede apagarse o explotar con la profundidad.
  2. Xavier y He eligen la varianza de los pesos para que la señal mantenga su escala. He está pensada para ReLU.
  3. Una última capa con pesos chicos da una pérdida inicial cercana a ln(tamaño del vocabulario).
  4. Una unidad saturada tiene gradiente casi nulo y deja de aprender.
  5. BatchNorm depende del lote y se comporta distinto al evaluar. LayerNorm no depende del lote, y por eso calza con secuencias.
  6. Las conexiones residuales dan al gradiente un camino directo.
- **Vocabulario:** inicialización, Xavier, He, saturación, BatchNorm, LayerNorm, conexión residual, histograma de activaciones.
- **Flowchart o pseudocódigo:** Predices la pérdida inicial y qué capa saturará. El agente grafica activaciones y gradientes por capa. Rompes a propósito la inicialización, predices el histograma y lo comparas. Después lo arreglas con normalización.
- **Construcción dirigida:** Pide al agente agregar al modelo diminuto un panel de estadísticas por capa. Es tu instrumento para el resto del proyecto.
- **Cómo se comprueba:** La pérdida inicial queda cerca de ln(tamaño del vocabulario). Con pesos enormes, el histograma muestra la saturación que predijiste. Lees el código y encuentras si BatchNorm quedó en modo de entrenamiento al evaluar.
- **Qué evita:** Entrenar horas una red cuyas capas ya estaban muertas en el primer paso.
- **Visual:** Escena: histogramas por capa que se aplastan o se abren al mover una perilla de inicialización.
- **Fuentes:** Karpathy, Zero to Hero, clase 4; CS230; Lección ml/09 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU.

#### 76. Regularización y generalización

*Esencial · Reordenada · 20 min + 1,5 h · Hasta USD 5 · hito M1*

- **De dónde sale:** ml/09 actual; CS229.
- **Al terminar:** Lees la brecha entre entrenamiento y validación, predices qué técnica la reduce y lo mides con varias semillas.
- **Ideas:**
  1. Parte de entrenar, validar y probar del tronco: la brecha entre curvas mide cuánto no generaliza el modelo.
  2. Sesgo alto: no aprende ni el entrenamiento. Varianza alta: aprende el entrenamiento y no generaliza.
  3. Primero sobreajusta y después regulariza. La regularización no arregla un modelo que no aprende.
  4. Weight decay favorece pesos chicos. Dropout apaga unidades al azar, y así ninguna puede cargar sola con la predicción.
  5. Early stopping usa validación para decidir cuándo parar. Por eso la validación ya no sirve como prueba final.
  6. Más datos suele ganarle a cualquier técnica de regularización.
- **Vocabulario:** generalización, sesgo, varianza, weight decay, dropout, early stopping, semilla.
- **Flowchart o pseudocódigo:** Tabla de hipótesis: técnica → qué curva debería moverse → cuánto. Fijas la predicción, el agente corre con y sin cada técnica, con varias semillas, y comparas.
- **Construcción dirigida:** Pide al agente una comparación de regularización sobre el modelo diminuto, con una tabla de resultados por semilla.
- **Cómo se comprueba:** La diferencia entre técnicas es mayor que la variación entre semillas, o concluyes que no hay efecto. Dropout activo al evaluar empeora la medición: lo rompes a propósito y lo ves. Un LLM examinador te pide defender cada elección, sin notas.
- **Qué evita:** Declarar mejora con una sola semilla, o ajustar tanto contra validación que deje de medir generalización.
- **Visual:** Figura: curvas de entrenamiento y validación para tres regímenes: sesgo alto, varianza alta y sano.
- **Fuentes:** CS229, teoría del aprendizaje; CS230; Lección ml/09 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU.

#### 77. Diagnosticar un entrenamiento

*Esencial · Nueva · 25 min + 3 h · Hasta USD 5 · hito M1 y M3*

- **De dónde sale:** Karpathy; Tuning Playbook; práctica de ml/09.
- **Al terminar:** Recibes un entrenamiento que corre sin errores y da malos resultados, y encuentras la causa leyendo código y curvas.
- **Ideas:**
  1. Un entrenamiento malo suele correr sin errores. El programa no te avisa.
  2. Protocolo: revisar la pérdida inicial → sobreajustar un lote → leer las curvas → revisar gradientes por capa.
  3. Si no sobreajusta un solo lote, el bug está antes de cualquier ajuste de hiperparámetros.
  4. Cambia una cosa a la vez, y anota antes qué esperas ver.
  5. Ajustar hiperparámetros es un método, no una búsqueda a ciegas.
  6. Generar y luego preguntar hasta entender rindió 86 % en el ensayo de Anthropic. Delegar todo rindió 39 %.
- **Vocabulario:** bug silencioso, sobreajustar un lote, zero_grad, máscara, fuga de datos, curva de pérdida, hiperparámetro.
- **Flowchart o pseudocódigo:** Tu árbol de diagnóstico: síntoma → hipótesis → qué miras → un solo cambio. Luego la caza: un agente saboteador mete 3 bugs silenciosos en una copia, por ejemplo un zero_grad que falta, una máscara mal puesta y una fuga de datos. No te dice cuáles.
- **Construcción dirigida:** Pide al agente el saboteador y un registro sellado de sus cambios. Pide también el entrenamiento en CPU del modelo diminuto, ya sano.
- **Cómo se comprueba:** Pérdida inicial cerca de ln(tamaño del vocabulario), y el modelo sobreajusta un solo lote. Encuentras los 3 bugs sin ayuda, con línea y síntoma, y lo contrastas con el registro sellado. Con tus arreglos, las curvas vuelven a lo normal. Un agente auditor nuevo repite las cifras desde cero.
- **Qué evita:** Aceptar un número porque el programa terminó sin errores.
- **Visual:** Escena: curvas de pérdida con un bug activable. Tú adivinas cuál es antes de ver el código.
- **Fuentes:** Karpathy, Zero to Hero, clase 4; Deep Learning Tuning Playbook de Google (catálogo de Fran, no reabierto); Shen y Tamkin, ensayo controlado de Anthropic, 2026; PaperBenchX, arXiv 2610.39744.
- **Ojo:** Aquí la regla sin código a mano cuesta más. En el ensayo de Anthropic (N = 52, medición inmediata, sin flujo agéntico), la mayor brecha fue en depurar: quien delega aprende menos justo esto. Leer, predecir y cazar es la compensación propuesta, y no está probada. CS336 y 11-711 prohíben resolver con LLM. Costo no calculado en las notas: categoría prudente.

### Módulo 14. B. Lenguaje

#### 78. Del texto a tokens y embeddings

*Esencial · Reordenada · 20 min + 1,5 h · Hasta USD 5 · hito M2*

- **De dónde sale:** ml/12 actual; Karpathy; CS224N.
- **Al terminar:** Predices cómo tokeniza un texto y por qué dos tokens quedan cerca en el espacio de embeddings.
- **Ideas:**
  1. BPE parte de bytes y funde repetidamente el par más frecuente. El vocabulario es la lista de fusiones.
  2. El modelo ve tokens, no letras. Por eso le cuesta contar letras.
  3. El mismo texto gasta distinta cantidad de tokens según el idioma y el corpus de entrenamiento del tokenizador.
  4. Un embedding es una fila aprendida de una tabla: tamaño del vocabulario por dimensión.
  5. Dos tokens quedan cerca cuando sirven para predecir contextos parecidos.
- **Vocabulario:** token, BPE, fusión, vocabulario, token especial, embedding, dimensión.
- **Flowchart o pseudocódigo:** Pseudocódigo sin IA de BPE: contar pares → fundir el más frecuente → repetir. Haces en papel las primeras fusiones de un texto corto. El agente traduce literal.
- **Construcción dirigida:** Pide al agente tu tokenizador, entrenado con un corpus pequeño, y una tabla de embeddings conectada al modelo del proyecto.
- **Cómo se comprueba:** Decodificar lo codificado devuelve el texto exacto en una prueba, con acentos y emojis. Las primeras fusiones coinciden con tu papel. Predijiste los parámetros de la tabla de embeddings, y el programa imprime esa cifra.
- **Qué evita:** Entrenar y servir con tokenizadores distintos, que da resultados malos sin ningún error.
- **Visual:** Escena: un texto en español se funde par a par en tokens, y los embeddings se acomodan en un plano.
- **Fuentes:** Karpathy, Zero to Hero, clase 8; CS224N, word vectors; CS336, clase 1; Lección ml/12 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU.

#### 79. Modelar lenguaje: predecir el siguiente token

*Esencial · Nueva · 20 min + 1,5 h · Hasta USD 5 · hito M2*

- **De dónde sale:** Karpathy; 11-711.
- **Al terminar:** Explicas un modelo de lenguaje como predicción del siguiente token, y dejas un bigrama de referencia con `val_bpb` medido.
- **Ideas:**
  1. Un modelo autorregresivo descompone la probabilidad de un texto en una predicción por token.
  2. La entropía cruzada mide cuánto te sorprende el token real.
  3. Un modelo uniforme da exactamente ln(tamaño del vocabulario). Es tu piso para detectar bugs.
  4. `val_bpb` son bits por byte en validación, y permite comparar modelos con tokenizadores distintos.
  5. Un bigrama solo mira un token atrás. Un MLP mira una ventana fija, y sus parámetros crecen con ella.
- **Vocabulario:** modelo autorregresivo, bigrama, entropía cruzada, nats y bits, val_bpb, ventana de contexto, muestreo.
- **Flowchart o pseudocódigo:** Predices la pérdida de un modelo uniforme y la de un bigrama. Pseudocódigo sin IA del bigrama con conteos. El agente traduce literal y entrena el mismo bigrama con gradientes.
- **Construcción dirigida:** Pide al agente el bigrama de referencia y un MLP sobre tu tokenizador. El bigrama es la línea base del hito M2.
- **Cómo se comprueba:** El bigrama por conteos y el bigrama por gradientes llegan casi a la misma pérdida. La pérdida inicial calza con tu predicción. Un agente auditor nuevo reproduce el `val_bpb` del bigrama.
- **Qué evita:** Celebrar un Transformer sin saber cuánto le gana a un bigrama.
- **Visual:** Escena: la tabla del bigrama se llena con conteos, y una muestra de texto mejora al ampliar la ventana.
- **Fuentes:** Karpathy, Zero to Hero, clases 2 y 3; 11-711, modelado autorregresivo; Autoresearch, repo de Karpathy (métrica val_bpb).
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU.

#### 80. Secuencias: RNN y por qué no alcanzan

*Reordenada · 15 min + 1 h · Hasta USD 5 · hito M2*

- **De dónde sale:** ml/10 actual.
- **Al terminar:** Explicas con un experimento por qué una RNN falla en dependencias largas, y por qué eso llevó a la atención del tronco.
- **Ideas:**
  1. Una RNN resume todo el pasado en un vector de tamaño fijo.
  2. El gradiente cruza la misma matriz en cada paso de tiempo, así que se apaga o explota.
  3. LSTM agrega compuertas que dejan pasar información, y el recorte de gradiente frena la explosión.
  4. Una RNN procesa un token tras otro, y por eso paraleliza mal en GPU.
  5. La atención del tronco resuelve el cuello de botella: cada token mira a todos los demás.
- **Vocabulario:** RNN, estado oculto, LSTM, gradiente que se apaga, recorte de gradiente, dependencia larga.
- **Flowchart o pseudocódigo:** Experimento: copiar un token visto N posiciones atrás. Predices en qué N falla la RNN y qué pasa con la atención. El agente corre los dos en CPU y grafica acierto contra N.
- **Construcción dirigida:** Pide al agente el experimento de dependencias largas con una RNN y con tu bloque de atención, sobre el mismo conjunto de datos.
- **Cómo se comprueba:** La gráfica de acierto contra N muestra la caída, y la comparas con tu predicción. El histograma de gradientes por paso de tiempo muestra el apagado. Quitas el recorte a propósito y ves si la pérdida explota.
- **Qué evita:** Tomar la historia como decoración: el problema del contexto fijo reaparece en los límites de memoria de un LLM.
- **Visual:** Escena: una señal de gradiente se debilita paso a paso hacia atrás en el tiempo.
- **Fuentes:** CS224N, modelos de lenguaje y RNN; 11-711, RNN; Lección ml/10 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU.

#### 81. Decisiones de arquitectura moderna

*Nueva · 25 min + 2 h · Hasta USD 5 · hito M2*

- **De dónde sale:** CS336 clases 3 y 4.
- **Al terminar:** Lees la model card de un LLM y explicas qué decisión de arquitectura tomó, qué gana y cuánto cuesta.
- **Ideas:**
  1. Parte de la atención del tronco: desde ahí, los modelos modernos cambian piezas puntuales.
  2. Cada decisión se juzga por lo mismo: calidad, parámetros, memoria y cómputo.
  3. Dónde va la normalización y cómo se codifica la posición cambian la estabilidad del entrenamiento.
  4. La mezcla de expertos activa solo una parte del modelo para cada token, y baja el cómputo por paso.
  5. Las alternativas a la atención buscan bajar su costo, que crece con la longitud de la secuencia.
- **Vocabulario:** pre-norm, codificación posicional, cabezas de atención, mezcla de expertos, alternativa a la atención, model card.
- **Flowchart o pseudocódigo:** Tabla de decisiones: opción → qué predices en `val_bpb`, parámetros y tiempo por paso. Cambias una sola decisión por corrida, con varias semillas.
- **Construcción dirigida:** Pide al agente tu Transformer configurable, y corre una ablación: quitar una decisión a la vez. El Transformer del proyecto queda con las decisiones que midieron a favor.
- **Cómo se comprueba:** Parámetros y memoria calzan con tu cuenta antes de correr. La tabla de ablación muestra el efecto de cada decisión, con varias semillas. Un LLM examinador te da una model card y explicas sus decisiones, sin notas.
- **Qué evita:** Copiar la arquitectura de moda sin saber qué problema resuelve en tu escala.
- **Visual:** Figura: bloque de Transformer con piezas intercambiables y su efecto en parámetros y memoria.
- **Fuentes:** CS336, clases 3 y 4; 11-711, mezcla de expertos; Raschka, repo, Qwen3 con mezcla de expertos.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Se corre en CPU con un modelo diminuto; la medición en GPU queda para el hito M2.

### Módulo 15. C. Entrenar un LLM

#### 82. Pre-entrenar: el ciclo a escala

*Esencial · Reordenada · 25 min + 4 h · USD 5 a 30 · hito M2*

- **De dónde sale:** ml/13 actual; CS336; Raschka.
- **Al terminar:** Depuras en CPU con un modelo diminuto, alquilas una GPU solo cuando pasa, y tu Transformer chico le gana al bigrama.
- **Ideas:**
  1. El ciclo es el mismo a toda escala: lote → pérdida → gradiente → paso.
  2. A mayor escala se suman puntos de control, registro, semillas y reanudación tras un corte.
  3. Se depura en CPU con un modelo diminuto. La GPU se usa para entrenar o medir, no para depurar.
  4. Antes de alquilar se predice: tiempo por paso, memoria, horas y dólares.
  5. Un servidor sin GPU sirve para orquestar y hacer pruebas chicas, no para entrenar.
  6. Los pesos van al almacenamiento del proveedor o al Hub de Hugging Face, no al disco chico del servidor.
- **Vocabulario:** pre-entrenamiento, punto de control, precisión mixta, acumulación de gradientes, GPU por horas, instancia interrumpible, val_bpb.
- **Flowchart o pseudocódigo:** Flowchart: prueba en CPU con modelo diminuto → ¿pérdida inicial calza y sobreajusta un lote? → sí: predices horas y dólares → alquilas GPU → guardas puntos de control fuera del servidor → apagas. No: vuelves a CPU.
- **Construcción dirigida:** Pide al agente el script único que corre en CPU y en GPU, con la prueba como puerta de entrada. El Transformer entrena con GPU alquilada: cierra el hito M2.
- **Cómo se comprueba:** Mejora el `val_bpb` frente al bigrama de referencia, con varias semillas. El registro muestra que la prueba en CPU pasó antes de encender la GPU. Horas y dólares reales quedan dentro del margen que fijaste. Un agente auditor nuevo repite la cifra desde cero.
- **Qué evita:** Pagar GPU para descubrir un bug que la CPU mostraba gratis, o dejar la máquina encendida.
- **Visual:** Escena: la puerta entre CPU y GPU, con un contador de dólares que corre solo cuando la prueba pasó.
- **Fuentes:** CS336, tarea 1 y lista de precios (B200, 2026-03-28); Raschka, cap. 5; fast.ai, Kaggle y Paperspace; Lección ml/13 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente, sin probar. Con B200 a USD 3,05 a 7,49 por hora (CS336, marzo de 2026), USD 30 son entre 4 y 9 horas. Faltan precios de GPUs baratas y cuotas de Colab y Kaggle. Modal listaba USD 30 gratis al mes.

#### 83. Datos para pre-entrenar

*Esencial · Reordenada · 20 min + 3 h · USD 5 a 30 · hito M4*

- **De dónde sale:** ml/13 actual; CS336.
- **Al terminar:** Limpias un corpus con reglas explícitas y mides el efecto de cada limpieza sobre un mismo set de prueba.
- **Ideas:**
  1. El modelo aprende lo que le das: los datos definen buena parte de su calidad.
  2. Se pasa por fuentes → filtrado → deduplicación → mezcla, y a veces datos sintéticos.
  3. Deduplicar evita memorizar repeticiones y evita que el mismo texto quede en entrenamiento y prueba.
  4. Un duplicado cruzado entre esos dos conjuntos infla la métrica sin que nada falle.
  5. Cada filtro tiene un costo: puede sacar justo lo que el modelo necesitaba.
- **Vocabulario:** Common Crawl, filtrado, deduplicación, casi duplicado, mezcla, datos sintéticos, licencia.
- **Flowchart o pseudocódigo:** Pipeline con conteo en cada etapa: fuente → filtro → deduplicación → separación de la prueba → mezcla. Predices cuánto cae cada etapa y cuánto mejora la métrica.
- **Construcción dirigida:** Pide al agente el pipeline sobre un corpus pequeño y dos entrenamientos, con y sin limpieza. Comienza el hito M4.
- **Cómo se comprueba:** Efecto medido con y sin limpieza, sobre el mismo set de prueba. Rompes a propósito: dejas duplicados cruzados y ves subir la métrica falsa. Un agente auditor nuevo reproduce los conteos por etapa desde cero.
- **Qué evita:** Comparar modelos con sets de prueba distintos, o medir con una prueba contaminada.
- **Visual:** Escena: un embudo de datos con el conteo de cada etapa, y al lado la métrica con y sin limpieza.
- **Fuentes:** CS336, clases 13 y 14, tarea 4; Lección ml/13 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Incluye dos entrenamientos en GPU alquilada. El corpus no cabe en un disco de 4,9 GB como el de Fran: usa el almacenamiento del proveedor.

#### 84. Evaluar modelos de lenguaje

*Esencial · Nueva · 20 min + 2 h · Hasta USD 5 · hito M4*

- **De dónde sale:** Bloque 26 de la nota; CS336 clase 12; 6.S950.
- **Al terminar:** Diseñas una evaluación de LLMs como un experimento: con afirmación, línea base y juez auditado, fijados antes de ver resultados.
- **Ideas:**
  1. Parte de primeros evals: allí evaluaste una app, y aquí comparas modelos y entrenamientos.
  2. La pérdida mide predicción de tokens, no si el modelo sirve para la tarea.
  3. Un benchmark público puede estar contaminado o ser ajeno a tu tarea.
  4. Un eval es diseño experimental: se fija la suite antes de entrenar.
  5. El juez también se audita. Si es un LLM, puede equivocarse siempre en la misma dirección.
  6. Sin medir la variación, una diferencia chica no significa nada.
- **Vocabulario:** benchmark, suite fijada, línea base, juez, contaminación, variación entre corridas.
- **Flowchart o pseudocódigo:** Flowchart: afirmación → métrica → suite congelada → línea base → juez → auditoría del juez con casos de respuesta conocida → decisión. Predices el resultado antes de correr.
- **Construcción dirigida:** Pide al agente la suite fija del proyecto y úsala para el efecto de la limpieza. Cierra el hito M4, y la misma suite servirá en el M5.
- **Cómo se comprueba:** El juez clasifica bien un conjunto de respuestas que ya conoces, buenas y malas. Evaluar dos veces el mismo modelo muestra la variación de base. Un agente auditor nuevo llega al mismo resultado desde cero.
- **Qué evita:** Elegir un modelo por un benchmark ajeno, o cambiar la suite después de ver los resultados.
- **Visual:** Figura: matriz de confusión del juez, junto a la diferencia entre modelos y su variación.
- **Fuentes:** CS336, clase 12; CS224N, benchmarks y tarea 4; 11-711, técnicas de evaluación; MIT 6.S950, «evals as experimental design» y «auditing the artifact and the judge»; Conteo de 504 avisos de modelos: evaluation 52 %, eval 10 %.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Los conteos de avisos miden menciones, no exigencias.

#### 85. GPU, memoria y paralelismo

*Nueva · 25 min + 2,5 h · USD 5 a 30*

- **De dónde sale:** CS336 clases 5 a 8; avisos: GPU 33 %, entrenamiento distribuido 18 %.
- **Al terminar:** Lees un perfil de entrenamiento, dices qué limita el paso y predices cuánto acelera sumar otra GPU.
- **Ideas:**
  1. Una GPU gana en operaciones paralelas, y su límite suele ser el ancho de banda de memoria.
  2. El análisis de roofline dice si tu kernel está limitado por cómputo o por memoria.
  3. En paralelismo de datos, cada GPU calcula sobre su lote y luego sincroniza gradientes.
  4. La comunicación colectiva y la carga de datos ponen un techo a la aceleración.
  5. Un puesto de inferencia de Anthropic dice que razonar sobre esto vale más que haber escrito kernels.
- **Vocabulario:** ancho de banda de memoria, roofline, precisión mixta, paralelismo de datos, comunicación colectiva, perfilador, kernel.
- **Flowchart o pseudocódigo:** Divides un paso en datos, pasada hacia adelante, backward, optimizador y comunicación. Predices el porcentaje de cada parte y la aceleración con 2 GPUs. Lees el perfil real y explicas la diferencia.
- **Construcción dirigida:** Pide al agente perfilar tu Transformer con 1 y 2 GPUs y dejar una tabla por etapa. Tu proyecto gana un perfil de rendimiento.
- **Cómo se comprueba:** La aceleración medida queda dentro de tu margen. Si no, señalas qué etapa la frenó. Frenas la carga de datos a propósito y el perfil lo muestra. Un LLM examinador te da un perfil desconocido y nombras el cuello de botella, sin notas.
- **Qué evita:** Comprar más GPU cuando el freno está en la carga de datos o en la comunicación.
- **Visual:** Escena: barra del paso dividida por etapa, que cambia al sumar GPUs y revela el límite.
- **Fuentes:** CS336, clases 5 a 8; MIT 6.S191, «Secrets to Massively Parallel Training»; Performance Engineer, Inference Systems, Anthropic; Conteo de 504 avisos de modelos: GPU 33 %, entrenamiento distribuido 18 %, CUDA 13 %.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Together exige mínimo 8 GPUs según la lista de CS336: busca un proveedor que alquile 2.

#### 86. Leyes de escala

*Reordenada · 20 min + 2,5 h · USD 5 a 30*

- **De dónde sale:** ml/13 actual; CS336.
- **Al terminar:** Ajustas una ley de escala con tus corridas y predices un tamaño que no entrenaste.
- **Ideas:**
  1. La pérdida suele caer como una ley de potencia al crecer parámetros, datos y cómputo.
  2. Con presupuesto fijo hay un balance: más parámetros implican menos pasos.
  3. En escala logarítmica la ley se ve como una recta, y por eso se ajusta fácil.
  4. Extrapolar es una hipótesis, no un resultado: la ley vale mientras se mantengan las condiciones.
  5. Esta cuenta decide cuánto vale gastar en el siguiente modelo.
- **Vocabulario:** ley de escala, ley de potencia, escala logarítmica, presupuesto de cómputo, extrapolación, API de entrenamiento.
- **Flowchart o pseudocódigo:** Eliges varios tamaños y fijas el presupuesto. El agente entrena y ajusta la ley. Reservas un tamaño, predices su pérdida con margen, y recién entonces lo corres.
- **Construcción dirigida:** Pide al agente entrenar varios tamaños de tu Transformer, por ejemplo con una API de entrenamiento, y dejar la gráfica con la ley ajustada.
- **Cómo se comprueba:** El tamaño reservado cae dentro del margen que fijaste antes. Quitas un punto del ajuste y ves cuánto cambia la predicción. Un agente auditor nuevo ajusta la ley desde los registros y da la misma pendiente.
- **Qué evita:** Prometer un modelo más grande con una extrapolación que nadie probó.
- **Visual:** Escena: puntos en escala logarítmica forman una recta, y un punto nuevo se revela contra el margen.
- **Fuentes:** CS336, clases 9 y 11, tarea 3; Lección ml/13 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente.

### Módulo 16. D. Post-entrenamiento y fine-tuning

#### 87. Aprendizaje por refuerzo, lo justo

*Esencial · Nueva · 25 min + 2 h · Hasta USD 5 · hito M6*

- **De dónde sale:** CS229; 6.S191; avisos: 29 %.
- **Al terminar:** Explicas cómo aprende una política solo con recompensas, y por qué RLHF y RLVR dependen de eso.
- **Ideas:**
  1. No hay etiquetas: el agente actúa, recibe una recompensa y ajusta su política.
  2. Gradiente de política: sube la probabilidad de las acciones que dieron buen retorno.
  3. Restar una línea base no cambia la dirección esperada y reduce la varianza.
  4. Explorar cuesta ahora y puede pagar después. Sin exploración, la política se queda en lo primero que funcionó.
  5. El modelo optimiza la recompensa que escribiste, no la que querías.
- **Vocabulario:** política, recompensa, retorno, gradiente de política, línea base, exploración, explotar la recompensa.
- **Flowchart o pseudocódigo:** Pseudocódigo sin IA del gradiente de política en un problema chico. El agente traduce literal. Predices la curva de recompensa con y sin línea base.
- **Construcción dirigida:** Pide al agente el problema chico en CPU, con tu pseudocódigo. Es la base teórica del hito M6.
- **Cómo se comprueba:** La política supera a una política al azar en varias semillas. Inviertes el signo de la recompensa y la política aprende lo contrario. Sin línea base, la variación entre semillas sube como predijiste. Un LLM examinador te pide conectar esto con RLHF, sin notas.
- **Qué evita:** Usar RLHF o RLVR sin saber qué optimizan, y creer en una recompensa mal diseñada.
- **Visual:** Escena: una política elige entre acciones, y sus probabilidades cambian con cada recompensa.
- **Fuentes:** CS229, aprendizaje por refuerzo; MIT 6.S191, RL; 11-711, RL; Conteo de 504 avisos de modelos: 29 % lo menciona, 18 % promedio por empresa.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Corre en CPU. El conteo mide menciones, no exigencias.

#### 88. De modelo base a asistente: SFT

*Esencial · Reordenada · 20 min + 3 h · USD 5 a 30 · hito M5*

- **De dónde sale:** ml/14 actual; Raschka; CS336.
- **Al terminar:** Conviertes un modelo base en un asistente con SFT, y muestras la diferencia con una suite fija.
- **Ideas:**
  1. Un modelo base continúa texto. No sabe que le están pidiendo algo.
  2. SFT usa el mismo ciclo y la misma pérdida, con pares de instrucción y respuesta.
  3. La pérdida se calcula solo en la respuesta: la instrucción se enmascara.
  4. La plantilla de chat debe ser idéntica al entrenar y al servir.
  5. SFT copia el estilo de sus ejemplos. Sus errores también se copian.
- **Vocabulario:** modelo base, SFT, plantilla de chat, máscara de etiquetas, instrucción, conjunto de instrucciones.
- **Flowchart o pseudocódigo:** Predices qué responde el modelo base y qué cambia tras SFT. Lees el código de la máscara de etiquetas con un ejemplo y dibujas qué posiciones cuentan. El saboteador cambia la plantilla, y tú lo detectas.
- **Construcción dirigida:** Pide al agente SFT de un modelo abierto chico con un conjunto público de instrucciones. Avanza el hito M5.
- **Cómo se comprueba:** La suite fija, definida antes, muestra la diferencia entre base y SFT. Encuentras la plantilla saboteada leyendo el código y las respuestas. Un agente auditor nuevo reproduce la cifra desde cero.
- **Qué evita:** Culpar al modelo cuando el error era una plantilla distinta entre entrenar y servir.
- **Visual:** Escena: la misma pregunta entra al modelo base y al SFT, y una máscara marca qué tokens cuentan.
- **Fuentes:** Raschka, cap. 7; CS336, clase 15; Lección ml/14 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente, con GPU alquilada. Depura primero en CPU con un modelo diminuto.

#### 89. Preferencias: RLHF y DPO

*Esencial · Reordenada · 25 min + 3 h · USD 5 a 30 · hito M5 y M6*

- **De dónde sale:** ml/14 actual; CS224N.
- **Al terminar:** Explicas qué cambia entre RLHF y DPO, y mides el efecto de DPO en un problema acotado.
- **Ideas:**
  1. SFT copia respuestas. Las preferencias enseñan cuál de dos respuestas es mejor.
  2. RLHF entrena un modelo de recompensa con esas comparaciones, y optimiza la política con RL.
  3. RLHF puede explotar su modelo de recompensa y derivar hacia la adulación.
  4. DPO saca el modelo de recompensa: sube la respuesta preferida y baja la rechazada, frente a una copia congelada del modelo.
  5. Un parámetro, beta, controla cuánto se aleja el modelo de esa copia.
- **Vocabulario:** preferencia, modelo de recompensa, RLHF, DPO, modelo de referencia, beta, adulación.
- **Flowchart o pseudocódigo:** Pseudocódigo sin IA de la pérdida de DPO. El agente traduce literal, y una prueba compara el resultado con un caso calculado en papel. Predices el efecto de beta antes de correr.
- **Construcción dirigida:** Pide al agente DPO sobre tu modelo SFT, con un conjunto de preferencias acotado. Es la opción de preferencias del hito M6.
- **Cómo se comprueba:** Mejora medida en problemas no vistos, con suite fijada antes. La pérdida de tu pseudocódigo traducido calza con el caso en papel. Con preferencias invertidas, el modelo empeora en la dirección que predijiste. Un LLM examinador te pide defender RLHF frente a DPO, sin notas.
- **Qué evita:** Creer que subir la preferencia mide calidad real. Un juicio mal etiquetado se aprende igual.
- **Visual:** Escena: dos respuestas compiten, y la probabilidad de cada una cambia frente al modelo de referencia.
- **Fuentes:** CS224N, post-entrenamiento; CS336, clase 15 y tarea 5; Raschka, material extra de DPO; Lección ml/14 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente, con GPU alquilada.

#### 90. Razonamiento: RLVR

*Reordenada · 25 min + 3 h · USD 5 a 30 · hito M5 y M6*

- **De dónde sale:** ml/14 actual; CS336.
- **Al terminar:** Explicas cómo RLVR mejora el razonamiento con una recompensa verificable, y mides la mejora en problemas no vistos.
- **Ideas:**
  1. RLVR cambia la opinión humana por un verificador: la respuesta se comprueba.
  2. Sirve donde verificar es barato, como matemáticas o pruebas de código.
  3. El modelo descubre pasos intermedios porque así llega más veces a la recompensa.
  4. Si el verificador tiene un hueco, el modelo lo explota.
  5. Pensar más en inferencia gasta más tokens, y eso se paga en cada respuesta.
- **Vocabulario:** RLVR, verificador, cadena de razonamiento, explotar la recompensa, inference-time scaling, destilación.
- **Flowchart o pseudocódigo:** Eliges un problema con verificador simple. Diseñas el flowchart: generar → verificar → recompensa → actualizar. Predices la mejora y qué hueco del verificador explotará el modelo.
- **Construcción dirigida:** Pide al agente RLVR en tu problema acotado, sobre un modelo chico. Es la opción de razonamiento del hito M6.
- **Cómo se comprueba:** Mejora medida en problemas no vistos. Le das al verificador respuestas falsas conocidas, y las rechaza. Mides tokens por respuesta antes y después. Un agente auditor nuevo repite la cifra desde cero.
- **Qué evita:** Confundir que el modelo aprendió a razonar con que aprendió a pasar tu verificador.
- **Visual:** Escena: un árbol de intentos, donde el verificador marca cuáles reciben recompensa.
- **Fuentes:** CS336, clase 16 y tarea 5; CS224N, Reasoning 1 y 2; Raschka, Build a Reasoning Model; Hugging Face LLM Course, caps. 10 a 12.
- **Ojo:** Costo no calculado en las notas: categoría prudente, con GPU alquilada y sin probar en una sola GPU.

#### 91. Fine-tuning eficiente: LoRA, y cuándo no

*Esencial · Reordenada · 20 min + 3 h · USD 5 a 30 · hito M5*

- **De dónde sale:** ml/14 actual; roadmapv7.
- **Al terminar:** Explicas LoRA con cuentas, y decides con evidencia si tu problema necesitaba fine-tuning.
- **Ideas:**
  1. LoRA congela los pesos y agrega a capas elegidas una corrección de bajo rango.
  2. Entrenas dos matrices chicas en vez de una grande. Por eso predices los parámetros antes de correr.
  3. El rango decide cuánto puede cambiar el modelo y cuánto cuesta.
  4. El adaptador se guarda aparte y se puede activar o sacar.
  5. Se parte por prompting, RAG si falta información, fine-tuning si falla el comportamiento.
- **Vocabulario:** fine-tuning, PEFT, LoRA, rango, adaptador, pesos congelados.
- **Flowchart o pseudocódigo:** Pseudocódigo sin IA de una capa con LoRA. El agente traduce literal, y una prueba verifica que con la corrección en cero el resultado es igual al original. Predices parámetros entrenables y memoria.
- **Construcción dirigida:** Pide al agente un LoRA de un modelo abierto chico con un dataset de prueba. Tu dataset propio llega en la siguiente lección, que cierra el hito M5.
- **Cómo se comprueba:** La librería imprime los parámetros entrenables que predijiste. Con la corrección en cero, la salida es idéntica al modelo original. Un LLM examinador te da tres casos y defiendes prompting, RAG o fine-tuning en cada uno.
- **Qué evita:** Hacer fine-tuning cuando lo que faltaba era contexto, y pagar por mantener un modelo que no hacía falta.
- **Visual:** Escena: una matriz grande congelada, más dos matrices chicas que se entrenan, con el contador de parámetros.
- **Fuentes:** CS224N, «Efficient Adaptation» y clase de Schulman; Raschka, apéndice E; CMU 11-766, «Deciding when to finetune and finetuning efficiently»; Conteo de 504 avisos de modelos: fine-tuning 22 %.
- **Ojo:** Costo no calculado en las notas: categoría prudente, con GPU alquilada. Faltan precios de servicios gestionados, como Tinker.

#### 92. Tu dataset y tu evaluación de fine-tuning

*Esencial · Nueva · 20 min + 4 h · USD 5 a 30 · hito M5*

- **De dónde sale:** Hugging Face caps. 10 a 12.
- **Al terminar:** Armas un dataset propio y una suite fijada antes, y concluyes si LoRA le gana al mismo modelo con buen prompt.
- **Ideas:**
  1. El fine-tuning aprende lo que hay en tu dataset, con todo y sus errores.
  2. Una muestra revisada por ti vale más que un volumen sin mirar.
  3. Separa la prueba antes de aumentar datos, para no filtrar variantes del mismo ejemplo.
  4. Los datos sintéticos de un LLM se auditan como cualquier otro dato.
  5. La línea base es el mismo modelo con tu mejor prompt.
  6. Dos salidas son válidas: gana LoRA, o se concluye que no convenía.
- **Vocabulario:** dataset, curación, aumento de datos, datos sintéticos, suite fijada, línea base, licencia.
- **Flowchart o pseudocódigo:** Flowchart: definir comportamiento → juntar y revisar ejemplos → separar prueba → fijar suite → entrenar → comparar con el buen prompt → decidir. Anotas la predicción antes de entrenar.
- **Construcción dirigida:** Pide al agente el dataset de un problema tuyo, el LoRA y la comparación contra la línea base. Cierra el hito M5.
- **Cómo se comprueba:** Suite fijada antes. LoRA le gana al mismo modelo con buen prompt, o concluyes que no convenía. Un agente nuevo busca en la prueba ejemplos que también estén en entrenamiento. Un agente auditor nuevo repite la comparación desde cero.
- **Qué evita:** Ajustar la suite hasta que LoRA gane, o entrenar con datos que no se pueden usar por licencia.
- **Visual:** Figura: dos columnas con la misma suite, modelo con buen prompt y modelo con LoRA, y la decisión.
- **Fuentes:** Hugging Face LLM Course, caps. 10 a 12; Regla de Fran sobre prompting, RAG y fine-tuning.
- **Ojo:** Costo no calculado en las notas: categoría prudente, sin probar. Incluye entrenar con GPU alquilada.

### Módulo 17. E. Inferencia

#### 93. Servir un LLM: prefill, decode y KV cache

*Esencial · Nueva · 20 min + 2,5 h · USD 5 a 30 · hito M7*

- **De dónde sale:** CS336 clase 10; sigue de la lección publicada; roadmapv7.
- **Al terminar:** Predices la memoria y la latencia de servir un LLM, y explicas qué ahorra la KV cache.
- **Ideas:**
  1. Parte de la lección publicada: prefill procesa el prompt, y decode genera un token a la vez.
  2. Prefill y decode se limitan de forma distinta, y por eso se miden por separado.
  3. Sin KV cache, cada token nuevo recalcula toda la secuencia.
  4. La KV cache guarda claves y valores de atención de los tokens pasados, y cambia memoria por tiempo.
  5. Su memoria crece con capas, longitud y usuarios: puede llenar la GPU antes que los pesos.
- **Vocabulario:** prefill, decode, KV cache, tiempo al primer token, latencia por token, throughput.
- **Flowchart o pseudocódigo:** Pseudocódigo sin IA de KV cache: qué se guarda, cuándo se usa y cuándo se borra. El agente traduce literal. Predices la memoria y el tiempo por token, con y sin caché.
- **Construcción dirigida:** Pide al agente servir tu modelo chico con tu KV cache y medir prefill y decode. Comienza el hito M7.
- **Cómo se comprueba:** Una prueba verifica que la salida es la misma con y sin caché. Memoria y tiempo por token quedan dentro de tu margen. Rompes el caché a propósito, y el tiempo vuelve a crecer con la longitud. Un LLM examinador te pide defender cada parte de tu pseudocódigo, sin notas.
- **Qué evita:** Calcular la memoria solo con los pesos, y quedarse sin GPU al subir el contexto.
- **Visual:** Escena: sigue a la lección publicada. Cada token nuevo agrega una fila a la KV cache, y un contador muestra la memoria.
- **Fuentes:** CS336, clase 10; Raschka, repo, KV cache; Lección publicada Cómo funciona un LLM.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Se depura en CPU; medir de verdad pide GPU alquilada.

#### 94. Muchos usuarios: batching y memoria GPU

*Esencial · Nueva · 25 min + 3 h · USD 5 a 30 · hito M7*

- **De dónde sale:** Docs de vLLM y SGLang (por verificar); avisos: vLLM 9 %.
- **Al terminar:** Sirves un modelo a varios usuarios simultáneos, y lees la tabla de latencia y throughput para fijar la capacidad.
- **Ideas:**
  1. Con un lote fijo, todos esperan a la secuencia más lenta.
  2. Continuous batching deja entrar pedidos nuevos entre pasos de decode.
  3. La memoria GPU manda: la KV cache de cada usuario decide cuántos caben.
  4. PagedAttention reserva esa caché por bloques, y prefix caching reutiliza prefijos comunes.
  5. RadixAttention organiza los prefijos para compartirlos entre pedidos.
  6. Más throughput suele costar más latencia. Se elige según el producto.
- **Vocabulario:** continuous batching, memoria GPU, PagedAttention, prefix caching, RadixAttention, cola, percentil de latencia.
- **Flowchart o pseudocódigo:** Antes de correr, predices cuántos usuarios caben según tu cuenta de memoria, y en qué carga se forma la cola. Diseñas la prueba: niveles de concurrencia, tamaño de prompt y corridas.
- **Construcción dirigida:** Pide al agente servir tu modelo cuantizado o base con, por ejemplo, vLLM o SGLang, y correr la prueba de carga. Crece el hito M7.
- **Cómo se comprueba:** Tabla propia de latencia y throughput por nivel de concurrencia, en 3 corridas. Tu predicción de capacidad queda dentro de tu margen. Si no, explicas por qué. Sobrecargas el servidor a propósito y lees en la traza dónde se forma la cola.
- **Qué evita:** Probar con un usuario y desplegar para muchos.
- **Visual:** Escena: pedidos entran y salen de una fila de espacios en la GPU, junto a una barra de memoria.
- **Fuentes:** Docs de vLLM y SGLang (por verificar); Conteo de 504 avisos de modelos: vLLM 9 %; Performance Engineer, Inference Systems, Anthropic.
- **Ojo:** Las bases de esta lección están por verificar en las docs de vLLM y SGLang: continuous batching, PagedAttention, prefix caching, RadixAttention y requisitos de hardware. Hay que confirmarlas antes de publicar. El posting de Anthropic no nombra vLLM ni SGLang. Costo no calculado en las notas: categoría prudente.

#### 95. Más barato: cuantización y speculative decoding

*Nueva · 20 min + 2,5 h · USD 5 a 30 · hito M7*

- **De dónde sale:** 11-711; MIT 6.5940.
- **Al terminar:** Bajas el costo de servir con una técnica, y muestras qué cambió en memoria, velocidad y calidad.
- **Ideas:**
  1. Cuantizar usa menos bits por peso: baja la memoria y puede bajar la calidad.
  2. La pérdida de calidad se mide con tu suite, no se supone.
  3. Speculative decoding usa un modelo chico que propone tokens y uno grande que los verifica.
  4. Solo acelera si el modelo chico acierta seguido.
  5. Destilar entrena un modelo chico para imitar a uno grande.
  6. Cuantizar cambia la aritmética: los resultados pueden variar entre hardware.
- **Vocabulario:** cuantización, bits por peso, speculative decoding, tasa de aceptación, destilación, serving.
- **Flowchart o pseudocódigo:** Tabla antes de correr: técnica → memoria → velocidad → calidad, con tu predicción. Calculas en papel la memoria de los pesos según bits por peso. Comparas con el mismo modelo sin cambios.
- **Construcción dirigida:** Pide al agente cuantizar tu modelo y medirlo con la misma suite. Si tienes presupuesto, agrega speculative decoding. Crece el hito M7.
- **Cómo se comprueba:** La memoria medida calza con tu cuenta en papel. La suite muestra la calidad antes y después. Un modelo chico malo baja la tasa de aceptación y quita la ganancia: lo rompes a propósito y lo ves.
- **Qué evita:** Cuantizar sin medir, y descubrir la baja de calidad en producción.
- **Visual:** Escena: un modelo chico propone tokens, el grande acepta o rechaza, y corre un contador de velocidad.
- **Fuentes:** 11-711, decodificación y cuantización; MIT 6.5940 (catálogo de Fran, no reabierto); Lección ml/14 actual.
- **Ojo:** Falta verificar en la documentación oficial speculative decoding y los requisitos de hardware. Costo no calculado en las notas: categoría prudente.

#### 96. La cuenta del costo por token

*Esencial · Nueva · 20 min + 2 h · USD 5 a 30 · hito M7*

- **De dónde sale:** Avisos: optimización de inferencia 25 %.
- **Al terminar:** Calculas el USD por millón de tokens de tu modelo servido, y decides con esa tabla entre alojarlo o usar una API.
- **Ideas:**
  1. USD por millón de tokens = precio por hora de la GPU, dividido por los tokens útiles por hora, por un millón.
  2. Lo que manda es la utilización: una GPU ociosa se paga igual.
  3. Prefill y decode cuestan distinto: separa tokens de entrada y de salida.
  4. Una API cobra por uso. Tu GPU cobra por hora.
  5. La comparación justa usa la misma calidad y la misma latencia.
- **Vocabulario:** USD por millón de tokens, utilización, throughput, latencia, punto de equilibrio, autoalojado.
- **Flowchart o pseudocódigo:** Fórmula con tus cifras, y una predicción antes de medir. Luego varías la utilización y encuentras dónde se cruza tu costo con el de la API.
- **Construcción dirigida:** Pide al agente correr tu modelo servido en 3 corridas y armar la tabla. Cierra el hito M7. Si tienes el sistema multi-agente, puedes servir tu modelo como uno de sus subagentes.
- **Cómo se comprueba:** Tabla propia de latencia, throughput y USD por millón de tokens, en 3 corridas, comparada con una API. Un agente auditor nuevo rehace la cuenta desde los registros. Cambias la utilización y la decisión cambia como predijiste.
- **Qué evita:** Comparar tu costo en máxima carga con el precio de una API, y decidir autoalojar con una GPU casi siempre ociosa.
- **Visual:** Escena: una perilla de utilización mueve tu curva de costo frente a la línea de precio de una API.
- **Fuentes:** Performance Engineer, Inference Systems, Anthropic; CS336, lista de precios de B200 (2026-03-28); Conteo de 504 avisos de modelos: optimización de inferencia 25 %.
- **Ojo:** No hay una fuente verificada con una cifra de costo por millón de tokens autoalojado: la tabla la generas tú. Costo no calculado en las notas: categoría prudente.

### Módulo 18. F. Mirar adentro (optativo)

#### 97. Interpretabilidad mecanicista

*Nueva · 25 min + 2,5 h · Hasta USD 5*

- **De dónde sale:** CS224N; avisos de Anthropic.
- **Al terminar:** Pones a prueba una hipótesis sobre el interior de un modelo con una intervención, no solo con una correlación.
- **Ideas:**
  1. Anthropic describe esta área como la neurociencia de las redes neuronales.
  2. La meta es hacer ingeniería inversa de los algoritmos aprendidos en los pesos: features y circuitos.
  3. Que una activación se correlacione con un concepto no prueba que el modelo lo use.
  4. Editar una activación durante la pasada es una intervención, y permite probar causa.
  5. Un vector de steering empuja el comportamiento desde adentro.
- **Vocabulario:** feature, circuito, activación, pasada instrumentada, intervención, vector de steering.
- **Flowchart o pseudocódigo:** Flowchart: hipótesis → extraer activaciones → encontrar una dirección → intervenir → medir → control con una dirección al azar. Predices el efecto antes de intervenir.
- **Construcción dirigida:** Pide al agente instrumentar tu modelo chico: extraer activaciones y aplicar un vector de steering. Tu proyecto gana una herramienta de inspección.
- **Cómo se comprueba:** La intervención cambia la salida en ejemplos que no usaste para encontrar la dirección. Una dirección al azar no produce el mismo efecto. Lees el código de la intervención y señalas la capa exacta donde actúa. Un LLM examinador te pide separar correlación de causa, sin notas.
- **Qué evita:** Contar una historia convincente sobre una neurona, sin un experimento que pudiera refutarla.
- **Visual:** Escena: una perilla edita una activación en mitad de la pasada, y la salida del modelo cambia.
- **Fuentes:** CS224N, clase invitada de Been Kim; Research Engineer, Interpretability, Anthropic; Research Scientist, Interpretability, Anthropic.
- **Ojo:** Costo no calculado en las notas: categoría prudente, con un modelo chico. Es opción de problema para el hito M8 de Fran, por su interés en neurociencia.

#### 98. Seguridad y alineación

*Nueva · 20 min + 2 h · Hasta USD 5*

- **De dónde sale:** CS336 tarea 5; MATS.
- **Al terminar:** Diseñas una evaluación de riesgo para tu modelo, y mides una mitigación sin ocultar lo que empeora.
- **Ideas:**
  1. Alineación es que el modelo haga lo que se pretende, incluso fuera de los casos que probaste.
  2. RLHF y DPO también enseñan seguridad: los mismos métodos sirven para rechazar pedidos dañinos.
  3. Una mitigación tiene un costo: el modelo puede rechazar de más.
  4. Si el modelo optimiza una señal, puede explotarla en vez de cumplir la intención.
  5. Una evaluación de riesgo se fija antes y se guarda aparte.
- **Vocabulario:** alineación, red teaming, evaluación de riesgo, rechazo excesivo, explotar la recompensa, transparencia.
- **Flowchart o pseudocódigo:** Flowchart: amenaza → prueba fijada → medición → mitigación → repetir, incluida la tasa de rechazos excesivos. Predices ambos resultados antes de correr.
- **Construcción dirigida:** Pide al agente una suite de riesgo para tu modelo y una mitigación, por ejemplo DPO con pares de seguridad.
- **Cómo se comprueba:** Tabla antes y después: riesgo y rechazo excesivo, en la misma suite. Un agente nuevo, sin contexto, intenta romper el modelo con casos fuera de la suite. Un LLM examinador te pide defender qué riesgo queda sin cubrir.
- **Qué evita:** Reportar menos riesgo sin decir cuánta utilidad se perdió, o medir solo con los ataques que ya conocías.
- **Visual:** Figura: dos ejes, riesgo y rechazo excesivo, con el modelo antes y después.
- **Fuentes:** CS336, tarea 5 y clase de alineación; MATS; Conteo de 504 avisos de modelos: prompt injection o red teaming 2 %.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Si usas DPO con GPU alquilada, sube a USD 5 a 30.

### Módulo 19. G. El oficio de investigador

#### 99. Leer papers y armar tu mapa, verificando contra la fuente

*Esencial · Reordenada · 20 min + 2,5 h · Hasta USD 5 · hito M8*

- **De dónde sale:** ml/18 actual; 6.S950; 11-711.
- **Al terminar:** Armas un mapa de un campo con lectura asistida, y cada afirmación queda comprobada contra la fuente.
- **Ideas:**
  1. Un paper se lee por su afirmación, su evidencia y sus límites.
  2. Un resumen de LLM puede inventar. Cada afirmación se vuelve a abrir en la fuente.
  3. Las citas inexactas también aparecen en sistemas automáticos de investigación, medidas en AI Scientist.
  4. Un mapa ordena qué se sabe, quién lo mostró y qué sigue abierto.
  5. La lectura termina en una lista de afirmaciones candidatas a reproducir.
- **Vocabulario:** afirmación, evidencia, baseline, mapa del campo, revisión de literatura, cita verificada.
- **Flowchart o pseudocódigo:** Para cada paper: el agente resume con cita textual → tú abres la fuente → tabla de afirmación, sección y si calza → mapa → candidatos con afirmación numérica clara.
- **Construcción dirigida:** Pide al agente el mapa de tu tema, con citas textuales y enlaces, y la lista corta de papers para el hito M8.
- **Cómo se comprueba:** Un agente nuevo, con solo los PDF, marca las citas que no aparecen en la fuente. Abres una muestra al azar y confirmas cada cita tú mismo. Un LLM examinador te pregunta por tu paper principal, sin notas.
- **Qué evita:** Citar lo que el LLM dijo que dice un paper.
- **Visual:** Figura: mapa de papers conectados por afirmación, con un sello en cada cita verificada.
- **Fuentes:** MIT 6.S950, «check an AI-assisted reading against the source and build a map of the field»; 11-711, tarea 3.1; Beel, Kan y Baumgart, arXiv 2502.14297; Sakana, anuncio de AI Scientist, 2026; Lección ml/18 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente. How to Read a Paper (Keshav) queda sin verificar: no se cita como fuente.

#### 100. Diseñar experimentos y medir con estadística

*Esencial · Reordenada · 25 min + 2 h · Hasta USD 5 · hito M8*

- **De dónde sale:** ml/18 actual; puente a ds/08.
- **Al terminar:** Diseñas un experimento con hipótesis, control y semillas, y reportas una diferencia con su incertidumbre.
- **Ideas:**
  1. La hipótesis y la métrica se escriben antes de correr.
  2. Se cambia una variable y hay un control.
  3. Reportas media y variación entre semillas, no la mejor corrida.
  4. Si pruebas muchas variantes, alguna gana por azar.
  5. Un registro de experimentos y datos versionados permite rehacer cualquier cifra.
  6. Un resultado nulo también es un resultado.
- **Vocabulario:** hipótesis, control, semilla, intervalo, comparaciones múltiples, registro de experimentos, preregistro.
- **Flowchart o pseudocódigo:** Ficha de experimento antes de correr: hipótesis, variable, control, métrica, número de semillas y qué resultado te haría cambiar de idea. Predices el tamaño del efecto.
- **Construcción dirigida:** Pide al agente el registro de experimentos y la plantilla de informe de tu proyecto, con datos versionados.
- **Cómo se comprueba:** Prueba A/A: la misma configuración con otras semillas no muestra diferencia significativa. El agente auditor nuevo rehace la cifra desde el registro. Pruebas muchas variantes sin efecto real y ves aparecer un falso ganador. Un LLM examinador te pide defender tu tamaño de muestra.
- **Qué evita:** Elegir la mejor semilla o seguir corriendo hasta que el número suba.
- **Visual:** Escena: nubes de puntos por semilla, con el intervalo. Más semillas muestran si la diferencia era real.
- **Fuentes:** 11-711, «Research Skills and Experimental Design»; MIT 6.S950, «evals as experimental design»; Research Engineer, Pre-training, Anthropic; Research Engineer, Google, espejo (secundario); Deep Learning Tuning Playbook de Google (catálogo de Fran, no reabierto); Conteo de 504 avisos de modelos: estadística 15 %, A/B o experimentación 23 %.
- **Ojo:** Costo no calculado en las notas: categoría prudente. Estadística de experimentos, por ejemplo Agarwal et al., 2021, queda sin verificar: no se cita como fuente. Puente a ds/08.

#### 101. Reproducir un paper

*Esencial · Reordenada · 20 min + 12 h · Más de USD 30 · hito M8*

- **De dónde sale:** ml/18 actual; PaperBench.
- **Al terminar:** Reproduces una afirmación numérica de un paper reciente, con tolerancia fijada antes, o documentas por qué no se reproduce.
- **Ideas:**
  1. Se reproduce una afirmación, no el paper entero.
  2. Criterios: afirmación numérica clara, datos públicos, cabe en una GPU y en un presupuesto fijado.
  3. El código de los autores existe para comparar, no para copiar.
  4. Reproducir un baseline va antes de investigar algo propio, como en 11-711.
  5. No reproducirlo es un resultado válido si explicas por qué.
  6. Es difícil incluso para expertos: en PaperBench, PhDs con 48 horas llegaron a 41,4 %, en un subconjunto de 3 papers.
- **Vocabulario:** reproducción, afirmación numérica, tolerancia, rúbrica, baseline, información privilegiada.
- **Flowchart o pseudocódigo:** Fijas afirmación, tolerancia, rúbrica y presupuesto. Pseudocódigo sin IA del método del paper, que el agente traduce literal. Predices el resultado y comparas con el código de los autores solo al final.
- **Construcción dirigida:** Elige un problema que sirva a tu especialidad. Opciones de Fran: visión para biomecánica, EEG o interpretabilidad. Pide al agente reproducirlo. Cierra el hito M8.
- **Cómo se comprueba:** La cifra queda dentro de la tolerancia fijada antes, con rúbrica estilo PaperBench. Si no, documentas por qué. Un agente auditor nuevo repite el flujo desde cero, sin caché. Un LLM examinador te pide defender cada diferencia con el paper, sin notas.
- **Qué evita:** Aceptar una reproducción que usó resultados en caché, datos de prueba o el código de los autores copiado.
- **Visual:** Figura: la rúbrica por etapa, con la cifra del paper, tu tolerancia y tu resultado.
- **Fuentes:** 11-711, tarea 3.2; PaperBench, arXiv 2504.01848 (secundario); PaperBenchX, arXiv 2610.39744; Lección ml/18 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente, sin probar. Lo define el paper, así que fija un tope antes de elegir. Si no cabe en tu tope, cambia de paper.

#### 102. Investigar con agentes, y sus trampas

*Esencial · Nueva · 25 min + 10 h · Más de USD 30 · hito M9*

- **De dónde sale:** Autoresearch; PaperBenchX; MLReplicate; tu sistema multi-agente como laboratorio.
- **Al terminar:** Usas tu sistema multi-agente como laboratorio, y solo aceptas una mejora que sobrevive a una auditoría que el agente no ve.
- **Ideas:**
  1. Los agentes hacen bien lo mecánico y fallan al validar. PaperBenchX: modelado 62,73 %, ejecución 61,83 %, validación 42,91 %.
  2. Resultados inventados: en MLReplicate, 59 % de las revisiones automáticas aceptadas traían afirmaciones fabricadas o sin respaldo.
  3. Validación débil: flujos que corren bien y concluyen mal, resultados en caché, información del test y terminar antes de tiempo.
  4. Autoresearch: el agente edita `train.py`, entrena 5 minutos, conserva o descarta y repite. El humano edita `program.md`. Reportado: unos 700 experimentos y unos 20 cambios útiles.
  5. Más cómputo no asegura más calidad: en MLReplicate, el sistema más barato le ganó al más caro, con 38 veces menos tokens de entrada.
  6. Karpathy juzga con años de oficio. Eso no prueba que el método sirva a quien empieza.
- **Vocabulario:** autoresearch, conservar o descartar, métrica oculta, auditor adversarial, bitácora, presupuesto fijo, entorno aislado.
- **Flowchart o pseudocódigo:** Flowchart: uno busca en la literatura y propone → otro cambia una cosa y corre con presupuesto fijo → otro, sin contexto, repite con semillas nuevas y métrica oculta → conservar o descartar → bitácora. Antes de cada tanda predices cuántos cambios sobrevivirán.
- **Construcción dirigida:** Pide conectar tu sistema multi-agente como laboratorio sobre tu Transformer: roles, permisos, topes de dinero y tiempo, en un entorno aislado. Tú editas las instrucciones, no el código. Cierra el hito M9.
- **Cómo se comprueba:** La mejora sobrevive con semillas nuevas y una métrica guardada aparte, que el agente no ve. Plantas un resultado inventado en la bitácora, y el auditor lo rechaza. Cuentas: propuestos, conservados por el agente y sobrevivientes de la auditoría. Un agente nuevo repite el flujo desde el principio.
- **Qué evita:** Creer una mejora que era ruido, caché o información del test, y correr con permisos desactivados fuera de un entorno aislado.
- **Visual:** Escena: tres agentes en el loop, con un embudo de experimentos propuestos, conservados y sobrevivientes.
- **Fuentes:** Autoresearch, repo de Karpathy; Resultado de autoresearch: Gigazine y OODA Loop (secundario); PaperBenchX, arXiv 2610.39744; MLReplicate, arXiv 2605.16616; Beel, Kan y Baumgart, arXiv 2502.14297.
- **Ojo:** PaperBenchX usa software científico sin ML, su juez es uno de los modelos evaluados y no tiene línea base humana. Autoresearch pide correr con permisos desactivados y no discute el riesgo. Si solo hiciste el Compartido, partes del H6 y creas estos tres roles a mano: la fábrica de subagentes está en Productos. Costo no calculado en las notas: categoría prudente; fija un tope.

#### 103. Elegir un problema, escribir y publicar

*Reordenada · 20 min + 8 h · USD 5 a 30 · hito M10*

- **De dónde sale:** ml/18 actual.
- **Al terminar:** Eliges un problema acotado, escribes un informe corto y publicas un repo que otro puede reproducir solo con el README.
- **Ideas:**
  1. Un buen problema es abierto, te importa, cabe en tu presupuesto y se puede refutar.
  2. El camino realista junta tu dominio con DL.
  3. Un informe corto dice afirmación, evidencia y límites.
  4. La declaración de uso de IA dice qué hizo el agente y qué verificaste tú.
  5. Lo que no puedes justificar no vale, por pulido que se vea.
  6. Los sistemas automáticos ya aprueban revisión en workshops, y aun así muestran poco rigor. La revisión no reemplaza tu auditoría.
- **Vocabulario:** problema de investigación, afirmación, límites, declaración de uso de IA, workshop, preprint, repo reproducible.
- **Flowchart o pseudocódigo:** Tabla de problemas candidatos: pregunta, datos, costo, cómo se refuta. Opciones de Fran: visión para biomecánica, EEG o interpretabilidad. Esquema del informe: afirmación → evidencia → límites → declaración.
- **Construcción dirigida:** Pide al agente el borrador del informe a partir de tu bitácora, y el repo público con README. El texto final y las afirmaciones son tuyos. Cierra el hito M10.
- **Cómo se comprueba:** Un agente limpio reproduce los resultados solo con el README. Cada cifra del informe enlaza a una corrida del registro. Un LLM examinador te revisa como par, sin notas, y respondes por cada afirmación.
- **Qué evita:** Publicar una afirmación que no puedes defender, o esconder qué hizo el agente.
- **Visual:** Figura: la página de resumen, con afirmación, evidencia y límites conectados a sus corridas.
- **Fuentes:** MIT 6.S950, resumen de una página con «claim, evidence, and limits»; CS230, declaración obligatoria de uso de IA; Sakana, anuncio de AI Scientist, 2026; 11-711, proyecto final; Lección ml/18 actual.
- **Ojo:** Costo no calculado en las notas: categoría prudente; incluye la repetición limpia en GPU. You and Your Research (Hamming) queda sin verificar: no se cita como fuente. Publicar no depende solo de ti: esta lección no asegura aceptación.

#### 104. Entrar: roles, becas, open source y entrevistas

*Nueva · 25 min + 2 h · Centavos*

- **De dónde sale:** Anthropic; MATS; Cohere Labs.
- **Al terminar:** Comparas tus pruebas reales con requisitos de postings y programas, y decides a qué rol apuntar sin engañarte.
- **Ideas:**
  1. ML engineer: lleva modelos a producción, con pipelines, Docker, CI/CD y monitoreo.
  2. Research engineer: construye la infraestructura y los experimentos. Los laboratorios frontera piden años de software.
  3. Research scientist: decide la agenda. Anthropic pide trayectoria científica «in any field», y sin publicaciones dice postular a engineer.
  4. Anthropic Research Resident: no exige ML, y busca perfiles muy senior. Cierra el 2026-11-22.
  5. MATS: 12 semanas presenciales en Berkeley y Londres. Cohere Labs Scholars: remoto, sin exigir investigación previa.
  6. Hasta dónde llega dirigir: replicar papers sencillos, publicar en tu dominio y aplicar ML en un equipo que trabaja con agentes.
- **Vocabulario:** ML engineer, research engineer, research scientist, residency, beca, open source, postings.
- **Flowchart o pseudocódigo:** Matriz: rol o programa → requisito textual → tu evidencia → cumple o no. Decides una meta y un plan para el requisito más caro. Incluye qué harías si la respuesta es no.
- **Construcción dirigida:** Pide al agente la matriz con postings abiertos y sus enlaces, cruzada con tus hitos M8, M9 y M10. Tú decides la meta.
- **Cómo se comprueba:** Cada requisito de la matriz enlaza a su fuente, y un agente nuevo lo confirma. Un LLM examinador usa tu repo y te hace preguntas de implementación, sin notas. Marcas las que no respondes. La matriz muestra al menos un requisito que hoy no cumples.
- **Qué evita:** Postular por el título del rol sin leer el requisito, y dar por seguro que un curso abre una puerta.
- **Visual:** Figura: tabla de roles y programas por barrera, con requisitos textuales.
- **Fuentes:** Postings de Anthropic: Pre-training, Interpretability y Research Resident; MATS; Cohere Labs Scholars; Fortune sobre IA en entrevistas de Anthropic (secundario); Conteo de 504 avisos de modelos: programar 42 %, años de experiencia 51 %, PhD 27 %, publicaciones 21 %, open source 21 %.
- **Ojo:** Aquí la regla sin código a mano cuesta más. Con ella no conviene apuntar a research engineer en un laboratorio frontera: un posting pide «5-10+ years» y otro «Strong software engineering skills». Si lo quieres, necesitas un gimnasio de código opcional, fuera de Academy. Las reglas de IA por ronda de entrevista siguen sin confirmar, y falta confirmar la elegibilidad de MATS por país y cuánto pesa el open source. Ningún programa aquí es una promesa de resultado. Fran tiene un paper en Energies 2025 y fine-tuning de YOLOv8 en FONDEF: ayuda poco, porque el posting scientist también pide algo de interpretabilidad. Costo no calculado en las notas: categoría prudente.

### Módulo 20. CEO y CTO de una startup de IA

#### 105. El costo de una tarea que sale bien

*Esencial · Nueva · 25 min + 3 h · USD 5 a 30 · hito H14 o hito 7*

- **De dónde sale:** ICONIQ; notas de CEO/CTO.
- **Al terminar:** Calculas el costo por tarea exitosa de tu sistema, o de tu modelo, con p50, p90 y p99, y dices qué escenario rompe tu margen.
- **Ideas:**
  1. Costo por tarea exitosa = tokens × precio × reintentos ÷ tasa de éxito. La unidad no es el token.
  2. Se mira por percentiles, porque el promedio esconde las tareas caras.
  3. Margen bruto de productos de IA: 45 % en 2025, N=287 (ICONIQ). Es autorreporte de empresas grandes, no de startups tempranas, y ICONIQ invierte en el sector. Software público: cerca de 78 % (secundario).
  4. Anécdotas, no encuesta: un flujo de USD 0,10 llegó a USD 1,50 o más con reintentos (ICONIQ). En Replit, un punto de control costaba 25 centavos al usuario y algunos trabajos, varios dólares a la empresa (Stripe, que vende facturación por uso).
  5. Cambio oculto: desde Claude 4.7 el mismo texto produce cerca de 30 % más tokens, con igual precio de lista.
  6. Caché, lote y ruteo cambian la cuenta. En Anthropic, el lote tiene 50 % de descuento.
- **Vocabulario:** costo por tarea exitosa, traza, tasa de éxito, p50, p90, p99, margen bruto, precio de equilibrio, presupuesto por ejecución.
- **Flowchart o pseudocódigo:** Pseudocódigo: costo_tarea = suma(llamadas con reintentos). éxito = pasa la eval. promedio = suma(costo_tarea) ÷ tareas_con_éxito. p50, p90, p99 = percentiles(costo_tarea) ÷ tasa_de_éxito. Repetir con 4 escenarios: frontera ×6, modelo chico ×0,2, +30 % de tokens, reintentos ×3.
- **Construcción dirigida:** Pides al agente instrumentar costo y éxito por tarea en tu sistema multi-agente, o en tu modelo servido si tomaste el Camino Modelos, y un presupuesto por ejecución que corte la corrida. Crecen las trazas, y con 100 trazas reales sale tu hoja de costos.
- **Cómo se comprueba:** Con un CSV de muestra de respuesta conocida, la hoja acierta con tolerancia de ±1 %. Con tus 100 trazas reales, marca p50, p90, p99, margen bruto y precio de equilibrio. Corren los 4 escenarios, y la hoja dice cuál rompe el margen objetivo que fijaste antes. Una tarea sobre el presupuesto se corta, y la traza lo muestra.
- **Qué evita:** Mirar el precio por token y conocer el costo real recién en la factura.
- **Visual:** Escena: mover reintentos y tasa de éxito, y ver p50, p90 y margen.
- **Fuentes:** ICONIQ, State of AI 2026, julio de 2026; Anthropic, precios; Stripe, 13 de octubre de 2026; Menlo Ventures, 3 de noviembre de 2026; Rubenfeld, sobre la tabla de Meritech (secundario); Notas de CEO/CTO, secciones 1 y 7.
- **Ojo:** Los escenarios y la tolerancia son una propuesta de diseño. El ×6 sale del precio de GPT-6 Astra que reporta Menlo, sin confirmar en la lista de OpenAI. Con 100 trazas, p99 es casi el máximo: es una señal, no una estimación estable. Precios al 5 de noviembre de 2026. Reusar trazas guardadas baja el costo.

#### 106. Cobrar algo cuyo costo varía

*Nueva · 20 min + 3 h · Centavos · hito H14 o hito 7*

- **De dónde sale:** ICONIQ; Cursor; Lovable.
- **Al terminar:** Eliges un esquema de cobro en el que ningún perfil de cliente deja margen negativo y la factura máxima tiene tope.
- **Ideas:**
  1. La métrica de valor y la métrica de cobro son dos cosas distintas.
  2. ICONIQ, N=305, selección múltiple: suscripción cerca de 57 %, consumo sube de 35 % a 42 %, resultado sube de 18 % a 23 %.
  3. Entre quienes cobran por consumo, N=72, muestra chica: 58 % absorbe parte del costo, 26 % traspasa todo y 15 % absorbe todo.
  4. La previsibilidad es una función del producto: topes, alertas y pronóstico.
  5. Cobra por resultado solo si el resultado se puede definir y verificar.
  6. Cursor se disculpó por cambios de precio poco claros. En Lovable, la molestia fue por previsibilidad y justicia, no por el nivel de precio (secundario).
- **Vocabulario:** métrica de valor, métrica de cobro, cobro por consumo, cobro por resultado, créditos, tope duro, alerta, factura máxima.
- **Flowchart o pseudocódigo:** Flowchart: perfil de cliente → tareas × costo por tarea exitosa → esquema de cobro → factura y margen → ¿margen negativo o factura sin tope? → cambiar esquema.
- **Construcción dirigida:** Pides un simulador con 3 perfiles (ligero, medio, p99) contra 3 esquemas (plano, suscripción con créditos, por resultado), con los costos de tu sistema o de tu modelo servido. Crece el proyecto: medición de uso, tope duro y alerta.
- **Cómo se comprueba:** En el esquema elegido, ningún perfil queda con margen negativo. El simulador demuestra la factura máxima. Un cliente de prueba llega al tope: el sistema corta y la alerta llega.
- **Qué evita:** Que el usuario más intenso cueste más de lo que paga, o cambiar precios y perder la confianza.
- **Visual:** Escena: 3 perfiles contra 3 esquemas, con margen y factura máxima.
- **Fuentes:** ICONIQ, State of AI 2026, julio de 2026; Stripe, 13 de octubre de 2026, y guía de precios; Pricing Innovation, sobre Lovable (secundario); TechCrunch, sobre Cursor (secundario); Notas de CEO/CTO, secciones 1 y 7.
- **Ojo:** ICONIQ invierte en el sector y Stripe vende facturación por uso. No hay márgenes auditados de startups privadas: las cifras de Cursor y Replit no se enseñan como hechos. Si tu modelo no se vende, simula un servicio hecho con él.

#### 107. ¿Qué queda si mañana sale un modelo mejor?

*Nueva · 20 min + 4 h · USD 5 a 30*

- **De dónde sale:** Notas de CEO/CTO.
- **Al terminar:** Pruebas qué parte de tu proyecto se puede copiar, y defiendes el resto con una métrica y una condición que la refuta.
- **Ideas:**
  1. La IA diferencia, pero no protege (Haber, a16z).
  2. La IA abarata el primer 80 % de un sistema de registro. La defensa se mueve a excepciones, permisos y cumplimiento (Amble, a16z).
  3. Un producto que actúa, captura el resultado y lo realimenta gana defensa. Solo guardar datos no basta.
  4. Los incumbentes ganaron terreno en casi la mitad de las categorías (Menlo, inversionista de Anthropic). La distribución pesa.
  5. Pregunta abierta: ¿sistema de registro o sistema de acción? Haber y Amble no coinciden.
  6. Todo esto es opinión de inversores con portafolio. Ningún estudio liga tipos de defensa con supervivencia.
- **Vocabulario:** diferenciación, defensa (moat), sistema de registro, sistema de acción, datos generados por el producto, incumbente, distribución, condición que refuta.
- **Flowchart o pseudocódigo:** Flowchart: un agente reconstruye el núcleo en tiempo fijo → mismas evals para clon y original → ¿el clon iguala? → «calidad» deja de ser defensa → tabla: defensa, métrica y condición que la refuta.
- **Construcción dirigida:** Pides a un agente reconstruir el núcleo de tu propio sistema, y listar lo que no pudo reproducir. En el Camino Modelos, tu suite corre contra el mejor modelo de API o abierto con un buen prompt. Crece la tabla de defensas de tu proyecto.
- **Cómo se comprueba:** El CI muestra las evals del clon y del original, lado a lado. Cada defensa tiene una métrica real y una condición que la refuta. Si el clon iguala al original, «calidad» sale de la tabla.
- **Qué evita:** Presentar como defensa algo que un agente puede reproducir.
- **Visual:** Sin visual nuevo.
- **Fuentes:** Haber, a16z, 18 de agosto de 2025; Amble, a16z, 13 de mayo de 2026; a16z, Fruits of the Walled Garden (solo fragmento); Menlo Ventures, 3 de noviembre de 2026; Notas de CEO/CTO, secciones 2 y 7.
- **Ojo:** Clona solo tu proyecto. Las cifras que circulan sobre wrappers (80 a 90 % morirán, 68 % de caída en financiamiento) no se pudieron rastrear y no se usan.

#### 108. Portafolio de modelos y salida de emergencia

*Esencial · Reordenada · 20 min + 4 h · USD 5 a 30 · hito H14 o hito 7*

- **De dónde sale:** Lección 04 actual; ciclo de vida de proveedores.
- **Al terminar:** Cambias de modelo sin tocar código, con las mismas evals, y tu servicio sigue respondiendo si cae el proveedor principal.
- **Ideas:**
  1. Lo normal es comprar: 80 a 85 % usa APIs licenciadas, con cerca de 3,3 proveedores en promedio (ICONIQ, autorreporte de empresas grandes).
  2. El proveedor tiene fechas: Anthropic avisa al menos 60 días antes de retirar un modelo, y las peticiones a un modelo retirado fallan.
  3. Ejemplos: Sonnet 4.5 se retira el 30 de noviembre de 2026. `temperature` da error 400 en la versión de API `2026-10-21`.
  4. Open source: 19 % de los tokens y 4 % del gasto, y 89 % de ese gasto va a modelos chinos (Menlo, inversionista de Anthropic). Esto último es una pregunta de riesgo según el cliente.
  5. Sin evals no hay ruteo seguro, y sin ruteo no hay poder de negociación.
  6. Ajuste fino: decisión tardía, si las evals muestran que prompt, contexto y ruteo no alcanzan. ICONIQ dice que 58 % personaliza y Menlo que 10 % post-entrena; ninguna aclara la diferencia.
- **Vocabulario:** portafolio de modelos, ciclo de vida, retiro de un modelo, versión de API, ruteo, respaldo, modelo abierto, simulacro de migración.
- **Flowchart o pseudocódigo:** Flowchart: tarea → tipo y riesgo → política de ruteo → proveedor principal → ¿falla o llave revocada? → respaldo. Cambio de modelo → suite de evals → aceptar o rechazar.
- **Construcción dirigida:** Pides que el modelo sea configuración y no código, y que cada cambio pase por las evals. Crece el cliente LLM de tu sistema: ruteo y respaldo con 2 proveedores y 1 modelo abierto. En el Camino Modelos, tu modelo servido compite con esas opciones.
- **Cómo se comprueba:** El CI corre las mismas evals en 2 proveedores y 1 modelo abierto, con tabla de costo y calidad. Revocas la llave principal y el servicio sigue respondiendo. La política de ruteo por tipo de tarea cita esa tabla.
- **Qué evita:** Que un retiro de modelo o un cambio de API detenga tu producto, y que el proveedor fije tu margen.
- **Visual:** Sin visual nuevo.
- **Fuentes:** Anthropic, deprecaciones de modelos; ICONIQ, State of AI 2026, julio de 2026; Menlo Ventures, 3 de noviembre de 2026; Lección 04 actual; Notas de CEO/CTO, secciones 3 y 7.
- **Ojo:** Fechas y parámetros según notas del 5 de noviembre de 2026. El ejemplo de Sonnet 4.5 caduca el 30 de noviembre: al publicar, usa un retiro vigente.

#### 109. El equipo y la revisión cuando escriben los agentes

*Nueva · 20 min + 3 h · Hasta USD 5*

- **De dónde sale:** CS146S 2026 semana 9; notas de CEO/CTO.
- **Al terminar:** Montas un CI que bloquea PR dañinos de agentes sin leerlos línea por línea, y decides qué escala a un humano.
- **Ideas:**
  1. ICONIQ, N=302, empresas grandes: 45 % planea otra mezcla de roles sin reducción neta, y 33 %, un equipo más chico.
  2. Según la red de ICONIQ, el rol más expuesto convierte un documento de diseño en una función. Conserva valor quien es dueño de infraestructura y seguridad, y quien habla con clientes y entrega.
  3. Un FDE que alimenta el producto se distingue de uno que tapa brechas: se mide cuánto de lo personalizado pasa al producto.
  4. El CTO revisa, en orden: lo que el agente no debe poder cambiar (tests, evals, permisos, migraciones), fronteras de arquitectura, seguridad y resultado medido en el cliente.
  5. Anécdota de ICONIQ, no dato de encuesta: cerca de 10 agentes autónomos, cerca de 180 PR, 0 % de CI aprobado.
  6. Contar tokens falla cuando se vuelve objetivo. Tiempo de ciclo y despliegues por semana siguen sirviendo.
- **Vocabulario:** archivo protegido, definición de terminado, FDE, tiempo de ciclo, centro de costo, escalamiento humano, falso positivo, defecto sembrado.
- **Flowchart o pseudocódigo:** Flowchart: PR del agente → ¿toca un archivo protegido? → bloquear → CI y evals → ¿riesgo alto? → humano → mezclar.
- **Construcción dirigida:** Un agente saboteador arma 10 PR sobre tu repo, 3 con defectos: desactiva un test, altera una eval y filtra una llave. Otro agente escribe las reglas que le especificas: archivos protegidos y una definición de terminado que el agente no pueda reescribir. Crece el CI de tu sistema o del repo de tu modelo.
- **Cómo se comprueba:** El CI bloquea los 3 PR con defecto. Bloquea como máximo 1 de los 7 PR buenos. El criterio de escalamiento a un humano queda escrito en el repo.
- **Qué evita:** Velocidad sin verificación: muchos PR que nadie puede aceptar.
- **Visual:** Sin visual nuevo.
- **Fuentes:** ICONIQ, State of AI 2026, julio de 2026; Stanford CS146S, otoño de 2026, semana 9, Building an AI-Native Team (solo temario); Nota, bloque 15; Notas de CEO/CTO, secciones 4 y 7.
- **Ojo:** La productividad que reporta ICONIQ es autorreporte y falta contrastarla. Los umbrales del ejercicio son una propuesta de diseño. En el Camino Modelos puedes leer los PR para cazar el error, nunca escribir código.

#### 110. Ley, contratos e incidentes

*Esencial · Nueva · 30 min + 4 h · Hasta USD 5 · hito H14 o hito 7*

- **De dónde sale:** AI Act; Ley 21.719 de Chile; OWASP.
- **Al terminar:** Clasificas tu sistema según el AI Act, con artículo citado, llevas un registro de riesgos y ensayas un incidente de inyección de prompts.
- **Ideas:**
  1. El AI Act alcanza a proveedores fuera de la UE si el resultado de su sistema se usa en la UE. No hay exención general para pymes.
  2. Calendario oficial: 2 de agosto de 2026, fiscalización, prohibiciones, transparencia y uso general. 2 de diciembre de 2026, artículo 50(2) para sistemas ya en el mercado. 2 de diciembre de 2027, alto riesgo del anexo III. 2 de agosto de 2028, alto riesgo en productos regulados.
  3. Proveedor y responsable del despliegue tienen deberes distintos. Artículo 50: avisar que es una IA y marcar las salidas generativas.
  4. Chile, al 5 de noviembre de 2026: la Ley 21.719 está fijada para el 1 de diciembre de 2026. El boletín 18.623-07 busca postergarla al 15 de octubre de 2027, y la fecha no cambia hasta que se promulgue (secundario).
  5. La ley de IA de Chile sigue en trámite en el Senado, no está vigente y puede cambiar: el gobierno prepara una propuesta sustitutiva (secundario).
  6. Si un agente actúa: mínimo privilegio, confirmación humana en lo irreversible y registro de cada acción. Adopción en ICONIQ, autorreporte de empresas grandes: auditoría 64 %, mínimo privilegio 45 %, inyección de prompts 44 %.
- **Vocabulario:** proveedor, responsable del despliegue, alto riesgo, artículo 50, registro de riesgos, inyección de prompts, mínimo privilegio, interruptor de apagado, registro de auditoría.
- **Flowchart o pseudocódigo:** Flowchart: sistema → ¿prohibido? → ¿alto riesgo? → ¿artículo 50? → riesgo mínimo. Después: ¿proveedor o responsable?, ¿se usa en la UE?, ¿trata datos personales en Chile?
- **Construcción dirigida:** Pides mínimo privilegio, confirmación humana en lo irreversible, registro de cada acción e interruptor de apagado en tu sistema o en tu modelo servido. Crece el harness, junto con un registro de riesgos de tu proyecto y sus preguntas de contrato: datos que van al proveedor y quién responde si un agente actúa.
- **Cómo se comprueba:** Clasificas 12 sistemas ficticios y aciertas al menos 10 según la pauta, con artículo citado. Tu sistema pasa un conjunto de ataques predefinido, por ejemplo secuestro de objetivo y mal uso de herramientas. El interruptor detiene al agente en menos del tiempo que fijaste antes, y queda en el registro de auditoría.
- **Qué evita:** Descubrir tarde que un cliente en la UE ya te sujeta al artículo 50, o que tu agente no se puede detener.
- **Visual:** Figura: línea de tiempo del AI Act y de Chile, con la fecha de revisión.
- **Fuentes:** Service Desk del AI Act, calendario; Comisión Europea, FAQ del artículo 50; Reglamento (UE) 2026/1744 (solo fragmento); CiberLATAM, sobre la Ley 21.719 (secundario); Malaespina Check, 27 de octubre de 2026, y Duplos, 4 de noviembre de 2026, sobre la ley de IA de Chile (secundario); OWASP Top 10 for Agentic Applications, 9 de diciembre de 2025 (lista parcial, secundario); ICONIQ, State of AI 2026, julio de 2026.
- **Ojo:** Debe revisarse después del 4 de diciembre de 2026: cambian o se confirman la vigencia de la Ley 21.719, el boletín 18.623-07 y las indicaciones a la ley de IA. Falta confirmar en origen: artículo 4, multas del artículo 99, anexo III, texto de la Ley 21.719, SOC 2 y términos de proveedores. Un abogado debe revisar la pauta. No es asesoría legal.

#### 111. Del problema al primer cliente

*Esencial · Reordenada · 25 min + 10 h · Hasta USD 5*

- **De dónde sale:** Lección 16 actual; startup, agencia o producto.
- **Al terminar:** Eliges entre startup, agencia o producto propio, validas un problema con evidencia y consigues el primer pago o compromiso que corresponde a ese camino.
- **Ideas:**
  1. Primero pregunta si de verdad necesita IA. Fuera RAG, agentes o fine-tuning si el problema no los pide.
  2. Startup: vendes un producto pensado para escalar. Agencia: vendes proyectos o servicios por contrato. Producto propio: vendes algo chico que mantienes tú.
  3. El MVP es el experimento más chico que responde la mayor duda técnica.
  4. El contexto del dominio pesa más que la capacidad técnica (a16z, que invierte en el sector).
  5. Entra con lo que ya hacen, más rápido. Prometer automatización total generó rechazo (testimonios en ICONIQ).
  6. Acuerda antes qué exactitud vale, con casos reales del cliente. Ingreso de prueba no es ingreso que se queda.
- **Vocabulario:** plantilla de requisitos, MVP, prueba de aceptación, carta de intención, piloto pagado, fuera de alcance, umbral.
- **Flowchart o pseudocódigo:** Plantilla: usuario, restricciones, entradas, salidas, métrica de éxito y lo que queda fuera. Flowchart: problema → ¿necesita IA? → startup, agencia o producto → entrevistas → eval con umbral → MVP → cobro.
- **Construcción dirigida:** Pasas al agente la definición de «bien hecho» del cliente como eval. Crece tu proyecto: tu sistema multi-agente, o tu modelo si tomaste el Camino Modelos, se mide en ese dominio con casos reales.
- **Cómo se comprueba:** Notas de 10 entrevistas, con el flujo actual y su costo. Eval reproducible de al menos 50 casos reales, con umbral acordado por escrito. Evidencia según el camino. Startup: carta de intención o piloto pagado. Agencia: contrato firmado o factura. Producto propio: primer pago. Sin cliente queda «pendiente»: no se aprueba por autoevaluación.
- **Qué evita:** Construir algo que nadie paga, o usar datos de un cliente sin su permiso.
- **Visual:** Figura: los 3 caminos, con qué vendes, quién paga y qué evidencia cuenta.
- **Fuentes:** Nota, bloque 16 y su práctica; Woorky, como caso de referencia; Marina Wyss, proyecto desde cero; Haber, a16z, 18 de agosto de 2025; ICONIQ, State of AI 2026, julio de 2026; Notas de CEO/CTO, secciones 6 y 7.
- **Ojo:** La nota solo nombra los 3 caminos: su distinción y la evidencia de cada uno son criterio de diseño. Las 10 horas son una referencia: conseguir un cliente puede tomar semanas, y no se promete. Faltan YC y Sequoia en origen, y las cifras de capital son débiles: no se usan.

#### 112. La sala de datos: defiende tu empresa

*Nueva · 15 min + 3 h · Centavos*

- **De dónde sale:** Notas de CEO/CTO.
- **Al terminar:** Terminas con la evidencia que un CEO o CTO debe poder mostrar: una carpeta y un memo cuyas cifras se reproducen desde los archivos.
- **Ideas:**
  1. La promesa es la evidencia. No se promete resultado comercial.
  2. Un inversionista o un comprador empresarial pregunta por margen, dependencia del proveedor y evals.
  3. Una decisión con datos vale más que una narrativa.
  4. Decir que no también se justifica con un dato.
  5. Lo que no sabes también se declara.
- **Vocabulario:** sala de datos, memo, archivo de respaldo, reproducibilidad, dependencia del proveedor.
- **Flowchart o pseudocódigo:** Carpeta: modelo de costos → simulador de precio → tabla de defensas → CI multi-proveedor → reglas de CI → registro de riesgos → evidencia de clientes → memo de una página.
- **Construcción dirigida:** Pides al agente reunir los 7 archivos de este módulo, y redactas con él un memo de una página donde cada cifra apunta a su archivo. Crece la carpeta de evidencia de tu sistema, o de tu modelo si tomaste el Camino Modelos.
- **Cómo se comprueba:** Un agente limpio recibe solo la carpeta y reproduce cada cifra del memo. Toda cifra sin archivo de respaldo reprueba. El memo lista lo que no sabes y lo que sigue pendiente, como el cliente si aún no lo hay.
- **Qué evita:** Defender una empresa con un relato que los números no respaldan.
- **Visual:** Sin visual nuevo.
- **Fuentes:** Notas de CEO/CTO, sección 7; Las lecciones anteriores de este módulo.
- **Ojo:** Necesita las lecciones no esenciales de este módulo: hazlas antes o declara esos archivos como pendientes. Las preguntas del inversionista son selección de diseño, no salen de un estudio.

### Módulo 21. Tu carrera

#### 113. Tu portafolio

*Esencial · Nueva · 20 min + 4 h · Centavos*

- **De dónde sale:** roadmapv3 cierre; roadmapv5; MIT.
- **Al terminar:** Tienes un repo público que otra persona entiende y corre, más un CV y un LinkedIn con el vocabulario del rol, respaldado por lo que construiste.
- **Ideas:**
  1. Prueba en vez de credenciales.
  2. README: diagrama, demo, decisiones y su nota.
  3. Demo corta: 2 a 3 minutos.
  4. Explica cómo lo dirigiste: specs, evals y lo que salió mal.
  5. CV y LinkedIn usan el vocabulario de tu camino. Avisos sin boilerplate, productos: agentes 68 %, observabilidad 32 %, RAG 23 %. Modelos: PyTorch 40 %, GPU 30 %, entrenamiento distribuido 18 %. Son menciones, no exigencias.
  6. Si diriges agentes, dilo. No afirmes lo que no sabes hacer sin ayuda.
- **Vocabulario:** arquitectura, compromiso técnico, demo, métrica, decisión de diseño, reproducibilidad.
- **Flowchart o pseudocódigo:** Diagrama de la arquitectura final. Por cada decisión: lo elegido, lo descartado, el compromiso y la nota de la eval que la respalda.
- **Construcción dirigida:** Pides al agente publicar tu sistema multi-agente, o tu modelo con su informe (hito 10): README, diagrama, demo y su nota. Después, una versión de CV y LinkedIn con los términos de 5 avisos reales de tu camino.
- **Cómo se comprueba:** Un agente limpio corre el proyecto solo con el README, y obtiene la misma nota. Una persona ajena lo entiende y lo corre sin preguntarte. La demo dura de 2 a 3 minutos. Cada término del CV apunta a un archivo, un PR o una eval de tu repo. Un escaneo de secretos no encuentra llaves.
- **Qué evita:** Tener mucho construido y nada que mostrar, o un CV con términos que no puedes respaldar.
- **Visual:** Sin visual nuevo.
- **Fuentes:** roadmapv3, cierre; roadmapv5, consejo final; roadmapv6, MIT 6.S950 (portafolio); Marina Wyss, proyecto desde cero; Validación de avisos, tabla de 969 avisos, 5 de noviembre de 2026.
- **Ojo:** Los conteos usan palabras clave exactas sobre tableros públicos, con mucho peso de empresas grandes y pocos avisos de Latinoamérica. Sirven para elegir vocabulario, no para decidir qué exige una empresa.

#### 114. Entrevistas de AI engineering

*Esencial · Nueva · 25 min + 3 h · Centavos*

- **De dónde sale:** roadmapv4 bloque 7; secundario sobre entrevistas.
- **Al terminar:** Diseñas en voz alta un sistema de IA generativa, razonas algoritmos en pseudocódigo y sabes qué ronda no cubre este curso.
- **Ideas:**
  1. Todo lo reunido sobre entrevistas es secundario y sin verificar: guías y blogs, muchos orientados a SEO.
  2. Proceso típico que describen: reclutador, ronda técnica, take-home o revisión de proyecto, diseño de sistemas de IA y conductual.
  3. Diseño de sistemas de IA generativa: 45 a 60 minutos, con RAG, búsqueda empresarial y flujos con agentes. Foco en costo, latencia y modos de falla.
  4. Algoritmos y estructuras de datos se razonan en pseudocódigo, con su complejidad.
  5. 0 de 969 avisos menciona LeetCode. No prueba que no lo pidan: solo 34 describen la entrevista.
  6. Un candidato que no programa sin ayuda no pasaría una ronda de código en vivo sin IA. Esa ronda se prepara aparte, fuera de este curso.
- **Vocabulario:** diseño de sistema, modo de falla, compromiso técnico, complejidad, estructura de datos, requisito funcional, take-home, código en vivo.
- **Flowchart o pseudocódigo:** Método: requisitos → capas → datos → evals → costos → riesgos. Algoritmos: pseudocódigo → complejidad → casos límite.
- **Construcción dirigida:** Haces 3 simulacros con un LLM como entrevistador: diseño de sistema con un enunciado nuevo, defensa de las decisiones de tu sistema o de tu modelo, y algoritmos en pseudocódigo. Un agente arma la rúbrica desde el método, y el proyecto no cambia: lo defiendes.
- **Cómo se comprueba:** Otro LLM, sin contexto, aplica la rúbrica y cita una frase del simulacro por cada punto. La nota sube del primer simulacro de diseño al último, con enunciados distintos. Un agente traduce tu pseudocódigo a Python y pasa pruebas que no viste. Si falla, corriges el pseudocódigo. La complejidad que dijiste coincide con la que mide el agente.
- **Qué evita:** Saber hacer el trabajo y no pasar la entrevista, o llegar a una ronda sin IA sin saberlo: pregunta el formato al reclutador antes.
- **Visual:** Sin visual nuevo.
- **Fuentes:** AI Engineer Insights (secundario); Careery y OfferFlow (secundario); DEV Community, sobre LeetCode (secundario); interviewing.io y PracHub, sobre Meta (secundario); Canva Engineering y The Register (secundario); Validación de avisos, tabla de 969 avisos, 5 de noviembre de 2026; roadmapv4, video 2, bloque 7.
- **Ojo:** Faltan por leer las guías de Canva, Anthropic, OpenAI y Alexey Grigorev. Meta conservaría una ronda sin IA, y las fuentes se contradicen sobre Meta y Canva: no se enseña como un hecho. roadmapv4 pide LeetCode en Python, y Academy lo cambia por pseudocódigo. Para el Camino Modelos, ver también m-entrar.

#### 115. Experiencia real, CV y contactos

*Nueva · 20 min + 10 h · Hasta USD 5*

- **De dónde sale:** roadmapv4, punto 5 de lo que aporta; roadmapv3 cierre.
- **Al terminar:** Resuelves un problema real de un tercero, construyes contactos reales antes de pedir favores y postulas con un registro de cada intento.
- **Ideas:**
  1. Un tercero te da requisitos y restricciones que no elegiste.
  2. Dónde buscar: ONG, pymes y open source.
  3. Un proyecto con usuarios reales vale más que uno perfecto sin usuarios.
  4. Networking real: elige pocas empresas, conoce a quienes publican trabajo técnico allí y construye una relación antes de pedir una recomendación.
  5. Postula con contexto: sin título tradicional el CV se filtra, y postular solo por LinkedIn probablemente no funcione (opinión de Marina Wyss). 58 % de los avisos de productos y 51 % de los de modelos mencionan años de experiencia: son menciones, no exigencias.
  6. Mercado, solo EE. UU.: los puestos senior explican 71 % del aumento de avisos de software (Indeed, secundario). Sin experiencia puede ser más difícil de lo que sugiere el titular.
- **Vocabulario:** alcance, requisito, cliente interno, referencia, recomendación, registro de postulaciones.
- **Flowchart o pseudocódigo:** Plantilla de requisitos: usuario, restricciones, entradas, salidas y métrica. Registro: empresa, aviso, contacto, fecha, respuesta y próxima acción.
- **Construcción dirigida:** Adaptas tu sistema multi-agente, o tu modelo si tomaste el Camino Modelos, al problema de una organización real, con alcance escrito. Crece el proyecto: un dominio nuevo con evals de ese tercero, o una contribución a open source.
- **Cómo se comprueba:** Alguien de esa organización lo usa y deja su opinión por escrito, o tu PR de open source queda aceptado. Las evals con sus casos pasan el umbral acordado. El registro muestra 5 conversaciones reales con personas técnicas, con fecha y tema. El registro muestra 10 postulaciones a avisos reales, con su respuesta o la falta de ella.
- **Qué evita:** Proyectos que solo tú usaste, y escribirle a alguien solo cuando necesitas algo.
- **Visual:** Sin visual nuevo.
- **Fuentes:** roadmapv4, punto 5 de lo que aporta; video 2, pasos 3 y 4; Nota, bloque 16, «Experiencia y clientes»; Marina Wyss, ser AI Engineer en 2026; Validación de avisos, tabla de 969 avisos, 5 de noviembre de 2026; Indeed Hiring Lab, 8 de julio de 2026, vía OfficeChai y CIO (secundario); Ashby, comunicado del 7 de mayo de 2026 (secundario).
- **Ojo:** Se comprueba lo que depende de ti, no que te contraten: no se promete trabajo. Los números 5 y 10 son de diseño, y las 10 horas, una referencia. El video de Marina Wyss lo patrocina Supabase y ella ofrece una cohorte paga. Faltan datos específicos de Chile y Latinoamérica.

---

## 9. Qué cambió desde la versión 1

**Por tu feedback**

| Pediste | Cómo quedó |
|---|---|
| Un proyecto ambicioso, no un bot de soporte | Tu sistema multi-agente, H0 a H15. Ninguna construcción usa el bot |
| Que se adapte a la query o al proyecto del estudiante | Enrutador con ficha de plan y paquetes de dominio: lecciones 48 y 53 |
| Que cree herramientas y subagentes solo | Lecciones 51 y 52, con compuertas, porque la evidencia dice que lo autogenerado no ayuda solo y puede envenenar |
| Un harness al nivel de Harness², DeepSeek Harness o Claude Code | Lecciones 38 y 54 a 56. DeepSeek Harness existe: es `dsh`, abierto, de DeepSeek, en preview y no auditado |
| Claude Code a la perfección | Módulo «Dominar Claude Code», con el inventario oficial de noviembre de 2026 |
| Fábrica de software | Nivel 5 por etapas, con la evidencia a favor y en contra |
| CEO o CTO | Cierre de 8 lecciones |
| Destacar los 2 caminos | Tronco, elegir camino, Productos o Modelos. Modelos vive en ML y Deep Learning |

**Por la auditoría de la versión 1**

- **Se agregó lo que faltaba de roadmapv7:** bases de datos y SQL (9), backend (8), redes (14), atención y Transformers (15), y NumPy, Pandas y Scikit-learn como vocabulario (13).
- **Se corrigió lo esencial:** ML, harness propio y producción ya son parte de la ruta mínima, para que no se use algo que no se enseñó.
- **Cada ficha trae su costo,** como prometía el principio 12.
- **Se corrigieron 6 errores de hecho:** experiencia y contactos era el punto 5 de roadmapv4, no el 6; Marina Wyss usa un coach de nutrición, no soporte; Google deja la calidad para el día 4; la ejecución durable salía de paso con Amplio; CS146S usaba el temario de 2025, y ahora usa el de 2026; y CS329A seguía marcado como secundario.
- **Se confirmaron fuentes:** el calendario de CMU, el post de OpenAI (cerca de 1 millón de líneas, que incluye documentación e infraestructura, con un equipo que creció de 3 a 7 ingenieros), las afiliaciones de CaMeL (Google y Google DeepMind) y que MCP 2026-07-28 es la revisión vigente y ya la soportan el SDK de Python y FastMCP. **Siguen secundarios:** los días del curso de Google, sus 5 niveles y las 6 categorías de AI Agent Traps.

---

## 10. Cambios en la plataforma

Se hacen solo si apruebas.

1. **Las direcciones por nombre** de la versión 1 siguen valiendo, y se vuelven necesarias: con 115 lecciones habrá reordenes.
2. **Caminos:** un camino es una lista ordenada de referencias que cruza `ai/` y `ml/`. El temario de AI Engineering muestra el tronco, el compartido y los dos caminos. Las lecciones de Modelos viven en `ml/`, con el punto de su color.
3. **Elegir camino:** se guarda en el navegador, como el avance, y «Continuar» sigue la ruta elegida.
4. **ML y Deep Learning se reordena:** sus 18 lecciones pasan a los bloques A a G. ml/01, ml/02, redes y atención se comparten con el tronco. Regresión, clasificación, ensambles, recomendación, visión y MLOps quedan como optativas de la especialidad. Data Science comparte bases de datos y SQL (`ds/03`).
5. **Verificador externo de los hitos:** sin él, las comprobaciones de H7 a H12 no son objetivas. Academy entrega suites con una parte oculta, que corren fuera del alcance del agente del estudiante.
6. **La nota de BrainFran** se actualiza con el mismo orden.

---

## 11. Plan de publicación

**Al ritmo actual, de 1 lección por semana, todo toma más de 2 años.** Propongo publicar primero tu ruta esencial (eres el primer estudiante, y así medimos los tiempos contigo) y después Productos y lo optativo.

| Ola | Qué | Lecciones | Fechas de referencia |
|---|---|---|---|
| Ola 1 | Tronco: empezar a dirigir | 4 | nov 2026 a dic 2026 |
| Ola 2 | Tronco: el resto | 24 | dic 2026 a may 2027 |
| Ola 3 | Modelos: deep learning, lenguaje, entrenar y post-entrenar (esenciales) | 15 | may 2027 a sep 2027 |
| Ola 4 | Compartido: agentes, harness y Claude Code (esenciales) | 13 | sep 2027 a dic 2027 |
| Ola 5 | Modelos: inferencia e investigador (esenciales) | 7 | dic 2027 a ene 2028 |
| Ola 6 | Cierre (esenciales) | 6 | ene 2028 a mar 2028 |
| Ola 7 | Productos (esenciales) | 13 | mar 2028 a jun 2028 |
| Ola 8 | Todo lo optativo | 32 | jun 2028 a ene 2029 |

**Con esto, tu ruta esencial queda lista hacia mar 2028, y todo hacia ene 2029.** A 2 lecciones por semana, las fechas se reducen a la mitad: tu ruta, hacia fines de 2027. Para llegar a ese ritmo, cada lección lleva una escena solo cuando la idea lo pide.

```text
                           NDEFMAMJJASONDEFMAMJJASONDE
Ola 1 Tronco               ██                         
Ola 2 Tronco                ██████                    
Ola 3 Modelos                    █████                
Ola 4 Compartido                     ████             
Ola 5 Modelos                           ██            
Ola 6 Cierre                             ███          
Ola 7 Productos                            ████       
Ola 8 Todo lo optativo                        ░░░░░░░░

Noviembre de 2026 a ene 2029 · █ rutas esenciales · ░ optativo
Años: la primera N es noviembre de 2026; cada 12 columnas es un año.
```

---

## 12. Riesgos

| Riesgo | Qué tan serio | Cómo se maneja |
|---|---|---|
| **El tamaño:** 115 lecciones son más de 2 años al ritmo actual | Alto | Tu ruta esencial primero, y revisión al cerrar cada ola |
| **Dirigir sin haber programado:** los cursos que enseñan a dirigir piden programar antes, y Google DeepMind advierte de la pérdida de habilidades | Alto | Pseudocódigo sin ayuda, pre-mortem, predecir antes de mirar, ayuda que se retira; en Modelos, leer, predecir y defender. Se mide contigo |
| **Investigación sin escribir código:** depurar entrenamientos y confiar en números es lo más difícil de delegar | Alto en Modelos | La caza de bugs y la defensa oral. Los laboratorios frontera piden años de software: se dice con claridad |
| **El proyecto es más ambicioso que el mercado:** solo 8 % de los avisos de productos menciona multi-agente | Medio | Cada hito exige ganarle a un solo agente, y el CRM debe poder terminar casi sin subagentes |
| **Costo para el estudiante:** los niveles 4 y 5 y el entrenamiento con GPU cuestan | Medio | Cada ficha estima su costo. Proveedor simulado y modelos diminutos cuando se pueda |
| **Herramientas que cambian rápido:** MCP cambió en julio, y Claude Code sale cada semana | Medio | Se enseña la función, y el nombre actual va como dato con fecha. Revisión cada 3 meses |
| **Umbrales sin calibrar:** los «7 de 10» y «80 %» de los hitos son propuesta | Medio | Piloto contigo antes de fijarlos |
| **Ley que cambia:** la Ley 21.719 de Chile tiene fecha el 1 de diciembre de 2026, y hay un proyecto para postergarla | Bajo | La lección 110 se revisa después del 4 de diciembre de 2026 |
| **Sesgo a favor de Anthropic:** esta propuesta la escribió Claude | Bajo | Codex y DeepSeek Harness se comparan con los mismos criterios |

---

## 13. Decisiones que necesito

Si respondes **«dale»**, tomo todas las recomendaciones.

| # | Decisión | Recomiendo | Por qué |
|---|---|---|---|
| 1 | ¿Apruebas la estructura: tronco, compartido, dos caminos y cierre? | Sí | Respeta los 2 caminos y la misión para los dos |
| 2 | En el Camino Modelos, ¿se puede **leer** código para cazar errores, sin escribirlo nunca? | Sí | Sin leer, no se puede confiar en un entrenamiento. Respeta tu decisión del pedido 75 |
| 3 | ¿Modelos vive en la especialidad de ML y Deep Learning, que se reordena en 7 bloques? | Sí | Es lo que pediste: combinar o desviar hacia ML |
| 4 | ¿Se publica primero tu ruta (tronco, luego Modelos y compartido) y después Productos? | Sí | Eres el primer estudiante, y así medimos tiempos y umbrales contigo |
| 5 | ¿La lección publicada mantiene sus ejemplos de soporte? | Sí, por ahora | Los aprobaste, y son ejemplos de la lección, no el proyecto. Se revisan cuando exista tu sistema |
| 6 | ¿Academy entrega un verificador externo con suites ocultas para los hitos? | Sí | Sin eso, las comprobaciones no son objetivas |
| 7 | LeetCode en pseudocódigo y leer diffs, como en la versión 1 | Sí | Nada nuevo cambió esto. Lo de entrevistas sigue siendo secundario |
| 8 | ¿Respaldo las copias de las fuentes en BrainFran? | Sí | Hoy solo existen en la VM |

---

## 14. Lo que falta validar

1. **Los tiempos y umbrales:** son estimaciones; se miden contigo.
2. **Entrevistas:** todo lo reunido es secundario. No se pudo leer el blog de Canva ni la guía de Anthropic para candidatos.
3. **Fuentes secundarias:** los días del curso de Google, sus 5 niveles, las 6 categorías de AI Agent Traps, y las bases de vLLM y SGLang para la lección 94.
4. **Codex por dentro:** no se leyeron sus docs de sandbox, permisos y memoria.
5. **Chile y Latinoamérica:** solo 38 de los 969 avisos son de la región.
6. **Costos de GPU barata:** faltan cuotas de Colab y Kaggle y precios de T4 y RTX 4090.

---

## 15. De dónde sale

- **Notas de la investigación** (fuera de git): `research_notes/Roadmap AI Engineering con dos caminos/`, en 7 archivos: harness, sistema multi-agente, fábrica de software, CEO y CTO, camino de modelos, ofertas de trabajo y verificación.
- **Fichas:** `research_notes/propuesta_v2/`, generadas desde la estructura con un validador.
- **Fuentes:** `docs/roadmap/README.md` (roadmapv1 a roadmapv7) y `docs/roadmap/feedback-propuesta.md`.
