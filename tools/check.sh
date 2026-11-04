#!/bin/sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
cd "$ROOT"
trap 'rc=$?; if [ "$rc" -ne 0 ]; then printf "CHECK_RESULT=FAIL\n"; fi' EXIT
node tools/check-core.cjs
node tools/check-content.cjs
node tools/check-math.cjs
node tools/check-visuals.cjs
node tools/check-lessons-math.cjs
node tools/check-media.cjs
node tools/check-browser.cjs
node tools/check-lessons.cjs
printf 'CHECK_RESULT=PASS\n'
