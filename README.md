# Soma Kiran Gonella · Thought Leadership & Decision Intelligence Platform

A personal brand, thought-leadership, and decision intelligence digital home for **Soma Kiran Gonella**:
> **HR Business Partner | Author | Decision Management Thinker | Builder of SigmaGo**  
> **Primary Intellectual Territory:** *Organizational Decision Intelligence*  
> **Thesis:** *"Companies have systems to remember money, customers, employees, projects, and transactions, but very few systems designed to preserve the reasoning behind important decisions."*

---

## 🏛 Visual Identity & Architecture
- **Aesthetic:** Editorial-meets-technology (*Harvard Business Review*, *Stripe Press*, *Linear*, *Notion*). Warm off-white surfaces (`#FAF9F6`), deep midnight charcoal/navy (`#070B14`, `#0F172A`), restrained intellectual blue accent (`#1D4ED8`), and editorial serif typography.
- **Routing:**
  - `/` — Editorial Hero, Problem Statement, 3 Dimensions (Think, Write, Build), The Book feature, SigmaGo feature, Frameworks preview, Writing highlights, 11+ years experience credibility, and contact callouts.
  - `/thinking` & `/thinking/[slug]` — 8 in-depth framework dossiers: *The 4R Framework*, *The STEP Framework*, *Choice vs Decision*, *Exception to Precedent*, *Decision Debt*, *Policy Drift*, *Institutional Judgment*, and *AI & Decision Intelligence*.
  - `/book` — Dedicated showcase for *The Other Book: Why every company keeps every rupee and loses every decision*. Includes the 4R framework system, chapter inquiries, preview excerpts, and publishing integrations.
  - `/sigmago` — Product architecture showcase for *SigmaGo: Decision Intelligence for Organizations*, including STEP decision hierarchy, decision telemetry (Impact, Deviation, Confidence factors, Policy Health), and pilot briefing flow.
  - `/writing` & `/writing/[slug]` — Publication-style editorial engine featuring long-form essays, category filters, reading progress bar, social sharing, and related insights.
  - `/experience` — Narrative career journey across 11+ years in tech, fintech (Zeta), and automotive R&D (Hyundai Mobis), accompanied by the 6 core operational observations that gave rise to decision intelligence.
  - `/about` — Biography exploring the 3 interconnected pillars: *Practice*, *Research & Writing*, and *Building*, alongside authentic portraiture.
  - `/contact` — Direct clickable email (`soma.kiran20@gmail.com`), phone (`+91 93815 48500`), LinkedIn profile, and an anti-spam protected contact form.
  - `/book-a-conversation` — Dedicated Google Calendar appointment scheduler with 4 tiers (General 30m, SigmaGo 45m, Book/Publishing 30m, Research 45m).
  - `/sitemap.xml` & `/robots.txt` — Dynamic SEO generators and Schema.org JSON-LD.

---

## 🚀 Running Locally

```bash
# 1. Navigate to the project directory
cd C:\Users\HP\.gemini\antigravity-ide\scratch\soma-thought-leadership

# 2. Run local development server
npm run dev

# The site is accessible at http://localhost:3000
```

---

## 📅 Configuring Google Calendar Appointment Scheduling

1. Go to [Google Calendar](https://calendar.google.com) with account `soma.kiran20@gmail.com`.
2. Click **Create (+)** → **Appointment schedule**.
3. Set your title, available durations (e.g. 30 min or 45 min), and booking window.
4. Once created, click **Share** and copy your public booking page link (e.g. `https://calendar.google.com/calendar/u/0/appointments/schedules/...`).
5. Open `.env.local` and paste your link:
   ```env
   NEXT_PUBLIC_GOOGLE_BOOKING_URL=https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_CODE_HERE
   ```
6. The `/book-a-conversation` page will immediately route visitors to your personal Google Appointment schedule without exposing any private calendar entries.

---

## 🌐 Deploying to Production (Vercel / Netlify / Custom Domain)

### Deploying via Vercel:
```bash
# Using Vercel CLI:
npx vercel
```
Or connect the repository on [vercel.com](https://vercel.com) and set the environment variable:
- `NEXT_PUBLIC_GOOGLE_BOOKING_URL` = your Google Calendar booking link
- `NEXT_PUBLIC_SITE_URL` = your custom domain (e.g. `https://somakirangonella.com`)

---

© Soma Kiran Gonella. All rights reserved.
