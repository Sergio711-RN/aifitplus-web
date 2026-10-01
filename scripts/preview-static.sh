#!/bin/sh
# The built site (`out/`) on the Mac's own Apache 2.4 with `public/.htaccess` — as on the hosting, to check redirects,
# clean URLs and 404s before deploying. Run `npm run build` first, then `npm run preview:static`: http://127.0.0.1:8088, Ctrl+C to stop.

set -eu
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
[ -f "$ROOT/out/.htaccess" ] || { echo "No out/ — run npm run build" >&2; exit 1; }

CONF_DIR="$(mktemp -d)"
trap 'rm -rf "$CONF_DIR"' EXIT
MODULES=/usr/libexec/apache2

cat > "$CONF_DIR/httpd.conf" <<CONF
ServerRoot "/usr"
Listen 127.0.0.1:8088
ServerName localhost
PidFile "$CONF_DIR/httpd.pid"
ErrorLog /dev/stderr
LoadModule mpm_prefork_module $MODULES/mod_mpm_prefork.so
LoadModule authz_core_module $MODULES/mod_authz_core.so
LoadModule unixd_module $MODULES/mod_unixd.so
LoadModule mime_module $MODULES/mod_mime.so
LoadModule dir_module $MODULES/mod_dir.so
LoadModule rewrite_module $MODULES/mod_rewrite.so
LoadModule headers_module $MODULES/mod_headers.so
LoadModule filter_module $MODULES/mod_filter.so
LoadModule deflate_module $MODULES/mod_deflate.so
LoadModule negotiation_module $MODULES/mod_negotiation.so
TypesConfig /private/etc/apache2/mime.types
DocumentRoot "$ROOT/out"
<Directory "$ROOT/out">
  AllowOverride All
  Require all granted
</Directory>
CONF

echo "http://127.0.0.1:8088"
exec /usr/sbin/httpd -f "$CONF_DIR/httpd.conf" -DFOREGROUND
