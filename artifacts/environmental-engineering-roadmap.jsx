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
        "The undergraduate degree is essentially civil and chemical engineering fundamentals bent toward pollution — mass balances, fluid mechanics, chemistry, and biology aimed at water, air, and soil. It is broad by design: you graduate a capable generalist, and BLS lists civil, chemical, and general engineering degrees as routes into the same occupation.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            { name: "Mass & Energy Balances", detail: "The accounting backbone of the field: what enters a system, what leaves, and what accumulates. At Oregon State it sits in a core shared with chemical and bioengineering, and ABET criteria require it." },
            { name: "Fluid Mechanics & Hydraulics", detail: "How water moves through pipes, open channels, and the ground. The physics underneath every treatment plant, pump station, and storm drain." },
            { name: "Environmental Chemistry", detail: "Aqueous equilibrium, acid–base, redox, and reaction kinetics that govern how contaminants behave in water and soil. ABET criteria name stoichiometry, equilibrium, and kinetics, and Colorado State requires organic and environmental chemistry." },
            { name: "Fate & Transport of Contaminants", detail: "Modeling how a substance moves and transforms across air, water, and soil phases. ABET's environmental program criteria name fate and transport explicitly." },
            { name: "Water & Wastewater Treatment", detail: "Designing the unit-process train: screening, coagulation, sedimentation, filtration, disinfection, biological treatment. Oklahoma's program pairs it with air pollution control and solid and hazardous waste management." },
            { name: "Hydrology & Groundwater", detail: "Rainfall–runoff, watersheds, and aquifer flow. Colorado State lists hydrology among its required environmental-engineering courses." },
            { name: "Environmental Microbiology", detail: "The bacteria that run biological treatment, and the pathogens you're trying to kill in drinking water. ABET requires biological science, and Colorado State lists microbiology." },
            { name: "Thermodynamics", detail: "Energy and phase behavior. Oregon State's shared school core pairs thermodynamics with transport phenomena and senior-year unit operations." },
          ],
        },
        {
          title: "Fieldwork & Lab",
          icon: "🧪",
          items: [
            { name: "Water-quality sampling", detail: "Collecting and preserving samples without contaminating them. Unglamorous but central: BLS describes environmental engineers as working both in offices and in the field." },
            { name: "Analytical measurement", detail: "Turbidity, dissolved oxygen, BOD/COD, pH, and jar tests — learning to produce a number and to know when not to trust it." },
            { name: "Unit-process lab", detail: "Running bench-scale coagulation, filtration, and reactor experiments to connect the equations to real, messy performance." },
            { name: "Senior capstone design", detail: "A team design project: Oklahoma runs a two-semester sequence, Colorado State a year-long capstone, and Oregon State frames it as open-ended problems with economic, operational, and reliability constraints." },
          ],
        },
        {
          title: "Tools You'll Learn",
          icon: "🖥️",
          items: [
            { name: "AutoCAD / Civil 3D", detail: "Drafting site plans, pipe networks, and grading. AutoCAD appears in environmental software lists, and Payscale tracks Civil 3D as a skill for AECOM environmental engineers." },
            { name: "GIS (ArcGIS / QGIS)", detail: "Mapping contamination plumes, watersheds, and infrastructure. ArcGIS appears in environmental software lists, and Syracuse ESF lists geospatial engineering as an upper-level area." },
            { name: "EPANET & SWMM", detail: "Free EPA tools. EPANET models drinking-water pipe networks; SWMM models runoff and drainage and is used for flood-control design, combined sewer overflow reduction, and green infrastructure." },
            { name: "Environmental data software (EQuIS)", detail: "Site data such as samples, wells, and results is managed in dedicated databases. EQuIS appears in environmental software lists alongside ArcGIS, AutoCAD, MODFLOW, and R and Python." },
            { name: "Excel → Python / R", detail: "Python and R appear in environmental software lists and throughout the ML and digital-twin literature in the PhD section. No source measures how far scripting has replaced spreadsheets." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🎓",
          items: [
            { name: "Co-op / internship", detail: "BLS says some employers prefer candidates with internship or co-op experience, and schools such as Oregon State run co-op programs (MECOP)." },
            { name: "FE exam (become an EIT)", detail: "The Fundamentals of Engineering exam is the first step toward the PE license, and one licensing guide says it is often taken right after graduation. BLS does not require licensure for entry-level work." },
            { name: "WEF Student Design Competition", detail: "Individuals or teams design a solution to a water quality problem, starting at the Member Association level and ending at WEFTEC with Wastewater, Water Environment, and Circular Water Economy categories. Other societies were not researched." },
            { name: "Undergraduate research", detail: "Faculty labs work on topics such as ML-designed PFAS-filtering membranes (an Arizona State and Wisconsin-Madison example). Named REU programs were not researched." },
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
        "The undergraduate degree is broad, and the master's is where programs split into specializations such as treatment, air quality, remediation, and water resources. BLS lists a bachelor's as the typical entry credential, but Old Dominion says master's degrees are most often required for higher-level positions in industry and government. That is one program's statement, not a labor-market survey.",
      sections: [
        {
          title: "Degree Types",
          icon: "🎓",
          items: [
            { name: "Course-based MS (non-thesis)", detail: "Structures vary: Brown's non-thesis MS is eight courses, and Old Dominion's course option is 30 credit hours ending in a comprehensive exam. Part-time study is available at some programs." },
            { name: "Thesis MS", detail: "A research thesis and defense: Old Dominion's thesis option is 24 credit hours of coursework plus a 6-credit thesis, and Kansas's Option A is 30 hours including a 6 to 10 credit thesis and a final oral exam. Columbia offers an MS/PhD track for applicants who already plan a PhD." },
            { name: "Civil MS, environmental concentration", detail: "Some programs house environmental engineering inside civil: Ohio State's is an official specialization on the transcript, and Northeastern offers both a civil MS with a water and environmental concentration and a separate environmental MS. Compare curricula, not just titles." },
            { name: "Online / distance MS", detail: "Old Dominion lists a distance-learning MS in environmental engineering, and Columbia offers full-time and part-time options." },
          ],
        },
        {
          title: "Specializations",
          icon: "🔬",
          items: [
            { name: "Water & wastewater treatment", detail: "Advanced physical, chemical, and biological process design. A topic in nearly every program reviewed (Old Dominion, Northeastern, Brown, UW, Drexel)." },
            { name: "Site remediation & geoenvironmental", detail: "Soil and groundwater remediation, site characterization, and risk assessment (Brown). PFOA and PFOS remain CERCLA hazardous substances after EPA kept that designation in September 2025." },
            { name: "Air quality & atmospheric", detail: "Air pollution control engineering (Oklahoma), atmospheric air-quality impacts and indoor-environment control (Ohio State), and indoor air modeling (Drexel)." },
            { name: "Water resources & hydrology", detail: "Hydrology, stormwater, and river work (Kansas lists hydroclimatology and river ecohydraulics) and Columbia's Water Resources and Climate Risks specialization." },
            { name: "Sustainability & industrial ecology", detail: "Life-cycle assessment and climate change mitigation (Brown), and Columbia's Sustainable Energy and Sustainable Mining and Materials specializations." },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "⚙️",
          items: [
            { name: "Process modeling", detail: "Designing and optimizing whole treatment plants, not just single unit processes. ASCE's journal collection pairs mechanistic treatment models with data-driven tools. Specific commercial packages were not sourced." },
            { name: "Groundwater modeling", detail: "Predicting how a plume moves and how a cleanup will perform. MODFLOW appears in environmental software lists." },
            { name: "Air quality modeling", detail: "Indoor and atmospheric air modeling appear in program research areas (Drexel, Ohio State). Specific regulatory dispersion models were not sourced." },
            { name: "LCA & data tools", detail: "Life-cycle assessment (Brown) plus Python or R to quantify environmental impact and analyze field data. Specific LCA software was not sourced." },
          ],
        },
        {
          title: "Funding & Fit",
          icon: "💵",
          items: [
            { name: "Funding norms were not confirmed", detail: "The program pages reviewed do not state assistantship or tuition norms for the master's. Ask each program about funding, cost, and part-time options before applying." },
            { name: "Is a master's required?", detail: "BLS lists a bachelor's as typical entry-level education. Old Dominion says master's degrees are most often required for higher-level positions; no source quantified a pay premium." },
            { name: "Coming from outside engineering", detail: "Drexel requires extra undergraduate coursework for entrants without an ABET-accredited engineering bachelor's degree." },
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
        "A PhD is not required to practice. It is for people who want to develop the methods rather than apply them. Berkeley's program typically takes four to five years after the master's: coursework, a preliminary exam, a qualifying exam built around a written prospectus, then a dissertation.",
      sections: [
        {
          title: "What a PhD Looks Like",
          icon: "🎓",
          items: [
            { name: "Funding was not confirmed", detail: "The program pages reviewed do not describe PhD funding in detail (Berkeley names one outside source, Environmental Engineers of the Future). Get funding terms in writing before accepting an offer." },
            { name: "Preliminary and qualifying exams", detail: "Berkeley: an oral preliminary exam in the first year after the MS, then a qualifying exam near the end of the third year of graduate study with a roughly 10-page prospectus, a presentation, and an oral exam. UW: a week-long exam with a 48-hour written exam, a 48-hour paper critique, and an oral. Only one retake is allowed at UW." },
            { name: "The dissertation", detail: "At Berkeley a research adviser is required, and after you advance to candidacy a three-member dissertation committee (one member from outside the major) must read and approve the dissertation." },
            { name: "Advisor and committee", detail: "Both Berkeley and UW organize milestones around a research advisor and a faculty committee, so advisor fit matters. Berkeley bars the advisor from chairing the qualifying committee; at UW the advisor chairs it." },
          ],
        },
        {
          title: "Active Frontiers",
          icon: "🔬",
          items: [
            { name: "PFAS & emerging contaminants", detail: "Removing PFAS from water remains an active research area (see ML-designed membranes below). EPA's 4 ppt limits for PFOA and PFOS stand, but a May 2026 proposal would move the compliance deadline from 2029 to 2031 and rescind limits for four other PFAS." },
            { name: "Resource recovery from waste", detail: "Drexel lists microbial processes for energy and resource recovery from waste among its research areas, and UW lists resource recovery among its program areas." },
            { name: "ML-designed membranes", detail: "A 2025 Arizona State and Wisconsin-Madison study used machine learning, trained on literature and lab data and checked with molecular simulation, to speed discovery of membranes that filter PFAS from water." },
            { name: "Digital twins for treatment", detail: "Virtual replicas of treatment plants for real-time monitoring and predictive control. A review of 147 studies found output rising from one paper in 2015 to 41 in 2024." },
            { name: "Climate risk & water resources", detail: "Columbia's Water Resources and Climate Risks specialization and Kansas's hydroclimatology area (drought mechanisms and climate uncertainty) show programs organizing research around water and climate." },
            { name: "Energy and carbon in water systems", detail: "Ohio State lists energy production and use among its research areas, and a digital-twin case study lists energy among the benefits for treatment operations." },
          ],
        },
        {
          title: "Computation & AI",
          icon: "🤖",
          items: [
            { name: "The field is formalizing data methods", detail: "ASCE's Environmental and Water Resources Institute approved a Machine Learning and AI in Water Engineering task committee at the end of 2024." },
            { name: "Utility versus hype", detail: "Reviews describe growing digital-twin work alongside technical challenges and knowledge gaps, and researchers are studying adversarial attacks on AI water forecasting. No practitioner survey of real-world utility was found." },
            { name: "Fieldwork stays in person", detail: "BLS describes environmental engineers as working in offices and in the field. No source assessed how AI affects permitting or regulatory work." },
          ],
        },
        {
          title: "Beyond Academia",
          icon: "🏢",
          items: [
            { name: "National labs & federal research", detail: "UW notes alumni work as researchers in national laboratories. EPA announced in July 2025 that it would eliminate its Office of Research and Development (1,540 positions) and replace it with an Office of Applied Science and Environmental Solutions." },
            { name: "Industry research", detail: "Companies partner with universities on treatment technology: Beijing OriginWater worked with UNSW and Beijing University of Technology on ML digital twins. Which US employers hire environmental PhDs was not researched." },
            { name: "Faculty searches", detail: "Civil and environmental engineering departments posted faculty searches in 2025 to 2026 (for example USC, UCF, and UMass Amherst). No source quantified how competitive the tenure track is, so ask programs where their PhD graduates land." },
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
        "Engineering services and management, scientific, and technical consulting firms together employ about 43% of environmental engineers (24% and 19% in BLS data). Entry is through a bachelor's degree, and BLS notes some employers prefer internship or co-op experience. A PE license lets engineers sign off on projects and oversee others' work. BLS puts consulting's median at $101,840 and engineering services at $109,040; Payscale lists an average base near $75K for environmental engineers at one large consulting employer (self-reported).",
      salary: "BLS medians: $101,840 (consulting) · $109,040 (engineering services)",
    },
    {
      path: "Water & Wastewater Treatment",
      icon: "💧",
      color: T.sky,
      roles: ["Process Engineer", "Design Engineer", "Plant Engineer", "Utility Eng. Manager"],
      reality:
        "Designing treatment systems for consulting firms, or running the utilities that deliver drinking water and treat sewage. UW notes its alumni manage drinking-water and wastewater plants, and treatment appears in nearly every master's program reviewed. No source gave pay specific to treatment roles; the nearest BLS proxies are local government (7% of jobs, median $104,140) and engineering services (24% of jobs, median $109,040).",
      salary: "Nearest BLS medians: $104,140 (local gov.) · $109,040 (eng. services)",
    },
    {
      path: "Site Remediation & Geoenvironmental",
      icon: "⛏️",
      color: "#8a5a2b",
      roles: ["Field Engineer", "Remediation Engineer", "Risk Assessor", "Program Manager"],
      reality:
        "Investigating and cleaning up contaminated groundwater and soil; Brown lists site characterization, risk assessment, and soil and groundwater remediation among its master's topics. PFOA and PFOS remain CERCLA hazardous substances (EPA kept that designation in September 2025, and a D.C. Circuit challenge is pending). Federal drinking-water rules are shifting, though: a May 2026 proposal would extend the PFOA and PFOS compliance deadline from April 2029 to April 2031 and rescind limits on four other PFAS, while several states are adding their own PFAS rules. No source gave pay specific to remediation.",
      salary: "No path-specific data · BLS all env. engineers $69,990–$162,220 (10th–90th)",
    },
    {
      path: "Corporate EHS & Sustainability",
      icon: "🏭",
      color: T.signal,
      roles: ["EHS Engineer", "Compliance Engineer", "Sustainability Engineer", "EHS / ESG Manager"],
      reality:
        "Working inside manufacturers, energy and utility companies, and other industries to keep operations compliant. BLS shows manufacturing as the best-paid of the five largest industries (median $115,220, 7% of jobs). Self-reported Glassdoor data go further, putting energy, mining, and utilities near $150.8K in median total pay, but government data do not confirm a premium that large. Payscale's EHS engineer base pay spans about $64K to $120K (10th to 90th percentile).",
      salary: "BLS manufacturing median $115,220 · Payscale EHS base $64K–$120K (10th–90th)",
    },
    {
      path: "Government & Regulatory",
      icon: "🏛️",
      color: "#4a7a5c",
      roles: ["Staff Engineer", "Permit Engineer", "Program Engineer", "Supervisory Engineer"],
      reality:
        "State government is the second-largest employer of environmental engineers in BLS data (20% of jobs, median $102,160), and local government adds 7% (median $104,140). The BLS page shows no federal row; a secondary source puts the federal median near $120,830. Federal staffing is in flux: in July 2025 EPA announced it would cut more than 3,700 positions (nearly 23%, to 12,448) and eliminate its Office of Research and Development.",
      salary: "BLS medians: $102,160 (state) · $104,140 (local) · federal ~$120,830 (secondary)",
    },
    {
      path: "Water Resources & Climate Resilience",
      icon: "🌊",
      color: "#1b8ca0",
      roles: ["Water Resources Engineer", "Hydrologist", "Stormwater Engineer", "Resilience Planner"],
      reality:
        "Modeling watersheds and designing stormwater and flood-control systems. Programs list hydrology, stormwater, and climate-risk work (Columbia's Water Resources and Climate Risks specialization; Kansas's hydroclimatology area). EPA's SWMM is used for flood-control design, floodplain mapping (it is FEMA-approved for flood insurance studies), and combined sewer overflow reduction. No source gave pay specific to this path.",
      salary: "No path-specific data · BLS all env. engineers $69,990–$162,220 (10th–90th)",
    },
    {
      path: "Environmental Data & Modeling",
      icon: "📊",
      color: "#5a6ab8",
      roles: ["Environmental Modeler", "Data Scientist", "GIS Analyst", "Modeling Lead"],
      reality:
        "A growing research area rather than a measured job category. A review of 147 studies found digital-twin papers in the water sector rising from one in 2015 to 41 in 2024, and ASCE's water institute formed an ML and AI task committee at the end of 2024. Python, R, GIS, and data-management tools such as EQuIS appear in environmental software lists. Whether this is a distinct hiring track, and whether it pays a premium, was not confirmed.",
      salary: "No path-specific data · BLS all env. engineers $69,990–$162,220 (10th–90th)",
    },
    {
      path: "Research & Academia",
      icon: "🎓",
      color: T.deep,
      roles: ["PhD Researcher", "Postdoc", "Research Scientist", "Professor"],
      reality:
        "Requires a PhD; Berkeley's program typically runs four to five years after the master's. Civil and environmental engineering departments post faculty searches (USC, UCF, and UMass Amherst among those seen), but no source quantified tenure-track competitiveness or typical postdoc pay. Federal research hiring is unsettled after EPA's July 2025 decision to eliminate its Office of Research and Development. The salary figures shown come from a single CU Boulder posting for a geotechnical position, so they are indicative only.",
      salary: "One CU Boulder posting: Asst. $110K–$125K · Assoc. $125K–$150K · Prof. $145K–$200K",
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
export default function EnvironmentalEngineeringRoadmap({ summary } = {}) {
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
          The engineering of clean water, air, and soil. A small occupation that draws on civil, chemical, and environmental degrees alike: a bachelor's is the entry credential, and the PE license and a master's are what sources point to for senior work.
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
        {!summary && <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
          gap: 0, border: `1px solid ${T.line}`, borderRadius: 6,
          overflow: "hidden", background: T.surface,
        }}>
          {[
            { label: "BLS Median", value: "$107,110", color: T.water },
            { label: "Growth ’25–’35", value: "6%", color: T.sky },
            { label: "Openings / Year", value: "~2,300", color: T.deep },
            { label: "US Jobs (2025)", value: "39,100", color: T.signal },
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
        </div>}
      </header>

      {summary}

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
                Environmental engineering spans clean water, contaminated soil, air quality, and climate, and two points cut across nearly every path. BLS says licensure is not required for entry-level environmental engineers; the PE license matters later, for signing off on projects. And pay differences by industry are modest in BLS data (medians from about $102K to $115K across the five largest industries), while self-reported sites claim larger premiums in energy and utilities. Salary chips show the nearest sourced figure and say when none exists. Tap any card for details.
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
          Tap any item to expand · Data: BLS OOH (May 2025 wages, 2025 to 2035 projections), Payscale and Glassdoor 2026 (self-reported), university program pages · Sources in research/environmental-engineering-research.md
        </p>
      </footer>
    </div>
  );
}
