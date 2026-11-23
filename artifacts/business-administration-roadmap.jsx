import { useState } from "react";

/* ============================================================================
   BUSINESS ADMINISTRATION — Career Roadmap
   Aesthetic: "The Strategy Deck" — a light, structured management-consulting
   canvas. Signature: a 2x2 strategy matrix hero (the iconic MBA/consulting
   artifact) over a faint ledger grid. Navy ink + disciplined jewel accents.
   Type: Archivo (display) · Spline Sans (body) · Spline Sans Mono (data).
   ========================================================================== */

const C = {
  bg: "#E9EBEF",
  panel: "#FFFFFF",
  panelUp: "#F4F6F9",
  ink: "#14203A",
  dim: "#54607A",
  faint: "#94A0B4",
  line: "#D6DBE4",
  lineSoft: "#E4E8EE",
};

const font = {
  display: "'Archivo', system-ui, sans-serif",
  body: "'Spline Sans', system-ui, sans-serif",
  mono: "'Spline Sans Mono', ui-monospace, monospace",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      color: "#146C5B",
      intro:
        "The BBA / BSBA is a bachelor's-employable degree. Programs run about 120 credits, split between a business core and general education, and the internships and employer relationships your school offers shape where the degree leads.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            { name: "Financial & Managerial Accounting", detail: "The \"language of business\" and a course Michigan Ross students count among their hardest, because exams apply the concepts to unfamiliar scenarios; you learn to read and build the three financial statements before anything else clicks." },
            { name: "Micro & Macroeconomics", detail: "The supply-demand, incentives, and market logic that underpins every later finance and strategy course." },
            { name: "Business Statistics & Data Analytics", detail: "Probability, regression, and decision modeling — increasingly taught in Excel, R, or Python as the analytical backbone of modern management." },
            { name: "Corporate Finance", detail: "Time value of money, NPV, and cost of capital; the gateway to finance careers." },
            { name: "Principles of Marketing", detail: "Segmentation, positioning, the 4 Ps, and consumer behavior — the creative-analytical hinge of the degree." },
            { name: "Management & Organizational Behavior", detail: "How people, teams, and incentives actually work inside firms; the human counterweight to the quant core." },
            { name: "Operations & Management Science", detail: "Process design, quality, and optimization — how goods and services actually get produced and delivered." },
            { name: "Business Law & Ethics", detail: "Contracts, liability, and corporate responsibility; the guardrails around every business decision." },
            { name: "Strategic Management (Capstone)", detail: "The senior integrative course that ties every function together through cases and a simulation — the closest undergrad gets to the MBA case method." },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "🧠",
          items: [
            { name: "Financial modeling in Excel", detail: "Building and auditing spreadsheets is a portable hard skill, and some schools (Emory, for one) require an Excel course before entry; on its own, though, Excel is no longer a differentiator." },
            { name: "Data-driven decision making", detail: "Turning messy data into a defensible recommendation — the core of analyst work across every function." },
            { name: "Structured problem-solving", detail: "Framing an ambiguous business problem, sizing it, and arguing a path forward under time pressure." },
            { name: "Presentation & persuasion", detail: "Building a clean deck and defending it to a room is what separates the analyst who gets promoted." },
            { name: "Teamwork under deadline", detail: "Most coursework is group-based by design, mirroring how real business work is delivered." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🧰",
          items: [
            { name: "Excel & Google Sheets", detail: "Still the universal tool of business; fluency is a baseline expectation, though no longer a differentiator on its own." },
            { name: "SQL, Python & Tableau", detail: "Querying databases and building dashboards has moved from \"nice to have\" to a common expectation in tech-forward roles, and Python is becoming the new Excel in finance." },
            { name: "Decks (PowerPoint / Slides)", detail: "The primary output format of consulting and corporate work; structure and clarity matter more than students expect." },
            { name: "Generative AI (ChatGPT, Copilot)", detail: "Increasingly part of coursework and hiring. A PwC study (as reported by NDNU) puts the pay premium for AI skills at 56%, and HBR reports AI is dismantling the large junior classes firms used to train." },
            { name: "ERP & CRM (SAP, Salesforce)", detail: "The enterprise platforms that run real companies; exposure usually comes through internships and electives." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🎯",
          items: [
            { name: "Internships and return offers", detail: "In finance recruiting, applications for junior-summer internships open as early as sophomore fall, and summer programs convert to full-time offers at roughly 70-80% in strong markets. Recruiting calendars in other functions vary." },
            { name: "Case competitions", detail: "Team competitions often judged by practitioners; practice for case-style interviews and a way to meet recruiters." },
            { name: "Professional & alumni networks", detail: "Business fraternities, clubs, and alumni networks are a recognized route to referrals, especially in finance recruiting." },
            { name: "Leadership in student orgs", detail: "Running a club or a student-managed fund shows initiative and gives you concrete experience to discuss in interviews." },
            { name: "The school's employer pipeline", detail: "Which firms recruit on your campus shapes your early options; compare programs on placement outcomes, not the brochure." },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's / MBA",
      years: "Years ~5–7",
      color: "#9C5A2B",
      intro:
        "The MBA is the field's signature graduate degree — but rarely a straight-through step. Most MBA candidates are working professionals rather than straight-from-undergrad students, and the Executive MBA typically wants 10+ years of experience. Specialized master's fill the from-undergrad gap. Funding flips from the undergrad model: MBAs are largely self-funded, justified by post-degree compensation.",
      sections: [
        {
          title: "Program Types",
          icon: "🎓",
          items: [
            { name: "Two-year full-time MBA", detail: "The immersive, recruiting-heavy flagship — best for career switchers; most candidates arrive with work experience, and requirements vary by school." },
            { name: "One-year accelerated MBA", detail: "A compressed format that gets you back to work sooner, with less time for recruiting and pivoting." },
            { name: "Part-time / online MBA", detail: "Keep your job and income; 400+ AACSB schools now offer it online, some under $30k total." },
            { name: "Executive MBA (EMBA)", detail: "For senior leaders with 10+ years' experience; evaluates organizational scope over test scores, on a weekend/modular schedule." },
            { name: "Specialized master's (MS)", detail: "MS in Analytics, Finance, or Management: shorter and narrower than an MBA. GMAC data reported by Forbes puts median MBA pay more than $25k above other business master's." },
            { name: "Dual degrees (MBA+JD/MD/MS)", detail: "For leaders at the intersection of business and a regulated or technical field; cross-functional credibility." },
          ],
        },
        {
          title: "What You'll Learn",
          icon: "📊",
          items: [
            { name: "The case method", detail: "Learning strategy by dissecting real company decisions with cold-called classmates — the signature MBA pedagogy." },
            { name: "Corporate finance & valuation", detail: "DCFs, LBOs, and capital allocation at a depth well beyond the undergraduate course." },
            { name: "Competitive strategy", detail: "Frameworks for where to play and how to win, stress-tested against real cases and a capstone simulation." },
            { name: "Advanced analytics & AI for decisions", detail: "Leading programs such as Tepper, MIT Sloan, and NYU Stern's Tech MBA are building AI and analytics into the curriculum, and AI strategy electives are common." },
            { name: "Leadership & negotiation", detail: "Structured practice in the influence, presence, and negotiation skills the classroom uniquely provides." },
            { name: "Experiential consulting projects", detail: "Live client engagements where cohorts solve a real company's problem for credit." },
          ],
        },
        {
          title: "Funding & ROI",
          icon: "💵",
          items: [
            { name: "Mostly self-funded", detail: "Unlike a funded PhD, the MBA is an investment you pay for: about $60k on average, and about $253k on average at top-ranked US programs." },
            { name: "The comp bump", detail: "GMAC data reported by Forbes projects a 2025 median MBA salary of about $125k, roughly $50k above bachelor's holders; the payoff is concentrated in certain career paths." },
            { name: "Where ROI concentrates", detail: "Forbes (citing GMAC) calls the MBA clearly worth it for consulting, investment banking, private equity, and tech product management; elsewhere the payoff depends on your goals." },
            { name: "Demand is healthy", detail: "90%+ of employers planned to hire MBAs in 2025 and applications at leading schools rose 7%, but outcomes still vary by school and career path." },
          ],
        },
        {
          title: "Is It Worth It?",
          icon: "⚖️",
          items: [
            { name: "The payoff depends on the destination", detail: "The clearest returns are in consulting, banking, private equity, and tech product management; elsewhere the value depends on whether the degree unlocks the specific role you want." },
            { name: "Opportunity cost is the hidden price", detail: "Lost wages, fees, travel, and living costs add to tuition, so weigh the full cost, especially for a full-time program." },
            { name: "Misalignment is the real risk", detail: "A general MBA with no target pathway can underdeliver; the format should match the exact outcome you want." },
            { name: "The cheap path can still work", detail: "Some online programs cost under $30k in total, which changes the math if you don't need elite recruiting access." },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "PhD / Research",
      years: "Years ~8+",
      color: "#3A4DA0",
      intro:
        "Two very different doctorates share the name. The PhD is a roughly 4–7 year, usually funded, theory-driven research apprenticeship aimed at tenure-track academia; faculty pay is high relative to most academic fields, though the market for new doctorates is described as competitive. The DBA is a ~3-year, self-funded, part-time practitioner doctorate for working executives; it is aimed at practice rather than the research-tenure track.",
      sections: [
        {
          title: "PhD vs DBA",
          icon: "🔀",
          items: [
            { name: "PhD: the funded research track", detail: "4–7 years, full-time; many programs pay a stipend and tuition waiver in exchange for research and teaching, and the degree aims at tenure-track academia." },
            { name: "DBA: the self-funded practitioner track", detail: "~3 years, part-time, cohort-based, for working executives; an applied dissertation on a real organizational problem." },
            { name: "Different destinations", detail: "The PhD produces professors and researchers; the DBA produces Professors of Practice, consultants, and C-suite leaders — and if it teaches, usually off the tenure track." },
            { name: "Pick a discipline, not just \"business\"", detail: "PhD students specialize early: accounting, finance, marketing, management/OB, operations, information systems, or strategy." },
          ],
        },
        {
          title: "What the Work Looks Like",
          icon: "🔬",
          items: [
            { name: "Theory + methods coursework", detail: "Roughly two years of seminars built on a common research-methods core; finance PhDs add asset pricing, corporate finance, and econometrics." },
            { name: "Comprehensive exams", detail: "Qualifying exams that gate the transition from student to doctoral candidate." },
            { name: "The job-market paper", detail: "A single flagship paper you'll be hired on; publishing in top journals is the currency of the field." },
            { name: "The long publication clock", detail: "In accounting, papers take at least three years from start to a top-tier journal, through several revisions, and publications are the main tenure criterion." },
            { name: "Teaching duties", detail: "Most funded students teach or assist, building the record they'll be evaluated on at tenure time." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🧭",
          items: [
            { name: "AI & human-AI collaboration at work", detail: "Academy of Management scholars' 2026 predictions point to leaders adopting AI efficiencies, the risks of human-like AI at work, and human-AI collaboration." },
            { name: "AI adoption: widespread but shallow", detail: "Recent NBER work finds AI use is widespread but shallow, and interviews with consultants study how well generative AI fits specific tasks." },
            { name: "AI and entry-level employment", detail: "Stanford researchers report employment of 22 to 25 year olds fell 11% in high-AI-exposure occupations and rose 10% in low-exposure ones; they do not claim the data proves AI caused the gap." },
            { name: "Performance management & leadership practice", detail: "AOM's 2026 predictions also name the growing role of line managers, performance evaluation practices, interpersonal ties, and a rethink of DEI models." },
            { name: "Climate, ESG & private-markets finance", detail: "Finance research areas include climate and ESG finance, household finance, FinTech, and private credit, with behavioral finance still active." },
            { name: "Machine learning meets econometrics", detail: "Hybrid machine-learning and econometric methods are growing in computational finance, alongside entrepreneurial finance and venture capital research." },
          ],
        },
        {
          title: "The Academic Job Market",
          icon: "🏛️",
          items: [
            { name: "A competitive market for new PhDs", detail: "AACSB's 2026 faculty report says the new-doctorate market remains competitive and that many institutions face salary and hiring freezes. Older claims of a chronic faculty shortage date from 2014 to 2020." },
            { name: "The pay is high relative to most fields", detail: "AACSB 2025-26 assistant professor averages run about $170k in accounting, $180k in finance, $147k in marketing, $142k in information systems, and $133k in management." },
            { name: "BLS outlook: steady, not booming", detail: "BLS projects 6% growth for postsecondary business teachers from 2025 to 2035 (about 6,100 jobs), with a median of $99,080 across all institution types." },
            { name: "Positions are limited", detail: "BLS expects a limited number of full-time tenure and non-tenure positions in all disciplines, and funded PhD programs admit a limited number of students." },
            { name: "Publishing drives tenure", detail: "Publications are the main tenure criterion (reported for accounting), and the long publication clock applies whatever the market looks like." },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Management Consulting",
      icon: "🧩",
      color: "#3A4DA0",
      roles: ["Analyst / Associate", "Consultant", "Engagement Manager", "Principal", "Partner"],
      reality:
        "Among the highest-paying MBA destinations: Class of 2025 MBAs who took any consulting job had a median starting salary plus bonus of $205,310 (Bloomberg). Entry to MBB (McKinsey / Bain / BCG) is roughly a 1% funnel. HBR reports AI is dismantling the large junior classes firms used to rely on, and MBB firms expect AI proficiency.",
      salary: "Undergrad ~$100k base at many firms ($90k–$132k total) · MBB MBA hires $200k base (2027 starts) · Any-firm MBA median $205k start + bonus",
    },
    {
      path: "Corporate Finance & IB",
      icon: "💰",
      color: "#0E7A5F",
      roles: ["Financial Analyst", "IB Analyst", "Associate", "Finance Manager / VP", "CFO"],
      reality:
        "Two lanes. Corporate finance (FP&A, treasury, corporate development) is broadly accessible: financial managers earn a median of about $167k (BLS, May 2025) with 10% projected growth for 2025 to 2035, and financial and investment analysts about $103k. Investment banking is the high-intensity, high-pay lane: first-year analysts earn about $170k–$195k all-in for 60 to 80 hour weeks. Columbia Business School flags financial analyst work as the main MBA-relevant area seeing early AI impact.",
      salary: "Fin. analyst ~$103k · Fin. manager ~$167k median · IB analyst $170k–$195k all-in · IB associate $300k–$450k",
    },
    {
      path: "Marketing & Brand",
      icon: "🎯",
      color: "#B23A6B",
      roles: ["Coordinator", "Brand / Product Mktg Manager", "Marketing Manager", "Director", "CMO"],
      reality:
        "A broad, creative-meets-analytical path. Marketing managers earn a median of about $167k (BLS, May 2025; $161k in May 2024), with wide variation: in May 2024 the 10th percentile was below $81,900 and the 90th above $239,200. Market research analysts and marketing specialists earn about $79k. One industry blog puts product marketing managers at the top of the range.",
      salary: "Mktg specialist / analyst ~$79k · Manager ~$167k median · top 10% >$239k (BLS)",
    },
    {
      path: "Operations & Supply Chain",
      icon: "🔗",
      color: "#C2721C",
      roles: ["Operations Analyst", "Supply Chain Manager", "Ops / Plant Manager", "Director of Ops", "COO / CSCO"],
      reality:
        "The backbone path: every company that makes or moves anything needs it. General and operations managers earn a median of about $106k (BLS, May 2025) and logisticians $82,320, with logistician employment projected to grow 18% from 2025 to 2035 (about 26,600 openings a year). A recruiter blog citing ASCM puts directors above $225k in total compensation.",
      salary: "Logistician $82k median · Gen. & ops manager ~$106k · Director often $225k+ total comp · CSCO $300k–$500k+ (recruiter data)",
    },
    {
      path: "Product Management",
      icon: "🚀",
      color: "#6D45C9",
      roles: ["Associate PM", "Product Manager", "Senior PM", "Group PM / Director", "VP / CPO"],
      reality:
        "Where business training meets tech — PMs own the \"why and what\" of a product, sitting between engineering, design, and the business. Pay spreads very widely: Payscale's all-employer figure for entry-level associate PMs is a $77k average base, while Meta (one high-paying employer) averages about $174k total at the entry level and about $612k at L6 (Levels.fyi). A sponsored article names \"AI product manager\" as an emerging hybrid role.",
      salary: "Entry APM avg base $77k (Payscale, all employers) · Meta total comp $174k (L3) to $612k (L6), one high-paying employer",
    },
    {
      path: "Human Resources & People Ops",
      icon: "👥",
      color: "#2A7DA3",
      roles: ["HR Generalist", "HR Business Partner", "HR Manager", "Director of People", "CHRO"],
      reality:
        "Often underestimated on pay: HR managers earn a median of about $149k (BLS, May 2025; $140k in May 2024), and in May 2024 the top-paying industry was professional, scientific and technical services at about $164k. In May 2024 the 10th percentile was below $83,790 and the 90th above $239,200. HR specialists earn about $76k, Payscale reports entry-level \"HR manager\" titles averaging about $59k in total compensation, and BLS projects 5% growth from 2024 to 2034.",
      salary: "HR specialist ~$76k · HR manager ~$149k median · top 10% >$239k (BLS)",
    },
    {
      path: "General Management & C-Suite",
      icon: "🏢",
      color: "#172A46",
      roles: ["Operations Manager", "General Manager", "VP / GM", "COO / President", "CEO"],
      reality:
        "The classic destination the whole degree points toward: running a unit, a region, or a company. General and operations managers earn a median of about $106k and chief executives about $214k (BLS, May 2025), but those figures cover employers of every size; S&P 500 CEOs had median pay of $17.7 million in 2025 (AP/Equilar). Forbes notes chief executives at large corporations often hold MBAs, but there is no single route.",
      salary: "Gen. & ops manager ~$106k · Chief exec ~$214k median (BLS) · S&P 500 CEO median $17.7M (2025)",
    },
    {
      path: "Entrepreneurship",
      icon: "💡",
      color: "#C2410C",
      roles: ["Founder", "Co-Founder / CEO", "Small-Business Owner", "Franchisee", "Serial Entrepreneur"],
      reality:
        "The highest-variance path: no salary floor and no ceiling. BLS tracked private-sector establishments opened in 2013: 79.6% were still open after one year, 50.6% after five, and 34.7% after ten (these count establishments, not just firms). The real return, if it comes, is equity years later. One sponsored article argues AI is lowering the barrier to starting a company.",
      salary: "No reliable median · pay is irregular early on · return is equity-driven, not salary",
    },
  ],
};

/* 2x2 strategy-matrix quadrant labels — a real mapping of the field, not decor */
const QUADRANTS = [
  { label: "Strategy · Analytical", roles: "Consulting · Strategy", tint: "#3A4DA0" },
  { label: "Strategy · Interpersonal", roles: "General Mgmt · C-Suite", tint: "#172A46" },
  { label: "Execution · Analytical", roles: "Finance · Ops · Analytics", tint: "#0E7A5F" },
  { label: "Execution · Interpersonal", roles: "Marketing · Sales · HR", tint: "#B23A6B" },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Spline+Sans:wght@400;500;600&family=Spline+Sans+Mono:wght@400;500;600&display=swap');

.ba-root { min-height: 100vh; background: ${C.bg};
  background-image:
    linear-gradient(${C.lineSoft} 1px, transparent 1px),
    linear-gradient(90deg, ${C.lineSoft} 1px, transparent 1px);
  background-size: 26px 26px;
  font-family: ${font.body}; color: ${C.ink};
  -webkit-font-smoothing: antialiased; overflow-x: hidden;
}
.ba-wrap { max-width: 1080px; margin: 0 auto; padding: 40px 20px 64px; }

.ba-eyebrow { font-family: ${font.mono}; font-size: 11px; letter-spacing: 0.18em;
  text-transform: uppercase; color: ${C.dim}; margin-bottom: 14px; }
.ba-title { font-family: ${font.display}; font-weight: 800; letter-spacing: -0.02em;
  font-size: clamp(30px, 7vw, 56px); line-height: 1.02; margin: 0; color: ${C.ink}; }
.ba-tag { font-size: 15px; color: ${C.dim}; margin: 12px 0 0; max-width: 620px; line-height: 1.55; }

/* --- 2x2 matrix hero --- */
.ba-matrix-shell { margin: 26px 0 6px; display: flex; align-items: center; gap: 14px; }
.ba-axis-y { writing-mode: vertical-rl; transform: rotate(180deg);
  font-family: ${font.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  color: ${C.faint}; text-align: center; white-space: nowrap; }
.ba-matrix-col { flex: 1; min-width: 0; }
.ba-matrix { position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;
  gap: 2px; background: ${C.line}; border: 2px solid ${C.ink}; border-radius: 12px; overflow: hidden;
  aspect-ratio: 2.1 / 1; }
.ba-quad { background: ${C.panel}; padding: 12px 14px; display: flex; flex-direction: column;
  justify-content: space-between; min-width: 0; }
.ba-quad-label { font-family: ${font.mono}; font-size: 9.5px; letter-spacing: 0.1em;
  text-transform: uppercase; color: ${C.faint}; }
.ba-quad-roles { font-family: ${font.display}; font-weight: 700; font-size: clamp(12px, 2.6vw, 15px);
  line-height: 1.15; margin-top: 6px; }
.ba-axis-x { text-align: center; font-family: ${font.mono}; font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: ${C.faint}; margin-top: 8px;
  display: flex; justify-content: space-between; }

/* --- nav / tabs --- */
.ba-nav { display: flex; gap: 8px; overflow-x: auto; margin: 30px 0 22px; padding-bottom: 4px;
  scrollbar-width: none; -ms-overflow-style: none; }
.ba-nav::-webkit-scrollbar { display: none; }
.ba-tab { flex: 0 0 auto; font-family: ${font.body}; font-size: 13.5px; cursor: pointer;
  border-radius: 10px; padding: 10px 15px; transition: all .16s ease; white-space: nowrap; }
.ba-tab-years { font-family: ${font.mono}; font-size: 10px; margin-left: 8px; }

/* --- phase intro --- */
.ba-intro { border-left: 3px solid; padding-left: 16px; margin-bottom: 22px; max-width: 780px; }
.ba-intro-kicker { font-family: ${font.mono}; font-size: 11px; letter-spacing: 0.14em; margin-bottom: 6px; }
.ba-intro-body { margin: 0; color: ${C.ink}; font-size: 15px; line-height: 1.62; }

.ba-sub { display: flex; gap: 7px; overflow-x: auto; margin-bottom: 16px; padding-bottom: 4px;
  scrollbar-width: none; }
.ba-sub::-webkit-scrollbar { display: none; }
.ba-subtab { flex: 0 0 auto; font-family: ${font.body}; font-weight: 500; font-size: 12.5px; cursor: pointer;
  border-radius: 8px; padding: 8px 13px; background: transparent; transition: all .16s ease; white-space: nowrap; }

/* --- expandable items --- */
.ba-items { display: flex; flex-direction: column; gap: 8px; }
.ba-item { text-align: left; width: 100%; cursor: pointer; border-radius: 12px;
  padding: 15px 17px; transition: border-color .16s ease, background .16s ease; font-family: ${font.body}; }
.ba-item-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.ba-item-name { font-weight: 600; font-size: 14.5px; color: ${C.ink}; }
.ba-item-plus { font-family: ${font.mono}; font-size: 16px; flex: 0 0 auto; transition: transform .18s ease; }
.ba-item-detail { font-size: 13.5px; line-height: 1.6; color: ${C.dim};
  margin-top: 11px; padding-top: 11px; border-top: 1px solid ${C.lineSoft}; animation: ba-fade .2s ease; }

/* --- career grid --- */
.ba-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
.ba-card { text-align: left; cursor: pointer; background: ${C.panel}; border: 1px solid ${C.line};
  border-radius: 14px; padding: 18px; transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  font-family: ${font.body}; }
.ba-card:hover { transform: translateY(-2px); box-shadow: 0 10px 26px -14px rgba(20,32,58,0.35); }
.ba-card-top { display: flex; align-items: center; gap: 11px; margin-bottom: 12px; }
.ba-card-icon { font-size: 22px; }
.ba-card-title { font-family: ${font.display}; font-weight: 700; font-size: 16px; line-height: 1.1; }
.ba-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.ba-chip { font-family: ${font.mono}; font-size: 10px; letter-spacing: 0.01em; color: ${C.dim};
  background: ${C.panelUp}; border: 1px solid ${C.line}; border-radius: 6px; padding: 3px 8px; }
.ba-card-reality { font-size: 13px; line-height: 1.62; color: ${C.dim}; margin: 13px 0 0; animation: ba-fade .2s ease; }
.ba-salary { margin-top: 13px; padding: 10px 12px; border-radius: 10px; font-family: ${font.mono};
  font-size: 11.5px; line-height: 1.5; }

.ba-footer { margin-top: 34px; padding-top: 18px; border-top: 1px solid ${C.line};
  font-family: ${font.mono}; font-size: 10.5px; letter-spacing: 0.05em; color: ${C.faint};
  text-align: center; line-height: 1.7; }

@keyframes ba-fade { from { opacity: 0; transform: translateY(-3px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
@media (max-width: 520px) { .ba-matrix { aspect-ratio: 1.35 / 1; } }
`;

export default function BusinessAdministrationRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);

  const handlePhaseChange = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };
  const handleSectionChange = (i) => {
    setActiveSection(i);
    setExpandedItem(null);
  };

  const hexA = (hex, a) => {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
  };

  return (
    <div className="ba-root">
      <style>{CSS}</style>
      <div className="ba-wrap">

        {/* Header */}
        <header>
          <div className="ba-eyebrow">Career Roadmap · United States · 2026 · The Strategy Matrix</div>
          <h1 className="ba-title">Business Administration</h1>
          <p className="ba-tag">
            From the accounting core to the C-suite — the full arc of a business career,
            with the market realities the brochures leave out.
          </p>

          {/* 2x2 strategy-matrix hero */}
          <div className="ba-matrix-shell">
            <div className="ba-axis-y">← Execution&nbsp;&nbsp;·&nbsp;&nbsp;Strategy →</div>
            <div className="ba-matrix-col">
              <div className="ba-matrix">
                {QUADRANTS.map((q) => (
                  <div key={q.label} className="ba-quad" style={{ background: hexA(q.tint, 0.06) }}>
                    <span className="ba-quad-label">{q.label}</span>
                    <span className="ba-quad-roles" style={{ color: q.tint }}>{q.roles}</span>
                  </div>
                ))}
              </div>
              <div className="ba-axis-x">
                <span>← Analytical</span>
                <span>Interpersonal →</span>
              </div>
            </div>
          </div>
        </header>

        {/* Phase + Careers nav */}
        <nav className="ba-nav">
          {data.phases.map((p) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                className="ba-tab"
                onClick={() => handlePhaseChange(p.id)}
                style={{
                  border: `1px solid ${on ? p.color : C.line}`,
                  background: on ? C.panel : "transparent",
                  color: on ? p.color : C.dim,
                  fontWeight: on ? 600 : 500,
                }}
              >
                {p.label}
                <span className="ba-tab-years" style={{ color: on ? hexA(p.color, 0.65) : C.faint }}>
                  {p.years}
                </span>
              </button>
            );
          })}
          <button
            className="ba-tab"
            onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
            style={{
              border: `1px solid ${showCareers ? C.ink : C.line}`,
              background: showCareers ? C.ink : "transparent",
              color: showCareers ? "#fff" : C.dim,
              fontWeight: 600,
            }}
          >
            Career Paths
            <span className="ba-tab-years" style={{ color: showCareers ? "rgba(255,255,255,0.7)" : C.faint }}>
              8 LISTED
            </span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* Phase intro */}
            <div className="ba-intro" style={{ borderColor: phase.color }}>
              <div className="ba-intro-kicker" style={{ color: phase.color }}>
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p className="ba-intro-body">{phase.intro}</p>
            </div>

            {/* Section sub-tabs */}
            <div className="ba-sub">
              {phase.sections.map((s, i) => {
                const on = activeSection === i;
                return (
                  <button
                    key={s.title}
                    className="ba-subtab"
                    onClick={() => handleSectionChange(i)}
                    style={{
                      border: `1px solid ${on ? phase.color : C.line}`,
                      background: on ? hexA(phase.color, 0.08) : "transparent",
                      color: on ? phase.color : C.dim,
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{s.icon}</span>{s.title}
                  </button>
                );
              })}
            </div>

            {/* Expandable items */}
            <div className="ba-items">
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <button
                    key={item.name}
                    className="ba-item"
                    onClick={() => setExpandedItem(open ? null : i)}
                    style={{
                      background: open ? C.panel : C.panelUp,
                      border: `1px solid ${open ? phase.color : C.line}`,
                    }}
                  >
                    <div className="ba-item-row">
                      <span className="ba-item-name">{item.name}</span>
                      <span className="ba-item-plus" style={{
                        color: open ? phase.color : C.faint,
                        transform: open ? "rotate(45deg)" : "none",
                      }}>＋</span>
                    </div>
                    {open && <div className="ba-item-detail">{item.detail}</div>}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          /* Career grid */
          <div className="ba-grid">
            {data.careers.map((c, i) => {
              const open = expandedCareer === i;
              return (
                <button
                  key={c.path}
                  className="ba-card"
                  onClick={() => setExpandedCareer(open ? null : i)}
                  style={{ borderColor: open ? c.color : C.line }}
                >
                  <div className="ba-card-top">
                    <span className="ba-card-icon">{c.icon}</span>
                    <span className="ba-card-title" style={{ color: c.color }}>{c.path}</span>
                  </div>
                  <div className="ba-chips">
                    {c.roles.map((r) => <span key={r} className="ba-chip">{r}</span>)}
                  </div>
                  {open && <p className="ba-card-reality">{c.reality}</p>}
                  <div className="ba-salary" style={{
                    marginTop: open ? 13 : 13,
                    background: hexA(c.color, 0.08),
                    border: `1px solid ${hexA(c.color, 0.35)}`,
                    color: c.color,
                  }}>
                    {c.salary}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <footer className="ba-footer">
          Tap any item or card to expand · Figures are U.S., 2026<br />
          Sources: BLS OEWS & OOH (May 2024 & May 2025), GMAC via Forbes, AACSB 2025-26, Bloomberg, HBR, AP/Equilar, Levels.fyi, Payscale<br />Full citations: research/business-administration-research.md
        </footer>
      </div>
    </div>
  );
}
