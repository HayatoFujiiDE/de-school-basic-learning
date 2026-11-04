#!/usr/bin/env python3
"""Reproduce exact junior-high grade-1 mathematics rows from MEXT83V11; stdlib only."""
import argparse
import hashlib
import json
import re
from pathlib import Path
import xml.etree.ElementTree as ET
import zipfile

NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
ROOT = Path(__file__).resolve().parents[1]
URL = 'https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_10.xlsx'
EXPECTED_SHA256 = '7a4a76a4d8665de90755a027b09269a265b1677f52e198750c7b3e5e9a4d4d7e'

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--input', type=Path, default=ROOT / 'sources/mext-20230901-middle-codes.xlsx')
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    prefix = '835021'
    output_path = args.output or ROOT / 'sources/jh1-math-codes.json'
    digest = hashlib.sha256(args.input.read_bytes()).hexdigest()
    if digest != EXPECTED_SHA256:
        raise SystemExit('Source checksum differs; review source before changing pinned checksum.')
    rows = []
    with zipfile.ZipFile(args.input) as z:
        # Exclude phonetic runs (rPh), retaining only normal shared-string text runs.
        strings = [''.join(t.text or '' for t in list(si.findall('m:t', NS)) + list(si.findall('m:r/m:t', NS)))
                   for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si', NS)]
        for name in sorted(z.namelist()):
            if not re.fullmatch(r'xl/worksheets/sheet\d+\.xml', name):
                continue
            for row in ET.fromstring(z.read(name)).findall('.//m:row', NS):
                cells = {}
                for cell in row.findall('m:c', NS):
                    value = cell.find('m:v', NS)
                    if value is None:
                        continue
                    cells[re.sub(r'\d', '', cell.attrib['r'])] = strings[int(value.text)] if cell.attrib.get('t') == 's' else value.text
                code = cells.get('D', '')
                if cells.get('A') == '数学' and code.startswith(prefix):
                    if not re.fullmatch(r'[0-9A-Z]{16}', code):
                        raise SystemExit('Unexpected code format')
                    rows.append({'row': int(row.attrib['r']), 'code': code, 'text': cells['C']})
    if len(rows) != 107 or len({r['code'] for r in rows}) != len(rows):
        raise SystemExit('Unexpected row count or duplicated code: ' + str(len(rows)))
    output = {'source': URL, 'sha256': digest, 'retrievedAt': '2026-11-04', 'subject': '数学', 'schoolStage': 'junior-high', 'grade': 1, 'internalGrade': 7, 'selection': 'A == 数学 AND D starts with ' + prefix, 'rows': rows}
    output_path.write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n')
    print('EXTRACT_RESULT=PASS rows=' + str(len(rows)) + ' sha256=' + digest)

if __name__ == '__main__':
    main()
