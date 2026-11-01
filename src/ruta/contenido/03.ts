import type { ContenidoLeccion, VideoBiblioteca } from "../tipos";

// Lección 03 · Cómo funciona un LLM, ordenada por ideas. Los textos salen de la nota (Pilar 1 · bloque 3) y los
// datos, de lab/: autocompletado, tokens, muestreo, contexto (la conversación de Ana) y prefill, con deepseek-r1:8b.

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
    "Un LLM no consulta la verdad: predice la palabra que suele venir después. Aquí vas a entender cómo lo hace y qué decide un ingeniero de IA gracias a eso.",

  ideas: [
    {
      titulo: "Predice la siguiente palabra",
      texto: [
        "Un modelo de lenguaje (LLM) no busca la respuesta en una base de datos. Lee tu texto, calcula qué tan probable es cada palabra que podría venir después, elige una, la agrega y repite. Así escribe todo, palabra por palabra.",
        "Aprendió esas probabilidades leyendo enormes cantidades de texto. Por eso escribe bien, pero no sabe si lo que escribe es verdad: sabe qué suele venir después.",
      ],
      caso: {
        titulo: "Cada palabra es una apuesta",
        dato: { cifra: "4,9 %", que: "es la probabilidad de toda la frase «El cielo es azul porque la luz»" },
        texto: [
          "Le dimos «El cielo es» a un modelo real (deepseek-r1:8b) y elegimos siempre su palabra más probable: «azul» (39 %), «porque» (35 %), «la» (42 %) y «luz» (86 %).",
          "Las probabilidades se multiplican: hasta la frase más probable de todas es una apuesta chica.",
        ],
      },
      ingeniero: [
        "Trata cada respuesta como una predicción, no como un dato: lo que importa se verifica contra una fuente, una regla o una prueba.",
        "Si necesitas hechos exactos (precios, políticas, fechas), no los pidas de memoria: dáselos en el contexto o que los busque con una herramienta. Eso es RAG, en la lección 5.",
        "Lo que el modelo no leyó al entrenar, como tus datos o lo que pasó esta semana, no lo sabe: hay que dárselo.",
      ],
    },
    {
      titulo: "Lee en tokens",
      texto: [
        "No lee letras ni palabras: lee tokens, que son pedazos de palabra. «Turquía», por ejemplo, son dos: «Turqu» y «ía».",
        "Todo se mide en tokens: lo que pagas, lo que tarda y cuánto cabe en una conversación.",
      ],
      escenas: ["tokens"],
      caso: {
        titulo: "El español gasta más tokens",
        dato: { cifra: "+69 %", que: "tokens del español frente al inglés en GPT-3; en GPT-4o, solo +4 %" },
        texto: [
          "Contamos los mismos textos en los dos idiomas con cuatro tokenizadores. El español siempre usa más, pero la diferencia depende del modelo: un tokenizador moderno casi la borra.",
        ],
      },
      ingeniero: [
        "Calcula el costo en tokens: los de entrada por su precio, más los de salida por el suyo. La salida suele costar varias veces más.",
        "Cuenta con el tokenizador del modelo que vas a usar: el mismo texto da cuentas distintas en cada modelo.",
        "Si tu producto es en español, mídelo en español: una estimación hecha en inglés se queda corta.",
      ],
    },
    {
      titulo: "Elige con un dado cargado",
      texto: [
        "En cada paso reparte probabilidades entre los tokens que podrían seguir y tira un dado cargado con esas probabilidades. Por eso la misma pregunta puede dar respuestas distintas.",
        "La temperatura cambia el dado: baja, casi siempre sale el más probable; alta, se arriesga más.",
      ],
      escenas: ["muestreo"],
      caso: {
        titulo: "Inventa con total seguridad",
        dato: { cifra: "53 %", que: "de las respuestas a «La capital de Turquía es…» son falsas" },
        texto: [
          "Medimos un modelo real (deepseek-r1:8b) a temperatura 1: apuesta 48 % a Estambul, que es falso, y solo 28 % a Ankara. Más de la mitad de las veces responde algo falso, con el mismo tono que cuando acierta.",
          "Bajar la temperatura empeora este caso: como lo más probable es falso, el modelo dice «Estambul» casi siempre.",
        ],
      },
      ingeniero: [
        "Elige la temperatura según la tarea: baja para extraer datos o clasificar; más alta para ideas y textos creativos.",
        "Bajar la temperatura vuelve al modelo consistente, no correcto: si lo más probable es falso, lo repetirá siempre.",
        "Contra los errores, dale la fuente (contexto o RAG) y mide con evals cuántas veces se equivoca. Las evals son la lección 13.",
        "Lo que deba salir con una forma fija, pídelo con un esquema (por ejemplo, JSON) y valídalo en tu código antes de usarlo.",
      ],
    },
    {
      titulo: "Solo ve lo que cabe en su ventana",
      texto: [
        "La ventana de contexto es todo lo que el modelo lee de una vez: las instrucciones, la conversación y los documentos. Lo que queda fuera no existe para él.",
        "No tiene memoria entre llamadas: en cada turno vuelve a leer todo desde el principio. Cuando la conversación no cabe, lo viejo se recorta o se resume.",
      ],
      escenas: ["contexto"],
      caso: {
        titulo: "Se olvida de la alergia",
        dato: { cifra: "maní", que: "lo que sugirió el modelo cuando la conversación se resumió" },
        texto: [
          "Ana avisa en su primer mensaje que es alérgica al maní y, ocho mensajes después, pide un pad thai. Con la conversación entera, el modelo la cuida. Si se recorta lo viejo, ni lo menciona. Si se resume, el resumen pierde la alergia y el modelo sugiere cacahuate.",
          "Usamos una ventana chica para que se note rápido. Con ventanas grandes pasa lo mismo, solo que más tarde.",
        ],
      },
      ingeniero: [
        "Lo que no puede perderse va en las instrucciones del sistema, que se envían en cada llamada, o guardado por tu app (un perfil, una base de datos), no en el historial.",
        "Si tu app resume conversaciones, prueba que el resumen conserve los datos críticos antes de confiar en él.",
        "Cada turno vuelve a leer todo: una conversación larga cuesta más en cada mensaje.",
        "Decidir qué entra en la ventana en cada llamada es context engineering: la lección 9.",
      ],
    },
    {
      titulo: "Lee rápido y escribe lento",
      texto: [
        "Primero lee todo tu prompt de una vez (prefill). Después escribe la respuesta token a token (decode), y cada token espera al anterior.",
        "Por eso un prompt largo tarda en empezar, y una respuesta larga tarda y cuesta más.",
      ],
      escenas: ["prefill"],
      caso: {
        titulo: "Un documento entero hace esperar",
        dato: { cifra: "4 min 33 s", que: "tardó en empezar a responder con un documento de 2.261 tokens" },
        texto: [
          "En esta máquina, sin GPU, una pregunta corta empieza en 5 segundos; un correo, en 1 minuto; un documento, en más de 4 minutos.",
          "En la nube todo es mucho más rápido, pero la regla se mantiene: más texto que leer, más espera y más costo.",
        ],
      },
      ingeniero: [
        "Mide dos números: cuánto tarda en empezar (el tiempo hasta el primer token) y cuántos tokens escribe por segundo.",
        "Pásale solo lo necesario: los trozos que sirven (RAG), no el documento entero.",
        "Limita lo que escribe y muestra la respuesta mientras se escribe (streaming): escribir es lo más lento y lo más caro.",
        "Si mandas el mismo contexto largo una y otra vez, usa la caché de prompts del proveedor: esa parte se lee más rápido y cuesta menos.",
      ],
    },
  ],

  loQueSabe: [
    "Un LLM predice lo probable, no lo verdadero: lo que importa se verifica.",
    "Todo se mide en tokens: el costo, el tiempo y lo que cabe.",
    "La temperatura cambia la variedad, no la verdad.",
    "El modelo solo sabe lo que le das en su ventana, en cada llamada.",
    "Leer es rápido; escribir es lento y caro.",
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
