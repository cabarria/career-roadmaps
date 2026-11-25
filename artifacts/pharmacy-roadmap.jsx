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
  { k: "PHARMACIST MEDIAN", v: "$140,910", tone: "up", inSummary: true },
  { k: "JOB GROWTH ’25–35", v: "+5%", tone: "up", inSummary: true },
  { k: "OPENINGS / YR", v: "~12,500", tone: "up", inSummary: true },
  { k: "NAPLEX PASS ’25", v: "86.8%", tone: "up" },
  { k: "MSL PAY (GLASSDOOR)", v: "~$181K", tone: "up" },
  { k: "HOSPITAL JOBS ’25", v: "+3.0%", tone: "up" },
  { k: "RETAIL JOBS ’25", v: "−4.8%", tone: "warn" },
  { k: "HOSPITAL MEDIAN", v: "$157,290", tone: "up" },
  { k: "CALIFORNIA MEAN", v: "$162,340", tone: "up" },
  { k: "GRADS WHO BORROW", v: "81.5%", tone: "warn" },
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
        "Pharmacy doesn't follow the bachelor's-then-master's arc. You complete pre-pharmacy prerequisites (how long that takes varies by school, and nearly half of applicants already hold a bachelor's degree), then a typically four-year Doctor of Pharmacy (PharmD), a professional doctorate that leaves you eligible for licensure, with no separate bachelor's or master's gate. The counterintuitive part: programs accept more than 80% of applicants, so getting in is rarely the hard part. The differences show up later, in licensure pass rates and attrition, which is why scrutinizing a program matters.",
      sections: [
        {
          title: "Getting In",
          icon: "📝",
          items: [
            {
              name: "Pre-pharmacy prerequisites",
              detail:
                "Requirements are school-specific. One advising page lists four semesters of chemistry, calculus I, biology, microbiology, and anatomy & physiology; check each program for anything beyond that. Mercer, for example, requires a C or better in science-major courses and prefers a cumulative and science GPA of at least 3.0.",
            },
            {
              name: "The PCAT is gone",
              detail:
                "The Pharmacy College Admission Test was retired in January 2024. Admission now rests on GPA, prerequisites, work and extracurricular experience, and letters of recommendation.",
            },
            {
              name: "Pharmacy experience first",
              detail:
                "Half of accepted applicants had worked as pharmacy technicians (AACP). It also lets you confirm you like the work before taking on the debt, and programs such as Mercer weigh work experience.",
            },
            {
              name: "Open admission, uneven outcomes",
              detail:
                "Applications rose 6% from fall 2024 to fall 2025, and programs accept more than 80% of applicants (AACP). Total enrollment fell 4.7% in fall 2024, and attrition rose to 19.7% from 15.3%. Outcomes differ by school: Pitt's class of 2023 passed the NAPLEX at 91.5% against a 78.6% national figure Pitt cites, while one Nova Southeastern campus posted 68.6% for 2024 graduates.",
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
                "Dosage-form design, compounding, and the math of how drugs move through the body: absorption, distribution, dosing. Research.com names advanced pharmacokinetics among the hard electives.",
            },
            {
              name: "Pharmacy Law & Ethics",
              detail:
                "Federal and state regulation of controlled substances and dispensing. Tested separately on the MPJE law exam, so it's studied with unusual precision.",
            },
            {
              name: "The first-semester wall",
              detail:
                "One 2016 graduate described 19 lecture hours a week with one to three quizzes or exams most weeks, and called the jump from undergrad the hardest academic transition of their schooling. That is a single account; separately, AACP reports attrition rose to 19.7% from 15.3%.",
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
                "Early practice experiences woven through the first years. Washington runs a 'Wednesdays in Practice' series from the start through fall of year three, plus two 3-week introductory rotations.",
            },
            {
              name: "APPE — Advanced rotations",
              detail:
                "Rotations after the classroom years. Washington runs eight advanced rotations over 48 weeks; Minnesota and Maryland describe six semesters of coursework followed by a year of rotations. Maryland reports more than 700 preceptors across community pharmacies, hospitals, nursing homes, government agencies, and pharmaceutical companies.",
            },
            {
              name: "Skills labs",
              detail:
                "Binghamton's skills lab covers evaluating and filling prescriptions, the top 300 drugs, and medication counseling; Colorado lists compounding of dosage forms. The hands-on craft, practiced alongside the classroom years.",
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
                "The national competency exam. NABP's first-time pass rates for ACPE-accredited graduates were 87.0%, 88.2%, and 87.0% in 2017 to 2019, fell to 75.9% by 2024, then rose to 86.8% in 2025. NABP gives no reason for the change. School-level results vary widely.",
            },
            {
              name: "MPJE",
              detail:
                "The Multistate Pharmacy Jurisprudence Exam, the pharmacy law exam. First-time pass rates ran 72.7% to 75.3% from 2022 to 2025 (NABP).",
            },
            {
              name: "The debt reality",
              detail:
                "PharmD tuition runs roughly $30K to $50K per year (Research.com), and 81.5% of 2026 graduating-survey respondents said they borrowed for the degree (AACP). No current average debt figure was found; one 2018 graduate account put typical debt above $100,000. Unlike a funded research PhD, this is professional-school debt.",
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
        "Postgraduate training is common, but how far it is a job requirement is only partly documented. One PCOM faculty member says most hospitals require at least one year of residency while community and retail jobs generally do not, and Pitt reports 59% of its class of 2024 went on to a residency or fellowship. No posting-level data was found. The paths: a one-year residency (PGY1), often a specialized second year (PGY2), an industry fellowship, or board certification.",
      sections: [
        {
          title: "Residency",
          icon: "🏥",
          items: [
            {
              name: "PGY1 — the broad year",
              detail:
                "A one-year residency building pharmacotherapy skills across a broad patient population. PCOM faculty say most hospitals require at least one year of residency training; that is one account, not posting data.",
            },
            {
              name: "PGY2 — the specialty year",
              detail:
                "A second, more specialized year. PCOM faculty say some institutions require a PGY2 for specialist roles such as critical care or infectious diseases.",
            },
            {
              name: "The Match",
              detail:
                "Residencies fill through the ASHP Match. In 2026, across Phases I and II combined, 3,787 of 4,486 active applicants matched (about 84%, my calculation from ASHP's totals) and 699 did not.",
            },
            {
              name: "Paid, and it varies",
              detail:
                "Stipends differ by program: PGY1 is $57,600 at Inova (2026-27 estimate) and $79,344 at UC San Diego, against a $140,910 median for all pharmacists (BLS).",
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
                "Most fellowships run one to two years. Industry fellowships sit inside companies and cover functions such as drug information, pharmacoeconomics, outcomes research, and clinical research, with rotations across functional areas.",
            },
            {
              name: "Fellowship vs. residency",
              detail:
                "Residencies are typically about 80% clinical, while academic fellowships are research-focused (up to 80% research). Most fellowships, unlike most residencies, are not accredited.",
            },
            {
              name: "How they're structured",
              detail:
                "Academic fellowships usually follow a PGY1 and a PGY2, then add a year-long research fellowship. Industry roles often prioritize candidates with extra expertise or research experience, and an industry fellowship is one on-ramp.",
            },
          ],
        },
        {
          title: "Board Certification",
          icon: "🎖️",
          items: [
            {
              name: "The 16 BPS specialties",
              detail:
                "The Board of Pharmacy Specialties recognized 16 specialties as of December 2025, with pharmacy informatics the newest. Examples include Pharmacotherapy (BCPS), Oncology (BCOP), Infectious Diseases (BCIDP), and Psychiatric (BCPP).",
            },
            {
              name: "Sometimes required",
              detail:
                "PCOM faculty say some employers require certification for clinical roles. Keep the post-nominals straight: BCPS is pharmacotherapy, BCPP is psychiatric. They are different credentials and easy to confuse.",
            },
            {
              name: "How you qualify",
              detail:
                "Required experience depends on whether you completed a residency: PCOM faculty say candidates need at least one year of residency or three or more years of practice, then a specialty exam.",
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
        "A separate track. The PharmD trains you to practice; a PhD in the pharmaceutical sciences trains you to do research. Some schools offer a PharmD-to-PhD pathway or dual degrees (Lipscomb with Vanderbilt, Colorado, Maryland), while others admit directly into a PhD. Unlike the PharmD, the programs checked fund their students: Michigan and Wisconsin both cover stipend and tuition.",
      sections: [
        {
          title: "The Doctoral Path",
          icon: "🧪",
          items: [
            {
              name: "Pharmaceutical Sciences PhD",
              detail:
                "Michigan reports an average of 5.3 years to defense, with stipend, benefits, and tuition covered. Year 1 is coursework, research rotations, and a pre-candidacy research exam; later years are research, a dissertation, and defense. Wisconsin funds students through fellowships and assistantships, expects a preliminary exam before year three, and requires 51 credits.",
            },
            {
              name: "PharmD/PhD dual pathway",
              detail:
                "Lipscomb runs a PharmD-to-PhD pathway into a pharmacological sciences PhD at Vanderbilt, and Colorado and Maryland advertise dual-degree options. Check each program's structure and funding.",
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
                "Michigan names pharmacokinetics and pharmacodynamics as a research area, and UConn lists pharmaceutical modeling (PK/PD, PBPK, quantitative systems pharmacology) as a career pathway.",
            },
            {
              name: "Drug delivery & formulation",
              detail:
                "Michigan names nucleic acid delivery and therapeutics, antibody-drug conjugates, nanotechnology, pulmonary delivery, controlled release, and delivery of biologics. Wisconsin adds formulation, drug targeting, and molecular imaging.",
            },
            {
              name: "Drug discovery & drug action",
              detail:
                "Wisconsin groups research into drug discovery (medicinal chemistry, natural products, chemical biology, rational drug design) and drug action (pharmacology, toxicology, disease mechanisms).",
            },
            {
              name: "Regulatory science",
              detail:
                "Michigan lists regulatory science among its research areas. The work centers on making sure medicines and devices are safe, effective, and meet quality standards before distribution.",
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
                "PCOM faculty recommend a residency for faculty careers, and a residency director says a research-heavy faculty role needs an academic fellowship. AACP counted about 6,400 faculty in fall 2024, up 3.2%.",
            },
            {
              name: "Pay and vacancies: not established",
              detail:
                "No pharmacy faculty salary or vacancy figure was found. AACP's faculty profile and vacancy survey are the places to look before assuming a pay gap or a shortage.",
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
        "The largest setting, but a shrinking one. Retail pharmacist employment fell 4.8% in 2025 to about 162,000, the lowest since Drug Channels began tracking in 2010, and the two remaining national chains have closed nearly 3,000 locations since 2018. Rite Aid liquidated. PCOM faculty say community and retail jobs generally do not require a residency. Pay differs by employer type: BLS medians run from $132,940 at pharmacies and drug retailers to $151,370 at general merchandise retailers.",
      ai: "Moderate to high on the dispensing side (editorial read). Robotic dispensing is established, and a Pharmacy Times commentary expects automation to reduce retail pharmacist jobs; counseling, immunizing, and clinical services remain human work.",
      salary: "$132,940 median at pharmacies and drug retailers (BLS, May 2025); all pharmacists $140,910",
    },
    {
      path: "Hospital / Health-System",
      icon: "🏥",
      color: C.blue,
      roles: ["Staff Pharmacist", "Clinical Pharmacist", "Pharmacy Supervisor", "Director of Pharmacy"],
      reality:
        "The growth setting. Hospital employment rose from about 68,000 in 2010 to nearly 100,000 in 2024 and to about 102,000 in 2025 (+3.0%), as health systems pursue specialty-pharmacy revenue (Drug Channels, which notes its hospital counts likely understate hospital pharmacists). PCOM faculty say most hospitals require at least one year of residency; that is one account with no posting data behind it. At Pitt, 6% of the class of 2024 went straight into hospital or long-term-care practice.",
      ai: "Moderate (editorial read). Pharmacy Times reports 87.3% of hospitals use basic analytics and up to 73% use verification tools allowing remote oversight and low-risk auto-approvals; clinical judgment is not automated.",
      salary: "$157,290 median (BLS hospitals, May 2025); about $151K mean (Drug Channels)",
    },
    {
      path: "Clinical / Ambulatory Care",
      icon: "⚕️",
      color: C.green,
      roles: ["Clinical Pharmacist", "Ambulatory Care", "MTM Pharmacist", "BCPS / BCOP Specialist"],
      reality:
        "Patient-facing work managing chronic conditions such as diabetes, asthma, and heart disease in clinics, including medication therapy management. BLS has stated that demand is projected to increase for pharmacists in some settings, including hospitals and clinics (seen in an earlier excerpt; not rechecked on the current page). PCOM faculty say some employers require PGY1 or PGY2 training and some require board certification for clinical roles.",
      ai: "Low (editorial read). Clinical judgment and the patient relationship are the protected work.",
      salary: "$153,920 median for ambulatory healthcare services (BLS, May 2025; industry-level, not role-specific)",
    },
    {
      path: "Industry / Medical Affairs",
      icon: "🧬",
      color: C.plum,
      roles: ["Medical Science Liaison", "Medical Affairs", "Drug Safety", "Clinical Development"],
      reality:
        "Pharma and biotech roles in medical information, pharmacovigilance, research and development, clinical trials, regulatory affairs, and sales and marketing. Industry roles often prioritize candidates with extra expertise or research experience, and an industry fellowship is one on-ramp. The marquee job is the Medical Science Liaison (Glassdoor, as quoted by Sermo, puts the median near $181K; self-reported). No source was found on how often PharmD graduates enter industry directly.",
      ai: "Low to moderate (editorial read). Relationship-building and scientific translation resist automation.",
      salary: "MSL ~$181K (Glassdoor via Sermo, self-reported); industry pharmacists $130K+ (Pharmacy Times)",
    },
    {
      path: "Regulatory & Government",
      icon: "🏛️",
      color: "#3F6A7D",
      roles: ["Regulatory Affairs", "FDA Reviewer", "VA / PHS Pharmacist", "Policy Advisor"],
      reality:
        "The U.S. government employs pharmacists at the FDA, VA, Indian Health Service, CMS, Public Health Service, NIH, and the armed forces. Regulatory science centers on making sure medicines and devices are safe, effective, and meet quality standards before distribution. No source was found on how competitive these roles are or how government pay compares with other settings.",
      ai: "Low (editorial read). Regulatory accountability sits with people.",
      salary: "No role-specific source found; all pharmacists $140,910 median (BLS, May 2025)",
    },
    {
      path: "Managed Care / PBM",
      icon: "📊",
      color: "#3E8C86",
      roles: ["Managed Care Pharmacist", "Formulary Manager", "Prior-Auth Clinician", "Clinical Advisor"],
      reality:
        "The insurance and pharmacy-benefit-manager side: formulary management, coverage determination and prior authorization, drug-utilization review, clinical advisory work, and specialty pharmacy. No source on hiring trend, competitiveness, or remote share was found.",
      ai: "Moderate (editorial read). Utilization review and prior-authorization triage are the most automatable parts.",
      salary: "No role-specific source found; all pharmacists $140,910 median (BLS, May 2025)",
    },
    {
      path: "Nuclear / Specialty",
      icon: "☢️",
      color: "#B5842B",
      roles: ["Nuclear Pharmacist", "Compounding Pharmacist", "Infusion Pharmacist", "Specialty-Drug"],
      reality:
        "The niche corners. Nuclear pharmacists prepare and dispense radiopharmaceuticals for imaging and treatment at commercial radiopharmacies and hospitals with nuclear medicine, and nuclear pharmacy is a BPS-recognized specialty. Infusion pharmacists prepare sterile medications for patients who cannot take oral drugs, and compounding pharmacists prepare patient-specific products. No source on competitiveness was found.",
      ai: "Low (editorial read). The work is hands-on and safety-critical.",
      salary: "Nuclear ~$129K average, $99K to $147K range (Payscale, 18 profiles, Jan 2026)",
    },
    {
      path: "Pharmacy Informatics",
      icon: "💻",
      color: "#6E56C8",
      roles: ["Informatics Pharmacist", "Clinical Analyst", "Medication-Safety Officer", "CMIO track"],
      reality:
        "Work on electronic health records, e-prescribing, and automated dispensing cabinets to improve medication safety and efficiency. The Board of Pharmacy Specialties recognized pharmacy informatics as its 16th specialty in December 2025. The work involves selecting and governing the same automation that is changing dispensing, though no source measured demand for informatics roles.",
      ai: "Low (editorial read). The role oversees these tools, but this is inference, not a measured trend.",
      salary: "$149,262 median (Salary.com estimate, Nov 2026); middle range $143K to $158K",
    },
  ],
};

export default function PharmacyRoadmap({ summary } = {}) {
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
          often involves postgraduate training. The full path, priced honestly, with an AI read on
          every destination.
        </p>
      </header>

      {summary}

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
            {sig.filter(stat => !summary || !stat.inSummary).map((s, i) => (
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
                the hospital, clinical, and industry roles absorbing the shift. Every card carries a
                short read on what it takes to get there, plus an editorial AI-exposure line (a judgment, not a measurement).
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
          TAP ANY ITEM OR CARD TO EXPAND · SOURCES: BLS OOH (MAY 2025 DATA), DRUG
          CHANNELS 2026, NABP, AACP, ASHP MATCH 2026, GLASSDOOR VIA SERMO · VERIFIED NOV 2026 · AI EXPOSURE LINES ARE EDITORIAL
        </footer>
      </main>
    </div>
  );
}
