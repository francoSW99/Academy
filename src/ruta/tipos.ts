// Estructura del curso. Vocabulario (ver DESIGN.md): Línea = Pilar, Zona = Etapa,
// Estación = Bloque, Parada = paso del método.

export type Estacion = {
  /** Número de bloque con dos dígitos: "03". También es su ruta: /es/estacion/03/. */
  n: string;
  titulo: string;
  /** Tiene contenido publicado. Las demás se ven como «próximamente». */
  abierta: boolean;
  /** Bloques de la Línea 2 con los que se cruza (de la nota: «Fusiones con el Pilar 1»). */
  combinaL2?: string;
};

export type Zona = {
  n: number;
  nombre: string;
  estaciones: Estacion[];
};

export type Linea = {
  n: number;
  nombre: string;
  /** En revisión: se muestra, pero sin estaciones navegables. */
  enRevision: boolean;
  destino?: { titulo: string; texto: string };
  zonas: Zona[];
};

export type ParadaId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ParadaMetodo = {
  n: ParadaId;
  nombre: string;
  /** Qué se hace en esta parada, en una línea. */
  que: string;
};

/** Escenas interactivas que existen (src/componentes/escenas/). */
export type NombreEscena = "tokens" | "muestreo" | "contexto" | "prefill";

export type ContenidoParada = {
  /** La pregunta que abre la pizarra. */
  pregunta: string;
  /** Una o dos líneas, como máximo. */
  texto: string;
  /** Puntos cortos opcionales (criterio, fallas, qué revisar…). */
  puntos?: string[];
  /** Indicación al agente, en monoespaciada (parada «Dirígelo»). */
  indicacion?: string[];
  /** Escenas interactivas, en orden: van después del video, para probar con las manos lo que se vio. */
  escenas?: NombreEscena[];
  /**
   * Video hecho con ManimGX (lab/manim/estacion_NN.py, renderizado con scripts/escenas.sh).
   * Archivos: public/escenas/NN/<nombre>-{blanca,negra}.{mp4,jpg}.
   */
  video?: { nombre: string; descripcion: string };
};

export type ContenidoEstacion = {
  n: string;
  /** Una línea que resume la estación. */
  resumen: string;
  paradas: Record<ParadaId, ContenidoParada>;
  material?: { titulo: string; detalle: string }[];
};
