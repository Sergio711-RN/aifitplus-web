#!/bin/sh
# Deploy to the Hosting Ukraine shared plan: build the static site (`out/`) here and upload it over SSH.
# The hosting only serves files (Apache, no Node.js); redirects and 404s are in `public/.htaccess`.
# Settings live in .env.deploy (not committed); first-time setup — docs/deploy.md. Run: `npm run deploy`.

set -eu
cd "$(dirname "$0")/.."

if [ ! -f .env.deploy ]; then
  echo "No .env.deploy — see docs/deploy.md" >&2
  exit 1
fi
. ./.env.deploy
: "${DEPLOY_SSH:?DEPLOY_SSH is not set in .env.deploy}"
: "${DEPLOY_DIR:?DEPLOY_DIR is not set in .env.deploy}"

# Production gets exactly what is committed, not local experiments
if [ -n "$(git status --porcelain)" ]; then
  echo "Uncommitted changes — commit or stash them first" >&2
  exit 1
fi

echo "→ Building $(git rev-parse --short HEAD)"
rm -rf out
NEXT_TELEMETRY_DISABLED=1 npm run build

echo "→ Uploading to $DEPLOY_SSH:$DEPLOY_DIR"
# --delete removes files left from the previous build; .well-known holds the hosting's SSL (Let's Encrypt) checks
rsync -rlz --checksum --delete --exclude .well-known --exclude .DS_Store out/ "$DEPLOY_SSH:$DEPLOY_DIR/"

echo "✓ Deployed"
