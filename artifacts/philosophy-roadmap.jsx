import { useState } from "react";

/* ------------------------------------------------------------------ *
 *  PHILOSOPHY — Field Roadmap
 *  Aesthetic: "The Examined Page" — iron-gall ink on cool rag paper,
 *  jewel-toned marginalia (lapis / oxblood / verdigris / brass), and a
 *  structural motif drawn from the field's own material: the logical
 *  operators of argument (⊢ premise-set, ∴ therefore). Structure here
 *  encodes something true — philosophy is the analysis of argument.
 * ------------------------------------------------------------------ */

const C = {
  paper: "#E7E2D6",   // cool rag, greyed away from the AI cream default
  panel: "#F1ECE0",   // lighter leaf
  panelUp: "#F7F3EA",
  ink: "#221E19",     // iron-gall near-black, warm
  dim: "#655E52",     // faded ink
  faint: "#9E9686",   // marginal note
  line: "#CBC2AF",    // soft rule
  lineSoft: "#DAD2C1",
};

const font = {
  display: "'Fraunces', Georgia, serif",
  body: "'Spectral', Georgia, serif",
  mono: "'Spline Sans Mono', ui-monospace, monospace",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      mark: "⊢",
      color: "#2E5E8C", // lapis
      intro:
        "Philosophy is a small major in credits and a heavy one in reading and writing. The skill it drills is defending a position without hand-waving: reconstruct an argument, find the weak premise, and rebuild it better. It is also, quietly, one of the best-paying and highest-testing humanities degrees.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📖",
          items: [
            { name: "Symbolic / Formal Logic", detail: "Propositional and predicate logic, proofs, and validity. The technical spine of the major and the single most transferable course you'll take." },
            { name: "History of Philosophy", detail: "Plato and Aristotle through Descartes, Hume, and Kant — read as primary texts, closely, not as summaries." },
            { name: "Ethics & Value Theory", detail: "Consequentialism, deontology, and virtue ethics, plus applied strands: bioethics, environmental, and technology ethics." },
            { name: "Metaphysics & Epistemology", detail: "What exists and how we can know it — mind, causation, knowledge, and the problem of skepticism." },
            { name: "Philosophy of Science / Language / Mind", detail: "Where philosophy meets other rigorous fields: how meaning, reference, and explanation actually work." },
            { name: "Senior Seminar or Thesis", detail: "A capstone built around one original, argued essay; at many schools it also satisfies the advanced-writing requirement." },
          ],
        },
        {
          title: "The Hard Parts",
          icon: "⚠︎",
          items: [
            { name: "Symbolic logic proofs", detail: "Where humanities students hit a wall — it's closer to math than to essay-writing, and it can't be bluffed." },
            { name: "Kant & the idealists", detail: "Dense, technical, and famously punishing to read. The unofficial 'can you actually do this' filter for the major." },
            { name: "The seminar cold-call", detail: "Defending your reading aloud while a room looks for the hole in it. Uncomfortable, and formative." },
            { name: "Writing that survives objections", detail: "Grades reward anticipating counterarguments, not asserting opinions — a hard reset for many strong writers." },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "🛠",
          items: [
            { name: "Argument reconstruction", detail: "Turning messy prose into explicit premises and a conclusion, then testing whether it actually holds together." },
            { name: "Analytic writing", detail: "Precise, structured, objection-anticipating prose — the concrete skill law schools and employers pay for." },
            { name: "Conceptual analysis", detail: "Pulling apart words like 'cause,' 'know,' and 'fair' until the hidden ambiguities show themselves." },
            { name: "Charitable reading", detail: "Steel-manning a view you disagree with before you criticize it — rarer and more valuable than it sounds." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🎯",
          items: [
            { name: "Journals & essay prizes", detail: "Placing in an undergraduate philosophy journal or essay competition signals seriousness for graduate admissions." },
            { name: "Ethics Bowl & debate", detail: "Team argumentation contests that build the on-your-feet reasoning employers and law schools notice." },
            { name: "Strategic double-majoring", detail: "Philosophy pairs powerfully with CS, economics, political science, or a lab science — the combination is the real advantage." },
            { name: "Pre-law / pre-med advising", detail: "Philosophy majors post top LSAT scores and strong med-school acceptance rates; start the advising track early." },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years ~5–6",
      mark: "→",
      color: "#8C2F39", // oxblood
      intro:
        "Philosophy breaks the usual mold: a master's is rarely a job credential. Most funded MAs are bridges — the 'PhD reset' — built to strengthen a late-blooming or non-target profile before applying to top doctoral programs. The exceptions are applied professional MAs, which do lead directly to work.",
      sections: [
        {
          title: "Why a Master's",
          icon: "🧭",
          items: [
            { name: "The 'PhD reset'", detail: "Funded terminal MAs (Georgia State, Tufts, Brandeis, Milwaukee, Northern Illinois, Houston) let students re-apply to stronger PhD programs with a better writing sample." },
            { name: "Rarely terminal by design", detail: "Few people stop at a philosophy MA for the job market — in this field it's a stepping stone far more than a destination." },
            { name: "Applied & professional MAs", detail: "Bioethics, applied ethics, and philosophy-and-public-policy degrees are the exception: they map onto actual job titles." },
            { name: "Funding is the dividing line", detail: "Fully funded (tuition + stipend) vs. self-funded professional MA is the single most important thing to verify before enrolling." },
          ],
        },
        {
          title: "What You Study",
          icon: "📐",
          items: [
            { name: "The writing sample", detail: "Everything orbits one polished, original paper of roughly 4,000–10,000 words at near-publishable quality — your ticket into a PhD." },
            { name: "Graduate seminars", detail: "Small, intense, reading-heavy courses where you're expected to contribute at close to a professional level." },
            { name: "Area specialization", detail: "You begin staking out a subfield — ethics, epistemology, philosophy of mind, logic, or a historical period." },
            { name: "A language or formal tool", detail: "Many programs require reading German, French, Greek, or Latin, or real facility with formal logic, for research." },
          ],
        },
        {
          title: "Funding Norms",
          icon: "💰",
          items: [
            { name: "Fully funded PhD-track", detail: "Top programs cover tuition and pay a stipend (~$21k–$43k) for 5–7 years. You should not pay out of pocket for a research PhD." },
            { name: "Funded terminal MA", detail: "A growing number of MA programs offer tuition waivers plus a modest teaching-assistant stipend (~$13k–$21k a year)." },
            { name: "Self-funded professional MA", detail: "Bioethics and applied programs are often unfunded — weigh the cost against the specific job the credential opens." },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "PhD / Research",
      years: "Years ~7+",
      mark: "∎",
      color: "#2F6E5E", // verdigris
      intro:
        "The philosophy PhD is long, fully funded at good programs, and built around one thing: an original, book-length dissertation. Admission is brutally selective, and the academic job market on the far side is harsher still. Going in with clear eyes about the odds is itself a philosophical exercise.",
      sections: [
        {
          title: "The Doctoral Path",
          icon: "🎓",
          items: [
            { name: "Coursework (Years 1–2)", detail: "Roughly a dozen graduate seminars across areas, a logic requirement, and often a substantial second-year paper." },
            { name: "The qualifying / topical exam", detail: "The gate into candidacy (ABD) — usually a special paper or oral defense of a dissertation prospectus rather than a timed test." },
            { name: "The dissertation", detail: "A sustained, original monograph (or set of papers) on one narrow problem. This is the real work of years three through six." },
            { name: "Teaching apprenticeship", detail: "Most students fund themselves by TAing, then teaching their own courses; a pedagogy seminar is now a standard part of the path." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔬",
          items: [
            { name: "Ethics & epistemology of AI", detail: "Machine agency, alignment, algorithmic fairness, and what large language models mean for knowledge, testimony, and trust." },
            { name: "Formal epistemology & decision theory", detail: "Bayesian methods, rational choice, and probability brought to bear on how belief should track evidence." },
            { name: "Experimental philosophy (x-phi)", detail: "Using empirical surveys and cognitive science to test the intuitions philosophers once simply assumed." },
            { name: "Expanding the canon", detail: "Fast-growing work in non-Western, feminist, and critical philosophy of race is broadening what counts as the field." },
            { name: "Mind, consciousness & neuroscience", detail: "Perception, the mind–body problem, and the nature of consciousness in live dialogue with the empirical sciences." },
          ],
        },
        {
          title: "The Hard Truths",
          icon: "⚖︎",
          items: [
            { name: "Admission ~4–8%", detail: "Top programs admit a handful from hundreds of applicants; a strong writing sample matters more than grades or test scores." },
            { name: "Tenure-track is scarce", detail: "Programs mint far more PhDs than there are permanent jobs. Only about 30% land a permanent academic post." },
            { name: "Years of limbo", detail: "A common trajectory is 5–7 years of PhD, then 2–3 years of postdocs or visiting jobs before (maybe) a tenure line." },
            { name: "Non-academic exits are normalizing", detail: "Around 20% now go outside academia — and report job satisfaction on par with permanent faculty." },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Academic Philosopher",
      icon: "🏛",
      color: "#2F6E5E",
      roles: ["Adjunct / Lecturer", "Visiting Asst. Professor", "Assistant Professor (TT)", "Associate / Full Professor"],
      reality:
        "The dream job and the longest odds. After a 5–7 year funded PhD, only about 30% reach a permanent academic post, often after years of postdocs and visiting positions and frequently far from where they'd choose to live. Teaching-focused and community-college lines outnumber research jobs. Those who make it report high satisfaction; the path there is arbitrary and demoralizing even for excellent candidates.",
      salary: "$45k adjunct (per-course) · $70–100k TT start · $150k+ full professor",
    },
    {
      path: "Law & Legal Practice",
      icon: "⚖︎",
      color: "#2E5E8C",
      roles: ["Paralegal", "JD Student", "Associate Attorney", "Partner / Counsel"],
      reality:
        "The best-trodden path. Philosophy majors post among the highest LSAT scores of any large-volume major, and law schools value the logic-and-argument training directly. A JD (three years) is required to practice; the degree is expensive and the market is sharply stratified between big-law and everything else — but philosophy is genuinely strong preparation for the work itself.",
      salary: "$70k small firm · $120k public interest · $215k+ big-law first-year",
    },
    {
      path: "AI Ethics & Governance",
      icon: "🤖",
      color: "#B07A16",
      roles: ["Trust & Safety Analyst", "AI Policy Analyst", "Responsible AI Lead", "AI Ethics Officer"],
      reality:
        "The newest and fastest-growing destination — and one where a philosophy background is an explicit asset, with roughly a third of these hires coming from philosophy or ethics. Demand badly outstrips supply. But roles increasingly want fluency with data, ML basics, and regulation (the EU AI Act, the NIST framework) alongside ethical reasoning. Concentrated at large tech firms, AI labs, consultancies, and government.",
      salary: "$70k entry · $120–170k mid · $200k+ governance lead",
    },
    {
      path: "Consulting & Strategy",
      icon: "📊",
      color: "#8C2F39",
      roles: ["Analyst", "Consultant", "Strategy Manager", "Corporate Strategist"],
      reality:
        "Firms hire philosophy majors for structured problem-solving and clear writing, not domain knowledge. Breaking into top-tier consulting from a non-target school is competitive and often runs through an MBA or a strong internship record — but the analytic reputation of the major genuinely helps. Mid-career earnings for philosophy grads in business rival supposedly more 'practical' majors.",
      salary: "$75k analyst · $100–130k consultant · $200k+ with MBA / partner track",
    },
    {
      path: "Policy, Nonprofit & Public Sector",
      icon: "📜",
      color: "#4A6A7A",
      roles: ["Research Assistant", "Policy Analyst", "Program Manager", "Director / Advisor"],
      reality:
        "Ethics, political philosophy, and clear argumentation transfer well to think tanks, NGOs, government, and international bodies. Many roles want or reward a Master of Public Policy or a JD layered on top of the bachelor's. Pay is modest next to tech or law, but the work is mission-driven and comparatively stable.",
      salary: "$45k entry · $70–95k analyst · $120k+ senior / director",
    },
    {
      path: "Writing, Media & Communications",
      icon: "✍︎",
      color: "#6E4A7A",
      roles: ["Editor", "Technical / UX Writer", "Content Strategist", "Communications Lead"],
      reality:
        "The analytic-writing skill is the product here. Philosophy grads land in editing, journalism, UX writing, and content strategy — work where anticipating a reader's objections and structuring an argument is literally the job. Entry pay is low and the field is crowded, but writing-heavy tech roles (UX and documentation) pay meaningfully more.",
      salary: "$40k entry · $65–90k mid · $120k+ senior / UX in tech",
    },
    {
      path: "Bioethics & Medical Ethics",
      icon: "⚕︎",
      color: "#A2506A",
      roles: ["Research Coordinator", "Clinical Ethics Fellow", "Hospital Ethicist / IRB", "Bioethics Faculty"],
      reality:
        "One of the few philosophy specialties with a defined professional track. Hospitals, research institutions, and review boards employ ethicists to navigate consent, end-of-life, and research-ethics questions. Most roles want a graduate degree (an MA or PhD in bioethics or philosophy), sometimes paired with a clinical or legal background. Steady, but concentrated in academic medical centers.",
      salary: "$60k coordinator · $85–90k TT bioethicist · $130k+ senior / clinical",
    },
    {
      path: "Data, Tech & Product",
      icon: "💻",
      color: "#2E8C8C",
      roles: ["UX Researcher", "Product Analyst", "Product Manager", "Founder"],
      reality:
        "A less obvious but real path: philosophy's logic and modeling training transfers to product management, UX research, and even software — usually after a bootcamp or serious self-teaching. Reid Hoffman (LinkedIn) and Stewart Butterfield (Slack) are the famous cases. Tech pays the best of any exit, but you compete partly on skills the major doesn't directly teach, so a technical supplement helps.",
      salary: "$75k entry · $110–150k mid · $200k+ senior PM / founder",
    },
  ],
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Spectral:wght@400;500;600&family=Spline+Sans+Mono:wght@400;500;600&display=swap');
`;

const globalCSS = `
* { box-sizing: border-box; }
.hscroll {
  display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;
  scrollbar-width: none; -webkit-overflow-scrolling: touch;
}
.hscroll::-webkit-scrollbar { display: none; }
.phil-btn:focus-visible { outline: 2px solid #221E19; outline-offset: 2px; }
.phil-item { transition: border-color .18s ease, background .18s ease; }
.phil-card { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
@media (hover: hover) {
  .phil-card:hover { transform: translateY(-2px); }
}
@media (prefers-reduced-motion: reduce) {
  .phil-item, .phil-card { transition: none !important; }
}
`;

export default function PhilosophyRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);

  const selectPhase = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };

  const tabBase = {
    fontFamily: font.mono,
    fontSize: 12.5,
    letterSpacing: "0.02em",
    whiteSpace: "nowrap",
    padding: "9px 15px",
    borderRadius: 2,
    cursor: "pointer",
    flex: "0 0 auto",
    transition: "all .15s ease",
  };

  return (
    <div
      style={{
        fontFamily: font.body,
        background: C.paper,
        color: C.ink,
        minHeight: "100vh",
        // faint laid-paper texture
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.012) 0px, rgba(0,0,0,0.012) 1px, transparent 1px, transparent 26px)",
      }}
    >
      <style>{fontImport}</style>
      <style>{globalCSS}</style>

      {/* ---------------- HEADER ---------------- */}
      <header
        style={{
          borderBottom: `1px solid ${C.line}`,
          background:
            "linear-gradient(180deg, #EEE9DD 0%, " + C.paper + " 100%)",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "34px 20px 30px" }}>
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: "0.28em",
              color: C.faint,
              marginBottom: 14,
            }}
          >
            FIELD ROADMAP · THE HUMANITIES
          </div>
          <h1
            style={{
              fontFamily: font.display,
              fontWeight: 600,
              fontSize: "clamp(38px, 8vw, 66px)",
              lineHeight: 1.0,
              margin: "0 0 4px",
              letterSpacing: "-0.015em",
            }}
          >
            Philosophy
          </h1>

          {/* SIGNATURE: the field's own material — an argument, set in its notation */}
          <div
            style={{
              marginTop: 20,
              maxWidth: 620,
              borderLeft: `2px solid ${C.line}`,
              paddingLeft: 18,
            }}
          >
            <div style={{ display: "flex", gap: 12, marginBottom: 6 }}>
              <span style={{ fontFamily: font.mono, fontSize: 13, color: C.faint, flex: "0 0 24px" }}>P1</span>
              <span style={{ fontSize: 16, lineHeight: 1.45 }}>Every serious discipline rests on assumptions.</span>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 6 }}>
              <span style={{ fontFamily: font.mono, fontSize: 13, color: C.faint, flex: "0 0 24px" }}>P2</span>
              <span style={{ fontSize: 16, lineHeight: 1.45 }}>Philosophy is the discipline of examining assumptions.</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 10,
                paddingTop: 10,
                borderTop: `1px solid ${C.lineSoft}`,
              }}
            >
              <span style={{ fontFamily: font.mono, fontSize: 15, color: "#8C2F39", flex: "0 0 24px" }}>∴</span>
              <span
                style={{
                  fontFamily: font.display,
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: 17.5,
                  lineHeight: 1.4,
                }}
              >
                A map of where the examined life actually leads — and what the market pays for it.
              </span>
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 20px 72px" }}>
        {/* ---------------- PHASE TABS ---------------- */}
        <nav className="hscroll" style={{ marginBottom: 24 }} aria-label="Roadmap phases">
          {data.phases.map((p) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                className="phil-btn"
                onClick={() => selectPhase(p.id)}
                style={{
                  ...tabBase,
                  border: `1px solid ${on ? p.color : C.line}`,
                  color: on ? "#fff" : C.dim,
                  background: on ? p.color : C.panel,
                  fontWeight: on ? 600 : 500,
                }}
              >
                <span style={{ marginRight: 8, opacity: on ? 0.85 : 0.55 }}>{p.mark}</span>
                {p.label}
                <span style={{ color: on ? "#ffffffbb" : C.faint, marginLeft: 8, fontSize: 10.5 }}>
                  {p.years}
                </span>
              </button>
            );
          })}
          <button
            className="phil-btn"
            onClick={() => {
              setShowCareers(true);
              setExpandedCareer(null);
            }}
            style={{
              ...tabBase,
              border: `1px solid ${showCareers ? "#B07A16" : C.line}`,
              color: showCareers ? "#fff" : C.dim,
              background: showCareers ? "#B07A16" : C.panel,
              fontWeight: showCareers ? 600 : 500,
            }}
          >
            <span style={{ marginRight: 8, opacity: showCareers ? 0.85 : 0.55 }}>∴</span>
            Career Paths
            <span style={{ color: showCareers ? "#ffffffbb" : C.faint, marginLeft: 8, fontSize: 10.5 }}>
              8 LISTED
            </span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* ---------------- PHASE INTRO ---------------- */}
            <div style={{ borderLeft: `3px solid ${phase.color}`, paddingLeft: 18, marginBottom: 24 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: phase.color,
                  letterSpacing: "0.16em",
                  marginBottom: 8,
                }}
              >
                {phase.mark}&nbsp;&nbsp;{phase.years.toUpperCase()} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 16.5, lineHeight: 1.62, maxWidth: 760 }}>
                {phase.intro}
              </p>
            </div>

            {/* ---------------- SECTION SUBTABS ---------------- */}
            <div className="hscroll" style={{ marginBottom: 18 }}>
              {phase.sections.map((s, i) => {
                const on = activeSection === i;
                return (
                  <button
                    key={s.title}
                    className="phil-btn"
                    onClick={() => {
                      setActiveSection(i);
                      setExpandedItem(null);
                    }}
                    style={{
                      ...tabBase,
                      fontSize: 12,
                      padding: "8px 13px",
                      border: `1px solid ${on ? phase.color : C.line}`,
                      color: on ? phase.color : C.dim,
                      background: on ? C.panelUp : "transparent",
                      fontWeight: on ? 600 : 500,
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{s.icon}</span>
                    {s.title}
                  </button>
                );
              })}
            </div>

            {/* ---------------- EXPANDABLE ITEMS ---------------- */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <button
                    key={item.name}
                    className="phil-btn phil-item"
                    onClick={() => setExpandedItem(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? phase.color : C.line}`,
                      borderRadius: 3,
                      padding: 0,
                      cursor: "pointer",
                      color: C.ink,
                      display: "flex",
                      overflow: "hidden",
                    }}
                    aria-expanded={open}
                  >
                    {/* marginalia gutter with an argument operator */}
                    <span
                      style={{
                        flex: "0 0 40px",
                        alignSelf: "stretch",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: font.mono,
                        fontSize: 14,
                        color: open ? phase.color : C.faint,
                        background: open ? "transparent" : "rgba(0,0,0,0.018)",
                        borderRight: `1px solid ${open ? phase.color + "55" : C.lineSoft}`,
                      }}
                      aria-hidden="true"
                    >
                      {open ? "∴" : "⊢"}
                    </span>

                    <span style={{ padding: "14px 16px", flex: 1 }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: font.display,
                            fontWeight: 600,
                            fontSize: 16.5,
                            letterSpacing: "-0.005em",
                          }}
                        >
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontFamily: font.mono,
                            fontSize: 16,
                            color: open ? phase.color : C.faint,
                            lineHeight: 1,
                          }}
                        >
                          {open ? "–" : "+"}
                        </span>
                      </span>
                      {open && (
                        <span
                          style={{
                            display: "block",
                            marginTop: 9,
                            fontSize: 15,
                            lineHeight: 1.58,
                            color: C.dim,
                            maxWidth: 720,
                          }}
                        >
                          {item.detail}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          /* ---------------- CAREER CARD GRID ---------------- */
          <>
            <div style={{ borderLeft: `3px solid #B07A16`, paddingLeft: 18, marginBottom: 24 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: "#B07A16",
                  letterSpacing: "0.16em",
                  marginBottom: 8,
                }}
              >
                ∴&nbsp;&nbsp;WHERE THE DEGREE LEADS
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 16.5, lineHeight: 1.62, maxWidth: 760 }}>
                Eight genuine destinations, from the longest-odds academic track to the fastest-growing one in AI. The through-line is the same skill: taking an argument apart and putting it back together, in writing, under objection.
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
                    className="phil-btn phil-card"
                    onClick={() => setExpandedCareer(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: C.panel,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderTop: `3px solid ${c.color}`,
                      borderRadius: 3,
                      padding: "16px 16px 18px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? `0 6px 22px rgba(34,30,25,0.10)` : "none",
                      alignSelf: "start",
                    }}
                    aria-expanded={open}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 22, lineHeight: 1 }}>{c.icon}</span>
                      <span
                        style={{
                          fontFamily: font.display,
                          fontWeight: 600,
                          fontSize: 18,
                          color: c.color,
                          lineHeight: 1.15,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {c.path}
                      </span>
                    </div>

                    {/* role-title chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontFamily: font.mono,
                            fontSize: 10.5,
                            letterSpacing: "0.01em",
                            color: C.dim,
                            border: `1px solid ${C.line}`,
                            borderRadius: 2,
                            padding: "3px 7px",
                            background: C.panelUp,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>

                    {open && (
                      <>
                        <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.58, color: C.dim }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            marginTop: 14,
                            padding: "10px 12px",
                            background: c.color + "12",
                            border: `1px solid ${c.color}44`,
                            borderRadius: 3,
                          }}
                        >
                          <div
                            style={{
                              fontFamily: font.mono,
                              fontSize: 9.5,
                              letterSpacing: "0.16em",
                              color: c.color,
                              marginBottom: 4,
                            }}
                          >
                            TYPICAL PAY
                          </div>
                          <div style={{ fontFamily: font.mono, fontSize: 13, color: C.ink, lineHeight: 1.4 }}>
                            {c.salary}
                          </div>
                        </div>
                      </>
                    )}

                    <div
                      style={{
                        marginTop: 12,
                        fontFamily: font.mono,
                        fontSize: 10.5,
                        color: C.faint,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {open ? "– close" : "+ the realistic picture"}
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* ---------------- FOOTER HINT ---------------- */}
        <div
          style={{
            marginTop: 30,
            paddingTop: 16,
            borderTop: `1px solid ${C.line}`,
            fontFamily: font.mono,
            fontSize: 11.5,
            color: C.faint,
            letterSpacing: "0.03em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: C.dim }}>⊢</span>
          Tap any item or card to expand it. Salaries are U.S. ranges and shift by region, institution, and year.
        </div>
      </main>
    </div>
  );
}
