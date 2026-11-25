import { useState } from "react";

/* ── POLITICAL SCIENCE ROADMAP ─ civic "roll-call record" aesthetic ──
   ground: cool institutional bond paper #E9E5DA · panels #F5F2EA / #FBFAF4
   ink #1C1E28 · oxblood #8A2B2E (American/undergrad) · navy #23406B (master's)
   plum #5A3A6B (PhD/theory) · brass #96681A (careers) · pine #2C6E49 (favorable)
   display: Zilla Slab · body: Public Sans (US federal typeface) · data: Space Mono */

const C = {
  bg: "#E9E5DA",
  paper: "#F5F2EA",
  paperUp: "#FBFAF4",
  line: "#D2CCBC",
  lineSoft: "#DED8C9",
  ink: "#1C1E28",
  dim: "#55596A",
  faint: "#86899A",
  oxblood: "#8A2B2E",
  navy: "#23406B",
  plum: "#5A3A6B",
  brass: "#96681A",
  pine: "#2C6E49",
};

const font = {
  display: "'Zilla Slab', Georgia, serif",
  body: "'Public Sans', system-ui, sans-serif",
  mono: "'Space Mono', 'Courier New', monospace",
};

/* signature: the roll-call board — the field's realities, on the record */
const rollcall = [
  { label: "Law-school applicants, rank by major", value: "#1 MAJOR", vote: "aye", note: "LSAC 2015–16" },
  { label: "Poli-sci jobs, 2025–35 (BLS)", value: "−2%", vote: "nay", inSummary: true },
  { label: "PhD job-seekers landing tenure-track", value: "~1 in 3", vote: "nay", note: "APSA 2024–25" },
  { label: "Political-scientist median (BLS)", value: "$142,080", vote: "aye", note: "6,100 jobs", inSummary: true },
  { label: "Faculty from top-5 programs", value: "~34%", vote: "nay", note: "2004 data" },
  { label: "Law grads employed <10 mo.", value: "93.4%", vote: "aye", note: "class of 2024" },
];

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "YRS 1–4",
      color: C.oxblood,
      intro:
        "Most departments organize the major around five subfields. American Politics, Comparative Politics, International Relations, and Political Theory appear everywhere; the fifth varies (Methodology at UNC and Michigan, Political Economy at Penn, Public Policy at BU). It's a deliberately flexible major: few fixed courses, distribution across subfields, freedom to specialize, and no built-in professional credential to show for it. The clearest curricular trend is quantification: Yale, Berkeley, and Duke require a methods or statistics course, and UNC offers a Data in Politics track. Experience outside class matters too: one career guide calls internships the biggest factor in landing a degree-relevant first job.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "§",
          items: [
            {
              name: "American Government & Institutions",
              detail:
                "Congress, the courts, the presidency, elections, and the Constitution — the foundational survey and, for most students, the entry point to the major.",
            },
            {
              name: "Comparative Politics",
              detail:
                "Why regimes, parties, and institutions differ across countries; democratization, authoritarianism, and the machinery of states. Usually paired with a region and a language.",
            },
            {
              name: "International Relations",
              detail:
                "War, trade, cooperation, and the international system, framed through realism, liberalism, and constructivism. The gateway to security, diplomacy, and global-governance tracks.",
            },
            {
              name: "Political Theory",
              detail:
                "Justice, power, legitimacy, and democracy — from Plato and Hobbes to contemporary thought. The humanities anchor of the discipline, and where the closest reading happens.",
            },
            {
              name: "Political Methodology / Research Design",
              detail:
                "The empirical spine: how to design research, run statistics, and separate correlation from causation. Berkeley (PS 3), Yale, and Duke each require a methods or statistics course.",
            },
            {
              name: "Political Economy",
              detail:
                "The synthetic subfield linking politics and markets: collective choice, institutions, and the politics of economic policy. Penn counts it as a fifth concentration alongside the four standard subfields.",
            },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "◇",
          items: [
            {
              name: "Writing & argumentation",
              detail:
                "The transferable skill that defines the major. Political science supplied more law-school applicants than any other major in LSAC's 2015-16 data, and one career guide ties the overlap to the LSAT's reading and argument skills.",
            },
            {
              name: "Research design & causal inference",
              detail:
                "Distinguishing what causes what from what merely correlates. Columbia teaches Applied Regression and Causal Inference and a separate Experimental Methods course.",
            },
            {
              name: "Quantitative data analysis",
              detail:
                "Regression, survey analysis, and coding. One career guide lists familiarity with R or Python as a requirement for political data analyst roles.",
            },
            {
              name: "Critical reading of primary sources",
              detail:
                "Statutes, treaties, court opinions, party platforms, and theory texts — read for argument, assumption, and evidence, not just content.",
            },
            {
              name: "Comparative & area knowledge",
              detail:
                "Depth in a region and a language, often built through study abroad. UNC strongly urges study abroad for students in comparative politics and international relations.",
            },
          ],
        },
        {
          title: "Methods & Tools",
          icon: "⌸",
          items: [
            {
              name: "R & RStudio",
              detail:
                "A career guide names R or Python as the working requirement for political data analyst roles. Which one your methods sequence uses varies by department.",
            },
            {
              name: "Formal theory & game theory",
              detail:
                "Mathematical models of political decision making. Yale groups it with methodology as one subfield, Columbia teaches Logic of Collective Choice, and UNC describes formal theory courses as using mathematical models to analyze political decisions.",
            },
            {
              name: "Survey & experimental methods",
              detail:
                "Dedicated courses exist: Columbia lists Experimental Research, Politics in the Lab, and Design and Analysis of Sample Surveys. The closest BLS occupation, survey researchers, has a median of $69,460 and typically requires a master's.",
            },
            {
              name: "Text-as-data",
              detail:
                "Automated content analysis of large text collections such as speeches, platforms, and legislative records. Published work describes rapid adoption of these methods across political science.",
            },
            {
              name: "LLMs for annotation — validate, don't trust",
              detail:
                "Large language models now classify political text and stand in for human coders in published studies. The same literature stresses robust validation and careful codebook definition, so the skill is checking the output, not deferring to it.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "★",
          items: [
            {
              name: "The D.C. internship pipeline",
              detail:
                "Hill offices, federal agencies, and think tanks. UNC grants pass/fail credit for government and public-service internships, outside its nine major courses, and one career guide calls internships the biggest factor in a degree-relevant first job.",
            },
            {
              name: "Campaigns & organizing",
              detail:
                "Campaign staff roles are BA-accessible, per one career guide. Field organizers have a median salary of about $49,500, with the middle 80 percent between $35,900 and $59,500 (Salary.com).",
            },
            {
              name: "Undergraduate research & a senior thesis",
              detail:
                "UNC's mentored research course, Yale's senior essay, and Duke's graduation with distinction all center on an original research paper. Duke advises starting to think about the thesis in the second semester of junior year.",
            },
            {
              name: "Pi Sigma Alpha",
              detail:
                "The national political science honor society. At UNC, membership requires 15 hours of political science with a 3.3 overall and 3.5 political science GPA.",
            },
            {
              name: "Language + study abroad",
              detail:
                "UNC strongly urges study abroad for students interested in comparative politics and international relations, and advises planning it early with the study abroad office.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's & Professional",
      years: "YRS ~5–7",
      color: C.navy,
      intro:
        "Political science splits sharply here: there is no single master's. Instead there's a fork: the professional policy degree (MPP / MPA / MIA), a career accelerator for government, nonprofit, and consulting work; the academic MA, usually a PhD stepping-stone; and law school (JD), which draws more applicants from political science than any other major. The catch that reshapes every ROI calculation: master's funding is uneven (a few programs, Princeton's among them, fund students fully), while the reliably funded seat is the PhD.",
      sections: [
        {
          title: "The Degree Fork",
          icon: "§",
          items: [
            {
              name: "MPP — Master of Public Policy",
              detail:
                "Quantitative and analytic: policy analysis, economics, statistics, program evaluation. The degree for analysts and evaluators who want to shape policy with evidence.",
            },
            {
              name: "MPA — Master of Public Administration",
              detail:
                "Management-focused: budgeting, personnel, public law, organizational leadership. The degree for running public and nonprofit organizations rather than analyzing them.",
            },
            {
              name: "MIA / MIR: International Affairs",
              detail:
                "For foreign policy, security, and international careers. Coursework covers history, economics, and security factors in foreign policy, and one policy-careers guide calls MPA and MIA degrees broad and general with some specializations.",
            },
            {
              name: "Academic MA in Political Science",
              detail:
                "More a bridge to doctoral study than a destination: Pepperdine's program page describes research master's degrees as rarely terminal. Funding for these degrees was not sourced, so check each program.",
            },
            {
              name: "JD — Law School",
              detail:
                "Not a political-science degree. Political science supplied 12,693 law-school applicants (18.1%) in LSAC's 2015-16 data, more than any other major. A separate professional track, covered in the Law & Courts career path.",
            },
          ],
        },
        {
          title: "Funding Reality",
          icon: "⚖",
          items: [
            {
              name: "Funding is uneven",
              detail:
                "Not all master's programs in policy and international affairs fund their students. Where funding exists, it usually means a tuition waiver plus a stipend tied to a 10 to 20 hour a week assistantship. No tuition figures were sourced, so check each program's aid before applying.",
            },
            {
              name: "The fully-funded exceptions",
              detail:
                "ProFellow lists fully funded options including Princeton SPIA (MPP and MPA), Notre Dame (Global Affairs), NC State (International Studies), and Fordham (International Political Economy and Development). A policy-careers guide also cites generous funding at Princeton and Yale.",
            },
            {
              name: "Pre-career vs. mid-career tiers",
              detail:
                "Some programs require work experience: Princeton's one-year MPP asks for at least seven years, Rutgers' MPAP for five, and Harvard's MC/MPA is for established professionals. Know which tier you qualify for before you apply.",
            },
            {
              name: "The credential-signal caveat",
              detail:
                "To many employers, 'MPP vs. MPA vs. MIA' is alphabet soup. School prestige and network usually matter more than the exact letters after your name.",
            },
          ],
        },
        {
          title: "Skills & Specializations",
          icon: "◇",
          items: [
            {
              name: "Applied policy analysis & program evaluation",
              detail:
                "Cost-benefit analysis, statistics, and program evaluation applied to real programs and budgets. These sit at the professional core of the MPP curriculum.",
            },
            {
              name: "Quantitative methods, one level deeper",
              detail:
                "The MPP core typically includes statistics, advanced data analysis, and qualitative research. Harvard Kennedy School offers a STEM-designated Data and Research Methods track across its MPP, MPA, and MC/MPA programs.",
            },
            {
              name: "Regional & language depth",
              detail:
                "Princeton's SPIA notes that mastery of a foreign language is often needed for future careers, and it funds language study alongside the summer internship.",
            },
            {
              name: "Capstones and internships",
              detail:
                "Miami's MPP requires an internship or applied capstone project. Princeton's MPP requires a pre-term summer program and presenting at policy forums.",
            },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD & Research",
      years: "YRS ~8+",
      color: C.plum,
      intro:
        "The PhD is a 5 to 7 year research apprenticeship that most strong programs fund, with guarantees running from three to five years. Training runs coursework, then written comprehensive exams ('comps') in two or three subfields, then a dissertation prospectus defense, then an original dissertation, which some departments allow as three articles instead of a book. Then you enter the job market: in APSA's 2024-25 survey of 181 candidates, a little over a third took tenure-track jobs, nearly half took non-tenure-track roles, and about 13% went outside academia. Do not pay for this degree; do go in clear-eyed about the odds.",
      sections: [
        {
          title: "The Doctoral Path",
          icon: "§",
          items: [
            {
              name: "Coursework & field exams",
              detail:
                "Two to three years of seminars, then written comprehensive exams in a major and minor subfield. At George Washington, a student who does not earn a satisfactory pass on the second attempt at the major exam is terminated from the program.",
            },
            {
              name: "The methods sequence",
              detail:
                "Mizzou, for example, trains PhD students in quantitative techniques, formal modeling and game theory, and qualitative methods such as interviews and archival research.",
            },
            {
              name: "Prospectus & candidacy (ABD)",
              detail:
                "Defend a dissertation proposal and advance to candidacy. Berkeley expects this by the end of year three and Stanford by spring of year two. 'All but dissertation' is the long middle stretch of the degree.",
            },
            {
              name: "The dissertation",
              detail:
                "Albany lets students choose a conventional book-format dissertation or three article-format papers with an introduction and conclusion, and says both options take a similar amount of work.",
            },
            {
              name: "Teaching & publishing",
              detail:
                "Stanford requires at least three quarters of teaching by the end of year four. GW lists student publications in the American Political Science Review, International Organization, Perspectives on Politics, the Journal of Politics, and International Security.",
            },
          ],
        },
        {
          title: "Funding & the Job Market",
          icon: "⚖",
          items: [
            {
              name: "Funding is the norm",
              detail:
                "Funding guarantees run from three to four years (Albany) to five (GW), with a tuition waiver plus a stipend via teaching or research assistantships. An unfunded political-science PhD offer deserves extra scrutiny.",
            },
            {
              name: "Tenure-track scarcity",
              detail:
                "In APSA's 2024-25 placement survey of 181 job-market candidates from 31 institutions, a little over a third took tenure-track jobs, nearly half took non-tenure-track jobs, and about 13% went to non-academic roles.",
            },
            {
              name: "Prestige concentration",
              detail:
                "A 2025 paper citing 2004 data (Burris) reports that 34% of political science faculty came from the five top programs. That figure is two decades old, but a related study finds five US universities trained one in eight tenure-track faculty across fields.",
            },
            {
              name: "The predoc / postdoc holding pattern",
              detail:
                "GW's handbook tells students to plan for pre-doc and post-doc positions alongside the job market. APSA's 2024-25 survey puts the average postdoctoral fellow salary at $62,110.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "⌸",
          items: [
            {
              name: "Causal inference & experiments",
              detail:
                "Columbia's methods sequence includes causal inference, experimental methods, and Politics in the Lab, and Mizzou trains students in experiments and spatial econometrics.",
            },
            {
              name: "Text-as-data & computational social science",
              detail:
                "Machine learning and now LLMs applied to speeches, media, and records. A fast-growing subfield with its own live debates about measurement and validity.",
            },
            {
              name: "Democratic backsliding & authoritarianism",
              detail:
                "How democracies erode and autocracies endure. Review articles in PS: Political Science and Politics (2023) and the Annual Review of Political Science, and a Stanford CDDRL paper on a unified approach, show it is an active research area.",
            },
            {
              name: "Voting behavior, movements & conflict",
              detail:
                "Mizzou names research cores in race and ethnic politics, voting behavior, political movements, civil wars, and conflict management. GW dissertations cover the partisan gender gap, judicial politics in the Middle East, and media freedom in Turkey.",
            },
            {
              name: "Formal theory & political economy",
              detail:
                "Game-theoretic models of institutions, conflict, bargaining, and collective choice — the mathematical wing of the discipline.",
            },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Academia & Research",
      icon: "🏛️",
      color: C.plum,
      roles: ["Adjunct", "Assistant Prof", "Associate (tenured)", "Full Professor"],
      reality:
        "The default aspiration of PhD students and the hardest destination to reach. In APSA's 2024-25 survey, a little over a third of job-market candidates took tenure-track jobs and nearly half took non-tenure-track roles. Where you trained matters: a 2025 paper citing 2004 data found about a third of political science faculty came from five departments. Those who make it earn intellectual freedom and stability; the road there is five to seven years of doctoral work, often followed by temporary positions.",
      ai: "Unsourced estimate: LLMs already code political text at scale in published studies, which changes research methods more than it removes faculty jobs.",
      salary: "$78,990 assistant → $91,630 tenured associate → $114,750 full professor, average (APSA 2024–25; pay basis unclear)",
    },
    {
      path: "Government & Policy Analysis",
      icon: "📋",
      color: C.navy,
      roles: ["Research Assistant", "Policy Analyst", "Senior Analyst", "Policy Director"],
      reality:
        "The closest thing to a 'political scientist' job by title: agencies, nonprofits, lobbying groups, consulting firms, and think tanks. The BLS category looks lucrative (median $142,080) but is small: about 6,100 jobs, a projected 2% decline through 2035, roughly 400 openings a year, and a master's as the typical entry degree. A secondary source reports that more than half of positions are in Washington, D.C. Policy-analyst pay reported by PayScale runs about $50K to $97K.",
      ai: "Unsourced estimate: automates literature review and first-draft memos; the bar rises toward judgment, stakeholder synthesis, and recommendations someone will actually defend.",
      salary: "$50K–$97K policy-analyst range, $67,576 average (PayScale) → $142,080 BLS median; $83,350–$195,190 at the 10th–90th percentile (May 2025)",
    },
    {
      path: "Law & the Courts",
      icon: "⚖️",
      color: C.oxblood,
      roles: ["JD Student", "Associate Attorney", "Partner", "Judge / General Counsel"],
      reality:
        "Political science supplied more law-school applicants than any other major in LSAC's 2015-16 data. Law is a separate professional degree, not a poli-sci credential, and the payoff is wide: first-year pay at large firms is about $215K while public-interest lawyers start near $60K. About 93% of 2024 grads were employed within ten months, though a recent federal hiring freeze has narrowed the government-lawyer channel.",
      ai: "Automating document review and legal research, while creating fresh demand for lawyers fluent in AI regulation, data governance, and technology contracts.",
      salary: "~$60K public-interest start → $159,670 BLS median (May 2025) → $200K median first-year, $215K at firms over 700 lawyers (NALP 2025)",
    },
    {
      path: "Diplomacy & International Affairs",
      icon: "🌐",
      color: C.navy,
      roles: ["FSO Candidate", "Foreign Service Officer", "Program Officer", "Country Director"],
      reality:
        "The State Department's Foreign Service is the core government route. One career guide says officers must pass the Foreign Service Officer Test (FSOT), and State's entry rules place a bachelor's holder with up to five years of qualifying experience at FP-6, steps 5 to 10. ProFellow ties international affairs master's degrees to Foreign Service, diplomacy, and NGO careers. Intake size, selectivity, and posting conditions were not sourced, and federal hiring shifts with budgets (a federal hiring freeze has already narrowed government legal hiring).",
      ai: "Unsourced estimate: limited exposure in the core relationship-and-negotiation work; more in the analysis and reporting functions that support it.",
      salary: "$55K–$100K+ Foreign Service Officer (career guide; State's pay table not retrieved)",
    },
    {
      path: "Campaigns, Consulting & Lobbying",
      icon: "🗳️",
      color: C.oxblood,
      roles: ["Field Organizer", "Campaign Manager", "Political Consultant", "Gov-Relations Director"],
      reality:
        "The most direct 'politics' career. Campaign staff and legislative aides are BA-accessible, per one career guide, and field organizers earn a median of about $49,500. Corporate government-relations directors reach $90K to $130K, and Glassdoor reports an average of $160,945 for political consultants (self-reported). Campaign hours and lobbyist pay were not sourced.",
      ai: "Unsourced estimate: reshaping voter targeting, ad testing, and message optimization; the durable human edge is strategy, relationships, and message judgment.",
      salary: "$35,891–$59,545 field organizer (Salary.com) → $90K–$130K gov-relations director (career guide) → $160,945 average political consultant (Glassdoor, self-reported)",
    },
    {
      path: "Political Data & Polling",
      icon: "📊",
      color: C.pine,
      roles: ["Data Analyst", "Survey Methodologist", "Pollster / Data Scientist", "Analytics Director"],
      reality:
        "Campaigns, polling firms, media, and advocacy groups need people who can design surveys, model electorates, and turn numbers into strategy. One career guide reports record data-infrastructure spending in the 2024 cycle and $55K to $80K for political data analysts who know R or Python. The closest BLS occupation, survey researchers, is small (about 9,800 jobs), typically requires a master's, and is projected to shrink 5% through 2035.",
      ai: "LLMs now annotate and scale political text in published studies, and that literature stresses that validation and codebook design still need human judgment.",
      salary: "$55K–$80K political data analyst (career guide) → $69,460 BLS survey-researcher median; over $130,860 at the 90th percentile (May 2025)",
    },
    {
      path: "Journalism & Communications",
      icon: "📰",
      color: C.brass,
      roles: ["Reporter", "Political Correspondent", "Comms Director", "Press Secretary"],
      reality:
        "Political journalism and the communications shops of campaigns, agencies, and firms. BLS projects reporters and news analysts to shrink 6% through 2035, with a $62,200 median (under $36,240 at the 10th percentile, over $144,140 at the 90th) and a bachelor's as typical entry education. Public relations specialists, the closest BLS match for press and communications roles, have a $74,750 median and are projected to grow 2%.",
      ai: "Unsourced estimate: heavy exposure in content production and first drafts; the durable premium is on verification, sourcing, and trusted judgment.",
      salary: "$62,200 reporter median → $74,750 public relations specialist median (BLS, May 2025); senior communications pay not sourced",
    },
    {
      path: "Nonprofit & Advocacy",
      icon: "🤝",
      color: C.pine,
      roles: ["Program Coordinator", "Policy Associate", "Advocacy Director", "Executive Director"],
      reality:
        "Issue-advocacy groups, foundations, community organizations, and international development. Nonprofit program coordinator roles are BA-accessible, and one career guide puts BA holders at about $38K at the start and $52K to $93K by mid-to-late career. The closest BLS occupation for leadership, social and community service managers, has an $80,390 median, 7% projected growth, and a bachelor's as typical entry education with under five years of related experience.",
      ai: "Unsourced estimate: modest exposure, useful for research and outreach, with the human core in organizing, coalition-building, and persuasion.",
      salary: "~$38K start → $52K–$93K mid-to-late career (career guide) → $80,390 BLS service-manager median (May 2025)",
    },
  ],
};

export default function PoliticalScienceRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.brass : phase.color;

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
    borderRadius: 2,
    border: `1px solid ${C.line}`,
    background: C.paper,
    color: C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Public+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.brass}; outline-offset: 2px; }
        .rc-row:last-child { border-bottom: none; }
      `}</style>

      {/* header */}
      <header style={{ padding: "30px 20px 14px", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 11,
            color: accent,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Field Roadmap · The Record
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 700,
            fontSize: "clamp(32px, 6.5vw, 58px)",
            lineHeight: 1.0,
            margin: "10px 0 12px",
            letterSpacing: "-0.005em",
          }}
        >
          Political Science
        </h1>
        <p style={{ color: C.dim, fontSize: 15.5, maxWidth: 660, margin: 0, lineHeight: 1.55 }}>
          Five subfields, one flexible major, and eight destinations that look nothing alike — from
          the tenure-track long shot to the polling booth, priced from BLS and industry data, with AI
          exposure noted on each.
        </p>
      </header>

      {summary}

      {/* signature: roll-call board */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "8px 20px 4px" }}>
        <div
          style={{
            border: `1px solid ${C.line}`,
            background: C.paperUp,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 14px",
              borderBottom: `1px solid ${C.line}`,
              background: C.bg,
            }}
          >
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 10.5,
                letterSpacing: "0.16em",
                color: C.ink,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Roll Call · The Realities
            </span>
            <span style={{ fontFamily: font.mono, fontSize: 10, color: C.faint }}>
              AYE = in your favor · NAY = brace for it
            </span>
          </div>
          <div>
            {rollcall.filter(stat => !summary || !stat.inSummary).map((r) => {
              const good = r.vote === "aye";
              return (
                <div
                  key={r.label}
                  className="rc-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "10px 14px",
                    borderBottom: `1px solid ${C.lineSoft}`,
                  }}
                >
                  <span style={{ fontSize: 13.5, color: C.dim, minWidth: 0 }}>
                    {r.label}
                    {r.note && (
                      <span style={{ fontFamily: font.mono, fontSize: 10.5, color: C.faint }}>
                        {"  ("}
                        {r.note}
                        {")"}
                      </span>
                    )}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span
                      style={{
                        fontFamily: font.mono,
                        fontSize: 13,
                        fontWeight: 700,
                        color: C.ink,
                      }}
                    >
                      {r.value}
                    </span>
                    <span
                      style={{
                        fontFamily: font.mono,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: good ? C.pine : C.oxblood,
                        border: `1px solid ${good ? C.pine : C.oxblood}`,
                        borderRadius: 2,
                        padding: "2px 6px",
                        width: 40,
                        textAlign: "center",
                      }}
                    >
                      {good ? "AYE" : "NAY"}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "18px 20px 60px" }}>
        {/* phase + careers tabs */}
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
                  background: on ? p.color : C.paper,
                }}
              >
                <span style={{ fontWeight: 700 }}>{p.label}</span>
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: 10,
                    color: on ? "rgba(255,255,255,0.75)" : C.faint,
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
              border: `1px solid ${showCareers ? C.brass : C.line}`,
              color: showCareers ? "#fff" : C.dim,
              background: showCareers ? C.brass : C.paper,
              fontWeight: 700,
            }}
          >
            Career Paths
            <span
              style={{
                marginLeft: 8,
                fontSize: 10,
                color: showCareers ? "rgba(255,255,255,0.75)" : C.faint,
              }}
            >
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
                  fontWeight: 700,
                }}
              >
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 15, lineHeight: 1.6, maxWidth: 780 }}>
                {phase.intro}
              </p>
            </div>

            {/* section tabs */}
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
                      fontFamily: font.body,
                      fontWeight: 600,
                      fontSize: 13,
                      padding: "8px 13px",
                      border: `1px solid ${on ? phase.color : C.line}`,
                      color: on ? phase.color : C.dim,
                      background: on ? C.paperUp : "transparent",
                    }}
                  >
                    <span style={{ fontFamily: font.mono, marginRight: 7, color: on ? phase.color : C.faint }}>
                      {s.icon}
                    </span>
                    {s.title}
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
                      background: open ? C.paperUp : C.paper,
                      border: `1px solid ${open ? phase.color : C.line}`,
                      borderLeft: `3px solid ${open ? phase.color : C.line}`,
                      borderRadius: 3,
                      padding: "14px 16px",
                      cursor: "pointer",
                      color: C.ink,
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
                        }}
                      >
                        {open ? "–" : "+"}
                      </span>
                    </div>
                    {open && (
                      <p style={{ margin: "10px 0 0", color: C.dim, fontSize: 14, lineHeight: 1.6 }}>
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
            <div style={{ borderLeft: `3px solid ${C.brass}`, paddingLeft: 16, marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: C.brass,
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                  fontWeight: 700,
                }}
              >
                EIGHT DESTINATIONS · SALARY: BLS OEWS MAY 2025 + INDUSTRY SOURCES (NOTED)
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.ink, maxWidth: 780 }}>
                The same degree scatters widely. Figures anchor to BLS where a clean occupation code
                exists and to industry data where it doesn't; each card notes AI
                exposure, labeled when it is an estimate rather than a sourced finding. Tap a card for the reality behind the title.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 12,
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
                      background: open ? C.paperUp : C.paper,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderTop: `3px solid ${c.color}`,
                      borderRadius: 3,
                      padding: 16,
                      cursor: "pointer",
                      color: C.ink,
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 20 }} aria-hidden="true">
                        {c.icon}
                      </span>
                      <span
                        style={{
                          fontFamily: font.display,
                          fontWeight: 700,
                          fontSize: 17,
                          color: c.color,
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
                            borderRadius: 2,
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
                      <div style={{ marginTop: 12 }}>
                        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 1.6, color: C.dim }}>
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
                            fontSize: 12,
                            fontWeight: 700,
                            color: C.brass,
                            background: "#F3ECD9",
                            border: `1px solid #E3D3AE`,
                            borderRadius: 2,
                            padding: "8px 10px",
                            lineHeight: 1.4,
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
            marginTop: 36,
            paddingTop: 14,
            borderTop: `1px solid ${C.line}`,
            fontFamily: font.mono,
            fontSize: 11,
            color: C.faint,
            letterSpacing: "0.06em",
            lineHeight: 1.6,
          }}
        >
          TAP ANY ITEM OR CARD TO EXPAND · SALARY SOURCES: BLS OEWS MAY 2025, APSA, NALP, SALARY.COM,
          GLASSDOOR, PAYSCALE, EXTERN · COMPILED NOV 2026
        </footer>
      </main>
    </div>
  );
}
