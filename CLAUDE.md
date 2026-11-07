# CLAUDE.md

Este repositorio es el proyecto **Academy**, dedicado al desarrollo de una plataforma educativa interactiva para IA, ML, DL y Data Science.

## Directrices del Proyecto
1. **Enfoque Visual**: Priorizar explicaciones con diagramas, simulaciones y componentes interactivos.
2. **Aprendizaje Aplicado**: Cada concepto debe estar vinculado a una implementación técnica (código, script, o caso real).
3. **Rol del Agente**: Tú (Claude) eres el programador táctico. Yo (Fran) soy el estratega (CEO/CTO).
4. **Tecnologías**: Enfocarse en tecnologías 2026 (Next.js, Tailwind, Framer Motion, integraciones MCP, etc.).

## Estructura Sugerida
- `src/`: Lógica de la plataforma educativa.
- `lab/`: Laboratorio para experimentos, APIs y pruebas rápidas.
- `docs/`: Documentación de alto nivel y specs.

## Dos líneas de trabajo: una conversación por curso (desde el 2026-11-07, pedido 106)
Las lecciones de ML y DL y de AI Engineering se escriben en conversaciones separadas, una por curso, módulo por módulo y en orden. Para que no choquen:

| Curso | Carpeta (worktree) | Rama |
|---|---|---|
| ML y DL | `~/projects/Academy-ml` | `curso-ml` |
| AI Engineering | `~/projects/Academy-ai` | `curso-ai` |
| Mezclar y publicar | `~/projects/Academy` | `main` |

1. **Cada conversación trabaja solo en la carpeta de su curso.** La conversación empieza en `~/projects/Academy`, como siempre, porque ahí está la memoria; después pasa a la carpeta del curso.
2. **Solo se tocan los archivos del curso:** sus lecciones (`src/ruta/contenido/`), su línea en `temario/publicadas.py`, sus fuentes y su memoria. Los archivos compartidos (`temario/estructura*.py`, `src/ruta/conexiones.ts`, los componentes) se cambian solo si la lección lo necesita, y se avisa.
3. **Se publica solo desde `main`, en `~/projects/Academy`, una conversación a la vez.** Primero se mezcla la rama del curso en `main`, se corre `temario/gen_temario.py`, y después `npm run typecheck` y `npm run publicar`. Después de publicar, la otra rama trae `main` (`git merge main`).
4. **El tablero (`AVANCE.md`) se ordena al mezclar.** Cada rama anota sus pedidos con su prefijo (ML-1, ML-2… y AI-1, AI-2…), y al pasar a `main` se juntan. Si `src/ruta/temario.ts` choca, se regenera.
- Un worktree nuevo necesita sus dependencias: `ln -s ~/projects/Academy/node_modules node_modules`.
- El cómo de los temarios está en `temario/README.md`.
