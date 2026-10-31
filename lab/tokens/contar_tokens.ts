/**
 * Tokens reales de los ejemplos de la escena «tokens» (estación 03, parada 2).
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
  { id: "frase", texto: "La capital de Turquía es Ankara, no Estambul.", mira: "Las palabras comunes son 1 token. «Turquía» y «Estambul» se cortan en 2." },
  { id: "rara", texto: "Mi tía es electroencefalografista.", mira: "Una palabra rara se corta en muchos pedazos: «electroencefalografista» son 5 tokens." },
  { id: "letras", texto: "¿Cuántas erres tiene «ferrocarril»?", mira: "El modelo no ve letras: ve «fer», «roc», «arr» e «il». Por eso le cuesta contar las erres." },
  { id: "numeros", texto: "3,14159 + 2,71828 = 5,85987", mira: "Los números se cortan de a 3 cifras: el modelo no ve «3,14159» como un solo número." },
  { id: "emoji", texto: "Me encanta 🚀🔥", mira: "Cada emoji también es un token: también se paga." },
];

// Los mismos textos en los dos idiomas, con casi los mismos caracteres.
const PARES = [
  {
    es: "Todos los seres humanos nacen libres e iguales en dignidad y derechos y, dotados como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros.",
    en: "All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
  },
  {
    es: "Un modelo de lenguaje no consulta la verdad: predice el siguiente token más probable a partir de todo lo que lleva escrito. Por eso puede inventar un dato con total seguridad.",
    en: "A language model does not look up the truth: it predicts the most likely next token based on everything written so far. That is why it can make up a fact with complete confidence.",
  },
  {
    es: "Hola, ¿me puedes ayudar a escribir un correo para mi jefe? Necesito pedirle el viernes libre porque tengo una cita médica.",
    en: "Hi, can you help me write an email to my boss? I need to ask for Friday off because I have a doctor's appointment.",
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
