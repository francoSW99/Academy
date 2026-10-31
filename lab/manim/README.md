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

1. **El canvas se diseña como escena.** Cada estación tiene `canvas_NN.py`, con una clase por canvas. Cada sección (`self.momento(...)`) es un momento que avanzas tú en la página, y termina con `self.cierre()`.
2. **Revísala:** `TEMA=blanca DISENO=1 manimgx inspect lab/manim/canvas_03.py Autocompletado`. Mira el storyboard y corrige solapes. Con `DISENO=1` aparecen las marcas «tocas» y «en vivo».
3. **Arma el storyboard para revisar el diseño:** `bash scripts/storyboard.sh 03` deja un tablero por canvas en `docs/diseno/canvas/`, con una foto al final de cada momento.
4. **Construye el canvas** (Fase 4b, paso 3): de la escena salen las piezas que la página junta (la frase, las fórmulas, los diagramas), en los dos temas. Lo que se mueve en vivo (barras, contadores, perillas) va en React con Motion.

Los datos son reales y se sacan antes: `lab/muestreo/` y `lab/autocompletado/`.
