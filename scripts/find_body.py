with open("sample_page.html", "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for case studies in the body (after </head>)
body_start = html.find('<body')
idx2 = html.find('The best business schools', body_start)
print("Position in body:", idx2)
if idx2 != -1:
    print("Found in body! Snippet:\n", html[idx2-200:idx2+1500])
else:
    print("Not in body directly. Let's see what's in body...")
    # Find all h1, h2, h3, or p tags
    import re
    h1s = re.findall(r'<h1[^>]*>.*?</h1>', html, re.DOTALL)
    print("H1s in doc:", h1s)
    # Check if there is a main tag
    m_main = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL)
    if m_main:
        print("Main length:", len(m_main.group(1)))
        print("Main snippet:\n", m_main.group(1)[:1000])
