import { useState, useEffect, useRef } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const T = {
  // Palette
  bg:         "#0d0e0f",   // near-black substrate
  surface:    "#141618",   // card/panel surface
  surfaceHi:  "#1c1f22",   // elevated surface
  border:     "#252a2e",   // subtle border
  borderHi:   "#333b42",   // hover/active border

  amber:      "#f59e0b",   // primary accent — soldering heat / signal orange
  amberDim:   "#92600a",   // muted amber
  amberGlow:  "rgba(245,158,11,0.12)",

  cyan:       "#22d3ee",   // oscilloscope trace green-cyan
  cyanDim:    "#155e75",
  cyanGlow:   "rgba(34,211,238,0.10)",

  lime:       "#84cc16",   // logic-high green
  violet:     "#a78bfa",   // RF/photonics violet
  red:        "#f87171",   // alert / power rail red
  slate:      "#94a3b8",   // muted text
  muted:      "#4b5563",   // very muted

  // Phase accent colors
  phaseColors: {
    undergrad: "#f59e0b",   // amber
    masters:   "#22d3ee",   // cyan
    phd:       "#a78bfa",   // violet
  },

  // Typography (loaded via Google Fonts fallback chain)
  fontDisplay: "'Space Grotesk', 'DM Sans', sans-serif",
  fontMono:    "'IBM Plex Mono', 'Fira Mono', monospace",
  fontBody:    "'Inter', 'DM Sans', system-ui, sans-serif",
};

// ── Google Fonts loader ───────────────────────────────────────────────────────
function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ── PCB Trace Grid (signature element) ───────────────────────────────────────
function PcbGrid() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;

    // Draw horizontal + vertical trace grid
    ctx.clearRect(0, 0, W, H);
    const STEP = 40;
    ctx.strokeStyle = "rgba(245,158,11,0.045)";
    ctx.lineWidth = 1;

    for (let x = 0; x < W; x += STEP) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += STEP) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Solder-pad dots at intersections (sparse)
    ctx.fillStyle = "rgba(245,158,11,0.08)";
    for (let x = 0; x < W; x += STEP) {
      for (let y = 0; y < H; y += STEP) {
        if (Math.random() > 0.82) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // A few random "traces" — L-shaped PCB routes
    ctx.strokeStyle = "rgba(34,211,238,0.055)";
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 12; i++) {
      const x1 = Math.round(Math.random() * W / STEP) * STEP;
      const y1 = Math.round(Math.random() * H / STEP) * STEP;
      const x2 = x1 + (Math.round((Math.random() - 0.5) * 6) * STEP);
      const y2 = y1 + (Math.round((Math.random() * 4 + 1) * STEP));
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1, y2);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
        opacity: 1,
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
      color: T.amber,
      intro:
        "The BSEE is a rigorous, ABET-accredited 128-credit program that builds the full conceptual stack of the field — from circuit analysis and electromagnetics through digital systems, semiconductor devices, and a capstone design project. Electromagnetics and Signals & Systems are universally the hardest courses; treat them as the true test of whether EE is the right discipline. Two internships or an REU before senior year are the highest-leverage moves you can make.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "⚡",
          items: [
            { name: "Circuit Analysis (DC/AC)", detail: "The true foundation: Kirchhoff's laws, RLC circuits, op-amp analysis, phasor methods. Every other EE course builds on this one — master it or struggle for four years." },
            { name: "Signals & Systems", detail: "Fourier and Laplace transforms, convolution, frequency-domain analysis. Widely considered the conceptual gateway to EE; abstract and demanding. Build intuition, not just mechanical transform skill." },
            { name: "Electromagnetics", detail: "Maxwell's equations, wave propagation, transmission lines. The near-universal 'hardest course in EE' — vector calculus applied to invisible phenomena. Form a study group before week one." },
            { name: "Digital Logic & Computer Organization", detail: "Boolean algebra, combinational/sequential logic, FSMs, microprocessor architecture. The entry point to FPGA design and computer engineering tracks." },
            { name: "Semiconductor Devices", detail: "Diode, BJT, and MOSFET physics from first principles — band theory, carrier transport, device characteristics. Required background for both IC design and power electronics." },
            { name: "Electronics / Analog Circuits", detail: "Amplifier design, biasing, frequency response, feedback and stability, basic filter design. Where Signals & Systems meets real transistors." },
            { name: "Control Systems", detail: "Feedback, stability, root locus, Bode plots, PID design. Essential for robotics, power converters, and automotive/aerospace applications." },
            { name: "Senior Capstone Design", detail: "Two-semester team project integrating multiple EE areas — typically a hardware+firmware system built to real specifications. This is your portfolio centerpiece; choose a team and topic carefully." },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "🔧",
          items: [
            { name: "Bench Instrumentation", detail: "Oscilloscope, function generator, spectrum analyzer, logic analyzer, multimeter, power supply. Every EE job starts with these — comfort at the bench separates you immediately from engineers who only simulate." },
            { name: "Circuit Prototyping & Soldering", detail: "Breadboarding, through-hole and SMD soldering, rework. Physical intuition about parasitics, ground loops, and layout effects only comes from building real hardware." },
            { name: "PCB Design", detail: "KiCad or Altium for schematic capture, layout, DRC/ERC, generating Gerbers. Designing and ordering your own PCB is now an undergrad portfolio norm; services like OSHPark make it cheap." },
            { name: "FPGA Design & HDL", detail: "Verilog or VHDL for digital design, synthesis, simulation. FPGAs are used across DSP, radar, test equipment, and prototyping custom silicon." },
            { name: "Microcontroller Firmware", detail: "C/C++ on ARM Cortex-M or AVR; interrupt-driven programming, peripheral drivers (SPI/I2C/UART), real-time timing. The entry skill for all embedded systems work." },
            { name: "MATLAB / Simulink", detail: "Numerical methods, control-system modeling, Simulink block diagrams for signal flow. Still the dominant tool for teaching EE concepts and the default in controls/signal-processing workflows." },
            { name: "Circuit Simulation (SPICE)", detail: "LTspice for schematic simulation — transient, AC sweep, DC operating point, noise. Model behavior before soldering; verify against bench measurements afterward." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "💻",
          items: [
            { name: "MATLAB / Simulink", detail: "Standard from Year 1 through grad school. Use it for transforms, control design, and signal processing; Python is overtaking it for ML/data but MATLAB remains dominant in industry EE workflows." },
            { name: "LTspice (SPICE)", detail: "Free circuit simulator from Analog Devices — the universal first simulator taught. Learn it thoroughly; more advanced Cadence/HSPICE simulation builds on the same conceptual model." },
            { name: "Python (NumPy / SciPy)", detail: "Increasingly the scripting default for data analysis, automation, and ML integration. Pair with Jupyter notebooks for lab reports; start early even if your program doesn't require it." },
            { name: "Verilog / VHDL", detail: "Hardware description languages for digital design and FPGA programming. Verilog is more common in industry (especially semiconductor); SystemVerilog extends it for verification." },
            { name: "C / C++ for Embedded", detail: "The language of microcontrollers, firmware, and real-time systems. Deep understanding of memory, pointers, and bare-metal hardware is expected in embedded interviews." },
            { name: "AI Coding Assistants (Copilot, Claude)", detail: "Already used widely for writing boilerplate, MATLAB scripts, and Python data processing. Useful productivity tools for undergrads — but don't let them replace understanding circuit math; AI hallucinates SPICE netlist details badly." },
            { name: "KiCad / Altium Designer", detail: "PCB design tools. KiCad is free and powerful enough for most student work; Altium is the industry standard (many companies provide student licenses)." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🏆",
          items: [
            { name: "NSF REU Programs", detail: "Paid summer research experiences at ~150 institutions — stipends typically $7,000–$8,500 for 10 weeks with housing/travel. Apply January–March in your sophomore or junior year. Hosted at Stanford, MIT, UT Austin, national labs; strongly boosts PhD admissions." },
            { name: "Engineering Internships", detail: "Target Intel, Qualcomm, Texas Instruments, NVIDIA, Apple, Lockheed, Boeing, utility companies, and startups. One or two internships by senior year transforms your resume from academic to industry-ready; co-op programs (Georgia Tech, Northeastern) can yield 3–4 rotations." },
            { name: "IEEE Student Branch", detail: "Join early — IEEE membership is $32/year for students. Local branches run design competitions, industry speaker nights, job fairs, and networking events. Run for officer positions; it signals initiative." },
            { name: "IEEE Design Competitions", detail: "IEEEXtreme, the Power Electronics Design Competition, and IEEE Micromouse are rigorous and resume-visible. Winning or placing in a named competition is one of the few extracurriculars that genuinely moves needles." },
            { name: "Hardware Portfolio (Personal Projects)", detail: "Depth beats breadth. One well-documented embedded system or FPGA project that you can explain end-to-end at a whiteboard outweighs five club memberships. Post to GitHub with schematics, firmware, and a README that explains design decisions." },
            { name: "Formula SAE / Solar/EV Vehicle Teams", detail: "Multi-disciplinary hardware teams with real subteams for power electronics, battery management, and embedded controls — the closest analogue to an industry design team you'll find in undergrad." },
          ],
        },
      ],
    },

    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      color: T.cyan,
      intro:
        "The master's in EE is a specialization tool, not a default next step. The BS alone is fully employable in most industry sectors; a master's pays off when you want to pivot into a specialized niche (VLSI, RF, power electronics, ML hardware), access research-facing roles, or test whether a PhD is right for you. Understand the funding divide before committing: most professional/coursework MS students self-fund, while funded master's slots require thesis research under a faculty advisor.",
      sections: [
        {
          title: "Program Types",
          icon: "🎓",
          items: [
            { name: "Thesis (Research) MS", detail: "Fewer courses plus an original research contribution. Typically funded via a research assistantship (RA) — tuition + stipend — from your advisor's grant. Strongly recommended if you're testing the PhD path or want industrial research roles. Usually 1.5–2.5 years." },
            { name: "Coursework / Professional MS", detail: "More courses, sometimes a capstone project or comprehensive exam, no thesis. Self-funded in most programs (~$30K–$80K in tuition). Common for engineers returning from industry to specialize; 1–2 years full-time, also offered part-time/online." },
            { name: "BS/MS Combined ('4+1') Programs", detail: "Many universities (USC, Georgia Tech, Ohio State) allow strong undergrads to start graduate coursework in year 4, completing both degrees in five years. Often the most cost- and time-efficient path if your program offers it." },
            { name: "Online / Part-Time Professional MS", detail: "Georgia Tech's OMSEE ($10K total) and similar programs have disrupted the market for professional master's degrees; quality has improved significantly. A viable option for working engineers who want credentials without relocating." },
          ],
        },
        {
          title: "Specializations",
          icon: "📡",
          items: [
            { name: "VLSI / Digital IC Design", detail: "Custom chip design: RTL-to-GDSII flow, synthesis, place-and-route, timing closure, DFT. The gateway to ASIC/IC design jobs at NVIDIA, Apple, Qualcomm, and fabless semiconductor companies. High demand; a master's or PhD is nearly expected." },
            { name: "RF / Microwave & Electromagnetics", detail: "Antenna design, microwave circuit design, RFIC, transmission-line theory applied to real hardware. Feeds into 5G/6G, defense electronics, satellite communications, and radar. ANSYS HFSS mastery is the signature tool." },
            { name: "Power Systems & Power Electronics", detail: "Grid modeling, protection and relay coordination, inverter/converter design, wide-bandgap (GaN/SiC) devices. The fastest-growing subfield due to EV, renewable energy, and data-center power demands. PE licensure is often pursued alongside." },
            { name: "Signal Processing & Communications", detail: "Advanced Fourier/wavelet/statistical signal processing, wireless comms theory, coding theory, radar/array processing. ML-for-SP is a major current track. Feeds into Qualcomm, defense, audio, imaging." },
            { name: "Embedded Systems & Controls", detail: "Real-time OS, safety-critical firmware, hardware-software co-design, control theory applied to physical systems. Feeds into automotive (ISO 26262), aerospace, robotics, and industrial automation." },
            { name: "Photonics & Optics", detail: "Optical waveguides, lasers, photodetectors, silicon photonics for data-center interconnects. Emerging track with heavy research investment; less common as a standalone degree but high value at companies like Intel Photonics, Lumentum, II-VI." },
            { name: "ML Hardware / AI Systems", detail: "The newest formal track: AI accelerator architecture, hardware-aware neural network design, neuromorphic computing. Offered explicitly at Stanford, MIT, CMU, UMich. Highly competitive; feeds directly into hyperscaler silicon teams." },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            { name: "Funded Thesis RA (the exception)", detail: "If admitted to a research track with a willing advisor, your tuition is waived and you receive a stipend (~$25K–$35K/year depending on institution). This is competitive and requires reaching out to potential advisors before or immediately after admission." },
            { name: "Self-Funded Coursework MS (the norm)", detail: "Most professional MS students pay tuition out of pocket or via employer tuition reimbursement. Total cost ranges from ~$10K (Georgia Tech OMSEE) to $80K+ (private universities). Budget carefully; many engineers skip it if the ROI calculation doesn't close." },
            { name: "Employer Tuition Reimbursement", detail: "Many large employers (Intel, Lockheed, Texas Instruments, utilities) cover part-time MS tuition — $5K–$10K/year — while you work. The most financially rational path for engineers who land a job first." },
            { name: "Fellowship Programs", detail: "NSF GRFP, NDSEG, DoE CSGF, and SMART scholarships provide $34K–$38K/year stipends for funded graduate study. Apply senior year; GRFP in particular is available to BS-holders entering graduate school." },
          ],
        },
        {
          title: "Advanced Tools",
          icon: "🛠️",
          items: [
            { name: "Cadence Virtuoso", detail: "Industry-standard analog/mixed-signal IC layout and simulation environment. The skill that unlocks analog/RFIC design jobs; circuit simulation at the transistor level with parasitics from real foundry PDKs." },
            { name: "Synopsys / Cadence Digital Flow", detail: "RTL synthesis (Design Compiler), place-and-route (IC Compiler, Innovus), STA (PrimeTime), DRC/LVS (Calibre). The complete ASIC implementation flow used at every major chip company." },
            { name: "ANSYS HFSS / CST Studio", detail: "3D electromagnetic field simulation for antennas, waveguides, and PCB signal-integrity analysis. Standard at defense primes, RF houses, and in mm-wave/6G research groups." },
            { name: "ETAP / PSCAD / PowerWorld", detail: "Power-systems simulation and grid-modeling tools used in utilities, renewable-energy consulting, and power-electronics research. Knowledge of these tools is a differentiator in the power subfield." },
            { name: "PyTorch / TensorFlow (ML for EE)", detail: "ML frameworks applied to signal processing, channel estimation, radar, and VLSI design automation. Expected fluency in ML-for-hardware tracks; builds on the Python foundation from undergrad." },
            { name: "AI-EDA Tools (Cadence Cerebrus, Synopsys DSO.ai)", detail: "Emerging at the master's/PhD boundary — ML-driven optimization of PPA (power/performance/area) in chip implementation. Cadence's CEO cited up to 20% PPA improvement and 5–10× faster chip delivery at Cerebrus AI Studio's 2025 launch." },
          ],
        },
      ],
    },

    {
      id: "phd",
      label: "PhD / Research",
      years: "Years 6–12",
      color: T.violet,
      intro:
        "The EE PhD is a fully funded, 5–7 year commitment to producing original knowledge. Funding comes via research assistantships (RA) or teaching assistantships (TA) — tuition is waived, and you receive a stipend. Pursue it only if your career requires inventing new technology: faculty positions, national lab research, corporate R&D, or frontier work in semiconductors, photonics, quantum, or AI hardware. If you primarily want to design or build (even very complex systems), a BS + experience or an MS will serve you better.",
      sections: [
        {
          title: "How It Works",
          icon: "🔬",
          items: [
            { name: "Qualifying Exam (Quals)", detail: "A written and/or oral exam testing graduate-level command of EE fundamentals — circuits, signals, EM, devices, math. Usually taken in years 1–2; typically two attempts allowed. This is the canonical filter: ~20–30% of PhD students don't advance past quals." },
            { name: "Candidacy / Preliminary Exam", detail: "A formal proposal and oral defense of your dissertation research plan. Advancing to candidacy signals that you have a viable original research direction; you're officially a 'PhD candidate' afterward." },
            { name: "Dissertation & Defense", detail: "3–5 years of original research resulting in a written dissertation and public oral defense. Expected to produce 3–6 peer-reviewed papers. The advisor relationship is the most consequential variable — vet potential advisors as carefully as the program." },
            { name: "Duration & Funding", detail: "NSF data: median ~6.8 years from BS to degree in engineering. Funding is via RA (paid from advisor's grants, the dominant model) or TA. Stipends at top EE programs run $30K–$40K/year + tuition waiver + health insurance." },
            { name: "Choosing an Advisor", detail: "The single most important PhD decision — more than program rank. Look for active grants, a track record of placed students, regular one-on-ones, and a research direction you'd sustain for five years. Talk to current and former students before committing." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🚀",
          items: [
            { name: "GaN / SiC Wide-Bandgap Power Electronics", detail: "Gallium nitride and silicon carbide devices are replacing silicon in EV inverters, data-center power supplies, and grid infrastructure. The SiC market is projected at $10.3B by 2030 (20% CAGR); GaN Power market exceeds $2B by 2029 (41% CAGR). Major research at NCSU FREEDM Center, University of Arkansas, and across national labs." },
            { name: "Silicon Photonics & Optical AI Accelerators", detail: "CMOS-compatible photonic integrated circuits for data-center interconnects and optical neural networks. Intel, IBM, and HPE Labs are active; III-V-on-silicon platforms demonstrated in 2025 offer dramatic bandwidth-per-watt improvements over electrical I/O." },
            { name: "AI Hardware / Custom Silicon & Neuromorphic Chips", detail: "Custom ASIC accelerators (TPUs, NPUs) and neuromorphic architectures (Intel Loihi) attacking the von Neumann memory bottleneck for ML workloads. The dominant commercial research thrust; NVIDIA, Google, Amazon, and hyperscalers all run internal research groups here." },
            { name: "Quantum Computing Hardware", detail: "Superconducting qubit circuits (IBM, Google), trapped-ion qubits, and photonic qubits; fault-tolerant architecture design; cryogenic CMOS control circuits. A physics–EE collaboration space; NSF and DARPA are primary funders." },
            { name: "mmWave / 6G Communications", detail: "Sub-THz and mmWave integrated circuits, GaN-on-SiC power amplifiers for the 7–15 GHz band, beamforming arrays. SweGaN/Ericsson/Saab/Chalmers collaboration is a prominent example; 6G standardization is driving significant pre-competitive research." },
            { name: "Flexible, Printed & Bioelectronics", detail: "Stretchable circuits, implantable neural interfaces, lab-on-chip biosensors. Bridges EE with materials science and medicine; DARPA N3 program and NIH BRAIN Initiative are key funders." },
            { name: "AI-Driven EDA & Design Automation", detail: "ML/RL applied to chip floorplanning, place-and-route, and timing optimization. Cadence Cerebrus and Synopsys DSO.ai have now completed 300+ and 1,000+ production tapeouts respectively; active academic research at MIT, Stanford, and CMU." },
          ],
        },
        {
          title: "AI in EE Research",
          icon: "🤖",
          items: [
            { name: "AI as a Research Tool", detail: "ML models now assist in device characterization, materials property prediction (DFT surrogate models), signal denoising, radar target classification, and channel estimation. Nearly every EE subfield has an active ML-methods thread." },
            { name: "AI-Driven EDA: Real Productivity", detail: "Cadence Cerebrus AI Studio (launched May 2025) uses ML to close timing and power targets iteratively; Samsung and ST endorsed it at launch. Synopsys DSO.ai has similar traction. These tools augment engineers — they co-design chips, they don't replace the engineer who understands the constraints." },
            { name: "ML for Signal Processing", detail: "Learned receivers (replacing Viterbi/MMSE in comms), neural-network-based radar processing, and deep unfolding (interpretable ML architectures) are active research directions at Qualcomm, MIT Lincoln Lab, and Georgia Tech." },
            { name: "Physics-Informed Neural Networks (PINNs)", detail: "NNs trained to respect Maxwell's equations or circuit KCL/KVL constraints — used in EM simulation acceleration and power-system state estimation. Growing research area at the EE–applied-math boundary." },
            { name: "Automation Risk: Honest View", detail: "Routine tasks (repetitive PCB verification, standard test procedures, documentation) face real AI/automation exposure. Core EE roles — physical hardware design, system integration, novel circuit design, safety-critical debugging — are rated low-risk (WhatAboutAI.com: 36% displacement risk). EEs who build AI tools are more threatened by AI than those who design the hardware that runs them." },
          ],
        },
        {
          title: "After the PhD",
          icon: "🏛️",
          items: [
            { name: "Academic Faculty Path", detail: "Extremely competitive: 100–300 applicants per tenure-track EE position; postdocs now common (1–3 years). Target R1 vs. teaching universities carefully; the research vs. teaching tradeoff is real and permanent. Starting salaries ~$90K–$120K 9-month, rising to $130K–$160K+ at full professor level at most programs." },
            { name: "National Lab Research (Sandia, LLNL, MIT Lincoln, Argonne)", detail: "Member of Technical Staff roles offer mission-driven research, strong stability, and clearance-gated premium. Sandia/LLNL/etc. staff run $113K–$199K depending on level; less upside than Big Tech but outstanding work culture for the right person." },
            { name: "Corporate R&D / Advanced Technology", detail: "Bell Labs–style research groups at Intel Labs, IBM Research, Google Brain, Microsoft Research, Apple ML Research. The PhD is required; compensation is competitive with FAANG engineering ($250K+); research freedom varies widely by group." },
            { name: "Direct to Industry (Semiconductor/Photonics/Quantum)", detail: "A PhD in VLSI, photonics, power devices, or quantum hardware opens Staff/Principal Engineer doors directly — skipping years of IC progression. NVIDIA, Qualcomm, and startups recruiting for frontier hardware all have PhD-required positions." },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Semiconductor / Chip Design",
      icon: "🔲",
      color: T.amber,
      roles: ["Design Engineer", "Senior ASIC Engineer", "Staff IC Designer", "Principal Engineer", "Fellow"],
      reality:
        "The compensation leader in all of EE — NVIDIA ASIC Engineer median total comp is $286K; Apple ASIC Engineer median exceeds $325K (per Levels.fyi 2026). The catch: it's also the most credential-intensive path. An MS (or PhD for analog/RF/devices) is near-expected at top fabless companies. Roles concentrate heavily in Bay Area, Austin, and San Diego. The AI hardware boom is sustaining strong demand, but the semiconductor industry is cyclical — layoffs in 2023 were real, though the AI investment cycle has since rehired aggressively.",
      salary: "$167K – $590K+ TC (Big Tech/fabless)",
    },
    {
      path: "Power Systems & Energy",
      icon: "⚡",
      color: "#f59e0b",
      roles: ["Power Systems Engineer", "Protection Engineer", "Grid Planning Engineer", "Sr. Power Engineer", "Principal Engineer"],
      reality:
        "One of EE's most stable and geographically distributed subfields — utilities and renewable energy developers exist everywhere, not just coastal tech hubs. Glassdoor 2026 average is $140K–$148K total pay. This is the one EE subfield where the PE license is genuinely valuable and sometimes legally required (stamping utility drawings for public infrastructure). The electrification wave — EVs, grid modernization, offshore wind, data-center power — is creating sustained demand that is structurally different from semiconductor cyclicality.",
      salary: "$110K – $187K (utilities / energy)",
    },
    {
      path: "Embedded Systems & Firmware",
      icon: "🖥️",
      color: T.lime,
      roles: ["Embedded Engineer", "Firmware Engineer", "Sr. Embedded Systems Engineer", "Embedded Architect", "Principal Firmware"],
      reality:
        "The broadest and most portable EE subfield — embedded engineers work in automotive, IoT, aerospace, consumer electronics, industrial, and medical devices. Glassdoor 2026 average for Embedded Systems Engineers is $158K (range $128K–$199K); Embedded Firmware Engineers average $169K. A BS is usually sufficient; C/C++ fluency and RTOS experience are the real entry filters. Strong automation resilience — physical hardware integration and real-time debugging require physical presence and system intuition that AI tools handle poorly.",
      salary: "$95K – $199K (broad industry)",
    },
    {
      path: "RF / Microwave / Communications",
      icon: "📡",
      color: T.cyan,
      roles: ["RF Engineer", "Antenna Engineer", "RFIC Engineer", "Sr. RF Design Engineer", "Principal RF Engineer"],
      reality:
        "A specialized field where the combination of 5G/6G build-out and persistent defense investment keeps demand high. Glassdoor 2026: RF/Microwave Engineer averages $135K; Lockheed Martin Principal RF Engineer is ~$232K. A large fraction of roles require US citizenship and a security clearance — this gates the field for international graduates but substantially inflates pay for cleared engineers. ANSYS HFSS proficiency is the key differentiator tool at the MS level. The MS or PhD is common, especially in defense.",
      salary: "$104K – $232K+ (defense premium for clearance)",
    },
    {
      path: "Signal Processing / DSP",
      icon: "〰️",
      color: "#f472b6",
      roles: ["DSP Engineer", "Signal Processing Engineer", "Sr. DSP Engineer", "DSP Software Engineer", "Algorithm Engineer"],
      reality:
        "A spectrum (pun intended) from defense-oriented radar/sonar work to audio at Sonos/Cirrus Logic to wireless at Qualcomm to ML-adjacent roles at Big Tech. The software-heavy, ML-adjacent DSP roles pay near SWE levels — Glassdoor's 'DSP Software Engineer' average is $204K. Traditional signal-processing roles at defense (MITRE, Northrop, L3Harris) pay $110K–$160K. This subfield is undergoing the most significant AI transformation: learned signal-processing algorithms are now competitive or superior in comms, radar, and audio, making ML literacy essential.",
      salary: "$110K – $204K (varies by sector)",
    },
    {
      path: "Defense & Aerospace Electronics",
      icon: "🛰️",
      color: T.violet,
      roles: ["Electronics Engineer", "Systems Engineer", "Avionics Engineer", "Sr. Defense Electronics Engineer", "Technical Fellow"],
      reality:
        "Lockheed Martin, Northrop Grumman, Raytheon, Boeing, L3Harris, SpaceX, and a dense ecosystem of subcontractors. Mission-driven, stable, and notably less exposed to offshoring and automation than commercial electronics. The key gate: US citizenship required for most roles; security clearance (Secret or TS/SCI) unlocks the best compensation and most interesting work. Mid-to-upper $100Ks for experienced cleared engineers. Note: this is not a path for international graduates, who make up a large fraction of EE degree recipients.",
      salary: "$100K – $200K+ (clearance-gated)",
    },
    {
      path: "Academic & National Lab Research",
      icon: "🏛️",
      color: "#94a3b8",
      roles: ["Assistant Professor", "Associate Professor", "Full Professor", "Research Scientist", "Member of Technical Staff", "Distinguished MTS"],
      reality:
        "The PhD is mandatory; postdocs (1–3 years) are increasingly common before faculty positions. Tenure-track EE faculty roles draw 100–300 applicants per opening — this is one of the most competitive career paths in all of STEM. National lab roles (Sandia, MIT Lincoln Lab, LLNL, Argonne) offer more accessible entry with strong stability. Lab salaries run $113K–$199K (Levels.fyi/Glassdoor 2026) vs. full-professor salaries of $130K–$160K at most programs. The trade is compensation for intellectual freedom, long-term mission, and the ability to define your own research direction.",
      salary: "$97K – $199K (lab/faculty)",
    },
    {
      path: "Hardware Startups & Deep Tech",
      icon: "🚀",
      color: "#fb923c",
      roles: ["Founding Hardware Engineer", "Hardware Lead", "VP Engineering", "CTO"],
      reality:
        "AI-hardware, climate-tech (WBG power electronics, grid tech), quantum computing, and medical-device startups are all actively hiring EEs with the VLSI, power electronics, embedded, or photonics skills that big companies are competing for. Cash compensation is typically lower than Big Tech; the bet is on equity. Hardware startups are capital-intensive and operationally harder than software — most fail — but the AI and climate investment wave has created legitimate opportunity that didn't exist a decade ago. Concentrated in Bay Area, Boston, and Austin. Best entered after 3–5 years of industry experience.",
      salary: "$120K – $200K cash + equity",
    },
  ],
};

// ── Expandable Item ───────────────────────────────────────────────────────────
function ExpandableItem({ item, idx, expanded, onToggle, accentColor }) {
  const isOpen = expanded === idx;
  return (
    <div
      onClick={() => onToggle(isOpen ? null : idx)}
      style={{
        background: isOpen ? T.surfaceHi : T.surface,
        border: `1px solid ${isOpen ? accentColor + "55" : T.border}`,
        borderRadius: 6,
        padding: "12px 16px",
        cursor: "pointer",
        marginBottom: 6,
        transition: "background 0.18s, border-color 0.18s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{
          fontFamily: T.fontBody,
          fontSize: 14,
          fontWeight: 500,
          color: isOpen ? accentColor : "#e2e8f0",
          lineHeight: 1.4,
        }}>
          {item.name}
        </span>
        <span style={{
          fontFamily: T.fontMono,
          fontSize: 11,
          color: accentColor,
          opacity: isOpen ? 1 : 0.5,
          flexShrink: 0,
          transition: "opacity 0.15s",
        }}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <p style={{
          marginTop: 10,
          fontFamily: T.fontBody,
          fontSize: 13,
          color: T.slate,
          lineHeight: 1.65,
          borderTop: `1px solid ${T.border}`,
          paddingTop: 10,
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
        border: `1px solid ${isOpen ? career.color + "66" : T.border}`,
        borderRadius: 8,
        padding: "18px 20px",
        cursor: "pointer",
        transition: "border-color 0.18s, background 0.18s",
        background: isOpen ? T.surfaceHi : T.surface,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>{career.icon}</span>
        <span style={{
          fontFamily: T.fontDisplay,
          fontWeight: 600,
          fontSize: 15,
          color: career.color,
          lineHeight: 1.3,
        }}>
          {career.path}
        </span>
      </div>

      {/* Role chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
        {career.roles.map((r) => (
          <span key={r} style={{
            fontFamily: T.fontMono,
            fontSize: 10,
            color: career.color,
            background: career.color + "18",
            border: `1px solid ${career.color}33`,
            borderRadius: 4,
            padding: "2px 7px",
          }}>
            {r}
          </span>
        ))}
      </div>

      {/* Salary badge */}
      <div style={{
        fontFamily: T.fontMono,
        fontSize: 11,
        color: T.amber,
        background: T.amberGlow,
        border: `1px solid ${T.amberDim}`,
        borderRadius: 4,
        padding: "4px 10px",
        display: "inline-block",
        marginBottom: isOpen ? 14 : 0,
      }}>
        {career.salary}
      </div>

      {/* Expanded reality */}
      {isOpen && (
        <div style={{
          borderTop: `1px solid ${T.border}`,
          paddingTop: 14,
        }}>
          <p style={{
            fontFamily: T.fontBody,
            fontSize: 13,
            color: T.slate,
            lineHeight: 1.7,
            margin: 0,
          }}>
            {career.reality}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function EERoadmap() {
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
      <PcbGrid />

      {/* ── Content wrapper ── */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <header style={{
          padding: "40px 24px 32px",
          maxWidth: 860,
          margin: "0 auto",
          borderBottom: `1px solid ${T.border}`,
        }}>
          {/* Eyebrow */}
          <div style={{
            fontFamily: T.fontMono,
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: T.amber,
            marginBottom: 14,
            opacity: 0.85,
          }}>
            ◈ Career Roadmap · USA · 2026
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: T.fontDisplay,
            fontWeight: 700,
            fontSize: "clamp(28px, 6vw, 48px)",
            color: "#f1f5f9",
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            Electrical Engineering
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: T.fontBody,
            fontWeight: 300,
            fontSize: 15,
            color: T.slate,
            marginTop: 10,
            marginBottom: 0,
            maxWidth: 560,
            lineHeight: 1.5,
          }}>
            From circuit fundamentals to chip design, power grids, RF systems, and the frontier of AI hardware.
          </p>

          {/* Stat bar */}
          <div style={{
            display: "flex",
            gap: 24,
            marginTop: 22,
            flexWrap: "wrap",
          }}>
            {[
              { label: "BLS Median Salary", value: "$111,910", color: T.amber },
              { label: "Top IC Design TC", value: "$286K – $590K+", color: T.cyan },
              { label: "PhD Duration", value: "~6–7 years", color: T.violet },
              { label: "Job Growth (2024–34)", value: "7%", color: T.lime },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: T.fontMono, fontSize: 15, fontWeight: 500, color: s.color }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: T.fontMono, fontSize: 9, color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* ── Phase nav ── */}
        <nav style={{
          position: "sticky",
          top: 0,
          background: T.bg + "f0",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${T.border}`,
          zIndex: 10,
          padding: "0 24px",
        }}>
          <div style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "flex",
            overflowX: "auto",
            scrollbarWidth: "none",
            gap: 0,
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
                    borderBottom: active ? `2px solid ${p.color}` : "2px solid transparent",
                    padding: "14px 16px",
                    cursor: "pointer",
                    fontFamily: T.fontDisplay,
                    fontWeight: active ? 600 : 400,
                    fontSize: 13,
                    color: active ? p.color : T.slate,
                    whiteSpace: "nowrap",
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                >
                  {p.label}
                  <span style={{
                    fontFamily: T.fontMono,
                    fontSize: 9,
                    marginLeft: 6,
                    opacity: 0.55,
                    color: active ? p.color : T.muted,
                  }}>
                    {p.years}
                  </span>
                </button>
              );
            })}
            {/* Career Paths tab */}
            <button
              onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
              style={{
                background: "none",
                border: "none",
                borderBottom: showCareers ? `2px solid ${T.amber}` : "2px solid transparent",
                padding: "14px 16px",
                cursor: "pointer",
                fontFamily: T.fontDisplay,
                fontWeight: showCareers ? 600 : 400,
                fontSize: 13,
                color: showCareers ? T.amber : T.slate,
                whiteSpace: "nowrap",
                transition: "color 0.15s, border-color 0.15s",
              }}
            >
              Career Paths
            </button>
          </div>
        </nav>

        {/* ── Main content ── */}
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "28px 24px 60px" }}>

          {!showCareers && phase ? (
            <>
              {/* Phase intro */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{
                    fontFamily: T.fontMono,
                    fontSize: 10,
                    color: phase.color,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}>
                    ◈ {phase.label} · {phase.years}
                  </span>
                </div>
                <p style={{
                  fontFamily: T.fontBody,
                  fontSize: 14,
                  color: T.slate,
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 660,
                  borderLeft: `2px solid ${phase.color}`,
                  paddingLeft: 14,
                }}>
                  {phase.intro}
                </p>
              </div>

              {/* Section tabs */}
              <div style={{
                display: "flex",
                overflowX: "auto",
                scrollbarWidth: "none",
                gap: 6,
                marginBottom: 20,
                paddingBottom: 4,
              }}>
                {phase.sections.map((sec, i) => {
                  const active = activeSection === i;
                  return (
                    <button
                      key={sec.title}
                      onClick={() => handleSectionChange(i)}
                      style={{
                        background: active ? phase.color + "22" : T.surface,
                        border: `1px solid ${active ? phase.color + "66" : T.border}`,
                        borderRadius: 20,
                        padding: "7px 14px",
                        cursor: "pointer",
                        fontFamily: T.fontBody,
                        fontSize: 12,
                        fontWeight: active ? 600 : 400,
                        color: active ? phase.color : T.slate,
                        whiteSpace: "nowrap",
                        transition: "all 0.15s",
                      }}
                    >
                      {sec.icon} {sec.title}
                    </button>
                  );
                })}
              </div>

              {/* Items */}
              {section && (
                <div>
                  {section.items.map((item, idx) => (
                    <ExpandableItem
                      key={item.name}
                      item={item}
                      idx={idx}
                      expanded={expandedItem}
                      onToggle={setExpandedItem}
                      accentColor={phase.color}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {/* Careers header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  fontFamily: T.fontMono,
                  fontSize: 10,
                  color: T.amber,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}>
                  ◈ 8 Career Destinations
                </div>
                <p style={{
                  fontFamily: T.fontBody,
                  fontSize: 14,
                  color: T.slate,
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 620,
                  borderLeft: `2px solid ${T.amber}`,
                  paddingLeft: 14,
                }}>
                  EE is one of the widest-range engineering disciplines for career destinations. Compensation spans $95K to $590K+ depending on subfield, sector, credential, and geography. Tap any card to see the honest competitive picture.
                </p>
              </div>

              {/* Card grid */}
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

        {/* ── Footer ── */}
        <footer style={{
          borderTop: `1px solid ${T.border}`,
          padding: "16px 24px",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: T.fontMono,
            fontSize: 10,
            color: T.muted,
            margin: 0,
            letterSpacing: "0.08em",
          }}>
            Tap any item to expand · Salary data: BLS May 2024, Glassdoor & Levels.fyi 2026 · TC = total compensation including equity
          </p>
        </footer>
      </div>
    </div>
  );
}
