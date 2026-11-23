import { useState } from "react";

/* ── PHARMACY ROADMAP ─ "apothecary" aesthetic ──
   Warm prescription-pad paper; the one bold focal moment is a deep
   amber-glass label band — as if read through an amber pill bottle —
   with a scrolling dispensing line of capsules and a SIG stats readout.
   bg #F5EFE3 · card #FFFDF7 · ink #2A2015
   amber #B26B0E · green #2E7D5B · blue #2C6E8F · plum #7A4E86 · rose #BC4A2E
   display: Spectral · body: Libre Franklin · data: Space Mono */

const C = {
  bg: "#F5EFE3",
  card: "#FFFDF7",
  cardUp: "#FBF4E6",
  line: "#E4D9C4",
  ink: "#2A2015",
  dim: "#6B5D48",
  faint: "#9A8C74",
  amber: "#B26B0E",
  green: "#2E7D5B",
  blue: "#2C6E8F",
  plum: "#7A4E86",
  rose: "#BC4A2E",
  // amber-glass signature band
  glass: "#281909",
  glassLine: "#463210",
  glow: "#E9A84B",
};

const font = {
  display: "'Spectral', Georgia, serif",
  body: "'Libre Franklin', system-ui, sans-serif",
  mono: "'Space Mono', monospace",
};

/* the SIG readout — workforce stats set like directions on a Rx label */
const sig = [
  { k: "PHARMACIST MEDIAN", v: "$140,910", tone: "up" },
  { k: "JOB GROWTH ’24–34", v: "+5%", tone: "up" },
  { k: "OPENINGS / YR", v: "~14,200", tone: "up" },
  { k: "NAPLEX PASS ’25", v: "86.8%", tone: "up" },
  { k: "MSL MEDIAN", v: "~$181K", tone: "up" },
  { k: "HOSPITAL SHARE", v: ">30% ▲", tone: "up" },
  { k: "RETAIL JOBS", v: "DECLINING", tone: "warn" },
  { k: "BURNOUT RATE", v: "~78%", tone: "warn" },
  { k: "CALIFORNIA MEAN", v: "$162,340", tone: "up" },
  { k: "TIME TO LICENSE", v: "6–8 YRS", tone: "up" },
];

/* a repeating dispensing-line pattern of capsules & tablets */
const dispensingLine = [
  { type: "cap", a: "#E9A84B", b: "#F3E7CF" },
  { type: "tab", a: "#F3E7CF" },
  { type: "cap", a: "#C77E2A", b: "#E9A84B" },
  { type: "cap", a: "#7FB79A", b: "#F3E7CF" },
  { type: "tab", a: "#E9A84B" },
  { type: "cap", a: "#E9A84B", b: "#C77E2A" },
  { type: "tab", a: "#B99A6A" },
  { type: "cap", a: "#F3E7CF", b: "#7FB79A" },
  { type: "cap", a: "#C77E2A", b: "#F3E7CF" },
  { type: "tab", a: "#E9A84B" },
  { type: "cap", a: "#E9A84B", b: "#F3E7CF" },
  { type: "cap", a: "#7FB79A", b: "#C77E2A" },
];

const data = {
  phases: [
    {
      id: "pharmd",
      label: "Pre-Pharmacy & PharmD",
      years: "ENTRY · YRS 1–8",
      color: C.amber,
      intro:
        "Pharmacy doesn't follow the bachelor's-then-master's arc. You complete two to four years of pre-pharmacy prerequisites, then a four-year Doctor of Pharmacy (PharmD) — a professional doctorate that leaves you licensed and employable, with no separate bachelor's or master's gate. The counterintuitive part: after a decade of oversupply, applications have fallen so far that getting in is now the easiest it's been in a generation — which is exactly why choosing a strong program matters more than ever.",
      sections: [
        {
          title: "Getting In",
          icon: "📝",
          items: [
            {
              name: "Pre-pharmacy prerequisites",
              detail:
                "General & organic chemistry, biology, anatomy & physiology, microbiology, calculus, physics, and statistics — usually two years minimum, though many applicants finish a full bachelor's first. A grade of C or better is required; a cumulative GPA around 3.0+ is competitive.",
            },
            {
              name: "The PCAT is gone",
              detail:
                "The Pharmacy College Admission Test was retired in January 2024. No U.S. pharmacy school requires it anymore. Admission is now holistic — GPA, prerequisites, experience, letters, and an interview carry the weight a test score once did.",
            },
            {
              name: "Pharmacy experience first",
              detail:
                "Working as a pharmacy technician or intern is the single highest-value pre-pharmacy move. It confirms you actually like the work before the debt, and it's what strengthens an application most now that the PCAT is gone.",
            },
            {
              name: "The buyer's market",
              detail:
                "Applicant pools have shrunk sharply; enrollment is down ~15% since 2019, and many schools now have open or near-open acceptance. Easier entry is real — but weaker programs post lower licensure pass rates, so program quality is the thing to scrutinize.",
            },
          ],
        },
        {
          title: "PharmD Curriculum",
          icon: "📘",
          items: [
            {
              name: "Pharmacology & Medicinal Chemistry",
              detail:
                "How drugs work at the molecular level and in the body. The conceptual spine — and among the hardest, because you integrate chemistry, biology, and clinical reasoning rather than memorize in isolation.",
            },
            {
              name: "Pharmacotherapeutics",
              detail:
                "The case-based core sequence: matching the right drug, dose, and regimen to a real patient with comorbidities, labs, and interactions. It builds in complexity across all four years and is the heart of the degree.",
            },
            {
              name: "Pharmaceutics & Pharmacokinetics",
              detail:
                "Dosage-form design, sterile and non-sterile compounding, and the math of how drugs move through the body — absorption, distribution, dosing. Quantitative and notoriously demanding.",
            },
            {
              name: "Pharmacy Law & Ethics",
              detail:
                "Federal and state regulation of controlled substances and dispensing. Tested separately on the MPJE law exam, so it's studied with unusual precision.",
            },
            {
              name: "The first-semester wall",
              detail:
                "18–19 lecture hours a week with one to three exams most weeks. The jump from undergrad is the shock students most often name as the single hardest part of the whole program.",
            },
          ],
        },
        {
          title: "Experiential Training",
          icon: "🩺",
          items: [
            {
              name: "IPPE — Introductory rotations",
              detail:
                "Early, part-time practice experiences in community and hospital settings woven through the first three years — often a recurring 'Wednesdays in practice' day alongside classwork.",
            },
            {
              name: "APPE — Advanced rotations",
              detail:
                "The entire final year: eight or more five-week rotations across acute care, ambulatory care, community, and elective specialties. Where classroom knowledge finally becomes practice.",
            },
            {
              name: "Skills labs",
              detail:
                "Filling and checking prescriptions, the 'top 200/300 drugs,' patient counseling, sterile compounding, and immunization certification — the hands-on craft, reinforced through every year.",
            },
          ],
        },
        {
          title: "Licensure & Debt",
          icon: "✓",
          items: [
            {
              name: "NAPLEX",
              detail:
                "The national competency exam. First-time pass rates slid from ~82% (2017–19) to ~76% (2022–24) as weaker programs expanded, then rebounded to 86.8% in 2025. Program quality shows up plainly here.",
            },
            {
              name: "MPJE",
              detail:
                "The Multistate Pharmacy Jurisprudence Exam — a separate law exam for each state you want to license in (~74% first-time pass). Practicing across state lines means sitting it again.",
            },
            {
              name: "The debt reality",
              detail:
                "PharmD tuition runs roughly $30K–$50K per year, and most graduates leave with $100K–$200K+ in loans. Unlike a funded research PhD, this is professional-school debt you carry from day one.",
            },
          ],
        },
      ],
    },
    {
      id: "postgrad",
      label: "Postgraduate Training",
      years: "PGY1 · PGY2 · YRS ~9–10",
      color: C.green,
      intro:
        "Here's what's changed most. For retail, the PharmD alone still gets you hired. But the clinical, hospital, and industry jobs everyone now wants increasingly require postgraduate training the degree used to cover on its own. A one-year residency (PGY1), often a specialized second year (PGY2), an industry fellowship, or board certification has quietly become the real gate to the best-paid, most durable roles — and it's optional in name only.",
      sections: [
        {
          title: "Residency",
          icon: "🏥",
          items: [
            {
              name: "PGY1 — the broad year",
              detail:
                "A one-year hospital or health-system residency building broad clinical skills across a patient population. It has become effectively required for hospital and clinical pharmacist jobs.",
            },
            {
              name: "PGY2 — the specialty year",
              detail:
                "A second, specialized year: oncology, critical care, infectious diseases, cardiology, psychiatry, ambulatory care, and more. The route to specialist clinical roles and the highest clinical pay.",
            },
            {
              name: "The Match",
              detail:
                "Residencies fill through the ASHP Match, and it's competitive — national PGY1 match rates run ~74–81%, so a meaningful share of applicants don't place on the first try and scramble in Phase II.",
            },
            {
              name: "Paid, but modest",
              detail:
                "Residents earn a stipend (~$45K–$55K), well below staff-pharmacist pay — a one-to-two-year investment that trades near-term income for access to specialized roles.",
            },
          ],
        },
        {
          title: "Industry Fellowship",
          icon: "🔬",
          items: [
            {
              name: "What it opens",
              detail:
                "A one-to-two-year postdoctoral program inside a pharma or biotech company — the on-ramp to industry roles in medical affairs, regulatory, drug safety, clinical development, and health economics.",
            },
            {
              name: "Fellowship vs. residency",
              detail:
                "A resident is a practitioner giving direct patient care; a fellow works in a corporate setting on drug development and access — indirect care at global scale. Different worlds, different day-to-day.",
            },
            {
              name: "How they're structured",
              detail:
                "Many top fellowships pair a university with a company (the Rutgers model is the best known), rotating fellows across functional areas. They're highly sought-after and application is competitive.",
            },
          ],
        },
        {
          title: "Board Certification",
          icon: "🎖️",
          items: [
            {
              name: "The 14 BPS specialties",
              detail:
                "The Board of Pharmacy Specialties recognizes 14 areas — Pharmacotherapy (BCPS), Oncology (BCOP), Infectious Diseases (BCIDP), Psychiatric (BCPP), Ambulatory Care, Critical Care, and more.",
            },
            {
              name: "Increasingly expected",
              detail:
                "Employers now often require or prefer certification for clinical roles. Keep the post-nominals straight: BCPS is pharmacotherapy, BCPP is psychiatric — they're different credentials and easy to confuse.",
            },
            {
              name: "How you qualify",
              detail:
                "A license plus experience (completing a residency shortens the experience requirement), then a specialty exam. It certifies clinical competence by examination, and recertification is ongoing.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "Research & the PhD Track",
      years: "PhD · PharmD/PhD · YRS ~9+",
      color: C.plum,
      intro:
        "A separate track entirely. The PharmD trains you to practice; a PhD in the pharmaceutical sciences trains you to discover. Some students combine both in a PharmD/PhD; others enter a pharmaceutical-sciences PhD directly. Unlike the PharmD, this doctorate is typically funded through assistantships — and it points toward drug discovery, academia, and the research frontier rather than the pharmacy counter.",
      sections: [
        {
          title: "The Doctoral Path",
          icon: "🧪",
          items: [
            {
              name: "Pharmaceutical Sciences PhD",
              detail:
                "A research doctorate, usually 4–6 years and funded via assistantships, in medicinal chemistry, pharmacology/toxicology, pharmaceutics and drug delivery, or pharmacometrics.",
            },
            {
              name: "PharmD/PhD dual pathway",
              detail:
                "Combines clinical licensure with research training — the classic route to a pharmacist-scientist or tenure-track academic career, bridging the clinic and the bench.",
            },
            {
              name: "Research fellowship (distinct)",
              detail:
                "A post-residency academic research fellowship trains a clinical pharmacist to become an independent investigator. It's not a PhD and not a board certification — a common point of confusion.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🧭",
          items: [
            {
              name: "Pharmacometrics & PK/PD modeling",
              detail:
                "Quantitative modeling of drug behavior to guide dosing and trial design. One of the field's hottest and most computational subfields, and a bridge to data-science careers.",
            },
            {
              name: "Drug delivery & formulation",
              detail:
                "mRNA and lipid nanoparticles, biologics, long-acting injectables — the science behind how modern therapies actually reach their target. Reshaped dramatically by the COVID vaccine era.",
            },
            {
              name: "Pharmacogenomics & precision dosing",
              detail:
                "Tailoring drug therapy to a patient's genome. Moving out of the lab and into practice, and a frontier where research and clinical pharmacy genuinely overlap.",
            },
            {
              name: "AI in drug discovery",
              detail:
                "Machine learning for candidate screening, toxicity prediction, and trial optimization — transforming the earliest, most expensive stages of the drug pipeline.",
            },
          ],
        },
        {
          title: "Academia",
          icon: "🎓",
          items: [
            {
              name: "The faculty ladder",
              detail:
                "Clinical-track faculty (PharmD plus residency) and research-track faculty (PhD) teach the next generation and generate the profession's evidence base — often splitting time across teaching, research, and practice.",
            },
            {
              name: "The pay catch",
              detail:
                "As in nursing, a faculty shortage exists and research-track academic pay often trails clinical and industry roles. It's a calling more than a payday — and that gap is itself a bottleneck on training capacity.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Community / Retail",
      icon: "💊",
      color: C.amber,
      roles: ["Staff Pharmacist", "Pharmacy Manager", "District Manager", "Independent Owner"],
      reality:
        "The historic default — dispensing, counseling, immunizing, and running a store's pharmacy — and still the largest single employer of pharmacists. But it's a shrinking one: the two national chains have closed nearly 3,000 stores since 2018, Rite Aid liquidated, and retail employment has fallen to its lowest level since 2010. The PharmD alone still gets you hired here, but expect volume pressure (200–300 scripts a day), understaffing, and the field's highest burnout. Independent and supermarket pharmacies are the brighter corners.",
      ai: "High on the dispensing side — robotic dispensing and auto-verification are built to cut headcount — but counseling, immunizing, and clinical services stay human.",
      salary: "~$131,640 median (retail); overall pharmacist median $140,910",
    },
    {
      path: "Hospital / Health-System",
      icon: "🏥",
      color: C.blue,
      roles: ["Staff Pharmacist", "Clinical Pharmacist", "Pharmacy Supervisor", "Director of Pharmacy"],
      reality:
        "The field's growth engine. Hospital employment surged from ~68,000 in 2010 to nearly 100,000 in 2024 — now more than 30% of all pharmacists — as health systems chase specialty-pharmacy revenue. The work spans order verification, sterile compounding, and increasingly clinical rounds with medical teams. The catch: these jobs now essentially require a PGY1 residency, so the 'employable on the PharmD alone' promise doesn't extend here.",
      ai: "Moderate — AI handles order verification and inventory, freeing pharmacists toward clinical work; the clinical-judgment core is protected.",
      salary: "~$120K–$145K depending on role, system, and region",
    },
    {
      path: "Clinical / Ambulatory Care",
      icon: "⚕️",
      color: C.green,
      roles: ["Clinical Pharmacist", "Ambulatory Care", "MTM Pharmacist", "BCPS / BCOP Specialist"],
      reality:
        "The patient-facing clinical role — managing chronic disease (diabetes, anticoagulation, oncology) in clinics, running medication therapy management, and collaborating directly on drug regimens. Demand is rising as care shifts outpatient, but it's selective: nearly always requires a PGY1 (often PGY2) plus board certification. This is where the profession is trying to move — from dispensing toward direct care — and where the residency investment pays off.",
      ai: "Low — the clinical judgment and patient relationship are the protected work; AI assists with data, not the decision.",
      salary: "~$120K–$150K; higher with subspecialty certification",
    },
    {
      path: "Industry / Medical Affairs",
      icon: "🧬",
      color: C.plum,
      roles: ["Medical Science Liaison", "Medical Affairs", "Drug Safety", "Clinical Development"],
      reality:
        "The corporate wing — pharma and biotech roles in medical affairs, regulatory, drug safety, and clinical trials. The marquee job is the Medical Science Liaison, a scientific bridge to leading physicians (median ~$181K). These pay the best in the field but are competitive and usually gated by an industry fellowship or strong clinical experience; entry straight from the PharmD is rare and getting rarer.",
      ai: "Low-to-moderate — relationship-building and scientific translation resist automation, though AI accelerates the research behind it.",
      salary: "MSL ~$181K; other industry roles generally $130K+",
    },
    {
      path: "Regulatory & Government",
      icon: "🏛️",
      color: "#3F6A7D",
      roles: ["Regulatory Affairs", "FDA Reviewer", "VA / PHS Pharmacist", "Policy Advisor"],
      reality:
        "Using medication expertise to shepherd drugs through approval and to write and enforce the rules — at pharma companies or agencies like the FDA, VA, CMS, and Public Health Service. Specialized and stable; the narrower candidate pool means noticeably less competition than retail. Government roles trade lower base pay for strong benefits, pension, and predictable hours.",
      ai: "Low — regulatory judgment and accountability sit with humans; AI is a drafting-and-review tool, not a substitute.",
      salary: "~$110K–$160K; senior regulatory roles higher",
    },
    {
      path: "Managed Care / PBM",
      icon: "📊",
      color: "#3E8C86",
      roles: ["Managed Care Pharmacist", "Formulary Manager", "Prior-Auth Clinician", "Clinical Advisor"],
      reality:
        "The insurance and pharmacy-benefit-manager side — formulary decisions, drug-utilization review, prior authorization, and specialty-pharmacy oversight. A business-and-strategy role for pharmacists who prefer systems to the counter, and one of the more remote-friendly paths. Growing with PBM consolidation, though the sector is under sustained regulatory and political scrutiny.",
      ai: "Moderate — automates utilization review and prior-auth triage, shifting pharmacists toward oversight and complex cases.",
      salary: "~$120K–$150K; frequently remote",
    },
    {
      path: "Nuclear / Specialty",
      icon: "☢️",
      color: "#B5842B",
      roles: ["Nuclear Pharmacist", "Compounding Pharmacist", "Infusion Pharmacist", "Specialty-Drug"],
      reality:
        "The niche, high-skill corners. Nuclear pharmacists prepare radiopharmaceuticals for imaging and cancer therapy — often on pre-dawn shifts at commercial radiopharmacies. Compounding and infusion pharmacists prepare sterile, patient-specific medications. Smaller candidate pools and specialized training (nuclear requires extra certification) mean less competition and solid, stable pay for those who want a technical, hands-on practice.",
      ai: "Low — radioactive and sterile preparation is hands-on, safety-critical, and heavily regulated.",
      salary: "Nuclear ~$134K–$154K; specialty varies",
    },
    {
      path: "Pharmacy Informatics",
      icon: "💻",
      color: "#6E56C8",
      roles: ["Informatics Pharmacist", "Clinical Analyst", "Medication-Safety Officer", "CMIO track"],
      reality:
        "The bridge between clinical pharmacy and health IT — configuring EHRs and e-prescribing, managing automated dispensing systems, and turning medication data into safer workflows. A natural, growing landing spot as automation and AI spread, and one of the few roles that's a net beneficiary of the same technology squeezing dispensing jobs: someone has to select, implement, and govern it.",
      ai: "A beneficiary — the person who oversees the AI tools reshaping pharmacy, not the one they replace.",
      salary: "~$120K–$150K+; strong upward trajectory",
    },
  ],
};

export default function PharmacyRoadmap() {
  const [activePhase, setActivePhase] = useState("pharmd");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.rose : phase.color;

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
    borderRadius: 4,
    border: `1px solid ${C.line}`,
    background: C.card,
    color: C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  const Pill = ({ p }) => {
    if (p.type === "tab") {
      return (
        <span
          style={{
            width: 15,
            height: 15,
            borderRadius: 999,
            background: p.a,
            display: "inline-block",
            flexShrink: 0,
            position: "relative",
            boxShadow: `0 0 5px ${p.a}66`,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: 2,
              bottom: 2,
              width: 1,
              transform: "translateX(-50%)",
              background: "#00000022",
            }}
          />
        </span>
      );
    }
    return (
      <span
        style={{
          width: 38,
          height: 15,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${p.a} 0 50%, ${p.b} 50% 100%)`,
          display: "inline-block",
          flexShrink: 0,
          boxShadow: "inset 0 1px 1px #ffffff33, 0 0 5px #00000033",
        }}
      />
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,600;0,800;1,400&family=Libre+Franklin:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        @keyframes lineScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .lineTrack { display: inline-flex; align-items: center; gap: 18px; animation: lineScroll 22s linear infinite; }
        @keyframes rxPulse { 0%,100% { opacity: .4; } 50% { opacity: 1; } }
        .rxPulse { animation: rxPulse 1.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .lineTrack { animation: none; }
          .rxPulse { animation: none; opacity: 1; }
        }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.amber}; outline-offset: 2px; }
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
          <span className="rxPulse" style={{ fontWeight: 700, fontSize: 14 }}>℞</span>
          FIELD ROADMAP · SIG: READ AS DIRECTED
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 800,
            fontSize: "clamp(40px, 8.5vw, 72px)",
            lineHeight: 1.0,
            margin: "10px 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Pharmacy
        </h1>
        <p style={{ color: C.dim, fontSize: 16, maxWidth: 680, margin: 0, lineHeight: 1.55 }}>
          One professional doctorate, licensed on graduation — then a field quietly splitting in
          two: a shrinking retail counter and a growing clinical, industry, and research world that
          increasingly asks for a residency. The full path, priced honestly, with an AI read on
          every destination.
        </p>
      </header>

      {/* signature — amber-glass Rx label band: dispensing line + SIG readout */}
      <div
        style={{
          background: C.glass,
          borderTop: `1px solid ${C.glassLine}`,
          borderBottom: `1px solid ${C.glassLine}`,
          backgroundImage:
            "linear-gradient(180deg, rgba(233,168,75,0.10) 0%, rgba(40,25,9,0) 45%)",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "15px 20px 16px" }}>
          {/* dispensing line */}
          <div style={{ overflow: "hidden", height: 26, position: "relative" }} aria-hidden="true">
            <div className="lineTrack" style={{ height: 26 }}>
              {[0, 1].map((rep) => (
                <span key={rep} style={{ display: "inline-flex", alignItems: "center", gap: 18 }}>
                  {dispensingLine.map((p, i) => (
                    <Pill key={rep + "-" + i} p={p} />
                  ))}
                </span>
              ))}
            </div>
          </div>
          {/* SIG readout */}
          <div className="hscroll" style={{ gap: 0, marginTop: 10 }}>
            {sig.map((s, i) => (
              <div
                key={s.k}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: "4px 16px",
                  borderLeft: i === 0 ? "none" : `1px solid ${C.glassLine}`,
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: font.mono, fontSize: 9.5, letterSpacing: "0.07em", color: "#9E8355" }}>
                  {s.k}
                </span>
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: s.tone === "warn" ? "#E88A5C" : C.glow,
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
                  fontWeight: 700,
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
              border: `1px solid ${showCareers ? C.rose : C.line}`,
              color: showCareers ? "#fff" : C.dim,
              background: showCareers ? C.rose : C.card,
              fontWeight: 700,
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
              <p style={{ margin: 0, color: C.ink, fontSize: 15.5, lineHeight: 1.62, maxWidth: 760 }}>
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
                      borderRadius: 6,
                      padding: "15px 17px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? "none" : "0 1px 2px rgba(42,32,21,0.04)",
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
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
            <div style={{ borderLeft: `3px solid ${C.rose}`, paddingLeft: 16, marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: C.rose,
                  letterSpacing: "0.13em",
                  marginBottom: 6,
                }}
              >
                DESTINATIONS · SALARY: BLS OEWS MAY 2025 + NAMED INDUSTRY SOURCES
              </div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.62, color: C.ink, maxWidth: 760 }}>
                Eight destinations from one PharmD — from the retail counter that's contracting to
                the hospital, clinical, and industry roles absorbing the shift. Every card carries an
                honest read on what it now takes to get there, and how exposed it is to automation.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
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
                      borderRadius: 6,
                      padding: 17,
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? "none" : "0 1px 2px rgba(42,32,21,0.04)",
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
                          fontWeight: 800,
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
                            borderRadius: 4,
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
                            color: "#8A5410",
                            background: "#F6ECD8",
                            border: `1px solid #E4D2AC`,
                            borderRadius: 5,
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
          TAP ANY ITEM OR CARD TO EXPAND · SOURCES: BLS OEWS MAY 2025 (RELEASED MAY 2026), DRUG
          CHANNELS 2025, NABP NAPLEX/MPJE TABLES, ASHP MATCH, GLASSDOOR · COMPILED JUL 2026
        </footer>
      </main>
    </div>
  );
}
