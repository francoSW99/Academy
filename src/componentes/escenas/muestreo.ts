// Matemática de la escena «muestreo», sin React: así se puede probar y reusar (por ejemplo, en un video).
// Los datos salen de lab/muestreo/sacar_probabilidades.py.

export type Veredicto = "verdadero" | "falso";

/** Un token posible en un paso: o la palabra sigue (`a`: el nodo al que lleva) o termina (`fin`). */
export type Opcion = { t: string; p: number; a?: number; fin?: string };

export type Frase = {
  id: string;
  texto: string;
  /** El árbol de tokens: cada nodo es una palabra a medias. El 0 es el comienzo. */
  nodos: Opcion[][];
  veredictos: Record<string, Veredicto>;
  /** Probabilidad de que siga un signo o un formato («__», «**», un salto de línea). Se deja fuera. */
  signos: number;
};

export type Perillas = { t: number; k: number; topP: number };

export type Candidata = { palabra: string; p: number; tokens: string[]; veredicto?: Veredicto };

/**
 * La temperatura: p^(1/T), normalizado (la fórmula del video de la parada 2).
 * Se calcula con logaritmos para que una T chica no dé ceros. T = 0 es «siempre la más probable».
 */
export function conTemperatura(p: number[], t: number): number[] {
  const max = Math.max(...p);
  if (t <= 0) {
    const i = p.indexOf(max);
    return p.map((_, j) => (j === i ? 1 : 0));
  }
  const pesos = p.map((x) => Math.exp((Math.log(x) - Math.log(max)) / t));
  const suma = pesos.reduce((a, b) => a + b, 0);
  return pesos.map((w) => w / suma);
}

/**
 * Top-k y top-p, en ese orden: se quedan los k más probables y, de esos, los justos para sumar topP.
 * Los que quedan fuera pasan a 0 y el resto se vuelve a normalizar. Siempre queda al menos uno.
 */
export function recortar(p: number[], k: number, topP: number): number[] {
  const orden = p.map((_, i) => i).sort((a, b) => p[b] - p[a]);
  const quedan = new Set<number>();
  let acumulado = 0;
  for (const i of orden.slice(0, Math.max(1, k))) {
    if (quedan.size > 0 && acumulado >= topP - 1e-9) break;
    quedan.add(i);
    acumulado += p[i];
  }
  const suma = [...quedan].reduce((a, i) => a + p[i], 0);
  return p.map((x, i) => (quedan.has(i) ? x / suma : 0));
}

/**
 * Probabilidad de cada palabra con las perillas puestas. Igual que el modelo, las perillas se aplican
 * en cada paso (token por token); después se suman los caminos que escriben la misma palabra.
 */
export function distribucion(frase: Frase, { t, k, topP }: Perillas): Map<string, Candidata> {
  const palabras = new Map<string, Candidata & { mejor: number }>();
  const bajar = (nodo: number, p: number, tokens: string[]) => {
    const opciones = frase.nodos[nodo];
    const q = recortar(conTemperatura(opciones.map((o) => o.p), t), k, topP);
    opciones.forEach((o, i) => {
      if (q[i] === 0) return; // Lo dejó fuera la temperatura 0, el top-k o el top-p.
      const pi = p * q[i];
      const camino = o.t ? [...tokens, o.t] : tokens;
      if (o.a !== undefined) return bajar(o.a, pi, camino);
      const palabra = o.fin!;
      const c = palabras.get(palabra) ?? { palabra, p: 0, tokens: camino, mejor: -1, veredicto: frase.veredictos[palabra] };
      c.p += pi;
      if (pi > c.mejor) Object.assign(c, { tokens: camino, mejor: pi }); // La forma más probable de escribirla.
      palabras.set(palabra, c);
    });
  };
  bajar(0, 1, []);
  return palabras;
}

/** Tirar los dados: `u` (entre 0 y 1) cae en el tramo de una opción. Los tramos miden lo que su probabilidad. */
export function elegir(p: number[], u: number): number {
  let acumulado = 0;
  for (let i = 0; i < p.length; i++) {
    acumulado += p[i];
    if (u < acumulado) return i;
  }
  // Por redondeo, u puede quedar justo al final: gana la última con probabilidad.
  return p.findLastIndex((x) => x > 0);
}
