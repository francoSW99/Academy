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
};

/** Un caso real, medido con un modelo o vivido en un trabajo. Va pegado a la idea que lo explica. */
export type Caso = {
  titulo: string;
  /** Un dato grande: «53 %» y qué significa. */
  dato?: { cifra: string; que: string };
  texto: string[];
};

/**
 * Una idea de la lección: un capítulo completo, con todo junto. La explicación (con su escena para tocar),
 * un caso real solo si suma, y lo que hace un ingeniero de IA gracias a esa idea.
 */
export type Idea = {
  titulo: string;
  /** La explicación, en párrafos cortos. */
  texto: string[];
  escenas?: NombreEscena[];
  caso?: Caso;
  /** Decisiones de un ingeniero de IA: diseño, medición y costo. No plantillas de prompt. */
  ingeniero?: string[];
};

export type ContenidoLeccion = {
  n: string;
  /** Una o dos frases debajo del título: qué vas a entender. */
  resumen: string;
  ideas: Idea[];
  /** «Lo que sabe un ingeniero de IA»: lo que te llevas, en pocas frases. */
  loQueSabe: string[];
  practica: string;
  /** Preguntas para seguir aprendiendo con un LLM. */
  preguntas?: string[];
  /** Videos de la biblioteca para profundizar, al final de la lección. */
  videos?: VideoBiblioteca[];
};
