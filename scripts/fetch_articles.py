import urllib.request
import json
import re

urls = [
    ("companies-dont-get-better-deciding-older", "https://www.linkedin.com/pulse/companies-dont-get-better-deciding-older-soma-kiran-gonella-gobce"),
    ("who-approved", "https://www.linkedin.com/pulse/who-approved-soma-kiran-gonella-m7twe"),
    ("half-lifecycle", "https://www.linkedin.com/pulse/half-lifecycle-soma-kiran-gonella-zwmzf"),
    ("every-yes-decision", "https://www.linkedin.com/pulse/every-yes-decision-soma-kiran-gonella-dzvqf"),
    ("building-never-designed-remember", "https://www.linkedin.com/pulse/building-never-designed-remember-soma-kiran-gonella-xugbf"),
    ("seventh-hat", "https://www.linkedin.com/pulse/seventh-hat-soma-kiran-gonella-knmaf"),
    ("decision-debt", "https://www.linkedin.com/pulse/decision-debt-soma-kiran-gonella-21fqf"),
    ("step-framework-classification", "https://www.linkedin.com/pulse/step-how-decisions-gets-classified-before-got-recorded-gonella-s66mf"),
    ("organizational-inheritance", "https://www.linkedin.com/pulse/organizational-inheritance-practices-nobody-can-explain-gonella-6ispf"),
    ("knowledge-archaeology-problem", "https://www.linkedin.com/pulse/organizational-knowledge-archaeology-problem-soma-kiran-gonella-losjf"),
    ("when-decisions-compound", "https://www.linkedin.com/pulse/organizational-intelligence-when-decisions-compound-gonella-hagvf"),
    ("what-fighter-pilot-knows", "https://www.linkedin.com/pulse/what-fighter-pilot-knows-most-organisations-do-soma-kiran-gonella-bj8if")
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

results = []

for slug, url in urls:
    print(f"Fetching: {slug}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            title = ""
            body = ""
            desc = ""
            date_published = ""
            
            # Check JSON-LD
            json_lds = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
            for j in json_lds:
                try:
                    data = json.loads(j)
                    items = [data]
                    if '@graph' in data:
                        items = data['@graph']
                    for item in items:
                        if item.get('@type') in ['Article', 'BlogPosting', 'NewsArticle']:
                            title = item.get('headline', '')
                            body = item.get('articleBody', '')
                            desc = item.get('description', '')
                            date_published = item.get('datePublished', '')
                except:
                    pass
            
            if not title:
                m_title = re.search(r'<title>(.*?)</title>', html)
                if m_title:
                    title = m_title.group(1).replace(' | LinkedIn', '').strip()
            
            if not desc:
                m_desc = re.search(r'<meta name="description" content="(.*?)"', html)
                if m_desc:
                    desc = m_desc.group(1).strip()
            
            print(f"  -> Title: {title}")
            print(f"  -> Body length: {len(body)}")
            print(f"  -> Date: {date_published}")
            
            results.append({
                "slug": slug,
                "url": url,
                "title": title,
                "description": desc,
                "body": body,
                "date": date_published
            })
    except Exception as e:
        print(f"  -> Error: {e}")

with open("fetched_articles.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("Finished fetching. Total articles:", len(results))
