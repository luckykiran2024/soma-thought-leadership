import urllib.request
import re

url = 'https://www.linkedin.com/pulse/companies-dont-get-better-deciding-older-soma-kiran-gonella-gobce'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

with open("sample_page.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Saved sample_page.html, size:", len(html))

# Let's search for the text: 'The best business schools in the world'
idx = html.find('The best business schools')
print("Position of article text:", idx)
if idx != -1:
    snippet = html[idx-200:idx+800]
    print("Snippet around text:\n", snippet)
