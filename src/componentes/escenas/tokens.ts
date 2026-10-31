// Lógica de la escena «tokens», sin React. La usan la escena y lab/tokens/contar_tokens.ts.

/** Un pedazo de texto y los tokens que lo forman. Casi siempre es 1; un emoji raro puede ser 2 o 3. */
export type Pieza = { t: string; ids: number[] };

export type Ejemplo = {
  id: string;
  texto: string;
  /** Qué notar en este ejemplo («Una palabra rara se corta en muchos pedazos…»). */
  mira: string;
  piezas: Pieza[];
};

/**
 * Agrupa los tokens en pedazos legibles. Un token puede ser medio carácter (los bytes de un emoji
 * se reparten en varios tokens): se junta con los siguientes hasta que el carácter se completa.
 */
export function enPiezas(ids: number[], decode: (ids: number[]) => string): Pieza[] {
  const piezas: Pieza[] = [];
  let pendientes: number[] = [];
  for (const id of ids) {
    pendientes.push(id);
    const t = decode(pendientes);
    if (t.endsWith("�") && pendientes.length < 4) continue;
    piezas.push({ t, ids: pendientes });
    pendientes = [];
  }
  if (pendientes.length) piezas.push({ t: decode(pendientes), ids: pendientes });
  return piezas;
}

export const contar = (piezas: Pieza[]) => piezas.reduce((n, p) => n + p.ids.length, 0);
