import { useState, useEffect } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
// Aesthetic: structural drawing / infrastructure blueprint. Warm concrete ground,
// deep structural steel-navy, hi-vis safety amber accent, truss/load-path motif.
const T = {
  bg:         "#e8e6e1",   // warm concrete gray
  paper:      "#f2f1ec",   // lighter panel
  surface:    "#faf9f6",   // card surface
  surfaceAlt: "#edece7",
  ink:        "#1c2530",   // structural ink (near-black steel)
  inkSoft:    "#3f4b58",
  line:       "#c3c0b8",   // drawing line
  lineSoft:   "#d6d3cb",

  steel:      "#1f3a54",   // deep structural steel-navy (primary)
  steelBright:"#2d5578",
  amber:      "#e08a1e",   // hi-vis safety amber (primary accent)
  amberSoft:  "rgba(224,138,30,0.12)",
  rust:       "#b0512e",   // weathered steel / rebar
  slateBlue:  "#4a6b8a",   // dimension blue
  green:      "#3f7a52",   // survey green
  slate:      "#5c6670",   // muted label
  muted:      "#8b9099",

  phaseColors: {
    undergrad: "#1f3a54",  // steel-navy — foundation
    masters:   "#b0512e",  // weathered rust — specialization
    phd:       "#3f7a52",  // survey green — research
  },

  fontDisplay: "'Oswald', 'Arial Narrow', sans-serif",
  fontMono:    "'Space Mono', 'IBM Plex Mono', monospace",
  fontBody:    "'DM Sans', system-ui, sans-serif",
};

function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ── Signature: structural truss / load-path diagram (SVG) ─────────────────────
function TrussDiagram() {
  // A Warren-style truss with dimension lines and load arrows — the load path
  // that defines structural civil engineering.
  return (
    <svg
      viewBox="0 0 720 130"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-hidden="true"
    >
      {/* Load arrows on top chord */}
      {[120, 240, 360, 480, 600].map((x) => (
        <g key={x}>
          <line x1={x} y1="6" x2={x} y2="34" stroke={T.amber} strokeWidth="2" />
          <path d={`M ${x - 4} 28 L ${x} 34 L ${x + 4} 28`} fill="none" stroke={T.amber} strokeWidth="2" />
        </g>
      ))}

      {/* Top chord */}
      <line x1="60" y1="40" x2="660" y2="40" stroke={T.steel} strokeWidth="3" />
      {/* Bottom chord */}
      <line x1="60" y1="92" x2="660" y2="92" stroke={T.steel} strokeWidth="3" />

      {/* Verticals + diagonals (Warren with verticals) */}
      {[60, 180, 300, 420, 540, 660].map((x) => (
        <line key={"v" + x} x1={x} y1="40" x2={x} y2="92" stroke={T.steel} strokeWidth="2" />
      ))}
      {/* Diagonals zig-zag */}
      {[
        [60, 92, 120, 40], [120, 40, 180, 92], [180, 92, 240, 40], [240, 40, 300, 92],
        [300, 92, 360, 40], [360, 40, 420, 92], [420, 92, 480, 40], [480, 40, 540, 92],
        [540, 92, 600, 40], [600, 40, 660, 92],
      ].map((d, i) => (
        <line key={"d" + i} x1={d[0]} y1={d[1]} x2={d[2]} y2={d[3]} stroke={T.slateBlue} strokeWidth="1.6" />
      ))}
      {/* Panel-point nodes */}
      {[
        [60, 40], [180, 40], [300, 40], [420, 40], [540, 40], [660, 40],
        [60, 92], [120, 92], [180, 92], [240, 92], [300, 92], [360, 92],
        [420, 92], [480, 92], [540, 92], [600, 92], [660, 92],
        [120, 40], [240, 40], [360, 40], [480, 40], [600, 40],
      ].map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill={T.surface} stroke={T.steel} strokeWidth="1.6" />
      ))}

      {/* Pin support (left) — triangle */}
      <path d="M 60 92 L 50 108 L 70 108 Z" fill="none" stroke={T.ink} strokeWidth="1.6" />
      <line x1="46" y1="108" x2="74" y2="108" stroke={T.ink} strokeWidth="1.6" />
      {/* Roller support (right) — triangle + circles */}
      <path d="M 660 92 L 650 106 L 670 106 Z" fill="none" stroke={T.ink} strokeWidth="1.6" />
      <circle cx="653" cy="110" r="2.4" fill="none" stroke={T.ink} strokeWidth="1.4" />
      <circle cx="667" cy="110" r="2.4" fill="none" stroke={T.ink} strokeWidth="1.4" />

      {/* Dimension line */}
      <line x1="60" y1="122" x2="660" y2="122" stroke={T.slate} strokeWidth="1" />
      <line x1="60" y1="118" x2="60" y2="126" stroke={T.slate} strokeWidth="1" />
      <line x1="660" y1="118" x2="660" y2="126" stroke={T.slate} strokeWidth="1" />
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
        "The BSCE is the foundation of everything that follows — and in civil engineering, the bachelor's genuinely launches a career, because the field is built around a licensure ladder rather than a graduate-degree gate. The single most important undergraduate move is to take the FE exam in your senior year while the material is fresh: passing it makes you an Engineer-in-Training and starts the clock toward the PE license that defines advancement in this field. Statics, mechanics of materials, and fluid mechanics are the core weeders; treat them as the load-bearing members of your degree.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "▲",
          items: [
            { name: "Statics", detail: "Forces, moments, equilibrium, trusses, and free-body diagrams — the true first course of civil engineering. Everything in structures and geotechnics rests on it; master free-body analysis or struggle downstream." },
            { name: "Mechanics of Materials (Strength of Materials)", detail: "Stress, strain, beam bending, torsion, buckling, and failure. How you determine whether a member carries its load — the analytical backbone of all structural design." },
            { name: "Structural Analysis", detail: "Determinate and indeterminate structures, moving loads, deflections, and matrix methods. The bridge from mechanics to real structural design; often paired with a computational lab." },
            { name: "Structural Design (Concrete & Steel)", detail: "Reinforced concrete and structural steel design to code (ACI, AISC). Where analysis becomes buildable structures — beams, columns, connections, and load combinations." },
            { name: "Soil Mechanics & Geotechnical Engineering", detail: "How soil and rock behave as engineering materials — bearing capacity, settlement, slope stability, earth pressure. Foundations, retaining walls, and dams all depend on it; a demanding, judgment-heavy subject." },
            { name: "Fluid Mechanics & Hydraulics", detail: "Fluid statics, Bernoulli, pipe and open-channel flow. A classic weeder that feeds hydrology, water resources, stormwater, and hydraulic-structure design." },
            { name: "Hydrology & Water Resources", detail: "Rainfall-runoff, watersheds, floods, and drainage design. Increasingly central given climate resilience, flood control, and aging water infrastructure." },
            { name: "Transportation Engineering", detail: "Highway geometry, traffic flow, pavement, and transit systems. One of the largest civil subfields, riding a wave of federal infrastructure funding." },
            { name: "Environmental Engineering", detail: "Water and wastewater treatment, water quality, and environmental systems. The overlap with public health and sustainability; a common civil-adjacent track." },
            { name: "Surveying & Construction Engineering", detail: "Measuring and laying out the built world, plus construction methods, scheduling, and site management. The hands-on, field-facing side of the discipline." },
            { name: "Senior Capstone Design", detail: "A two-semester team project designing a real bridge, building, site, or water system to codes and constraints — often with a professional mentor. The portfolio centerpiece and a taste of practice." },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "◧",
          items: [
            { name: "AutoCAD & Civil 3D", detail: "The drafting and site-design standard for civil work — grading, alignments, corridors, utilities. Civil 3D fluency is one of the most directly hireable practical skills on a civil résumé." },
            { name: "Structural Analysis Software", detail: "SAP2000, ETABS, RISA, or STAAD for modeling and analyzing structures. You learn the tools, but the real skill is judging whether the model's output makes physical sense." },
            { name: "Surveying & Site Layout", detail: "Total stations, GPS/GNSS, leveling, and increasingly drone survey. Translating design coordinates to the ground — the literal foundation of construction." },
            { name: "Geotechnical & Materials Testing", detail: "Soil classification, compaction, concrete and asphalt testing, load tests. Lab and field methods that connect design assumptions to real material behavior." },
            { name: "Codes & Standards Literacy", detail: "ACI, AISC, ASCE 7, IBC, AASHTO, and local codes. Design in civil engineering is code-governed; knowing how to navigate standards is core professional competence." },
            { name: "Hydraulic & Hydrologic Modeling", detail: "HEC-RAS, HEC-HMS, StormCAD, and EPA SWMM for flow, flood, and drainage analysis. Essential for water resources and site-development work." },
            { name: "Construction Documentation", detail: "Plans, specifications, quantity take-offs, and cost estimates. The deliverables that turn a design into a biddable, buildable project." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "▦",
          items: [
            { name: "AutoCAD Civil 3D", detail: "The dominant civil design platform — the tool most job postings name explicitly. Learn it deeply; it's the daily workspace for site, roadway, and utility design." },
            { name: "Revit & BIM", detail: "Building Information Modeling is now standard on major building and infrastructure projects. Revit skills increasingly separate competitive candidates in structural and vertical-construction work." },
            { name: "Structural & Hydraulic Software", detail: "SAP2000/ETABS/RISA (structures), HEC-RAS/SWMM (water). The analysis engines of the profession; introduced in upper-level courses and mastered in practice." },
            { name: "GIS (ArcGIS / QGIS)", detail: "Geographic Information Systems for spatial analysis, planning, and asset management. A rising, cross-cutting skill in transportation, water, and infrastructure planning." },
            { name: "Python for Civil Workflows", detail: "Increasingly used for automating calculations, processing survey and sensor data, and scripting design iterations. Not always in the curriculum — learn it as a differentiator." },
            { name: "AI in Design & Construction", detail: "AI is entering generative design, clash detection, construction-site computer vision (safety, progress monitoring), and predictive maintenance. It speeds workflows, but the licensed engineer who understands whether the output is sound — and stamps it — remains irreplaceable." },
            { name: "Digital Twins & Sensors", detail: "Instrumented bridges, buildings, and water systems feeding real-time models for monitoring and maintenance. A fast-growing frontier bridging design and asset operation." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "◆",
          items: [
            { name: "The FE Exam (do it senior year)", detail: "The Fundamentals of Engineering exam is the first gate to the PE license — a 6-hour NCEES test that earns you the Engineer-in-Training (EIT) credential. Take it in your final year while coursework is fresh; it's dramatically harder to pass years later. This is the single highest-leverage undergraduate action in civil." },
            { name: "Internships & Co-ops", detail: "Summer or co-op stints at consulting firms (AECOM, WSP, Stantec, Jacobs), contractors, or public agencies (DOTs, water utilities). Real project experience is what converts a degree into offers and starts your PE experience clock." },
            { name: "ASCE Student Chapter", detail: "The American Society of Civil Engineers student chapter — networking, conferences, and the flagship competitions. Leadership roles signal initiative to employers." },
            { name: "Concrete Canoe & Steel Bridge", detail: "ASCE's iconic team competitions — design, build, and race a concrete canoe or assemble a steel bridge against the clock. Beloved by recruiters as proof of hands-on structural and teamwork skill." },
            { name: "Public-Agency Exposure", detail: "Because civil work is largely public infrastructure, early exposure to how DOTs, cities, and utilities operate is uniquely valuable — many strong careers run through the public sector or serve it as consultants." },
            { name: "A Software or Data Edge", detail: "Layering GIS, Python, or BIM depth onto the civil core makes you stand out as the profession digitizes — and positions you for the smart-infrastructure and digital-twin work that's growing fastest." },
          ],
        },
      ],
    },

    {
      id: "masters",
      label: "Master's",
      years: "Years 5–6",
      color: T.phaseColors.masters,
      intro:
        "In civil engineering, the master's is common and increasingly expected for technical specialization — especially in structural and geotechnical work, where the analysis is deep and the liability is high. Many states are also moving toward requiring education beyond a bachelor's for licensure, and structural engineering in particular often expects an MS. The degree is a modest but real salary bump; more importantly, it's the technical depth that lets you own complex, high-consequence designs. It pairs with, rather than replaces, the PE license as the engine of advancement.",
      sections: [
        {
          title: "Program Types",
          icon: "▣",
          items: [
            { name: "Thesis (Research) MS", detail: "Original research under a faculty advisor, often funded via an assistantship. The route toward a PhD, research, or highly specialized analytical roles (seismic, advanced geotech). Typically 2 years." },
            { name: "Coursework / Professional MS (MEng)", detail: "Advanced coursework with a capstone or exam instead of a thesis, usually self-funded or employer-sponsored. The most common path — it deepens a specialization for practice without a research commitment. 1–2 years, often available part-time or online." },
            { name: "Structural Engineering MS", detail: "The most common reason civil engineers pursue a master's — advanced structural analysis, seismic and wind design, and the depth expected to become a structural engineer of record. Often effectively required in structural practice." },
            { name: "BS/MS & Online Programs", detail: "Many schools offer combined 4+1 tracks or respected online master's degrees (structural, geotech, transportation). Efficient ways to add depth, frequently while working with employer tuition support." },
          ],
        },
        {
          title: "Specializations",
          icon: "◈",
          items: [
            { name: "Structural Engineering", detail: "Buildings, bridges, and towers — advanced analysis, seismic and wind design, and the highest-liability, highest-paid civil track. Leads toward the SE (Structural Engineer) license in states that offer or require it." },
            { name: "Geotechnical Engineering", detail: "Soil and rock behavior, foundations, slopes, tunnels, and dams. A scarce, well-paid specialty — only about a fifth of civil PEs go geotech — with high consulting rates and deep technical demand." },
            { name: "Transportation Engineering", detail: "Highways, transit, traffic operations, and pavement. Riding the largest wave of federal infrastructure funding; strong demand and steady public-and-private work." },
            { name: "Water Resources & Hydraulics", detail: "Hydrology, hydraulics, flood control, stormwater, and dam safety. High-consequence work (flood and dam failure) with a small pool of qualified specialists; climate resilience is expanding it fast." },
            { name: "Environmental Engineering", detail: "Water and wastewater treatment, remediation, air quality, and permitting. Concentrated in municipalities and agencies; essential, mission-driven, with somewhat lower pay ceilings." },
            { name: "Construction Engineering & Management", detail: "Project delivery, scheduling, cost, and contracts on large builds. The path from technical design into project and program management — where the PMP credential and highest project-manager pay live." },
            { name: "Coastal & Climate Resilience", detail: "Sea-level rise, coastal protection, and resilient infrastructure — a rising cross-disciplinary specialty as climate adaptation drives major public investment." },
          ],
        },
        {
          title: "Licensure Ladder",
          icon: "◉",
          items: [
            { name: "FE → EIT (the first gate)", detail: "Pass the Fundamentals of Engineering exam (usually senior year) to become an Engineer-in-Training. This is the entry credential and starts your path to the PE." },
            { name: "Qualifying Experience (~4 years)", detail: "Work under a licensed PE, typically for about four years, gaining progressive engineering responsibility. This supervised experience is a hard requirement for licensure — which is why the public-agency and consulting apprenticeship model matters." },
            { name: "PE License (the career-defining credential)", detail: "Pass the 8-hour discipline-specific PE exam (structural, geotechnical, transportation, water resources, or construction). Only a PE can sign and seal drawings and take legal responsibility for public work — and it lifts pay by roughly $15K–$40K. In civil, the PE is close to mandatory for advancement, unlike most other engineering fields." },
            { name: "SE License (advanced structural)", detail: "A separate, more rigorous Structural Engineer license required or preferred in some states for major structures. The pinnacle credential for high-rise and long-span structural practice." },
            { name: "PMP & Specialty Certifications", detail: "The Project Management Professional credential and niche certifications (LEED, ENV SP, dam safety) stack on top of the PE to unlock project-management pay and specialized authority." },
          ],
        },
        {
          title: "Advanced Tools",
          icon: "⬡",
          items: [
            { name: "Advanced Structural (ETABS, SAP2000, ABAQUS)", detail: "Nonlinear, dynamic, and seismic analysis of complex structures. The deep-analysis toolset that a structural master's builds — and that high-liability projects demand." },
            { name: "Geotechnical Modeling (PLAXIS, GeoStudio)", detail: "Finite-element soil-structure interaction, slope stability, and consolidation analysis. Specialized tools for the geotechnical track." },
            { name: "Advanced Hydraulics (HEC-RAS 2D, MIKE)", detail: "Two-dimensional flood modeling and complex hydraulic simulation for floodplains, dams, and coastal systems. Core to modern water-resources practice." },
            { name: "BIM Coordination (Revit, Navisworks)", detail: "Model-based design and clash detection across disciplines on major projects. Increasingly the collaboration backbone of large infrastructure delivery." },
            { name: "GIS & Remote Sensing", detail: "ArcGIS Pro, LiDAR, and drone-derived data for corridor planning, asset management, and large-scale site analysis. A growing analytical layer across specialties." },
            { name: "Python & Computational Design", detail: "Scripting parametric design, automating code checks, and processing sensor/survey data. The programmable edge that scales an engineer's judgment." },
          ],
        },
      ],
    },

    {
      id: "phd",
      label: "PhD / Research",
      years: "Years 6–11",
      color: T.phaseColors.phd,
      intro:
        "The civil engineering PhD is typically funded (research and teaching assistantships cover tuition and a stipend) and runs ~4–5 years past the bachelor's. It's a smaller path than in many engineering fields, because civil careers are defined by licensure and practice rather than research credentials. Pursue it for a specific reason: a faculty position, a national-lab or agency research role, or frontier R&D in resilient infrastructure, advanced materials, or smart-city systems. For most design and consulting careers, the PE plus experience outpaces the PhD — but for advancing the science of infrastructure, it's the entry ticket.",
      sections: [
        {
          title: "How It Works",
          icon: "◎",
          items: [
            { name: "Coursework & Qualifying Exam", detail: "One to two years of advanced coursework in your specialty, then a qualifying exam testing depth and research readiness. The filter between coursework and independent research." },
            { name: "Candidacy & Proposal", detail: "A formal dissertation proposal and defense advancing you to candidacy — you demonstrate an original, viable research direction, often tied to grant-funded lab work." },
            { name: "Dissertation & Defense", detail: "Three to four years of original research — experimental (structures labs, geotech testing, flumes) or computational — producing several publications and a public defense. The advisor and lab shape the entire experience; choose deliberately." },
            { name: "Funding Model", detail: "Research assistantships (from your advisor's grants — often NSF, DOT, or agency funded), teaching assistantships, and fellowships cover tuition and a stipend. Civil research is frequently tied to public infrastructure funding streams." },
            { name: "Keep the PE in View", detail: "Even on a research path, many civil PhDs still pursue the PE — it confers credibility, enables practice and consulting, and is often expected for faculty who teach design. The license and the doctorate reinforce each other." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "✳",
          items: [
            { name: "Resilient & Climate-Adaptive Infrastructure", detail: "Designing structures and systems to withstand floods, wildfire, heat, and sea-level rise. A defining frontier as climate change reshapes what infrastructure must endure — and a major public-funding priority." },
            { name: "Smart Infrastructure & Digital Twins", detail: "Instrumented bridges, buildings, and networks paired with real-time computational models for monitoring, prediction, and maintenance. The construction digital-twin market is projected to grow into the tens of billions by 2030." },
            { name: "Sustainable & Low-Carbon Materials", detail: "Low-carbon concrete, engineered timber (mass timber), recycled and self-healing materials. Reducing the enormous carbon footprint of construction is a central research thrust." },
            { name: "Structural Health Monitoring & Sensing", detail: "Sensor networks and computer vision that detect damage and fatigue in aging structures. Directly responsive to the infrastructure-condition crisis." },
            { name: "Seismic & Extreme-Event Engineering", detail: "Performance-based earthquake, wind, and blast design; large-scale shake-table and hazard research. High-consequence work protecting life safety in disasters." },
            { name: "Construction Robotics & Automation", detail: "Autonomous equipment, 3D-printed structures, and robotic site work addressing labor shortages and safety. An emerging convergence of civil, mechanical, and computing." },
            { name: "AI for Design, Planning & Operations", detail: "Machine learning for generative design, traffic and hydraulic prediction, and infrastructure asset management across the full lifecycle. Reshaping how civil systems are planned and maintained." },
            { name: "Water Systems & Urban Sustainability", detail: "Green stormwater infrastructure, water reuse, and integrated urban water and transportation systems. Research at the intersection of engineering, ecology, and public health." },
          ],
        },
        {
          title: "AI in Civil Research",
          icon: "◐",
          items: [
            { name: "Generative & Optimized Design", detail: "Algorithms that generate structural and site layouts optimized for cost, material, and performance. Useful for exploring options — but code compliance, constructability, and the engineer's seal remain human responsibilities." },
            { name: "Computer Vision on Site", detail: "Automated detection of workers, equipment, defects, and progress from cameras and drones — improving safety and schedule control. One of the most active applied-AI areas in construction." },
            { name: "Predictive Asset Management", detail: "ML models forecasting deterioration in bridges, pavements, and pipes to prioritize maintenance under tight public budgets. Directly addresses the aging-infrastructure problem." },
            { name: "Surrogate Models for Simulation", detail: "ML approximations of expensive structural, hydraulic, and geotechnical simulations, enabling faster analysis and real-time digital twins." },
            { name: "Automation Risk: Low, Anchored by Licensure", detail: "Civil engineering is among the most automation-resistant fields — because a licensed PE must take legal responsibility for public-safety-critical work, and because so much of the job is field judgment, coordination, and physical-world problem-solving. AI automates routine drafting and analysis; it does not stamp drawings or stand behind a bridge." },
          ],
        },
        {
          title: "After the PhD",
          icon: "▦",
          items: [
            { name: "Academic Faculty", detail: "Tenure-track positions teaching and running research labs, competitive but less saturated than some fields. Many civil faculty hold the PE and blend research with practice-informed teaching. Starting ~$90K–$115K (9-month), rising with rank and grants." },
            { name: "National Labs & Federal Agencies", detail: "Research and technical roles at national labs, the Army Corps of Engineers, DOTs, FHWA, and NIST — shaping infrastructure standards, hazard research, and public works at scale. Stable, mission-driven, often clearance-adjacent." },
            { name: "Industry R&D & Specialized Consulting", detail: "Advanced-analysis and forensic roles at major firms, materials companies, and specialty consultancies. A PhD opens high-end seismic, forensic, and computational-design work — and forensic engineering (failure investigation) pays a premium." },
            { name: "Leadership & Technical Fellow Tracks", detail: "Principal engineer, technical fellow, and firm-leadership roles where deep expertise plus the PE positions you to own the most complex, high-stakes projects and set technical direction." },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Structural Engineering",
      icon: "🏗",
      color: T.steel,
      roles: ["Structural Engineer", "Project Engineer", "Sr. Structural Engineer", "Engineer of Record (PE/SE)", "Principal"],
      reality:
        "Designing buildings, bridges, and towers — the highest-paid and highest-liability civil track, because every stamped calculation stands behind public safety. A master's is often effectively expected, and the PE (plus the more rigorous SE license in some states) is the gate to becoming an engineer of record. Pay runs from ~$70K entry to $130K–$160K+ for licensed senior engineers and principals, with the strongest premiums on complex high-rise, long-span, and seismic work. Consulting firms (AECOM, WSP, Thornton Tomasetti) compete hard for licensed structural talent.",
      salary: "$70K – $160K+ (PE/SE drives the ceiling)",
    },
    {
      path: "Geotechnical Engineering",
      icon: "⛰",
      color: T.rust,
      roles: ["Geotechnical Engineer", "Project Engineer", "Sr. Geotechnical Engineer", "Geotechnical PE", "Principal"],
      reality:
        "The soil-and-rock foundation of everything built — bearing capacity, slopes, retaining walls, tunnels, and dams. A scarce specialty: only about a fifth of civil PEs go geotechnical, which supports strong pay and high consulting rates ($150–$300/hour for licensed specialists). Registered geotechnical engineers report medians near $100K–$110K, higher with dam, tunnel, or offshore experience. High-consequence, judgment-intensive work with a small qualified pool — a durable, well-compensated niche.",
      salary: "$75K – $150K+ (scarce specialty premium)",
    },
    {
      path: "Transportation Engineering",
      icon: "🛣",
      color: T.slateBlue,
      roles: ["Transportation Engineer", "Traffic Engineer", "Sr. Transportation Engineer", "PE / Project Manager", "Program Manager"],
      reality:
        "Highways, transit, traffic operations, and pavement — the largest civil subfield, and the one riding the biggest wave of federal money. The $1.2 trillion Infrastructure Investment and Jobs Act has state DOTs awarding more work than firms can staff, tightening the market for experienced, PE-licensed transportation engineers and pushing salaries up. Pay runs ~$68K entry to $120K–$140K+ for senior and PM roles. Steady, distributed demand across public agencies and consulting firms nationwide.",
      salary: "$68K – $140K+ (infrastructure-boom demand)",
    },
    {
      path: "Water Resources & Environmental",
      icon: "💧",
      color: T.green,
      roles: ["Water Resources Engineer", "Environmental Engineer", "Hydraulic Engineer", "Sr. WRE / PE", "Practice Lead"],
      reality:
        "Hydrology, hydraulics, flood control, stormwater, and water/wastewater treatment — essential, mission-driven work increasingly urgent under climate change. Dam-safety and flood-control specialists earn strong pay given the high-consequence, small-pool nature of the work; environmental and municipal roles pay somewhat less, concentrated in agencies and utilities. Pay generally runs ~$68K–$125K. Climate resilience and aging water infrastructure are expanding demand meaningfully.",
      salary: "$68K – $130K (resilience-driven growth)",
    },
    {
      path: "Construction Management",
      icon: "👷",
      color: T.amber,
      roles: ["Field/Project Engineer", "Construction Manager", "Sr. Project Manager", "Program Manager", "Director of Construction"],
      reality:
        "Delivering the built project — scheduling, cost control, contracts, and site leadership on multimillion-dollar builds. The path from technical design into management, where project managers command the highest premiums due to contract-level responsibility for large budgets. PMs with a PMP often earn $110K–$140K+, and overtime and project bonuses can add $10K–$25K. Strong demand across contractors, consultancies, and owners; the PE plus PMP is a powerful combination.",
      salary: "$75K – $150K+ (PM premium + bonuses)",
    },
    {
      path: "Public Sector / Government",
      icon: "🏛",
      color: "#5a6670",
      roles: ["Staff Engineer", "Project Engineer (DOT/City)", "Sr. Engineer", "Engineering Manager", "City/County Engineer"],
      reality:
        "State DOTs, city and county agencies, water utilities, and federal bodies (Army Corps, FHWA) — the owner's side of infrastructure. Base salaries typically run 10–20% below private consulting, but total compensation is often competitive once you count defined-benefit pensions (worth $500K–$1M+ in retirement value), stability, and work-life balance. Agencies have raised pay to compete amid the infrastructure boom. A stable, mission-driven career with strong benefits and a direct hand in public works.",
      salary: "$70K – $130K + pension value",
    },
    {
      path: "Land Development / Site Civil",
      icon: "🧭",
      color: "#7a6a2e",
      roles: ["Site/Land Development Engineer", "Civil Designer", "Project Engineer", "Sr. Site Engineer", "Development PE"],
      reality:
        "Turning raw land into buildable sites — grading, drainage, utilities, permitting, and entitlements for residential, commercial, and industrial projects. Civil 3D-heavy, permitting-intensive, and closely tied to real-estate and construction cycles (a source of both opportunity and volatility). Pay runs ~$68K–$125K, higher with a PE and strong agency-permitting experience. A broad, accessible entry point with clear paths into project management and firm ownership.",
      salary: "$68K – $125K (cycle-sensitive)",
    },
    {
      path: "Academia & Research",
      icon: "🔬",
      color: "#3f7a52",
      roles: ["PhD Researcher", "Postdoc", "Research Engineer", "Assistant → Full Professor", "National Lab Scientist"],
      reality:
        "The PhD-gated path — running a lab and advancing the science of resilient infrastructure, materials, or smart systems at universities, national labs, or federal agencies (NIST, Army Corps, DOTs). Less saturated than some engineering fields, and many faculty also hold the PE to teach design and consult. Faculty start ~$90K–$115K (9-month), rising with rank and grants; forensic and specialized-consulting offshoots pay premiums. The reward is shaping how the built world is designed and kept safe.",
      salary: "$60K postdoc → $150K+ tenured",
    },
  ],
};

// ── Expandable Item ───────────────────────────────────────────────────────────
function ExpandableItem({ item, idx, expanded, onToggle, accent }) {
  const isOpen = expanded === idx;
  return (
    <div
      onClick={() => onToggle(isOpen ? null : idx)}
      style={{
        background: isOpen ? T.surface : T.paper,
        border: `1px solid ${isOpen ? accent : T.line}`,
        borderLeft: `3px solid ${isOpen ? accent : T.line}`,
        borderRadius: 3,
        padding: "12px 15px",
        cursor: "pointer",
        marginBottom: 6,
        transition: "background 0.16s, border-color 0.16s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{
          fontFamily: T.fontBody,
          fontSize: 14.5,
          fontWeight: 600,
          color: isOpen ? accent : T.ink,
          lineHeight: 1.35,
        }}>
          {item.name}
        </span>
        <span style={{
          fontFamily: T.fontMono,
          fontSize: 13,
          color: isOpen ? accent : T.muted,
          flexShrink: 0,
        }}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <p style={{
          marginTop: 9,
          marginBottom: 0,
          fontFamily: T.fontBody,
          fontSize: 13.5,
          color: T.inkSoft,
          lineHeight: 1.65,
          borderTop: `1px solid ${T.lineSoft}`,
          paddingTop: 9,
        }}>
          {item.detail}
        </p>
      )}
    </div>
  );
}

// ── Career Card ───────────────────────────────────────────────────────────────
function CareerCard({ career, expanded, onToggle }) {
  const isOpen = expanded === career.path;
  return (
    <div
      onClick={() => onToggle(isOpen ? null : career.path)}
      style={{
        background: T.surface,
        border: `1px solid ${isOpen ? career.color : T.line}`,
        borderTop: `3px solid ${career.color}`,
        borderRadius: 3,
        padding: "17px 19px",
        cursor: "pointer",
        transition: "border-color 0.16s, box-shadow 0.16s",
        boxShadow: isOpen ? `0 6px 20px -12px ${career.color}99` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 12 }}>
        <span style={{ fontSize: 21 }}>{career.icon}</span>
        <span style={{
          fontFamily: T.fontDisplay,
          fontWeight: 600,
          fontSize: 17,
          color: career.color,
          lineHeight: 1.15,
          textTransform: "uppercase",
          letterSpacing: "0.01em",
        }}>
          {career.path}
        </span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
        {career.roles.map((r) => (
          <span key={r} style={{
            fontFamily: T.fontMono,
            fontSize: 10,
            color: career.color,
            background: career.color + "14",
            border: `1px solid ${career.color}30`,
            borderRadius: 2,
            padding: "2px 7px",
          }}>
            {r}
          </span>
        ))}
      </div>

      <div style={{
        fontFamily: T.fontMono,
        fontSize: 11.5,
        fontWeight: 700,
        color: T.rust,
        background: "rgba(176,81,46,0.10)",
        border: `1px solid ${T.rust}3a`,
        borderRadius: 2,
        padding: "5px 10px",
        display: "inline-block",
        marginBottom: isOpen ? 13 : 0,
      }}>
        {career.salary}
      </div>

      {isOpen && (
        <p style={{
          borderTop: `1px solid ${T.lineSoft}`,
          paddingTop: 13,
          margin: 0,
          fontFamily: T.fontBody,
          fontSize: 13.5,
          color: T.inkSoft,
          lineHeight: 1.68,
        }}>
          {career.reality}
        </p>
      )}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function CivilEngineeringRoadmap() {
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
    <div style={{
      minHeight: "100vh",
      background: T.bg,
      fontFamily: T.fontBody,
      color: T.ink,
    }}>
      <FontLoader />

      {/* ── Header ── */}
      <header style={{ maxWidth: 880, margin: "0 auto", padding: "38px 24px 0" }}>
        <div style={{
          fontFamily: T.fontMono,
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: T.rust,
          marginBottom: 16,
        }}>
          Career Roadmap · USA · 2026
        </div>

        <h1 style={{
          fontFamily: T.fontDisplay,
          fontWeight: 700,
          fontSize: "clamp(34px, 7vw, 58px)",
          color: T.ink,
          margin: 0,
          letterSpacing: "0.005em",
          lineHeight: 0.98,
          textTransform: "uppercase",
        }}>
          Civil<br/>Engineering
        </h1>

        <p style={{
          fontFamily: T.fontBody,
          fontSize: 15.5,
          color: T.slate,
          marginTop: 14,
          marginBottom: 20,
          maxWidth: 560,
          lineHeight: 1.55,
        }}>
          The discipline that builds and maintains the public world — bridges, roads, water, and structures. The one engineering field where a license, not a graduate degree, is the true gate to advancement.
        </p>

        {/* Truss signature */}
        <div style={{
          border: `1px solid ${T.line}`,
          borderRadius: 4,
          background: T.paper,
          padding: "14px 16px 8px",
          marginBottom: 22,
        }}>
          <TrussDiagram />
          <div style={{
            fontFamily: T.fontMono, fontSize: 9, color: T.muted,
            letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4,
            display: "flex", justifyContent: "space-between",
          }}>
            <span>Load path · pin + roller supports</span>
            <span>Fig. 1</span>
          </div>
        </div>

        {/* Stat strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
          gap: 0,
          border: `1px solid ${T.line}`,
          borderRadius: 4,
          overflow: "hidden",
          background: T.surface,
        }}>
          {[
            { label: "BLS Median", value: "$99,590", color: T.steel },
            { label: "PE License Premium", value: "+$15K–40K", color: T.amber },
            { label: "Openings / Year", value: "~23,600", color: T.slateBlue },
            { label: "Job Growth ’24–’34", value: "5%", color: T.green },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: "12px 15px",
              borderRight: i < 3 ? `1px solid ${T.line}` : "none",
              borderBottom: `3px solid ${s.color}`,
            }}>
              <div style={{ fontFamily: T.fontMono, fontSize: 14.5, fontWeight: 700, color: T.ink }}>
                {s.value}
              </div>
              <div style={{ fontFamily: T.fontMono, fontSize: 8.5, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 3 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* ── Nav ── */}
      <nav style={{
        position: "sticky",
        top: 0,
        background: "rgba(232,230,225,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${T.line}`,
        zIndex: 10,
        padding: "0 24px",
        marginTop: 26,
      }}>
        <div style={{
          maxWidth: 880,
          margin: "0 auto",
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}>
          {data.phases.map((p) => {
            const active = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handlePhaseChange(p.id)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: active ? `3px solid ${p.color}` : "3px solid transparent",
                  padding: "14px 16px",
                  cursor: "pointer",
                  fontFamily: T.fontDisplay,
                  fontWeight: active ? 600 : 500,
                  fontSize: 14,
                  color: active ? p.color : T.slate,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {p.label}
                <span style={{
                  fontFamily: T.fontMono, fontSize: 9, marginLeft: 6,
                  opacity: 0.6, color: active ? p.color : T.muted,
                  textTransform: "none", letterSpacing: 0,
                }}>
                  {p.years}
                </span>
              </button>
            );
          })}
          <button
            onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
            style={{
              background: "none",
              border: "none",
              borderBottom: showCareers ? `3px solid ${T.rust}` : "3px solid transparent",
              padding: "14px 16px",
              cursor: "pointer",
              fontFamily: T.fontDisplay,
              fontWeight: showCareers ? 600 : 500,
              fontSize: 14,
              color: showCareers ? T.rust : T.slate,
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
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
                lineHeight: 1.7, margin: 0, maxWidth: 690,
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
                      borderRadius: 3,
                      padding: "8px 14px",
                      cursor: "pointer",
                      fontFamily: T.fontBody, fontSize: 12.5,
                      fontWeight: active ? 600 : 500,
                      color: active ? "#fff" : T.slate,
                      whiteSpace: "nowrap",
                      transition: "all 0.15s",
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
                fontFamily: T.fontMono, fontSize: 10, color: T.rust,
                letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 11,
              }}>
                8 Career Destinations
              </div>
              <p style={{
                fontFamily: T.fontBody, fontSize: 14.5, color: T.inkSoft,
                lineHeight: 1.7, margin: 0, maxWidth: 690,
                borderLeft: `3px solid ${T.rust}`, paddingLeft: 15,
              }}>
                Civil engineering spans the entire built environment, but one thread runs through nearly every path: the PE license. It gates advancement, lifts pay by $15K–$40K, and — because a licensed engineer must legally stand behind public-safety work — makes the field one of the most stable and automation-resistant in engineering. Tap any card for the honest picture.
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
        borderTop: `1px solid ${T.line}`,
        padding: "16px 24px",
        textAlign: "center",
        background: T.paper,
      }}>
        <p style={{
          fontFamily: T.fontMono, fontSize: 10, color: T.muted,
          margin: 0, letterSpacing: "0.05em",
        }}>
          Tap any item to expand · Salary data: BLS May 2024, ASCE 2024–25 Salary Report, industry sources 2026 · Figures are indicative ranges
        </p>
      </footer>
    </div>
  );
}
