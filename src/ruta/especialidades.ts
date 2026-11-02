import type { Especialidad, IdEspecialidad, Leccion, Modulo, RefLeccion } from "./tipos";

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
  queHaces: "Construyes productos con un LLM adentro y diriges agentes de IA: contexto, RAG, harnesses y evals.",
  eligela: "si quieres crear apps y agentes con los modelos que ya existen, o trabajar con Claude Code como experto.",
  meta: "Dirigir agentes de IA como CEO/CTO: tú das indicaciones precisas y el agente ejecuta.",
  enPreparacion: false,
  modulos: [
    {
      n: 1,
      nombre: "Fundamentos",
      lecciones: [
        { n: "01", titulo: "Base de software habilitadora", disponible: false },
        { n: "02", titulo: "Git y GitHub para dirigir al agente", disponible: false },
        { n: "03", titulo: "Cómo funciona un LLM", disponible: true },
      ],
    },
    {
      n: 2,
      nombre: "Apps con LLMs",
      lecciones: [
        { n: "04", titulo: "Arquitectura de una app de IA", disponible: false },
        { n: "05", titulo: "RAG y conocimiento", disponible: false },
      ],
    },
    {
      n: 3,
      nombre: "Harnesses",
      lecciones: [
        { n: "06", titulo: "Anatomía de un harness", disponible: false },
        { n: "07", titulo: "Crear harnesses propios", disponible: false },
        { n: "08", titulo: "Los harnesses del mercado", disponible: false },
      ],
    },
    {
      n: 4,
      nombre: "Trabajar como experto",
      lecciones: [
        { n: "09", titulo: "Prompting y context engineering", disponible: false },
        { n: "10", titulo: "Diseño de software y verificación", disponible: false },
        { n: "11", titulo: "Orquestación y multi-agente", disponible: false },
        { n: "12", titulo: "Optimizar tokens y créditos", disponible: false },
      ],
    },
    {
      n: 5,
      nombre: "Producción, autonomía y dinero",
      lecciones: [
        { n: "13", titulo: "Evals: saber si funciona", disponible: false },
        { n: "14", titulo: "Producción: observabilidad y seguridad", disponible: false },
        { n: "15", titulo: "Loops autónomos y fábrica de software", disponible: false },
        { n: "16", titulo: "Generar ingresos con IA", disponible: false },
      ],
    },
  ],
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
  queHaces: "Entiendes cómo aprende un modelo, eliges el correcto, lo entrenas y lo llevas a producción: del árbol de decisión al Transformer.",
  eligela: "si quieres entrenar y ajustar modelos propios, entender un LLM por dentro o trabajar como ML Engineer.",
  meta: "Elegir, entrenar y poner en producción el modelo correcto, y revisar con criterio lo que entrega el agente.",
  enPreparacion: true,
  modulos: propuesta([
    ["Cómo aprende un modelo", ["La matemática del ML, en intuición", "Entrenar, validar y probar", "Evaluar e interpretar modelos"]],
    ["Los modelos típicos", ["Regresión: predecir un número", "Clasificación: predecir una categoría", "Ensambles: random forest y boosting", "Sistemas de recomendación"]],
    ["Deep Learning", ["Redes neuronales desde la base", "Entrenar y ajustar: épocas, lotes y curvas", "Arquitecturas clave: CNN, RNN y Transformers"]],
    ["Visión y lenguaje", ["Computer vision", "Procesamiento de lenguaje (NLP)"]],
    ["LLMs por dentro", ["Cómo se construye un LLM", "Cómo se mejora un LLM: fine-tuning y razonamiento"]],
    ["MLOps y producción", ["Del notebook a producción", "Operar modelos en producción"]],
    ["Especialización e investigación", ["Biomecánica con visión", "El oficio de investigador"]],
  ]),
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
  e.modulos.flatMap((m) => m.lecciones.map((l) => ({ ...l, ref: `${e.id}/${l.n}` as RefLeccion, modulo: m, especialidad: e }))),
);

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
  return `/${lang}/${l.especialidad.slug}/leccion/${l.n}/`;
}
