import re
from bs4 import BeautifulSoup

with open("sample_page.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# Get title
og_title = soup.find("meta", property="og:title")
title = og_title["content"] if og_title else ""
print("Title:", title)

# Get publish date
date_meta = soup.find("meta", property="article:published_time")
date_pub = date_meta["content"] if date_meta else ""
if not date_pub:
    time_tag = soup.find("time")
    if time_tag and time_tag.get("datetime"):
        date_pub = time_tag["datetime"]
print("Date:", date_pub)

# Get description
og_desc = soup.find("meta", property="og:description")
desc = og_desc["content"] if og_desc else ""
print("Description:", desc)

# Extract content blocks
content_container = soup.find("div", attrs={"data-test-id": "article-content-blocks"})
md_lines = []

if content_container:
    blocks = content_container.find_all("div", class_="article-main__content")
    print("Found content blocks:", len(blocks))
    for b in blocks:
        # Check if it has headings
        h2 = b.find("h2")
        h3 = b.find("h3")
        p = b.find("p")
        ul = b.find("ul")
        ol = b.find("ol")
        blockquote = b.find("blockquote")
        
        if h2:
            text = h2.get_text(strip=True)
            if "Recommended by LinkedIn" not in text:
                md_lines.append(f"\n### {text}\n")
        elif h3:
            text = h3.get_text(strip=True)
            if "Recommended by LinkedIn" not in text:
                md_lines.append(f"\n### {text}\n")
        elif blockquote:
            text = blockquote.get_text(strip=True)
            md_lines.append(f"\n> {text}\n")
        elif ul:
            for li in ul.find_all("li"):
                md_lines.append(f"- {li.get_text(strip=True)}")
            md_lines.append("")
        elif ol:
            for i, li in enumerate(ol.find_all("li"), 1):
                md_lines.append(f"{i}. {li.get_text(strip=True)}")
            md_lines.append("")
        elif p:
            text = p.get_text(strip=True)
            if text:
                md_lines.append(f"{text}\n")

article_text = "\n".join(md_lines)
print("Extracted article length:", len(article_text))
print("\n--- SAMPLE PREVIEW ---")
print(article_text[:1200])
print("\n--- SAMPLE END ---")
print(article_text[-600:])
