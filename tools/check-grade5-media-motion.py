#!/usr/bin/env python3
"""Independent geometry gate: every sample must retain 12 visible blocks."""
import ast
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
module = ast.parse((ROOT / 'tools/media-scenes-grade5.py').read_text())
function = next(n for n in module.body if isinstance(n, ast.FunctionDef) and n.name == 'mean_positions')
namespace = {}
exec(compile(ast.Module(body=[function], type_ignores=[]), '<reviewed mean path>', 'exec'), namespace)
path = namespace['mean_positions']
def audit(points):
    assert len(points) == 12
    for i, (x,y) in enumerate(points):
        assert -3.7 <= x-.4 and x+.4 <= 3.7 and -1.6 <= y-.22 and y+.22 <= 1.9
        for xx,yy in points[i+1:]:
            assert abs(x-xx) >= .8-1e-6 or abs(y-yy) >= .44-1e-6
for frame in range(1001): audit(path(frame/1000))
try: audit(path(.5, lift=0))
except AssertionError: pass
else: raise AssertionError('Original straight path must be rejected')
for t, expected in [(0,[2,4,6]),(1,[4,4,4])]:
    points=path(t)
    assert [sum(abs(x-c)<1e-6 for x,y in points) for c in [-3.2,0,3.2]] == expected
print('GRADE5_VIDEO_MOTION=PASS samples=1001 objects=12 collisions=0 original_midpoint_rejected=true')
