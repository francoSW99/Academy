"""Sugerencias reales de la siguiente palabra, como el teclado del celular, sacadas de un modelo local (Ollama).

Es el código detrás del canvas «Autocompletado» (estación 03, parada 5). La web no llama a ningún
modelo: usa el JSON que escribe este script, calculado antes.

En cada paso pide al modelo las palabras que pueden seguir (con el árbol de tokens de
lab/muestreo/, porque una palabra puede ser varios tokens), se queda con las más probables y
sigue por cada una. Así la frase crece por el camino que elijas.

Uso (con Ollama corriendo en 127.0.0.1:11434):
    python3 lab/autocompletado/sacar_sugerencias.py                  # el árbol completo
    python3 lab/autocompletado/sacar_sugerencias.py --solo-camino    # solo el camino más probable (rápido)
"""

import argparse
import json
import sys
import time
from datetime import date
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(RAIZ / "lab/muestreo"))
import sacar_probabilidades as muestreo  # noqa: E402

FRASE = "El cielo es"
SALIDA = RAIZ / "src/componentes/escenas/datos/autocompletado-es.json"
# Para sugerir una palabra basta una exploración corta del árbol de tokens.
muestreo.MAX_LLAMADAS = 30


def sugerencias(texto: str, cuantas: int) -> tuple[list[dict], int]:
    """Las `cuantas` palabras más probables después de `texto`, con su probabilidad a temperatura 1."""
    r = muestreo.arbol(texto)
    todas = muestreo.palabras(r["nodos"])
    # Lo que no es palabra (un punto, un salto de línea) queda en «signos»: se informa aparte.
    return [{"palabra": w, "p": round(p * (1 - r["signos"]), 4)} for w, p in list(todas.items())[:cuantas]], r["llamadas"]


def explorar(texto: str, profundidad: int, ramas: int, solo_camino: bool, cuenta: list[int]) -> list[dict]:
    if profundidad == 0:
        return []
    opciones, llamadas = sugerencias(texto, ramas)
    cuenta[0] += llamadas
    print(f"  {texto!r}: " + " · ".join(f"{o['palabra']} {o['p']:.0%}" for o in opciones), flush=True)
    for k, o in enumerate(opciones):
        if solo_camino and k > 0:
            continue
        o["sigue"] = explorar(f"{texto} {o['palabra']}", profundidad - 1, ramas, solo_camino, cuenta)
    return opciones


def main():
    a = argparse.ArgumentParser()
    a.add_argument("--profundidad", type=int, default=4, help="cuántas palabras se pueden agregar")
    a.add_argument("--ramas", type=int, default=3, help="cuántas sugerencias por paso, como el teclado")
    a.add_argument("--solo-camino", action="store_true", help="sigue solo la sugerencia más probable")
    a.add_argument("--salida", type=Path, default=SALIDA)
    args = a.parse_args()

    inicio, cuenta = time.time(), [0]
    opciones = explorar(FRASE, args.profundidad, args.ramas, args.solo_camino, cuenta)
    datos = {"modelo": muestreo.MODELO, "fecha": date.today().isoformat(), "frase": FRASE, "opciones": opciones}
    args.salida.parent.mkdir(parents=True, exist_ok=True)
    args.salida.write_text(json.dumps(datos, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"→ {args.salida}: {cuenta[0]} llamadas al modelo, {time.time() - inicio:.0f} s")


if __name__ == "__main__":
    main()
