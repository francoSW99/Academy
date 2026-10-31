"""Una conversación real con el modelo local y lo que pasa cuando no cabe en la ventana de contexto.

Es el código detrás de la escena «contexto» (estación 03). La web no llama a ningún modelo:
usa el JSON que escribe este script.

El modelo no recuerda nada entre turnos: en cada turno, la app le vuelve a mandar toda la
conversación. Cuando no cabe en la ventana, hay que dejar algo fuera.

Los primeros turnos están escritos a mano, y la alergia solo aparece en el primer mensaje: si el
modelo la repitiera en sus respuestas, seguiría a la vista aunque se recorte lo viejo. El modelo
escribe la última respuesta, una vez por cada manera de llenar la ventana:
  1. Ventana grande: entra todo.
  2. Ventana chica que recorta: se queda con las instrucciones y los mensajes más nuevos que
     caben, y deja fuera los más viejos. Es la regla de Ollama (server/prompt.go, chatPrompt).
  3. Ventana chica que compacta: el modelo resume lo viejo y se manda el resumen.

deepseek-r1 razona antes de responder, y en Ollama sigue razonando aunque se pida «think»: false.
Por eso el script arma el prompt a mano, con la plantilla del modelo, y le pasa el bloque de
razonamiento vacío: así responde directo.

Uso (con Ollama corriendo en 127.0.0.1:11434):
    python3 lab/contexto/llenar_ventana.py
"""

import json
import re
import time
import urllib.request
from datetime import date
from pathlib import Path

MODELO = "deepseek-r1:8b"
OLLAMA = "http://127.0.0.1:11434/api/generate"
SALIDA = Path(__file__).resolve().parents[2] / "src/componentes/escenas/datos/contexto-es.json"
VENTANA_GRANDE = 4096
OPCIONES = {"temperature": 0, "seed": 7, "num_ctx": VENTANA_GRANDE}

SISTEMA = "Eres un asistente de cocina. Responde en español y breve: una lista corta o dos o tres frases."
HISTORIA = [
    ("Hola, me llamo Ana. Soy alérgica al maní.", "¡Hola, Ana! Lo tengo en cuenta. ¿En qué te ayudo?"),
    ("Quiero cocinar una cena tailandesa para seis amigos el sábado.", "¡Qué buen plan! ¿Cuánto tiempo tienes para cocinar?"),
    ("Tengo toda la tarde libre. ¿Qué plato principal me recomiendas?", "Un curry verde con pollo: se hace en una hora y alcanza para seis."),
    ("¿Y de postre?", "Arroz con mango: arroz glutinoso, leche de coco y mango maduro. Es fácil y fresco."),
]
PREGUNTA_FINAL = "Ahora dame los ingredientes para un pad thai."
RESUMIR = "Resume esta conversación en una o dos frases. Guarda los datos importantes del usuario."


def prompt_de(mensajes: list[dict]) -> str:
    """La plantilla de chat de deepseek-r1: lo mismo que arma Ollama, más el razonamiento vacío."""
    sistema = "\n\n".join(m["content"] for m in mensajes if m["role"] == "system")
    partes = ["<｜begin▁of▁sentence｜>", sistema]
    for m in mensajes:
        if m["role"] == "user":
            partes.append(f"<｜User｜>{m['content']}<｜Assistant｜>")
        elif m["role"] == "assistant":
            partes.append(f"{m['content']}<｜end▁of▁sentence｜>")
    return "".join(partes) + "<think>\n\n</think>\n\n"


def chat(mensajes: list[dict], max_tokens: int = 360) -> dict:
    cuerpo = {
        "model": MODELO,
        "prompt": prompt_de(mensajes),
        "raw": True,
        "stream": False,
        "options": {**OPCIONES, "num_predict": max_tokens},
    }
    pedido = urllib.request.Request(OLLAMA, json.dumps(cuerpo).encode(), {"Content-Type": "application/json"})
    r = json.load(urllib.request.urlopen(pedido, timeout=900))
    return {"texto": r["response"].strip(), "leidos": r["prompt_eval_count"]}


def leidos(mensajes: list[dict]) -> int:
    """Cuántos tokens lee el modelo con estos mensajes, contando las marcas de quién habla."""
    return chat(mensajes, max_tokens=1)["leidos"]


def recortar(mensajes: list[dict], ventana: int) -> int:
    """La regla de Ollama: instrucciones + los mensajes más nuevos que caben. Devuelve desde cuál se queda."""
    for desde in range(1, len(mensajes)):
        if leidos([mensajes[0]] + mensajes[desde:]) <= ventana:
            return desde
    return len(mensajes) - 1


def menciona_mani(texto: str) -> str:
    t = texto.lower()
    if re.search(r"alerg|sin man[ií]|sin cacahuete|sin cacahuate|evita", t):
        return "cuida"
    if re.search(r"man[ií]|cacahuete|cacahuate", t):
        return "usa"
    return "no-dice"


def guarda_alergia(resumen: str) -> bool:
    """¿El resumen todavía dice que Ana es alérgica?"""
    return bool(re.search(r"alerg|man[ií]|cacahuete|cacahuate", resumen.lower()))


def main():
    inicio = time.time()
    mensajes = [{"role": "system", "content": SISTEMA}]
    turnos = []
    for pregunta, respuesta in HISTORIA:
        mensajes.append({"role": "user", "content": pregunta})
        turnos.append({"leidos": leidos(mensajes)})  # Lo que lee para responder este turno.
        mensajes.append({"role": "assistant", "content": respuesta})
    mensajes.append({"role": "user", "content": PREGUNTA_FINAL})
    print("leídos por turno:", [x["leidos"] for x in turnos])

    # Tamaño de cada mensaje: lo que crece la cuenta al sumarlo.
    acumulado = [leidos(mensajes[: k + 1]) for k in range(len(mensajes))]
    tokens = [acumulado[0]] + [acumulado[k] - acumulado[k - 1] for k in range(1, len(acumulado))]

    # Ventana chica: todos los turnos caben menos el último, y al recortar se van los dos primeros
    # mensajes (la alergia y la respuesta que la repite).
    antes_del_ultimo = acumulado[-3]  # instrucciones + todo hasta la última respuesta
    sin_los_dos_primeros = leidos([mensajes[0]] + mensajes[3:])
    sin_el_primero = leidos([mensajes[0]] + mensajes[2:])
    ventana = max(antes_del_ultimo, sin_los_dos_primeros)
    ventana = -(-ventana // 10) * 10  # Redondea hacia arriba a 10.
    if not (ventana < sin_el_primero and ventana < acumulado[-1]):
        raise SystemExit(f"No hay una ventana que recorte justo la alergia: {ventana=} {sin_el_primero=} total={acumulado[-1]}")

    grande = chat(mensajes)
    desde = recortar(mensajes, ventana)
    recortado = chat([mensajes[0]] + mensajes[desde:])
    historia = "\n".join(f"{'Usuario' if m['role'] == 'user' else 'Asistente'}: {m['content']}" for m in mensajes[1:-1])
    resumen = chat([{"role": "system", "content": RESUMIR}, {"role": "user", "content": historia}], max_tokens=120)["texto"]
    compacto = [mensajes[0], {"role": "user", "content": f"Resumen de la conversación anterior: {resumen}"}, mensajes[-1]]
    compactado = chat(compacto)

    finales = {}
    for nombre, r, extra in [
        ("grande", grande, {}),
        ("recorta", recortado, {"desde": desde}),
        ("compacta", compactado, {"resumen": resumen, "resumenTokens": leidos(compacto[:2]) - acumulado[0], "resumenGuarda": guarda_alergia(resumen)}),
    ]:
        respuesta = r["texto"]
        finales[nombre] = {"respuesta": respuesta, "leidos": r["leidos"], "mani": menciona_mani(respuesta), **extra}
        print(f"\n[{nombre}] leyó {r['leidos']} · maní: {finales[nombre]['mani']}\n{respuesta}")
    print(f"\nresumen: {resumen}")

    salida = {
        "modelo": MODELO,
        "fecha": date.today().isoformat(),
        "ventanaGrande": VENTANA_GRANDE,
        "ventanaChica": ventana,
        "mensajes": [{"rol": m["role"], "texto": m["content"], "tokens": t} for m, t in zip(mensajes, tokens)],
        "turnos": turnos,
        "final": finales,
    }
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, indent=1) + "\n")
    print(f"\nventana chica: {ventana} tokens · tokens por mensaje: {tokens}")
    print(f"→ {SALIDA} ({time.time() - inicio:.0f} s)")


if __name__ == "__main__":
    main()
