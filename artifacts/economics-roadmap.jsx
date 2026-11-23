import { useState } from "react";

/* ————— ECONOMICS ROADMAP —————
   Aesthetic: financial broadsheet / pink-paper markets press.
   Salmon paper, ink serif display, ticker-style mono for data,
   per-phase accents drawn from financial-print chart colors.  */

const T = {
  paper: "#FBEFE2",
  paperDeep: "#F5E3CF",
  ink: "#26221E",
  inkSoft: "#5C5347",
  rule: "#D9C4A8",
  card: "#FFF8EE",
  teal: "#0D7680",
  oxford: "#0F5499",
  claret: "#990F3D",
  gold: "#8A6210",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1-4",
      color: T.teal,
      intro:
        "The economics BA is unusually standardized: principles, then a core of intermediate micro, intermediate macro, and econometrics, plus field electives. The decision that shapes what comes next is how much proof-based math you take. Stated major requirements stop at calculus and statistics, while PhD guidance treats real analysis as almost expected.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            {
              name: "Principles of Micro & Macro",
              detail:
                "The gateway pair, usually with a precalculus prerequisite and a C-or-better requirement (Rutgers). Duke now requires its own Econ 101 for all majors and no longer accepts AP or transfer credit for it.",
            },
            {
              name: "Intermediate Microeconomics",
              detail:
                "Households and firms as maximizing agents, general equilibrium, and welfare economics (Rutgers' description). Calculus is a prerequisite. Princeton offers each core course in a standard and a more mathematical version, and you can mix versions across the three courses.",
            },
            {
              name: "Intermediate Macroeconomics",
              detail:
                "Theories of income determination, stabilization, and economic growth, with emphasis on unemployment and inflation (Rutgers' description). Prerequisites are the principles courses and Calculus I.",
            },
            {
              name: "Econometrics",
              detail:
                "Statistical methods for estimating, testing, and predicting economic relationships, centered on OLS regression with extensive computer use (Rutgers). It requires the principles courses, Calculus I, and a statistics course. Consulting and tech postings list regression and causal inference among core skills.",
            },
            {
              name: "Math & statistics requirements",
              detail:
                "Calculus I is the stated minimum at Rutgers. Northwestern requires MATH 220-1 at minimum, strongly advises the full first-year calculus sequence, and expects a probability and statistics course. If a PhD is possible, taking more keeps that option open.",
            },
            {
              name: "Field electives",
              detail:
                "Penn groups upper-level electives into econometrics, empirical microeconomics, macroeconomics, microeconomics and game theory, and international and development. Berkeley's list runs from natural resources and public economics to financial economics and economic demography. Northwestern asks majors to cover at least six areas.",
            },
            {
              name: "A writing requirement",
              detail:
                "Ohio State requires a major writing course because many jobs that economics majors take depend on writing about economic topics, and many economics courses are problem-solving with little writing.",
            },
          ],
        },
        {
          title: "The Math Fork",
          icon: "📐",
          items: [
            {
              name: "Industry track",
              detail:
                "Calculus I plus statistics meets the stated requirements at schools like Rutgers and Northwestern. Consulting firms hire analysts straight from bachelor's programs, so spare units can go to programming, internships, and data projects.",
            },
            {
              name: "PhD track: real analysis is the near-gate",
              detail:
                "Guidance cited by the AEA calls real analysis 'almost expected of a strong applicant' and says first-year graduate courses draw heavily on it. UCSD lists proof writing, linear algebra, real analysis, probability, and statistics as the upper-division math to add.",
            },
            {
              name: "Joint math-econ or double major",
              detail:
                "UCSD advises seriously considering a joint math-economics major for PhD-bound students, and UCLA calls a math-economics or math degree useful preparation. The load is heavier, but it supplies the math coursework inside one program.",
            },
            {
              name: "Mathematical statistics & probability",
              detail:
                "The AEA-cited guidance treats two or three terms of calculus, often linear algebra, and a semester of mathematical statistics as minimum preparation. Wisconsin's list of math to master before its PhD prelims also includes probability and mathematical statistics.",
            },
            {
              name: "Graduate courses as an undergrad",
              detail:
                "UCSD calls a graduate course a strong signal but a risky one: doing well matters, graduate students form study groups, and the course takes a lot of time.",
            },
            {
              name: "GPA and course difficulty",
              detail:
                "Binghamton reports that admitted students at highly ranked PhD programs usually have GPAs of 3.85 or higher. UCSD adds that schools weigh the difficulty and content of your courses, not just the grades.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "💻",
          items: [
            {
              name: "Stata",
              detail:
                "The field's entrenched default. A 2020 snapshot of predoc ads found it requested in almost all, sometimes as an explicit requirement and sometimes as an example of 'strong programming skills'. A skills test usually follows the first review.",
            },
            {
              name: "R, Python, and MATLAB",
              detail:
                "UCSD names Stata, R, and MATLAB as the most popular packages and suggests a programming course. Newer entrants are learning Python and R, especially for NLP and machine learning methods, and one reviewer found every predoc ad asked for a programming language.",
            },
            {
              name: "Reproducible data work",
              detail:
                "Predoc duties center on literature reviews, project management, data analysis, and writing (Zurich's list). Clean, documented code is the working habit this builds. Economic consulting firms also list regression, hypothesis testing, and causal inference as core skills.",
            },
            {
              name: "LLMs as a study and coding aid",
              detail:
                "Korinek's JEL article describes dozens of ways LLMs help with ideation, writing, background research, data analysis, coding, and derivations, and treats them as useful for micro-tasks. Predoc applications usually include a skills test and PhD programs gate on comprehensive exams, so the underlying skill still has to be yours.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🏛️",
          items: [
            {
              name: "Research assistant work for faculty",
              detail:
                "Prior RA experience is named as one of the strongest indicators of success in a predoc application. UCSD notes that the professor who supervises your research is the one positioned to write a detailed recommendation.",
            },
            {
              name: "Honors thesis",
              detail:
                "UCSD, UCLA, and Binghamton all recommend one. UCSD says choosing an empirical topic teaches topic selection, data work, analysis, and writing, and shows whether a research career fits you.",
            },
            {
              name: "Societies & competitions",
              detail:
                "Rutgers' department pages list Fed Challenge, the ODE international economics honor society, and the RECONS society. Check your own department for the equivalents.",
            },
            {
              name: "AEA Summer Program & summer RA-ships",
              detail:
                "The AEA Summer Training and Scholarship Program prepares undergraduates for doctoral study, and Yale's PhD-prep page credits it with as many as 20% of economics PhDs awarded to minorities over 20 years. UChicago's Expanding Discovery in Economics+ is aimed at early undergraduates, and PREDOC.org lists summer RA roles, including one at EPIC.",
            },
            {
              name: "Internships: Fed & consulting",
              detail:
                "The Fed Board offers research internships for sophomores and juniors. Cornerstone runs an 8-week summer analyst program whose work closely mirrors full-time analysts, and Brookings takes about 150 paid interns a year.",
            },
          ],
        },
      ],
    },
    {
      id: "bridge",
      label: "Master's & Predoc",
      years: "Years ~5-7",
      color: T.oxford,
      intro:
        "In economics the route increasingly seen at top PhD programs is a predoc, a paid one-to-two-year research job, rather than a master's degree. Master's degrees still exist and mostly serve policy and industry careers or fill gaps in math preparation. The AEA says about half of students entering economics PhD programs earn a master's first, so both routes are common.",
      sections: [
        {
          title: "The Predoc Path",
          icon: "🔬",
          items: [
            {
              name: "What a predoc actually is",
              detail:
                "A full-time job supporting faculty research, typically lasting two years (PREDOC.org). Duties include literature reviews, project management, data analysis, and writing. Zurich describes its version as 70% research and 30% on-the-job learning.",
            },
            {
              name: "How central it has become",
              detail:
                "Over 40% of students accepted to top PhD programs have predoc experience, and over 75% of predocs go on to PhD study (PREDOC.org). It is not required, but it is not rare either.",
            },
            {
              name: "Where the jobs are",
              detail:
                "The Fed Board (about 150 RAs) and regional Feds, university labs such as Chicago's PREP and MIT Blueprint Labs, business schools such as Booth and Tuck, and think tanks such as AEI. PREDOC.org is the central job board. Several listings say they cannot sponsor visas.",
            },
            {
              name: "What gets you hired",
              detail:
                "Core economics coursework, programming (Stata is requested in almost all ads), prior RA experience, and a skills test after first review. Letters from your predoc supervisors then support the PhD application.",
            },
            {
              name: "The Fed RA route specifically",
              detail:
                "A two-year program at the Board in Washington, with about 150 RAs across seven divisions. The Board offers tuition assistance that many RAs use for math and statistics courses. More than half of RAs enter graduate programs, and others stay at the Board as analysts or move to private and public sector jobs.",
            },
          ],
        },
        {
          title: "Terminal Master's Options",
          icon: "🎓",
          items: [
            {
              name: "MA / MS in (Applied) Economics",
              detail:
                "Applied programs exist at Hopkins, Michigan, Duke, and Georgetown, according to a forum post. About half of PhD entrants hold a master's, so it is common, though predocs are the route elite programs increasingly see.",
            },
            {
              name: "MPP / MPA: the policy professional degrees",
              detail:
                "An MPP leans on economics, statistics, and data analysis, and an MPA leans on management and implementation. Both take 1-2 years full-time. Forum commenters, who are anonymous, say an MPP is more marketable than a US economics MA for policy jobs.",
            },
            {
              name: "Computation-flavored hybrids",
              detail:
                "Duke lists an M.S. in Economics and Computation alongside an M.A. in Analytical Political Economy.",
            },
            {
              name: "The European research master's",
              detail:
                "In the UK and Europe, many PhD paths start after a research-oriented master's, and the PhD itself can then run 3-4 years instead of the US 5-6 (VoxDev).",
            },
          ],
        },
        {
          title: "Skills Deepened",
          icon: "📊",
          items: [
            {
              name: "Causal inference and experiments",
              detail:
                "Consulting and tech postings list regression, hypothesis testing, causal inference, and experimental design. Uber's PhD postings ask for experience with A/B and market-level experiments and with causal inference on observational data.",
            },
            {
              name: "Production-grade empirical work",
              detail:
                "The pipeline from raw data to cleaning code to analysis to tables is the core of most predoc work. One analysis of predoc hiring ties the boom in these jobs to demand for programming and econometrics talent.",
            },
            {
              name: "Research communication",
              detail:
                "Predoc work includes writing and documents such as pre-analysis plans and research documentation, and consulting analysts help prepare experts for testimony.",
            },
          ],
        },
        {
          title: "Do You Even Need This Stage?",
          icon: "⚖️",
          items: [
            {
              name: "The BA opens real jobs",
              detail:
                "Consulting firms hire analysts from bachelor's programs and associates from master's programs, and Fed RA roles take bachelor's graduates.",
            },
            {
              name: "US PhDs do not require a master's",
              detail:
                "About half of entering PhD students have one and about half do not (AEA). If math grades or research experience are thin, a predoc can supply experience and letters while paying a salary.",
            },
            {
              name: "When a master's or predoc helps most",
              detail:
                "VoxDev says a strong master's or predoc can be a high-return step if your training has been less mathematical. For government and nonprofit policy work, an MPP is described as the professional degree.",
            },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD",
      years: "Years ~7-13",
      color: T.claret,
      intro:
        "The US economics PhD is a 5-6 year funded program with a standardized rhythm: a demanding first-year core, comprehensive exams, field courses, then research culminating in a job market paper sold on a centralized annual market. The question after is which of several different careers you exit into.",
      sections: [
        {
          title: "Program Structure",
          icon: "🧭",
          items: [
            {
              name: "Year 1: the core and the prelims",
              detail:
                "Core sequences in microeconomics, macroeconomics, and econometrics, capped by comprehensive exams that you must pass to continue, usually with a second attempt. Georgia requires passing two of three, and WashU lets an A- or higher in first-year coursework count instead of an exam.",
            },
            {
              name: "Year 2: fields and the research paper",
              detail:
                "Field courses plus, at many programs, a required original research paper. MIT requires two major and two minor fields, and Georgia and Emory require a second-year or field paper.",
            },
            {
              name: "Years 3-6: dissertation and the job market paper",
              detail:
                "MIT describes a thesis as normally three research papers of publishable quality. One of them becomes the job market paper, the flagship work used to apply for jobs.",
            },
            {
              name: "Funding and stipends",
              detail:
                "Programs typically pay a tuition waiver plus a stipend tied to TA or RA work. Stated stipends: Yale at least $52,046 (2026-27), Brown $52,198 (FY26), Chicago Social Sciences at least $46,350 (2025-26), and Emory $43,260. A secondary guide gives about $34,500 at Johns Hopkins.",
            },
            {
              name: "The centralized job market",
              detail:
                "One annual cycle: a job market paper finished in summer, applications September-November, first-round interviews December-January around the AEA meetings, campus flyouts January-February, and offers February-March. VoxDev says postdocs are less structurally necessary in economics than in some lab sciences.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔭",
          items: [
            {
              name: "Causal machine learning",
              detail:
                "Double/debiased machine learning, causal forests, generalized random forests, and heterogeneous treatment effects (work by Chernozhukov, Athey, Wager, and coauthors) are a fast-growing part of the econometrics literature.",
            },
            {
              name: "Deep learning for macro models",
              detail:
                "Fernandez-Villaverde's NBER work on deep learning for solving economic models and taming the curse of dimensionality, and papers applying multi-agent reinforcement learning to heterogeneous-agent business cycle models.",
            },
            {
              name: "Market & platform design",
              detail:
                "Auctions, pricing, reputation systems, and search costs. Athey and Luca trace the field to Bob Wilson's 1960s auction work, and Uber lists pricing, incentives, and marketplace experimentation as economist work.",
            },
            {
              name: "LLMs as a tool and a subject",
              detail:
                "One 2025 paper uses multimodal LLMs to build historical datasets from archival scans, and Korinek's work covers AI agents for economic research. Exposure studies such as Eloundou et al. estimate that up to 80% of US workers could have at least 10% of their tasks affected by LLMs.",
            },
            {
              name: "Experiments in industry",
              detail:
                "Uber's PhD postings ask for experimental design and analysis, including A/B and market-level experiments, and Amazon lists program evaluation among its economist work.",
            },
          ],
        },
        {
          title: "AI & the Profession",
          icon: "🤖",
          items: [
            {
              name: "The Korinek assessment",
              detail:
                "Anton Korinek's JEL article (2023) and his August 2025 update describe LLMs helping with ideation, writing, background research, data analysis, coding, and derivations, and cover agentic and multi-agent research workflows.",
            },
            {
              name: "Open question: the apprenticeship rung",
              detail:
                "Korinek lists coding and data analysis among tasks LLMs can already help with, and predoc and RA jobs are built from those tasks. Whether that shrinks entry-level hiring is this roadmap's inference, not something the sources show.",
            },
            {
              name: "What employers say",
              detail:
                "Cornerstone says generative AI supports its work while complementing, not replacing, expertise and judgment, and it looks for candidates who are curious about AI. These sources do not settle which skills prove durable.",
            },
            {
              name: "Economists also study the question",
              detail:
                "Eloundou et al. estimate that up to 80% of US workers could have at least 10% of their tasks affected by LLMs, and a Council of Economic Advisers study put about 10% of the workforce as potentially vulnerable.",
            },
          ],
        },
        {
          title: "The Honest Odds",
          icon: "🎯",
          items: [
            {
              name: "Placement depends on the program",
              detail:
                "Literature cited in the AEA's 2025 conference slides finds the graduating institution is a large factor in placement. econphdplacements.com lists placements by department, so check real placement pages before accepting an offer.",
            },
            {
              name: "The tenure clock",
              detail:
                "VoxDev describes a limited window, often 6-8 years, to build a research record, with publication quality and peer evaluation mattering. Teaching-track jobs exist, such as Boston College's renewable 3-year 'assistant professor of the practice' post.",
            },
            {
              name: "Where PhDs go",
              detail:
                "Placement databases split outcomes into tenure-track, temporary academic, central bank, and international organization jobs. Amazon, Uber, Cornerstone, the Fed Board, and the IMF all recruit PhD economists.",
            },
            {
              name: "BLS reality check",
              detail:
                "BLS projects 1% growth for the 'economist' occupation over 2024-34, with about 900 openings a year. That title may not capture roles titled scientist or data scientist, such as Uber's 'PhD Scientist II', which is this roadmap's inference.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Academia",
      icon: "🎓",
      color: T.claret,
      roles: ["Assistant Professor", "Associate Professor", "Full Professor"],
      reality:
        "AEA data for 2025-26 show average assistant professor salaries of $164,898 at PhD-granting departments, $133,210 at MA-granting, and $113,460 at BA-granting. Full professors average $262,782, $147,670, and $150,513. New assistants at PhD-granting departments average $158,593 to start. Placement depends heavily on the graduating program, the tenure window is often 6-8 years, and teaching-track roles exist with a different mix of duties.",
      salary: "$113k-$165k assistant (by institution type) · full professor $148k-$263k",
    },
    {
      path: "Central Banking & Government",
      icon: "🏦",
      color: T.oxford,
      roles: ["Research Assistant", "Economist", "Senior Economist"],
      reality:
        "The Fed Board says it employs just over 400 PhD economists, all in Washington, D.C., plus about 150 RAs in a two-year program with tuition assistance. Regional Fed banks also hire RAs and economists. One closed 2023 Board posting for an economist listed $170,000-$220,000, and no RA salary was found. The BLS median for the occupation overall is $115,440, with 1% projected growth and about 900 openings a year.",
      salary: "$170k-$220k (one 2023 Board posting) · RA pay not found",
    },
    {
      path: "Economic Consulting",
      icon: "⚖️",
      color: T.teal,
      roles: ["Analyst", "Senior Consultant", "Manager", "VP / Principal"],
      reality:
        "Firms such as Cornerstone, Analysis Group, Charles River Associates, Brattle, and Bates White hire analysts from bachelor's programs and associates from master's programs, and expert-witness roles require a PhD. Analysts support experts and attorneys on litigation and regulatory cases. At Cornerstone, analysts typically spend 3-5 years before Senior Consultant, and many leave for graduate school. Analysis Group's analyst base is about $96,000 plus signing and performance bonuses, Cornerstone analysts average about $104,000, and Cornerstone principals report up to about $297,000.",
      salary: "~$96k-$104k analyst · principal up to ~$297k",
    },
    {
      path: "Tech Economist",
      icon: "📱",
      color: "#7A4A9E",
      roles: ["Economist", "Senior Economist", "Principal / Chief Economist"],
      reality:
        "Amazon, Uber, Microsoft, Netflix, Airbnb, and others hire PhD economists for pricing, market design, experimentation, and program evaluation. A 2023 article counted over 250 PhD economists or close fields at Amazon. Postings reviewed require a PhD in economics or a closely related field. Uber says it hires 'economists to be economists, not generic data scientists'. Amazon pay is reported at $219,000-$284,000 total (median $248,000), and Uber's PhD base ranges from $155,000 to $179,000 depending on the posting.",
      salary: "Amazon $219k-$284k total · Uber PhD base $155k-$179k",
    },
    {
      path: "International Organizations",
      icon: "🌍",
      color: T.gold,
      roles: ["IMF Economist Program", "World Bank YPP", "Economist", "Senior Economist"],
      reality:
        "The IMF Economist Program is three years with two departmental assignments. Applications open in late September, interviews run October-January, and offers go out in early February. The IMF's published salary structure (effective May 1, 2026) lists grade A11 at $123,420-$185,130 and A12 at $142,240-$213,360. Whether pay is tax-free is not stated on the IMF's pages, though a secondary site says so. Benefits include a pension and help with children's education for non-US staff. No official World Bank figure was found.",
      salary: "IMF A11 $123k-$185k · A12 $142k-$213k",
    },
    {
      path: "Finance & Quant",
      icon: "📈",
      color: "#1B7A3D",
      roles: ["Analyst", "Senior Analyst", "Quant Researcher", "Portfolio Manager"],
      reality:
        "Wall Street Careers says global macro funds favor economists, and hedge fund analysts earn $100,000-$150,000 base with bonuses that can reach 100-200% of base. At top quant trading firms (Jane Street, SIG, Hudson River Trading), Tradermath reports new-grad base around $300,000 and estimated total pay of $310,000-$450,000. Quant postings ask for advanced coursework in math, science, economics, and programming. Aggregators such as ZipRecruiter report a much lower $133,877 average for hedge fund quants, so figures conflict.",
      salary: "Analyst base $100k-$150k · quant trading new-grad base ~$300k",
    },
    {
      path: "Data, Policy & Think Tanks",
      icon: "📊",
      color: "#B0532A",
      roles: ["Data Analyst", "Policy Analyst", "Economic Analyst", "Budget Analyst"],
      reality:
        "The broadest bachelor's-accessible lane: data, policy, and market-research roles across agencies, companies, and think tanks such as Brookings and AEI. Sources conflict on starting pay: Research.com cites medians of about $60,000 on some pages and $74,000 on another, with entry ranges of $55,000-$75,000, and Nexford's average for policy analysts is $81,139. Policy roles at agencies and think tanks generally prefer a master's in economics or public policy. How AI will affect junior analytics roles is not established by these sources.",
      salary: "$55k-$75k entry · ~$81k policy analyst average",
    },
  ],
};

const careersTab = { id: "careers", label: "Career Paths", years: "7 destinations", color: T.gold };

/* tiny rising sparkline for the masthead */
function Sparkline({ color }) {
  return (
    <svg width="120" height="34" viewBox="0 0 120 34" style={{ display: "block" }} aria-hidden="true">
      <polyline
        points="0,30 14,26 26,28 40,20 52,23 66,14 80,17 96,8 120,3"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="120" cy="3" r="2.6" fill={color} />
    </svg>
  );
}

export default function EconomicsRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? careersTab.color : phase.color;

  const selectPhase = (id) => {
    setShowCareers(false);
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
  };

  const font = (fam) => ({ fontFamily: fam });
  const display = font("'Fraunces', Georgia, serif");
  const body = font("'Libre Franklin', 'Helvetica Neue', sans-serif");
  const mono = font("'IBM Plex Mono', ui-monospace, monospace");

  return (
    <div style={{ ...body, background: T.paper, minHeight: "100vh", color: T.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Libre+Franklin:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { height: 0; width: 0; }
        button { cursor: pointer; }
        button:focus-visible { outline: 2px solid ${T.ink}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>

      {/* ————— masthead ————— */}
      <header
        style={{
          borderBottom: `3px double ${T.ink}`,
          background: T.paper,
          padding: "22px 20px 16px",
          maxWidth: 980,
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12 }}>
          <div>
            <div
              style={{
                ...mono,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: T.inkSoft,
                marginBottom: 6,
              }}
            >
              Field Roadmap
            </div>
            <h1 style={{ ...display, fontWeight: 900, fontSize: "clamp(34px, 7vw, 56px)", lineHeight: 0.98, margin: 0 }}>
              Economics
            </h1>
            <p style={{ margin: "10px 0 0", fontSize: 14.5, color: T.inkSoft, maxWidth: 560, lineHeight: 1.5 }}>
              From principles to the job market paper: the degrees, the predoc route, and seven places the training leads.
            </p>
          </div>
          <div style={{ flexShrink: 0, textAlign: "right" }}>
            <Sparkline color={accent} />
            <div style={{ ...mono, fontSize: 10, color: accent, marginTop: 2 }}>HUMAN CAPITAL ▲</div>
          </div>
        </div>
      </header>

      {/* ————— phase tabs ————— */}
      <nav
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "flex",
          overflowX: "auto",
          borderBottom: `1px solid ${T.rule}`,
          background: T.paper,
        }}
      >
        {[...data.phases, careersTab].map((p) => {
          const isCareers = p.id === "careers";
          const active = isCareers ? showCareers : !showCareers && activePhase === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                if (isCareers) {
                  setShowCareers(true);
                  setExpandedCareer(null);
                } else selectPhase(p.id);
              }}
              style={{
                ...body,
                flex: "0 0 auto",
                border: "none",
                background: active ? p.color : "transparent",
                color: active ? T.card : T.ink,
                padding: "12px 18px 10px",
                borderRight: `1px solid ${T.rule}`,
                textAlign: "left",
                minWidth: 128,
                transition: "background 0.18s",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>{p.label}</div>
              <div
                style={{
                  ...mono,
                  fontSize: 10,
                  marginTop: 3,
                  color: active ? "rgba(255,248,238,0.85)" : T.inkSoft,
                }}
              >
                {p.years}
              </div>
            </button>
          );
        })}
      </nav>

      <main style={{ maxWidth: 980, margin: "0 auto", padding: "20px 20px 56px" }}>
        {!showCareers ? (
          <>
            {/* phase intro */}
            <div style={{ borderLeft: `4px solid ${phase.color}`, padding: "4px 0 4px 14px", margin: "6px 0 20px" }}>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.62, color: T.ink, maxWidth: 720 }}>{phase.intro}</p>
            </div>

            {/* section tabs */}
            <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 16 }}>
              {phase.sections.map((s, i) => {
                const active = activeSection === i;
                return (
                  <button
                    key={s.title}
                    onClick={() => {
                      setActiveSection(i);
                      setExpandedItem(null);
                    }}
                    style={{
                      ...body,
                      flex: "0 0 auto",
                      fontSize: 12.5,
                      fontWeight: 600,
                      padding: "8px 14px",
                      borderRadius: 999,
                      border: `1.5px solid ${active ? phase.color : T.rule}`,
                      background: active ? phase.color : T.card,
                      color: active ? T.card : T.ink,
                      transition: "all 0.15s",
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{s.icon}</span>
                    {s.title}
                  </button>
                );
              })}
            </div>

            {/* items ledger */}
            <div style={{ background: T.card, border: `1px solid ${T.rule}`, borderRadius: 6 }}>
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <div key={item.name} style={{ borderTop: i === 0 ? "none" : `1px solid ${T.rule}` }}>
                    <button
                      onClick={() => setExpandedItem(open ? null : i)}
                      style={{
                        ...body,
                        width: "100%",
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                        border: "none",
                        background: "transparent",
                        padding: "14px 16px",
                        textAlign: "left",
                      }}
                      aria-expanded={open}
                    >
                      <span style={{ ...mono, fontSize: 11, color: phase.color, flexShrink: 0, fontWeight: 600 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontSize: 14.5, fontWeight: 600, flex: 1, lineHeight: 1.4 }}>{item.name}</span>
                      <span
                        style={{
                          ...mono,
                          fontSize: 13,
                          color: T.inkSoft,
                          transform: open ? "rotate(45deg)" : "none",
                          transition: "transform 0.18s",
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 16px 16px 42px" }}>
                        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.62, color: T.inkSoft }}>{item.detail}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div style={{ borderLeft: `4px solid ${T.gold}`, padding: "4px 0 4px 14px", margin: "6px 0 20px" }}>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.62, maxWidth: 720 }}>
                Seven destinations, from academia to quant trading. Tap a card for the picture and current pay. Figures come from the research file, which also lists what is unverified.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 14,
              }}
            >
              {data.careers.map((c, i) => {
                const open = expandedCareer === i;
                return (
                  <button
                    key={c.path}
                    onClick={() => setExpandedCareer(open ? null : i)}
                    aria-expanded={open}
                    style={{
                      ...body,
                      textAlign: "left",
                      background: T.card,
                      border: `1px solid ${T.rule}`,
                      borderTop: `4px solid ${c.color}`,
                      borderRadius: 6,
                      padding: "16px 16px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      transition: "box-shadow 0.15s",
                      boxShadow: open ? "0 3px 14px rgba(38,34,30,0.12)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{c.icon}</span>
                      <span style={{ ...display, fontWeight: 700, fontSize: 18, color: c.color, lineHeight: 1.15 }}>
                        {c.path}
                      </span>
                      <span
                        style={{
                          ...mono,
                          marginLeft: "auto",
                          fontSize: 13,
                          color: T.inkSoft,
                          transform: open ? "rotate(45deg)" : "none",
                          transition: "transform 0.18s",
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "3px 9px",
                            borderRadius: 999,
                            background: T.paperDeep,
                            color: T.ink,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    {open && (
                      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: T.inkSoft }}>{c.reality}</p>
                    )}
                    <div
                      style={{
                        ...mono,
                        fontSize: 12,
                        fontWeight: 600,
                        color: c.color,
                        background: T.paperDeep,
                        borderRadius: 4,
                        padding: "7px 10px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      ▲ {c.salary}
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </main>

      <footer
        style={{
          borderTop: `1px solid ${T.rule}`,
          maxWidth: 980,
          margin: "0 auto",
          padding: "14px 20px 26px",
          ...mono,
          fontSize: 11,
          color: T.inkSoft,
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <span>Tap any line item or card to expand.</span>
        <span>Pay data: AEA, BLS, IMF, Tradermath, Levels.fyi and others · see economics-research.md</span>
      </footer>
    </div>
  );
}
