import es from "../../messages/es.json";

// Para sumar inglés: agregar "en" aquí y crear messages/en.json con las mismas claves.
export const idiomas = ["es"] as const;
export type Idioma = (typeof idiomas)[number];
export const idiomaPorDefecto: Idioma = "es";

const mensajes = { es } satisfies Record<Idioma, typeof es>;

export function esIdioma(valor: string): valor is Idioma {
  return (idiomas as readonly string[]).includes(valor);
}

export function textos(idioma: Idioma) {
  return mensajes[idioma];
}

/** Reemplaza {clave} en un texto: rellenar("Estación {n}", { n: 3 }). */
export function rellenar(texto: string, valores: Record<string, string | number>) {
  return texto.replace(/\{(\w+)\}/g, (_, clave: string) => String(valores[clave] ?? `{${clave}}`));
}
