"""Cuánto tarda el modelo local en leer el prompt (prefill) y en escribir la respuesta (decode).

Es el código detrás de la escena «prefill» (estación 03, parada 3). La web no llama a ningún modelo:
usa el JSON que escribe este script.

Ollama devuelve el tiempo de cada fase: prompt_eval_duration (leer todo el prompt) y eval_duration
(escribir la respuesta, token a token), en nanosegundos, con cuántos tokens tuvo cada una.

Uso (con Ollama corriendo en 127.0.0.1:11434; tarda unos 4 minutos en CPU):
    python3 lab/prefill/medir_velocidad.py
"""

import json
import random
import subprocess
import urllib.request
from datetime import date
from pathlib import Path

MODELO = "deepseek-r1:8b"
OLLAMA = "http://127.0.0.1:11434/api/generate"
SALIDA = Path(__file__).resolve().parents[2] / "src/componentes/escenas/datos/prefill-es.json"
ESCRIBIR = 100  # Tokens que escribe en cada medición.
OPCIONES = {"temperature": 0, "num_ctx": 4096}  # La misma ventana siempre: cambiarla recarga el modelo.

# El texto que se pega: un registro semanal de un proyecto, con datos distintos cada semana (si se repite
# el mismo párrafo, el modelo comenta la repetición en vez de resumir).
LOGROS = [
    "terminamos la pantalla de inicio", "conectamos los pagos de prueba", "subimos la app a la tienda en modo beta",
    "probamos la app con usuarios nuevos", "bajamos el tiempo de carga a dos segundos", "tradujimos la app al inglés",
    "cerramos los errores que reportaron los usuarios", "lanzamos el registro con correo", "agregamos el modo oscuro",
    "publicamos la página de precios", "armamos el tablero de métricas",
]
PROBLEMAS = [
    "el proveedor de pagos pidió más documentos", "algunos usuarios de Android no pudieron registrarse",
    "el diseño de la pantalla principal cambió otra vez", "el servidor se cayó media hora el martes",
    "faltó tiempo para las pruebas automáticas", "la tienda rechazó una versión por un permiso de más",
    "subió el costo del servidor", "un cliente pidió una función que no estaba en el plan",
]
DECISIONES = [
    "dejar las notificaciones para la versión 2", "contratar a una diseñadora por tres meses",
    "terminar los pagos antes que el chat", "lanzar primero en Chile", "revisar los costos cada viernes",
    "probar con un grupo chico antes de abrir a todos", "congelar el diseño hasta el lanzamiento",
]


def registro(semanas: int) -> str:
    return "\n\n".join(
        f"Semana {s + 1}. Logro: {LOGROS[s % len(LOGROS)]}. Problema: {PROBLEMAS[(3 * s) % len(PROBLEMAS)]}. "
        f"Decisión: {DECISIONES[(5 * s) % len(DECISIONES)]}. Usuarios de prueba activos: {40 + 23 * s}. "
        f"Presupuesto usado: {min(95, 6 + 3 * s)} %."
        for s in range(semanas)
    )


# Tres tamaños de prompt: (id, semanas del registro que se pegan, pedido final).
PROMPTS = [
    ("pregunta", 0, "¿Qué plato tailandés me recomiendas para una cena con seis amigos que no comen picante?"),
    ("correo", 8, "Este es el registro del proyecto de las últimas semanas. Resúmelo en tres puntos."),
    ("documento", 34, "Este es el registro del proyecto desde que empezó. Resúmelo en tres puntos."),
]


def como_chat(pedido: str) -> str:
    """El pedido con la plantilla de chat de deepseek-r1 y el razonamiento vacío: así responde directo."""
    return f"<｜begin▁of▁sentence｜><｜User｜>{pedido}<｜Assistant｜><think>\n\n</think>\n\n"


def generar(prompt: str) -> dict:
    cuerpo = {
        "model": MODELO,
        "prompt": prompt,
        "raw": True,
        "stream": False,
        "logprobs": True,  # Para guardar la respuesta token por token.
        "options": {**OPCIONES, "num_predict": ESCRIBIR},
    }
    pedido = urllib.request.Request(OLLAMA, json.dumps(cuerpo).encode(), {"Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(pedido, timeout=1800))


def maquina() -> str:
    datos = subprocess.run(["lscpu"], capture_output=True, text=True).stdout
    campos = dict(linea.split(":", 1) for linea in datos.splitlines() if ":" in linea)
    return f"{campos['CPU(s)'].strip()} núcleos {campos['Vendor ID'].strip()} ({campos['Model name'].strip()}), sin GPU"


def main():
    generar("Hola")  # Carga el modelo antes de medir: la carga no es parte de leer ni de escribir.
    mediciones = []
    for id_, veces, pedido in PROMPTS:
        # Un comienzo distinto en cada medición: si Ollama reusara lo que ya leyó, el prefill saldría gratis.
        # Igual puede reusar las marcas fijas del comienzo de la plantilla y alguna cifra.
        texto = f"Registro {random.randint(10**6, 10**7)}.\n\n{registro(veces)}" if veces else str(random.randint(10**6, 10**7))
        r = generar(como_chat(f"{texto}\n\n{pedido}"))
        # Lo reusado no se cuenta en prompt_eval_duration: el tiempo se lleva a todo el prompt, a la misma velocidad.
        reusados = r.get("prompt_eval_cached_count", 0)
        assert reusados < 0.02 * r["prompt_eval_count"] + 5, f"Ollama reusó {reusados} tokens del prompt"
        leidos = r["prompt_eval_count"] - reusados
        leer = {"tokens": r["prompt_eval_count"], "segundos": round(r["prompt_eval_duration"] / 1e9 * r["prompt_eval_count"] / leidos, 2)}
        escribir = {"tokens": r["eval_count"], "segundos": round(r["eval_duration"] / 1e9, 2)}
        respuesta = [t["token"] for t in r["logprobs"]]
        mediciones.append({"id": id_, "pedido": pedido, "leer": leer, "escribir": escribir, "respuesta": respuesta, "reusados": reusados})
        print(
            f"{id_}: leyó {leer['tokens']} tokens en {leer['segundos']} s ({leer['tokens'] / leer['segundos']:.1f} tokens/s) · "
            f"escribió {escribir['tokens']} en {escribir['segundos']} s ({escribir['tokens'] / escribir['segundos']:.1f} tokens/s)"
        )
    salida = {"modelo": MODELO, "maquina": maquina(), "fecha": date.today().isoformat(), "tope": ESCRIBIR, "mediciones": mediciones}
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, indent=1) + "\n")
    print(f"→ {SALIDA}")


if __name__ == "__main__":
    main()
