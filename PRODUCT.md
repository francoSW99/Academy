# Product

<!-- impeccable:product-schema 1 -->

> Escrito el 2026-11-02 a partir de `CLAUDE.md`, `AVANCE.md` y la nota del temario en BrainFran. Fran no lo confirmó en una ronda de preguntas: lo marcado *(inferido)* hay que validarlo con él.

## Platform

web

## Users

Estudiantes hispanohablantes que quieren el criterio de un ingeniero de IA, de ML o de datos. El primero es Fran, que estudia para dirigir agentes de IA como CEO/CTO: él pone el criterio y el agente escribe el código. Estudia en el celular y en el computador *(inferido de las revisiones en ambos)*.

## Product Purpose

Academy es una plataforma para aprender IA, ML, Deep Learning y Data Science de forma visual e interactiva. Tiene un Inicio y 3 especialidades separadas (AI Engineering, ML y Deep Learning, y Data Science), conectadas por puentes entre lecciones. El éxito es entender cómo y por qué funciona cada cosa, y saber dar indicaciones precisas a un agente y revisar lo que entrega.

## Positioning

Cada idea se aprende tocando una escena con datos reales, medidos con un modelo (`lab/`), con casos de trabajo reales y fuentes verificadas. Nada de videos para mirar hechos por la plataforma: lo animado es un canvas interactivo.

## Operating Context

Sitio público y sin login en academy.woorky.app. El avance se guarda en el navegador. Se publica con `npm run publicar` y se revisa antes en el borrador (`/borrador/`).

## Capabilities and Constraints

- Next.js con export estático, servido por Caddy. Nada se genera al abrir la página y no se gasta un token por visita.
- Los canvas pesan menos de 300 KB. ManimGX dibuja las piezas antes, en la VM.
- Va en español primero; el inglés viene después.
- La lección se lee de corrido: ideas en orden, el ejemplo real dentro del texto y los consejos de experto al final.

## Brand Commitments

- Es de la familia de woorky.app y usa Google Sans Flex. Es minimal y elegante; sus referencias son 3Blue1Brown, Khan Academy y DeepLearning.AI.
- Cada especialidad tiene su color: azul (AI), violeta (ML) y verde (DS).
- Los videos salen solo de la biblioteca de BrainFran y van solo donde suman.
- El vidrio («glassy») es la dirección elegida por Fran: el selector de secciones (pedidos 52 a 54) y, desde el 2026-11-03, toda la app como pizarras de vidrio oscuro sobre un solo fondo de página, sin bases individuales (pedidos 57 y 58).

## Evidence on Hand

La lección 03 está publicada, con 5 escenas y mediciones en `lab/`, y con fuentes verificadas en cada idea. Los temarios de ML y DL y de Data Science son propuestas «en preparación»: no hay que inventar lecciones ni cifras que no existan.

## Product Principles

1. Directo al grano: primero la teoría con su canvas, después el caso real. Sin ganchos ni apuestas.
2. Lo visual va solo donde hace falta, con los ejemplos de la misma lección.
3. Datos reales y fuentes verificables, o no va.
4. Rápido y liviano: estático, sin costo por visita.

## Accessibility & Inclusion

Contraste AA, movimiento reducido respetado y objetivos táctiles de 44 px *(inferido de las reglas del código)*.
