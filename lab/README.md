# lab/

Experimentos y scripts que generan los datos «reales» detrás de cada interactivo
(ej. `lab/muestreo/`: probabilidades del siguiente token sacadas de Ollama local).
La web no llama a modelos: usa lo que se genera aquí.

- `manim/`: las escenas animadas de cada estación, hechas con ManimGX (ver su README).
- `muestreo/`: las probabilidades reales detrás de la escena «muestreo» de la estación 03 (ver su README).
- `tokens/`: los ejemplos cortados en tokens y la comparación español vs. inglés de la escena «tokens» (ver su README).
- `contexto/`: una conversación real con el modelo local cuando no cabe en la ventana, para la escena «contexto» (ver su README).
- `prefill/`: cuánto tarda el modelo local en leer el prompt y en escribir la respuesta, para la escena «prefill» (ver su README).
