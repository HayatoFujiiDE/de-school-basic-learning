#!/usr/bin/env python3
"""Reproduce exact grade-4, grade-5 or grade-6 mathematics rows; no third-party dependencies."""
import argparse
import hashlib
import json
import re
from pathlib import Path
import xml.etree.ElementTree as ET
import zipfile

NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
ROOT = Path(__file__).resolve().parents[1]
URL = 'https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_28.xlsx'
EXPECTED_SHA256 = 'f32ba37970cac91a26656a4f317ca755e2536aa525fc439d214391904e24c8e3'

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--grade', type=int, choices=(4, 5, 6), default=4)
    parser.add_argument('--input', type=Path, default=ROOT / 'sources/mext-20230901-codes.xlsx')
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    prefix = '82502' + str(args.grade)
    output_path = args.output or ROOT / ('sources/grade' + str(args.grade) + '-math-codes.json')
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
                if cells.get('A') == '算数' and code.startswith(prefix):
                    if not re.fullmatch(r'[0-9A-Z]{16}', code):
                        raise SystemExit('Unexpected code format')
                    rows.append({'row': int(row.attrib['r']), 'code': code, 'text': cells['C']})
    if len(rows) != {4: 138, 5: 118, 6: 88}[args.grade] or len({r['code'] for r in rows}) != len(rows):
        raise SystemExit('Unexpected row count or duplicated code: ' + str(len(rows)))
    output = {'source': URL, 'sha256': digest, 'retrievedAt': '2026-11-04', 'subject': '算数', 'grade': args.grade, 'selection': 'A == 算数 AND D starts with ' + prefix, 'rows': rows}
    output_path.write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n')
    print('EXTRACT_RESULT=PASS rows=' + str(len(rows)) + ' sha256=' + digest)

if __name__ == '__main__':
    main()
