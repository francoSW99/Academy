# Temario de ML y Deep Learning al 100 %

> **Pedido 92 (2026-11-07):** «vamos a trabajar en mejorar al 100 % el temario ML/DL engineer, hacerlo completo y profesional, es el siguiente paso ya que dejamos listo el temario de AI engineer. Prepárate para ello».
>
> **Pedido 93 (2026-11-07):** sumar 3 fuentes: el temario del diplomado de la PUCV, los libros de ML y DL de BrainFran y todas las skills de la oferta de NeuralWorks. La comparación está en [mapa-de-skills.md](mapa-de-skills.md).
>
> **Pedido 94 (2026-11-07):** Fran tomó las 9 decisiones ([feedback.md](feedback.md)) y pidió investigar en qué se diferencian un ML engineer y un data scientist ([ml-vs-ds.md](ml-vs-ds.md)), para repartir los temas entre los dos temarios.
>
> **Pedido 95 (2026-11-07):** la diferencia entre los roles se investigó más a fondo en la web (MIT, Stanford, Berkeley, CMU, Google, Microsoft, AWS y Coursera). [ml-vs-ds.md](ml-vs-ds.md) confirma la frontera y propone 4 ajustes a la v1, que esperan tu OK.
>
> **Pedido 98 (2026-11-07):** Fran aprobó la [propuesta v2](propuesta-ml-v2.md), con 2 lecciones más de biomecánica.
>
> **Pedido 99 (2026-11-07):** publicada.
>
> **Estado:** **publicada en el sitio** (https://academy.woorky.app/es/) y en la nota de BrainFran: ML y DL tiene 112 lecciones (101 esenciales) más 8 repasos, y Data Science, 24 lecciones más 6 repasos y 1 requisito. El sitio sale de `research_notes/propuesta_ml/gen_temario.py`. La fase 5e está terminada. La [v1](propuesta-ml-v1.md) queda como historia.

## La meta

Tus palabras (pedido 82): el camino de ML y DL tiene que ser «uno nuevo, que sea más especificado en estadística, en entrenamiento de modelos, en pre-entrenamiento y todas esas cosas, no solamente en LLM».

Y la meta del Pilar 2 de tu nota:

- un puesto de **Data Scientist o ML Engineer** (NeuralWorks, Suncast, también en energía);
- **investigar** más adelante: neurociencia con datos y visión para biomecánica;
- entender **por qué funciona** cada cosa, no solo cómo se usa.

Eso son dos mercados distintos:

| Mercado | Qué pide | De dónde sale |
|---|---|---|
| ML Engineer de industria | Datos en tablas, pronóstico, visión, métricas, MLOps, cloud (GCP) | Tus ofertas tipo: NeuralWorks, Suncast, Claro, Rising Sun |
| Research engineer de modelos | PyTorch 40 %, GPU 30 %, refuerzo 26 %, optimización de inferencia 24 %, fine-tuning 20 %, entrenamiento distribuido 18 % | 504 avisos de modelos contados el 2026-11-05 (`research_notes/`, sin boilerplate) |

## Cómo está hoy

Publicado el 2026-11-07 (temario v3): **57 lecciones, 46 esenciales, 16 módulos.**

| Bloque | Lecciones | Esenciales |
|---|---:|---:|
| Fundamentos: matemática y estadística | 9 | 9 |
| Machine Learning clásico | 15 | 11 |
| Entrenar y ajustar modelos | 5 | 4 |
| Deep Learning | 14 | 12 |
| Pre-entrenamiento y escala | 7 | 5 |
| Post-entrenamiento y refuerzo | 3 | 2 |
| MLOps y producción | 3 | 3 |
| Especialización (optativo) | 1 | 0 |

**De dónde salió:** casi todo del Pilar 2 de tu nota, con cursos citados de paso (CS229, CS336, Karpathy, el Tuning Playbook de Google). AI Engineering pasó por 7 fuentes externas, 969 avisos y 9 rondas de tu feedback. **ML y DL todavía no pasó por ese proceso.**

## Diagnóstico

### Lo que falta

| # | Hueco | Por qué importa | Hoy está en |
|---|---|---|---|
| 1 | **Proyecto propio** | AI Engineering tiene «tu sistema multi-agente»; ML no tiene ninguno. La v2 traía «tu propio modelo», con hitos M0 a M10 | `propuesta-roadmap-final.md`, sin usar |
| 2 | **Pronóstico y series de tiempo** | NeuralWorks pide predecir fallas, y Suncast, generación solar y eólica | Data Science (ds/10), con puentes |
| 3 | **Datos y features para modelar** | El capítulo 2 de Géron (un proyecto de punta a punta) parte por ahí | Data Science (ds/05 y ds/07) |
| 4 | **Carrera de ML** | Entrevistas de algoritmos, entrenamiento, despliegue y diseño de sistemas de ML. Tu biblioteca tiene el libro de Susan Shu Chang | No está |

### Lo que queda corto

| # | Tema | Hoy | Lo que piden |
|---|---|---|---|
| 5 | **MLOps** | 3 lecciones | Kubernetes 22 %, cloud 30 %, Spark 11 % en avisos de modelos; NeuralWorks lo pone en el centro del rol |
| 6 | **Post-entrenamiento de LLMs** | SFT, DPO y LoRA viven solo en el Camino 2 de AI Engineering | Fine-tuning 20 % y refuerzo 26 % de los avisos de modelos |
| 7 | **Inferencia** | Cuantización y servir también viven solo en AI Engineering | Optimización de inferencia 24 %, vLLM 9 % |
| 8 | **Visión moderna y autosupervisado** | Una lección de visión; ViT y CLIP solo como mención | Géron dedica el capítulo 16 a Transformers de visión y multimodales |
| 9 | **Horas y nivel por lección** | No hay | AI Engineering tampoco los tiene todavía |

Menores, para revisar en la investigación: teoría de la información (entropía, entropía cruzada, KL) y ética, sesgo y equidad (el bloque 28 de la nota los nombra).

## Fuentes listas

Primero las de tu biblioteca, según la regla de fuentes originales.

| Fuente | Qué cubre | Estado |
|---|---|---|
| Géron, *Hands-On ML with Scikit-Learn and PyTorch* (2025) | La columna: 19 capítulos, de un proyecto de punta a punta al refuerzo; apéndice de precisión mixta y cuantización | PDF de 878 páginas en BrainFran (`Drive/libros-ML`). Índice leído el 2026-11-07 |
| Chang, *Machine Learning Interviews* (2024) | Roles, entrevistas de algoritmos, entrenamiento, código, despliegue | PDF en BrainFran. Índice leído |
| Zheng y Casari, *Feature Engineering for ML* | Features de números, texto y categorías; PCA | PDF en BrainFran. Índice leído |
| Chip Huyen, *AI Engineering* (2025) | Fine-tuning, datasets, inferencia | PDF en BrainFran |
| Grus; Brunton y Kutz; Provost y Fawcett | Desde cero, ML para ingeniería, ML para negocio | PDFs en BrainFran |
| Tus notas de ML+DL | Métricas de error, ML, DL, evaluación y monitoreo | `04-Biblioteca/IA/ESTUDIO AUTODIDACTA/ML+DL/` |
| Catálogo de fuentes | 134 fuentes: MIT, Stanford, Berkeley, Harvard, CMU, Google, AWS, DeepLearning.AI, Hugging Face, fast.ai | `05-Estudio/Investigación roadmap ML-DL-DS/`, links revisados el 2026-10-24 |
| Investigación del camino de modelos | CS336, CS224N, 11-711, roles, entrar sin doctorado, entrenar sin GPU | `research_notes/…/models_research_path.md` |
| **Diplomado PUCV, versión 30** (pedido 93) | Aprendizaje estadístico: el modelo lineal a fondo, series de tiempo con SARIMA, SQL, Spark, ML clásico, AWS y deep learning, en 96 horas | [fuentes/pucv-diplomado-v30.md](fuentes/pucv-diplomado-v30.md), con el PDF al lado. Fuera de git |
| **Oferta de NeuralWorks, ML Engineer Jr** (pedido 93) | 38 skills, de lo que harías a la prueba de HackerRank | `BrainFran/vault/08-Carrera/Ofertas/`. Están todas en el [mapa de skills](mapa-de-skills.md) |
| Lakshmanan, *Data Science on GCP*, 2.ª ed. | GCP: llevar datos a la nube, streaming, Vertex AI Workbench y Spark | PDF en BrainFran, **incompleto:** termina en la mitad del cap. 7 |

**Lo que falta:**

- **Videos de ML:** tu biblioteca solo tiene la carpeta de videos `AIagents`.
- **Libros clave que no están en tu biblioteca**, candidatos sin verificar: *Designing Machine Learning Systems* (Chip Huyen), *Understanding Deep Learning* (Prince), *ISLP* y *d2l.ai*.

**Para leerlas:** los PDFs se leen con `pypdf`, instalado en un entorno aparte, fuera del repo.

## Cómo se trabaja

Mismo proceso que en AI Engineering:

1. **Investigar.** Las notas van en `research_notes/propuesta_ml/`, fuera de git. Toma 1 sesión.
2. **Escribir la propuesta v1 del temario.** Se genera desde `estructura.py` y queda en `docs/roadmap/ml-dl/propuesta-ml-v1.md`. Toma 1 sesión.
3. **Recoger tu feedback por partes.** Se guarda en `docs/roadmap/ml-dl/feedback.md`.
4. **Subir al borrador** (https://academy.woorky.app/borrador/es/). Se publica solo cuando des el OK.

Las reglas no cambian: se aprende dirigiendo al LLM, sin escribir código; se usan fuentes originales con cita; y el temario publicado se toca solo cuando lo apruebes.

## Decisiones

Las 9 decisiones del pedido 93 se tomaron en el pedido 94. Están en [feedback.md](feedback.md), con las palabras de Fran tal como llegaron. Las preguntas que quedan abiertas están al final de la [propuesta v1](propuesta-ml-v1.md).
