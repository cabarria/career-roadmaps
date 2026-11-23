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
        "The BBA / BSBA is one of the few genuinely bachelor's-employable degrees — the diploma opens the door, but internships, recruiting pipelines, and your school's employer relationships do most of the work. Roughly 120 credits split between a business core and general education.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            { name: "Financial & Managerial Accounting", detail: "The \"language of business\" and the course that filters the most students; you learn to read and build the three financial statements before anything else clicks." },
            { name: "Micro & Macroeconomics", detail: "The supply-demand, incentives, and market logic that underpins every later finance and strategy course." },
            { name: "Business Statistics & Data Analytics", detail: "Probability, regression, and decision modeling — increasingly taught in Excel, R, or Python as the analytical backbone of modern management." },
            { name: "Corporate Finance", detail: "Time value of money, NPV, and cost of capital; a genuine weeder for the math-averse and the gateway to finance careers." },
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
            { name: "Financial modeling in Excel", detail: "Building and auditing spreadsheets is the single most portable hard skill a BBA leaves with; recruiters test it directly." },
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
            { name: "Excel & Google Sheets", detail: "Still the universal tool of business; fluency here is non-negotiable and assumed on day one of any job." },
            { name: "SQL, Tableau & Power BI", detail: "Querying databases and building dashboards has moved from \"nice to have\" to a baseline analytics expectation." },
            { name: "Decks (PowerPoint / Slides)", detail: "The primary output format of consulting and corporate work; structure and clarity matter more than students expect." },
            { name: "Generative AI (ChatGPT, Copilot)", detail: "Now embedded in coursework and hiring — AI skills carry a ~56% pay premium, but the tasks AI does best are exactly the ones juniors used to learn on." },
            { name: "ERP & CRM (SAP, Salesforce)", detail: "The enterprise platforms that run real companies; exposure via internships is worth more than any classroom demo." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🎯",
          items: [
            { name: "Internships (the real degree)", detail: "In a bachelor's-employable field the internship-to-return-offer pipeline matters more than GPA; the junior-summer internship is the primary hiring funnel." },
            { name: "Case competitions", detail: "Team competitions judged by real firms — a direct audition for consulting and corporate recruiting." },
            { name: "Professional & alumni networks", detail: "Business fraternities, clubs, and alumni drive access; who you know genuinely moves the needle here." },
            { name: "Leadership in student orgs", detail: "Running a club or a student-managed fund signals the initiative recruiters screen for more than coursework does." },
            { name: "The school's employer pipeline", detail: "Which firms recruit on your campus can matter as much as the degree — choose the program for its outcomes, not its brochure." },
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
        "The MBA is the field's signature graduate degree — but rarely a straight-through step. Top full-time programs expect 2–5 years of work experience first; the Executive MBA wants 10+. Specialized master's fill the from-undergrad gap. Funding flips from the undergrad model: MBAs are largely self-funded, justified by post-degree compensation.",
      sections: [
        {
          title: "Program Types",
          icon: "🎓",
          items: [
            { name: "Two-year full-time MBA", detail: "The immersive, recruiting-heavy flagship — best for career switchers, but it expects 2–5 years of prior work experience to get in." },
            { name: "One-year accelerated MBA", detail: "Faster and cheaper for those who don't need a summer internship to pivot; less recruiting runway." },
            { name: "Part-time / online MBA", detail: "Keep your job and income; 400+ AACSB schools now offer it online, some under $30k total." },
            { name: "Executive MBA (EMBA)", detail: "For senior leaders with 10+ years' experience; evaluates organizational scope over test scores, on a weekend/modular schedule." },
            { name: "Specialized master's (MS)", detail: "MS in Analytics, Finance, or Management — built for younger candidates who lack the work experience an MBA demands." },
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
            { name: "Advanced analytics & AI for decisions", detail: "Every top program now runs AI strategy, machine learning, and data-ethics electives as core, not optional." },
            { name: "Leadership & negotiation", detail: "Structured practice in the influence, presence, and negotiation skills the classroom uniquely provides." },
            { name: "Experiential consulting projects", detail: "Live client engagements where cohorts solve a real company's problem for credit." },
          ],
        },
        {
          title: "Funding & ROI",
          icon: "💵",
          items: [
            { name: "Mostly self-funded", detail: "Unlike a funded PhD, the MBA is an investment you pay for: ~$60k on average, but $200k–$250k+ at top programs." },
            { name: "The comp bump", detail: "Median post-MBA starting salary runs ~$125k (GMAC); MBA holders average ~$165k — the ROI is real but concentrated." },
            { name: "Where ROI concentrates", detail: "Consulting, investment banking, private equity, and tech product management deliver the fastest payback; many other roles don't." },
            { name: "Demand is healthy", detail: "90%+ of employers planned to hire MBAs in 2025 and applications rose 7% — but brand and recruiting access drive outcomes, not the format." },
          ],
        },
        {
          title: "Is It Worth It?",
          icon: "⚖️",
          items: [
            { name: "It's the pipeline, not the classroom", detail: "Most of an MBA's value is the recruiting funnel, the pivot it enables, and the network — not the coursework itself." },
            { name: "Opportunity cost is the hidden price", detail: "Two years of forgone salary often dwarfs tuition; the full-time MBA only pencils out if you need its recruiting access." },
            { name: "Misalignment is the real risk", detail: "A general MBA with no target pathway can underdeliver; the format should match the exact outcome you want." },
            { name: "The cheap path can still work", detail: "An online or part-time MBA under $30k can beat a $250k program on ROI if you don't need elite recruiting." },
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
        "Two very different doctorates share the name. The PhD is a 4–7 year, fully-funded, theory-driven research apprenticeship aimed at tenure-track academia — and, unusually, it lands in one of the strongest, best-paid academic markets of any discipline. The DBA is a ~3-year, self-funded, part-time practitioner doctorate for working executives; it does not lead to the research-tenure track.",
      sections: [
        {
          title: "PhD vs DBA",
          icon: "🔀",
          items: [
            { name: "PhD: the funded research track", detail: "4–7 years, full-time, with a stipend and tuition waiver in exchange for research and teaching; aims squarely at tenure-track academia." },
            { name: "DBA: the self-funded practitioner track", detail: "~3 years, part-time, cohort-based, for working executives; an applied dissertation on a real organizational problem." },
            { name: "Different destinations", detail: "The PhD produces professors and researchers; the DBA produces Professors of Practice, consultants, and C-suite leaders — and if it teaches, usually off the tenure track." },
            { name: "Pick a discipline, not just \"business\"", detail: "PhD students specialize early: accounting, finance, marketing, management/OB, operations, information systems, or strategy." },
          ],
        },
        {
          title: "What the Work Looks Like",
          icon: "🔬",
          items: [
            { name: "Theory + methods coursework", detail: "Two years of seminars plus heavy training in econometrics, causal inference, experimental design, or psychometrics depending on the field." },
            { name: "Comprehensive exams", detail: "Qualifying exams that gate the transition from student to doctoral candidate." },
            { name: "The job-market paper", detail: "A single flagship paper you'll be hired on; publishing in top journals is the currency of the field." },
            { name: "The long publication clock", detail: "Papers routinely take 3+ years from idea to a top-tier journal, through multiple rejections and revisions." },
            { name: "Teaching duties", detail: "Most funded students teach or assist, building the record they'll be evaluated on at tenure time." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🧭",
          items: [
            { name: "AI & algorithmic management", detail: "How AI reshapes work, hiring, and the very structure of firms is among the hottest current research areas." },
            { name: "Platform & gig-economy strategy", detail: "Two-sided markets, network effects, and how platforms compete and get regulated." },
            { name: "Behavioral finance & operations", detail: "Applying psychology to markets and to operational decisions — a mature but still-active frontier." },
            { name: "ESG, sustainability & governance", detail: "Stakeholder capitalism, climate risk, and what actually drives corporate behavior." },
            { name: "Causal inference with big data", detail: "Squeezing credible cause-and-effect claims out of massive observational datasets." },
            { name: "Entrepreneurship & innovation ecosystems", detail: "How new ventures, venture capital, and regional clusters actually create growth." },
          ],
        },
        {
          title: "The Academic Job Market",
          icon: "🏛️",
          items: [
            { name: "The anti-humanities story", detail: "Unlike most PhDs, business faculty are in chronic short supply — especially accounting and finance — so placement is strong." },
            { name: "The pay is unusually high", detail: "Assistant professors of accounting average ~$149k for nine months, with the top quartile above $188k; finance is comparable." },
            { name: "Faster-than-average growth", detail: "BLS projects ~7% growth for postsecondary business teachers over the decade." },
            { name: "But the front door is narrow", detail: "Top PhD programs admit a tiny handful per specialization each year; getting in is far harder than getting placed." },
            { name: "It's still a grind", detail: "A full research career with an up-or-out tenure clock and relentless publishing pressure — the strong market doesn't remove that." },
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
        "The most-coveted MBA destination and among the highest-paying entries — Class of 2025 MBAs entering consulting had median starting comp around $205k. But it's a genuine tournament: MBB (McKinsey / Bain / BCG) admit rates run in the low single digits, the up-or-out pyramid is steep, and AI is now hollowing the analyst tier that used to be the on-ramp — firms increasingly expect AI proficiency and hire smaller junior classes.",
      salary: "Undergrad analyst $90k–$110k · MBB post-MBA ~$205k total · Partner $1M+",
    },
    {
      path: "Corporate Finance & IB",
      icon: "💰",
      color: "#0E7A5F",
      roles: ["Financial Analyst", "IB Analyst", "Associate", "Finance Manager / VP", "CFO"],
      reality:
        "Two lanes. Corporate finance (FP&A, treasury, corporate development) is broadly accessible and stable — financial managers earn a median ~$162k with fast 15% projected growth. Investment banking is the high-intensity, high-pay lane: first-year analysts clear ~$150k–$200k all-in but work brutal hours, with seats concentrated at a handful of banks. AI is already reshaping the junior's modeling-and-deck work, pushing value toward judgment and client relationships.",
      salary: "Corp finance $70k–$160k+ · IB analyst $150k–$200k all-in · MD $500k–$1M+ (BLS undercounts front office)",
    },
    {
      path: "Marketing & Brand",
      icon: "🎯",
      color: "#B23A6B",
      roles: ["Coordinator", "Brand / Product Mktg Manager", "Marketing Manager", "Director", "CMO"],
      reality:
        "A broad, creative-meets-analytical path. Marketing managers earn a median ~$161k (BLS), though entry coordinator roles start far lower and pay is unusually variable by industry, company stage, and specialization — product marketing tends to top the range. AI fluency now adds a documented 15–22% premium as the function goes data- and automation-heavy; the roles most exposed are routine content and analytics tasks, not brand strategy.",
      salary: "Coordinator $55k–$70k · Manager ~$161k median · CMO $250k+ · top 10% >$239k (BLS)",
    },
    {
      path: "Operations & Supply Chain",
      icon: "🔗",
      color: "#C2721C",
      roles: ["Operations Analyst", "Supply Chain Manager", "Ops / Plant Manager", "Director of Ops", "COO / CSCO"],
      reality:
        "The backbone path — every company that makes or moves anything needs it, which makes it unusually recession-resistant. General and operations managers earn a median ~$103k (BLS), but specialized supply-chain leaders clear six figures easily and directors often top $225k in total comp; logistician roles are projected to grow 17% (nearly 5x average). It rewards analytics (SQL, SAP/Oracle, planning tools) and is being reshaped — not replaced — by AI-driven forecasting.",
      salary: "Analyst $60k–$80k · Supply chain mgr $95k–$150k · Director $180k–$225k+ · CSCO $300k–$500k+",
    },
    {
      path: "Product Management",
      icon: "🚀",
      color: "#6D45C9",
      roles: ["Associate PM", "Product Manager", "Senior PM", "Group PM / Director", "VP / CPO"],
      reality:
        "Where business training meets tech — PMs own the \"why and what\" of a product, sitting between engineering, design, and the business. Total comp at established tech firms runs ~$150k–$250k+, with senior and principal roles well past $300k, but it's fiercely competitive and usually rewards a technical or analytical adjacency; breaking in cold from a generalist BBA is hard. Ironically it's also a role AI is expanding — \"AI product manager\" is a fast-growing hybrid title.",
      salary: "APM $110k–$140k · PM total comp $150k–$250k+ · Principal/Director $300k+ (big tech)",
    },
    {
      path: "Human Resources & People Ops",
      icon: "👥",
      color: "#2A7DA3",
      roles: ["HR Generalist", "HR Business Partner", "HR Manager", "Director of People", "CHRO"],
      reality:
        "Often underestimated on pay — HR managers earn a median ~$140k (BLS), rising to ~$164k in tech and professional services, with the top decile above $239k. Entry generalist roles start modestly, and advancement rewards specialization (comp & benefits, talent, org development) and a strategic, data-literate approach. It's among the more automation-resistant business functions, because the core work is judgment, negotiation, and human relationships.",
      salary: "Generalist $55k–$70k · HR manager ~$140k median · CHRO $250k+ · top 10% >$239k (BLS)",
    },
    {
      path: "General Management & C-Suite",
      icon: "🏢",
      color: "#172A46",
      roles: ["Operations Manager", "General Manager", "VP / GM", "COO / President", "CEO"],
      reality:
        "The classic destination the whole degree points toward — running a unit, a region, or a company. General and operations managers earn a median ~$103k, while chief executives sit at a median ~$206k (BLS) — but that figure badly undercounts the ceiling, since public-company CEO packages run into the millions once equity is counted. There's no straight line here: it's built over 15–25 years through P&L results, and an MBA is common but not required.",
      salary: "GM $100k–$180k · Chief exec ~$206k median (BLS) · public-company CEO $1M–$20M+",
    },
    {
      path: "Entrepreneurship",
      icon: "💡",
      color: "#C2410C",
      roles: ["Founder", "Co-Founder / CEO", "Small-Business Owner", "Franchisee", "Serial Entrepreneur"],
      reality:
        "The highest-variance path by far — no salary floor, no ceiling, and roughly 90% of startups ultimately fail. Early founder pay is often below what the same person could earn employed, and the real return (if it comes) is equity years later. What's changed: AI is sharply lowering the cost of building and testing, letting tiny teams do what once took specialists. Business training helps most with the unglamorous parts — unit economics, cash flow, and hiring.",
      salary: "Highly variable · often <$50k early (or $0) · return is equity-driven, not salary",
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
          Sources: BLS OEWS (May 2024 & May 2025), GMAC, AACSB, Bloomberg, HBR & industry compensation data
        </footer>
      </div>
    </div>
  );
}
