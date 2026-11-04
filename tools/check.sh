#!/bin/sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
cd "$ROOT"
trap 'rc=$?; if [ "$rc" -ne 0 ]; then printf "CHECK_RESULT=FAIL\n"; fi' EXIT
node tools/check-core.cjs
node tools/check-grade-migration.cjs
node tools/check-grade6-migration.cjs
node tools/check-content.cjs
node tools/check-math.cjs
node tools/check-grade5.cjs
node tools/check-grade6.cjs
node tools/check-visuals.cjs
node tools/check-lessons-math.cjs
node tools/check-media.cjs
node tools/check-grade5-visuals.cjs
node tools/check-grade5-lessons.cjs
python3 tools/check-grade5-media-motion.py
node tools/check-grade5-media.cjs
node tools/check-grade5-assets.cjs
node tools/check-grade6-visuals.cjs
node tools/check-grade6-lessons.cjs
node tools/check-grade6-media.cjs
node tools/check-grade6-assets.cjs
node tools/check-browser.cjs
node tools/check-grade6-storage-browser.cjs
node tools/check-grade6-browser.cjs
node tools/check-lessons.cjs
printf 'CHECK_RESULT=PASS\n'
