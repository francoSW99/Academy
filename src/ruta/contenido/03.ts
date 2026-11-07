import type { ContenidoLeccion, Fuente, VideoBiblioteca } from "../tipos";

// Lección 03 · Cómo funciona un LLM. Se lee de corrido y los ejemplos son del trabajo de un ingeniero de IA:
// un bot de soporte que redacta, clasifica tickets, conversa y responde con el manual (pedido 40).
// Los datos salen de lab/ (deepseek-r1:8b en Ollama) y las afirmaciones se apoyan en las fuentes del final.

// Videos que tratan solo de cómo funciona un LLM (pedido 41). Del curso de Marina Wyss, solo el tramo del tema.
const tresBlue: VideoBiblioteca = {
  id: "LPZh9BOjkQs",
  titulo: "Large Language Models explained briefly",
  canal: "3Blue1Brown",
  minutos: 8,
  idioma: "en",
  queMirar: "Cómo un LLM predice la siguiente palabra, explicado con animaciones.",
};

const karpathy: VideoBiblioteca = {
  id: "zjkBMFhNj_g",
  titulo: "[1hr Talk] Intro to Large Language Models",
  canal: "Andrej Karpathy",
  minutos: 60,
  idioma: "en",
  queMirar: "La primera parte de la charla: qué es un LLM, cómo predice la siguiente palabra y cómo se entrena.",
};

const marinaWyss: VideoBiblioteca = {
  id: "JV3pL1_mn2M",
  titulo: "AI Engineering in 76 Minutes (Complete Course/Speedrun!)",
  canal: "Marina Wyss",
  minutos: 76,
  idioma: "en",
  queMirar: "Solo el comienzo del capítulo 1: el Transformer, el prefill y el decode, y la temperatura.",
  // Minutos calculados sobre la transcripción de la biblioteca (no trae tiempos): el tema va del 2:51 al 8:34.
  desde: 165,
  hasta: 510,
};

const fuentes: Fuente[] = [
  {
    id: "phoenix",
    corta: "Phoenix y Taylor (2024)",
    cita: "Phoenix, J., y Taylor, M. (2024). Prompt Engineering for Generative AI: Future-Proof Inputs for Reliable AI Outputs at Scale. O’Reilly Media. ISBN 978-1-098-15343-4.",
    tipo: "libro",
  },
  {
    id: "karpathy",
    corta: "Karpathy (2023)",
    cita: "Karpathy, A. (2023). [1hr Talk] Intro to Large Language Models [Video]. YouTube.",
    url: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
    tipo: "video",
  },
  {
    id: "tresblue",
    corta: "3Blue1Brown (2024)",
    cita: "3Blue1Brown. (2024). Large Language Models explained briefly [Video]. YouTube.",
    url: "https://www.youtube.com/watch?v=LPZh9BOjkQs",
    tipo: "video",
  },
  {
    id: "wyss",
    corta: "Wyss (s. f.)",
    cita: "Wyss, M. (s. f.). AI Engineering in 76 Minutes (Complete Course/Speedrun!) [Video]. YouTube.",
    url: "https://www.youtube.com/watch?v=JV3pL1_mn2M",
    tipo: "video",
  },
  {
    id: "medicion",
    corta: "medición de Academy",
    cita: "Academy. (2026). Mediciones con deepseek-r1:8b en Ollama: autocompletado, tokens, tickets, ventana de contexto y tiempos de lectura y escritura. Código y datos en GitHub.",
    url: "https://github.com/francoSW99/Academy/tree/main/lab",
    tipo: "medicion",
  },
];

export const leccion03: ContenidoLeccion = {
  n: "03",
  revisada: "2026-11-01",
  resumen:
    "Un LLM no consulta la verdad: predice la palabra que suele venir después. Aquí lo vas a ver en el trabajo de todos los días de un ingeniero de IA: un bot de soporte que redacta, clasifica tickets, conversa y responde con el manual.",

  ideas: [
    {
      titulo: "Predice la siguiente palabra",
      texto: [
        "Un modelo de lenguaje (LLM) no busca la respuesta en una base de datos. Lee tu texto, calcula qué tan probable es cada palabra que podría venir después, elige una, la agrega y repite. Así escribe todo, palabra por palabra.",
        { figura: "bucle" },
        "Un caso de todos los días: un bot de soporte redacta la respuesta a Carla, a quien le cobraron dos veces. Le dimos el comienzo, «Hola Carla, lamentamos el cobro duplicado de tu suscripción. Ya», a un modelo real (deepseek-r1:8b). Escríbela tú, palabra por palabra:",
      ],
      escenas: ["autocompletado"],
      despues: [
        "Eligiendo siempre su palabra más probable, «hemos» (47 %), «cancelado» (17 %), «la» (39 %) y «recurrencia» (25 %), **el bot escribió «Ya hemos cancelado la recurrencia», y nadie canceló nada.** Casi con la misma probabilidad podría haber escrito «reembolsado» (16 %) o «verificado» (14 %). El modelo no sabe qué pasó en tu sistema: sabe qué suele venir después de «lamentamos el cobro duplicado».",
      ],
      fuentes: [{ fuente: "phoenix", donde: "p. 53" }, { fuente: "karpathy" }, { fuente: "tresblue" }, { fuente: "medicion" }],
    },
    {
      titulo: "Lee en tokens",
      texto: [
        "Esas «palabras» en realidad son tokens: pedazos de palabra. Un ticket, un JSON, un trozo de código o el modelo de un producto se cortan distinto. Pruébalo:",
      ],
      escenas: ["tokens"],
      despues: [
        "**Todo se mide en tokens:** lo que pagas, lo que tarda y cuánto cabe en una conversación. Por eso un bot se presupuesta en tokens.",
        "Y el idioma importa. Contamos las instrucciones de un bot de soporte, un ticket y una respuesta, en español y en inglés: el español usó un 63 % más de tokens en GPT-3 y un 13 % más en GPT-4o. **Un presupuesto calculado en inglés se queda corto.**",
      ],
      fuentes: [{ fuente: "phoenix", donde: "cap. 2, pp. 61–76" }, { fuente: "medicion" }],
    },
    {
      titulo: "Elige con un dado cargado",
      texto: [
        "En cada paso, el modelo reparte probabilidades entre los tokens que podrían seguir y tira un dado cargado con esas probabilidades. **Por eso la misma entrada puede dar respuestas distintas.**",
        "La temperatura cambia el dado: baja, casi siempre sale el más probable; alta, se arriesga más. Elige un ticket de soporte y tira los dados:",
      ],
      escenas: ["muestreo"],
      despues: ["Un bot que clasifica tickets lo muestra bien. «El pedido llegó con la caja abierta y le falta el cargador» va a envíos el 86 % de las veces, pero a técnico 9 de cada 100: **el mismo ticket, a veces otra categoría.** Con la temperatura baja, va siempre a envíos.", "Pero con «La app se cierra cada vez que intento pagar con mi tarjeta», el modelo apuesta 74 % a facturación, aunque es una falla técnica: «pagar» y «tarjeta» pesan más. **Bajar la temperatura no lo arregla: con la temperatura en 0,3, lo manda a facturación el 99,9 % de las veces.** Lo más probable no siempre es lo correcto."],
      fuentes: [{ fuente: "wyss", donde: "cap. 1" }, { fuente: "medicion" }],
    },
    {
      titulo: "Solo ve lo que cabe en su ventana",
      texto: [
        "La ventana de contexto es todo lo que el modelo lee de una vez: las instrucciones, la conversación y los documentos. Lo que queda fuera no existe para él.",
        "Además, no tiene memoria entre llamadas: en cada turno vuelve a leer todo desde el principio. Cuando la conversación ya no cabe, lo viejo se recorta o se resume. Mira la conversación de soporte de Carla:",
      ],
      escenas: ["contexto"],
      despues: ["Carla dijo en su primer mensaje que su empresa tiene el plan Empresa, que no paga devoluciones. Con la conversación entera, el bot lo respeta: el retiro le sale gratis. Si se recorta lo viejo, **el bot ya no sabe que Carla es del plan Empresa**: le cita el precio de $4.990 y le pide confirmar algo que ella ya dijo. Esta vez el resumen sí guardó el plan; otras veces no, y por eso un resumen se prueba.", "Usamos una ventana chica para que se note rápido. Con ventanas grandes pasa lo mismo, solo que más tarde."],
      fuentes: [{ fuente: "phoenix", donde: "p. 74" }, { fuente: "medicion" }],
    },
    {
      titulo: "Lee rápido y escribe lento",
      texto: [
        "Primero lee todo tu prompt de una vez (prefill). Después escribe la respuesta token a token (decode), y cada token espera al anterior.",
        "Un bot con RAG busca en el manual lo que responde la pregunta y se lo pega al prompt. Mira qué pasa si le pega solo lo que sirve o el manual entero:",
      ],
      escenas: ["prefill"],
      despues: ["En esta máquina, sin GPU, la pregunta sola (44 tokens) empieza a responderse en 5 segundos; con los 2 trozos del manual (223 tokens), en 24 segundos; con el manual entero (2.525 tokens), en **5 minutos y 10 segundos**.", "En la nube todo es mucho más rápido, pero la regla se mantiene: más texto que leer, más espera y más costo. Para responder a Carla bastan 2 trozos del manual."],
      fuentes: [{ fuente: "wyss", donde: "caps. 1, 13 y 14" }, { fuente: "medicion" }],
    },
  ],

  consejos: [
    {
      titulo: "Lo que importa, se verifica",
      texto:
        "Un LLM predice lo probable, no lo verdadero. Que el bot no prometa lo que el sistema no hizo: los hechos (un reembolso, un precio, una política) salen de tus datos o del manual, y lo importante se revisa antes de mandarlo.",
      fuentes: [{ fuente: "phoenix", donde: "p. 128" }],
    },
    {
      titulo: "Presupuesta en tokens",
      texto:
        "Calcula el costo con el tokenizador del modelo que vas a usar y en el idioma de tu producto. La salida suele costar varias veces más que la entrada.",
      fuentes: [{ fuente: "medicion" }],
    },
    {
      titulo: "La temperatura no da la verdad",
      texto:
        "Baja para clasificar o extraer datos; más alta para redactar o generar ideas. Bajarla vuelve al modelo consistente, no correcto: contra los errores, dale ejemplos y las definiciones de tus categorías, y mide con evals cuántas veces se equivoca (lo ves en «Primeros evals»). Lo que deba salir con una forma fija, pídelo con un esquema y valídalo en tu código.",
      fuentes: [{ fuente: "wyss", donde: "caps. 1 y 2" }],
    },
    {
      titulo: "Lo crítico no vive en el historial",
      texto:
        "El plan del cliente, sus restricciones y sus datos van en las instrucciones del sistema, que viajan en cada llamada, o guardados por tu app. Si tu app resume conversaciones, prueba que el resumen conserve lo importante. Decidir qué entra en la ventana en cada llamada es context engineering, y tiene su propia lección.",
      fuentes: [{ fuente: "phoenix", donde: "p. 74" }],
    },
    {
      titulo: "Que lea poco y escriba lo justo",
      texto:
        "Pásale solo los trozos que sirven, no el manual entero. Limita lo que escribe y muéstralo mientras se escribe (streaming). Si repites un contexto largo, usa la caché de prompts del proveedor. Y mide dos números: cuánto tarda en empezar y cuántos tokens escribe por segundo.",
      fuentes: [{ fuente: "wyss", donde: "caps. 13 y 14" }],
    },
  ],

  practica:
    "Toma el bot de soporte de esta lección, u otro de tu trabajo, y decide: qué temperatura usarías para clasificar tickets y cuál para redactar respuestas, qué dato del cliente no puede perderse y dónde lo guardas, y qué parte del manual le pasarías en cada pregunta.",

  preguntas: [
    "Explícame con un ejemplo de soporte por qué bajar la temperatura no corrige una clasificación equivocada.",
    "¿Qué hace una app de chat cuando la conversación ya no cabe en la ventana de contexto del modelo?",
    "¿Por qué escribir la respuesta es más lento y más caro que leer el prompt, si los dos son tokens?",
  ],

  videos: [tresBlue, karpathy, marinaWyss],
  fuentes,
};
