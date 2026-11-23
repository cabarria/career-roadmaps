import { useState } from "react";

/* LAW ROADMAP: the yellow legal pad
   pad canary #F8EFAE, card paper #FFFEF4, rule blue #A9C3E6, margin red #CF4037
   ink #16203A, ballpoint blue #1F4FB5 (pre-law), margin red #B4302A (JD),
   green ink #1E6B52 (advanced), violet ink #5B2E8C (careers)
   display: Besley (Clarendon, the face of old law-office letterheads), body: IBM Plex Sans
   US figures: NALP, BLS, ABA, LSAC, NCBE. Compiled November 2026. */

const C = {
  pad: "#F8EFAE",
  padDeep: "#F1E590",
  card: "#FFFEF4",
  rule: "#A9C3E6",
  margin: "#CF4037",
  binding: "#5E1C19",
  ink: "#16203A",
  dim: "#46506B",
  faint: "#6E7690",
  line: "#DCD08A",
  blue: "#1F4FB5",
  red: "#B4302A",
  green: "#1E6B52",
  violet: "#5B2E8C",
};

const font = {
  display: "'Besley', Georgia, serif",
  body: "'IBM Plex Sans', system-ui, sans-serif",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Pre-law",
      years: "Years 1–4",
      color: C.blue,
      intro:
        "In the United States, law is a graduate degree. You earn a bachelor's in any subject, then apply to a three-year JD program. There is no required pre-law major, and admission runs mostly on two numbers: your GPA and your LSAT score. The pool is the most crowded in 15 years: 82,487 people applied in the 2026 cycle, up 7.9% in a year, with the biggest growth in the highest score bands. (In most other countries, law is an undergraduate degree. This roadmap follows the US path.)",
      sections: [
        {
          title: "Choosing a major",
          icon: "§",
          items: [
            {
              name: "There is no required major",
              detail:
                "Law schools admit from every discipline and the ABA recommends no particular one. Political science is the most common choice at roughly 18% of applicants, which also makes it the hardest major to stand out in.",
            },
            {
              name: "Economics, philosophy, and history test well",
              detail:
                "In LSAC's applicant data these majors post some of the highest average LSAT scores and admission rates, while criminal justice and generic pre-law programs sit near the bottom. Some of that is self-selection, but the training in argument and evidence is real.",
            },
            {
              name: "Reading-heavy and writing-heavy courses",
              detail:
                "Whatever the major, load up on courses that assign dense texts and graded analytical papers. Law school is three years of exactly that, and admissions readers look for it on the transcript.",
            },
            {
              name: "Logic, statistics, and economics",
              detail:
                "Formal logic maps directly onto the LSAT. Statistics and microeconomics pay off later in antitrust, corporate work, damages, and any practice that leans on expert evidence.",
            },
            {
              name: "A science or engineering degree for patent law",
              detail:
                "The patent bar is the one corner of law with a hard undergraduate requirement: the USPTO only admits people with qualifying technical training. A STEM degree plus a JD is a small, well-paid pipeline.",
            },
            {
              name: "Protect the GPA from the first semester",
              detail:
                "LSAC recalculates your GPA from every college transcript you have ever earned, including transfer and summer credits. A weak first year cannot be hidden, and a later master's degree does not replace it.",
            },
          ],
        },
        {
          title: "Skills to build",
          icon: "¶",
          items: [
            {
              name: "Close reading of difficult text",
              detail:
                "Cases, statutes, and contracts reward readers who notice what a sentence does not say. Practice on primary sources rather than summaries.",
            },
            {
              name: "Writing a position and defending it",
              detail:
                "Legal writing is structured argument: issue, rule, application, conclusion. Any course that makes you take a side and answer objections is preparation.",
            },
            {
              name: "Speaking on your feet",
              detail:
                "Debate, mock trial, and moot court build the habit of answering a hostile question in real time, which is what a cold call or an oral argument is.",
            },
            {
              name: "Research and careful citation",
              detail:
                "A senior thesis or a research assistantship teaches you to find authority, weigh it, and cite it exactly. Lawyers are judged on sourcing more than almost any other profession.",
            },
            {
              name: "Sustained work under deadline",
              detail:
                "Most first-year law courses are graded on one final exam. The students who do well have already learned to study steadily for months without feedback.",
            },
          ],
        },
        {
          title: "LSAT and applications",
          icon: "✎",
          items: [
            {
              name: "The LSAT, scored 120 to 180",
              detail:
                "Since August 2024 the test has two scored Logical Reasoning sections and one Reading Comprehension section, with the old logic games removed. Starting with the August 2026 test, US takers sit it in person at test centers.",
            },
            {
              name: "Score inflation at the top",
              detail:
                "The 2026 cycle again grew fastest in the 165 to 180 band. A score that won scholarships three years ago may now only clear the median, so plan for more than one attempt.",
            },
            {
              name: "The GRE as an alternative",
              detail:
                "Every ABA school accepts the LSAT. Only some accept the GRE, and schools still see any LSAT score you have on file, so the GRE mainly helps applicants also weighing other graduate programs.",
            },
            {
              name: "Apply early in a rolling cycle",
              detail:
                "Applications open in September and seats and scholarship money are handed out as files arrive. The same numbers do better in October than in February.",
            },
            {
              name: "Scholarships are negotiable discounts",
              detail:
                "Few students pay sticker price, and competing offers can be used as leverage. Read the renewal terms: a scholarship conditioned on class rank can vanish after the first-year curve.",
            },
            {
              name: "Working first is normal",
              detail:
                "Many admitted students have a year or more of work behind them. Time as a paralegal or in a public defender's office also tests whether you like the work before you borrow for it.",
            },
          ],
        },
        {
          title: "Tools and AI",
          icon: "⌘",
          items: [
            {
              name: "LSAC LawHub",
              detail:
                "The official source of real past LSATs in the actual test interface. Timed practice on real tests is the core of every serious prep plan.",
            },
            {
              name: "ABA 509 reports and employment summaries",
              detail:
                "Every accredited school must publish its admissions numbers, scholarship retention, bar passage, and job outcomes in a standard format. These are the documents to compare schools with, not rankings alone.",
            },
            {
              name: "AI as a drilling partner, not a ghostwriter",
              detail:
                "Language models are useful for explaining why a wrong LSAT answer is wrong. For personal statements, check each school's policy first, since several require you to certify the writing is your own.",
            },
          ],
        },
        {
          title: "Beyond the classroom",
          icon: "★",
          items: [
            {
              name: "Mock trial, moot court, and debate",
              detail:
                "The closest thing to practice you can get as an undergraduate, and a dependable signal of interest on an application.",
            },
            {
              name: "Court, law office, or legal aid internships",
              detail:
                "Seeing ordinary practice up close, such as arraignments, client intake, and document work, is the best check on a picture of law drawn from television.",
            },
            {
              name: "Pre-law advising and Phi Alpha Delta",
              detail:
                "A campus pre-law adviser knows how your school's applicants have fared. The pre-law fraternity offers LSAT resources and contact with practicing lawyers.",
            },
            {
              name: "A senior thesis",
              detail:
                "One long, supervised piece of research gives you a writing sample and a professor who can write a detailed recommendation.",
            },
          ],
        },
      ],
    },
    {
      id: "jd",
      label: "Law school (JD)",
      years: "Years 5–7",
      color: C.red,
      intro:
        "The Juris Doctor is three years at an ABA-accredited school and it is the degree that opens the bar exam in every state. The first year is a fixed set of doctrinal courses graded on a curve. Recruiting for the highest-paying jobs now starts in the first semester. The second and third years add clinics, journals, and electives, and then comes the bar. Of the Class of 2025, 92.8% had jobs ten months out and the median salary reached a record $100,000, but very few graduates actually earn near the median.",
      sections: [
        {
          title: "First-year courses",
          icon: "§",
          items: [
            {
              name: "Contracts",
              detail:
                "How enforceable promises are formed, interpreted, and broken, and what the injured side can recover.",
            },
            {
              name: "Torts",
              detail:
                "Civil wrongs: negligence, intentional harms, product liability, and how the law decides who pays for an injury.",
            },
            {
              name: "Civil Procedure",
              detail:
                "The rules of a lawsuit from filing to judgment, including which court can hear a case. Widely considered the most technical first-year course.",
            },
            {
              name: "Property",
              detail:
                "Ownership, transfers, leases, and land use. Home of the rule against perpetuities, a famous first-year stumbling block.",
            },
            {
              name: "Criminal Law",
              detail:
                "The elements of crimes, mental states, and defenses, and the limits on what the state may punish.",
            },
            {
              name: "Constitutional Law",
              detail:
                "The structure of government and individual rights, taught through Supreme Court opinions that are still being rewritten.",
            },
            {
              name: "Legal Research and Writing",
              detail:
                "Memos, briefs, and citation in a small class with real feedback. It carries few credits and produces the writing sample every employer asks for.",
            },
            {
              name: "The curve and the cold call",
              detail:
                "Most first-year grades come from a single final exam ranked against classmates on a mandatory curve, and class runs on the Socratic method. First-year rank drives journal membership, clerkships, and large-firm offers.",
            },
          ],
        },
        {
          title: "Upper-level work",
          icon: "¶",
          items: [
            {
              name: "Evidence and Professional Responsibility",
              detail:
                "The near-universal upper-level courses. Professional Responsibility is required by the ABA and prepares you for the MPRE ethics exam.",
            },
            {
              name: "Bar-tested and business courses",
              detail:
                "Business Associations, Federal Income Tax, Administrative Law, and Criminal Procedure are the common core for both the bar exam and most practice areas.",
            },
            {
              name: "Clinics and externships",
              detail:
                "Representing real clients under supervision. The ABA currently requires six experiential credits, and a contested proposal to double that to twelve has been under review since 2025.",
            },
            {
              name: "Law review and journals",
              detail:
                "Student-edited journals select members by grades and a writing competition. Membership is still a standard screen for clerkships and academic jobs.",
            },
            {
              name: "Moot court and trial advocacy",
              detail:
                "Competitive appellate argument and simulated trials. The main way future litigators show skill before they have a case of their own.",
            },
            {
              name: "Picking a practice area",
              detail:
                "Electives and certificates in tax, intellectual property, health, environmental, or international law. Summer jobs usually decide a specialty more than coursework does.",
            },
          ],
        },
        {
          title: "Recruiting",
          icon: "➔",
          items: [
            {
              name: "Large-firm hiring has moved into first year",
              detail:
                "Firms now contact students as early as the fall of first year and many fill second-summer classes on one semester of grades. In the 2025 cycle only about 20% of summer offers came through school-run interview programs.",
            },
            {
              name: "The summer associate pipeline",
              detail:
                "A second-summer job at a large firm normally ends in a full-time offer, so the real hiring decision is made about two years before graduation.",
            },
            {
              name: "Judicial clerkships",
              detail:
                "One or two years working for a judge after graduation, applied for through the federal OSCAR system or directly to state courts. A federal clerkship raises your value for litigation, government, and teaching jobs.",
            },
            {
              name: "Public interest and government hiring runs later",
              detail:
                "Prosecutors, defenders, and nonprofits hire in third year or after the bar, often through fellowships or honors programs. Federal hiring disruptions narrowed this channel for the Class of 2025.",
            },
            {
              name: "Where you study sets the range",
              detail:
                "Large-firm and federal clerkship placement differs enormously between schools. Check each school's ABA employment summary for the share of graduates in bar-required jobs and in firms of 500 or more lawyers.",
            },
          ],
        },
        {
          title: "Paying for it",
          icon: "$",
          items: [
            {
              name: "Sticker prices",
              detail:
                "Average tuition and fees run about $56,000 a year at private schools and $33,000 at public schools, before living costs. Average total cost of attendance was already about $217,000 in 2023–24.",
            },
            {
              name: "The new federal loan ceiling",
              detail:
                "Grad PLUS loans ended for new borrowers on July 1, 2026. Law students can now borrow $50,000 a year in federal loans, $200,000 lifetime, which works out to $150,000 across a three-year JD. The rest must come from scholarships, savings, or private loans.",
            },
            {
              name: "Debt against a two-peaked salary curve",
              detail:
                "The same debt is manageable on $225,000 and crushing on $70,000. Decide which peak a school realistically leads to before deciding how much to borrow for it.",
            },
            {
              name: "Public Service Loan Forgiveness and LRAPs",
              detail:
                "PSLF forgives remaining federal loans after ten years of qualifying payments in government or nonprofit work, and many schools add their own repayment assistance. Repayment plan rules changed in 2026, so check current terms rather than older guides.",
            },
          ],
        },
        {
          title: "Bar and licensure",
          icon: "⚖",
          items: [
            {
              name: "The bar exam",
              detail:
                "A two-day licensing test taken after graduation, usually after eight to ten weeks of full-time study. First-time takers from ABA schools passed at 84.1% in 2025, and about 92% of 2023 graduates had passed within two years.",
            },
            {
              name: "The NextGen bar exam",
              detail:
                "A redesigned exam that tests skills such as research, drafting, and client counseling alongside doctrine. It debuted in July 2026 in ten jurisdictions, and the old exam is retired after February 2028. Students starting now will take the new one almost everywhere.",
            },
            {
              name: "States that go their own way",
              detail:
                "Not every state follows the national exam. Nevada is launching its own three-part process, Louisiana tests its civil-law system, and a few states now offer supervised-practice routes to a license.",
            },
            {
              name: "The MPRE",
              detail:
                "A separate multiple-choice exam on professional ethics, required almost everywhere and usually taken during law school.",
            },
            {
              name: "Character and fitness",
              detail:
                "A background review covering criminal history, finances, and academic discipline. Candor matters most: problems arise more often from omissions than from the underlying events.",
            },
            {
              name: "The 75% rule",
              detail:
                "ABA accreditation requires that at least 75% of a school's graduates pass a bar within two years. Schools near that line are a warning sign for applicants.",
            },
          ],
        },
        {
          title: "Tools and AI",
          icon: "⌘",
          items: [
            {
              name: "Westlaw and Lexis",
              detail:
                "The two research databases every lawyer uses, free to students. Both now ship AI assistants (CoCounsel on Westlaw, Protégé on Lexis) that answer from their own case databases.",
            },
            {
              name: "The Bluebook",
              detail:
                "The citation manual that governs law reviews and most court filings. Tedious, but exact citation is part of how legal writing is judged.",
            },
            {
              name: "E-discovery and contract platforms",
              detail:
                "Relativity and Everlaw for reviewing millions of documents in litigation, and tools like Kira and Luminance for contract analysis in deals.",
            },
            {
              name: "Generative AI is now ordinary at firms",
              detail:
                "In ILTA's 2026 survey, 94% of responding firms were using or exploring generative AI, up from 80% a year earlier. Microsoft Copilot led at 76%, with CoCounsel, Claude, and Harvey each in the low-to-mid 40s.",
            },
            {
              name: "Deployment still trails the headlines",
              detail:
                "Many of those firms are piloting rather than relying on the tools, and usage by individual lawyers is uneven. The first tasks to change are document review, first drafts, and research memos, which are the traditional junior associate workload.",
            },
            {
              name: "You are responsible for every citation",
              detail:
                "Courts have sanctioned lawyers for filing briefs with cases an AI tool invented. The durable skill is checking output against the source, and the new bar exam tests that kind of verification.",
            },
          ],
        },
      ],
    },
    {
      id: "advanced",
      label: "Advanced study",
      years: "Year 8 onward",
      color: C.green,
      intro:
        "Law is unusual: the JD is the terminal degree for practice, and most lawyers never study further. Degrees beyond it serve narrow purposes. The LLM is a one-year specialization or a bridge for lawyers trained abroad, the SJD is a research doctorate taken mostly by international scholars, and a PhD in another discipline has become the common extra credential for people who want to teach law.",
      sections: [
        {
          title: "Degrees after the JD",
          icon: "§",
          items: [
            {
              name: "LLM for specialization",
              detail:
                "A one-year master's for people who already hold a law degree. For US graduates the tax LLM, especially from NYU or Georgetown, is the one that firms reliably value. Most others add cost without changing job prospects.",
            },
            {
              name: "LLM for foreign-trained lawyers",
              detail:
                "The most common use of the degree. Paired with a first law degree from abroad, it can qualify you for the bar exam in a limited set of states, most notably New York and California. It guarantees nothing, so confirm with the state bar before enrolling.",
            },
            {
              name: "SJD or JSD",
              detail:
                "The research doctorate in law: three to five years and a dissertation, usually entered through an LLM. Small programs, largely filled by scholars who plan to teach outside the US.",
            },
            {
              name: "JD plus a PhD",
              detail:
                "Economics, history, political science, or philosophy alongside the JD, often in a funded joint program. Now the strongest route into US law teaching.",
            },
            {
              name: "Joint professional degrees",
              detail:
                "JD/MBA and JD/MPP programs add a year and suit careers in business leadership or policy more than everyday practice.",
            },
            {
              name: "Master of Legal Studies",
              detail:
                "A degree for non-lawyers such as compliance or HR staff who work with regulation. It does not qualify anyone to sit for the bar.",
            },
          ],
        },
        {
          title: "The path to teaching",
          icon: "¶",
          items: [
            {
              name: "The credential bar has risen",
              detail:
                "Among reported entry-level tenure-track hires in 2026, about 66% had held a fellowship, about 58% had a higher degree beyond the JD, and about 41% had clerked. In 2011 only about a quarter of new hires held an advanced degree.",
            },
            {
              name: "Fellowships and visiting assistant professorships",
              detail:
                "One or two years at a law school with time to write and some teaching. In practice this is now the standard entry step.",
            },
            {
              name: "The job-talk paper",
              detail:
                "Hiring turns on published scholarship and one polished paper presented to the faculty. Candidates are expected to arrive with a research agenda, not just strong grades.",
            },
            {
              name: "Student-edited law reviews",
              detail:
                "Legal scholarship is mostly published in journals run by second-year and third-year students, with submissions sent to dozens of journals at once. It works unlike peer review in any other field.",
            },
            {
              name: "Clinical and legal writing faculty",
              detail:
                "A separate track that values practice experience over publications. It often comes with lower pay and weaker job security than doctrinal posts.",
            },
          ],
        },
        {
          title: "Research frontiers",
          icon: "✦",
          items: [
            {
              name: "AI and the law",
              detail:
                "Liability for automated decisions, copyright in training data and outputs, and whether software may deliver legal services without a licensed lawyer.",
            },
            {
              name: "Administrative law after Chevron",
              detail:
                "Since the Supreme Court ended judicial deference to agency interpretations in 2024, the question of who decides what a statute means is being reworked across environmental, financial, and health regulation.",
            },
            {
              name: "Access to justice and regulatory reform",
              detail:
                "Most people with civil legal problems face them without a lawyer. States are testing licensed paraprofessionals, nonlawyer ownership of firms, and court-run online tools.",
            },
            {
              name: "Privacy and data governance",
              detail:
                "A patchwork of state privacy statutes, cross-border data rules, and biometric and health data questions that did not exist a decade ago.",
            },
            {
              name: "Empirical legal studies",
              detail:
                "Treating court records, contracts, and enforcement actions as data: who wins, what sentences are imposed, and what contract terms actually do.",
            },
          ],
        },
        {
          title: "Methods and tools",
          icon: "⌘",
          items: [
            {
              name: "Doctrinal analysis",
              detail:
                "The traditional method: reading cases and statutes closely to explain, criticize, or reorganize an area of law.",
            },
            {
              name: "Statistics and causal inference",
              detail:
                "R or Stata applied to docket data and sentencing records. This is the main reason PhD training has become valuable in hiring.",
            },
            {
              name: "Law and economics",
              detail:
                "Modeling legal rules as incentives. Dominant in corporate, antitrust, and tort scholarship.",
            },
            {
              name: "Historical and archival work",
              detail:
                "Legal history has gained weight as courts lean more heavily on history and tradition in constitutional cases.",
            },
            {
              name: "Language models as research instruments",
              detail:
                "Used to classify thousands of opinions or contract clauses that once needed teams of student coders. Results count only when validated against human-coded samples.",
            },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "Large law firms",
      icon: "🏙️",
      color: C.violet,
      roles: ["Summer associate", "Associate", "Counsel", "Partner"],
      reality:
        "The right-hand peak of the salary curve. Firms of more than 500 lawyers recruit heavily from a small set of schools and from the top of the class elsewhere, mostly on first-year grades. Hours are long, most associates leave within several years, and partnership is a narrow funnel. It is also the fastest way to pay off debt and the standard launch point for in-house and senior government roles.",
      salary: "$225K to $235K first year, rising to $455K base by year eight on the 2026 market scale. Not every large firm matches it.",
    },
    {
      path: "Small and midsize firms",
      icon: "🏛️",
      color: C.blue,
      roles: ["Associate", "Senior associate", "Partner", "Solo practitioner"],
      reality:
        "Where the largest share of lawyers actually work: family law, criminal defense, personal injury, real estate, estates, immigration, and local business. Entry is far more open than at large firms and clients arrive sooner, but starting pay is modest and income depends on building your own book of business. About one lawyer in eight is self-employed.",
      salary: "About $80K median at firms of 1 to 10 lawyers (Class of 2024). $159,670 median for all US lawyers (BLS, May 2025).",
    },
    {
      path: "Government and prosecution",
      icon: "🦅",
      color: C.red,
      roles: ["Assistant district attorney", "Agency attorney", "JAG officer", "US attorney"],
      reality:
        "Prosecutors' offices, state attorneys general, city law departments, federal agencies, and the military's JAG corps. New lawyers get courtroom time and responsibility years before their firm peers. Pay is steady, the work qualifies for Public Service Loan Forgiveness, and federal entry-level hiring has been disrupted since 2025, so state and local offices are currently the more dependable doors.",
      salary: "$81,000 median starting salary in government jobs (NALP, Class of 2025). Pay then follows published government scales, with steady raises.",
    },
    {
      path: "Public interest and public defense",
      icon: "🤝",
      color: C.green,
      roles: ["Staff attorney", "Public defender", "Supervising attorney", "Legal director"],
      reality:
        "Legal aid offices, public defenders, civil rights and advocacy organizations. The most prestigious nonprofits are as selective as large firms, often hiring through competitive fellowships. Caseloads are heavy and salaries grow slowly, so loan forgiveness and school repayment programs usually decide whether the path is affordable.",
      salary: "$64K to $70K median at entry, depending on employer type (NALP 2023 survey). Public defenders reach about $107K at 11 to 15 years.",
    },
    {
      path: "Clerkships and the bench",
      icon: "⚖️",
      color: C.violet,
      roles: ["Judicial law clerk", "Staff attorney", "Magistrate or administrative law judge", "Judge"],
      reality:
        "A clerkship is a one-year or two-year job researching and drafting for a judge straight out of school. Federal clerkships are highly competitive and act as a career accelerator. Becoming a judge comes much later, typically after 10 to 20 years of practice, through election or appointment depending on the state. Federal judgeships require presidential nomination and Senate confirmation.",
      salary: "About $75K to $87K for a new federal clerk, by location. $117,860 median for administrative law judges. $249,900 for a federal district judge (2026).",
    },
    {
      path: "In-house counsel and compliance",
      icon: "🏢",
      color: C.blue,
      roles: ["Counsel", "Senior counsel", "Associate general counsel", "General counsel"],
      reality:
        "Lawyers employed directly by a company, bank, hospital, or university. Most positions go to lawyers with three to seven years at a firm, so this is usually a second job rather than a first. Hours are more predictable and the work is closer to business decisions. Compliance roles in finance, health care, and privacy are a related route that does not always require bar admission.",
      salary: "About $200K to $220K median base for senior counsel. General counsel median $500K (private) to $739K (public) in base plus bonus. Compliance officers: $80,730 median.",
    },
    {
      path: "Legal academia",
      icon: "🎓",
      color: C.green,
      roles: ["Fellow or visiting assistant professor", "Assistant professor", "Tenured professor", "Dean"],
      reality:
        "A very small market: roughly 150 entry-level tenure-track hires were reported nationwide in 2026, and they come overwhelmingly from a handful of law schools. Most had a fellowship, a doctorate, or both, plus published articles. Law professors are paid better than most academics, which is part of why the competition is so severe.",
      salary: "About $154K average (Payscale 2026), with wide variation. One top public school lists $196K to $322K for entry-level tenure-track posts.",
    },
    {
      path: "Legal operations, technology, and dispute resolution",
      icon: "🧭",
      color: C.red,
      roles: ["Legal operations specialist", "E-discovery or legal tech manager", "Mediator or arbitrator", "Head of legal operations"],
      reality:
        "Jobs where a JD helps but a license is not the point: running the budget and technology of a legal department, building and selling legal software, managing document review, or resolving disputes outside court. Demand is rising as firms and companies adopt AI tools. Full-time mediation and arbitration work is scarce and usually comes after a long career in practice or on the bench.",
      salary: "$75K to $120K for legal operations specialists and managers (Robert Half 2026). $75,530 median for mediators and arbitrators. Heads of legal operations averaged $226K (2025).",
    },
  ],
};

/* The salary curve every law student is shown in week one.
   Schematic only: shape follows NALP's Class of 2025 description, not plotted data. */
function SalaryCurve() {
  const ticks = [
    { x: 35, t: "$50K" },
    { x: 111, t: "$100K" },
    { x: 188, t: "$150K" },
    { x: 264, t: "$200K" },
    { x: 340, t: "$250K" },
  ];
  return (
    <figure
      style={{
        margin: "24px 0 0",
        maxWidth: 560,
        background: C.card,
        border: `1.5px solid ${C.line}`,
        borderRadius: 6,
        padding: "14px 14px 12px",
      }}
    >
      <svg
        viewBox="0 0 360 172"
        role="img"
        aria-label="Sketch of the two-peaked distribution of new lawyer salaries: a broad peak around 75 to 100 thousand dollars and a sharp spike at 225 thousand dollars, with the 100 thousand dollar median in the gap between them."
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <line x1="20" y1="140" x2="344" y2="140" stroke={C.ink} strokeWidth="1.2" />
        {ticks.map((k) => (
          <g key={k.t}>
            <line x1={k.x} y1="140" x2={k.x} y2="145" stroke={C.ink} strokeWidth="1" />
            <text x={k.x} y="158" textAnchor="middle" fontSize="10.5" fill={C.dim} fontFamily={font.body}>
              {k.t}
            </text>
          </g>
        ))}
        <line x1="111" y1="140" x2="111" y2="92" stroke={C.margin} strokeWidth="1.2" strokeDasharray="3 3" />
        <path
          className="curve"
          d="M20,139 C50,139 60,46 84,46 C112,46 122,112 155,124 C200,134 268,138 288,138 C297,138 298,22 302,22 C306,22 307,138 316,139 L340,139"
          fill="none"
          stroke={C.blue}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
        <text x="84" y="36" textAnchor="middle" fontSize="11" fontWeight="600" fill={C.blue} fontFamily={font.body}>
          $75K to $100K
        </text>
        <text x="296" y="14" textAnchor="end" fontSize="11" fontWeight="600" fill={C.blue} fontFamily={font.body}>
          $225K
        </text>
        <text x="158" y="106" fontSize="10.5" fontWeight="600" fill={C.red} fontFamily={font.body}>
          median $100K
        </text>
      </svg>
      <figcaption style={{ fontSize: 14, lineHeight: 1.55, color: C.dim, marginTop: 8 }}>
        Starting salaries for new lawyers have two peaks and a gap between them. Government, public
        interest, and small-firm jobs cluster on the left. Firms of more than 500 lawyers pay the
        spike on the right. Almost nobody earns the median. Sketch based on NALP's Class of 2025
        findings, not drawn to scale.
      </figcaption>
    </figure>
  );
}

export default function LawRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.violet : phase.color;

  const selectPhase = (id) => {
    setShowCareers(false);
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
  };

  const phaseTab = (on, color) => ({
    fontFamily: font.body,
    fontSize: 15,
    fontWeight: 600,
    padding: "11px 16px 10px",
    minHeight: 46,
    border: `1.5px solid ${on ? color : C.line}`,
    borderBottom: `4px solid ${on ? color : C.line}`,
    borderRadius: "8px 8px 0 0",
    background: on ? C.card : "transparent",
    color: on ? color : C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    textAlign: "left",
  });

  return (
    <div style={{ minHeight: "100vh", background: C.pad, color: C.ink, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Besley:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        .law-scroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .law-scroll::-webkit-scrollbar { display: none; }
        .law-root button:focus-visible { outline: 3px solid ${C.ink}; outline-offset: 2px; }
        .law-pad {
          background-color: ${C.pad};
          background-image:
            linear-gradient(90deg, transparent 0, transparent 30px, ${C.margin} 30px, ${C.margin} 31.5px, transparent 31.5px, transparent 35px, ${C.margin} 35px, ${C.margin} 36.5px, transparent 36.5px),
            repeating-linear-gradient(180deg, transparent 0, transparent 31px, ${C.rule} 31px, ${C.rule} 32px);
        }
        .law-curve .curve { stroke-dasharray: 1; stroke-dashoffset: 1; animation: lawdraw 1.6s ease-out .2s forwards; }
        @keyframes lawdraw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .law-curve .curve { animation: none; stroke-dashoffset: 0; }
        }
        @media (min-width: 720px) {
          .law-pad-inner { padding-left: 64px !important; }
        }
      `}</style>

      <div className="law-root">
        {/* the pad: binding strip, ruled sheet, title written on the lines */}
        <div style={{ height: 22, background: C.binding }} aria-hidden="true" />
        <header className="law-pad" style={{ borderBottom: `1.5px solid ${C.line}` }}>
          <div
            className="law-pad-inner law-curve"
            style={{ maxWidth: 1080, margin: "0 auto", padding: "32px 20px 28px 50px" }}
          >
            <h1
              style={{
                fontFamily: font.display,
                fontWeight: 800,
                fontSize: "clamp(56px, 15vw, 112px)",
                lineHeight: 1,
                margin: "0 0 10px",
                letterSpacing: "-0.02em",
                color: C.ink,
              }}
            >
              Law
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: "32px",
                margin: 0,
                maxWidth: 600,
                color: C.ink,
              }}
            >
              From a first college course to the bar exam and the eight kinds of work beyond it,
              with the costs and odds written in the margin.
            </p>
            <SalaryCurve />
          </div>
        </header>

        <main style={{ maxWidth: 1080, margin: "0 auto", padding: "22px 16px 56px" }}>
          <nav className="law-scroll" aria-label="Stages" style={{ borderBottom: `1.5px solid ${C.line}` }}>
            {data.phases.map((p) => {
              const on = !showCareers && activePhase === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => selectPhase(p.id)}
                  aria-pressed={on}
                  style={phaseTab(on, p.color)}
                >
                  {p.label}
                  <span style={{ display: "block", fontSize: 12.5, fontWeight: 400, color: on ? C.dim : C.faint }}>
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
              aria-pressed={showCareers}
              style={phaseTab(showCareers, C.violet)}
            >
              Career paths
              <span
                style={{ display: "block", fontSize: 12.5, fontWeight: 400, color: showCareers ? C.dim : C.faint }}
              >
                Eight destinations
              </span>
            </button>
          </nav>

          {!showCareers ? (
            <section style={{ paddingTop: 22 }}>
              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: 16,
                  lineHeight: 1.65,
                  maxWidth: 720,
                  borderLeft: `3px double ${accent}`,
                  paddingLeft: 16,
                }}
              >
                {phase.intro}
              </p>

              <div className="law-scroll" style={{ marginBottom: 14 }}>
                {phase.sections.map((s, i) => {
                  const on = activeSection === i;
                  return (
                    <button
                      key={s.title}
                      onClick={() => {
                        setActiveSection(i);
                        setExpandedItem(null);
                      }}
                      aria-pressed={on}
                      style={{
                        fontFamily: font.body,
                        fontSize: 14.5,
                        fontWeight: on ? 600 : 500,
                        padding: "9px 14px",
                        minHeight: 42,
                        borderRadius: 999,
                        border: `1.5px solid ${on ? phase.color : C.line}`,
                        background: on ? phase.color : "transparent",
                        color: on ? "#fff" : C.dim,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      <span aria-hidden="true" style={{ marginRight: 7 }}>
                        {s.icon}
                      </span>
                      {s.title}
                    </button>
                  );
                })}
              </div>

              <div
                style={{
                  background: C.card,
                  border: `1.5px solid ${C.line}`,
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                {phase.sections[activeSection].items.map((item, i) => {
                  const open = expandedItem === i;
                  const last = i === phase.sections[activeSection].items.length - 1;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setExpandedItem(open ? null : i)}
                      aria-expanded={open}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        background: open ? "#FFFBE0" : "transparent",
                        border: "none",
                        borderBottom: last ? "none" : `1px solid ${C.rule}`,
                        borderLeft: `3px double ${open ? phase.color : C.margin}`,
                        padding: "15px 16px 15px 18px",
                        cursor: "pointer",
                        color: C.ink,
                        fontFamily: font.body,
                      }}
                    >
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                        <span style={{ fontFamily: font.display, fontWeight: 600, fontSize: 17, lineHeight: 1.3 }}>
                          {item.name}
                        </span>
                        <span
                          aria-hidden="true"
                          style={{ fontSize: 20, lineHeight: 1, color: open ? phase.color : C.faint, flexShrink: 0 }}
                        >
                          {open ? "−" : "+"}
                        </span>
                      </span>
                      {open && (
                        <span
                          style={{
                            display: "block",
                            marginTop: 9,
                            fontSize: 15,
                            lineHeight: 1.62,
                            color: C.dim,
                            maxWidth: 680,
                          }}
                        >
                          {item.detail}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          ) : (
            <section style={{ paddingTop: 22 }}>
              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: 16,
                  lineHeight: 1.65,
                  maxWidth: 720,
                  borderLeft: `3px double ${C.violet}`,
                  paddingLeft: 16,
                }}
              >
                One license, very different lives. Starting pay ranges from about $64,000 in legal
                aid to $235,000 at the largest firms, and the gap is set mostly by school and
                first-year grades. Salaries are US figures from NALP, the Bureau of Labor
                Statistics, and industry surveys.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 12,
                  alignItems: "start",
                }}
              >
                {data.careers.map((c, i) => {
                  const open = expandedCareer === i;
                  return (
                    <button
                      key={c.path}
                      onClick={() => setExpandedCareer(open ? null : i)}
                      aria-expanded={open}
                      style={{
                        textAlign: "left",
                        background: C.card,
                        border: `1.5px solid ${open ? c.color : C.line}`,
                        borderLeft: `3px double ${c.color}`,
                        borderRadius: 6,
                        padding: "16px 16px 16px 18px",
                        cursor: "pointer",
                        color: C.ink,
                        fontFamily: font.body,
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                        <span style={{ fontSize: 22 }} aria-hidden="true">
                          {c.icon}
                        </span>
                        <span
                          style={{
                            fontFamily: font.display,
                            fontWeight: 700,
                            fontSize: 18,
                            lineHeight: 1.2,
                            color: c.color,
                          }}
                        >
                          {c.path}
                        </span>
                      </span>
                      <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {c.roles.map((r) => (
                          <span
                            key={r}
                            style={{
                              fontSize: 12.5,
                              padding: "4px 9px",
                              borderRadius: 999,
                              border: `1px solid ${C.line}`,
                              background: C.pad,
                              color: C.ink,
                            }}
                          >
                            {r}
                          </span>
                        ))}
                      </span>
                      {open && (
                        <span style={{ display: "block", marginTop: 14 }}>
                          <span style={{ display: "block", fontSize: 14.5, lineHeight: 1.62, color: C.dim }}>
                            {c.reality}
                          </span>
                          <span
                            style={{
                              display: "block",
                              marginTop: 12,
                              padding: "10px 12px",
                              background: C.padDeep,
                              borderRadius: 4,
                              fontSize: 14,
                              fontWeight: 600,
                              lineHeight: 1.5,
                              color: C.ink,
                            }}
                          >
                            {c.salary}
                          </span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          <footer
            style={{
              marginTop: 34,
              paddingTop: 14,
              borderTop: `1.5px solid ${C.line}`,
              fontSize: 13.5,
              lineHeight: 1.6,
              color: C.dim,
              maxWidth: 720,
            }}
          >
            Tap any line or card to open it, and tap again to close. Figures describe the United
            States and come from NALP, the Bureau of Labor Statistics, the ABA, LSAC, and NCBE,
            compiled November 2026. Rules for the bar exam and student loans are changing, so
            confirm them for your state and year.
          </footer>
        </main>
      </div>
    </div>
  );
}
