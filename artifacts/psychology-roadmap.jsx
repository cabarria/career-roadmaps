import { useState } from "react";

const C = {
  cream: "#F5F0E8",
  ink: "#1A1A2E",
  inkLight: "#3D3D5C",
  warm: "#C9A96E",
  warmLight: "#E8D5B0",
  warmFaint: "#FAF6EE",
  rose: "#C4756A",
  roseFaint: "#F9EDEB",
  sage: "#6B8F71",
  sageFaint: "#EBF2EC",
  slate: "#5C7A8C",
  slateFaint: "#ECF2F5",
  violet: "#7B6FA0",
  violetFaint: "#F0EEF7",
  danger: "#B84040",
  dangerFaint: "#FAEAEA",
  dangerMid: "#E07070",
  gold: "#B8922A",
};

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
`;

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      color: C.warm,
      faint: C.warmFaint,
      intro:
        "A bachelor's in psychology is a rigorous scientific foundation — not a soft social science. You'll build deep fluency in statistics, research design, and the biological underpinnings of behavior. Most graduates pursue further training; the degree alone qualifies you for entry-level research, case management, or HR roles, but clinical practice requires a doctorate.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📖",
          items: [
            { name: "Introduction to Psychology", detail: "The prerequisite gateway to the major, surveying sensation, perception, cognition, emotion, development, personality, and social behavior. Most programs require a B or better to declare." },
            { name: "Statistics & Quantitative Methods", detail: "The make-or-break course. Covers descriptive stats, probability, t-tests, ANOVA, correlation, and regression. GPA in this course is a primary signal for graduate admissions committees." },
            { name: "Research Methods / Experimental Psychology", detail: "How to design, run, and report empirical studies. Covers experimental vs. quasi-experimental vs. correlational designs, IRB ethics, and APA-format scientific writing." },
            { name: "Biopsychology / Behavioral Neuroscience", detail: "Neural structure and function, neurotransmitters, psychopharmacology, and the biological bases of motivation, emotion, and mental illness. One of the conceptually densest courses in the major." },
            { name: "Cognitive Psychology", detail: "Memory models, attention, language, problem-solving, and decision-making — often taught with a lab component involving reaction-time experiments. Notoriously demanding for its volume of theory." },
            { name: "Abnormal Psychology / Psychopathology", detail: "DSM nosology, etiology, and evidence-based treatments for major clinical disorders. High reading load; students who struggle here often reconsider clinical tracks." },
            { name: "Developmental Psychology", detail: "Lifespan development from prenatal through aging, covering Piaget, Vygotsky, Bronfenbrenner, and attachment theory. Frequently a distributional requirement." },
            { name: "Social Psychology", detail: "Social influence, attitude formation, group dynamics, prejudice, and pro-social behavior. Bridges the gap between the individual and cultural/systemic factors." },
          ],
        },
        {
          title: "Skills You'll Develop",
          icon: "🔬",
          items: [
            { name: "Experimental Design", detail: "Formulating testable hypotheses, identifying control variables, and distinguishing true experiments from observational designs — the core intellectual skill of the discipline." },
            { name: "Data Collection & Cleaning", detail: "Running participants through lab protocols, administering surveys via Qualtrics, coding behavioral observations, and preparing messy datasets for analysis." },
            { name: "Statistical Analysis", detail: "Moving from Excel to SPSS or R for inferential statistics; increasingly, undergrads at research-active programs are introduced to R and reproducible workflows." },
            { name: "APA Scientific Writing", detail: "Structuring empirical lab reports and literature reviews in APA 7th edition format — a professional skill valued in research, policy, and clinical documentation." },
            { name: "Clinical Observation", detail: "Supervised volunteer placements at crisis lines, community mental health centers, or hospitals provide exposure to clinical populations before graduate school — not independent practice." },
            { name: "Psychometric Literacy", detail: "Understanding reliability, validity, factor analysis, and what a test score actually means — essential for both research and clinical interpretation." },
          ],
        },
        {
          title: "Tools & Software",
          icon: "💻",
          items: [
            { name: "SPSS", detail: "Still the default statistical software in most undergraduate programs; covers everything from basic descriptives to multivariate analysis. Knowing SPSS is floor-level for graduate admission." },
            { name: "R & RStudio", detail: "Increasingly standard in research-oriented programs and expected by top PhD programs; enables reproducible analysis, data visualization (ggplot2), and advanced modeling. Start learning this early." },
            { name: "Qualtrics", detail: "The dominant survey platform for behavioral research; used for online studies, ESM (ecological momentary assessment), and clinical screening instruments." },
            { name: "Excel / Google Sheets", detail: "Foundational for data organization, pivot tables, and quick descriptive summaries — even in an R-dominant workflow, Excel literacy matters." },
            { name: "PsychoPy / E-Prime", detail: "Stimulus-presentation software for lab-based experiments (reaction time, priming, attention tasks); exposure in an undergraduate lab is a strong differentiator for PhD applications." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🌱",
          items: [
            { name: "Faculty-Mentored Research Lab", detail: "The single highest-leverage activity for PhD-bound students. Working in a professor's lab, presenting a poster at a conference, or co-authoring a publication matters more than clinical volunteer hours to most clinical PhD admissions committees." },
            { name: "Psi Chi Honor Society", detail: "The APA/APS-affiliated honor society (890+ chapters) offering $400,000+/year in grants and awards, a peer-reviewed journal, and a one-time lifetime fee (~$70). Membership signals academic seriousness to graduate programs." },
            { name: "APA / APAGS Student Membership", detail: "Access to the American Psychological Association's resources, divisions, and the student-focused APAGS newsletter and travel grants for national conferences." },
            { name: "SIOP Student Affiliate", detail: "For students interested in I-O psychology, SIOP's student membership provides access to the premier I-O conference, salary surveys, and a network of practitioners and academics." },
            { name: "Crisis Line / Community Volunteer Work", detail: "Structured placements at crisis lines, teen drop-in centers, or community mental health centers build applied skills and demonstrate clinical motivation — especially valuable for PsyD and master's applications." },
            { name: "Honors Thesis", detail: "An original empirical project supervised by a faculty mentor; in a competitive PhD application, an honors thesis is often the difference between an interview and a rejection." },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      color: C.rose,
      faint: C.roseFaint,
      intro:
        "The master's stage forks sharply by destination. For clinical practice at the therapist level, a counseling or social work master's is the standard, fastest route to licensure. For I-O and school psychology, a master's or specialist degree is the terminal credential. For research psychology, the master's is often embedded in a funded PhD or skipped entirely — know your goal before enrolling.",
      sections: [
        {
          title: "Program Types",
          icon: "🗂️",
          items: [
            { name: "Clinical Mental Health Counseling MA/MS (CACREP)", detail: "The standard two-year licensure-track program leading to LPC/LMHC. CACREP accreditation is increasingly required for the NCE exam and many employer settings. Practicum-heavy; usually self-funded." },
            { name: "MSW (Master of Social Work)", detail: "The largest mental health field by practitioner count; leads to LCSW. More systems- and social-justice-oriented than psychology-based programs; 2-year programs with 900+ field hours. A flexible and resilient degree." },
            { name: "I-O Psychology MA/MS", detail: "A strongly terminal, highly employable 2-year applied degree for talent management, selection, org development, and people analytics. Quantitative skills are the differentiator; a funded master's is uncommon but some programs offer assistantships." },
            { name: "School Psychology EdS / Specialist Degree", detail: "The standard entry credential for school psychology (60+ credits, 1,200 internship hours) per NASP; ~74% of school psychologists hold a specialist degree. Fully funded by public-school salaries during intern year." },
            { name: "Research / Experimental Psychology MA/MS (Thesis)", detail: "A research bridge to PhD for students whose undergraduate records were not strong enough for direct doctoral admission; funded positions exist but are less common than PhD funding." },
            { name: "Marriage & Family Therapy MA (MFT)", detail: "Systems-oriented clinical training leading to the LMFT license; particularly useful for those drawn to couples, family, and relational work. Usually 2–3 years, self-funded, with heavy practicum requirements." },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "🧠",
          items: [
            { name: "Psychometric Assessment Administration", detail: "Formal training in administering, scoring, and interpreting standardized instruments (Wechsler scales, personality inventories, projective tests) under supervision — this is where licensing standards first apply." },
            { name: "Structured Diagnostic Interviewing", detail: "Training on instruments like the SCID, MINI, and CIDI for reliable DSM-5 diagnosis; increasingly important for both clinical and research contexts." },
            { name: "Evidence-Based Therapeutic Modalities", detail: "Hands-on supervised practice in CBT, DBT, ACT, exposure therapies, IPT, and motivational interviewing — the empirically supported treatment foundation for licensure-track programs." },
            { name: "Treatment Planning & Case Conceptualization", detail: "Integrating assessment data, diagnostic impressions, client history, and evidence-based protocols into a coherent, individualized treatment plan — the clinical judgment skill that AI cannot reliably replicate." },
            { name: "Advanced Statistics & Multilevel Modeling", detail: "For research-track master's students: hierarchical linear modeling (HLM), structural equation modeling (SEM), and meta-analysis — the methods required for dissertation-level and publication-quality research." },
            { name: "Multicultural Competence", detail: "APA Multicultural Guidelines-based training in cultural humility, systemic privilege/oppression, and adapting assessment and intervention to diverse populations — increasingly a licensure examination topic." },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            { name: "Funded PhD (Tuition + Stipend)", detail: "The norm at non-profit research universities: tuition remission plus a stipend (~$18,000–$32,000/year) in exchange for research and/or teaching assistantship. If a clinical PhD program is not offering funding, that is a signal about program quality." },
            { name: "Self-Funded Counseling / MFT / MSW", detail: "Most clinical master's programs expect students to pay tuition; federal Direct Unsubsidized Loans and, where available, grad PLUS loans are the primary vehicles. Scrutinize cost-to-average-outcome ratios." },
            { name: "Partially Funded PsyD Programs", detail: "Most PsyD programs do not offer full funding; assistantships covering partial tuition or stipends exist in perhaps 20–30% of slots. Debt of $150,000–$300,000 is common; examine internship-match rates and licensure pass rates before enrolling." },
            { name: "School Psychology Internship Pay", detail: "Specialist-year interns in school psychology are often paid by the district (~$30,000–$45,000/year); this combined with tuition support from some state programs makes school psychology one of the best-funded training paths below the doctoral level." },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD / Research",
      years: "Years 8+",
      color: C.violet,
      faint: C.violetFaint,
      intro:
        "Doctoral training in psychology is a 5–7+ year funded apprenticeship that ends in the APPIC internship match and licensure. The PhD/PsyD split is research vs. practice emphasis — both qualify for licensure, but only the PhD is the realistic path to academic careers. Admission to clinical PhD programs is among the most competitive in all of graduate education.",
      sections: [
        {
          title: "PhD vs. PsyD",
          icon: "🎓",
          items: [
            { name: "PhD (Scientist-Practitioner / Clinical Science Model)", detail: "Research-intensive doctoral degree; dissertation is an original empirical contribution. More competitive admission (often 5–10% acceptance rates), full funding is normative, smaller cohorts. The path to academic positions and research leadership." },
            { name: "PsyD (Practitioner-Scholar / Vail Model)", detail: "Practice-focused doctoral degree; applied doctoral project rather than traditional dissertation; more and earlier clinical hours; larger cohorts; higher acceptance rates; less funding — most students take on substantial debt ($150k–$300k+ is common)." },
            { name: "APPIC Internship Match", detail: "All APA-accredited doctoral students must complete a full-time predoctoral internship (~2,000 hours) to graduate; placement is via the APPIC Match — a genuine bottleneck where applicants from underfunded PsyD programs have historically faced the highest non-match rates. Geographic flexibility dramatically improves match odds." },
            { name: "Licensure Path Post-Degree", detail: "After the degree: EPPP (Examination for Professional Practice in Psychology) Part I (and Part II in ~half of states) + supervised postdoctoral hours (1–2 years) + state jurisprudence exam → Licensed Psychologist. Some specialties (neuropsychology, forensic) also pursue ABPP board certification." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔭",
          items: [
            { name: "Computational Psychiatry", detail: "Uses reinforcement-learning and Bayesian models of cognition alongside neuroimaging (fMRI, EEG) and behavioral data to identify mechanistic biomarkers of mental illness — a hybrid of neuroscience, cognitive science, and data science." },
            { name: "Network Analysis of Psychopathology", detail: "Models disorders as networks of interacting symptoms using vector-autoregressive (VAR) and idiographic time-series methods; associated with Borsboom, Epskamp, and colleagues. Challenges the latent-disease model of the DSM and opens new treatment-targeting possibilities." },
            { name: "Digital Phenotyping", detail: "Passive sensing via smartphone (GPS, accelerometry, sleep patterns, typing speed) and wearables to predict symptom severity and relapse risk in real time. Research platforms are deployed for depression, bipolar disorder, and schizophrenia." },
            { name: "Precision / Personalized Mental Health", detail: "N-of-1 and predictive-model approaches to match individuals to treatments based on their biological, psychological, and social profiles — the personalized-medicine vision applied to psychiatry." },
            { name: "Psychedelic-Assisted Therapy Research", detail: "A high-profile but currently stalled frontier: the FDA rejected Lykos Therapeutics' MDMA-for-PTSD application in August 2024, requiring an additional Phase 3 trial. Psilocybin research (Compass Pathways' COMP360) continues. Do not plan a career around this until FDA approval occurs." },
            { name: "LLMs and NLP in Clinical Research", detail: "Large-language models are being used to analyze therapy transcripts, extract phenotypic data from clinical notes, generate synthetic training data, and build psychoeducation tools — creating a new methodological requirement for computational literacy in research labs." },
          ],
        },
        {
          title: "AI & The Profession",
          icon: "⚠️",
          items: [
            { name: "What AI Is Actually Automating Now", detail: "Routine test scoring, intake screening forms, scheduling, billing, and clinical documentation (progress notes). AI ambient scribes like Nabla and Mentalyc are the fastest-spreading real-world tools, though a 2024–25 RCT found only ~16 minutes saved per 8-hour day." },
            { name: "Manualized Chatbot-CBT: Hype vs. Evidence", detail: "Woebot shut down its consumer app June 30, 2025 after failing to navigate FDA clearance for its core CBT chatbot — having raised $124M. Systematic reviews find chatbot interventions produce small-to-moderate effect sizes (≈0.2–0.6) vs. ≈0.8–1.0 for in-person CBT." },
            { name: "Therabot's NEJM AI Trial (2025)", detail: "A Dartmouth-led RCT published in NEJM AI (March 2025, N=210) reported a 51% reduction in depression symptoms vs. waitlist at 8 weeks — but Therabot was an expert-fine-tuned research model with clinical oversight, not a consumer product. Promising, but not yet scalable or regulated." },
            { name: "Roles Most Vulnerable to Displacement", detail: "Low-acuity self-help chatbot delivery of manualized CBT, routine psychological test scoring, administrative intake triage, and repetitive psychoeducation — tasks where your value-add is protocol adherence rather than clinical judgment." },
            { name: "Roles Most Resilient to Automation", detail: "Complex trauma therapy, neuropsychological assessment (rated 0% automation probability), crisis intervention, clinical supervision, research leadership, and any work requiring genuine therapeutic alliance or adaptive cultural humility." },
            { name: "The Skill That Future-Proofs You", detail: "Computational literacy (R/Python, ML, psychometrics) positions you to build and validate AI tools rather than be replaced by them. Combined with deep assessment expertise or specialized clinical skills, this is the highest-value combination in the field right now." },
          ],
        },
        {
          title: "Training Structure",
          icon: "🗺️",
          items: [
            { name: "Qualifying / Comprehensive Exams", detail: "Typically in Years 2–3; may be written, oral, or portfolio-based. Passing comps advances you to doctoral candidacy — the 'ABD' (All But Dissertation) stage — and signals readiness to lead independent research." },
            { name: "Dissertation / Doctoral Project", detail: "The PhD dissertation is an original, multi-study empirical contribution to the field requiring committee approval, IRB, data collection, analysis, and public defense. PsyD programs typically require an applied doctoral project (program evaluation, clinical manual, case series)." },
            { name: "Practicum Rotations", detail: "APA-accredited programs require a minimum of 500–600 hours of supervised practicum (many students accumulate 1,500+ hours before internship), placed in VA hospitals, CMHCs, university counseling centers, and medical centers." },
            { name: "Postdoctoral Fellowship", detail: "A 1–2 year supervised residency after the doctorate; required for licensure (supervised hours) and often necessary for specialties like neuropsychology, which requires a 2-year postdoc per Houston Conference standards. Competitive fellowships at medical centers and VA sites pay ~$55,000–$85,000." },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Clinical / Counseling Psychology",
      icon: "🛋️",
      color: C.rose,
      roles: ["Postdoctoral Fellow", "Staff Psychologist", "Licensed Clinical Psychologist", "Practice Owner / Clinical Director"],
      reality:
        "Doctoral admission is extremely competitive (often 5–10% acceptance rates), but demand for licensed psychologists is strong — BLS projects ~11% growth through 2034. Private practice with a full caseload grosses $150,000–$200,000 and nets $100,000–$160,000; building that caseload takes 1–3 years. Hospital and CMHC positions offer stability with lower earning ceilings. Telehealth has expanded geographic options meaningfully.",
      salary: "$96,100 median (BLS 2024); private practice $100K–$160K net; top 10% over $144K",
      aiRisk: "Moderate",
      aiNote: "Manualized, low-acuity CBT via chatbots is the primary displacement risk. Complex relational and trauma work is highly resilient.",
    },
    {
      path: "Academic Research & Teaching",
      icon: "🏛️",
      color: C.slate,
      roles: ["Postdoctoral Researcher", "Assistant Professor", "Associate Professor (Tenured)", "Full Professor / Department Chair"],
      reality:
        "The most oversupplied destination in psychology. As of 2017, roughly 8 PhD graduates compete per assistant professor vacancy — up from 2–3 in 1970. About 1 in 3 applicants land a tenure-track job on their first attempt; ~50% by the third attempt. Publications, external funding (NIH/NSF), and mentor prestige are decisive. The market has shifted heavily toward contingent and adjunct positions at teaching-focused institutions.",
      salary: "$80,330 BLS median for postsecondary psych instructors; R1 assistant professors ~$80K–$90K starting; full professors well into $100K–$130K+; adjuncts ~$3K–$6K/course",
      aiRisk: "Low",
      aiNote: "Research leadership, mentorship, and grant-driven science are deeply human. However, AI tools will absorb literature review, preliminary data analysis, and grant-drafting tasks.",
    },
    {
      path: "Industrial-Organizational Psychology",
      icon: "📊",
      color: C.sage,
      roles: ["People Analytics Analyst", "Talent Management Consultant", "Director of Org Development", "Head of People Analytics", "Principal Independent Consultant"],
      reality:
        "The highest-paid psychology specialty. Demand is solid and the master's degree is a fully employable terminal credential. The best-compensated positions concentrate in management consulting, large tech, and financial services. Quantitative and data-science skills are the key differentiator. SIOP's salary survey (2021 data) shows doctoral independent consultants with a median near $350,000 and master's-level tech-industry practitioners around $122,000.",
      salary: "BLS ~$109,840 median (2024); SIOP data shows doctoral consultants ~$350K; master's level tech roles ~$122K",
      aiRisk: "Moderate",
      aiNote: "AI tools are rapidly entering selection/assessment (automated scoring, video interview analysis), but the design, validation, and governance of those tools requires I-O expertise. Position yourself as a builder, not a user.",
    },
    {
      path: "School Psychology",
      icon: "🏫",
      color: C.warm,
      roles: ["School Psychologist (EdS)", "Supervising School Psychologist", "District Coordinator / Director", "NCSP-Credentialed Specialist"],
      reality:
        "A candidate's market with genuine shortage conditions. The national ratio is 1,071 students per school psychologist (2024–25) versus NASP's recommended 500:1, producing signing bonuses, loan-forgiveness, and relocation incentives in many states. The EdS specialist degree is the standard entry credential; the optional NCSP credential adds $2,000–$5,000 stipends. Work-life balance is generally strong with 10-month contracts.",
      salary: "BLS ~$87,550 median (2024); California state median ~$118K; top 10% over ~$131K",
      aiRisk: "Moderate",
      aiNote: "Rated 26% automation probability — higher than clinical psychologists, primarily because psychoeducational testing has automatable components. Complex problem-solving, IEP consultation, and crisis intervention remain human-essential.",
    },
    {
      path: "Neuropsychology & Health Psychology",
      icon: "🧬",
      color: C.violet,
      roles: ["Postdoctoral Neuropsychology Fellow", "Clinical Neuropsychologist", "Health Psychologist", "Director of Neuropsychology / Expert Witness"],
      reality:
        "A long pipeline (10+ years post-bachelor's, including a mandatory 2-year postdoctoral fellowship per Houston Conference standards), but among the most intellectually rewarding and AI-resilient specialties. Demand is driven by aging demographics, TBI populations, and neurodegenerative disease. ABPP-CN board certification is increasingly expected and adds 10–25% earning premium. Private practice and forensic/expert-witness work offer the highest earnings.",
      salary: "BLS 'Psychologists, all other' median ~$117,580; specialty estimates $120K–$130K; private practice $150K–$250K+",
      aiRisk: "Very Low",
      aiNote: "Clinical neuropsychologists are rated 0% automation probability. Interpreting complex test batteries, integrating developmental history, and providing expert court testimony require irreplaceable human judgment.",
    },
    {
      path: "Forensic Psychology",
      icon: "⚖️",
      color: C.inkLight,
      roles: ["Forensic Evaluator", "Correctional Psychologist", "Expert Witness", "Forensic Consultant / Agency Director"],
      reality:
        "A niche but compelling specialty at the intersection of psychology and law. Federal roles (FBI, Bureau of Prisons, Secret Service) are prestigious and competitive; state forensic hospitals are more accessible. Expert-witness work is lucrative but reputation-dependent and requires demonstrated competence (ABPP-Forensic requires ~100 forensic cases). Geographic flexibility is important for federal roles.",
      salary: "BLS median ~$117,580; base estimates ~$101K–$115K; expert testimony adds $50K–$150K at $150–$450/hour",
      aiRisk: "Low",
      aiNote: "Forensic evaluations require clinical judgment, legal reasoning, and credibility before courts — all deeply resistant to automation. AI may assist documentation, but testimony cannot be delegated.",
    },
    {
      path: "UX Research & Behavioral Science in Tech",
      icon: "🖥️",
      color: C.slate,
      roles: ["Associate UX Researcher", "UX Researcher", "Senior / Lead UX Researcher", "Behavioral Scientist", "Head of Research / Research Manager"],
      reality:
        "Attractive pay and intellectually stimulating work, but a volatile market: ~21% of UX researchers reported layoffs in 2025 as AI tools now assist ~80% of researchers, compressing demand for junior and mid-level positions. A PhD (in psychology, cognitive science, or HCI) raises pay 10–25% and is increasingly expected for senior quantitative roles. Concentration in major tech hubs (SF, Seattle, NYC) with significant cost-of-living implications.",
      salary: "Roughly $93K–$196K by level; juniors ~$100K–$140K; seniors ~$140K–$180K+; top firms (Meta, Google) average $200K–$212K total comp",
      aiRisk: "High",
      aiNote: "AI-assisted usability testing, automated survey analysis, and synthetic participant simulation are actively compressing junior UX roles. Specializing in complex mixed-methods, longitudinal behavioral research, or AI ethics evaluation is the resilience play.",
    },
    {
      path: "Government, Policy & Public Health",
      icon: "🏛️",
      color: C.sage,
      roles: ["Staff Psychologist (VA/DoD)", "Research Psychologist", "Program Analyst", "Chief of Mental Health", "Policy Advisor (GS-13/14/15)"],
      reality:
        "The VA is the single largest employer of psychologists in the United States, offering loan-repayment programs (NHSC, PSLF), strong benefits, and a defined career ladder. Federal positions are stable but moves are slow; a security clearance opens additional DoD/intelligence positions. Public health and policy roles offer mission-driven work with real population-level impact. Geographic flexibility to DC, major federal centers, or rural VA facilities is required for advancement.",
      salary: "VA clinical psychologists average ~$127K (Glassdoor); GS-13–15 range ~$96K–$172K base + locality pay (33%+ in DC); senior levels can reach $200K+",
      aiRisk: "Low",
      aiNote: "Federal psychologist roles involving clinical care, program evaluation, and policy analysis are protected by regulatory and accountability requirements that constrain AI substitution. AI tools are being adopted for documentation and triage support, not role elimination.",
    },
  ],
};

const AI_RISK_COLORS = {
  "Very Low": { bg: "#E8F5E9", text: "#2E7D32", label: "Very Low AI Risk" },
  Low: { bg: "#F1F8E9", text: "#558B2F", label: "Low AI Risk" },
  Moderate: { bg: "#FFF8E1", text: "#F57F17", label: "Moderate AI Risk" },
  High: { bg: "#FBE9E7", text: "#BF360C", label: "High AI Risk" },
};

export default function PsychologyRoadmap({ summary } = {}) {
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

  const handleItemClick = (i) => {
    setExpandedItem(expandedItem === i ? null : i);
  };

  return (
    <>
      <style>{FONTS}</style>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.cream}; }
        .roadmap { font-family: 'DM Sans', sans-serif; background: ${C.cream}; min-height: 100vh; color: ${C.ink}; }
        .header { background: ${C.ink}; padding: 2.5rem 1.5rem 2rem; text-align: center; position: relative; overflow: hidden; }
        .header::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(196,117,106,0.18) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(123,111,160,0.15) 0%, transparent 50%); }
        .header-eyebrow { font-family: 'DM Sans', sans-serif; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: ${C.warm}; margin-bottom: 0.6rem; position: relative; }
        .header-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem, 6vw, 3.6rem); font-weight: 300; color: ${C.cream}; line-height: 1.1; position: relative; }
        .header-title em { font-style: italic; color: ${C.warm}; }
        .header-sub { font-size: 0.82rem; color: rgba(245,240,232,0.55); margin-top: 0.7rem; position: relative; font-weight: 300; letter-spacing: 0.02em; }
        .nav { background: ${C.ink}; border-top: 1px solid rgba(255,255,255,0.08); display: flex; overflow-x: auto; scrollbar-width: none; padding: 0 1rem; gap: 0; }
        .nav::-webkit-scrollbar { display: none; }
        .nav-btn { flex-shrink: 0; padding: 0.85rem 1.2rem; font-family: 'DM Sans', sans-serif; font-size: 0.78rem; font-weight: 400; letter-spacing: 0.04em; border: none; background: transparent; cursor: pointer; border-bottom: 2px solid transparent; color: rgba(245,240,232,0.5); transition: all 0.2s; white-space: nowrap; }
        .nav-btn:hover { color: ${C.cream}; }
        .nav-btn.active { color: ${C.cream}; border-bottom-color: var(--phase-color); }
        .nav-btn .years { display: block; font-size: 0.65rem; opacity: 0.6; margin-top: 0.1rem; letter-spacing: 0.06em; }
        .nav-btn.careers-btn { color: rgba(245,240,232,0.5); }
        .nav-btn.careers-btn.active { color: ${C.warm}; border-bottom-color: ${C.warm}; }
        .content { max-width: 860px; margin: 0 auto; padding: 2rem 1.2rem 4rem; }
        .phase-intro { font-family: 'Cormorant Garamond', serif; font-size: 1.12rem; font-weight: 400; line-height: 1.7; color: ${C.inkLight}; margin-bottom: 1.8rem; padding: 1.4rem 1.6rem; background: white; border-left: 3px solid var(--phase-color); border-radius: 0 8px 8px 0; box-shadow: 0 1px 8px rgba(26,26,46,0.06); }
        .section-tabs { display: flex; gap: 0.5rem; overflow-x: auto; scrollbar-width: none; margin-bottom: 1.4rem; padding-bottom: 0.2rem; }
        .section-tabs::-webkit-scrollbar { display: none; }
        .sec-btn { flex-shrink: 0; padding: 0.5rem 1rem; font-size: 0.76rem; font-weight: 500; border: 1.5px solid rgba(26,26,46,0.12); border-radius: 2rem; background: white; cursor: pointer; color: ${C.inkLight}; transition: all 0.18s; white-space: nowrap; }
        .sec-btn.active { background: var(--phase-color); border-color: var(--phase-color); color: white; }
        .sec-btn:hover:not(.active) { border-color: var(--phase-color); color: ${C.ink}; }
        .items-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .item { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(26,26,46,0.05); border: 1px solid rgba(26,26,46,0.06); cursor: pointer; transition: box-shadow 0.18s; }
        .item:hover { box-shadow: 0 2px 12px rgba(26,26,46,0.1); }
        .item-header { display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.1rem; }
        .item-name { font-size: 0.87rem; font-weight: 500; color: ${C.ink}; }
        .item-chevron { font-size: 0.65rem; color: var(--phase-color); transition: transform 0.2s; flex-shrink: 0; margin-left: 0.5rem; }
        .item-chevron.open { transform: rotate(180deg); }
        .item-detail { padding: 0 1.1rem 0.9rem; font-size: 0.82rem; line-height: 1.65; color: ${C.inkLight}; border-top: 1px solid rgba(26,26,46,0.05); padding-top: 0.7rem; }
        .careers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
        .career-card { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 6px rgba(26,26,46,0.07); border: 1px solid rgba(26,26,46,0.07); cursor: pointer; transition: box-shadow 0.18s, transform 0.18s; }
        .career-card:hover { box-shadow: 0 4px 18px rgba(26,26,46,0.12); transform: translateY(-1px); }
        .card-top { padding: 1.1rem 1.2rem 0.9rem; border-bottom: 1px solid rgba(26,26,46,0.05); }
        .card-icon { font-size: 1.4rem; margin-bottom: 0.5rem; }
        .card-title { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 600; color: var(--card-color); margin-bottom: 0.6rem; line-height: 1.2; }
        .roles-chips { display: flex; flex-wrap: wrap; gap: 0.3rem; }
        .role-chip { font-size: 0.68rem; padding: 0.2rem 0.55rem; background: var(--card-faint); color: var(--card-color); border-radius: 20px; font-weight: 500; }
        .card-body { padding: 0.9rem 1.2rem; }
        .card-reality { font-size: 0.8rem; line-height: 1.6; color: ${C.inkLight}; margin-bottom: 0.8rem; }
        .salary-badge { display: inline-block; font-size: 0.72rem; font-weight: 500; padding: 0.3rem 0.7rem; background: #F0FAF0; color: #2E7D32; border-radius: 6px; border: 1px solid #C8E6C9; margin-bottom: 0.6rem; }
        .ai-risk-badge { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.7rem; font-weight: 500; padding: 0.28rem 0.65rem; border-radius: 6px; margin-left: 0.4rem; }
        .ai-note { font-size: 0.77rem; line-height: 1.55; padding: 0.6rem 0.8rem; border-radius: 6px; background: ${C.dangerFaint}; color: ${C.danger}; border-left: 3px solid ${C.dangerMid}; margin-top: 0.5rem; }
        .ai-note strong { display: block; margin-bottom: 0.2rem; font-size: 0.7rem; letter-spacing: 0.05em; text-transform: uppercase; }
        .careers-header { margin-bottom: 1.6rem; }
        .careers-title { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 400; color: ${C.ink}; margin-bottom: 0.4rem; }
        .careers-sub { font-size: 0.82rem; color: ${C.inkLight}; line-height: 1.5; }
        .footer { text-align: center; padding: 1.2rem; font-size: 0.7rem; color: rgba(26,26,46,0.35); letter-spacing: 0.05em; }
      `}</style>
      <div className="roadmap">
        <div className="header">
          <div className="header-eyebrow">Career Roadmap</div>
          <h1 className="header-title">
            <em>Psychology</em>
          </h1>
          <div className="header-sub">From undergraduate foundations to doctoral practice — with an honest look at AI's impact</div>
        </div>

        {summary}

        <nav className="nav">
          {data.phases.map((p) => (
            <button
              key={p.id}
              className={`nav-btn${activePhase === p.id && !showCareers ? " active" : ""}`}
              style={{ "--phase-color": p.color }}
              onClick={() => handlePhaseChange(p.id)}
            >
              {p.label}
              <span className="years">{p.years}</span>
            </button>
          ))}
          <button
            className={`nav-btn careers-btn${showCareers ? " active" : ""}`}
            onClick={() => { setShowCareers(true); setExpandedItem(null); }}
          >
            Career Paths
            <span className="years">8 destinations</span>
          </button>
        </nav>

        <div
          className="content"
          style={{ "--phase-color": showCareers ? C.warm : phase?.color }}
        >
          {!showCareers && phase && (
            <>
              <p className="phase-intro">{phase.intro}</p>
              <div className="section-tabs">
                {phase.sections.map((s, i) => (
                  <button
                    key={i}
                    className={`sec-btn${activeSection === i ? " active" : ""}`}
                    onClick={() => handleSectionChange(i)}
                  >
                    {s.icon} {s.title}
                  </button>
                ))}
              </div>
              {section && (
                <div className="items-list">
                  {section.items.map((item, i) => (
                    <div key={i} className="item" onClick={() => handleItemClick(i)}>
                      <div className="item-header">
                        <span className="item-name">{item.name}</span>
                        <span className={`item-chevron${expandedItem === i ? " open" : ""}`}>▼</span>
                      </div>
                      {expandedItem === i && (
                        <div className="item-detail">{item.detail}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {showCareers && (
            <>
              <div className="careers-header">
                <div className="careers-title">Eight Career Destinations</div>
                <div className="careers-sub">
                  Each card includes AI obsolescence risk — a real and field-specific concern as automation reshapes mental health, research, and applied psychology.
                </div>
              </div>
              <div className="careers-grid">
                {data.careers.map((c, i) => {
                  const risk = AI_RISK_COLORS[c.aiRisk];
                  const open = expandedCareer === i;
                  // compute faint color
                  const faint = c.color + "18";
                  return (
                    <div
                      key={i}
                      className="career-card"
                      style={{ "--card-color": c.color, "--card-faint": faint }}
                      onClick={() => setExpandedCareer(open ? null : i)}
                    >
                      <div className="card-top">
                        <div className="card-icon">{c.icon}</div>
                        <div className="card-title">{c.path}</div>
                        <div className="roles-chips">
                          {c.roles.map((r, j) => (
                            <span key={j} className="role-chip">{r}</span>
                          ))}
                        </div>
                      </div>
                      {open && (
                        <div className="card-body">
                          <p className="card-reality">{c.reality}</p>
                          <div>
                            <span className="salary-badge">💵 {c.salary}</span>
                            <span
                              className="ai-risk-badge"
                              style={{ background: risk.bg, color: risk.text }}
                            >
                              ⚡ {risk.label}
                            </span>
                          </div>
                          <div className="ai-note">
                            <strong>AI Risk Note</strong>
                            {c.aiNote}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="footer">Tap any item or card to expand · Salary data: BLS OEWS May 2024, SIOP 2022, AAUP 2024–25</div>
      </div>
    </>
  );
}
