---
name: Academy · Pizarra en metro
description: La ruta de estudio dibujada como una línea de metro; cada estación se aprende en una pizarra que se arma sola y después se toca.
colors:
  # Pizarra blanca: tema principal
  fondo: "#ffffff"
  pizarra: "#ffffff"
  pizarra-rejilla: "#eef1f6"
  tinta: "#15171c"
  tinta-2: "#3d424b"
  tenue: "#626875"
  borde: "#e3e7ee"
  borde-fuerte: "#c7cdd7"
  linea: "#2b2f37"
  acento: "#2457d6"
  acento-texto: "#1f4fc4"
  acento-tinta: "#ffffff"
  suave: "rgba(36,87,214,.07)"
  pulso: "rgba(36,87,214,.3)"
  elegida: "#2457d6"
  dato: "#86a9e6"
  vacio: "#eef1f6"
  verdadero: "#1e7b45"
  falso: "#c62828"
  l2: "#c2410c"
  primario: "#15171c"
  primario-tinta: "#ffffff"
  codigo-fondo: "#15171c"
  codigo-tinta: "#f1f3f7"
  # Pizarra negra: tema opcional (mismas claves con prefijo negra-)
  negra-fondo: "#0a0d13"
  negra-rejilla: "rgba(255,255,255,.028)"
  negra-pizarra: "#0e121a"
  negra-pizarra-rejilla: "rgba(255,255,255,.045)"
  negra-tinta: "#eceff4"
  negra-tinta-2: "#b9c0cc"
  negra-tenue: "#8b93a1"
  negra-borde: "rgba(255,255,255,.08)"
  negra-borde-fuerte: "rgba(255,255,255,.18)"
  negra-linea: "#b9c0cc"
  negra-acento: "#f5c451"
  negra-acento-texto: "#f5c451"
  negra-acento-tinta: "#1a1405"
  negra-suave: "rgba(245,196,81,.09)"
  negra-pulso: "rgba(245,196,81,.4)"
  negra-elegida: "#f5c451"
  negra-dato: "#5b9be6"
  negra-vacio: "rgba(255,255,255,.06)"
  negra-verdadero: "#83c167"
  negra-falso: "#fc6255"
  negra-l2: "#7fb2f0"
  negra-primario: "#eceff4"
  negra-primario-tinta: "#0a0d13"
  negra-codigo-fondo: "rgba(255,255,255,.06)"
  negra-codigo-tinta: "#eceff4"
typography:
  titulo-linea:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(44px, 6vw, 76px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  titulo-estacion:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(34px, 4.4vw, 56px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  pregunta-pizarra:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(26px, 2.8vw, 36px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  zona:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(22px, 2.2vw, 28px)"
    fontWeight: 400
    lineHeight: 1.2
  formula:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1
  anotacion:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "17px"
    fontStyle: italic
  lectura:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  interfaz:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.3
  etiqueta:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  codigo:
    fontFamily: "ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "15px"
    lineHeight: 1.7
rounded:
  cuadro: "3px"
  ficha-token: "8px"
  zona: "8px"
  burbuja: "14px"
  tarjeta: "18px"
  pizarra: "20px"
  pastilla: "999px"
spacing:
  borde: "clamp(16px, 4vw, 40px)"
  ancho-portada: "1120px"
  ancho-leccion: "1200px"
  pizarra-interior: "clamp(20px, 3vw, 44px)"
  hueco-escena: "26px"
  objetivo-tactil: "44px"
components:
  boton-primario:
    backgroundColor: "{colors.primario}"
    textColor: "{colors.primario-tinta}"
    rounded: "{rounded.pastilla}"
    height: "44px"
    padding: "0 20px"
  boton-secundario:
    textColor: "{colors.tinta}"
    border: "1px solid {colors.borde-fuerte}"
    rounded: "{rounded.pastilla}"
    height: "44px"
    padding: "0 18px"
  selector-tema:
    backgroundColor: "{colors.pizarra}"
    border: "1px solid {colors.borde}"
    rounded: "{rounded.pastilla}"
    padding: "3px"
  nodo-zona:
    border: "3px solid {colors.linea}"
    rounded: "{rounded.zona}"
    size: "30px"
  estacion-abierta:
    backgroundColor: "{colors.acento}"
    size: "22px"
  estacion-proxima:
    border: "3px solid {colors.linea}"
    size: "16px"
  parada:
    border: "3px"
    size: "29px"
  pizarra:
    backgroundColor: "{colors.pizarra}"
    border: "1px solid {colors.borde}"
    rounded: "{rounded.pizarra}"
    grid: "24px {colors.pizarra-rejilla}"
  cuadro-probabilidad:
    rounded: "{rounded.cuadro}"
    perFila: 25
    valor: "4 %"
---

# Design System: Academy · Pizarra en metro

## Overview

**Creative North Star: "La pizarra en el metro"**

Academy es una línea de metro. Cada bloque de la ruta es una **estación**, cada etapa es una **zona** y cada estación se recorre en **7 paradas** que siempre son las mismas: el problema, el mecanismo, el criterio, cómo falla, sin la etiqueta, dirígelo y práctica. El orden se ve en todo momento: el mapa dice dónde estás y qué sigue, y la línea de paradas dice en qué paso vas. Nadie se pierde.

Cada parada es una **pizarra**: una superficie blanca con cuadrícula fina donde la escena se arma por momentos, como un video de 3Blue1Brown, y al final se toca (perillas, botones, tiradas). Poco texto, mucho mecanismo.

La interfaz es minimal y elegante, en la línea de deepmind.google y woorky.app: fondo blanco liso, mucho aire, la letra de Woorky (Google Sans Flex) para usar la app y una serif (Newsreader) para lo que se piensa: títulos, preguntas, fórmulas y anotaciones.

**Key Characteristics:**
- Portada con un metro vertical que se lee de arriba hacia abajo: las zonas son cuadrados numerados y las estaciones, círculos.
- Cada lección tiene un cartel de estación y una línea de 7 paradas que se pueden tocar.
- La pizarra se arma en momentos (reproducir, pausar, avanzar) y termina siendo interactiva.
- Las probabilidades se dibujan con cuadros: 25 por fila y cada uno vale 4 %.
- Dos temas: pizarra blanca (principal) y pizarra negra (opcional). Sigue el modo del sistema y tiene un interruptor «Blanca | Negra».
- Un solo acento por tema: plumón azul en la blanca y tiza dorada en la negra.

## Colors

Blanco liso, tinta casi negra y pocos colores de plumón, cada uno con un significado fijo.

### Primary
- **Plumón azul** (`acento`): lo que te toca ahora. La estación abierta, la parada actual, el token elegido, la variable *T* de la fórmula y la marca de Academy. En la pizarra negra lo reemplaza la **tiza dorada** (`negra-acento`).

### Secondary
- **Azul dato** (`dato`): los cuadros de probabilidad. La fila elegida pasa a `elegida`, que es el mismo acento.
- **Verde verdadero** (`verdadero`) y **rojo falso** (`falso`): solo para marcar si algo es verdad en la pizarra, siempre con la palabra escrita en cursiva.
- **Naranja Línea 2** (`l2`): la Línea 2 (Pilar 2) y las combinaciones con ella.

### Neutral
- **Fondo** (`fondo`): blanco liso, sin textura.
- **Pizarra** (`pizarra`) con **cuadrícula** (`pizarra-rejilla`) de 24 px: la única superficie con textura.
- **Tinta** (`tinta`) para títulos y botones; **tinta 2** (`tinta-2`) para leer; **tenue** (`tenue`) para datos secundarios, con contraste de 5,6:1 sobre blanco.
- **Línea** (`linea`): el trazo del metro (3 px), los nodos de zona y las estaciones completadas.
- **Borde** y **borde fuerte**: líneas finas de 1 px.
- **Primario** (`primario`): los botones principales son negros con texto blanco.

### Named Rules
**La regla del «estás aquí».** El acento marca solo lo que te toca ahora. Nunca decora.

**La regla de la verdad escrita.** El verde y el rojo siempre van con la palabra «verdadero» o «falso». El color nunca es la única pista.

**La regla de un plumón por pizarra.** La blanca usa azul y la negra, dorado. No se mezclan acentos.

## Typography

- **Interfaz y lectura:** Google Sans Flex, la letra de woorky.app.
- **Títulos, preguntas, fórmulas y anotaciones:** Newsreader, una serif de pizarra de clase.
- **Indicaciones al agente y código:** la monoespaciada del sistema.

### Hierarchy
- **Título de línea** (`titulo-linea`): el nombre del pilar en la portada.
- **Título de estación** (`titulo-estacion`): el nombre del bloque en el cartel de la lección.
- **Pregunta de pizarra** (`pregunta-pizarra`): la pregunta que abre cada parada.
- **Zona** (`zona`): «Zona 1 · Fundamentos» en el mapa.
- **Fórmula** (`formula`): variables en cursiva y la variable que se toca en el color del acento.
- **Anotación** (`anotacion`): rótulos en cursiva con línea punteada, como «siguiente token».
- **Lectura** (`lectura`), **interfaz** (`interfaz`) y **etiqueta** (`etiqueta`) para todo lo demás.

### Named Rules
**La regla de la serif para pensar.** La serif va en lo que se piensa (títulos, preguntas, fórmulas, anotaciones). La sans va en lo que se usa (botones, etiquetas, navegación).

## Layout

- **Portada** (1120 px de ancho): cabecera del pilar con barra de avance de 16 rayitas, cartel «Tu próxima estación», y abajo el mapa (columna flexible) con un lateral: cómo se recorre una estación, leyenda y Línea 2. En el celular el lateral baja debajo del mapa.
- **Lección** (1200 px de ancho): cartel de estación, línea de 7 paradas (con desplazamiento horizontal en el celular), la pizarra a todo el ancho, la narración debajo, los botones de parada anterior y siguiente, y la próxima estación al final.
- Margen lateral de `clamp(16px, 4vw, 40px)`. Todo funciona a 390 px de ancho.

## Elevation & Depth

Sin sombras. La profundidad sale de las líneas finas, la cuadrícula de la pizarra y el pulso del «estás aquí».

## Shapes

Botones y selectores en pastilla (999 px). La pizarra tiene esquinas de 20 px y las tarjetas, de 18 px. Las estaciones y paradas son círculos, las zonas son cuadrados de esquinas redondeadas (8 px) y los cuadros de probabilidad, de 3 px.

## Components

### Mapa de la línea (portada)
Una línea vertical de 3 px que baja por todo el mapa. Cada **zona** es un nodo cuadrado con su número en serif, seguido de «Zona N · Nombre» y su conteo. Cada **estación** es un círculo sobre la línea:
- **Abierta:** círculo de 22 px relleno con el acento y pulso, título en negrita y la pastilla «Abierta · entrar →». Toda la fila es un enlace.
- **Próxima:** anillo de 16 px con el color de la línea; el título en `tinta-2`.
- **Completada:** círculo relleno con el color de la línea.
- **Combinación con la Línea 2:** rótulo «L2 · 21, 24–26» con trazo punteado en `l2`.
- **Destino:** un cuadrado relleno al final con «CEO/CTO de tus agentes».

### Cartel «Tu próxima estación» (portada)
Una sola tarjeta con el número de la estación en un círculo con pulso, el nombre en serif, «Zona · paradas» y el botón «Entrar a la estación». Al lado lleva una mini pizarra con cuadros que se llenan al cargar.

### Cartel de estación (lección)
El número de la estación en un círculo con borde del acento, «Estación N de 16 · Zona», el título en serif y un botón para volver al mapa.

### Línea de paradas (lección)
Siete círculos de 29 px unidos por un riel de 3 px. La parada **actual** va rellena con el acento y pulso. Las **hechas** van rellenas con el color de la línea y un ✓. Las **pendientes** son anillos. Cada parada es un botón con su nombre y una descripción corta. El riel queda trazado hasta donde llegaste.

### Pizarra
Superficie con cuadrícula, borde fino y 20 px de esquina. Arriba dice «Parada N de 7 · Nombre» y lo que es (escena, simulación, ejercicio), y debajo va la pregunta en serif. Tiene una sola idea y un texto de una o dos líneas como máximo.

### Momentos de la escena (reproductor)
La barra inferior de la pizarra tiene los capítulos (por ejemplo: 1 La frase · 2 Probabilidades · 3 Elegir · 4 Temperatura), cada uno con su rayita de avance, y los botones anterior, Reproducir o Pausa, y siguiente. La narración va debajo de la pizarra y se lee en voz alta (`aria-live`).

### Barras de probabilidad y ruleta (escena interactiva)
Cada palabra que podría seguir es una fila: la palabra en serif, una barra continua, el porcentaje exacto y ✓ o ✗ si la frase tiene respuesta. El color de la barra dice qué es: verde si es verdadera, rojo si es falsa, el acento si la frase sigue y gris para «otras N palabras». Las filas guardan el orden de temperatura 1, así no saltan al mover las perillas. Debajo va la ruleta: la misma distribución en una franja, donde el dado cae en un punto al azar (un pin que rueda desde la izquierda y se frena en 0,7 s). Después de varias tiradas, cada una es una rayita en la ruleta y el conteo (×12) va al costado de cada fila. Con movimiento reducido, el pin aparece directo en su lugar. (Reemplaza a los 25 cuadros del mockup F: con barras se ven también los valores chicos.)

### Fichas de tokens (escena interactiva)
El texto cortado en tokens se ve como fichas pegadas, sin espacio entre ellas, que alternan 5 tintes suaves (`ficha-1` a `ficha-5`): así se ve dónde corta cada una sin tapar el texto. El espacio de adelante es parte de la ficha, como en el tokenizador. Con «Números», cada ficha muestra su número en monoespaciada.

### Video de escena (ManimGX)
La parte que se reproduce de una pizarra puede ser un video hecho con ManimGX (`lab/manim/`), al estilo de 3Blue1Brown. Usa los mismos colores del tema: azul de plumón sobre blanco o dorado sobre negro, verde y rojo para verdadero y falso, y gris tenue para las leyendas. Cada escena se renderiza dos veces, una por tema, y la página muestra la que corresponde al modo del sistema. La parte que se toca sigue en React.

### Fórmula
HTML con serif: variables en cursiva, subíndices y superíndices, y la variable que se manipula en el color del acento. Lleva `role="img"` con una descripción en palabras.

### Navegación y próxima estación
Debajo de la pizarra van los botones «← N · parada anterior» (secundario) y «Siguiente parada: N · nombre →» (primario). Al final de la lección hay una tarjeta con borde punteado para la próxima estación.

### Selector de tema e idioma
Dos selectores en pastilla en la cabecera: «Blanca | Negra» y «ES | EN». EN queda desactivado hasta que exista la versión en inglés.

### Motion grammar
- **Entrada de elementos:** opacidad y desplazamiento de 8 px hacia arriba, 500 ms con `cubic-bezier(.2,.7,.2,1)`, escalonado de 110 a 250 ms.
- **Fichas de la frase:** opacidad en 420 ms y desplazamiento en 520 ms, cada ficha 110 ms después de la anterior.
- **Cuadros:** cambian de color en 260 ms. Al aparecer llegan en ola, con un retraso de 90 ms por fila más 22 ms por cuadro.
- **Tirar los dados:** el resaltado recorre las filas cada 55 ms más 10 ms por paso, se va frenando y cae en el token sorteado.
- **Pulso del «estás aquí»:** sombra que se expande 12 px en 2,4 s, sin parar.
- **Reproducir:** entre momentos espera 450, 1500, 1900 y 2700 ms.
- **Movimiento reducido** (`prefers-reduced-motion`): sin animaciones ni transiciones; todo aparece directo en su estado final.

## Do's and Don'ts

### Do:
- Mostrar siempre dónde estás (estación y parada) y qué sigue.
- Una idea por pizarra, con texto de una o dos líneas.
- Rotular los datos de ejemplo como «de ejemplo».
- Objetivos táctiles de 44 px como mínimo y contraste de texto de 4,5:1 como mínimo.
- Botones y enlaces reales (`<button>`, `<a>`), con `aria-label` en los que solo tienen ícono.

### Don't:
- Degradados de fondo, vidrio esmerilado ni emoji.
- Tarjetas con borde de color a la izquierda.
- Más de un acento por tema.
- Párrafos largos dentro de la pizarra.
- Inventar cifras: lo que no viene de una fuente se marca como ejemplo.

## Vocabulario

| En la interfaz | En la nota de BrainFran |
|---|---|
| Línea | Pilar |
| Zona | Etapa |
| Estación | Bloque |
| Parada | Paso del método (problema, mecanismo, criterio, cómo falla, sin la etiqueta, dirigirlo, práctica) |
| Momento | Cada parte de una escena animada |

## Maquetas

- Lienzo con todas las opciones; la elegida está en la página «F · Pizarra en metro»: https://claude.ai/artifact/NcPw19s4bfwHF2K6gmyTvW (privado).
- Fuente de las maquetas aprobadas, como referencia para la Fase 2: `docs/diseno/maqueta-portada.dc.html` y `docs/diseno/maqueta-leccion.dc.html`. Usan el formato del lienzo; en la app se rehacen como componentes de Next.js.
