import { useState, useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  GAME DEVELOPMENT & DESIGN: CAREER ROADMAP                         */
/*  Aesthetic: game-engine editor viewport. Dark chrome, pixel-stepped */
/*  corners, Silkscreen "LEVEL" eyebrows, per-phase neon accents.      */
/* ------------------------------------------------------------------ */

const T = {
  bg: "#0D0E12",
  panel: "#15171F",
  panelUp: "#1B1E28",
  border: "#272B38",
  borderUp: "#353B4D",
  text: "#E9EBF3",
  muted: "#9298AB",
  faint: "#5C6275",
  green: "#4ADE80",
  cyan: "#38BDF8",
  purple: "#C084FC",
  gold: "#FBBF24",
  red: "#F87171",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      level: "LEVEL 1",
      years: "Years 1–4",
      color: T.green,
      intro:
        "Game programs come in three flavors: BS (programming-heavy), BFA (art and design studio model), and hybrid BA. Every serious one converges on the same spine: design fundamentals, relentless prototyping, and a team capstone that ships a polished game. Programs and working practitioners alike put the portfolio ahead of the diploma.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            {
              name: "Game Design Fundamentals",
              detail:
                "Formal and dramatic elements, mechanics → dynamics → aesthetics, gameplay loops, balancing skill vs. chance. Taught through making and tearing apart games, not lectures. Expect to analyze why existing games work at a structural level.",
            },
            {
              name: "Programming for Games (C# / C++)",
              detail:
                "Programs teach C#, C++, or Python for gameplay scripting and engine work. Salary sources tie programming and engine mastery to higher pay. No source here identifies which courses are the hardest, so ask each program where students struggle.",
            },
            {
              name: "Systems & Economy Design",
              detail:
                "Spreadsheet-driven design: recording and manipulating game data, then watching how changes ripple through play dynamics. Economy design and balancing are where 'having ideas' becomes an actual profession.",
            },
            {
              name: "2D/3D Art, Modeling & Animation",
              detail:
                "Digital art foundations, 2D and 3D modeling, and animation, as listed in typical program cores. Even non-artists benefit from pipeline literacy, since you will hand assets across disciplines.",
            },
            {
              name: "Interactive Storytelling & Narrative",
              detail:
                "Branching structures, dialogue systems, quest design, environmental storytelling. UConn makes Interactive Storytelling one of its two junior-year core courses.",
            },
            {
              name: "Team Capstone (the portfolio centerpiece)",
              detail:
                "A team-based project taking a game from concept to polished, playtested prototype (Iowa State's is 6 credits; UConn's BFA senior project runs a full year), deliberately mimicking studio structure with milestones, roles, and iteration. Programs position it as the centerpiece of the graduating portfolio.",
            },
          ],
        },
        {
          title: "Skills You'll Develop",
          icon: "🛠️",
          items: [
            {
              name: "Rapid prototyping & playtesting",
              detail:
                "Paper prototypes before code, structured playtests with real player data, and the discipline of iterating on evidence instead of taste. Programs treat this loop as the center of the craft.",
            },
            {
              name: "Engine fluency (Unreal & Unity)",
              detail:
                "Unreal is the most-used primary engine (42% of developers in GDC's 2026 survey, including 59% at AA and 47% at AAA studios). Unity holds 30% overall and is still used by 54% of developers at older indie studios, and Godot is used by 11% of newer indie developers. Learn one deeply and be conversant in both.",
            },
            {
              name: "Version control & asset pipelines",
              detail:
                "Git and Perforce, build systems, and the unglamorous craft of not destroying your teammates' work.",
            },
            {
              name: "Cross-disciplinary teamwork",
              detail:
                "Artists, programmers, and designers speak different languages. Programs such as Harrisburg's teach collaboration, team roles, and conflict resolution explicitly, because studio projects depend on cross-discipline teamwork.",
            },
            {
              name: "Scope discipline",
              detail:
                "Cutting features to ship on time is a skill most syllabi never name directly. Game jams and small finished projects teach it quickly, and a capstone that runs from concept to polished prototype in a set term forces the same trade-offs.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🎮",
          items: [
            {
              name: "Unreal Engine 5 & Unity",
              detail:
                "Blueprints and C++ in Unreal; C# in Unity. Programs differ on which engine they teach, and some start with entry-level engines, so check the curriculum.",
            },
            {
              name: "Modeling, animation & art software",
              detail:
                "Programs teach industry-standard 3D modeling, animation, and digital art software, including Autodesk tools. Even if you never make assets yourself, knowing how they move through a pipeline helps you work with artists.",
            },
            {
              name: "AI assistants: use with eyes open",
              detail:
                "In GDC's 2026 survey of more than 2,300 industry professionals, 36% use generative AI at work (30% at game studios, 58% at publishers, support, and marketing firms) and 52% say it is having a negative impact on the industry, up from 30% a year earlier. Developers say they want AI for planning and repetitive tasks. Learn the tools, but build a portfolio that shows what you can do without them.",
            },
            {
              name: "Spreadsheets as a design instrument",
              detail:
                "Programs such as Full Sail's have students record, store, and manipulate game data in spreadsheets, then watch how changes affect play. Economy curves and progression pacing are the kind of work this supports.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🕹️",
          items: [
            {
              name: "Game jams (Global Game Jam, Ludum Dare)",
              detail:
                "Short, time-boxed events where small teams finish a game, usually over a weekend. Jams are a fast way to build scope discipline, teamwork under pressure, and portfolio volume.",
            },
            {
              name: "Co-ops and studio internships",
              detail:
                "RIT requires two co-op blocks, and USC games students describe a bind: employers want experience, and few entry-level or intern slots exist to get it. Apply broadly, including QA and tools roles, not just design.",
            },
            {
              name: "Ship something publicly",
              detail:
                "Releasing a game publicly gives you real players and real reviews to point to. A game from RIT's student studio, The Salesman, sold 8,000 copies at $5. By contrast, one analysis puts the median 2025 Steam release at about $249 gross, so treat a first release as portfolio and learning, not income.",
            },
            {
              name: "Clubs and industry events",
              detail:
                "Student clubs (UConn lists a Game Development Club and an Escape Room Club) put you on teams outside class. Industry events such as GDC are where the field meets and where its annual industry survey is released.",
            },
            {
              name: "A portfolio site from day one",
              detail:
                "Playable builds, short gameplay clips, and honest write-ups of your role on each project. Program capstones are designed to produce portfolio pieces, so lead with your best finished work, not your biggest unfinished idea.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      level: "LEVEL 2",
      years: "Years ~5–7",
      color: T.cyan,
      intro:
        "Unlike research fields, a game development master's is mostly a professional degree, and none of the career sources reviewed lists a studio role that requires one. Named programs offer a specialization track, team-based coursework, and a place in a studio-adjacent network. Costs are often high, though some funding exists (Georgia Tech's MS offers part-time assistantships). Weigh any program against two years of shipping your own work.",
      sections: [
        {
          title: "Program Types",
          icon: "🎓",
          items: [
            {
              name: "CMU Entertainment Technology Center (MET)",
              detail:
                "A two-year terminal Master of Entertainment Technology, jointly run by the College of Fine Arts and the School of Computer Science. Courses include Building Virtual Worlds, Improvisational Acting, and Visual Story, with electives in game design, interactive storytelling, and themed entertainment. CMU graduates overall are hired by companies including 2K Games, Meta, Apple, Google, and Microsoft; the source does not break out MET graduates.",
            },
            {
              name: "USC Games: MFA vs. MS split",
              detail:
                "USC separates design from technical work: an MFA in Interactive Media through the School of Cinematic Arts, and an MS in Computer Science (Game Development) through the Viterbi School of Engineering. It also offers an MA in Cinematic Arts with a Media Arts, Games and Health emphasis. USC's Los Angeles location is cited for access to internships, events, and companies including Sony, Blizzard, and Riot Games.",
            },
            {
              name: "SMU Guildhall, Utah EAE, DigiPen, NYU Game Center MFA",
              detail:
                "Other programs named in the sources: SMU Guildhall, DigiPen (a for-profit school offering graduate and undergraduate degrees), the University of Utah's EAE (one source reports Princeton Review ranked it #1 for undergraduate and #3 for graduate game design), UCF's Interactive Entertainment Academy, and NYU Game Center's MFA in game design. This research found no placement statistics for any of them, so compare curricula and outcomes directly.",
            },
            {
              name: "MS in Computer Science with games focus",
              detail:
                "Programming-focused routes exist: USC's MS in Computer Science (Game Development) is one, and RIT offers a combined BS/MS in as little as five years. A practitioner source notes game programmers can move into web, app, and general software work, so a CS-based degree keeps those doors open. How many programmers choose this route was not researched.",
            },
          ],
        },
        {
          title: "What You Actually Gain",
          icon: "💼",
          items: [
            {
              name: "Team production",
              detail:
                "Undergraduate capstones show how programs treat team production (Iowa State's is a team-based project from concept to polished prototype). How master's programs structure teams, milestones, and faculty roles was not researched in detail, so ask each program for specifics.",
            },
            {
              name: "A defensible specialization",
              detail:
                "Programs split by track: USC separates a design-oriented MFA from a technical MS in Computer Science (Game Development), and CMU's MET offers electives in game design, interactive storytelling, themed entertainment, and leadership and innovation. Choosing a track is how a master's narrows your profile.",
            },
            {
              name: "The placement network",
              detail:
                "USC's Los Angeles location is cited for access to internships, events, and companies including Sony, Blizzard, and Riot Games. In an industry where 28% of surveyed developers (33% in the US) were laid off in two years, access to employers matters. No placement statistics were found for any program.",
            },
            {
              name: "Two more years of projects",
              detail:
                "Practitioners in Q&A threads call a bachelor's 'just a checkmark' and say some game design degrees are overpriced (opinion, not survey data). Whatever you pay for, the finished projects are what you can show employers.",
            },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            {
              name: "Costs vary widely",
              detail:
                "One low-reliability ranking site estimates two-year totals from about $24,000 (public in-state) to $90,000 (private) and says elite private programs can run well above that, but its own figures are inconsistent, so treat them as rough. Georgia Tech's Digital Media MS offers graduate assistantships of about 13 hours a week at $1,321 a month with tuition waived, so some funding exists. Check each program's actual tuition and aid.",
            },
            {
              name: "Run the math against the alternative",
              detail:
                "Two years of tuition vs. two years of entry-level income plus self-shipped games. This research found no data on master's earnings premiums in games, so the comparison is a judgment: a program may make sense for a network or a discipline switch, and less sense if you already have a strong portfolio.",
            },
          ],
        },
        {
          title: "Should You Skip It?",
          icon: "🤔",
          items: [
            {
              name: "A master's is not a studio requirement",
              detail:
                "None of the career sources reviewed lists a studio role that requires a master's. Program descriptions center on finished games and portfolios, and practitioners in Q&A threads call a bachelor's 'just a checkmark' (opinion, not survey data).",
            },
            {
              name: "Who genuinely benefits",
              detail:
                "Plausible cases are career-switchers who want a structured program and a network, and people whose target role matches a program's track, such as USC's technical MS. These are editorial judgments; this research found no outcome data by degree.",
            },
            {
              name: "Teaching and academia",
              detail:
                "No faculty hiring data was found, so this research cannot say what credential university game programs require. If academia tempts you, read current faculty postings at programs you admire before choosing between an MFA, an MS, and a PhD.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "PhD / Research",
      level: "LEVEL 3",
      years: "Years ~8+",
      color: T.purple,
      intro:
        "Games research is a small, interdisciplinary academic field. Georgia Tech's qualifying fields (HCI, STS, Design, and Media Studies) show the mix. Doctoral study at the programs researched is funded, but admission slots are tiny, and the career logic is different: you are training as a researcher who studies and advances play, not as a better game developer.",
      sections: [
        {
          title: "Doctoral Structure",
          icon: "🧪",
          items: [
            {
              name: "Programs in this research",
              detail:
                "Georgia Tech's Digital Media PhD and UC Santa Cruz's Computational Media program (MS and PhD) are the two examined here; this is not a complete list of programs. Georgia Tech admits only 3 to 5 new candidates a year. UC Santa Cruz was recruiting PhD students for 2026-27.",
            },
            {
              name: "Funding: guaranteed but modest",
              detail:
                "Georgia Tech guarantees every PhD student a teaching or research assistantship: about 20 hours a week, a stipend of about $2,500 a month, and tuition waived (students still pay mandatory fees). GRE scores are not required. The program page gives no typical time to degree.",
            },
            {
              name: "Portfolio, thesis, dissertation",
              detail:
                "Georgia Tech applicants submit one to three computational artifacts showing creative and technical ability in expressive computing, so a portfolio matters even here. The degree also includes a master's project or thesis, a thesis proposal with prospectus, a public oral defense, and a 6-credit dissertation.",
            },
            {
              name: "Quals, then the long middle",
              detail:
                "At Georgia Tech: core courses (The Computer as an Expressive Medium, Principles of Interactive Design, Historical Approaches to New Media, Discovery and Invention), a project studio taken twice, and a minor concentration of three courses outside the school. The qualifying exam has three parts: two written parts covering two of four fields (HCI, STS, Design, Media Studies), then a two-hour oral exam. The handbook linked from the program page dates from 2021 and may be out of date.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔬",
          items: [
            {
              name: "Procedural & generative content",
              detail:
                "UC Santa Cruz's faculty research (per a 2016 call) includes generative game design and procedural generation of game levels. HCI research calls name tools for designing, developing, and studying games, and AI and deep learning in games. A CHI review of ten years of games research also flags tools for game creation as a gap.",
            },
            {
              name: "Games user research & player modeling",
              detail:
                "Research calls name player experience, games user research, and game analytics. Industry research roles exist (Wargaming's Center for Player Insights has posted a UX Researcher role), but this research found no broad data on how many studios employ such teams.",
            },
            {
              name: "Interactive narrative, characters & game AI",
              detail:
                "UC Santa Cruz lists interactive narrative and characters among its faculty research areas, and research calls name AI and deep learning in games and personalized, adaptive serious games. This research did not examine LLM-driven NPCs specifically.",
            },
            {
              name: "Serious games & games for health",
              detail:
                "A CHI review of ten years of games research found games for a purpose to be the dominant form since 2010. At UC Santa Cruz, Erin Robinson Swink's educational game Fair Play was funded by an NIH Pathfinder Award, and a postdoctoral fellow developed a flood-preparedness game. Research calls also name exergames in healthcare and game-based learning and assessment.",
            },
            {
              name: "XR interaction & accessibility",
              detail:
                "Research calls name new interaction techniques, VR and AR games, and social gaming, and UC Santa Cruz lists social and embodied interaction and assistive technology among faculty areas. GDC's 2026 trends report names advocacy and accessibility concerns as an industry trend.",
            },
          ],
        },
        {
          title: "AI in the Research World",
          icon: "🤖",
          items: [
            {
              name: "Generative AI as research subject, not just tool",
              detail:
                "A 2025 qualitative research synthesis reports that generative AI lowers entry barriers for independent developers, while industry ethnography records predominant skepticism in craft-intensive roles. A separate study of game design also reports a democratizing effect for indie developers.",
            },
            {
              name: "The practitioner split is the finding",
              detail:
                "GDC 2026 data: 36% of professionals use generative AI, and 52% say it is having a negative impact on the industry, up from 30% a year earlier. A separate Game Developer Collective panel reports usage fell about 7 percent after its 2025 peak, with fewer panelists expecting AI to cut costs. The two sources point in somewhat different directions on adoption, so treat the trend as unsettled.",
            },
          ],
        },
        {
          title: "Where PhDs Land",
          icon: "🎯",
          items: [
            {
              name: "Faculty positions",
              detail:
                "No faculty hiring data or placement statistics were found, so this research cannot say how scarce tenure-track lines are. Georgia Tech states only that its graduates are prepared to work in industry, public service, and universities.",
            },
            {
              name: "Industry research & games user research",
              detail:
                "Industry research roles exist: Wargaming has posted a UX Researcher role in its Center for Player Insights. This research found no data on whether such roles prefer PhDs, and pay data is thin (see Career Paths).",
            },
            {
              name: "Adjacent tech research",
              detail:
                "Georgia Tech's qualifying fields include HCI, and research calls place much games research within HCI. Whether a games PhD transfers to research roles outside games was not researched, so treat it as a hypothesis.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Game Design (Studio)",
      icon: "🎯",
      color: T.green,
      aiRisk: "MODERATE AI EXPOSURE",
      roles: ["QA Tester", "Associate Designer", "Game / Level Designer", "Senior Designer", "Lead Designer", "Creative Director"],
      reality:
        "Entry is tight. Estimates put roughly 40,000 to 45,000 game jobs cut from 2022 to mid-2025, 33% of US respondents in GDC's 2026 survey were laid off in two years, and USC games students describe competing with experienced laid-off developers. Sources name QA tester, level designer, and freelance developer as common entry routes. Specialized titles such as Game Economy Designer ($92,338 average) and Technical Game Designer ($84,214) appear in one salary dataset. GDC survey respondents want AI to support planning and repetitive tasks rather than replace the development process.",
      salary: "$45k–$150k+ (QA and junior to lead)",
    },
    {
      path: "Game Programming",
      icon: "💻",
      color: T.cyan,
      aiRisk: "MODERATE AI EXPOSURE",
      roles: ["Gameplay Programmer", "Tools Programmer", "Graphics / Engine Programmer", "Senior Engineer", "Technical Director"],
      reality:
        "Programming is the best-paid track in the sources. Levels.fyi lists a median total compensation of $190,776 for video game software engineers, but its sample skews toward large, high-paying companies; other aggregators put the average much lower (about $97k for game developers, about $71k for video game programmers). One source ties C++ and engine mastery to higher pay and puts graphics programmers at $70k to $85k early and $130k to $160k mid-career. A practitioner site notes programmers can move into web, app, and general software work. GDC trends coverage says agentic AI could eventually take on coding and bug triage.",
      salary: "$55k–$190k+ (entry to Levels.fyi median)",
    },
    {
      path: "Game Art & Animation",
      icon: "🎨",
      color: "#F472B6",
      aiRisk: "HIGH AI EXPOSURE",
      roles: ["Concept Artist", "3D / Character Artist", "Environment Artist", "Animator", "Technical Artist", "Art Director"],
      reality:
        "A 2025 qualitative synthesis finds skepticism toward generative AI strongest in craft-intensive roles, and notes that limits in 3D model generation tempered early optimism. Entry pay is about $45k to $60k for concept artists and $50k to $60k for technical artists. Payscale lists senior technical artists with games skills at an average of $122k, but that rests on only 8 profiles (February 2024). A salary guide cites $80 to $150 an hour for specialized technical artist contract work (secondary source, January 2025).",
      salary: "$45k–$155k (senior technical art at the top)",
    },
    {
      path: "Production & Project Management",
      icon: "📋",
      color: T.gold,
      aiRisk: "LOW AI EXPOSURE (EDITORIAL)",
      roles: ["Associate Producer", "Producer", "Senior Producer", "Executive Producer", "Studio Director"],
      reality:
        "Producers manage project lifecycles, budgets, and teams. One source puts starting pay at $50k to $65k and mid-career pay at $95k to $125k, and says producers and project managers usually have more consistent schedules than programmers and artists, though crunch can still affect balance. Glassdoor's average is $74,508 (90th percentile $136,350), and Riot Games and Blizzard Entertainment are listed among top-paying companies. This research found no source on how producers enter the role or how AI affects it.",
      salary: "$50k–$135k+ (mid-career $95k–$125k)",
    },
    {
      path: "Narrative Design & Writing",
      icon: "✒️",
      color: "#FB923C",
      aiRisk: "HIGH AI EXPOSURE",
      roles: ["Game Writer", "Narrative Designer", "Senior Narrative Designer", "Narrative Director"],
      reality:
        "UConn teaches Interactive Storytelling as a junior core course, and one source describes narrative design and writing as showing promising career development but relatively modest pay. ZipRecruiter's June 2026 average for narrative designers is about $83k, with most workers between $58k and $109k. One vendor guide of low reliability flags narrative and junior roles as the highest risk in the AI era; no stronger source was found.",
      salary: "$58k–$109k (most workers)",
    },
    {
      path: "Indie & Entrepreneurship",
      icon: "🚀",
      color: T.red,
      aiRisk: "AI AS FORCE MULTIPLIER",
      roles: ["Solo Developer", "Indie Studio Founder", "Contract Developer", "Live-Ops Operator"],
      reality:
        "Income follows a power law. About 20,000 games launched on Steam in 2025 and about 300 passed $1M. One analysis puts the median 2025 release at about $249 gross, while another estimates a median indie game's lifetime gross at $5k to $15k; the methods differ, so treat both as rough. By one analyst's estimate about 8.5% of 2025 releases cleared $100k, and the top five indie releases earned over $500M combined. That analysis advises treating a first release as paid tuition, funding it from savings or a day job, and building an audience before a studio. Qualitative studies report that AI lowers entry barriers for independent developers.",
      salary: "No typical salary; most releases earn little",
    },
    {
      path: "Serious Games & Simulation",
      icon: "🛡️",
      color: "#818CF8",
      aiRisk: "LOW AI EXPOSURE (EDITORIAL)",
      roles: ["Simulation Developer", "Training Systems Designer", "XR Developer", "Serious Games Producer"],
      reality:
        "Serious games are games with a primary purpose other than entertainment, used in defense, education, healthcare, and emergency management. HigherEchelon builds Unity and Unreal training products for clients from NFL teams to the U.S. Army and supports the Army Game Studio. Requirements can be restrictive: one Applied Intuition defense simulation role requires U.S. citizenship, eligibility for a Secret clearance, a master's in modeling and simulation, computer science, or software engineering (or equivalent experience), and 3+ years of C++; an Anduril training simulation role requires U.S. person status. No broad salary survey was found.",
      salary: "One defense-tech posting: $166k–$220k base plus equity; no broad range found",
    },
    {
      path: "Games Research & Academia",
      icon: "🎓",
      color: T.purple,
      aiRisk: "LOW AI EXPOSURE (EDITORIAL)",
      roles: ["Games User Researcher", "Player Insights Analyst", "Research Scientist", "Professor of Game Design"],
      reality:
        "Doctoral programs are small (Georgia Tech admits 3 to 5 a year), and no faculty hiring data was found. Industry research roles exist (Wargaming's Center for Player Insights has posted a UX Researcher role), but this research found no data on which credentials they require. Pay data is thin: one aggregator lists an average near $101k for games user researchers, last updated in 2023.",
      salary: "About $100k average for games user researchers (2023 data, thin)",
    },
  ],
};

const px = (c) =>
  `0 -3px 0 0 ${c}, 0 3px 0 0 ${c}, -3px 0 0 0 ${c}, 3px 0 0 0 ${c}`;

export default function GameDevRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=Chakra+Petch:wght@400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap";
    document.head.appendChild(l);
    return () => document.head.removeChild(l);
  }, []);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? T.gold : phase.color;

  const pickPhase = (id) => {
    setShowCareers(false);
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
  };
  const pickSection = (i) => {
    setActiveSection(i);
    setExpandedItem(null);
  };

  const styles = {
    root: {
      minHeight: "100vh",
      background: T.bg,
      color: T.text,
      fontFamily: "'IBM Plex Sans', sans-serif",
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    },
    wrap: { maxWidth: 880, margin: "0 auto", padding: "28px 16px 64px" },
    eyebrow: {
      fontFamily: "'Silkscreen', monospace",
      fontSize: 10,
      letterSpacing: "0.15em",
      color: accent,
    },
    h1: {
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 700,
      fontSize: "clamp(26px, 6vw, 40px)",
      lineHeight: 1.1,
      margin: "10px 0 8px",
    },
    sub: { color: T.muted, fontSize: 14.5, lineHeight: 1.55, maxWidth: 620 },
    tabBar: {
      display: "flex",
      gap: 10,
      overflowX: "auto",
      padding: "6px 4px 14px",
      margin: "26px -4px 0",
      scrollbarWidth: "none",
    },
    tab: (active, color) => ({
      flex: "0 0 auto",
      cursor: "pointer",
      background: active ? T.panelUp : T.panel,
      border: "none",
      color: active ? T.text : T.muted,
      padding: "10px 16px 12px",
      textAlign: "left",
      boxShadow: px(active ? color : T.border),
      margin: 3,
      minWidth: 128,
      transition: "box-shadow 0.15s, color 0.15s",
    }),
    tabLevel: (active, color) => ({
      fontFamily: "'Silkscreen', monospace",
      fontSize: 8,
      letterSpacing: "0.12em",
      color: active ? color : T.faint,
      display: "block",
      marginBottom: 4,
    }),
    tabLabel: {
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 600,
      fontSize: 14,
    },
    tabYears: { fontSize: 11, color: T.faint, marginTop: 2 },
    xpTrack: {
      height: 6,
      background: T.panel,
      boxShadow: px(T.border),
      margin: "14px 3px 0",
      position: "relative",
    },
    xpFill: (w, color) => ({
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: w,
      background: color,
      transition: "width 0.45s cubic-bezier(.2,.9,.3,1), background 0.3s",
    }),
    intro: {
      marginTop: 30,
      padding: "18px 18px",
      background: T.panel,
      boxShadow: px(T.border),
      fontSize: 14.5,
      lineHeight: 1.65,
      color: T.text,
      margin: "30px 3px 0",
    },
    secBar: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      padding: "4px 4px 12px",
      margin: "22px -4px 0",
      scrollbarWidth: "none",
    },
    secTab: (active) => ({
      flex: "0 0 auto",
      cursor: "pointer",
      background: "transparent",
      border: "none",
      color: active ? accent : T.muted,
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 600,
      fontSize: 13.5,
      padding: "8px 12px",
      borderBottom: `3px solid ${active ? accent : "transparent"}`,
      whiteSpace: "nowrap",
      transition: "color 0.15s, border-color 0.15s",
    }),
    item: (open) => ({
      background: open ? T.panelUp : T.panel,
      boxShadow: px(open ? accent : T.border),
      margin: "0 3px 14px",
      cursor: "pointer",
      padding: "14px 16px",
      transition: "box-shadow 0.15s, background 0.15s",
    }),
    itemName: {
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 600,
      fontSize: 15,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
    },
    caret: (open) => ({
      fontFamily: "'Silkscreen', monospace",
      fontSize: 10,
      color: open ? accent : T.faint,
      flexShrink: 0,
    }),
    detail: {
      marginTop: 10,
      fontSize: 14,
      lineHeight: 1.65,
      color: T.muted,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 18,
      marginTop: 26,
      padding: "0 3px",
    },
    card: (open, color) => ({
      background: open ? T.panelUp : T.panel,
      boxShadow: px(open ? color : T.border),
      margin: 3,
      padding: "16px 16px 18px",
      cursor: "pointer",
      transition: "box-shadow 0.15s, background 0.15s",
    }),
    cardTitle: (color) => ({
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 700,
      fontSize: 16.5,
      color,
      margin: "8px 0 4px",
    }),
    risk: (color) => ({
      fontFamily: "'Silkscreen', monospace",
      fontSize: 8,
      letterSpacing: "0.1em",
      color: T.bg,
      background: color,
      padding: "3px 7px",
      display: "inline-block",
      marginBottom: 10,
    }),
    chips: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 },
    chip: {
      fontSize: 11,
      color: T.muted,
      background: T.bg,
      boxShadow: px(T.border),
      padding: "4px 8px",
      margin: 2,
      whiteSpace: "nowrap",
    },
    salary: (color) => ({
      marginTop: 14,
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 700,
      fontSize: 14.5,
      color: T.bg,
      background: color,
      display: "inline-block",
      padding: "6px 12px",
    }),
    footer: {
      marginTop: 46,
      textAlign: "center",
      fontFamily: "'Silkscreen', monospace",
      fontSize: 9,
      letterSpacing: "0.14em",
      color: T.faint,
    },
  };

  const riskColor = (r) =>
    r.startsWith("HIGH") ? T.red : r.startsWith("MODERATE") ? T.gold : r.includes("MULTIPLIER") ? T.cyan : T.green;

  const phaseIndex = data.phases.findIndex((p) => p.id === activePhase);
  const xpWidth = showCareers ? "100%" : `${((phaseIndex + 1) / 4) * 100}%`;

  return (
    <div style={styles.root}>
      <style>{`
        @keyframes blink { 0%,49% {opacity:1} 50%,100% {opacity:0} }
        ::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${accent}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
      `}</style>
      <div style={styles.wrap}>
        {/* HEADER */}
        <div style={styles.eyebrow}>▸ CAREER ROADMAP // PLAYER ONE</div>
        <h1 style={styles.h1}>Game Development &amp; Design</h1>
        <p style={styles.sub}>
          From first prototype to shipped worlds: an honest map of the degrees,
          the craft, and eight careers in an industry that is equal parts dream
          job and hard mode.
        </p>

        {summary}

        {/* PHASE TABS */}
        <div style={styles.tabBar}>
          {data.phases.map((p) => (
            <button
              key={p.id}
              style={styles.tab(!showCareers && activePhase === p.id, p.color)}
              onClick={() => pickPhase(p.id)}
            >
              <span style={styles.tabLevel(!showCareers && activePhase === p.id, p.color)}>
                {p.level}
              </span>
              <span style={styles.tabLabel}>{p.label}</span>
              <div style={styles.tabYears}>{p.years}</div>
            </button>
          ))}
          <button
            style={styles.tab(showCareers, T.gold)}
            onClick={() => {
              setShowCareers(true);
              setExpandedCareer(null);
            }}
          >
            <span style={styles.tabLevel(showCareers, T.gold)}>ENDGAME</span>
            <span style={styles.tabLabel}>Career Paths</span>
            <div style={styles.tabYears}>8 destinations</div>
          </button>
        </div>

        {/* XP BAR */}
        <div style={styles.xpTrack}>
          <div style={styles.xpFill(xpWidth, accent)} />
        </div>

        {!showCareers ? (
          <>
            {/* PHASE INTRO */}
            <div style={styles.intro}>{phase.intro}</div>

            {/* SECTION TABS */}
            <div style={styles.secBar}>
              {phase.sections.map((s, i) => (
                <button key={s.title} style={styles.secTab(activeSection === i)} onClick={() => pickSection(i)}>
                  {s.icon} {s.title}
                </button>
              ))}
            </div>

            {/* ITEMS */}
            <div>
              {phase.sections[activeSection].items.map((it, i) => {
                const open = expandedItem === i;
                return (
                  <div
                    key={it.name}
                    style={styles.item(open)}
                    onClick={() => setExpandedItem(open ? null : i)}
                  >
                    <div style={styles.itemName}>
                      <span>{it.name}</span>
                      <span style={styles.caret(open)}>{open ? "▼" : "▶"}</span>
                    </div>
                    {open && <div style={styles.detail}>{it.detail}</div>}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div style={styles.intro}>
              Eight distinct destinations, each with a straight answer on
              competitiveness. The AI exposure badges are editorial judgments
              informed by the research, not measured figures. In GDC's 2026
              survey, 36% of professionals use generative AI and 52% say it is
              having a negative impact on the industry.
            </div>
            <div style={styles.grid}>
              {data.careers.map((c, i) => {
                const open = expandedCareer === i;
                return (
                  <div
                    key={c.path}
                    style={styles.card(open, c.color)}
                    onClick={() => setExpandedCareer(open ? null : i)}
                  >
                    <div style={{ fontSize: 26 }}>{c.icon}</div>
                    <div style={styles.cardTitle(c.color)}>{c.path}</div>
                    <span style={styles.risk(riskColor(c.aiRisk))}>{c.aiRisk}</span>
                    <div style={styles.chips}>
                      {c.roles.map((r) => (
                        <span key={r} style={styles.chip}>
                          {r}
                        </span>
                      ))}
                    </div>
                    {open && (
                      <>
                        <div style={{ ...styles.detail, color: T.text, marginTop: 14 }}>
                          {c.reality}
                        </div>
                        <div style={styles.salary(c.color)}>{c.salary}</div>
                      </>
                    )}
                    {!open && (
                      <div style={{ ...styles.detail, fontSize: 12, color: T.faint }}>
                        Tap for the competitive reality + salary
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        <div style={styles.footer}>
          TAP ITEMS TO EXPAND <span style={{ animation: "blink 1.2s step-end infinite", color: accent }}>▮</span>
        </div>
      </div>
    </div>
  );
}
