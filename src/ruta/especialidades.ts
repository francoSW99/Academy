import { temarioAi, temarioDs, temarioMl } from "./temario";
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
// AI Engineering es el Pilar 1. ML y Deep Learning y Data Science salen del Pilar 2 y de la propuesta ML v2
// (docs/roadmap/ml-dl/): cada tema se profundiza en una sola especialidad, y la otra lleva un repaso o un requisito.
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

const ml: Especialidad = {
  id: "ml",
  slug: "ml-deep-learning",
  nombre: "ML y Deep Learning",
  corto: "ML y DL",
  rol: "ML Engineer",
  queHaces: "Construyes modelos que predicen, de la regresión lineal al Transformer, y eliges salida: Industria, para llevarlos a producción, o Research, para investigar con ML.",
  eligela: "si quieres trabajar como ML Engineer en una empresa, o investigar con ML: deporte, neurociencia, biomecánica o cómo se construyen los modelos.",
  meta: "Elegir, entrenar y llevar a producción el modelo correcto, o investigar con método, y revisar con criterio lo que entrega el agente.",
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
  eligela: "si quieres responder preguntas de negocio o de investigación con datos, diseñar experimentos o medir el efecto de una decisión.",
  meta: "Convertir una pregunta en un análisis confiable: datos limpios, la estadística correcta y una conclusión que se entiende.",
  enPreparacion: true,
  modulos: numerar(temarioDs),
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
