#!/usr/bin/env bash
# Deja una versión de prueba en academy.woorky.app/borrador/ para revisarla antes de publicar.
# El sitio público (/es/) no cambia. El borrador vive dentro de la versión publicada,
# así que la próxima `npm run publicar` lo borra.
set -euo pipefail

cd "$(dirname "$0")/.."
BASE_PATH=/borrador npm run build
destino="$(readlink -f publicado)/borrador"
rm -rf "$destino"
cp -r out "$destino"
# out/ queda con las direcciones del borrador: se rehace normal para no confundirlo con el sitio.
rm -rf out
echo "Borrador: https://academy.woorky.app/borrador/es/"
