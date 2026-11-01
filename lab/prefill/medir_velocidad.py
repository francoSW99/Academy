"""Cuánto tarda el modelo local en leer el prompt (prefill) y en escribir la respuesta (decode).

Es el código detrás de la escena «prefill» (lección 03): un bot de soporte con RAG que lee el manual entero o solo lo que sirve. La web no llama a ningún modelo:
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

# El caso: un bot de soporte con RAG. Se le pega el manual de soporte entero, o solo las 2 secciones que
# responden la pregunta. Cada sección es distinta (si se repite el mismo párrafo, el modelo comenta la repetición).
TEMAS = [
    ("Envíos", "Los pedidos salen en 24 horas hábiles desde la bodega de Quilicura y llegan en 2 a 5 días hábiles según la comuna."),
    ("Seguimiento", "Cada pedido tiene un código de seguimiento que llega por correo apenas el paquete sale de la bodega."),
    ("Cambios de dirección", "La dirección de entrega se puede cambiar mientras el pedido no haya salido; después, solo coordinando con el transportista."),
    ("Pagos", "Se aceptan tarjetas de crédito y débito, transferencias y orden de compra para clientes con contrato."),
    ("Boletas y facturas", "La boleta llega por correo al confirmar el pago; la factura se emite con el RUT ingresado al comprar."),
    ("Cobros duplicados", "Si un cobro aparece dos veces, el segundo se anula en 48 horas hábiles y se informa por correo."),
    ("Cuentas y acceso", "Para recuperar el acceso, el cliente pide un enlace de recuperación; si cambió de correo, lo valida soporte."),
    ("Seguridad", "Soporte nunca pide contraseñas ni códigos de verificación por chat, correo ni teléfono."),
    ("Garantía", "Todos los productos tienen 6 meses de garantía legal; algunos fabricantes ofrecen garantía extendida."),
    ("Productos con falla", "Si un producto llega con falla, el cliente tiene 10 días para reportarlo con fotos del daño y del embalaje."),
    ("Devoluciones", "El retiro para devolver un producto cuesta $4.990 y se agenda desde la sección Mis pedidos."),
    ("Plan Empresa", "Los clientes del plan Empresa no pagan retiros ni devoluciones y tienen un ejecutivo asignado."),
    ("Reembolsos", "El reembolso se hace al mismo medio de pago en un plazo de 5 a 10 días hábiles después de recibir el producto."),
    ("Horarios", "El chat de soporte atiende de lunes a viernes de 9:00 a 19:00 y los sábados de 10:00 a 14:00."),
]
DETALLES = [
    "Si el cliente insiste, se deriva a un ejecutivo con el número de pedido y un resumen del caso.",
    "Toda excepción se registra en la ficha del cliente con la fecha y el nombre de quien la autorizó.",
    "Antes de responder, se confirma el número de pedido y el correo del cliente.",
    "Si el caso no está en este manual, se responde que se revisará y se escala al equipo de operaciones.",
    "Las respuestas se escriben en tono cercano, sin tecnicismos y en no más de tres frases.",
]


def seccion(k: int) -> str:
    titulo, regla = TEMAS[k % len(TEMAS)]
    vuelta = k // len(TEMAS)
    extra = " ".join(DETALLES[(k + d) % len(DETALLES)] for d in range(2))
    return f"## {k + 1}. {titulo}{f' (anexo {vuelta})' if vuelta else ''}\n{regla} {extra}"


def manual(secciones: int) -> str:
    return "\n\n".join(seccion(k) for k in range(secciones))


PREGUNTA = "Soy del plan Empresa y un monitor llegó con la pantalla rota. ¿Cuánto me cuesta devolverlo?"
# Tres prompts para la misma pregunta: (id, texto que se pega, pedido final).
PROMPTS = [
    ("pregunta", "", PREGUNTA),
    ("trozos", "Estas son las secciones del manual de soporte que hablan de devoluciones:\n\n" + seccion(10) + "\n\n" + seccion(11), PREGUNTA),
    ("manual", "Este es el manual de soporte completo:\n\n" + manual(28), PREGUNTA),
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
    for id_, pegado, pedido in PROMPTS:
        # Un comienzo distinto en cada medición: si Ollama reusara lo que ya leyó, el prefill saldría gratis.
        # Igual puede reusar las marcas fijas del comienzo de la plantilla y alguna cifra.
        # Un número distinto al comienzo: así Ollama no reusa la lectura de una corrida anterior.
        texto = f"Caso {random.randint(10**6, 10**7)}.\n\n{pegado}" if pegado else f"Caso {random.randint(10**6, 10**7)}."
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
