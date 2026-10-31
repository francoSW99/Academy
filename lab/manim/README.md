# lab/manim/

Piezas de los canvas de cada estación, dibujadas antes con [ManimGX](https://github.com/academa-labs/manimgx), al estilo de 3Blue1Brown.

**La regla** (pedidos 28 a 30 de `AVANCE.md`): nada de videos para mirar. ManimGX sirve para diseñar cada canvas (su storyboard) y para dibujar antes sus piezas: fórmulas, diagramas y el dibujo de cada momento. La página junta esas piezas y anima con Motion lo que se toca. Nada se genera al abrir la página.

## Requisitos

```sh
uv tool install --python 3.14 manimgx   # deja el comando `manimgx`
```

Sin GPU dibuja en la CPU (Mesa lavapipe, viene incluido). El aviso
`freedreno … VK_ERROR_INCOMPATIBLE_DRIVER` es inofensivo.

## Flujo

1. Escribe o cambia la escena en `estacion_NN.py`. Los colores salen de `TEMA` (`blanca` o `negra`, ver `DESIGN.md`).
2. Revísala: `TEMA=blanca manimgx inspect lab/manim/estacion_03.py Mecanismo`. Mira el storyboard y corrige solapes.

`estacion_03.py` tiene las escenas que antes eran videos (paradas 1, 2 y 5). Son el punto de partida de los canvas de la Fase 4b; el paso que exporta sus piezas para la página se suma al construirlos.
