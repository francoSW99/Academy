import { temarioAi, temarioMl } from "./temario";
import type { Especialidad, IdEspecialidad, Leccion, Modulo, RefLeccion } from "./tipos";

/** Numera módulos y lecciones en orden: el número es solo para mostrar. Los desvíos no llevan número propio. */
function numerar(modulos: typeof temarioAi): Modulo[] {
  let k = 0;
  return modulos.map((m, i) => ({
    ...m,
    n: i + 1,
    lecciones: m.lecciones.map((l) => ({ ...l, n: l.desvio ? "" : String(++k).padStart(2, "0") })),
  }));
}

/** Las lecciones propias de un módulo, sin los desvíos a otra especialidad. */
export const propias = (m: Modulo) => m.lecciones.filter((l) => !l.desvio);

/** El nombre fijo de una lección, el que va en su dirección y en el avance. */
export const idDe = (l: Leccion) => l.id ?? l.n;

// Fuente de verdad de los temarios: BrainFran/vault/03-Proyectos/Ideas/Plataforma Interactiva de Aprendizaje Visual.md
// AI Engineering es el Pilar 1. ML y Deep Learning y Data Science salen del Pilar 2 (todavía en revisión),
// repartido entre las dos: cada bloque vive en una sola especialidad y los temas compartidos van en conexiones.ts.
// Publicar una lección = poner disponible: true y crear su contenido en contenido/.

const ai: Especialidad = {
  id: "ai",
  slug: "ai-engineering",
  nombre: "AI Engineering",
  corto: "AI Engineering",
  rol: "AI Engineer",
  queHaces: "Diriges agentes de IA para construir: fundamentos, agentes y tu sistema multi-agente para todos, y al final dos caminos, crear productos o investigar la IA por dentro.",
  eligela: "si quieres crear apps y sistemas multi-agente, trabajar con Claude Code como experto o empezar a investigar cómo funciona un LLM.",
  meta: "Dirigir agentes de IA como CEO/CTO: tú das indicaciones precisas y el agente ejecuta.",
  enPreparacion: false,
  modulos: numerar(temarioAi),
};

/** Arma los módulos de un temario propuesto: todas las lecciones «pronto», numeradas en orden. */
function propuesta(modulos: [nombre: string, lecciones: string[]][]): Modulo[] {
  let k = 0;
  return modulos.map(([nombre, titulos], i) => ({
    n: i + 1,
    nombre,
    lecciones: titulos.map((titulo): Leccion => ({ n: String(++k).padStart(2, "0"), titulo, disponible: false })),
  }));
}

const ml: Especialidad = {
  id: "ml",
  slug: "ml-deep-learning",
  nombre: "ML y Deep Learning",
  corto: "ML y DL",
  rol: "ML Engineer",
  queHaces: "Entiendes cómo aprende un modelo y lo entrenas: estadística, ML clásico, deep learning, pre-entrenamiento y escala, del árbol de decisión al Transformer.",
  eligela: "si quieres entrenar y ajustar modelos propios, pre-entrenar desde cero o trabajar como ML Engineer o research engineer.",
  meta: "Elegir, entrenar y poner en producción el modelo correcto, y revisar con criterio lo que entrega el agente.",
  enPreparacion: true,
  modulos: numerar(temarioMl),
};

const ds: Especialidad = {
  id: "ds",
  slug: "data-science",
  nombre: "Data Science",
  corto: "Data Science",
  rol: "Data Scientist",
  queHaces: "Sacas respuestas de los datos: los limpias, los exploras, mides con estadística y cuentas lo que encontraste.",
  eligela: "si quieres responder preguntas de negocio o de investigación con datos, pronosticar o medir el efecto de una decisión.",
  meta: "Convertir una pregunta en un análisis confiable: datos limpios, la estadística correcta y una conclusión que se entiende.",
  enPreparacion: true,
  modulos: propuesta([
    ["El mapa", ["Qué es la ciencia de datos y sus roles", "El proceso de un proyecto de datos"]],
    ["Los datos", ["Datos y SQL como operaciones", "Pandas como operaciones", "Limpieza y calidad de datos", "Análisis exploratorio y visualización", "Feature engineering"]],
    ["Estadística", ["Probabilidad y estadística", "Inferencia causal y econometría"]],
    ["Patrones y pronóstico", ["Series de tiempo y pronóstico", "Grupos y anomalías"]],
    ["Especialización e investigación", ["Energía solar y renovables", "Neurociencia con datos"]],
  ]),
};

/** En este orden se muestran en la barra de arriba y en el Inicio. */
export const especialidades: Especialidad[] = [ai, ml, ds];

export type LeccionEnRuta = Leccion & { ref: RefLeccion; modulo: Modulo; especialidad: Especialidad };

export const lecciones: LeccionEnRuta[] = especialidades.flatMap((e) =>
  e.modulos.flatMap((m) => propias(m).map((l) => ({ ...l, ref: `${e.id}/${idDe(l)}` as RefLeccion, modulo: m, especialidad: e }))),
);

// Un desvío a una lección que no existe rompe el build: así no llega roto al sitio.
for (const e of especialidades) {
  for (const m of e.modulos) {
    for (const l of m.lecciones) {
      if (l.desvio && !lecciones.some((x) => x.ref === l.desvio)) throw new Error(`especialidades.ts: el desvío «${l.desvio}» no existe`);
    }
  }
}

export function especialidadPorId(id: IdEspecialidad) {
  return especialidades.find((e) => e.id === id)!;
}

export function especialidadPorSlug(slug: string) {
  return especialidades.find((e) => e.slug === slug);
}

export function leccionesDe(e: Especialidad) {
  return lecciones.filter((l) => l.especialidad.id === e.id);
}

export function buscarLeccion(ref: string) {
  return lecciones.find((l) => l.ref === ref);
}

/** La dirección de una lección: /es/ai-engineering/leccion/03/. */
export function rutaLeccion(lang: string, l: LeccionEnRuta) {
  return `/${lang}/${l.especialidad.slug}/leccion/${idDe(l)}/`;
}
