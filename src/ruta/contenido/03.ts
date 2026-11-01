import type { ContenidoLeccion, VideoBiblioteca } from "../tipos";

// Lección 03 · Cómo funciona un LLM. Los textos salen de la nota (Pilar 1 · bloque 3) y los datos,
// de lab/: muestreo (probabilidades), contexto (la conversación de Ana) y prefill (tiempos), con deepseek-r1:8b.

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
    "Un LLM no consulta la verdad: predice la palabra que suele venir después. De ahí salen sus errores, y también la forma de pedirle las cosas para que haga justo lo que quieres.",

  teoria: [
    {
      titulo: "Predice la siguiente palabra",
      texto: [
        "Un modelo de lenguaje (LLM) no busca la respuesta en una base de datos. Lee tu texto, calcula qué tan probable es cada palabra que podría venir después, elige una, la agrega y repite. Así escribe todo, palabra por palabra.",
        "Por eso no sabe si algo es verdad: sabe qué suele venir después. Es un autocompletado gigante.",
      ],
    },
    {
      titulo: "Lee en tokens",
      texto: [
        "No lee letras ni palabras: lee tokens, que son pedazos de palabra. «Turquía», por ejemplo, son dos: «Turqu» y «ía».",
        "Todo se mide en tokens: lo que pagas, lo que tarda y cuánto cabe en la conversación. El español suele usar más tokens que el inglés para decir lo mismo.",
      ],
      escenas: ["tokens"],
    },
    {
      titulo: "Elige con un dado cargado",
      texto: [
        "En cada paso reparte probabilidades entre los tokens que podrían seguir y tira un dado cargado con esas probabilidades. Por eso la misma pregunta puede dar respuestas distintas.",
        "La temperatura cambia el dado: baja, casi siempre sale el más probable; alta, se arriesga más. Y lo más probable no siempre es lo verdadero.",
      ],
      escenas: ["muestreo"],
    },
    {
      titulo: "Solo ve lo que cabe en su ventana",
      texto: [
        "La ventana de contexto es todo lo que el modelo lee de una vez: las instrucciones, la conversación y los documentos que le das. Lo que queda fuera no existe para él.",
        "En una conversación larga, lo viejo se recorta o se resume, y ahí se pierden datos.",
      ],
      escenas: ["contexto"],
    },
    {
      titulo: "Lee rápido y escribe lento",
      texto: [
        "Primero lee todo tu prompt de una vez (prefill). Después escribe la respuesta token a token (decode), y cada token espera al anterior.",
        "Por eso un prompt largo tarda en empezar, y una respuesta larga tarda y cuesta más.",
      ],
      escenas: ["prefill"],
    },
    {
      titulo: "Lo que te llevas",
      texto: [],
      puntos: [
        "Predice lo más probable, no lo verdadero: el contexto que le das manda.",
        "No es determinista: la misma pregunta puede dar respuestas distintas, así que lo importante se valida.",
        "Solo ve lo que está en su ventana: lo que no le das, no lo sabe.",
        "Leer es rápido; escribir es lento y caro.",
      ],
    },
  ],

  vidaReal: [
    {
      titulo: "Inventa con total seguridad",
      dato: { cifra: "53 %", que: "de las respuestas a «La capital de Turquía es…» son falsas" },
      texto: [
        "Medimos un modelo real (deepseek-r1:8b) a temperatura 1: apuesta 48 % a Estambul, que es falso, y solo 28 % a Ankara. Si le preguntas muchas veces, más de la mitad de las respuestas son falsas, y todas suenan igual de seguras.",
        "En un trabajo pasa lo mismo: un asistente de atención al cliente puede inventar una política de devoluciones con el mismo tono con que dice la verdadera.",
      ],
    },
    {
      titulo: "Se olvida de lo que dijiste al comienzo",
      dato: { cifra: "maní", que: "lo que sugirió el modelo cuando la conversación se resumió" },
      texto: [
        "Ana avisa en su primer mensaje que es alérgica al maní, y ocho mensajes después pide un pad thai. Con la conversación entera a la vista, el modelo la cuida. Si se recorta lo viejo, ni lo menciona. Si se resume, el resumen pierde la alergia y el modelo sugiere cacahuate, que es maní.",
        "En la prueba usamos una ventana chica para que se note rápido. Con ventanas grandes pasa lo mismo, solo que más tarde.",
      ],
    },
    {
      titulo: "Pegar un documento entero hace esperar",
      dato: { cifra: "4 min 33 s", que: "tardó en empezar a responder con un documento de 2.261 tokens" },
      texto: [
        "En esta máquina, sin GPU, una pregunta corta empieza a responderse en 5 segundos; un correo, en 1 minuto; un documento, en más de 4 minutos.",
        "En la nube todo es mucho más rápido, pero la regla se mantiene: mientras más le das a leer, más esperas y más pagas.",
      ],
    },
  ],

  enTuPrompt: [
    {
      titulo: "Dale el texto, y permiso para decir «no lo sé»",
      texto: ["Contra el primer caso: que responda con lo que le das, no con lo que le suena probable."],
      prompt: {
        antes: "¿Cuál es la política de devoluciones de la tienda?",
        despues:
          "Responde solo con la información del documento.\nSi la respuesta no está ahí, di «no lo sé».\n\n<documento>\n…pega aquí la política de la tienda…\n</documento>\n\nPregunta: ¿cuál es la política de devoluciones?",
        porQue: [
          "Si le das el texto, lo más probable pasa a ser lo que dice el texto.",
          "«No lo sé» le da una salida que no es inventar.",
          "Las etiquetas <documento> le marcan dónde empieza y dónde termina lo que debe usar.",
        ],
      },
    },
    {
      titulo: "Lo que no se puede olvidar, en las instrucciones",
      texto: ["Contra el segundo caso: un dato importante no va perdido en el chat."],
      prompt: {
        dondeAntes: "En el primer mensaje del chat",
        antes: "Hola, soy alérgica al maní.",
        dondeDespues: "En las instrucciones del proyecto o del sistema",
        despues: "La usuaria es alérgica al maní. Nunca sugieras recetas ni ingredientes con maní o cacahuate.",
        porQue: [
          "Las instrucciones se envían en cada turno: no se recortan ni se resumen.",
          "En el chat, un dato del comienzo puede quedar fuera de la ventana.",
          "Si la conversación ya es larga, empieza una nueva con un resumen de lo importante.",
        ],
      },
    },
    {
      titulo: "Pide el formato exacto, con un ejemplo",
      texto: ["Contra las respuestas que cambian: con una forma fija y un ejemplo, lo más probable es que responda con esa forma."],
      prompt: {
        antes: "Resume estas reseñas.",
        despues:
          'Resume cada reseña en este formato JSON, sin texto extra:\n{"producto": "…", "opinion": "positiva | negativa | mixta", "motivo": "una frase"}\n\nEjemplo:\nReseña: «Llegó rápido, pero la tela es delgada».\n{"producto": "chaqueta", "opinion": "mixta", "motivo": "envío rápido, tela delgada"}',
        porQue: [
          "El formato y el ejemplo le dicen cuál es la respuesta más probable.",
          "Si usas la API, también puedes bajar la temperatura. En el chat no se puede, y el formato hace ese trabajo.",
        ],
      },
    },
    {
      titulo: "Dale a leer solo lo necesario",
      texto: ["Contra el tercer caso: menos texto que leer, menos espera y menos costo."],
      prompt: {
        antes: "Te paso el contrato completo (40 páginas). ¿Cuándo vence?",
        despues: "Te paso la cláusula 12 del contrato, la de vigencia. ¿Cuándo vence? Responde en una línea.",
        porQue: [
          "Lee todo lo que le das antes de escribir la primera palabra.",
          "Pedir el largo («en una línea», «en 3 viñetas») acorta lo que escribe, que es lo más lento.",
        ],
      },
    },
  ],

  plantilla:
    "Contexto:\n<pega aquí solo lo necesario>\n\nTarea: <qué quieres, en una frase>\n\nReglas:\n- Usa solo la información del contexto.\n- Si no está, di «no lo sé».\n\nFormato: <cómo la quieres: 3 viñetas, una tabla, JSON>",

  practica:
    "Toma una tarea real de tu trabajo y escribe el prompt con la plantilla. Pruébalo dos veces con el mismo modelo: ¿responde igual? Si no, ¿qué agregarías al formato o a las reglas para que sí?",

  videos: [bettatech, marinaWyss],
};
