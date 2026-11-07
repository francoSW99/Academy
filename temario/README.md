# Temario: la fuente de los 3 cursos

Todo lo que el sitio muestra en los temarios sale de aquí. **`src/ruta/temario.ts` no se edita a mano:** se genera.

| Archivo | Qué tiene |
|---|---|
| `estructura_ai.py` | AI Engineering (propuesta v3). Lee lecciones de `estructura_ai_v2.py` |
| `estructura.py` | ML y DL, Data Science y `DESTINOS`, adonde apunta cada repaso o requisito |
| `publicadas.py` | Qué lecciones tienen contenido publicado, por curso, en una línea por curso |
| `gen_temario.py` | Genera `src/ruta/temario.ts` |
| `gen_doc.py` y `gen_doc_ds.py` | Generan las propuestas de `docs/roadmap/ml-dl/` y `docs/roadmap/ds/` |

## Publicar una lección nueva

1. Escribe su contenido en `src/ruta/contenido/`.
2. Suma su id a la línea de su curso en `publicadas.py`.
3. Corre `python3 temario/gen_temario.py` y `npm run typecheck`.

Si al mezclar dos ramas chocan en `src/ruta/temario.ts`, quédate con cualquiera de las dos versiones y vuelve a correr `gen_temario.py`: el archivo sale de las fuentes de arriba.

Antes vivía en `research_notes/` (fuera de git). Se movió aquí en el pedido 106 para que cada worktree tenga su copia.
