# lab/contexto

Una conversación con el modelo local que no cabe en la ventana de contexto. Es el código detrás de la escena «contexto» (estación 03, parada 4).

```sh
python3 lab/contexto/llenar_ventana.py
```

Necesita Ollama en `127.0.0.1:11434` con `deepseek-r1:8b`. Tarda unos 5 minutos en CPU, y escribe `src/componentes/escenas/datos/contexto-es.json`.

## Qué hace

1. **Arma la conversación.** Ana avisa que es alérgica al maní, pide una cena tailandesa, un plato principal, un postre y al final los ingredientes de un pad thai. Los primeros turnos están escritos a mano, y la alergia solo aparece en el primer mensaje. En la primera prueba el modelo repetía «no contiene maní» en sus respuestas, y así la alergia seguía en la ventana aunque se recortara lo viejo.
2. **Mide la ventana.** Pide cuántos tokens lee el modelo en cada turno (`prompt_eval_count`) y, de ahí, cuánto pesa cada mensaje con sus marcas de quién habla.
3. **Elige una ventana chica de 160 tokens.** Ahí caben los 4 primeros turnos, pero el último no. Para que entre, hay que dejar fuera los dos primeros mensajes.
4. **El modelo escribe la última respuesta tres veces:**
   - Con una ventana grande de 4 096 tokens, donde entra todo.
   - Con la ventana chica que recorta. Usa la regla de Ollama (`server/prompt.go`, `chatPrompt`): se queda con las instrucciones y con los mensajes más nuevos que caben.
   - Con la ventana chica que resume. El mismo modelo resume lo viejo, y se manda ese resumen.

deepseek-r1 razona antes de responder, y en Ollama sigue razonando aunque se le pida `"think": false`: con 160 tokens de tope, las respuestas llegaban vacías. Por eso el script arma el prompt a mano, con la plantilla del modelo, y le pasa el bloque de razonamiento vacío (`<think></think>`) para que responda directo.

## Lo que salió (2026-10-31, temperatura 0)

| Ventana | Lee | ¿Tuvo en cuenta la alergia? |
|---|---|---|
| Grande (4 096) | 187 tokens | Sí: «ya que tienes alergia al maní». |
| Chica, recorta (160) | 151 tokens | No la menciona: el primer mensaje quedó fuera. Esta vez no puso maní, pero fue suerte. |
| Chica, resume (160) | 105 tokens | No: el resumen perdió la alergia y la lista trae «nueces de macadamia o cacahuate». |

Además, en cada turno el modelo vuelve a leer toda la conversación: 50, 85, 120 y 147 tokens en los primeros cuatro.

Es un modelo chico (8B): también inventa ingredientes («ojjaos»). Con otro modelo, o con otra versión de este, las respuestas pueden cambiar. Si cambian, hay que revisar los textos de la escena.
