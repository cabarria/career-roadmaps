import { useState, useEffect, useRef } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
// Aesthetic: technical drafting / CAD blueprint. Cool drafting-paper ground,
// steel-blue structure, machined-orange accent, engineering-annotation mono type.
const T = {
  bg:         "#eef1f4",   // cool drafting paper
  paper:      "#f7f9fb",   // lighter panel
  surface:    "#ffffff",   // card surface
  surfaceAlt: "#f2f5f8",   // alt surface
  ink:        "#1a2430",   // near-black steel ink
  inkSoft:    "#3d4a5a",   // softer ink
  line:       "#c4cfda",   // blueprint line
  lineSoft:   "#dbe3ec",   // faint construction line

  steel:      "#1e3a5f",   // deep steel blue (primary structure)
  steelBright:"#2c5c94",   // brighter steel
  orange:     "#d9622b",   // machined / anodized orange (primary accent)
  orangeSoft: "rgba(217,98,43,0.10)",
  brass:      "#b08442",   // brass/bronze
  teal:       "#2b7c7c",   // patina teal
  slate:      "#5a6b7d",   // muted label
  muted:      "#8a97a6",

  phaseColors: {
    undergrad: "#d9622b",  // orange — foundational heat
    masters:   "#1e3a5f",  // steel blue — specialization
    phd:       "#2b7c7c",  // teal — research frontier
  },

  fontDisplay: "'Archivo', 'Archivo Narrow', sans-serif",
  fontMono:    "'Spline Sans Mono', 'IBM Plex Mono', monospace",
  fontBody:    "'Archivo', system-ui, sans-serif",
};

function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Archivo+Narrow:wght@500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ── Signature: isometric CAD construction grid with dimension ticks ───────────
function CadGrid() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, W, H);
    const STEP = 32;

    // Fine construction grid
    ctx.strokeStyle = "rgba(30,58,95,0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += STEP) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += STEP) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Heavier major grid every 4 units
    ctx.strokeStyle = "rgba(30,58,95,0.08)";
    for (let x = 0; x <= W; x += STEP * 4) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += STEP * 4) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
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
        "The BSME is the broadest engineering degree — a rigorous, ABET-accredited grounding in how physical systems move, deform, carry heat, and get built. Thermodynamics, fluid mechanics, and dynamics are the near-universal weeder courses; they're where students discover whether they think like mechanical engineers. Unlike many fields, the bachelor's alone is fully employable: get one or two internships and a hands-on team project, and you graduate job-ready.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "⚙︎",
          items: [
            { name: "Statics", detail: "Forces, moments, equilibrium, trusses, friction. The first true ME course — everything in structures and machine design builds on free-body diagrams. Conceptually simple, but it teaches the discipline of rigorous force accounting." },
            { name: "Dynamics", detail: "Kinematics and kinetics of particles and rigid bodies, rotation, vibration. A classic weeder — the jump from static to moving systems trips up many students. Foundation for robotics, vehicle dynamics, and mechanism design." },
            { name: "Thermodynamics", detail: "Energy, entropy, heat engines, cycles, the laws that govern all energy conversion. Widely cited as the hardest ME course — abstract and counterintuitive. Gateway to engines, HVAC, power generation, and energy systems." },
            { name: "Fluid Mechanics", detail: "Fluid statics, Bernoulli, Navier–Stokes, boundary layers, drag and lift. The other notorious weeder; combines difficult math with non-intuitive physics. Essential for aerodynamics, turbomachinery, and thermal-fluid careers." },
            { name: "Heat Transfer", detail: "Conduction, convection, radiation, heat exchangers. Builds on thermo and fluids; increasingly central given data-center and electronics thermal management demand." },
            { name: "Mechanics of Materials (Solid Mechanics)", detail: "Stress, strain, beam bending, torsion, buckling, failure criteria. The analytical backbone of machine and structural design — how you know whether a part will break." },
            { name: "Machine Design", detail: "Applying solid mechanics to real components — shafts, gears, bearings, fasteners, fatigue. Where analysis becomes design; often paired with a semester design project." },
            { name: "Materials Science", detail: "Crystal structure, phase diagrams, mechanical properties, metals/polymers/composites. Determines what you can build things from and how they'll behave and fail." },
            { name: "Manufacturing Processes", detail: "Machining, casting, welding, forming, and increasingly additive manufacturing. Connects design intent to how parts actually get made — and what things cost." },
            { name: "Controls & Mechatronics", detail: "Feedback control, sensors, actuators, microcontrollers, system modeling. The bridge to robotics and automation; where ME meets electrical and software." },
            { name: "Senior Capstone Design", detail: "A two-semester team project building a real system to real specs — the portfolio centerpiece. Integrates CAD, analysis, manufacturing, and testing. Choose an ambitious, well-scoped project you can explain end to end." },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "◧",
          items: [
            { name: "CAD Modeling (SolidWorks / Creo / NX)", detail: "Parametric 3D modeling, assemblies, drawings. SolidWorks is the most common teaching tool; fluency here is the single most expected practical skill on an ME résumé." },
            { name: "GD&T (Geometric Dimensioning & Tolerancing)", detail: "The engineering language for specifying part geometry and tolerances on drawings. Underappreciated by students but essential in any manufacturing or product-design role." },
            { name: "Machine Shop & Fabrication", detail: "Lathe, mill, drill press, welding, 3D printing, basic CNC. Physical shop skills give you design intuition that pure-CAD engineers lack — you learn what's actually manufacturable." },
            { name: "FEA (Finite Element Analysis)", detail: "Simulating stress, deflection, and thermal behavior in ANSYS or SolidWorks Simulation. Powerful but dangerous without judgment — knowing when a result is garbage is the real skill." },
            { name: "Prototyping & Hands-On Iteration", detail: "Rapid prototyping, tolerancing for fit, design-for-assembly. Build-test-iterate loops on real hardware separate strong ME graduates from those who only simulate." },
            { name: "Instrumentation & Testing", detail: "Strain gauges, thermocouples, load cells, data acquisition, dynamometers. Experimental methods and knowing how to validate a design against physical measurement." },
            { name: "MATLAB / Simulink", detail: "Numerical analysis, control-system modeling, data processing. The standard computational tool taught across ME; used for everything from vibration analysis to controls." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "▤",
          items: [
            { name: "SolidWorks", detail: "The dominant CAD package in ME education and much of industry. Learn it deeply — assemblies, drawings, and simulation add-ons. Many employers list it explicitly." },
            { name: "ANSYS (Mechanical / Fluent)", detail: "Industry-standard FEA and CFD. Mechanical for structural/thermal, Fluent for fluid flow. Introduced late undergrad; mastered in grad school and industry." },
            { name: "MATLAB / Simulink", detail: "The computational and controls workhorse. Simulink block-diagram modeling is standard for dynamic systems and mechatronics." },
            { name: "Python (NumPy / SciPy)", detail: "Increasingly the scripting language of choice for data analysis, automation, and ML integration. Not always required by the curriculum — learn it anyway; it's a differentiator." },
            { name: "Generative Design (Autodesk Fusion)", detail: "AI-driven topology optimization that proposes organic, mass-optimized geometries from load constraints. Real and useful for lightweighting (especially with additive manufacturing) — but outputs still need engineering judgment to be manufacturable." },
            { name: "AI Coding & Simulation Assistants", detail: "AI helps write analysis scripts, set up simulations, and draft calculations. Genuinely useful for boilerplate — but AI confidently produces wrong engineering numbers, so verify against first principles." },
            { name: "CAM & 3D Printing Software", detail: "Toolpath generation for CNC (Fusion CAM) and slicers for additive. The link between your CAD model and a physical part." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "◆",
          items: [
            { name: "Formula SAE / Baja SAE", detail: "Build and race a car from scratch — the single most valued ME extracurricular. Real subteams for powertrain, suspension, chassis, aero. Recruiters at automotive and motorsport companies look for it by name; leadership on a subteam is résumé gold." },
            { name: "Engineering Internships & Co-ops", detail: "Target automotive OEMs, aerospace primes, energy companies, and product firms. One or two internships transform your résumé. Co-op programs (Georgia Tech, Northeastern, Cincinnati) can yield 3–4 rotations and often convert to full-time offers." },
            { name: "NSF REU Programs", detail: "Paid summer research (~$6,000–$8,000 stipend for 10 weeks, often with housing). Apply sophomore/junior year if you're considering grad school; strongly boosts PhD admissions." },
            { name: "ASME Student Section", detail: "The American Society of Mechanical Engineers — student membership, design competitions (Human Powered Vehicle, student design challenge), conferences, and networking. Officer roles signal initiative." },
            { name: "Robotics & Rocketry Teams", detail: "Combat robotics, autonomous robots, and collegiate rocketry (Spaceport America Cup) build mechatronics and systems-integration experience directly relevant to robotics and aerospace employers." },
            { name: "Hands-On Portfolio", detail: "Documented personal builds — a CNC machine, a drone, a restored engine — with CAD files, analysis, and photos on a personal site or GitHub. Depth beats breadth; one project you can defend deeply outweighs a long club list." },
          ],
        },
      ],
    },

    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      color: T.phaseColors.masters,
      intro:
        "In ME, the master's is optional and strategic rather than a default step. The BSME is fully employable, so a master's pays off when you want to specialize (robotics, thermal-fluids, controls), move into R&D-facing roles, or reset into a subfield your undergrad didn't cover. Know the funding divide cold: thesis (research) master's students are often funded via an assistantship, while professional/coursework master's students almost always self-fund.",
      sections: [
        {
          title: "Program Types",
          icon: "▣",
          items: [
            { name: "Thesis (Research) MS", detail: "Fewer courses plus an original research project under a faculty advisor. Often funded via a research assistantship (tuition + stipend) if you join a lab with grant money. The right choice if you're testing the PhD path or targeting R&D roles. Typically 2 years." },
            { name: "Coursework / Professional MS (MEng)", detail: "More courses, a capstone or comprehensive exam instead of a thesis, no research requirement. Almost always self-funded ($30K–$70K+ tuition). Common for engineers deepening a specialization or pivoting subfields. 1–2 years, often available part-time." },
            { name: "BS/MS Combined ('4+1') Programs", detail: "Many schools let strong undergrads start grad coursework senior year and finish both degrees in five years. Frequently the most time- and cost-efficient route to a master's if your program offers it." },
            { name: "Online / Part-Time Professional MS", detail: "Georgia Tech, Purdue, and others offer respected online ME master's degrees at a fraction of residential cost. A pragmatic option for working engineers pursuing employer-reimbursed credentials." },
          ],
        },
        {
          title: "Specializations",
          icon: "◈",
          items: [
            { name: "Thermal & Fluid Sciences", detail: "Advanced heat transfer, CFD, combustion, HVAC, turbomachinery. Feeds into aerospace propulsion, energy, and the fast-growing data-center thermal-management field. CFD skill (ANSYS Fluent) is the signature capability." },
            { name: "Solid Mechanics & Design", detail: "Advanced FEA, fracture mechanics, fatigue, composites, structural optimization. Core to aerospace structures, automotive, and any high-reliability mechanical product." },
            { name: "Robotics & Mechatronics", detail: "Kinematics, dynamics, control, perception, actuation. One of the hottest ME specializations — feeds robotics companies, autonomous systems, and Big Tech hardware. Heavy overlap with EE and CS; the programming-fluent stand out." },
            { name: "Controls & Dynamic Systems", detail: "Advanced control theory, estimation, autonomy. Applies across automotive (ADAS), aerospace (guidance), and robotics. Increasingly software- and ML-adjacent." },
            { name: "Manufacturing & Additive Manufacturing", detail: "Advanced manufacturing, metal 3D printing, process modeling, digital manufacturing. A research-active area with strong industry pull in aerospace and medical devices." },
            { name: "Materials & MEMS / Micro-Nano", detail: "Advanced materials, micro-electro-mechanical systems, microfluidics. Bridges ME with materials science and semiconductors; feeds sensors, medical devices, and semiconductor equipment." },
            { name: "Biomechanics & Medical Devices", detail: "Biomechanics, biomaterials, device design, regulatory pathways. Feeds the medical-device industry (Medtronic, Stryker, Boston Scientific) — a stable, well-paid, growing sector." },
          ],
        },
        {
          title: "Funding Reality",
          icon: "◭",
          items: [
            { name: "Funded Thesis RA (the exception)", detail: "Join a research lab with grant funding and your tuition is waived plus a stipend (~$25K–$35K/year). Competitive; reach out to potential advisors before or right after admission. This is how funded ME master's degrees happen." },
            { name: "Self-Funded Professional MS (the norm)", detail: "Most coursework/MEng students pay out of pocket or via employer reimbursement. Total cost ranges from ~$15K (in-state/online) to $70K+ (private residential). Run the ROI honestly — many ME roles don't require the degree." },
            { name: "Employer Tuition Reimbursement", detail: "Large employers (automotive OEMs, aerospace primes, energy, industrials) commonly cover part-time MS tuition while you work. The most financially rational path — get the job first, let them pay." },
            { name: "Fellowships (NSF GRFP, NDSEG, SMART)", detail: "National fellowships provide $34K–$38K/year stipends for graduate study. NSF GRFP and DoD SMART (which includes a defense job commitment) are open to BS-holders entering grad school; apply senior year." },
          ],
        },
        {
          title: "Advanced Tools",
          icon: "⬡",
          items: [
            { name: "ANSYS Mechanical / ABAQUS", detail: "High-fidelity FEA for nonlinear, dynamic, and fracture problems. ABAQUS is favored in research and advanced structural analysis; deep FEA skill is a hireable specialty on its own." },
            { name: "ANSYS Fluent / OpenFOAM (CFD)", detail: "Computational fluid dynamics for flow, heat, and combustion. OpenFOAM is the open-source research standard; Fluent dominates industry. CFD expertise commands a premium in thermal-fluids roles." },
            { name: "COMSOL Multiphysics", detail: "Coupled multiphysics simulation (structural + thermal + fluid + electromagnetic). The go-to for MEMS, microfluidics, and coupled-physics research problems." },
            { name: "Advanced CAD (CATIA / Siemens NX)", detail: "The heavyweight CAD platforms of aerospace and automotive. CATIA dominates aerospace (Boeing, Airbus); NX is common in automotive. Learning the industry's specific tool is a real advantage." },
            { name: "Python / ML for Engineering", detail: "Surrogate models, design optimization, data-driven modeling. ML fluency layered on ME domain knowledge is an increasingly valuable and differentiating combination." },
            { name: "Digital Twin & Simulation Platforms", detail: "Model-based systems engineering and digital-twin tools for simulating full systems over their lifecycle. Growing in aerospace, automotive, and industrial applications." },
          ],
        },
      ],
    },

    {
      id: "phd",
      label: "PhD / Research",
      years: "Years 6–12",
      color: T.phaseColors.phd,
      intro:
        "The ME PhD is a fully funded, 5–7 year commitment to producing original knowledge, supported by research or teaching assistantships (tuition waived plus a stipend). Pursue it only if your goal requires inventing new technology: faculty positions, national-lab research, or frontier corporate R&D in robotics, additive manufacturing, advanced energy, or bioengineering. If you mainly want to design and build — even very sophisticated systems — a BS or MS plus experience serves you better and pays sooner.",
      sections: [
        {
          title: "How It Works",
          icon: "◎",
          items: [
            { name: "Qualifying Exam (Quals)", detail: "A written and/or oral exam on graduate-level ME fundamentals — mechanics, thermo/fluids, math, and your subfield. Usually taken in years 1–2; typically two attempts. The canonical filter that separates coursework from independent research." },
            { name: "Candidacy / Preliminary Exam", detail: "A formal proposal and oral defense of your dissertation plan. Passing makes you a 'PhD candidate' with a validated original research direction." },
            { name: "Dissertation & Defense", detail: "3–5 years of original research yielding a written dissertation and public defense, typically producing several peer-reviewed papers. The advisor relationship is the most consequential variable in the whole PhD — vet it carefully." },
            { name: "Duration & Funding", detail: "Typically 5–7 years from BS. Funded via research assistantships (from your advisor's grants — the dominant model) or teaching assistantships. Stipends at strong programs run ~$30K–$40K/year plus tuition waiver and health insurance." },
            { name: "Choosing an Advisor & Lab", detail: "More important than program rank. Look for active funding, a record of placing graduates, regular mentorship, and a research direction you'd happily live in for five years. Talk to current and former students before you commit." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "✳",
          items: [
            { name: "Soft Robotics & Bio-Inspired Machines", detail: "Compliant actuators, soft grippers, and bio-inspired locomotion for robots that safely interact with humans and delicate objects. A fast-growing frontier blending mechanics, materials, and controls." },
            { name: "Additive Manufacturing (Metal 3D Printing)", detail: "Process physics, qualification, and design for metal AM in aerospace and medical. Research spans melt-pool modeling, new alloys, and topology-optimized geometries only printing can produce." },
            { name: "Data-Center & Electronics Thermal Management", detail: "As AI compute explodes, cooling has become a defining constraint. Two-phase cooling, immersion, and microchannel heat sinks are hot research and industry areas — a thermal-fluids specialty with surging demand." },
            { name: "Architected Materials & Metamaterials", detail: "Lattices and micro-architected structures engineered for properties nature doesn't offer — negative stiffness, extreme lightweighting, tailored wave behavior. Enabled by additive manufacturing and computational design." },
            { name: "Robotics, Autonomy & Human-Robot Interaction", detail: "Legged locomotion, manipulation, and learning-based control. Heavily ML-infused; the boundary between ME robotics and AI research is increasingly blurred." },
            { name: "Advanced Energy & Fusion", detail: "Energy storage, next-gen nuclear, and the mechanical/thermal engineering behind fusion reactors (magnets, blankets, heat exhaust). A capital-rich, mission-driven frontier attracting major investment." },
            { name: "Biomechanics & Medical Devices", detail: "Tissue mechanics, implant design, surgical robotics, and wearable devices. A stable ME research vein with a clear industry pipeline into the medical-device sector." },
            { name: "AI/ML for Mechanics & Design", detail: "Physics-informed neural networks, ML surrogate models that replace expensive CFD/FEA runs, and generative design. Reshaping how simulation and design get done across every ME subfield." },
          ],
        },
        {
          title: "AI in ME Research",
          icon: "◐",
          items: [
            { name: "Surrogate Models for Simulation", detail: "ML models trained to approximate expensive CFD/FEA runs, cutting design-iteration time from hours to seconds. One of the most practically impactful AI applications in ME — real, not hype." },
            { name: "Physics-Informed Neural Networks (PINNs)", detail: "Neural networks constrained to obey governing equations (Navier–Stokes, heat, elasticity). An active research direction for solving and accelerating PDE-based mechanics problems." },
            { name: "Generative & Topology-Optimized Design", detail: "Algorithms that generate mass-optimized geometries from load and constraint definitions. Genuinely useful for lightweighting — but outputs need engineering judgment and manufacturability review to be usable." },
            { name: "ML for Materials & Manufacturing", detail: "Data-driven discovery of alloys and process parameters, plus in-situ defect detection in additive manufacturing. Accelerates a traditionally slow, empirical development cycle." },
            { name: "Automation Risk: Honest View", detail: "Routine CAD drafting, standard FEA/CFD runs, and documentation face real automation exposure. But hands-on system integration, physical testing, novel design, failure diagnosis, and manufacturing-floor problem-solving require physical presence and judgment that current AI handles poorly. ME's grounding in the physical world is its automation moat." },
          ],
        },
        {
          title: "After the PhD",
          icon: "▦",
          items: [
            { name: "Academic Faculty Path", detail: "Highly competitive: many strong applicants per tenure-track ME opening, and postdocs (1–3 years) are increasingly common first. Starting salaries ~$90K–$110K (9-month) rising with rank and summer grant support. The trade is compensation for research freedom and long-term intellectual autonomy." },
            { name: "National Lab Research (Sandia, ORNL, NREL, LLNL)", detail: "Staff-scientist roles offering mission-driven research, strong stability, and excellent facilities. Compensation is solid ($110K–$180K depending on level) and work-life balance typically beats both academia and startups. Many roles are clearance-gated." },
            { name: "Corporate R&D / Advanced Technology", detail: "Frontier research groups at aerospace primes, automotive/EV makers, robotics companies, and Big Tech hardware labs. A PhD opens Staff/Principal roles directly and is often required for advanced-R&D positions; compensation is strong, especially at tech and EV companies." },
            { name: "Direct to Industry (Robotics / AM / Energy)", detail: "A PhD in robotics, additive manufacturing, advanced energy, or biomechanics opens senior technical doors immediately — skipping years of the engineering ladder. Deep-tech and climate startups actively recruit ME PhDs for frontier hardware." },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Automotive & Mobility",
      icon: "🏎",
      color: T.orange,
      roles: ["Design Engineer", "Vehicle Dynamics Engineer", "Sr. Development Engineer", "Powertrain Lead", "Chief Engineer"],
      reality:
        "The classic ME destination, now split between legacy OEMs (Ford, GM, Stellantis) and EV/AV players (Tesla, Rivian, Waymo). Traditional automotive pays moderately — Detroit-area design engineers typically land in the $80K–$120K range — while Tesla and AV companies pay meaningfully more, with total comp for experienced engineers reaching $150K–$250K+ including equity. Formula/Baja SAE experience is recruited by name. The EV and autonomy shift is reshaping which skills matter: mechatronics, controls, and battery/thermal expertise are ascendant; pure IC-engine specialization is declining.",
      salary: "$75K – $250K+ (legacy vs. EV/AV)",
    },
    {
      path: "Aerospace & Defense",
      icon: "🚀",
      color: T.steel,
      roles: ["Mechanical Engineer", "Structures Engineer", "Propulsion Engineer", "Sr. Systems Engineer", "Technical Fellow"],
      reality:
        "Boeing, Lockheed, Northrop, Raytheon, and the new-space wave (SpaceX, Blue Origin, Rocket Lab). Traditional primes offer stability and pay in the $85K–$140K range; SpaceX and new-space pay comparably or better but demand intense hours in exchange for equity and mission. The key gate: most defense and many aerospace roles require U.S. citizenship, and a security clearance unlocks the best-paid work — a hard barrier for international graduates, who are a large share of ME degree holders. Structures, thermal, and propulsion are the core ME specialties here.",
      salary: "$80K – $180K+ (clearance & new-space premium)",
    },
    {
      path: "Robotics & Automation",
      icon: "🦾",
      color: T.teal,
      roles: ["Robotics Engineer", "Mechatronics Engineer", "Motion Control Engineer", "Sr. Robotics Engineer", "Robotics Architect"],
      reality:
        "One of the hottest and best-paid ME destinations, spanning industrial automation, warehouse robotics (Amazon), humanoid/legged robots (Boston Dynamics, Figure), and surgical robotics. Compensation runs high — $110K–$200K+ at well-funded robotics companies, with Big Tech and hot startups higher still. The differentiator is software: ME robotics engineers who can genuinely program (Python, C++, ROS) and understand controls dramatically out-earn and out-compete those who only do mechanical design. Heavy overlap with EE and CS.",
      salary: "$100K – $220K+ (software fluency is the multiplier)",
    },
    {
      path: "Big Tech Hardware (Thermal / Mechanical)",
      icon: "📱",
      color: "#7c5cbf",
      roles: ["Mechanical Design Engineer", "Thermal Engineer", "Product Design Engineer", "Sr. Hardware Engineer", "Principal Engineer"],
      reality:
        "Apple, Google, Meta, Amazon, NVIDIA, and Tesla all hire MEs for enclosure/product design, thermal management, and hardware systems — and pay far above the ME median. Total compensation for mechanical/thermal engineers at these companies commonly reaches $150K–$300K+ including stock. Thermal engineering in particular is booming due to AI-driven data-center cooling demands. This is the highest-paying mainstream ME path, but it's concentrated in the Bay Area and Seattle and is genuinely competitive to enter — strong CAD, thermal, and systems skills plus a polished portfolio are the price of admission.",
      salary: "$130K – $300K+ TC (Big Tech hardware)",
    },
    {
      path: "Energy & Power",
      icon: "⚡",
      color: T.brass,
      roles: ["Mechanical Engineer", "Rotating Equipment Engineer", "Process Engineer", "Sr. Energy Engineer", "Engineering Manager"],
      reality:
        "Spans oil & gas, power generation, nuclear, and renewables (wind, solar, storage). Oil & gas historically pays among the highest of any ME sector — experienced engineers in the Houston hub often reach $120K–$180K+ — though it's cyclical and carries long-term transition risk. Renewables and grid-scale storage are the growth story, with steadier trajectories if sometimes lower entry pay. Rotating equipment, thermal systems, and turbomachinery are the core ME specialties. Geographically concentrated (Houston for oil & gas; distributed for renewables).",
      salary: "$80K – $180K+ (oil & gas premium)",
    },
    {
      path: "Product Design & Medical Devices",
      icon: "🩺",
      color: "#c14b6e",
      roles: ["Product Design Engineer", "R&D Engineer", "Device Engineer", "Sr. Design Engineer", "Principal Engineer"],
      reality:
        "Consumer products (Dyson, appliance and tool makers) and — the stronger sub-lane — medical devices (Medtronic, Stryker, Boston Scientific, Edwards). Medical devices offer stability, growth, and good pay ($85K–$150K, higher with experience and in senior R&D), plus meaningful work, in exchange for navigating slow, regulation-heavy (FDA) development cycles. Strong CAD, design-for-manufacturing, tolerancing, and testing skills are central. A master's in biomechanics or device design helps enter the medical side.",
      salary: "$75K – $160K (medical devices favored)",
    },
    {
      path: "Manufacturing & Industrial",
      icon: "🏭",
      color: "#5a6b7d",
      roles: ["Manufacturing Engineer", "Process Engineer", "Quality Engineer", "Plant Engineer", "Operations/Engineering Manager"],
      reality:
        "The backbone sector — every physical product needs engineers to design and run its production. Roles include process, quality, plant, and continuous-improvement (Lean/Six Sigma) engineering across automotive, aerospace, consumer goods, and industrials. Pay is the ME median band ($70K–$110K early, more into management), and demand is steady and geographically distributed (not concentrated in expensive coastal hubs). A reliable, accessible entry point with clear paths into operations and engineering management.",
      salary: "$68K – $120K (steady, distributed demand)",
    },
    {
      path: "HVAC / MEP & Building Systems",
      icon: "🏢",
      color: "#2b7c7c",
      roles: ["Mechanical (MEP) Engineer", "HVAC Design Engineer", "Sr. MEP Engineer", "Project Engineer", "Principal / Partner (PE)"],
      reality:
        "Designing heating, cooling, and plumbing systems for buildings at consulting engineering firms — and the one ME path where the PE license genuinely matters. Because MEP work involves stamping drawings for public and commercial buildings, licensure is often required and directly tied to advancement and pay. Compensation is moderate ($70K–$120K, more for licensed PEs and principals) but demand is stable and recession-resilient, and the PE creates a durable professional moat that most ME subfields lack.",
      salary: "$68K – $130K (PE license drives advancement)",
    },
  ],
};

// ── Expandable Item ───────────────────────────────────────────────────────────
function ExpandableItem({ item, idx, expanded, onToggle, accent }) {
  const isOpen = expanded === idx;
  const dim = String(idx + 1).padStart(2, "0");
  return (
    <div
      onClick={() => onToggle(isOpen ? null : idx)}
      style={{
        background: isOpen ? T.surface : T.paper,
        border: `1px solid ${isOpen ? accent : T.line}`,
        borderRadius: 2,
        padding: "12px 14px 12px 12px",
        cursor: "pointer",
        marginBottom: 6,
        transition: "background 0.16s, border-color 0.16s",
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      {/* Dimension tick label */}
      <span style={{
        fontFamily: T.fontMono,
        fontSize: 11,
        color: isOpen ? accent : T.muted,
        fontWeight: 500,
        paddingTop: 2,
        flexShrink: 0,
        letterSpacing: "0.04em",
      }}>
        {dim}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <span style={{
            fontFamily: T.fontBody,
            fontSize: 14,
            fontWeight: 600,
            color: isOpen ? accent : T.ink,
            lineHeight: 1.35,
          }}>
            {item.name}
          </span>
          <span style={{
            fontFamily: T.fontMono,
            fontSize: 12,
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
            fontSize: 13,
            color: T.inkSoft,
            lineHeight: 1.62,
            borderTop: `1px dashed ${T.line}`,
            paddingTop: 9,
          }}>
            {item.detail}
          </p>
        )}
      </div>
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
        background: isOpen ? T.surface : T.paper,
        border: `1px solid ${isOpen ? career.color : T.line}`,
        borderRadius: 2,
        padding: "16px 18px",
        cursor: "pointer",
        transition: "border-color 0.16s, background 0.16s",
        position: "relative",
      }}
    >
      {/* corner registration mark */}
      <span style={{
        position: "absolute", top: 8, right: 10,
        fontFamily: T.fontMono, fontSize: 10, color: T.muted, opacity: 0.6,
      }}>
        ⌖
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 20 }}>{career.icon}</span>
        <span style={{
          fontFamily: T.fontDisplay,
          fontWeight: 700,
          fontSize: 15,
          color: career.color,
          lineHeight: 1.25,
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
            background: career.color + "12",
            border: `1px solid ${career.color}33`,
            borderRadius: 2,
            padding: "2px 7px",
            letterSpacing: "0.01em",
          }}>
            {r}
          </span>
        ))}
      </div>

      <div style={{
        fontFamily: T.fontMono,
        fontSize: 11,
        fontWeight: 500,
        color: T.orange,
        background: T.orangeSoft,
        border: `1px solid ${T.orange}44`,
        borderRadius: 2,
        padding: "4px 9px",
        display: "inline-block",
        marginBottom: isOpen ? 14 : 0,
      }}>
        {career.salary}
      </div>

      {isOpen && (
        <p style={{
          borderTop: `1px dashed ${T.line}`,
          paddingTop: 13,
          margin: 0,
          fontFamily: T.fontBody,
          fontSize: 13,
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
export default function MechanicalEngineeringRoadmap({ summary } = {}) {
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
      position: "relative",
      overflowX: "hidden",
    }}>
      <FontLoader />
      <CadGrid />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header / title block (like a drawing title block) ── */}
        <header style={{
          padding: "36px 24px 26px",
          maxWidth: 880,
          margin: "0 auto",
        }}>
          <div style={{
            fontFamily: T.fontMono,
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: T.orange,
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{ width: 22, height: 1, background: T.orange, display: "inline-block" }} />
            Career Roadmap · USA · Rev. 2026
          </div>

          <h1 style={{
            fontFamily: T.fontDisplay,
            fontWeight: 800,
            fontSize: "clamp(30px, 6.5vw, 52px)",
            color: T.ink,
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1.02,
          }}>
            Mechanical<br/>Engineering
          </h1>

          <p style={{
            fontFamily: T.fontBody,
            fontWeight: 400,
            fontSize: 15,
            color: T.slate,
            marginTop: 12,
            marginBottom: 0,
            maxWidth: 560,
            lineHeight: 1.55,
          }}>
            The broadest engineering discipline — from statics and thermodynamics to robotics, propulsion, and the thermal frontier of AI compute.
          </p>

          {/* Title-block stat strip */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 0,
            marginTop: 24,
            border: `1px solid ${T.line}`,
            borderRadius: 2,
            overflow: "hidden",
            background: T.paper,
          }}>
            {[
              { label: "BLS Median", value: "$104,110", color: T.orange, inSummary: true },
              { label: "Big Tech Hardware TC", value: "$130K–$300K+", color: T.steel },
              { label: "PhD Duration", value: "~5–7 yrs", color: T.teal },
              { label: "Job Growth ’24–’34", value: "9%", color: T.brass, inSummary: true },
            ].filter(stat => !summary || !stat.inSummary).map((s, i) => (
              <div key={s.label} style={{
                padding: "11px 14px",
                borderRight: i < 3 ? `1px solid ${T.line}` : "none",
                borderBottom: `2px solid ${s.color}`,
              }}>
                <div style={{ fontFamily: T.fontMono, fontSize: 14, fontWeight: 600, color: T.ink }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: T.fontMono, fontSize: 8.5, color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 3 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {summary}

        {/* ── Phase nav ── */}
        <nav style={{
          position: "sticky",
          top: 0,
          background: T.bg + "f2",
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${T.line}`,
          borderBottom: `1px solid ${T.line}`,
          zIndex: 10,
          padding: "0 24px",
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
                    background: active ? T.surface : "none",
                    border: "none",
                    borderBottom: active ? `2px solid ${p.color}` : "2px solid transparent",
                    padding: "13px 15px",
                    cursor: "pointer",
                    fontFamily: T.fontDisplay,
                    fontWeight: active ? 700 : 500,
                    fontSize: 13,
                    color: active ? p.color : T.slate,
                    whiteSpace: "nowrap",
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                >
                  {p.label}
                  <span style={{
                    fontFamily: T.fontMono, fontSize: 9, marginLeft: 6,
                    opacity: 0.6, color: active ? p.color : T.muted,
                  }}>
                    {p.years}
                  </span>
                </button>
              );
            })}
            <button
              onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
              style={{
                background: showCareers ? T.surface : "none",
                border: "none",
                borderBottom: showCareers ? `2px solid ${T.orange}` : "2px solid transparent",
                padding: "13px 15px",
                cursor: "pointer",
                fontFamily: T.fontDisplay,
                fontWeight: showCareers ? 700 : 500,
                fontSize: 13,
                color: showCareers ? T.orange : T.slate,
                whiteSpace: "nowrap",
                transition: "color 0.15s, border-color 0.15s",
              }}
            >
              Career Paths
            </button>
          </div>
        </nav>

        {/* ── Main ── */}
        <main style={{ maxWidth: 880, margin: "0 auto", padding: "26px 24px 60px" }}>
          {!showCareers && phase ? (
            <>
              <div style={{ marginBottom: 22 }}>
                <div style={{
                  fontFamily: T.fontMono, fontSize: 10, color: phase.color,
                  letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10,
                }}>
                  ▸ {phase.label} · {phase.years}
                </div>
                <p style={{
                  fontFamily: T.fontBody, fontSize: 14, color: T.inkSoft,
                  lineHeight: 1.68, margin: 0, maxWidth: 680,
                  borderLeft: `2px solid ${phase.color}`, paddingLeft: 14,
                }}>
                  {phase.intro}
                </p>
              </div>

              <div style={{
                display: "flex", overflowX: "auto", scrollbarWidth: "none",
                gap: 6, marginBottom: 18, paddingBottom: 4,
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
                        borderRadius: 2,
                        padding: "7px 13px",
                        cursor: "pointer",
                        fontFamily: T.fontBody, fontSize: 12,
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
              <div style={{ marginBottom: 22 }}>
                <div style={{
                  fontFamily: T.fontMono, fontSize: 10, color: T.orange,
                  letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10,
                }}>
                  ▸ 8 Career Destinations
                </div>
                <p style={{
                  fontFamily: T.fontBody, fontSize: 14, color: T.inkSoft,
                  lineHeight: 1.68, margin: 0, maxWidth: 660,
                  borderLeft: `2px solid ${T.orange}`, paddingLeft: 14,
                }}>
                  ME's breadth is its defining feature: the same degree reaches racecars, rockets, robots, and reactors. Compensation varies widely by sector — Big Tech hardware and robotics sit well above the field median, while manufacturing and HVAC sit near it. Tap any card for the honest picture.
                </p>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 12,
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
          padding: "15px 24px",
          textAlign: "center",
          background: T.paper,
        }}>
          <p style={{
            fontFamily: T.fontMono, fontSize: 10, color: T.muted,
            margin: 0, letterSpacing: "0.06em",
          }}>
            Tap any item to expand · Salary data: BLS May 2025, Glassdoor & Levels.fyi 2026 · TC = total compensation incl. equity
          </p>
        </footer>
      </div>
    </div>
  );
}
