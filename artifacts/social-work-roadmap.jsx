import { useState } from "react";

/* ------------------------------------------------------------------
   SOCIAL WORK — FIELD ROADMAP
   Aesthetic: screen-printed community poster / print-shop civic vibe.
   Warm paper, per-phase ink colors, misregistration offset shadows.
------------------------------------------------------------------- */

const C = {
  paper: "#F5F1E6",
  paperDeep: "#EDE7D6",
  ink: "#20291F",
  inkSoft: "#4A5347",
  line: "#D8D0BB",
  marigold: "#B8791E",
  marigoldDeep: "#8F5C12",
  spruce: "#2E6B4F",
  spruceDeep: "#1F4E38",
  plum: "#6B4468",
  plumDeep: "#503050",
  brick: "#9A4A32",
  slate: "#3F5E75",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate (BSW)",
      years: "Years 1–4",
      color: C.marigold,
      deep: C.marigoldDeep,
      intro:
        "The Bachelor of Social Work is a generalist practice degree, not a pre-professional survey. CSWE accreditation is the credential that matters — it's what makes your degree count for licensure and unlocks Advanced Standing, which cuts the master's from two years to one. The BSW is also optional: many social workers enter the MSW from psychology or sociology. But if you know this is your field, the BSW is the single biggest time-and-money lever you can pull.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            {
              name: "Intro to Social Work & Social Welfare",
              detail:
                "The profession's origin story — settlement houses, Jane Addams, the New Deal — and how the modern welfare state actually works. Sets up the field's dual identity: helping individuals while changing systems.",
            },
            {
              name: "Human Behavior and the Social Environment (HBSE)",
              detail:
                "The discipline's conceptual backbone: the person-in-environment framework. Developmental theory across the lifespan, viewed through family, community, and structural context rather than the individual alone.",
            },
            {
              name: "Social Welfare Policy & Services",
              detail:
                "How TANF, Medicaid, SNAP, housing assistance, and child welfare law actually function — eligibility rules, funding streams, and the politics behind them. You'll navigate these systems daily in practice.",
            },
            {
              name: "Practice Methods sequence (micro / mezzo / macro)",
              detail:
                "The skills spine of the degree: interviewing and engagement with individuals, group facilitation, and community/organizational practice. Taught in a locked sequence — programs won't let you take these out of order.",
            },
            {
              name: "Research Methods & Statistics — the weeder",
              detail:
                "The course that surprises students who chose social work to avoid math. Evidence-based practice, program evaluation, and basic statistics. It's also the gateway to the field's better-paid research and evaluation roles.",
            },
            {
              name: "Diversity, Oppression & Social Justice",
              detail:
                "Cultural humility, anti-oppressive frameworks, and structural analysis of racism, poverty, and discrimination. Central to CSWE competencies and to the ethics you'll be examined on for licensure.",
            },
          ],
        },
        {
          title: "Field Education & Gatekeeping",
          icon: "🧭",
          items: [
            {
              name: "The 400–500 hour practicum",
              detail:
                "CSWE requires a minimum of 400 supervised hours in a real agency, usually your senior year — sometimes as a full-semester 'block placement.' It's the profession's signature pedagogy and your first professional network.",
            },
            {
              name: "It's almost always unpaid — plan for it",
              detail:
                "Field placements are effectively a part-time unpaid job on top of coursework, a live controversy in the profession. Budget for a semester with reduced work hours, and hunt for the stipended placements that do exist.",
            },
            {
              name: "Formal gatekeeping reviews",
              detail:
                "Unusual among majors: programs formally screen students for professional readiness, ethics, and emotional stability before admitting them to upper-division courses and field. Faculty can counsel students out of the major.",
            },
            {
              name: "Documentation & assessment craft",
              detail:
                "Biopsychosocial assessments, case notes, safety plans. Documentation is legal record in this field — it's read by courts, insurers, and licensing boards — and it's the skill agencies most complain new grads lack.",
            },
            {
              name: "Crisis fundamentals",
              detail:
                "Mandated reporting law, suicide risk screening, de-escalation, and safety planning. You'll use these in your first placement, not your first job.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🤖",
          items: [
            {
              name: "Agency case-management systems",
              detail:
                "Every placement runs on an electronic record: agency EHRs, HMIS for homeless services, SACWIS/CCWIS for child welfare. Learning to document cleanly inside clunky systems is a genuine, transferable skill.",
            },
            {
              name: "SPSS / Excel for research methods",
              detail:
                "The standard stats stack at the BSW level. Students who add real spreadsheet and data-literacy skills stand out immediately in agencies where program evaluation is grant-mandated.",
            },
            {
              name: "Telehealth platforms",
              detail:
                "Video-based service delivery went mainstream after 2020 and stayed. Placements increasingly include telehealth hours, and the etiquette of remote crisis work is now taught, not assumed.",
            },
            {
              name: "AI enters before you graduate",
              detail:
                "A 2025–26 national NASW-coordinated survey found nearly two-thirds of social workers already use AI, mostly for notes, reports, and correspondence. You'll graduate into agencies mid-adoption — learn the tools and their failure modes (hallucination, bias, client privacy) together.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🌱",
          items: [
            {
              name: "Play the Advanced Standing game",
              detail:
                "A BSW from a CSWE-accredited program plus a solid GPA lets you finish the MSW in ~1 year and ~30–45 credits (the count varies by school) instead of two years and 60–66. That's tens of thousands of dollars — the highest-ROI move in the whole pipeline.",
            },
            {
              name: "Title IV-E child welfare stipends",
              detail:
                "Federal training money pays tuition and stipends (up to ~$18.5K/yr in some states) for students who commit to working in public child welfare after graduation. Several universities run dedicated BSW tracks.",
            },
            {
              name: "Crisis-line and shelter volunteering",
              detail:
                "988 lifelines, domestic violence hotlines, and shelters train undergraduates seriously and count heavily in MSW admissions. It's the field's equivalent of undergrad research experience.",
            },
            {
              name: "A second language is a career asset",
              detail:
                "Spanish (or ASL, or any community language) materially changes your placement options, hiring, and in some agencies your pay. Bilingual stipend programs exist specifically for child welfare and school settings.",
            },
            {
              name: "Phi Alpha & student NASW",
              detail:
                "The honor society and student membership in the National Association of Social Workers are cheap signals that open scholarship, conference, and mentoring doors — and NASW membership discounts continue into licensure prep.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's (MSW)",
      years: "Years 5–6",
      color: C.spruce,
      deep: C.spruceDeep,
      intro:
        "The MSW — not the PhD — is this profession's center of gravity. It's the terminal practice degree, the gate to clinical work, and what employers mean when they say 'qualified.' Two routes in: the traditional 60-credit, two-year program (open to any bachelor's) with ~900 field hours, or the one-year Advanced Standing track for BSW grads. Unlike research fields, most MSW students self-fund — so the funding strategy matters as much as the school.",
      sections: [
        {
          title: "Choosing Your Track",
          icon: "🧭",
          items: [
            {
              name: "Clinical / direct practice — the dominant track",
              detail:
                "Therapy, assessment, and diagnosis with individuals and families. Required if you want the LCSW and independent clinical practice. Most programs and most jobs sit here.",
            },
            {
              name: "Macro — policy, administration, organizing",
              detail:
                "Program development, community organizing, and policy analysis. Fewer programs offer it and fewer entry jobs exist, but the leadership ceiling (executive director, policy director) is higher than clinical line work.",
            },
            {
              name: "Advanced generalist — the hybrid",
              detail:
                "Blends micro and macro; common at smaller and rural programs. Flexible, but check that its field placements and coursework still satisfy your state's clinical licensure rules if the LCSW is your goal.",
            },
            {
              name: "Named specializations",
              detail:
                "School social work, healthcare/integrated care, substance use, forensic, military, and gerontology tracks shape your electives and placements. School social work often requires a separate state credential (e.g., California's PPSC).",
            },
            {
              name: "Dual degrees",
              detail:
                "MSW/MPH, MSW/JD, and MSW/MPA combinations exist at many schools for students aiming at health policy, law-adjacent practice, or public administration. They add a year but stack credentials efficiently.",
            },
          ],
        },
        {
          title: "Advanced Training",
          icon: "📖",
          items: [
            {
              name: "900–1,200 field hours across two placements",
              detail:
                "A generalist placement, then a specialization placement matched to your track. The second placement frequently becomes the first job — treat it as a two-semester interview.",
            },
            {
              name: "Clinical methods & the DSM",
              detail:
                "Cognitive behavioral therapy, motivational interviewing, trauma-informed care, and DSM-5-TR diagnosis. This is where social work training converges with what psychologists and counselors learn — LCSWs end up delivering most of America's psychotherapy.",
            },
            {
              name: "Integrated & medical care skills",
              detail:
                "Screening, brief intervention, care coordination, and psychopharmacology literacy for hospital and primary-care settings — the field's highest-paying employment sector.",
            },
            {
              name: "Grant writing & program evaluation",
              detail:
                "The macro toolkit: needs assessments, logic models, funding proposals, outcome measurement. Even clinical practitioners who can write grants become promotable fast in nonprofit agencies.",
            },
          ],
        },
        {
          title: "Money & Logistics",
          icon: "💵",
          items: [
            {
              name: "Expect to self-fund — costs vary wildly",
              detail:
                "Unlike funded science PhDs, assistantships are scarce. Total tuition runs from ~$12K (in-state CSU advanced standing) to $100K+ (elite privates). The credential is the same CSWE accreditation either way — prestige matters less here than in most fields.",
            },
            {
              name: "Stipend programs can flip the math",
              detail:
                "Title IV-E child welfare stipends and state programs like CalSWEC (stipends up to ~$18,500 a year) pay substantial support in exchange for post-graduation service in public agencies. HRSA behavioral-health workforce grants mostly fund programs and placements, with some schools offering stipends (e.g., $10,000 at Case Western).",
            },
            {
              name: "Online and part-time are mainstream",
              detail:
                "Hundreds of CSWE-accredited online MSWs exist, and licensing boards treat them identically to campus degrees. Many students work full-time through a 3–4 year part-time MSW; field hours are the binding constraint.",
            },
            {
              name: "The unpaid-field-hours problem, round two",
              detail:
                "900+ practicum hours is close to half a work-year, mostly unpaid. Employer-based placements (doing field at your existing job) and paid placements are growing but still the exception — negotiate early.",
            },
          ],
        },
        {
          title: "The Licensure Runway",
          icon: "🪪",
          items: [
            {
              name: "LMSW: the day-one license",
              detail:
                "Graduate, pass the ASWB Master's exam, and you're a Licensed Master Social Worker (name varies by state) — employable across case management, hospitals, and agencies, but supervised for clinical work.",
            },
            {
              name: "LCSW: the 2–3 year climb",
              detail:
                "Independent clinical practice requires 2,000–4,000 supervised post-MSW clinical hours (most states: ~3,000 over 2+ years) plus the ASWB Clinical exam. Pick first jobs that provide qualified supervision, or you'll pay for it out of pocket.",
            },
            {
              name: "The exam itself is contested",
              detail:
                "ASWB's own data showed 93% of white candidates passing the Master's exam first-try versus 55.5% of Black candidates (2011–2021). Illinois and several other states have dropped the exam requirement for non-clinical licensure, and more are debating it — check your state's current rules, they're moving.",
            },
            {
              name: "The Social Work Licensure Compact",
              detail:
                "An interstate compact has been enacted in 35 states (as of July 2026) but is not operational yet: multistate licenses are not available, and the commission has cited roughly 18–24 months before applications open. Once live, it should let licensed social workers practice across member states without re-licensing, a big deal for telehealth careers and military spouses.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "Doctoral & Research",
      years: "Years 7+",
      color: C.plum,
      deep: C.plumDeep,
      intro:
        "Here's where social work breaks the academic mold: the doctorate is optional, and only a small minority pursue one — the MSW is the practice terminal degree. Two distinct doctorates exist. The PhD (about 4–5 years, usually funded) trains researchers and professors. The DSW (about 2–3 years, ~48 credits, often part-time and online; the programs checked list tuition of ~$29K–$61K) is a practice doctorate for clinical experts and agency leaders. PhD programs generally require a master's degree first (not always an MSW), and practice experience is often a plus rather than a requirement.",
      sections: [
        {
          title: "PhD vs. DSW",
          icon: "🎓",
          items: [
            {
              name: "The PhD: funded, research-first",
              detail:
                "Coursework in theory and advanced methods, comprehensive exams, and a dissertation. Tuition waivers and stipends are the norm at research universities. The output is a scholar who can win grants and publish — the academic hiring currency.",
            },
            {
              name: "The DSW: practice doctorate, usually self-funded",
              detail:
                "Designed for working LCSWs and administrators; often online/executive format with an applied capstone instead of a traditional dissertation. Valued for clinical leadership, teaching in practice-oriented programs, and agency executive roles.",
            },
            {
              name: "They now compete for teaching jobs",
              detail:
                "CSWE/GADE survey data shows both PhD and DSW graduates pursuing tenure-track positions at teaching universities. PhDs dominate R1/R2 research hires; DSWs increasingly land practice-professor and teaching lines.",
            },
            {
              name: "Who should skip the doctorate: most people",
              detail:
                "Clinical careers, healthcare leadership, and six-figure private practice all top out fine on the MSW + LCSW. The doctorate pays off for research, professorships, and some executive tracks — not as a general salary bump.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔬",
          items: [
            {
              name: "The 13 Grand Challenges",
              detail:
                "The field's organized research agenda: ending homelessness, closing the health gap, eradicating social isolation, achieving equal opportunity and justice, building financial capabilities and assets for all, eliminating racism — and, explicitly, harnessing technology for social good.",
            },
            {
              name: "Implementation science",
              detail:
                "The field's hottest methodological frontier: not just proving an intervention works in a trial, but studying how to get it adopted with fidelity inside chronically under-resourced agencies.",
            },
            {
              name: "Predictive analytics & algorithmic accountability",
              detail:
                "Child welfare agencies deploy risk-scoring algorithms (Allegheny County's screening tool is the canonical case), and social work researchers are now among the leading scholars auditing them for racial bias and due-process harms.",
            },
            {
              name: "Behavioral health workforce & aging research",
              detail:
                "Two demand-driven frontiers: the national therapist shortage (who provides care, at what quality, via what modality — including digital) and gerontological social work as the 65+ population surges.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🤖",
          items: [
            {
              name: "The quantitative stack",
              detail:
                "R is widely taught, Mplus is the standard for structural equation modeling; SPSS persists in teaching. Administrative-data linkage (Medicaid, child welfare, housing records) is a distinctive social work research skill.",
            },
            {
              name: "Qualitative & community-based methods",
              detail:
                "NVivo and Atlas.ti for qualitative analysis, plus community-based participatory research (CBPR) — co-designing studies with the communities studied, a methodological signature of the field.",
            },
            {
              name: "AI as research subject, not just tool",
              detail:
                "Social work scholars study AI bias in public benefit systems, digital exclusion, and chatbot mental-health tools — 'harness technology' is literally one of the Grand Challenges. It's a genuinely open niche for doctoral students with technical skills.",
            },
            {
              name: "AI as research instrument",
              detail:
                "LLM-assisted qualitative coding, literature synthesis, and administrative-text analysis are entering the methods toolkit, with journals and IRBs actively writing the rules around them.",
            },
          ],
        },
        {
          title: "Academic Reality",
          icon: "🏛️",
          items: [
            {
              name: "A better market than most of academia — but tightening",
              detail:
                "300+ accredited MSW programs need faculty, so social work PhDs historically out-placed the humanities. New tenure lines have plateaued, adjunctification is rising, and DSW competition is real. Still: it's one of academia's less-brutal markets.",
            },
            {
              name: "What offers look like",
              detail:
                "Recent tenure-track assistant professor postings run roughly $70K–$112K (nine/ten-month), with teaching loads from 2/2 at research schools to 4/4 in state comprehensives. Startup packages are modest compared to lab sciences.",
            },
            {
              name: "Practice experience is required, not optional",
              detail:
                "Some faculty postings require current licensure and two or more years of post-MSW practice, while others only prefer direct practice experience, so read each posting closely.",
            },
            {
              name: "Grant ecosystem",
              detail:
                "NIH (especially NIMH, NIDA, NIA), ACF, HRSA, and foundations like Casey and RWJF fund the field. Grant-writing ability is the single biggest differentiator on the research job market.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Clinical Therapy & Private Practice",
      icon: "🛋️",
      color: C.spruce,
      roles: ["Case Manager", "LMSW Clinician", "LCSW Therapist", "Group Practice Owner"],
      reality:
        "The destination most students picture — and it's gated by the LCSW: 2–3 years of supervised hours after the MSW. Worth knowing: NASW describes clinical social workers as one of the nation's largest groups of mental-health providers. BLS puts the median for mental-health and substance-abuse social workers at ~$60K across all license levels, and salaried LCSWs are estimated somewhat higher (~$68K median in one vendor estimate); established private practitioners charging $120–200/session gross $80–120K+, with telehealth platforms expanding reach (and competing for the low-acuity clients AI chatbots also target). The bottleneck years are the underpaid supervised-hours stretch.",
      salary: "$55K – $120K+",
    },
    {
      path: "Healthcare & Medical Social Work",
      icon: "🏥",
      color: C.slate,
      roles: ["Hospital Social Worker", "Hospice/Palliative SW", "Dialysis & Transplant SW", "Care Manager"],
      reality:
        "The highest-paid of BLS's three named social work specialties (median ~$67.9K nationally in May 2025; ~$93K in California per a secondary source) because hospital billing structures support real salaries. The work: discharge planning, family crisis, end-of-life care, insurance navigation — fast, medical-team-embedded, and emotionally heavy. Demand is structural (aging population, hospital pay grids repriced upward since 2022). An MSW is effectively required; the LCSW adds behavioral-health roles.",
      salary: "$55K – $95K",
    },
    {
      path: "Child Welfare & Family Services",
      icon: "🧸",
      color: C.brick,
      roles: ["CPS Investigator", "Permanency Caseworker", "Foster/Adoption Specialist", "Unit Supervisor"],
      reality:
        "The profession's hardest and most consequential frontline. Honest numbers: national caseworker turnover runs ~30% a year, average caseloads of ~24 children against a recommended 12–15, court testimony, and 24/7 crisis response. In exchange: government job security, pensions, fast promotion (agencies are chronically short), and Title IV-E stipends that can make your degree nearly free. Entry pay is modest ($42–60K typical, BLS child, family and school median ~$59.6K) but supervisors and program managers climb well past it.",
      salary: "$42K – $75K",
    },
    {
      path: "School Social Work",
      icon: "🎒",
      color: C.marigold,
      roles: ["School Social Worker", "Student Services Coordinator", "District Lead SW"],
      reality:
        "Embedded in schools handling attendance, IEP support, family crises, and the youth mental-health surge. Many states require a credential beyond the MSW (California's PPSC is the classic example) — verify before choosing a program. Pay follows teacher-adjacent scales (BLS child, family and school median ~$59.6K; $70K+ cited for NJ/CT/NY), with union protection, pensions, and an academic-year calendar that's rare elsewhere in the field. Hiring is district-budget-dependent but demand has grown with school mental-health funding.",
      salary: "$50K – $80K",
    },
    {
      path: "Military & Veterans (VA / Federal)",
      icon: "🎖️",
      color: C.spruceDeep,
      roles: ["VA Social Worker", "Active-Duty SW Officer", "Vet Center Counselor", "Program Coordinator"],
      reality:
        "The VA is the nation's largest employer of master's-level social workers — 18,000+ — and trains ~1,500 MSW interns a year, making it a genuine pipeline. Federal GS-11 to GS-12 pay runs ~$64–99K+ before locality adjustments, with FERS pensions, loan repayment, and the strongest benefits in the field. A master's-level state social work license is required for independent practice. Active-duty commissions add housing allowances that push total compensation toward six figures.",
      salary: "$64K – $100K+",
    },
    {
      path: "Macro: Policy, Advocacy & Nonprofit Leadership",
      icon: "🏛️",
      color: C.plum,
      roles: ["Community Organizer", "Program Manager", "Policy Analyst", "Executive Director"],
      reality:
        "The systems-change path: running programs, writing policy, organizing communities, leading agencies. Entry roles are scarcer than clinical jobs and often start lower, but the ceiling is higher — social and community service managers have a BLS median of ~$80K (90th percentile ~$132K), and nonprofit executive director pay varies widely with organization size (self-reported 90th percentile ~$116K). A macro MSW (or MSW/MPA, MSW/MPH) plus grant-writing ability is the toolkit. Career risk: funding is grant- and budget-cyclical.",
      salary: "$50K – $130K+",
    },
    {
      path: "Academia & Research",
      icon: "🎓",
      color: C.plumDeep,
      roles: ["Doctoral Student", "Research Scientist", "Assistant Professor", "Program Evaluator"],
      reality:
        "Requires the PhD (funded) for research universities; the DSW increasingly competes for teaching-focused lines. Assistant professor offers run $70–112K on nine-month contracts — healthier than most of academia because 300+ MSW programs need faculty, though new tenure lines have plateaued. Some faculty postings require MSW-level practice experience (e.g., two years), so check target postings and plan a practice chapter if needed. Applied evaluation and research-institute roles ($90–120K) absorb PhDs who leave academia.",
      salary: "$70K – $120K",
    },
    {
      path: "Corporate, EAP & Forensic",
      icon: "💼",
      color: C.ink,
      roles: ["EAP Counselor", "Workplace Wellbeing Lead", "Forensic Social Worker", "Mitigation Specialist"],
      reality:
        "The under-recognized exits. Employee Assistance Programs hire LCSWs for short-term workplace counseling at corporate salaries. Forensic social workers assess defendants, testify, and — as mitigation specialists in capital defense — build the life-history investigations that shape sentencing. Tech trust-and-safety and content-policy teams also recruit social workers for their risk-assessment training. These paths reward the LCSW plus business or legal fluency. EAP counselors average ~$86K (self-reported), but forensic and mitigation roles often pay near or below agency scale (examples found run ~$50–58K).",
      salary: "$50K – $110K",
    },
  ],
};

const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
::selection { background: #B8791E33; }
.sw-tabs::-webkit-scrollbar { display: none; }
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
`;

export default function SocialWorkRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedCareer, setExpandedCareer] = useState(null);
  const [showCareers, setShowCareers] = useState(false);

  const phase = data.phases.find((p) => p.id === activePhase);

  const selectPhase = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };

  const selectCareers = () => {
    setShowCareers(true);
    setExpandedCareer(null);
  };

  const display = "'Bricolage Grotesque', system-ui, sans-serif";
  const body = "'Public Sans', system-ui, sans-serif";

  const accent = showCareers ? C.brick : phase.color;
  const accentDeep = showCareers ? "#6E3221" : phase.deep;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.paper,
        color: C.ink,
        fontFamily: body,
        paddingBottom: 56,
      }}
    >
      <style>{FONT_CSS}</style>

      {/* Poster top band */}
      <div style={{ height: 10, background: C.ink }} />
      <div style={{ height: 5, background: accent, transition: "background .25s" }} />

      {/* Header */}
      <header style={{ maxWidth: 880, margin: "0 auto", padding: "30px 20px 8px" }}>
        <div
          style={{
            fontFamily: body,
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: C.inkSoft,
            marginBottom: 10,
          }}
        >
          Field Roadmap · No. 07 · People &amp; Systems
        </div>
        <h1
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: "clamp(40px, 9vw, 68px)",
            lineHeight: 0.98,
            margin: 0,
            letterSpacing: "-0.02em",
            color: C.ink,
            textShadow: `3px 3px 0 ${accent}55`,
            transition: "text-shadow .25s",
          }}
        >
          Social Work
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.55,
            color: C.inkSoft,
            maxWidth: 640,
            margin: "14px 0 0",
          }}
        >
          From the first policy class to independent clinical practice — a licensure-gated
          profession where the master's degree, not the doctorate, is the center of gravity.
        </p>
      </header>

      {/* Phase tabs */}
      <nav
        className="sw-tabs"
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          padding: "22px 20px 6px",
          maxWidth: 880,
          margin: "0 auto",
          scrollbarWidth: "none",
        }}
      >
        {data.phases.map((p) => {
          const active = !showCareers && activePhase === p.id;
          return (
            <button
              key={p.id}
              onClick={() => selectPhase(p.id)}
              style={{
                flex: "0 0 auto",
                fontFamily: display,
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 16px",
                border: `2px solid ${C.ink}`,
                borderRadius: 6,
                cursor: "pointer",
                background: active ? p.color : C.paper,
                color: active ? C.paper : C.ink,
                boxShadow: active ? `4px 4px 0 ${C.ink}` : "none",
                transform: active ? "translate(-2px,-2px)" : "none",
                transition: "all .15s",
                whiteSpace: "nowrap",
              }}
            >
              {p.label}
              <span
                style={{
                  display: "block",
                  fontFamily: body,
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                  marginTop: 2,
                }}
              >
                {p.years}
              </span>
            </button>
          );
        })}
        <button
          onClick={selectCareers}
          style={{
            flex: "0 0 auto",
            fontFamily: display,
            fontWeight: 600,
            fontSize: 14,
            padding: "12px 16px",
            border: `2px solid ${C.ink}`,
            borderRadius: 6,
            cursor: "pointer",
            background: showCareers ? C.brick : C.paper,
            color: showCareers ? C.paper : C.ink,
            boxShadow: showCareers ? `4px 4px 0 ${C.ink}` : "none",
            transform: showCareers ? "translate(-2px,-2px)" : "none",
            transition: "all .15s",
            whiteSpace: "nowrap",
          }}
        >
          Career Paths
          <span
            style={{
              display: "block",
              fontFamily: body,
              fontWeight: 600,
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.85,
              marginTop: 2,
            }}
          >
            8 destinations
          </span>
        </button>
      </nav>

      <main style={{ maxWidth: 880, margin: "0 auto", padding: "18px 20px 0" }}>
        {!showCareers ? (
          <>
            {/* Phase intro */}
            <div
              style={{
                borderLeft: `5px solid ${phase.color}`,
                background: C.paperDeep,
                padding: "16px 18px",
                borderRadius: "0 8px 8px 0",
                margin: "10px 0 22px",
              }}
            >
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.ink }}>
                {phase.intro}
              </p>
            </div>

            {/* Section tabs */}
            <div
              className="sw-tabs"
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                paddingBottom: 4,
                marginBottom: 16,
                scrollbarWidth: "none",
              }}
            >
              {phase.sections.map((s, i) => {
                const active = activeSection === i;
                return (
                  <button
                    key={s.title}
                    onClick={() => {
                      setActiveSection(i);
                      setExpandedItem(null);
                    }}
                    style={{
                      flex: "0 0 auto",
                      fontFamily: body,
                      fontWeight: 600,
                      fontSize: 13,
                      padding: "9px 14px",
                      borderRadius: 999,
                      border: `1.5px solid ${active ? phase.deep : C.line}`,
                      background: active ? phase.deep : "transparent",
                      color: active ? C.paper : C.inkSoft,
                      cursor: "pointer",
                      transition: "all .15s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{s.icon}</span>
                    {s.title}
                  </button>
                );
              })}
            </div>

            {/* Expandable items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <button
                    key={item.name}
                    onClick={() => setExpandedItem(open ? null : i)}
                    style={{
                      textAlign: "left",
                      fontFamily: body,
                      background: open ? "#FFFDF6" : C.paper,
                      border: `1.5px solid ${open ? phase.color : C.line}`,
                      borderRadius: 10,
                      padding: "14px 16px",
                      cursor: "pointer",
                      boxShadow: open ? `4px 4px 0 ${phase.color}44` : "none",
                      transition: "all .18s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: display,
                          fontWeight: 600,
                          fontSize: 16,
                          color: C.ink,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          color: phase.deep,
                          transform: open ? "rotate(45deg)" : "none",
                          transition: "transform .18s",
                          flex: "0 0 auto",
                        }}
                      >
                        +
                      </span>
                    </div>
                    {open && (
                      <p
                        style={{
                          margin: "10px 0 0",
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: C.inkSoft,
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
            {/* Careers intro */}
            <div
              style={{
                borderLeft: `5px solid ${C.brick}`,
                background: C.paperDeep,
                padding: "16px 18px",
                borderRadius: "0 8px 8px 0",
                margin: "10px 0 22px",
              }}
            >
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                Eight distinct destinations, from the therapy office to the state capitol.
                Salary ranges reflect 2024–2026 BLS and federal pay data; the "reality"
                notes are the part most program brochures leave out. Direct practice
                consistently ranks among the least-automatable occupations — the AI story
                here is documentation, risk-scoring algorithms, and chatbots at the
                low-acuity margins, not replacement.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 14,
              }}
            >
              {data.careers.map((c, i) => {
                const open = expandedCareer === i;
                return (
                  <button
                    key={c.path}
                    onClick={() => setExpandedCareer(open ? null : i)}
                    style={{
                      textAlign: "left",
                      fontFamily: body,
                      background: "#FFFDF6",
                      border: `2px solid ${open ? c.color : C.line}`,
                      borderTop: `6px solid ${c.color}`,
                      borderRadius: 12,
                      padding: "16px 16px 14px",
                      cursor: "pointer",
                      boxShadow: open ? `5px 5px 0 ${c.color}55` : "2px 2px 0 #00000010",
                      transition: "all .18s",
                      alignSelf: "start",
                    }}
                  >
                    <div style={{ fontSize: 26, lineHeight: 1 }}>{c.icon}</div>
                    <h3
                      style={{
                        fontFamily: display,
                        fontWeight: 800,
                        fontSize: 18,
                        lineHeight: 1.2,
                        color: c.color,
                        margin: "8px 0 10px",
                      }}
                    >
                      {c.path}
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "4px 9px",
                            borderRadius: 999,
                            background: C.paperDeep,
                            border: `1px solid ${C.line}`,
                            color: C.inkSoft,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    {open && (
                      <>
                        <p
                          style={{
                            margin: "12px 0 12px",
                            fontSize: 13.5,
                            lineHeight: 1.6,
                            color: C.inkSoft,
                          }}
                        >
                          {c.reality}
                        </p>
                        <div
                          style={{
                            display: "inline-block",
                            fontFamily: display,
                            fontWeight: 800,
                            fontSize: 15,
                            color: C.paper,
                            background: c.color,
                            padding: "7px 12px",
                            borderRadius: 6,
                            boxShadow: `3px 3px 0 ${C.ink}`,
                          }}
                        >
                          {c.salary}
                        </div>
                      </>
                    )}
                    {!open && (
                      <div
                        style={{
                          marginTop: 12,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: c.color,
                        }}
                      >
                        Tap for the reality + salary →
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          maxWidth: 880,
          margin: "34px auto 0",
          padding: "16px 20px 0",
          borderTop: `2px solid ${C.ink}`,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: C.inkSoft,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Tap any item or card to expand it. Salary figures anchor to BLS (May 2025) and
          2025–26 federal pay tables; licensure rules vary by state and are changing — always
          verify with your state board and CSWE program listings.
        </p>
        <div
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: accentDeep,
            margin: "12px 0 0",
          }}
        >
          ■ Printed for the next generation of practitioners
        </div>
      </footer>
    </div>
  );
}
