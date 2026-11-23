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
        "An education degree is unusual: it's a professional-entry degree. Where most majors are a foundation you build on later, a teacher-prep bachelor's is engineered to make you employable and licensable on day one. The core braids three strands — pedagogy coursework, your content area (what you'll actually teach), and escalating time in real classrooms that builds toward a full semester of supervised student teaching. The real gate isn't a weeder course; it's admission to the Educator Preparation Program (a GPA threshold, background check, and basic-skills test) and then passing your state's licensure exams. Budget for 4.5–5 years once student teaching and testing are counted.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📚",
          items: [
            { name: "Educational Psychology & Human Development", detail: "How children develop cognitively, socially, and emotionally, plus the learning theories (behaviorism, constructivism, Piaget, Vygotsky) that underlie everything you'll do. One of the most universally required courses in the major." },
            { name: "Foundations of Education", detail: "The history, philosophy, and sociology of schooling — how the American system is structured and funded, and the debates that shape it. Where you form your own sense of what education is for." },
            { name: "Methods / Curriculum & Instruction", detail: "Subject-specific 'methods' courses: how to actually teach reading, math, or science. The point where theory becomes lesson plans, usually taken alongside a field placement." },
            { name: "Classroom Management", detail: "The single skill new teachers most wish they'd learned better — routines, behavior systems, and running a room of 25+ students. Painful to learn cold on the job without it." },
            { name: "Assessment & Measurement", detail: "Designing tests and rubrics, formative vs. summative assessment, and reading student data. Increasingly central as schools are held accountable for outcomes." },
            { name: "Teaching Diverse & Multilingual Learners", detail: "Differentiation, special-education basics (IEPs, inclusion), and instruction for emergent-bilingual students. Nearly universal, often paired with a dedicated multicultural-education course." },
            { name: "Literacy & the Science of Reading", detail: "Phonics, phonemic awareness, and comprehension — an area reshaped by the 'science of reading' movement. A pedagogical and political flashpoint, and heavily tested on licensure exams." },
            { name: "Content-Area Coursework", detail: "The subject you'll teach. Secondary candidates often come close to a second major in their field (math, biology, history); elementary candidates take broad surveys across all subjects." },
          ],
        },
        {
          title: "In the Classroom",
          icon: "🍎",
          items: [
            { name: "Escalating Field Placements", detail: "Most programs put you in real classrooms early: observing, then tutoring, then co-teaching. Hours are logged and often state-mandated (frequently 50+ before you're admitted to the prep program)." },
            { name: "Student Teaching (Clinical Practice)", detail: "The capstone — a full 12–16 week semester teaching under a mentor teacher and a university supervisor, typically unpaid and full-time. The make-or-break experience of the whole degree." },
            { name: "Lesson Planning & Backward Design", detail: "Writing standards-aligned lesson and unit plans that run objectives → assessment → activities. The daily craft you'll produce endlessly for the rest of your career." },
            { name: "The Teaching Portfolio & edTPA", detail: "Assembling artifacts and lesson samples, and in many states completing the edTPA — a video-plus-commentary performance assessment scored for initial licensure." },
            { name: "Learning from Mentor Teachers", detail: "The informal craft that's in no textbook: pacing, tone, parent communication, and the hundred small judgment calls that separate surviving from thriving." },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🧭",
          items: [
            { name: "Learning Management Systems", detail: "Canvas, Google Classroom, and Schoology are where assignments, grading, and communication now live. Fluency is simply expected by the time you start student teaching." },
            { name: "The AI Inflection", detail: "Generative AI moved into classrooms fast — by 2025 educator use jumped sharply year-over-year, mostly for lesson planning, generating exercises, and differentiating materials. Districts are shifting from banning it to integrating it." },
            { name: "The Integrity Problem", detail: "Students adopt AI faster than teachers do. A live challenge is redesigning assessment so it rewards genuine thinking rather than what a chatbot can produce — which has, in some ways, made teaching harder." },
            { name: "Data & Assessment Platforms", detail: "Gradebooks, standardized-test dashboards, and progress-monitoring tools. Reading and acting on student data is now a routine part of the job, not an add-on." },
            { name: "Accessibility & Assistive Tech", detail: "Text-to-speech, translation, and Universal Design for Learning practices that make instruction reachable for students with disabilities and multilingual learners." },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "✦",
          items: [
            { name: "Get Licensed — the real goal", detail: "Plan backward from your state's requirements: pass the Praxis (or state equivalent) content and pedagogy exams, finish the prep program, clear the background check. Certification is what actually makes you hireable." },
            { name: "Substitute & Paraprofessional Work", detail: "Paid classroom time before you're certified. It builds your résumé, sharpens your instincts, and confirms the career fits before you commit fully to it." },
            { name: "Tutoring, Camps & Coaching", detail: "Low-barrier ways to rack up hours with kids and test whether you love the work — and a reliable fallback income stream throughout the career." },
            { name: "Know Your Market", detail: "Teacher supply swings wildly by subject and region. Math, science, special education, and bilingual/ESL are chronic-shortage areas — often with signing bonuses or loan forgiveness — while elementary and social studies are oversupplied in many metros." },
            { name: "Understand Alternative Certification", detail: "You don't strictly need an education degree to teach: many enter through alt-cert routes (Teach For America, district residencies, post-bacc programs) after a content degree. Worth knowing your competition and your options." },
            { name: "Professional Organizations", detail: "Student NEA, Kappa Delta Pi (the education honor society), and subject-area associations for early networking, mentorship, and a professional identity before you graduate." },
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
        "In education the master's plays a role it plays in almost no other field: it's frequently a salary decision, not a research one. Most district pay scales bump you automatically for a master's — a low-to-mid five-figure raise over a career — so a large share of teachers earn one within a few years of starting, usually part-time and online while working. Three broad flavors exist: an initial-licensure MAT for career-changers who already hold a content degree; an M.Ed. for practicing teachers to specialize or move toward leadership; and research MAs that bridge to a PhD. The catch is funding: unlike lab sciences, most education master's are self-funded, which is exactly why the ROI case rests on that salary bump.",
      sections: [
        {
          title: "Program Types",
          icon: "📋",
          items: [
            { name: "Master of Arts in Teaching (MAT)", detail: "An initial-licensure degree for people who hold a bachelor's in a content field and want to become teachers. Includes student teaching — the classic career-changer route into the classroom." },
            { name: "Master of Education (M.Ed.)", detail: "For already-certified teachers: specialize in literacy, special ed, TESOL, or ed tech, add endorsements, or begin the pivot toward coaching and leadership. The most common education master's." },
            { name: "Educational Leadership / Administration", detail: "The credential path to becoming a principal or administrator, paired with state administrative licensure. A deliberate move off the teaching track and onto the income ladder." },
            { name: "Curriculum & Instruction", detail: "Deepen expertise in how subjects are taught and assessed. A natural route toward instructional-coordinator, curriculum-specialist, and coaching roles at the school or district level." },
            { name: "Research MA (PhD bridge)", detail: "A thesis-based master's for those aiming at doctoral study and academic research. Less common as a standalone step, since many strong candidates go straight from BA to PhD." },
            { name: "Counseling & School Psychology (adjacent)", detail: "Related graduate paths that gate specific licensed roles — school counselor, school psychologist. Different training, often better-paid, and worth knowing they exist as options." },
          ],
        },
        {
          title: "Funding Reality",
          icon: "💰",
          items: [
            { name: "Mostly Self-Funded", detail: "Unlike funded lab-science master's, education master's are typically paid out of pocket. The financial case rests on the district salary bump and forgiveness programs, not a stipend during study." },
            { name: "The Salary-Schedule Bump", detail: "Most public districts pay on a 'steps and lanes' grid; a master's moves you a lane, often worth a five-figure raise compounded over a career. This is the core financial logic of the degree." },
            { name: "Loan-Forgiveness Levers", detail: "Public Service Loan Forgiveness, Teacher Loan Forgiveness, and TEACH Grants can substantially offset costs for those teaching in qualifying — often high-need — schools." },
            { name: "Employer & Shortage-Area Support", detail: "Some districts subsidize coursework, and shortage-area endorsements (special ed, bilingual) sometimes come with funded or discounted pathways. Timing the degree to your employment matters." },
            { name: "Wait, Usually", detail: "Because the raise is what pays it back, many teachers wait until they're employed and eligible for district support rather than paying for a master's up front." },
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
            { name: "Action Research / Capstone", detail: "Most M.Ed. programs end in an applied project studying a problem in your own practice, rather than an original-contribution thesis. Practical by design." },
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
            { name: "The EdD — practice", detail: "Built for working professionals solving real problems in their organizations: leadership, policy, and applied research. Often part-time and online; the common route to superintendent and higher-education administration." },
            { name: "The PhD — research", detail: "The terminal research degree: qualifying exams, a research apprenticeship, and an original-contribution dissertation. The path to a tenure-track professorship in a school of education." },
            { name: "Dissertation vs. Dissertation-in-Practice", detail: "PhDs produce original scholarship for the field's knowledge base. EdDs typically produce an applied study that resolves a concrete 'problem of practice' in a real institution." },
            { name: "Duration & Format", detail: "EdDs commonly finish in 3–4 years part-time; PhDs run 4–6 years full-time. Online options are far more common for EdDs than for research PhDs." },
            { name: "The Funding Split", detail: "PhD programs may offer assistantships and tuition waivers. EdDs are usually self-funded by mid-career professionals, sometimes with employer support — a very different financial model." },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔭",
          items: [
            { name: "The Science of Reading", detail: "The biggest recent shift in K-12: a research-driven return to phonics and structured literacy that is rewriting curricula and licensure exams across the country." },
            { name: "Learning Sciences & Analytics", detail: "An interdisciplinary study of how people learn, merging cognitive science, design, and data. Learning analytics mines LMS data to model and support learning at scale." },
            { name: "AI & Education Research", detail: "How generative AI reshapes teaching, tutoring, assessment, and integrity — a fast-moving, heavily funded frontier carrying at least as much hype as hard evidence right now." },
            { name: "Equity, Policy & Outcomes", detail: "Causal research on what actually closes achievement gaps — funding, tracking, teacher quality, school choice — often using econometrics and large administrative datasets." },
            { name: "Learning Loss & Chronic Absenteeism", detail: "A live post-pandemic research-and-policy emergency: measuring lost learning and testing interventions that work at the scale of whole districts and states." },
            { name: "Special Education & Neurodiversity", detail: "Intervention research, inclusive-design practice, and assistive technology — a durable, well-funded, and chronically under-staffed research area." },
          ],
        },
        {
          title: "Doctoral Training",
          icon: "🎓",
          items: [
            { name: "Coursework & Qualifying Exams", detail: "A front-loaded core in research methods, statistics, and your specialization, gated by comprehensive or qualifying exams before you advance to candidacy." },
            { name: "Quantitative & Qualitative Methods", detail: "Education research spans both — causal inference and multilevel modeling on one side, ethnography and interview-based inquiry on the other. Methodological range is a genuine advantage." },
            { name: "The Research Apprenticeship", detail: "For PhDs, the true training: working on a faculty member's grants, presenting at AERA, and publishing. It matters far more to your career than coursework does." },
            { name: "Advisor & Cohort Fit", detail: "EdD programs run in supportive cohorts; PhD programs hinge on a single advisor relationship. Either way, fit shapes the experience more than the program's ranking does." },
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
        "The default destination and the most accessible one: a bachelor's plus state licensure makes you employable, and shortage subjects (math, science, special ed, bilingual) hire aggressively, sometimes with bonuses or loan forgiveness. But pay is modest and compressed — a median in the low-$60Ks with a hard ceiling near $100K even after decades — and burnout and attrition are real. It's a stable, unionized, mission-driven career, not a high-earning one.",
      salary: "Median ~$62K–$65K (elem/middle/high); 10th pct ~$46K, top decile ~$100K–$105K · shortage subjects hire best (BLS, May 2024)",
    },
    {
      path: "School & District Leadership",
      icon: "🏫",
      color: C.career,
      roles: ["Assistant Principal", "Principal", "Curriculum Director", "Superintendent"],
      reality:
        "The clearest income ladder in education, gated by administrative licensure and usually a master's or EdD. Principals earn a median around $104K; superintendents commonly clear $150K and go far higher in large districts. The trade-off is real: you leave the classroom for budgets, politics, personnel, and accountability pressure, and the jobs are demanding, high-turnover, and intensely local.",
      salary: "Principals median ~$104K (BLS 2024); superintendents commonly $150K+ · scales sharply with district size",
    },
    {
      path: "Instructional Design & L&D",
      icon: "🧩",
      color: C.masters,
      roles: ["Instructional Designer", "L&D Specialist", "Sr. Designer", "L&D Manager"],
      reality:
        "The most common exit from the classroom into industry, and often the best-paid non-leadership path. Designers build training and e-learning for companies, universities, and edtech using tools like Articulate Storyline, Rise, and Captivate and the ADDIE/SAM frameworks. A strong portfolio matters more than any specific degree. It's competitive to break into cold, but teaching experience translates well and remote roles are common.",
      salary: "~$60K entry → ~$90K typical → $120K+ senior; highest in tech-hub metros (market data, 2025)",
    },
    {
      path: "Curriculum & Instructional Coordination",
      icon: "📐",
      color: C.undergrad,
      roles: ["Curriculum Specialist", "Instructional Coordinator", "Assessment Lead", "Director of C&I"],
      reality:
        "The district-level curriculum-and-coaching path: designing curricula, training teachers, and aligning instruction to standards and test data. It requires a master's and classroom experience, and pay runs to a median around $75K, up past $115K in large districts and state roles. More stable and less volatile than the principalship, though tied to district budgets and slow-growing.",
      salary: "Median ~$75K (BLS 2024); 10th pct ~$47K, top decile ~$115K+ · government roles pay above school-district roles",
    },
    {
      path: "Higher Education & Academic Research",
      icon: "🎓",
      color: C.research,
      roles: ["Doctoral Researcher", "Postdoc", "Assistant → Full Professor", "Dean"],
      reality:
        "The PhD track: training future teachers, running research, and shaping policy from a school of education. Education-professor pay sits around $80K–$90K median, but the tenure-track market is tight and shrinking, with many roles now contingent or adjunct. Higher-ed administration — deans, provosts, student-affairs leadership — is the better-paid, EdD-friendly cousin, and postsecondary administrators earn a median near $104K, topping $200K at the high end.",
      salary: "Ed professors ~$80K–$90K median (tight tenure market); postsec. administrators median ~$104K, top decile $212K+ (BLS 2024)",
    },
    {
      path: "Education Policy & Nonprofit",
      icon: "🏛️",
      color: C.career,
      roles: ["Program Associate", "Policy Analyst", "Research Associate", "Program Director"],
      reality:
        "Shaping education from outside the classroom — think tanks, foundations, advocacy groups, state education agencies, and testing and curriculum organizations. Work ranges from research and data analysis to program management and government relations. It often wants a master's (policy, ed leadership, or a quantitative field) and rewards strong writing and data skills. Pay spans widely, from nonprofit-modest to competitive foundation and federal salaries.",
      salary: "Roughly $50K–$100K+ by sector · foundations and federal agencies pay best, grassroots nonprofits least",
    },
    {
      path: "EdTech & Learning Products",
      icon: "🌐",
      color: C.masters,
      roles: ["Curriculum Developer", "Learning Experience Designer", "Product Manager", "Teacher-in-Residence"],
      reality:
        "Building the products teachers and students actually use: curriculum companies, learning platforms, and AI-tutoring startups hire former educators as curriculum leads, learning designers, user researchers, and 'teacher-in-residence' product roles. It rewards classroom credibility plus comfort with product and data. Pay tracks tech more than education — often the highest ceiling of any path here — but hiring is cyclical and roles cluster in a few hubs and remote teams.",
      salary: "~$70K–$140K+ · tech-scale pay and equity at larger firms, but hiring runs hot and cold",
    },
    {
      path: "Specialized & Licensed Roles",
      icon: "🧠",
      color: C.research,
      roles: ["Special Ed Teacher", "Reading Specialist", "School Counselor", "School Psychologist"],
      reality:
        "Credentialed niches that pay above the generalist teacher scale and are in chronic demand. Special-education teachers, reading specialists, school counselors, and — with a specialist degree — school psychologists each require specific endorsements or licenses. School psychologists in particular are severely short-staffed and better-paid. The trade-off is additional, targeted graduate training and a separate license for each role.",
      salary: "Special ed ~$62K–$70K; school counselors ~$61K median; school psychologists ~$80K–$85K median (BLS 2024)",
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
            already makes you a teacher, the master's is mostly a raise, and the real
            money lives outside the classroom. Here's the honest map.
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
                default — but the highest ceilings sit in leadership, instructional design,
                and edtech, and several paths require their own license or degree. Tap any
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
