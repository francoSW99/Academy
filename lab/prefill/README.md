# lab/prefill

Cuánto tarda el modelo local en leer el prompt (prefill) y en escribir la respuesta (decode). Es el código detrás de la escena «prefill» (estación 03, parada 3).

```sh
python3 lab/prefill/medir_velocidad.py
```

Necesita Ollama en `127.0.0.1:11434` con `deepseek-r1:8b`. En esta VM tarda unos 9 minutos, y escribe `src/componentes/escenas/datos/prefill-es.json`. Mientras mide, no hay que correr nada pesado en la máquina (por ejemplo, el build): los dos usan la CPU y los tiempos salen inflados.

## Qué hace

1. **Manda tres prompts** de distinto largo: una pregunta, un correo con 8 semanas de un registro de proyecto y un documento con 34 semanas.
2. **Lee los tiempos que da Ollama.**
   - `prompt_eval_duration` es lo que tardó en leer todo el prompt: el tiempo hasta el primer token.
   - `eval_duration` es lo que tardó en escribir 100 tokens, uno por uno.
3. **Guarda la respuesta real token por token.** La escena la muestra a la velocidad medida.

Detalles:
- **Cada prompt empieza con un número al azar.** Si Ollama reusara lo que ya leyó en el pedido anterior, el prefill saldría casi gratis. Igual reusa las marcas fijas del comienzo, de 2 a 5 tokens, y el script lleva ese tiempo a todo el prompt.
- **El registro cambia cada semana.** Con el mismo párrafo repetido, el modelo comentaba la repetición en vez de resumir, una vez hasta en inglés.
- **No razona antes de responder.** Igual que en `lab/contexto/`, el prompt va con la plantilla del modelo y el bloque de razonamiento vacío.

## Lo que salió (2026-10-31, 2 núcleos ARM Neoverse-N1, sin GPU)

| Prompt | Lee | Primer token | Escribe 100 tokens |
|---|---|---|---|
| Pregunta (39 tokens) | 8,5 tokens/s | 4,6 s | 31 s (3,2 tokens/s) |
| Correo (553 tokens) | 9,2 tokens/s | 60 s | 36 s (2,8 tokens/s) |
| Documento (2 261 tokens) | 8,3 tokens/s | 4 min 33 s | 49 s (2,0 tokens/s) |

- **Un prompt largo tarda en empezar.** El documento demora casi 5 minutos en dar el primer token.
- **Escribir es más lento por token que leer.** En esta CPU es 3 o 4 veces más lento, y más con un contexto largo. En una GPU la diferencia es mucho mayor, porque leer aprovecha que los tokens del prompt se procesan en paralelo.
