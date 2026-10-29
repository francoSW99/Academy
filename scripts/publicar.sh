#!/usr/bin/env bash
# Construye el sitio y lo deja en publicado/ (lo que sirve Caddy) sin cortes:
# cada build va a versiones/<fecha>/ y publicado/ es un enlace que se cambia de un golpe.
set -euo pipefail

cd "$(dirname "$0")/.."
GUARDAR=3

npm run build

version="versiones/$(date +%Y%m%d-%H%M%S)"
mkdir -p versiones
cp -r out "$version"

ln -sfn "$version" publicado.tmp
mv -Tf publicado.tmp publicado
echo "Publicado: $version"

# Borra las versiones viejas; deja las últimas $GUARDAR para volver atrás.
ls -1d versiones/*/ | head -n -"$GUARDAR" | xargs -r rm -rf
