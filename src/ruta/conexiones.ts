import { buscarLeccion, type LeccionEnRuta } from "./especialidades";
import type { Conexion, IdEspecialidad, RefLeccion } from "./tipos";

// Los puentes entre especialidades. En la interfaz cada especialidad va en su sección;
// aquí se dice qué lecciones comparten un tema, para conectar lo que aprendes en una con otra.
// Cada puente se escribe una vez y aparece al final de las dos lecciones.
// Salen de «Fusiones con el Pilar 1» de la nota del temario, más los cruces entre ML y Data Science.

export const conexiones: Conexion[] = [
  // AI Engineering ↔ ML y Deep Learning
  // La IA por dentro se ve en intuición en AI Engineering, y a fondo en ML y Deep Learning.
  { desde: "ai/matematica-en-intuicion", hacia: "ml/descenso-de-gradiente", tipo: "profundiza", tema: "El descenso de gradiente: cómo baja el error, paso a paso." },
  { desde: "ai/entrenar-validar-probar", hacia: "ml/entrenar-validar-probar", tipo: "profundiza", tema: "Separar los datos para saber si el modelo aprende o memoriza." },
  { desde: "ai/redes-neuronales", hacia: "ml/backprop", tipo: "profundiza", tema: "Backpropagation: cómo una red sabe qué peso corregir." },
  { desde: "ai/atencion-y-transformers", hacia: "ml/atencion-y-transformers", tipo: "profundiza", tema: "La atención y el Transformer, de la intuición al detalle." },
  { desde: "ai/03", hacia: "ml/atencion-y-transformers", tipo: "profundiza", tema: "La arquitectura dentro de un LLM: la atención y el Transformer." },
  { desde: "ai/03", hacia: "ml/pre-entrenar", tipo: "profundiza", tema: "De dónde salen sus probabilidades: el pre-entrenamiento con texto de internet." },
  { desde: "ai/03", hacia: "ml/rl-para-llms", tipo: "profundiza", tema: "Cómo un modelo base se vuelve asistente, y cómo se entrenan los modelos que razonan." },
  { desde: "ai/embeddings-y-bases-vectoriales", hacia: "ml/nlp", tipo: "profundiza", tema: "Embeddings: cómo un texto se vuelve un vector que se puede buscar." },
  { desde: "ai/de-donde-sale-un-llm", hacia: "ml/transfer-learning", tipo: "profundiza", tema: "Ajustar un modelo que ya existe: cuándo conviene el fine-tuning." },
  { desde: "ai/primeros-evals", hacia: "ml/evaluar-e-interpretar", tipo: "profundiza", tema: "Medir si un modelo funciona: métricas, set de prueba y umbral de decisión." },
  { desde: "ai/observabilidad", hacia: "ml/operar-modelos", tipo: "profundiza", tema: "Vigilar un modelo vivo: deriva, alarmas y cuándo reentrenar." },
  { desde: "ml/del-notebook-a-produccion", hacia: "ai/http-apis-json", tipo: "requiere", tema: "APIs y servidores: la base para servir un modelo." },
  { desde: "ml/del-notebook-a-produccion", hacia: "ai/desplegar", tipo: "requiere", tema: "Docker, CI/CD y cloud para poner un modelo en producción." },
  { desde: "ml/del-notebook-a-produccion", hacia: "ai/git-y-github", tipo: "requiere", tema: "Versionar el código, y con él los datos y los modelos." },

  // AI Engineering ↔ Data Science
  { desde: "ai/03", hacia: "ds/08", tipo: "profundiza", tema: "Distribuciones de probabilidad: lo que el modelo calcula antes de cada palabra." },
  { desde: "ai/primeros-evals", hacia: "ds/08", tipo: "profundiza", tema: "Comparar dos versiones con datos y saber si la diferencia es real o es azar." },

  // ML y Deep Learning ↔ Data Science
  { desde: "ml/probabilidad-para-ml", hacia: "ds/08", tipo: "requiere", tema: "Probabilidad y distribuciones: el idioma en que un modelo dice lo que predice." },
  { desde: "ml/entrenar-validar-probar", hacia: "ds/05", tipo: "requiere", tema: "La fuga de datos: el error que arruina cualquier entrenamiento." },
  { desde: "ml/entrenar-validar-probar", hacia: "ds/07", tipo: "requiere", tema: "Los features: de qué aprende un modelo y por qué importan más que el modelo." },
  { desde: "ds/10", hacia: "ml/ensambles", tipo: "profundiza", tema: "Pronosticar con XGBoost y rezagos: el modelo que más gana con datos en tablas." },
  { desde: "ds/10", hacia: "ml/rnn-y-lstm", tipo: "profundiza", tema: "Pronosticar con deep learning: LSTM y Transformers para series de tiempo." },
  { desde: "ds/12", hacia: "ml/computer-vision", tipo: "profundiza", tema: "Detectar suciedad en paneles solares con visión: el caso FONDEF con YOLO." },
  { desde: "ds/13", hacia: "ml/clasificacion", tipo: "profundiza", tema: "Clasificar señales de EEG: los mismos clasificadores, con datos del cerebro." },
];

/**
 * Qué es la otra lección para la que estás leyendo:
 * - «antes»: conviene verla antes;
 * - «aFondo»: explica más a fondo el mismo tema;
 * - «seUsa»: usa lo que estás aprendiendo.
 */
export type Relacion = "antes" | "aFondo" | "seUsa";

export type Puente = { leccion: LeccionEnRuta; relacion: Relacion; tema: string };

const ORDEN: Relacion[] = ["antes", "aFondo", "seUsa"];

/** Los puentes de una lección, leídos desde ella: primero lo que conviene antes. */
export function puentesDe(ref: RefLeccion): Puente[] {
  const puentes: Puente[] = [];
  for (const c of conexiones) {
    if (c.desde === ref) puentes.push({ leccion: buscarLeccion(c.hacia)!, relacion: c.tipo === "requiere" ? "antes" : "aFondo", tema: c.tema });
    if (c.hacia === ref) puentes.push({ leccion: buscarLeccion(c.desde)!, relacion: "seUsa", tema: c.tema });
  }
  return puentes.sort((a, b) => ORDEN.indexOf(a.relacion) - ORDEN.indexOf(b.relacion));
}

/** Los puentes entre dos especialidades, en cualquier dirección. */
export function puentesEntre(a: IdEspecialidad, b: IdEspecialidad) {
  const de = (ref: RefLeccion) => ref.split("/")[0];
  return conexiones.filter((c) => (de(c.desde) === a && de(c.hacia) === b) || (de(c.desde) === b && de(c.hacia) === a));
}

// Un puente con una lección que no existe, o dentro de la misma especialidad, rompe el build: así no llega roto al sitio.
for (const c of conexiones) {
  for (const ref of [c.desde, c.hacia]) {
    if (!buscarLeccion(ref)) throw new Error(`conexiones.ts: la lección «${ref}» no existe en especialidades.ts`);
  }
  if (c.desde.split("/")[0] === c.hacia.split("/")[0]) throw new Error(`conexiones.ts: «${c.desde}» y «${c.hacia}» son de la misma especialidad`);
}
