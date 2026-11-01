# lab/autocompletado

Sugerencias reales de la siguiente palabra, como el teclado del celular, sacadas de un modelo que corre en esta máquina. Es el código detrás del canvas «Autocompletado» (estación 03, parada 5). La web no llama a ningún modelo: usa el JSON que escribe este script.

```sh
python3 lab/autocompletado/sacar_sugerencias.py --solo-camino   # solo el camino más probable: unos 3 minutos
python3 lab/autocompletado/sacar_sugerencias.py                 # el árbol entero (3 sugerencias × 4 pasos): unos 25 minutos
```

Necesita Ollama en `127.0.0.1:11434` con `deepseek-r1:8b`, y usa el árbol de tokens de `lab/muestreo/` (una palabra puede ser varios tokens). Escribe `src/componentes/escenas/datos/autocompletado-es.json`.

## Lo que salió (2026-10-31)

El camino más probable desde «El cielo es»: **azul** (39 %) → **porque** (35 %) → **la** (42 %) → **luz** (86 %). Multiplicadas, la frase entera tiene un 4,9 % de probabilidad. Otras sugerencias en el camino: «el» (34 %), «refracta» (11 %) y «atmósfera» (11 %).
