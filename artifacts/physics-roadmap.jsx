import { useState } from "react";

// ─── DESIGN SYSTEM ────────────────────────────────────────────────────────────
// Aesthetic: Precision-scientific / deep-space observatory
// Palette: near-black void backgrounds, cold steel midtones, electric cyan + gold accents
// Fonts: "DM Serif Display" (headers) + "IBM Plex Mono" (data/labels) + "DM Sans" (body)
// Feel: like the inside of a real scientific instrument — calibrated, exact, atmospheric

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap');
`;

const C = {
  void:    "#050810",
  deep:    "#090d1a",
  panel:   "#0e1424",
  surface: "#141b2e",
  border:  "#1e2a45",
  steel:   "#2a3a5c",
  muted:   "#4a5a7a",
  dim:     "#7a8aaa",
  text:    "#c8d4ea",
  bright:  "#e8f0ff",
  cyan:    "#00d4ff",
  cyanDim: "#0090b0",
  gold:    "#f0b030",
  goldDim: "#a07020",
  green:   "#00e0a0",
  rose:    "#ff6080",

  // Phase accent colors
  undergrad: "#00d4ff",   // electric cyan
  masters:   "#f0b030",   // gold
  phd:       "#a070ff",   // violet
  career:    "#00e0a0",   // green
};

const S = {
  // Noise/grain texture overlay via SVG
  grain: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      color: C.cyan,
      colorDim: C.cyanDim,
      intro: "A physics bachelor's is one of the most demanding STEM degrees — and one of the most versatile. Four years of intense mathematical and experimental training culminates in a credential that opens doors to graduate school in almost any scientific field, plus direct entry into finance, tech, defense, and data science. The weeder reputation is real: upper-division E&M, quantum mechanics, and classical mechanics are the courses that separate students who understand the math from those who can use it.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "⚛️",
          items: [
            { name: "Introductory Mechanics & E&M", detail: "Calculus-based two-semester spine covering Newton's laws through Maxwell's equations. Sets the mathematical foundation — vectors, integrals, differential equations — and the physical intuition everything else builds on." },
            { name: "Modern Physics", detail: "Special relativity, the photoelectric effect, Bohr model, wave-particle duality, and a taste of nuclear physics. This is where classical physics ends and the 20th century begins." },
            { name: "Classical / Analytical Mechanics", detail: "Lagrangian and Hamiltonian mechanics, central-force problems, oscillations, chaos. Uses Thornton & Marion or Taylor. Notoriously abstract at first; foundational for quantum mechanics, field theory, and every advanced course." },
            { name: "Electromagnetism I & II", detail: "From electrostatics through Maxwell's equations and radiation using Griffiths, then Jackson for graduate-bound students. The Griffiths-to-Jackson step is the classic undergraduate 'wall' — where the math becomes unforgiving." },
            { name: "Quantum Mechanics I–II", detail: "Schrödinger equation, Hilbert spaces, hydrogen atom, angular momentum, spin, identical particles, perturbation theory. Griffiths first; Sakurai or Shankar for the second semester. Along with E&M, the defining course of a physics degree." },
            { name: "Statistical Mechanics & Thermodynamics", detail: "Entropy, partition functions, canonical/grand canonical ensembles, phase transitions, Bose-Einstein and Fermi-Dirac statistics. Schroeder is the standard undergraduate text. Essential for condensed matter, biophysics, and astrophysics." },
            { name: "Mathematical Methods for Physicists", detail: "PDEs, Fourier series/transforms, complex analysis, special functions (Legendre, Bessel, spherical harmonics), linear algebra. Acts as the gatekeeper because it underpins E&M, QM, and classical mechanics simultaneously." },
            { name: "Advanced Experimental Lab", detail: "Multi-week experiments: optical spectroscopy, nuclear/radioactive decay, lock-in amplifier techniques, vacuum systems, data analysis with proper error propagation. The place where theory meets measurement — often the most memorable course for experimentalists." },
          ],
        },
        {
          title: "Lab & Computation",
          icon: "🔬",
          items: [
            { name: "Python Scientific Stack", detail: "NumPy, SciPy, Matplotlib, Pandas, and Jupyter notebooks are now the default in most US physics programs. Python has largely displaced MATLAB for data analysis and visualization in research contexts." },
            { name: "MATLAB & Mathematica", detail: "MATLAB is still common in experimental labs and required in some programs; Mathematica for symbolic computation, analytic solutions, and quick sanity-checks on complex integrals." },
            { name: "LaTeX & Scientific Writing", detail: "Required for formal lab reports and essential for any graduate-school application, paper submission, or thesis. Learning LaTeX early saves enormous time later; tools like Overleaf have lowered the barrier." },
            { name: "Error Analysis & Statistics", detail: "Systematic vs. random error, propagation of uncertainty, chi-squared fitting, least-squares regression, and basic Bayesian reasoning. Underappreciated as a skill and enormously valued in industry data roles." },
            { name: "Lab Electronics", detail: "Oscilloscopes, function generators, lock-in amplifiers, ADC/DAC, op-amps, FETs, and logic gates. Many condensed-matter and AMO labs still expect you to build and debug circuits." },
            { name: "C++, Fortran & Computational Physics", detail: "Some programs introduce C++ or Fortran via a dedicated computational-physics course covering finite-element/PDE solvers, Monte Carlo methods, and molecular dynamics. Particle physicists and nuclear physicists lean heavily on C++ (ROOT/GEANT4)." },
          ],
        },
        {
          title: "High-Value Opportunities",
          icon: "🚀",
          items: [
            { name: "NSF REU Programs", detail: "~700 NSF-funded Research Experiences for Undergraduates sites across the US, paying roughly $7,000 for 10 weeks plus housing and travel. Cornell's astrophysics REU, for example, offers $7,000 stipend + $1,250 housing/meals + up to $800 travel. Competitive but achievable from any school — and the single strongest signal on a PhD application." },
            { name: "DOE SULI (Science Undergraduate Laboratory Internships)", detail: "Paid 10-week summer or 16-week semester internships at 17 national labs — Fermilab, SLAC, Argonne, Oak Ridge, PPPL, NREL, and more. ~$650/week stipend; requires US citizenship or permanent residency and a 3.0+ GPA. Direct experience with real research infrastructure." },
            { name: "Undergraduate Research with a Faculty Member", detail: "The single highest-signal activity for PhD admissions. One genuine research relationship — resulting in a poster, internal report, or co-authorship — demonstrates you can actually do physics, not just learn it. Start approaching professors by the end of freshman year." },
            { name: "Society of Physics Students (SPS)", detail: "National organization with chapters at most physics departments. Provides community, conference travel grants, a path to Sigma Pi Sigma (the physics honor society), and signals commitment to the field on applications." },
            { name: "Physics GRE & Graduate Planning", detail: "The Physics GRE (pGRE) is optional at most top PhD programs now but still used by some. If you plan to apply broadly, prep for it. More importantly: by junior year, map your target programs, identify faculty whose research excites you, and build relationships via email before applying." },
          ],
        },
      ],
    },

    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      color: C.gold,
      colorDim: C.goldDim,
      intro: "The master's stage in physics is unusual: for the majority of PhD-bound students, there is no separate master's — you enter a funded PhD directly and often receive the MS 'en route.' A standalone master's degree is worth pursuing only in specific circumstances: to repair a weak undergraduate record, to pivot from an adjacent field, or to earn a professional credential for a specific industry track like medical physics or quantum computing. Paying for a generic terminal MS in order to get into a PhD program is almost never financially optimal.",
      sections: [
        {
          title: "Program Types",
          icon: "📋",
          items: [
            { name: "Thesis-Based MS (~2 years)", detail: "Coursework plus an original research thesis. Best choice if you want to strengthen a PhD application — a thesis with results and faculty letters carries real weight. Rarely funded for standalone master's students." },
            { name: "Course-Based / Non-Thesis MS", detail: "Typically 30–36 credits, ~1 year, culminating in a comprehensive exam or capstone. Career-oriented and faster; appropriate if you want the credential without a research commitment. Carries the industry-facing advantage of being structured around professional skills." },
            { name: "Professional Science Master's (PSM)", detail: "Combines advanced science with business, policy, or communication courses plus a professional internship. Designed explicitly for industry transitions rather than academic research. Niche but growing at schools like Indiana, Michigan, and UCSB." },
            { name: "MS 'En Route' to PhD", detail: "The most common outcome for PhD students: after completing the graduate coursework sequence, many programs award an MS before the student proceeds to dissertation. No separate application, no separate tuition — it comes with the funded PhD package." },
            { name: "Medical Physics MS (CAMPEP-Accredited)", detail: "The required credential for entry into radiation-oncology clinical physics. Named programs: Duke, Columbia, Washington University in St. Louis, Johns Hopkins, Vanderbilt. Verify CAMPEP accreditation before enrolling — it is mandatory for the ABR board exam and residency eligibility." },
            { name: "Quantum / QISE MS (Fast-Growing)", detail: "Emerging category: USC Viterbi (MS in QISE; ~$124,800 average alumni salary 2025), Columbia (MS Quantum Science & Technology), UCLA (Master of Quantum Science & Technology), Stevens Institute (MS Quantum Engineering, alumni hired by IBM/Google/Amazon), University of Arizona (MS Optical Sciences, QISE emphasis, NSF Center for Quantum Networks)." },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            { name: "PhD Programs: Fully Funded", detail: "All students admitted to a US physics PhD program receive financial support — stipend plus full tuition waiver via TA/RA appointments. Stony Brook's stated 9-month TA stipend is $28,000; ranges nationally from ~$28k to ~$45k depending on cost-of-living. This is non-negotiable at research universities: never pay for a physics PhD." },
            { name: "Terminal MS Programs: Usually NOT Funded", detail: "Standalone physics master's students typically pay full tuition. Stony Brook explicitly states MS students 'are not guaranteed any financial support' and 'do pay tuition.' NYU states it is 'the responsibility of the Master student to arrange financing of their studies.' Course-based master's programs are frequently described as departmental revenue sources." },
            { name: "When a Paid MS Is Worth It", detail: "Three defensible cases: (1) You have a weak/non-traditional undergrad record and need thesis-based research output to reapply to PhD programs; (2) You are pivoting from engineering or another field and need physics coursework; (3) You are entering a professional track (medical physics, quantum) where the MS is a required credential with high earning potential ($150k–$250k+ for medical physicists)." },
            { name: "Fellowships to Know", detail: "NSF GRFP (the most prestigious graduate fellowship, $37k/year for 3 years — apply in senior year of undergrad or first year of grad school), DOE CSGF (computational science), NDSEG (national defense, requires US citizenship), and Hertz Foundation. Winning one of these changes your PhD options dramatically." },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "🔧",
          items: [
            { name: "Graduate-Level Theoretical Core", detail: "Graduate classical mechanics (Hamilton-Jacobi theory, canonical transformations), graduate E&M (covariant formulation, radiation reaction), graduate quantum (second quantization, path integrals, scattering theory), and statistical mechanics (phase transitions, renormalization group). These are the qualifying-exam courses." },
            { name: "Subfield Specialization Begins", detail: "By the second year you are reading primary literature, attending group meetings, and beginning subfield-specific tools: ROOT and GEANT4 for particle/nuclear, VASP/Quantum ESPRESSO for condensed matter, LabVIEW for experimental control, or the biophysics equivalent (cryo-EM sample prep, single-molecule fluorescence)." },
            { name: "Scientific Communication", detail: "Graduate students present research at group meetings and department seminars, write fellowship and grant proposals, and prepare conference posters. These skills compound dramatically — the physicists with clear writing and strong presentations consistently outperform in the job market." },
            { name: "Teaching & Mentorship", detail: "TA appointments are the standard funding mechanism; most graduate students teach introductory-physics labs and recitations for 1–2 years. Even for those targeting industry, the ability to explain complex concepts clearly is one of the most valued skills employers name." },
          ],
        },
      ],
    },

    {
      id: "phd",
      label: "PhD / Research",
      years: "Years 8+",
      color: "#a070ff",
      colorDim: "#6040b0",
      intro: "A US physics PhD is a 5–6 year apprenticeship funded by the department from day one. Unlike biology, there are rarely formal lab rotations — most students join a research group directly, though informal conversations with multiple faculty in year one are strongly encouraged. The structure: core coursework (years 1–2) → qualifying/comprehensive exam → dissertation research → defense. AIP data show roughly half of new PhDs take postdocs, but ~73% of 'potentially permanent' first positions are in the private sector — meaning the PhD is increasingly a launchpad into industry, not a guarantee of academic continuity.",
      sections: [
        {
          title: "PhD Structure",
          icon: "🎓",
          items: [
            { name: "Coursework & Qualifying Exams", detail: "Years 1–2 are dominated by the graduate core: classical mechanics, electrodynamics, quantum mechanics, statistical mechanics. Most programs require passing a qualifying or comprehensive exam by the end of year 2 (e.g., Pittsburgh requires passing by year 2). Failure rates are significant; this is the second major academic filter after the undergraduate E&M/QM gauntlet." },
            { name: "Advisor & Thesis Committee", detail: "You will spend years 2–5+ working with a single advisor whose research direction, temperament, and lab funding will shape your PhD more than any other factor. The thesis committee (typically 4–5 faculty) provides periodic oversight and a path of appeal if advisor relationships break down. Choose both carefully." },
            { name: "Time to Degree", detail: "AIP and program data put the median at ~5.5–6.1 years (Pittsburgh cites 6.1). Condensed matter and AMO tend toward 5–6; HEP and astrophysics occasionally run longer (6–7+) due to experiment timelines. An unusually short PhD (4 years) with a strong publication record is more valuable than a long one with few papers." },
            { name: "Funding Model", detail: "Fully funded: stipend ($28k–$45k depending on program and COL) plus tuition waiver, via TA or RA appointments. Stony Brook's current 9-month TA stipend is $28,000. NIH and NSF training grants may supplement in biophysics. Never pay for a physics PhD — if you are not funded, something is wrong with the offer." },
            { name: "Postdoc Reality", detail: "Per AIP (classes of 2020–21, 2021–22), ~50% of new PhDs take a postdoc (~$55k–$70k, 2–3 years). Postdocs are nearly mandatory for a tenure-track faculty position (2–3 typical). For industry, they are optional and sometimes counterproductive — industry values fresh PhDs with recent skills over researchers who spent 6 years on a highly specialized academic problem." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🌌",
          items: [
            { name: "Condensed Matter: Moiré & Topology", detail: "Magic-angle twisted bilayer graphene hosts unconventional superconductivity and correlated insulator phases. Twisted MoTe₂ bilayers show the fractional quantum anomalous Hall effect and fractional Chern insulators (multiple 2024 Nature papers). Topological materials (Weyl/Dirac semimetals), quantum spin liquids, and high-Tc superconductivity remain among the most active frontiers in all of physics." },
            { name: "Astrophysics: JWST & Gravitational Waves", detail: "JWST's JADES survey found unexpectedly bright, massive galaxies at z>10 (universe <400 Myr old), straining galaxy-formation models. LIGO-Virgo-KAGRA's O4 run logged its 200th gravitational-wave candidate on March 19, 2025; O4 concluded November 2025 with ~250 real-time candidates (cumulative ~390 confirmed events), including 'mass-gap' objects and the first confirmed neutron-star–black-hole binaries." },
            { name: "AMO: Atomic Clocks & Quantum Computing", detail: "JILA's strontium optical lattice clock reached a total systematic uncertainty of 8.1×10⁻¹⁹ (Phys. Rev. Lett. 133, July 2024) — the lowest of any clock ever built — driving talk of redefining the SI second. Neutral-atom quantum computing is surging: Atom Computing >1,000 atoms, QuEra's 48-logical-qubit demonstration (2023), Pasqal ~1,000 atoms with 2025 roadmap toward fault-tolerance." },
            { name: "HEP: Post-Higgs Precision Era", detail: "The Muon g-2 experiment released its final result June 3, 2025 (aμ = 0.001165920705(114), 127 ppb precision). It now agrees closely with a revised Standard Model prediction incorporating improved lattice QCD theory — the long-standing anomaly suggesting new physics is 'severely undermined.' Dark-matter searches: LUX-ZEPLIN/LZ set world-best WIMP limits (Dec 2025, no WIMPs found 3–9 GeV/c²). DUNE neutrino experiment (Fermilab) targets ~2030+ science era." },
            { name: "Biophysics: Cryo-EM & Active Matter", detail: "Cryo-EM PDB depositions rose from 67 (2012) to 5,788 (2024), now the dominant structural biology method. AI models (AlphaFold3, ModelAngelo) are actively coupled to cryo-EM for automated structure determination. Active matter physics and mechanobiology — treating cells and tissues as non-equilibrium physical systems — are the fastest-growing subfield adjacencies." },
            { name: "Nuclear: FRIB & Neutron Stars", detail: "The Facility for Rare Isotope Beams (MSU) reached 20 kW beam power in March 2025 and discovered five never-before-seen isotopes (Tm-182/183, Yb-186/187, Lu-190; Phys. Rev. Lett. 2024). NASA's NICER X-ray pulsar-profiling constrained neutron-star mass-radius relations (PSR J0437−4715, 2024), connecting nuclear structure to astrophysical observation." },
            { name: "AI/ML in Physics: Real vs. Hype", detail: "Genuine transformation: deep learning for LHC event classification, jet tagging, anomaly detection, and detector simulation; neural networks for telescope-survey image processing; ML-accelerated DFT and interatomic potentials; AlphaFold-adjacent structural biophysics. The 2024 Nobel Physics Prize went to Hopfield & Hinton. Overhyped: AI does not autonomously discover new physical laws; PINNs and surrogate models are useful accelerators with real accuracy/generalization limitations." },
          ],
        },
        {
          title: "Tools & Software",
          icon: "💻",
          items: [
            { name: "Python Ecosystem (Universal)", detail: "NumPy, SciPy, Matplotlib, Pandas, Jupyter — now expected in every subfield. Git/GitHub for version control. By PhD year 1, you should be able to write clean, reproducible analysis pipelines; by year 3, you should be able to train a basic neural network and use scikit-learn or PyTorch for data analysis." },
            { name: "ROOT & GEANT4 (Particle / Nuclear)", detail: "ROOT (CERN) is the standard data-analysis framework for particle and nuclear physics — C++-based, with Python bindings. GEANT4 simulates particle passage through matter and is used in detector design, medical physics, and space-radiation studies. Both require C++ proficiency." },
            { name: "VASP & Quantum ESPRESSO (Condensed Matter)", detail: "VASP and Quantum ESPRESSO implement density functional theory (DFT) for computing electronic structure of materials. VASP requires a paid license (common at university clusters); Quantum ESPRESSO is open-source. Both are computationally intensive and run on HPC clusters — SLURM job-submission is a practical must." },
            { name: "LabVIEW & Instrument Control", detail: "National Instruments' LabVIEW is the dominant data-acquisition and instrument-control environment in experimental condensed matter, AMO, and biophysics labs. Python (via PyVISA) is increasingly replacing it, but LabVIEW remains the lingua franca in many hardware-heavy labs." },
            { name: "ML Frameworks: PyTorch / TensorFlow", detail: "PyTorch dominates research; TensorFlow more common in production and some older HEP pipelines. Graph neural networks (materials, particle reconstruction), physics-informed neural networks (PINNs), normalizing flows (posterior estimation), and transformers appear regularly in current physics papers. Knowing PyTorch is now a baseline expectation in most subfields." },
            { name: "HPC Clusters & Scientific Computing", detail: "Virtually all computationally intensive physics research runs on university or national HPC clusters (NERSC, XSEDE/ACCESS, DOE ALCF/OLCF). Proficiency with Linux, bash scripting, SLURM/PBS job scheduling, and parallel computing (MPI/OpenMP) is expected by year 2 of a computational or theory PhD." },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Academia",
      icon: "🏛️",
      color: C.cyan,
      roles: ["Graduate RA / TA", "Postdoctoral Researcher", "Assistant Professor", "Associate Professor (Tenured)", "Full Professor / Endowed Chair"],
      reality: "The most intellectually prestigious path and the most brutal funnel. Roughly 10–21% of physics PhDs ever land a tenure-track faculty position; two to three postdocs (~$55k–$70k each) are now the norm before a competitive job search. Geographic immobility is severe — you go where the offer is. Per AAUP (2024–25), only ~31.8% of all US faculty are tenured or tenure-track; nontenured positions hold steady at 21% of physics-department faculty. If you love research and can tolerate the uncertainty, it remains the route to the most intellectually autonomous career in science. If you cannot, exit deliberately after one postdoc rather than drifting.",
      salary: "$55k–$75k (postdoc) → $80k–$110k (asst. prof.) → $150k–$200k+ (full prof.)",
    },
    {
      path: "National Laboratories",
      icon: "⚗️",
      color: "#60a0ff",
      roles: ["Postdoctoral Associate", "Associate Scientist", "Staff Scientist / Research Physicist", "Senior Scientist", "Group Leader / Division Director"],
      reality: "DOE labs (Fermilab, SLAC, Argonne, Oak Ridge, Brookhaven, NREL, PPPL) and NIST/NASA offer the closest thing to academic research with more institutional stability. A postdoc is still the standard entry. Staff scientist positions are coveted and competitive — but once secured, you work on cutting-edge instruments without grant-writing pressure consuming half your life. Funding is appropriation-dependent, and occasional budget squeezes create uncertainty. Requires US citizenship for many positions (especially at NNSA labs); clearances open additional roles.",
      salary: "$70k–$90k (postdoc) → $120k–$180k (staff scientist) → $180k–$260k+ (senior/group leader)",
    },
    {
      path: "Quantum Computing",
      icon: "🔮",
      color: "#c080ff",
      roles: ["Quantum Research Intern", "Quantum Hardware / Software Engineer", "Quantum Algorithms Researcher", "Senior Quantum Scientist", "Principal Research Scientist"],
      reality: "IBM Quantum, Google Quantum AI, IonQ, Rigetti, PsiQuantum, Quantinuum, Microsoft, QuEra, Atom Computing, and Pasqal all recruit physics PhDs heavily. The roles are real and the science is live — but the market is maturing off its 2021–2022 hype peak and consolidating. Most roles now demand specific technical skills: Qiskit or Cirq programming, cryogenic systems and dilution refrigerators (for superconducting qubits), ion-trap control electronics, quantum error correction, or AMO experimental techniques. A physics PhD in condensed matter, AMO, or HEP with strong programming is highly competitive. 'Quantum software' roles are accessible with less hardware background.",
      salary: "$130k–$180k (entry PhD) → $160k–$280k → $200k–$400k+ (principal/research fellow, total comp at big tech)",
    },
    {
      path: "Quantitative Finance",
      icon: "📈",
      color: C.gold,
      roles: ["Quantitative Research Intern", "Quantitative Researcher (QR)", "Quantitative Developer / Quant Dev", "Senior Quant Researcher", "Portfolio Manager / Partner"],
      reality: "The single highest-paying mainstream destination for physics PhDs. Citadel, Two Sigma, D.E. Shaw, Renaissance Technologies, Jane Street, Hudson River Trading, Five Rings, and Point72 actively recruit physics PhD talent for their analytical firepower, comfort with uncertainty, and modeling skills. H1B filings put average quant researcher base salary around $190k–$198k (NY); top firms pay $300k flat base, with total comp routinely $300k–$700k+. The bar is rising — firms increasingly want a top-tier PhD, strong coding in Python/C++, and ideally a publication record demonstrating original quantitative work. The lifestyle is intense but the compensation is unlike any other physics career.",
      salary: "$200k–$450k (entry/mid PhD) → $300k–$700k+ (senior QR, total comp at top firms)",
    },
    {
      path: "Tech / AI / Data Science",
      icon: "🤖",
      color: C.green,
      roles: ["Data Scientist", "ML Engineer", "Research Scientist (AI Lab)", "Senior ML Researcher", "Principal Scientist / Staff Research Engineer"],
      reality: "Physics PhDs are prized for the combination of statistical rigor, comfort with complex models, and real coding ability. Roles range from applied data science ($110k–$160k) to top-tier AI research positions at Google DeepMind, OpenAI, Meta FAIR, and Microsoft Research ($200k–$500k+ total comp). A PhD is preferred — sometimes required — for research-scientist roles; ML engineering and data science roles are often accessible with a BS or MS plus strong project work. Per BLS, data scientist employment is projected to grow 34% through 2034. The best physics-to-tech angle: ML for scientific applications, where your domain knowledge is a genuine differentiator.",
      salary: "$110k–$170k (data scientist / ML engineer) → $200k–$500k+ (research scientist, top AI labs, with equity)",
    },
    {
      path: "Medical Physics",
      icon: "🏥",
      color: "#ff8060",
      roles: ["Medical Physics Resident (CAMPEP)", "Junior Clinical Medical Physicist", "Clinical Medical Physicist", "Chief / Lead Medical Physicist", "Director of Medical Physics"],
      reality: "The most stable and unusually well-compensated path that never gets enough attention. Requires a CAMPEP-accredited MS or PhD in medical physics, a 2-year accredited residency (applied via MedPhys Match), and ABR board certification. The residency is the brutal chokepoint — CAMPEP graduate-program output has historically outpaced accredited residency slots roughly 3:1. Once board-certified, demand is strong: hospitals always need qualified radiation-oncology physicists, and the licensure barrier insulates the field from automation pressure. Residents earn ~$67k–$69k (e.g., UF 2025–26 rates); board-certified physicists typically earn $150k–$250k+ in clinical roles.",
      salary: "$67k–$72k (resident) → $150k–$200k (clinical) → $200k–$260k+ (lead/director)",
    },
    {
      path: "Defense & Aerospace",
      icon: "🛸",
      color: "#80c0ff",
      roles: ["Research Engineer / Scientist (Entry)", "Senior Systems Engineer", "Principal Research Physicist", "Program Manager", "Chief Scientist / Technical Fellow"],
      reality: "Lockheed Martin, Raytheon (RTX), Northrop Grumman, Boeing, General Dynamics, DARPA, Army Research Lab (ARL), Naval Research Lab (NRL), and NNSA labs (Los Alamos, Lawrence Livermore, Sandia) maintain steady demand for physicists across photonics/optics, RF and radar, directed energy, hypersonics, and space systems. US citizenship is typically required; a security clearance is a durable career moat that meaningfully increases compensation and job security. Salaries are lower than finance or top tech, but stability is high and the mission is tangible. Raytheon aerospace engineers range from ~$90k (P1) to ~$200k (P5); senior technical and clearance-gated roles frequently exceed $200k total comp.",
      salary: "$90k–$130k (entry) → $140k–$200k (senior) → $200k–$280k+ (principal/fellow, clearance)",
    },
    {
      path: "Policy, Education & Science Communication",
      icon: "📡",
      color: "#f0a060",
      roles: ["Science & Technology Policy Fellow (AAAS/APS)", "Congressional Science Fellow", "NSF / DOE Program Officer", "Science Journalist / Writer", "Physics Teacher / Museum Educator"],
      reality: "A smaller but deeply mission-driven path. AAAS Science & Technology Policy Fellowships place PhDs in federal agencies and Congressional offices (~$78k–$101k+ depending on experience track); the APS Congressional Fellowship is equivalent. Permanent program-officer roles at NSF and DOE require the same research credentials as academia but reward policy communication over discovery. Science journalism (Nature, Science, Physics Today, NYT Science Desk) rewards writing ability and breadth. K–12 physics teaching is chronically undersupplied and can qualify for federal loan-forgiveness programs, though salaries vary enormously by state and district.",
      salary: "$60k–$87k (fellow/teaching) → $80k–$120k (program officer/journalism) → $100k–$140k+ (senior policy)",
    },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function PhysicsRoadmap() {
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

  const handleSectionChange = (i) => {
    setActiveSection(i);
    setExpandedItem(null);
  };

  const handleItemToggle = (i) => {
    setExpandedItem(expandedItem === i ? null : i);
  };

  // ── Starfield background (pure CSS, no canvas)
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 4,
  }));

  return (
    <>
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { background: ${C.void}; }

        .pr-root {
          min-height: 100vh;
          background: ${C.void};
          color: ${C.text};
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Stars ── */
        .pr-star {
          position: absolute;
          border-radius: 50%;
          background: white;
          pointer-events: none;
          animation: pr-twinkle var(--dur, 3s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        @keyframes pr-twinkle {
          0%, 100% { opacity: var(--base-op, 0.2); }
          50% { opacity: calc(var(--base-op, 0.2) * 2.5); }
        }

        /* ── Horizon glow ── */
        .pr-horizon {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: 220px;
          background: radial-gradient(ellipse 80% 100% at 50% 120%, rgba(0,212,255,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Grid lines ── */
        .pr-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* ── Header ── */
        .pr-header {
          position: relative;
          z-index: 10;
          padding: 48px 24px 32px;
          text-align: center;
          border-bottom: 1px solid ${C.border};
          background: linear-gradient(180deg, rgba(0,212,255,0.04) 0%, transparent 100%);
        }
        .pr-eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          color: ${C.cyan};
          text-transform: uppercase;
          margin-bottom: 12px;
          opacity: 0.8;
        }
        .pr-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 6vw, 3.8rem);
          color: ${C.bright};
          line-height: 1.05;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .pr-title span {
          color: ${C.cyan};
          font-style: italic;
        }
        .pr-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: ${C.dim};
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ── Phase nav ── */
        .pr-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          overflow-x: auto;
          gap: 2px;
          background: rgba(5,8,16,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid ${C.border};
          padding: 0 12px;
          scrollbar-width: none;
        }
        .pr-nav::-webkit-scrollbar { display: none; }
        .pr-nav-btn {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 14px 20px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${C.muted};
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
          position: relative;
        }
        .pr-nav-btn:hover { color: ${C.text}; }
        .pr-nav-btn.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
        .pr-nav-years {
          font-size: 9px;
          color: ${C.muted};
          letter-spacing: 0.5px;
        }
        .pr-nav-btn.active .pr-nav-years { color: var(--accent); opacity: 0.6; }

        /* ── Body ── */
        .pr-body {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
          padding: 32px 16px 80px;
        }

        /* ── Phase intro ── */
        .pr-intro {
          background: ${C.panel};
          border: 1px solid ${C.border};
          border-left: 3px solid var(--phase-color, ${C.cyan});
          border-radius: 8px;
          padding: 20px 24px;
          margin-bottom: 28px;
          font-size: 14px;
          line-height: 1.75;
          color: ${C.dim};
        }

        /* ── Section tabs ── */
        .pr-sections {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          margin-bottom: 20px;
          scrollbar-width: none;
          flex-wrap: wrap;
        }
        .pr-sections::-webkit-scrollbar { display: none; }
        .pr-section-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: ${C.panel};
          border: 1px solid ${C.border};
          border-radius: 6px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: ${C.muted};
          transition: all 0.18s;
          white-space: nowrap;
        }
        .pr-section-btn:hover {
          border-color: ${C.steel};
          color: ${C.text};
        }
        .pr-section-btn.active {
          background: rgba(0,212,255,0.06);
          border-color: var(--phase-color, ${C.cyan});
          color: var(--phase-color, ${C.cyan});
        }

        /* ── Item list ── */
        .pr-items { display: flex; flex-direction: column; gap: 6px; }

        .pr-item {
          background: ${C.panel};
          border: 1px solid ${C.border};
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.18s;
        }
        .pr-item:hover { border-color: ${C.steel}; }
        .pr-item.open { border-color: var(--phase-color, ${C.cyan}); }

        .pr-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          cursor: pointer;
          gap: 12px;
        }
        .pr-item-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: ${C.text};
          flex: 1;
        }
        .pr-item.open .pr-item-name { color: var(--phase-color, ${C.cyan}); }
        .pr-item-chevron {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: ${C.muted};
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .pr-item.open .pr-item-chevron { transform: rotate(90deg); color: var(--phase-color, ${C.cyan}); }
        .pr-item-detail {
          padding: 0 18px 16px 18px;
          font-size: 13px;
          line-height: 1.75;
          color: ${C.dim};
          border-top: 1px solid ${C.border};
          padding-top: 12px;
          margin-top: -2px;
        }

        /* ── Career grid ── */
        .pr-careers {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 14px;
        }
        .pr-career-card {
          background: ${C.panel};
          border: 1px solid ${C.border};
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.18s, transform 0.18s;
          cursor: pointer;
        }
        .pr-career-card:hover { transform: translateY(-2px); }
        .pr-career-card.open { border-color: var(--card-color); }

        .pr-career-header {
          padding: 18px 18px 14px;
        }
        .pr-career-icon {
          font-size: 26px;
          margin-bottom: 10px;
          display: block;
        }
        .pr-career-title {
          font-family: 'DM Serif Display', serif;
          font-size: 17px;
          color: var(--card-color);
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .pr-career-roles {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .pr-role-chip {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.05);
          color: ${C.dim};
          border: 1px solid ${C.border};
        }

        .pr-career-expand {
          border-top: 1px solid ${C.border};
          padding: 14px 18px;
        }
        .pr-career-reality {
          font-size: 12.5px;
          line-height: 1.72;
          color: ${C.dim};
          margin-bottom: 12px;
        }
        .pr-salary-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(240,176,48,0.1);
          border: 1px solid rgba(240,176,48,0.3);
          border-radius: 6px;
          padding: 6px 12px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          color: ${C.gold};
        }

        /* ── Footer hint ── */
        .pr-footer {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 20;
          text-align: center;
          padding: 10px 16px;
          background: rgba(5,8,16,0.9);
          border-top: 1px solid ${C.border};
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          color: ${C.muted};
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        /* ── Section label ── */
        .pr-section-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${C.muted};
          margin-bottom: 12px;
        }
      `}</style>

      <div className="pr-root">
        {/* Stars */}
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          {stars.map((s) => (
            <div
              key={s.id}
              className="pr-star"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                "--base-op": s.opacity,
                "--dur": `${2 + s.delay}s`,
                "--delay": `${s.delay}s`,
              }}
            />
          ))}
        </div>
        <div className="pr-grid" />
        <div className="pr-horizon" />

        {/* Header */}
        <header className="pr-header">
          <div className="pr-eyebrow">Field of Study Roadmap · USA · 2026</div>
          <h1 className="pr-title">
            <span>Physics</span>
          </h1>
          <p className="pr-subtitle">
            From classical mechanics to quantum frontiers — a practitioner's guide to the degrees, tools, and careers of a physics education in the United States.
          </p>
        </header>

        {/* Nav */}
        <nav className="pr-nav">
          {data.phases.map((p) => (
            <button
              key={p.id}
              className={`pr-nav-btn ${!showCareers && activePhase === p.id ? "active" : ""}`}
              style={{ "--accent": p.color }}
              onClick={() => handlePhaseChange(p.id)}
            >
              {p.label}
              <span className="pr-nav-years">{p.years}</span>
            </button>
          ))}
          <button
            className={`pr-nav-btn ${showCareers ? "active" : ""}`}
            style={{ "--accent": C.green }}
            onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
          >
            Career Paths
            <span className="pr-nav-years">8 Destinations</span>
          </button>
        </nav>

        {/* Body */}
        <main className="pr-body">
          {!showCareers ? (
            <div style={{ "--phase-color": phase.color }}>
              {/* Phase intro */}
              <div className="pr-intro" style={{ "--phase-color": phase.color }}>
                {phase.intro}
              </div>

              {/* Section tabs */}
              <div className="pr-sections">
                {phase.sections.map((s, i) => (
                  <button
                    key={i}
                    className={`pr-section-btn ${activeSection === i ? "active" : ""}`}
                    style={{ "--phase-color": phase.color }}
                    onClick={() => handleSectionChange(i)}
                  >
                    {s.icon} {s.title}
                  </button>
                ))}
              </div>

              {/* Items */}
              {section && (
                <>
                  <div className="pr-section-label">{section.icon} {section.title}</div>
                  <div className="pr-items">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className={`pr-item ${expandedItem === i ? "open" : ""}`}
                        style={{ "--phase-color": phase.color }}
                      >
                        <div
                          className="pr-item-header"
                          onClick={() => handleItemToggle(i)}
                        >
                          <span className="pr-item-name">{item.name}</span>
                          <span className="pr-item-chevron">▶</span>
                        </div>
                        {expandedItem === i && (
                          <div className="pr-item-detail">{item.detail}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="pr-intro" style={{ "--phase-color": C.green, borderLeftColor: C.green }}>
                Eight distinct destinations for a physics graduate — from the tenure-track faculty tournament to the highest-paid quant funds on Wall Street. Tap any card to see the full competitive picture and current salary range.
              </div>
              <div className="pr-careers">
                {data.careers.map((c, i) => (
                  <div
                    key={i}
                    className={`pr-career-card ${expandedCareer === i ? "open" : ""}`}
                    style={{ "--card-color": c.color }}
                    onClick={() => setExpandedCareer(expandedCareer === i ? null : i)}
                  >
                    <div className="pr-career-header">
                      <span className="pr-career-icon">{c.icon}</span>
                      <div className="pr-career-title">{c.path}</div>
                      <div className="pr-career-roles">
                        {c.roles.map((r, j) => (
                          <span key={j} className="pr-role-chip">{r}</span>
                        ))}
                      </div>
                    </div>
                    {expandedCareer === i && (
                      <div className="pr-career-expand">
                        <p className="pr-career-reality">{c.reality}</p>
                        <div className="pr-salary-badge">
                          💰 {c.salary}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </main>

        <div className="pr-footer">
          Tap any item or career card to expand · Tap again to collapse
        </div>
      </div>
    </>
  );
}
