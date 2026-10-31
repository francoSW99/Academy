"""Probabilidades reales de la siguiente palabra, sacadas de un modelo local (Ollama).

Es el código detrás de la escena «muestreo» (estación 03, parada 2). La web no llama
a ningún modelo: usa el JSON que escribe este script.

Un LLM no elige palabras: elige tokens, que muchas veces son pedazos de palabra
(«Est» + «ambul»). Por eso el script guarda un árbol: pide la distribución del
siguiente token, sigue cada pedazo hasta que la palabra termina (un espacio o un
signo) y anota cada paso. Con ese árbol, la web aplica la temperatura token por
token, igual que el modelo, y suma los caminos que dan la misma palabra.

Uso (con Ollama corriendo en 127.0.0.1:11434):
    python3 lab/muestreo/sacar_probabilidades.py
"""

import heapq
import json
import math
import time
import urllib.request
from datetime import date
from pathlib import Path

MODELO = "deepseek-r1:8b"
OLLAMA = "http://127.0.0.1:11434/api/generate"
SALIDA = Path(__file__).resolve().parents[2] / "src/componentes/escenas/datos/muestreo-es.json"

# Una rama se sigue explorando si tiene al menos esta probabilidad (0,2 %).
UMBRAL = 0.002
# Dentro de un paso, se guardan los tokens con al menos esta probabilidad (0,1 %).
MINIMO_PASO = 0.001
# Tope de llamadas al modelo por frase.
MAX_LLAMADAS = 200

# En las frases con «respuesta», una palabra con mayúscula es la respuesta: verdadera si está
# en la lista y falsa si no (otra ciudad, otro planeta o una palabra inventada). Las demás
# («una», «la») no responden todavía: la frase sigue.
FRASES = [
    {"id": "planeta", "texto": "El planeta más caliente del sistema solar es", "respuesta": ["Venus"]},
    {"id": "turquia", "texto": "La capital de Turquía es", "respuesta": ["Ankara"]},
    {"id": "cuento", "texto": "Había una vez un"},
]


def siguiente(texto: str) -> list[tuple[bytes, float]]:
    """Los 20 tokens más probables después de `texto`, con su probabilidad (temperatura 1)."""
    cuerpo = {
        "model": MODELO,
        "prompt": texto,
        # raw: el modelo continúa el texto tal cual, sin plantilla de chat ni <think>.
        "raw": True,
        "stream": False,
        "logprobs": True,
        "top_logprobs": 20,
        "options": {"num_predict": 1, "temperature": 1, "top_k": 0, "top_p": 1},
    }
    pedido = urllib.request.Request(OLLAMA, json.dumps(cuerpo).encode(), {"Content-Type": "application/json"})
    respuesta = json.load(urllib.request.urlopen(pedido, timeout=600))
    return [(bytes(t["bytes"]), math.exp(t["logprob"])) for t in respuesta["logprobs"][0]["top_logprobs"]]


def letras_iniciales(s: str) -> int:
    """Cuántos caracteres del comienzo de `s` son letras."""
    i = 0
    while i < len(s) and s[i].isalpha():
        i += 1
    return i


def legible(b: bytes) -> str:
    """El texto de unos bytes, sin el medio carácter que pueda quedar al final."""
    return b.decode("utf-8", "ignore")


def arbol(frase: str) -> dict:
    """
    Recorre los tokens que pueden empezar la siguiente palabra.
    Cada nodo es una palabra a medias; cada opción es un token con su probabilidad en ese paso:
    o sigue a otro nodo («a»: su índice) o termina la palabra («fin»).
    """
    nodos: list[list[dict]] = []
    parciales: list[bytes] = []
    signos = 0.0  # Lo que no empieza una palabra: «__», «**», saltos de línea…
    llamadas = 0

    def nuevo_nodo(parcial: bytes) -> int:
        nodos.append([])
        parciales.append(parcial)
        return len(nodos) - 1

    # Cola por probabilidad: primero se exploran las ramas más probables. Cada rama: (−p, índice del nodo).
    cola = [(-1.0, nuevo_nodo(b""))]
    while cola and llamadas < MAX_LLAMADAS:
        menos_p, i = heapq.heappop(cola)
        parcial = parciales[i]
        llamadas += 1
        for token, q in siguiente(frase + legible(parcial)):
            p = -menos_p * q
            junto = parcial + token
            visible = legible(junto)
            pieza = visible[len(legible(parcial)):]
            cuerpo = visible[1:]
            n = letras_iniciales(cuerpo)
            # Quedó medio carácter (una tilde partida en dos tokens): se sabrá en el paso siguiente.
            pendiente = len(visible.encode()) < len(junto)
            if not parcial and not (visible.startswith(" ") and (n > 0 or pendiente)):
                signos += p  # Solo en el primer paso: no empieza una palabra.
            elif n == len(cuerpo):
                # Todo letras: la palabra puede seguir («Est» → «Estambul»).
                if p >= UMBRAL:
                    hijo = nuevo_nodo(junto)
                    nodos[i].append({"t": pieza.strip(), "p": round(q, 5), "a": hijo})
                    heapq.heappush(cola, (-p, hijo))
            elif q >= MINIMO_PASO:
                # La palabra terminó: dentro de este token («ambul,») o justo antes (« es»).
                nodos[i].append({"t": pieza[: max(0, n - len(legible(parcial)) + 1)].strip(), "p": round(q, 5), "fin": cuerpo[:n]})
    return {"nodos": podar(nodos), "signos": round(signos, 4), "llamadas": llamadas}


def podar(nodos: list[list[dict]]) -> list[list[dict]]:
    """Quita las ramas que quedaron sin explorar (se acabó el tope) y renumera los nodos."""
    vivos: dict[int, bool] = {}

    def vivo(i: int) -> bool:
        if i not in vivos:
            vivos[i] = False
            nodos[i] = [o for o in nodos[i] if "fin" in o or vivo(o["a"])]
            vivos[i] = bool(nodos[i])
        return vivos[i]

    vivo(0)
    nuevos = {viejo: k for k, viejo in enumerate(i for i in range(len(nodos)) if vivos.get(i))}
    return [[{**o, "a": nuevos[o["a"]]} if "a" in o else o for o in nodos[viejo]] for viejo in nuevos]


def palabras(nodos: list[list[dict]]) -> dict[str, float]:
    """Probabilidad de cada palabra a temperatura 1: suma de los caminos que la escriben."""
    total: dict[str, float] = {}

    def bajar(i: int, p: float):
        suma = sum(o["p"] for o in nodos[i])  # Se renormaliza: lo que no se exploró no cuenta.
        for o in nodos[i]:
            q = p * o["p"] / suma
            if "fin" in o:
                total[o["fin"]] = total.get(o["fin"], 0) + q
            else:
                bajar(o["a"], q)

    bajar(0, 1.0)
    return dict(sorted(total.items(), key=lambda x: -x[1]))


def veredictos_de(frase: dict, encontradas: dict[str, float]) -> dict[str, str]:
    if "respuesta" not in frase:
        return {}
    correctas = {w.lower() for w in frase["respuesta"]}
    return {
        w: "verdadero" if w.lower() in correctas else "falso"
        for w in encontradas
        if w.lower() in correctas or (w[0].isupper() and len(w) > 1)
    }


def main():
    salida = {"modelo": MODELO, "fecha": date.today().isoformat(), "frases": []}
    for f in FRASES:
        inicio = time.time()
        r = arbol(f["texto"])
        veredictos = veredictos_de(f, palabras(r["nodos"]))
        salida["frases"].append({"id": f["id"], "texto": f["texto"], "nodos": r["nodos"], "veredictos": veredictos, "signos": r["signos"]})
        print(f"{f['texto']!r}: {len(r['nodos'])} nodos, signos {r['signos']:.0%}, {r['llamadas']} llamadas, {time.time() - inicio:.0f} s")
        for w, p in list(palabras(r["nodos"]).items())[:14]:
            print(f"    {w:<16} {p:>7.2%}  {veredictos.get(w, '')}")
    SALIDA.parent.mkdir(parents=True, exist_ok=True)
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"→ {SALIDA} ({SALIDA.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
