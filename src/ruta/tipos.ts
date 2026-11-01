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

/** Cómo se suele pedir algo y cómo pedirlo para que el modelo haga justo lo que quieres. */
export type PromptEjemplo = {
  /** Dónde va el prompt, si importa («en el chat», «en las instrucciones del proyecto»). */
  dondeAntes?: string;
  dondeDespues?: string;
  antes: string;
  despues: string;
  porQue: string[];
};

/** Un tema de la lección: un título, poco texto y, si sirve, algo para tocar o copiar. */
export type Bloque = {
  titulo: string;
  /** Párrafos cortos, de una o dos frases. */
  texto: string[];
  puntos?: string[];
  escenas?: NombreEscena[];
  /** Un dato real y grande, para los casos de la vida real. */
  dato?: { cifra: string; que: string };
  prompt?: PromptEjemplo;
};

export type ContenidoLeccion = {
  n: string;
  /** Una o dos frases debajo del título: qué vas a entender. */
  resumen: string;
  teoria: Bloque[];
  vidaReal: Bloque[];
  enTuPrompt: Bloque[];
  /** Plantilla de prompt para copiar, al final de «En tu prompt». */
  plantilla?: string;
  practica: string;
  /** Videos de la biblioteca para profundizar, al final de la lección. */
  videos?: VideoBiblioteca[];
};
