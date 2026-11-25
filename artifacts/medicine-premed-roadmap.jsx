import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  MEDICINE / PRE-MED — CAREER ROADMAP                                */
/*                                                                     */
/*  Aesthetic: the white coat. Cool laundered-cotton ground, topstitch */
/*  seams as dividers, embroidery-thread accents. Signature element:   */
/*  a hospital ID badge that re-credentials itself as you move through */
/*  the phases — because medicine's real thesis is that the entire     */
/*  path is a ladder of credentials, each one printing a new title.    */
/* ------------------------------------------------------------------ */

const C = {
  coat: "#F2F5F4",      // laundered coat-white ground (cool, not cream)
  linen: "#E8EDEB",     // panel
  linenUp: "#DFE6E3",   // raised panel
  stitch: "#C6D0CD",    // topstitch thread
  stitchUp: "#A9B7B3",
  ink: "#14201E",       // chart ink — near-black with a green cast
  graphite: "#5A6B67",  // muted body
  faint: "#8B9A96",
  // embroidery / badge-stripe accents
  navy: "#1F3A5F",      // pre-med
  crimson: "#A8283C",   // medical school
  teal: "#146B5C",      // residency
  amber: "#A8701A",     // careers
  violet: "#5F4A93",
  slate: "#3D5A73",
  rust: "#A8532B",
  moss: "#4A6B33",
};

const font = {
  display: "'Familjen Grotesk', system-ui, sans-serif",
  body: "'Newsreader', Georgia, serif",
  mono: "'Spline Sans Mono', ui-monospace, monospace",
};

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Spline+Sans+Mono:wght@400;500;600&display=swap');
`;

const data = {
  phases: [
    {
      id: "premed",
      label: "Pre-Med",
      years: "Years 1–4",
      badge: "PRE-MEDICAL STUDENT",
      color: C.navy,
      intro:
        "\"Pre-med\" is not a major — it's a checklist you run alongside one. Major in anything, as long as you finish two years of chemistry, a year each of biology and physics, biochemistry, statistics, and the behavioral science the MCAT tests. The attrition is front-loaded and severe: a 102-school study of 15,442 students found only about 16.5% of those who arrive intending pre-med finish college with the prerequisites done. Of the ones who make it to applying, roughly 45% earn an MD acceptance somewhere (about 63% for DO). Grades and the MCAT open the door; clinical hours, service, and letters decide who walks through it.",
      sections: [
        {
          title: "Prerequisite Core",
          icon: "📘",
          items: [
            {
              name: "General Biology + lab (1 year)",
              detail:
                "One full year with lab, taken at the college level. Most schools won't let AP credit substitute — they want the seat time even if you placed out of the intro course.",
            },
            {
              name: "General Chemistry + lab (1 year)",
              detail:
                "Often the first real filter. Not the hardest course you'll take conceptually, but a common point where intended pre-meds reconsider the track.",
            },
            {
              name: "Organic Chemistry + lab (1 year)",
              detail:
                "Medicine's most famous gate. You will use a sliver of it clinically; it screens for pattern recognition and grinding capacity, which is arguably the actual point.",
            },
            {
              name: "Physics + lab (1 year)",
              detail:
                "Mechanics, fluids, optics, electricity. It is tested in the MCAT's Chemical and Physical Foundations section, and it's how ventilators, imaging, and hemodynamics actually work under the hood.",
            },
            {
              name: "Biochemistry (1 semester)",
              detail:
                "Now required or strongly recommended by the majority of programs — a decade ago it was a nice-to-have. It's also the highest-yield single course for the MCAT.",
            },
            {
              name: "Statistics (1 semester)",
              detail:
                "Reading a trial, interpreting a confidence interval, and using a likelihood ratio are day-one physician skills. Increasingly listed explicitly rather than as 'math.'",
            },
            {
              name: "Psychology & Sociology",
              detail:
                "Added to most lists because one of the MCAT's four sections tests behavioral science. It's the section people assume is easy and then lose points on.",
            },
            {
              name: "English / writing (1 year)",
              detail:
                "Still on most requirement lists. Notes, consent conversations, and the personal statement are all writing tasks — the requirement is less arbitrary than it looks.",
            },
          ],
        },
        {
          title: "The Weeder Gauntlet",
          icon: "🔥",
          items: [
            {
              name: "The GPA arithmetic",
              detail:
                "AMCAS computes two GPAs: cumulative and BCPM (bio/chem/physics/math). 2025 MD matriculants averaged 3.81 overall; applicants averaged 3.67. That 0.14 gap is a rough measure of how far the admitted group sits above the applicant pool.",
            },
            {
              name: "The 16.5% finding",
              detail:
                "A College Board dataset across 102 institutions found only 16.5% of intended pre-meds graduated with the prerequisites complete. The study followed 15,442 students across those schools.",
            },
            {
              name: "Organic Chemistry II",
              detail:
                "Mechanisms, synthesis, and spectroscopy at volume, usually while you're also studying for the MCAT. Reputation aside, it's mostly a time-management defeat, not an intelligence one.",
            },
            {
              name: "Physics with calculus",
              detail:
                "A recurring shock to students who chose medicine partly to leave math behind. Where programs allow the algebra-based version, the calculus one is often the better MCAT preparation anyway.",
            },
            {
              name: "The one-bad-semester problem",
              detail:
                "There's no dropping your low grade. AMCAS counts every attempt of every course in your GPAs, so a retake adds a second grade rather than erasing the first.",
            },
          ],
        },
        {
          title: "Building the File",
          icon: "🩺",
          items: [
            {
              name: "Clinical hours",
              detail:
                "Commercial advising sites commonly cite ~150 hours as a floor and 200–300+ as competitive, in roles with real patient contact — scribe, EMT, CNA, medical assistant — not passive observation.",
            },
            {
              name: "Shadowing",
              detail:
                "Advising sites commonly cite 50–100 hours across a few specialties. It is also the cheapest possible way to discover you hate the job before you owe six figures.",
            },
            {
              name: "Research",
              detail:
                "Not universally required, but expected at research-heavy schools and effectively mandatory for MD-PhD. A poster or an authorship outweighs raw hour counts.",
            },
            {
              name: "Sustained service",
              detail:
                "Long-running, often non-medical community service is read as evidence of motive. Committees are looking for a multi-year story, not a resume-shaped summer.",
            },
            {
              name: "Letters & the people who write them",
              detail:
                "You need three to five, usually including two science faculty and often a committee letter. Going to office hours from year one is the unglamorous mechanism that produces them.",
            },
          ],
        },
        {
          title: "MCAT & Application",
          icon: "🧾",
          items: [
            {
              name: "The MCAT",
              detail:
                "Seven and a half hours, four sections, scored 472–528. 2025 MD matriculants averaged 512.1 against an applicant average of 506.3; registration runs $355 for 2026 dates.",
            },
            {
              name: "AMCAS / AACOMAS / TMDSAS",
              detail:
                "Three separate application systems — MD, DO, and Texas. Applicants averaged about 19.5 schools in the 2025–26 cycle, and verification takes weeks and many schools review on a rolling basis, so advisors generally recommend submitting early in the cycle.",
            },
            {
              name: "The acceptance math",
              detail:
                "About 52,400 MD applicants for roughly 23,400 seats — near 45% get in somewhere; DO runs about 63%. Those are per-applicant rates. Per-school odds are far lower, which is why applicants apply broadly.",
            },
            {
              name: "Secondaries, CASPer & the MMI",
              detail:
                "Every school sends its own essays on its own clock. Many add a situational-judgment test (CASPer or AAMC PREview), then interview — often an MMI circuit of short timed scenario stations.",
            },
            {
              name: "The gap year is now the default",
              detail:
                "Only about a quarter of matriculants go straight through from college; the average matriculant is 24. A year as a scribe, research coordinator, or EMT is the normal path, not a detour.",
            },
            {
              name: "MD-PhD / MSTP",
              detail:
                "About 2,040 applicants versus 54,699 for MD — about 27 times fewer. Programs run 7–8 years and are typically fully funded, tuition plus stipend, in exchange for a research career.",
            },
          ],
        },
      ],
    },
    {
      id: "medschool",
      label: "Medical School",
      years: "Years 5–8",
      badge: "MEDICAL STUDENT · MS1–MS4",
      color: C.crimson,
      intro:
        "Four years, split roughly in half. MS1–MS2 is the preclinical firehose — anatomy, physiology, pathology, pharmacology — ending in Step 1, which has been pass/fail since 2022. MS3 is clerkships: you rotate through the core specialties and, in the process, pick the rest of your life. MS4 is sub-internships, away rotations, and the Match. The price is not abstract: the class of 2026 faces a median four-year cost of attendance near $298K at public schools and $408K at private ones, and about 70% of graduates leave with debt — median roughly $223K (sources put it between $215K and $223K). Federal borrowing for professional students is also capped from July 1, 2026 ($50,000 per year and $200,000 in total, per the AMA), below that cost of attendance, so private loans or other funding fill the gap.",
      sections: [
        {
          title: "Preclinical (MS1–MS2)",
          icon: "🧠",
          items: [
            {
              name: "Gross anatomy & dissection",
              detail:
                "Still, at most schools, a cadaver and a scalpel. It's the profession's initiation rite as much as its content — and the first time the volume of material outruns any study habit that worked before.",
            },
            {
              name: "Physiology & pathophysiology",
              detail:
                "The mechanistic backbone: how each organ system works and the specific ways it fails. Everything clinical you later do is a corollary of this course.",
            },
            {
              name: "Pathology",
              detail:
                "Disease at the tissue and cellular level, linking a slide to a syndrome. The bridge between the preclinical basement and the wards upstairs.",
            },
            {
              name: "Pharmacology",
              detail:
                "Mechanisms, kinetics, interactions, and toxicities across hundreds of drugs. Brutal memorization that turns into the most-used knowledge you own.",
            },
            {
              name: "Microbiology & immunology",
              detail:
                "Organisms, antibiotic coverage, and the immune system — the reasoning behind every empiric-therapy decision you'll make for the next forty years.",
            },
            {
              name: "Doctoring / clinical skills",
              detail:
                "History and physical, the exam maneuvers, communication, and ethics — practiced on standardized patients before you meet a real one.",
            },
            {
              name: "OMM (DO students only)",
              detail:
                "Osteopathic manipulative medicine adds hands-on structural training that MD students typically do not do, plus a parallel board series (COMLEX) on top of USMLE.",
            },
            {
              name: "The volume problem",
              detail:
                "The content isn't harder than undergrad science — there is simply several times more of it per week. Nearly everyone rebuilds their entire study method in the first semester.",
            },
          ],
        },
        {
          title: "Clerkships (MS3–MS4)",
          icon: "🏥",
          items: [
            {
              name: "Internal medicine",
              detail:
                "A large core rotation and the analytic heart of the wards — differential diagnosis, workup, management. It's also the biggest specialty by far: 11,632 residency positions offered in 2026.",
            },
            {
              name: "Surgery",
              detail:
                "Earliest mornings, longest days, steepest hierarchy. The rotation where the largest number of students discover either that they belong in an OR or that they very much don't.",
            },
            {
              name: "Pediatrics",
              detail:
                "Different physiology, different pharmacology, and a second patient in the room — the parent. 3,185 positions were offered in 2026, filling at 94.4%.",
            },
            {
              name: "OB/GYN",
              detail:
                "A rare hybrid of surgical and medical practice with continuity across a patient's life, and increasingly a specialty whose practice is shaped by state-level law.",
            },
            {
              name: "Psychiatry",
              detail:
                "The interview itself is the diagnostic instrument. Demand outstrips supply nationally, which is why it has climbed steadily in competitiveness over the last decade.",
            },
            {
              name: "Family medicine",
              detail:
                "Broadest scope in medicine, most continuity, and the widest access to residency: 5,491 positions offered in 2026.",
            },
            {
              name: "Neurology",
              detail:
                "The localization exam — reasoning from a deficit to a lesion — is one of the last great physical-diagnosis traditions still practiced at the bedside.",
            },
            {
              name: "Sub-Is & away rotations",
              detail:
                "MS4 audition months where you function at intern level at a program you want to match into. In competitive surgical fields they're close to mandatory.",
            },
            {
              name: "Shelf exams",
              detail:
                "An NBME subject exam ends each core rotation. They set your clerkship grades, your class rank, and the honors that residency programs read as a proxy for everything else.",
            },
          ],
        },
        {
          title: "Boards & the Match",
          icon: "🎯",
          items: [
            {
              name: "USMLE Step 1 — pass/fail",
              detail:
                "Scored reporting ended in January 2022. It removed the single number that used to define an application — and moved that pressure, essentially intact, one year later.",
            },
            {
              name: "USMLE Step 2 CK — the new Step 1",
              detail:
                "Now the main objective metric; over 80% of program directors said it would carry more weight after the Step 1 change. The catch is that it is usually taken after the core clerkships, with little protected study time.",
            },
            {
              name: "COMLEX (DO students)",
              detail:
                "Osteopathic students sit COMLEX Levels 1–3, and most also take USMLE anyway, because a meaningful share of programs still read USMLE more fluently.",
            },
            {
              name: "ERAS, signaling & the rank list",
              detail:
                "Applications go through ERAS, now with program signals to counter application inflation. Then you rank programs, they rank you, and an algorithm decides where you live for the next 3–7 years.",
            },
            {
              name: "The 2026 Match, in numbers",
              detail:
                "The largest ever: 44,344 positions offered, 93.5% filled, more than 38,000 matched. 2,862 positions went unfilled — 389 more than 2025 — and rolled into SOAP during Match Week.",
            },
            {
              name: "Fill rates tell you what's competitive",
              detail:
                "Dermatology, ophthalmology, radiation oncology, integrated plastics, and the surgical subspecialties fill at or near 100% with the highest Step 2 CK scores and research output — and none of them expanded in 2026.",
            },
            {
              name: "The IMG picture",
              detail:
                "In 2026 foreign-born IMGs needing visa sponsorship matched at 54.4% — a five-year low — while foreign-born IMGs not needing sponsorship hit a five-year high of 67.9%. The gap between the two groups shifted sharply year over year.",
            },
            {
              name: "SOAP",
              detail:
                "The Supplemental Offer and Acceptance Program: the Match Week scramble that places unmatched applicants into unfilled positions. NRMP reports 2,581 positions were offered through it in 2026, up 330 from 2025.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "💻",
          items: [
            {
              name: "Anki",
              detail:
                "Spaced-repetition flashcards, and for many students the core of their study routine. In one survey study, 87.8% believed Anki significantly contributed to their module success.",
            },
            {
              name: "UWorld & NBME practice",
              detail:
                "The question bank is the curriculum in practice. Students routinely treat UWorld as primary material and lecture as optional review — schools have largely stopped fighting it.",
            },
            {
              name: "Sketchy, Pathoma, Boards & Beyond",
              detail:
                "A parallel third-party curriculum that many students buy on top of tuition. That this shadow syllabus exists at all is a quiet indictment of the official one.",
            },
            {
              name: "UpToDate",
              detail:
                "The point-of-care reference physicians actually consult mid-shift. Learning to search it well is a real, teachable clinical skill.",
            },
            {
              name: "Epic and the EHR",
              detail:
                "You'll spend more career hours here than with any instrument. A 2016 time-motion study found roughly two hours of EHR and desk work per hour of direct patient care — the central grievance of modern practice.",
            },
            {
              name: "Point-of-care ultrasound (POCUS)",
              detail:
                "Handheld imaging at the bedside, now taught from year one at many schools. The closest thing this generation has to a new physical-exam sense.",
            },
            {
              name: "Ambient AI scribes",
              detail:
                "The fastest-adopted physician-facing technology in memory: 81% of US physicians reported professional AI use in the AMA's 2026 survey, up from 38% in 2023. A 2026 JAMA study across five academic centers found ~16 fewer documentation minutes per encounter.",
            },
            {
              name: "The honest caveat on scribes",
              detail:
                "A 2026 Mayo-led review found current systems still produce high omission rates and intermittent factual errors. The note is yours legally and clinically — the AI drafts, you remain the author.",
            },
            {
              name: "Imaging & diagnostic AI",
              detail:
                "Most mature in radiology and pathology; the FDA's list of cleared AI-enabled devices passed roughly 950 by 2024 (a cumulative, vendor-reported count). It reads first and flags — a licensed human still signs, which is exactly where the moat is.",
            },
          ],
        },
      ],
    },
    {
      id: "residency",
      label: "Residency & Fellowship",
      years: "Years 9–15+",
      badge: "RESIDENT PHYSICIAN · PGY-1",
      color: C.teal,
      intro:
        "Graduation makes you a doctor. Residency makes you a physician who can practice independently. Three years for family medicine, internal medicine, or pediatrics; five for general surgery or radiology; seven for neurosurgery — with optional fellowship stacked on top. You're paid a stipend, not a salary: PGY-1 averaged $68,166 across 114,361 residents in the 2025 AAMC survey, under an 80-hour weekly cap. AAMC argues this stage is the system's bottleneck: Medicare's cap on funded residency slots dates to 1997 while medical school enrollment has grown. Even so, 2,862 positions went unfilled on Match Day 2026.",
      sections: [
        {
          title: "Intern Year Onward",
          icon: "👣",
          items: [
            {
              name: "PGY-1 (intern year)",
              detail:
                "The hardest year of most physicians' lives. You practice on a training license, carry real patients, and are simultaneously the least experienced person on the team by a wide margin.",
            },
            {
              name: "The 80-hour rule",
              detail:
                "ACGME caps duty hours at 80 per week averaged over four weeks, with a 24+4 shift limit. It's a ceiling, not a target, and averaging is doing considerable work in that sentence.",
            },
            {
              name: "The stipend",
              detail:
                "AAMC's 2025 survey: $68,166 at PGY-1, $73,301 at PGY-3, $94,215 by PGY-8.",
            },
            {
              name: "Graduated autonomy",
              detail:
                "The whole design of residency: supervision loosens each year until you're running the service. It's apprenticeship, not schooling, and it's why the years can't simply be compressed.",
            },
            {
              name: "Chief resident",
              detail:
                "A final-year or extra-year leadership role — scheduling, teaching, and administration. The standard on-ramp to academic medicine and to program-director tracks.",
            },
            {
              name: "Unionization",
              detail:
                "Resident unions have expanded quickly and have produced measurable pay and benefit gains at several large institutions. It's one of the few levers residents actually control.",
            },
          ],
        },
        {
          title: "Length by Specialty",
          icon: "⏱",
          items: [
            {
              name: "3 years — IM, family medicine, pediatrics",
              detail:
                "The shortest routes to attending practice and the widest doors: internal medicine alone offered 11,632 positions in 2026, family medicine 5,491. Fastest to income, largest shortage projections.",
            },
            {
              name: "3–4 years — emergency medicine",
              detail:
                "Shift-based with no clinic tail, which is the appeal. It is also one of the few fields where AAMC models a possible surplus.",
            },
            {
              name: "4 years — anesthesiology, psychiatry, OB/GYN, neurology, pathology",
              detail:
                "The middle tier by length, spanning very different day-to-day work. PM&R is listed as 3 to 4 years depending on whether the preliminary year is counted.",
            },
            {
              name: "5 years — general surgery, radiology, urology, orthopedics",
              detail:
                "Long training, high pay, and heavy front-loaded competitiveness. Orthopedics averaged $611K in the 2026 Medscape report — the top specialty in the survey.",
            },
            {
              name: "7 years — neurosurgery",
              detail:
                "The longest standard residency in medicine. Doximity's 2026 data put average neurosurgeon pay near $829K, the highest of the specialties it reported.",
            },
            {
              name: "Then fellowship: usually +1 to +3 years",
              detail:
                "Cardiology, GI, heme/onc, critical care, and surgical subspecialties all sit behind a fellowship. Starting medical school at the average age of 24, the arithmetic gives about 28 at graduation and roughly 32 to 38 after residency and fellowship. That is arithmetic from the stage lengths, not a surveyed figure.",
            },
          ],
        },
        {
          title: "Licensure & Boards",
          icon: "🪪",
          items: [
            {
              name: "State medical license",
              detail:
                "Licensure is per-state, not national, and each state has its own fees, timelines, and requirements. The Interstate Medical Licensure Compact eases but doesn't erase it.",
            },
            {
              name: "USMLE Step 3",
              detail:
                "Usually taken during intern year — the last USMLE, and the one required for full unrestricted licensure, though states differ on when they want it passed.",
            },
            {
              name: "Board certification",
              detail:
                "After residency you sit your ABMS (or AOA) specialty boards. Not legally required to practice — but effectively required by hospitals, insurers, and every employer worth working for.",
            },
            {
              name: "Maintenance of Certification",
              detail:
                "Certification is a subscription, not a purchase: continuing education, periodic assessment, and fees for your whole career. Widely disliked and unlikely to disappear.",
            },
            {
              name: "DEA registration & credentialing",
              detail:
                "Prescribing controlled substances needs a DEA number; working at any hospital needs credentialing and privileges. Both are per-site, per-renewal paperwork nobody warns you about.",
            },
            {
              name: "The GME cap, AAMC's central argument",
              detail:
                "The Balanced Budget Act of 1997 froze Medicare-funded residency slots. Congress added 1,200 across 2021 and 2023 — the first increases in about 25 years. AAMC is advocating legislation to add 14,000 over seven years.",
            },
            {
              name: "Why that cap matters to you",
              detail:
                "AAMC projects a shortage of 13,500 to 86,000 physicians by 2036 (an advocacy organization's projection), including 20,200–40,400 in primary care. AAMC attributes much of it to limited funded training positions, though 2,862 positions still went unfilled on Match Day 2026 and AAMC models possible surpluses in some specialties, including emergency medicine.",
            },
          ],
        },
        {
          title: "Fellowship & Research",
          icon: "🔬",
          items: [
            {
              name: "The fellowship match (NRMP SMS)",
              detail:
                "Its largest in 42 years for the 2026 appointment year: 15,846 applicants for 15,358 positions across 6,606 programs and 81 subspecialties. A second Match, run on a completely separate calendar.",
            },
            {
              name: "The undersubscribed subspecialties",
              detail:
                "Eight filled under 50% for 2026 — geriatrics, medical genetics, adolescent medicine, child abuse, pediatric endocrinology, pediatric nephrology, pediatric rehab, and emergency radiology. Need and demand are not the same variable.",
            },
            {
              name: "Clinical informatics fellowship",
              detail:
                "An ABMS subspecialty open to any primary specialty. As of 2025 board eligibility requires an ACGME-accredited fellowship — the practice pathway that let self-taught physicians sit the exam has closed.",
            },
            {
              name: "Research years & K awards",
              detail:
                "Dedicated research time during or after residency, then NIH career-development (K) awards to bridge to independent funding. This is the actual ladder into a research career.",
            },
            {
              name: "The physician-scientist math",
              detail:
                "About 91% of the physician-scientist workforce holds no PhD. Of MD-PhD graduates studied nationally (2000 to 2005 cohort), roughly 52% held full-time faculty appointments — and average MD-PhD training has stretched from ~6.7 to just over 8 years.",
            },
            {
              name: "Dual degrees: MD/MPH, MD/MBA",
              detail:
                "Commonly add about a year, depending on the school. They're credentials for the non-clinical exits — public health leadership, hospital administration, industry — not for the wards.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Clinical Practice",
      icon: "🏥",
      color: C.navy,
      roles: ["Attending Physician", "Hospitalist", "Medical Director", "Section Chief", "Partner"],
      reality:
        "The destination almost everyone pictures, and still where the large majority land. Once you're board-certified, employment is close to guaranteed — the constraint was never getting hired, it was getting through the door years earlier. The trade is real: median debt of roughly $215K to $223K among graduates who borrow, and a burnout rate that has declined each year since its pandemic peak but still sits roughly ten points above pre-pandemic levels. Physician-finance writers also argue that pay varies more within a specialty than between specialties (an observation, not a result of this research) — where and how you practice can matter more than what you practice.",
      ai: "Documentation is being automated fast; judgment, procedures, and legal accountability aren't. The license is the moat, and it's a strong one.",
      salary:
        "Average physician $386K (Medscape 2026) · primary care $298K · specialists $417K · orthopedics $611K · eight specialties now above $500K",
    },
    {
      path: "Surgical & Procedural",
      icon: "🔪",
      color: C.crimson,
      roles: ["Categorical Resident", "Fellow", "Attending Surgeon", "Division Chief"],
      reality:
        "The highest ceiling and the steepest entry. Dermatology, integrated plastics, orthopedics, ENT, and neurosurgery are among the most competitive fields in the Match, with mean Step 2 CK scores for matched US MD seniors above 250 in dermatology, plastics, orthopedics, and ENT. Training runs 5–7 years plus fellowship, so by the arithmetic of the stage lengths you may be well into your 30s before an attending's paycheck. Procedural income is durable precisely because it's physical.",
      ai: "The lowest exposure in medicine. Nothing on the horizon operates. Preoperative planning and imaging get smarter; the hands stay yours.",
      salary:
        "Orthopedics ~$611K (Medscape 2026) · neurosurgery ~$829K (Doximity 2026) · Doximity counts 16 specialties above $500K, Medscape eight (different methods)",
    },
    {
      path: "Primary Care & Underserved",
      icon: "🩺",
      color: C.teal,
      roles: ["Family Physician", "General Internist", "Pediatrician", "Community Health CMO"],
      reality:
        "The widest door and the greatest need. Family medicine offered 5,491 positions in 2026 and internal medicine 11,632 — you can reach practice in three years, faster than any other route. AAMC projects a shortage of 20,200–40,400 primary care physicians by 2036. The honest cost: it pays toward the low end of the clinical specialties, and rural or safety-net practice can come with real isolation. Loan repayment programs (NHSC, state equivalents) meaningfully change the math for service commitments.",
      ai: "Highest documentation burden means the biggest gains from ambient scribes — 70% of UCSF physicians already use them. Relief, not replacement.",
      salary: "Family medicine ~$288K · primary care average $298K (Medscape 2026)",
    },
    {
      path: "Academic Medicine & Research",
      icon: "🔬",
      color: C.violet,
      roles: ["Instructor", "Assistant Professor", "Physician-Scientist", "Division Chief", "Dean"],
      reality:
        "The path for people who want to make the knowledge, not just apply it. MD-PhD/MSTP training is fully funded — tuition plus stipend — but runs 7–8 years before residency. In one national cohort (2000 to 2005 graduates), roughly 52% held full-time faculty appointments, though some commercial sources say closer to 75%. The most underappreciated fact here: about 91% of the working physician-scientist workforce holds no PhD at all — research years and K awards during or after residency are a legitimate alternate route.",
      ai: "Computation is reshaping what's askable — imaging, genomics, trial design. The bottleneck is grant funding, and that's a political variable, not a technical one.",
      salary:
        "No verified average in this research · academic pay is generally described as below clinical pay for equivalent seniority (qualitative, unsourced)",
    },
    {
      path: "Pharma, Biotech & Medical Affairs",
      icon: "💊",
      color: C.slate,
      roles: ["Medical Science Liaison", "Medical Advisor", "Medical Director", "VP Medical Affairs", "CMO"],
      reality:
        "The largest and best-paid non-clinical exit, and the one pre-meds know least about. Medical science liaison roles are field-based and are commonly filled by PharmD and PhD holders as well as physicians, so they are not a physician-only track; medical director is the more typical physician entry point. Advancement can be faster than in clinical medicine (one non-clinical careers guide cites 18 to 24 months between promotions), and senior roles can pay more than most specialties. The catch: you leave patient care, you're subject to layoffs and pipeline risk in a way clinicians aren't, and going back gets harder each year you're out.",
      ai: "AI is deep in drug discovery and evidence synthesis, but the value here is regulatory judgment and physician-to-physician credibility. Low direct exposure.",
      salary:
        "MSL average ~$210K (Glassdoor; GSK median postings ~$248K) · pharma medical director average ~$232K (ZipRecruiter); one careers guide cites $250K to $300K for entry-level physician medical directors · commercial and self-reported figures, low confidence",
    },
    {
      path: "Clinical Informatics & Health Tech",
      icon: "🖥️",
      color: C.amber,
      roles: ["Physician Informaticist", "Medical Director of Informatics", "Associate CMIO", "CMIO"],
      reality:
        "Board-certified since 2011 and open to physicians from any primary specialty — informatics layers onto your home field rather than replacing it. It's the most direct route to hospital executive roles (CMIO, CHIO) and the most credible physician profile at health-tech and AI companies. The gate just tightened: as of 2025, board eligibility requires a two-year ACGME-accredited fellowship, which is a genuine opportunity cost against attending income. Many physicians do the work informally as an EHR 'physician champion' without ever certifying.",
      ai: "This is the specialty that decides how AI enters a health system. The most direct exposure in medicine — as the person doing the deploying, not the one being displaced.",
      salary:
        "Physician informaticist average ~$217K, top earners $300K+ (single secondary source; CMIO and fellowship pay not verified)",
    },
    {
      path: "Public Health, Policy & Government",
      icon: "🏛️",
      color: C.moss,
      roles: ["EIS Officer", "Medical Officer", "Epidemiologist", "Health Commissioner", "FDA/NIH Leadership"],
      reality:
        "Population-scale rather than patient-scale — outbreak investigation at CDC's Epidemic Intelligence Service, drug and device review at FDA, program leadership at NIH, or a state or county health department. Usually paired with an MPH and often a preventive-medicine residency. You trade a large amount of income for genuine reach, and the work is exposed to political and budget cycles in ways clinical practice isn't. Federal roles also carry pay ceilings that private practice does not.",
      ai: "Surveillance, forecasting, and signal detection are being transformed. The scarce skill is a physician who can interpret a model and defend it in front of a legislature.",
      salary:
        "No verified range in this research · pay varies by agency and grade and is generally described as below clinical peers (qualitative, unsourced)",
    },
    {
      path: "Consulting & Health Ventures",
      icon: "📈",
      color: C.rust,
      roles: ["MBB Associate", "Engagement Manager", "VP Strategy", "Startup CMO", "Partner"],
      reality:
        "MBB firms (McKinsey, Bain, BCG) hire physicians into healthcare practices, and clinical credibility carries weight with hospital and pharma clients. Reported starting pay sits well below the average specialist's and closer to a primary care physician's, and it rises with promotion. The MD-plus-consulting combination is a portable profile in healthcare, though this research did not document the exit routes. The founder route is real but genuinely high-variance; most digital-health startups don't work, and clinical skills atrophy while you find out.",
      ai: "Consulting output is exactly what generative models draft well. The durable part is the client relationship and the clinical judgment behind the recommendation.",
      salary:
        "McKinsey associate median total pay ~$243K to $259K (Glassdoor, self-reported; snippets differ) · other firms and digital-health CMO roles not verified",
    },
  ],
};

/* --- signature: the hospital ID badge, re-credentialed per phase --- */
const BARS = [3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 2, 1, 1, 3, 1, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 2];

function Badge({ color, title, years, code }) {
  return (
    <div
      style={{
        width: 236,
        flexShrink: 0,
        background: "#FBFCFC",
        border: `1px solid ${C.stitch}`,
        borderRadius: 10,
        boxShadow: `0 12px 28px -18px ${C.ink}66`,
        padding: "12px 13px 11px",
        position: "relative",
      }}
    >
      {/* lanyard slot */}
      <div
        aria-hidden="true"
        style={{
          width: 54,
          height: 6,
          borderRadius: 3,
          background: C.linenUp,
          border: `1px solid ${C.stitch}`,
          margin: "0 auto 11px",
        }}
      />
      {/* stripe */}
      <div style={{ height: 5, borderRadius: 3, background: color, marginBottom: 11, transition: "background .25s" }} />

      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <div
          aria-hidden="true"
          style={{
            width: 42,
            height: 50,
            borderRadius: 5,
            background: C.linen,
            border: `1px solid ${C.stitch}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: font.display,
            fontWeight: 700,
            fontSize: 19,
            color: color,
            flexShrink: 0,
            transition: "color .25s",
          }}
        >
          Rx
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontFamily: font.mono, fontSize: 8.5, letterSpacing: "0.16em", color: C.faint, marginBottom: 3 }}>
            NAME
          </div>
          <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 16, color: C.ink, lineHeight: 1.1, marginBottom: 7 }}>
            You
          </div>
          <div style={{ fontFamily: font.mono, fontSize: 8.5, letterSpacing: "0.16em", color: C.faint, marginBottom: 3 }}>
            STATUS
          </div>
          <div
            style={{
              fontFamily: font.mono,
              fontWeight: 500,
              fontSize: 9.5,
              lineHeight: 1.3,
              color: color,
              transition: "color .25s",
            }}
          >
            {title}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginTop: 12 }}>
        <div aria-hidden="true" style={{ display: "flex", alignItems: "flex-end", gap: 1, height: 22, flex: 1 }}>
          {BARS.map((w, i) => (
            <div
              key={i}
              style={{
                width: w,
                height: "100%",
                background: i % 2 === 0 ? C.ink : "transparent",
              }}
            />
          ))}
        </div>
        <div style={{ fontFamily: font.mono, fontSize: 8.5, color: C.faint, letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
          {code}
        </div>
      </div>
      <div style={{ fontFamily: font.mono, fontSize: 8.5, color: C.faint, letterSpacing: "0.1em", marginTop: 5 }}>
        {years}
      </div>
    </div>
  );
}

/* --- topstitch seam: two offset dash rows, as on a real coat -------- */
function Seam({ color, style }) {
  const dash = `repeating-linear-gradient(to right, ${color} 0 7px, transparent 7px 14px)`;
  return (
    <div aria-hidden="true" style={style}>
      <div style={{ height: 1.5, backgroundImage: dash }} />
      <div style={{ height: 1.5, marginTop: 4, backgroundImage: dash, backgroundPosition: "4px 0" }} />
    </div>
  );
}

export default function MedicineRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("premed");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.amber : phase.color;
  const badgeTitle = showCareers ? "ATTENDING PHYSICIAN" : phase.badge;
  const badgeYears = showCareers ? "YEAR 12+" : phase.years.toUpperCase();
  const badgeCode = showCareers ? "NPI-000-8" : `ID-2026-${data.phases.findIndex((p) => p.id === activePhase) + 1}`;

  const selectPhase = (id) => {
    setShowCareers(false);
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
  };

  const tabBase = {
    fontFamily: font.mono,
    fontSize: 12,
    padding: "10px 13px",
    borderRadius: 7,
    border: `1px solid ${C.stitch}`,
    background: C.linen,
    color: C.graphite,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  return (
    <div style={{ fontFamily: font.body, background: C.coat, color: C.ink, minHeight: "100vh" }}>
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .hscroll::-webkit-scrollbar { display: none; }
        .cardgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
        .heroRow { display: flex; gap: 26px; align-items: flex-start; flex-wrap: wrap; }
        .heroCopy { flex: 1 1 300px; min-width: 0; }
        button:focus-visible { outline: 2px solid ${C.ink}; outline-offset: 2px; }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "28px 18px 60px" }}>
        {/* header */}
        <header style={{ marginBottom: 22 }}>
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 10.5,
              letterSpacing: "0.2em",
              color: C.faint,
              marginBottom: 12,
            }}
          >
            FIELD-OF-STUDY ROADMAP · US PATHWAY · 2026
          </div>
          <div className="heroRow">
            <div className="heroCopy">
              <h1
                style={{
                  fontFamily: font.display,
                  fontWeight: 700,
                  fontSize: "clamp(38px, 9vw, 66px)",
                  lineHeight: 0.94,
                  margin: "0 0 12px",
                  letterSpacing: "-0.03em",
                }}
              >
                Medicine
              </h1>
              <p style={{ margin: "0 0 16px", color: C.graphite, fontSize: 17, maxWidth: 460, lineHeight: 1.5 }}>
                Eleven to fifteen years before fellowship, and every one of them gated by a credential. Here's the honest map from
                first-year chemistry to attending — and the eight places it can actually end.
              </p>
              <Seam color={C.stitchUp} style={{ maxWidth: 300 }} />
            </div>
            <Badge color={accent} title={badgeTitle} years={badgeYears} code={badgeCode} />
          </div>
        </header>

        {summary}

        {/* nav */}
        <nav className="hscroll" style={{ marginBottom: 22 }}>
          {data.phases.map((p) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => selectPhase(p.id)}
                style={{
                  ...tabBase,
                  fontFamily: font.display,
                  fontWeight: 600,
                  fontSize: 13.5,
                  border: `1px solid ${on ? p.color : C.stitch}`,
                  color: on ? "#FBFCFC" : C.ink,
                  background: on ? p.color : C.linen,
                }}
              >
                {p.label}
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 9.5,
                    marginLeft: 8,
                    color: on ? "#FBFCFC" : C.faint,
                    opacity: on ? 0.8 : 1,
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
              fontWeight: 600,
              fontSize: 13.5,
              border: `1px solid ${showCareers ? C.amber : C.stitch}`,
              color: showCareers ? "#FBFCFC" : C.ink,
              background: showCareers ? C.amber : C.linen,
            }}
          >
            Career Paths
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 9.5,
                marginLeft: 8,
                color: showCareers ? "#FBFCFC" : C.faint,
                opacity: showCareers ? 0.8 : 1,
              }}
            >
              8 PATHS
            </span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* phase intro — stitched seam running down the margin */}
            <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
              <div
                aria-hidden="true"
                style={{
                  width: 2,
                  flexShrink: 0,
                  backgroundImage: `repeating-linear-gradient(to bottom, ${phase.color} 0 7px, transparent 7px 14px)`,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: font.mono,
                    fontSize: 10.5,
                    color: phase.color,
                    letterSpacing: "0.14em",
                    marginBottom: 7,
                  }}
                >
                  {phase.years.toUpperCase()} · {phase.label.toUpperCase()}
                </div>
                <p style={{ margin: 0, color: C.ink, fontSize: 16.5, lineHeight: 1.62, maxWidth: 760 }}>{phase.intro}</p>
              </div>
            </div>

            <Seam color={C.stitch} style={{ margin: "0 0 18px" }} />

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
                      fontSize: 11.5,
                      padding: "8px 12px",
                      border: `1px solid ${on ? phase.color : C.stitch}`,
                      color: on ? phase.color : C.graphite,
                      background: on ? "#FBFCFC" : "transparent",
                    }}
                  >
                    {s.icon} {s.title}
                  </button>
                );
              })}
            </div>

            {/* expandable items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <button
                    key={item.name}
                    onClick={() => setExpandedItem(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: open ? "#FBFCFC" : C.linen,
                      border: `1px solid ${open ? phase.color : C.stitch}`,
                      borderRadius: 9,
                      padding: "14px 15px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? `0 8px 22px -16px ${C.ink}` : "none",
                      transition: "all .14s",
                      fontFamily: font.body,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: font.mono,
                          fontSize: 10.5,
                          color: open ? phase.color : C.faint,
                          width: 22,
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
                      <span
                        style={{
                          color: C.faint,
                          fontSize: 17,
                          lineHeight: 1,
                          transform: open ? "rotate(45deg)" : "none",
                          transition: "transform .18s",
                        }}
                      >
                        +
                      </span>
                    </div>
                    {open && (
                      <p style={{ margin: "10px 0 0 34px", color: C.graphite, fontSize: 15, lineHeight: 1.62 }}>
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
            <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
              <div
                aria-hidden="true"
                style={{
                  width: 2,
                  flexShrink: 0,
                  backgroundImage: `repeating-linear-gradient(to bottom, ${C.amber} 0 7px, transparent 7px 14px)`,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: font.mono,
                    fontSize: 10.5,
                    color: C.amber,
                    letterSpacing: "0.14em",
                    marginBottom: 7,
                  }}
                >
                  WHERE THE DEGREE LANDS · 8 PATHS
                </div>
                <p style={{ margin: 0, color: C.ink, fontSize: 16.5, lineHeight: 1.62, maxWidth: 760 }}>
                  An MD or DO is one of the most portable credentials in the economy, and most pre-meds only ever hear
                  about the first of these. Each card carries the honest picture of what it demands, where the gates
                  are, and what it pays.
                </p>
              </div>
            </div>

            <Seam color={C.stitch} style={{ margin: "0 0 18px" }} />

            <div className="cardgrid">
              {data.careers.map((c, i) => {
                const open = expandedCareer === i;
                return (
                  <button
                    key={c.path}
                    onClick={() => setExpandedCareer(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: open ? "#FBFCFC" : C.linen,
                      border: `1px solid ${open ? c.color : C.stitch}`,
                      borderRadius: 10,
                      padding: "15px 15px 14px",
                      cursor: "pointer",
                      color: C.ink,
                      boxShadow: open ? `0 12px 30px -20px ${C.ink}` : "none",
                      transition: "all .14s",
                      gridColumn: open ? "1 / -1" : "auto",
                      fontFamily: font.body,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                      <span style={{ fontSize: 20, lineHeight: 1 }}>{c.icon}</span>
                      <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 17, color: c.color }}>
                        {c.path}
                      </span>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontFamily: font.mono,
                            fontSize: 10,
                            color: C.graphite,
                            border: `1px solid ${C.stitch}`,
                            borderRadius: 4,
                            padding: "3px 7px",
                            background: C.coat,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>

                    {open && (
                      <div style={{ marginTop: 14 }}>
                        <p style={{ margin: "0 0 12px", color: C.ink, fontSize: 15, lineHeight: 1.62 }}>{c.reality}</p>
                        <div
                          style={{
                            display: "flex",
                            gap: 8,
                            marginBottom: 11,
                            padding: "10px 12px",
                            background: C.coat,
                            border: `1px solid ${C.stitch}`,
                            borderRadius: 7,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: font.mono,
                              fontSize: 9.5,
                              color: c.color,
                              letterSpacing: "0.1em",
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          >
                            AI ▸
                          </span>
                          <span style={{ color: C.graphite, fontSize: 14, lineHeight: 1.55 }}>{c.ai}</span>
                        </div>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 12,
                            color: c.color,
                            background: `${c.color}12`,
                            border: `1px solid ${c.color}44`,
                            borderRadius: 7,
                            padding: "10px 12px",
                            lineHeight: 1.55,
                          }}
                        >
                          {c.salary}
                        </div>
                      </div>
                    )}

                    {!open && (
                      <div style={{ marginTop: 11, fontFamily: font.mono, fontSize: 10.5, color: C.faint }}>
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
        <Seam color={C.stitch} style={{ marginTop: 34 }} />
        <footer
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: font.mono,
            fontSize: 11,
            color: C.faint,
            flexWrap: "wrap",
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: accent }}>▸</span>
          Tap any item to expand it. Figures from AAMC, NRMP, Medscape and Doximity, mostly via secondary summaries (see medicine-premed-research.md for sources and caveats).
          This covers the US pathway only, and ranges vary widely by region, specialty, and setting.
        </footer>
      </div>
    </div>
  );
}
