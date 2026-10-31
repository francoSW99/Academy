# lab/muestreo

Probabilidades reales de la siguiente palabra, sacadas de un modelo que corre en esta máquina. Es el código detrás de la escena «muestreo» (estación 03, parada 2).

```sh
python3 lab/muestreo/sacar_probabilidades.py
```

Necesita Ollama en `127.0.0.1:11434` con `deepseek-r1:8b`. Tarda unos 30 segundos (más 2 minutos si el modelo no estaba cargado) y escribe `src/componentes/escenas/datos/muestreo-es.json`. Las frases se cambian en la lista `FRASES` del script.

## Cómo funciona

1. **Pide los 20 tokens más probables** después de la frase, con `logprobs` y en modo `raw`: el modelo continúa el texto tal cual, sin plantilla de chat. Las probabilidades que da Ollama son las del modelo, antes de la temperatura (no cambian con `temperature`, `top_k` ni `top_p`).
2. **Sigue cada pedazo hasta que la palabra termina.** Un token muchas veces es media palabra («Est» + «amb» + «ul»), así que cada rama se vuelve a pedir hasta que aparece un espacio o un signo. Solo se exploran las ramas con al menos 0,2 % de probabilidad.
3. **Guarda el árbol, no las palabras.** Con el árbol, la web aplica la temperatura, el top-k y el top-p en cada paso, como hace el modelo, y suma los caminos que escriben la misma palabra.
4. **Marca las respuestas.** En las frases con `respuesta`, una palabra con mayúscula es verdadera si está en la lista y falsa si no. Las demás («una», «la») no responden todavía.

## Lo que hay que saber

- **Quedan fuera los signos y formatos** que pueden seguir a la frase («__», «**», saltos de línea): este modelo los vio en ejercicios y en Markdown. La escena dice cuánto suman en cada frase.
- **El modelo es chico (8B) y escribe mal a veces**: con «La capital de Australia es» sale «Canberrá» o «Canbera». Por eso esa frase no está en la escena.
- **Los números pueden moverse unos puntos entre corridas.** Pasó entre la primera llamada, con el modelo recién cargado, y las siguientes (Venus: 69 % y después 56 %). Para la escena importa la forma, no el decimal.
