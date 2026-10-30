# lab/manim/

Escenas animadas con [ManimGX](https://github.com/academa-labs/manimgx), al estilo de 3Blue1Brown.
Un archivo por estación (`estacion_03.py`), una clase `Scene` por parada que lleva video.

## Requisitos

```sh
uv tool install --python 3.14 manimgx   # deja el comando `manimgx`
```

Sin GPU dibuja en la CPU (Mesa lavapipe, viene incluido). El aviso
`freedreno … VK_ERROR_INCOMPATIBLE_DRIVER` es inofensivo.

## Flujo

1. Escribe o cambia la escena en `estacion_NN.py`. Los colores salen de `TEMA` (`blanca` o `negra`, ver `DESIGN.md`).
2. Revísala: `TEMA=blanca manimgx inspect lab/manim/estacion_03.py Mecanismo`. Mira el storyboard y corrige solapes.
3. Renderiza las dos versiones y las portadas: `bash scripts/escenas.sh 03` (o `bash scripts/escenas.sh 03 Mecanismo` para una sola).
4. Enlázala en el contenido: `video: { nombre: "mecanismo", descripcion: "…" }` en `src/ruta/contenido/03.ts`.

Las probabilidades de las escenas son de ejemplo y así lo dice cada video. Las reales salen de un modelo (`lab/muestreo/`, Fase 3).
