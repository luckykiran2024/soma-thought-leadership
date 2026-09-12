with open("sample_page.html", "r", encoding="utf-8") as f:
    html = f.read()

start = html.find('data-test-id="article-content-blocks"')
# Let's find where the article content ends.
# Look for reader-related or end tags
end_marker = html.find('class="reader-article-actions', start)
if end_marker == -1:
    end_marker = html.find('class="reader-author-actions', start)
if end_marker == -1:
    end_marker = html.find('class="article-ssr-frontend-pulse', start)
if end_marker == -1:
    end_marker = html.find('Sign in to leave a comment', start)

print("Start:", start, "End:", end_marker)
chunk = html[start:end_marker] if end_marker != -1 else html[start:start+25000]
print("Chunk length:", len(chunk))

# Check for headings in chunk
import re
h2s = re.findall(r'<h[23][^>]*>(.*?)</h[23]>', chunk, re.DOTALL)
print("Subheadings:", h2s)
