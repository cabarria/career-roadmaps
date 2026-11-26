import { useState } from "react";

/* ------------------------------------------------------------------ *
 *  MUSIC: Field Roadmap
 *  Aesthetic: "House Lights Down": a darkened concert hall. Warm
 *  near-black walls, brass and rosin-red stage light, and a five-line
 *  staff running behind the header with one note per stage of the path.
 *  The structural motif is the field's own notation: each stage is a
 *  movement, each expandable item a note that opens to its detail.
 *  Content comes from research/music-research.md.
 * ------------------------------------------------------------------ */

const C = {
  hall: "#14100E",
  panel: "#1E1814",
  panelUp: "#282019",
  ink: "#F1E7D6",
  dim: "#BFAF97",
  faint: "#8B7C65",
  line: "#3B2F26",
  lineSoft: "#2E251E",
};

const font = {
  display: "'Bodoni Moda', 'Didot', Georgia, serif",
  body: "'Newsreader', Georgia, serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      mark: "I",
      color: "#E0A94A",
      intro:
        "A music major is part practice room and part theory classroom. A Bachelor of Music (BM) is a professional degree with at least 65% of credits in music, while a liberal arts BA in music is closer to 45% (one university's description; schools vary). The work is daily and cumulative, and progress is checked in public through juries and hearings.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "♪",
          items: [
            {
              name: "Music theory and aural skills sequence",
              detail:
                "Expect four to six terms. Colorado pairs theory with aural-skills labs across two years, and Boston University runs a six-term theory sequence beside a four-term aural-skills sequence. Placement exams can exempt you from some courses, but not all.",
            },
            {
              name: "Applied lessons on your instrument or voice",
              detail:
                "Private study is the center of a BM. Many BA programs make lessons optional, so check this before you choose a degree type.",
            },
            {
              name: "Large ensembles every semester",
              detail:
                "Orchestra, band, choir, jazz or opera ensembles run alongside lessons. Duquesne's BA sample plan schedules a large ensemble and applied lessons in each semester of the first year, while Colorado caps BA ensemble credit at 4 hours.",
            },
            {
              name: "Music history and literature",
              detail:
                "Standard in BM programs. It supplies the repertoire knowledge that performers, teachers and scholars all draw on.",
            },
            {
              name: "Choosing the degree type",
              detail:
                "BM for performance or composition, a music-education degree for school licensure, an approved music-therapy degree for board certification, and a BA when you want a more flexible program. The older NASM baseline is 120 semester hours over four years.",
            },
          ],
        },
        {
          title: "Gates and Weeders",
          icon: "♯",
          items: [
            {
              name: "Grade floors in theory and aural skills",
              detail:
                "UTEP requires a C or better in the fourth theory and aural-skills course plus a Theory Advancement Test before upper-level theory. Stetson requires a C- or better in every aural-training course to reach the junior level.",
            },
            {
              name: "Juries and recital hearings",
              detail:
                "At Boston University, prescribed levels of proficiency are judged through juries and recital permission hearings. UTEP requires a pre-recital hearing before you can give a recital.",
            },
            {
              name: "Sophomore proficiency checkpoint",
              detail:
                "Colorado lists a zero-credit sophomore proficiency that students must clear. The credit load is nothing, but progress to the upper division depends on it.",
            },
            {
              name: "Audition-based admission",
              detail:
                "Conservatory-style programs admit by audition. Curtis, for example, asks for a prescreening video and then a live audition. Published acceptance rates for elite programs conflict, so none are used here.",
            },
            {
              name: "Teacher licensure tests",
              detail:
                "Music education majors face state exams. Alabama requires a minimum of 161 on the Praxis Music: Content Knowledge test, and Maryland requires the PPAT or edTPA from July 1, 2025. Check your own state.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "♭",
          items: [
            {
              name: "Digital audio workstations",
              detail:
                "Berklee names Pro Tools as the most widely used DAW platform, requires Logic Pro for its on-campus Contemporary Writing and Production major, and treats Ableton Live as common in electronic and live-performance work.",
            },
            {
              name: "Stem separation is the common AI entry point",
              detail:
                "In Tracklib's 2024 producer survey, 25% used AI in making music and 73.9% of those used it mainly for stem separation. Only 3% used it to create entire songs.",
            },
            {
              name: "Generative music platforms",
              detail:
                "Suno and Udio settled with major labels in late 2025 and moved toward licensed models, while Eleven Music launched with licensing deals in place. Learn what they do well, and what they cannot do for a live ensemble.",
            },
            {
              name: "Know the rights landscape",
              detail:
                "The US Copyright Office says copyright needs sufficient human creative input. Prompting alone, or choosing among outputs, is not enough, but using AI as an assistant does not bar protection.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "♫",
          items: [
            {
              name: "Church and community ensemble work",
              detail:
                "35% of musician jobs and 58% of music director and composer jobs are in religious and similar organizations (BLS). Early paid gigs often start here.",
            },
            {
              name: "Camps, festivals and fellowships",
              detail:
                "BLS says musicians usually begin with private lessons and school classes, then move on to music camps, festivals or fellowships.",
            },
            {
              name: "Student teaching and field hours",
              detail:
                "Music education and music therapy tracks add supervised practice. Music therapy leads to board certification (MT-BC); guides cite 1,200 clinical hours, which should be checked against the current CBMT handbook.",
            },
            {
              name: "Recordings, scores and a performance portfolio",
              detail:
                "Because most musicians work for themselves, build recordings, scores, a repertoire list and a teaching or arranging sample before you graduate.",
            },
            {
              name: "Internships in the business",
              detail:
                "Music business programs list labels, publishers, promoters, management firms and music supervision as destinations. Placement data are not published, so ask programs where graduates actually land.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years 5–6",
      mark: "II",
      color: "#E06F57",
      intro:
        "A master's in music is optional for many paths. It is the typical credential for college teaching and a common step for advanced school-music roles, and it is rarely required to win an orchestral audition, work in a studio, compose for media or enter the industry. The first decision is performance-and-craft versus research.",
      sections: [
        {
          title: "Degree Types",
          icon: "♪",
          items: [
            {
              name: "MM in performance or composition",
              detail:
                "Applied and audition-based, usually at least 30 credits beyond the bachelor's. One program splits it into 16 credits of applied study, 2 to 10 emphasis credits, 9 credits of theory and musicology, and 1 to 2 ensemble credits. Performance candidates typically finish with a recital.",
            },
            {
              name: "Music education: MM, MME or MA",
              detail:
                "The MM option keeps performance as a strong secondary focus and requires an audition. The MA leans toward research methods, measurement, curriculum, and the history and philosophy of music education.",
            },
            {
              name: "MA in theory, musicology or ethnomusicology",
              detail:
                "Research- and thesis-heavy, with original research instead of a recital. One musicology MA requires 45 credits, and an audition is normally not required.",
            },
          ],
        },
        {
          title: "Who Needs It",
          icon: "♯",
          items: [
            {
              name: "College teaching",
              detail:
                "BLS lists a master's as the typical entry credential for postsecondary art, drama and music teachers. Many full-time posts increasingly ask for a doctorate.",
            },
            {
              name: "Orchestral and studio work",
              detail:
                "Auditions and studio hiring judge playing and track record, and BLS lists no formal credential for musicians and singers. A master's helps through teachers, networks and time to practice, not as a requirement (our inference; no placement data found).",
            },
            {
              name: "School music careers",
              detail:
                "Whether a graduate degree counts toward advanced licensure or a pay step differs by state and district, and the research did not find a national summary. Check yours.",
            },
          ],
        },
        {
          title: "Skills & Tools",
          icon: "♭",
          items: [
            {
              name: "Recital and repertoire depth",
              detail:
                "Performance master's programs typically end in a recital, and applied study is the largest block of credits in the example program above.",
            },
            {
              name: "Research methods and writing",
              detail:
                "MA programs add research methods, a thesis or similar research document and, in education, measurement and evaluation.",
            },
            {
              name: "Music technology and production tools",
              detail:
                "Graduate programs vary in technology content, and the research did not verify specific technology tracks. Ask about studio access and software.",
            },
          ],
        },
        {
          title: "Funding & Costs",
          icon: "♫",
          items: [
            {
              name: "Master's funding was not verified",
              detail:
                "The research found assistantship terms only for doctoral programs. Ask each program about assistantships, fellowships and teaching positions before you commit.",
            },
            {
              name: "Federal loan earnings test",
              detail:
                "A federal earnings test for graduate programs starts affecting loan eligibility from the 2028-29 award year. No music-specific effect was found, but compare program prices with likely earnings.",
            },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "Doctoral & Research",
      years: "Years 7+",
      mark: "III",
      color: "#5DB9A0",
      intro:
        "Doctoral study in music splits into the performing doctorate (DMA) and the research doctorate (PhD). Funding is often available, but the academic market is competitive, and no current national placement rate was found. Treat a doctorate as preparation for teaching and scholarship, not as a guarantee of a faculty post.",
      sections: [
        {
          title: "Doctoral Tracks",
          icon: "♪",
          items: [
            {
              name: "DMA: performance, composition, conducting",
              detail:
                "Combines advanced performance or composition with research, and is the usual credential for conservatory and university applied faculty.",
            },
            {
              name: "PhD: musicology, theory, ethnomusicology",
              detail:
                "Students aiming at scholarship typically enter PhD programs rather than the DMA. The Humanities Indicators counted 65 US musicology departments in 2024, 33 of them awarding PhDs, and roughly 830 graduate students in fall 2023.",
            },
            {
              name: "Music education doctorates",
              detail:
                "Music education has its own doctoral options (PhD, EdD or DME) that lead to research and teacher education posts.",
            },
          ],
        },
        {
          title: "Training & Funding",
          icon: "♯",
          items: [
            {
              name: "Length of study",
              detail:
                "Michigan's DMA is three years of full-time study, six terms beyond the master's. Other programs run longer, and the research did not find a national average.",
            },
            {
              name: "Funding models",
              detail:
                "Nearly all Michigan DMA students receive full-tuition fellowships. Other programs give tuition remission and a living stipend for teaching assistantships. Bowling Green funds graduate students for a maximum of four years.",
            },
            {
              name: "Performance, recitals and a document",
              detail:
                "Exam structures vary by school, and the research did not find a common standard. Ask programs about recitals, written work and comprehensive exams.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "♭",
          items: [
            {
              name: "Music information retrieval and computational musicology",
              detail:
                "ISMIR 2025 topics included cognitive MIR, computational musicology, digital and systematic musicology, and music heritage. MIR sits between audio signal processing, machine learning and music scholarship.",
            },
            {
              name: "Audio and symbolic music generation",
              detail:
                "A 2025 retrospective notes new categories in the field for music analysis, signal processing, production and separation, and audio and symbolic music generation.",
            },
            {
              name: "Representation and cultural coverage",
              detail:
                "A 2025 study of 2,458 ISMIR papers from 2000 to 2024 found the conference remains Western-centric, and researchers now debate evaluation practices and dataset bias.",
            },
          ],
        },
        {
          title: "The Academic Market",
          icon: "♫",
          items: [
            {
              name: "Credentials now expected",
              detail:
                "One article says most postsecondary music jobs now require a DMA or ABD status, though some accept a master's. A 2021 analysis of 25 US assistant-professor postings found employers want qualifications beyond the doctorate itself.",
            },
            {
              name: "No national placement figure found",
              detail:
                "The sources found give postings and department counts, not placement rates for music doctorates. Ask programs for recent graduates' outcomes.",
            },
            {
              name: "Scholarly work and AI",
              detail:
                "MIR and computational musicology are where computing is most visible in the sources found. The research did not find evidence on how AI affects archival or fieldwork-based scholarship.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Orchestral & Classical Performance",
      icon: "🎻",
      color: "#E0A94A",
      roles: ["Freelance / Sub", "Section Member", "Assistant Principal", "Principal"],
      reality:
        "Full-time orchestral jobs are filled by audition, and the research found no count of full-time seats. Orchestras range from large professional ensembles to community groups, and pay models run from 52-week salaried to per-service to volunteer. Most classical musicians combine orchestra services, teaching, chamber work and church jobs. BLS expects declining classical attendance to slow growth.",
      salary:
        "Top-tier contracts: Philadelphia base $176,280 (tentative deal to $200,008), Baltimore Symphony minimum $101,350 by 2027-28. All musicians and singers: $47.80 per hour median (BLS May 2025).",
    },
    {
      path: "Popular, Jazz & Artist Careers",
      icon: "🎸",
      color: "#E06F57",
      roles: ["Gigging Artist", "Session / Touring Musician", "Songwriter", "Artist-Producer"],
      reality:
        "No credential gate, and income is concentrated. Xposure found 13.3% of independent artists live only from music, and 77.8% earned under $15,000 from it. MIDiA puts the median independent-artist income near $10,180. Spotify says more than 13,800 artists earned $100,000 or more on its platform in 2025 but gives no total artist count. Deezer reports AI-generated tracks rising to a large share of its new uploads.",
      salary:
        "Musicians and singers: $47.80 per hour median, under $20.35 for the bottom 10%, over $132.56 for the top 10% (hourly, no annual BLS figure).",
    },
    {
      path: "Composing for Media, Concert & Games",
      icon: "🎼",
      color: "#5DB9A0",
      roles: ["Orchestrator", "Composer", "Music Director", "Music Supervisor", "Game Audio"],
      reality:
        "Slow growth (1%) with about 4,200 openings a year, and 25% of directors and composers are self-employed. A CISAC scenario puts generative AI at about 60% of library-music revenue by 2028 (a study commissioned by creator societies, not an outcome). Game audio is a second market: GameSoundCon 2025 found layoffs affecting 16% of salaried workers and outsourcing up to 14.7% of the field.",
      salary:
        "$73,710 median for music directors and composers, bottom 10% under $39,880, top 10% over $165,760 (BLS May 2025).",
    },
    {
      path: "K-12 Music Education",
      icon: "🎺",
      color: "#C79BE0",
      roles: ["General Music", "Band / Orchestra", "Choral Director", "Fine-Arts Coordinator"],
      reality:
        "The most common salaried destination. It needs state licensure: state exams such as Praxis and, in some states, a teaching-performance assessment. BLS does not break out music teachers, and school arts cuts are named as a factor lowering music-director demand in schools. UNC Chapel Hill paused its K-12 music education track.",
      salary:
        "BLS medians by school level: $63,970 elementary, $64,370 middle, $72,040 secondary; projected change about -0.2% to -0.4% to 2035.",
    },
    {
      path: "College & Conservatory Teaching",
      icon: "🎓",
      color: "#7FB2E5",
      roles: ["Adjunct", "Assistant Professor", "Associate / Full Professor", "Chair / Dean"],
      reality:
        "A doctorate (DMA or PhD) or ABD is increasingly expected, and the market is competitive. No current national placement rate was found. BLS lists a master's as the typical entry credential for the broader group of art, drama and music teachers, which is projected to grow 2.2% with about 8,000 openings a year.",
      salary:
        "$78,620 median for postsecondary art, drama and music teachers (BLS May 2025; includes art and drama).",
    },
    {
      path: "Recording, Production & Audio Tech",
      icon: "🎚️",
      color: "#F08A6B",
      roles: ["Studio Assistant", "Recording / Mixing Engineer", "Producer", "Live Sound"],
      reality:
        "Digital audio workstations let more artists produce their own recordings, which BLS lists as lowering demand in sound recording, and BLS cites AI systems as a productivity driver for sound engineering technicians. Producers report corrective EQ and dynamics steps moving to AI tools. BLS lists a postsecondary nondegree award as the typical entry credential.",
      salary:
        "Sound engineering technicians $73,130 (about 15,000 jobs, -3.1%); audio and video technicians $58,100 (87,600 jobs, +3.9%) (BLS May 2025).",
    },
    {
      path: "Music Business & Industry",
      icon: "💼",
      color: "#A8C46A",
      roles: ["Label / Publishing Assistant", "A&R", "Licensing & Sync", "Artist Manager", "Music Supervisor"],
      reality:
        "Employers include labels, publishers, promoters and management firms. Entertainment law requires a law degree. BLS data cover only a narrow slice: agents and business managers of artists, performers and athletes, 26,900 jobs projected to grow 9.7%. Program placement data are not published.",
      salary:
        "$82,890 median for agents and business managers of artists, performers and athletes (BLS). Aggregator medians for A&R ($43,000) and tour managers ($49,678) are not entry-level specific.",
    },
    {
      path: "Music Therapy & Community Music",
      icon: "🤝",
      color: "#E58FA8",
      roles: ["Music Therapist (MT-BC)", "Clinical Supervisor", "Program Director", "Community Music Lead"],
      reality:
        "Requires an approved degree, supervised clinical hours and the CBMT board exam. BLS has no music therapist line; they are counted within therapists, all other, which also includes art therapists. Board certification is voluntary, but some states require it for licensure or registries.",
      salary:
        "BLS proxies: therapists, all other $77,930 (+12.6%); recreational therapists $61,960 (+4.8%).",
    },
  ],
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500;6..96,600;6..96,700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
`;

const globalCSS = `
* { box-sizing: border-box; }
.hscroll {
  display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;
  scrollbar-width: none; -webkit-overflow-scrolling: touch;
}
.hscroll::-webkit-scrollbar { display: none; }
.mus-btn:focus-visible, .mus-item:focus-visible { outline: 2px solid #F1E7D6; outline-offset: 2px; }
.mus-item { transition: border-color .18s ease, background .18s ease; }
.mus-card { transition: transform .18s ease, border-color .18s ease; }
@media (hover: hover) {
  .mus-card:hover { transform: translateY(-2px); }
}
@media (prefers-reduced-motion: reduce) {
  .mus-item, .mus-card { transition: none !important; }
}
`;

function Staff({ phases }) {
  // Five staff lines with one note head per stage rising left to right.
  const width = 1000;
  const height = 70;
  const lines = [14, 26, 38, 50, 62];
  const notes = [
    { x: 150, y: 62 },
    { x: 330, y: 50 },
    { x: 510, y: 38 },
    { x: 690, y: 26 },
    { x: 870, y: 14 },
  ];
  const colors = [...phases.map((p) => p.color), "#F1E7D6"];
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      width="100%"
      height="56"
      aria-hidden="true"
      style={{ display: "block", marginTop: 20 }}
    >
      {lines.map((y) => (
        <line key={y} x1="0" x2={width} y1={y} y2={y} stroke={C.line} strokeWidth="1" />
      ))}
      {notes.slice(0, colors.length).map((n, i) => (
        <g key={i}>
          <ellipse cx={n.x} cy={n.y} rx="9" ry="6.5" fill={colors[i]} transform={`rotate(-18 ${n.x} ${n.y})`} />
          <line x1={n.x + 8} x2={n.x + 8} y1={n.y - 2} y2={n.y - 34} stroke={colors[i]} strokeWidth="1.8" />
        </g>
      ))}
    </svg>
  );
}

export default function MusicRoadmap({ summary } = {}) {
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
    padding: "10px 15px",
    borderRadius: 3,
    cursor: "pointer",
    flex: "0 0 auto",
    transition: "all .15s ease",
  };

  const careerColor = "#F2D98C";

  return (
    <div
      style={{
        fontFamily: font.body,
        background: C.hall,
        color: C.ink,
        minHeight: "100vh",
        backgroundImage:
          "radial-gradient(ellipse at 50% -10%, rgba(224,169,74,0.16) 0%, rgba(20,16,14,0) 55%)",
      }}
    >
      <style>{fontImport}</style>
      <style>{globalCSS}</style>

      {/* ---------------- HEADER ---------------- */}
      <header style={{ borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "34px 20px 24px" }}>
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: "0.28em",
              color: C.faint,
              marginBottom: 14,
            }}
          >
            FIELD ROADMAP · THE PERFORMING ARTS
          </div>
          <h1
            style={{
              fontFamily: font.display,
              fontWeight: 600,
              fontSize: "clamp(40px, 9vw, 72px)",
              lineHeight: 1.0,
              margin: "0 0 10px",
              letterSpacing: "-0.01em",
              color: "#F6E3B8",
            }}
          >
            Music
          </h1>
          <p style={{ margin: 0, maxWidth: 720, fontSize: 18, lineHeight: 1.55, color: C.dim }}>
            From the practice room to the profession: four undergraduate years, two optional graduate stages
            and eight places a music degree can lead.
          </p>
          <Staff phases={data.phases} />
        </div>
      </header>

      {summary ? (
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "20px 20px 0" }}>{summary}</div>
      ) : null}

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 20px 72px" }}>
        {/* ---------------- PHASE TABS ---------------- */}
        <nav className="hscroll" style={{ marginBottom: 24 }} aria-label="Roadmap phases">
          {data.phases.map((p) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                className="mus-btn"
                onClick={() => selectPhase(p.id)}
                style={{
                  ...tabBase,
                  border: `1px solid ${on ? p.color : C.line}`,
                  color: on ? C.hall : C.dim,
                  background: on ? p.color : C.panel,
                  fontWeight: on ? 600 : 500,
                }}
              >
                <span style={{ marginRight: 8, opacity: on ? 0.8 : 0.6 }}>{p.mark}.</span>
                {p.label}
                <span style={{ color: on ? "#14100Ecc" : C.faint, marginLeft: 8, fontSize: 10.5 }}>
                  {p.years}
                </span>
              </button>
            );
          })}
          <button
            className="mus-btn"
            onClick={() => {
              setShowCareers(true);
              setExpandedCareer(null);
            }}
            style={{
              ...tabBase,
              border: `1px solid ${showCareers ? careerColor : C.line}`,
              color: showCareers ? C.hall : C.dim,
              background: showCareers ? careerColor : C.panel,
              fontWeight: showCareers ? 600 : 500,
            }}
          >
            <span style={{ marginRight: 8, opacity: showCareers ? 0.8 : 0.6 }}>IV.</span>
            Career Paths
            <span style={{ color: showCareers ? "#14100Ecc" : C.faint, marginLeft: 8, fontSize: 10.5 }}>
              {data.careers.length} LISTED
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
                MOVEMENT {phase.mark} · {phase.years.toUpperCase()} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 17, lineHeight: 1.62, maxWidth: 780 }}>
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
                    className="mus-btn"
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
                    <span style={{ marginRight: 7 }}>{s.icon}</span>
                    {s.title}
                  </button>
                );
              })}
            </div>

            {/* ---------------- EXPANDABLE ITEMS ---------------- */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
              {phase.sections[activeSection].items.map((item, idx) => {
                const key = `${activePhase}-${activeSection}-${idx}`;
                const open = expandedItem === key;
                return (
                  <li key={key}>
                    <button
                      className="mus-item"
                      onClick={() => setExpandedItem(open ? null : key)}
                      aria-expanded={open}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        font: "inherit",
                        color: "inherit",
                        background: open ? C.panelUp : C.panel,
                        border: `1px solid ${open ? phase.color : C.lineSoft}`,
                        borderRadius: 4,
                        padding: "14px 16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                        <span
                          aria-hidden="true"
                          style={{ color: phase.color, fontSize: 18, flex: "0 0 auto", lineHeight: 1 }}
                        >
                          {open ? "♫" : "♪"}
                        </span>
                        <span style={{ fontSize: 17, fontWeight: 500, flex: 1, lineHeight: 1.4 }}>
                          {item.name}
                        </span>
                        <span
                          aria-hidden="true"
                          style={{ fontFamily: font.mono, fontSize: 14, color: C.faint, flex: "0 0 auto" }}
                        >
                          {open ? "−" : "+"}
                        </span>
                      </div>
                      {open ? (
                        <p
                          style={{
                            margin: "10px 0 0 30px",
                            color: C.dim,
                            fontSize: 16,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.detail}
                        </p>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            {/* ---------------- CAREER PATHS ---------------- */}
            <div style={{ borderLeft: `3px solid ${careerColor}`, paddingLeft: 18, marginBottom: 24 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: careerColor,
                  letterSpacing: "0.16em",
                  marginBottom: 8,
                }}
              >
                MOVEMENT IV · CAREER PATHS
              </div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.62, maxWidth: 780 }}>
                Eight destinations, from the stage to the classroom to the studio. Pay figures are US BLS
                medians (May 2025) unless noted. BLS publishes no annual median for musicians and singers,
                only an hourly one, because the work is part-time and irregular. The career snapshot at the top covers music directors and composers, not performers or teachers. BLS has no K-12 music teacher occupation, so teacher pay uses school-level teacher groups; see the Education roadmap for those.
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
                    className="mus-card mus-item"
                    onClick={() => setExpandedCareer(open ? null : i)}
                    aria-expanded={open}
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                      font: "inherit",
                      color: "inherit",
                      alignSelf: "start",
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? c.color : C.lineSoft}`,
                      borderTop: `3px solid ${c.color}`,
                      borderRadius: 4,
                      padding: "16px 16px 18px",
                    }}
                  >
                    <div style={{ fontSize: 26, lineHeight: 1, marginBottom: 10 }} aria-hidden="true">
                      {c.icon}
                    </div>
                    <h3
                      style={{
                        margin: "0 0 12px",
                        fontFamily: font.display,
                        fontWeight: 600,
                        fontSize: 21,
                        lineHeight: 1.2,
                        color: c.color,
                      }}
                    >
                      {c.path}
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontFamily: font.mono,
                            fontSize: 11,
                            color: C.dim,
                            border: `1px solid ${C.line}`,
                            borderRadius: 999,
                            padding: "3px 9px",
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    {open ? (
                      <div style={{ marginTop: 14 }}>
                        <p style={{ margin: "0 0 12px", color: C.dim, fontSize: 15.5, lineHeight: 1.6 }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            background: C.hall,
                            border: `1px solid ${c.color}`,
                            borderRadius: 4,
                            padding: "10px 12px",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: font.mono,
                              fontSize: 10.5,
                              letterSpacing: "0.16em",
                              color: c.color,
                              marginBottom: 4,
                            }}
                          >
                            PAY
                          </div>
                          <div style={{ fontSize: 15, lineHeight: 1.5 }}>{c.salary}</div>
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{ marginTop: 12, fontFamily: font.mono, fontSize: 11, color: C.faint }}
                      >
                        TAP TO EXPAND +
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
            marginTop: 40,
            paddingTop: 16,
            borderTop: `1px solid ${C.lineSoft}`,
            fontFamily: font.mono,
            fontSize: 11.5,
            color: C.faint,
            lineHeight: 1.7,
          }}
        >
          Tap any item or card to expand it, and tap again to close it. Figures come from
          research/music-research.md, with sources and access dates listed there.
        </footer>
      </main>
    </div>
  );
}
