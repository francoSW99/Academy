import type { ContenidoLeccion, Trozo } from "./tipos";

const PALABRAS_POR_MINUTO = 200;

const palabras = (texto: string) => texto.trim().split(/\s+/).length;
const deTrozos = (trozos: Trozo[] = []) => trozos.reduce((n, trozo) => n + (typeof trozo === "string" ? palabras(trozo) : 0), 0);

/** Los minutos que toma leer la lección, calculados sobre su texto. No cuenta el tiempo de tocar las escenas. */
export function minutosDeLectura(c: ContenidoLeccion) {
  const total =
    palabras(c.resumen) +
    palabras(c.practica) +
    c.ideas.reduce((n, idea) => n + deTrozos(idea.texto) + deTrozos(idea.despues), 0) +
    c.consejos.reduce((n, consejo) => n + palabras(consejo.texto), 0);
  return Math.max(1, Math.round(total / PALABRAS_POR_MINUTO));
}
