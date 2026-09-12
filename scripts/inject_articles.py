import json
import re

# Load the 12 extracted articles
with open("scripts/all_extracted_articles.json", "r", encoding="utf-8") as f:
    new_articles = json.load(f)

# Read content.ts
with open("src/lib/content.ts", "r", encoding="utf-8") as f:
    content_ts = f.read()

# Let's extract before-ledger-decisions-companies-forget from content_ts
# Find where ARTICLES starts
start_idx = content_ts.find("export const ARTICLES: Article[] = [")
end_idx = content_ts.find("export const TIMELINE: TimelineMilestone[] = [")

# Extract existing before-ledger object
existing_block = content_ts[start_idx:end_idx]

# Let's parse all articles in Python
all_articles_list = []

# First, extract before-ledger
m_first = re.search(r'\{\s*slug:\s*[\'"]before-ledger-decisions-companies-forget[\'"].*?content:\s*`(?P<content>.*?)`\s*\}', existing_block, re.DOTALL)
if m_first:
    first_article = {
        "slug": "before-ledger-decisions-companies-forget",
        "title": "Before the Ledger — The Decisions Companies Forget",
        "subtitle": "Why a company is the sum of its decisions, and why decisions are the one asset we never keep",
        "abstract": "Strip a company down and you don't find products, or capital, or even people. You find a long chain of decisions. Money has the ledger. Code has version control. People and inventory have the HRMS and ERP. Why do decisions get an inbox?",
        "category": "Decision Making",
        "date": "2026-07-22",
        "readTime": "5 min read",
        "featured": True,
        "externalUrl": "https://www.linkedin.com/pulse/before-ledger-decisions-companies-forget-soma-kiran-gonella-0xw3e",
        "source": "LinkedIn Pulse",
        "author": {
            "name": "Soma Kiran Gonella",
            "role": "HR Business Partner · Author · Builder of SigmaGo"
        },
        "tags": ["Decision Intelligence", "Organizational Memory", "The 4R Framework", "Institutional Memory", "Decision Debt"],
        "content": m_first.group("content")
    }
    all_articles_list.append(first_article)

# Append the 12 new articles
all_articles_list.extend(new_articles)

print("Total articles to write:", len(all_articles_list))

# Format as TypeScript code
ts_articles = ["export const ARTICLES: Article[] = ["]
for a in all_articles_list:
    # escape backticks in content
    clean_c = a["content"].replace("`", "\\`").replace("${", "\\${")
    clean_title = a["title"].replace("'", "\\'")
    clean_abstract = a["abstract"].replace("'", "\\'").replace("\n", " ")
    tags_repr = json.dumps(a["tags"])
    
    art_ts = f"""  {{
    slug: '{a["slug"]}',
    title: '{clean_title}',
    abstract: '{clean_abstract}',
    category: '{a["category"]}',
    date: '{a["date"]}',
    readTime: '{a["readTime"]}',
    featured: True,
    externalUrl: '{a["externalUrl"]}',
    source: '{a["source"]}',
    author: {{
      name: '{a["author"]["name"]}',
      role: '{a["author"]["role"]}'
    }},
    tags: {tags_repr},
    content: `
{clean_c.strip()}
    `
  }}""".replace("featured: True", "featured: true")
    ts_articles.append(art_ts + ",")

ts_articles[-1] = ts_articles[-1].rstrip(",") # remove trailing comma on last item
ts_articles.append("];\n\n")

new_articles_code = "\n".join(ts_articles)

# Replace in content_ts
new_content_ts = content_ts[:start_idx] + new_articles_code + content_ts[end_idx:]

with open("src/lib/content.ts", "w", encoding="utf-8") as f:
    f.write(new_content_ts)

print("Successfully updated src/lib/content.ts with all 13 articles!")
