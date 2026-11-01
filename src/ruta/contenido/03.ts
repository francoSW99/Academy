import type { ContenidoLeccion, VideoBiblioteca } from "../tipos";

// Lección 03 · Cómo funciona un LLM. Se lee de corrido: cada idea con su explicación, su escena y su ejemplo real;
// al final, lo que haría un ingeniero de IA experto con cada idea. Los textos salen de la nota (Pilar 1 · bloque 3)
// y los datos, de lab/: autocompletado, tokens, muestreo, contexto (la conversación de Ana) y prefill, con deepseek-r1:8b.

// Videos de la biblioteca de BrainFran (04-Biblioteca/Videos/AIagents/), los que la nota pone en el bloque 3.
const bettatech: VideoBiblioteca = {
  id: "kIbr5lN-2F8",
  titulo: "Todo lo que Necesitas Saber sobre la Ingenieria de IA en 26 minutos",
  canal: "BettaTech",
  minutos: 26,
  idioma: "es",
  queMirar: "El primer tema: tokens, predecir el siguiente token y por qué no responde siempre igual.",
};

const marinaWyss: VideoBiblioteca = {
  id: "JV3pL1_mn2M",
  titulo: "AI Engineering in 76 Minutes (Complete Course/Speedrun!)",
  canal: "Marina Wyss",
  minutos: 76,
  idioma: "en",
  queMirar: "El capítulo 1: el Transformer por dentro, y el prefill y el decode.",
};

export const leccion03: ContenidoLeccion = {
  n: "03",
  resumen:
    "Un LLM no consulta la verdad: predice la palabra que suele venir después. Aquí vas a entender cómo lo hace, paso a paso, y al final qué haría un ingeniero de IA experto con eso.",

  ideas: [
    {
      titulo: "Predice la siguiente palabra",
      texto: [
        "Un modelo de lenguaje (LLM) no busca la respuesta en una base de datos. Lee tu texto, calcula qué tan probable es cada palabra que podría venir después, elige una, la agrega y repite. Así escribe todo, palabra por palabra.",
        "Por ejemplo, le dimos «El cielo es» a un modelo real (deepseek-r1:8b) y elegimos siempre su palabra más probable: «azul» (39 %), «porque» (35 %), «la» (42 %) y «luz» (86 %). Esas probabilidades se multiplican, así que la frase entera tiene apenas un **4,9 %**: cada palabra es una apuesta.",
        "Aprendió esas probabilidades leyendo enormes cantidades de texto. Por eso escribe bien, pero **no sabe si lo que escribe es verdad: sabe qué suele venir después.**",
      ],
    },
    {
      titulo: "Lee en tokens",
      texto: [
        "Esas «palabras» en realidad son tokens: pedazos de palabra. «Turquía», por ejemplo, son dos: «Turqu» y «ía». Pruébalo con tu propio texto:",
      ],
      escenas: ["tokens"],
      despues: [
        "**Todo se mide en tokens:** lo que pagas, lo que tarda y cuánto cabe en una conversación.",
        "Y el idioma importa. Contamos los mismos textos en español y en inglés: el español usó un 69 % más de tokens en GPT-3, pero solo un 4 % más en GPT-4o. El tokenizador de cada modelo cambia la cuenta.",
      ],
    },
    {
      titulo: "Elige con un dado cargado",
      texto: [
        "En cada paso, el modelo reparte probabilidades entre los tokens que podrían seguir y tira un dado cargado con esas probabilidades. **Por eso la misma pregunta puede dar respuestas distintas.**",
        "La temperatura cambia el dado: baja, casi siempre sale el más probable; alta, se arriesga más. Elige una frase y tira los dados:",
      ],
      escenas: ["muestreo"],
      despues: [
        "Mira la capital de Turquía. El modelo apuesta 48 % a Estambul, que es falso, y solo 28 % a Ankara: **más de la mitad de sus respuestas son falsas**, y suenan igual de seguras que las verdaderas.",
        "Bajar la temperatura no lo arregla: como lo más probable es falso, dice «Estambul» casi siempre. Lo más probable no siempre es lo verdadero.",
      ],
    },
    {
      titulo: "Solo ve lo que cabe en su ventana",
      texto: [
        "La ventana de contexto es todo lo que el modelo lee de una vez: las instrucciones, la conversación y los documentos. Lo que queda fuera no existe para él.",
        "Además, no tiene memoria entre llamadas: en cada turno vuelve a leer todo desde el principio. Cuando la conversación ya no cabe, lo viejo se recorta o se resume. Mira qué pasa en la conversación de Ana:",
      ],
      escenas: ["contexto"],
      despues: [
        "Ana avisó en su primer mensaje que es alérgica al maní. Con la conversación entera, el modelo la cuida. Si se recorta lo viejo, ni lo menciona. Y si se resume, **el resumen pierde la alergia y el modelo sugiere cacahuate.**",
        "Usamos una ventana chica para que se note rápido. Con ventanas grandes pasa lo mismo, solo que más tarde.",
      ],
    },
    {
      titulo: "Lee rápido y escribe lento",
      texto: [
        "Primero lee todo tu prompt de una vez (prefill). Después escribe la respuesta token a token (decode), y cada token espera al anterior. Manda un prompt y mira las dos fases:",
      ],
      escenas: ["prefill"],
      despues: [
        "En esta máquina, sin GPU, una pregunta corta empieza a responderse en 5 segundos, un correo en 1 minuto y un documento de 2.261 tokens en **4 minutos y 33 segundos**.",
        "En la nube todo es mucho más rápido, pero la regla se mantiene: más texto que leer, más espera; más texto que escribir, más espera y más costo.",
      ],
    },
  ],

  consejos: [
    {
      titulo: "Lo que importa, se verifica",
      texto:
        "Un LLM predice lo probable, no lo verdadero. Si necesitas hechos exactos (precios, políticas, fechas), dáselos en el contexto o que los busque con una herramienta: eso es RAG, en la lección 5. Y lo importante se revisa contra una fuente o una prueba.",
    },
    {
      titulo: "Presupuesta en tokens",
      texto:
        "Calcula el costo con el tokenizador del modelo que vas a usar y en el idioma de tu producto: una estimación hecha en inglés se queda corta. La salida suele costar varias veces más que la entrada.",
    },
    {
      titulo: "La temperatura no da la verdad",
      texto:
        "Baja para extraer datos o clasificar; más alta para ideas. Bajarla vuelve al modelo consistente, no correcto: contra los errores, dale la fuente y mide con evals cuántas veces se equivoca (lección 13). Lo que deba salir con una forma fija, pídelo con un esquema y valídalo en tu código.",
    },
    {
      titulo: "Lo crítico no vive en el historial",
      texto:
        "Lo que no puede perderse va en las instrucciones del sistema, que viajan en cada llamada, o guardado por tu app. Si tu app resume conversaciones, prueba que el resumen conserve lo importante. Decidir qué entra en la ventana en cada llamada es context engineering: la lección 9.",
    },
    {
      titulo: "Que lea poco y escriba lo justo",
      texto:
        "Pásale solo los trozos que sirven, no el documento entero. Limita lo que escribe y muéstralo mientras se escribe (streaming). Si repites un contexto largo, usa la caché de prompts del proveedor. Y mide dos números: cuánto tarda en empezar y cuántos tokens escribe por segundo.",
    },
  ],

  practica:
    "Elige una tarea de tu trabajo que le darías a un LLM, por ejemplo responder correos de clientes. Decide y anota: qué temperatura usarías, qué contexto le das en cada llamada, qué dato no puede perderse y dónde lo guardas, y cómo medirías cuántas veces se equivoca.",

  preguntas: [
    "Explícame con un ejemplo por qué bajar la temperatura no corrige una alucinación.",
    "¿Qué hace una app de chat cuando la conversación ya no cabe en la ventana de contexto del modelo?",
    "¿Por qué escribir la respuesta es más lento y más caro que leer el prompt, si los dos son tokens?",
  ],

  videos: [bettatech, marinaWyss],
};
