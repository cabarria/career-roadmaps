import { useState } from "react";

/* ============================================================
   ENGLISH — A Career Roadmap
   Visual identity: "the annotated archival edition"
   Warm archival paper, iron-gall ink, bookbinding-material
   accents, close-reading marginalia + line numbers as signature.
   Display/body: Spectral · Utility/marks: IBM Plex Mono
   ============================================================ */

const C = {
  paper: "#EAE3D2",
  paper2: "#E2D9C4",
  card: "#F1ECDE",
  cardEdge: "#D8CDB2",
  ink: "#211C15",
  inkSoft: "#5B5242",
  inkFaint: "#8B8069",
  rule: "#CBC0A6",
  mark: "#B23A2E",
};

const PHASES = [
  {
    id: "undergrad",
    label: "Undergraduate",
    years: "Years 1–4",
    accent: "#33477A", // manuscript indigo
    intro:
      "The English major is built on close reading — the disciplined, attentive interpretation of texts — plus a great deal of writing. Expect team-taught surveys tracing literature from the medieval period to the present, a required methods gateway, distribution across historical periods and genres, and (for the doctoral-bound) a foreign language. It ends in a capstone seminar and a long research paper.",
    sections: [
      {
        title: "Core Curriculum",
        mark: "§",
        items: [
          { name: "Methods gateway", detail: "A required entry course — 'Approaches to Literary Study,' 'Critical Practice' — that drills close reading and the conventions of critical writing. Take it early; later seminars assume it." },
          { name: "Historical survey sequence", detail: "Team-taught surveys mapping British, American, and Anglophone literature from the Middle Ages to the present, giving you the landscape before you specialize." },
          { name: "Period distribution", detail: "Coverage across eras is usually mandatory. A pre-1700 requirement typically forces at least one Chaucer, Milton, or Shakespeare course — the ones students brace for." },
          { name: "Critical theory", detail: "Formalism, structuralism, psychoanalysis, Marxist, postcolonial, feminist, queer, and critical-race approaches — the interpretive lenses that define graduate-level study, and the course many find hardest." },
          { name: "Genre courses (poetry, narrative, drama)", detail: "Focused study of how form makes meaning. Poetry courses in particular teach scansion and meter — the mechanical, technical side most students underestimate." },
          { name: "Foreign language requirement", detail: "Most PhD programs require reading knowledge of at least one language (often French, German, or Latin). If a doctorate is possible, start the sequence as a freshman." },
          { name: "Senior capstone / thesis", detail: "A final research seminar producing a substantial essay — your first sustained scholarship and a key writing sample for graduate or job applications." },
        ],
      },
      {
        title: "Skills You'll Build",
        mark: "✎",
        items: [
          { name: "Close reading", detail: "Extracting argument, tone, and structure from a text word by word. The discipline's signature method — and the one that transfers most directly to law, editing, and analysis." },
          { name: "Argument-driven writing", detail: "Building and defending an interpretive thesis with textual evidence, repeated across dozens of papers until it becomes reflex." },
          { name: "Research & citation", detail: "Finding, weighing, and synthesizing scholarly sources; mastering MLA (and later Chicago) citation and the ethics of attribution." },
          { name: "Historical & cultural analysis", detail: "Situating a text in its moment — the politics, print culture, and intellectual currents that shaped it." },
          { name: "Rhetoric & persuasion", detail: "Understanding how language moves an audience. Increasingly its own track (rhetoric & composition), which holds the strongest academic job market in the field." },
          { name: "Editing & revision", detail: "Line-editing your own and others' prose — the core competency behind every editorial, publishing, and content career." },
        ],
      },
      {
        title: "Tools & AI",
        mark: "⌨",
        items: [
          { name: "Citation managers & databases", detail: "Zotero, EndNote, JSTOR, the MLA International Bibliography, and EEBO are the day-to-day research infrastructure of the major." },
          { name: "Digital humanities, introduced", detail: "Text-analysis tools (Voyant, Python/NLTK) let you study patterns across thousands of texts at once — a growing niche pairing literary training with data skills." },
          { name: "Generative AI, honestly", detail: "AI can draft and summarize, but departments treat unattributed AI writing as plagiarism. The newly valued skill is editing and fact-checking AI output, not generating from it." },
          { name: "The detection arms race", detail: "AI detectors are unreliable and produce false positives. Expect courses to shift toward in-class writing, oral defense, and process-based grading." },
        ],
      },
      {
        title: "Beyond the Classroom",
        mark: "❡",
        items: [
          { name: "Literary magazines & journals", detail: "Editing the campus lit mag or an undergraduate journal is the single best portfolio-builder for publishing and editorial careers." },
          { name: "Undergraduate research & conferences", detail: "Honors theses and undergraduate literature conferences signal seriousness to PhD admissions committees." },
          { name: "Publishing & editorial internships", detail: "Summer internships at presses, magazines, or literary agencies are how most publishing careers actually begin. The industry hires on experience, not GPA." },
          { name: "Writing center tutoring", detail: "Tutoring builds teaching credentials and pairs naturally with the rhetoric-and-composition track." },
          { name: "Double majors & minors", detail: "English pairs powerfully with a second field — CS, economics, a science — widening options far past the 'English major' stereotype." },
        ],
      },
    ],
  },
  {
    id: "masters",
    label: "Master's",
    years: "Years ~5–7",
    accent: "#8C2F27", // oxblood / editorial red
    intro:
      "There is no single English master's. An MA in literature bridges to the PhD (or credentials teaching and publishing); an MFA is a terminal studio degree for producing a book; and rhetoric/composition and professional-writing MAs feed directly into stable jobs. Funding varies enormously — and paying full price for a standalone literature MA is often a poor bet.",
    sections: [
      {
        title: "Types of Master's",
        mark: "§",
        items: [
          { name: "MA in Literature", detail: "Coursework in literary history and theory plus a thesis. A bridge to the PhD or a credential for community-college and secondary teaching — and usually the stronger choice for eventual doctoral admission." },
          { name: "MFA in Creative Writing", detail: "A terminal studio degree built on workshops and a book-length thesis (a novel, story collection, or poetry manuscript). Qualifies you to teach creative writing; the best programs are fully funded." },
          { name: "MA in Rhetoric & Composition", detail: "Trains you to teach writing and design writing programs. Quietly the most employable English track, with by far the strongest tenure-track placement." },
          { name: "MA in Professional/Technical Writing", detail: "A career-oriented degree in documentation, content, and UX writing — the most direct route from English into a well-paid industry role." },
          { name: "Publishing & Editing MA", detail: "Focused programs (and 4+1 BA/MA options) in the business of books and editorial practice. Valuable, but rarely necessary if you already have internship experience." },
        ],
      },
      {
        title: "Advanced Skills",
        mark: "✎",
        items: [
          { name: "Workshop critique (MFA)", detail: "Giving and receiving rigorous feedback on drafts in a room of peers — the core pedagogy of the MFA, and a skill that transfers to any editorial role." },
          { name: "Archival & scholarly method", detail: "Working with manuscripts, special collections, and scholarly editions to produce publishable literary criticism." },
          { name: "Pedagogy & composition theory", detail: "How writing is learned and taught — the foundation of the rhet/comp track and a genuinely marketable teaching credential." },
          { name: "Specialization", detail: "Committing to a period, genre, or theoretical approach that will anchor a PhD application or a dissertation." },
        ],
      },
      {
        title: "Funding Realities",
        mark: "¤",
        items: [
          { name: "Funded vs. self-funded", detail: "Funded PhD-track MAs and top MFAs pay a stipend for teaching. Many terminal MAs and low-residency MFAs are self-funded and can mean real debt for modest earning gains." },
          { name: "The MFA funding gap", detail: "Fully funded MFAs (Iowa, Michigan, UT-Austin, and the like) are extraordinarily competitive. Unfunded programs cost tens of thousands with no salary attached to the degree." },
          { name: "Terminal MA caution", detail: "A standalone literature MA rarely raises earnings on its own. Pursue it funded, as a PhD bridge, or paired with a concrete career target — not by default." },
          { name: "Assistantships", detail: "Teaching and writing-center assistantships both fund the degree and build the teaching record that later job applications require." },
        ],
      },
      {
        title: "Tools & AI",
        mark: "⌨",
        items: [
          { name: "Scholarly databases & editions", detail: "Deep, fluent use of the MLA Bibliography, ProQuest, EEBO/ECCO, and critical editions is what separates graduate work from undergraduate." },
          { name: "Digital humanities methods", detail: "Text mining, mapping, and computational analysis (Python, R, Voyant) increasingly appear in literature programs and open alt-ac and data-adjacent careers." },
          { name: "AI in the writing classroom", detail: "Comp/rhet programs now study how to teach writing in an AI world — policy design, AI literacy, and process-based assessment are live research areas." },
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Doctoral & Research",
    years: "Years ~8+",
    accent: "#2C5545", // bottle green / library cloth
    intro:
      "An English PhD is five to seven-plus years of coursework, comprehensive exams over a large reading list, and a book-length dissertation of original argument — typically funded by teaching. The intellectual work can be extraordinary. But enter with clear eyes: the tenure-track market is one of the hardest in all of academia.",
    sections: [
      {
        title: "What the PhD Looks Like",
        mark: "§",
        items: [
          { name: "Coursework & fields", detail: "Two to three years of seminars building expertise in a primary period or field plus one or two secondary areas, alongside language exams." },
          { name: "Comprehensive exams", detail: "Written and/or oral exams over a reading list of dozens to hundreds of texts — the gateway to candidacy and the dissertation." },
          { name: "The dissertation", detail: "A book-length work of original scholarship, often the seed of a first academic book, directed by a committee over several years." },
          { name: "Teaching load", detail: "Most funding comes with teaching composition or literature sections — real labor that pays for the degree and builds your CV." },
          { name: "Duration & attrition", detail: "Median time-to-degree runs six to nine years, and attrition is high — often invisible in the placement statistics programs publish." },
        ],
      },
      {
        title: "Research Frontiers",
        mark: "✺",
        items: [
          { name: "Computational literary studies", detail: "Distant reading, large text corpora, and now LLM-based analysis are reshaping method — and fueling fierce debate about what counts as literary knowledge." },
          { name: "Newer critical currents", detail: "Ecocriticism and the environmental humanities, critical race and ethnic studies, disability studies, queer and trans studies, and global Anglophone / postcolonial work." },
          { name: "Book history & media studies", detail: "The history of print, the material text, and comparative media — from manuscript to platform — is a vibrant and relatively employable subfield." },
          { name: "Medical & health humanities", detail: "Literature-and-medicine programs place PhDs in medical schools and hospitals, one of the field's genuine growth areas." },
          { name: "AI and the humanities", detail: "Scholars now study generative AI itself — authorship, creativity, and bias — while debating its use as a research tool." },
        ],
      },
      {
        title: "The Job Market — Honestly",
        mark: "!",
        items: [
          { name: "The core numbers", detail: "In a recent year U.S. departments produced ~1,144 new English PhDs against ~469 advertised assistant-professorships. Over decades, fewer than half of English PhDs have landed a tenure-track job." },
          { name: "Prestige gates the market", detail: "Placement is dominated by top-ranked programs. Graduates of lower-ranked departments face long odds for research-university jobs and often teach undergraduates at teaching-focused schools — if placed at all." },
          { name: "Literature vs. rhet/comp", detail: "The starkest divide in the field: at one large program (2018–22), 77% of rhetoric/composition PhDs landed tenure-track jobs versus 17% of literature PhDs. Subfield choice matters enormously." },
          { name: "The adjunct trap", detail: "Many PhDs end up in contingent roles paid roughly $3,000–$7,000 per course with no benefits. Over 30% of non-tenure-track faculty earn under $25,000 a year." },
          { name: "Plan for alt-ac", detail: "The healthiest programs now train students explicitly for careers beyond the professoriate — in publishing, ed-tech, UX, policy, and industry research." },
        ],
      },
      {
        title: "Tools & AI",
        mark: "⌨",
        items: [
          { name: "Corpus & text-analysis tools", detail: "Python, R, spaCy, and platforms like Voyant support computational work over large literary corpora." },
          { name: "Archival & digital editions", detail: "TEI/XML markup, digital scholarly editions, and archival databases are standard in book-history and DH work." },
          { name: "LLMs as objects and instruments", detail: "The frontier debate: using AI to accelerate research versus studying it as a cultural and authorial phenomenon in its own right." },
        ],
      },
    ],
  },
];

const CAREERS = [
  {
    path: "Academia",
    icon: "🏛",
    color: "#2C5545",
    roles: ["Adjunct / Lecturer", "Visiting Asst. Professor", "Assistant Professor (TT)", "Associate Professor", "Full Professor / Chair"],
    reality:
      "The dream that draws most English PhDs — and the hardest to reach. Tenure-track lines are scarce, prestige-gated, and geographically unpredictable; you go where the one job is. Rhetoric/composition candidates fare dramatically better than literature candidates. For many, expect years of contingent work, and treat a tenure-track offer as a real achievement rather than a default outcome.",
    salary: "$62K–$100K+ TT · median postsecondary teacher ~$84K · adjuncts often $20K–$40K",
  },
  {
    path: "Publishing & Editorial",
    icon: "📚",
    color: "#8C2F27",
    roles: ["Editorial Assistant", "Copyeditor", "Associate Editor", "Senior Editor", "Editorial Director"],
    reality:
      "The classic English-major destination: acquiring, editing, and shepherding books and articles. Entry is competitive and concentrated in a few expensive cities (New York above all), with famously low starting pay that rises slowly. Internships and a demonstrated eye for prose matter far more than grades. Digital and audiobook growth has added roles beyond traditional print.",
    salary: "Editors median ~$75K · assistants ~$40K–$50K to start · senior/director $100K+",
  },
  {
    path: "Content Design & UX Writing",
    icon: "◧",
    color: "#33477A",
    roles: ["Content Designer", "UX Writer", "Content Strategist", "Senior Content Designer", "Content Design Lead"],
    reality:
      "The best-paid mainstream path for a strong writer — shaping the words inside apps and products. Employers value clear thinking about language and structure over pedigree, and English training transfers directly. The catch: it's a tech-cyclical field that saw real layoffs in 2023–24, and a portfolio of product work — not essays — is the price of entry.",
    salary: "~$110K median (2025 survey) · US ~$75K–$150K+ with equity at large tech firms",
  },
  {
    path: "Technical & Professional Writing",
    icon: "⚙",
    color: "#8A5A2B",
    roles: ["Junior Technical Writer", "Technical Writer", "Senior Technical Writer", "Documentation Lead", "Docs / Content Manager"],
    reality:
      "Translating complex products into clear documentation — historically one of the most stable, well-paid homes for English majors. AI has hit this field hard: routine drafting is now automated, entry-level roles are thinning, and survivors work as 'editors-in-chief' of AI output embedded in engineering teams. Deep domain knowledge (APIs, security, compliance) is now the moat.",
    salary: "Median ~$92K · top 10% >$130K · entry roles softening under AI",
  },
  {
    path: "Secondary & K–12 Teaching",
    icon: "✏",
    color: "#6E3B5C",
    roles: ["Student Teacher", "English Teacher (7–12)", "Department Head", "Curriculum Specialist", "Instructional Coach"],
    reality:
      "A stable, meaningful path with real demand — many districts face English-teacher shortages. It requires state licensure, usually a credential program or education coursework beyond the English degree. Pay is modest and varies sharply by region, but the job market is far friendlier than academia's, with genuine security once tenured.",
    salary: "~$50K–$75K by state and district · higher in high-cost regions and with seniority",
  },
  {
    path: "Law & Legal",
    icon: "§",
    color: "#2A3A57",
    roles: ["Paralegal", "Law Student (JD)", "Associate Attorney", "Litigator / Counsel", "Partner / General Counsel"],
    reality:
      "English is one of the strongest pre-law majors: the close reading, argument, and writing it drills are exactly what the LSAT and law school reward — English majors post some of the highest average LSAT scores of any field. It's a three-year JD and significant debt, but the earnings ceiling is among the highest open to a humanities graduate, and writing-heavy work (appellate, contracts) suits English backgrounds especially well.",
    salary: "Lawyers median ~$150K+ · large-firm associates $200K+ · wide spread by market",
  },
  {
    path: "Communications, Marketing & PR",
    icon: "◈",
    color: "#1C7268",
    roles: ["Comms Coordinator", "Copywriter", "PR Specialist", "Content Marketing Manager", "Director of Communications"],
    reality:
      "A broad, reliable landing spot: every organization needs people who write clearly and shape a message. English majors compete well against communications and marketing graduates. Entry is accessible; advancement rewards strategic thinking and measurable results. AI now drafts routine copy, pushing value toward brand strategy, editing, and judgment.",
    salary: "PR specialists median ~$70K · managers/directors $90K–$150K+",
  },
  {
    path: "Writing, Journalism & Media",
    icon: "✒",
    color: "#B24A2E",
    roles: ["Staff Writer", "Reporter / Journalist", "Freelance Writer", "Author / Novelist", "Editor-in-Chief"],
    reality:
      "The path many picture when they imagine 'English major' — and the most precarious. Staff journalism jobs have contracted for two decades; freelancing means juggling clients and, lately, a ~35% drop in basic content gigs to AI. Success tends to come from a distinctive voice, a niche expertise, and entrepreneurial hustle. A few reach real prominence; most piece together income.",
    salary: "Writers/authors median ~$72K · highly bimodal — many earn less, a few far more",
  },
];

export default function EnglishRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [openCareer, setOpenCareer] = useState(null);

  const phase = PHASES.find((p) => p.id === activePhase);
  const accent = showCareers ? "#A6792B" : phase.accent;

  const selectPhase = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };
  const selectSection = (i) => {
    setActiveSection(i);
    setExpandedItem(null);
  };

  return (
    <div style={S.root}>
      <style>{CSS}</style>

      {/* ===================== HEADER / HERO ===================== */}
      <header style={S.header}>
        <div style={S.headerInner}>
          <div style={S.eyebrow}>
            <span style={S.eyebrowRule} />
            A field-of-study career roadmap
          </div>

          <h1 style={S.title}>
            English
            <span style={S.titleGloss}>lit. / rhet. / writing</span>
          </h1>

          <p style={S.tagline}>
            Close reading, at the scale of a career — from your first survey course
            to eight destinations a degree in English can actually reach.
          </p>

          {/* Signature: an annotated line, marked up the way the discipline reads */}
          <div style={S.plate} aria-label="A line of verse marked up with close-reading annotations">
            <div style={S.plateHead}>
              <span style={S.plateNo}>18</span>
              <span style={S.plateSrc}>Shakespeare · Sonnet 18</span>
            </div>
            <div style={S.plateBody}>
              <div style={S.verseRow}>
                <span style={S.lineNo}>1</span>
                <span style={S.verse}>
                  Shall I{" "}
                  <span className="eng-underline" style={S.uline}>compare</span>{" "}
                  thee to a{" "}
                  <span className="eng-underline2" style={S.uline}>summer&rsquo;s day</span>?
                  <span className="eng-caret" style={S.caret}>‸</span>
                </span>
              </div>
              <div style={S.scan}>
                <span style={S.lineNo} />
                <span style={S.scanMarks}>˘ ¯ &nbsp; ˘ ¯ &nbsp; ˘ ¯ &nbsp; ˘ ¯ &nbsp; ˘ ¯</span>
              </div>
            </div>
            <div className="eng-margin" style={S.marginNote}>
              <span style={S.marginArrow}>↳</span> iambic pentameter — five stresses;
              the governing conceit sets beloved against season.
            </div>
          </div>
        </div>
      </header>

      {/* ===================== NAV ===================== */}
      <nav style={S.nav} aria-label="Roadmap phases">
        <div className="eng-scroll" style={S.navScroll}>
          {PHASES.map((p, i) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => selectPhase(p.id)}
                className="eng-tab"
                style={{
                  ...S.tab,
                  ...(on
                    ? { color: C.paper, background: p.accent, borderColor: p.accent }
                    : { color: C.inkSoft }),
                }}
              >
                <span style={{ ...S.tabNo, color: on ? "rgba(255,255,255,.6)" : C.inkFaint }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={S.tabLabel}>{p.label}</span>
                <span style={{ ...S.tabYears, color: on ? "rgba(255,255,255,.75)" : C.inkFaint }}>
                  {p.years}
                </span>
              </button>
            );
          })}

          <span style={S.navDivider} aria-hidden="true" />

          <button
            onClick={() => {
              setShowCareers(true);
              setExpandedItem(null);
            }}
            className="eng-tab"
            style={{
              ...S.tab,
              ...S.tabCareers,
              ...(showCareers
                ? { color: C.paper, background: "#A6792B", borderColor: "#A6792B" }
                : { color: C.inkSoft }),
            }}
          >
            <span style={{ ...S.tabNo, color: showCareers ? "rgba(255,255,255,.6)" : C.inkFaint }}>
              ✦
            </span>
            <span style={S.tabLabel}>Career Paths</span>
            <span style={{ ...S.tabYears, color: showCareers ? "rgba(255,255,255,.75)" : C.inkFaint }}>
              8 destinations
            </span>
          </button>
        </div>
      </nav>

      {/* ===================== BODY ===================== */}
      <main style={S.main}>
        {!showCareers ? (
          <section>
            <div style={{ ...S.introWrap, borderColor: accent }}>
              <span style={{ ...S.introDrop, color: accent }}>{phase.label.charAt(0)}</span>
              <p style={S.introText}>{phase.intro}</p>
            </div>

            {/* sub-section tabs */}
            <div className="eng-scroll" style={S.subScroll}>
              {phase.sections.map((s, i) => {
                const on = activeSection === i;
                return (
                  <button
                    key={s.title}
                    onClick={() => selectSection(i)}
                    className="eng-sub"
                    style={{
                      ...S.sub,
                      color: on ? accent : C.inkFaint,
                      borderColor: on ? accent : "transparent",
                    }}
                  >
                    <span style={S.subMark}>{s.mark}</span>
                    {s.title}
                  </button>
                );
              })}
            </div>

            {/* items */}
            <ol style={S.list}>
              {phase.sections[activeSection].items.map((it, i) => {
                const key = `${activePhase}-${activeSection}-${i}`;
                const open = expandedItem === key;
                return (
                  <li key={key} style={S.itemLi}>
                    <button
                      onClick={() => setExpandedItem(open ? null : key)}
                      className="eng-item"
                      style={{
                        ...S.item,
                        borderColor: open ? accent : C.cardEdge,
                        background: open ? "#F6F1E4" : C.card,
                      }}
                      aria-expanded={open}
                    >
                      <span style={{ ...S.itemNo, color: accent }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={S.itemName}>{it.name}</span>
                      <span
                        style={{
                          ...S.itemToggle,
                          color: accent,
                          transform: open ? "rotate(90deg)" : "none",
                        }}
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    </button>
                    {open && (
                      <div style={{ ...S.itemDetail, borderColor: accent }}>
                        <span style={{ ...S.footMark, color: accent }}>*</span>
                        {it.detail}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ) : (
          <section>
            <div style={{ ...S.introWrap, borderColor: "#A6792B" }}>
              <span style={{ ...S.introDrop, color: "#A6792B" }}>W</span>
              <p style={S.introText}>
                Where an English degree actually leads. Eight distinct destinations, laddered from
                entry to senior, each with an honest read on how accessible it is and what it really
                pays. The through-line: writing and judgment travel further than the &ldquo;what can
                you do with English?&rdquo; clich&eacute; suggests — but almost every path has been
                reshaped by AI.
              </p>
            </div>

            <div style={S.grid}>
              {CAREERS.map((c, i) => {
                const open = openCareer === i;
                return (
                  <article
                    key={c.path}
                    className="eng-card"
                    style={{ ...S.cCard, borderTopColor: c.color, background: open ? "#F6F1E4" : C.card }}
                  >
                    <button
                      onClick={() => setOpenCareer(open ? null : i)}
                      className="eng-cardbtn"
                      style={S.cBtn}
                      aria-expanded={open}
                    >
                      <div style={S.cTop}>
                        <span style={{ ...S.cIcon, color: c.color, borderColor: c.color }}>
                          {c.icon}
                        </span>
                        <h3 style={{ ...S.cTitle, color: c.color }}>{c.path}</h3>
                      </div>
                      <div style={S.chips}>
                        {c.roles.map((r) => (
                          <span key={r} style={{ ...S.chip, borderColor: c.color + "44", color: C.inkSoft }}>
                            {r}
                          </span>
                        ))}
                      </div>
                      <span style={{ ...S.cReveal, color: c.color }}>
                        {open ? "— close" : "＋ the real picture"}
                      </span>
                    </button>

                    {open && (
                      <div style={S.cBody}>
                        <p style={S.cReality}>{c.reality}</p>
                        <div style={{ ...S.cSalary, borderColor: c.color, color: c.color }}>
                          <span style={S.cSalaryLabel}>Pay</span>
                          {c.salary}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer style={S.footer}>
        <span style={S.footRule} />
        <p style={S.footText}>
          <span style={S.footMono}>[ tap any entry to read the gloss ]</span>
          &nbsp;&nbsp;Salary figures: U.S. BLS OEWS (May 2024) plus industry surveys.
          Ranges are national medians — regional and institutional variation is large.
        </p>
      </footer>
    </div>
  );
}

/* ============================================================
   Styles
   ============================================================ */
const serif = "'Spectral', Georgia, 'Times New Roman', serif";
const mono = "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace";

const S = {
  root: {
    background: C.paper,
    color: C.ink,
    fontFamily: serif,
    minHeight: "100vh",
    lineHeight: 1.5,
    WebkitFontSmoothing: "antialiased",
  },

  /* header */
  header: {
    borderBottom: `1px solid ${C.rule}`,
    background: `linear-gradient(180deg, ${C.paper2} 0%, ${C.paper} 100%)`,
  },
  headerInner: { maxWidth: 880, margin: "0 auto", padding: "40px 22px 34px" },
  eyebrow: {
    fontFamily: mono,
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: C.inkFaint,
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  eyebrowRule: { width: 30, height: 1, background: C.inkFaint, display: "inline-block" },
  title: {
    fontFamily: serif,
    fontWeight: 700,
    fontSize: "clamp(52px, 12vw, 92px)",
    lineHeight: 0.94,
    letterSpacing: "-0.02em",
    margin: 0,
    display: "flex",
    alignItems: "baseline",
    flexWrap: "wrap",
    columnGap: 18,
  },
  titleGloss: {
    fontFamily: mono,
    fontSize: "clamp(11px, 2.4vw, 14px)",
    fontWeight: 400,
    letterSpacing: "0.12em",
    color: C.mark,
    textTransform: "lowercase",
  },
  tagline: {
    fontSize: "clamp(16px, 2.4vw, 19px)",
    color: C.inkSoft,
    maxWidth: 560,
    margin: "20px 0 30px",
    fontStyle: "italic",
  },

  /* signature plate */
  plate: {
    position: "relative",
    background: "#F4EFE1",
    border: `1px solid ${C.cardEdge}`,
    borderLeft: `3px solid ${C.mark}`,
    borderRadius: 3,
    padding: "16px 18px 14px",
    maxWidth: 620,
    boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
  },
  plateHead: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    paddingBottom: 9,
    borderBottom: `1px dotted ${C.rule}`,
  },
  plateNo: {
    fontFamily: mono,
    fontSize: 11,
    fontWeight: 600,
    color: C.paper,
    background: C.mark,
    padding: "2px 7px",
    borderRadius: 2,
    letterSpacing: "0.04em",
  },
  plateSrc: {
    fontFamily: mono,
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: C.inkFaint,
  },
  plateBody: { position: "relative" },
  verseRow: { display: "flex", alignItems: "baseline", gap: 14 },
  lineNo: {
    fontFamily: mono,
    fontSize: 11,
    color: C.inkFaint,
    width: 14,
    flexShrink: 0,
    textAlign: "right",
    userSelect: "none",
  },
  verse: {
    fontFamily: serif,
    fontSize: "clamp(19px, 3.6vw, 25px)",
    fontStyle: "italic",
    color: C.ink,
    position: "relative",
  },
  uline: { position: "relative", whiteSpace: "nowrap" },
  caret: { color: C.mark, fontWeight: 700, marginLeft: 2 },
  scan: { display: "flex", gap: 14, marginTop: 4 },
  scanMarks: {
    fontFamily: mono,
    fontSize: 12,
    color: "#9C6A2E",
    letterSpacing: "0.02em",
    opacity: 0.85,
  },
  marginNote: {
    fontFamily: mono,
    fontSize: 11.5,
    lineHeight: 1.5,
    color: C.mark,
    marginTop: 12,
    paddingTop: 10,
    borderTop: `1px dotted ${C.rule}`,
  },
  marginArrow: { fontFamily: serif, fontStyle: "normal", marginRight: 4 },

  /* nav */
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "rgba(234,227,210,0.94)",
    backdropFilter: "blur(6px)",
    borderBottom: `1px solid ${C.rule}`,
  },
  navScroll: {
    maxWidth: 880,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    gap: 8,
    overflowX: "auto",
    alignItems: "stretch",
  },
  tab: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 1,
    padding: "9px 15px",
    border: `1px solid ${C.cardEdge}`,
    borderRadius: 4,
    background: "transparent",
    cursor: "pointer",
    fontFamily: serif,
    transition: "all .18s ease",
    textAlign: "left",
  },
  tabCareers: { borderStyle: "dashed" },
  tabNo: { fontFamily: mono, fontSize: 10, letterSpacing: "0.1em" },
  tabLabel: { fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" },
  tabYears: { fontFamily: mono, fontSize: 10, letterSpacing: "0.04em" },
  navDivider: { width: 1, background: C.rule, margin: "4px 2px", flexShrink: 0 },

  /* main */
  main: { maxWidth: 880, margin: "0 auto", padding: "30px 22px 10px" },

  introWrap: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
    borderLeft: "3px solid",
    paddingLeft: 18,
    marginBottom: 26,
  },
  introDrop: {
    fontFamily: serif,
    fontWeight: 700,
    fontSize: 52,
    lineHeight: 0.8,
    flexShrink: 0,
    marginTop: 2,
  },
  introText: { fontSize: "clamp(15px, 2.2vw, 17px)", color: C.inkSoft, margin: 0, maxWidth: 640 },

  /* sub-tabs */
  subScroll: {
    display: "flex",
    gap: 4,
    overflowX: "auto",
    borderBottom: `1px solid ${C.rule}`,
    marginBottom: 20,
  },
  sub: {
    flexShrink: 0,
    background: "transparent",
    border: "none",
    borderBottom: "2px solid transparent",
    padding: "8px 12px 10px",
    cursor: "pointer",
    fontFamily: serif,
    fontSize: 15,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 7,
    marginBottom: -1,
    transition: "color .15s ease, border-color .15s ease",
    whiteSpace: "nowrap",
  },
  subMark: { fontFamily: mono, fontSize: 13, opacity: 0.85 },

  /* items */
  list: { listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 },
  itemLi: { margin: 0 },
  item: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 16px",
    border: "1px solid",
    borderRadius: 4,
    cursor: "pointer",
    fontFamily: serif,
    textAlign: "left",
    transition: "border-color .15s ease, background .15s ease",
  },
  itemNo: { fontFamily: mono, fontSize: 12, fontWeight: 600, flexShrink: 0, letterSpacing: "0.03em" },
  itemName: { fontSize: "clamp(15px, 2.2vw, 17px)", fontWeight: 600, flex: 1, color: C.ink },
  itemToggle: { fontSize: 22, lineHeight: 1, flexShrink: 0, transition: "transform .18s ease" },
  itemDetail: {
    fontSize: 15,
    color: C.inkSoft,
    margin: "0 2px",
    padding: "13px 16px 15px 18px",
    borderLeft: "2px solid",
    background: "#F1EBDC",
    borderBottomRightRadius: 4,
    lineHeight: 1.55,
  },
  footMark: { fontFamily: mono, fontWeight: 700, marginRight: 8 },

  /* careers grid */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 14,
  },
  cCard: {
    border: `1px solid ${C.cardEdge}`,
    borderTop: "3px solid",
    borderRadius: 5,
    overflow: "hidden",
    transition: "background .15s ease",
  },
  cBtn: {
    width: "100%",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "16px 16px 14px",
    textAlign: "left",
    display: "block",
  },
  cTop: { display: "flex", alignItems: "center", gap: 11, marginBottom: 12 },
  cIcon: {
    width: 34,
    height: 34,
    flexShrink: 0,
    border: "1px solid",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: serif,
  },
  cTitle: { fontSize: 18, fontWeight: 700, margin: 0, letterSpacing: "-0.01em", lineHeight: 1.12 },
  chips: { display: "flex", flexWrap: "wrap", gap: 6 },
  chip: {
    fontFamily: mono,
    fontSize: 10.5,
    letterSpacing: "0.02em",
    border: "1px solid",
    borderRadius: 3,
    padding: "3px 7px",
    whiteSpace: "nowrap",
  },
  cReveal: {
    display: "inline-block",
    marginTop: 13,
    fontFamily: mono,
    fontSize: 11.5,
    letterSpacing: "0.06em",
    textTransform: "lowercase",
  },
  cBody: { padding: "0 16px 17px" },
  cReality: { fontSize: 14.5, color: C.inkSoft, margin: "2px 0 14px", lineHeight: 1.55 },
  cSalary: {
    fontFamily: mono,
    fontSize: 12.5,
    fontWeight: 500,
    borderLeft: "3px solid",
    padding: "9px 12px",
    background: "#F1EBDC",
    borderRadius: "0 4px 4px 0",
    lineHeight: 1.5,
  },
  cSalaryLabel: {
    display: "block",
    fontSize: 9.5,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    opacity: 0.7,
    marginBottom: 3,
  },

  /* footer */
  footer: { maxWidth: 880, margin: "0 auto", padding: "26px 22px 48px" },
  footRule: { display: "block", height: 1, background: C.rule, marginBottom: 16 },
  footText: { fontSize: 13, color: C.inkFaint, margin: 0, fontStyle: "italic", lineHeight: 1.55 },
  footMono: { fontFamily: mono, fontStyle: "normal", color: C.mark, letterSpacing: "0.05em" },
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

* { box-sizing: border-box; }
.eng-scroll::-webkit-scrollbar { height: 6px; }
.eng-scroll::-webkit-scrollbar-thumb { background: ${C.rule}; border-radius: 3px; }
.eng-scroll { scrollbar-width: thin; scrollbar-color: ${C.rule} transparent; }

.eng-tab:hover { border-color: ${C.inkFaint} !important; }
.eng-sub:hover { color: ${C.inkSoft} !important; }
.eng-item:hover { border-color: ${C.inkFaint} !important; }
.eng-card:hover { box-shadow: 0 4px 16px rgba(33,28,21,0.08); }
.eng-cardbtn:focus-visible,
.eng-tab:focus-visible,
.eng-sub:focus-visible,
.eng-item:focus-visible { outline: 2px solid ${C.mark}; outline-offset: 2px; }

/* close-reading underlines drawn in */
.eng-underline::after,
.eng-underline2::after {
  content: "";
  position: absolute;
  left: 0; bottom: -2px;
  height: 2px;
  background: ${C.mark};
  width: 100%;
  transform-origin: left;
  animation: eng-draw 900ms ease forwards;
}
.eng-underline2::after { background: #9C6A2E; animation-delay: 700ms; transform: scaleX(0); }
@keyframes eng-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }

.eng-caret { opacity: 0; animation: eng-fade 500ms ease 1500ms forwards; }
.eng-margin { opacity: 0; transform: translateY(4px); animation: eng-rise 600ms ease 1700ms forwards; }
@keyframes eng-fade { to { opacity: 1; } }
@keyframes eng-rise { to { opacity: 1; transform: translateY(0); } }

@media (max-width: 560px) {
  .eng-margin { animation-delay: 900ms; }
}

@media (prefers-reduced-motion: reduce) {
  .eng-underline::after, .eng-underline2::after { animation: none; transform: scaleX(1); }
  .eng-caret { animation: none; opacity: 1; }
  .eng-margin { animation: none; opacity: 1; transform: none; }
}
`;
