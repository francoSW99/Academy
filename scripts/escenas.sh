#!/usr/bin/env bash
# Renderiza con ManimGX las escenas de una estación, una vez por tema (pizarra blanca y negra),
# y deja video y portada en public/escenas/<estación>/. Uso: bash scripts/escenas.sh 03 [Escena]
set -euo pipefail

cd "$(dirname "$0")/.."
ESTACION="${1:-03}"
SOLO="${2:-}"
FUENTE="lab/manim/estacion_${ESTACION}.py"
DESTINO="public/escenas/${ESTACION}"
RESOLUCION="${RESOLUCION:-1600x900}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$DESTINO"

for escena in $(grep -oP '^class \K\w+(?=\(m\.Scene\))' "$FUENTE"); do
  [[ -n "$SOLO" && "$escena" != "$SOLO" ]] && continue
  # Mecanismo → mecanismo, SinEtiqueta → sin-etiqueta
  nombre=$(sed -E 's/([a-z])([A-Z])/\1-\2/g' <<<"$escena" | tr '[:upper:]' '[:lower:]')
  for tema in blanca negra; do
    salida="$DESTINO/${nombre}-${tema}"
    echo "→ $escena ($tema)"
    TEMA=$tema manimgx render "$FUENTE" "$escena" -r "$RESOLUCION" --fps 30 -o "$salida.mp4" | grep -v freedreno
    # Portada: el último cuadro, sin la franja de título que pone el storyboard (28 px).
    TEMA=$tema manimgx inspect "$FUENTE" "$escena" -t end -o "$TMP/portada.png" >/dev/null 2>&1 || true
    convert "$TMP/portada.png" -chop 0x28 -quality 85 "$salida.jpg"
  done
done
rm -f "$DESTINO"/*.storyboard*.png
ls -la "$DESTINO"
