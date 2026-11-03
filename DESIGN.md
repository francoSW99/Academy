---
name: Academy · Glassboards
description: Pizarras de vidrio oscuro que flotan sobre un solo lienzo de luz difusa: cada lección se estudia en una pizarra, sin fondos propios ni cajas opacas.
colors:
  bg-canvas: "#06080d"
  aura-azul: "#3b82f6"
  aura-indigo: "#6366f1"
  aura-ambar: "#f59e0b"
  glass-board-bg: "rgba(15, 19, 28, 0.68)"
  glass-reader-bg: "rgba(12, 15, 23, 0.82)"
  glass-card-bg: "rgba(255, 255, 255, 0.04)"
  glass-card-hover: "rgba(255, 255, 255, 0.08)"
  glass-pill-bg: "rgba(255, 255, 255, 0.06)"
  glass-code-bg: "rgba(5, 7, 12, 0.6)"
  glass-border-subtle: "rgba(255, 255, 255, 0.07)"
  glass-border-highlight: "rgba(255, 255, 255, 0.18)"
  text-primary: "#f8fafc"
  text-reading: "#e2e8f0"
  text-secondary: "#94a3b8"
  text-muted: "#64748b"
  accent-primary: "#3b82f6"
  accent-text: "#60a5fa"
  accent-warm: "#f59e0b"
  accent-emerald: "#10b981"
  falso: "#f87171"
  primario: "#f8fafc"
  primario-tinta: "#06080d"
  esp-ai: "#7fa6ff"
  esp-ml: "#b79cff"
  esp-ds: "#4fd1c5"
typography:
  titulo-leccion:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "clamp(36px, 5vw, 64px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.03em"
  titulo-seccion:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "clamp(26px, 3vw, 36px)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.022em"
  titulo-escena:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "-0.012em"
  lectura:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.625
  dato:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 300
    letterSpacing: "-0.01em"
  etiqueta:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "12.5px"
    fontWeight: 500
  prompt:
    fontFamily: "Google Sans Code, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "14.5px"
    lineHeight: 1.625
rounded:
  pozo: "14px"
  opcion: "16px"
  tarjeta: "20px"
  board: "24px"
  lector: "28px"
  pildora: "9999px"
spacing:
  marco-celular: "8px"
  marco-computador: "16px"
  marco-ancho: "24px"
  separacion-boards: "16px"
  ancho-marco: "1360px"
  ancho-temario: "300px"
  objetivo-tactil: "44px"
components:
  boton-primario:
    backgroundColor: "{colors.primario}"
    textColor: "{colors.primario-tinta}"
    rounded: "{rounded.pildora}"
    height: "44px"
    padding: "0 20px"
  pildora:
    backgroundColor: "{colors.glass-pill-bg}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pildora}"
    padding: "0 14px"
  board:
    backgroundColor: "{colors.glass-board-bg}"
    rounded: "{rounded.board}"
  lector:
    backgroundColor: "{colors.glass-reader-bg}"
    textColor: "{colors.text-reading}"
    rounded: "{rounded.lector}"
  tarjeta:
    backgroundColor: "{colors.glass-card-bg}"
    rounded: "{rounded.tarjeta}"
  pozo:
    backgroundColor: "{colors.glass-code-bg}"
    rounded: "{rounded.pozo}"
---

# Design System: Academy · Glassboards

*Publicado el 2026-11-03, con el OK de Fran. El sistema anterior, «Pizarra en metro», sigue en la rama local `UIv1` (commit `5e78eaa`).*

## Overview

**Creative North Star: "Pizarras de vidrio sobre un solo lienzo"**

Academy es un espacio oscuro con luz difusa, y encima flotan pizarras de vidrio ahumado: la barra de arriba, el temario y el lector. El vidrio es un material, no un fondo: la página tiene **un solo fondo**, y cada pizarra se apoya directo sobre él. Por eso se siente natural y no recargado. Al hacer scroll, el texto pasa por debajo de la barra y se deshace en el desenfoque.

El marco se lleva el carácter (lienzo, barra flotante, temario, tarjeta de portada) y la columna de lectura se mantiene tranquila: texto claro, medida real y nada que compita detrás.

**Key Characteristics:**
- Un solo lienzo con 3 auras fijas: azul y añil en frío, ámbar en cálido.
- Tres capas de vidrio: pizarra, tarjeta y píldora.
- Bordes de 1 px con brillo arriba, como un bisel iluminado desde arriba a la izquierda.
- Lo que mide (avance, barras, lección completada) brilla apenas con su color.
- Siempre oscuro.

## Colors

Lienzo casi negro, vidrio neutro y color solo donde hay información.

### Primary
- **Azul cielo eléctrico** (`accent-primary`): las barras de datos, la perilla, el punto de luz del avance y la lección en la que estás. Como texto usa su versión clara (`accent-text`), que pasa AA sobre vidrio.

### Secondary
- **Esmeralda** (`accent-emerald`): lo correcto, lo completado y los consejos de experto.
- **Ámbar** (`accent-warm`): lo que avisa, como un temario en preparación, y el resumen en la escena de contexto.
- **Rojo suave** (`falso`): lo incorrecto en las escenas, siempre con la palabra escrita.

### Tertiary
- **Color de especialidad** (`esp-ai`, `esp-ml`, `esp-ds`): un punto delante del nombre de cada especialidad, en todo el sitio.

### Neutral
- **Lienzo espacio profundo** (`bg-canvas`): el único fondo de la página.
- **Tinta primaria** (`text-primary`): títulos y lo activo. **Tinta de lectura** (`text-reading`): todos los párrafos. **Tinta secundaria** (`text-secondary`): resúmenes, rótulos y lecciones inactivas.
- **Tinta tenue** (`text-muted`): solo adornos, como la barra de las migas. Nunca texto que haya que leer.

### Named Rules
**La regla del fondo único.** La página tiene un fondo. Ninguna pizarra, escena o tarjeta lleva un fondo, una foto o una luz propia. Si una pizarra se ve apagada, se mueven las auras del lienzo; no se le pone una base. (Fran, pedidos 56 y 57.)

**La regla del color que informa.** La interfaz es neutra. El color aparece en los datos y en los estados, nunca como decoración.

**La regla de la verdad escrita.** El verde y el rojo siempre van con la palabra o el ícono de correcto e incorrecto. El color nunca es la única pista.

## Typography

**Display y lectura:** Google Sans Flex (con Google Sans y Arial de respaldo), la letra de woorky.app.
**Prompts y código:** Google Sans Code (con la monoespaciada del sistema de respaldo).

**Character:** una sans geométrica y una sola familia. La jerarquía sale del tamaño, el peso y el tracking apretado de los títulos, sin serif.

### Hierarchy
- **Título de lección** (`titulo-leccion`): el `h1` de la tarjeta de portada.
- **Título de sección** (`titulo-seccion`): cada idea, los consejos y las secciones del Inicio.
- **Título de escena** (`titulo-escena`): el nombre de cada pizarra interactiva.
- **Lectura** (`lectura`): párrafos, con una medida de 68ch como máximo.
- **Dato** (`dato`): las cifras grandes, en peso liviano y con números tabulares.
- **Etiqueta** (`etiqueta`): las píldoras; el módulo y la lección van en mayúsculas con 0,05em de tracking.
- **Prompt** (`prompt`): el texto para copiar.

## Layout

- **El marco:** ancho máximo de 1360 px, con 24 px a los lados desde 1280 px, 16 px desde 1024 px y 8 px en el celular. Nada toca el borde de la pantalla.
- **Lección en computador:** la barra arriba, el temario de 300 px a la izquierda y el lector en el resto, separados por 16 px. La barra y el temario quedan fijos al hacer scroll; el temario tiene su propio scroll, sin barra a la vista.
- **Lección en celular y tablet (menos de 1024 px):** la barra muestra la idea que estás leyendo y abre el Glass Drawer con el avance, el temario y el índice. Las secciones siguen en la manija del borde izquierdo.
- **Escenas:** a dos columnas desde 1280 px; antes, a una. El diagrama del bucle se reacomoda según su propio ancho.
- **Inicio y especialidades:** pizarras en bento sobre el mismo lienzo, con los títulos de sección directo sobre el lienzo.

## Elevation & Depth

La profundidad sale del vidrio apilado: desenfoque, un filo de luz arriba y una sombra suave solo en las pizarras principales. Adentro de una pizarra no se vuelve a desenfocar: un desenfoque anidado no ve lo que hay detrás y solo gasta GPU, así que las capas internas son color translúcido con su filo de luz.

### Shadow Vocabulary
- **Pizarra** (`box-shadow: inset 0 1px 0 0 rgba(255,255,255,.16), 0 20px 45px -15px rgba(0,0,0,.65)`): la barra, el temario, el lector y los boards.
- **Destacada** (`box-shadow: inset 1px 1px 0 0 rgba(255,255,255,.22), 0 12px 30px -10px rgba(0,0,0,.5)`): la tarjeta de portada y la lección activa, con el bisel hacia arriba a la izquierda.
- **Data Glow** (`box-shadow: 0 0 12px -1px <color>`): barras y puntos que miden algo.

### Named Rules
**La regla de la opacidad de lectura.** El lector nunca baja de 0,75 de opacidad, y si el sistema pide menos transparencia, las superficies suben a 0,95 sin desenfoque.

**La regla del celular liviano.** En pantallas de menos de 1024 px, solo la barra de arriba y el Glass Drawer desenfocan de verdad. Las otras pizarras tienen detrás solo luz ya difusa, y ahí el desenfoque no cambia lo que se ve.

## Shapes

Esquinas generosas y concéntricas: lector de 28 px, pizarras de 24 px, tarjetas de 20 px, opciones de 16 px y pozos de 14 px. Lo que se toca es una píldora completa. Los bordes son siempre de 1 px; nada de bordes gruesos de color.

## Components

### Barra superior (HUD)
Una cápsula de vidrio que flota arriba. A la izquierda, el logo y las migas, con la lección en una píldora; al centro, el Segmented Control de las 4 secciones; a la derecha, el avance real y el enlace al grafo. No lleva perfil ni XP porque el sitio no tiene cuentas.

### Segmented Control
Cápsula oscura; la opción activa, en blanco translúcido con un filo de luz, y una burbuja que se desliza hasta la nueva sección.

### Temario (sidebar)
Arriba, una tarjeta con el porcentaje en cifra liviana y una línea de luz con un punto brillante donde vas. Abajo, los módulos: las lecciones inactivas, limpias y en tinta secundaria; la activa, en tarjeta destacada con un punto de luz, texto blanco y el índice de la lección adentro.

### Lector y tarjeta de portada
La portada lleva píldoras con el módulo, la lección y los minutos de lectura (calculados del texto), el título y el resumen. Debajo, las ideas se leen de corrido, separadas por líneas finas.

### Escenas y diagramas
Cada una es una tarjeta de Capa 2 con su título y la píldora «Pruébalo». Sus opciones son píldoras que se iluminan al elegirlas; sus respuestas, tarjetas que se iluminan al pasar; lo que se escribe o se lee adentro va en un pozo oscuro; las perillas son una línea luminosa con un botón blanco. La acción principal de cada escena es la única píldora blanca sólida.

### Prompts
Pozo oscuro con una cabecera que dice «Prompt» y una píldora para copiar.

### Callouts
Cristal tintado al 8 % con un borde luminoso del mismo tono: azul para información (Tu práctica), esmeralda para consejos y ámbar para avisos. Van al final de la lección o en las portadas, nunca en medio de una idea.

### Navegación del final
Tarjetas grandes hacia la lección anterior y la siguiente, con una flecha que avanza al pasar. «Marcar como completada» es una píldora grande que se enciende en esmeralda.

### Glass Drawer
En el celular, el panel que se desliza desde la izquierda con desenfoque intenso. Se cierra al tocar fuera, con Escape o al elegir un enlace.

### Motion
Solo se mueve lo que responde: píldoras y tarjetas en 250 ms con `cubic-bezier(.16,1,.3,1)`, la burbuja de sección en 460 ms y el panel en 360 ms. Las auras no se mueven, para no distraer de la lectura. Con movimiento reducido, todo cambia sin transición.

## Do's and Don'ts

### Do:
- **Do** poner cada pizarra directo sobre el lienzo de la página.
- **Do** usar `#e2e8f0` o `#f8fafc` en los párrafos, con contraste AA como mínimo.
- **Do** mostrar solo datos reales: el avance sale del navegador y los minutos, del texto de la lección.
- **Do** escribir `-webkit-backdrop-filter` antes de `backdrop-filter`: el compilador de CSS se queda con el último y Chrome necesita el estándar.
- **Do** dar objetivos táctiles de 44 px en el celular.

### Don't:
- **Don't** ponerle a una pizarra un fondo, una foto o una luz propia.
- **Don't** usar texto gris oscuro sobre vidrio oscuro.
- **Don't** anidar `backdrop-filter` dentro de otra pizarra.
- **Don't** poner recuadros en medio de una idea: cortan el hilo de la lectura.
- **Don't** inventar perfil, XP o rachas mientras el sitio no tenga cuentas.
- **Don't** hacer videos para mirar: lo animado es un canvas interactivo.
