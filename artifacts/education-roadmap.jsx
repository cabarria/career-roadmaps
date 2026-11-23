import { useState } from "react";

// ─── DESIGN SYSTEM ────────────────────────────────────────────────────────────
// Aesthetic: Classroom chalkboard slate + lesson-plan ledger
// Palette: deep chalkboard green, chalk-cream text, and accents drawn from the
//          real materials of a classroom — chalk amber, chalk cyan, ink rose,
//          grading-pen coral.
// Fonts: "Fraunces" (warm, slightly wonky old-style display serif — the scholarly
//        but human voice) + "Hanken Grotesk" (clean humanist body) +
//        "JetBrains Mono" (course codes / data labels, like a gradebook).
// Signature: a hand-drawn "chalk underline" — a soft, dusty stroke used under the
//        title and section labels, over a faint chalk-dust speckle on the slate.
// Structure device: rising course codes (EDU 100 → 500 → 900) that encode the real
//        climb in degree level across the three life stages.

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&display=swap');
`;

const C = {
  slate:   "#1e2c24",   // chalkboard green-slate
  deep:    "#182420",
  panel:   "#25342c",
  surface: "#2e3f36",
  border:  "#3a4d42",
  muted:   "#7c9184",
  dim:     "#b0c3b5",
  text:    "#dde8de",
  bright:  "#f4f8f1",   // chalk white

  // Phase accents — colored chalk sticks
  undergrad: "#f2c14e",  // chalk amber — the warm foundation
  masters:   "#63c2d6",  // chalk cyan — specialization / the salary lane
  research:  "#e68cc4",  // ink rose — the research frontier
  career:    "#f0805c",  // grading-pen coral — the outward path

  undergradDim: "#8a6c22",
  mastersDim:   "#2c6f7d",
  researchDim:  "#8a4a72",
  careerDim:    "#8a4530",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      code: "EDU 100 · foundations",
      color: C.undergrad,
      colorDim: C.undergradDim,
      intro:
        "An education degree is unusual: it's a professional-entry degree. Where most majors are a foundation you build on later, a teacher-prep bachelor's is engineered to make you employable and licensable on day one. The core braids three strands — pedagogy coursework, your content area (what you'll actually teach), and escalating time in real classrooms that builds toward a full semester of supervised student teaching. The main gates are admission to the Educator Preparation Program (a minimum GPA, background checks, and logged field-experience hours) and then passing your state's licensure exams. Plan for summer sessions or a fifth year: degree plans of 122 or more hours can count as five-year programs.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📚",
          items: [
            { name: "Educational Psychology & Human Development", detail: "How children develop physically, cognitively, socially, and emotionally from infancy through adolescence, plus theories of learning, instruction, and motivation. One of the most commonly required courses in the major." },
            { name: "Foundations of Education", detail: "The philosophy and history of education: the theory behind teaching and learning, and how schooling developed. Where you form your own sense of what education is for." },
            { name: "Methods / Curriculum & Instruction", detail: "Subject-specific 'methods' courses: how to actually teach reading, math, or science. The point where theory becomes lesson plans, usually taken alongside a field placement." },
            { name: "Classroom Management", detail: "Routines, behavior systems, and running a full classroom. It deserves attention: in RAND's 2026 teacher survey, student behavior was the most commonly named source of job stress, ahead of low pay." },
            { name: "Assessment & Measurement", detail: "Designing tests and rubrics, formative vs. summative assessment, and reading student data. Increasingly central as schools are held accountable for outcomes." },
            { name: "Teaching Diverse & Multilingual Learners", detail: "Differentiation, special-education basics (IEPs, inclusion), and instruction for emergent-bilingual students. Nearly universal, often paired with a dedicated multicultural-education course." },
            { name: "Literacy & the Science of Reading", detail: "Phonics, phonemic awareness, and comprehension, an area reshaped by the science of reading movement. As of 2025, 43 states required prep programs to address it for at least some candidates, and in 2024 31 states required elementary teachers to pass an exam measuring it." },
            { name: "Content-Area Coursework", detail: "The subject you will teach. Many states require middle and high school teachers to have majored in a content area, and Texas State pairs secondary certification with a second major. Elementary candidates certify across the core subjects." },
          ],
        },
        {
          title: "In the Classroom",
          icon: "🍎",
          items: [
            { name: "Escalating Field Placements", detail: "Programs pair coursework with concurrent classroom placements. St. Olaf, for example, moves students from observer to teacher's assistant to tutor before student teaching, and WTAMU documents a minimum of 50 field-experience hours." },
            { name: "Student Teaching (Clinical Practice)", detail: "The capstone: a full-time semester teaching under a mentor teacher. Required length varies by state, from at least 10 weeks in Connecticut to 12 in Pennsylvania and Minnesota and 15 in Maine. It has traditionally been unpaid, though at least nine states had statewide paid programs by December 2025, and Illinois barred programs from requiring it to be unpaid in 2025." },
            { name: "Lesson Planning", detail: "Writing lesson and unit plans for the subjects and standards you teach. BLS lists creating lesson plans first among teachers' duties, and you will produce them constantly." },
            { name: "Performance Assessments (edTPA and Alternatives)", detail: "Many programs end with an assessment of real teaching. By 2019, 19 states required a standardized one, most often edTPA, but about half of those states have since dropped the mandate and programs now often use their own. edTPA is being redesigned as edTPA Essentials from August 2026, so check your state's current rule." },
            { name: "Learning from Mentor Teachers", detail: "Student teaching places you with a mentor teacher, and BLS notes that experienced teachers can advance into mentor and lead-teacher roles themselves. Watching a mentor handle pacing, tone, and parent communication is where much of the practical craft is learned." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🧭",
          items: [
            { name: "Learning Management Systems", detail: "Learning management systems and online gradebooks are where assignments, grading, and communication live. BLS says teachers must be comfortable using and learning new technology, including tools for communicating with parents and running online discussions." },
            { name: "The AI Inflection", detail: "In a spring 2025 Gallup and Walton Family Foundation survey, 60% of public school teachers had used AI that school year and 32% used it weekly. Weekly users reported saving about 5.9 hours a week, mostly on preparing lessons, making worksheets, and modifying materials. Only 19% said their school had an AI policy, and 68% reported no AI training." },
            { name: "The Integrity Problem", detail: "Students adopt AI faster than teachers do. A live challenge is redesigning assessment so it rewards genuine thinking rather than what a chatbot can produce — which has, in some ways, made teaching harder." },
            { name: "Data & Assessment Platforms", detail: "Gradebooks, state-test results, and progress-monitoring tools. BLS notes that accountability for test scores and graduation rates means schools may increasingly turn to instructional coordinators, so comfort with student data pays off." },
            { name: "Accessibility & Assistive Tech", detail: "Assistive tools such as screen readers, plus Universal Design for Learning, which edtech employers list as a preferred skill. Penn State prepares all of its teacher candidates to work with emergent bilingual students and students with special needs." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "✦",
          items: [
            { name: "Get Licensed — the real goal", detail: "Plan backward from your state's requirements. BLS lists the typical set: a minimum GPA, completed student teaching, a background check, and passing a general teaching test plus a subject test (Texas uses TExES exams). Certification is what makes you hireable in public schools, where all states require teachers to be licensed or certified." },
            { name: "Substitute & Paraprofessional Work", detail: "Teacher assistant jobs (median pay $36,780 in May 2025) and substitute teaching are common ways into schools; NCES found 15% of traditionally prepared teachers had substituted before their first year. It builds your résumé and tests the fit before you commit." },
            { name: "Tutoring, Camps & Coaching", detail: "Low-barrier ways to log time with kids and test whether you like the work. Many working teachers also coach teams or advise clubs, which BLS notes usually happens before or after school." },
            { name: "Know Your Market", detail: "Shortages are real but uneven. For 2024-25, states most often reported shortage areas in special education (45 states), science (41), and math (40), with bilingual instruction in 31. LPI found the deepest shortage positions in special education, elementary education, language arts, and career and technical education. BLS projects flat K-12 teacher employment, so openings come mostly from turnover. Shortage fields can also unlock loan forgiveness (see the Master's tab)." },
            { name: "Understand Alternative Certification", detail: "All states offer an alternative route for people who hold a bachelor's degree but lack education coursework (BLS), and NCES found 18% of public school teachers in 2015-16 had entered that way. Some programs let candidates start teaching under supervision. Worth knowing your competition and your options." },
            { name: "Professional Organizations", detail: "Teacher and education associations (NEA and AFT, AASA for superintendents, AERA for researchers) fund or publish much of the survey data and policy analysis behind this roadmap, which makes them a good place to watch how the profession and its pay are changing." },
          ],
        },
      ],
    },

    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      code: "EDU 500 · specialization",
      color: C.masters,
      colorDim: C.mastersDim,
      intro:
        "In education the master's often plays a role it plays in few other fields: it can be a pay decision more than a research one. Many public districts pay a premium through step-and-lane salary schedules, 15 states mandate one, and some states require a master's after you are certified and employed. The premium is smaller than people assume: NCTQ's 2025 sample averaged about $3,600 for a novice teacher and about $9,300 at 25 years, and NCTQ summarizes research finding teachers with master's degrees are no more effective on average. Three broad flavors exist: an initial-licensure MAT for career-changers who already hold a content degree; an M.Ed. for practicing teachers to specialize or move toward leadership; and research MAs that bridge to a PhD. Since July 2026, federal borrowing for most master's programs is capped at $20,500 a year and $100,000 total, so the cost versus the pay premium matters more than it used to.",
      sections: [
        {
          title: "Program Types",
          icon: "📋",
          items: [
            { name: "Master of Arts in Teaching (MAT)", detail: "An initial-licensure degree for people who hold a bachelor's in a content field and want to become teachers. Includes student teaching — the classic career-changer route into the classroom." },
            { name: "Master of Education (M.Ed.)", detail: "For already-certified teachers: specialize in literacy, special ed, TESOL, or ed tech, add endorsements, or begin the pivot toward coaching and leadership. TCU's M.Ed. specializations are 30-credit programs with full-time or part-time options and evening classes." },
            { name: "Educational Leadership / Administration", detail: "The credential path to becoming a principal or administrator, paired with state administrative licensure. A deliberate move off the teaching track and onto the income ladder." },
            { name: "Curriculum & Instruction", detail: "Deepen expertise in how subjects are taught and assessed. A natural route toward instructional-coordinator, curriculum-specialist, and coaching roles at the school or district level." },
            { name: "Research MA (PhD bridge)", detail: "A thesis-based master's for those aiming at doctoral study and academic research. In education the master's is usually already in hand by the doctorate: 96% of 2024 education doctorate recipients held one, and the median recipient finished about 16 years after the bachelor's." },
            { name: "Counseling & School Psychology (adjacent)", detail: "Related graduate paths that gate licensed school roles: school counselor (master's, median $64,330 in May 2025) and school psychologist (median $84,940 in May 2023, with a May 2025 aggregator relay showing about $96K). Different training and separate credentials." },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            { name: "Mostly Self-Funded", detail: "Many education master's are built for working teachers, with part-time schedules and evening classes. Grad PLUS loans ended for new borrowers on July 1, 2026, and federal loans for most master's programs are now capped at $20,500 a year and $100,000 total." },
            { name: "The Salary-Schedule Bump", detail: "Most districts pay on a step-and-lane grid, and a master's moves you to another lane. NCTQ's 2025 sample averaged a premium of about $3,600 for novices and $9,300 at 25 years, but districts vary widely: Albuquerque paid a new teacher with a master's just $547 more. NCTQ also describes districts where bachelor's-lane teachers are capped at step 7, so the degree matters far more later in a career." },
            { name: "Loan-Forgiveness Levers", detail: "Teacher Loan Forgiveness cancels up to $17,500 for special education teachers and secondary math or science teachers (up to $5,000 for other teachers) after five straight years at a qualifying low-income school. PSLF forgives the balance after 120 qualifying payments, and revised PSLF rules took effect July 1, 2026. TEACH Grants give up to $4,000 a year in exchange for four years teaching a high-need field at a low-income school." },
            { name: "Employer & Shortage-Area Support", detail: "Shortage areas change which aid you can use: TEACH Grants and loan-forgiveness rules key off federally approved shortage fields (Texas's 2025-26 list included bilingual and ESL, secondary career and technical education, computer science, and special education). District tuition support was not documented in this research, so ask the district." },
            { name: "Timing the Degree", detail: "The premium grows with experience (about $3,600 for novices versus $9,300 at 25 years in NCTQ's sample), and some states require the degree only after you are certified and employed. The lane change is written into your district's salary schedule, so look it up before you enroll." },
          ],
        },
        {
          title: "Skills & Specialization",
          icon: "🔬",
          items: [
            { name: "A Named Endorsement", detail: "Special education, TESOL/bilingual, reading specialist, gifted, or a leadership credential — the concrete, marketable thing a master's actually adds to your file." },
            { name: "Reading & Evaluating Research", detail: "Moving from consuming education research to critically evaluating it — understanding what 'evidence-based' really means and how to tell strong claims from weak ones." },
            { name: "Coaching & Mentoring", detail: "Instructional-coaching skills: observing peers, modeling lessons, and leading professional development. The bridge from teaching students to leading teachers." },
            { name: "Program & Assessment Design", detail: "Designing curricula and assessments at the school or district scale, not just for a single classroom — the skill set behind coordinator and curriculum-director roles." },
            { name: "Action Research / Capstone", detail: "Many master's programs end with a research project or thesis, and some let you choose. TCU, for example, offers a research emphasis or a teaching-and-learning emphasis." },
          ],
        },
      ],
    },

    {
      id: "research",
      label: "Doctorate & Research",
      years: "Years 8+",
      code: "EDU 900 · doctorate",
      color: C.research,
      colorDim: C.researchDim,
      intro:
        "The doctorate in education forks in a way that matters more than in almost any field. The EdD (Doctor of Education) is a practice-oriented degree for experienced educators headed for senior leadership — superintendent, district cabinet, higher-ed administration — usually part-time, often online, ending in an applied 'dissertation in practice.' The PhD in Education is the research-and-academia track: full-time, funded where possible, aimed at original scholarship and a university faculty career. Both run roughly 3–6 years. Crucially, neither is required to teach K-12 — both are gates for specific leadership and research careers, chosen deliberately rather than by default.",
      sections: [
        {
          title: "EdD vs PhD",
          icon: "⚖️",
          items: [
            { name: "The EdD — practice", detail: "Built for working professionals solving real problems in their organizations: leadership, policy, and applied research. Often part-time and online. Typical goals include school superintendent, principal, and curriculum designer, and EdD cohorts are usually working administrators and educators." },
            { name: "The PhD — research", detail: "The terminal research degree: qualifying exams, a research apprenticeship, and an original-contribution dissertation. The path to a tenure-track professorship in a school of education." },
            { name: "Dissertation vs. Dissertation-in-Practice", detail: "PhDs produce original scholarship for the field's knowledge base. EdDs typically produce an applied study that resolves a concrete 'problem of practice' in a real institution." },
            { name: "Duration & Format", detail: "EdDs commonly finish in 3 to 4 years part-time; PhDs run 4 to 6 years. Online options are easier to find for EdDs than for research PhDs. Across all US education doctorates in 2024, the median recipient finished about 16 years after the bachelor's (18 years in leadership and administration)." },
            { name: "The Funding Split", detail: "Full-time PhD programs may offer assistantships and tuition waivers (Drexel's full-time PhD covers tuition and pays a stipend), while Inside Higher Ed calls full funding for an EdD rare. EdD students usually keep full-time jobs and may get employer tuition support. Federal loans for either degree now fall under the $20,500 a year and $100,000 graduate cap." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔭",
          items: [
            { name: "The Science of Reading", detail: "As of August 2026, 43 states and DC have passed laws or policies on evidence-based reading instruction since 2013, and a federal bill passed the House in September 2026. Whether the laws raise achievement is still unclear, and NCTQ found about 1 in 5 prep programs still use outdated practices. A parallel wave is under way in math, with 23 states acting since 2022." },
            { name: "Learning Sciences & Analytics", detail: "An interdisciplinary study of how people learn, merging cognitive science, design, and data. Learning analytics mines LMS data to model and support learning at scale." },
            { name: "AI & Education Research", detail: "How generative AI changes teaching, tutoring, assessment, and integrity. A 2025 study in Frontiers in Education notes that research on how teachers actually experience and shape AI use is limited, and 68% of teachers in Gallup's 2025 survey reported no AI training. Fast-moving, with little settled evidence." },
            { name: "Equity, Policy & Outcomes", detail: "Large-data work on achievement and policy, such as the Education Scorecard from Harvard, Stanford, and Dartmouth, which compares learning recovery across more than 5,000 districts. It found federal relief dollars boosted gains in the highest-poverty districts and that recovery has been U-shaped, with middle-income districts improving least." },
            { name: "Learning Loss & Chronic Absenteeism", detail: "The 2026 Education Scorecard found 23% of students were chronically absent in 2024-25, against a pre-pandemic rate of 15%. It also found reading declines began before the pandemic: from 2015 to 2025, 83% of districts lost ground in reading, with early signs of recovery between 2024 and 2025." },
            { name: "Special Education & Neurodiversity", detail: "Intervention research, inclusive design, and assistive technology, tied to the field's deepest workforce gap: 45 states reported special education shortage areas for 2024-25. Federal support is uncertain: the 2025 IES cuts suspended the review panels that assess funding applications for the National Center for Special Education Research." },
          ],
        },
        {
          title: "Doctoral Training",
          icon: "🎓",
          items: [
            { name: "Coursework & Qualifying Exams", detail: "A front-loaded core in research methods, statistics, and your specialization, gated by comprehensive or qualifying exams before you advance to candidacy." },
            { name: "Quantitative & Qualitative Methods", detail: "Education research spans both, and PhD coursework typically emphasizes qualitative and quantitative methods (USC). Skills with large datasets and analysis software also transfer outside academia. Methodological range is a genuine advantage." },
            { name: "The Research Apprenticeship", detail: "For PhDs, the practical training is publishing in journals, presenting at national conferences, and learning to teach future educators (Northeastern). Funded students typically hold research or teaching assistantships (Drexel)." },
            { name: "Advisor & Cohort Fit", detail: "EdD programs often run as cohorts of working professionals who take classes together (Rutgers GSE, Inside Higher Ed). For a PhD, ask about advisor fit and how projects are funded before you apply." },
            { name: "Research Funding Turbulence", detail: "In February 2025 the Education Department canceled IES contracts (89 by its count, about 170 by AERA's), and AERA reports IES staff were cut by roughly 90%. No new IES grant competitions launched in fiscal 2026, and $224 million of fiscal 2025 funds held back for over a year was released in May 2026. Funding may be coming back online, but details are unclear, so ask prospective advisors how their work is funded." },
          ],
        },
      ],
    },
  ],

  careers: [
    {
      path: "K-12 Classroom Teacher",
      icon: "🍎",
      color: C.undergrad,
      roles: ["Teacher", "Lead / Mentor Teacher", "Dept. Chair", "Instructional Coach"],
      reality:
        "The default destination and the most accessible one: a bachelor's plus state licensure makes you employable in public schools, and shortage fields (special education, science, math, bilingual) are where states most often report gaps. Pay is modest: May 2025 medians run from about $64K for elementary teachers to $72K for high school teachers, and the top 10% earn roughly $103K to $108K. Projected employment is flat, with about 200,000 openings a year across elementary, middle, and high school teaching, almost all from turnover. Most states have tenure laws. Stress runs high: in RAND's 2026 survey 55% of teachers reported frequent job-related stress versus 34% of similar working adults, and 18% planned to leave their job by the end of 2025-26.",
      salary: "Median $63,970 elementary, $64,370 middle, $72,040 high school (BLS, May 2025) · bottom 10% under ~$48K · top 10% over ~$103K–$108K",
    },
    {
      path: "School & District Leadership",
      icon: "🏫",
      color: C.career,
      roles: ["Assistant Principal", "Principal", "Curriculum Director", "Superintendent"],
      reality:
        "The clearest income ladder in education, gated by a master's, administrative licensure, and several years of experience (BLS: a master's and 5 or more years). Principals earn a median of $105,870, but there are only about 20,600 openings a year across 343,800 jobs. Superintendents had a median salary of $158,721 in AASA's 2024-25 study, which trails inflation-adjusted 2013 pay, and the 500 largest districts saw 23% superintendent turnover in 2024-25. The trade-off: principals work year-round with no summers off, and the jobs carry budget, personnel, and accountability pressure.",
      salary: "Principals median $105,870 (BLS, May 2025) · superintendents median $158,721, mean $169,343 (AASA, 2024-25)",
    },
    {
      path: "Instructional Design & L&D",
      icon: "🧩",
      color: C.masters,
      roles: ["Instructional Designer", "L&D Specialist", "Sr. Designer", "L&D Manager"],
      reality:
        "A path into corporate training, higher education, and edtech. Designers build training and e-learning with tools like Articulate Storyline and Rise, Captivate, and Camtasia, using frameworks such as ADDIE and SAM. A bachelor's is commonly the minimum, a master's helps for leadership and higher-ed roles, and a portfolio showing design rationale and results can outweigh a list of tools. Postings often ask for 2 or more years of experience, and the work means juggling projects, reviewers, and tight timelines.",
      salary: "~$54K–$65K entry · ~$78K–$90K typical · ~$89K–$122K senior (Research.com, 2025 postings) · BLS training and development specialists median $69,280, managers $133,000 (May 2025)",
    },
    {
      path: "Curriculum & Instructional Coordination",
      icon: "📐",
      color: C.undergrad,
      roles: ["Curriculum Specialist", "Instructional Coordinator", "Assessment Lead", "Director of C&I"],
      reality:
        "The district-level curriculum-and-coaching path: developing curricula, training and coaching teachers, and analyzing student test data. BLS lists a master's and 5 or more years of related experience as typical entry requirements. Pay is highest in government roles outside school districts, and demand is tied to budgets: BLS projects 2% growth with about 23,100 openings a year, and notes that state and local budget constraints may limit demand.",
      salary: "Median $77,440 · bottom 10% under $47,980 · top 10% over $121,670 · government $89,920, local school districts $82,130 (BLS, May 2025)",
    },
    {
      path: "Higher Education & Academic Research",
      icon: "🎓",
      color: C.research,
      roles: ["Doctoral Researcher", "Postdoc", "Assistant → Full Professor", "Dean"],
      reality:
        "The PhD track: training future teachers, running research, and shaping policy from a school of education. The most recent BLS OEWS profile I could verify (May 2023) put the median for postsecondary education teachers near $73K. Tenure lines are scarce across higher education: only 31.8% of US faculty held full-time tenured or tenure-track jobs in fall 2023, against 53.1% in 1987 (AAUP, all fields). Higher-ed administration, covering deans, registrars, and student-affairs leadership, pays more: postsecondary education administrators earned a median of $104,590 in May 2025 and typically need a master's. No education-specific tenure-track placement data was found.",
      salary: "Postsecondary education teachers median $73,240, top 10% over $130,000 (BLS OEWS, May 2023; newer figure not found) · postsecondary education administrators median $104,590, top 10% over $215,620 (BLS, May 2025)",
    },
    {
      path: "Education Policy & Nonprofit",
      icon: "🏛️",
      color: C.career,
      roles: ["Program Associate", "Policy Analyst", "Research Associate", "Program Director"],
      reality:
        "Shaping education from outside the classroom, at think tanks, associations, advocacy groups, and state agencies. The postings found ask for 1 to 3 years of K-12 policy experience at analyst level and 5 to 7 years at manager level, and a postgraduate degree is often preferred but not required. Work centers on research, 50-state comparisons, policy briefs, and support for state leaders. BLS has no category for education policy analysts, so pay here comes from posted ranges.",
      salary: "Analyst postings $50K–$90K · senior and manager postings $80K–$105K (posted ranges, 2025-26; no BLS category)",
    },
    {
      path: "EdTech & Learning Products",
      icon: "🌐",
      color: C.masters,
      roles: ["Learning Experience Designer", "Curriculum Designer", "Principal Learning Designer", "Product Designer"],
      reality:
        "Building the products teachers and students use: curriculum publishers and learning platforms hire learning designers and curriculum writers, usually asking for classroom or curriculum experience (one Newsela posting wants 5 or more years in secondary ELA curriculum, an Edmentum principal role wants 7 or more). Posted pay varies widely: $53K to $75K for entry and mid-level learning designer roles, $75K to $115K for instructional and senior curriculum roles, $120K to $130K for a principal learning designer, and up to $145K at one workforce-learning firm. Several postings mention equity, and many roles are remote.",
      salary: "~$53K–$75K entry to mid · ~$75K–$115K senior curriculum · $120K–$130K principal · up to $145K at some firms (posted ranges, 2026)",
    },
    {
      path: "Specialized & Licensed Roles",
      icon: "🧠",
      color: C.research,
      roles: ["Special Ed Teacher", "Reading Specialist", "School Counselor", "School Psychologist"],
      reality:
        "Credentialed roles that each need their own endorsement or license. Special education is the most consistently reported shortage field (45 states for 2024-25), and its median pay sits just above elementary and middle school teachers and below high school teachers. School counselors need a master's and earn about what teachers do. School psychologists are the clear pay step up, though the figures differ by data year (see the salary line). States may require special education teachers to earn a master's in special education after they are hired.",
      salary: "Special ed teachers median $67,170 · school and career counselors $64,330 (BLS, May 2025) · school psychologists $84,940 (BLS OEWS, May 2023; an aggregator relay of May 2025 shows ~$96K, unverified)",
    },
  ],
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const CSS = `
  ${FONTS}

  .cb-root {
    --slate:${C.slate}; --deep:${C.deep}; --panel:${C.panel}; --surface:${C.surface};
    --border:${C.border}; --muted:${C.muted}; --dim:${C.dim}; --text:${C.text}; --bright:${C.bright};
    position: relative;
    min-height: 100vh;
    background:
      radial-gradient(120% 80% at 50% -10%, #26352c 0%, transparent 55%),
      ${C.slate};
    color: var(--text);
    font-family: 'Hanken Grotesk', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  .cb-root * { box-sizing: border-box; }

  /* faint chalk-dust speckle over the slate */
  .cb-root::before {
    content: ""; position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      radial-gradient(1px 1px at 12% 18%, rgba(244,248,241,0.28), transparent),
      radial-gradient(1px 1px at 42% 62%, rgba(244,248,241,0.22), transparent),
      radial-gradient(1px 1px at 68% 28%, rgba(244,248,241,0.20), transparent),
      radial-gradient(1px 1px at 82% 74%, rgba(244,248,241,0.26), transparent),
      radial-gradient(1px 1px at 28% 88%, rgba(244,248,241,0.18), transparent),
      radial-gradient(1px 1px at 55% 8%,  rgba(244,248,241,0.20), transparent);
    background-size: 260px 260px, 300px 300px, 340px 340px, 280px 280px, 320px 320px, 360px 360px;
    opacity: 0.45;
  }

  .cb-wrap {
    position: relative; z-index: 1;
    max-width: 940px; margin: 0 auto; padding: 0 20px 64px;
  }

  /* ── Header ── */
  .cb-header { position: relative; padding: 56px 4px 26px; text-align: left; }
  .cb-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--dim); margin-bottom: 18px;
  }
  .cb-title {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 700; font-size: clamp(2.3rem, 7.4vw, 4rem);
    line-height: 1.03; letter-spacing: -0.012em; color: var(--bright);
    margin: 0 0 4px;
  }
  .cb-title em {
    font-style: italic; font-weight: 500;
    color: transparent;
    background: linear-gradient(96deg, ${C.undergrad}, ${C.masters} 42%, ${C.research} 72%, ${C.career});
    -webkit-background-clip: text; background-clip: text;
  }
  .cb-tagline {
    font-family: 'Fraunces', Georgia, serif;
    font-style: italic; font-weight: 400;
    font-size: clamp(1rem, 2.4vw, 1.26rem);
    color: var(--dim); max-width: 660px; margin-top: 14px; line-height: 1.4;
  }

  /* Chalk underline — the signature stroke */
  .cb-chalkline {
    height: 8px; margin: 24px 0 2px; width: 100%; max-width: 520px;
    background:
      repeating-linear-gradient(92deg,
        rgba(244,248,241,0.85) 0 22px,
        rgba(244,248,241,0.35) 22px 30px,
        rgba(244,248,241,0.85) 30px 58px,
        rgba(244,248,241,0.5) 58px 66px);
    border-radius: 40% 60% 55% 45% / 60% 50% 60% 40%;
    filter: blur(0.4px) drop-shadow(0 1px 1px rgba(244,248,241,0.25));
    opacity: 0.9;
    transform: rotate(-0.5deg);
  }

  /* ── Phase nav ── */
  .cb-nav {
    display: flex; gap: 8px; overflow-x: auto;
    padding: 22px 0 6px; margin-bottom: 2px;
    -webkit-overflow-scrolling: touch; scrollbar-width: none;
  }
  .cb-nav::-webkit-scrollbar { display: none; }
  .cb-nav-btn {
    flex: 0 0 auto; cursor: pointer;
    background: var(--panel); border: 1px solid var(--border);
    border-radius: 12px; padding: 11px 16px 9px;
    color: var(--dim); font-family: 'Hanken Grotesk', sans-serif;
    font-size: 0.95rem; font-weight: 600; text-align: left;
    display: flex; flex-direction: column; gap: 2px;
    transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s;
  }
  .cb-nav-btn:hover { color: var(--text); border-color: var(--muted); }
  .cb-nav-btn .yr {
    font-family: 'JetBrains Mono', monospace; font-size: 10px;
    font-weight: 400; letter-spacing: 0.02em; color: var(--muted);
  }
  .cb-nav-btn.active {
    color: var(--bright);
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 13%, var(--panel));
    box-shadow: 0 0 0 1px var(--accent), 0 6px 26px -12px var(--accent);
  }
  .cb-nav-btn.active .yr { color: var(--accent); }
  .cb-nav-btn:focus-visible { outline: 2px solid var(--bright); outline-offset: 2px; }

  /* ── Intro panel ── */
  .cb-intro {
    background: linear-gradient(180deg, var(--panel), var(--deep));
    border: 1px solid var(--border);
    border-left: 3px solid var(--phase-color);
    border-radius: 14px; padding: 20px 22px;
    margin: 18px 0 26px; color: var(--text);
    font-size: 1.02rem; line-height: 1.6;
  }

  /* ── Section tabs ── */
  .cb-sections { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .cb-section-btn {
    cursor: pointer; background: transparent;
    border: 1px solid var(--border); border-radius: 999px;
    padding: 7px 15px; color: var(--dim);
    font-family: 'Hanken Grotesk', sans-serif; font-size: 0.9rem; font-weight: 600;
    transition: all 0.18s;
  }
  .cb-section-btn:hover { color: var(--text); border-color: var(--muted); }
  .cb-section-btn.active {
    color: var(--slate); font-weight: 600;
    background: var(--phase-color); border-color: var(--phase-color);
  }
  .cb-section-btn:focus-visible { outline: 2px solid var(--phase-color); outline-offset: 2px; }

  .cb-section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--phase-color); margin: 4px 2px 12px;
  }

  /* ── Expandable items ── */
  .cb-items { display: flex; flex-direction: column; gap: 8px; }
  .cb-item {
    background: var(--panel); border: 1px solid var(--border);
    border-radius: 12px; overflow: hidden;
    transition: border-color 0.2s, background 0.2s;
  }
  .cb-item.open {
    border-color: var(--phase-color);
    background: color-mix(in srgb, var(--phase-color) 8%, var(--panel));
  }
  .cb-item-head {
    display: flex; align-items: center; gap: 12px;
    padding: 15px 18px; cursor: pointer; user-select: none;
  }
  .cb-item-dot {
    flex: 0 0 auto; width: 8px; height: 8px; border-radius: 50%;
    background: var(--phase-color); opacity: 0.45;
    box-shadow: 0 0 8px var(--phase-color);
    transition: opacity 0.2s;
  }
  .cb-item.open .cb-item-dot { opacity: 1; }
  .cb-item-name { flex: 1; font-size: 1.02rem; font-weight: 600; color: var(--bright); }
  .cb-item-chev {
    flex: 0 0 auto; color: var(--muted); font-size: 0.7rem;
    transition: transform 0.22s, color 0.2s;
  }
  .cb-item.open .cb-item-chev { transform: rotate(90deg); color: var(--phase-color); }
  .cb-item-detail {
    padding: 0 18px 16px 38px; color: var(--dim); font-size: 0.97rem; line-height: 1.55;
    animation: cb-reveal 0.22s ease;
  }
  @keyframes cb-reveal { from { opacity: 0; transform: translateY(-3px); } to { opacity: 1; transform: none; } }

  /* ── Career cards ── */
  .cb-careers {
    display: grid; gap: 14px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  .cb-card {
    background: var(--panel); border: 1px solid var(--border);
    border-top: 3px solid var(--card-color);
    border-radius: 14px; padding: 18px 18px 16px; cursor: pointer;
    transition: border-color 0.2s, transform 0.15s, box-shadow 0.2s;
  }
  .cb-card:hover { transform: translateY(-2px); box-shadow: 0 14px 40px -22px var(--card-color); }
  .cb-card.open {
    border-color: var(--card-color);
    box-shadow: 0 0 0 1px var(--card-color), 0 16px 44px -24px var(--card-color);
  }
  .cb-card-top { display: flex; align-items: center; gap: 11px; margin-bottom: 12px; }
  .cb-card-icon { font-size: 1.5rem; line-height: 1; }
  .cb-card-title {
    font-family: 'Fraunces', Georgia, serif; font-weight: 600;
    font-size: 1.12rem; color: var(--card-color); line-height: 1.15;
  }
  .cb-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .cb-chip {
    font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
    color: var(--dim); background: var(--surface);
    border: 1px solid var(--border); border-radius: 6px;
    padding: 3px 8px; letter-spacing: 0.01em;
  }
  .cb-card-body { animation: cb-reveal 0.22s ease; }
  .cb-card-reality { margin: 14px 0 0; color: var(--text); font-size: 0.95rem; line-height: 1.55; }
  .cb-salary {
    margin-top: 14px; padding: 10px 13px; border-radius: 10px;
    background: color-mix(in srgb, var(--card-color) 14%, var(--deep));
    border: 1px solid color-mix(in srgb, var(--card-color) 42%, transparent);
    font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
    color: var(--bright); line-height: 1.5;
  }
  .cb-salary b { color: var(--card-color); font-weight: 700; }

  /* ── Footer ── */
  .cb-footer {
    margin-top: 34px; padding-top: 18px; border-top: 1px solid var(--border);
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.06em; color: var(--muted); text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function EducationRoadmap() {
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
  const handleItemToggle = (i) => setExpandedItem(expandedItem === i ? null : i);

  return (
    <div className="cb-root">
      <style>{CSS}</style>
      <div className="cb-wrap">

        <header className="cb-header">
          <div className="cb-eyebrow">Field Roadmap · Undergraduate → Doctorate → Career</div>
          <h1 className="cb-title">Education &amp; <em>Teaching</em></h1>
          <div className="cb-tagline">
            A professional-entry field with an unusual shape — where the bachelor's
            already makes you a teacher, the master's is mostly a pay-schedule decision, and the higher
            pay mostly sits outside the classroom. Here's the honest map.
          </div>
          <div className="cb-chalkline" />
        </header>

        <nav className="cb-nav" aria-label="Life stages">
          {data.phases.map((p) => (
            <button
              key={p.id}
              className={`cb-nav-btn ${!showCareers && activePhase === p.id ? "active" : ""}`}
              style={{ "--accent": p.color }}
              onClick={() => handlePhaseChange(p.id)}
            >
              {p.label}
              <span className="yr">{p.years} · {p.code}</span>
            </button>
          ))}
          <button
            className={`cb-nav-btn ${showCareers ? "active" : ""}`}
            style={{ "--accent": C.career }}
            onClick={() => { setShowCareers(true); setExpandedCareer(null); }}
          >
            Career Paths
            <span className="yr">→ · 8 destinations</span>
          </button>
        </nav>

        <main>
          {!showCareers ? (
            <div style={{ "--phase-color": phase.color }}>
              <div className="cb-intro" style={{ "--phase-color": phase.color }}>
                {phase.intro}
              </div>

              <div className="cb-sections">
                {phase.sections.map((s, i) => (
                  <button
                    key={i}
                    className={`cb-section-btn ${activeSection === i ? "active" : ""}`}
                    style={{ "--phase-color": phase.color }}
                    onClick={() => handleSectionChange(i)}
                  >
                    {s.icon} {s.title}
                  </button>
                ))}
              </div>

              {section && (
                <>
                  <div className="cb-section-label">{section.icon} {section.title}</div>
                  <div className="cb-items">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className={`cb-item ${expandedItem === i ? "open" : ""}`}
                        style={{ "--phase-color": phase.color }}
                      >
                        <div className="cb-item-head" onClick={() => handleItemToggle(i)}>
                          <span className="cb-item-dot" />
                          <span className="cb-item-name">{item.name}</span>
                          <span className="cb-item-chev">▶</span>
                        </div>
                        {expandedItem === i && (
                          <div className="cb-item-detail">{item.detail}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="cb-intro" style={{ "--phase-color": C.career }}>
                Eight distinct destinations for an education graduate. The classroom is the
                default — but the highest pay sits in leadership, training management, and
                some edtech roles, and several paths require their own license or degree. Tap any
                card for the full competitive picture and current pay.
              </div>
              <div className="cb-careers">
                {data.careers.map((c, i) => (
                  <div
                    key={i}
                    className={`cb-card ${expandedCareer === i ? "open" : ""}`}
                    style={{ "--card-color": c.color }}
                    onClick={() => setExpandedCareer(expandedCareer === i ? null : i)}
                  >
                    <div className="cb-card-top">
                      <span className="cb-card-icon">{c.icon}</span>
                      <span className="cb-card-title">{c.path}</span>
                    </div>
                    <div className="cb-chips">
                      {c.roles.map((r, j) => (
                        <span key={j} className="cb-chip">{r}</span>
                      ))}
                    </div>
                    {expandedCareer === i && (
                      <div className="cb-card-body">
                        <p className="cb-card-reality">{c.reality}</p>
                        <div className="cb-salary"><b>◆</b> {c.salary}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </main>

        <div className="cb-footer">
          TAP ANY ITEM OR CARD TO EXPAND · TAP AGAIN TO COLLAPSE
        </div>
      </div>
    </div>
  );
}
