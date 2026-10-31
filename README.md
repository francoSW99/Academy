# Academy

Plataforma educativa para aprender conceptos complejos de AI Agents, ML, Deep Learning y Data Science.
Vive en https://academy.woorky.app/ (el grafo de BrainFran sigue en `/obsidian/`).

**¿Cómo va el proyecto?** Mira [AVANCE.md](AVANCE.md): en qué etapa está, qué está hecho y qué falta.

## Estructura
- `src/`: la plataforma (Next.js con export estático).
- `content/`: las lecciones, por idioma (`content/es/…`).
- `messages/`: los textos de la interfaz, por idioma.
- `lab/`: experimentos y scripts que generan los datos de los interactivos.
- `DESIGN.md`: el sistema de diseño «Pizarra en metro». Las maquetas aprobadas están en `docs/diseno/`.
- `docs/`: documentación y specs ([plan del MVP](docs/plan-mvp.md)).
- `scripts/`: automatizaciones.

## Comandos
- `npm run dev`: vista local en http://localhost:3000/es/
- `npm run build`: genera el sitio estático en `out/`.
- `npm run publicar`: build + deja la versión nueva en `publicado/` (lo que sirve Caddy).

## Objetivo
Plataforma interactiva, visual y didáctica.
