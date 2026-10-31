# Plan · Academy (academy.woorky.app)

## Contexto
- **Qué**: la Plataforma Interactiva de Aprendizaje Visual de la nota `BrainFran/vault/03-Proyectos/Ideas/Plataforma Interactiva de Aprendizaje Visual.md` (ROADMAP de BrainFran, Fase 12).
- **Para qué**: estudiar IA de forma visual, con poca lectura, siguiendo el método de la nota (problema → mecanismo → criterio → cómo falla → explicarlo sin la etiqueta → dirigirlo) y una práctica por bloque.
- **Dónde vive**: `https://academy.woorky.app/` (decidido el 2026-10-28). Hoy `/` redirige a `/obsidian/` (el grafo). Ruta del tráfico: Cloudflare → túnel `brainfran-tunel` → Caddy `brainfran-academy` (127.0.0.1:8182, `BrainFran/tools/academy/Caddyfile`).
- **Estado del repo**: `~/projects/Academy` solo tiene `CLAUDE.md` y `README.md`, rama `master` sin commits y sin remoto.

**Decisiones de Fran (esta sesión):**
1. Primera lección: **Bloque 3 · Cómo funciona un LLM**.
2. Acceso: **pública, sin login**; el avance se guarda en el navegador.
3. Idiomas: **español primero**, con la estructura lista para sumar inglés sin rehacer nada.
4. Diseño: **Claude propone 2 o 3 mockups** y Fran elige uno antes de construir.
5. Diseño elegido (2026-10-30): **F · Pizarra en metro**, con la pizarra blanca como tema principal y la negra como opción. El detalle está en `DESIGN.md`.
6. Repo **público** en GitHub: https://github.com/francoSW99/Academy (2026-10-29).

## Stack (decisión técnica de Claude)
| Pieza | Elección | Por qué |
|---|---|---|
| Framework | Next.js (App Router, TypeScript) con `output: 'export'` | Sale HTML estático: Caddy lo sirve igual que el grafo. No hay proceso Node nuevo en la VM (2 CPU, 5.7 GB libres). |
| Estilos | Tailwind CSS v4 | El estándar de 2026 y el que ya usa `~/projects/remotion`. |
| Animación | Motion (`motion/react`, ex Framer Motion) | Lo pide la nota y CLAUDE.md. |
| Lecciones | MDX dentro del repo (`content/es/…`) | El texto y los componentes interactivos van en el mismo archivo. |
| Tokenizador | `gpt-tokenizer` en el navegador | Tokeniza de verdad sin llamar a una API. Se rotula como «tokenizador de GPT-4o, de ejemplo»: el de Claude no es público. |
| Datos de muestreo | JSON pregenerado en `lab/` con Ollama local (127.0.0.1:11434, `deepseek-r1:8b`, logprobs) | Probabilidades reales del siguiente token, calculadas una vez; la web no llama a ningún modelo. |
| Avance | `localStorage` | Va con «sin login». |
| Idiomas | Rutas `/es/…` (y después `/en/…`) + `messages/es.json` para los textos de la interfaz | Sumar inglés = agregar archivos, no rehacer páginas. |

**Regla de componentes**: cada escena interactiva es una función de un avance de 0 a 1 o de un paso. Así la misma escena se puede renderizar con Remotion para BrainFran Studio (idea anotada en la nota).

## Fases

### Fase 0 · Bases del repo (~1 h)
1. Renombrar `master` → `main`, primer commit con `CLAUDE.md` y `README.md`.
2. Crear el proyecto Next.js en la raíz con la estructura de CLAUDE.md: `src/`, `content/`, `lab/`, `docs/`.
3. Copiar este plan a `docs/plan-mvp.md`.
4. Script `scripts/publicar.sh`: `npm run build` → copia `out/` a `publicado/` con un cambio atómico (así nunca se sirve una versión a medias).
- Hecho (2026-10-29): repo público en https://github.com/francoSW99/Academy.

### Fase 1 · Dirección visual (hecha el 2026-10-30)
1. En el lienzo quedaron seis direcciones (A a F), cada una con portada y lección: https://claude.ai/artifact/NcPw19s4bfwHF2K6gmyTvW
2. Fran eligió **F · Pizarra en metro** en blanco: el orden de metro de C con el estilo minimal de pizarra de E.
3. `DESIGN.md` quedó escrito, y las maquetas aprobadas están en `docs/diseno/`.

### Fase 2 · El esqueleto (~2 sesiones)
1. **Portada `/es/`**: el mapa de metro del Pilar 1 (5 zonas, 16 estaciones) y el cartel «Tu próxima estación», según `DESIGN.md`. Las estaciones sin lección se ven como «próximamente», y el Pilar 2 aparece como la Línea 2 «en revisión».
2. **Plantilla de lección**: cartel de estación, línea de 7 paradas (las 6 del método más la práctica) y la pizarra con momentos, según `DESIGN.md`. El material (los videos de `04-Biblioteca/Videos/AIagents/`) va al final de la estación.
3. **Avance**: marcar secciones vistas y la práctica hecha (`localStorage`).
4. **Datos de la ruta**: `src/ruta/pilar1.ts` copiado a mano de la nota. La nota sigue siendo la fuente de verdad; más adelante un script la puede leer.

### Fase 3 · Lección del Bloque 3 (~3 o 4 sesiones)
Cuatro interactivos para el MVP:
1. **Tokenizador** (hecho el 2026-10-31, parada 2, antes del muestreo): escribes un texto y se ve cortado en tokens, con sus números. Contraste español vs. inglés medido con 4 tokenizadores sobre los mismos textos: el español usa +69 % de tokens en GPT-3, +20 % en GPT-4, +18 % en `deepseek-r1:8b` y solo +4 % en GPT-4o. El costo va en relativo (pagas por token), sin precios que caduquen.
2. **Ventana de contexto**: una barra que se llena con cada turno de una conversación hasta que lo viejo se cae o se compacta.
3. **Prefill y decode**: línea de tiempo animada. Lee todo el prompt de una vez y después escribe token a token. Muestra por qué un prompt largo tarda en empezar.
4. **Muestreo** (hecho el 2026-10-31, parada 2): perillas de temperatura, top-k y top-p sobre probabilidades reales de `deepseek-r1:8b`. Tres frases: el planeta más caliente (lo probable es lo correcto), la capital de Turquía (lo probable es falso: Estambul 48 % contra Ankara 28 %) y «Había una vez un» (no hay respuesta correcta). Las perillas se aplican token por token sobre un árbol de tokens, como en el modelo.
- **Práctica del bloque** (de la nota): explicar con un ejemplo propio por qué un modelo alucina y qué lo reduce.
- **Fuera del MVP**, quedan para la siguiente vuelta del bloque 3: embeddings, tool use, salidas estructuradas, modelos con razonamiento, entrenamiento en 3 pasos y modelos abiertos vs. cerrados.
- **Implementación técnica** (regla de CLAUDE.md): `lab/muestreo/` con el script que saca los logprobs de Ollama. Es el código «de verdad» detrás del interactivo.

### Fase 4 · Publicar (~30 min, con tu OK explícito)
1. Editar `BrainFran/tools/academy/Caddyfile`: cambiar `redir / /obsidian/` por un `handle` que sirva `~/projects/Academy/publicado/`, y redirigir `/` a `/es/`. El bloque de `/obsidian/` se queda igual.
2. Reiniciar `brainfran-academy` (`systemctl --user restart`; tiene `admin off`, así que no se puede recargar en caliente).
3. Commit en BrainFran del Caddyfile.
- ⚠️ Desde ese momento la plataforma queda pública en internet.

### Después del MVP (sin fecha)
1. Inglés en `/en/` + **traducir al tocar** una palabra o frase.
2. El resto del bloque 3, y después los bloques 4 y 6.
3. Enlaces del vault: que cada lección apunte a su nota del grafo. Requiere agregarle al grafo enlaces directos a una nota (hoy solo entiende `#mapa`): es un cambio en BrainFran.

## Archivos clave
- Nuevos en Academy: `src/app/[lang]/…`, `content/es/bloque-03/…mdx`, `src/componentes/escenas/…`, `src/ruta/pilar1.ts`, `lab/muestreo/`, `scripts/publicar.sh`, `DESIGN.md`, `docs/plan-mvp.md`.
- Se modifica (solo en la Fase 4): `BrainFran/tools/academy/Caddyfile`.
- Referencia sin cambios: `BrainFran/DESIGN.md` y `BrainFran/PRODUCT.md` (formato a imitar), `~/.cloudflared/config.yml` (el túnel ya apunta a :8182).

## Verificación
1. `npm run build` termina sin errores y genera `out/es/index.html` y la lección.
2. Revisión local antes de publicar: servir `out/` en un puerto de prueba y sacar capturas con Playwright en escritorio y en celular (390 px).
3. Probar cada interactivo: mover las perillas cambia el resultado y el avance sobrevive a una recarga.
4. Después de la Fase 4: `curl -I https://academy.woorky.app/` → redirige a `/es/`; `curl -I https://academy.woorky.app/obsidian/` → 200 (el grafo sigue vivo).
