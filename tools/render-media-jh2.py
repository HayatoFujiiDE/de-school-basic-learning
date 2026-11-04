#!/usr/bin/env python3
"""Render exactly two junior-high year-2 local original clips; no install, network, or API calls."""
import argparse
import importlib.util
import importlib.metadata
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parent.parent
SCENES = {
    '8350223121300000': 'EliminationLesson',
    '8350223311000000': 'LinearGraphLesson',
}
parser = argparse.ArgumentParser()
parser.add_argument('--only', choices=list(SCENES))
args = parser.parse_args()
if importlib.metadata.version('manim') != '0.20.1':
    raise SystemExit('Use reviewed Manim CE 0.20.1; other versions require review.')

# Fail closed before any renderer/package import can make a socket connection.
def no_network(event, arguments):
    if event in ('socket.connect', 'socket.connect_ex', 'socket.getaddrinfo', 'socket.sendto'):
        raise RuntimeError('Network forbidden during local media rendering')
sys.addaudithook(no_network)
os.chdir(ROOT / 'tools')
from manim import config
import manimpango
if 'Hiragino Sans' not in manimpango.list_fonts():
    raise SystemExit('Reviewed local font Hiragino Sans is unavailable.')
config.notify_outdated_version = False
config.plugins = []
config.media_dir = str(ROOT / 'output' / 'manim')
config.video_dir = str(ROOT / 'output' / 'manim' / 'clips')
config.text_dir = str(ROOT / 'output' / 'manim' / 'text')
config.disable_caching = True
config.preview = False
config.show_in_file_browser = False
config.verbosity = 'WARNING'
assert config.pixel_width == 1280 and config.pixel_height == 720 and config.frame_rate == 30
spec = importlib.util.spec_from_file_location('math_scenes', ROOT / 'tools/media-scenes-jh2.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
ffmpeg = shutil.which('ffmpeg')
ffprobe = shutil.which('ffprobe')
if not ffmpeg or not ffprobe:
    raise SystemExit('Existing ffmpeg and ffprobe required; no automatic installation.')
assets = ROOT / 'assets' / 'lessons'
assets.mkdir(parents=True, exist_ok=True)
for code, name in SCENES.items():
    if args.only and args.only != code:
        continue
    scene = getattr(module, name)()
    scene.render()
    raw = Path(scene.renderer.file_writer.movie_file_path)
    target = assets / (code + '.mp4')
    subprocess.run([ffmpeg, '-nostdin', '-v', 'error', '-y', '-i', str(raw), '-an',
                    '-c:v', 'libx264', '-crf', '21', '-pix_fmt', 'yuv420p',
                    '-movflags', '+faststart', '-map_metadata', '-1', str(target)], check=True)
    meta = json.loads(subprocess.check_output([ffprobe, '-v', 'error', '-show_entries',
                    'format=duration,size:stream=codec_name,width,height,pix_fmt', '-of', 'json', str(target)]))
    print('MEDIA_RENDER=' + json.dumps({'code': code, 'scene': name, 'result': meta}, ensure_ascii=False), flush=True)
print('MEDIA_RENDER_RESULT=PASS network=blocked plugins=none autoplay=none')
