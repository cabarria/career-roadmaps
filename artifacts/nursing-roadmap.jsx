import { useState } from "react";

/* ── NURSING ROADMAP ─ "vital signs" aesthetic ──
   Calm care palette on pale sage paper; one bold focal moment:
   a dark patient-monitor band with a live ECG trace + vitals readout.
   bg #EEF3F0 · card #FFFFFF · ink #1E2E2A
   teal #0E8C7F · indigo #4C6FBF · plum #8A4F94 · rose #E4576F
   display: Fraunces · body: Mulish · data: JetBrains Mono */

const C = {
  bg: "#EEF3F0",
  card: "#FFFFFF",
  cardUp: "#F5FAF8",
  line: "#D6E2DC",
  ink: "#1E2E2A",
  dim: "#566B64",
  faint: "#889992",
  teal: "#0E8C7F",
  indigo: "#4C6FBF",
  plum: "#8A4F94",
  rose: "#E4576F",
  // monitor band
  screen: "#0E1F1B",
  screenLine: "#16302A",
  glow: "#2FE0BE",
};

const font = {
  display: "'Fraunces', Georgia, serif",
  body: "'Mulish', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

/* live monitor readout: the stats that would sit on a vitals screen */
const vitals = [
  { k: "RN MEAN", v: "$101,420", tone: "up" },
  { k: "APRN GROWTH ’25–35", v: "+36%", tone: "up" },
  { k: "CRNA MEAN", v: "$248,320", tone: "up" },
  { k: "NCLEX-RN PASS", v: "~87%", tone: "up" },
  { k: "AI-SAFE RANK", v: "#2", tone: "up" },
  { k: "FULL-PRACTICE STATES", v: "~30 + DC", tone: "up" },
  { k: "PRIMARY-CARE NP SURPLUS ’38 · HRSA", v: "+72,910 FTE", tone: "warn" },
  { k: "CNM MEAN", v: "$136,980", tone: "up" },
  { k: "DNP GRADS / DECADE", v: "+500%", tone: "up" },
];

/* a periodic ECG beat, built as one wide SVG polyline and scrolled */
const ecgPath = (() => {
  const beats = 10;
  const bw = 150;
  const y = 40;
  let d = `M0,${y}`;
  for (let i = 0; i < beats; i++) {
    const x = i * bw;
    d += ` L${x + 34},${y}`;
    d += ` L${x + 44},${y - 9} L${x + 54},${y}`; // P
    d += ` L${x + 72},${y}`;
    d += ` L${x + 78},${y + 9}`; // Q
    d += ` L${x + 86},${y - 33}`; // R
    d += ` L${x + 94},${y + 19}`; // S
    d += ` L${x + 100},${y}`;
    d += ` L${x + 118},${y}`;
    d += ` L${x + 130},${y - 13} L${x + 142},${y}`; // T
    d += ` L${x + 150},${y}`;
  }
  return d;
})();

const data = {
  phases: [
    {
      id: "prelicensure",
      label: "Pre-Licensure & RN",
      years: "ENTRY · LICENSURE",
      color: C.teal,
      intro:
        "Nursing is the rare field where you finish your first degree already licensed and employable. Whether you take the two-year ADN or the four-year BSN, you sit the same NCLEX-RN and earn the same RN license, but the two paths diverge afterward: BLS now lists a bachelor's as typical entry education, and hospitals in particular may require one. This stage is about getting licensed, banking clinical hours, and deciding early whether you are aiming past the bedside.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            {
              name: "Anatomy, Physiology & Pathophysiology",
              detail:
                "The science spine of nursing. Pathophysiology, how disease alters normal function, underpins every later clinical judgment and is one of the courses nurses most often name as hardest (NurseJournal).",
            },
            {
              name: "Pharmacology",
              detail:
                "Drug classes, mechanisms, dosing, and interactions. Nurses interviewed by NurseJournal rank it among the hardest courses for the volume of knowledge it demands. No attrition data was found, so treat the weeder label as reputation, not statistic.",
            },
            {
              name: "Medical-Surgical Nursing",
              detail:
                "A core clinical sequence, named by working nurses as the first course where students must combine what they learned in earlier pieces and apply it to disease processes (NurseJournal).",
            },
            {
              name: "Health Assessment",
              detail:
                "Taking a full history and physical, reading vitals, and recognizing when something is subtly wrong. Graduates of both ADN and BSN programs are expected to leave with core clinical, communication, and critical-thinking skills (Denver College of Nursing).",
            },
            {
              name: "Specialty Clinical Rotations",
              detail:
                "Supervised clinicals across pediatrics, maternal-newborn, psychiatric, community/public health, and gerontology. Shared by ADN and BSN, though BSN rotations tend to run broader.",
            },
            {
              name: "BSN-only: Research, Leadership & Public Health",
              detail:
                "What actually separates BSN from ADN: evidence-based practice, nursing research, population health, and management, the prerequisite layer for graduate school.",
            },
          ],
        },
        {
          title: "The Licensure Gate",
          icon: "✓",
          items: [
            {
              name: "NCLEX-RN",
              detail:
                "The single exam standing between your degree and practice. In 2025, 87% of BSN and 86% of ADN candidates passed; in 2020 the gap was wider (about 90% versus 82%). One source argues program quality matters more than degree type.",
            },
            {
              name: "ADN vs. BSN: same license, different doors",
              detail:
                "Both credentials produce an RN with identical scope. The difference is access: in a 643-school study, 25% of employers required a bachelor's and 69.8% strongly preferred one. Starting pay is similar (about 3 to 5% apart), but one industry estimate puts the gap at $10K to $15K a year after 5 to 10 years; other sources disagree on the size.",
            },
            {
              name: "RN-to-BSN bridge",
              detail:
                "Many nurses start with the faster ADN, get hired, then finish a BSN online in as little as 15 months (1 to 2 years part-time), sometimes with employer tuition help.",
            },
            {
              name: "Accelerated & direct-entry routes",
              detail:
                "Second-degree students can compress a BSN into as little as about 21 months; non-nurses with a bachelor's can enter direct-entry MSN programs that fold in RN licensure. The field is unusually welcoming to career-changers.",
            },
          ],
        },
        {
          title: "Skills You'll Develop",
          icon: "🩺",
          items: [
            {
              name: "Clinical judgment under uncertainty",
              detail:
                "Synthesizing incomplete information at the bedside and deciding what matters now. Critical thinking is one of the core entry-level skills expected of every ADN and BSN graduate (Denver College of Nursing).",
            },
            {
              name: "Dosage calculation & medication safety",
              detail:
                "Getting the math right every single time, because the error tolerance is zero. Reinforced from pharmacology through every clinical rotation.",
            },
            {
              name: "Hands-on procedural skills",
              detail:
                "IVs, catheters, wound care, injections, sterile technique. The physical craft that keeps the job firmly, durably human.",
            },
            {
              name: "Communication & patient advocacy",
              detail:
                "De-escalating, educating, and speaking up for patients across teams. Communication is one of the core entry-level skills expected of every ADN and BSN graduate (Denver College of Nursing).",
            },
            {
              name: "Charting & EHR fluency",
              detail:
                "Documenting in Epic or Oracle Health. Increasingly the friction point AI targets: ambient tools now draft the note for a nurse to review and approve.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🤝",
          items: [
            {
              name: "Student nurses' associations",
              detail:
                "National Student Nurses' Association chapters offer state and national conventions, leadership roles, and networking. A Purdue profile credits them with building leadership and communication skills and helping graduates stand out (2018 school account).",
            },
            {
              name: "Summer externships",
              detail:
                "Structured summer programs where students work on one hospital unit with a nurse preceptor. At one New York school, applications open in late fall or early spring of junior year and strong performers can receive return offers (NYU student account, 2026). Treat this as one school's experience, not a national norm.",
            },
            {
              name: "Career fairs & manager meet-ups",
              detail:
                "Schools run spring nursing career fairs, Meet the Manager events, and alumni specialty nights that feed first-job searches (NYU).",
            },
            {
              name: "Clinical placements as a pipeline",
              detail:
                "A suggested tactic: ask the unit manager for contact information during a clinical placement, then follow up after graduation (NYU).",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🖥️",
          items: [
            {
              name: "EHR systems (Epic, Oracle Health)",
              detail:
                "The digital backbone of every shift. Early adopters of ambient AI documentation report saving 45 minutes to 2 hours per shift on charting, per American Nurse Journal as relayed by allnurses.com (second-hand).",
            },
            {
              name: "Monitoring & smart devices",
              detail:
                "Continuous telemetry, smart pumps, and remote patient monitoring let nurses oversee more patients. One summary reports UCHealth's virtual sepsis program monitors about 2,000 patients a day and detects sepsis 2 to 4 hours earlier (Memrizz, a secondary source).",
            },
            {
              name: "AI acuity & staffing tools",
              detail:
                "AI-generated acuity scores increasingly drive staffing. MedCity News reported (via allnurses.com) that about two in three nurses at employers using them say the scores do not match their own assessment, and 2025 strikes, including a 100,000-member National Nurses United march, cited AI protections (HealthLeaders).",
            },
            {
              name: "The honest AI read",
              detail:
                "Forbes ranked nursing #2 on its 2025 AI-safe jobs list (via University of Cincinnati). One modeled estimate puts RN task exposure at 26% and automation at 12% in 2025, rising to 38% and 18% by 2028 (aichanging.work). These are modeled estimates, not measured displacement.",
            },
            {
              name: "The contested desk-role case",
              detail:
                "In July 2026, 12 utilization-review nurses at Montefiore in the Bronx were laid off. The nurses and their union say the AI platform Datavant replaced them; the hospital denies it and calls Datavant a nonclinical paperwork tool. The cause is unproven (Prism Reports).",
            },
          ],
        },
      ],
    },
    {
      id: "graduate",
      label: "Graduate & Advanced Practice",
      years: "MSN · YRS ~5–7",
      color: C.indigo,
      intro:
        "Graduate school is where nursing specializes and where the pay jumps. The clinical branch produces Advanced Practice Registered Nurses (APRNs), including nurse practitioners, clinical nurse specialists, and nurse-midwives, who assess, diagnose, and in most states prescribe. A parallel non-clinical branch trains leaders, educators, and informaticists. Unlike a funded PhD, these professional programs carry real tuition, and many students keep working as RNs while they study.",
      sections: [
        {
          title: "Program Types",
          icon: "🎓",
          items: [
            {
              name: "MSN: Nurse Practitioner tracks",
              detail:
                "The dominant graduate path. You pick a population focus at admission: Family (FNP), Psychiatric-Mental Health (PMHNP), Adult-Gerontology (primary or acute), Pediatric, Women's Health, or Neonatal. That choice largely fixes your career.",
            },
            {
              name: "Clinical Nurse Specialist (CNS)",
              detail:
                "An APRN role centered on improving care within a specialty and system: expert practice, staff education, and quality improvement rather than a primary caseload. Smaller and less visible than the NP path.",
            },
            {
              name: "Non-clinical MSNs",
              detail:
                "Leadership/administration, nursing education, and informatics tracks for nurses who want to run units, teach, or bridge clinical work and health IT. No prescriptive authority, but real career ladders.",
            },
            {
              name: "Post-master's certificates",
              detail:
                "Already an APRN and want a second population focus (say, an FNP adding PMHNP)? A 20–26-credit certificate adds it in about a year, without a second full degree.",
            },
          ],
        },
        {
          title: "The APRN Credential",
          icon: "⚕️",
          items: [
            {
              name: "Certification exams (ANCC / AANP)",
              detail:
                "After the degree you sit a national board exam in your specialty (e.g., FNP-C or FNP-BC, PMHNP-BC). Passing it, plus state APRN licensure, is what actually lets you practice.",
            },
            {
              name: "Core APRN coursework: the \"3 P's\"",
              detail:
                "Every APRN track requires advanced pathophysiology, advanced pharmacology, and advanced health assessment. These graduate courses are the real step up from RN-level work.",
            },
            {
              name: "Clinical hours: 500 to 750+",
              detail:
                "ANCC requires at least 500 faculty-supervised hours for PMHNP certification. WGU's PMHNP program requires 650, and Kansas required 750 for students starting on or after March 1, 2025. How much of the preceptor search falls on the student varies by program and was not quantified here.",
            },
            {
              name: "RN experience first",
              detail:
                "University of Cincinnati's FNP program requires at least one year of US RN experience. CRNA programs require at least a year of critical care nursing, and admitted classes average about 2.5 years of ICU experience (BLS, Nurse.org).",
            },
            {
              name: "Practice authority",
              detail:
                "Full practice authority lets NPs practice without a required physician agreement. About 30 states plus DC now allow it, up from 22 in 2020 (CMF Group); another tracker counts 29 plus DC. In other states, transition-to-practice requirements range from about 1,000 to 9,000 hours.",
            },
          ],
        },
        {
          title: "Funding & the Self-Pay Reality",
          icon: "💳",
          items: [
            {
              name: "The professional-degree trap",
              detail:
                "MSN and DNP tracks are treated like professional school: you pay tuition (about $35K to $65K for an NP master's per Walsh University; midwifery about $75K to $150K and CRNA programs $50K to $200K+ per Nurse.org). There are no TA/RA lines here; that's the PhD world.",
            },
            {
              name: "Working through school",
              detail:
                "Many NP programs are built part-time and online so nurses can keep working (npschools.com), and some employers offer tuition assistance for bridge programs. Whether employer help extends to graduate NP tracks was not verified.",
            },
            {
              name: "Return on investment",
              detail:
                "At the BLS median, an NP earns about $34,750 a year more than an RN, a nurse-midwife about $36,500 more, and a CRNA about $139,000 more (May 2025). HRSA projects a national primary-care NP surplus, which could lengthen payback for primary-care tracks; that link is an inference.",
            },
          ],
        },
        {
          title: "Tools & Methods",
          icon: "🧰",
          items: [
            {
              name: "Diagnostic reasoning & prescribing",
              detail:
                "The core of full NP practice as AANP defines it: evaluate patients, diagnose, order and interpret diagnostic tests, and initiate and manage treatment, including prescribing (NursePractitionerOnline).",
            },
            {
              name: "Evidence-based practice",
              detail:
                "Reading the literature and translating it into protocols. The intellectual habit graduate nursing is built to instill.",
            },
            {
              name: "Clinical decision support & AI",
              detail:
                "Documentation and decision-support AI are entering practice, but peer-reviewed evidence on workforce effects remains limited (ScienceDirect commentary, 2024). No practitioner-level source on diagnostic-AI value versus hype was found.",
            },
          ],
        },
      ],
    },
    {
      id: "doctoral",
      label: "Doctoral: DNP & PhD",
      years: "DOCTORATE · YRS ~8+",
      color: C.plum,
      intro:
        "Nursing has two doctorates that sit at the same level but point in opposite directions. The DNP is a practice doctorate, the terminal degree for clinical leadership and advanced practice, and now the required entry credential for nurse anesthesia. The PhD is a research doctorate that trains nurse scientists. The DNP has exploded in popularity while the PhD stays small, and the faculty roles doctorates often lead to pay less than advanced practice roles.",
      sections: [
        {
          title: "DNP: Practice Doctorate",
          icon: "🏥",
          items: [
            {
              name: "What it's for",
              detail:
                "Advanced clinical practice, health-systems leadership, and translating research into better care. DNP students finish a practice-focused project, not a dissertation.",
            },
            {
              name: "The CRNA mandate",
              detail:
                "As of 2025, every new nurse anesthetist must enter through a doctoral (DNP/DNAP) program, the one APRN role where the doctorate is genuinely required, not optional.",
            },
            {
              name: "The \"DNP for all NPs\" caveat",
              detail:
                "BLS still lists a master's as typical entry education for NPs, and a master's remains the norm even though some programs and advocates favor the DNP (npschools.com). BLS lists a master's for nurse anesthetists too, which looks out of date against the doctoral mandate. Treat any claim that the DNP is already required for all NPs with skepticism.",
            },
            {
              name: "Explosive growth",
              detail:
                "From 2010 to 2019, DNP graduates grew more than 500% to 7,944 a year while PhD graduates grew 50% to 804 (National Academy of Medicine data via St. Thomas University). Physician-advocacy critics call some programs diploma mills; that is an advocacy position, not a measured finding.",
            },
          ],
        },
        {
          title: "PhD: Research Doctorate",
          icon: "🔬",
          items: [
            {
              name: "What it's for",
              detail:
                "Generating new nursing knowledge: designing studies, winning grants, publishing, and defending an original dissertation. The nurse-scientist and tenure-track faculty path.",
            },
            {
              name: "Structure & funding",
              detail:
                "Typically 4 to 6 years, no clinical hours, dissertation-based; BSN-to-PhD tracks can run about 4.5 years (UCF, Research.com). Funding varies by program: Duke funds tuition for up to five years with an assistantship of about 8 hours a week; Johns Hopkins funds most full-time students for three years in exchange for about 20 hours a week.",
            },
            {
              name: "The pay gap",
              detail:
                "Faculty roles pay less than advanced practice roles. Master's-prepared nursing professors average $82,762 against a $134,920 median for APRNs (AACN, 2026), and a 2022 survey found nursing faculty earned $18,346 less than staff nurses. These compare roles, not PhD against DNP holders in the same job.",
            },
            {
              name: "The faculty bottleneck",
              detail:
                "US nursing schools turned away 92,672 qualified applications in 2025, with faculty shortages the top reason, and 79.8% of faculty vacancies required or preferred a doctorate (AACN; the doctorate share is from a 2023 survey).",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🧭",
          items: [
            {
              name: "AI & clinical decision support",
              detail:
                "A 2024 commentary notes that peer-reviewed literature on AI replacing nurses is limited. Whether acuity tools and ambient documentation actually help is already being contested in strikes and surveys (HealthLeaders, MedCity News).",
            },
            {
              name: "NINR's five research lenses",
              detail:
                "NINR's 2022 to 2026 strategic plan organizes its priorities around Health Equity, Social Determinants of Health, Population and Community Health, Prevention and Health Promotion, and Systems and Models of Care. The plan period ends in 2026; its successor was not checked.",
            },
            {
              name: "Health equity & access",
              detail:
                "Studying rural and underserved care and the outcomes of NP-led and midwife-led models. HRSA projects a national primary-care NP surplus (72,910 FTEs in 2038) alongside a primary-care physician shortage, yet 63.1% of primary-care shortage areas are rural, so getting supply to where need sits is an open question.",
            },
            {
              name: "Implementation science",
              detail:
                "The discipline of getting proven interventions actually adopted at the bedside, a frontier where the DNP and PhD worlds genuinely overlap.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Bedside / Staff RN",
      icon: "🏥",
      color: C.teal,
      roles: ["New-Grad RN", "Staff RN", "Charge Nurse", "ICU / ER / OR RN"],
      reality:
        "The foundation the whole field rests on, and the most accessible destination. BLS counts 3,465,400 RN jobs in 2025, projects 6% growth through 2035, and expects about 180,800 openings a year, with 59% of RNs working in hospitals. A bachelor's is the typical entry education and hospitals may require one: in a 643-school study, 25% of employers required a BSN and 69.8% strongly preferred one. It's physically and emotionally demanding shift work.",
      ai: "Modeled as low: Forbes ranked nursing #2 on its 2025 AI-safe list, and one model puts RN automation at 12% in 2025. Bedside care is hands-on and judgment-driven; the documentation and acuity scoring around it is where AI is arriving first.",
      salary: "$97,550 median · $101,420 mean (BLS, May 2025); hospital RNs $100,220 median",
    },
    {
      path: "Nurse Practitioner",
      icon: "⚕️",
      color: C.indigo,
      roles: ["FNP", "PMHNP", "AGACNP", "Independent Practice (FPA states)"],
      reality:
        "The marquee advanced-practice role: diagnosing, treating, and prescribing, with full independent authority in about 30 states plus DC (up from 22 in 2020). BLS counts 336,300 NPs in 2025 and projects 36% growth for the combined NP, CRNA, and midwife group through 2035. Read that alongside HRSA's 2025 projection of a national primary-care NP surplus (72,910 FTEs by 2038) next to a 70,610 FTE primary-care physician shortage. National surplus and local shortage coexist: 63.1% of primary-care shortage areas are rural, and only 31% to 45% of NPs practice in primary care even though about 90% train for it. No source found splits supply by specialty, so choose a track with that uncertainty in mind.",
      ai: "No NP-specific estimate was found. Diagnosis and prescribing require a licensed clinician; AI decision support is arriving, with limited peer-reviewed evidence so far.",
      salary: "$137,300 mean (BLS, May 2025); combined APRN median $134,920",
    },
    {
      path: "Nurse Anesthetist (CRNA)",
      icon: "💤",
      color: "#0E7C9B",
      roles: ["ICU RN (prereq)", "CRNA", "Lead CRNA", "Locums / Independent CRNA"],
      reality:
        "The highest-paid role in nursing, with a mean near $248K and top earners past $339K. The price of entry is steep: a doctorate (DNP or DNAP) has been required since 2025, programs run about three years, and BLS requires at least a year of critical care RN experience; admitted classes average about 2.5 years of ICU time. The total path from the start of a BSN is typically 7 to 10 years. BLS counts 54,500 nurse anesthetists in 2025, and the AANA projects a shortfall of about 12,500 anesthesia providers by 2033 (via The CRNA Club).",
      ai: "No estimate found. Low exposure is an inference from the real-time, hands-on nature of anesthesia care.",
      salary: "$248,320 mean (BLS, May 2025); 10th–90th pct $155K–$340K",
    },
    {
      path: "Certified Nurse-Midwife",
      icon: "🤱",
      color: C.rose,
      roles: ["CNM", "Hospital Midwife", "Birth-Center Midwife", "Women's Health APRN"],
      reality:
        "An APRN focused on pregnancy, birth, and women's health across the lifespan, paid comparably to NPs (median $134,040) despite a very different scope. It's a small field: BLS counts 8,200 nurse-midwives in 2025, and programs run about $75K to $150K (Nurse.org). A midwife-specific growth projection was not isolated; the 36% figure covers the combined NP, CRNA, and midwife group. The work carries the intensity of managing two lives at once: deeply rewarding, genuinely stressful.",
      ai: "No estimate found.",
      salary: "$134,040 median (BLS, May 2025) · mean $136,980 (OEWS)",
    },
    {
      path: "Leadership & Administration",
      icon: "🧭",
      color: "#3F5E7A",
      roles: ["Charge Nurse", "Nurse Manager", "Director of Nursing", "CNO / VP Nursing"],
      reality:
        "The management ladder: charge nurse to nurse manager to the C-suite Chief Nursing Officer, who runs nursing for an entire hospital or system. The route typically adds a second master's (nursing leadership or an MHA) or an executive-track DNP, plus certifications such as CENP and NEA-BC (NP Hub), and it trades patient care for budgets, staffing, and strategy. BLS's broader category, medical and health services managers, expects a bachelor's, under five years of related experience, and 24% growth through 2035. CNO pay sources conflict, so a range is shown.",
      ai: "Not estimated. AI staffing tools are in use, and leaders sit on the receiving end of staffing-AI disputes between hospitals and nurses (HealthLeaders).",
      salary: "Health services managers $123,860 median, $133,580 in hospitals (BLS, May 2025) · CNO about $226K to $307K (Salary.com); Payscale $116K to $250K",
    },
    {
      path: "Nursing Informatics",
      icon: "💻",
      color: "#6E56C8",
      roles: ["Informatics Nurse", "Clinical Analyst", "Informatics Specialist", "CNIO"],
      reality:
        "The bridge between clinical nursing and health IT: configuring EHRs, leading digital rollouts, and turning clinical data into better workflows. About 80% of informatics nurses work remotely (IMIA 2025, via Research.com). Pay starts modestly (about $85K to $99K) and the executive ceiling is higher, but sources disagree on how high. A natural landing spot for nurses who like systems and technology.",
      ai: "Research.com ties pay growth to AI, predictive analytics, and EMR expansion. That this work is growing because of AI is an inference.",
      salary: "Informatics nurse about $85K; field average about $99K (Payscale, 2025) · CNIO $155,833 (ZipRecruiter) to $223,950 (Salary.com)",
    },
    {
      path: "Nurse Educator & Scientist",
      icon: "🔬",
      color: C.plum,
      roles: ["Clinical Instructor", "Nurse Faculty", "Nurse Scientist", "Tenured Professor"],
      reality:
        "Teaching the next generation and generating nursing's evidence base: the academic path. A PhD is the research-university route; a DNP can teach at some smaller universities (Point Loma), and 79.8% of faculty vacancies required or preferred a doctorate (AACN, 2023 survey). The paradox: it often pays less than the bedside and advanced-practice roles it trains. Master's-prepared professors average $82,762 against a $134,920 APRN median, a 2022 survey found nursing faculty earned $18,346 less than staff nurses, and AACN says higher clinical pay is drawing educators away. Schools turned away 92,672 qualified applications in 2025, with faculty shortage the top reason. A calling more than a payday.",
      ai: "Not estimated.",
      salary: "$82,762 average, master's-prepared professors (AACN, 2026) · clinical faculty $87,090 (IntelyCare) · none is PhD-specific",
    },
    {
      path: "Travel Nursing",
      icon: "🧳",
      color: "#C79A3B",
      roles: ["Travel RN", "Crisis-Response RN", "Travel Specialty RN", "Travel NP"],
      reality:
        "Short contracts (commonly 13 weeks) paying a premium plus stipends in place of benefits, in exchange for constant relocation and little stability. The honest caveat: average weekly pay was $2,294 in December 2024 after falling 15.1% in 2022, 11.3% in 2023, and 3.8% in 2024, which left it below the inflation-adjusted January 2020 level (Vivian Health). A 2026 guide puts blended weekly pay at $2,170 to $2,400 (TLC Nursing). Best treated as a flexible, higher-cash chapter more than a permanent plan.",
      ai: "Not estimated separately. Travel RNs do bedside work, so the Bedside RN read is the nearest proxy (an inference).",
      salary: "$101,132 average (ZipRecruiter, Jan 2025) · $110K to $140K for 48 to 52 weeks (TLC Nursing) · travel CRNAs $259,707 average",
    },
  ],
};

export default function NursingRoadmap() {
  const [activePhase, setActivePhase] = useState("prelicensure");
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
    letterSpacing: "0.04em",
    padding: "10px 14px",
    borderRadius: 999,
    border: `1px solid ${C.line}`,
    background: C.card,
    color: C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=Mulish:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        @keyframes ecgScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ecgTrack { display: inline-flex; animation: ecgScroll 16s linear infinite; }
        @keyframes pulseDot { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
        .pulseDot { animation: pulseDot 1.1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ecgTrack { animation: none; }
          .pulseDot { animation: none; opacity: 1; }
        }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.teal}; outline-offset: 2px; }
      `}</style>

      {/* header */}
      <header style={{ padding: "34px 20px 18px", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 11,
            color: accent,
            letterSpacing: "0.2em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span className="pulseDot" style={{ width: 8, height: 8, borderRadius: 999, background: C.rose, display: "inline-block" }} />
          FIELD ROADMAP · VITALS: STABLE
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 900,
            fontSize: "clamp(38px, 8vw, 68px)",
            lineHeight: 1.0,
            margin: "10px 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Nursing
        </h1>
        <p style={{ color: C.dim, fontSize: 16, maxWidth: 660, margin: 0, lineHeight: 1.55 }}>
          Licensed on day one, then a fork that runs all the way to anesthesia and the C-suite: degrees, the licensure gates, and eight destinations, priced from BLS and named sources, with an AI note where the evidence exists.
        </p>
      </header>

      {/* signature: patient-monitor band with live ECG + vitals readout */}
      <div
        style={{
          background: C.screen,
          borderTop: `1px solid ${C.screenLine}`,
          borderBottom: `1px solid ${C.screenLine}`,
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "14px 20px 16px" }}>
          {/* ECG trace */}
          <div style={{ overflow: "hidden", height: 56, position: "relative" }} aria-hidden="true">
            <div className="ecgTrack" style={{ height: 56 }}>
              {[0, 1].map((rep) => (
                <svg
                  key={rep}
                  width="1500"
                  height="56"
                  viewBox="0 0 1500 80"
                  preserveAspectRatio="none"
                  style={{ display: "block", flexShrink: 0 }}
                >
                  <path
                    d={ecgPath}
                    fill="none"
                    stroke={C.glow}
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{ filter: `drop-shadow(0 0 6px ${C.glow}88)` }}
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* vitals readout */}
          <div className="hscroll" style={{ gap: 0, marginTop: 4 }}>
            {vitals.map((v, i) => (
              <div
                key={v.k}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: "6px 16px",
                  borderLeft: i === 0 ? "none" : `1px solid ${C.screenLine}`,
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: font.mono, fontSize: 9.5, letterSpacing: "0.08em", color: "#5F7A72" }}>
                  {v.k}
                </span>
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: v.tone === "warn" ? C.rose : C.glow,
                  }}
                >
                  {v.v}
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
                  fontWeight: 600,
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
                  letterSpacing: "0.14em",
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
                      borderRadius: 8,
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
                      borderRadius: 12,
                      padding: "15px 17px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? "none" : "0 1px 2px rgba(30,46,42,0.04)",
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                      <span style={{ fontFamily: font.display, fontWeight: 600, fontSize: 16.5 }}>
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
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                }}
              >
                DESTINATIONS · SALARY DATA: BLS MAY 2025 + NAMED SOURCES
              </div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.62, color: C.ink, maxWidth: 760 }}>
                Eight distinct destinations from one RN license, from the bedside that anchors the whole field to a $236K median in nurse anesthesia. Every card carries an honest read on competition and an AI note where the evidence exists.
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
                      borderRadius: 12,
                      padding: 17,
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? "none" : "0 1px 2px rgba(30,46,42,0.04)",
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
                          fontWeight: 900,
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
                            borderRadius: 999,
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
                            color: C.teal,
                            background: "#E6F4F0",
                            border: `1px solid #BFE4DB`,
                            borderRadius: 8,
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
            letterSpacing: "0.06em",
            lineHeight: 1.6,
          }}
        >
          TAP ANY ITEM OR CARD TO EXPAND · SOURCES: BLS MAY 2025, HRSA 2025, AACN 2026, VIVIAN HEALTH, SALARY.COM · FULL LIST IN research/nursing-research.md · COMPILED NOV 2026
        </footer>
      </main>
    </div>
  );
}
