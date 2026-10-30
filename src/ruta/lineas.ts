import type { Linea, ParadaMetodo } from "./tipos";

// Fuente de verdad del temario: BrainFran/vault/03-Proyectos/Ideas/Plataforma Interactiva de Aprendizaje Visual.md
// Aquí va una copia a mano de los títulos. Abrir una estación = poner abierta: true y crear su contenido.

const MLOPS = "27–28";
const LLM = "21, 24–26";

export const linea1: Linea = {
  n: 1,
  nombre: "AI Agents & AI Engineer",
  enRevision: false,
  destino: {
    titulo: "CEO/CTO de tus agentes",
    texto: "Tú das indicaciones precisas; el agente ejecuta.",
  },
  zonas: [
    {
      n: 1,
      nombre: "Fundamentos",
      estaciones: [
        { n: "01", titulo: "Base de software habilitadora", abierta: false, combinaL2: MLOPS },
        { n: "02", titulo: "Git y GitHub para dirigir al agente", abierta: false, combinaL2: MLOPS },
        { n: "03", titulo: "Cómo funciona un LLM", abierta: true, combinaL2: LLM },
      ],
    },
    {
      n: 2,
      nombre: "Apps con LLMs",
      estaciones: [
        { n: "04", titulo: "Arquitectura de una app de IA", abierta: false, combinaL2: MLOPS },
        { n: "05", titulo: "RAG y conocimiento", abierta: false, combinaL2: LLM },
      ],
    },
    {
      n: 3,
      nombre: "Harnesses",
      estaciones: [
        { n: "06", titulo: "Anatomía de un harness", abierta: false },
        { n: "07", titulo: "Crear harnesses propios", abierta: false },
        { n: "08", titulo: "Los harnesses del mercado", abierta: false },
      ],
    },
    {
      n: 4,
      nombre: "Trabajar como experto",
      estaciones: [
        { n: "09", titulo: "Prompting y context engineering", abierta: false, combinaL2: LLM },
        { n: "10", titulo: "Diseño de software y verificación", abierta: false },
        { n: "11", titulo: "Orquestación y multi-agente", abierta: false },
        { n: "12", titulo: "Optimizar tokens y créditos", abierta: false },
      ],
    },
    {
      n: 5,
      nombre: "Producción, autonomía y dinero",
      estaciones: [
        { n: "13", titulo: "Evals: saber si funciona", abierta: false, combinaL2: LLM },
        { n: "14", titulo: "Producción: observabilidad y seguridad", abierta: false, combinaL2: MLOPS },
        { n: "15", titulo: "Loops autónomos y fábrica de software", abierta: false },
        { n: "16", titulo: "Generar ingresos con IA", abierta: false },
      ],
    },
  ],
};

export const linea2: Linea = {
  n: 2,
  nombre: "Machine Learning, Deep Learning y Data Science",
  enRevision: true,
  zonas: [
    "El mapa completo",
    "Los datos",
    "Estadística y matemática",
    "ML: los modelos típicos",
    "Deep Learning",
    "LLMs por dentro",
    "MLOps y producción",
    "Especializaciones e investigación",
  ].map((nombre, i) => ({ n: i + 1, nombre, estaciones: [] })),
};

/** Las 7 paradas: el método de estudio de cada estación, siempre en este orden. */
export const paradasMetodo: ParadaMetodo[] = [
  { n: 1, nombre: "El problema", que: "Qué falla sin esto" },
  { n: 2, nombre: "El mecanismo", que: "Cómo funciona, en la pizarra" },
  { n: 3, nombre: "El criterio", que: "Cuándo usarlo y cuándo no" },
  { n: 4, nombre: "Cómo falla", que: "Errores típicos y cómo se notan" },
  { n: 5, nombre: "Sin la etiqueta", que: "Dicho en simple" },
  { n: 6, nombre: "Dirígelo", que: "Cómo pedírselo al agente" },
  { n: 7, nombre: "Práctica", que: "Tu ejercicio" },
];

export const estaciones = linea1.zonas.flatMap((z) => z.estaciones.map((e) => ({ ...e, zona: z })));
export const totalEstaciones = estaciones.length;

export function buscarEstacion(n: string) {
  return estaciones.find((e) => e.n === n);
}
