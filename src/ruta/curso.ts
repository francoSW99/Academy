import type { Curso } from "./tipos";

// Fuente de verdad del temario: BrainFran/vault/03-Proyectos/Ideas/Plataforma Interactiva de Aprendizaje Visual.md
// Aquí va una copia a mano de los títulos. Publicar una lección = poner disponible: true y crear su contenido.

export const curso: Curso = {
  nombre: "AI Agents & AI Engineer",
  enPreparacion: false,
  meta: "Dirigir agentes de IA como CEO/CTO: tú das indicaciones precisas y el agente ejecuta.",
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

export const curso2: Curso = {
  nombre: "Machine Learning, Deep Learning y Data Science",
  enPreparacion: true,
  modulos: [
    "El mapa completo",
    "Los datos",
    "Estadística y matemática",
    "ML: los modelos típicos",
    "Deep Learning",
    "LLMs por dentro",
    "MLOps y producción",
    "Especializaciones e investigación",
  ].map((nombre, i) => ({ n: i + 1, nombre, lecciones: [] })),
};

export const lecciones = curso.modulos.flatMap((m) => m.lecciones.map((l) => ({ ...l, modulo: m })));
export const totalLecciones = lecciones.length;

export function buscarLeccion(n: string) {
  return lecciones.find((l) => l.n === n);
}
