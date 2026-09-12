import re

with open("sample_page.html", "r", encoding="utf-8") as f:
    html = f.read()

# Find article-content-blocks
m = re.search(r'<div data-test-id="article-content-blocks">(.*?)</div>\s*<div class="reader-article-actions', html, re.DOTALL)
if not m:
    m = re.search(r'<div data-test-id="article-content-blocks">(.*?)</div>\s*<div class="reader-author-actions', html, re.DOTALL)
if not m:
    # let's find the end of article-content-blocks
    start = html.find('data-test-id="article-content-blocks"')
    print("Start:", start)
    # let's look at next 10000 chars
    chunk = html[start:start+15000]
    # let's strip HTML tags
    clean_text = re.sub(r'<[^>]+>', ' ', chunk)
    clean_text = re.sub(r'\s+', ' ', clean_text)
    print("Clean text preview (first 2000 chars):\n", clean_text[:2000])
    print("...")
    print("Clean text end (last 1000 chars):\n", clean_text[-1000:])
else:
    print("Found regex match!")
