import { useState } from "react";

/* ── FINANCE ROADMAP ─ terminal aesthetic ──
   bg ink #0C1017 · panel #141B28 · amber #FFB020
   market-green #2BD576 · signal-blue #4DA6FF · sell-red #FF5A6E
   display: Archivo · body: IBM Plex Sans · data: IBM Plex Mono */

const C = {
  bg: "#0C1017",
  panel: "#141B28",
  panelUp: "#1B2434",
  line: "#232E42",
  text: "#E8ECF4",
  dim: "#8A93A6",
  faint: "#5A6478",
  amber: "#FFB020",
  green: "#2BD576",
  blue: "#4DA6FF",
  red: "#FF5A6E",
};

const ticker = [
  { s: "IB YR1 ALL-IN", v: "$170–195K", up: true },
  { s: "FIN ANALYST MEDIAN (BLS)", v: "$101,350", up: true, inSummary: true },
  { s: "CFA L1 PASS RATE", v: "39%", up: false },
  { s: "ADVISOR JOBS 2024–34", v: "+10%", up: true },
  { s: "FIN EXAMINER JOBS", v: "+19%", up: true },
  { s: "REPORTED WALL ST AI CUTS", v: "200K", up: false },
  { s: "PE ASSOCIATE COMP", v: "$250–330K", up: true },
  { s: "QUANT JR BASE", v: "$150–250K", up: true },
  { s: "SUMMER→FT CONVERT", v: "70–80%", up: true },
];

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "YRS 1–4",
      color: C.green,
      intro:
        "Finance is usually a BBA/BSBA inside a business school, built on two pillars: investments & capital markets, and corporate finance. But coursework isn't what defines these four years; the recruiting calendar is. Investment banking internship applications start posting in the fall of sophomore year, more than 18 months before the internship begins.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📊",
          items: [
            {
              name: "Financial & Intermediate Accounting",
              detail:
                "Accounting sits in the business core at every program surveyed (Illinois requires ACCY 201 and 202). Illinois notes that many employers look favorably on additional accounting, and Babson says its students who landed finance offers most often took Intermediate Accounting for Finance.",
            },
            {
              name: "Foundations of Finance",
              detail:
                "At NYU Stern, Foundations of Finance followed by Corporate Finance is the standard two-course entry to both pillars: investments/capital markets and corporate finance.",
            },
            {
              name: "Corporate Finance",
              detail:
                "Capital budgeting, capital structure, payout policy, and corporate governance: how firms raise and deploy money, and the markets for corporate control (M&A).",
            },
            {
              name: "Investments & Portfolio Theory",
              detail:
                "Valuation of equities, fixed income, and derivatives; portfolio construction; performance evaluation; and how capital markets and their regulators actually work.",
            },
            {
              name: "Economics & Statistics Core",
              detail:
                "Foundation courses typically cover economics, mathematics, computing and accounting (University of Florida). Illinois requires a computer science course in the first year.",
            },
            {
              name: "Financial Modeling",
              detail:
                "Building 3-statement models, DCF valuations, and comps in Excel. Often an elective, but functionally mandatory: it's what banks test in interviews.",
            },
            {
              name: "Derivatives & Fixed Income Electives",
              detail:
                "Fixed income and derivative securities sit in the investments/capital-markets pillar (NYU Stern, UT Austin), and are the natural courses for anyone eyeing quant or markets roles.",
            },
          ],
        },
        {
          title: "Skills You'll Develop",
          icon: "🛠️",
          items: [
            {
              name: "Excel at a professional level",
              detail:
                "Still the working language of banking and corporate finance, but Brookings reports Excel is no longer a differentiator on its own.",
            },
            {
              name: "Valuation (DCF, comps, LBO basics)",
              detail:
                "Banks prioritize modeling (DCF, LBO, merger models), accounting and the three statements, valuation and attention to detail (QuintEdge).",
            },
            {
              name: "Python & SQL",
              detail:
                "\"Python is fast becoming the new Excel\"; Brookings' phrase for where finance skills are heading. Pairing data skills with finance knowledge is the profile employers describe wanting (Brookings, Forbes).",
            },
            {
              name: "Accounting fluency",
              detail:
                "Understanding how the three financial statements link. Illinois and Babson both recommend more accounting than the finance major strictly requires.",
            },
            {
              name: "Pitching & communication",
              detail:
                "Forbes argues that as automation strips out repetitive analysis, young bankers must develop executive presence and client-facing judgment much earlier in their careers.",
            },
          ],
        },
        {
          title: "The Recruiting Gauntlet",
          icon: "⏱️",
          items: [
            {
              name: "The sophomore-year clock",
              detail:
                "Junior-summer IB applications start posting around September of sophomore year, surge January to March, and interviews are rolling. In the summer 2027 cycle Adventis counted 15 firms posting August to November, 27 in December and 46 in January; some PE and advisory firms posted even earlier. Early submission is a real advantage.",
            },
            {
              name: "Early insights programs",
              detail:
                "Freshman/sophomore programs at banks (many diversity-focused, some open to all) that feed directly into internship interview pipelines. Apply to as many as possible.",
            },
            {
              name: "The junior summer internship",
              detail:
                "The capstone of undergrad finance: summer analyst programs convert to full-time offers at 70–80% rates in strong markets. Miss this window and full-time recruiting gets much harder.",
            },
            {
              name: "Finance clubs & student funds",
              detail:
                "Adventis notes that membership in selective banking-focused organizations is a substantial advantage, and Leland ranks school finance clubs by recruiting outcomes.",
            },
            {
              name: "Networking & referrals",
              detail:
                "Internal referrals are among the most powerful factors in getting an application seen. Recent alumni (two to five years out) are the most useful contacts, and relationships built over months matter more than a last-minute ask (Prospect Rock).",
            },
            {
              name: "Target vs. non-target reality",
              detail:
                "A GPA above roughly 3.5 to 3.7 keeps most doors open, but school pipelines are real. Students at schools without banking legacies still break in each cycle (Adventis); Leland notes non-target schools face tougher competition.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🖥️",
          items: [
            {
              name: "Bloomberg Terminal",
              detail:
                "Bloomberg and Capital IQ are the market-data platforms that newer AI research tools are positioned against (Mergers & Inquisitions). Ask whether your school provides terminal access.",
            },
            {
              name: "Data-gathering tools",
              detail:
                "Screening, comps and data-gathering are the tasks AI tools like Hebbia and Shortcut AI target first (Mergers & Inquisitions), so learn the manual workflow before automating it.",
            },
            {
              name: "AI copilots: learn it raw first",
              detail:
                "The consistent practitioner advice (Wall Street Oasis): master each modeling skill by hand before automating it, or you can't check the AI's work. Bankers worry about juniors who offload their learning to AI.",
            },
            {
              name: "Early credentials",
              detail:
                "300Hours warns that a lone CFA Level 1 pass is a partial credential that doesn't quite count, so start the CFA only if you intend to finish; it pays off most in asset management and research.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's & Credentials",
      years: "YRS ~5–7",
      color: C.amber,
      intro:
        "Here's what makes finance unusual: no graduate degree is required to enter the profession. BLS lists a bachelor's degree as typical entry for analysts and advisors, with a master's and certification improving chances for advancement. Three distinct degree products serve three different people, and a fourth path, the CFA charter, competes with all of them.",
      sections: [
        {
          title: "Degree Options",
          icon: "🎓",
          items: [
            {
              name: "MS in Finance (MSF)",
              detail:
                "One to two years, focused on financial theory, markets, risk and investments (National University), and generally cheaper than an MBA.",
            },
            {
              name: "MBA (finance concentration)",
              detail:
                "Practitioners advise taking it three to five years into a career rather than straight from undergrad. Broad (strategy, leadership, marketing) and the most expensive option; practitioner forums describe it as best for career switchers and aspiring managers. Mergers & Inquisitions warns that private equity roles right after an MBA are nearly impossible without prior banking or PE experience.",
            },
            {
              name: "MFE / Quant Master's",
              detail:
                "Stochastic calculus, derivative pricing and serious programming. Stratus Admissions says some programs require coding for admission and that classmates without it start behind. Berkeley's MFE reported 129 offers for 67 students in 2018 (2019 report); practitioner forums stress that program reputation matters.",
            },
            {
              name: "STEM designation",
              detail:
                "Some programs carry STEM designation (Stevens' MBA concentrations, Iowa's finance PhD), which gives international students a 24-month OPT extension (Stevens). Check each program.",
            },
          ],
        },
        {
          title: "The CFA Charter",
          icon: "📜",
          items: [
            {
              name: "Three levels, ~300 hours each",
              detail:
                "Recent pass rates: Level 1 about 39%, Level 2 about 43%, Level 3 about 50%. UK NARIC benchmarks the levels from diploma (L1) to bachelor's (L2) to master's (L3) difficulty.",
            },
            {
              name: "Only 10–20% ever finish",
              detail:
                "Estimates run from 10 to 15% of Level 1 candidates (300Hours) to about 20% of enrolled candidates (Katalyst). Budget $5,500 to $6,000+ including a likely retake; many employers reimburse, some with clawback clauses (Test Prep Insight).",
            },
            {
              name: "Who it's actually for",
              detail:
                "Investment management, equity research and portfolio strategy. Practitioner forums say MFin and MBA have broader exits, and FP&A salary guides still list the CFA among pay-boosting certifications (Datarails).",
            },
            {
              name: "Charter + experience requirement",
              detail:
                "Passing all three exams isn't enough; the designation also requires qualifying work experience. There is no such thing as being \"CFA Level 1 certified.\"",
            },
          ],
        },
        {
          title: "Licenses & Gates",
          icon: "🪪",
          items: [
            {
              name: "FINRA securities licenses",
              detail:
                "Client-facing securities roles carry FINRA registration requirements that employers typically handle after hiring. This research pass did not verify specifics, so confirm current exams with FINRA or your employer.",
            },
            {
              name: "CFP: the planning credential",
              detail:
                "A voluntary certification with real requirements: a bachelor's degree plus CFP Board registered coursework, a 170-question exam, and 6,000 hours of experience (or 4,000 apprenticeship hours). SmartAsset says credentials like this may lift advisor pay by 30% or more.",
            },
            {
              name: "FRM: the risk credential",
              detail:
                "GARP's two-part Financial Risk Manager exam (long-run pass rates about 46% and 55%) is narrower than the CFA, with two parts instead of three levels.",
            },
            {
              name: "CPA adjacency",
              detail:
                "Finance Alliance says most FP&A managers hold a CPA or MBA, and Mergers & Inquisitions says controllership is the more useful CFO route at smaller companies, FP&A at larger ones.",
            },
          ],
        },
        {
          title: "Advanced Skills & AI",
          icon: "🤖",
          items: [
            {
              name: "Quant toolkit",
              detail:
                "Stochastic calculus, PDEs, machine learning and programming. Berkeley's MFE director described the program as \"much more technical, more data-science oriented\" than an MBA or MFin (2019).",
            },
            {
              name: "The credential shift",
              detail:
                "Brookings' research on AI in finance notes a decline in the power of traditional credentials (MBA, CFA) relative to demonstrated judgment about models; knowing when not to trust an AI output is becoming the differentiating skill.",
            },
            {
              name: "AI-era hybrid roles",
              detail:
                "AI governance managers, model validators, and finance-automation engineers are emerging as real, well-paid job categories ($130–180K mid-level) that barely existed five years ago.",
            },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD / Research",
      years: "YRS ~8+",
      color: C.blue,
      intro:
        "A finance PhD is not a higher-level MBA; Stanford GSB calls it an advanced, academically oriented degree in financial economics. Typically four to six years (five at most programs), funded with tuition waiver and stipend at research schools. Graduates go primarily to academic and research institutions, with some moving into industry (Columbia). Finance faculty are the second-highest-paid business-school discipline (AACSB 2025-26: $190,553 mean).",
      sections: [
        {
          title: "Program Structure",
          icon: "🧭",
          items: [
            {
              name: "Years 1–2: the theory core",
              detail:
                "Economics and econometrics plus PhD sequences in asset pricing and corporate finance (Ohio State, Miami). Oregon runs a short mathematical-tools course before the first term.",
            },
            {
              name: "Comprehensive exams",
              detail:
                "Written (and sometimes oral) qualifying exams around the end of year two gate candidacy; passing earns ABD status at Memphis and admission to candidacy at Miami and Ohio State.",
            },
            {
              name: "Years 3–5: papers and the job market",
              detail:
                "One or two required research papers, a dissertation proposal (ideally defended by the end of year three at Oregon), and a job market paper that showcases your work. Year five is spent on the market, defending and graduating (Ohio State).",
            },
            {
              name: "Funding model",
              detail:
                "Tuition waiver plus stipend is standard at research programs, in exchange for teaching and research assistance. MyStudyFuture says most strong programs fund their students; compare funding guarantees by year.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔬",
          items: [
            {
              name: "Climate & ESG finance",
              detail:
                "How transition and physical climate risk get priced into credit, equities and bank portfolios. Duke Fuqua lists Climate and ESG as a core finance research area, and BIS Innovation Hubs treat climate finance as a main interest. A 2026 arXiv survey adds climate risk in private credit as an open question.",
            },
            {
              name: "Household finance",
              detail:
                "How households borrow, save and invest, including mortgage markets and defaults. A standing research area at Duke Fuqua.",
            },
            {
              name: "FinTech & digital footprints",
              detail:
                "Credit scoring from non-traditional data and platform lending. Published work by Berg, Burg and coauthors studies credit scoring from digital footprints, and Duke Fuqua lists FinTech as a research area.",
            },
            {
              name: "Private credit & non-bank lending",
              detail:
                "A 2026 arXiv survey says systemic-risk measurement and climate/ESG integration in opaque private credit markets lack systematic academic study, which makes it open territory for dissertations.",
            },
            {
              name: "Machine learning in asset pricing",
              detail:
                "A systematic review of 22 studies (2024 to 2026) finds hybrid ML/econometric frameworks improving prediction in asset pricing, volatility forecasting, credit risk and policy analysis, helped by richer data and more compute.",
            },
          ],
        },
        {
          title: "The Job Market",
          icon: "🎯",
          items: [
            {
              name: "Academia and faculty pay",
              detail:
                "Iowa and Columbia list placements at research universities as the main outcome. AACSB's 2025-26 survey puts finance faculty at a $190,553 mean salary ($170,000 median), second only to real estate, with finance assistant professors around $180K (Americas, AACSB-survey schools). Former Rotman dean Roger Martin attributes high business-school pay to a structural shortage of business PhDs (2020 opinion).",
            },
            {
              name: "Policy & central banking",
              detail:
                "Federal Reserve, SEC, IMF and World Bank (MyStudyFuture) and Treasury's Office of Financial Research (USC placements) hire finance PhDs as economists.",
            },
            {
              name: "Industry research",
              detail:
                "Asset management, hedge funds, banks and consulting firms such as Cornerstone Research hire finance PhDs. Iowa's STEM-designated program advertises this \"alt-ac\" flexibility.",
            },
          ],
        },
        {
          title: "Computation & Data",
          icon: "💻",
          items: [
            {
              name: "Data skills expected on arrival",
              detail:
                "Memphis says students should arrive able to process data for empirical research, and calls its program quantitative in nature.",
            },
            {
              name: "Machine learning as a method",
              detail:
                "A 2024 to 2026 review finds ML and deep learning increasingly integrated into financial research, so expect to use them as methods rather than only study them.",
            },
            {
              name: "The quantitative bar at admission",
              detail:
                "Programs describe themselves as quantitative and expect a strong quantitative background (Memphis); Ohio State says students entering without a master's-level degree or related coursework may need extra courses.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Investment Banking",
      icon: "🏦",
      color: C.amber,
      roles: ["Summer Analyst", "Analyst", "Associate", "VP", "Managing Director"],
      reality:
        "The famous path, and the most front-loaded: your shot is largely decided by sophomore-year recruiting. Expect 60–80+ hour weeks and a two-year analyst stint treated as a credential, not a destination. AI is automating pitchbook assembly and basic modeling; Forbes cites a Bloomberg Intelligence projection of up to 200,000 Wall Street job cuts concentrated in junior roles. Practitioners on Wall Street Oasis argue front-office hiring will slow rather than stop, and QuintEdge reports no headcount or pay reduction as of 2026.",
      ai: "High exposure at the junior task level; relationship and negotiation work is insulated. Learn modeling raw, then automate.",
      salary: "$170K–$195K all-in (Yr 1) → $300K–$450K (Associate), industry data, not BLS",
    },
    {
      path: "Private Equity & Buy-Side",
      icon: "💼",
      color: "#C08BFF",
      roles: ["PE Analyst", "Associate", "Senior Associate", "VP / Principal", "Partner"],
      reality:
        "The standard destination after banking: mega-fund associates are overwhelmingly former bulge-bracket or elite-boutique analysts, and on-cycle interviews can run from first contact to offer in a single evening. Direct-from-undergrad PE analyst seats are growing but usually pay less than an IB analyst (Mergers & Inquisitions). Carried interest at senior levels is where outsized wealth lives, though it may take a decade or more to materialize.",
      ai: "Moderate: diligence and screening are automating, but judgment on illiquid, negotiated deals stays human.",
      salary: "$250K–$330K+ (Associate); PE analyst average $178.6K on Glassdoor; Partners into the millions with carry",
    },
    {
      path: "Quantitative Finance",
      icon: "📐",
      color: C.blue,
      roles: ["Quant Researcher", "Quant Trader", "Quant Developer", "Strats", "Quant PM"],
      reality:
        "Honest note: a finance BBA alone doesn't get you here. Quantitative research seats at top firms favor PhDs, while some prop firms and mid-tier funds hire strong master's graduates (Quantt). Entry pay depends mostly on which firm makes the offer, and Myntbit describes the screening at the top firms as among the most selective in finance.",
      ai: "Forbes expects the long-term winners to be quants who pair coding skills with curiosity and use machine learning to steer and validate models.",
      salary: "$150K–$250K base junior, bonuses 2–5× base at top firms; junior total $150K–$320K (Quantt); lower-tier funds nearer $134K (ZipRecruiter average)",
    },
    {
      path: "Asset & Wealth Management",
      icon: "🌱",
      color: C.green,
      roles: ["Financial Advisor", "CFP", "Research Analyst", "Portfolio Manager"],
      reality:
        "The underrated accessible path: BLS projects 10% growth for personal financial advisors through 2034 (three times the all-occupation average), driven by retiring boomers and the death of pensions. CFP is the headline credential, though BLS frames certification as helping advancement rather than gating entry. Robo-advisors may squeeze clients wanting low-cost planning, but BLS and SmartAsset expect complex planning to keep demanding human advisors. Earnings are brutally skewed: the median hides a 10th–90th percentile spread from ~$50K to $239K+, driven by book-of-business size.",
      ai: "Robo-platforms absorb simple portfolios; Morgan Stanley advisors working with AI copilots are an early example (Brookings).",
      salary: "$102,140 median (BLS, May 2024); top decile $239K+",
    },
    {
      path: "Corporate Finance & FP&A",
      icon: "🏢",
      color: "#FF9A5C",
      roles: ["FP&A Analyst", "Senior Analyst", "Manager", "Director / Treasurer", "CFO"],
      reality:
        "The broadest entry path: companies of any size need FP&A, treasury and controllership. Recruiting is far less time-sensitive than banking (a solid school, decent grades and good accounting knowledge can be enough, per Mergers & Inquisitions), and sources describe better work-life balance. The trade-off is pace: 10–15 years to director, decades to CFO. AI is absorbing variance analysis and reporting; the analysts who survive are the ones interpreting outputs and partnering with the business rather than producing spreadsheets.",
      ai: "High task automation, stable headcount so far; the role is shifting from producing numbers to explaining them.",
      salary: "$71K–$88K entry (Robert Half) → $101,350 analyst median (BLS) → $150K–$210K+ director",
    },
    {
      path: "Risk, Regulation & Policy",
      icon: "🛡️",
      color: "#5CD6C0",
      roles: ["Risk Analyst", "Financial Examiner", "Compliance Officer", "Fed / SEC Economist"],
      reality:
        "The quiet growth story of the field: BLS projects 19% growth for financial examiners through 2034, much faster than average. Separately, CFI and Forbes describe AI governance, compliance and model-validation roles emerging. FRM is the dedicated risk credential, and examiners work in areas such as consumer-compliance monitoring of lending (BLS).",
      ai: "New governance and validation roles are emerging (CFI, Forbes); the net effect on headcount was not established.",
      salary: "$90,400 examiner median · $106,000 risk specialist median (BLS)",
    },
    {
      path: "Fintech & Entrepreneurship",
      icon: "🚀",
      color: C.red,
      roles: ["Fintech Analyst", "Product Manager", "Compliance / RegTech", "BizOps / Strategy", "Founder"],
      reality:
        "Demand centers on hybrid profiles that combine finance knowledge with data and AI skills (Forbes, IntelligentHQ, Brookings). A practical guide (Fintek Cafe) describes entering through adjacent roles, such as a bank credit analyst moving to a credit product analyst role at a lender and later into product management, and recommends the CAMS certification for compliance careers. The founder path was not covered by any source, so founder pay and odds are not established.",
      ai: "Hybrid AI-plus-finance roles are the growth area (Forbes).",
      salary: "Indicative only (commercial guides): fintech financial analyst median base about $100K; product manager base $130K–$200K; compliance and risk analyst base $80K–$140K; fintech software engineer median total comp $160K (Levels.fyi). No entry-level figures found.",
    },
  ],
};

const font = {
  display: "'Archivo', sans-serif",
  body: "'IBM Plex Sans', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

export default function FinanceRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.amber : phase.color;
  const visibleTicker = ticker.filter(stat => !summary || !stat.inSummary);

  const selectPhase = (id) => {
    setShowCareers(false);
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
  };

  const tabBase = {
    fontFamily: font.mono,
    fontSize: 12,
    letterSpacing: "0.06em",
    padding: "10px 14px",
    borderRadius: 4,
    border: `1px solid ${C.line}`,
    background: C.panel,
    color: C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        @keyframes tickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tickerTrack { display: inline-flex; animation: tickerScroll 38s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .tickerTrack { animation: none; } }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.amber}; outline-offset: 2px; }
      `}</style>

      {/* header */}
      <header style={{ padding: "28px 20px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontFamily: font.mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>
          FIELD ROADMAP · TICKER: FIN
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 900,
            fontSize: "clamp(30px, 6vw, 52px)",
            lineHeight: 1.02,
            margin: "8px 0 10px",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}
        >
          Finance
        </h1>
        <p style={{ color: C.dim, fontSize: 15, maxWidth: 640, margin: 0, lineHeight: 1.5 }}>
          From the sophomore-year recruiting clock to the corner office: degrees, credentials, and
          seven destinations, priced honestly, with AI exposure marked on every one.
        </p>
      </header>

      {summary}

      {/* signature ticker */}
      <div
        style={{
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
          background: "#0A0E15",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "8px 0",
        }}
        aria-hidden="true"
      >
        <div className="tickerTrack">
          {[...visibleTicker, ...visibleTicker].map((t, i) => (
            <span key={i} style={{ fontFamily: font.mono, fontSize: 12, margin: "0 22px", color: C.dim }}>
              {t.s}{" "}
              <span style={{ color: t.up ? C.green : C.red, fontWeight: 600 }}>
                {t.v} {t.up ? "▲" : "▼"}
              </span>
            </span>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 20px 60px" }}>
        {/* phase tabs */}
        <nav className="hscroll" style={{ marginBottom: 22 }}>
          {data.phases.map((p) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => selectPhase(p.id)}
                style={{
                  ...tabBase,
                  border: `1px solid ${on ? p.color : C.line}`,
                  color: on ? p.color : C.dim,
                  background: on ? C.panelUp : C.panel,
                }}
              >
                <span style={{ fontWeight: 600 }}>{p.label}</span>
                <span style={{ color: C.faint, marginLeft: 8, fontSize: 10 }}>{p.years}</span>
              </button>
            );
          })}
          <button
            onClick={() => {
              setShowCareers(true);
              setExpandedCareer(null);
            }}
            style={{
              ...tabBase,
              border: `1px solid ${showCareers ? C.amber : C.line}`,
              color: showCareers ? C.amber : C.dim,
              background: showCareers ? C.panelUp : C.panel,
              fontWeight: 600,
            }}
          >
            Career Paths <span style={{ color: C.faint, marginLeft: 8, fontSize: 10 }}>7 LISTED</span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* phase intro */}
            <div
              style={{
                borderLeft: `3px solid ${phase.color}`,
                paddingLeft: 16,
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: phase.color,
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                }}
              >
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.text, fontSize: 15, lineHeight: 1.6, maxWidth: 760 }}>
                {phase.intro}
              </p>
            </div>

            {/* section tabs */}
            <div className="hscroll" style={{ marginBottom: 16 }}>
              {phase.sections.map((s, i) => {
                const on = activeSection === i;
                return (
                  <button
                    key={s.title}
                    onClick={() => {
                      setActiveSection(i);
                      setExpandedItem(null);
                    }}
                    style={{
                      ...tabBase,
                      fontSize: 12,
                      padding: "8px 12px",
                      border: `1px solid ${on ? phase.color : C.line}`,
                      color: on ? C.text : C.dim,
                      background: on ? C.panelUp : "transparent",
                    }}
                  >
                    {s.icon} {s.title}
                  </button>
                );
              })}
            </div>

            {/* expandable items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <button
                    key={item.name}
                    onClick={() => setExpandedItem(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? phase.color : C.line}`,
                      borderRadius: 6,
                      padding: "14px 16px",
                      cursor: "pointer",
                      color: C.text,
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                      <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 15 }}>
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontFamily: font.mono,
                          fontSize: 13,
                          color: open ? phase.color : C.faint,
                          flexShrink: 0,
                        }}
                      >
                        {open ? "−" : "+"}
                      </span>
                    </div>
                    {open && (
                      <p style={{ margin: "10px 0 0", color: C.dim, fontSize: 14, lineHeight: 1.6 }}>
                        {item.detail}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div style={{ borderLeft: `3px solid ${C.amber}`, paddingLeft: 16, marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: C.amber,
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                }}
              >
                DESTINATIONS · SALARY DATA: BLS OEWS MAY 2024 + INDUSTRY SOURCES (NOTED)
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.text, maxWidth: 760 }}>
                Seven distinct destinations. Front-office compensation figures come from industry
                sources (bonus-heavy pay that BLS base-wage data understates); accessible-path figures
                anchor to BLS. Every card carries an honest AI-exposure read.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 12,
              }}
            >
              {data.careers.map((c, i) => {
                const open = expandedCareer === i;
                return (
                  <button
                    key={c.path}
                    onClick={() => setExpandedCareer(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderTop: `3px solid ${c.color}`,
                      borderRadius: 6,
                      padding: 16,
                      cursor: "pointer",
                      color: C.text,
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 22 }} aria-hidden="true">
                        {c.icon}
                      </span>
                      <span
                        style={{
                          fontFamily: font.display,
                          fontWeight: 900,
                          fontSize: 16,
                          color: c.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {c.path}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontFamily: font.mono,
                            fontSize: 10.5,
                            padding: "3px 8px",
                            borderRadius: 3,
                            border: `1px solid ${C.line}`,
                            color: C.dim,
                            background: C.bg,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    {open && (
                      <div style={{ marginTop: 12 }}>
                        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 1.6, color: C.dim }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 11.5,
                            lineHeight: 1.5,
                            color: C.faint,
                            borderTop: `1px solid ${C.line}`,
                            paddingTop: 10,
                            marginBottom: 10,
                          }}
                        >
                          <span style={{ color: c.color }}>AI EXPOSURE ▸ </span>
                          {c.ai}
                        </div>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 12.5,
                            fontWeight: 600,
                            color: C.green,
                            background: "#10251C",
                            border: `1px solid #1E4433`,
                            borderRadius: 4,
                            padding: "8px 10px",
                          }}
                        >
                          {c.salary}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}

        <footer
          style={{
            marginTop: 36,
            paddingTop: 14,
            borderTop: `1px solid ${C.line}`,
            fontFamily: font.mono,
            fontSize: 11,
            color: C.faint,
            letterSpacing: "0.08em",
          }}
        >
          TAP ANY ITEM OR CARD TO EXPAND · SALARY SOURCES: BLS OEWS MAY 2024, ROBERT HALF, INDUSTRY
          COMP REPORTS · COMPILED NOV 2026
        </footer>
      </main>
    </div>
  );
}
