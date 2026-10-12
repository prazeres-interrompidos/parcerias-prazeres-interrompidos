from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import urllib.request
codes=['pt', 'br', 'ao', 'mz', 'eg', 'cv', 'st', 'tl', 'gw', 'sn', 'cu', 'ar', 'us', 'fr', 'de', 'nl', 'ch', 'be', 'it', 'za', 'se', 'mo']
def download(code):
 p=Path('public/flags')/(code+'.svg')
 if p.exists():return
 with urllib.request.urlopen('https://flagcdn.com/'+code+'.svg',timeout=25) as r:content=r.read()
 assert b'<svg' in content
 p.write_bytes(content)
with ThreadPoolExecutor(max_workers=8) as pool:list(pool.map(download,codes))
print('22 local SVG flag assets ready')
