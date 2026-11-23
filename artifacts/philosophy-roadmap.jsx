import { useState } from "react";

/* ------------------------------------------------------------------ *
 *  PHILOSOPHY: Field Roadmap
 *  Aesthetic: "The Examined Page": iron-gall ink on cool rag paper,
 *  jewel-toned marginalia (lapis / oxblood / verdigris / brass), and a
 *  structural motif drawn from the field's own material: the logical
 *  operators of argument (⊢ premise-set, ∴ therefore). Structure here
 *  encodes something true: philosophy is the analysis of argument.
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
        "Philosophy is a small major in credits and a heavy one in reading and writing. The skill it drills is defending a position without hand-waving: reconstruct an argument, find the weak premise, and rebuild it better. Its majors also score near the top on the LSAT, second only to economics among large majors.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📖",
          items: [
            { name: "Symbolic / Formal Logic", detail: "Propositional and predicate logic, proofs, and validity. Columbia and Yale require it by name, most other programs checked require a logic course, and Yale advises taking it by fall of junior year." },
            { name: "History of Philosophy", detail: "Ancient through early modern philosophy. Columbia requires two history courses, Yale three (including two intro surveys), and NYU requires both Ancient and Early Modern." },
            { name: "Ethics & Value Theory", detail: "Yale requires two courses in ethics and value, and NYU requires an ethics or values course. Columbia's requirement can be met with ethics, social and political philosophy, or aesthetics." },
            { name: "Metaphysics & Epistemology", detail: "Utah treats this as one of its four required areas and Yale requires two courses in it. Columbia and NYU let it share a requirement with philosophy of language, science, or mind." },
            { name: "Philosophy of Science / Language / Mind", detail: "NYU requires a mind or language course, and Princeton groups logic with philosophy of science. MIT and Princeton offer linguistics and philosophy options." },
            { name: "Senior Seminar or Thesis", detail: "Utah's Senior Seminar satisfies its advanced writing requirement, Princeton requires a senior thesis, and Yale's senior requirement is a third seminar or an independent project." },
          ],
        },
        {
          title: "The Hard Parts",
          icon: "⚠︎",
          items: [
            { name: "Symbolic logic proofs", detail: "Logic is mathematical enough that MIT lets students take a logic course in Mathematics, and Berkeley's logic minor has a Mathematics track. Expect formal proof work, not essay work." },
            { name: "Gated advanced seminars", detail: "Columbia requires four philosophy courses before any 4000-level course, and Utah requires at least three courses at the 5000 level. Upper-level work assumes the foundations." },
            { name: "Independent work", detail: "Princeton adds a junior independent-work group, a spring junior paper, and a senior thesis. Yale's senior requirement can be a one- or two-term independent project." },
            { name: "Writing that survives objections", detail: "Princeton's department says its courses teach students to write without advocating a view that lacks an argument behind it, and to listen to arguments from the other side." },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "🛠",
          items: [
            { name: "Reasoned argument", detail: "Princeton's department describes the discipline as a commitment to reasoned argument and the evidence of experience, without appeal to tradition or authority." },
            { name: "Analytic writing", detail: "Princeton says courses in every area teach students to write without advocating a view that lacks an argument. Utah's Senior Seminar counts as advanced writing." },
            { name: "Formal methods", detail: "Utah names Logic and Formal Methods as one of its four areas, and formal epistemology applies probability theory and modal logic to questions about evidence and belief." },
            { name: "Listening to the other side", detail: "Princeton's department says philosophy is distinguished by being prepared to listen to arguments from the other side." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🎯",
          items: [
            { name: "An original paper", detail: "80,000 Hours advises writing an original paper before graduate school, polished to 4,000 to 10,000 words (journal-article length), and asking professors for honest feedback." },
            { name: "Ethics Bowl", detail: "Many departments run Intercollegiate Ethics Bowl teams, including Tufts, Indiana, UC Santa Cruz, William and Mary, Vanderbilt, and Oklahoma." },
            { name: "Built-in pairings", detail: "Yale has a psychology concentration, NYU a cognitive science major shared with linguistics and psychology, USC a Philosophy, Politics and Law major, and MIT a linguistics and philosophy track." },
            { name: "Pre-law track", detail: "FIU offers a major track for law, religion, or psychology. Philosophy averaged 157.2 on the LSAT in 2017-18, second to economics (158.9) among large majors, though LSAC cautions that major averages do not show a major prepares students better." },
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
        "Philosophy breaks the usual mold: a master's is mostly a bridge. Many funded MAs coach students toward PhD applications, while others serve students headed to teaching, law school, or government and nonprofit work. Funding varies widely, so the stated purpose of each program matters more than the degree title.",
      sections: [
        {
          title: "Why a Master's",
          icon: "🧭",
          items: [
            { name: "PhD preparation", detail: "Northern Illinois and Virginia Tech describe writing seminars and feedback on writing samples. Northern Illinois faculty report that 80 of 90 MA graduates who applied to PhD programs over a decade were admitted with full funding (self-reported)." },
            { name: "Not only a PhD bridge", detail: "CUNY's MA prepares students to teach at community colleges or secondary schools, SF State serves students who want to teach, advance, or change careers, and Montana reports placing students in law school, government, and nonprofits." },
            { name: "Bioethics and applied programs", detail: "FSU offers a graduate certificate in bioethics, and in a 2023 survey, full-time clinical ethics consultants with a master's averaged $113,625." },
            { name: "Funding varies widely", detail: "Virginia Tech lists $25,200 and Georgia State at least $10,000, while Tufts averages about 60% tuition remission and CUNY and Texas A&M offered little or none as of 2022. Check each program directly." },
          ],
        },
        {
          title: "What You Study",
          icon: "📐",
          items: [
            { name: "The writing sample", detail: "80,000 Hours advises a polished original paper of 4,000 to 10,000 words, the length of a journal article. DePaul's application also asks for a writing sample." },
            { name: "Distribution requirements", detail: "Loyola Chicago's MA requires courses in five of seven distribution areas, spanning contemporary analytic, contemporary continental, ancient, medieval, and modern philosophy." },
            { name: "Concentrations", detail: "FSU offers a philosophy of science concentration within its MA." },
            { name: "Languages and logic", detail: "Language requirements are mostly PhD-level: Boston College and DePaul require two languages, while Loyola Chicago's MA has none. Harvard sets a logic requirement for its PhD." },
          ],
        },
        {
          title: "Funding Norms",
          icon: "💰",
          items: [
            { name: "Funded PhD programs", detail: "Stipends at programs checked: Loyola Chicago $28,000, DePaul $31,981, and Penn at least $43,050 (2025-26). Funding runs five to seven years." },
            { name: "Funded terminal MA", detail: "Listed stipends run from $9,751 (UW-Milwaukee) to $25,200 (Virginia Tech), usually with a tuition waiver. Many listings are over five years old, so confirm with the program." },
            { name: "Little or no funding", detail: "Some programs offer little or no funding, including CUNY and Texas A&M as of 2022. Weigh the cost against the specific job the credential opens." },
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
        "The philosophy PhD is long, funded at the programs checked, and built around one thing: an original, book-length dissertation. Admission is selective, and the academic job market on the far side is tight: about 40% of PhDs from 2015 onward hold a permanent academic job. Going in with clear eyes about the odds is itself a philosophical exercise.",
      sections: [
        {
          title: "The Doctoral Path",
          icon: "🎓",
          items: [
            { name: "Coursework (Years 1–2)", detail: "Twelve courses at Harvard, Cornell, and Syracuse and sixteen at Boston College. Harvard adds a second-year paper and a logic requirement." },
            { name: "The qualifying / topical exam", detail: "Cornell's A exam is an oral exam on the prospectus, Loyola Chicago's candidacy exam covers a dissertation proposal with a first chapter, and Columbia's final M.Phil. requirement is a proposal defense." },
            { name: "The dissertation", detail: "Syracuse requires a book-length dissertation. Columbia places it in year five and possibly years six and seven, and DePaul allows eight months to two years after candidacy." },
            { name: "Teaching apprenticeship", detail: "Harvard requires a pedagogy seminar in the first year a student teaches, DePaul has a teaching practicum in years two and three, and Boston College runs a teaching seminar." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔬",
          items: [
            { name: "Ethics & epistemology of AI", detail: "A 2025 review argues that new ethical theories of distributed agency, where responsibility is shared among designers, firms, and software, can advance AI ethics. MIT Sloan authors argue philosophy also shapes what AI models should achieve and what counts as knowledge." },
            { name: "Formal epistemology & decision theory", detail: "The Stanford Encyclopedia describes using probability theory, modal logic, and computer simulation on questions such as confirming scientific theories and the problem of induction." },
            { name: "Experimental philosophy (x-phi)", detail: "The Stanford Encyclopedia describes a methodological naturalist approach using vignette questionnaires, corpus studies, and behavioral, qualitative, and brain-imaging methods to test empirical assumptions in philosophical theorizing." },
            { name: "Expanding the canon", detail: "FIU requires a non-Western philosophy course, and Loyola Chicago lists feminism and critical philosophy of race among its strengths." },
            { name: "Consciousness", detail: "In 2025 an adversarial collaboration tested two leading consciousness theories and found no winner, and researchers writing in Frontiers in Science argued that AI and neurotechnology make explaining consciousness urgent." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🧰",
          items: [
            { name: "Citation & typesetting", detail: "Philosophers in a 2025 Daily Nous comment thread named Zotero for citation management and LaTeX with BibLaTeX for typesetting." },
            { name: "Formal tools", detail: "Formal epistemology uses probability theory, modal logic, and computer simulation. Course catalogs list probability and rational choice courses at MIT, Utah, and FIU." },
            { name: "How philosophers use AI", detail: "In a 2025 thread of reader comments (not a survey), some used AI for teaching materials, editing, and testing objections, others limited it to narrow tasks such as reformatting a bibliography, and others avoided it on ethical grounds. Tools named included ChatGPT, Claude, Gemini, NotebookLM, and Perusall." },
            { name: "Hallucinated citations", detail: "Several commenters in the same thread raised hallucinated citations, including a thesis bibliography with invented references." },
          ],
        },
        {
          title: "The Hard Truths",
          icon: "⚖︎",
          items: [
            { name: "Admission ~4–8%", detail: "Reported rates were about 6% at Michigan, 8% at UCLA, and 4% to 5% at Yale (2018-19 figures). Applications also ask for a writing sample, and DePaul does not use the GRE." },
            { name: "Tenure-track is scarce", detail: "About 40% of PhDs from 2015 onward hold a permanent academic job, and about 32% are on the tenure track or equivalent. Another 42% are in temporary academic work and 18% are outside academia." },
            { name: "Years of limbo", detail: "80,000 Hours describes five to seven years of PhD, two to three years of postdocs or short-term jobs, then five to nine years on the tenure track before tenure." },
            { name: "Non-academic exits", detail: "About 18% of PhDs from 2015 onward work outside academia, and their job satisfaction is no different from permanent academics' in APDA's 2025 survey. Both report more satisfaction than temporary academics." },
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
        "The long-odds path. Of PhDs from 2015 onward, about 40% hold a permanent academic job and about 42% are in temporary academic work, often after years of postdocs and visiting positions. BLS counts about 26,800 philosophy and religion teaching jobs and projects 2% growth through 2035. Permanent academics are more satisfied than temporary ones, but no more satisfied than PhDs working outside academia.",
      salary: "$80k median philosophy and religion teacher (BLS, 2025) · $51k avg temporary academic · $82k avg permanent academic (APDA, 2023)",
    },
    {
      path: "Law & Legal Practice",
      icon: "⚖︎",
      color: "#2E5E8C",
      roles: ["Paralegal", "JD Student", "Associate Attorney", "Partner / Counsel"],
      reality:
        "The best-trodden path. Philosophy ranked second behind economics among large majors on the LSAT in 2017-18, though LSAC cautions that major averages do not show a major prepares students better. A JD (three years) and a bar exam are required to practice, and pay differs sharply by employer: NALP's Class of 2025 had a median starting salary of $100,000 and 92.8% employment.",
      salary: "$75k public interest · $81k government · $84k small firm · $225k firms of 500+ lawyers (NALP, Class of 2025 medians)",
    },
    {
      path: "AI Ethics & Governance",
      icon: "🤖",
      color: "#B07A16",
      roles: ["Trust & Safety Analyst", "AI Policy Analyst", "Responsible AI Lead", "AI Ethics Officer"],
      reality:
        "The newest destination, and still taking shape. IAPP's 2025 survey found AI governance sitting mostly with legal and compliance (22%) and IT (17%), with ethics and compliance primary in 6%, and it does not report philosophy backgrounds. Expect to pair ethical reasoning with fluency in regulation and data; frameworks named in recent literature include the EU AI Act, the NIST AI Risk Management Framework, and ISO/IEC 42001.",
      salary: "$151,800 median for AI governance roles (IAPP 2025-26, global) · $221k median for technical AI governance roles in tech",
    },
    {
      path: "Consulting & Strategy",
      icon: "📊",
      color: "#8C2F39",
      roles: ["Analyst", "Consultant", "Strategy Manager", "Corporate Strategist"],
      reality:
        "BLS lists a bachelor's as the typical entry degree for management analysts, the closest official category, so this path does not require graduate school. Pay spreads widely, and BLS data say nothing about hiring routes at top firms, which vary by firm.",
      salary: "$101,860 median management analyst (BLS, 2025) · $60,640 at the 10th percentile · $171,640 at the 90th",
    },
    {
      path: "Policy, Nonprofit & Public Sector",
      icon: "📜",
      color: "#4A6A7A",
      roles: ["Research Assistant", "Policy Analyst", "Program Manager", "Director / Advisor"],
      reality:
        "Policy analyst roles at agencies and think tanks generally prefer a master's in public policy or economics. BLS lists a master's as typical for political scientists, a small occupation of about 6,100 jobs with a projected 2% decline. Nonprofit and NGO work was among the sectors where non-academic PhDs reported higher satisfaction than permanent academics. No source describes a philosophy-specific route.",
      salary: "$55–75k policy analyst entry (aggregator ranges, conflicting) · $142k median political scientist (BLS, 2025, small occupation)",
    },
    {
      path: "Writing, Media & Communications",
      icon: "✍︎",
      color: "#6E4A7A",
      roles: ["Editor", "Technical / UX Writer", "Content Strategist", "Communications Lead"],
      reality:
        "BLS projects flat or falling employment through 2035: writers and authors 0%, editors -1%, and technical writers 1%. Practitioners report that AI now produces first drafts in technical writing and that writers are shifting toward review.",
      salary: "$76,910 writers · $77,920 editors · $90,390 technical writers (BLS medians, 2025)",
    },
    {
      path: "Bioethics & Medical Ethics",
      icon: "⚕︎",
      color: "#A2506A",
      roles: ["Clinical Ethics Fellow", "Clinical Ethics Consultant", "Assistant Professor of Bioethics"],
      reality:
        "A defined professional track, though small and uneven. In a 2023 survey of 133 clinical ethics consultants, most worked full time, others held ethics as part of another job, and about a quarter were uncompensated, mostly clinical doctorate holders consulting beside patient care. Respondents held master's or clinical or nonclinical doctorates, and nonclinical doctorate holders tended to have more formal ethics training. The survey does not say what employers require.",
      salary: "$113,625 master's · $146,134 nonclinical doctorate · $188,310 clinical doctorate (full-time averages, 2023) · $85–90k tenure-track bioethics posting (2025)",
    },
    {
      path: "Data, Tech & Product",
      icon: "💻",
      color: "#2E8C8C",
      roles: ["UX Researcher", "Product Analyst", "Product Manager", "Founder"],
      reality:
        "No source shows a philosophy-specific route into product or research roles, so expect to compete on skills the major does not teach. Reid Hoffman (LinkedIn), who holds a master's in philosophy from Oxford, and Stewart Butterfield (Slack), who studied philosophy, are the well-known examples. Non-academic PhDs in technology reported higher satisfaction than permanent academics.",
      salary: "$77k avg associate PM base, $55–108k total pay (Payscale, 2025) · about $174k avg total at Meta, entry level (Levels.fyi, 2026)",
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

          {/* SIGNATURE: the field's own material, an argument, set in its notation */}
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
                A map of where the examined life actually leads, and what the market pays for it.
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
                Eight destinations, from the longest-odds academic track to the newest one in AI governance. The through-line is the same skill: taking an argument apart and putting it back together, in writing, under objection.
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
          Tap any item or card to expand it. Pay figures are mostly U.S. figures and shift by region, employer, and year.
        </div>
      </main>
    </div>
  );
}
