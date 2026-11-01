// Estructura del curso, como DeepLearning.AI o Khan Academy: curso → módulos → lecciones.
// Cada lección es una página con 3 partes, en este orden: la teoría, en la vida real y en tu prompt.

export type Leccion = {
  /** Número de bloque con dos dígitos: "03". También es su dirección: /es/leccion/03/. */
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

export type Curso = {
  nombre: string;
  /** En preparación: se muestra en la portada, pero todavía sin lecciones. */
  enPreparacion: boolean;
  /** Lo que sabes hacer al terminar el curso. */
  meta?: string;
  modulos: Modulo[];
};

/** Escenas interactivas que existen (src/componentes/escenas/). */
export type NombreEscena = "tokens" | "muestreo" | "contexto" | "prefill";

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
