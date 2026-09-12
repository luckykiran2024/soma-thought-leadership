import re
import html

with open("sample_page.html", "r", encoding="utf-8") as f:
    raw_html = f.read()

# Extract Title
m_title = re.search(r'<meta\s+property="og:title"\s+content="(.*?)"', raw_html)
title = html.unescape(m_title.group(1)) if m_title else ""

# Extract Date
m_date = re.search(r'datetime="(202[0-9]-[0-9]{2}-[0-9]{2}T[0-9:.]+Z?)"', raw_html)
date_str = m_date.group(1) if m_date else ""

# Extract Description
m_desc = re.search(r'<meta\s+name="description"\s+content="(.*?)"', raw_html)
desc = html.unescape(m_desc.group(1)) if m_desc else ""

print("Title:", title)
print("Date:", date_str)
print("Description:", desc)

# Extract article blocks
# Look for blocks matching <div class="article-main__content"[^>]*>(.*?)</div>
blocks = re.findall(r'<div class="article-main__content"[^>]*>(.*?)</div>', raw_html, re.DOTALL)
print("Total blocks found:", len(blocks))

clean_paragraphs = []
for b in blocks:
    # Check if heading
    m_h = re.search(r'<h[23][^>]*>(.*?)</h[23]>', b, re.DOTALL)
    if m_h:
        h_text = re.sub(r'<[^>]+>', '', m_h.group(1)).strip()
        h_text = html.unescape(h_text)
        if "Recommended by LinkedIn" not in h_text:
            clean_paragraphs.append(f"\n### {h_text}\n")
        continue

    # Check if list
    m_lis = re.findall(r'<li[^>]*>(.*?)</li>', b, re.DOTALL)
    if m_lis:
        for li in m_lis:
            li_text = re.sub(r'<[^>]+>', '', li).strip()
            li_text = html.unescape(li_text)
            clean_paragraphs.append(f"- {li_text}")
        clean_paragraphs.append("")
        continue

    # Check paragraph or text
    text = re.sub(r'<[^>]+>', '', b).strip()
    text = html.unescape(text)
    if text and "Recommended by LinkedIn" not in text:
        clean_paragraphs.append(text)

extracted_article = "\n\n".join(clean_paragraphs)
print("Extracted article length:", len(extracted_article))
print("\n--- PREVIEW ---")
print(extracted_article[:1000])
print("\n--- END PREVIEW ---")
print(extracted_article[-500:])
