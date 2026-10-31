#!/usr/bin/env bash
# Arma con ManimGX el storyboard de los canvas de una estación: una foto al final de cada momento,
# juntas en un tablero. No hace videos: son imágenes para revisar el diseño antes de construir el canvas.
# Uso: bash scripts/storyboard.sh 03 [Escena]   →   docs/diseno/canvas/03-<escena>.png
set -euo pipefail

cd "$(dirname "$0")/.."
ESTACION="$1"
SOLO="${2:-}"
FUENTE="lab/manim/canvas_${ESTACION}.py"
SALIDA="docs/diseno/canvas"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$SALIDA"

titulo() {
  case "$1" in
    PreguntaleOtraVez) echo "Canvas 1 · «Pregúntale otra vez» · parada 1, El problema" ;;
    PizarraMecanismo) echo "Canvas 2 · La pizarra por momentos · parada 2, El mecanismo" ;;
    Autocompletado) echo "Canvas 3 · «Autocompletado» · parada 5, Sin la etiqueta" ;;
    *) echo "$1" ;;
  esac
}

for escena in $(grep -oP '^class \K\w+(?=\(Pizarra\))' "$FUENTE"); do
  [[ -n "$SOLO" && "$escena" != "$SOLO" ]] && continue
  rm -f "$TMP"/*.png "$TMP/fotos.tsv"
  # 1 · Una pasada que anota el final de cada momento (y revisa que nada se tape).
  TEMA=blanca DISENO=1 FOTOS="$TMP/fotos.tsv" manimgx inspect "$FUENTE" "$escena" -o "$TMP/revision.png" | grep -v freedreno || true
  # 2 · Una foto por momento, sin la franja de texto que agrega inspect arriba.
  n=0
  while IFS=$'\t' read -r _ t nombre; do
    n=$((n + 1))
    TEMA=blanca DISENO=1 manimgx inspect "$FUENTE" "$escena" -t "$t" -o "$TMP/crudo.png" >/dev/null 2>&1 || true
    convert "$TMP/crudo.png" -chop 0x28 -bordercolor '#c7cdd7' -border 1 \
      -background white -gravity northwest -splice 0x46 \
      -font DejaVu-Sans -pointsize 22 -fill '#15171c' -annotate +2+10 "Momento $nombre" \
      "$TMP/$(printf %02d "$n").png"
  done < "$TMP/fotos.tsv"
  # 3 · El tablero: dos columnas, con el título y la leyenda de las marcas.
  montage "$TMP"/[0-9]*.png -tile 2x -geometry +28+22 -background white "$TMP/grilla.png"
  convert "$TMP/grilla.png" -background white -gravity northwest -splice 0x120 \
    -font DejaVu-Sans-Bold -pointsize 34 -fill '#15171c' -annotate +30+26 "$(titulo "$escena")" \
    -font DejaVu-Sans -pointsize 21 -fill '#626875' \
    -annotate +30+78 "Storyboard dibujado con ManimGX, sin video. Datos reales de deepseek-r1:8b. «tocas»: lo que se toca. «en vivo»: lo que cambia al instante en la página." \
    "$SALIDA/${ESTACION}-${escena}.png"
  echo "→ $SALIDA/${ESTACION}-${escena}.png ($n momentos)"
done
