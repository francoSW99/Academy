# Feedback de Fran sobre el temario de ML y DL

Cada parte guarda sus palabras tal como llegaron y, debajo, lo que se entendió. **El temario publicado no cambia hasta que Fran lo apruebe.**

---

## 1. Las 9 decisiones (2026-11-07, pedido 94)

### Tal como llegó

> Respecto a las decisiones de:
>
> # ALCANCE
>
> 1. el modelo lineal tiene que entrar a fondo en ML, pq es un modelo de ML, el mas importante todos los modelos de ML tienen que estar en el temario de ML
> 2. si serie de tiempo es ML si, y que tmb se haga un repaso o recordatorio en Data Scince
> 3. A
> 4. A, si es enficado en datascience
>
> # FORMA
>
> 5. Obvio los dos caminos o salidas, ya que quiero trabajar en la industria o coorporativo como ML o DataScince, pero tmb quiero investigar como un ML engineer en diferentes areas como un neurociencia, predecir partidos de futbol, trakear jugadores y juegos de tenis o futbol con computer vision, computer vision para deportes, investigar sobre como funciona el cerebro ya sea con ml/deeplearning o computervision, etc...
> 6. asi es empecemos con GCP como ejemplo principal y dsp mas adelante le agregamos AWS, pero empecemos con GCP
> 7. A y mas adelante con B
>
> # PROYECTOS Y FUENTES
>
> 8. me gusta la A
> 9. sin subagentes primero pq gastan muchos token, hazlo solo tu para ver como un roadmapv1 y luego lo vamos mejorando poco a poco si es necsario o si necesitas q te entregue mas fuentes y nbotebooklm
>
> ### R si entra pq es importante por lo menois saber como funciona y para q sirve, ya q se ocupa en datascience o ML
>
> ### creo q entramos en un problema de que cosas deben estar en ML y Data Science, no importa si se repiten o dar un recordatorio en los dos pero lo importante es q no se repita ni se profundise en ambas, debes investigar y tener claro como se diferencia un ML enginner y un Data Scientist para tener claro como distrubiur, merchear y crear ambos temarios

### Lo que se entendió

| # | Decisión | Cómo queda |
|---|---|---|
| 1 | Modelo lineal | Entra a fondo en ML. **Regla nueva: todos los modelos de ML viven en el temario de ML.** |
| 2 | Series de tiempo | Viven en ML. Data Science lleva un repaso. |
| 3 | MLOps y datos a escala | A: la salida de Industria trae todo lo que pide un ML engineer. |
| 4 | Econometría e inferencia causal | A: se quedan en Data Science, enfocadas en datos. |
| 5 | Dos salidas | Sí, Industria y Research. **Research no es solo modelos por dentro:** también es investigar con ML en otros campos. Fran nombró neurociencia, predecir partidos de fútbol, seguir jugadores y partidos de tenis o fútbol con visión, y entender el cerebro con ML, DL o visión. |
| 6 | Nube | GCP primero, como ejemplo principal. AWS llega más adelante. |
| 7 | Entrevista con código | A ahora: pseudocódigo, y la práctica en HackerRank se hace aparte. B más adelante: practicar código a mano solo para la entrevista. |
| 8 | Proyecto | A: uno por salida. En Industria, el pronóstico solar en producción. En Research, «tu propio modelo». |
| 9 | Cómo investigar | Sin subagentes, porque gastan muchos tokens. Claude arma solo un roadmap v1, y se mejora de a poco. Fran puede mandar más fuentes o cuadernos de NotebookLM si hacen falta. |
| — | R | **Entra:** por lo menos, saber cómo funciona y para qué sirve. |
| — | ML y Data Science | **Un tema puede aparecer en los dos, pero se profundiza en uno solo;** el otro lleva un recordatorio. Para repartir los temas hay que investigar en qué se diferencian un ML engineer y un data scientist. Eso está en [ml-vs-ds.md](ml-vs-ds.md). |

---

## 2. Investigar más a fondo la diferencia (2026-11-07, pedido 95)

### Tal como llegó

> oye y una duda antes de aprobar todo esto, para mejorar la precision y alcaracion de la diferencia entre un ML engineer y un Data Scientist, podrias investigar mas profundamente su deiferencia en la web en lugares de confianza como el MIT, univerisdad de Stanford, cursos de google o otras fuentes confiables del mundo tech actualizadas al 2026 o lo mas actuales posibles

### Lo que se hizo

[ml-vs-ds.md](ml-vs-ds.md) quedó con 16 fuentes: MIT, Stanford, Berkeley, CMU, Google Cloud, Microsoft, AWS, Coursera y 2 libros de tu biblioteca. Confirman la frontera y propusieron 4 ajustes.

---

## 3. Aplicar todo y la nueva propuesta (2026-11-07, pedido 96)

### Tal como llegó

> Dale ahora con esta investigación y lo que encontraste modifica todo el roadmap de propuesta y el temario propuesto para Machine Learning. Y también integra que hay todas las fuentes que encontraste para poder explicar esto en el temario o en la aplicación de Academy, la diferencia entre estos dos, entre Machine Learning Engineer y Data Scientist. Y también ocupa la fuente, guárdala en BrainFront, guarda toda esa fuente y guarda todo lo que encontraste en BrainFront. Y hazme una nueva propuesta con todo eso. Y después, el proyecto de research, yo creo que tiene que ser un poco más rápido de hacer, no un propio modelo completo. Tal vez eso sea como un proyecto de propuesta, si uno lo quiere hacer o no. Y las ramas se recorren las dos. Y claro, sí me parece el tamaño de 109 lecciones.

### Lo que se entendió

| Pedido | Cómo queda |
|---|---|
| Aplicar la investigación | Entran los 4 ajustes en la [propuesta v2](propuesta-ml-v2.md): el modelo lineal como requisito en Data Science, operar IA generativa en Industria, datos a escala como bases y entregables distintos por curso. |
| Las fuentes, para explicar la diferencia en Academy | La lección «ML engineer, data scientist y los demás: quién hace qué» lleva las 16 fuentes y una ficha completa, con ideas, visuales, ejemplos, práctica y la bibliografía en APA. |
| Guardar todo en BrainFran | Cada fuente web tiene su ficha en `04-Biblioteca/Fuentes/` y su copia en `04-Biblioteca/_archivos/web/` (Microsoft bloquea las descargas). Los 2 PDF (la guía de Google y la PUCV) entraron a la biblioteca con su ficha. La investigación, el mapa de skills y el temario de la PUCV están en `05-Estudio/Investigación roadmap ML-DL-DS/`, y el Catálogo de fuentes y el Plan de investigación quedaron al día. |
| Proyecto de Research más rápido | «Tu primer estudio»: una pregunta, 6 hitos (R0 a R5), pensado para 2 a 3 semanas. «Tu propio modelo» queda como proyecto propuesto, optativo. |
| Las ramas | Se recorren las dos, deporte y neurociencia, y sus 8 lecciones son esenciales. |
| Tamaño | Aprobado: 109 lecciones, más la de IA generativa, son 110. |

---

## 4. Los proyectos (2026-11-07, pedido 97)

### Tal como llegó

> respecto a tu propuesta de ml v2, esta todo genial, pero tengo comentarios y feedback que debes conciderar para redactar y re estrucuturar  la propuesta de ml v2.
> respecto al proyecto, esta genial el de suncast me encanto, el optativo de sumar la suciedad eso no quiero que este. Respecrto al proyecto de research(tu primer estudio), quiero que ese sea el mini proyecto ya que es corto. y los que definiste como mini proyectos(deporte prediccion de partidos y seguir jugadores, neurociencia y biomecanica) sean los proyectos principales y grandes de research

### Lo que se entendió (aplicado en la [propuesta v2](propuesta-ml-v2.md))

| Pedido | Cómo queda |
|---|---|
| Proyecto de Industria | Se mantiene el pronóstico solar en producción, y se quita el optativo de la suciedad de los paneles. |
| «Tu primer estudio» | Pasa a ser el mini-proyecto de Research: va primero, toma de 1 a 2 semanas y usa una pregunta más chica para no repetir los proyectos grandes. |
| Proyectos grandes de Research | Son 3, cada uno con sus hitos y su comprobación: **deporte** (predecir partidos y seguir jugadores, D0 a D7), **neurociencia** (decodificar el cerebro, N0 a N6) y **biomecánica** (corregir la técnica con la cámara, B0 a B6). |
| Lo que se ajustó para eso | «Más allá de la recta», donde está Poisson, y «Calibración» pasan a ser esenciales, porque el proyecto de deporte las usa. Quedan 99 esenciales de 110. |

---

## 5. OK a la v2 y 2 lecciones de biomecánica (2026-11-07, pedido 98)

### Tal como llegó

> dale sumale esos 2 a la leccion de biomecanica y con eso le doy el ok a la v2, comencemos con el trabajo

### Lo que se hizo

- **2 lecciones nuevas:** «Pose en 2D y 3D: de puntos clave a ángulos articulares» y «Contar repeticiones y corregir en vivo», que salen de los bloques 22 y 30 del Pilar 2. La rama de deporte se divide en 2 módulos, uno por proyecto grande. Quedan 112 lecciones, 101 esenciales.
- **«Seguir objetos en video» sigue siendo optativa,** porque en el pedido 98 Fran pidió solo las 2 lecciones.
- **La v2 está aprobada y en el borrador** (https://academy.woorky.app/borrador/es/). `gen_temario.py` genera los 3 temarios. Los repasos son lecciones cortas con un puente a la lección completa, y el requisito se ve como desvío.
- **Los avisos que ve el estudiante quedaron sin notas internas:** sin números de pedido, sin nombres de archivos y sin el nombre de NeuralWorks.
- **El sitio público sigue con la v3** hasta que Fran pida publicar.

---

## 6. Dónde va el aprendizaje por refuerzo (2026-11-07, pedidos 100 y 101)

### Tal como llegó

> espera antes de eso tengo una duda, estaba revisando el temario de ML y vi que aprendizaje por refuerzo esta casi al final, solo se verá ahi? o al inicio se introduce? ya q esto es muy importante desde el inicio en ML entonces me extraña q este al inicio

> si crees q es lo correcto profesional, entonces corrijelo, aplicalo y publicalo de una a academy(no a borrador), pero si tienes dudas prefiero asi como esta y luego ponte a investigar lo de datascience (temario)

### Lo que se hizo

- **Lo que dicen las fuentes:**
  - **MIT 6.390** (otoño de 2026) enseña procesos de decisión de Markov y refuerzo en las clases 10 y 11, después de los Transformers, en su curso de introducción para todos.
  - **Stanford CS229** lo deja al final.
  - **Géron** lo presenta en el cap. 1 y lo enseña en el cap. 19.
  - **Chang** lo pone en la entrevista técnica.

  Ninguna lo enseña al inicio, pero todas lo dan a todos en el curso base.
- **El cambio, publicado directo en el sitio:**
  - La base del refuerzo pasa al tronco común, al final de Deep Learning: «Decidir paso a paso: procesos de decisión de Markov» y «Aprendizaje por refuerzo desde la base», que conserva su dirección.
  - La lección 1 lo sigue presentando.
  - Research se queda con «Refuerzo profundo», el refuerzo para modelos de lenguaje y la destilación.
  - Quedan 114 lecciones, 103 esenciales.
