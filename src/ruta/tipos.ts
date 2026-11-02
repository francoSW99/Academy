// Estructura de la plataforma: Inicio + 3 especialidades, cada una en su sección.
// Cada especialidad se ordena como DeepLearning.AI o Khan Academy: módulos → lecciones.
// Las especialidades se conectan por datos (src/ruta/conexiones.ts), no en la interfaz.

export type IdEspecialidad = "ai" | "ml" | "ds";

/** Cómo se nombra una lección en toda la plataforma: «especialidad/número», como "ai/03". */
export type RefLeccion = `${IdEspecialidad}/${string}`;

export type Leccion = {
  /** Número con dos dígitos dentro de su especialidad: "03". Su dirección: /es/ai-engineering/leccion/03/. */
  n: string;
  titulo: string;
  /** Tiene contenido publicado. Las demás se ven como «pronto». */
  disponible: boolean;
};

export type Modulo = {
  n: number;
  nombre: string;
  lecciones: Leccion[];
};

export type Especialidad = {
  id: IdEspecialidad;
  /** Su dirección: /es/ai-engineering/. */
  slug: string;
  nombre: string;
  /** El nombre en la barra de arriba, que tiene que caber en el celular. */
  corto: string;
  /** El puesto al que apunta: «AI Engineer». */
  rol: string;
  /** Qué haces en esta especialidad, en una frase. */
  queHaces: string;
  /** Cuándo conviene elegirla: ayuda a decidir en el Inicio. */
  eligela: string;
  /** Lo que sabes hacer al terminar. */
  meta: string;
  /** Temario propuesto, todavía sin aprobar: se muestra, pero sin lecciones abiertas. */
  enPreparacion: boolean;
  modulos: Modulo[];
};

/**
 * Un puente entre dos lecciones de especialidades distintas. Se escribe una vez y se muestra en las dos.
 * - «profundiza»: `hacia` explica más a fondo el tema de `desde`.
 * - «requiere»: conviene ver `hacia` antes que `desde`.
 */
export type Conexion = {
  desde: RefLeccion;
  hacia: RefLeccion;
  tipo: "profundiza" | "requiere";
  /** Qué tema comparten, en una frase que sirva leída desde las dos lecciones. */
  tema: string;
};

/** Escenas interactivas que existen (src/componentes/escenas/). */
export type NombreEscena = "tokens" | "muestreo" | "contexto" | "prefill" | "autocompletado";

/** Diagramas que existen (src/componentes/figuras/): van entre los párrafos, para imaginar lo que dice el texto. */
export type NombreFigura = "bucle";

/** Un trozo de la explicación: un párrafo o un diagrama entre párrafos. */
export type Trozo = string | { figura: NombreFigura };

/**
 * Un video de YouTube de la biblioteca de BrainFran (04-Biblioteca/Videos/). Nunca uno hecho por nosotros.
 * Se ve dentro de la app al tocar la miniatura, y también lleva el enlace directo a YouTube.
 */
export type VideoBiblioteca = {
  /** El id de YouTube: lo que va después de watch?v=. */
  id: string;
  titulo: string;
  canal: string;
  minutos: number;
  idioma: "es" | "en";
  /** Qué mirar, en una línea: el tema o el capítulo que importa aquí. */
  queMirar: string;
  /** El tramo que trata el tema de la lección, en segundos. Sin él, se mira desde el comienzo. */
  desde?: number;
  hasta?: number;
};

/** Una fuente que respalda la lección: un libro, un video o una medición hecha para Academy. */
export type Fuente = {
  id: string;
  /** Cómo se nombra en el texto: «Phoenix y Taylor (2024)». */
  corta: string;
  /** La referencia completa, en formato APA. */
  cita: string;
  url?: string;
  tipo: "libro" | "video" | "medicion";
};

/** En qué se apoya una idea o un consejo: la fuente y, si sirve, la página, el capítulo o el minuto. */
export type Respaldo = { fuente: string; donde?: string };

/**
 * Una idea de la lección. Se lee de corrido, sin recuadros que corten el hilo: la explicación,
 * la escena para tocar y, después de la escena, el ejemplo real y la conclusión.
 */
export type Idea = {
  titulo: string;
  /** La explicación, en párrafos cortos y con diagramas entre ellos. **Así** se marca lo importante. */
  texto: Trozo[];
  escenas?: NombreEscena[];
  /** Lo que se cuenta después de tocar la escena: el ejemplo real, medido, y la conclusión. */
  despues?: Trozo[];
  fuentes?: Respaldo[];
};

/** Lo que haría un ingeniero de IA experto con una idea: un principio y cómo se aplica. */
export type Consejo = {
  titulo: string;
  texto: string;
  fuentes?: Respaldo[];
};

export type ContenidoLeccion = {
  n: string;
  /** Una o dos frases debajo del título: qué vas a entender. */
  resumen: string;
  ideas: Idea[];
  /** Al final de la lección: lo que haría un experto, uno por idea y en el mismo orden. */
  consejos: Consejo[];
  practica: string;
  /** Preguntas para seguir aprendiendo con un LLM. */
  preguntas?: string[];
  /** Videos de la biblioteca para profundizar, al final de la lección. */
  videos?: VideoBiblioteca[];
  /** Las fuentes de la lección, al final. Las ideas y los consejos las nombran. */
  fuentes: Fuente[];
  /** Cuándo se revisó por última vez (AAAA-MM-DD). */
  revisada: string;
};
