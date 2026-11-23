import { useState } from "react";

// ─── DESIGN SYSTEM ────────────────────────────────────────────────────────────
// Aesthetic: Celestial atlas / deep-sky survey plate
// Palette: violet-black void, faint starfield, accents pulled from real astronomical
//          color: stellar amber (G-type), [OIII] teal, emission-nebula magenta, hot-blue azure
// Fonts: "Spectral" (display serif, evokes the classic astronomy monograph) +
//        "Space Grotesk" (body) + "Space Mono" (coordinates / data labels)
// Signature: a thin spectrograph gradient strip used as the divider motif, over an
//            ambient nebula glow tinted by the active phase's accent color.

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
`;

const C = {
  void:    "#0a0612",
  deep:    "#0f0a1e",
  panel:   "#150f2a",
  surface: "#1c1638",
  border:  "#2c2350",
  muted:   "#5f547f",
  dim:     "#9a8fc0",
  text:    "#ddd6f0",
  bright:  "#f5f1ff",

  // Phase accents: each a real astronomical color note
  undergrad: "#ffb454",  // stellar amber: the warm foundation (a G-type sun)
  masters:   "#37e0b0",  // [OIII] teal: the transitional glow
  research:  "#c77dff",  // emission-nebula magenta: the exotic frontier
  career:    "#4da8ff",  // hot-blue star: the outward-facing sky

  undergradDim: "#8a5e28",
  mastersDim:   "#1d7a60",
  researchDim:  "#6a4090",
  careerDim:    "#295a8a",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      coord: "α · foundations",
      color: C.undergrad,
      colorDim: C.undergradDim,
      intro:
        "A degree in astronomy and astrophysics is, at its core, applied physics pointed at the sky. The real backbone is the physics-and-math sequence (mechanics, electromagnetism, quantum, statistical mechanics, and the calculus-through-differential-equations spine) with astronomy-specific courses layered on top. Departments say it plainly: graduate admission turns on your physics, your math, and your research experience, which is why so many astro majors come very close to a physics double major. The weeders aren't the star charts: they're upper-division E&M, quantum, and classical mechanics.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📐",
          items: [
            { name: "Introductory & Modern Physics", detail: "The calculus-based mechanics-and-E&M spine, then modern physics: special relativity, photoelectric effect, wave–particle duality. Sets the mathematical and physical intuition everything else builds on." },
            { name: "Classical / Analytical Mechanics", detail: "Lagrangian and Hamiltonian mechanics, central-force orbits, oscillations, chaos (Taylor or Thornton & Marion). Abstract at first, but it's the language of celestial mechanics and the gateway to quantum." },
            { name: "Electromagnetism (Griffiths → Jackson)", detail: "Electrostatics through Maxwell's equations and radiation. The Griffiths-to-Jackson jump is the classic undergraduate wall: where the math turns unforgiving and grad-bound students prove themselves." },
            { name: "Quantum Mechanics", detail: "Schrödinger equation, angular momentum, spin, perturbation theory. Underpins how we read light itself: spectral lines, stellar atmospheres, ionization. Along with E&M, the defining course of the degree." },
            { name: "Statistical Mechanics & Thermodynamics", detail: "Entropy, partition functions, Bose–Einstein and Fermi–Dirac statistics. Directly powers stellar interiors, degenerate matter in white dwarfs and neutron stars, and the physics of the early universe." },
            { name: "The Math Spine", detail: "Multivariable calculus, linear algebra, differential equations, and a mathematical-methods course (Fourier analysis, special functions, PDEs). This sequence quietly gates E&M, quantum, and mechanics all at once." },
            { name: "Stellar Astrophysics", detail: "How stars form, fuse, and die: hydrostatic equilibrium, the HR diagram, nucleosynthesis, stellar remnants. The first course where the physics you've learned explains an actual object in the sky." },
            { name: "Galaxies & Cosmology", detail: "Galactic structure and dynamics, the expanding universe, the CMB, dark matter and dark energy. The large-scale companion to stellar astrophysics and a common upper-division capstone." },
            { name: "Observational & Computational Methods", detail: "How data actually gets made and analyzed: telescopes and detectors, photometry, spectroscopy, coordinate systems, and the statistics of measurement. Where the subject stops being a textbook and becomes a craft." },
          ],
        },
        {
          title: "Observing & Computation",
          icon: "🔭",
          items: [
            { name: "Python + the Astropy Stack", detail: "Python is the field's lingua franca. NumPy, SciPy, Matplotlib, Pandas, and especially astropy (FITS files, coordinates, units, tables) are standard by sophomore year. This is also the single most portable skill you'll build." },
            { name: "Telescopes & Observing Technique", detail: "Hands-on time at a campus or research observatory: pointing, tracking, filters, CCD imaging, and the humbling reality of weather and seeing. Many programs require an observational lab." },
            { name: "Data Reduction: Photometry & Spectroscopy", detail: "Turning raw frames into science: bias/flat/dark calibration, aperture photometry, extracting and calibrating spectra. The unglamorous core skill that separates people who can do research from people who've only read about it." },
            { name: "Statistics & Error Analysis", detail: "Uncertainty propagation, chi-squared and least-squares fitting, and an early taste of Bayesian reasoning. Undervalued by students and enormously valued by every downstream employer." },
            { name: "Unix, Git & the Command Line", detail: "Research runs on Linux, shell scripting, remote servers, and version control. Getting comfortable here early removes a wall that trips up many first-year grad students." },
            { name: "LaTeX & Scientific Writing", detail: "The standard for reports, papers, and every grad-school application. Learning it early (via Overleaf) pays back many times over." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "✦",
          items: [
            { name: "Undergraduate Research with a Faculty Member", detail: "The highest-signal thing you can do. One genuine research relationship (yielding a poster, an internal report, or a co-authored paper) proves you can actually do astronomy. Start knocking on professors' doors by sophomore year." },
            { name: "NSF REU Summer Programs", detail: "Ten-week paid Research Experiences for Undergraduates (stipends of roughly $6,000–$7,000, usually with housing or travel help) at observatories and departments nationwide, open only to US citizens and permanent residents. Competitive but reachable from any school, and one of the strongest lines on a PhD application." },
            { name: "Observatory Summer Programs", detail: "Observatories run their own paid summer programs: NRAO (VLA, VLBA, Green Bank) and the University of Hawaiʻi Institute for Astronomy both fund student researchers through NSF and NASA grants. Real telescope and instrument exposure, though REU-funded slots are limited to US citizens and permanent residents." },
            { name: "American Astronomical Society (AAS)", detail: "Presenting a poster at the AAS winter meeting, the largest annual gathering of American astronomers, where the Chambliss awards recognize outstanding student posters. Several REU programs, including NRAO and Northwestern's CIERA, fund student travel. Conferences are where you meet future advisors and learn how the field actually talks to itself." },
            { name: "Double Major or Minor (Physics / CS / Math)", detail: "A physics double major (or heavy overlap) strengthens grad applications; the University of Washington notes most of its astronomy majors also major in physics, though Cornell bars pairing its astrophysics concentration with a physics major, so check your school's rules. A CS or statistics minor hedges toward data science, the most common field among new astronomy PhDs in permanent jobs." },
            { name: "Grad-School Planning", detail: "By junior year, map target programs by the faculty whose research excites you, line up three strong letters, and check each program's GRE policy: Berkeley, Chicago, Wisconsin, Vanderbilt and Northwestern's astronomy PhD no longer require the Physics GRE, and several no longer accept scores at all. Research fit beats prestige." },
          ],
        },
      ],
    },

    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      coord: "β · the bridge",
      color: C.masters,
      colorDim: C.mastersDim,
      intro:
        "Here's the honest surprise: in US astronomy, the master's usually isn't a destination. Most top PhD programs admit straight from a bachelor's and hand you a master's en route, funded, as you pass through the coursework. A standalone (typically self-funded) master's makes sense in specific cases: repairing a weak transcript, pivoting in from another field, an international bridge, or an applied credential. But paying for a generic terminal MS just to reach a PhD is rarely the optimal move.",
      sections: [
        {
          title: "Program Types",
          icon: "📋",
          items: [
            { name: "MS 'En Route' to the PhD (the common case)", detail: "Many astronomy PhD programs (Boston University, UT Austin, Wisconsin, Vanderbilt and UMass among those checked) admit no master's-only students and award an MS or MA along the way, with no separate application or extra tuition. It comes bundled with the funded PhD, and for many astronomers it is the only master's they will hold." },
            { name: "Thesis MS (record repair / pivot)", detail: "Terminal MS options exist at some departments (New Mexico State and the University of Hawaiʻi Institute for Astronomy, for example), and a thesis is nearly always required. It can be worth self-funding if you need to rebuild a weak undergrad record or switch in from another major, since a finished thesis plus faculty letters can change an application. Check funding first: AIP notes terminal programs often have less financial support." },
            { name: "Coursework / Professional MS", detail: "Rare inside astronomy departments: New Mexico State, for instance, nearly always requires a thesis for a terminal MS, and AIP notes terminal master's programs are more common in engineering than in physics or astronomy. If you want a credential without a research commitment, weigh the cost against entering industry directly." },
            { name: "International Bridge Master's", detail: "In Germany a master's is the default step before a three-year PhD (the Max Planck IMPRS programs pay stipends above €1,500 a month), and Dutch universities such as Leiden, Groningen and Amsterdam run two-year astronomy MSc programs. Costs vary: Leiden lists €22,500 tuition for non-EU students, and many UK PhD places are reserved for UK residents. The Physics GRE is not used in Europe." },
            { name: "Applied / Adjacent MS", detail: "A physics or astronomy major qualifies you for many adjacent graduate and professional programs, such as data science or scientific computing, which AIP notes vary widely in cost and are not always funded like PhDs. Treat one as a deliberate off-ramp rather than a step toward academia." },
            { name: "Post-Bacc Research Assistant (the alternative)", detail: "About one in five astronomy bachelor's recipients work at colleges and universities, typically as observatory research assistants (AIP, classes of 2014–16). A year or two there can build skills and letters while you earn rather than borrow, though the median starting salary in those jobs was only about $34,000." },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            { name: "PhD-track is funded; standalone MS often isn't", detail: "The central rule of graduate astronomy: funded doctoral study (via TA/RA lines) versus self-funded professional master's degrees. Know which side of that line any program sits on before you enroll." },
            { name: "TA / RA Stipends", detail: "PhD students are typically supported by teaching or research assistantships plus tuition and health coverage. Posted stipends in the programs sampled run from roughly $27,000 (a nine-month TA line) to about $50,000 (Columbia's twelve-month stipend), with Vanderbilt at $34,000–$38,000. Not lavish, but you're paid to train rather than paying to." },
            { name: "Fellowships (NSF GRFP, NASA FINESST)", detail: "The NSF Graduate Research Fellowship (~$37k/yr for three years plus a cost-of-education allowance) and NASA's FINESST (~$45k/yr including tuition, up to three years) fund your own research and boost your standing. The GRFP is limited to US citizens, nationals and permanent residents; FINESST accepts international students with restrictions." },
            { name: "The Self-Funded MS Trap", detail: "Borrowing to pay for a terminal master's purely as a stepping stone to a funded PhD is usually poor math: a post-bacc RA role or a stronger direct application often gets you there without the debt." },
            { name: "Funding-Climate Caveat (2025–27)", detail: "Congress rejected the deepest proposed cuts for fiscal 2026 (NSF about $8.75B, down 3.9%; NASA Science $7.25B, down 1.1%). But the fiscal 2027 White House request again zeroes the NSF astronomy postdoctoral fellowship and cuts NSF by 55%; House appropriators propose about 20% cuts, while a November 2026 Senate draft is roughly flat. AAS reports physics and astronomy graduate enrollment fell 7–9% in fall 2025, so assistantship and fellowship availability is less certain than it was a few years ago." },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "🛰️",
          items: [
            { name: "Radiative Transfer & Advanced Astrophysics", detail: "How light moves through gas and dust: the machinery behind stellar atmospheres, the interstellar medium, and spectral interpretation. A step up in physical and mathematical demand from undergrad." },
            { name: "Advanced Observational Methods", detail: "Deeper spectroscopy, interferometry, and multi-wavelength work (radio, X-ray, infrared), each with its own instruments, calibration culture, and data quirks." },
            { name: "Numerical Simulation", detail: "N-body gravity, hydrodynamics, and magnetohydrodynamics run on supercomputers. For theorists and computational astrophysicists, this is the core craft, and a skill that transfers straight to HPC industry roles." },
            { name: "Bayesian Inference & MCMC", detail: "Modern astronomy is deeply statistical: Markov-chain Monte Carlo, nested sampling, and hierarchical models are how parameters and uncertainties actually get estimated from data." },
            { name: "Instrumentation & Detectors", detail: "Optics, CCDs and other detectors, cryogenics, and electronics. The hands-on track that builds the cameras and spectrographs, and a strong bridge to aerospace and defense engineering." },
            { name: "Big-Data Pipelines", detail: "SQL, survey catalogs (Gaia, SDSS, and soon Rubin/LSST), and scalable data handling. As datasets reach billions of objects, pipeline skills increasingly are the research." },
          ],
        },
      ],
    },

    {
      id: "research",
      label: "PhD / Research",
      years: "Years 8+",
      coord: "γ · the frontier",
      color: C.research,
      colorDim: C.researchDim,
      intro:
        "The astronomy PhD is five to six fully funded years of turning yourself into an original researcher. You'll clear qualifying or research exams by year two or three, then spend most of your time on a dissertation, where 'research' might mean observing runs, petabyte-scale survey data, supercomputer simulations, hardware in a clean room, or pen-and-paper theory. It's intellectually thrilling and, right now, professionally precarious: the academic funnel is narrow and the federal funding climate is genuinely unsettled.",
      sections: [
        {
          title: "How the PhD Works",
          icon: "🎓",
          items: [
            { name: "Direct Admit, ~5–6 Years, Funded", detail: "You enter straight from a bachelor's into a funded program. Harvard cites five to six years as typical with funding guaranteed for six, Berkeley sets six as the normative time to degree, and RIT's program runs about four to five. Support comes through TA/RA lines and fellowships." },
            { name: "Qualifying / Research Exams", detail: "Formats vary. Columbia replaces a single written qual with research exams at the end of the first and second year; Harvard wants its first research project and exam done by the end of year three; RIT's qualifying exam is a defended master's-level research project due by the start of year three. In each, you do real research and defend it." },
            { name: "First Projects → Dissertation", detail: "Research starts almost immediately. Early projects (sometimes several) let you and potential advisors test fit; one often grows into the dissertation, formally proposed to a faculty committee around year three." },
            { name: "Advisor & Committee", detail: "Your advisor relationship shapes the entire experience: research direction, funding, letters, and job prospects. A three-person committee tracks progress. Choosing (and, if needed, changing) an advisor well is the highest-leverage decision you make." },
            { name: "Teaching Requirement", detail: "Most students TA for several semesters: grading, running labs, leading sections. It funds you, builds a genuinely useful skill, and matters if you're aiming at teaching-focused faculty roles." },
            { name: "The Postdoc Default", detail: "About two-thirds of new astronomy PhDs take a postdoc first (AIP, classes of 2018–20). Among astronomers hired into tenure-track jobs, the average gap between PhD and hire was about five years, and PhDs outnumber tenure-track openings roughly three to one. Plan your finances and life around several moves before any shot at a permanent academic position." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🌌",
          items: [
            { name: "Exoplanets & Atmospheres", detail: "Over 6,000 confirmed planets and counting. JWST now routinely takes transmission spectra of exoplanet atmospheres; ESA's Ariel (launching ~2029) will survey ~1,000 of them. One of the hottest, most-cited areas in the field." },
            { name: "Gravitational-Wave & Multi-Messenger Astronomy", detail: "LIGO–Virgo–KAGRA's O4 run passed its 200th black-hole/neutron-star merger and now detects events most weeks. Pairing gravitational waves with light (and neutrinos) is a young, fast-moving frontier." },
            { name: "Time-Domain Astronomy (Rubin / LSST)", detail: "The Vera C. Rubin Observatory's 3.2-gigapixel camera released first images in 2025 and began issuing real-time alerts in February 2026, with 800,000 on the first night and up to about 7 million expected per night. Community brokers sort that stream, so the transient sky of exploding stars, asteroids and genuine surprises is being industrialized." },
            { name: "Cosmology, Dark Matter & Dark Energy", detail: "Mapping the universe's expansion and hidden mass with the CMB, galaxy surveys and space missions. Euclid (launched 2023) released its first major data tranche in November 2026, covering about 1,900 square degrees, and NASA's Nancy Grace Roman Space Telescope launched on August 30, 2026. The nature of dark matter and dark energy remains wide open." },
            { name: "Galaxy Formation & the Early Universe", detail: "JWST keeps finding luminous galaxies only about 300 million years after the Big Bang, and more of them than models predicted. Early talk of broken cosmology has softened: researchers now favor astrophysical explanations such as higher star-formation efficiency, bursty star formation or different stellar populations. A dominant theme in recent literature." },
            { name: "Black Holes & High-Energy Astrophysics", detail: "Black holes and supermassive black holes are among the most common keywords in 2025 astrophysics papers, studied through gravitational waves, X-rays and gamma rays. The Chandra X-ray Observatory and Fermi Gamma-ray Space Telescope are central to this work and were named for defunding in the White House budget requests." },
            { name: "Star & Planet Formation", detail: "How collapsing gas clouds become stars and protoplanetary disks become planetary systems, with JWST and Hubble images of protostars such as IRAS 04302+2247 among the 2025 highlights. Berkeley lists star formation and stellar evolution among its research areas, and the topic connects directly to exoplanets." },
            { name: "Next-Generation Instruments", detail: "The Giant Magellan Telescope and Europe's 39-meter Extremely Large Telescope are under construction for late-2020s first light, though funding fights have put the US's full 'two giant telescopes' plan in question." },
          ],
        },
        {
          title: "AI & the Data Deluge",
          icon: "🤖",
          items: [
            { name: "Machine Learning for Classification", detail: "Neural networks now classify galaxy morphologies about as accurately as human experts, essential when surveys like Rubin will image billions of galaxies no human could ever eyeball." },
            { name: "Simulation-Based Inference", detail: "A single Bayesian atmospheric retrieval can eat hundreds of CPU-hours; neural posterior estimation and related ML methods make that tractable at survey scale. A genuine methodological shift, not a gimmick." },
            { name: "Transient Triage & Anomaly Detection", detail: "With millions of alerts per night from Rubin, ML 'brokers' decide in real time what's a known variable, a supernova, or something genuinely new. Astronomy has become, in part, a real-time data-streaming problem." },
            { name: "Emulators & Surrogate Models", detail: "Where a single retrieval or simulation takes hundreds of CPU-hours, researchers train neural networks to stand in for the expensive calculation, an approach called amortized inference in recent exoplanet-atmosphere work. It trades some generality for the speed that survey-scale datasets demand." },
            { name: "The Honest Take: Accelerant, Not Autopilot", detail: "AI is reshaping how astronomers handle scale (classification, inference, alert triage), mostly where data are abundant. The physical modeling, interpretation and judgment remain with researchers." },
            { name: "Why This Matters for Your Career", detail: "Building real ML and big-data skill during a PhD does double duty: it's frontier research method and it's exactly the toolkit that makes astronomers so hireable in industry if you leave academia." },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Research Astronomer (Academia)",
      icon: "🎓",
      color: C.research,
      roles: ["Grad Researcher", "Postdoc", "Assistant Prof", "Full Prof", "Staff Astronomer"],
      reality:
        "The classic dream and the hardest lane. Estimates of the share of physics PhDs who ever land a permanent academic research job run from roughly 10% to 21%, and in astronomy about two-thirds of new PhDs first take a postdoc. Among those hired into tenure-track roles the average gap from PhD was about five years, and PhDs outnumber tenure-track openings roughly three to one. A study of 28 US programs found about 65% reach long-term jobs in astronomy or closely related academic work, but that count includes research staff, not only faculty. The occupation is genuinely tiny: BLS counts about 2,400 astronomers nationally, and the federal budget fights of 2025–26 make even that narrow funnel less certain. Deeply rewarding for the few who make it; plan a fallback regardless of how strong you are.",
      salary: "Postdoc medians ~$62.5k–$67k (AIP) · Astronomers at colleges and universities: median ~$102k (BLS, May 2025) · Full-professor averages ~$150k–$172k across all fields (AAUP 2025–26)",
    },
    {
      path: "NASA / Observatory / National Lab",
      icon: "🛰️",
      color: C.career,
      roles: ["Research Scientist", "Instrument Scientist", "Mission Scientist", "Staff Scientist"],
      reality:
        "Research and mission science outside the tenure track, at NASA centers such as Goddard and JPL, observatories, and DOE national laboratories. BLS finds 21% of astronomers work for the federal government and 47% in research and development services. A PhD is usually required, some federal roles require US citizenship or a security clearance, and employment concentrates in Hawaii, Pasadena and Cambridge, Massachusetts. Exposed to the same federal budget swings that make current planning fraught.",
      salary: "Federal-government astronomers: median $174k; R&D-sector astronomers: median $127k (BLS, May 2025) · GS-13 to GS-14 roughly $119k–$184k with locality (aggregator)",
    },
    {
      path: "Data Scientist / ML Engineer",
      icon: "📊",
      color: C.masters,
      roles: ["Data Scientist", "ML Engineer", "Senior/Staff DS", "DS Manager"],
      reality:
        "The most common field among new astronomy PhDs in permanent jobs (AIP), and for good reason: an astronomy PhD is essentially years of wrangling messy, enormous datasets in Python. Industry has long courted astronomers for exactly this. The catch is that the field is now crowded and competitive: you'll need to reframe research as product/business impact, pick up SQL and big-data tools, and often bridge in via an internship or portfolio. A PhD buys a higher starting rung, but in tech, experience compounds faster than degrees.",
      salary: "BLS median $120,230; top decile above $199,130 (May 2025) · New astronomy PhDs in private-sector permanent jobs: median start $120,000, range $47k–$210k (AIP)",
    },
    {
      path: "Quantitative Finance",
      icon: "📈",
      color: C.undergrad,
      roles: ["Quant Researcher", "Quant Analyst", "Quant Trader", "Quant Developer"],
      reality:
        "Hedge funds and proprietary trading shops actively recruit physics and astronomy PhDs for stochastic modeling, statistics, and coding chops. It carries the highest pay ceiling of any exit, but entry is selective (firms want strong coding, statistics and machine learning, and anecdotal reports describe strong PhDs struggling to get interviews), and roles cluster in New York, Chicago and London. Little of the 'wonder' that drew you to the sky, but the compensation is in a different universe from academia.",
      salary: "New-grad PhD base pay posted at $200k–$300k (Two Sigma, Citadel, Jane Street, SIG) · reported first-year total comp ~$250k–$450k at top firms (self-reported)",
    },
    {
      path: "Aerospace & Instrumentation",
      icon: "🔭",
      color: C.career,
      roles: ["Optical Engineer", "Detector Scientist", "Systems Engineer", "Payload Scientist"],
      reality:
        "Builds the telescopes, cameras, spectrographs, and satellites, a strong fit for instrumentation-track PhDs and hands-on experimentalists. BLS finds aerospace engineers work mostly in aerospace manufacturing (about 37%), engineering services (about 15%) and the federal government (about 15%). Defense-related projects may require a security clearance, an invisible barrier worth knowing early. Physicists in aircraft-and-parts manufacturing average well above general science pay, so the ceiling here is higher than many expect.",
      salary: "Aerospace engineers: median $134,960 (BLS, May 2025) · astronomers and physicists in aircraft and parts manufacturing averaged ~$230k (Data USA, 2024)",
    },
    {
      path: "Scientific Software / Research Computing",
      icon: "💻",
      color: C.masters,
      roles: ["Research Software Eng", "Pipeline Developer", "HPC Engineer", "Scientific SWE"],
      reality:
        "Survey astronomy runs on serious software (Rubin alone streams millions of alerts a night to community brokers), and those same skills port cleanly to tech and research-computing groups. A great landing spot for people who love coding and want to stay near science. The bar is real software engineering (testing, version control, distributed systems), not just research scripts, so treat code quality as a skill to cultivate deliberately.",
      salary: "BLS software developers: median $135,980; 10th to 90th percentile $82k–$215k (May 2025)",
    },
    {
      path: "Science Communication & Education",
      icon: "✍️",
      color: C.undergrad,
      roles: ["Planetarium Educator", "Science Writer", "Museum Educator", "Outreach Lead"],
      reality:
        "Planetariums, museums, magazines, universities, and media hire astronomers who can teach and tell stories, the lineage Carl Sagan made famous. Deeply meaningful, mission-driven work. But it pays the least of these lanes, BLS finds 63% of writers and authors are self-employed, and many people assemble a living from adjunct teaching, freelance writing and communications staff jobs. Pursue it for love of the craft, with clear eyes about the economics.",
      salary: "Writers and authors: median $76,910 (BLS, May 2025) · AAAS Mass Media Fellowship: $10,000 stipend for a 10-week newsroom placement",
    },
    {
      path: "Science Policy & Program Management",
      icon: "🏛️",
      color: C.research,
      roles: ["AAAS Policy Fellow", "Program Officer", "Policy Analyst", "Technical PM"],
      reality:
        "PhD scientists help shape research funding and national science strategy in congressional offices and executive-branch agencies, frequently entering via the AAAS Science & Technology Policy Fellowship (US citizens only; the newer Pathways to Policy track also places fellows in nonprofits, think tanks and companies). It rewards communication and systems thinking over bench research. Given the current fights over the science budget, it's some of the most consequential, and most turbulent, work an astronomer can do.",
      salary: "AAAS fellowship stipends: from $85k (Pathways to Policy minimum) up to ~$132k, varying by track and experience",
    },
  ],
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const CSS = `
  ${FONTS}

  * { box-sizing: border-box; }

  .ar-root {
    --void: ${C.void}; --deep: ${C.deep}; --panel: ${C.panel};
    --surface: ${C.surface}; --border: ${C.border}; --muted: ${C.muted};
    --dim: ${C.dim}; --text: ${C.text}; --bright: ${C.bright};
    background: var(--void);
    color: var(--text);
    font-family: 'Space Grotesk', system-ui, sans-serif;
    min-height: 100vh;
    line-height: 1.55;
    position: relative;
    overflow-x: hidden;
  }

  /* Starfield: three layered faint dot patterns + an ambient nebula glow */
  .ar-root::before {
    content: "";
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.55), transparent),
      radial-gradient(1px 1px at 70% 65%, rgba(255,255,255,0.4), transparent),
      radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.5), transparent),
      radial-gradient(1.5px 1.5px at 85% 20%, rgba(255,255,255,0.35), transparent),
      radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.45), transparent),
      radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.3), transparent),
      radial-gradient(1px 1px at 90% 88%, rgba(255,255,255,0.4), transparent);
    background-size: 320px 320px, 280px 280px, 400px 400px, 500px 500px, 360px 360px, 300px 300px, 440px 440px;
    opacity: 0.5;
  }

  .ar-wrap {
    position: relative; z-index: 1;
    max-width: 940px; margin: 0 auto; padding: 0 20px 64px;
  }

  /* ── Header ── */
  .ar-header {
    position: relative;
    padding: 56px 4px 30px;
    text-align: left;
  }
  .ar-header::after {
    content: "";
    position: absolute; left: -120px; right: -120px; top: -40px; height: 340px;
    z-index: -1; pointer-events: none;
    background:
      radial-gradient(60% 90% at 25% 20%, ${C.research}22, transparent 70%),
      radial-gradient(50% 80% at 80% 40%, ${C.career}1f, transparent 70%);
    filter: blur(4px);
  }
  .ar-eyebrow {
    font-family: 'Space Mono', monospace;
    font-size: 11px; letter-spacing: 0.34em; text-transform: uppercase;
    color: var(--dim); margin-bottom: 18px;
  }
  .ar-title {
    font-family: 'Spectral', Georgia, serif;
    font-weight: 700; font-size: clamp(2.3rem, 7vw, 3.9rem);
    line-height: 1.02; letter-spacing: -0.015em; color: var(--bright);
    margin: 0 0 6px;
  }
  .ar-title em {
    font-style: italic; font-weight: 400;
    color: transparent;
    background: linear-gradient(100deg, ${C.undergrad}, ${C.research} 55%, ${C.career});
    -webkit-background-clip: text; background-clip: text;
  }
  .ar-tagline {
    font-family: 'Spectral', Georgia, serif;
    font-style: italic; font-weight: 300;
    font-size: clamp(1rem, 2.4vw, 1.28rem);
    color: var(--dim); max-width: 640px; margin-top: 14px;
  }

  /* Spectrograph strip: the signature motif */
  .ar-spectrum {
    height: 5px; border-radius: 3px; margin: 26px 0 4px;
    background: linear-gradient(90deg,
      ${C.research} 0%, #7d5bff 14%, ${C.career} 30%, ${C.masters} 50%,
      ${C.undergrad} 70%, #ff7a59 84%, #ff5c6e 100%);
    position: relative;
    box-shadow: 0 0 22px rgba(199,125,255,0.28);
  }
  /* faint absorption-line ticks across the spectrum */
  .ar-spectrum::after {
    content: ""; position: absolute; inset: 0; border-radius: 3px;
    background-image: repeating-linear-gradient(90deg,
      transparent 0 46px, rgba(10,6,18,0.85) 46px 48px);
    mix-blend-mode: multiply;
  }

  /* ── Phase nav ── */
  .ar-nav {
    display: flex; gap: 8px; overflow-x: auto;
    padding: 22px 0 6px; margin-bottom: 4px;
    -webkit-overflow-scrolling: touch; scrollbar-width: none;
  }
  .ar-nav::-webkit-scrollbar { display: none; }
  .ar-nav-btn {
    flex: 0 0 auto; cursor: pointer;
    background: var(--panel); border: 1px solid var(--border);
    border-radius: 12px; padding: 11px 16px 9px;
    color: var(--dim); font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem; font-weight: 500; text-align: left;
    display: flex; flex-direction: column; gap: 2px;
    transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s;
  }
  .ar-nav-btn:hover { color: var(--text); border-color: var(--muted); }
  .ar-nav-btn .yr {
    font-family: 'Space Mono', monospace; font-size: 10.5px;
    letter-spacing: 0.05em; color: var(--muted);
  }
  .ar-nav-btn.active {
    color: var(--bright);
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, var(--panel));
    box-shadow: 0 0 0 1px var(--accent), 0 6px 26px -12px var(--accent);
  }
  .ar-nav-btn.active .yr { color: var(--accent); }
  .ar-nav-btn:focus-visible { outline: 2px solid var(--bright); outline-offset: 2px; }

  /* ── Intro panel ── */
  .ar-intro {
    background: linear-gradient(180deg, var(--panel), var(--deep));
    border: 1px solid var(--border);
    border-left: 3px solid var(--phase-color);
    border-radius: 14px; padding: 20px 22px;
    margin: 18px 0 26px; color: var(--text);
    font-size: 1.02rem;
  }

  /* ── Section tabs ── */
  .ar-sections { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .ar-section-btn {
    cursor: pointer; background: transparent;
    border: 1px solid var(--border); border-radius: 999px;
    padding: 7px 15px; color: var(--dim);
    font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; font-weight: 500;
    transition: all 0.18s;
  }
  .ar-section-btn:hover { color: var(--text); border-color: var(--muted); }
  .ar-section-btn.active {
    color: var(--void); font-weight: 600;
    background: var(--phase-color); border-color: var(--phase-color);
  }
  .ar-section-btn:focus-visible { outline: 2px solid var(--phase-color); outline-offset: 2px; }

  .ar-section-label {
    font-family: 'Space Mono', monospace;
    font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--phase-color); margin: 4px 2px 12px;
  }

  /* ── Expandable items ── */
  .ar-items { display: flex; flex-direction: column; gap: 8px; }
  .ar-item {
    background: var(--panel); border: 1px solid var(--border);
    border-radius: 12px; overflow: hidden;
    transition: border-color 0.2s, background 0.2s;
  }
  .ar-item.open {
    border-color: var(--phase-color);
    background: color-mix(in srgb, var(--phase-color) 7%, var(--panel));
  }
  .ar-item-head {
    display: flex; align-items: center; gap: 12px;
    padding: 15px 18px; cursor: pointer; user-select: none;
  }
  .ar-item-dot {
    flex: 0 0 auto; width: 7px; height: 7px; border-radius: 50%;
    background: var(--phase-color); opacity: 0.5;
    box-shadow: 0 0 8px var(--phase-color);
    transition: opacity 0.2s;
  }
  .ar-item.open .ar-item-dot { opacity: 1; }
  .ar-item-name {
    flex: 1; font-size: 1.02rem; font-weight: 500; color: var(--bright);
  }
  .ar-item-chev {
    flex: 0 0 auto; color: var(--muted); font-size: 0.7rem;
    transition: transform 0.22s, color 0.2s;
  }
  .ar-item.open .ar-item-chev { transform: rotate(90deg); color: var(--phase-color); }
  .ar-item-detail {
    padding: 0 18px 16px 37px; color: var(--dim); font-size: 0.97rem;
    animation: ar-reveal 0.22s ease;
  }
  @keyframes ar-reveal { from { opacity: 0; transform: translateY(-3px); } to { opacity: 1; transform: none; } }

  /* ── Career cards ── */
  .ar-careers {
    display: grid; gap: 14px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  .ar-card {
    background: var(--panel); border: 1px solid var(--border);
    border-top: 3px solid var(--card-color);
    border-radius: 14px; padding: 18px 18px 16px; cursor: pointer;
    transition: border-color 0.2s, transform 0.15s, box-shadow 0.2s;
  }
  .ar-card:hover { transform: translateY(-2px); box-shadow: 0 14px 40px -22px var(--card-color); }
  .ar-card.open {
    border-color: var(--card-color);
    box-shadow: 0 0 0 1px var(--card-color), 0 16px 44px -24px var(--card-color);
  }
  .ar-card-top { display: flex; align-items: center; gap: 11px; margin-bottom: 12px; }
  .ar-card-icon { font-size: 1.5rem; line-height: 1; }
  .ar-card-title {
    font-family: 'Spectral', Georgia, serif; font-weight: 600;
    font-size: 1.12rem; color: var(--card-color); line-height: 1.15;
  }
  .ar-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .ar-chip {
    font-family: 'Space Mono', monospace; font-size: 10.5px;
    color: var(--dim); background: var(--surface);
    border: 1px solid var(--border); border-radius: 6px;
    padding: 3px 8px; letter-spacing: 0.02em;
  }
  .ar-card-body { animation: ar-reveal 0.22s ease; }
  .ar-card-reality {
    margin: 14px 0 0; color: var(--text); font-size: 0.95rem;
  }
  .ar-salary {
    margin-top: 14px; padding: 10px 13px; border-radius: 10px;
    background: color-mix(in srgb, var(--card-color) 13%, var(--deep));
    border: 1px solid color-mix(in srgb, var(--card-color) 40%, transparent);
    font-family: 'Space Mono', monospace; font-size: 0.82rem;
    color: var(--bright); line-height: 1.5;
  }
  .ar-salary b { color: var(--card-color); font-weight: 700; }

  /* ── Footer ── */
  .ar-footer {
    margin-top: 34px; padding-top: 18px; border-top: 1px solid var(--border);
    font-family: 'Space Mono', monospace; font-size: 11px;
    letter-spacing: 0.08em; color: var(--muted); text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AstronomyRoadmap() {
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
  const handleItemToggle = (i) => setExpandedItem(expandedItem === i ? null : i);

  return (
    <div className="ar-root">
      <style>{CSS}</style>
      <div className="ar-wrap">

        <header className="ar-header">
          <div className="ar-eyebrow">Field Roadmap · Undergraduate → Doctorate → Career</div>
          <h1 className="ar-title">Astronomy &amp; <em>Astrophysics</em></h1>
          <div className="ar-tagline">
            Physics pointed at the sky: a decade-long path from the physics core to the
            research frontier, and the honest map of where it actually leads.
          </div>
          <div className="ar-spectrum" />
        </header>

        <nav className="ar-nav" aria-label="Life stages">
          {data.phases.map((p) => (
            <button
              key={p.id}
              className={`ar-nav-btn ${!showCareers && activePhase === p.id ? "active" : ""}`}
              style={{ "--accent": p.color }}
              onClick={() => handlePhaseChange(p.id)}
            >
              {p.label}
              <span className="yr">{p.years} · {p.coord}</span>
            </button>
          ))}
          <button
            className={`ar-nav-btn ${showCareers ? "active" : ""}`}
            style={{ "--accent": C.career }}
            onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
          >
            Career Paths
            <span className="yr">δ · 8 destinations</span>
          </button>
        </nav>

        <main>
          {!showCareers ? (
            <div style={{ "--phase-color": phase.color }}>
              <div className="ar-intro" style={{ "--phase-color": phase.color }}>
                {phase.intro}
              </div>

              <div className="ar-sections">
                {phase.sections.map((s, i) => (
                  <button
                    key={i}
                    className={`ar-section-btn ${activeSection === i ? "active" : ""}`}
                    style={{ "--phase-color": phase.color }}
                    onClick={() => handleSectionChange(i)}
                  >
                    {s.icon} {s.title}
                  </button>
                ))}
              </div>

              {section && (
                <>
                  <div className="ar-section-label">{section.icon} {section.title}</div>
                  <div className="ar-items">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className={`ar-item ${expandedItem === i ? "open" : ""}`}
                        style={{ "--phase-color": phase.color }}
                      >
                        <div className="ar-item-head" onClick={() => handleItemToggle(i)}>
                          <span className="ar-item-dot" />
                          <span className="ar-item-name">{item.name}</span>
                          <span className="ar-item-chev">▶</span>
                        </div>
                        {expandedItem === i && (
                          <div className="ar-item-detail">{item.detail}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="ar-intro" style={{ "--phase-color": C.career }}>
                Eight distinct destinations for an astronomy graduate: from the narrow
                tenure-track tournament to the highest-paid quant desks. The occupation labeled
                "astronomer" is tiny; most graduates apply the training somewhere adjacent. Tap
                any card for the full competitive picture and current pay.
              </div>
              <div className="ar-careers">
                {data.careers.map((c, i) => (
                  <div
                    key={i}
                    className={`ar-card ${expandedCareer === i ? "open" : ""}`}
                    style={{ "--card-color": c.color }}
                    onClick={() => setExpandedCareer(expandedCareer === i ? null : i)}
                  >
                    <div className="ar-card-top">
                      <span className="ar-card-icon">{c.icon}</span>
                      <span className="ar-card-title">{c.path}</span>
                    </div>
                    <div className="ar-chips">
                      {c.roles.map((r, j) => (
                        <span key={j} className="ar-chip">{r}</span>
                      ))}
                    </div>
                    {expandedCareer === i && (
                      <div className="ar-card-body">
                        <p className="ar-card-reality">{c.reality}</p>
                        <div className="ar-salary"><b>◆</b> {c.salary}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </main>

        <div className="ar-footer">
          TAP ANY ITEM OR CARD TO EXPAND · TAP AGAIN TO COLLAPSE
        </div>
      </div>
    </div>
  );
}
