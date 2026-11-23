import { useState, useEffect } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
// Aesthetic: water-quality laboratory / fate-&-transport. Clean beaker-white ground
// (cool, never cream), deep water-teal, aquifer indigo, a warm reagent-coral
// counterpoint. Signature motif: a conventional treatment train (influent→effluent).
const T = {
  bg:         "#eaf2f0",   // pale clean-water tint
  paper:      "#f2f8f6",
  surface:    "#fbfdfc",
  surfaceAlt: "#e4efec",
  ink:        "#132628",   // deep water-charcoal
  inkSoft:    "#33484a",
  line:       "#c6dbd7",   // beaker-line
  lineSoft:   "#dbeae6",

  water:      "#0d7d78",   // deep teal — primary / undergrad
  waterBright:"#12a39c",
  sky:        "#1a7fa8",   // cyan-blue — masters
  deep:       "#33488c",   // aquifer indigo — phd
  signal:     "#e2663c",   // reagent coral — warm accent / careers
  signalSoft: "rgba(226,102,60,0.11)",
  aqua:       "#0fb0aa",   // dissolved-oxygen bright
  slate:      "#5a6f70",   // muted label
  muted:      "#87a09d",

  phaseColors: {
    undergrad: "#0d7d78",  // water — the broad foundation
    masters:   "#1a7fa8",  // clarified — specialization
    phd:       "#33488c",  // deep aquifer — research
  },

  fontDisplay: "'Bricolage Grotesque', 'Archivo', sans-serif",
  fontMono:    "'IBM Plex Mono', 'Courier New', monospace",
  fontBody:    "'Hanken Grotesk', system-ui, sans-serif",
};

function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ── Signature: conventional treatment train (influent → effluent) ─────────────
function TreatmentTrain() {
  const stages = [
    { x: 150, label: "SCREEN" },
    { x: 262, label: "COAG" },
    { x: 374, label: "SETTLE" },
    { x: 486, label: "FILTER" },
    { x: 598, label: "UV" },
  ];
  return (
    <svg
      viewBox="0 0 720 128"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ee-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8a7a4f" stopOpacity="0.55" />
          <stop offset="0.55" stopColor={T.sky} stopOpacity="0.35" />
          <stop offset="1" stopColor={T.aqua} stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Flow band: murky influent clarifying to clean effluent */}
      <rect x="40" y="58" width="640" height="14" rx="7" fill="url(#ee-flow)" />

      {/* Influent inflow */}
      <path d="M 26 50 q 8 6 0 12 q -8 6 0 12" fill="none" stroke="#8a7a4f" strokeWidth="2" opacity="0.7" />
      <text x="40" y="96" fill={T.muted} fontFamily={T.fontMono} fontSize="8.5" letterSpacing="0.5">INFLUENT</text>

      {/* Unit-process nodes */}
      {stages.map((s, i) => (
        <g key={s.label}>
          {/* connector arrow into node */}
          {i > 0 && (
            <path
              d={`M ${s.x - 46} 65 L ${s.x - 34} 65`}
              stroke={T.water}
              strokeWidth="1.6"
              markerEnd="url(#ee-arrow)"
            />
          )}
          <rect
            x={s.x - 30}
            y="46"
            width="60"
            height="38"
            rx="4"
            fill={T.surface}
            stroke={i < 2 ? T.water : i < 4 ? T.sky : T.aqua}
            strokeWidth="1.8"
          />
          <circle cx={s.x} cy="65" r="4.5" fill={i < 2 ? T.water : i < 4 ? T.sky : T.aqua} />
          <text
            x={s.x}
            y="102"
            textAnchor="middle"
            fill={T.slate}
            fontFamily={T.fontMono}
            fontSize="8.5"
            letterSpacing="0.5"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* arrow marker */}
      <defs>
        <marker id="ee-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={T.water} />
        </marker>
      </defs>

      {/* Effluent out */}
      <path d="M 648 61 L 690 61 L 690 69 L 648 69" fill="none" stroke={T.aqua} strokeWidth="1.6" />
      <text x="680" y="96" textAnchor="end" fill={T.aqua} fontFamily={T.fontMono} fontSize="8.5" letterSpacing="0.5">EFFLUENT</text>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      color: T.phaseColors.undergrad,
      intro:
        "The undergraduate degree is essentially civil and chemical engineering fundamentals bent toward pollution — mass balances, fluid mechanics, chemistry, and biology aimed at water, air, and soil. It is broad by design: you graduate a capable generalist and then compete for jobs against civil and chemical grads for many of the same roles.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            { name: "Mass & Energy Balances", detail: "The accounting backbone of the field: what enters a system, what leaves, and what accumulates. Usually the first true 'weeder' course — shared with chemical engineering." },
            { name: "Fluid Mechanics & Hydraulics", detail: "How water moves through pipes, open channels, and the ground. The physics underneath every treatment plant, pump station, and storm drain." },
            { name: "Environmental Chemistry", detail: "Aqueous equilibrium, acid–base, redox, and reaction kinetics that govern how contaminants behave in water and soil. Conceptually the heart of the major, and a common stumbling block." },
            { name: "Fate & Transport of Contaminants", detail: "Modeling how a substance moves and transforms across air, water, and soil phases — the signature environmental-engineering course and ABET's defining program criterion." },
            { name: "Water & Wastewater Treatment", detail: "Designing the unit-process train — screening, coagulation, sedimentation, filtration, disinfection, biological treatment. The most directly job-relevant course in the degree." },
            { name: "Hydrology & Groundwater", detail: "Rainfall–runoff, watersheds, and aquifer flow. Where civil and environmental engineering overlap most heavily." },
            { name: "Environmental Microbiology", detail: "The bacteria that run biological treatment — and the pathogens you're trying to kill in drinking water. Biology that most other engineers never touch." },
            { name: "Thermodynamics", detail: "Energy, phase behavior, and why treatment processes cost what they cost. Shared with chemical engineering and often taught at that intensity." },
          ],
        },
        {
          title: "Fieldwork & Lab",
          icon: "🧪",
          items: [
            { name: "Water-quality sampling", detail: "Collecting and preserving samples without contaminating them. Unglamorous, but it's the skill nearly every entry-level consulting job actually needs on day one." },
            { name: "Analytical measurement", detail: "Turbidity, dissolved oxygen, BOD/COD, pH, and jar tests — learning to produce a number and to know when not to trust it." },
            { name: "Unit-process lab", detail: "Running bench-scale coagulation, filtration, and reactor experiments to connect the equations to real, messy performance." },
            { name: "Senior capstone design", detail: "A year-long team project designing a real treatment system, remediation plan, or stormwater scheme against actual codes, clients, and budgets." },
          ],
        },
        {
          title: "Tools You'll Learn",
          icon: "🖥️",
          items: [
            { name: "AutoCAD / Civil 3D", detail: "Drafting site plans, pipe networks, and grading. Still the default deliverable across most of environmental consulting." },
            { name: "GIS (ArcGIS / QGIS)", detail: "Mapping contamination plumes, watersheds, and infrastructure. Increasingly a core hiring skill rather than a nice-to-have." },
            { name: "EPANET & SWMM", detail: "The EPA's free, industry-standard models for water-distribution networks and stormwater/sewer systems." },
            { name: "HEC-RAS / HEC-HMS", detail: "Army Corps hydraulic and hydrologic models for floodplains and watershed runoff." },
            { name: "Excel → Python / R", detail: "Mass-balance spreadsheets are giving way to scripting for data analysis, modeling, and automation. Early Python fluency compounds fast." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🎓",
          items: [
            { name: "Co-op / internship", detail: "A summer at a consulting firm or water utility is effectively mandatory — many firms hire almost exclusively from their intern pool." },
            { name: "FE exam (become an EIT)", detail: "Take the Fundamentals of Engineering exam senior year while the material is fresh. It's the first, easiest step toward the PE license." },
            { name: "AWWA · WEF · AEESP · EWB", detail: "Student chapters of the field's societies open doors; Engineers Without Borders builds genuine design experience on real projects." },
            { name: "Undergraduate research", detail: "A lab on PFAS, membranes, or water reuse both tests your appetite for grad school and strengthens any future application." },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years ~5–6",
      color: T.phaseColors.masters,
      intro:
        "In environmental engineering the master's carries unusual weight. The undergrad is deliberately broad; real specialization — treatment, air quality, remediation, water resources — usually happens here, and many senior technical and government roles quietly expect it. A one-to-two-year MS is one of the field's highest-return moves.",
      sections: [
        {
          title: "Degree Types",
          icon: "🎓",
          items: [
            { name: "Professional MS (non-thesis)", detail: "The common path: roughly 8–10 courses, often taken part-time while working, aimed squarely at practice. Usually self-funded." },
            { name: "Thesis MS", detail: "A funded research degree with an original thesis. The route for anyone considering a PhD or a research/modeling career." },
            { name: "Civil MS, environmental concentration", detail: "Many programs house environmental engineering inside civil. The concentration and coursework matter more than the exact name on the diploma." },
            { name: "Online / distance MS", detail: "Increasingly common and respected, letting working engineers specialize without leaving their consulting or utility job." },
          ],
        },
        {
          title: "Specializations",
          icon: "🔬",
          items: [
            { name: "Water & wastewater treatment", detail: "Advanced physical, chemical, and biological process design. The field's largest single employment base." },
            { name: "Site remediation & geoenvironmental", detail: "Groundwater contamination, soil cleanup, risk assessment, and CERCLA/'Superfund' work — now supercharged by PFAS." },
            { name: "Air quality & atmospheric", detail: "Emissions inventories, control technology, dispersion modeling, and a growing slice of indoor-air and climate work." },
            { name: "Water resources & hydrology", detail: "Watershed and stormwater modeling, flood resilience, and climate adaptation at the civil–environmental border." },
            { name: "Sustainability & industrial ecology", detail: "Life-cycle assessment, resource recovery, and the decarbonization of industrial processes." },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "⚙️",
          items: [
            { name: "Process modeling", detail: "BioWin and GPS-X plus reactor kinetics for designing and optimizing full treatment plants — not just single unit processes." },
            { name: "Groundwater modeling", detail: "MODFLOW and contaminant-transport codes for predicting how a plume moves and how a cleanup will perform." },
            { name: "Air dispersion modeling", detail: "AERMOD and CALPUFF for emissions permitting and regulatory compliance." },
            { name: "LCA & data tools", detail: "SimaPro / openLCA plus Python to quantify environmental impact and turn field data into decisions." },
          ],
        },
        {
          title: "Funding & Payoff",
          icon: "💵",
          items: [
            { name: "Professional MS is usually self-funded", detail: "But a degree that unlocks senior technical roles and a roughly $15–25K pay bump tends to pay for itself quickly." },
            { name: "Thesis / research MS is usually funded", detail: "Research or teaching assistantships cover tuition plus a stipend — the same model as the early years of a PhD." },
            { name: "Employer sponsorship is common", detail: "Many consulting firms and utilities pay for a part-time MS to retain engineers and move them into senior roles." },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD & Research",
      years: "Years ~7+",
      color: T.phaseColors.phd,
      intro:
        "A PhD is not required to practice — it's for people who want to invent the methods rather than apply them, whether in academia, national labs, or corporate R&D. Doctoral training is four to six funded years of original research: coursework, a qualifying exam, then a dissertation on a specific problem at the field's frontier.",
      sections: [
        {
          title: "What a PhD Looks Like",
          icon: "🎓",
          items: [
            { name: "Funded, not paid-for", detail: "Assistantships — research on a professor's grant, or teaching — cover tuition and a modest stipend. You should not self-fund a PhD in this field." },
            { name: "Qualifying & candidacy exams", detail: "Early exams test your breadth and defend your research proposal before you become 'ABD' (all but dissertation)." },
            { name: "The dissertation", detail: "Three to five years building an original contribution, usually packaged as three or four peer-reviewed journal papers." },
            { name: "Your advisor is everything", detail: "Funding, topic, and network all flow through one professor. Choosing the right advisor matters more than the school's overall rank." },
          ],
        },
        {
          title: "Active Frontiers",
          icon: "🔬",
          items: [
            { name: "PFAS & emerging contaminants", detail: "Detecting and destroying 'forever chemicals' and microplastics that conventional treatment plants simply cannot remove." },
            { name: "Water reuse & resource recovery", detail: "Turning wastewater into drinking water, energy, and nutrients — reframing the sewage plant as a resource refinery." },
            { name: "ML-designed materials", detail: "Using machine learning to discover membranes and adsorbents faster, including new membranes tuned to filter PFAS from water." },
            { name: "Digital twins for treatment", detail: "Live virtual replicas of treatment plants for real-time optimization, anomaly detection, and predictive control." },
            { name: "Climate adaptation & resilience", detail: "Modeling drought, flooding, and how water and stormwater infrastructure holds up under a shifting climate." },
            { name: "Water–energy nexus", detail: "Cutting the large and often-overlooked carbon and energy footprint of moving, heating, and treating water." },
          ],
        },
        {
          title: "Computation & AI",
          icon: "🤖",
          items: [
            { name: "The field is formalizing data methods", detail: "ASCE's water-resources institute stood up a Machine Learning & AI in Water Engineering task committee in late 2024 — a signal the discipline is taking this seriously." },
            { name: "The honest practitioner take", detail: "ML is genuinely useful for prediction, sensor data, and materials discovery — but mechanistic models and real field data still anchor practice. Deployment lags the hype." },
            { name: "The core is automation-resistant", detail: "Permitting, sampling, and regulatory judgment resist automation even as the modeling around them gets smarter." },
          ],
        },
        {
          title: "Beyond Academia",
          icon: "🏢",
          items: [
            { name: "National labs & EPA research", detail: "NREL, PNNL, and the EPA's Office of Research and Development hire PhDs for applied environmental research." },
            { name: "Corporate R&D", detail: "Water-tech firms (Xylem, Veolia, Ecolab) and industrial giants employ PhDs to develop treatment and control technology." },
            { name: "The academic market is tight", detail: "Tenure-track slots are scarce and highly competitive. Most PhDs land in labs, water-tech R&D, or senior consulting — the norm here, not a failure." },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Environmental Consulting",
      icon: "🏗️",
      color: T.water,
      roles: ["Staff Engineer", "Project Engineer", "Project Manager", "Principal"],
      reality:
        "The field's default destination — firms like AECOM, Jacobs, Stantec, and Tetra Tech hire the bulk of new grads to do permitting, site assessment, remediation, and treatment design for clients. Entry is accessible with a bachelor's and an internship, but early pay is modest and the work is driven by billable hours. The PE license plus roughly a decade of experience is what turns a staff engineer into a well-paid project manager; without it, advancement tends to stall.",
      salary: "$60K–$75K start · $110K–$150K+ as PM / principal",
    },
    {
      path: "Water & Wastewater Treatment",
      icon: "💧",
      color: T.sky,
      roles: ["Process Engineer", "Design Engineer", "Plant Engineer", "Utility Eng. Manager"],
      reality:
        "The single largest technical base of the field — designing treatment trains for consulting firms or engineering the utilities that deliver drinking water and treat sewage. Stable, recession-resistant, and mission-driven: every city needs it, in every economy. Utility and municipal roles trade top-end pay for security, pensions, and predictable hours. A master's focused on process design is a strong differentiator here.",
      salary: "$65K–$85K start · $100K–$135K senior",
    },
    {
      path: "Site Remediation & Geoenvironmental",
      icon: "⛏️",
      color: "#8a5a2b",
      roles: ["Field Engineer", "Remediation Engineer", "Risk Assessor", "Program Manager"],
      reality:
        "Investigating and cleaning up contaminated groundwater and soil — brownfields, Superfund sites, industrial spills, and now PFAS. The work is field-heavy early (sampling, drilling oversight, monitoring) and shifts toward modeling and client management later. Demand is durable because contamination doesn't disappear and regulation keeps widening; PFAS liability in particular is fueling a fresh wave of assessment and cleanup work.",
      salary: "$62K–$80K start · $100K–$140K senior",
    },
    {
      path: "Corporate EHS & Sustainability",
      icon: "🏭",
      color: T.signal,
      roles: ["EHS Engineer", "Compliance Engineer", "Sustainability Engineer", "EHS / ESG Manager"],
      reality:
        "Working inside manufacturers, energy, tech, and pharma to keep operations compliant and cut environmental impact. This is quietly where much of the money is: energy, mining, utilities, and manufacturing pay environmental engineers a median well above green consulting — roughly $118K–$150K. The tension is real, too — some of the best-paid environmental-engineering jobs sit at the very industries the field exists to regulate. ESG-reporting requirements have expanded these roles sharply.",
      salary: "$65K–$85K start · $118K–$150K industry median",
    },
    {
      path: "Government & Regulatory",
      icon: "🏛️",
      color: "#4a7a5c",
      roles: ["Staff Engineer", "Permit Engineer", "Program Engineer", "Supervisory Engineer"],
      reality:
        "The EPA, state environmental agencies, the Army Corps, and municipalities employ engineers to permit, inspect, model, and enforce environmental law. Pay is capped below consulting and industry, but federal roles are solid (median near $121K) with strong stability, benefits, and pensions — plus unusual leverage over how the whole field actually operates. The catch: federal hiring is politically cyclical and can swing hard with administrations.",
      salary: "$70K–$90K start · $110K–$140K senior (federal)",
    },
    {
      path: "Water Resources & Climate Resilience",
      icon: "🌊",
      color: "#1b8ca0",
      roles: ["Water Resources Engineer", "Hydrologist", "Stormwater Engineer", "Resilience Planner"],
      reality:
        "Modeling watersheds, designing stormwater and flood-control systems, and planning infrastructure for a changing climate. It sits at the civil–environmental border and leans heavily on hydrology and GIS. Federal infrastructure funding plus intensifying floods and droughts make demand steady. Strong modeling skills — HEC-RAS, GIS, Python — are what separate the well-paid from the entry-level in this path.",
      salary: "$62K–$82K start · $100K–$135K senior",
    },
    {
      path: "Environmental Data & Modeling",
      icon: "📊",
      color: "#5a6ab8",
      roles: ["Environmental Modeler", "Data Scientist", "GIS Analyst", "Modeling Lead"],
      reality:
        "A fast-growing niche for engineers strong in Python, GIS, and simulation — building air-dispersion and groundwater models, digital twins, and environmental data pipelines for consulting firms, water-tech, and agencies. It overlaps with data science, so you compete with CS grads, but domain knowledge (what the numbers physically mean) is the moat. It typically pays a premium over traditional roles at the same experience level.",
      salary: "$70K–$90K start · $120K–$160K senior",
    },
    {
      path: "Research & Academia",
      icon: "🎓",
      color: T.deep,
      roles: ["PhD Researcher", "Postdoc", "Research Scientist", "Professor"],
      reality:
        "Requires a PhD and, for the tenure track, usually a postdoc and a strong publication record. Tenure-track positions are scarce and fiercely competitive; most PhDs instead land in national labs, water-tech R&D, or senior consulting — a normal, well-paid outcome rather than a consolation prize. Academic pay lags industry, offset by autonomy and the chance to work on frontier problems like PFAS destruction and potable water reuse.",
      salary: "Postdoc $55K–$70K · Professor $95K–$160K · Industry PhD $110K–$160K+",
    },
  ],
};

// ── Expandable item ───────────────────────────────────────────────────────────
function ExpandableItem({ item, idx, expanded, onToggle, accent }) {
  const isOpen = expanded === idx;
  return (
    <div
      onClick={() => onToggle(isOpen ? null : idx)}
      style={{
        background: isOpen ? T.surface : T.paper,
        border: `1px solid ${isOpen ? accent : T.line}`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: 5,
        padding: "13px 16px",
        marginBottom: 8,
        cursor: "pointer",
        transition: "background 0.15s, border-color 0.15s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 11 }}>
          <span style={{
            fontFamily: T.fontMono, fontSize: 10, color: accent,
            fontWeight: 600, flexShrink: 0, opacity: 0.85,
          }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span style={{
            fontFamily: T.fontDisplay, fontSize: 15, fontWeight: 600,
            color: T.ink, lineHeight: 1.25, letterSpacing: "0.005em",
          }}>
            {item.name}
          </span>
        </div>
        <span style={{
          fontFamily: T.fontMono, fontSize: 17, lineHeight: 1,
          color: isOpen ? accent : T.muted, flexShrink: 0,
        }}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <p style={{
          marginTop: 10, marginBottom: 0, marginLeft: 21,
          fontFamily: T.fontBody, fontSize: 13.5, color: T.inkSoft,
          lineHeight: 1.65, borderTop: `1px solid ${T.lineSoft}`, paddingTop: 10,
        }}>
          {item.detail}
        </p>
      )}
    </div>
  );
}

// ── Career card ───────────────────────────────────────────────────────────────
function CareerCard({ career, expanded, onToggle }) {
  const isOpen = expanded === career.path;
  return (
    <div
      onClick={() => onToggle(isOpen ? null : career.path)}
      style={{
        background: T.surface,
        border: `1px solid ${isOpen ? career.color : T.line}`,
        borderTop: `3px solid ${career.color}`,
        borderRadius: 5,
        padding: "17px 19px",
        cursor: "pointer",
        transition: "border-color 0.16s, box-shadow 0.16s",
        boxShadow: isOpen ? `0 8px 24px -14px ${career.color}` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 12 }}>
        <span style={{ fontSize: 21 }}>{career.icon}</span>
        <span style={{
          fontFamily: T.fontDisplay, fontWeight: 700, fontSize: 16.5,
          color: career.color, lineHeight: 1.15, letterSpacing: "0.005em",
        }}>
          {career.path}
        </span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
        {career.roles.map((r) => (
          <span key={r} style={{
            fontFamily: T.fontMono, fontSize: 10, color: career.color,
            background: career.color + "14",
            border: `1px solid ${career.color}30`,
            borderRadius: 3, padding: "2px 7px",
          }}>
            {r}
          </span>
        ))}
      </div>

      <div style={{
        fontFamily: T.fontMono, fontSize: 11, fontWeight: 600,
        color: T.signal, background: T.signalSoft,
        border: `1px solid ${T.signal}38`, borderRadius: 3,
        padding: "5px 10px", display: "inline-block",
        marginBottom: isOpen ? 13 : 0,
      }}>
        {career.salary}
      </div>

      {isOpen && (
        <p style={{
          borderTop: `1px solid ${T.lineSoft}`, paddingTop: 13, margin: 0,
          fontFamily: T.fontBody, fontSize: 13.5, color: T.inkSoft, lineHeight: 1.68,
        }}>
          {career.reality}
        </p>
      )}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function EnvironmentalEngineeringRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const section = phase?.sections[activeSection];

  const handlePhaseChange = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };
  const handleSectionChange = (idx) => {
    setActiveSection(idx);
    setExpandedItem(null);
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.fontBody, color: T.ink }}>
      <FontLoader />

      {/* ── Header ── */}
      <header style={{ maxWidth: 880, margin: "0 auto", padding: "38px 24px 0" }}>
        <div style={{
          fontFamily: T.fontMono, fontSize: 10, letterSpacing: "0.2em",
          textTransform: "uppercase", color: T.water, marginBottom: 16,
        }}>
          Career Roadmap · USA · 2026
        </div>

        <h1 style={{
          fontFamily: T.fontDisplay, fontWeight: 800,
          fontSize: "clamp(33px, 7vw, 56px)", color: T.ink, margin: 0,
          letterSpacing: "-0.015em", lineHeight: 1.0,
        }}>
          Environmental<br />Engineering
        </h1>

        <p style={{
          fontFamily: T.fontBody, fontSize: 15.5, color: T.slate,
          marginTop: 14, marginBottom: 20, maxWidth: 580, lineHeight: 1.55,
        }}>
          The engineering of clean water, air, and soil — small, mission-driven, and unusually porous, sharing its job pool with civil and chemical grads. The one engineering field where the master's, not the license, is often the real lever.
        </p>

        {/* Treatment-train signature */}
        <div style={{
          border: `1px solid ${T.line}`, borderRadius: 6,
          background: T.paper, padding: "14px 16px 8px", marginBottom: 22,
        }}>
          <TreatmentTrain />
          <div style={{
            fontFamily: T.fontMono, fontSize: 9, color: T.muted,
            letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4,
            display: "flex", justifyContent: "space-between",
          }}>
            <span>Conventional treatment train · influent → effluent</span>
            <span>Fig. 1</span>
          </div>
        </div>

        {/* Stat strip */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
          gap: 0, border: `1px solid ${T.line}`, borderRadius: 6,
          overflow: "hidden", background: T.surface,
        }}>
          {[
            { label: "BLS Median", value: "$104,170", color: T.water },
            { label: "Growth ’24–’34", value: "4%", color: T.sky },
            { label: "Openings / Year", value: "~3,000", color: T.deep },
            { label: "US Jobs (2024)", value: "39,400", color: T.signal },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: "12px 15px",
              borderRight: i < 3 ? `1px solid ${T.line}` : "none",
              borderBottom: `3px solid ${s.color}`,
            }}>
              <div style={{ fontFamily: T.fontMono, fontSize: 14.5, fontWeight: 600, color: T.ink }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: T.fontMono, fontSize: 8.5, color: T.muted,
                letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 3,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* ── Nav ── */}
      <nav style={{
        position: "sticky", top: 0,
        background: "rgba(234,242,240,0.92)", backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${T.line}`, zIndex: 10,
        padding: "0 24px", marginTop: 26,
      }}>
        <div style={{
          maxWidth: 880, margin: "0 auto", display: "flex",
          overflowX: "auto", scrollbarWidth: "none",
        }}>
          {data.phases.map((p) => {
            const active = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handlePhaseChange(p.id)}
                style={{
                  background: "none", border: "none",
                  borderBottom: active ? `3px solid ${p.color}` : "3px solid transparent",
                  padding: "14px 15px", cursor: "pointer",
                  fontFamily: T.fontDisplay, fontWeight: active ? 700 : 500,
                  fontSize: 14, color: active ? p.color : T.slate,
                  whiteSpace: "nowrap", letterSpacing: "0.01em",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {p.label}
                <span style={{
                  fontFamily: T.fontMono, fontSize: 9, marginLeft: 6,
                  opacity: 0.6, color: active ? p.color : T.muted, letterSpacing: 0,
                }}>
                  {p.years}
                </span>
              </button>
            );
          })}
          <button
            onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
            style={{
              background: "none", border: "none",
              borderBottom: showCareers ? `3px solid ${T.signal}` : "3px solid transparent",
              padding: "14px 15px", cursor: "pointer",
              fontFamily: T.fontDisplay, fontWeight: showCareers ? 700 : 500,
              fontSize: 14, color: showCareers ? T.signal : T.slate,
              whiteSpace: "nowrap", letterSpacing: "0.01em",
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            Career Paths
          </button>
        </div>
      </nav>

      {/* ── Main ── */}
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "28px 24px 60px" }}>
        {!showCareers && phase ? (
          <>
            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: T.fontMono, fontSize: 10, color: phase.color,
                letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 11,
              }}>
                {phase.label} · {phase.years}
              </div>
              <p style={{
                fontFamily: T.fontBody, fontSize: 14.5, color: T.inkSoft,
                lineHeight: 1.7, margin: 0, maxWidth: 700,
                borderLeft: `3px solid ${phase.color}`, paddingLeft: 15,
              }}>
                {phase.intro}
              </p>
            </div>

            <div style={{
              display: "flex", overflowX: "auto", scrollbarWidth: "none",
              gap: 7, marginBottom: 20, paddingBottom: 4,
            }}>
              {phase.sections.map((sec, i) => {
                const active = activeSection === i;
                return (
                  <button
                    key={sec.title}
                    onClick={() => handleSectionChange(i)}
                    style={{
                      background: active ? phase.color : T.surface,
                      border: `1px solid ${active ? phase.color : T.line}`,
                      borderRadius: 4, padding: "8px 14px", cursor: "pointer",
                      fontFamily: T.fontBody, fontSize: 12.5,
                      fontWeight: active ? 600 : 500,
                      color: active ? "#fff" : T.slate,
                      whiteSpace: "nowrap", transition: "all 0.15s",
                    }}
                  >
                    <span style={{ marginRight: 5 }}>{sec.icon}</span>{sec.title}
                  </button>
                );
              })}
            </div>

            {section && (
              <div>
                {section.items.map((item, idx) => (
                  <ExpandableItem
                    key={item.name}
                    item={item}
                    idx={idx}
                    expanded={expandedItem}
                    onToggle={setExpandedItem}
                    accent={phase.color}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: T.fontMono, fontSize: 10, color: T.signal,
                letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 11,
              }}>
                8 Career Destinations
              </div>
              <p style={{
                fontFamily: T.fontBody, fontSize: 14.5, color: T.inkSoft,
                lineHeight: 1.7, margin: 0, maxWidth: 700,
                borderLeft: `3px solid ${T.signal}`, paddingLeft: 15,
              }}>
                Environmental engineering spans clean water, contaminated soil, air quality, and climate — but two truths cut across nearly every path. The PE license is optional here in a way it isn't for civil (only about 30% of grads pursue it), and the highest-paid roles are often inside the industries the field exists to regulate, not in green consulting. Tap any card for the honest picture.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14,
            }}>
              {data.careers.map((c) => (
                <CareerCard
                  key={c.path}
                  career={c}
                  expanded={expandedCareer}
                  onToggle={setExpandedCareer}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <footer style={{
        borderTop: `1px solid ${T.line}`, padding: "16px 24px",
        textAlign: "center", background: T.paper,
      }}>
        <p style={{
          fontFamily: T.fontMono, fontSize: 10, color: T.muted,
          margin: 0, letterSpacing: "0.04em",
        }}>
          Tap any item to expand · Salary data: BLS OEWS May 2024, Glassdoor & Payscale 2026, industry sources · Figures are indicative ranges
        </p>
      </footer>
    </div>
  );
}
