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
      "The English major is built on close reading — the disciplined, attentive interpretation of texts — plus a great deal of writing. Expect team-taught surveys tracing literature from the medieval period to the present, a required methods gateway, distribution across historical periods and genres, and (for the doctoral-bound) a foreign language. Requirements differ by school, but many programs end in a capstone or senior seminar.",
    sections: [
      {
        title: "Core Curriculum",
        mark: "§",
        items: [
          { name: "Methods gateway", detail: "A required entry course ('Approaches to Literary Study' at Columbia, 'Critical Practice' at UW) that drills close reading and the conventions of critical writing. Columbia urges taking it in the first or second year, though it is not a prerequisite for most courses." },
          { name: "Historical survey sequence", detail: "Team-taught surveys mapping British, American, and Anglophone literature from the Middle Ages to the present, giving you the landscape before you specialize." },
          { name: "Period distribution", detail: "Coverage across eras is usually mandatory, but the cutoffs differ. Columbia requires two courses on literature before 1700 (at most one on Shakespeare), NYU asks for pre-1640, 1640 to 1900, and post-1900 courses, and USC splits at 1800." },
          { name: "Critical theory", detail: "Required in some form at NYU (Critical Theory), UW, and USC (lens courses on race, gender, and sexuality, and on genre and media): the interpretive frameworks that define graduate-level study." },
          { name: "Genre courses (poetry, narrative)", detail: "Focused study of how form makes meaning. NYU's literature track requires a Genre course, and Stanford's core covers poetry, narrative, and methodology." },
          { name: "Foreign language requirement", detail: "Cornell's guide says most PhD programs require reading knowledge of at least one foreign language, usually French or German, sometimes two or more, and some require Latin. If a doctorate is possible, consider starting the sequence early." },
          { name: "Senior capstone / thesis", detail: "UW, NYU, and USC end the major with a capstone or senior seminar. Expect a substantial essay: your first sustained scholarship." },
        ],
      },
      {
        title: "Skills You'll Build",
        mark: "✎",
        items: [
          { name: "Close reading", detail: "Extracting argument, tone, and structure from a text word by word. The discipline's signature method. Kentucky alumni quoted by the department say it carried over to the LSAT and to law school." },
          { name: "Argument-driven writing", detail: "Building and defending an interpretive thesis with textual evidence, repeated across dozens of papers until it becomes reflex." },
          { name: "Research & citation", detail: "Finding, weighing, and synthesizing print and digital sources, and crediting them properly (a listed learning outcome at UMD)." },
          { name: "Historical & cultural analysis", detail: "Situating a text in its time and tradition, another listed learning outcome at UMD." },
          { name: "Rhetoric & persuasion", detail: "Understanding how language moves an audience. UMD offers a language, writing, and rhetoric track, and at Ohio State 77% of Writing, Rhetoric, and Literacy PhDs reached tenure-track jobs in 2018-22, against 17% of literature PhDs." },
          { name: "Editing & revision", detail: "Line-editing your own and others' prose — the core competency behind every editorial, publishing, and content career." },
        ],
      },
      {
        title: "Tools & AI",
        mark: "⌨",
        items: [
          { name: "Scholarly databases", detail: "JSTOR, Project MUSE, the MLA International Bibliography, and ABELL are the core databases named in a major university library's English research guide." },
          { name: "Digital humanities, introduced", detail: "Library guides list digital humanities journals (DHQ, Journal of Digital Humanities, Digital Studies), and Stanford offers a data-science track within the English major." },
          { name: "Generative AI, honestly", detail: "Policies vary by course and instructor. The University of Minnesota's teaching guidance recommends syllabus statements on ethical AI use and grading that rewards originality and analysis. Practitioners in technical writing report that reviewing and correcting AI drafts is becoming the core task." },
          { name: "The detection arms race", detail: "The University of Minnesota says detector scores are far from conclusive, can wrongly accuse students, and are not recommended. It suggests drafts, outlines, and in-class writing submitted with final work, and a conversation with the student." },
        ],
      },
      {
        title: "Beyond the Classroom",
        mark: "❡",
        items: [
          { name: "Literary magazines & journals", detail: "Cornell notes that many majors write for campus literary magazines. It is a natural way to build editing experience and writing samples for publishing and editorial careers." },
          { name: "Undergraduate research & conferences", detail: "UMD's honors program is built around a sustained research or creative project." },
          { name: "Publishing & editorial internships", detail: "UMD allows up to six credits of internship (ENGL 388) toward the major, and BLS says experience from internships and school newspapers helps writers and authors. Summer internships at presses and magazines are worth seeking." },
          { name: "Study abroad", detail: "USC majors can study Anglophone literature abroad, for example at Queen Mary University of London." },
          { name: "Double majors & minors", detail: "USC notes that many English majors double major, Stanford offers a data-science track, and UMD offers an English and Secondary Education double major (125 credits) that leads to a grades 7 to 12 teaching certificate." },
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
      "There is no single English master's. An MA in literature is often a bridge to the PhD; an MFA is a terminal, craft-focused degree built on workshops and a creative thesis; and master's programs in writing add editing, publishing, and pedagogy. No outcome or earnings data was found for standalone master's degrees, so weigh the cost carefully. Funding varies enormously.",
    sections: [
      {
        title: "Types of Master's",
        mark: "§",
        items: [
          { name: "MA in Literature", detail: "Coursework in literary analysis, theory, and linguistics. Often used as a bridge to the PhD, and BLS says a master's can be enough for some community-college teaching jobs. Secondary teaching needs a bachelor's plus a state license, not a master's." },
          { name: "MFA in Creative Writing", detail: "A terminal, craft-focused degree built on workshops and a creative thesis. Funded examples: Michigan (full tuition waiver, $23,000 stipend), UT Austin's Michener Center ($29,500 fellowship plus tuition), and Arizona (three years of funding through a teaching assistantship, about $22,500 in 2025-26)." },
          { name: "MA in Rhetoric & Composition", detail: "Trains you to teach writing. The strong placement figures found belong to the PhD track at one program (Ohio State: 77% of Writing, Rhetoric, and Literacy PhDs reached tenure-track jobs in 2018-22). No master's-level outcome data was found." },
          { name: "MA in Writing & Editing", detail: "Master's programs in writing often add editing, publishing, and pedagogy electives. BLS says technical writers may benefit from a background in engineering or science. No outcome data for these degrees was found." },
          { name: "Publishing & Editing MA", detail: "USC offers a progressive degree in Literary Editing and Publishing that earns a BA and MA in five years. No evidence was found on how much the degree adds beyond internship experience." },
        ],
      },
      {
        title: "Advanced Skills",
        mark: "✎",
        items: [
          { name: "Workshop critique (MFA)", detail: "Giving and receiving feedback on drafts in a room of peers: the workshop is the core of the MFA." },
          { name: "Literary analysis & theory", detail: "Coursework in literary analysis and theory is the core of the literature MA." },
          { name: "Pedagogy & composition theory", detail: "How writing is learned and taught: pedagogy electives appear in master's programs in writing." },
          { name: "Specialization", detail: "Committing to a period, genre, or theoretical approach that will anchor a PhD application or a dissertation." },
        ],
      },
      {
        title: "Funding Realities",
        mark: "¤",
        items: [
          { name: "Funded vs. self-funded", detail: "Some MFAs pay a stipend for teaching (Michigan, Michener, Arizona). No data was found on how many master's programs are funded, or on tuition at unfunded ones, so check each program's funding page before applying." },
          { name: "MFA funding examples", detail: "Michigan lists a full tuition waiver, a $23,000 stipend, $5,000 of summer funding, and health care. Michener lists a $29,500 fellowship plus tuition. Iowa lists financial assistance for all students without a figure. No acceptance rates were found." },
          { name: "Terminal MA caution", detail: "No earnings or placement data for standalone literature MAs was found. Pursue one funded, as a PhD bridge, or with a concrete career target rather than by default." },
          { name: "Assistantships", detail: "At Arizona, funded MFA students teach three courses a year and complete a ten-day training and a first-semester preceptorship before teaching." },
        ],
      },
      {
        title: "Tools & AI",
        mark: "⌨",
        items: [
          { name: "Scholarly databases & editions", detail: "The MLA International Bibliography, JSTOR, Project MUSE, and ABELL remain the core databases. No source described master's-specific tools." },
          { name: "Digital humanities methods", detail: "Library guides list digital humanities journals (DHQ, Journal of Digital Humanities, Digital Studies). No source named specific software or methods taught at the master's level." },
          { name: "AI in the writing classroom", detail: "University teaching guidance (Minnesota) says AI detectors are unreliable and recommends syllabus statements, drafts and in-class writing, and grading that rewards originality and analysis." },
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
      "An English PhD combines coursework, a language requirement, qualifying exams, and a dissertation, typically supported by teaching-funded packages. Median time to degree for humanities and arts PhDs is about 6.8 years. The intellectual work can be extraordinary, but the tenure-track market is small and uneven by subfield.",
    sections: [
      {
        title: "What the PhD Looks Like",
        mark: "§",
        items: [
          { name: "Coursework & fields", detail: "Brown requires 13 courses over three years and a language requirement. Notre Dame requires 14 courses within a roughly five-year plan and proficiency in two languages other than English (or fluency in one)." },
          { name: "Qualifying exams", detail: "At Brown, a qualifying exam by April 15 of year three combines a field essay of up to 2,500 words with a two-hour oral exam before three faculty. Notre Dame schedules exams before Thanksgiving of year three, then a prospectus defense in spring." },
          { name: "The dissertation", detail: "At Brown, the dissertation begins after a proposal and first chapter are approved and ends with a defense before three faculty." },
          { name: "Funding & teaching", detail: "Brown guarantees six years: a fellowship in year one, teaching in years two, three, five, and six, and a dissertation fellowship in year four. Notre Dame assigns service in years two to four and none in year five." },
          { name: "Duration & attrition", detail: "Median time to degree for humanities and arts PhDs was 6.8 years in 2020 and has been 6.8 years or longer every year from 2003 to 2020. A 2015 study noted that published placement data do not capture attrition." },
        ],
      },
      {
        title: "Research Frontiers",
        mark: "✺",
        items: [
          { name: "Digital humanities", detail: "Library guides list digital humanities journals (DHQ, Journal of Digital Humanities, Digital Studies), and Stanford offers a data-science track within the English major." },
          { name: "Current research areas", detail: "Bristol's English department lists Race and Ethnicity, Gender and Sexuality, Literatures of the Global South, Literature and the Environment, and Poetry and Poetics among its research areas (a UK department, one sample)." },
          { name: "Material texts & spatial humanities", detail: "Material and Digital Texts and Spatial Humanities appear among Bristol's research areas. No source ranked subfields by employability." },
          { name: "Medical & health humanities", detail: "Bristol lists Literature, Science and Medical Humanities as a research area, and NYU's placement list includes a medical-humanities postdoc. No source measured growth." },
          { name: "A caveat on this list", detail: "These frontiers rest on one UK department's page, one US library guide, one Stanford track, and a few placement lists. They are a sample, not a ranked map of the field." },
        ],
      },
      {
        title: "The Job Market — Honestly",
        mark: "!",
        items: [
          { name: "The core numbers", detail: "In 2022 there were about 1,144 new English PhDs and 469 advertised assistant-professorships, and the MLA counted 911 English ads in 2022-23, 61.8% of them tenure-track. A 2015 study found that over the prior 35 years fewer than half of English PhDs landed tenure-track jobs on graduation." },
          { name: "Prestige gates the market", detail: "A 2015 study found top-10 programs gave students a reasonable chance at tenure-track jobs at research universities and top liberal-arts colleges, while chances from lower-ranked programs were close to nil." },
          { name: "Literature vs. rhet/comp", detail: "At Ohio State (2018-22), 77% of Writing, Rhetoric, and Literacy PhDs (17 of 22) reached tenure-track jobs, versus 17% of literature PhDs (10 of 58). One program and small samples, but the gap is large. Overall tenure-track rates were similar at Ohio State (31%), UT Austin (30%), Michigan (28%), and Maryland (32%)." },
          { name: "The adjunct trap", detail: "Adjuncts are generally paid $3,000 to $7,000 per class and rarely get health care. A 2019 AFT survey found over 30% of non-tenure-track educators in higher education earned under $25,000 a year." },
          { name: "Plan for alt-ac", detail: "Duke runs an annual 'Translating the PhD' colloquium, and its recent graduates include secondary teachers, university staff, and nonprofit and private-industry workers. NYU's placements include a think-tank policy analyst." },
        ],
      },
      {
        title: "Tools & AI",
        mark: "⌨",
        items: [
          { name: "Databases", detail: "No source named a standard software stack for doctoral work. Library guides point to JSTOR, Project MUSE, the MLA International Bibliography, and ABELL." },
          { name: "Digital humanities journals", detail: "A university library guide lists DHQ, the Journal of Digital Humanities, and Digital Studies as places digital humanities work appears." },
          { name: "What is not known", detail: "No source found described how AI is reshaping doctoral research in English, so none is claimed here. Minnesota's teaching guidance (detectors unreliable, syllabus statements, drafts) is the best-sourced reference for the classroom." },
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
      "The dream that draws most English PhDs, and the hardest to reach: about 1,144 new PhDs against 469 advertised assistant-professorships in 2022. Placement splits sharply by subfield (at Ohio State, 77% of rhetoric PhDs versus 17% of literature PhDs reached tenure-track jobs in 2018-22), and many PhDs spend years in contingent roles. BLS projects no growth in English postsecondary teaching jobs through 2035.",
    salary: "English postsecondary teachers median $78,760 (BLS, May 2025) · adjuncts often $3,000–$7,000 per course · no tenure-track range found",
  },
  {
    path: "Publishing & Editorial",
    icon: "📚",
    color: "#8C2F27",
    roles: ["Editorial Assistant", "Copyeditor", "Associate Editor", "Senior Editor", "Editorial Director"],
    reality:
      "The classic English-major destination: planning, reviewing, and revising content for publication. BLS projects a 1% decline in editor employment from 2025 to 2035 (about 105,000 jobs). Campus literary magazines and credit-bearing internships are available on-ramps. Starting pay and the geography of publishing jobs were not found in the research.",
    salary: "Editors median $77,920 (BLS, May 2025) · bottom 10% under $41,250 · top 10% over $153,700",
  },
  {
    path: "Content Design & UX Writing",
    icon: "◧",
    color: "#33477A",
    roles: ["Content Designer", "UX Writer", "Content Strategist", "Senior Content Designer", "Content Design Lead"],
    reality:
      "Shaping the words inside apps and products. A 2025 survey reported a global median near $110,000, and 58% of respondents said AI had improved their work; it also found layoffs in the prior 24 months, mostly in the US. A hiring site expects a strong portfolio of clear, effective UX writing and lists English among useful degrees.",
    salary: "~$110K global median (2025 survey) · US UX content strategists: middle half $72K–$110K, top 10% ~$136K (ZipRecruiter, Nov 2025)",
  },
  {
    path: "Technical & Professional Writing",
    icon: "⚙",
    color: "#8A5A2B",
    roles: ["Junior Technical Writer", "Technical Writer", "Senior Technical Writer", "Documentation Lead", "Docs / Content Manager"],
    reality:
      "Translating complex products into clear documentation. BLS projects 1% growth from 2025 to 2035 on 46,400 jobs. Practitioners report that AI now produces first drafts by default and writers spend more time reviewing and correcting, with junior roles under the most pressure and developer and compliance documentation seen as safer niches. The strongest displacement claims are forecasts, not measurements.",
    salary: "Median $90,390 (BLS, May 2025) · bottom 10% under $57,440 · top 10% over $145,270",
  },
  {
    path: "Secondary & K–12 Teaching",
    icon: "✏",
    color: "#6E3B5C",
    roles: ["Student Teacher", "English Teacher (7–12)", "Department Head", "Curriculum Specialist", "Instructional Coach"],
    reality:
      "Public school teachers need a state-issued license or certification, and a bachelor's is the typical entry degree. BLS projects flat employment from 2025 to 2035 with about 63,500 openings a year, mostly replacements, and says falling school-age enrollment constrains demand. UMD's English and Secondary Education double major builds certification into the degree.",
    salary: "High school teachers (all subjects) median $72,040 (BLS, May 2025) · bottom 10% under $48,780 · top 10% over $107,600",
  },
  {
    path: "Law & Legal",
    icon: "§",
    color: "#2A3A57",
    roles: ["Paralegal", "Law Student (JD)", "Associate Attorney", "Litigator / Counsel", "Partner / General Counsel"],
    reality:
      "A bachelor's in any major, then a three-year JD and a bar exam; BLS says the path usually takes seven years after high school. English is a strong feeder at one documented school (Kentucky, fall 2014 class: English majors averaged 162 on the LSAT, highest among arts and sciences majors), but LSAC cautions against reading major averages as proof that a major prepares students better. Pay is high and widely spread.",
    salary: "Lawyers median $159,670 (BLS, May 2025) · bottom 10% under $78,360 · top 10% over $351,600 · new-graduate median $100,000 (NALP, Class of 2025)",
  },
  {
    path: "Communications, Marketing & PR",
    icon: "◈",
    color: "#1C7268",
    roles: ["Comms Coordinator", "Copywriter", "PR Specialist", "Content Marketing Manager", "Director of Communications"],
    reality:
      "A broad landing spot: BLS counts about 314,500 public relations specialists and projects 2% growth from 2025 to 2035. Industry write-ups say AI now drafts routine copy, pushing value toward editing and strategy. No source compared English graduates with communications graduates.",
    salary: "PR specialists median $74,750 (BLS, May 2025) · bottom 10% under $44,110 · top 10% over $135,150",
  },
  {
    path: "Writing, Journalism & Media",
    icon: "✒",
    color: "#B24A2E",
    roles: ["Staff Writer", "Reporter / Journalist", "Freelance Writer", "Author / Novelist", "Editor-in-Chief"],
    reality:
      "The path many picture when they imagine 'English major.' Salaried writing jobs generally ask for a bachelor's in English, communications, or journalism, and experience from school papers, internships, or blogging helps. BLS projects no growth for writers and authors from 2025 to 2035, and freelancers juggle several projects while continually looking for work. Reporters and journalists are a separate BLS occupation and are not priced here.",
    salary: "Writers and authors median $76,910 (BLS, May 2025) · bottom 10% under $44,310 · top 10% over $139,870",
  },
];

export default function EnglishRoadmap({ summary } = {}) {
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

      {summary}

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
                you do with English?&rdquo; clich&eacute; suggests, though the research found AI changing the work
                in several of these paths.
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
          &nbsp;&nbsp;Salary figures: U.S. BLS OEWS (May 2025) plus industry surveys.
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
