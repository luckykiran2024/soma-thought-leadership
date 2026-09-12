import { Article, Framework, TimelineMilestone, Observation, AppointmentType } from './types';

export const FRAMEWORKS: Framework[] = [
  {
    slug: 'four-r-framework',
    title: 'The 4R Framework: Record, Retrieve, Rely, Reuse',
    shortTitle: 'The 4R Framework',
    tagline: 'A cyclical architecture for institutional decision memory',
    category: 'Organizational Memory',
    proposition: 'Organizations cannot learn from past decisions if their only trace is the final transaction. A true decision memory system requires four continuous disciplines: Record, Retrieve, Rely, and Reuse.',
    explanation: `For decades, enterprise software has focused on transactional recordkeeping: who submitted an invoice, when a ticket closed, what time an employee logged in. But when an executive asks *why* an exception was granted to a critical vendor contract two years ago, the enterprise is silent.

The 4R Framework transforms transient judgment into an enduring organizational asset:

1. **Record**: Capture not merely the binary outcome (Approved/Rejected), but the underlying hypothesis, trade-offs weighed, exceptions granted, stakeholders consulted, and explicit constraints at the moment of deciding.
2. **Retrieve**: Make historical decision context indexable and discoverable in real-time within the operational workflow, rather than buried in archived email threads or departure memos.
3. **Rely**: Establish calibrated confidence in historical reasoning by evaluating whether past assumptions held true and what outcomes actually materialized.
4. **Reuse**: Apply verified precedent to new, similar challenges—preventing leaders from perpetually reinventing solutions to problems already solved.`,
    diagramType: 'four-r',
    practicalExample: {
      context: 'A fast-growing engineering division must approve a 35% salary deviation for a critical AI engineering specialist.',
      conventionalApproach: 'The hiring manager emails the VP of People; after private back-and-forth, an off-band approval is granted. Two quarters later, another hiring manager requests a similar deviation for another role, and the entire debate restarts from scratch.',
      decisionIntelligenceApproach: 'The approval is captured with explicit reasoning: market scarcity factor, key dependencies on Project Phoenix, and an agreement to review equity at 12 months. The precedent is categorized under "High-Impact Technical Exception".',
      outcome: 'Future hiring managers immediately see the historical boundary, why it was granted, and the criteria required to reuse that rationale without political friction.'
    },
    relationshipToSigmaGo: 'The 4R Framework forms the operational backbone of SigmaGo. The platform provides the system of record for rationale, automated retrieval during live workflows, confidence scoring to rely upon, and structured precedent engines for reuse.',
    relatedSlugs: ['step-framework', 'exception-to-precedent', 'decision-debt']
  },
  {
    slug: 'step-framework',
    title: 'The STEP Framework: Structural, Transactional, Exceptional, and Process',
    shortTitle: 'The STEP Framework',
    tagline: 'A taxonomy of organizational decisions and their interrelationships',
    category: 'Decision Architecture',
    proposition: 'Not all decisions are created equal. Organizations break down when they treat structural boundaries as transactional choices, or allow exceptional decisions to alter policy without governance.',
    explanation: `Organizations are constantly flooded with choices. Without a shared taxonomy, teams apply the same ad-hoc committee meetings to routine transactional questions as they do to irrevocable structural changes.

The STEP Framework categorizes every organizational decision into one of four interconnected layers:

- **Structural Decisions**: Foundational decisions that set boundaries, risk tolerances, core values, and governance architecture. These are slow-moving, high-stakes, and deliberate.
- **Process Decisions**: Rules, workflows, approval hierarchies, and playbooks that determine how structural boundaries operate day-to-day.
- **Transactional Decisions**: High-frequency operational applications of process rules (e.g., standard expense approvals, routine requisitions, standard customer refunds).
- **Exceptional Decisions**: Deliberate or forced deviations where circumstances warrant stepping outside the standard process. Exceptional decisions are the most consequential because they test the boundaries of the organization.

When an exceptional decision is made repeatedly without being recognized, it quietly creates shadow policy. SigmaGo tracks the interplay across these four layers.`,
    diagramType: 'step',
    practicalExample: {
      context: 'A company policy mandates that all customer contracts must use standard billing terms (Net 30).',
      conventionalApproach: 'Sales leadership routinely approves Net 60 terms for large enterprise prospects as "urgent exceptions." No one tracks the aggregate frequency, leading to unexpected cash-flow compression and friction with Finance.',
      decisionIntelligenceApproach: 'Every Net 60 exception is logged in the Exceptional layer connected to the Process layer. When exception frequency exceeds 18% of deals, an alert flags that the process rule is decoupled from market reality.',
      outcome: 'Leadership deliberately updates the Structural and Process policies to offer tiered terms, eliminating manual exception bottlenecks.'
    },
    relationshipToSigmaGo: 'SigmaGo uses the STEP taxonomy to map organizational graphs. It measures the Deviation Factor when Exceptional decisions collide with Process boundaries and calculates Policy Health over time.',
    relatedSlugs: ['four-r-framework', 'policy-drift', 'choice-vs-decision']
  },
  {
    slug: 'choice-vs-decision',
    title: 'Choice vs. Decision: Moving Beyond Intuition in Executive Governance',
    shortTitle: 'Choice vs Decision',
    tagline: 'Why picking an option is not the same as governing a decision',
    category: 'Decision Management',
    proposition: 'A choice is simply selecting among available options. A decision is a structured commitment of institutional resources with articulated assumptions, trade-offs, and accountable consequences.',
    explanation: `In daily workplace vernacular, "making a choice" and "making a decision" are treated as synonyms. This semantic confusion is expensive.

When a team makes a *choice*, they pick Option B over Option A, usually driven by immediate pressure, intuition, or loudest-voice consensus. When the initiative succeeds or fails months later, no one can isolate why: was the thesis sound, or were they merely lucky?

A true *decision* requires:
- **Articulated Problem Frame**: What exact trade-off are we accepting?
- **Explicit Assumptions**: What must be true for this path to succeed?
- **Rejected Alternatives**: Why were the competing alternatives discarded?
- **Review Triggers**: At what threshold or date must this commitment be reassessed?

By transforming choices into decisions, leaders convert ephemeral opinion into institutional knowledge.`,
    diagramType: 'comparison',
    practicalExample: {
      context: 'A product leadership team chooses to delay a major security refactor to hit an end-of-quarter marketing release.',
      conventionalApproach: 'The team makes a fast choice in a Slack thread. Nine months later, a minor outage sparks finger-pointing because no one remembers who prioritized the feature over stability.',
      decisionIntelligenceApproach: 'The choice is recorded as a formal trade-off decision: "Accepting temporary technical debt to capture Q3 event pipeline; review trigger set for Nov 1 with mandatory security sprint."',
      outcome: 'Accountability is clear, the review trigger executes on schedule, and the engineering team is protected from retroactive blame.'
    },
    relationshipToSigmaGo: 'SigmaGo enforces the distinction between passive choices and governed decisions by prompting decision architects for key assumptions, review conditions, and trade-off rationales.',
    relatedSlugs: ['decision-debt', 'step-framework']
  },
  {
    slug: 'exception-to-precedent',
    title: 'Exception to Precedent: The Silent Architecture of Corporate Policy',
    shortTitle: 'Exception to Precedent',
    tagline: 'How unrecorded exceptions harden into invisible corporate reality',
    category: 'Policy Intelligence',
    proposition: 'Corporate culture is not dictated by what is written in the employee handbook or policy manual. It is defined by which exceptions are granted, to whom, and why.',
    explanation: `Every organization possesses two rulebooks: the formal written policy and the informal unwritten reality of exceptions.

When an executive grants an exception—whether approving non-standard remote work, bypassing an IT security protocol for a high-priority customer, or altering commission splits—they believe they are solving an isolated problem.

In reality, in human systems, **every granted exception is a proto-precedent**. Employees observe what was permitted. Other managers cite it. Within six months, the exception has become standard practice, but without the structural safety checks or financial provisioning of real policy.

When exceptions remain invisible:
- **Fairness degrades**: Access to exceptions depends on political capital rather than objective criteria.
- **Audit readiness collapses**: Compliance teams discover deviations only after regulatory friction occurs.
- **Policy drifts**: The gap between written rules and actual operations widens until governance is purely ceremonial.`,
    diagramType: 'flow',
    practicalExample: {
      context: 'A regional sales director allows an exception for a client to bypass a standard data processing addendum.',
      conventionalApproach: 'The exception is hidden in an email confirmation. Other account executives cite the deal as proof that "we don\'t strictly require that addendum for enterprise clients."',
      decisionIntelligenceApproach: 'The exception is registered with explicit rationale, duration, and compensating security controls. It is classified as an "Isolated Non-Precedent Exception" with a strict expiration.',
      outcome: 'The organization prevents unvetted shadow precedents from compromising corporate cybersecurity posture.'
    },
    relationshipToSigmaGo: 'SigmaGo monitors the velocity at which exceptions are granted across business units, preventing shadow precedents by prompting whether an exception should trigger a policy evolution or remain strictly isolated.',
    relatedSlugs: ['policy-drift', 'step-framework', 'four-r-framework']
  },
  {
    slug: 'decision-debt',
    title: 'Decision Debt: Quantifying the Hidden Cost of Unreasoned Trade-offs',
    shortTitle: 'Decision Debt',
    tagline: 'The compounding liability of decisions made without recorded rationale',
    category: 'Organizational Health',
    proposition: 'Just as software engineers incur technical debt when writing quick, messy code, leadership teams incur decision debt every time they approve a policy, pivot, or exception without documenting the reasoning.',
    explanation: `Technical debt is well understood: shortcuts taken today require expensive refactoring tomorrow. 

**Decision Debt** is even more pernicious because it accrues in human memory:
- When the original decision-makers leave the company, their reasoning leaves with them.
- New leaders arrive and see constraints they do not understand, resulting in either paralysis ("don't touch the fence") or reckless repeal of safeguards whose origins were forgotten (Chesterton’s Fence).
- Teams spend 30% to 40% of executive meeting hours re-litigating questions that were already resolved two quarters prior.

Interest on decision debt is paid in lost velocity, repetitive stakeholder alignment cycles, and institutional disorientation.`,
    diagramType: 'matrix',
    practicalExample: {
      context: 'A scaling fintech company undergoes leadership turnover in its People & Organization department.',
      conventionalApproach: 'The new VP inherits an intricate web of bespoke compensation allowances and retention bonuses with zero documented rationale, spending six months conducting forensic interviews to decipher past logic.',
      decisionIntelligenceApproach: 'Every non-standard compensation package has a linked decision record detailing the historical competitive counter-offer, role scarcity index, and lock-in milestones.',
      outcome: 'The incoming leadership transitions smoothly in days rather than months, honoring valid past commitments while eliminating obsolete legacy concessions.'
    },
    relationshipToSigmaGo: 'SigmaGo provides a Decision Debt meter for organizations, calculating the percentage of live policies and workflows that lack documented rationales and review triggers.',
    relatedSlugs: ['choice-vs-decision', 'four-r-framework', 'institutional-judgment']
  },
  {
    slug: 'policy-drift',
    title: 'Policy Drift: Why Everyday Work Bypasses Corporate Governance',
    shortTitle: 'Policy Drift',
    tagline: 'When operational reality divorces from written intent',
    category: 'Policy Intelligence',
    proposition: 'Policies do not fail because people are disobedient. They fail because static documentation cannot keep pace with dynamic operational reality.',
    explanation: `Most corporate policies are authored during moments of crisis, uploaded to an intranet portal or Confluence page, and promptly forgotten.

Meanwhile, market conditions shift, customer expectations evolve, and frontline teams encounter novel situations every week. To get their jobs done, employees invent workarounds. Over time, the workaround becomes the standard operating procedure.

This divergence is **Policy Drift**:
1. The written policy states one thing.
2. Actual practice operates entirely differently.
3. Leadership erroneously believes the written policy is providing governance and compliance.

True governance requires living policies that listen to exception telemetry and adapt dynamically before a catastrophic failure occurs.`,
    diagramType: 'flow',
    practicalExample: {
      context: 'A corporate travel policy requires written VP pre-approval for any domestic travel booked within 14 days of departure.',
      conventionalApproach: 'Project teams regularly book last-minute travel for urgent client deployments without VP sign-off, and expense auditors quietly rubber-stamp them to avoid delaying projects.',
      decisionIntelligenceApproach: 'SigmaGo flags a 72% exception rate on client-facing domestic flights within the 14-day window over three consecutive quarters.',
      outcome: 'Leadership recognizes the policy is disconnected from client-delivery realities and updates the policy to automatically approve billable client travel while keeping the restriction for internal travel.'
    },
    relationshipToSigmaGo: 'SigmaGo measures "Policy Health" by continuously correlating policy definitions against live exception and approval streams, identifying drifted policies for proactive revision.',
    relatedSlugs: ['step-framework', 'exception-to-precedent', 'decision-debt']
  },
  {
    slug: 'institutional-judgment',
    title: 'Institutional Judgment & Organizational Continuity',
    shortTitle: 'Institutional Judgment',
    tagline: 'Preserving wisdom beyond employee tenure and executive turnover',
    category: 'Leadership & Systems',
    proposition: 'Companies invest heavily in talent acquisition but allow the most valuable output of senior talent—accumulated judgment—to evaporate upon employee resignation.',
    explanation: `When a senior leader departs an organization, HR calculates the replacement cost of recruiting, onboarding, and salary. What is rarely calculated is the catastrophic loss of institutional wisdom.

A seasoned leader knows:
- Which vendor negotiations carry hidden landmines.
- Which structural reorganizations failed four years ago and why.
- How complex client contracts were interpreted during past crises.
- Which team dynamics require delicate handling.

Without systematic decision intelligence, every departure resets the learning curve. New executives repeat past mistakes under the impression they are pioneering bold new strategies. Transforming individual expertise into institutional judgment is the ultimate frontier of sustainable competitive advantage.`,
    diagramType: 'comparison',
    practicalExample: {
      context: 'A global auto-component manufacturer faces the retirement of its veteran Head of Plant HR and Labor Relations.',
      conventionalApproach: 'A two-week handover meeting produces a 20-page Word document that captures contacts and open grievances, but loses 25 years of nuance regarding labor negotiations and local precedent.',
      decisionIntelligenceApproach: 'Key past arbitration outcomes, negotiated trade-offs, union precedents, and escalation histories have been recorded in an institutional decision repository over time.',
      outcome: 'The successor navigates subsequent union discussions with full awareness of historical agreements and boundaries, preserving labor harmony and credibility.'
    },
    relationshipToSigmaGo: 'SigmaGo acts as the permanent digital cortex for institutional memory, ensuring that judgment outlives individual employment tenures.',
    relatedSlugs: ['four-r-framework', 'decision-debt', 'ai-and-decision-intelligence']
  },
  {
    slug: 'ai-and-decision-intelligence',
    title: 'AI and Decision Intelligence: Turning Collective Judgment into Software',
    shortTitle: 'AI & Decision Intelligence',
    tagline: 'Moving beyond conversational chatbots to contextual organizational reasoning',
    category: 'Technology & AI',
    proposition: 'Generative AI in the enterprise has largely been deployed as a glorified search engine or drafting assistant. The true breakthrough occurs when AI has access to the graph of an organization\'s past decisions and rationale.',
    explanation: `Today\'s enterprise LLMs can summarize PDFs, draft emails, and write boilerplate code. But if you ask an AI model, *"Can we offer a 15% discount to this European client under our current risk exposure?"*, the model hallucinates or defaults to generic advice.

Why? Because the model has zero access to:
- What exceptions were allowed last quarter for similar European accounts.
- Who authorized them and what the cash-flow impact was.
- What our current risk policy mandates regarding foreign currency volatility.

**Decision Intelligence marries AI reasoning models with structured organizational memory.** When an AI understands the STEP framework, historical precedents, and policy boundaries of your specific enterprise, it evolves from a generic text generator into an ambient executive advisor.`,
    diagramType: 'matrix',
    practicalExample: {
      context: 'An executive committee considers a pivot into an adjacent B2B software market.',
      conventionalApproach: 'Leadership commissions a 60-page slide deck from an external consultant that analyzes macroeconomic trends but ignores the company\'s own historical capabilities and past product aborts.',
      decisionIntelligenceApproach: 'An enterprise Decision Intelligence engine synthesizes past internal decisions, failed product pilots from three years ago, current margin thresholds, and engineering capacity.',
      outcome: 'The committee receives a synthesized briefing highlighting exactly which past internal assumptions failed and how this proposal structurally mitigates those specific historical failures.'
    },
    relationshipToSigmaGo: 'SigmaGo combines graph-based decision models with proprietary telemetry (Impact Factor, Deviation Factor, Confidence Factor) to provide organizations with actionable, context-aware decision intelligence.',
    relatedSlugs: ['step-framework', 'four-r-framework', 'institutional-judgment']
  }
];

export const ARTICLES: Article[] = [
  {
    slug: 'before-ledger-decisions-companies-forget',
    title: 'Before the Ledger — The Decisions Companies Forget',
    abstract: 'Strip a company down and you don\'t find products, or capital, or even people. You find a long chain of decisions. Money has the ledger. Code has version control. People and inventory have the HRMS and ERP. Why do decisions get an inbox?',
    category: 'Decision Making',
    date: '2026-07-22',
    readTime: '5 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/before-ledger-decisions-companies-forget-soma-kiran-gonella-0xw3e',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Decision Intelligence", "Organizational Memory", "The 4R Framework", "Institutional Memory", "Decision Debt"],
    content: `
I've been quiet for a while. Not idle — quiet on purpose.

I stepped back to sit with a question that had been nagging me for years: what is the problem *underneath* the problems? In every company I've worked in or watched, the same handful of things go wrong — approvals chased for days, the reasoning behind a decision vanishing the moment the person who made it walks out the door. I stopped patching the symptoms and went looking for the disease.

Here's where it led.

### Start with the thing itself. What is a decision?

Strip a company down and you don't find products, or capital, or even people. You find a long chain of decisions. To hire this person. To fund that project. To switch this vendor. To bend that rule, just this once. The revenue, the strategy, the org chart — all of it is downstream of choices somebody made. A company quite literally is the sum of its decisions.

Which makes it strange that the decision is the one thing we never keep.

Look at everything else. Money has the ledger. Code has version control. People and stock have the HRMS and the ERP — counted, tracked, reconciled. And decisions, the thing that steers all of them, get an inbox. A WhatsApp thread. Someone's memory, which resigns in March.

### The gap I kept circling back to.

About a year ago I came across the idea of a decision lifecycle — the formal work on how organizations should make decisions. Weigh the options, check the trade-offs, choose, act. It's rich, it's rigorous, it's been studied for decades.

And then it just… stops. At "decision made."

That was the click. The lifecycle everyone teaches is only half a lifecycle. It maps the journey to the decision and says nothing about what happens after — and the after is where companies quietly bleed. Because a decision doesn't die when it's made. It gets leaned on, questioned, searched for, repeated. We built a century of theory for the first half and left the second half to inboxes and memory.

So I started building the other half.

### The RRRR way.

The way I see it now, every decision — once made — depends on four things. Break any one and the decision quietly turns into debt:

- **Record** — is it captured the moment it's made, reasoning intact, or does it evaporate into a thread?
- **Retrieve** — can you find it months later, without an archaeology dig through old email?
- **Rely** — when you find it, can you trust it? Is it provably the real decision, unaltered?
- **Reuse** — can you put it back to work — as precedent, as the basis for the next call — instead of deciding it all over again?

Record, Retrieve, Rely, Reuse. The second half of the lifecycle. That's where my research lives now.

### Why this matters — and not only for companies.

A company that holds all four gets smarter over time: every past decision compounds into a faster, better future one. A company that breaks them re-decides the same things forever, in the dark, and calls it work.

But here's what actually kept me up. We're all terrible at this individually too. Think of the decisions in your own life you can no longer explain — why you took the job, why you set the rule you now follow without remembering the reason. The choice survives. The why is gone. And a person who can't remember why they decided things can't learn from them. They just keep deciding, in the dark, feeling busy.

Five hundred years ago, money had this exact gap. Wealth existed, but there was no reliable record of it — so trust between strangers was almost impossible, until a friar in Venice wrote down double-entry bookkeeping in 1494. It didn't change how people earned money. It changed what they could do with the record of it. And that changed everything.

Decisions are where money was before the ledger.

That's the problem I've decided to spend my time on. I'll be sharing the research as it unfolds — the framework, what I'm finding, and what I'm building on top of it.
    `
  },
  {
    slug: 'companies-dont-get-better-deciding-older',
    title: 'Companies don\'t get better at deciding. They get older at it.',
    abstract: 'The best business schools in the world teach with case studies. It is a strange method when you look at it directly.',
    category: 'Decision Making',
    date: '2026-07-23',
    readTime: '6 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/companies-dont-get-better-deciding-older-soma-kiran-gonella-gobce',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Decision Making", "Case Studies", "Decision Context", "Organizational Learning"],
    content: `
The best business schools in the world teach with case studies. It is a strange method when you look at it directly. You do not give students the answer. You hand them a decision somebody actually faced, with the full situation around it, the constraints, the people, the pressure, and you make them reason their way to a call. Then you show them what really happened.

It works because a case study is a decision with all of its context preserved. That turns out to be rare enough to build an entire pedagogy around.

I wrote last time about decisions being the one thing companies never keep. What I have been chewing on since is a narrower version of that. Not what you lose when a decision disappears, but what the next decision loses. Because a case study is not only a record of something that happened. It is raw material for the person deciding now.

So I started pulling apart what actually goes into one, and it is the same set of things that goes into any good decision inside a company.


### What it takes to reach a real yes


When a company approves something that matters, a defensible yes draws on a few kinds of context, whether or not anybody names them out loud.

There is the business context. The numbers, the market, the strategic fit. What this does to margin, to the roadmap, to where you stand against the people you compete with.

There is the people context. Who is affected, who is asking, whose judgment you trust on this particular question, and who carries the risk if it turns out badly.

There is the situation context. The timing, the pressure, the alternatives sitting on the table, whatever makes this decision specific rather than generic.

Most companies can muster those three on a decent day. A capable manager holds all of it in their head and makes a call you could defend in a room.

But there is a fourth input, and it is the one that separates a case study from a guess.


### The pattern of what you already decided


A case study is never only the situation in front of you. It is that situation placed against the ones that came before it. How those were decided, on what reasoning, and how they actually turned out. That comparison is the whole point. Without it you are reading an anecdote.

Now look at how your own company decides. The business context is there. The people context is there. The situation is obviously there, sitting in the meeting invite. And where the pattern of prior decisions should be, there is nothing.

How did we handle the last five vendor switches. What did we say the last time somebody asked for this exact exception. What happened the three times we extended credit past ninety days. Those questions have answers. Real ones. They just are not anywhere you can reach.

So companies decide with three of the four inputs and a blank where the fourth belongs. Every case gets solved with the last page torn out, which is the page that says what happened last time.


### Why this is the expensive one


The first three inputs are recoverable. You can pull the numbers again. You can ask the people. You can assess the situation in front of you, because it is in front of you. All three cost effort and all three are available if you are willing to spend the effort.

The fourth is different. It cannot be reconstructed on demand, because it was never kept in the first place. Those earlier decisions lived in an inbox, a corridor conversation, a nod, someone's memory that has since taken a job elsewhere. The one input that would make today's decision genuinely wiser, which is the accumulated judgment of every similar call the company already worked through, is precisely the input that is missing. Not buried somewhere. Gone.

Which is how you end up with the thing I keep seeing. Companies do not get better at deciding. They get older at it.

A company ten years in has faced the same category of decision hundreds of times. It can draw on almost none of it, because it kept every outcome and threw away every reason. Each new manager starts more or less from zero, holds three inputs in their head, and makes a call that a hundred earlier calls should have informed and did not.

Picture a business school that made each incoming class work the same case, and forbade them from reading a single line of what the previous twenty years had written about it. Nobody would call that education. It is close to how most companies decide.


### The part that actually bothers me


There is a version of this that is worse than inefficiency.

When the reasoning behind past decisions is gone, a company cannot tell the difference between a decision that was good and a decision that was lucky. From the outside, once the reasoning has evaporated, those two look exactly the same. Both produced an outcome. Both are now a fact about the past.

So the company cannot learn. It can only remember results, which is not the same thing at all. It repeats what worked without knowing why it worked, which means it keeps repeating it after the conditions that made it work have quietly changed. And it avoids what failed without knowing why it failed, which means it avoids a whole category of perfectly good options for a reason nobody can articulate any more.

Experience is supposed to compound. What compounds is not the number of decisions you have made. It is the number you can still explain.


### Where this leaves me


A decision is not only something you record after the fact. It is an input into every decision that comes after it. The pattern of what you chose, and why, and what followed, is the fourth context. It is the thing that turns years of operating into actual judgment rather than accumulated age.

You can only use that input if somebody kept it.

Which lands me back in the same room I keep ending up in. Somebody asks not just what should we do here, but what did we do last time and why. And the room goes a bit quiet. And somebody reaches for a decision that ought to exist, and finds nothing there.

That silence is where I want to go next.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'who-approved',
    title: 'Who approved this?',
    abstract: 'A promotion round has just closed. Somebody good, who has been waiting two years for this, did not make it.',
    category: 'Organizations',
    date: '2026-07-24',
    readTime: '9 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/who-approved-soma-kiran-gonella-m7twe',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Approvals", "Governance", "Promotions", "Decision Accountability"],
    content: `
A promotion round has just closed. Somebody good, who has been waiting two years for this, did not make it. Their manager has to explain why, and the explanation is sitting right there in the framework, so she reads it out.

At this level we look for evidence of strategic influence, not only delivery.

The person listens to that and asks a perfectly reasonable question. Who decided that. Why is strategic influence the thing that separates a five from a four, and why does it outweigh two years of delivery that nobody is disputing.

And the manager, who is not being evasive and would answer if she could, realises she has no idea.

She says she will find out. She means it. This is the story of what she finds.


### The search


She starts with HR, which is the obvious place, and HR is helpful. They send her the framework document. It is a good document. Eleven competencies, five levels each, behavioural indicators for every cell, the whole thing laid out cleanly in a deck with the company's fonts on it.

What it does not contain, anywhere, is why. Not one line explaining what problem this framework was solving, what alternatives were considered, why eleven competencies rather than six, or why strategic influence sits where it sits.

The deck has a date on it. March 2019. It also has a file name that ends in v7, which she notices and finds slightly unsettling, because it means there were six earlier versions and every one of them presumably represented somebody changing their mind about something.

So she asks who put it together. The answer is a working group. She gets four names. One of them is now the CHRO, and two have left the company. The fourth is on the operations side and remembers being in some of the sessions but says, honestly, that HR ran it and he mostly nodded.

She goes to the CHRO, who is generous with her time and genuinely tries. And what the CHRO gives her is a memory, not a record. Something about wanting to reward people who think beyond their own function, because at the time the company was very siloed and there was a feeling that we were promoting good operators into roles that needed something else. She says she thinks there was a consultant involved early on. She is fairly sure the eleven competencies came from a model that was adapted rather than built from scratch, though she could not tell you which model.

Then she says the sentence that ends the search. That was six years ago, I would not want to swear to any of it.


### She does find a name, and it does not help


Here is the part that surprised me the first time I watched a version of this happen.

She does eventually get an answer to who. The framework was signed off by the CHRO of the time and the then chief executive, in a leadership meeting in April 2019. There is even a slide in an old deck confirming it. Approved.

And it changes nothing.

Because the moment she has the name, the question immediately becomes the next one. Approved on what basis. Was the weighting deliberate or inherited from whatever model it was adapted from. Was strategic influence meant to be a bar for everybody at that level, or a signal for a particular kind of role that has since stopped existing. Did anybody consider what it would do to people in delivery heavy functions, where the opportunity to demonstrate strategic influence is structurally lower.

Nobody asked who because they wanted a name. They asked who because who is the only part of a decision people assume must still be recoverable. It is the handle you reach for. What everybody actually wants is the reasoning, and asking for the reasoning directly feels like a challenge, whereas asking who approved it sounds procedural.

So the name arrives and the room is no better off, which is how you know the name was never the thing.


### Some decisions are load bearing


Most missing decisions affect one thing. A vendor was chosen. A discount was given. A clause went into a template. Losing the reasoning is annoying and the damage is bounded by whatever that one thing touches.

This is not that.

That framework has been running for six years. It has shaped every promotion decision in the company since 2019. It sits underneath every appraisal conversation, calibrates every hiring bar, and quietly determines who gets stretched and who gets parked. People plan their careers around it. Some of them leave over it. Thousands of individual judgments have been made on the authority of a document whose own authority nobody in the building can now explain.

That is a load bearing decision. Not one choice, but the foundation that other choices are made on top of, every week, by people who assume somebody once had a good reason.

And here is what makes it genuinely uncomfortable. The manager reading out that line about strategic influence is not being arbitrary. She is being exactly as consistent as the company asked her to be. She is enforcing a rule she cannot justify, in front of somebody whose career it affects, and she has no way out of that position because the alternative is to admit that the criteria are not anchored to anything, which is both true and unsayable.

Most organisations put hundreds of their managers in that position without ever noticing they have done it.


### Who pays for it


The cost of that one unrecoverable decision is spread across more people than you would expect.

The person who did not get promoted takes away something worse than a no. They learn that the criteria are not anchored, which means next year's answer will not be anchored either, which means there is no version of their own effort that reliably produces a different outcome. That is the point where good people stop trying to understand the system and start either gaming it or leaving it.

The manager now knows something about her own company that she cannot unknow, and has to keep applying the framework anyway. Nothing in her week changes. She just does the job with slightly less conviction, which is not a thing anybody measures.

The CHRO is in the strangest position of all. She was in the room in 2019. She was probably one of the people who argued for it. And she cannot reconstruct her own reasoning well enough to defend it six years later, which is not a failure of character, it is what happens to reasoning that was never written down next to the decision it produced.

Whoever inherits it next will treat the framework as a given, because by then it will be old enough to look like a fact about the company rather than a choice somebody made. That is how a decision becomes furniture.


### The same thing, everywhere else


Once you have seen it in a competency framework you start seeing it in places that look nothing alike.

The approval limit that lets a country head commit up to a certain figure and no further, where the number was set in a different currency environment by people nobody has worked with. The rule that this category of purchase needs three quotes and that one does not. The renewal invoice for two hundred software seats when about thirty people log in. The customer on the same discount for four years, where the volume commitment that justified it expired somewhere in year two. The indemnity clause in every contract you sign that costs a week of negotiation each time and traces back to one deal, one bad experience, one lawyer, in some year nobody can name.

All decisions. All still running. All generating consequences daily. And in every case the reasoning that made them sensible at the time, which is the only thing that could tell you whether they are still sensible now, is gone.


### It is not a records problem


I used to think of this as a documentation failure, which is a comfortable way to see it, because documentation failures have obvious remedies. Write it down. Keep a register. Be more disciplined about minutes.

I no longer think that is what it is.

That company had documentation. It had a framework deck at version seven, a leadership meeting slide confirming approval, six years of appraisal data, and a shared drive with more files in it than anybody could read in a career. Nothing was missing in the sense of being lost. The material was all there.

What was missing was the ability to walk up to one specific decision and pull it out whole, with the reasoning still attached, on the afternoon somebody asked. That is memory rather than paperwork. Organisational memory is not the sum of the files, it is whether the organisation can retrieve the right thing at the moment of need, and no amount of storage produces that on its own.

A company with immaculate documentation and no memory looks exactly like a company with none at all, from inside the conversation where somebody asks why.


### The measurement


I have come to think the few seconds before somebody says I will find out is the most honest measurement of this that exists.

You cannot argue with it. There is no dashboard, no assessment, no maturity score, nothing that can be presented in a way that takes the edge off. Somebody asked the company a question about itself, and the company could not answer.

If you want to know whether your organisation keeps its decisions, you do not need a framework for it. Wait for the next time somebody asks why a rule is the way it is, and watch what happens in the four seconds afterwards.

It will happen. Probably this month.

What I want to look at next is the bill for all of this. Not the moment of not knowing, which at least announces itself, but the cost that arrives quietly and continuously and never once shows up on anything anybody reviews.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'half-lifecycle',
    title: 'Half a lifecycle',
    abstract: 'I said last time I wanted to look at the bill. Not the moment somebody asks why a rule exists and the room goes quiet, which at least announces itself, but the cost underneath it, which arrives continuously and never appears on anything anybody reviews.',
    category: 'Decision Making',
    date: '2026-07-25',
    readTime: '5 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/half-lifecycle-soma-kiran-gonella-zwmzf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Decision Lifecycle", "Decision Debt", "Organizational Memory", "4R Framework"],
    content: `
I said last time I wanted to look at the bill. Not the moment somebody asks why a rule exists and the room goes quiet, which at least announces itself, but the cost underneath it, which arrives continuously and never appears on anything anybody reviews.

The bill has the shape it does because of something in the literature, so I have to start there. Briefly.


### Where the maps end


There is a serious body of work on decision making and most of it is good. Herbert Simon argued that an organisation is essentially a decision making system and gave us a structure for the act itself. Behavioural economics told us what goes wrong inside the decider. Engineering went furthest and formalised it into a standard, ISO 15288, which defines a decision management process as a structured way to identify and characterise and evaluate a set of alternatives and select the most beneficial course of action.

Read that definition again and notice that every verb in it happens before the decision exists.

That is the pattern across all of it. Between them these traditions have mapped how a choice should be structured, who should be involved, how uncertainty should be handled, and which biases distort it. Then the decision gets made, and the map ends.

There are exceptions and I should name them rather than pretend. After action reviews are a real discipline. Software teams run retrospectives. Some engineering groups keep architecture decision records, which is the closest thing I have found to a genuine second half practice, and which emerged from engineers getting burned rather than from any theory.

But those are optional, done by teams that happen to care, and connected to nothing. The first half is a discipline with standards and qualifications behind it. The second half is a few good local habits that stop when the person who championed them moves on.


### Why it stopped there


Two reasons, and neither is negligence.

Outcome quietly became the substitute for reasoning. If you can see whether a decision worked, you appear not to need why it was made. That substitution feels harmless and is not, because outcome and reasoning are different things, and the gap between them is exactly where learning would happen.

And the discipline that might have owned the second half already existed, filed under clerical. Records management, retention, archives. Real expertise, universally treated as a compliance function. Nobody connected the craft of keeping things to the craft of deciding things, because one sat with the lawyers and the other sat with the executives and they were never in the same conversation.


### The bill


The cost of an unmapped second half is not one number. If it were, somebody would have found it, and there would be a budget line and a person responsible.

It is invisible for a structural reason. It gets paid in small amounts by many people, none of whom can see the others paying.

Twenty minutes looking for a decision that was already made. An hour of a colleague's time helping look. A meeting where something settled last year gets reopened and settled slightly differently, because nobody in the room knew it had been settled. A manager applying a rule she cannot explain. A request deliberately made smaller than it needs to be, because a clear yes is not available and a smaller ask is a smaller thing to be exposed on later. Four months of a new joiner rebuilding an understanding that could have been handed over in an afternoon.

None of that has a cost code. Nobody submits a claim for it. It is absorbed into salaries that were being paid anyway, which is exactly why it can run for a decade without anybody objecting.

And it compounds. Every decision that goes unkept raises the cost of the next one slightly, because the next one has less to stand on. A company ten years into this is not carrying ten years of the same annual cost. It is carrying an increasingly thin foundation under an increasingly large number of decisions.


### The part that actually costs money


Here is what convinced me this matters more than it looks.

When the second half is missing, the symptoms never present as a decision problem. They present as something else, and companies spend real budget treating the something else.

Work stalls in odd places, so it gets read as a project management problem and somebody buys another tool. Two functions turn out to be working from different understandings of the same agreement, so it gets read as a communication problem and somebody runs a workshop. Good people leave saying nothing here makes sense, so it gets read as a culture problem and somebody commissions a survey. Execution keeps drifting from intent, so it gets read as an alignment problem and somebody reorganises.

Each of those remedies is expensive and each is aimed at a symptom. The condition underneath is that the organisation cannot reliably find, trust or reuse its own decisions, and no tool or workshop or reorganisation touches that. Which is why the same symptoms come back in eighteen months in slightly different clothes and get treated again.

The wasted minutes are the interest. The expensive part is a decade of solving the wrong problem while the actual condition compounds underneath.


### Where this leaves me


If your problem is how to structure a difficult choice, the literature will serve you well. A century of good work is available and you should use it.

If your problem is that the choice you made two years ago is now unrecoverable, there is nothing. Not because it matters less, but because it never looked like a research question and got filed somewhere nobody strategic was looking.

That is the gap I have been working in. Record, Retrieve, Rely, Reuse.

Next I want to take the first of them seriously, because Record sounds like the easy one and is the one almost everybody gets wrong, usually by assuming that having written something down somewhere is the same as having recorded it.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'every-yes-decision',
    title: 'Not every yes is a decision',
    abstract: 'A company of three hundred people says yes to things hundreds of times a week. Approve this expense.',
    category: 'Decision Making',
    date: '2026-08-03',
    readTime: '7 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/every-yes-decision-soma-kiran-gonella-dzvqf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Corporate Approvals", "Reasoning", "Exceptions", "Decision Culture"],
    content: `
A company of three hundred people says yes to things hundreds of times a week. Approve this expense. Hire this candidate. Accept this vendor's quote. Extend this person's leave. Each one feels like a decision. Each one gets called a decision. And in most cases, it is not.

It is a choice. And the difference matters more than it looks.

A choice follows a rule. A decision makes one.

When a manager approves a promotion, she is making a choice. She is applying criteria that already exist. The competency framework says that at this level, the company looks for strategic influence, not only delivery. She looks at the person, she looks at the framework, and she says yes or no. The framework did the deciding. She did the choosing.

When a procurement lead picks a vendor from three quotes, he is making a choice. The procurement policy says anything above ten lakhs needs three quotes, the lowest qualified bidder gets the work unless there is a documented reason to go otherwise. He follows the policy. The policy did the deciding. He did the choosing.

When finance releases a payment against an approved purchase order, that is a choice. When HR processes an increment within the band, that is a choice. When a regional head extends credit within the approved limit, that is a choice. All of them are governed by something upstream, a rule or a policy or a framework that somebody, at some earlier point, put in place.

That earlier point is where the decision lives.

The competency framework itself. Who wrote it, why those eleven competencies and not six, why strategic influence sits where it sits, why delivery alone is not enough past a certain level. That was a decision. It was made once, probably in a room, probably in 2019, and it now governs every promotion the company makes.

The procurement policy. Why ten lakhs, why three quotes, what counts as a documented reason to override. That was a decision. It shapes hundreds of vendor selections a year.

The approval limits. The credit terms. The travel policy. The increment bands. Every one of these was decided once and then followed thousands of times. The one-time act was the decision. The thousand-time acts are choices.

Companies are very good at keeping choices

This is the part that hides the problem.

Every choice those three hundred people make gets captured somewhere. The purchase order goes into the procurement system. The hire letter goes into the HRMS. The expense claim goes into the finance tool. The leave approval goes into the portal. Companies have built entire software categories to record these, and they work well. Every PO is numbered, dated, approved, stored, and auditable.

So it feels like the company has a grip on its decisions. Look at all these records. Look at all these approvals. Everything is tracked.

But what is tracked is the choosing, not the deciding. The system captured the vendor selection. It did not capture the procurement policy that governed it. The system captured the promotion. It did not capture the competency framework that determined it. The system captured the payment within the approved limit. It did not capture who set the limit, or why, or whether the number was principled or just a round figure someone picked in a different year.

Every choice, recorded. Every decision behind it, gone.

Why this is expensive?

A choice made within a good rule is a good choice. A choice made within a rule nobody can explain is a gamble wearing a suit.

Here is what happens. A manager is sitting across from someone whose promotion she just denied. She reads the criteria from the framework. Strategic influence, not only delivery. The person asks why. Why is strategic influence the bar. Why does it outweigh two years of delivery nobody disputes. And the manager has no answer, because the framework was decided before she arrived, and the reasoning was never written next to the words.

She is not being arbitrary. She is being exactly as consistent as the company asked her to be. And she cannot justify the consistency, because the decision underneath her choice is missing.

That person goes away and draws one of two conclusions. Either the criteria are genuinely right and the manager just cannot explain them, which is frustrating but survivable. Or the criteria are arbitrary, which means the system cannot be trusted, which means the rational move is to stop trying to work within it and start trying to work around it.

Multiply that by every rule in the company whose basis has been lost. The ten lakh threshold that may or may not make sense any more. The credit terms that differ by region for a reason nobody can reconstruct. The approval limits that were set in a different year at a different scale. The travel policy exception clause that exists because of one bad trip five years ago.

Every one of those is a decision that people are choosing within, every day, without knowing whether the decision still holds. And they cannot check, because the decision was never kept. Only the choices were.

The inversion

This is the thing that took me longest to see.

Companies have invested enormously in recording choices. Procurement systems, HR platforms, finance tools, ticketing systems, approval workflows. Billions of dollars of enterprise software, all designed to capture the downstream selections that people make within existing rules.

Almost nothing, anywhere, captures the rules themselves. The upstream decisions that all those choices rest on. The policy that was written in a workshop. The framework that was adapted from a consultant's model. The limit that was set on a phone call. The terms that were negotiated in a corridor.

The choices are the visible part, the part that feels like work, the part that gets a system built for it. The decisions are invisible, because they happen once, in a room, and then everything after them looks like the company simply doing what it does. Nobody notices that the thing the company does rests on something somebody decided and nobody kept.

A choice without its decision is a building without its foundation. It stands, it functions, it looks solid. You only find out the foundation is missing when somebody leans on it too hard, or when the ground shifts, or when somebody new arrives and asks what the building is standing on.

How to tell the difference

Stand in front of any approval in your company and ask one question: am I applying a rule, or am I making one?

If you are applying a rule, this is a choice. The rule should be on record somewhere, with its reasoning, and you should be able to point at it.

If you are making a rule, or changing one, or bending one, this is a decision. It should be recorded properly, with who made it, on what basis, and under what conditions, because everything that follows will rest on it.

If you are applying a rule and you cannot find the decision behind it, you are in the position of most managers in most companies. Following something you cannot explain, enforcing something you cannot justify, choosing within a framework whose own basis is gone.

That gap between the choice you are making and the decision you cannot find is where the cost lives. It shows up as arguments that cannot be resolved, because there is no record to resolve them against. It shows up as rules that run forever past the conditions that created them. It shows up as the manager sitting across from the person she just denied, reading words from a framework, unable to explain why those words and not others.

The choices are fine. The decisions underneath them are what the company needs to start keeping.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'building-never-designed-remember',
    title: 'The building was never designed to remember',
    abstract: 'Think of a company\'s decision-making as a building. Not a metaphor about ambition or growth, but a literal architectural question.',
    category: 'Organizations',
    date: '2026-08-04',
    readTime: '9 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/building-never-designed-remember-soma-kiran-gonella-xugbf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Organizational Architecture", "Institutional Memory", "Systems Thinking"],
    content: `
Think of a company's decision-making as a building. Not a metaphor about ambition or growth, but a literal architectural question. How was it designed. Where does the load sit. What happens when one wall shifts.

Most companies were not designed at all. They were built the way houses are built in a hurry: room by room, problem by problem, one extension at a time. The first room was fine. The founder made every decision, remembered every one, and the house held. The second room worked too. Then a floor was added, then a wing, and somewhere around three hundred people, the building is large and busy and nobody can say with confidence which walls are load-bearing and which ones could come down without consequences.

The leadership team sits at the top of this building. Every consequential decision passes through them. And the building was never designed to help them be consistent. It was designed, if it was designed at all, to be fast.

That is the architecture. The question is what it costs.

How the building was designed (the past)

In the early days, consistency was free. It came from the founder's memory. Every decision was made by one person, or by a handful of people who sat close enough to overhear each other. The pattern of prior decisions was not written anywhere because it did not need to be. It lived in one head, and one head was enough.

This worked beautifully, and people remembered it working, and that memory became the building's first load-bearing wall: the belief that decisions should be fast, informal, and held in the heads of the people who made them. Anything else was bureaucracy.

As the company grew, new rooms were added. A VP was hired. Then another. Then department heads, regional managers, people whose job it was to say yes to things the founder no longer had time to see. Each of them inherited the architecture: decide fast, remember what you decided, don't make a process out of it.

But now the decisions were spread across a dozen heads instead of one. And a dozen heads cannot synchronise their memories. The VP who approved eighteen percent for a plant supervisor in July does not share a memory with the VP who approves twelve percent for a nearly identical case in October. They might be the same VP. It does not matter. Without a record, each decision is made against a blank, and the blank is filled by whatever the person happens to be carrying that day.

Nobody chose this architecture. It simply formed, the way buildings do when each room is added to solve today's problem without asking what it does to the structure. The company grew into a building where the most consequential decisions rest on the least reliable material: the memory and mood of whoever happens to be in the room.

And the building held. For a while. The way buildings do before the leaks start.

Where the money leaks (the present)

The leaks do not announce themselves. There is no single dramatic failure. There are a hundred small ones, running continuously, none large enough to investigate, all of them flowing from the same crack in the foundation.

The consistency leak. A VP approves eighteen percent in July and twelve in October for the same situation. He does not know he has contradicted himself because he cannot see his own prior decision. Three months later, two supervisors compare notes. Now the company has a grievance to manage, a trust problem in the plant, and a precedent it cannot explain. The cost is not the increments. The cost is that every future increment request in that plant will be calibrated against perceived fairness rather than policy, and perceived fairness is shaped by the contradiction the VP does not know he made.

The mood leak. The same leader, the same question, a different day. Monday morning, rested, after a good quarter review, the answer is yes, go ahead, invest in it. Thursday afternoon, behind on numbers, after a difficult call with a distributor, the answer is let's wait. Both answers feel right in the moment. Neither is wrong in isolation. Together they teach everyone below that the answer depends on the weather upstairs. So people start timing their requests. They learn which days to approach and which to avoid. They read mood instead of policy, because mood is the actual variable. That is not politics. That is rational behaviour inside a building that runs on one person's emotional weather. The company is paying full salaries for people to spend a portion of their intelligence managing upward rather than working outward.

The closed-room leak. This one is the slowest and the most expensive. The VP has an operations head who disagrees on the July increment. She recommends twelve. She explains the precedent risk clearly. The VP hears her, weighs it, and overrules her. That is his right.

But her input vanishes. It was offered in a room and it left with the room. When October comes, nobody is there to make the counterargument. The VP does not even remember there was one.

Over time, the operations head notices. Not that she is being overruled, that is tolerable, but that her input has no weight beyond the meeting it was offered in. If the decision goes wrong later, there is no record she warned against it. If it goes right, there is no record she shaped it. Her perspective is structurally weightless. It exists for the duration of the conversation and then it is gone.

She adjusts. Not as a protest, not dramatically, but by degrees. The objections get softer. The counterarguments arrive later, or framed more carefully, or not at all. She starts reading the room before she speaks, calibrating whether today is a day the VP will hear a dissenting view. She is not becoming less competent. She is becoming more efficient within a building that has taught her that strong input and weak input produce the same result: both dissolve after the meeting.

The company is now paying for a senior operations head and receiving a fraction of her judgment, because the architecture discards everything that is not the final answer. The perspectives that would keep the leader consistent, the objections that would catch the mood-driven calls, the alternatives that would make the decision richer, all of it flows out through the same crack. Offered, heard, dissolved, gone.

The compounding leak. Each of these leaks feeds the others. Inconsistency teaches people that decisions are temporary, so they hedge. The mood dependency teaches them to manage upward, so they spend energy on timing instead of substance. The closed room teaches them not to push hard, so the leader hears less. The leader, receiving less pushback and unable to see their own pattern, becomes more inconsistent. The cycle tightens. The building gets more expensive to operate every quarter, and the expense does not appear on any line item because it is absorbed into the salaries of people who would have been paid anyway.

A company five years into this pattern is not carrying five years of the same cost. It is carrying an accelerating cost, because every unrecorded decision, every dissolved perspective, every mood-driven contradiction makes the next one more likely and more expensive.

What the building actually needs (the future)

The instinct, when you see the leaks, is to fix the leader. Send them on a course. Give them a coach. Talk about consistency as a leadership competency. Run a 360 review.

None of that touches the architecture. The leader is not the problem. The leader is an unassisted human being making hundreds of decisions a year inside a building that gives them no memory, no baseline, and no access to the perspectives that were offered last time. Fixing the leader is like repainting a wall to stop a leak in the foundation. It looks better for a quarter.

The investment is architectural, and it is smaller than it sounds.

A visible record of consequential decisions, including the reasoning and including the dissent. Not every choice. Not a form for everything. Just the ones that pass the test: could someone, in eighteen months, reasonably ask who approved this and why. When the VP opens the October case and sees that in July, for the same situation, he approved eighteen, and that his operations head recommended twelve for these specific reasons, and that he overruled for these specific reasons, then October takes thirty seconds and the two supervisors have nothing to compare except two answers that make sense together.

A preserved record of the perspectives that shaped the decision, not just the outcome. The operations head's twelve-percent recommendation lives next to the VP's eighteen-percent approval, with both sets of reasoning. Not so the VP can be checked. So the VP can see what he weighed last time, and so the operations head knows that her strongest argument will outlast the meeting. She brings her best thinking every time because the architecture tells her it matters.

A visible pattern, so the leader can see their own track record. Not as a judgment. As a tool. The VP who can see his last five decisions in this category, with their reasoning and their context, does not need a coach to be consistent. He has something better than a coach: his own prior judgment, preserved and retrievable, which is the only thing that can make the four hundred and first decision look like it came from the same person as the four hundredth.

The investment is not in technology. Not in process. Not in governance. It is in making the building remember what happened inside it, so that the people making decisions are not working from a blank sheet every time.

The return

Here is why this is an investment and not a cost.

Every rupee spent on a decision that contradicts a previous one is a rupee wasted. Every hour a senior person spends managing upward instead of working outward is an hour lost. Every quarter where the operations head brings a softer argument because the architecture told her the strong one would dissolve is a quarter of diminished judgment. Every grievance that arises from an inconsistency that nobody can explain is a trust withdrawal from a bank that takes years to build and months to empty.

These are not hypothetical. They are running right now, in most companies past about a hundred people, and they compound quarterly.

A company that invests in its decision architecture, that gives its leaders a memory and its advisers a voice that survives the meeting, does not just stop the leaks. It gets something it has never had: the ability to compound its own judgment over time. Decision number four hundred and one is better than decision number four, not because the leader got smarter, but because four hundred prior decisions are visible, with their reasoning and their context and their dissent, and the four hundred and first stands on all of them instead of standing alone.

That is the difference between a company that gets older and a company that gets better. The building is the same. The architecture is what changes.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'seventh-hat',
    title: 'The seventh hat',
    abstract: 'If you have spent any time in a corporate meeting room, you have seen the Six Thinking Hats in action, whether or not anybody called it that. One person brings the data.',
    category: 'Leadership',
    date: '2026-08-05',
    readTime: '9 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/seventh-hat-soma-kiran-gonella-knmaf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Leadership", "Thinking Hats", "Accountability", "Decision Record"],
    content: `
If you have spent any time in a corporate meeting room, you have seen the Six Thinking Hats in action, whether or not anybody called it that.

One person brings the data. One person raises the risks. One person has a gut feeling. One person sees the upside. One person offers an alternative nobody considered. And one person tries to keep the conversation on track.

Six perspectives. Six modes of thinking. Edward de Bono formalised them in 1985 and organisations have used them in some version ever since, because they work. They genuinely produce better thinking. The white hat gathers facts. The red hat checks instinct. The black hat stress-tests. The yellow hat finds the upside. The green hat generates alternatives. The blue hat manages the process.

And then a silence falls over the room.

Because now somebody has to actually decide.


### The hat nobody wants to wear


Watch what happens in the pause after the thinking. The data has been laid out. The risks have been named. The alternatives have been surfaced. The gut has been heard. Everybody has contributed. And now the room is waiting for somebody to say: we are doing this.

That moment is where most meetings stall. Not because the thinking was incomplete, it was usually quite good. But because every other hat is safe, and this one is not.

The person who wore the white hat and presented the facts carries no accountability for what the company does with those facts. The person who wore the black hat and flagged the risks is protected twice over, because if it goes wrong they warned against it, and if it goes well their caution was simply part of the process. The person who wore the red hat and said I have a bad feeling about this is untouchable, because a feeling cannot be wrong, it can only be overruled. The person who wore the green hat and proposed an alternative is the furthest from risk of all, because suggesting something the room did not take is the safest possible contribution.

Every one of those people participated in the decision. Not one of them made it.

The seventh hat is the one where a person looks at everything the other six produced and says: I am committing this company to a course of action, and my name is on it.

That hat is heavy. And in most organisations, people will do extraordinary things to avoid putting it on.


### How avoidance looks


It does not look like cowardice. It looks like diligence.

Let us get more data before we commit. Let us run it past legal. Let us take it offline and circle back next week. Let us socialise it more broadly. Let us form a working group.

Each of those sentences sounds responsible. Each of them is, in many cases, genuinely warranted. And each of them has a second function, which is to move the moment of commitment further into the future and distribute it across more people, so that when it finally arrives, no single person's name is on it.

This is not irrational. In most companies, the consequences of a decision that goes wrong fall disproportionately on the person who made the call. Not the person who provided the data. Not the person who flagged the risk. Not the person who suggested the alternative. The person who said yes. Everyone remembers who decided. Nobody remembers who contributed to the thinking that led to it.

So people learn. They learn to contribute without committing. To participate without deciding. To wear five hats beautifully and leave the sixth and seventh for somebody else. They become expert thinkers and reluctant deciders, which is exactly the behaviour the system rewards.

A company full of excellent thinkers and reluctant deciders is a company that moves slowly for reasons nobody can name. The thinking is sharp. The meetings are thorough. The analysis is rigorous. And nothing happens for weeks because the moment that converts all of that thinking into action keeps getting deferred by one more round of consultation.


### Why the hat is so heavy


The weight is not the responsibility itself. Most senior people are willing to be accountable. They did not get to where they are by avoiding hard calls. The weight is that the accountability is solitary and the evidence is absent.

Consider what the person in the seventh hat is actually facing. They have heard the data, the risks, the instincts, the alternatives, and the process considerations from the other six hats. All of that informed their thinking. And now they are about to decide, and the moment they do, every one of those inputs will vanish. The data person will go back to their desk. The risk person will move on to the next meeting. The person with the gut feeling will not remember what they said in three months.

What remains is the decision and the decider. One name. No record of the five perspectives that shaped the call, no evidence that the risks were weighed, no trace of the alternatives considered and rejected. If it goes right, the decider gets credit they should share. If it goes wrong, the decider gets blame they should not bear alone, and no way to show what informed their thinking.

That is why the hat is heavy. Not because the person wearing it is alone in the room. They are surrounded by contributors. They are alone in the record. And being alone in the record, when consequences arrive, is a very specific kind of exposure that most people learn to avoid after experiencing it once.


### The hat becomes wearable when the room travels with it


Here is the part I keep coming back to.

The seventh hat does not need to be lighter. The decision should be consequential and the person making it should feel the weight. What needs to change is that the person wearing it should not be alone in the record.

If the six hats' contributions are preserved inside the decision itself, the seventh hat transforms from a solitary risk into a supported commitment.

The data the white hat presented is attached to the decision, not floating in a separate deck that nobody will find in eighteen months. The risks the black hat raised are recorded alongside the approval, so when the risk materialises, the record shows it was weighed and accepted for a specific reason, not ignored. The alternatives the green hat surfaced are visible, so the question "did we consider other options" has an answer that does not depend on memory. The instinct the red hat voiced is preserved, even if it was overruled, because instinct overruled for a documented reason is a very different thing from instinct that was never heard.

And the dissent. This is the part that matters most. When the person who disagreed can see that their objection is recorded, attached to the decision, preserved even though it did not carry the day, two things change.

First, they bring their strongest argument every time. Because the system has told them their perspective has permanence. It does not dissolve when the meeting ends. Whether or not it won, it exists. That changes how hard people think before they speak and how honestly they speak when they do.

Second, the person wearing the seventh hat is protected by the dissent as much as by the support. When a decision goes wrong and someone asks why, the record shows: this was decided by this person, on this basis, having heard this objection, having weighed it, having proceeded for this reason. That is accountability with context. It is fundamentally different from a name on a bad outcome with no trace of what informed it.


### What actually changes


When the room travels with the decision, the seventh hat stops being the hat people avoid and starts being the hat people can afford to wear.

Decisions happen faster, because the person committing is not carrying the full weight alone. They are committing with visible support from five other modes of thinking, each preserved, each attributable. The three-week delay that was really an accountability-avoidance mechanism becomes unnecessary, because the mechanism that made it necessary, the solitary exposure of the decider, no longer applies.

Decisions become more honest, because the people contributing know their input survives. The risks get named more clearly when the risk-namer knows the record will show they named them. The alternatives get explored more seriously when the alternative-proposer knows their idea was genuinely considered and set aside for a reason, not just nodded at and forgotten.

And when decisions go wrong, which they will, the conversation afterwards is different. It is not "who made this call" in the accusatory sense. It is "what did we know, what did we weigh, and what did we miss." That is a learning conversation. The first version is a blame conversation. The difference between them is entirely a matter of whether the record exists.


### The hat nobody wears, and why


De Bono gave us six hats for thinking. They are beautiful tools and I have no quarrel with any of them. What he did not build, and what nobody has built, is the hat for the moment thinking becomes commitment.

It is the hat that says: I have heard the facts, the risks, the feelings, the upside, the alternatives, and the process. I am now deciding. And I need the room to travel with me, not in the form of shared blame, but in the form of a record that preserves every input that shaped this call, so that accountability is real without being solitary, and so that what we learned in this room outlasts every person sitting in it.

That is not a seventh mode of thinking. It is the bridge between thinking and doing that every meeting crosses and no framework has ever named.

Most companies are full of people who think beautifully and decide reluctantly. Not because they lack courage, but because the system made the thinking safe and the deciding exposed. Fix the record, and you fix the exposure, and the seventh hat becomes something a person puts on with confidence rather than dread.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'decision-debt',
    title: 'Decision Debt',
    abstract: 'Last time I wrote about the seventh hat, the one nobody wants to wear, because committing to a decision without a record means carrying the accountability alone. But there is a cost on the other side of that too, one that the company pays whether or not anybody wears the hat.',
    category: 'Organizations',
    date: '2026-08-06',
    readTime: '8 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/decision-debt-soma-kiran-gonella-21fqf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Decision Debt", "Technical Debt", "Governance", "Compounding Liability"],
    content: `
Last time I wrote about the seventh hat, the one nobody wants to wear, because committing to a decision without a record means carrying the accountability alone. But there is a cost on the other side of that too, one that the company pays whether or not anybody wears the hat. Every decision that gets made without a proper record is a small loan the company takes from its own future. And like all loans, it has interest and it has principal, and nobody is keeping track of either.

I have started calling this Decision Debt, because the parallel to technical debt is almost exact and the name makes visible something that has been invisible for as long as companies have existed.


### How the debt gets taken on


It happens the same way every time. A decision needs to be made. Somebody says yes. The yes is real, it moves things, money flows, people are hired, vendors are switched, rules are bent. But the yes lives in a WhatsApp message, or a nod in a corridor, or a reply buried on the eleventh screen of a forwarded thread. The decision happened. The record did not.

That gap between the decision and its record is the debt. One gap is a small loan. A hundred gaps, accumulated over a year, across a company of two hundred people, is a balance sheet nobody has ever looked at because nobody knows it exists.

The debt grows with headcount, because more people means more decisions, and more decisions means more gaps. It compounds with every resignation, because in most companies the record is the person, and when the person leaves the record leaves with them. And it is invisible in the way that only compounding things can be, where each individual gap is too small to notice and the accumulated total is too large to see.


### The interest


The interest on Decision Debt is paid every day, by many people, in small amounts, and it never appears on any report.

It is paid by the person who spends twenty minutes looking for a decision that was already made, and by the colleague who spends an hour helping them look. It is paid in the meeting where a question that was settled last quarter gets reopened and worked through again, because nobody in the room knew it had been settled, because the settlement lived in somebody's sent folder and that person is in a different meeting. It is paid by the manager who cannot explain the rule she is enforcing, and by the person on the receiving end of that rule who decides the system cannot be trusted.

It is paid by the procurement executive who makes his request smaller than it needs to be, because a clear yes is not available and a smaller ask is a smaller thing to be exposed on later. It is paid by the HR head who keeps a private folder of written confirmations, because the company's own records cannot be relied on, and whose diligence is invisible to everyone including herself.

It is paid every time somebody joins and spends four months rebuilding an understanding of why things are the way they are, most of which existed in somebody's head and could have been handed over in an afternoon if it had ever been written next to the decision it belonged to.

None of that has a cost code. Nobody submits a claim for any of it. It is absorbed into salaries that were going to be paid anyway, which is exactly why it can run for a decade without anyone objecting.


### The principal


The principal on Decision Debt is paid rarely. When it comes, it comes all at once, at a moment you did not choose.

An investor asks who approved your largest supplier switch. The room goes quiet. Nobody can produce the decision. The investor adds a condition to the term sheet, and that condition sits in the closing documents permanently, so every future diligence sees that somebody once had to require your company to prove it could approve things.

Or a dispute. Two people disagree about what was agreed, and there is no record to resolve it against, so the dispute runs on memory and seniority and politics rather than on facts, and whichever way it settles, the relationship is damaged.

Or a grievance. Two employees compare notes and find they were treated differently for the same situation. The basis for each decision was never recorded, so there is no way to show that the two situations were actually different. Maybe they were. Maybe they were not. Nobody can tell, because neither decision exists as anything more than a fact about what happened.

The principal is dramatic and everybody fears it. But the principal is not where most of the money is. The interest is larger, because it is paid every day, by everyone, and it compounds.


### Where the debt lives


You can get a rough picture of how much Decision Debt a company is carrying by asking one question: where does a typical consequential decision actually live right now?

In some companies, the answer is in people's heads. The decision was verbal. A nod. A phone call in a car between meetings. The company's decision history is distributed across the memories of its employees, unwritten and unsearchable. These companies are carrying the most Decision Debt and feeling it the least, which is exactly what makes it dangerous. Everything works beautifully until somebody leaves, or an outsider asks a question, or the company crosses about a hundred and fifty people and the founder's memory stops scaling.

In other companies, the answer is in email. The decision is written, timestamped, real. And it is buried in an inbox, tangled in a thread, forked across three different versions of the same conversation, indistinguishable from the forty non-decisions around it. These companies believe they have a record, because they do, technically. But a record you cannot find in under an hour is not a record. It is an archive nobody visits. The daily interest here is chronic: latency, chasing, retrieval cost, and the ever-present risk that the thread you need sits in a mailbox that was deactivated sixty days after somebody resigned.

In a few companies, the answer is in tools. A ticket in Jira, a workflow in the HRMS, an approval in the procurement system. These companies believe they have reduced the debt, and in a narrow sense they have. The ticket exists. It has a status. It says "approved."

But look at what the ticket actually contains. It tells you that somebody moved a status to approved. It does not tell you whether that person had the authority to approve it. It does not show you who else was involved, in what order, or whether the commercial check happened before or after the sign-off. The reasoning, if it exists at all, is scattered across comments that may or may not have been written at the time and that anybody with edit access can change after the fact. There is no sequence, no staged authority, no attached basis, and no way to prove the record has not been quietly altered since.

A status field is not an approval. It is a label that says "approved" in the same way a sticky note on a file says "done." On the day somebody disputes the decision, or a diligence process asks you to demonstrate how it was made, "it says approved in Jira" is worth exactly as much as "I remember it being approved." Both are claims. Neither is proof. And the difference between a claim and a proof is exactly the gap where Decision Debt accumulates fastest, because the company believes the debt has been paid when it has only been relabelled.

The tools were also built for other jobs, and each one covers only its slice, and the decisions that cross boundaries or fit no tool are still sitting back in email or in heads. The highest-stakes decisions, the exceptions, the reorganisations, the policy changes, are almost always the ones with no tool, because they are by definition the ones the tools were not designed for.

Most companies, honestly, are not cleanly at one level. They are jagged. Their purchase orders are in a system. Their policy exceptions are on WhatsApp. Their structural decisions are in somebody's memory. And the pattern is almost always the same: the riskiest decisions sit at the lowest level. The ones that most need a record are the ones least likely to have one.


### Why naming it matters


I am not interested in making anyone feel bad about where their company sits. Every company arrived where it is for sensible reasons. Email is free and universal. Verbal trust genuinely works at small scale. The tools that exist were built for the jobs they were built for, and expecting them to also function as a decision record is unfair to the tools and to the people using them.

The reason to name the debt is simpler. A debt you cannot see, you cannot repay. And a debt you do not name, you cannot see.

Once you call it Decision Debt, three things happen that did not happen before. The daily cost stops being "how things are" and starts being an interest payment on a specific balance. The dramatic failure stops being bad luck and starts being a principal call on a loan you forgot you took. And the question of what to do about it stops being "we should document things better," which is vague and guilt-producing and never works, and starts being "which decisions are generating the most interest, and what would it cost to start recording them properly," which is specific and answerable.

The next thing I want to look at is how the debt is distributed, because it turns out that different kinds of decisions carry different kinds of debt, and a company that treats all its decisions the same will always overpay on the wrong ones.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'step-framework-classification',
    title: 'STEP: how decisions gets classified before they got recorded',
    abstract: 'Before accounting could work, it needed a classification. Not a ledger.',
    category: 'Decision Making',
    date: '2026-08-07',
    readTime: '9 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/step-how-decisions-gets-classified-before-got-recorded-gonella-s66mf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["STEP Framework", "Decision Classification", "Structural Decisions", "SigmaGo"],
    content: `
Before accounting could work, it needed a classification. Not a ledger. Not a system. A way to look at a transaction and say: this is an asset, that is a liability, this is revenue, that is an expense. Without that, a ledger is a list of numbers and a list of numbers cannot balance, cannot be audited, cannot tell you anything.

Decisions have never had that classification. Every decision a company makes, whether it reshapes the organisation or buys printer cartridges, is treated as the same kind of event. Same inbox. Same approval thread. Same absence of a record. Not because the ledger was wrong. Because the chart of accounts was missing.

STEP is that chart. It is the single most important idea in everything I have been building, and I want to give it the space it deserves.


### What STEP says


Every consequential decision a company makes falls into one of four types. Not forty. Not a spectrum. Four, and each one behaves differently, fails differently, and needs to be kept differently.


### S is for Structural.


A structural decision changes the shape of the company itself. It alters who is in the organisation, how authority is arranged, or what the company is bound to on the outside.

Hiring is structural. You are adding a person, a role, a reporting line, a cost. Promotion is structural. You are changing someone's standing, their authority, their compensation, their trajectory. Reorganisation is structural. Vendor onboarding is structural. You are binding the company to a new external party. Delegation of authority is structural. Partnership agreements. New entities. Every one of these decisions rearranges the organisation in a way that is difficult to reverse and that other people's work will be built on top of.

Structural decisions carry a particular weight because they affect people's lives directly. A hiring decision determines somebody's livelihood. A promotion decision shapes a career. A reorganisation changes who someone reports to, what they work on, how their day feels. These are not abstract entries. They are commitments that the people affected remember precisely, even when the company does not.

When a structural decision is not properly kept, it gets disputed. Not immediately. Months later, sometimes years, when somebody asks why a reporting line was drawn the way it was, or who agreed to a vendor relationship that has since gone wrong, or what the basis was for a promotion that someone else believes they deserved. The dispute cannot be resolved without the record, and the record does not exist, so the dispute runs on memory and seniority and politics instead of on facts.

Structural decisions need authority, sequence, and reasoning preserved. Not because the company is being careful. Because these are the decisions people will come back to, and when they do, the company needs an answer that is more than somebody's recollection.


### T is for Transactional.


A transactional decision moves money or resources from one place to another. It is the daily traffic of corporate approval.

Budgets. Purchase orders. Capital expenditure. Contract renewals. Discounts. Credit terms. Payment releases. Expense approvals. These arrive in volume, they cross thresholds, and they have deadlines, often external ones set by vendors, customers, or regulators.

Transactional decisions are the ones companies understand best, because they look most like the transactions accounting already handles. They have numbers. They have limits. They have a natural home in procurement systems and finance tools. Most companies, if they have systematised any part of their decision-making at all, have systematised this one.

What makes transactional decisions distinct is that their primary failure mode is delay. A purchase order that sits in an inbox for eleven days is a project that sits still for eleven days. A vendor's quoted price that expires because the approval came two days late is money lost to a clock the company could not see. A payment release that waits because nobody can tell whether the underlying approval actually happened is a supplier relationship quietly eroding.

Speed and visibility are everything here. The person who submitted the request needs to know where it is. The person whose desk it is sitting on needs to know it is sitting there. The finance team releasing the payment needs to see the approval chain in one place, not reconstruct it from three forwarded emails. Transactional decisions do not need heavy governance. They need a clear queue, a visible path, and a fast cycle.

The danger of transactional decisions is not that they are risky individually. It is that their sheer volume creates an illusion of completeness. A company that has systematised its purchase orders believes it has systematised its decisions. It has not. It has systematised the ones that already had numbers attached. The three other kinds, the ones without a natural threshold or a pre-built tool, are still running on memory and email.


### E is for Exception.


An exception is a decision to knowingly bend a rule the company already has. It is the most important letter in STEP, and it is the one companies handle worst.

An out-of-cycle increment above the policy cap. A purchase approved without the required three quotes. A discount extended beyond the standard terms for one specific customer. Access granted outside the normal procedure. A process skipped because the situation was urgent and the process was slow.

Each of these is individually defensible. A competent person looked at the specific case, judged that the rule did not fit, and made a call. That is good judgment. That is what you hire senior people to do. The problem is not the exception.

The problem is that nobody counts them.

When the same rule gets bent a second time, it is still an exception. When it gets bent a third time, it is a pattern. When it gets bent a fourth time without anyone knowing it is four, something fundamental has shifted. The written policy says twelve percent. The actual practice says eighteen. The company is running two versions of reality simultaneously and nobody decided this. Nobody wrote a new policy. Nobody approved the change. It happened by accumulation, one defensible bending at a time, and the company's stated rules and its actual behaviour have quietly divorced.

This is the most dangerous failure mode of any kind of decision: silent precedent. Not a dispute, which is at least visible. Not a delay, which is at least felt. A slow, invisible drift between what the company says it does and what it actually does, discovered only when somebody new arrives, or an auditor asks, or two employees compare notes and find they were treated by different rules for no recoverable reason.

Exceptions need three things that no other kind of decision needs. A link to the rule being bent, so the deviation is explicit rather than implicit. A reason specific to this case, so the basis is visible and not just assumed. And a count. How many times has this rule been excepted this year. That number, surfaced automatically, is the difference between an organisation that grants exceptions with judgment and one that rewrites its policies by accident.


### P is for Process.


A process decision changes how future decisions get made. It is the company editing its own operating system.

A new policy. A revision to the approval limits. An update to the competency framework. A change to the procurement rules. A new SOP. A modification to who is allowed to approve what and up to what amount.

Process decisions are the rarest of the four and the most consequential, because every future action inherits them. When you change the competency framework, every promotion decision for the next five years runs through the new version. When you revise the approval limits, every purchase order routes differently from that day forward. When you write a credit policy, every regional manager applies it to every distributor in every conversation.

The failure mode of a process decision is the longest-fuse one of all: the orphaned rule. The policy exists. It is followed. Thousands of choices are made within it every year. And the reasoning behind it is gone.

A competency framework decided in 2019 by a working group of four people, two of whom have left, adapted from a consultant's model nobody can name, is now the basis for every promotion in the company. A manager reads out the criteria. A person asks why. The manager cannot answer, because the reasoning was never written next to the words.

An approval limit set at two crore by somebody nobody has worked with, in a different revenue environment, at a different scale, is now determining how thousands of purchase decisions are routed. Nobody knows whether two crore was principled or simply a round number. The business has tripled since. The number has not moved.

Process decisions need their reasoning preserved with more care than any other kind, because the gap between the moment they are decided and the moment their reasoning is needed is the longest of any decision type. Sometimes years. And by the time the reasoning is needed, the people who had it are three companies away.

They also need something unique: a measure of weight. How many decisions currently stand on this policy. How many promotions run through this framework. How many purchase orders are routed by this limit. That number tells you how load-bearing the process decision is, and it should be visible before anyone tries to change it. A person updating a competency framework should see that forty-seven promotions were made on the authority of the version they are about to replace. That changes how carefully they think about the revision.


### Why STEP matters more than anything else I have written


I have written about Decision Debt, about the half of the lifecycle nobody built, about the seventh hat, about choices versus decisions. All of those are descriptions of the problem. STEP is the beginning of the solution.

Without STEP, recording decisions is a flat exercise. Everything goes into the same register. The reorganisation sits next to the stationery purchase. The exception slips through with no link to the rule it bent. The policy change gets the same treatment as a travel reimbursement. And the system, within three months, is either too heavy for the fast things or too light for the consequential ones, and people abandon it, and the company concludes that decision-keeping does not work.

With STEP, each decision enters the system already knowing what it is. The classification is not a field somebody fills in. It is a property of the category the decision belongs to. When someone selects "out-of-cycle increment," the system already knows this is an exception, and it already knows to link it to the policy being bent, and it already knows to surface the count. When someone selects "competency framework revision," the system already knows this is a process decision, and it already knows to show the weight. The person making the decision does not think about STEP. They pick a category. The intelligence follows.

That is what a chart of accounts does. It disappears into the infrastructure and makes the right thing happen without anybody having to remember the rules.

Part of The Other Books, an ongoing series on the decisions companies forget
    `
  },
  {
    slug: 'organizational-inheritance',
    title: 'Organizational inheritance: the practices nobody can explain',
    abstract: 'There is a story, sometimes told in negotiation workshops, about a mother who always made small pancakes even though her pan was large. When her daughter asked why, the mother said that is how my mother taught me.',
    category: 'Organizations',
    date: '2026-08-10',
    readTime: '5 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/organizational-inheritance-practices-nobody-can-explain-gonella-6ispf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Organizational Inheritance", "Policy Drift", "Culture", "Institutional Habits"],
    content: `
There is a story, sometimes told in negotiation workshops, about a mother who always made small pancakes even though her pan was large. When her daughter asked why, the mother said that is how my mother taught me. The daughter asked the grandmother. Same answer. Finally the daughter found the great-grandmother. The old woman laughed. We had a small pan, she said. That was all.

Three generations following a practice whose reason had expired before the second generation was born. The small pancakes continued. The small pan was gone. Nobody asked, because the practice was inherited, and inherited things do not invite questions. They just continue.

Every company past a certain size is running on some version of this. I call it organizational inheritance, and it is the lowest form of institutional continuity.


### How inheritance forms


A company's head of operations had been there for seven years. She was not the founder, not someone whose departure would make a headline. She was the person other people asked when they needed to understand why things were the way they were.

She resigned. For the first two weeks, nothing seemed wrong. Then the questions started.

Why does every purchase above two lakhs require three levels of sign-off when the company's average transaction is now fifteen lakhs? Nobody knew. She would have known. The threshold was set in the company's first year, when two lakhs was a significant commitment. The business had grown tenfold. The threshold had not moved. Every mid-size purchase now took three days longer than it needed to, routed through two approvers who added no judgment because the amount was routine at the company's current scale.

Why does the Monday leadership meeting include a thirty-minute review of open customer complaints when the company now has a dedicated support team with its own escalation process? Nobody knew. She would have known. Three years ago, before the support team existed, the founder wanted visibility on every unhappy customer. He asked for the review. The support team was hired six months later. The review continued. Thirty minutes of seven senior people's time, every Monday, covering ground that a team was already covering, and nobody had questioned it because it had always been on the agenda.

Why does the quarterly board deck include a twelve-slide section on regional revenue breakdowns when the board has repeatedly said they only care about the consolidated number? Nobody knew. She would have known. The regional breakdown was added after a board member asked a specific question about the southern region in 2021. The question was answered. The breakout stayed. Two days of finance time every quarter, building slides nobody reads, because three years ago somebody asked a question once.

Each of these was a decision, made once, by a person with authority, for a reason that was real at the time. The decision happened in a call, a meeting, a quick conversation. The practice it created survived. The reasoning did not. What remained was inheritance: the company doing something because it has always done it, enforced by inertia, unchallengeable because the basis was never recorded.


### Why inheritance is invisible


The dangerous thing about organizational inheritance is not that it exists. Every company has it. The dangerous thing is that it is indistinguishable from deliberate practice.

From the outside, and from the inside, a company following an inherited practice looks exactly like a company following a well-reasoned one. The three-level sign-off looks like governance. The Monday complaints review looks like founder engagement. The regional breakout looks like board diligence. Nobody can tell the difference between a practice that is followed because it was decided and one that is followed because it was inherited, unless somebody stops and asks: why do we do this?

That question is surprisingly rare. Not because people lack curiosity. Because asking it implies you do not know, and not knowing something the company has been doing for years feels like a confession of ignorance rather than an act of diligence. So the practices continue unchallenged.


### What inheritance costs


The cost is not any single practice. It is the accumulation of dozens running on autopilot, each carrying a cost that may or may not still be justified, with no way to evaluate which.

The three-level sign-off on purchases above two lakhs generates hundreds of unnecessary approval cycles a year at a company where two lakhs is now routine. The Monday complaints review costs three and a half hours of senior leadership time every week, fifty-two weeks a year. The regional board slides cost eight days of finance time annually, producing content the board has said it does not use.

A new COO joins the company. She walks through the processes and finds thirty things she cannot explain. She asks. Nobody knows. She is told, in various forms, that is how we have always done it. She can either accept the inheritance, which means carrying costs she cannot evaluate, or challenge it, which means fighting battles without evidence, because there is no record to examine and no original decision to revisit.

Most new leaders accept the inheritance. They make their changes at the margin and leave the inherited core untouched, because unwinding a practice whose purpose is unknown feels riskier than maintaining one whose cost is invisible.

And so it compounds. Each year, more practices. Each departure, more reasoning lost. Each new arrival, more inheritance accepted without examination. The company is not getting worse. It is getting heavier. Carrying the accumulated weight of every decision that was made and not kept, every reason that expired and was not retired, every practice that outlived its purpose and was not questioned.

The small pancakes, made on a large pan, in a kitchen that forgot why they were ever small.


### The first step


Organizational inheritance is the starting point, not the destination. The next post looks at what happens when companies move one level up, from practices nobody can explain to knowledge that exists somewhere but takes an hour of archaeology to find. That is a different problem, with its own costs, and its own kind of fragility.

But the first step is simpler than either. It is asking the question that inheritance discourages: why do we do this? Not as a challenge. As a genuine inquiry. And discovering, in many cases, that the answer is a small pan that was replaced years ago.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'knowledge-archaeology-problem',
    title: 'Organizational knowledge: the archaeology problem',
    abstract: 'Last time I wrote about organizational inheritance: practices running on autopilot, reasons lost, the small pancakes on the large pan. The company doing things it cannot explain because the reasoning was never recorded.',
    category: 'Technology',
    date: '2026-08-25',
    readTime: '6 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/organizational-knowledge-archaeology-problem-soma-kiran-gonella-losjf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Knowledge Archaeology", "Institutional Cortex", "Information Retrieval"],
    content: `
Last time I wrote about organizational inheritance: practices running on autopilot, reasons lost, the small pancakes on the large pan. The company doing things it cannot explain because the reasoning was never recorded.

There is a level above that, and most mid-sized companies live at it. The reasoning was recorded. Somewhere. Once. By someone. In some format. The company is not running on inheritance. It is running on knowledge.

The problem is that the knowledge requires archaeology to access.


### What organizational knowledge looks like


When the person who left in March resigned, not everything she took was tribal. Some of what the company needed was written down. It just was not findable.

The Vizag distributor's ninety-day credit terms? Those were in an email thread from the sales director to the CFO. Fourteen messages deep. Subject line "Re: Re: Vizag update." The approval was real. It was timestamped. It existed. Finding it took the finance team forty-five minutes of searching, a call to the sales director to confirm which thread it was in, and a scroll through a conversation that covered six topics in a single chain.

The vendor volume clause that explained the invoice gap? That was referenced in a comment on a procurement ticket in Jira. The ticket had been closed eighteen months ago. The comment was the fourth in a thread of seven. The comment said "confirmed verbal agreement on volume adjustment, see attached." The attachment was a scanned note that had been uploaded to the wrong ticket and was later moved, and the link in the comment pointed to nothing.

The rationale for the quarterly packaging breakout? That was in a slide, in a deck, from a quarterly review two years ago. The deck was on the former operations head's laptop. When IT reimaged the laptop after he left, the deck was copied to a shared drive, in a folder called "QBR Archives 2022," which contained forty-seven other decks with no naming convention.

Each of these is knowledge. Real, written, timestamped. And each required an excavation to access. The knowledge exists. The knowledge is not useful.


### The three costs of archaeology


The first cost is time. Every retrieval takes longer than it should. Twenty minutes is a good outcome. An hour is common. Three hours is not unusual for a cross-departmental decision that touched multiple tools. Multiply that by the number of times someone in a company of two hundred people needs to find a past decision in a given week, and the total is a full-time person's worth of senior hours, every week, spent not on making decisions but on proving that old ones happened.

The second cost is trust. When you finally find the decision, can you rely on it? The email thread shows an approval. Was it the final version, or did a later message revise it? The Jira comment references a verbal agreement. Is the comment accurate? Could anyone have edited it after the fact? The slide in the 2022 deck shows the rationale. Is it the version that was presented, or a draft? None of these tools were designed to prove a decision. They were designed to send a message, track a task, or present a slide. The evidence they contain is incidental, not architectural, and on the day it needs to stand up to scrutiny, it may not hold.

The third cost is the map problem. The knowledge of where the knowledge lives is itself tribal. She knew which thread the Vizag terms were in. She knew which Jira ticket had the vendor clause. She knew which QBR deck had the packaging rationale. When she left, the records did not disappear. But the map to them did. The company now has knowledge it cannot navigate. An archive with no index. A library with no librarian.


### Why companies stay at this level


Organizational knowledge feels like a solution. The company has moved past inheritance. Things are written down. There are tools. There are records. When the auditor asks, there is something to produce, even if producing it takes a week.

That feeling is exactly the trap.

Because the knowledge exists, nobody feels the urgency to make it accessible. The problem is not dramatic enough to fix. The email is there if you look hard enough. The ticket is there if you know the right keywords. The deck is there if you remember the quarter. The cost is absorbed into salaries, spread across dozens of people, and experienced as the ordinary friction of work rather than the extraordinary waste it actually is.

Companies build enormous knowledge surfaces without ever building knowledge infrastructure. They have thousands of emails, hundreds of tickets, dozens of drives, and not a single place where a decision can be found by the person who needs it, in the moment they need it, in a form they can trust.

The inbox is not a decision system. It is a communication tool that happens to contain decisions. Jira is not a decision system. It is a task tracker that happens to have approval comments. The ERP is not a decision system. It is a transaction processor that happens to record who clicked "approve." Each tool captures its slice, and the decision, the complete act of someone with authority committing the company on a specific basis with specific reasoning, is scattered across all of them, whole in none.


### The distinction that matters


Organizational inheritance cannot answer the question "why do we do this?" at all. The reasoning was never recorded.

Organizational knowledge can answer it, eventually. With effort. If the right mailbox is still active. If somebody remembers which tool it is in. If the comment has not been edited. If the attachment still works. If the deck has not been archived into a folder nobody opens.

"Eventually, with effort, if" is not a decision infrastructure. It is a workaround that degrades with every passing month, every departure, every mailbox purge, every tool migration. The knowledge is real today. In eighteen months, some of it will be gone. Not because anyone deleted it deliberately, but because the tools it lives in have retention policies, the people who knew where it was have moved on, and the fragments that remain are too scattered to reassemble.

A company at this level is not inheriting blindly. It is knowing, precariously. The reasoning exists, somewhere, in some form, accessible to someone who knows where to look and has the time to dig. The next post looks at what happens when a company moves from knowing to being genuinely intelligent, when the decisions are not just recorded somewhere but kept in a way that they can be found in seconds, trusted without verification, and used as input to the next decision without archaeology, without effort, and without depending on whether the person who filed them is still in the building.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'when-decisions-compound',
    title: 'Organizational intelligence: when decisions compound',
    abstract: 'I have spent the last two posts describing what most companies live with. Organizational inheritance: practices running on autopilot, reasons lost, the small pancakes on the large pan.',
    category: 'Decision Making',
    date: '2026-08-27',
    readTime: '7 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/organizational-intelligence-when-decisions-compound-gonella-hagvf',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["Decision Compounding", "Organizational Intelligence", "Institutional Judgment"],
    content: `
I have spent the last two posts describing what most companies live with. Organizational inheritance: practices running on autopilot, reasons lost, the small pancakes on the large pan. Organizational knowledge: reasons that exist somewhere, buried in threads and tickets, requiring archaeology to access, degrading with every departure and every mailbox purge.

Both are forms of remembering. Neither is intelligence.

Intelligence is something different. It is not remembering that a decision was made. It is not being able to find it after a forty-five minute search. It is the decision being available, in seconds, to anyone who needs it, in a form they can trust, connected to the decisions around it, ready to inform the next one.

That is when a company stops just accumulating decisions and starts compounding them.


### What intelligence requires


Four things. I have written about them individually across this series. Together they are the operating system that turns knowledge into intelligence.

The decision must be recorded at the moment it is made. Not reconstructed afterwards. Not captured in a comment on a ticket that was built for a different purpose. Captured as part of the act of deciding, because the system was designed so that deciding and recording are the same action. The authority is attached. The sequence is preserved. The reasoning is written next to the approval, not floating in a separate thread. When someone approves a decision, the record is a by-product of the approval, the way a receipt is a by-product of a payment. Nobody files a receipt separately. The payment produces it.

That is Record. And it is the step that separates intelligence from both inheritance and knowledge. Inheritance never had a record. Knowledge had one, scattered. Intelligence has one that was born complete.

The decision must be retrievable without effort. When somebody asks why the Vizag distributor is on ninety-day terms, the answer is not a search. It is a link. One click. The decision, its reasoning, its approver, its date, its conditions. Found in seconds by anyone who should see it.

That is Retrieve. And the difference between retrieval and archaeology is the difference between a library with a catalogue and a warehouse with boxes. Both contain the same books. One of them can give you the book you need in under a minute. The other requires you to know which box to open, and the person who labelled the boxes left in March.

The decision must be reliable. On the day it matters, when it is challenged in a dispute, when a diligence process asks for it, when an auditor needs to verify the sequence, the record must stand on its own. It must show who had the authority to approve. It must show the order in which approvals happened. It must show that the reasoning was attached at the time of approval, not added later. And it must prove that the record has not been altered since.

That is Rely. And it is where most existing systems fail completely. An email can be forwarded, edited, deleted. A Jira comment can be modified by anyone with access. A spreadsheet can be changed without a trace. On the day somebody disputes a decision, a record that could have been altered is not evidence. It is a claim. And the difference between a claim and a proof is exactly the gap where the most expensive Decision Debt accumulates, because the company believed the record was reliable and discovered, at the worst possible moment, that it was not.

The decision must be reusable as input to the next one. This is the step that turns record-keeping into intelligence. When a new credit terms exception arrives, the system shows that this policy has been excepted three times this year. That count, surfaced automatically, transforms the conversation from "should we approve this case" to "should we change the rule." When a supplier is being evaluated, the previous evaluation and its reasoning are visible, so the company knows whether this is a new decision or a repeated one. When a policy is being revised, the weight of what depends on it is visible: forty-seven decisions were made on the authority of the version being replaced.

That is Reuse. And it is the difference between a company that makes four hundred decisions and a company whose four hundred and first decision is better because of the four hundred that came before it. Without reuse, every decision starts from scratch. The company cannot learn from its own past because its past is not available as an input. With reuse, the company compounds. Each decision adds to the foundation the next one stands on.


### What compounding looks like


Consider two versions of the same company, three years apart.

In the first version, the company has made twelve hundred consequential decisions over three years. Each one was made with good judgment, by competent people, for real reasons. Each one lives in an inbox, a memory, a ticket, a corridor. When decision twelve hundred and one arrives, the person making it starts from scratch. They use their own judgment, their own experience, their own sense of what the company has done before. That sense is approximate. Close to what was decided last time, but not reliably so, because memory is the only input and memory is unreliable at this scale.

In the second version, the same twelve hundred decisions were recorded, with reasoning, at the moment they were made. When decision twelve hundred and one arrives, the person making it can see the five most similar decisions from the last two years. They can see the reasoning behind each one. They can see which were exceptions and how many times the relevant policy has been bent. They can see the dissent that was recorded alongside the decisions that went differently from what was recommended. They are not starting from scratch. They are building on twelve hundred precedents, each one visible, each one carrying its original context.

The first company is getting older. More decisions, more experience, but no mechanism to convert experience into institutional memory. The intelligence lives in people. When the people leave, the intelligence leaves.

The second company is getting better. Each decision adds to a visible foundation. The intelligence is structural. When people leave, what they decided stays. When new people arrive, the foundation is available to them from day one. The gap between a new hire and a six-year veteran is not six years of context building. It is the time it takes to read the relevant decisions.

That is organizational intelligence. Not smarter people. Not better judgment. A system that preserves the judgment the company already has, so that it accumulates rather than evaporates, and so that the four hundred and first decision is made by someone who can see the four hundred that came before it.


### The progression


Inheritance: we do this because we have always done it. The reasoning was never recorded. The practice continues on inertia. The cost is invisible.

Knowledge: we do this because the reason is in an email somewhere. The reasoning was recorded, once, in a tool built for a different purpose. Finding it requires archaeology. Trusting it requires faith. The cost is time and fragility.

Intelligence: we do this because the decision is on record, with its reasoning, its authority, and its connections to the decisions around it. Finding it takes seconds. Trusting it is structural. Using it as input to the next decision is automatic. The cost is the two minutes it took to record it properly when it was made. Everything after that is free.

Most companies are somewhere between inheritance and knowledge. The practices run. The reasons are partly tribal, partly buried, partly lost. The archaeology works most of the time, fails when it matters most, and degrades with every departure.

Moving from knowledge to intelligence is not a technology change. It is an infrastructure decision. The company decides, once, that consequential decisions will produce their own record at the moment they are made, and that the record will be findable, reliable, and connected. That decision is itself a P decision, a process decision that changes how future decisions are handled. And it is, in most companies, the most valuable process decision the leadership team has not yet made.

Inheritance is a pancake recipe nobody can explain. Knowledge is the email thread where somebody once explained it, if you can find the thread. Intelligence is the reasoning written next to the decision, findable in seconds, provable to a hostile reader, and ready for the next person who needs it, whether or not the person who wrote it is still in the building.

Part of The Other Books, an ongoing series on the decisions companies forget.
    `
  },
  {
    slug: 'what-fighter-pilot-knows',
    title: 'What a Fighter Pilot Knows That Most Organisations Do Not',
    abstract: 'I recently watched Safed Sagar, the name given to one of the Air Force operations during Kargil. The sequence that stayed with me was the one on hitting enemy targets within a two-hundred-metre range, with no visibility of the target at all.',
    category: 'Leadership',
    date: '2026-09-09',
    readTime: '10 min read',
    featured: true,
    externalUrl: 'https://www.linkedin.com/pulse/what-fighter-pilot-knows-most-organisations-do-soma-kiran-gonella-bj8if',
    source: 'LinkedIn Pulse',
    author: {
      name: 'Soma Kiran Gonella',
      role: 'HR Business Partner · Author · Builder of SigmaGo'
    },
    tags: ["High-Stakes Decisions", "Fighter Pilot Debriefs", "Post-Decision Audits", "Execution"],
    content: `
### 


I recently watched Safed Sagar, the name given to one of the Air Force operations during Kargil.

The sequence that stayed with me was the one on hitting enemy targets within a two-hundred-metre range, with no visibility of the target at all. It looks like pure skill, and a great deal of it is. But beyond the skill sits something else: defining the parameters that affect the trajectory, measuring them, and computing what they do to the release point. And doing all of it while the aircraft is travelling near the speed of sound.

Not slowly. Not on a second pass. At speed, blind, and accurate to two hundred metres.

Organisations are in the same position more often than they admit. Leaders frequently cannot see what is coming, and they still need to move fast. In that situation, the only thing that gives you confidence of landing close to where you intended is the parameters you have measured before release.

Most organisations have measured none.


### The instruments are not what slow the aircraft down


This is the part I think gets misunderstood in business.

When people hear "measure the decision process", they hear weight. A form to fill in, a gate to pass, one more thing between having an idea and acting on it.

But an aircraft does not slow down to use its instruments. It goes fast because of them. Remove the atmospheric computation and you do not get a quicker attack run. You get one that has to fly lower, slower, and come around again. And still miss.

Take away the measurement and you do not get speed. You get movement without direction, which is a different thing entirely.

The same inversion applies to decisions, and almost every organisation has it backwards.

A company without decision infrastructure is not moving fast. It is re-deciding questions it already settled, because nobody can find the first answer. It is watching approvers hedge, because they cannot see what was granted in a similar case last quarter and do not want to be the outlier. It is granting a fourth exception to a rule that will cost three weeks of argument six months from now.

None of that shows up on any report. Which is precisely why it feels like speed.


### What a trajectory actually depends on


A bomb released at altitude does not fall where it is pointed. It falls where the air puts it.

Temperature changes air density, which changes drag. Wind at release altitude is different from wind at eighteen thousand feet, which is different again near the ground, and the object passes through all of them. Humidity alters density. Pressure alters density. Every one of these bends the path in a knowable way, and knowable is the important word. None of it is guessed. It is measured, against records kept for years, precisely so that the crew does not have to guess in the seconds they have.

The crew does not choose the target. They do not choose the weather. What they control is the correction, and the correction is only as good as the parameters behind it.

Now ask the equivalent question about your own organisation.

When a manager approves a compensation exception on a Tuesday afternoon, what is the air doing?

Has that rule been bent before? How many times, and by whom? Did those people know about each other? Was there a pattern in who the exceptions were for? Is the rule itself still current, or was it written under conditions that no longer hold? How many decisions are standing on it right now, and would they all need revisiting if it changed?

Every one of those bends the trajectory of that Tuesday decision. Not one of them is measured in the overwhelming majority of organisations. The decision is released blind and everyone is faintly surprised where it lands.


### The parameters of an organisational atmosphere


Once you start recording decisions properly, capturing what was decided, by whom, on what basis, and against which rule, a set of conditions becomes measurable that never was before. They group naturally, and each one bends the path in a specific way.

Density: how much weight is already in the air. How many decisions rest on a rule. How far a change to it would travel. A boundary definition with forty-seven promotions beneath it is a different object from one with three, and revising it is a different act. Air density determines how far a falling object travels; decision density determines how far a rule change travels.

Pressure: how hard the rules are being pushed. How often a rule is bent, as a rate rather than a raw count. What proportion of its scope it actually governs. And the number nobody expects: how many different people have granted exceptions to it, none of them aware of the others. Four exceptions granted by one person is a considered position. Four granted by four people who never spoke is a rule that stopped existing without anyone deciding it should.

Wind speed: how fast things are actually moving. How long decisions of this type take. How long each stage holds them. What proportion of the total delay each stage contributes. And how often a request comes back for rework, which conventional cycle-time measures cannot see at all. A request bouncing back twice looks like three short waits rather than one long journey.

Wind direction: which way the organisation is drifting. Where exceptions concentrate. If seventy percent of exceptions to a promotion rule are the same band transition, that is not a discipline problem across the company. That is one boundary that no longer matches reality, and everyone in the organisation already knows it. They have been acting on it quietly, one exception at a time, for eighteen months.

Visibility: how much of the atmosphere you can see at all. What proportion of decisions reference a rule that was actually recorded. Whether the reasoning behind a rule was ever written down. Whether the record can be proved to an outsider. This group governs all the others, because a computation with missing atmospheric data is not a computation. It is a guess with arithmetic attached.

Trend: whether conditions are changing. This period against the same period last year, never against last quarter, because appraisal season is not drift. Whether a rule has moved from healthy to being routinely worked around. And when the shift actually began, which is more useful than knowing it happened.

Consensus: agreement among those releasing. Whether approvers endorsed or approved with reservations. Whether two people reviewing in parallel ever disagree, because if they agree every time across fifty decisions, one of them is not adding a judgement.

None of this is exotic mathematics. Most of it is counting things and dividing. The instruments on that aircraft are not sophisticated because the physics is mysterious; they are sophisticated because somebody bothered to measure carefully, for years, until the patterns were reliable.


### Why measurement, specifically


There is a difference between a forecast and a measurement, and it is worth being precise about, because it determines whether anyone trusts the system.

In India we have all made jokes about the meteorological department. An orange alert is issued, the day passes dry, and the credibility takes a small permanent dent. The forecast may have been perfectly correct, since a seventy percent chance of rain means no rain three times in ten, but a public that hears a warning and stays dry does not perform that arithmetic. It just stops believing.

A temperature reading has never had that problem. Nobody mocks a thermometer.

The ballistic computer on that aircraft is doing the second thing, not the first. It is not predicting whether the mission will succeed. It is measuring what the air is doing, right now, so the correction can be computed from facts.

That is the standard an organisational instrument should hold itself to.

"Eighteen exceptions this year, granted by four different approvers, seventy-two percent concentrated on one band transition" is a measurement. It cannot be wrong on Thursday. It can be checked, disputed, and traced back to specific records.

"This policy will fail next quarter" is a forecast, and every time it does not fail you spend a little of the trust you needed for the measurement.

The mathematics can support statements about what has historically happened. Of the rules that reached this state, roughly one in nine recovered without anyone deciding anything. That is genuinely useful, because it says waiting does not work. But it is a statement about a population, not a prophecy about one rule. The distinction is what separates an instrument from a fortune-teller.


### The instrument


An organisation can measure all of this, and almost none do. Not because the mathematics is hard, but because the raw material does not exist. You cannot compute how often a rule has been bent if nobody recorded which rule each decision was following.

That is the gap SigmaGo is built to close.

It records a decision as it is made, not reconstructed afterwards. It links each decision to the rule it follows or bends, which is what makes every parameter above computable at all. And at the moment somebody is about to approve something, it puts the conditions in front of them.

Not a recommendation. A correction.

This bends the mid-year increment cap. It is the fourth exception this year, granted previously by three different approvers who did not know about each other. All four cited retention. Seventy-two percent of exceptions to this rule are the same band transition, and this request is one of them. Forty-seven decisions currently rest on this rule. It has not been reviewed in thirty-one months.

Six lines. Every one count from the record. The approve button stays live throughout.

The system does not choose the target and it does not release. It tells the person deciding what the air is doing.


### Meritocracy is a measurement problem


There is a reason this matters beyond governance, and it may be the least obvious consequence of measuring at all.

Organisations describe themselves as meritocratic. Most mean it sincerely. But meritocracy is a claim about consistency: that similar cases are treated similarly, and that where they are not, there is a stated reason.

You cannot make that claim without measurement.

When four different managers each grant an exception without knowing about the others, the organisation has not made a decision about fairness. It has produced four separate acts of individual judgement that add up to a policy nobody wrote. Some people got the exception. Others, in similar situations, did not, because they asked a different manager, or asked in a different quarter.

That is not unfairness by intent. It is unfairness by invisibility, which is harder to see and harder to fix.

The moment exceptions are counted, the pattern becomes discussable. Seventy-two percent of these are the same band transition, and eleven of thirteen approvers gave the same reason. That is either a boundary that needs revising, or a population that has been quietly disadvantaged by a rule that no longer fits. Either way it is now a decision somebody can make deliberately.

Sustainability works the same way. An organisation survives its founders only if the reasoning behind its rules survives them too. A practice that outlives its reasoning is not continuity. It is inheritance, and inheritance is indistinguishable from good judgement right up until somebody asks why, and nobody can answer.


### The thing worth taking from Safed Sagar


What struck me was not the courage, though there was plenty of it.

It was that precision at speed, without visibility, was not achieved by being careful. It was achieved by knowing exactly which parameters mattered, measuring them properly, and computing the correction in the seconds available.

Careful would have meant slower. Slower would have meant more exposure. The measurement is what made the speed survivable.

Every leader releases decisions into an atmosphere. Rules already bent four times. Frameworks nobody can justify any more. Approval stages that add three days and change nothing. Exceptions clustering on one group of people that nobody has counted.

Nobody measures any of it. Every decision is released blind, and organisations spend a great deal of time being surprised about where things landed.

You cannot go fast blind. You can only go fast measured.
    `
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    period: '2022 — Present',
    role: 'HR Business Partner',
    organization: 'Zeta',
    sector: 'Fintech Unicorn & Banking Technology',
    description: 'HR Partner for Zeta Hyderabad—scaled the center to a 500+ employee technology hub and advised executive leadership across Engineering, Product, UX, Cloud, SRE, Data Science, and GTM.',
    achievements: [
      'HR Partner for Zeta Hyderabad; scaled the tech hub to 500+ employees across Cloud, SRE, and Data Science.',
      'Partnered with Finance and C-suite on product-wise workforce budgets (₹140 Cr) and predictive workforce health analytics.',
      'Facilitated performance calibrations for 500+ employees, differentiated top performers, and established structured succession frameworks.',
      'Honored with the Zeta Outstanding Employee Award (2022–23) for strategic contributions to organizational growth and people strategy.'
    ],
    decisionInsight: "Observed how fast-scaling tech companies accumulate 'decision debt'—rapid approvals and informal exceptions granted during hypergrowth become unexamined institutional assumptions that burden later operating efficiency."
  },
  {
    period: '2015 — 2022',
    role: 'Lead HR Business Partner / Talent & Org Specialist',
    organization: 'Hyundai Mobis R&D Center India',
    sector: 'Automotive R&D & Autonomous Systems',
    description: 'Scaled specialized R&D capability centers from early incubation to hundreds of specialized automotive software engineers (ADAS, chassis control, software-defined vehicle platforms).',
    achievements: [
      'Spearheaded hiring and onboarding architecture scaling engineering headcount from 0 to 400+ researchers.',
      'Engineered cross-cultural leadership frameworks connecting headquarters governance with local R&D velocity.',
      'Implemented enterprise HRIS modernization and structured compensation benchmarking frameworks.'
    ],
    decisionInsight: 'Discovered that corporate policies written at corporate headquarters inevitably encounter operational exceptions in regional R&D centers. When these exceptions are unrecorded, they quietly mutate into shadow policies.'
  }
];

export const OBSERVATIONS: Observation[] = [
  {
    id: 'obs-1',
    observation: 'Decisions Becoming Disconnected From Context',
    symptom: 'Teams know what the rule is, but no one knows why it was enacted or what problem it was originally intended to solve.',
    underlyingCause: 'Organizations record the transaction or policy clause, but treat the deliberation and trade-offs as ephemeral communication.',
    decisionIntelligenceSolution: 'The 4R Framework systematically records constraints, hypotheses, and discarded alternatives at the point of commitment.'
  },
  {
    id: 'obs-2',
    observation: 'Exceptions Becoming Invisible Precedent',
    symptom: 'A manager grants an urgent one-off exception to an employee or client; six months later, it has become an unwritten entitlement across the whole team.',
    underlyingCause: 'Exceptions are treated as isolated events rather than proto-policies. Without a governance loop, repetition creates informal law.',
    decisionIntelligenceSolution: 'SigmaGo monitors exception frequency and alerts governance committees before shadow precedents harden into entitlement.'
  },
  {
    id: 'obs-3',
    observation: 'Organizational Knowledge Leaving With People',
    symptom: 'When a seasoned executive or technical architect leaves, the department undergoes an operational shock and learning regression.',
    underlyingCause: 'Institutional memory is stored in the biological brains of employees rather than in an indexed corporate cortex.',
    decisionIntelligenceSolution: 'Decision management separates institutional wisdom from human tenure, allowing successors to query historical reasoning.'
  },
  {
    id: 'obs-4',
    observation: 'Policies Evolving Informally (Policy Drift)',
    symptom: 'The official employee handbook or SOP describes a process that nobody actually follows on the ground.',
    underlyingCause: 'Static policies cannot keep pace with real-world market friction, forcing employees to invent unmonitored workarounds.',
    decisionIntelligenceSolution: 'Policy Health scoring tracks the divergence between written policy rules and live operational decisions.'
  },
  {
    id: 'obs-5',
    observation: 'Leaders Repeatedly Solving Problems Solved Before',
    symptom: 'Executive committees spend hours debating the same vendor terms, remote work policies, or restructuring criteria they debated two years ago.',
    underlyingCause: 'Lack of retrievable precedent forces every new generation of leadership to restart from first principles.',
    decisionIntelligenceSolution: 'Precedent retrieval engines surface relevant past trade-offs and outcomes during live decision preparation.'
  },
  {
    id: 'obs-6',
    observation: 'Data Showing What Happened Without Explaining Why',
    symptom: 'Dashboards display a sudden drop in project velocity or an attrition spike, but provide zero explanation of the decisions that triggered it.',
    underlyingCause: 'Analytics systems aggregate transactional telemetry, completely detached from the strategic decision timeline.',
    decisionIntelligenceSolution: 'Decision telemetry correlates operational KPIs directly with historical management commitments.'
  }
];

export const APPOINTMENT_TYPES: AppointmentType[] = [
  {
    id: 'general',
    title: 'General Conversation',
    duration: '30 minutes',
    badge: 'Ideas & Organizations',
    description: 'For discussions around organizational dynamics, strategic HR partnering, decision making, or exchanging professional perspectives.',
    intendedFor: 'Leaders, peers, HR practitioners, and curious thinkers.',
    googleBookingParam: 'general-conversation'
  },
  {
    id: 'sigmago',
    title: 'SigmaGo Pilot Discussion',
    duration: '45 minutes',
    badge: 'Product & Technology',
    description: 'For organizations, enterprise leaders, prospective pilot partners, and investors interested in exploring SigmaGo for decision intelligence.',
    intendedFor: 'CHROs, CTOs, Founders, Operations Leaders, and Seed/Angel Investors.',
    googleBookingParam: 'sigmago-pilot'
  },
  {
    id: 'publishing',
    title: 'Book & Publishing Collaboration',
    duration: '30 minutes',
    badge: 'The Other Book',
    description: 'For publishers, literary agents, editors, reviewers, podcast hosts, and conference organizers exploring The Other Book and keynote topics.',
    intendedFor: 'Publishers, editors, podcast hosts, event curators.',
    googleBookingParam: 'publishing-book'
  },
  {
    id: 'research',
    title: 'Research & Thought Leadership',
    duration: '45 minutes',
    badge: 'Institutional Intelligence',
    description: 'For academic researchers, management consultants, and institutional thinkers exploring organizational memory, decision debt, and governance.',
    intendedFor: 'Academics, management researchers, authors, and advisors.',
    googleBookingParam: 'research-collaboration'
  }
];
