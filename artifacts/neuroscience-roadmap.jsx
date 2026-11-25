import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  NEUROSCIENCE — CAREER ROADMAP                                       */
/*  Aesthetic: an electrophysiology recording rig. Deep scope-charcoal  */
/*  ground, a live action-potential trace as the signature, per-phase   */
/*  accents pulled from the Brainbow / fluorescence palette.            */
/* ------------------------------------------------------------------ */

const C = {
  bg: "#0A0E15",
  panel: "#111826",
  panelUp: "#182130",
  border: "#243244",
  borderUp: "#33465E",
  ink: "#E7EEF7",
  muted: "#8B99AE",
  faint: "#566072",
  // fluorescence / Brainbow accents
  cyan: "#37C6E8",
  violet: "#B98CFF",
  magenta: "#FF6FA5",
  amber: "#F2B54B",
  teal: "#3FDBB6",
  coral: "#FF8A6B",
  blue: "#5B8CFF",
  signal: "#37E0E8", // scope trace
};

const font = {
  display: "'Syne', system-ui, sans-serif",
  body: "'IBM Plex Sans', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      color: C.cyan,
      intro:
        "A neuroscience BS/BA is deliberately interdisciplinary — you build a biology, chemistry, physics, and statistics foundation, then layer molecular, cellular, systems, and cognitive neuroscience on top. It's demanding and pre-professional: most careers people picture (researcher, neuropsychologist, physician) require graduate or medical school, and the degree alone points toward research-support, clinical-coordination, and data roles. What you build outside class — lab research, coding, an honors thesis — matters as much as the transcript.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            {
              name: "Intro to Neuroscience / Brain & Behavior",
              detail:
                "The gateway course. Some programs gate the major on it: Pitt requires a B− or better here before any other core course, and Penn requires its intro course to declare.",
            },
            {
              name: "Cellular & Molecular Neuroscience",
              detail:
                "Neurons, ion channels, membrane potentials, synaptic transmission, and neurotransmitter systems — the biophysical backbone the rest of the field is built on.",
            },
            {
              name: "Systems & Circuits Neuroscience",
              detail:
                "How neurons wire into circuits: sensory systems, motor control, and neural coding. Where 'the brain' starts to feel like a machine you can reverse-engineer.",
            },
            {
              name: "Cognitive Neuroscience",
              detail:
                "Perception, attention, memory, language, and decision-making and their neural bases — usually paired with an fMRI or EEG lab component.",
            },
            {
              name: "Neuroanatomy",
              detail:
                "The physical map of the brain and nervous system, typically with a lab. High-volume memorization and a make-or-break for clinical and pre-med tracks.",
            },
            {
              name: "Statistics & Research Methods",
              detail:
                "Experimental design, IRB ethics, and the stats (t-tests, ANOVA, regression) every later step depends on. Required at most programs checked, including Duke, Oregon, Michigan, Northwestern, and Penn.",
            },
          ],
        },
        {
          title: "Weeder Gauntlet",
          icon: "🔥",
          items: [
            {
              name: "Organic Chemistry",
              detail:
                "The classic pre-health filter. It appears in Penn's and Pitt's requirement lists but not in Berkeley's listed prerequisites, so check your program. Student accounts call it intentionally difficult and memorization heavy.",
            },
            {
              name: "General Biology & Chemistry",
              detail:
                "The intro science sequence is the one students name as a deliberate filter in the first two years. No pass-rate data was found, so treat this as reputation, not statistics.",
            },
            {
              name: "Grade gates in the major",
              detail:
                "Pitt requires a B− or better in its intro course before any other core course. Oregon requires a C or better in every major course. Virginia Tech allows three attempts, withdrawals included, in its core science and math courses.",
            },
            {
              name: "Neuroanatomy",
              detail:
                "Often taught with a lab, and Oregon names a dedicated neuroanatomy course as its preferred option. Heavy memorization is its reputation; no pass-rate data was found.",
            },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "🔬",
          items: [
            {
              name: "Wet-lab technique",
              detail:
                "PCR, microscopy, and whatever your lab runs day to day. Entry-level guidance names these as the manual literacy of a working lab; what you actually learn depends on the lab you join.",
            },
            {
              name: "Neuroimaging & recording literacy",
              detail:
                "Reading and processing fMRI and EEG data, which job guides list as core competencies. Many programs pair cognitive neuroscience with a lab component.",
            },
            {
              name: "Programming (Python / R / MATLAB)",
              detail:
                "For data analysis and modeling. Job guides list Python or MATLAB as core competencies, and Northwestern requires a programming course. It opens data, industry, and neurotech doors.",
            },
            {
              name: "Statistics & scientific writing",
              detail:
                "Designing analyses and writing in the format of a real paper. The honors thesis (offered at Yale, Pitt, and Berkeley) is where these two skills come together.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🧫",
          items: [
            {
              name: "Undergraduate research",
              detail:
                "The non-negotiable. Get into a lab early: Columbia's PhD FAQ calls research experience arguably the most important factor in an application and sets no hard GPA cutoff.",
            },
            {
              name: "Summer research programs (REUs)",
              detail:
                "NSF REUs pay stipends and often help with housing, meals, and travel. They are limited to US citizens, permanent residents, and nationals, so check eligibility first.",
            },
            {
              name: "Honors thesis",
              detail:
                "Offered at Yale, Pitt, and Berkeley. Pitt's departmental honors require a 3.50 overall and major GPA, a research project, a presentation, and a senior thesis.",
            },
            {
              name: "Society for Neuroscience (SfN)",
              detail:
                "The field's annual meeting and home of the NeuroJobs board, with on-site recruiting. SfN says its candidate pool is nearly 36,000 neuroscientists.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      color: C.violet,
      intro:
        "In neuroscience the master's is not the standard gateway it is in some fields — funded PhD programs admit straight from a bachelor's, so many people skip it entirely. It earns its place in specific cases: as a competitiveness boost for applicants who need research experience or a GPA reset, as a professional or terminal credential for industry and clinical work, or as a bridge for applicants who need a research record first. Unlike the PhD, the master's programs checked here are self-funded or only partly funded, a real cost to weigh before committing.",
      sections: [
        {
          title: "Types of Programs",
          icon: "🎓",
          items: [
            {
              name: "Research / thesis MS",
              detail:
                "A mentored project ending in a thesis. Stony Brook's takes 1.5 to 2 years, and well over half of its alumni went on to PhD programs.",
            },
            {
              name: "Professional / coursework MS",
              detail:
                "Brandeis designs its program for one year full time, with an optional thesis. Admission to its PhD afterward is not guaranteed, though MS courses can count toward the PhD if you get in.",
            },
            {
              name: "Computational neuroscience MS",
              detail:
                "Quantitative, modeling- and coding-heavy. Offerings vary by school and none were verified in this research, so check the curriculum before counting on one.",
            },
            {
              name: "Accelerated BS-to-MS",
              detail:
                "Some universities let strong undergraduates count graduate credits toward both degrees. UT Dallas allows up to 15 graduate credits in Applied Cognition and Neuroscience.",
            },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💸",
          items: [
            {
              name: "Mostly self-funded",
              detail:
                "Brandeis states its MS has no stipends, merit scholarships, or assistantships. Stony Brook offers no direct aid, though many students find TA jobs with a stipend and a one-course tuition waiver. Budget tuition plus one to two years of foregone income.",
            },
            {
              name: "When it's worth it",
              detail:
                "Clearest return when the degree unlocks a specific job or is your route into a funded PhD. At Stony Brook, about a quarter of alumni went into biomedical industry research and well over half into PhD programs.",
            },
            {
              name: "When to skip it",
              detail:
                "If you can instead get research experience as a paid lab tech or research assistant, that may be a cheaper on-ramp, since research experience is what PhD programs weigh most.",
            },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "📐",
          items: [
            {
              name: "Modeling & theory",
              detail:
                "Dynamical systems and computational models of neurons and networks — the core of comp-neuro tracks and a differentiator in industry and neurotech.",
            },
            {
              name: "Advanced neuroimaging analysis",
              detail:
                "fMRI/EEG/MEG pipelines, connectivity analysis, and machine learning applied to neural data — the skills that make imaging datasets tractable.",
            },
            {
              name: "Regulatory & clinical-trial literacy",
              detail:
                "Good Clinical Practice, trial design, and regulatory affairs — the practical fluency that opens clinical-research and industry roles.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "PhD / Research",
      years: "Years 8+",
      color: C.magenta,
      intro:
        "The PhD is the real gateway to independent neuroscience research, and — importantly — it's almost always fully funded: tuition waived plus a living stipend, roughly $31K–$52K depending on institution and cost of living. Expect a boot camp, two to four lab rotations in year one before choosing a thesis lab, a qualifying exam (often an NIH-style grant proposal) around years 2–3, then three to four years of dissertation research. Five to six years total is typical. Know the destination math going in: far more neuroscience PhDs are produced each year than there are tenure-track jobs.",
      sections: [
        {
          title: "How the PhD Works",
          icon: "🧭",
          items: [
            {
              name: "Fully funded",
              detail:
                "Columbia, Utah, Brandeis, BU, and UCSD describe full funding (tuition plus stipend) while students make progress. Examples: Harvard $51,500 (2025-26), Utah $39,254 (2026-27), UT Austin $40,000 guaranteed for five years.",
            },
            {
              name: "Lab rotations",
              detail:
                "Programs run two to four rotations (UT Austin 2 to 3 at eight weeks each, UCSD and Utah 3, Brandeis 4) to choose a home lab. Some programs open with a boot camp.",
            },
            {
              name: "Qualifying exam",
              detail:
                "Formats vary: UCSF uses an NIH-format proposal, UCSD examines the dissertation proposal, UT Austin uses breadth finals plus a review paper. Timing runs from the end of year two (Utah, Brandeis) to year three (Tulane).",
            },
            {
              name: "Dissertation & defense",
              detail:
                "A body of original, ideally published work defended before a committee. The thesis is the milestone; peer-reviewed papers along the way are the real currency.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🛰️",
          items: [
            {
              name: "Connectomics",
              detail:
                "Mapping the brain's wiring at scale. In October 2024 the FlyWire consortium published the complete adult fruit-fly brain wiring diagram: nearly 140,000 neurons and more than 50 million synapses. NIH calls it a stepping stone to maps in larger animals.",
            },
            {
              name: "Brain organoids & assembloids",
              detail:
                "iPSC-derived 3D 'mini-brains' and fused, multi-region assembloids, used to model human brain development and disease. Limits: restricted vascularization, variability between organoids, and open ethical questions.",
            },
            {
              name: "NeuroAI & brain foundation models",
              detail:
                "Large models trained on neural and imaging data (BrainLM, POYO, TRIBE). Authors call it a possible paradigm shift, while practitioners warn that a model can predict well and still be wrong about mechanism.",
            },
            {
              name: "Brain–computer interfaces",
              detail:
                "High-density recording and neural decoding, from Neuralink and Synchron to academic labs. A 2025 report counted only about 100 people worldwide using BCIs in clinical trials.",
            },
            {
              name: "Circuit tools",
              detail:
                "Optogenetics, calcium imaging, high-density Neuropixels probes, and spatial/single-cell omics — the toolkit that lets you watch and control circuits directly.",
            },
            {
              name: "Precision psychiatry & neurodegeneration",
              detail:
                "Biomarker-driven treatment and disease-modifying work in Alzheimer's, Parkinson's, and psychiatric disorders — where the science meets enormous unmet need.",
            },
          ],
        },
        {
          title: "Tools of the Trade",
          icon: "🧪",
          items: [
            {
              name: "Neuropixels & electrophysiology",
              detail:
                "High-density silicon probes with nearly 1,000 recording sites per shank (about a third usable at once on version 1.0). They had shipped to more than 450 labs by 2021.",
            },
            {
              name: "Optogenetics & imaging",
              detail:
                "Light-controlled neurons and two-photon / calcium imaging to watch and manipulate circuits in living, behaving animals.",
            },
            {
              name: "The Python / ML stack",
              detail:
                "The analysis idiom: Python or MATLAB, machine-learning libraries, and preprints on bioRxiv and arXiv. Job guides list coding as a core competency.",
            },
            {
              name: "The funding treadmill",
              detail:
                "Research runs on grants. Learning to write NIH/NSF proposals, starting with the qualifying exam, is a core part of the training. UT Austin expects a predoctoral NRSA or similar fellowship submission in years three to five.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Academic Research",
      icon: "🏛️",
      color: C.teal,
      roles: ["PhD Student", "Postdoc", "Research Scientist", "Assistant Prof", "Tenured Prof"],
      reality:
        "The default aspiration and the hardest to reach. A PhD is mandatory, followed by one or more postdocs that can stretch the timeline past a decade. Only ~14% of biological-science PhDs hold a tenure-track post 5–6 years out; Harvard's own neuroscience program reports ~13% of graduates in faculty roles and ~26% in postdocs. Grant-writing eats a third or more of a PI's time and geographic mobility is minimal. Choose it for the questions, not the odds or the pay.",
      ai:
        "AI is a research tool here, not a threat — it accelerates analysis and modeling. The real competition is human: publish-or-perish against a very deep applicant pool.",
      salary: "PhD stipend ~$31K–$52K · postdoc ~$56K–$77K (NIH FY2026 scale $63,480–$77,076) · biological-science faculty median ~$85K across all ranks (BLS); neuroscience pay by rank not found",
    },
    {
      path: "Biotech & Pharma R&D",
      icon: "🧬",
      color: C.violet,
      roles: ["Research Associate", "Scientist", "Senior Scientist", "Principal Scientist", "Director"],
      reality:
        "A major destination: in Harvard's neuroscience program more graduates (~19%) go into biotech and therapeutics than into faculty roles (~13%). Work spans drug discovery, target validation, and clinical development at neuro-focused pharma and CROs. Industry research pays well above academia and rewards the same skills without the tenure lottery. A bachelor's opens the door as a research associate; the scientist ladder generally wants a PhD.",
      ai:
        "Computational drug discovery and ML-driven target ID are growing fast. The wet-lab-plus-code hybrid is the most defensible profile in the whole sector.",
      salary: "Medical scientists (BLS, May 2025): median $103,410, range $64,800–$177,780 · life-science R&D median $125,700 vs ~$75K–$81K at universities · senior and director pay not found",
    },
    {
      path: "Neurotech & BCI",
      icon: "🔌",
      color: C.cyan,
      roles: ["Neuroengineer", "Neural Data Scientist", "BCI Engineer", "Research Scientist", "Tech Lead"],
      reality:
        "The field's most magnetic frontier — Neuralink, Blackrock Neurotech, Synchron, and a wave of startups building brain–computer interfaces. Roles are deeply interdisciplinary: neural signal processing, ML decoding, embedded hardware, and clinical translation. Small, highly competitive, and concentrated in a few hubs; the strongest candidates pair neuroscience with real engineering or ML. About 100 people worldwide were in BCI trials in a 2025 report.",
      ai:
        "Largely AI-native — decoding neural signals is fundamentally a machine-learning problem. Building those models keeps you on the safe side of automation.",
      salary: "Neuralink (Glassdoor, June 2026): ~$115K engineer to ~$206K member of technical staff; small single-company samples, entry and senior bands elsewhere not found",
    },
    {
      path: "Clinical & Health",
      icon: "🩺",
      color: C.magenta,
      roles: ["Neurodiagnostic Tech", "Clinical Research Coord", "Neuropsychologist", "Neurologist / PA"],
      reality:
        "Neuroscience is a popular pre-health major. With a bachelor's you can work as a neurodiagnostic (EEG/EMG) technologist or clinical research coordinator; the clinical-provider roles require separate professional training. Clinical neuropsychology needs a psychology doctorate plus a two-year fellowship and licensure but pays a specialty premium. Neurology is a full MD-plus-residency path. The credential gates are steep — but so is the pay on the far side.",
      ai:
        "AI is strong at pattern recognition in EEG/MRI diagnostics but augments rather than replaces licensed clinicians. The licensure gate is protective here.",
      salary: "Neurodiagnostic tech ~$60K–$90K · clinical research coordinator ~$50K–$90K (weak sources) · neuropsychologist median ~$108K (estimate) · neurologist median $248,560 (BLS, May 2025)",
    },
    {
      path: "Data Science & Analytics",
      icon: "📊",
      color: C.amber,
      roles: ["Data Analyst", "Data Scientist", "Sr. Data Scientist", "ML Engineer", "Analytics Lead"],
      reality:
        "A natural pivot. The neuro toolkit — statistics, Python/R/MATLAB, big messy datasets — maps directly onto data-science roles in tech, healthcare, and biotech, with no PhD required. BLS lists a bachelor's as typical entry education for data scientists and projects 35% growth from 2025 to 2035. The catch: you're competing with CS and stats grads, so lean hard into the coding.",
      ai:
        "Routine analysis is increasingly automated; the durable version of this job is engineering the pipelines and models, not running one-off analyses.",
      salary: "Data scientists (BLS, May 2025): median $120,230, range $67,240–$199,130 · biotech/healthcare analyst ~$65K–$100K · entry neuroscience data analyst ~$55K–$75K (weak source)",
    },
    {
      path: "SciComm & Policy",
      icon: "✍️",
      color: C.coral,
      roles: ["Science Writer", "Medical Writer", "Comms Lead", "Policy Analyst", "Program Officer"],
      reality:
        "A real destination for people who love the field but not the bench. Medical and regulatory writing — translating trials and mechanisms for regulators, clinicians, and the public — is the best-paid branch, though BLS projects technical writing to grow only 1% from 2025 to 2035. Science journalism and museum work are smaller and more competitive. Policy and program-officer roles at agencies and funders (NIH, NSF) help decide which research even happens. A PhD helps but isn't always required.",
      ai:
        "Generative AI drafts fast, which raises the bar rather than removing the job — the value is accuracy, judgment, and credibility that AI still gets wrong.",
      salary: "Medical writer ~$80K entry average (PayScale, $61K–$103K) and ~$110K–$166K employed means (AMWA 2023) · technical writer median $90,390 (BLS) · AAAS policy fellow stipend ~$101K–$131K",
    },
    {
      path: "Patent Law & Consulting",
      icon: "⚖️",
      color: C.blue,
      roles: ["Technical Specialist", "Patent Agent", "Patent Attorney", "Consultant", "Partner"],
      reality:
        "The high-earning exit few undergraduates know about. Life-science patent law and scientific/management consulting both pay a premium for people who can actually read the science — advanced life-sciences degrees sit at the top of patent-agent pay. Patent agents can sit the USPTO exam without a law degree; patent attorneys add a JD. Consulting is a separate route, and PhD-specific hiring was not researched here. Competitive to break into, but the pay ceiling is genuinely high.",
      ai:
        "Low direct exposure — these are judgment-, persuasion-, and relationship-heavy roles where the science degree is leverage, not the task being automated.",
      salary: "Patent agent ~$70K–$110K before registration, ~$120K–$160K+ with an advanced life-sciences degree (2026 estimate) · all lawyers median $159,670 (BLS) · management analysts median $101,860 (BLS) · patent-attorney and top-firm consulting pay not found",
    },
  ],
};

/* --- signature: a live action-potential scope trace --------------- */
const AP_PATH =
  "M0,34 L58,34 Q66,34 70,32 L76,33 C80,33 82,8 86,8 C90,8 92,54 96,54 C100,54 102,40 106,38 L112,34 L150,34";
function ScopeTrace({ color, height = 68, glow = true }) {
  return (
    <div style={{ overflow: "hidden", width: "100%", height, position: "relative" }} aria-hidden="true">
      <svg
        className="scopeSweep"
        width="300"
        height={height}
        viewBox="0 0 300 68"
        preserveAspectRatio="none"
        style={{ display: "block", filter: glow ? `drop-shadow(0 0 5px ${color}aa)` : "none" }}
      >
        <path d={AP_PATH} fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
        <path
          d={AP_PATH}
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="translate(150,0)"
        />
      </svg>
    </div>
  );
}

export default function NeuroscienceRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.amber : phase.color;

  const selectPhase = (id) => {
    setShowCareers(false);
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
  };

  const tabBase = {
    fontFamily: font.mono,
    fontSize: 12,
    letterSpacing: "0.03em",
    padding: "10px 14px",
    borderRadius: 6,
    border: `1px solid ${C.border}`,
    background: C.panel,
    color: C.muted,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  return (
    <div
      style={{
        fontFamily: font.body,
        background: C.bg,
        color: C.ink,
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(55,224,232,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(55,224,232,0.035) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
    >
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .hscroll::-webkit-scrollbar { display: none; }
        .cardgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
        .scopeSweep { animation: sweep 2.6s linear infinite; }
        @keyframes sweep { from { transform: translateX(0); } to { transform: translateX(-150px); } }
        button:focus-visible { outline: 2px solid ${C.signal}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) { .scopeSweep { animation: none; } }
      `}</style>

      <div style={{ maxWidth: 940, margin: "0 auto", padding: "26px 18px 60px" }}>
        {/* header */}
        <header style={{ marginBottom: 20 }}>
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: "0.22em",
              color: C.signal,
              marginBottom: 10,
            }}
          >
            ◉ REC · 20 kHz · CH-01 &nbsp;·&nbsp; FIELD-OF-STUDY ROADMAP
          </div>
          <h1
            style={{
              fontFamily: font.display,
              fontWeight: 800,
              fontSize: "clamp(34px, 8vw, 60px)",
              lineHeight: 0.98,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Neuroscience
          </h1>
          <p style={{ margin: "0 0 14px", color: C.muted, fontSize: 15.5, maxWidth: 640, lineHeight: 1.55 }}>
            From your first action potential to a career — the honest signal on what the brain sciences
            actually train you for, and where graduates land.
          </p>
          <div
            style={{
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              background: C.panel,
              padding: "4px 0",
            }}
          >
            <ScopeTrace color={C.signal} />
          </div>
        </header>

        {summary}

        {/* nav */}
        <nav className="hscroll" style={{ marginBottom: 24 }}>
          {data.phases.map((p) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => selectPhase(p.id)}
                style={{
                  ...tabBase,
                  fontFamily: font.display,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 0,
                  border: `1px solid ${on ? p.color : C.border}`,
                  color: on ? C.bg : C.ink,
                  background: on ? p.color : C.panel,
                  boxShadow: on ? `0 0 16px ${p.color}44` : "none",
                }}
              >
                {p.label}
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 10,
                    marginLeft: 8,
                    color: on ? C.bg : C.faint,
                  }}
                >
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
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 0,
              border: `1px solid ${showCareers ? C.amber : C.border}`,
              color: showCareers ? C.bg : C.ink,
              background: showCareers ? C.amber : C.panel,
              boxShadow: showCareers ? `0 0 16px ${C.amber}44` : "none",
            }}
          >
            Career Paths
            <span style={{ fontFamily: font.mono, fontSize: 10, marginLeft: 8, color: showCareers ? C.bg : C.faint }}>
              7 PATHS
            </span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* phase intro */}
            <div style={{ borderLeft: `3px solid ${phase.color}`, paddingLeft: 16, marginBottom: 8 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: phase.color,
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                }}
              >
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 15.5, lineHeight: 1.62, maxWidth: 780 }}>
                {phase.intro}
              </p>
            </div>

            {/* trace divider */}
            <div style={{ margin: "10px 0 18px", opacity: 0.8 }}>
              <ScopeTrace color={phase.color} height={40} />
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
                      border: `1px solid ${on ? phase.color : C.border}`,
                      color: on ? phase.color : C.muted,
                      background: on ? C.panelUp : "transparent",
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
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? phase.color : C.border}`,
                      borderRadius: 8,
                      padding: "15px 16px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? `0 0 0 1px ${phase.color}55, 0 6px 20px -12px ${phase.color}` : "none",
                      transition: "all .14s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: font.mono,
                          fontSize: 11,
                          color: phase.color,
                          width: 26,
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontFamily: font.display,
                          fontWeight: 600,
                          fontSize: 15.5,
                          flex: 1,
                          color: open ? phase.color : C.ink,
                        }}
                      >
                        {item.name}
                      </span>
                      <span style={{ color: C.faint, fontSize: 18, lineHeight: 1, transform: open ? "rotate(45deg)" : "none", transition: "transform .18s" }}>
                        +
                      </span>
                    </div>
                    {open && (
                      <p
                        style={{
                          margin: "11px 0 0 38px",
                          color: C.muted,
                          fontSize: 14.3,
                          lineHeight: 1.6,
                        }}
                      >
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
            <div style={{ borderLeft: `3px solid ${C.amber}`, paddingLeft: 16, marginBottom: 8 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: C.amber,
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                }}
              >
                WHERE GRADUATES LAND · 7 PATHS
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 15.5, lineHeight: 1.62, maxWidth: 780 }}>
                Neuroscience fans out far wider than "become a neuroscientist." These are the real
                destinations — with the honest picture of what each requires, how the credential gates
                work, and what it pays.
              </p>
            </div>

            <div style={{ margin: "10px 0 18px", opacity: 0.8 }}>
              <ScopeTrace color={C.amber} height={40} />
            </div>

            <div className="cardgrid">
              {data.careers.map((c, i) => {
                const open = expandedCareer === i;
                return (
                  <button
                    key={c.path}
                    onClick={() => setExpandedCareer(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? c.color : C.border}`,
                      borderRadius: 10,
                      padding: "16px 16px 15px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? `0 0 0 1px ${c.color}55, 0 10px 30px -16px ${c.color}` : "none",
                      transition: "all .14s",
                      gridColumn: open ? "1 / -1" : "auto",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                      <span style={{ fontSize: 22, lineHeight: 1 }}>{c.icon}</span>
                      <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 17, color: c.color }}>
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
                            color: C.muted,
                            border: `1px solid ${C.border}`,
                            borderRadius: 4,
                            padding: "3px 7px",
                            background: C.bg,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>

                    {open && (
                      <div style={{ marginTop: 14 }}>
                        <p style={{ margin: "0 0 12px", color: C.ink, fontSize: 14.4, lineHeight: 1.62 }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            gap: 8,
                            marginBottom: 12,
                            padding: "10px 12px",
                            background: C.bg,
                            border: `1px solid ${C.border}`,
                            borderRadius: 7,
                          }}
                        >
                          <span style={{ fontFamily: font.mono, fontSize: 10, color: c.color, letterSpacing: "0.1em", flexShrink: 0, marginTop: 1 }}>
                            AI ▸
                          </span>
                          <span style={{ color: C.muted, fontSize: 13.4, lineHeight: 1.55 }}>{c.ai}</span>
                        </div>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 12.5,
                            color: c.color,
                            background: `${c.color}14`,
                            border: `1px solid ${c.color}44`,
                            borderRadius: 7,
                            padding: "10px 12px",
                            lineHeight: 1.5,
                          }}
                        >
                          {c.salary}
                        </div>
                      </div>
                    )}

                    {!open && (
                      <div style={{ marginTop: 12, fontFamily: font.mono, fontSize: 11, color: C.faint }}>
                        tap for reality + pay ▸
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* footer */}
        <footer
          style={{
            marginTop: 34,
            paddingTop: 16,
            borderTop: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: font.mono,
            fontSize: 11.5,
            color: C.faint,
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: accent }}>▸</span>
          Tap any item to expand it. Figures are US-based (BLS May 2025 where available) and vary widely by region,
          institution, and sector.
        </footer>
      </div>
    </div>
  );
}
