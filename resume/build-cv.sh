#!/bin/sh
# Rebuilds public/images/AyaIshimura-CV.pdf from resume/cv.html with headless Chrome.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PROFILE="$(mktemp -d)"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --user-data-dir="$PROFILE" \
  --print-to-pdf="public/images/AyaIshimura-CV.pdf" \
  "file://$PWD/resume/cv.html" 2>/dev/null
rm -rf "$PROFILE"
echo "Wrote public/images/AyaIshimura-CV.pdf"
