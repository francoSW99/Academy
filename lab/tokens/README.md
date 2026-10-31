# lab/tokens

Los tokens reales detrás de la escena «tokens» (estación 03, parada 2).

```sh
node --no-warnings lab/tokens/contar_tokens.ts
```

Necesita las dependencias del proyecto (`npm install`) y Ollama en `127.0.0.1:11434` con `deepseek-r1:8b`. Tarda unos segundos y escribe `src/componentes/escenas/datos/tokens-es.json`.

## Qué hace

1. **Corta los ejemplos** de la escena con `o200k_base`, el tokenizador público de GPT-4o (librería `gpt-tokenizer`, versión fija 4.0.0). Así la escena los muestra al instante. El tokenizador completo pesa 2 MB y solo se descarga si el alumno escribe su propio texto.
2. **Compara español e inglés.** Son los mismos 3 textos en los dos idiomas, con casi los mismos caracteres (468 y 463). Se cuentan con cuatro tokenizadores: GPT-3 (`r50k_base`), GPT-4 (`cl100k_base`), GPT-4o (`o200k_base`) y el modelo local. Para el local, Ollama dice cuántos tokens leyó (`prompt_eval_count`, en modo `raw`).

## Lo que salió (2026-10-31)

| Tokenizador | Tokens en español | Tokens en inglés | Español usa |
|---|---|---|---|
| GPT-3 (2020) | 166 | 98 | +69 % |
| GPT-4 (2023) | 118 | 98 | +20 % |
| deepseek-r1:8b (local) | 116 | 98 | +18 % |
| GPT-4o (2024) | 101 | 97 | +4 % |

El plan suponía que «en español salen más tokens». Eso fue cierto en los tokenizadores viejos y en el modelo local, pero casi no se nota en el de GPT-4o. Por eso la escena muestra la diferencia por tokenizador.

Los ejemplos tienen una frase «mira» con lo que hay que notar. Si cambia el tokenizador o la versión de la librería, hay que revisar que siga siendo cierta.
