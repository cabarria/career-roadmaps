import { useState, useEffect, useRef } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
// Aesthetic: clinical precision meets living systems. Soft clinical off-white,
// medical teal structure, warm vital-signs coral accent, ECG signal-trace motif.
const T = {
  bg:         "#f4f6f5",   // soft clinical off-white (cool, not cream)
  paper:      "#fbfcfc",   // panel
  surface:    "#ffffff",   // card
  surfaceAlt: "#eef2f1",   // alt surface
  ink:        "#12211f",   // deep slate-green ink
  inkSoft:    "#3a4a47",   // softer ink
  line:       "#d3ddda",   // hairline
  lineSoft:   "#e3eae8",

  teal:       "#0d7d78",   // medical teal (primary structure)
  tealBright: "#12a099",
  tealDeep:   "#0a5c58",
  coral:      "#e5573f",   // vital-signs coral (primary accent)
  coralSoft:  "rgba(229,87,63,0.10)",
  amber:      "#d98a2b",   // warm marker
  violet:     "#7b5ea8",   // research violet
  slate:      "#5f716d",   // muted label
  muted:      "#93a29e",

  phaseColors: {
    undergrad: "#0d7d78",  // teal — foundation
    masters:   "#d98a2b",  // amber — specialization
    phd:       "#7b5ea8",  // violet — research frontier
  },

  fontDisplay: "'Fraunces', 'Georgia', serif",
  fontMono:    "'JetBrains Mono', 'IBM Plex Mono', monospace",
  fontBody:    "'DM Sans', system-ui, sans-serif",
};

function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ── Signature: ECG / physiological signal trace ──────────────────────────────
function EcgTrace({ color = T.coral, height = 56 }) {
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

    const mid = H / 2;
    // One PQRST heartbeat segment as a function of local x within a beat
    const beat = (t) => {
      // t in [0,1] across one beat
      if (t < 0.10) return 0;
      if (t < 0.16) return -0.08 * Math.sin((t - 0.10) / 0.06 * Math.PI); // P wave (small bump)
      if (t < 0.30) return 0;
      if (t < 0.34) return 0.12 * ((t - 0.30) / 0.04);   // Q dip start
      if (t < 0.37) return 0.12 - 1.15 * ((t - 0.34) / 0.03); // R spike up
      if (t < 0.40) return -1.03 + 1.30 * ((t - 0.37) / 0.03); // S down/back
      if (t < 0.44) return 0.27 - 0.27 * ((t - 0.40) / 0.04);
      if (t < 0.60) return 0;
      if (t < 0.72) return -0.16 * Math.sin((t - 0.60) / 0.12 * Math.PI); // T wave
      return 0;
    };

    const drawTrace = (offset, alpha, lineW) => {
      ctx.beginPath();
      const beatWidth = 150;
      for (let x = 0; x <= W; x++) {
        const local = ((x + offset) % beatWidth) / beatWidth;
        const y = mid + beat(local) * (H * 0.42);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = lineW;
      ctx.lineJoin = "round";
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    let raf;
    let t = 0;
    const render = () => {
      ctx.clearRect(0, 0, W, H);
      // faint baseline grid ticks
      ctx.strokeStyle = T.line;
      ctx.globalAlpha = 0.5;
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 25) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      drawTrace(-t, 1, 2);
      t += 0.65;
      raf = requestAnimationFrame(render);
    };

    // Respect reduced motion
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      ctx.clearRect(0, 0, W, H);
      drawTrace(0, 1, 2);
    } else {
      render();
    }
    return () => raf && cancelAnimationFrame(raf);
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height, display: "block" }}
      aria-hidden="true"
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
        "The BSBME is one of the most demanding undergraduate degrees — engineering rigor stacked on top of biology, physiology, and chemistry. But here's the honest truth the brochures skip: the broad bachelor's is often less directly employable than mechanical or electrical engineering for entry-level device jobs, because those degrees signal a deeper, more immediately deployable core. Treat undergrad as the launchpad, not the destination: get internships early, build a hard skill (a real ME/EE/CS competency or wet-lab depth), and decide whether your edge will be a specialization, a graduate degree, or a pre-med track.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "❤",
          items: [
            { name: "Physiology & Quantitative Physiology", detail: "How the body's systems work, modeled with engineering math — membrane potentials, transport, feedback control, cardiovascular and neural dynamics. The signature BME course and a notorious weeder; it's where biology becomes equations." },
            { name: "Biomechanics", detail: "Statics, dynamics, and solid mechanics applied to tissues, joints, gait, and implants. Foundation for orthopedics, prosthetics, and device structural design. Conceptually dense — it's mechanical engineering with living, nonlinear materials." },
            { name: "Biomaterials", detail: "How engineered materials interact with the body — biocompatibility, degradation, the foreign-body response, tissue scaffolds. Central to implants, drug delivery, and regenerative medicine." },
            { name: "Bioinstrumentation", detail: "Designing circuits and sensors to acquire and process biological signals — ECG, EEG, EMG, amplification, filtering. The most hands-on core course; heavy circuits content that overlaps electrical engineering." },
            { name: "Biosignals & Systems", detail: "Signals & systems theory (Fourier/Laplace, filtering, convolution) applied to physiological data. A classic weeder shared with EE; the analytical backbone of imaging and instrumentation." },
            { name: "Biotransport & Biothermodynamics", detail: "Mass, momentum, and heat transfer in biological systems — blood flow, diffusion, drug distribution, reaction kinetics. Combines fluid mechanics and thermodynamics; consistently one of the hardest courses." },
            { name: "Cell & Molecular Biology + Organic Chemistry", detail: "The life-science foundation: cell function, molecular pathways, and the chemistry underneath. Organic chemistry is a weeder in its own right and a gate for pre-med BME students." },
            { name: "Senior Capstone Design", detail: "A two-semester team project designing a real medical device or system, often with a clinical or industry sponsor and design-controls documentation. The portfolio centerpiece — and your first taste of regulated development." },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "⚗",
          items: [
            { name: "MATLAB for Biosignals", detail: "The default computational tool — filtering ECG/EEG, modeling physiological systems, analyzing lab data. Expected fluency across nearly every BME program and role." },
            { name: "CAD for Devices (SolidWorks)", detail: "3D modeling of device components, enclosures, and implants. Essential for the medical-device design track; the same tool ME students master, which is exactly why device firms value it." },
            { name: "Bioinstrumentation & Circuits", detail: "Building amplifier and filter circuits, interfacing sensors, breadboarding, and testing signal-acquisition hardware. Hands-on electrical skill that makes you competitive for instrumentation roles." },
            { name: "Wet-Lab Technique", detail: "Cell culture, assays, pipetting, sterile technique, sometimes histology or microscopy. The bench skills that separate BME from pure ME/EE and open tissue-engineering and biotech doors." },
            { name: "Python for Data & ML", detail: "Increasingly the language that matters most — data analysis, image processing, and machine learning. Learn it beyond what the curriculum requires; it's the single biggest differentiator for imaging, digital-health, and data roles." },
            { name: "Design Controls & Documentation", detail: "Design history files, requirements, verification/validation, risk analysis. Unglamorous but foundational — the regulated-development mindset that every medical-device employer needs." },
            { name: "Statistics & Experimental Design", detail: "Hypothesis testing, clinical-trial reasoning, uncertainty. Underpins research, regulatory submissions, and any evidence-based device claim." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "◑",
          items: [
            { name: "MATLAB / Simulink", detail: "Signal processing, physiological modeling, controls. The teaching workhorse of BME, standard from year one through graduate research." },
            { name: "SolidWorks / CAD", detail: "Device and implant modeling. The bridge into medical-device design; pairs naturally with FEA for structural analysis of implants." },
            { name: "Python (NumPy, PyTorch)", detail: "Data analysis, image processing, and the entire machine-learning stack. The rising default — DICOM handling, deep learning for imaging, and digital-health analytics all live here." },
            { name: "COMSOL / ANSYS", detail: "Multiphysics and finite-element simulation for hemodynamics (CFD), implant stress, and coupled biological systems. Introduced late undergrad, deepened in grad school." },
            { name: "ImageJ / FIJI", detail: "The standard open-source tool for biomedical image analysis — microscopy quantification, cell counting, segmentation. Ubiquitous in labs." },
            { name: "AI in Medical Imaging", detail: "Deep learning now matches or exceeds human accuracy on many imaging tasks — 1,451 AI-enabled devices were FDA-cleared by end of 2025, ~76% in radiology. Real and shipping, but the hard part is regulatory validation and clinical integration, not the model. AI is expanding the field for AI-capable BMEs, not shrinking it." },
            { name: "LabVIEW", detail: "Instrument control and data acquisition. Common in bioinstrumentation labs and test/validation roles." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "◆",
          items: [
            { name: "Internships & Co-ops (the #1 lever)", detail: "The single strongest predictor of a job at graduation. Target medical-device firms (Medtronic, Stryker, Boston Scientific, Abbott), biotech, and hospitals. Because the BME bachelor's is broad, real regulated-industry experience is what converts the degree into offers — pursue it relentlessly from sophomore year." },
            { name: "Undergraduate Research & REUs", detail: "Paid summer research (NSF REUs, ~$6,000–$8,000 for 10 weeks) in tissue engineering, imaging, or neural engineering. Essential if you're aiming at a PhD or research career; strongly boosts grad admissions." },
            { name: "BMES (Biomedical Engineering Society)", detail: "The field's main student society — conferences, networking, design competitions, and a direct line to industry recruiters. Officer roles signal initiative." },
            { name: "iGEM & Design Competitions", detail: "The International Genetically Engineered Machine competition (synthetic biology) and BME design challenges give hands-on, team-based project experience that stands out to both employers and admissions committees." },
            { name: "A Hard Adjacent Skill", detail: "The highest-leverage undergrad move: build a genuine ME, EE, or CS competency (FEA, embedded firmware, or ML), or deep wet-lab expertise. It's how you out-compete both generalist BMEs and the ME/EE grads applying for the same device roles." },
            { name: "Pre-Med Track (if medicine calls)", detail: "BME is a common, well-regarded pre-med major — the physiology and design training map onto medicine, and MD or MD-PhD is a legitimate destination. If this is the plan, protect your GPA and MCAT prep alongside the demanding core." },
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
        "Here's where BME differs from most engineering fields: the master's carries more weight. Because the bachelor's is broad, a graduate degree is a common and often strategic employability boost — sources cite ~30% higher earnings one year out for master's holders at some programs. Two routes: a funded thesis MS (research depth, PhD bridge) or a self-funded professional MS that specializes you into a hireable niche — including regulatory affairs and clinical engineering, which exist as professional tracks in BME far more than in ME or EE.",
      sections: [
        {
          title: "Program Types",
          icon: "◇",
          items: [
            { name: "Thesis (Research) MS", detail: "Original research under a faculty advisor, often funded via a research assistantship. The path if you're testing a PhD or targeting R&D and research-facing roles. Typically 2 years; the thesis itself becomes a portfolio piece." },
            { name: "Professional / Coursework MS", detail: "Coursework plus a capstone or comprehensive exam, usually self-funded. Aimed squarely at employability — specialize into a niche the market wants. In BME this is a genuinely common and often ROI-positive move given the broad bachelor's." },
            { name: "Regulatory Affairs / Regulatory Science MS", detail: "A professional master's built around FDA pathways, design controls, and compliance. A distinctive BME option that leads to well-paid, stable regulatory careers — a track that barely exists in other engineering fields." },
            { name: "Clinical Engineering MS", detail: "Focused on healthcare technology management and hospital device systems. Pairs with the CCE certification; a defined professional route into hospital-based engineering leadership." },
          ],
        },
        {
          title: "Specializations",
          icon: "◈",
          items: [
            { name: "Medical Devices & Instrumentation", detail: "Device design, embedded systems, sensors, verification and validation. The most direct route into the device industry's R&D roles — and where a hard engineering skill compounds most." },
            { name: "Tissue Engineering & Regenerative Medicine", detail: "Scaffolds, stem cells, bioprinting, organ-on-chip. Research-heavy and frontier-facing; often a PhD track. The FDA's 2025 move to phase out animal testing is a major tailwind for organ-chip work." },
            { name: "Biomechanics & Rehabilitation", detail: "Orthopedic implants, prosthetics, exoskeletons, gait and sports biomechanics. Strong industry pipeline in orthopedics (Stryker, Zimmer Biomet) and a clear ME crossover." },
            { name: "Medical Imaging", detail: "MRI, CT, ultrasound physics plus reconstruction and image analysis. Increasingly fused with deep learning; feeds GE HealthCare, Siemens, Philips, and imaging-AI startups." },
            { name: "Neural Engineering & BCI", detail: "Brain–computer interfaces, neuroprosthetics, neurostimulation. A hot frontier (Neuralink and competitors); heavily research-driven and usually PhD-track." },
            { name: "Computational & Systems Biology / Biomedical Data Science", detail: "Modeling disease, omics, and large-scale health data. The crossover into data science and computational research; Python and statistics are the core tools." },
            { name: "Biomaterials & Drug Delivery / Nanomedicine", detail: "Engineered materials, nanoparticle carriers, controlled release. Bridges BME with materials science and pharma; strong research and biotech demand." },
          ],
        },
        {
          title: "Funding & Certifications",
          icon: "◉",
          items: [
            { name: "Funded Thesis RA (research route)", detail: "Join a lab with grant funding and get tuition plus a stipend. Competitive; reach out to potential advisors early. This is how the research-track master's gets paid for." },
            { name: "Self-Funded Professional MS", detail: "Most coursework and regulatory/clinical master's students pay tuition (or use employer reimbursement). Run the ROI — in BME the specialization boost often justifies it, but confirm the program has real clinical or industry partnerships." },
            { name: "RAC — Regulatory Affairs Certification", detail: "The gold-standard regulatory credential (RAPS). Requires a degree plus regulatory experience; adds roughly 8–12% on the regulatory and quality track and gates movement into RA leadership." },
            { name: "CCE — Certified Clinical Engineer", detail: "The clinical-engineering credential for hospital-based healthcare-technology-management careers. Signals expertise in medical-equipment systems and patient safety." },
            { name: "CQE / Six Sigma", detail: "Quality-engineering credentials valued across medical-device manufacturing. Useful on the quality and manufacturing tracks; often 10–20% compensation premiums where required." },
          ],
        },
        {
          title: "Advanced Tools",
          icon: "⬡",
          items: [
            { name: "FEA for Implants (ANSYS / ABAQUS)", detail: "Nonlinear stress and fatigue analysis of implants and devices in physiological loading. A hireable specialty for the orthopedic and cardiovascular device world." },
            { name: "CFD for Hemodynamics", detail: "Simulating blood flow through vessels, valves, and devices. Central to cardiovascular device design and a research-active method." },
            { name: "Deep Learning for Imaging (PyTorch)", detail: "Segmentation, detection, and reconstruction on medical images, with DICOM handling. The skill stack behind imaging-AI roles that pay near software levels." },
            { name: "Regulatory & Quality Systems (ISO 13485, 21 CFR 820)", detail: "Design controls, risk management (ISO 14971), and quality-management systems. The regulated-development competency that gates senior device roles." },
            { name: "IEC 62304 for SaMD", detail: "The software-lifecycle standard for Software-as-a-Medical-Device. A genuinely scarce skill at the senior tier — combined with Python or embedded C, it commands strong premiums." },
            { name: "Bioprinting & Microfabrication", detail: "3D bioprinting, microfluidics, and cleanroom fabrication for organ-on-chip and tissue constructs. Research-tool depth for the regenerative-medicine frontier." },
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
        "The BME PhD is fully funded (research/teaching assistantships plus NIH T32 training grants cover tuition, stipend, and health insurance) and runs ~5–6 years. Because BME sits at the biology–engineering interface, doctoral work is genuinely interdisciplinary — you might build hardware, run wet-lab experiments, or write code. Pursue it for research-defined careers: academia, national labs, corporate R&D, or frontier work in neural interfaces, tissue engineering, and imaging AI. One honest caveat from industry recruiters: outside research and biomaterials roles, a PhD is roughly neutral (sometimes slightly negative) on first-job device salary, because four years of industry experience shipping devices often outpaces the PhD premium.",
      sections: [
        {
          title: "How It Works",
          icon: "◎",
          items: [
            { name: "Admission: Direct-Match vs. Rotations", detail: "Some programs admit you directly into a specific lab; others fund a first year of 2–3 lab rotations before you choose. Rotations let you test-fit advisors and methods — a real advantage in a field spanning wet-lab to pure computation." },
            { name: "Coursework & Qualifying Exam", detail: "One to two years of coursework, then a qualifying exam often written as an NIH-style research proposal (Specific Aims) and defended orally. It tests whether you can frame original, fundable research — not just recall material." },
            { name: "Candidacy & Dissertation", detail: "After quals, you advance to candidacy and spend 3–4 years on original research producing several publications. The advisor and lab are the most consequential choice of the whole PhD — vet funding, mentoring style, and graduate placement carefully." },
            { name: "Funding: RA, TA & NIH Training Grants", detail: "Full support for the duration — research assistantships from your advisor's grants, teaching assistantships, and prestigious NIH T32 training grants and F31/NSF GRFP fellowships. Stipends run into the mid-$40Ks at top programs." },
            { name: "The MD-PhD (MSTP) Option", detail: "For those drawn to both medicine and research, Medical Scientist Training Programs fund a combined MD-PhD (tuition plus stipend). A long path (~7–8 years) but a powerful one for physician-scientist and translational careers." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "✳",
          items: [
            { name: "Organ-on-Chip & Organoids", detail: "Microfluidic devices and lab-grown mini-organs that model human physiology and disease. Supercharged by the FDA's 2025 plan to phase out animal-testing requirements, which positions these platforms as the future of drug testing." },
            { name: "3D Bioprinting & Tissue Engineering", detail: "Printing living cells into functional tissue and, eventually, transplantable constructs — including bioprinted brain organoids and vascularized tissues. One of the field's defining long-horizon goals." },
            { name: "Neural Interfaces & BCI", detail: "Brain–computer interfaces, neuroprosthetics, and neurostimulation — the Neuralink era, with many academic and commercial groups. Restoring movement, sensation, and communication is the frontier; deeply interdisciplinary." },
            { name: "Immunoengineering", detail: "Engineering the immune system — CAR-T design, cancer immunotherapy, immune-modulating biomaterials, vaccines. A fast-rising area at the biology–engineering–medicine convergence." },
            { name: "Drug Delivery & Nanomedicine", detail: "Nanoparticle carriers, targeted and controlled release, and gene-therapy delivery vehicles (the lipid-nanoparticle lineage behind mRNA). Bridges BME, materials, and pharma." },
            { name: "Wearable & Implantable Sensors", detail: "Continuous physiological monitoring, closed-loop implants, flexible bioelectronics. Where hardware, signal processing, and digital health meet — strong industry pull." },
            { name: "AI for Imaging & Drug Discovery", detail: "Deep learning for diagnosis, image reconstruction, and biology models (protein structure, molecular design). Reshaping how biomedical research and diagnostics are done across the board." },
            { name: "Computational Modeling of Disease", detail: "Multiscale models of cardiac, neural, and cancer systems, plus digital twins of physiology. The computational spine connecting many BME subfields." },
          ],
        },
        {
          title: "AI in BME Research",
          icon: "◐",
          items: [
            { name: "Medical Imaging AI", detail: "Deep learning matches or beats human accuracy on many imaging tasks; 1,451 AI-enabled devices were FDA-cleared by end of 2025. The research challenge has shifted from raw accuracy to validation, generalization, and clinical trust." },
            { name: "Biology Foundation Models", detail: "Protein-structure prediction, molecular design, and multi-omics models are accelerating drug discovery and synthetic biology. A rapidly moving frontier where BME meets modern ML." },
            { name: "Surrogate Models & Digital Twins", detail: "ML models that approximate expensive physiological simulations (hemodynamics, tissue mechanics), enabling patient-specific digital twins and faster design iteration." },
            { name: "Honest Utility vs. Hype", detail: "The cautionary history is real — IBM Watson Health collapsed after overpromising. Winners in 2026 share a pattern: narrow scope, prospective validation, and workflow integration. AI is a powerful tool, but regulated clinical deployment is slow and evidence-heavy by design." },
            { name: "Automation Risk: Low, and Expanding the Field", detail: "BME is rated low displacement risk (~26%). AI is growing the medical-device market — surgical robotics, imaging, personalized medicine — and raising pay for AI-capable engineers. Most protected: hands-on device design, wet-lab, regulatory, clinical work. More exposed: routine imaging-pipeline and generic data tasks." },
          ],
        },
        {
          title: "After the PhD",
          icon: "▦",
          items: [
            { name: "Academic Faculty", detail: "Highly competitive, with postdocs (2–4 years) now standard before tenure-track roles. BME faculty positions draw large applicant pools. The reward is research autonomy and training the next generation; the trade is compensation and a long, uncertain runway." },
            { name: "National Labs & Government (NIH, FDA)", detail: "Research-scientist roles at national labs, the NIH, and technical/review roles at the FDA. Mission-driven, stable, and a route to shaping the science and its regulation. The FDA path uniquely values regulatory-plus-technical depth." },
            { name: "Industry R&D & Imaging-AI Teams", detail: "The PhD is a genuine asset (often a filter) for research roles at device and pharma companies, and for imaging-algorithm teams at Verily, Google Health, and similar — where it can pay near software-research levels. Elsewhere in device R&D, industry experience competes closely with the degree." },
            { name: "Startups & Translational Research", detail: "Deep-tech biomedical startups — neural interfaces, organ-chip, imaging AI, drug delivery — actively recruit PhDs to translate frontier research into products. High risk, high mission, and the clearest path from dissertation to real-world impact." },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Medical Device R&D / Product Design",
      icon: "🫀",
      color: T.coral,
      roles: ["R&D Engineer", "Design Engineer", "Sr. R&D Engineer", "Principal Engineer", "R&D Director"],
      reality:
        "The flagship destination — designing implants, instruments, and devices at Medtronic, Stryker, Boston Scientific, Abbott, Edwards, J&J MedTech, and Intuitive Surgical. Entry pay sits around $70K–$95K; the real jump comes in years 3–5 and is gated by one concrete thing: being the named technical lead on a cleared FDA submission (510(k)/De Novo/PMA) or owning design controls on a shipped device. That credential bridges the ~$30K mid-to-senior gap; staff and principal roles in device specialties reach $190K–$210K. Genuine senior-tier shortages exist in implantables (biocompatibility), SaMD, and imaging. Concentrated in California, Massachusetts, and Minnesota.",
      salary: "$70K – $210K (device specialty ceiling)",
    },
    {
      path: "Regulatory Affairs & Quality",
      icon: "📋",
      color: T.teal,
      roles: ["Regulatory Affairs Specialist", "Quality Engineer", "Sr. RA Specialist", "RA Manager", "Director of Regulatory"],
      reality:
        "The underappreciated, stable, well-paid backbone of the medical-device industry — navigating FDA pathways, design controls, and quality systems. Every device needs it, and it's markedly more recession-resilient than R&D. Specialists earn a median around $78K; regulatory affairs managers reach a median near $136K, with directors higher. The RAC certification adds roughly 8–12%. A BME degree plus regulatory fluency is a durable, defensible career, and the demand is structural rather than cyclical.",
      salary: "$78K – $150K+ (manager & above)",
    },
    {
      path: "Clinical Engineering / HTM",
      icon: "🏥",
      color: "#0a8f86",
      roles: ["Clinical Engineer", "Biomedical Engineer (Hospital)", "HTM Manager", "Sr. Clinical Engineer", "Director of Clinical Engineering"],
      reality:
        "Hospital-based work managing and optimizing medical technology — the healthcare-technology-management (HTM) field. Clinical engineers supervise equipment technicians, run device safety and procurement, and bridge clinicians and manufacturers. Pay runs roughly $75K–$120K; the CCE certification signals expertise. Honest note: this is a genuinely separate track from device R&D (under 8% cross over), and hospital-employed clinical roles pull the BLS median down. Stable, mission-driven, and close to patient care.",
      salary: "$58K – $120K (hospital-based)",
    },
    {
      path: "Medical Imaging & Healthcare AI",
      icon: "🧠",
      color: T.violet,
      roles: ["Imaging Engineer", "ML Engineer (Medical)", "Computer Vision Scientist", "Sr. Algorithm Engineer", "AI Research Scientist"],
      reality:
        "The fastest-moving crossover — deep learning for diagnosis, reconstruction, and detection at GE HealthCare, Siemens, Philips, Viz.ai, and Tempus. The market is real: 1,451 AI-enabled devices were FDA-cleared by end of 2025 (~76% radiology). These roles often pay near software-engineering levels and usually want an MS or PhD plus Python, PyTorch, and DICOM depth. The winning skill stack is imaging + ML + a grasp of regulatory validation — because the model is the easy part; getting it cleared and clinically trusted is the hard part.",
      salary: "$100K – $200K+ (near software pay)",
    },
    {
      path: "Biotech & Pharma",
      icon: "🧬",
      color: "#2f8f6b",
      roles: ["Process Engineer", "Bioprocess Engineer", "Drug Delivery Scientist", "Sr. Process Engineer", "Principal Scientist"],
      reality:
        "Bioprocessing, drug delivery, and R&D at pharma and biotech firms — designing how therapeutics are made and delivered. Compensation runs close to the device world (within ~$8K at senior levels), peaking around $175K for staff process engineers. The work is anchored to FDA-regulated manufacturing, so the same design-controls and quality discipline transfers. Strong demand from the gene-therapy and biologics boom; a good fit for BMEs with chemical-engineering leanings or drug-delivery specialization.",
      salary: "$75K – $175K (senior process roles)",
    },
    {
      path: "Biomedical Data Science",
      icon: "📊",
      color: "#3a7fa8",
      roles: ["Bioinformatics Analyst", "Health Data Scientist", "Computational Biologist", "Sr. Data Scientist", "Principal Data Scientist"],
      reality:
        "The crossover into data and tech — analyzing omics, clinical, and imaging data for diagnostics, personalized medicine, and predictive health, at health systems, insurers, biotech, and tech firms. Strong earning potential that tracks the broader data-science market, especially with a computational-biology specialization. Python, R, statistics, and ML are the core tools. For BMEs who lean quantitative, this path escapes the field's compensation ceiling by borrowing tech's.",
      salary: "$90K – $190K+ (tracks data-science market)",
    },
    {
      path: "Academia & Research",
      icon: "🔬",
      color: "#8a6d3b",
      roles: ["PhD Researcher", "Postdoc", "Research Scientist", "Assistant → Full Professor", "Lab Director"],
      reality:
        "The PhD-gated path — running a lab, winning grants, and pushing the frontier in tissue engineering, neural interfaces, imaging, or immunoengineering. Faculty roles are highly competitive, with multi-year postdocs now standard and large applicant pools per opening. National labs, the NIH, and the FDA offer more accessible research and technical careers with strong stability. The reward is intellectual autonomy and impact; the trade is compensation and a long, uncertain runway to a permanent position.",
      salary: "$55K postdoc → $160K+ tenured",
    },
    {
      path: "Medicine (MD / MD-PhD)",
      icon: "⚕",
      color: "#c0504d",
      roles: ["Pre-Med → Medical Student", "Resident", "Physician", "Physician-Scientist (MD-PhD)", "Attending / Faculty"],
      reality:
        "BME is a common, well-regarded pre-med major — physiology and device training map cleanly onto medicine, and many students use it as a launchpad to an MD. For those drawn to both medicine and research, funded MD-PhD (MSTP) programs train physician-scientists over ~7–8 years. It's a fully separate, long, and demanding path with its own gates (GPA, MCAT, residency match), but the engineering foundation is a genuine asset in specialties like radiology, surgery, and biomedical innovation.",
      salary: "$65K resident → $250K+ physician",
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
        borderRadius: 10,
        padding: "13px 16px",
        cursor: "pointer",
        marginBottom: 7,
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
          transition: "transform 0.18s",
          transform: isOpen ? "rotate(45deg)" : "none",
          display: "inline-block",
        }}>
          +
        </span>
      </div>
      {isOpen && (
        <p style={{
          marginTop: 10,
          marginBottom: 0,
          fontFamily: T.fontBody,
          fontSize: 13.5,
          color: T.inkSoft,
          lineHeight: 1.65,
          borderTop: `1px solid ${T.lineSoft}`,
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
        border: `1px solid ${isOpen ? career.color : T.line}`,
        borderRadius: 14,
        padding: "18px 20px",
        cursor: "pointer",
        transition: "border-color 0.16s, box-shadow 0.16s",
        boxShadow: isOpen ? `0 6px 22px -12px ${career.color}88` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 13 }}>
        <span style={{ fontSize: 22 }}>{career.icon}</span>
        <span style={{
          fontFamily: T.fontDisplay,
          fontWeight: 600,
          fontSize: 16.5,
          color: career.color,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}>
          {career.path}
        </span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 13 }}>
        {career.roles.map((r) => (
          <span key={r} style={{
            fontFamily: T.fontMono,
            fontSize: 10,
            color: career.color,
            background: career.color + "14",
            border: `1px solid ${career.color}30`,
            borderRadius: 20,
            padding: "2px 9px",
          }}>
            {r}
          </span>
        ))}
      </div>

      <div style={{
        fontFamily: T.fontMono,
        fontSize: 11.5,
        fontWeight: 500,
        color: T.coral,
        background: T.coralSoft,
        border: `1px solid ${T.coral}3a`,
        borderRadius: 8,
        padding: "5px 11px",
        display: "inline-block",
        marginBottom: isOpen ? 14 : 0,
      }}>
        {career.salary}
      </div>

      {isOpen && (
        <p style={{
          borderTop: `1px solid ${T.lineSoft}`,
          paddingTop: 14,
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
export default function BiomedicalEngineeringRoadmap() {
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

  const activeColor = showCareers ? T.coral : phase.color;

  return (
    <div style={{
      minHeight: "100vh",
      background: T.bg,
      fontFamily: T.fontBody,
      color: T.ink,
    }}>
      <FontLoader />

      {/* ── Header ── */}
      <header style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 0" }}>
        <div style={{
          fontFamily: T.fontMono,
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: T.teal,
          marginBottom: 16,
        }}>
          Career Roadmap · USA · 2026
        </div>

        <h1 style={{
          fontFamily: T.fontDisplay,
          fontWeight: 600,
          fontSize: "clamp(32px, 6.5vw, 54px)",
          color: T.ink,
          margin: 0,
          letterSpacing: "-0.025em",
          lineHeight: 1.03,
        }}>
          Biomedical<br/>Engineering
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
          Engineering at the interface of the human body — where devices, imaging, and living systems meet. A field of real impact, and real trade-offs worth understanding early.
        </p>

        {/* ECG signature */}
        <div style={{
          border: `1px solid ${T.line}`,
          borderRadius: 12,
          background: T.paper,
          padding: "6px 10px",
          marginBottom: 22,
          overflow: "hidden",
        }}>
          <EcgTrace color={T.coral} height={48} />
        </div>

        {/* Stat strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
          gap: 0,
          border: `1px solid ${T.line}`,
          borderRadius: 12,
          overflow: "hidden",
          background: T.surface,
        }}>
          {[
            { label: "BLS Median", value: "$106,950", color: T.teal },
            { label: "Device Specialty Ceiling", value: "~$210K", color: T.coral },
            { label: "PhD Duration", value: "~5–6 yrs", color: T.violet },
            { label: "Job Growth ’24–’34", value: "5%", color: T.amber },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: "12px 15px",
              borderRight: i < 3 ? `1px solid ${T.line}` : "none",
              borderTop: `3px solid ${s.color}`,
            }}>
              <div style={{ fontFamily: T.fontMono, fontSize: 14.5, fontWeight: 500, color: T.ink }}>
                {s.value}
              </div>
              <div style={{ fontFamily: T.fontMono, fontSize: 8.5, color: T.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginTop: 3 }}>
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
        background: "rgba(244,246,245,0.9)",
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
                  borderBottom: active ? `2px solid ${p.color}` : "2px solid transparent",
                  padding: "14px 16px",
                  cursor: "pointer",
                  fontFamily: T.fontBody,
                  fontWeight: active ? 600 : 500,
                  fontSize: 13.5,
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
              background: "none",
              border: "none",
              borderBottom: showCareers ? `2px solid ${T.coral}` : "2px solid transparent",
              padding: "14px 16px",
              cursor: "pointer",
              fontFamily: T.fontBody,
              fontWeight: showCareers ? 600 : 500,
              fontSize: 13.5,
              color: showCareers ? T.coral : T.slate,
              whiteSpace: "nowrap",
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
                      borderRadius: 22,
                      padding: "8px 15px",
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
                fontFamily: T.fontMono, fontSize: 10, color: T.coral,
                letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 11,
              }}>
                8 Career Destinations
              </div>
              <p style={{
                fontFamily: T.fontBody, fontSize: 14.5, color: T.inkSoft,
                lineHeight: 1.7, margin: 0, maxWidth: 690,
                borderLeft: `3px solid ${T.coral}`, paddingLeft: 15,
              }}>
                BME's breadth cuts both ways: it opens an unusually wide range of destinations — from device R&D to regulatory affairs, imaging AI, data science, and medicine — but rewards those who specialize hard or add an adjacent skill. Across nearly all of them, the senior-tier gate is regulatory ownership: shipping a device through the FDA. Tap any card for the honest picture.
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
          Tap any item to expand · Salary data: BLS May 2024/2025, Glassdoor, Levels.fyi, industry sources 2026 · Figures are indicative ranges
        </p>
      </footer>
    </div>
  );
}
