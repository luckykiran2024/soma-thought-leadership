import urllib.request
import re
import html
import json
import time

urls = [
    {
        "slug": "companies-dont-get-better-deciding-older",
        "url": "https://www.linkedin.com/pulse/companies-dont-get-better-deciding-older-soma-kiran-gonella-gobce",
        "category": "Decision Making",
        "default_date": "2026-07-23",
        "tags": ["Decision Making", "Case Studies", "Decision Context", "Organizational Learning"]
    },
    {
        "slug": "who-approved",
        "url": "https://www.linkedin.com/pulse/who-approved-soma-kiran-gonella-m7twe",
        "category": "Organizations",
        "default_date": "2026-07-24",
        "tags": ["Approvals", "Governance", "Promotions", "Decision Accountability"]
    },
    {
        "slug": "half-lifecycle",
        "url": "https://www.linkedin.com/pulse/half-lifecycle-soma-kiran-gonella-zwmzf",
        "category": "Decision Making",
        "default_date": "2026-07-25",
        "tags": ["Decision Lifecycle", "Decision Debt", "Organizational Memory", "4R Framework"]
    },
    {
        "slug": "every-yes-decision",
        "url": "https://www.linkedin.com/pulse/every-yes-decision-soma-kiran-gonella-dzvqf",
        "category": "Decision Making",
        "default_date": "2026-08-03",
        "tags": ["Corporate Approvals", "Reasoning", "Exceptions", "Decision Culture"]
    },
    {
        "slug": "building-never-designed-remember",
        "url": "https://www.linkedin.com/pulse/building-never-designed-remember-soma-kiran-gonella-xugbf",
        "category": "Organizations",
        "default_date": "2026-08-04",
        "tags": ["Organizational Architecture", "Institutional Memory", "Systems Thinking"]
    },
    {
        "slug": "seventh-hat",
        "url": "https://www.linkedin.com/pulse/seventh-hat-soma-kiran-gonella-knmaf",
        "category": "Leadership",
        "default_date": "2026-08-05",
        "tags": ["Leadership", "Thinking Hats", "Accountability", "Decision Record"]
    },
    {
        "slug": "decision-debt",
        "url": "https://www.linkedin.com/pulse/decision-debt-soma-kiran-gonella-21fqf",
        "category": "Organizations",
        "default_date": "2026-08-06",
        "tags": ["Decision Debt", "Technical Debt", "Governance", "Compounding Liability"]
    },
    {
        "slug": "step-framework-classification",
        "url": "https://www.linkedin.com/pulse/step-how-decisions-gets-classified-before-got-recorded-gonella-s66mf",
        "category": "Decision Making",
        "default_date": "2026-08-07",
        "tags": ["STEP Framework", "Decision Classification", "Structural Decisions", "SigmaGo"]
    },
    {
        "slug": "organizational-inheritance",
        "url": "https://www.linkedin.com/pulse/organizational-inheritance-practices-nobody-can-explain-gonella-6ispf",
        "category": "Organizations",
        "default_date": "2026-08-10",
        "tags": ["Organizational Inheritance", "Policy Drift", "Culture", "Institutional Habits"]
    },
    {
        "slug": "knowledge-archaeology-problem",
        "url": "https://www.linkedin.com/pulse/organizational-knowledge-archaeology-problem-soma-kiran-gonella-losjf",
        "category": "Technology",
        "default_date": "2026-08-25",
        "tags": ["Knowledge Archaeology", "Institutional Cortex", "Information Retrieval"]
    },
    {
        "slug": "when-decisions-compound",
        "url": "https://www.linkedin.com/pulse/organizational-intelligence-when-decisions-compound-gonella-hagvf",
        "category": "Decision Making",
        "default_date": "2026-08-27",
        "tags": ["Decision Compounding", "Organizational Intelligence", "Institutional Judgment"]
    },
    {
        "slug": "what-fighter-pilot-knows",
        "url": "https://www.linkedin.com/pulse/what-fighter-pilot-knows-most-organisations-do-soma-kiran-gonella-bj8if",
        "category": "Leadership",
        "default_date": "2026-09-09",
        "tags": ["High-Stakes Decisions", "Fighter Pilot Debriefs", "Post-Decision Audits", "Execution"]
    }
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

articles_extracted = []

for item in urls:
    slug = item["slug"]
    url = item["url"]
    print(f"Fetching {slug}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            raw_html = resp.read().decode('utf-8', errors='ignore')
        
        # Title
        m_title = re.search(r'<meta\s+property="og:title"\s+content="(.*?)"', raw_html)
        title = html.unescape(m_title.group(1)).strip() if m_title else ""
        if not title or title == "LinkedIn":
            m_t2 = re.search(r'<title>(.*?)</title>', raw_html)
            if m_t2:
                title = html.unescape(m_t2.group(1)).replace(" | LinkedIn", "").strip()

        # Date
        m_date = re.search(r'datetime="(202[0-9]-[0-9]{2}-[0-9]{2})', raw_html)
        date_str = m_date.group(1) if m_date else item["default_date"]

        # Description
        m_desc = re.search(r'<meta\s+name="description"\s+content="(.*?)"', raw_html)
        desc = html.unescape(m_desc.group(1)).strip() if m_desc else ""

        # Content blocks
        blocks = re.findall(r'<div class="article-main__content"[^>]*>(.*?)</div>', raw_html, re.DOTALL)
        
        clean_paragraphs = []
        for b in blocks:
            # Check heading
            m_h = re.search(r'<h[23][^>]*>(.*?)</h[23]>', b, re.DOTALL)
            if m_h:
                h_text = re.sub(r'<[^>]+>', '', m_h.group(1)).strip()
                h_text = html.unescape(h_text)
                if "Recommended by LinkedIn" not in h_text:
                    clean_paragraphs.append(f"\n### {h_text}\n")
                continue

            # Check list items
            m_lis = re.findall(r'<li[^>]*>(.*?)</li>', b, re.DOTALL)
            if m_lis:
                for li in m_lis:
                    li_text = re.sub(r'<[^>]+>', '', li).strip()
                    li_text = html.unescape(li_text)
                    clean_paragraphs.append(f"- {li_text}")
                clean_paragraphs.append("")
                continue

            # Paragraph text
            text = re.sub(r'<[^>]+>', '', b).strip()
            text = html.unescape(text)
            if text and "Recommended by LinkedIn" not in text:
                clean_paragraphs.append(text)

        full_content = "\n\n".join(clean_paragraphs)
        
        # Calculate reading time (~200 wpm)
        words = len(full_content.split())
        read_time = f"{max(3, round(words / 200))} min read"

        # Abstract fallback
        abstract = desc if desc else (clean_paragraphs[0] if clean_paragraphs else "")
        if len(abstract) > 300:
            abstract = abstract[:297] + "..."

        print(f"  -> Title: {title}")
        print(f"  -> Word count: {words}, Read time: {read_time}")
        print(f"  -> Content length: {len(full_content)}")

        articles_extracted.append({
            "slug": slug,
            "title": title,
            "abstract": abstract,
            "category": item["category"],
            "date": date_str,
            "readTime": read_time,
            "featured": True,
            "externalUrl": url,
            "source": "LinkedIn Pulse",
            "author": {
                "name": "Soma Kiran Gonella",
                "role": "HR Business Partner · Author · Builder of SigmaGo"
            },
            "tags": item["tags"],
            "content": full_content
        })
        time.sleep(0.5)
    except Exception as e:
        print(f"  -> Error: {e}")

with open("scripts/all_extracted_articles.json", "w", encoding="utf-8") as f:
    json.dump(articles_extracted, f, indent=2, ensure_ascii=False)

print("\nSuccessfully extracted", len(articles_extracted), "articles!")
