import { useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg:        "#0e0f13",
  surface:   "#16181f",
  surfaceHi: "#1e2029",
  border:    "#2a2d38",
  borderHi:  "#3d4155",
  textPrimary:   "#e8e9ef",
  textSecondary: "#8c90a6",
  textMuted:     "#555870",
  // track accents
  pure:    "#5b8dee",   // cobalt blue  — pure math
  applied: "#e8a838",   // amber gold   — applied math
  stats:   "#3ecf91",   // teal green   — statistics
  // danger / AI
  danger:  "#e85b5b",
  dangerBg:"#2a1414",
  // phase accent (per phase)
  undergrad: "#5b8dee",
  masters:   "#e8a838",
  phd:       "#3ecf91",
  // fonts
  display: "'DM Serif Display', Georgia, serif",
  mono:    "'IBM Plex Mono', 'Courier New', monospace",
  body:    "'DM Sans', system-ui, sans-serif",
};

// ─── Data ────────────────────────────────────────────────────────────────────
const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      color: T.undergrad,
      intro: "The undergraduate years lay the shared foundation for all three tracks — pure math, applied math, and statistics. The first two years are nearly identical: calculus sequence, linear algebra, probability, and an introduction to proof-writing. By junior year, tracks diverge. The central shock is real analysis: the field's canonical weeder, where students first encounter the rigorous ε–δ definitions, compactness, and measure theory that underpin everything that follows. Research shows roughly 40% of math majors drop or repeat courses due to unexpectedly high difficulty in analysis and abstract algebra.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📐",
          items: [
            { name: "Calculus Sequence & Multivariable Calculus", detail: "The shared entry point: limits, derivatives, integrals, series, and vector calculus. Mechanical at first, but all three tracks return to these foundations in abstract form." },
            { name: "Linear Algebra", detail: "Vectors, matrices, eigenvalues, and abstract vector spaces — the single most cross-cutting subject in math. Pure math uses it in abstract algebra; applied math uses it in numerical methods and ML theory; statistics uses it for regression and dimensionality reduction." },
            { name: "Probability Theory", detail: "Rigorous probability from axioms, random variables, expectation, convergence theorems, and the Central Limit Theorem. Statistics students take a deeper version; all tracks need the foundations." },
            { name: "Real Analysis — the Weeder", detail: "The first proof-heavy course and the field's most feared rite of passage. You prove that √2 is irrational from first principles, then build the entire real number line rigorously. UMBC's Kathleen Hoffman calls it 'easily the most challenging course for math majors nationwide.' Take a proofs-bridge course first if your school offers one." },
            { name: "Abstract Algebra (Pure / Applied track)", detail: "Groups, rings, fields, and quotient structures. Essential for pure math; appears in applied math via cryptography, coding theory, and symmetry arguments in physics." },
            { name: "Statistical Inference (Stats track)", detail: "Estimation, hypothesis testing, confidence intervals, likelihood, and the decision-theoretic framework. The statistical counterpart of real analysis: the course that separates fluent statisticians from calculator operators." },
            { name: "ODEs & PDEs (Applied track)", detail: "Ordinary and partial differential equations — the mathematical language of physics, engineering, and biology. Separation of variables, Fourier series, and numerical solutions form the core." },
            { name: "Regression & Data Analysis (Stats track)", detail: "Simple and multiple regression, model diagnostics, ANOVA, and logistic regression. Introduces R or Python as statistical computing environments and builds the applied workflow statisticians use daily." },
          ]
        },
        {
          title: "Skills You'll Develop",
          icon: "🧠",
          items: [
            { name: "Mathematical Proof Writing", detail: "The central skill of pure and applied math: constructing logical arguments from axioms through definitions, lemmas, and theorems. Takes 1–2 years of proof-based courses to develop fluency." },
            { name: "Scientific Computation & Simulation", detail: "Implementing algorithms, solving equations numerically, and building simulations — typically in Python or MATLAB. Includes debugging mathematical intuition with code." },
            { name: "Statistical Reasoning & Modeling", detail: "Designing studies, choosing and fitting models, and interpreting uncertainty honestly. Statistics students develop this systematically; all tracks benefit from exposure." },
            { name: "LaTeX Typesetting", detail: "The universal language for mathematical writing — used for homework, theses, papers, and applications. Learn it in Year 1 and never look back." },
            { name: "Software Fluency (R / Python)", detail: "R is the language of statistics; Python dominates data science and applied math. Pure math students benefit from Python for exploration. All tracks should reach basic fluency in at least one by sophomore year." },
            { name: "Abstraction & Structural Thinking", detail: "The transferable meta-skill of mathematics: stripping a problem to its essential structure, finding analogies across domains, and recognizing when two apparently different problems are the same problem." },
          ]
        },
        {
          title: "Tools & Software",
          icon: "⚙️",
          items: [
            { name: "LaTeX", detail: "Non-negotiable for any math track. Used for every homework set, exam, thesis, and publication. Learn Overleaf first, then a local LaTeX distribution." },
            { name: "Python (NumPy, SciPy, SymPy)", detail: "The dominant language for scientific computing and data science. SymPy handles symbolic algebra; NumPy/SciPy handle numerical work. Free and universal." },
            { name: "R", detail: "The dominant language for statistics and data analysis. ggplot2, tidyverse, and the statistical modeling ecosystem are unmatched for exploratory analysis and inference." },
            { name: "MATLAB / Mathematica", detail: "MATLAB is entrenched in engineering departments and numerical methods courses; Mathematica excels at symbolic computation and visualization. Both are commonly available through university licenses." },
            { name: "Julia (emerging)", detail: "A newer language gaining ground in high-performance scientific computing — adopted at MIT, NASA/JPL, and the national energy labs. Worth learning once Python is solid, especially for applied math." },
            { name: "SageMath", detail: "Open-source mathematical software combining Python with dozens of specialized libraries — useful for discrete math, number theory, and abstract algebra experiments." },
          ]
        },
        {
          title: "Beyond the Classroom",
          icon: "🏆",
          items: [
            { name: "REU (Research Experience for Undergraduates)", detail: "NSF-funded summer research programs at universities across the US — the single strongest signal for PhD admissions. Extremely competitive: top sites receive 200–400 applications for 6–12 spots (less than 1 in 50 at some). Apply to 8–12 programs; offers cannot require a response before mid-March. US citizens and permanent residents only for most sites." },
            { name: "Putnam Competition", detail: "America's most prestigious undergraduate math competition, held in December. The median score is famously 0/120 — and a high Putnam score is a recognized signal at quant finance firms (Jane Street, D.E. Shaw) and PhD programs alike." },
            { name: "Actuarial Exams P & FM (Actuarial track)", detail: "Pass Exam P (Probability) and Exam FM (Financial Mathematics) during undergrad and you become immediately employable in the actuarial field. Both are shared between SOA and CAS and can be attempted as early as sophomore year." },
            { name: "Industry Internships", detail: "Quant/trading internships (Jane Street, Citadel, Two Sigma), data science internships, and actuarial internships are all accessible to strong undergraduates. Junior-year internships are the standard on-ramp to full-time offers." },
            { name: "Math Club / Problem-Solving Seminars", detail: "Weekly sessions that build the rapid problem-solving fluency valued in competitions and quant interviews. Many clubs also organize the Putnam preparation team." },
            { name: "Honors Thesis", detail: "For PhD-bound students, an honors thesis supervised by a faculty member is the strongest application signal outside REU — demonstrates you can independently investigate a mathematical question and write up results." },
          ]
        },
        {
          title: "⚠️ AI Obsolescence Risk",
          icon: "🤖",
          items: [
            { name: "What is already automating at this stage", detail: "Routine symbolic computation (integrals, derivatives, algebraic manipulation), numerical simulation, data cleaning, and basic statistical summaries are increasingly handled by AI tools. Wolfram Alpha and LLMs already solve many problem-set questions." },
            { name: "The proof-writing exposure window", detail: "DeepMind's AlphaProof reached silver-medal IMO performance in 2024; Gemini Deep Think reached gold in 2025. These systems still operate at Olympiad/pre-university difficulty — they do not yet autonomously generate novel research-level proofs. But the direction of travel is clear: rote proof-construction (applying known techniques to standard problem types) is under pressure." },
            { name: "What remains safe at the undergrad level", detail: "Mathematical creativity, problem formulation, cross-domain insight, and the ability to judge whether an AI-generated argument actually holds up — these are precisely what a rigorous undergraduate education develops and what AI currently cannot replicate." },
            { name: "Hedge: learn formal verification (Lean)", detail: "Lean4 is the proof-assistant language that mathematicians use to keep AI honest — feeding LLM-generated proof candidates to the compiler and checking them. Learning it puts you at the human-AI interface rather than on the wrong side of it." },
          ]
        },
      ]
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years 5–7",
      color: T.masters,
      intro: "The master's stage splits sharply by destination. Many strong US students skip a standalone master's entirely and enter PhD programs directly, earning the MS en route. For those who pursue it independently, there are two distinct models: the thesis-based research master's (often partially funded, a PhD bridge) and the self-funded professional master's (MFE, MS Statistics, MS Data Science, MS Actuarial Science) targeted at immediate industry placement. The standout ROI is the Master of Financial Engineering: Baruch's MFE class of 2025 reported a 100% placement rate with average guaranteed first-year compensation of $244K.",
      sections: [
        {
          title: "Program Types",
          icon: "🎓",
          items: [
            { name: "Thesis Master's (Research Bridge)", detail: "A 1–2 year program culminating in a written thesis on an original topic, supervised by a faculty advisor. Partially or fully funded at some programs via TA/RA positions. The standard route for students testing PhD readiness or pivoting research areas." },
            { name: "MS in Applied Mathematics", detail: "Coursework-heavy professional degree covering numerical methods, optimization, mathematical modeling, and often a computational specialization. Funded only at a handful of programs; mostly self-pay. Strong placement in data science, OR, and tech roles." },
            { name: "MS in Statistics / Biostatistics", detail: "The gateway credential for independent statistical work in industry, pharma, and government. A master's is the entry standard for industry biostatistics roles; a PhD is required for lead/regulatory positions. Median total compensation ~$127K with a master's." },
            { name: "Master of Financial Engineering (MFE)", detail: "The highest-ROI professional math master's. Baruch MFE 2025: 100% placement, average guaranteed first-year comp $244K (median $255K, high $300K+). Extremely selective (~7% acceptance at top programs). Feeds directly into quant roles at hedge funds and banks." },
            { name: "MS in Data Science", detail: "An interdisciplinary degree (math + CS + stats). Strong placement in tech but highly saturated; AI disruption of entry-level data science is most acute here. Differentiate with domain expertise or ML-engineering depth." },
            { name: "MS in Actuarial Science", detail: "Primarily for students who want to complete VEE credits and upper-level coursework alongside exam prep. Exams matter far more than the degree — many actuaries skip the MS entirely and pass exams while working." },
          ]
        },
        {
          title: "Advanced Skills",
          icon: "📊",
          items: [
            { name: "Measure Theory & Functional Analysis", detail: "The rigorous mathematical foundation for probability and statistics — Lebesgue integration, Hilbert spaces, operator theory. Required for research-level statistics and probability; appears in pure math PhDs as well." },
            { name: "Stochastic Processes & SDEs", detail: "Brownian motion, Itô calculus, stochastic differential equations, and martingale theory. Essential for mathematical finance, mathematical biology, and statistical physics." },
            { name: "High-Dimensional Statistics", detail: "Statistical methods when the number of variables p is large relative to sample size n — LASSO, ridge regression, random matrix theory, principal component analysis in high dimensions. Active research area and highly valued in industry." },
            { name: "Optimization Theory", detail: "Convex analysis, duality, gradient descent variants, and integer programming. The mathematical backbone of machine learning, OR, and quantitative finance." },
            { name: "Bayesian Methods", detail: "Prior specification, posterior computation (MCMC, variational inference), hierarchical models, and decision theory. Increasingly standard in statistics, machine learning research, and pharmaceutical trial design." },
            { name: "Machine Learning Theory", detail: "Statistical learning theory, PAC learning, VC dimension, generalization bounds, and neural network approximation theory. Distinguishes math/stats PhDs from practitioners in ML research roles." },
          ]
        },
        {
          title: "Tools & AI Landscape",
          icon: "🔧",
          items: [
            { name: "Python Ecosystem (JAX, PyTorch, scikit-learn)", detail: "JAX is becoming the standard for research-grade differentiable programming; PyTorch dominates deep learning; scikit-learn handles classical ML. All three should be in the applied math/stats toolkit at the master's level." },
            { name: "Stan / PyMC (Bayesian computation)", detail: "Stan is the gold standard for Bayesian modeling in statistics and social science; PyMC is the Python-native alternative. Both compile probabilistic programs into efficient MCMC samplers." },
            { name: "Julia (HPC and numerical methods)", detail: "At the master's level, Julia becomes worth learning seriously for numerical PDE solving, scientific simulation, and optimization — especially at applied math programs that have already adopted it." },
            { name: "C++ (Quant finance)", detail: "The performance-critical language of quantitative trading systems. MFE students typically add C++ to Python as a core language; it remains essential for quant developer roles." },
            { name: "SAS (Pharma/Biostatistics)", detail: "Regulatory-standard software for clinical trial analysis — FDA submissions require it. Learn it for biostatistics and pharmaceutical roles; avoid investing in it for other tracks." },
            { name: "Lean4 / Coq (Formal verification)", detail: "At the master's level, especially in pure math and theory-heavy applied programs, proof assistants are becoming a genuine research tool rather than a curiosity. The ability to formalize arguments in Lean positions you at the frontier." },
          ]
        },
        {
          title: "⚠️ AI Obsolescence Risk",
          icon: "🤖",
          items: [
            { name: "Data science master's — highest disruption risk", detail: "Entry-level data analysis is the most disrupted job category in this report. LLMs and AutoML platforms are automating data prep, EDA, and standard model-building — compressing the 'foot in the door' junior analyst roles that an MS Data Science was previously designed to access." },
            { name: "MFE and quantitative finance — lower risk", detail: "Judgment, speed of reasoning, and the ability to detect subtle errors in quantitative arguments (including AI-generated ones) are exactly what quant firms pay for. The mathematical core remains hard to automate." },
            { name: "Statistics master's — augmented not replaced", detail: "Biostatistics and industry statistics require regulatory judgment, trial-design creativity, and domain expertise that AI genuinely cannot substitute. Learn to use AI for routine computation while building the judgment skills that remain scarce." },
            { name: "Applied math master's — complementary", detail: "OR, optimization, and mathematical modeling roles are being integrated into AI-driven decision systems rather than replaced by them. A master's in applied math that includes ML theory positions you as a builder of those systems." },
          ]
        },
      ]
    },
    {
      id: "phd",
      label: "PhD & Research",
      years: "Years 6–13+",
      color: T.phd,
      intro: "The mathematics PhD is a 5–6 year apprenticeship in original research, fully funded via teaching or research assistantships (stipends typically $20K–$35K/year). After two to three years of coursework, students face qualifying exams — the gauntlet that determines whether they advance to candidacy. Then comes the dissertation: a multi-year investigation of an open problem under an advisor's direction. For research-university tenure track, one or two postdoctoral positions (2–3 years each) are effectively mandatory. Terence Tao, who finds AI 'useful but not a peer,' notes that current models are excellent at scanning literature and connecting problems to known methods — but not at the deep original idea generation that PhDs are trained for.",
      sections: [
        {
          title: "PhD Structure",
          icon: "🏛️",
          items: [
            { name: "Qualifying / Comprehensive Exams", detail: "Typically taken at the end of Year 2 or start of Year 3. Format varies by program: written exams over several days, oral exams with a faculty committee, or both. Failure rates are real; most programs allow one or two attempts. Passing triggers advancement to candidacy." },
            { name: "Advisor & Dissertation", detail: "After quals, students find an advisor — typically through seminars, reading courses, and informal conversations. The advisor-student relationship is the dominant factor in PhD experience and outcome. The dissertation must make an original contribution to mathematical knowledge." },
            { name: "Funding Structure", detail: "US math PhDs are almost universally fully funded: tuition waived plus a 9-month stipend ($20K–$35K depending on program prestige and location). Summer funding via RA/fellowship is common but not guaranteed. No math PhD student should pay tuition." },
            { name: "Teaching Assistantship (TA)", detail: "Most PhD students teach calculus or linear algebra sections in exchange for their stipend. TAing develops communication skills that matter for both academic and non-academic careers; it also keeps you connected to foundational material." },
            { name: "Postdoc: The Missing Year(s)", detail: "Virtually all research-university tenure-track candidates now do one or two postdocs (2–3 years each) before a permanent position. The NSF MSPRF awards roughly 30–46 fellowships per year — far fewer than the number of graduating PhDs who want them. Budget 3–8 years between PhD completion and a stable academic position." },
            { name: "Timeline Reality", detail: "Pure math PhDs typically take 5–7 years; applied math and statistics PhDs often run 4.5–6 years. Add 3–6 years of postdoctoral work for an academic career. The total time from starting undergrad to a tenure-track offer can exceed 15 years — know this before committing." },
          ]
        },
        {
          title: "Research Frontiers",
          icon: "🔭",
          items: [
            { name: "Langlands Program (Pure)", detail: "A vast web of conjectures connecting number theory, representation theory, and geometry — sometimes called a 'grand unified theory of mathematics.' Recent breakthroughs by Peter Scholze (perfectoid spaces) and Ngô Bảo Châu (fundamental lemma) have revitalized the field." },
            { name: "Low-Dimensional Topology & Geometric Analysis (Pure)", detail: "The mathematics of surfaces, knots, and 3- and 4-manifolds. Active tools include Floer homology, gauge theory, and the interplay with quantum field theory. Perelman's 2003 Geometrization Theorem opened new directions still being developed." },
            { name: "Combinatorics & Discrete Math (Pure)", detail: "Extremal combinatorics, graph theory, and algebraic combinatorics are booming — driven partly by connections to theoretical computer science and by a wave of spectacular results using probabilistic and algebraic methods." },
            { name: "Machine Learning Theory (Applied)", detail: "Understanding why neural networks generalize, the geometry of loss landscapes, implicit regularization, and the theory of in-context learning. This is where pure mathematical methods are being applied to the most important technological questions of the decade." },
            { name: "Mathematical Biology & Climate Modeling (Applied)", detail: "PDEs for tumor growth, epidemics, and ecological systems; computational fluid dynamics and data assimilation for climate models. The Mathematics + Climate Research Network and similar groups bridge pure analysis with urgent real-world problems." },
            { name: "Causal Inference & Bayesian Nonparametrics (Stats)", detail: "Causal inference (potential outcomes, DAGs, instrumental variables) is transforming applied statistics and epidemiology. Bayesian nonparametrics (Gaussian processes, Dirichlet processes) provide flexible models for complex data — both are major research programs with open problems." },
            { name: "High-Dimensional Statistics & Random Matrix Theory (Stats)", detail: "How to do reliable inference when p >> n. Random matrix theory provides exact results in idealized settings; concentration inequalities generalize them. Industry and government both need this for genomics, finance, and imaging." },
            { name: "Automated Theorem Proving & Formalization (Emerging)", detail: "The Lean/Mathlib ecosystem is formalizing large bodies of mathematics. Terence Tao's Equational Theories Project verified all 22,028,942 edges of an implication graph using Lean — a proof impossible to check by hand. PhD research now includes questions about the mathematics of verification itself." },
          ]
        },
        {
          title: "AI & the Research Frontier",
          icon: "🧬",
          items: [
            { name: "AlphaProof & IMO Gold (2024–2025)", detail: "DeepMind's AlphaProof achieved silver-medal IMO performance in 2024, solving Problems 1, 2, and 6 (including the hardest problem, solved by only 5 of 609 human contestants). In 2025, Gemini Deep Think achieved gold-medal performance in natural language within the standard time limit. Both systems operate at pre-university difficulty for autonomous work — but the trajectory is unmistakable." },
            { name: "FunSearch & Conjecture Discovery", detail: "Google DeepMind's FunSearch discovered new extremal combinatorics results (improved cap set constructions) by searching in the space of programs rather than mathematical statements. It represents a new approach: AI generating mathematically valid new knowledge, not just verifying human proofs." },
            { name: "Lean as the Truth-Checker", detail: "The practical response to AI-generated proofs is formal verification: feeding LLM-generated proof candidates to the Lean compiler, which either certifies or rejects them. Tao writes that this approach 'keeps AI honest' and lets small communities (or individuals) check arguments impossible to verify manually." },
            { name: "What AI Does Well Today (Practitioner View)", detail: "Terence Tao (OpenAI Academy, March 2026): AI is 'less helpful as sources of deep original ideas than as tireless systems for scanning known methods, connecting a problem to the right literature, and reporting back on what seems most promising.' The bottleneck remains human judgment about which problems matter and which proofs are illuminating." },
            { name: "What Remains Safe at the PhD Level", detail: "Problem selection, conjecture formation, recognizing when a new structure is interesting and why, and building multi-year research programs. These require mathematical taste — the hardest skill to acquire and the hardest to automate." },
          ]
        },
        {
          title: "⚠️ AI Obsolescence Risk",
          icon: "🤖",
          items: [
            { name: "Honest assessment: the PhD is the most resilient math credential", detail: "The skills trained by a PhD — navigating ambiguity, recognizing important problems, building deep original arguments — are exactly what AI cannot currently do. But the 'safe harbor' is narrowing: each year, AI handles more of what was formerly original." },
            { name: "Most exposed PhD work: computation and survey", detail: "Literature surveys, standard computations, and verifying known-technique-applies-to-new-case arguments are exactly what LLMs are best at. PhD research that consists primarily of these tasks is under the most pressure." },
            { name: "Most resilient PhD work: deep structure", detail: "Identifying genuinely new mathematical structures, designing studies that answer previously unanswerable questions, and the judgment about what is worth knowing — these remain exclusively human for now, and the community-consensus view is that this remains true for at least 5–10 years." },
            { name: "The new PhD skill: human-AI collaboration", detail: "The most productive mathematicians are already using LLMs as 'tireless graduate students' for literature search, Lean for proof verification, and symbolic AI for computation. The PhD of the future likely trains this orchestration explicitly. Treat it as a skill to develop, not a threat to avoid." },
          ]
        },
      ]
    },
  ],

  careers: [
    {
      path: "Academia",
      icon: "🏛️",
      color: T.pure,
      roles: ["Postdoctoral Researcher", "Visiting Assistant Professor", "Assistant Professor (TT)", "Associate Professor", "Full Professor / Endowed Chair"],
      reality: "The most intellectually rich path — and the most grueling to enter. Effectively requires a PhD plus one to two postdocs (3–6 additional years). Only 15–30% of math PhDs who want tenure-track positions obtain them. Expect geographic inflexibility, decade-long early-career instability, and heavy service loads. NSF and NIH funding pressure is constant. The exception: ML-adjacent faculty lines are in high demand and command premium packages. Pure math faculty at research universities average $115K–$143K (9-month basis, AMS 2021–23); top programs and 12-month contracts push $150K–$200K. Adjuncts earn a fraction of this with no job security.",
      salary: "$115K–$200K (faculty)",
      aiRisk: "Medium — AI tools are reshaping research methods, and automated theorem proving creates long-run uncertainty. ML-adjacent subfields are safer near-term.",
    },
    {
      path: "Quantitative Finance",
      icon: "📈",
      color: T.applied,
      roles: ["Quantitative Analyst (Junior)", "Quant Researcher", "Quant Trader", "Quant Developer", "Portfolio Manager"],
      reality: "The highest-paying destination for mathematical talent in the US — and among the most selective environments anywhere. Jane Street, Citadel, D.E. Shaw, Two Sigma, and Renaissance hire heavily from top math programs and Putnam high scorers; a finance background is explicitly not required. Entry-level quant researchers and traders earn $250K–$450K+ total compensation (base + bonus); five-year survivors in elite shops report $600K–$1.5M+. These numbers reflect survivorship bias — attrition is real and performance-driven exit is common. H1B filings show Jane Street and Five Rings paying $300K flat base. What firms want: raw quantitative ability, probability and combinatorics depth, and strong programming (Python + C++).",
      salary: "$250K–$450K+ (new grad TC)",
      aiRisk: "Low to Medium — execution and signal generation are increasingly automated, but elite research and trading judgment remain among the highest-paid human skills anywhere.",
    },
    {
      path: "Data Science & ML",
      icon: "🤖",
      color: T.stats,
      roles: ["Data Analyst", "Data Scientist", "ML Engineer", "Research Scientist (ML)", "Staff / Principal Scientist"],
      reality: "The largest employment destination for math and stats graduates and the most affected by AI disruption. BLS reports a median salary of $112,590 for data scientists (May 2024) with 34% growth projected through 2034 — the fastest-growing math occupation. FAANG pays far above median: Levels.fyi shows median data scientist total comp ~$175,750 at Google/Meta; staff levels reach $300K–$660K. Math and stats grads differentiate from CS grads through statistical rigor and modeling depth; CS grads have an edge in deployment. Warning: entry-level data analyst roles (previously the entry point for this track) are the most disrupted job category in this roadmap — LLMs and AutoML are automating data prep, EDA, and basic model-building. The field is bifurcating between commoditized analysis and high-value ML research.",
      salary: "$112K–$300K+ (level dependent)",
      aiRisk: "High (entry-level) / Medium (senior) — entry-level data analysis is being automated now. Senior ML research and model governance roles are growing.",
    },
    {
      path: "Actuarial Science",
      icon: "📋",
      color: "#a78bfa",
      roles: ["Actuarial Analyst", "Associate Actuary (ASA/ACAS)", "Fellow Actuary (FSA/FCAS)", "Chief Actuary", "ERM / Risk Director"],
      reality: "One of the best combinations of pay, stability, and work-life balance in any quantitative career. BLS median is $125,770 (2024), with the top 10% exceeding $206K. The credential — not the degree — is what matters: SOA and CAS exams gate entry and every promotion. Passing Exams P and FM during undergrad makes you immediately employable. Full credentialing (ASA→FSA or ACAS→FCAS) takes 5–7+ years and roughly 6–10 exams; employers reimburse fees and provide paid study time. Salary progression is exam-driven: analysts $55K–$70K, ASA/ACAS $90K–$130K, FSA/FCAS $150K–$250K+. BLS projects 22% growth through 2034. AI is augmenting but not replacing: GPT-4 has failed actuarial exams by wide margins, and regulatory judgment is a strong moat.",
      salary: "$90K–$250K+ (credentialed)",
      aiRisk: "Low — regulatory judgment, exam credentialing, and model governance protect the role. Routine analyst tasks at the bottom of the pyramid face the most pressure.",
    },
    {
      path: "Operations Research",
      icon: "⚙️",
      color: "#fb923c",
      roles: ["Operations Research Analyst", "Optimization Engineer", "Supply Chain Scientist", "Industrial Mathematician", "Management Scientist"],
      reality: "OR analysts apply optimization, simulation, and decision modeling to logistics, supply chain, scheduling, and resource allocation. Major employers include Amazon, UPS, airlines, consulting firms, and the defense sector. BLS reports a mean annual wage of $99,730 for OR analysts (May 2024). There is heavy overlap with data science — OR leans toward optimization and discrete modeling; DS leans toward statistical prediction — and many roles blend both. The field is growing through integration with AI: optimization algorithms power recommendation systems, autonomous vehicles, and supply chains. A master's in OR or applied math is common; a PhD opens research and senior consulting roles.",
      salary: "$80K–$140K (MS/PhD)",
      aiRisk: "Low — optimization is a component of AI systems, not a casualty of them. OR expertise is increasingly embedded in, not replaced by, AI-driven decision pipelines.",
    },
    {
      path: "Government & National Labs",
      icon: "🏢",
      color: "#60a5fa",
      roles: ["Research Mathematician (NSA)", "Staff Scientist (National Lab)", "Operations Research Analyst (DoD)", "Statistician (Census/BLS/NIH)", "Data Scientist (Federal)"],
      reality: "The NSA is the single largest employer of mathematicians in the US, focusing on cryptanalysis, signals intelligence, and theoretical research. DOE national labs (Argonne, Oak Ridge, Los Alamos, Lawrence Berkeley, Sandia) hire mathematicians and statisticians for HPC, climate modeling, materials simulation, and physics. Salaries are lower than private sector: NSA mathematicians average $114K–$124K (Glassdoor), with senior levels reaching $207K. Lab scientists at senior/distinguished levels earn $174K–$208K. The trade-off is mission-driven stability, strong benefits, no performance-based exit, and (at the labs) access to the world's largest supercomputers. US citizenship and security clearances are required for most positions.",
      salary: "$100K–$208K (government scale)",
      aiRisk: "Low — mission-critical stability, security clearance requirements, and increasing AI/HPC demand protect these roles.",
    },
    {
      path: "Biostatistics & Pharma",
      icon: "🔬",
      color: T.stats,
      roles: ["Biostatistician I/II", "Statistical Programmer", "Senior Biostatistician", "Principal Statistician", "Director of Biostatistics"],
      reality: "One of the most stable and well-compensated paths for statistics graduates. Median total compensation is ~$127K (2025), with senior pharma roles (principal statistician, director) reaching $140K–$230K and VP-level positions $200K–$400K+. Employers include Pfizer, Merck, Genentech, AstraZeneca, AbbVie, Biogen, CROs (IQVIA, Covance, PPD), and federal agencies (CDC, NIH, FDA). A master's is the entry standard for industry roles; a PhD is expected for independent trial design and regulatory-facing positions, raising pay roughly 10–25%. SAS is the FDA-mandated standard for regulatory submissions; R is increasingly used alongside it. Demand is steady, recession-resistant (drug development does not pause for economic cycles), and growing as the pipeline of biologics and gene therapies expands.",
      salary: "$90K–$230K (MS–PhD scale)",
      aiRisk: "Low — regulatory rigor, trial-design judgment, and domain expertise are strong moats. AI augments documentation and analysis; it does not substitute for statistical reasoning in adversarial regulatory environments.",
    },
    {
      path: "Cryptography & Cybersecurity",
      icon: "🔐",
      color: "#f472b6",
      roles: ["Cryptography Engineer", "Security Researcher", "PQC Implementation Specialist", "Cryptanalyst (NSA)", "ZK-Proof Developer"],
      reality: "Mathematical cryptography — built on number theory, elliptic curves, and lattice-based algebra — is experiencing a genuine demand surge driven by NIST's August 2024 post-quantum cryptography standards (FIPS 203/204/205, using ML-KEM, ML-DSA, and SLH-DSA). NIST targets deprecation of quantum-vulnerable algorithms by 2035; the EU mandates PQC transition by end-2026. McKinsey (cited by WEF) finds only one qualified quantum candidate for every three quantum jobs. Cryptography engineers earn a median of ~$170K–$178K (Glassdoor, 2025); Coinbase crypto engineers range $190K–$646K by level. ZK-proof developers command $180K–$320K base at crypto/blockchain firms. A BS plus strong number theory suffices for implementation roles; a PhD is expected for PQC research and NSA cryptanalysis. This is one of the few fields where deep abstract pure-math training (number theory, algebraic geometry) directly creates high-paying industry roles.",
      salary: "$150K–$320K (research/PQC roles)",
      aiRisk: "Very Low — the adversarial mathematical reasoning at the core of cryptography is among the hardest cognitive tasks for AI. PQC migration is a multi-year structural tailwind.",
    },
  ]
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function MathRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find(p => p.id === activePhase);

  const handlePhaseChange = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };

  const handleSectionChange = (idx) => {
    setActiveSection(idx);
    setExpandedItem(null);
  };

  const toggleItem = (key) => setExpandedItem(expandedItem === key ? null : key);
  const toggleCareer = (idx) => setExpandedCareer(expandedCareer === idx ? null : idx);

  // Subtle grid pattern via inline SVG background
  const gridBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0H0v40' stroke='%232a2d38' stroke-width='0.5'/%3E%3C/svg%3E")`;

  const isAISection = (title) => title.includes("AI Obsolescence");

  return (
    <div style={{
      fontFamily: T.body,
      background: T.bg,
      backgroundImage: gridBg,
      minHeight: "100vh",
      color: T.textPrimary,
      overflowX: "hidden",
    }}>

      {/* ── Header ── */}
      <header style={{
        borderBottom: `1px solid ${T.border}`,
        padding: "48px 24px 36px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative glow blobs */}
        <div style={{
          position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "200px",
          background: `radial-gradient(ellipse, ${T.pure}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }}/>
        <div style={{
          position: "absolute", top: "20px", left: "20%",
          width: "200px", height: "100px",
          background: `radial-gradient(ellipse, ${T.applied}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }}/>
        <div style={{
          position: "absolute", top: "20px", right: "20%",
          width: "200px", height: "100px",
          background: `radial-gradient(ellipse, ${T.stats}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }}/>

        {/* Track indicator pills */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap" }}>
          {[["Pure Mathematics", T.pure], ["Applied Mathematics", T.applied], ["Statistics", T.stats]].map(([label, color]) => (
            <span key={label} style={{
              fontFamily: T.mono,
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color,
              background: `${color}18`,
              border: `1px solid ${color}40`,
              borderRadius: "3px",
              padding: "4px 10px",
            }}>{label}</span>
          ))}
        </div>

        <h1 style={{
          fontFamily: T.display,
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: "400",
          margin: "0 0 12px",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: T.textPrimary,
        }}>
          Mathematics
        </h1>
        <p style={{
          fontFamily: T.mono,
          fontSize: "13px",
          color: T.textSecondary,
          margin: "0 auto",
          maxWidth: "480px",
          lineHeight: 1.7,
          letterSpacing: "0.02em",
        }}>
          A career roadmap for US students · Pure · Applied · Statistics
        </p>

        {/* Track legend */}
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "24px", flexWrap: "wrap" }}>
          {[["Pure", T.pure, "Abstract structures, proofs, foundations"], ["Applied", T.applied, "Modeling, computation, optimization"], ["Statistics", T.stats, "Inference, data, uncertainty"]].map(([name, color, desc]) => (
            <div key={name} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: T.mono, fontSize: "11px", color, letterSpacing: "0.1em", marginBottom: "4px" }}>{name}</div>
              <div style={{ fontFamily: T.body, fontSize: "11px", color: T.textMuted, maxWidth: "140px" }}>{desc}</div>
            </div>
          ))}
        </div>
      </header>

      {summary}

      {/* ── Phase Navigation ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: `${T.bg}f0`,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.border}`,
        padding: "0 16px",
        display: "flex",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>
        {data.phases.map(p => (
          <button key={p.id} onClick={() => handlePhaseChange(p.id)} style={{
            background: "none",
            border: "none",
            borderBottom: !showCareers && activePhase === p.id ? `2px solid ${p.color}` : "2px solid transparent",
            color: !showCareers && activePhase === p.id ? p.color : T.textSecondary,
            fontFamily: T.body,
            fontSize: "13px",
            fontWeight: !showCareers && activePhase === p.id ? "600" : "400",
            padding: "16px 20px 14px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "all 0.15s",
            flexShrink: 0,
          }}>
            {p.label}
            <span style={{
              display: "block",
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.textMuted,
              letterSpacing: "0.08em",
            }}>{p.years}</span>
          </button>
        ))}
        <button onClick={() => { setShowCareers(true); setExpandedItem(null); }} style={{
          background: "none",
          border: "none",
          borderBottom: showCareers ? `2px solid ${T.applied}` : "2px solid transparent",
          color: showCareers ? T.applied : T.textSecondary,
          fontFamily: T.body,
          fontSize: "13px",
          fontWeight: showCareers ? "600" : "400",
          padding: "16px 20px 14px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          flexShrink: 0,
          marginLeft: "auto",
          transition: "all 0.15s",
        }}>
          Career Paths
          <span style={{
            display: "block",
            fontFamily: T.mono,
            fontSize: "10px",
            color: T.textMuted,
            letterSpacing: "0.08em",
          }}>8 destinations</span>
        </button>
      </nav>

      {/* ── Main Content ── */}
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "32px 20px 80px" }}>

        {!showCareers ? (
          <>
            {/* Phase intro */}
            <div style={{
              borderLeft: `3px solid ${phase.color}`,
              paddingLeft: "20px",
              marginBottom: "32px",
            }}>
              <div style={{
                fontFamily: T.mono,
                fontSize: "11px",
                color: phase.color,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}>{phase.label} · {phase.years}</div>
              <p style={{
                fontSize: "14px",
                lineHeight: "1.75",
                color: T.textSecondary,
                margin: 0,
              }}>{phase.intro}</p>
            </div>

            {/* Section tabs */}
            <div style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}>
              {phase.sections.map((sec, idx) => {
                const isAI = isAISection(sec.title);
                const active = activeSection === idx;
                return (
                  <button key={idx} onClick={() => handleSectionChange(idx)} style={{
                    background: active
                      ? isAI ? T.dangerBg : `${phase.color}18`
                      : T.surface,
                    border: `1px solid ${active
                      ? isAI ? T.danger : phase.color
                      : T.border}`,
                    borderRadius: "6px",
                    color: active
                      ? isAI ? T.danger : phase.color
                      : T.textSecondary,
                    fontFamily: T.body,
                    fontSize: "12px",
                    fontWeight: active ? "600" : "400",
                    padding: "8px 14px",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}>
                    <span>{sec.icon}</span>
                    <span>{sec.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Items */}
            {(() => {
              const sec = phase.sections[activeSection];
              const isAI = isAISection(sec.title);
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {isAI && (
                    <div style={{
                      background: T.dangerBg,
                      border: `1px solid ${T.danger}40`,
                      borderRadius: "8px",
                      padding: "14px 18px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}>
                      <span style={{ fontSize: "18px", flexShrink: 0 }}>⚠️</span>
                      <div>
                        <div style={{ fontFamily: T.mono, fontSize: "11px", color: T.danger, letterSpacing: "0.1em", marginBottom: "4px" }}>AI OBSOLESCENCE RISK ASSESSMENT</div>
                        <div style={{ fontSize: "13px", color: "#f8a0a0", lineHeight: "1.6" }}>
                          Mathematicians face a uniquely complex AI disruption curve: AI is simultaneously a tool that amplifies mathematical productivity and a potential challenger to some categories of mathematical work. The items below reflect current honest assessment, not speculation.
                        </div>
                      </div>
                    </div>
                  )}
                  {sec.items.map((item, i) => {
                    const key = `${activePhase}-${activeSection}-${i}`;
                    const open = expandedItem === key;
                    return (
                      <button key={key} onClick={() => toggleItem(key)} style={{
                        background: open
                          ? isAI ? `${T.dangerBg}` : `${phase.color}10`
                          : T.surface,
                        border: `1px solid ${open
                          ? isAI ? `${T.danger}60` : `${phase.color}60`
                          : T.border}`,
                        borderRadius: "8px",
                        padding: "16px 18px",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                        width: "100%",
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                          <span style={{
                            fontFamily: T.body,
                            fontSize: "14px",
                            fontWeight: "500",
                            color: open
                              ? isAI ? T.danger : phase.color
                              : T.textPrimary,
                          }}>{item.name}</span>
                          <span style={{
                            fontFamily: T.mono,
                            fontSize: "16px",
                            color: T.textMuted,
                            flexShrink: 0,
                            transition: "transform 0.2s",
                            transform: open ? "rotate(45deg)" : "none",
                          }}>+</span>
                        </div>
                        {open && (
                          <p style={{
                            margin: "12px 0 0",
                            fontSize: "13px",
                            lineHeight: "1.75",
                            color: isAI ? "#f8c0c0" : T.textSecondary,
                            borderTop: `1px solid ${isAI ? T.danger + "30" : T.border}`,
                            paddingTop: "12px",
                          }}>{item.detail}</p>
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })()}
          </>
        ) : (

          /* ── Career Paths ── */
          <>
            <div style={{ marginBottom: "32px" }}>
              <div style={{
                fontFamily: T.mono,
                fontSize: "11px",
                color: T.applied,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}>Career Destinations · US-focused · 2025–2026 data</div>
              <p style={{ fontSize: "14px", color: T.textSecondary, lineHeight: "1.75", margin: 0 }}>
                Mathematics opens more distinct career destinations than almost any other undergraduate major — from the highest-paying quantitative jobs on Wall Street to mission-driven government research. The eight paths below span the full range. Tap any card to see the honest picture and salary data. AI disruption risk is assessed for each path.
              </p>
            </div>

            {/* AI Risk Legend */}
            <div style={{
              display: "flex", gap: "16px", flexWrap: "wrap",
              marginBottom: "28px",
              padding: "12px 16px",
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: "8px",
            }}>
              <span style={{ fontFamily: T.mono, fontSize: "11px", color: T.textMuted, letterSpacing: "0.08em" }}>AI RISK:</span>
              {[["Very Low", T.stats], ["Low", "#a0d8a0"], ["Medium", T.applied], ["High (entry)", T.danger]].map(([label, color]) => (
                <span key={label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, display: "inline-block" }}/>
                  <span style={{ fontFamily: T.mono, fontSize: "11px", color: T.textSecondary }}>{label}</span>
                </span>
              ))}
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
            }}>
              {data.careers.map((career, idx) => {
                const open = expandedCareer === idx;
                const riskLevel = career.aiRisk.startsWith("Very") ? T.stats
                  : career.aiRisk.startsWith("Low") ? "#a0d8a0"
                  : career.aiRisk.startsWith("Medium") ? T.applied
                  : T.danger;
                return (
                  <div key={idx} onClick={() => toggleCareer(idx)} style={{
                    background: open ? `${career.color}0d` : T.surface,
                    border: `1px solid ${open ? career.color + "60" : T.border}`,
                    borderRadius: "10px",
                    padding: "20px",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}>
                    {/* Card header */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "24px" }}>{career.icon}</span>
                        <span style={{
                          fontFamily: T.display,
                          fontSize: "18px",
                          color: open ? career.color : T.textPrimary,
                          lineHeight: 1.2,
                        }}>{career.path}</span>
                      </div>
                      <span style={{
                        fontFamily: T.mono,
                        fontSize: "18px",
                        color: T.textMuted,
                        flexShrink: 0,
                        transform: open ? "rotate(45deg)" : "none",
                        transition: "transform 0.2s",
                        display: "inline-block",
                      }}>+</span>
                    </div>

                    {/* Role chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "12px" }}>
                      {career.roles.map(r => (
                        <span key={r} style={{
                          fontFamily: T.mono,
                          fontSize: "10px",
                          color: career.color,
                          background: `${career.color}15`,
                          border: `1px solid ${career.color}30`,
                          borderRadius: "4px",
                          padding: "3px 8px",
                          letterSpacing: "0.03em",
                        }}>{r}</span>
                      ))}
                    </div>

                    {/* Salary badge */}
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: T.mono,
                      fontSize: "12px",
                      color: T.stats,
                      background: `${T.stats}15`,
                      border: `1px solid ${T.stats}30`,
                      borderRadius: "5px",
                      padding: "4px 10px",
                      marginBottom: "8px",
                    }}>
                      <span>$</span> {career.salary}
                    </div>

                    {/* AI Risk badge */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: open ? "16px" : "0",
                    }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: riskLevel, display: "inline-block", flexShrink: 0 }}/>
                      <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.textMuted, letterSpacing: "0.06em" }}>
                        AI RISK: {career.aiRisk}
                      </span>
                    </div>

                    {/* Expanded content */}
                    {open && (
                      <div style={{
                        borderTop: `1px solid ${T.border}`,
                        paddingTop: "16px",
                        marginTop: "4px",
                      }}>
                        <p style={{
                          fontSize: "13px",
                          lineHeight: "1.75",
                          color: T.textSecondary,
                          margin: "0 0 12px",
                        }}>{career.reality}</p>
                        <div style={{
                          fontFamily: T.mono,
                          fontSize: "11px",
                          color: T.textMuted,
                          background: T.surfaceHi,
                          borderRadius: "6px",
                          padding: "10px 12px",
                          letterSpacing: "0.04em",
                        }}>
                          ⚠ {career.aiRisk}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </main>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: `1px solid ${T.border}`,
        padding: "20px 24px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: T.mono,
          fontSize: "11px",
          color: T.textMuted,
          margin: 0,
          letterSpacing: "0.06em",
        }}>
          Tap phase tabs to navigate · Tap section tabs to filter · Tap items to expand · Career Paths tab for salary data
        </p>
        <p style={{
          fontFamily: T.mono,
          fontSize: "10px",
          color: T.textMuted,
          margin: "6px 0 0",
          letterSpacing: "0.04em",
        }}>
          Salary data: BLS OEWS May 2024–2025 · AMS Salary Survey 2021–23 · Levels.fyi · Glassdoor · Industry surveys · H1B filings
        </p>
      </footer>
    </div>
  );
}
