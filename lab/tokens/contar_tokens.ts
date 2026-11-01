/**
 * Tokens reales de los ejemplos de la escena «tokens» (lección 03): textos del día a día de un bot de soporte.
 *
 * - Corta cada ejemplo con o200k_base, el tokenizador público de GPT-4o (librería gpt-tokenizer).
 *   Así la escena muestra los ejemplos al instante; el tokenizador completo (2,4 MB) solo se
 *   descarga si el alumno escribe su propio texto.
 * - Cuenta los tokens de los mismos textos en español y en inglés con cuatro tokenizadores: los de
 *   GPT-3, GPT-4 y GPT-4o, y el del modelo local deepseek-r1:8b (Ollama dice cuántos tokens leyó:
 *   prompt_eval_count). Con los mismos caracteres, el español usa más tokens según el tokenizador.
 *
 * Uso (con Ollama corriendo en 127.0.0.1:11434):
 *     node --no-warnings lab/tokens/contar_tokens.ts
 */

import { writeFileSync } from "node:fs";
import { encode as gpt4 } from "gpt-tokenizer/encoding/cl100k_base";
import { decode, encode } from "gpt-tokenizer/encoding/o200k_base";
import { encode as gpt3 } from "gpt-tokenizer/encoding/r50k_base";
import { contar, enPiezas, type Ejemplo } from "../../src/componentes/escenas/tokens.ts";

const MODELO_LOCAL = "deepseek-r1:8b";
const SALIDA = new URL("../../src/componentes/escenas/datos/tokens-es.json", import.meta.url);

// «mira»: qué notar en cada ejemplo. Si cambia el tokenizador, hay que revisar que siga siendo cierto.
const EJEMPLOS = [
  { id: "ticket", texto: "Me cobraron dos veces la suscripción de este mes.", mira: "Un ticket corto: las palabras comunes son un token cada una." },
  { id: "json", texto: '{"categoria": "facturación", "urgente": true}', mira: "Las comillas, las llaves y los dos puntos también son tokens: un JSON cuesta más de lo que parece." },
  { id: "codigo", texto: "def calcular_iva(monto):\n    return monto * 0.19", mira: "En el código también cuentan la sangría, los símbolos y los números, que se cortan en pedazos." },
  { id: "sku", texto: "Monitor LG 27UL850-W, código MN-27-4K-2026", mira: "Los modelos y códigos de producto se cortan en muchos pedazos: pesan más que una palabra común." },
  { id: "emoji", texto: "¡Gracias por la ayuda! 🙌🔥", mira: "Los emojis que mandan los clientes también son tokens: también se pagan." },
];

// Los mismos textos en los dos idiomas, con casi los mismos caracteres.
const PARES = [
  {
    es: "Eres el asistente de soporte de una tienda online de tecnología. Responde en no más de tres frases, en tono cercano y sin tecnicismos. Si el caso no está en el manual, dilo y escala a un ejecutivo.",
    en: "You are the support assistant for an online tech store. Answer in no more than three sentences, in a friendly tone and without jargon. If the case is not in the manual, say so and escalate to an agent.",
  },
  {
    es: "Hola, me cobraron dos veces la suscripción de este mes y necesito que me devuelvan el segundo cobro lo antes posible.",
    en: "Hi, I was charged twice for this month's subscription and I need the second charge refunded as soon as possible.",
  },
  {
    es: "Hola Carla, lamentamos el cobro duplicado. Ya anulamos el segundo cargo y verás la devolución en tu tarjeta en un plazo de cinco a diez días hábiles.",
    en: "Hi Carla, we're sorry about the duplicate charge. We have already voided the second charge and you will see the refund on your card within five to ten business days.",
  },
];

const cortar = (texto: string) => enPiezas(encode(texto, { disallowedSpecial: new Set() }), decode);

/** Cuántos tokens lee el modelo local: en modo raw, Ollama no agrega nada al texto. */
async function tokensLocales(texto: string): Promise<number> {
  const respuesta = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    body: JSON.stringify({ model: MODELO_LOCAL, prompt: texto, raw: true, stream: false, options: { num_predict: 1 } }),
  });
  const datos = (await respuesta.json()) as { prompt_eval_count: number };
  return datos.prompt_eval_count;
}

const ejemplos: Ejemplo[] = EJEMPLOS.map((e) => ({ ...e, piezas: cortar(e.texto) }));

const sinEspeciales = { disallowedSpecial: new Set<string>() };
const tokenizadores: { nombre: string; anio?: number; contar: (t: string) => number | Promise<number> }[] = [
  { nombre: "GPT-3", anio: 2020, contar: (t) => gpt3(t, sinEspeciales).length },
  { nombre: "GPT-4", anio: 2023, contar: (t) => gpt4(t, sinEspeciales).length },
  { nombre: MODELO_LOCAL, contar: tokensLocales },
  { nombre: "GPT-4o", anio: 2024, contar: (t) => encode(t, sinEspeciales).length },
];
const idiomas = ["es", "en"] as const;
const caracteres = Object.fromEntries(idiomas.map((i) => [i, PARES.reduce((n, p) => n + [...p[i]].length, 0)]));
const comparacion = [];
for (const { nombre, anio, contar: cuenta } of tokenizadores) {
  const tokens: Record<string, number> = {};
  for (const i of idiomas) tokens[i] = (await Promise.all(PARES.map((p) => cuenta(p[i])))).reduce((a, b) => a + b, 0);
  comparacion.push({ nombre, ...(anio ? { anio } : {}), es: tokens.es, en: tokens.en });
}

for (const e of ejemplos) console.log(`${contar(e.piezas)} tokens · ${e.piezas.map((p) => p.t).join("|")}`);
console.log(`caracteres: es ${caracteres.es} · en ${caracteres.en}`);
for (const c of comparacion) console.log(`${c.nombre}: es ${c.es} · en ${c.en} · +${Math.round((c.es / c.en - 1) * 100)} %`);

const salida = {
  tokenizador: "o200k_base",
  fecha: new Date().toISOString().slice(0, 10),
  ejemplos,
  comparacion: { pares: PARES, caracteres, tokenizadores: comparacion },
};
writeFileSync(SALIDA, JSON.stringify(salida) + "\n");
console.log(`→ ${SALIDA.pathname}`);
