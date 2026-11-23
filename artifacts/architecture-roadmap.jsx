import { useState } from "react";

/* ── ARCHITECTURE ROADMAP ─ "drafting sheet" aesthetic ──
   Warm drafting vellum; the one bold focal moment is a deep blueprint-navy
   title-block band — the bottom strip of an architectural drawing sheet —
   carrying a scrolling building-section elevation in blueprint cyan and a
   DRAWING SCHEDULE of workforce data set like sheet notes.
   bg #EAE6DA · card #F6F3EA · ink #20242A
   blue #22506E · terra #B05B2C · graphite #494E54 · red #B23A2E · green #3B7A5A
   display: Space Grotesk · body: IBM Plex Sans · data: Space Mono */

const C = {
  bg: "#EAE6DA",
  card: "#F6F3EA",
  cardUp: "#EFEBDE",
  line: "#D5CEBD",
  ink: "#20242A",
  dim: "#575A54",
  faint: "#928C7C",
  blue: "#22506E",
  terra: "#B05B2C",
  graphite: "#494E54",
  red: "#B23A2E",
  green: "#3B7A5A",
  gold: "#A67C1F",
  // title-block signature band
  sheet: "#132330",
  sheetLine: "#2C4A5E",
  cyan: "#79B4D4",
};

const font = {
  display: "'Space Grotesk', system-ui, sans-serif",
  body: "'IBM Plex Sans', system-ui, sans-serif",
  mono: "'Space Mono', monospace",
};

/* the DRAWING SCHEDULE — workforce data set like notes in a title block */
const schedule = [
  { k: "ARCHITECT MEDIAN", v: "$99,280", tone: "up" },
  { k: "JOB GROWTH ’25–35", v: "+4%", tone: "up" },
  { k: "OPENINGS / YR", v: "~6,900", tone: "up" },
  { k: "AVG TIME TO LICENSE", v: "12.9 YRS", tone: "warn" },
  { k: "LICENSED IN U.S.", v: "~116,000", tone: "up" },
  { k: "ARE DIVISIONS", v: "6", tone: "up" },
  { k: "ARCHITECT JOBS", v: "124,600", tone: "up" },
  { k: "10-YR ATTRITION", v: "36–38%", tone: "warn" },
  { k: "BILLINGS INDEX OCT ’26", v: "44.9", tone: "warn" },
  { k: "FIRMS USING AI IN 2025", v: "74%", tone: "up" },
  { k: "REGULAR AI USE, PROFESSION", v: "6%", tone: "up" },
  { k: "MEDICAL PLANNER PAY ’23–25", v: "+14%", tone: "up" },
];

/* a repeating building-section elevation: rooflines of varying height + window grids */
const skyline = [
  { w: 26, h: 46, cols: 2, rows: 5 },
  { w: 16, h: 30, cols: 1, rows: 4 },
  { w: 34, h: 62, cols: 3, rows: 7, tower: true },
  { w: 22, h: 38, cols: 2, rows: 4 },
  { w: 14, h: 24, cols: 1, rows: 3 },
  { w: 30, h: 54, cols: 3, rows: 6 },
  { w: 18, h: 34, cols: 2, rows: 4 },
  { w: 40, h: 70, cols: 3, rows: 8, tower: true },
  { w: 20, h: 42, cols: 2, rows: 5 },
  { w: 28, h: 30, cols: 3, rows: 3 },
  { w: 16, h: 50, cols: 1, rows: 6 },
  { w: 32, h: 58, cols: 3, rows: 7 },
];

function Building({ b }) {
  const wins = [];
  for (let r = 0; r < b.rows; r++) {
    for (let c = 0; c < b.cols; c++) {
      wins.push(
        <span
          key={r + "-" + c}
          style={{
            width: 3,
            height: 3,
            background: C.cyan,
            opacity: 0.5,
          }}
        />
      );
    }
  }
  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 3,
        width: b.w,
        height: b.h,
        borderTop: `1.5px solid ${C.cyan}`,
        borderLeft: `1px solid ${C.sheetLine}`,
        borderRight: `1px solid ${C.sheetLine}`,
        padding: "4px 3px 0",
        boxSizing: "border-box",
        alignSelf: "flex-end",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {b.tower && (
        <span style={{ width: 1, height: 6, background: C.cyan, marginTop: -8, opacity: 0.8 }} />
      )}
      <span
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${b.cols}, 1fr)`,
          gap: 3,
          width: "100%",
          justifyItems: "center",
        }}
      >
        {wins}
      </span>
    </span>
  );
}

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "STUDIO · YRS 1–5",
      color: C.terra,
      intro:
        "Architecture doesn't follow a clean bachelor's-then-master's arc. Two routes lead to the accredited professional degree: a five-year Bachelor of Architecture (B.Arch) straight from high school, or a four-year pre-professional B.S./B.A. that later feeds a Master of Architecture. Whichever you pick, one thing dominates all five years — the design studio. Expect one of the heaviest workloads on campus, a public critique culture, and a slow shift from hand-drawn lines to full digital building models.",
      sections: [
        {
          title: "Core Studio & Curriculum",
          icon: "📐",
          items: [
            {
              name: "Design Studio — the spine",
              detail:
                "A studio runs every single semester for the entire degree, and everything else orbits it. You take an open-ended design problem from concept to drawings and models, then defend it at a public review. It's the course that teaches you to actually think like an architect.",
            },
            {
              name: "Architectural History & Theory",
              detail:
                "Surveys of buildings, movements, and ideas from antiquity to now — why buildings look and work the way they do, and how design responds to culture, politics, and technology. The intellectual backbone behind the studio's form-making.",
            },
            {
              name: "Building Technology & Structures",
              detail:
                "Statics, structural systems, materials, and construction methods — how a building actually stands up and gets built. This is the technical, quantitative half of the degree, and it's where design meets physics.",
            },
            {
              name: "Environmental Systems",
              detail:
                "Daylighting, acoustics, heating and cooling, energy, and increasingly embodied carbon and net-zero design. The performance layer that separates a pretty drawing from a habitable building.",
            },
            {
              name: "The hard part: cumulative, not one course",
              detail:
                "No single course stands out as the weeder in the sources. The difficulty is cumulative: open-ended problems with no right answer, public critiques, and sustained output every semester for five years. Building technology and structures add a quantitative load that design-first students can underestimate.",
            },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "✏️",
          items: [
            {
              name: "Drawing & drafting",
              detail:
                "Hand sketching, orthographic drafting, and technical drawing come first — the visual language of the field. Even in a digital office, the ability to think through a pencil never stops mattering.",
            },
            {
              name: "Physical model-making",
              detail:
                "Chipboard, basswood, and laser-cut models built at all hours in the shop. Making something three-dimensional forces design decisions that stay hidden on a screen.",
            },
            {
              name: "Surviving the critique",
              detail:
                "The 'crit' — pinning your work to a wall and defending it in front of faculty and visiting jurors — is public, personal, and constant. Learning to take hard feedback without collapsing is a core professional skill in disguise.",
            },
            {
              name: "Spatial reasoning",
              detail:
                "Holding a building in your head in three dimensions, rotating and sectioning it mentally. This is the transferable superpower that later opens doors far outside architecture.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🖥️",
          items: [
            {
              name: "AutoCAD & Revit (BIM)",
              detail:
                "AutoCAD for 2D drafting and Revit for Building Information Modeling — the intelligent 3D model that runs modern practice. Both are named as standard tools across the career guides reviewed.",
            },
            {
              name: "Rhino + Grasshopper",
              detail:
                "Rhino for complex 3D geometry, with Grasshopper for visual scripting and parametric design. The gateway into computational design, and a genuine résumé differentiator if you go deep.",
            },
            {
              name: "SketchUp & rendering",
              detail:
                "SketchUp for fast massing, plus rendering engines — Enscape, V-Ray, Lumion — that turn models into presentation images. Studios live and die by how their final boards look.",
            },
            {
              name: "AI concept tools",
              detail:
                "Midjourney and Stable Diffusion for rapid mood-boards and concept imagery, Autodesk Forma for early site and environmental analysis. Powerful for ideation, but they lack the precision a construction document needs, so know the line.",
            },
          ],
        },
        {
          title: "Beyond the Studio",
          icon: "🌍",
          items: [
            {
              name: "Internships & an AXP head start",
              detail:
                "Summer positions at firms teach you what school can't, and you can begin logging AXP experience hours (the licensure requirement) as early as your degree — a real head start on the long road to licensure.",
            },
            {
              name: "AIAS & competitions",
              detail:
                "The American Institute of Architecture Students, plus design competitions, give you portfolio pieces, a network, and a taste of working to a brief and a deadline outside class.",
            },
            {
              name: "The portfolio is the currency",
              detail:
                "In architecture, your portfolio — not your GPA — gets you hired and gets you into grad school. Start curating your best studio work early and treat it as a living document.",
            },
            {
              name: "The workload reality",
              detail:
                "A 2017 ranking reported architecture students working longer hours than any other major, and one college guide puts a normal week at 40–60 hours including class time, with spikes before reviews. Reform is under way (AIAS has campaigned against all-nighters since 2000), but go in clear-eyed.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "M.Arch & Licensure",
      years: "GRAD + AXP/ARE · YRS ~5–8",
      color: C.blue,
      intro:
        "For most people this is where the professional degree and the license both get earned — and the two are separate mountains. The Master of Architecture is the accredited degree many need to practice; then a years-long experience-and-exam gauntlet (AXP, then the six-division ARE) turns a graduate into a legally recognized 'architect.' NCARB's own data says it takes an average of 12.9 years from starting a record to licensure, and more than a third of candidates quit along the way. This stage rewards persistence over talent.",
      sections: [
        {
          title: "Degree Routes",
          icon: "🎓",
          items: [
            {
              name: "The 4+2 path",
              detail:
                "A four-year pre-professional B.S./B.A. in architecture, then a two-year M.Arch with advanced standing. The route for students who start in a pre-professional architecture program rather than a five-year B.Arch.",
            },
            {
              name: "The 3-year M.Arch",
              detail:
                "A three-to-three-and-a-half-year M.Arch designed for people whose bachelor's was in something else entirely — English, biology, anything. Architecture is unusually open to career-changers this way.",
            },
            {
              name: "B.Arch vs M.Arch",
              detail:
                "A five-year B.Arch already is the accredited professional degree — no master's required to get licensed. The M.Arch route just splits that same professional education across two credentials. Neither is 'better'; they're different on-ramps.",
            },
            {
              name: "Specialized M.S. degrees",
              detail:
                "Post-professional master's degrees in computational design, historic preservation, real estate development, or urban design let licensed or soon-to-be architects specialize. These are for depth, not licensure.",
            },
            {
              name: "The funding reality",
              detail:
                "Professional M.Arch programs are long and credit-heavy (Cornell's is 113 graduate credits, Georgia Tech's 3.5-year track 102 semester hours), and this research did not establish typical funding. Compare each program's aid against a BLS median architect salary of about $99,280, and weigh it honestly.",
            },
          ],
        },
        {
          title: "The Licensure Gauntlet",
          icon: "🏛️",
          items: [
            {
              name: "AXP — the experience program",
              detail:
                "The Architectural Experience Program: 3,740 hours of documented, supervised work across six practice areas, logged through NCARB. It's the single biggest place candidates stall — finding hours in every category can drag for years.",
            },
            {
              name: "ARE — six divisions",
              detail:
                "The Architect Registration Exam: six separate pass/fail divisions spanning practice management, project management, planning, design, documentation, and construction. Most people take years to clear all six while working full time.",
            },
            {
              name: "12.9 years & the attrition cliff",
              detail:
                "The average candidate takes 12.9 years from opening an NCARB record to earning a license, and 36–38% drop off over a decade. The license is the field's defining bottleneck — and its defining filter.",
            },
            {
              name: "2025 rule changes",
              detail:
                "NCARB retired the five-year expiration on passed ARE divisions, reinstated thousands of expired passes, and in November 2025 moved AXP to a policy of full credit for experience reported within a year and 75% afterward. Some states, including California and Texas, now let candidates test before finishing experience. The path is getting more forgiving.",
            },
            {
              name: "What the license unlocks",
              detail:
                "BLS says all states and D.C. license architects, and only a licensed architect can use the title. It also pays: AIA found most firms give a raise at licensure (80% of small, 79% of mid-size, and 69% of large firms). The license is typically the gate to project-architect and principal roles.",
            },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "🧩",
          items: [
            {
              name: "Thesis / advanced studio",
              detail:
                "A self-directed capstone where you define and pursue your own design agenda — the closest studio comes to original research, and often the portfolio centerpiece that lands your first serious job.",
            },
            {
              name: "Professional practice & contracts",
              detail:
                "How firms actually run: contracts, fees, liability, project delivery, and codes. Dry compared to studio, but it's the material the ARE tests hardest and the knowledge that keeps a practice solvent.",
            },
            {
              name: "Building performance & simulation",
              detail:
                "Energy modeling, daylight and thermal simulation, and life-cycle carbon analysis — the quantitative backbone of sustainable design and an increasingly non-optional skill set.",
            },
            {
              name: "Parametric & computational design",
              detail:
                "Algorithmic form-finding and data-driven design using scripting. Graduate studios are where this shifts from a novelty to a genuine specialization; career guides say firms want scripts and parametric projects, not only studio work.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "⚙️",
          items: [
            {
              name: "BIM coordination",
              detail:
                "Revit and its plug-ins for clash detection across architecture, structure, and MEP. Coordinating a model that dozens of consultants build into is a core, employable graduate-level skill.",
            },
            {
              name: "Parametric scripting",
              detail:
                "Grasshopper, Dynamo, and Python to automate repetitive modeling, generate options, and drive fabrication. The bridge between design intent and design technology roles.",
            },
            {
              name: "Generative site planning",
              detail:
                "TestFit and Autodesk Forma generate hundreds of code-compliant site layouts — massing, parking, setbacks — in minutes. Vendor and trade accounts point to this as one of the most concrete AI uses in practice today.",
            },
            {
              name: "AI in the office — honestly",
              detail:
                "The numbers depend on what is counted: AIA found 6% of the profession using AI regularly and 8% of firms with AI solutions implemented (March 2025), while its 2026 firm survey found 74% of firms using AI in day-to-day operations in 2025. Practitioner accounts say it excels at concepts, visualization, and site analysis, not construction documents, code compliance, or liability. No source measured job loss.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "PhD & Research",
      years: "DOCTORATE · YRS ~8+",
      color: C.graphite,
      intro:
        "A PhD in architecture is not a practice degree — you don't need it to design buildings, and it won't make you a better architect in the licensure sense. It's for people who want to produce new knowledge and teach: historians and theorists, building scientists, and computational researchers. Doctoral study is typically funded through assistantships and fellowships. The catch is the destination: most graduates aim at academia, where BLS expects limited full-time tenure and tenure-track openings across most disciplines.",
      sections: [
        {
          title: "What a PhD Is For",
          icon: "🔬",
          items: [
            {
              name: "Not a practice degree",
              detail:
                "You won't design more or get licensed faster with a PhD. It's a research credential — the path to teaching and scholarship, not to running projects in a firm. Being clear on this before you start matters.",
            },
            {
              name: "History, Theory & Criticism",
              detail:
                "Studying architecture's ideas, movements, and cultural context through archival and interpretive research. At Georgia Tech, about 90% of recent graduates in its history and culture tracks hold teaching and research posts.",
            },
            {
              name: "Building Science & Technology",
              detail:
                "Energy, materials, structures, acoustics, and environmental performance investigated with scientific method and simulation. Virginia Tech lists building science and architectural acoustics among its research areas, and Berkeley's faculty work spans passive design, thermal comfort, and embodied carbon.",
            },
            {
              name: "Computational Design & Fabrication",
              detail:
                "Generative design, robotics, digital fabrication, and machine learning applied to the built environment. Princeton's Embodied Computation Lab houses an industrial robotic arm, and Berkeley and Georgia Tech list computational design and digital fabrication among their research areas.",
            },
          ],
        },
        {
          title: "Doctoral Training",
          icon: "📚",
          items: [
            {
              name: "Coursework → comps → dissertation",
              detail:
                "Two years of seminars and independent study, a comprehensive/general exam, then original dissertation research. The structure resembles a humanities or science PhD more than anything in the studio world.",
            },
            {
              name: "Funded, with teaching",
              detail:
                "Georgia Tech funds students through research and teaching assistantships, and Yale expects students to teach or assist for four terms, normally in years three and four. Check each program's funding terms before applying.",
            },
            {
              name: "Roughly five years, by program",
              detail:
                "Princeton describes a five-year program (two years of coursework and independent study, then a general examination), and IIT requires at least 52 credit hours after a master's and completion within six years of admission to candidacy. Timelines vary, and the years fall during your prime earning years.",
            },
            {
              name: "Where graduates land",
              detail:
                "Teaching is the main destination: BLS lists a doctorate as typical for postsecondary teachers and expects limited full-time openings in most disciplines. Georgia Tech reports about 40% of its design computing and building technology graduates went to industry and national research laboratories.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🧪",
          items: [
            {
              name: "Embodied carbon & net-zero",
              detail:
                "Cutting the carbon locked into materials and construction, not just operational energy. Berkeley's building-science faculty list embodied carbon among their research areas.",
            },
            {
              name: "Robotic fabrication & digital making",
              detail:
                "Robotic arms and digital fabrication for non-standard geometry, a focus of Princeton's Embodied Computation Lab and of robotic-manufacturing research at Berkeley. Where digital design meets physical making at building scale.",
            },
            {
              name: "Generative AI & computation",
              detail:
                "A 2026 Springer paper argues generative AI changes how architects explore and develop ideas, not only how fast they work. Parametric, generative, and computational design are named research areas at Berkeley and Georgia Tech.",
            },
            {
              name: "Housing, urbanism & preservation",
              detail:
                "IIT's faculty research covers housing and emerging urbanisms, and Virginia Tech lists historic preservation among its research areas. Questions of retrofit and density sit between design, policy, and climate.",
            },
          ],
        },
        {
          title: "Tools & Methods",
          icon: "🛰️",
          items: [
            {
              name: "Environmental simulation",
              detail:
                "Energy, daylight, and thermal simulation, plus acoustics modeling and measurement, as named in Berkeley's and Virginia Tech's building-science research areas. The quantitative instruments of the field.",
            },
            {
              name: "Robotics & digital fabrication",
              detail:
                "Industrial robotic arms and digital-fabrication labs, as at Princeton and Berkeley — the physical apparatus of computational-design research.",
            },
            {
              name: "Computation & machine learning",
              detail:
                "Python, data pipelines, and ML frameworks to generate and evaluate designs at scale. Increasingly the shared language across every technical track.",
            },
            {
              name: "Archives & fieldwork",
              detail:
                "For history and theory: primary-source archives, building documentation, and critical writing. The scholarly craft behind the field's intellectual half.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Licensed Practice",
      icon: "🏛️",
      color: C.blue,
      roles: ["Intern Architect", "Architect I–III", "Project Architect", "Principal / Partner"],
      reality:
        "The traditional core: designing buildings inside a firm, from schematic design through construction administration. It's the path the whole education points at — but the economics are sobering. The BLS median is $99,280 (10th percentile under $62,300, 90th over $161,420), modest against the decade of study and licensure it demands, and pay climbs slowly: AIA reports architect compensation rising under 3% a year from 2023 to 2025, billings are contracting, and most firms give a raise at licensure. Passion for the craft, not the paycheck, is what keeps people here.",
      ai: "Moderate — AI accelerates concepts, drawings, and rendering, but design judgment, code, coordination, and legal liability stay firmly human.",
      salary: "BLS median $99,280 · 10th pct. under $62,300 · 90th pct. over $161,420",
    },
    {
      path: "Specialized / Technical Design",
      icon: "🏥",
      color: "#2C7A88",
      roles: ["Medical Planner", "Healthcare Architect", "Specification Writer", "Lab Planner"],
      reality:
        "Specialist corners of practice, such as healthcare planning, labs, and specification writing, where expertise is scarce and the stakes are high. AIA's 2025 compensation data show medical planners' pay up 14% and specification writers' up 11% from 2023 to 2025, faster than the under-3%-a-year growth for architects overall, though no national salary range for these specialties was found. The trade-off is depth over breadth: you become the person who knows one hard thing exceptionally well.",
      ai: "Low-to-moderate — deep code, safety, and systems knowledge resists automation; AI assists with modeling and analysis around the edges.",
      salary: "No sourced national range · AIA 2023–25 pay growth: medical planners +14%, specification writers +11%",
    },
    {
      path: "Computational Design & Tech",
      icon: "💻",
      color: "#6E56C8",
      roles: ["Computational Designer", "BIM Manager", "Design Technologist", "Façade Specialist"],
      reality:
        "The bridge between architecture and code. These practitioners use parametric modeling and scripting (Grasshopper, Dynamo, Python) to solve geometry, fabrication, and automation problems the design team can't do by hand, and BIM managers own the digital infrastructure of the whole firm. It may be one of the architecture paths best placed for the AI wave, since someone has to build, deploy, and govern the tools (an editorial judgment, not a measured one). Career guides say firms want scripts and parametric projects, not a studio portfolio alone.",
      ai: "A beneficiary — you become the person building and managing the tools reshaping the field, not the one they displace.",
      salary: "BIM manager avg. base ~$97K (10th–90th pct. $66K–$127K, Payscale) · no computational-designer figure found",
    },
    {
      path: "Real Estate Development",
      icon: "🏗️",
      color: C.terra,
      roles: ["Development Associate", "Senior Associate", "Development Manager", "Director of Development"],
      reality:
        "The owner's side of the table — deciding what gets built, financing it, and capturing the value, rather than being hired to design it. An architect's grasp of feasibility, zoning, and construction is a real edge; the two postings found prefer construction, architecture, engineering, or project-management experience, and one lists a master's or real estate certificate as preferred. The catch is that it's a different discipline — finance, pro formas, and risk — so a real estate master's or certificate can help.",
      ai: "Low — deal-making, capital, and risk judgment are relationship- and market-driven, not automatable.",
      salary: "Two postings: senior associate $120K–$150K + bonus (Dallas) · director $150K–$175K (Washington, D.C.) · no national dataset",
    },
    {
      path: "Construction Management",
      icon: "👷",
      color: C.gold,
      roles: ["Field Engineer", "Project Engineer", "Construction Manager", "Owner's Rep"],
      reality:
        "Running the build rather than drawing it — schedule, budget, trades, and getting the thing constructed on time. Career guides say architecture graduates move into it because they read drawings fluently and understand design intent, and the median construction manager earns $114,990 (BLS May 2025), about $15,700 above the architect median, with 9% projected growth. BLS lists a bachelor's in construction, business, engineering, or a related field as typical and does not name architecture, so check whether a given employer wants construction experience or a credential.",
      ai: "Low — coordinating people, trades, and a physical site in real time is stubbornly hands-on work.",
      salary: "BLS median $114,990 · 10th pct. under $69,690 · 90th pct. over $189,440",
    },
    {
      path: "Urban Planning & Design",
      icon: "🌆",
      color: C.green,
      roles: ["Urban Designer", "City Planner", "Transportation Planner", "Director of Planning"],
      reality:
        "Zooming out from one building to the scale of blocks, districts, and cities — zoning, land use, transit, and the physical form of neighborhoods. Architecture graduates bring spatial-design skills that pure planning grads often lack, making them strong urban designers. Most policy and planning roles, though, want planning knowledge, public-process experience, GIS, or an MUP, so the cleanest route pairs your architecture degree with a planning master's. (Landscape architecture, a licensed sibling profession, is an adjacent path at ~$79,870 median.)",
      ai: "Low-to-moderate — data and mapping get automated, but public process, politics, and judgment remain human.",
      salary: "BLS median $89,320 · 10th pct. under $60,010 · 90th pct. over $134,490 · master's typical",
    },
    {
      path: "Academia & Research",
      icon: "🎓",
      color: C.graphite,
      roles: ["Adjunct / Lecturer", "Assistant → Full Professor", "Researcher", "Dean"],
      reality:
        "Teaching studio and seminars, and producing scholarship on history, theory, building science, or computation — usually gated by a doctorate. The intellectual freedom is real, but so is the scarcity: BLS expects colleges to hire more part-time teachers and to offer limited full-time tenure and non-tenure positions in most disciplines, and tenure can take up to seven years. Only about 8,350 people held postsecondary architecture-teaching jobs in BLS's May 2023 data. A labor of love with a narrow, competitive top end.",
      ai: "Low — original scholarship and teaching are human work; AI is a research aid, not a substitute.",
      salary: "BLS (May 2023, architecture teachers) median $105,770 · 10th–90th pct. $60,610–$174,390",
    },
    {
      path: "Design-Adjacent & Creative",
      icon: "🎬",
      color: C.red,
      roles: ["Interior Architect", "Production Designer", "Viz Artist", "Product Designer"],
      reality:
        "The creative diaspora — interiors and adaptive reuse, film and game production design, architectural visualization, exhibition and furniture design, even UX and spatial computing. Architecture's blend of spatial reasoning, material knowledge, and visual communication transfers well. It's also the corner where the sources discuss AI most directly: visualization especially is being reshaped, rewarding artists who pair core craft with AI fluency rather than resisting it.",
      ai: "High for visualization — concept imagery and rendering are being automated fast; hybrid 'AI-augmented' artists thrive, purists struggle.",
      salary: "No sourced range · pay varies widely by niche, city, and reputation",
    },
  ],
};

const tabBase = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 13,
  padding: "9px 15px",
  borderRadius: 3,
  cursor: "pointer",
  whiteSpace: "nowrap",
  flexShrink: 0,
  transition: "all .15s",
};

export default function ArchitectureRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.red : phase.color;

  const selectPhase = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        @keyframes elevScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .elevTrack { display: inline-flex; align-items: flex-end; gap: 10px; animation: elevScroll 34s linear infinite; }
        @keyframes markBlink { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
        .markBlink { animation: markBlink 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .elevTrack { animation: none; }
          .markBlink { animation: none; opacity: 1; }
        }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
      `}</style>

      {/* header */}
      <header style={{ padding: "34px 20px 18px", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 11,
            color: accent,
            letterSpacing: "0.18em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span className="markBlink" style={{ fontWeight: 700, fontSize: 13 }}>▚</span>
          FIELD ROADMAP · SHEET A-1 · SCALE 1:1
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 700,
            fontSize: "clamp(40px, 8.5vw, 74px)",
            lineHeight: 0.98,
            margin: "10px 0 12px",
            letterSpacing: "-0.03em",
          }}
        >
          Architecture
        </h1>
        <p style={{ color: C.dim, fontSize: 16, maxWidth: 690, margin: 0, lineHeight: 1.55 }}>
          Five years of studio, a decade-long licensure gauntlet, and one of the widest sets of exits
          of any design field. The full path from first crit to registered architect — drawn to scale,
          priced honestly, with an AI read on every destination.
        </p>
      </header>

      {/* signature — blueprint title-block band: scrolling elevation + drawing schedule */}
      <div
        style={{
          background: C.sheet,
          borderTop: `1px solid ${C.sheetLine}`,
          borderBottom: `1px solid ${C.sheetLine}`,
          backgroundImage: `linear-gradient(180deg, rgba(121,180,212,0.08) 0%, rgba(19,35,48,0) 40%)`,
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "16px 20px 16px" }}>
          {/* scrolling building-section elevation */}
          <div style={{ overflow: "hidden", height: 74, position: "relative" }} aria-hidden="true">
            {/* ground line */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 1,
                background: C.cyan,
                opacity: 0.55,
              }}
            />
            <div className="elevTrack" style={{ height: 74 }}>
              {[0, 1].map((rep) => (
                <span key={rep} style={{ display: "inline-flex", alignItems: "flex-end", gap: 10 }}>
                  {skyline.map((b, i) => (
                    <Building key={rep + "-" + i} b={b} />
                  ))}
                </span>
              ))}
            </div>
          </div>
          {/* drawing schedule */}
          <div className="hscroll" style={{ gap: 0, marginTop: 12 }}>
            {schedule.map((s, i) => (
              <div
                key={s.k}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: "4px 16px",
                  borderLeft: i === 0 ? "none" : `1px solid ${C.sheetLine}`,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 9.5,
                    letterSpacing: "0.07em",
                    color: "#6E93A8",
                  }}
                >
                  {s.k}
                </span>
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: s.tone === "warn" ? "#E0A45C" : C.cyan,
                  }}
                >
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "22px 20px 64px" }}>
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
                  color: on ? "#fff" : C.dim,
                  background: on ? p.color : C.card,
                  fontWeight: 600,
                }}
              >
                {p.label}
                <span style={{ color: on ? "#ffffffcc" : C.faint, marginLeft: 8, fontSize: 10 }}>
                  {p.years}
                </span>
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
              border: `1px solid ${showCareers ? C.red : C.line}`,
              color: showCareers ? "#fff" : C.dim,
              background: showCareers ? C.red : C.card,
              fontWeight: 600,
            }}
          >
            Career Paths
            <span style={{ color: showCareers ? "#ffffffcc" : C.faint, marginLeft: 8, fontSize: 10 }}>
              8 LISTED
            </span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* phase intro */}
            <div style={{ borderLeft: `3px solid ${phase.color}`, paddingLeft: 16, marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: phase.color,
                  letterSpacing: "0.13em",
                  marginBottom: 6,
                }}
              >
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 15.5, lineHeight: 1.62, maxWidth: 770 }}>
                {phase.intro}
              </p>
            </div>

            {/* section subtabs */}
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
                      color: on ? phase.color : C.dim,
                      background: on ? C.cardUp : "transparent",
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
                      background: open ? C.cardUp : C.card,
                      border: `1px solid ${open ? phase.color : C.line}`,
                      borderRadius: 4,
                      padding: "15px 17px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? "none" : "0 1px 2px rgba(32,36,42,0.04)",
                      transition: "all .15s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 12,
                      }}
                    >
                      <span style={{ fontFamily: font.display, fontWeight: 600, fontSize: 17 }}>
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontFamily: font.mono,
                          fontSize: 15,
                          color: open ? phase.color : C.faint,
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        {open ? "−" : "+"}
                      </span>
                    </div>
                    {open && (
                      <p style={{ margin: "10px 0 0", color: C.dim, fontSize: 14.5, lineHeight: 1.62 }}>
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
            {/* careers intro */}
            <div style={{ borderLeft: `3px solid ${C.red}`, paddingLeft: 16, marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: C.red,
                  letterSpacing: "0.13em",
                  marginBottom: 6,
                }}
              >
                DESTINATIONS · SALARY: BLS OOH MAY 2025 + NAMED SOURCES
              </div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.62, color: C.ink, maxWidth: 770 }}>
                One of the most transferable design educations there is. Eight destinations from an
                architecture degree — from the licensed firm track it's built around to exits in development,
                construction, planning, and tech. Every card carries an honest read on pay and
                on how exposed the work is to automation (the AI lines are editorial judgments). Where no source was found, the card says so.
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
                      background: open ? C.cardUp : C.card,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderTop: `3px solid ${c.color}`,
                      borderRadius: 4,
                      padding: 17,
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? "none" : "0 1px 2px rgba(32,36,42,0.04)",
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                      <span style={{ fontSize: 22 }} aria-hidden="true">
                        {c.icon}
                      </span>
                      <span
                        style={{
                          fontFamily: font.display,
                          fontWeight: 700,
                          fontSize: 18,
                          color: c.color,
                          letterSpacing: "-0.01em",
                          lineHeight: 1.1,
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
                      <div style={{ marginTop: 13 }}>
                        <p style={{ margin: "0 0 12px", fontSize: 14, lineHeight: 1.62, color: C.dim }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 11.5,
                            lineHeight: 1.5,
                            color: C.dim,
                            borderTop: `1px solid ${C.line}`,
                            paddingTop: 10,
                            marginBottom: 10,
                          }}
                        >
                          <span style={{ color: c.color, fontWeight: 700 }}>AI EXPOSURE ▸ </span>
                          {c.ai}
                        </div>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 12.5,
                            fontWeight: 700,
                            color: "#2E4A63",
                            background: "#E4ECF1",
                            border: `1px solid #C6D6E0`,
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
            marginTop: 38,
            paddingTop: 14,
            borderTop: `1px solid ${C.line}`,
            fontFamily: font.mono,
            fontSize: 11,
            color: C.faint,
            letterSpacing: "0.05em",
            lineHeight: 1.6,
          }}
        >
          TAP ANY ITEM OR CARD TO EXPAND · SOURCES: BLS OOH (MAY 2025) + OEWS, NCARB AXP + NBTN 2025, AIA
          COMPENSATION 2025 + AI REPORT + FIRM SURVEY 2026, NAAB, PAYSCALE · VERIFIED NOV 2026
        </footer>
      </main>
    </div>
  );
}
