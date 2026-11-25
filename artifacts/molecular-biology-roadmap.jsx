import { useState } from "react";

/* ---------------------------------------------------------------
   DESIGN TOKENS
   Aesthetic: "gel doc / darkroom" — agarose gel electrophoresis
   under UV light. Molecular biology's most iconic visual artifact.
--------------------------------------------------------------- */
const tokens = {
  bg: "#0A100D",
  bgPanel: "#111A16",
  bgPanelRaised: "#16221D",
  hairline: "#25342C",
  ink: "#E9F3ED",
  inkDim: "#93A79C",
  inkFaint: "#5C6E64",
  amber: "#F2B84B",   // undergrad — ethidium-bromide-stained band under UV
  teal: "#4DD8C4",    // master's — SYBR Green stain
  magenta: "#E8629E", // PhD — fluorescent reporter tag
  careers: "#8FD14F", // careers — GFP glow
};

const fonts = {
  display: `'Fraunces', Georgia, serif`,
  mono: `'IBM Plex Mono', 'Courier New', monospace`,
  body: `'Work Sans', -apple-system, sans-serif`,
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&family=Work+Sans:wght@400;500;600&display=swap');
`;

/* ---------------------------------------------------------------
   DATA — Molecular Biology, sourced from Stage 1 research
--------------------------------------------------------------- */
const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      color: tokens.amber,
      intro:
        "The undergraduate years build the core vocabulary of the cell: how DNA becomes RNA becomes protein, and how that machinery breaks in disease. Organic chemistry is the field's real filter — more students change plans because of orgo than because of biology itself. What separates a strong applicant from a great one isn't grades alone; it's time at a bench, running real experiments that fail and get fixed.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "🧬",
          items: [
            {
              name: "Intro Molecular & Cell Biology",
              detail:
                "The central dogma — DNA replication, transcription, translation — plus membrane structure, signaling, and the cell cycle. This is the load-bearing course every later class assumes you've internalized.",
            },
            {
              name: "Genetics",
              detail:
                "Mendelian inheritance through modern molecular genetics: gene mapping, mutation, recombination, and increasingly CRISPR-based gene editing as a standard unit, not a special topic.",
            },
            {
              name: "Organic Chemistry I & II",
              detail:
                "The universally cited weeder sequence. Reaction mechanisms and synthesis feel disconnected from biology at first, but they're the prerequisite language for biochemistry the following year.",
            },
            {
              name: "Biochemistry",
              detail:
                "Protein structure-function, enzyme kinetics, and metabolic pathways. Where organic chemistry and cell biology finally fuse into one coherent picture.",
            },
            {
              name: "Quantitative requirement (Statistics + CS or Math)",
              detail:
                "Increasingly explicit at top programs — one statistics course plus a computer science or math course. A sign the field now expects computational literacy well before grad school, not after.",
            },
          ],
        },
        {
          title: "Hands-On Skills",
          icon: "🧪",
          items: [
            {
              name: "Molecular cloning & PCR",
              detail:
                "Restriction digestion, ligation, transformation, and polymerase chain reaction — the basic verbs of molecular biology, practiced until they're reflexive.",
            },
            {
              name: "Gel electrophoresis & blotting",
              detail:
                "Separating and visualizing DNA, RNA, and protein by size or charge. Unglamorous, universal, and still how you first confirm almost anything worked.",
            },
            {
              name: "Protein purification & spectrophotometry",
              detail:
                "Chromatography, centrifugation, and enzymatic assays to isolate and quantify proteins — the introductory biochemistry lab sequence most departments require.",
            },
            {
              name: "CRISPR-based gene editing",
              detail:
                "Now taught as a standard undergraduate technique rather than a specialized skill, reflecting how thoroughly it has displaced older gene-editing methods in the field.",
            },
          ],
        },
        {
          title: "Tools & Emerging AI",
          icon: "💻",
          items: [
            {
              name: "AlphaFold / AlphaFold3",
              detail:
                "DeepMind's protein structure predictor, now Nobel-recognized (2024 Chemistry Prize), is standard reference material in coursework — students look up predicted structures the way earlier cohorts looked up sequences.",
            },
            {
              name: "Basic bioinformatics (BLAST, NCBI databases)",
              detail:
                "Sequence alignment and database search tools that are now assumed baseline literacy, introduced early rather than reserved for a dedicated bioinformatics course.",
            },
            {
              name: "Electronic lab notebooks",
              detail:
                "Increasingly replacing paper notebooks even at the undergraduate level, in part because industry and most PhD programs now require them.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🔬",
          items: [
            {
              name: "Undergraduate research (UROP-style)",
              detail:
                "Joining a lab for course credit or pay, often starting sophomore year. The single strongest predictor of PhD program competitiveness — more than GPA in most admissions committees' informal calculus.",
            },
            {
              name: "NSF REUs and named summer programs",
              detail:
                "Paid ten-week summer research intensives at other institutions. Valuable for exploring a subfield your home department doesn't offer and for building a second letter of recommendation.",
            },
            {
              name: "Departmental distinction / honors thesis",
              detail:
                "Typically requires sustained lab work, a poster presentation, and a faculty letter of support — a lighter-weight rehearsal for the PhD thesis process.",
            },
            {
              name: "Job/internship-prep coursework",
              detail:
                "Some departments now build résumé-writing and biotech-internship-search skills directly into the major, acknowledging that not every graduate is headed to grad school.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years ~5–7",
      color: tokens.teal,
      intro:
        "Unlike some fields, a master's in molecular biology is genuinely optional — most PhD programs admit straight from a bachelor's, and most industry roles don't require one. Where it does matter, it splits cleanly into two very different tracks: a professional degree built for an industry internship, or a thesis-based degree that functions as a PhD-application booster or a medical-school backup plan.",
      sections: [
        {
          title: "Program Types",
          icon: "🗂️",
          items: [
            {
              name: "Professional / terminal MS (e.g., MBT-style)",
              detail:
                "Coursework-heavy, built around a placed industry internship (biotech company, February–Fall timeline typical). Designed to land a job directly, not to feed a PhD.",
            },
            {
              name: "Thesis-based MS",
              detail:
                "Closer to a mini-PhD: a faculty-supervised research project and written thesis. Common as a stepping stone for applicants who want to strengthen a PhD application or as a standalone credential for teaching or industry.",
            },
            {
              name: "Combined BS/MS (4+1 or 4+2)",
              detail:
                "Lets strong undergraduates fold a master's year (or two) directly onto the bachelor's, often with the final year counting toward both degrees.",
            },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            {
              name: "Professional MS: usually self-funded",
              detail:
                "Tuition is paid out of pocket, similar to most professional master's degrees — the return is the internship placement and faster industry entry, not a stipend.",
            },
            {
              name: "Thesis MS: sometimes partially funded",
              detail:
                "Varies widely by department; some offer a TA-ship or partial tuition remission, but funding is far less guaranteed than in PhD programs.",
            },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "🧫",
          items: [
            {
              name: "Advanced omics techniques",
              detail:
                "RNA-seq, single-cell sequencing, and proteomics workflows, often taught with an explicit computational-analysis component rather than as pure wet-lab technique.",
            },
            {
              name: "Applied bioinformatics pipelines",
              detail:
                "Moving from using tools (BLAST) to building and running full analysis pipelines — a skill that increasingly determines starting salary in industry roles.",
            },
            {
              name: "Regulatory & GMP fundamentals",
              detail:
                "Professional-track programs often introduce Good Manufacturing Practice and regulatory basics, since many graduates land in quality or regulatory-adjacent industry roles.",
            },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD / Research",
      years: "Years ~5–11",
      color: tokens.magenta,
      intro:
        "PhD training in molecular biology is unusually standardized across the country: three lab rotations in year one, a qualifying exam by the end of year two or three, then three to five years of thesis research. Funding — stipend, tuition waiver, health insurance — is essentially universal at research universities, which is not true in every field. The honest trade is time: five to seven years for a credential whose main downstream job, a tenure-track professorship, only about one in six PhDs will land.",
      sections: [
        {
          title: "How Training Works",
          icon: "🔁",
          items: [
            {
              name: "Lab rotations (Year 1)",
              detail:
                "Typically three rotations of seven to ten weeks each, across different labs, before committing to a thesis advisor. Some programs allow a fourth rotation if a good fit hasn't emerged.",
            },
            {
              name: "Core curriculum + journal clubs",
              detail:
                "First-year coursework in molecular genetics, biochemistry, and cell biology, paired with journal clubs that train students to critically dissect published papers — a skill examined directly at the qualifying exam.",
            },
            {
              name: "Qualifying / candidacy exam",
              detail:
                "Usually a written research proposal defended orally before a faculty committee, completed by the end of year two or three. Passing converts you from student to PhD candidate.",
            },
            {
              name: "Funding: stipend + tuition waiver + insurance",
              detail:
                "Current stipends at research universities run roughly $36,000–$38,000/year plus a full tuition waiver — guaranteed for the program's normative duration (typically five years) contingent on good standing.",
            },
            {
              name: "Teaching requirement",
              detail:
                "Most programs require one to two semesters as a teaching assistant, both as a funding mechanism and because grant reviewers and search committees expect some teaching record.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🌐",
          items: [
            {
              name: "AI-driven protein design",
              detail:
                "The field has moved past AlphaFold merely predicting structures — 2025–2026 saw generative models (NVIDIA's BioNeMo/Proteina, used by Novo Nordisk and others) design novel protein binders that get experimentally validated in the lab, not just scored computationally.",
            },
            {
              name: "Spatial and single-cell biology",
              detail:
                "Sequencing and imaging technologies that preserve a cell's location within tissue, replacing the older approach of grinding up a whole sample and losing spatial context entirely.",
            },
            {
              name: "Synthetic biology & biological feedback control",
              detail:
                "Engineering cells and genetic circuits with predictable, programmable behavior — now formalized enough that some PhD programs offer dedicated training tracks in it.",
            },
            {
              name: "Cryo-EM structural biology",
              detail:
                "About 40% of new structures deposited to the Protein Data Bank in 2024–2025 came from cryo-electron microscopy, which — combined with AI prediction — is driving a record pace of new structural discoveries.",
            },
          ],
        },
        {
          title: "AI's Real Impact on Research",
          icon: "🤖",
          items: [
            {
              name: "Structure prediction is now routine",
              detail:
                "AlphaFold is 'routinely used in experimental structure determination workflows,' per practicing structural biologists — not a novelty, but an assumed step before wet-lab crystallography or cryo-EM.",
            },
            {
              name: "Design-to-validation loop is tightening, not closed",
              detail:
                "AI-designed antimicrobial peptides and enhanced CRISPR variants are now reaching physical testing — a real qualitative shift — but honest practitioner assessment still frames adoption as incremental, not a wholesale replacement of bench validation.",
            },
            {
              name: "Drug discovery timelines are compressing, cautiously",
              detail:
                "Isomorphic Labs (a DeepMind spinout) reached first-in-human trials for AI-designed oncology candidates in 2025–2026, but even its own leadership frames this as 'staffing up' toward proof of concept, not an established pipeline.",
            },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Academic Research (Tenure Track)",
      icon: "🎓",
      color: tokens.magenta,
      roles: ["Postdoc", "Assistant Professor", "Associate Professor", "Full Professor / PI"],
      reality:
        "The most prestige-laden path and by far the most competitive: roughly one tenure-track opening exists for every 6.3 biomedical PhD graduates, and most successful applicants complete multiple postdocs (four-plus years combined) with first-author papers in top journals before landing an offer. AI risk is low for the intellectual core of the job — designing and interpreting novel experiments — but grant-writing, literature review, and some data analysis are increasingly AI-assisted, raising expectations for output per lab.",
      salary: "$92K (Asst. Prof., avg.) – $155K+ (Full Prof., avg.); $200K+ at elite privates",
    },
    {
      path: "Biotech / Pharma Industry R&D",
      icon: "🏭",
      color: tokens.amber,
      roles: ["Research Associate", "Scientist I/II", "Senior Scientist", "Principal Scientist", "R&D Director"],
      reality:
        "The default landing spot for most PhDs and many master's grads, concentrated in Boston-Cambridge, the Bay Area, and San Diego. Hiring is cyclical — a 2022–2024 'biotech winter' cut postings sharply, though 2025–2026 funding and M&A activity have picked back up. Wet-lab execution skills remain valuable, but candidates who can also run computational analysis are increasingly favored for promotion.",
      salary: "$106K (Scientist I, avg.) – $280K+ (Principal Scientist / Director)",
    },
    {
      path: "Bioinformatics / Computational Biology",
      icon: "🖥️",
      color: tokens.teal,
      roles: ["Bioinformatics Analyst", "Computational Biologist", "ML Scientist (Drug Discovery)", "Director of Bioinformatics"],
      reality:
        "The fastest-growing and best-compensated adjacent path, driven directly by the AI-in-biology wave — genomics, structure prediction, and generative protein design all run through this skillset. A PhD isn't strictly required; a master's plus three to four years of experience can match PhD starting pay, though PhDs pull ahead at senior levels. This is arguably the career path AI is expanding rather than threatening.",
      salary: "$90K (entry) – $250K+ (Principal Scientist); $250K–$400K+ (Director/VP)",
    },
    {
      path: "Patent Law (Patent Agent / Attorney)",
      icon: "⚖️",
      color: tokens.amber,
      roles: ["Technical Specialist", "Patent Agent", "Patent Agent (Senior)", "Patent Attorney (with JD)"],
      reality:
        "An underrated exit for PhDs: passing the USPTO Patent Bar doesn't require a law degree, and a PhD in molecular biology, biochemistry, or a related field automatically qualifies for exam eligibility. Life-sciences patent work pays a real premium over other technical specializations because of the complexity of biological claims. Competitive to break into at top firms, but the training investment beyond the PhD itself is comparatively small (a bar exam, not a full JD, for the agent track).",
      salary: "$110K (entry) – $230K+ (senior, top firms); law-degree-holding patent attorneys often higher",
    },
    {
      path: "Regulatory Affairs",
      icon: "📋",
      color: tokens.teal,
      roles: ["Regulatory Affairs Associate", "Regulatory Affairs Specialist", "Regulatory Affairs Manager", "Regulatory Affairs Director"],
      reality:
        "A steady, less glamorous but recession-resistant path bridging science and compliance — every biologic, gene therapy, and diagnostic needs someone who can translate lab results into an FDA-ready submission. Master's-level entry is common; deep technical fluency in the underlying science matters more than lab bench skill at this stage. Demand is rising with the growth of biologics and cell/gene therapy pipelines.",
      salary: "$70K (entry associate) – $140K (senior specialist, biotech sector)",
    },
    {
      path: "Science Policy",
      icon: "🏛️",
      color: tokens.magenta,
      roles: ["AAAS-style Policy Fellow", "Science Policy Analyst", "Senior Policy Advisor", "Agency/Think-Tank Director"],
      reality:
        "Small in headcount and lower-paid than industry, but disproportionately influential — PhDs move into agencies (NIH, FDA, USDA), congressional offices, and think tanks via competitive fellowships (AAAS and similar programs are the standard entry route). Best suited to people who want their science to shape regulation and funding decisions rather than generate it directly. AI is reshaping the substance of the work, since biosecurity and AI-bio dual-use policy are now among the field's most active portfolios.",
      salary: "$60K–$90K (fellowship/entry) – $130K+ (senior analyst/advisor)",
    },
    {
      path: "Biotech Entrepreneurship",
      icon: "🚀",
      color: tokens.careers,
      roles: ["Founding Scientist", "Co-founder/CSO", "CEO (scientist-founder)"],
      reality:
        "High variance by design: most biotech startups fail or get acquired for modest outcomes, but scientist-founders who combine strong research with fundraising and business fluency can move quickly into CSO or CEO roles. 2025–2026 saw a real funding rebound (biotech venture funding up over 70% quarter-over-quarter in late 2025) after a prolonged downturn, alongside a new wave of AI-native biotech startups. Requires deliberately building non-scientific skills — pitching, hiring, operations — that a PhD alone doesn't teach.",
      salary: "Highly variable; founder salaries often below market pre-funding, $400K–$800K+ at CEO level post-scale plus equity",
    },
    {
      path: "Science Communication & Education",
      icon: "📣",
      color: tokens.careers,
      roles: ["Medical/Science Writer", "K-12 or College Science Educator", "Science Journalist", "Museum/Outreach Scientist"],
      reality:
        "The most values-driven, least PhD-optimized-for path financially — most roles reward writing and teaching ability more than research pedigree, and a PhD can be a double-edged credential (valued for authority, sometimes seen as overqualified for entry roles). Medical writing pays notably better than journalism or K-12 teaching. A genuine growth area as public trust in science communication becomes a stated institutional priority.",
      salary: "$45K–$65K (K-12 teaching, journalism) – $90K–$130K (senior medical/regulatory writing)",
    },
  ],
};

/* ---------------------------------------------------------------
   COMPONENT
--------------------------------------------------------------- */
export default function MolecularBiologyRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);

  function selectPhase(id) {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  }

  function selectSection(idx) {
    setActiveSection(idx);
    setExpandedItem(null);
  }

  function toggleItem(key) {
    setExpandedItem(expandedItem === key ? null : key);
  }

  return (
    <div style={styles.page}>
      <style>{fontImport}</style>
      <style>{globalCSS}</style>

      {/* GEL BACKGROUND TEXTURE */}
      <div style={styles.gelTexture} aria-hidden="true" />

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.eyebrow}>FIELD ROADMAP · LIFE SCIENCES</div>
          <h1 style={styles.h1}>Molecular Biology</h1>
          <p style={styles.tagline}>
            From the central dogma to the corner office — a lab-bench view of
            where this degree actually leads, and where AI is already
            rewriting the lab notebook.
          </p>
        </div>
      </header>

      {summary}

      {/* GEL LANE NAVIGATION */}
      <nav style={styles.laneNav} aria-label="Career phase navigation">
        <div style={styles.laneNavInner}>
          {data.phases.map((p) => (
            <button
              key={p.id}
              onClick={() => selectPhase(p.id)}
              style={{
                ...styles.lane,
                ...(activePhase === p.id && !showCareers
                  ? { ...styles.laneActive, "--lane-color": p.color }
                  : {}),
              }}
            >
              <span
                style={{
                  ...styles.band,
                  background: p.color,
                  opacity: activePhase === p.id && !showCareers ? 1 : 0.25,
                  boxShadow:
                    activePhase === p.id && !showCareers
                      ? `0 0 12px ${p.color}, 0 0 24px ${p.color}66`
                      : "none",
                }}
              />
              <span style={styles.laneLabel}>{p.label}</span>
              <span style={styles.laneYears}>{p.years}</span>
            </button>
          ))}
          <button
            onClick={() => setShowCareers(true)}
            style={{
              ...styles.lane,
              ...(showCareers ? { ...styles.laneActive, "--lane-color": tokens.careers } : {}),
            }}
          >
            <span
              style={{
                ...styles.band,
                background: tokens.careers,
                opacity: showCareers ? 1 : 0.25,
                boxShadow: showCareers
                  ? `0 0 12px ${tokens.careers}, 0 0 24px ${tokens.careers}66`
                  : "none",
              }}
            />
            <span style={styles.laneLabel}>Career Paths</span>
            <span style={styles.laneYears}>8 destinations</span>
          </button>
        </div>
      </nav>

      <main style={styles.main}>
        {!showCareers ? (
          <>
            {/* PHASE INTRO */}
            <section style={styles.introBlock}>
              <div
                style={{ ...styles.introBar, background: phase.color }}
                aria-hidden="true"
              />
              <p style={styles.introText}>{phase.intro}</p>
            </section>

            {/* SECTION TABS */}
            <div style={styles.sectionTabs}>
              {phase.sections.map((s, idx) => (
                <button
                  key={s.title}
                  onClick={() => selectSection(idx)}
                  style={{
                    ...styles.sectionTab,
                    ...(activeSection === idx
                      ? {
                          borderColor: phase.color,
                          color: tokens.ink,
                          background: tokens.bgPanelRaised,
                        }
                      : {}),
                  }}
                >
                  <span style={{ marginRight: 8 }}>{s.icon}</span>
                  {s.title}
                </button>
              ))}
            </div>

            {/* EXPANDABLE ITEMS */}
            <div style={styles.itemList}>
              {phase.sections[activeSection].items.map((item, idx) => {
                const key = `${activePhase}-${activeSection}-${idx}`;
                const isOpen = expandedItem === key;
                return (
                  <div
                    key={key}
                    style={{
                      ...styles.item,
                      borderColor: isOpen ? phase.color : tokens.hairline,
                    }}
                  >
                    <button
                      onClick={() => toggleItem(key)}
                      style={styles.itemHeader}
                      aria-expanded={isOpen}
                    >
                      <span style={styles.itemName}>{item.name}</span>
                      <span
                        style={{
                          ...styles.itemChevron,
                          color: phase.color,
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div style={styles.itemDetail}>{item.detail}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* CAREER PATHS GRID */
          <section>
            <div style={styles.introBlock}>
              <div
                style={{ ...styles.introBar, background: tokens.careers }}
                aria-hidden="true"
              />
              <p style={styles.introText}>
                Eight real destinations, not just the obvious one. Salary
                ranges and competitiveness notes reflect current
                (2026) US market data — tap a card for the honest picture.
              </p>
            </div>
            <div style={styles.careerGrid}>
              {data.careers.map((c, idx) => {
                const isOpen = expandedCareer === idx;
                return (
                  <div
                    key={c.path}
                    style={{
                      ...styles.careerCard,
                      borderColor: isOpen ? c.color : tokens.hairline,
                    }}
                  >
                    <button
                      onClick={() => setExpandedCareer(isOpen ? null : idx)}
                      style={styles.careerCardButton}
                      aria-expanded={isOpen}
                    >
                      <div style={styles.careerCardTop}>
                        <span style={styles.careerIcon}>{c.icon}</span>
                        <span
                          style={{ ...styles.careerTitle, color: c.color }}
                        >
                          {c.path}
                        </span>
                      </div>
                      <div style={styles.roleChips}>
                        {c.roles.map((r) => (
                          <span key={r} style={styles.roleChip}>
                            {r}
                          </span>
                        ))}
                      </div>
                      <div style={styles.careerToggle}>
                        <span style={{ color: c.color }}>
                          {isOpen ? "− less" : "+ reality check"}
                        </span>
                      </div>
                    </button>
                    {isOpen && (
                      <div style={styles.careerDetail}>
                        <p style={styles.realityText}>{c.reality}</p>
                        <div
                          style={{
                            ...styles.salaryBadge,
                            borderColor: c.color,
                            color: c.color,
                          }}
                        >
                          {c.salary}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <footer style={styles.footer}>
        <span style={styles.footerMono}>
          tap a lane to change phase · tap an item to expand
        </span>
      </footer>
    </div>
  );
}

/* ---------------------------------------------------------------
   STYLES
--------------------------------------------------------------- */
const globalCSS = `
  * { box-sizing: border-box; }
  button { font-family: inherit; cursor: pointer; }
  button:focus-visible {
    outline: 2px solid ${tokens.careers};
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; animation: none !important; }
  }
`;

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: tokens.bg,
    color: tokens.ink,
    fontFamily: fonts.body,
    overflowX: "hidden",
  },
  gelTexture: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    backgroundImage: `repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 38px,
      rgba(77, 216, 196, 0.035) 39px,
      transparent 40px
    )`,
  },
  header: {
    position: "relative",
    zIndex: 1,
    padding: "40px 20px 28px",
    borderBottom: `1px solid ${tokens.hairline}`,
  },
  headerInner: { maxWidth: 880, margin: "0 auto" },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: "0.14em",
    color: tokens.careers,
    marginBottom: 12,
  },
  h1: {
    fontFamily: fonts.display,
    fontWeight: 600,
    fontSize: "clamp(2.1rem, 6vw, 3.2rem)",
    margin: 0,
    lineHeight: 1.05,
    letterSpacing: "-0.01em",
  },
  tagline: {
    marginTop: 14,
    fontSize: 15.5,
    lineHeight: 1.55,
    color: tokens.inkDim,
    maxWidth: 560,
  },
  laneNav: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "rgba(10, 16, 13, 0.92)",
    backdropFilter: "blur(8px)",
    borderBottom: `1px solid ${tokens.hairline}`,
  },
  laneNavInner: {
    display: "flex",
    overflowX: "auto",
    maxWidth: 880,
    margin: "0 auto",
    padding: "0 12px",
    WebkitOverflowScrolling: "touch",
  },
  lane: {
    background: "transparent",
    border: "none",
    borderBottom: "3px solid transparent",
    padding: "14px 16px 11px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 6,
    minWidth: 118,
    flexShrink: 0,
    transition: "border-color 0.2s ease",
  },
  laneActive: {
    borderBottom: "3px solid var(--lane-color)",
  },
  band: {
    width: 28,
    height: 4,
    borderRadius: 2,
    transition: "opacity 0.25s ease, box-shadow 0.25s ease",
  },
  laneLabel: {
    fontSize: 13.5,
    fontWeight: 600,
    color: tokens.ink,
  },
  laneYears: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: tokens.inkFaint,
  },
  main: {
    position: "relative",
    zIndex: 1,
    maxWidth: 880,
    margin: "0 auto",
    padding: "28px 20px 60px",
  },
  introBlock: {
    display: "flex",
    gap: 16,
    marginBottom: 28,
  },
  introBar: {
    width: 4,
    borderRadius: 2,
    flexShrink: 0,
  },
  introText: {
    fontSize: 15.5,
    lineHeight: 1.65,
    color: tokens.inkDim,
    margin: 0,
  },
  sectionTabs: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    marginBottom: 20,
    paddingBottom: 4,
    WebkitOverflowScrolling: "touch",
  },
  sectionTab: {
    background: tokens.bgPanel,
    border: `1px solid ${tokens.hairline}`,
    borderRadius: 8,
    padding: "9px 14px",
    fontSize: 13.5,
    fontWeight: 500,
    color: tokens.inkDim,
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all 0.2s ease",
  },
  itemList: { display: "flex", flexDirection: "column", gap: 10 },
  item: {
    background: tokens.bgPanel,
    border: "1px solid",
    borderRadius: 10,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
  },
  itemHeader: {
    width: "100%",
    background: "transparent",
    border: "none",
    padding: "16px 18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    gap: 12,
  },
  itemName: {
    fontSize: 15,
    fontWeight: 500,
    color: tokens.ink,
    lineHeight: 1.4,
  },
  itemChevron: {
    fontFamily: fonts.mono,
    fontSize: 20,
    fontWeight: 400,
    flexShrink: 0,
    transition: "transform 0.2s ease",
  },
  itemDetail: {
    padding: "0 18px 18px",
    fontSize: 14,
    lineHeight: 1.6,
    color: tokens.inkDim,
  },
  careerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 14,
  },
  careerCard: {
    background: tokens.bgPanel,
    border: "1px solid",
    borderRadius: 12,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
  },
  careerCardButton: {
    width: "100%",
    background: "transparent",
    border: "none",
    padding: 18,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    textAlign: "left",
  },
  careerCardTop: { display: "flex", alignItems: "center", gap: 10 },
  careerIcon: { fontSize: 22 },
  careerTitle: {
    fontFamily: fonts.display,
    fontSize: 17,
    fontWeight: 600,
  },
  roleChips: { display: "flex", flexWrap: "wrap", gap: 6 },
  roleChip: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    padding: "4px 8px",
    borderRadius: 5,
    background: tokens.bgPanelRaised,
    color: tokens.inkDim,
    border: `1px solid ${tokens.hairline}`,
  },
  careerToggle: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    marginTop: 2,
  },
  careerDetail: {
    padding: "0 18px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  realityText: {
    fontSize: 13.5,
    lineHeight: 1.6,
    color: tokens.inkDim,
    margin: 0,
  },
  salaryBadge: {
    display: "inline-block",
    fontFamily: fonts.mono,
    fontSize: 13,
    fontWeight: 600,
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid",
    background: tokens.bgPanelRaised,
    width: "fit-content",
  },
  footer: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "20px 20px 40px",
  },
  footerMono: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: tokens.inkFaint,
    letterSpacing: "0.04em",
  },
};
