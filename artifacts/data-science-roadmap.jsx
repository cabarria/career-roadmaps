import { useState } from "react";

/* ── DATA SCIENCE ROADMAP ─ statistical-graphics aesthetic ──
   Light plotting-canvas theme: chart paper, hairline gridlines, and a
   categorical palette lifted from Okabe–Ito (the colorblind-safe qualitative
   colormap that is itself a native artifact of this field). Signature = a real
   statistical graphic in the header: a log-scale strip plot of where the eight
   destinations actually land on total compensation.
   display: Bricolage Grotesque · body: Instrument Sans · utility: IBM Plex Mono */

const C = {
  bg: "#E9ECF1",
  paper: "#FFFFFF",
  panel: "#FAFBFC",
  grid: "#D4DAE3",
  line: "#C2CAD6",
  ink: "#16202E",
  dim: "#4C5768",
  faint: "#8792A3",
  // Okabe–Ito qualitative palette
  blue: "#0072B2",
  green: "#009E73",
  purple: "#CC79A7",
  vermillion: "#D55E00",
  orange: "#B07500",
  sky: "#2E86AB",
  teal: "#00786B",
  slate: "#5B5F97",
};

const font = {
  display: "'Bricolage Grotesque', Georgia, serif",
  body: "'Instrument Sans', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "YRS 1–4",
      color: C.blue,
      intro:
        "Data science barely existed as a bachelor's degree a decade ago and is now one of the fastest-growing majors in the country — which is both the opportunity and the problem. The BLS projects roughly 34% growth for data scientists through 2034, about 23,400 openings a year, one of the strongest outlooks of any occupation. But degrees and certificates are being awarded far faster than that, and the crowding lands almost entirely at the entry level. The transcript gets you screened; an internship, a public portfolio, and one domain you actually understand get you hired.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "▣",
          items: [
            {
              name: "Calculus Sequence & Linear Algebra",
              detail:
                "Single and multivariable calculus plus matrix theory. Linear algebra is the one that matters most later — every model you'll meet, from regression to transformers, is linear algebra with extra steps.",
            },
            {
              name: "Probability Theory",
              detail:
                "Random variables, distributions, expectation, limit theorems. The course that separates people who can run a model from people who can say what its output means.",
            },
            {
              name: "Statistical Inference",
              detail:
                "Estimation, hypothesis testing, confidence intervals, maximum likelihood. Universally required and increasingly the part of the degree AI cannot substitute for.",
            },
            {
              name: "Programming for Data Science",
              detail:
                "Almost always Python (Stanford, Northwestern, and Rutgers all gate the major behind a Python course). R appears alongside it in stats-housed programs.",
            },
            {
              name: "Data Structures & Algorithms",
              detail:
                "Borrowed straight from the CS major — arrays, trees, hashing, Big-O. Required in most DS programs and tested in nearly every technical interview you'll sit.",
            },
            {
              name: "Regression & Statistical Learning",
              detail:
                "Linear and logistic models, regularization, resampling, tree ensembles. The methodological spine: most production 'ML' in industry is still a well-specified regression or a gradient-boosted tree.",
            },
            {
              name: "Databases & SQL",
              detail:
                "Relational modeling, joins, indexing, query optimization. Unglamorous and non-negotiable — SQL is the single most-used skill in every data job on this page.",
            },
            {
              name: "Data Visualization",
              detail:
                "Grammar of graphics, perceptual encoding, and when a chart lies. Often the course that most improves your hireability, because it's really a communication course.",
            },
            {
              name: "Data Ethics & Data in Context",
              detail:
                "Now a distinct required course at most programs (Stanford, Rutgers, Northwestern all mandate one). Consent, bias, privacy, and the provenance of the datasets you'll be handed.",
            },
            {
              name: "Domain Application Requirement",
              detail:
                "Most DS majors force 6+ credits in an applied field — biology, economics, public health, business. Take this seriously: domain knowledge is the most reliable differentiator in the job market.",
            },
          ],
        },
        {
          title: "The Hard Parts",
          icon: "△",
          items: [
            {
              name: "Mathematical Statistics",
              detail:
                "The classic weeder. Proof-based probability and inference at a level most students haven't seen — the difficulty is rigor, not topic difficulty, and it arrives suddenly.",
            },
            {
              name: "Linear Algebra Done Properly",
              detail:
                "Eigendecompositions, projections, and vector spaces as abstractions rather than recipes. Students who coast through the computational version pay for it in machine learning.",
            },
            {
              name: "Algorithms",
              detail:
                "DS majors take the CS department's algorithms course alongside CS majors, without the CS majors' two prior semesters of systems practice. Expect the heaviest coding load of the degree.",
            },
            {
              name: "Your First Genuinely Messy Dataset",
              detail:
                "Not a course — a rite. Duplicate keys, silent encoding failures, undocumented nulls, a timestamp column in three formats. Roughly 60–70% of real data work is this, and no class fully prepares you.",
            },
            {
              name: "Proof-Writing",
              detail:
                "Several programs (Stanford among them) require a dedicated proof course. It's the gate to graduate statistics and the thing self-taught candidates most conspicuously lack.",
            },
          ],
        },
        {
          title: "Skills You'll Build",
          icon: "◈",
          items: [
            {
              name: "SQL Fluency",
              detail:
                "Window functions, CTEs, query plans. If you can only be excellent at one thing by graduation, make it this — it's the common denominator across analyst, scientist, and engineer roles.",
            },
            {
              name: "Python: pandas, NumPy, scikit-learn",
              detail:
                "The working stack. Polars (Rust-based, 5–50× faster than pandas on large frames) is increasingly worth learning as a second dataframe library.",
            },
            {
              name: "Reproducible Workflow",
              detail:
                "Git, virtual environments, and the discipline of moving analysis out of notebooks into scripts. The single clearest signal separating trained candidates from bootcamp output.",
            },
            {
              name: "Data Cleaning & Validation",
              detail:
                "Schema checks, missingness diagnosis, outlier judgment. The task most often handed to juniors and now partially automated — which means the judgment layer is what you sell.",
            },
            {
              name: "Communicating to Non-Technical Audiences",
              detail:
                "Writing the two-paragraph version of a model result for someone who will make a decision from it. Repeatedly named by hiring managers as the top differentiator among technically equal candidates.",
            },
            {
              name: "Experiment Design Basics",
              detail:
                "Randomization, power, multiple comparisons. Undergraduates who arrive already comfortable with A/B testing methodology are unusual and immediately more employable in tech.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "⌗",
          items: [
            {
              name: "Jupyter, Quarto & the Notebook Problem",
              detail:
                "Notebooks are how you'll explore and a bad way to ship. Learn both the notebook and how to graduate code out of it; Quarto is the current standard for reproducible reports.",
            },
            {
              name: "R and the tidyverse",
              detail:
                "Still dominant in biostatistics, epidemiology, social science, and academic research. Being bilingual in Python and R opens the entire health and policy sector to you.",
            },
            {
              name: "Tableau or Power BI",
              detail:
                "Enterprise BI tools you'll almost certainly touch in your first job. Low ceiling, but not knowing one is a visible gap on an analyst résumé.",
            },
            {
              name: "LLM Assistants — the honest read",
              detail:
                "Claude and similar tools now handle routine SQL, exploratory plotting, and basic feature engineering reliably. That was the traditional scope of a junior hire, which is exactly why the entry rung has thinned. Use them, and be able to catch them when they're confidently wrong.",
            },
            {
              name: "AutoML and its trap",
              detail:
                "Model-building is the most automatable part of the pipeline — low open-endedness, low context dependence. Practitioners consistently report that overconfident AutoML output causes more bad decisions than slow analysis ever did.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "◇",
          items: [
            {
              name: "Internships — the actual gate",
              detail:
                "Recruiters report that roles which two years ago went to a student with coursework now require at least one internship plus a public portfolio plus a real reference. Apply in sophomore year for junior-summer placement.",
            },
            {
              name: "ASA DataFest",
              detail:
                "A nationally coordinated 48-hour undergraduate competition on a large real dataset from an actual company. Free, open to any major, and specifically watched by recruiters who attend to see how students think under pressure.",
            },
            {
              name: "Kaggle — with a caveat",
              detail:
                "Useful for technique and visible as a portfolio. But a Titanic notebook is the single most common artifact in the entry-level applicant pool; only a genuinely original problem or a strong competition finish signals anything.",
            },
            {
              name: "Undergraduate Research or an REU",
              detail:
                "The route into a funded PhD and the strongest signal for research-track roles. Statistics, biostatistics, and computational-science labs all take undergraduates who can code.",
            },
            {
              name: "One End-to-End Deployed Project",
              detail:
                "Ingest real data, model it, ship it somewhere a stranger can use, monitor it. One of these outweighs five notebook analyses because almost no applicant has done it.",
            },
            {
              name: "A Domain, Not Just a Toolkit",
              detail:
                "Healthcare, credit risk, supply chain, energy, sports, public policy. The candidates clearing the entry-level crowd are almost always the ones who can talk about a business, not just a model.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "YRS 5–6",
      color: C.green,
      intro:
        "Data science is one of the fields where the master's functions as the working credential rather than an optional extra — but almost nobody gets it funded. These are professional degrees, and the cost spread is the most extreme in higher education: Georgia Tech's online analytics MS runs roughly $10K total for the same diploma as its on-campus program, while comparable private programs run $80–120K. The degree also does double duty as the standard career-change instrument for people arriving from economics, biology, physics, or nursing.",
      sections: [
        {
          title: "Program Types",
          icon: "▣",
          items: [
            {
              name: "MS in Data Science (professional)",
              detail:
                "Coursework-based, 1–2 years, capstone rather than thesis. The default. Quality varies enormously — check whether the faculty are researchers or adjuncts, and whether the capstone involves a real external client.",
            },
            {
              name: "MS in Statistics or Biostatistics",
              detail:
                "Theory-first and the most respected credential for inference-heavy work. Biostatistics in particular is the direct entry ticket to pharma, CROs, and academic medical centers — a narrower door but a far less crowded one.",
            },
            {
              name: "MS in Analytics",
              detail:
                "Business-facing, optimization and decision-science heavy. Georgia Tech's OMSA is the archetype: 36 credits, part-time, taken while working, with tracks from business analytics to computational data analytics.",
            },
            {
              name: "MS in CS with an ML concentration",
              detail:
                "The engineering-heavy route, and the better one if the goal is machine learning engineering rather than analysis. Expect systems, distributed computing, and deep learning over inference.",
            },
            {
              name: "Thesis-track research MS",
              detail:
                "Smaller, sometimes partially funded, and explicitly a PhD bridge. Worth pursuing only if you want research — many US PhD programs admit straight from a bachelor's and won't transfer your credits anyway.",
            },
            {
              name: "Online and part-time programs",
              detail:
                "No longer a compromise. Georgia Tech, UT Austin (~$10K, 30 credits), and Berkeley's MIDS have made the online MS the default choice for working professionals, with identical diplomas.",
            },
          ],
        },
        {
          title: "Paying For It",
          icon: "◐",
          items: [
            {
              name: "Assume self-funded",
              detail:
                "Unlike a PhD, professional data science master's degrees rarely come with tuition waivers or stipends. TA and RA positions exist but are scarce and usually reserved for thesis-track students.",
            },
            {
              name: "The $10K vs $120K spread",
              detail:
                "Georgia Tech OMSA and UT Austin's online MSDS sit around $10K total. Top private on-campus programs run $80–120K. The employer signal difference does not scale with the price difference.",
            },
            {
              name: "Employer tuition benefits",
              detail:
                "The most underused funding route in this field. Many large employers reimburse $5–10K a year, which fully covers a low-cost online MS taken over three years while you keep earning.",
            },
            {
              name: "The honest ROI math",
              detail:
                "One salary survey puts data scientists with a bachelor's at ~$101K and a master's at ~$109K. An $8K annual premium justifies a $10K degree quickly and a $120K degree slowly. Run the arithmetic before you enroll.",
            },
            {
              name: "What the degree actually buys",
              detail:
                "Screening. It gets a résumé past filters that reject bachelor's-only applicants and reframes a non-technical background. It does not substitute for experience, and programs that imply otherwise are selling something.",
            },
          ],
        },
        {
          title: "Advanced Methods",
          icon: "◈",
          items: [
            {
              name: "Statistical Learning Theory",
              detail:
                "Bias-variance formally, generalization bounds, model selection. The layer that lets you reason about why a model will fail rather than only measuring that it did.",
            },
            {
              name: "Causal Inference",
              detail:
                "Potential outcomes, instrumental variables, difference-in-differences, propensity methods. Repeatedly named as one of the genuinely scarce skills in the 2026 market — and one AI is worst at.",
            },
            {
              name: "Experimental Design at Scale",
              detail:
                "CUPED variance reduction, sequential testing, interference between units, multiple-comparison control across hundreds of concurrent tests. The core technical content of product data science in tech.",
            },
            {
              name: "Bayesian Methods",
              detail:
                "Hierarchical models, MCMC, Stan or PyMC. Dominant in pharma, marketing mix modeling, and any setting with small samples and strong priors.",
            },
            {
              name: "Time Series & Forecasting",
              detail:
                "ARIMA through state-space models and modern gradient-boosted forecasting. Demand planning, energy, and finance run on this, and it carries a documented pay premium.",
            },
            {
              name: "Deep Learning",
              detail:
                "CNNs, transformers, attention, fine-tuning. Essential for computer vision and NLP roles — and notably not what most enterprise data science jobs actually require day to day.",
            },
            {
              name: "MLOps & Production ML",
              detail:
                "Feature stores, model registries, monitoring, drift detection, retraining. The gap between a notebook model and a deployed one is where most junior candidates are exposed.",
            },
          ],
        },
        {
          title: "The Working Stack",
          icon: "⌗",
          items: [
            {
              name: "Snowflake or Databricks",
              detail:
                "The two platform poles. Snowflake is SQL-first and lower friction for analytics; Databricks is the lakehouse choice for teams training custom models, with MLflow and GPU clusters built in.",
            },
            {
              name: "dbt",
              detail:
                "Brought version control, testing, and documentation to SQL transformations and effectively created the analytics engineer role. Now integrated across every major warehouse.",
            },
            {
              name: "Airflow, Dagster & orchestration",
              detail:
                "Scheduling and dependency management for pipelines. Airflow 3.0 remains the incumbent; Dagster is the preferred choice on newer Python-first stacks.",
            },
            {
              name: "PyTorch",
              detail:
                "The de facto deep learning standard, with torch.compile now stable. Meanwhile XGBoost and LightGBM still beat neural networks on the structured tabular data most companies actually have.",
            },
            {
              name: "MLflow & Weights and Biases",
              detail:
                "Experiment tracking and model lifecycle management. MLflow 3.x now tracks LLMs and agents natively; W&B is the premium alternative for collaboration and visualization.",
            },
            {
              name: "Docker, Kubernetes & cloud ML",
              detail:
                "SageMaker, Vertex AI, or Azure ML. Cloud fluency is worth a documented $14–18K premium on top of the role baseline — one of the cheapest skills to acquire relative to its return.",
            },
            {
              name: "The AI/RAG stack",
              detail:
                "LangGraph for agentic workflows, LlamaIndex for retrieval, Qdrant or Weaviate for vectors, Hugging Face for models. LLM fine-tuning and RAG architecture add $20–50K to a machine learning engineer's offer.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      label: "PhD & Research",
      years: "YRS 7+",
      color: C.purple,
      intro:
        "A PhD is not required for most data science jobs and is a genuinely bad investment if you want one. It is the entry ticket to a specific and narrow set of roles: research scientist at an industry lab, faculty, quantitative research at a systematic fund. Programs run 4–6 years, live in statistics, computer science, biostatistics, or information schools rather than a single department, and are fully funded with a tuition waiver and stipend. If a program asks you to pay, that is diagnostic — walk away.",
      sections: [
        {
          title: "How the PhD Works",
          icon: "▣",
          items: [
            {
              name: "Admission straight from a bachelor's",
              detail:
                "Most US programs admit undergraduates directly. A separate master's can even slow you down, since many programs don't transfer those credits. Research experience matters more than grades past a threshold.",
            },
            {
              name: "Rotations & advisor matching",
              detail:
                "Year one is heavy coursework, and in many programs you rotate through two or three labs before committing. Advisor fit predicts completion and timeline more than institutional prestige does.",
            },
            {
              name: "Qualifying exams",
              detail:
                "Usually year one or two, testing breadth across probability, inference, and computing. Passing makes you a candidate; failing is the most common exit point.",
            },
            {
              name: "Conference-driven dissertations",
              detail:
                "In ML-leaning programs the thesis is a stapled set of NeurIPS, ICML, or ICLR papers on a six-month review cycle. Statistics-housed programs still run on slower journal timelines — a real difference in daily rhythm.",
            },
            {
              name: "Full funding, always",
              detail:
                "Tuition waiver plus a stipend, typically via a mix of teaching and research assistantships. Compare stipends against local cost of living, not nominally — $35K in a cheap city beats $50K in the Bay Area.",
            },
            {
              name: "Median time to degree: 5–6 years",
              detail:
                "Applied ML tends toward five; theory and systems run six or more. Very few finish in four. Industry internships during years three and four are standard and are how most graduates get hired.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "✦",
          items: [
            {
              name: "Foundation model evaluation & agents",
              detail:
                "How to measure capability honestly, benchmark contamination, and whether agentic systems can do open-ended analysis. Recent benchmark work finds AI agents strong on model-building subtasks and much weaker on open-ended, context-dependent ones.",
            },
            {
              name: "Causal machine learning",
              detail:
                "Double machine learning, causal forests, heterogeneous treatment effects. The most commercially valuable frontier, because it answers 'what should we do' rather than 'what will happen'.",
            },
            {
              name: "Uncertainty quantification & conformal prediction",
              detail:
                "Distribution-free prediction intervals with finite-sample guarantees — a fast-moving area precisely because deployed models need calibrated confidence, not just point predictions.",
            },
            {
              name: "Differential privacy & federated learning",
              detail:
                "Formal privacy guarantees for released statistics and training on data that never leaves the device. Now operational at the US Census Bureau and across mobile platforms.",
            },
            {
              name: "Algorithmic fairness & auditing",
              detail:
                "Defining, measuring, and contesting disparate impact in deployed systems, plus the emerging methodology of auditing models you can't see inside.",
            },
            {
              name: "High-dimensional & post-selection inference",
              detail:
                "Valid p-values after you've used the data to choose the model. A deep statistics problem that most applied practice quietly ignores.",
            },
            {
              name: "ML for science",
              detail:
                "Protein structure, climate emulation, materials discovery, single-cell genomics. The fastest route from a data science PhD into work with obvious external stakes.",
            },
          ],
        },
        {
          title: "Where PhDs Land",
          icon: "◇",
          items: [
            {
              name: "Industry research labs dominate",
              detail:
                "Roughly 60% of data science doctorates go to industry research — Google, Meta, Microsoft, Amazon, and the frontier labs — rather than academia. This is the expected outcome, not a consolation prize.",
            },
            {
              name: "The academic market is small",
              detail:
                "Tenure-track statistics and data science positions exist and are less brutal than the humanities market, but the ratio of PhDs to openings still runs heavily against you. Plan for industry and treat faculty as the upside case.",
            },
            {
              name: "The PhD premium is real but bounded",
              detail:
                "A doctorate carries roughly a $20–50K entry-level premium in research-focused roles. In engineering-focused roles it carries almost none — five years of experience would have paid better.",
            },
            {
              name: "National labs and government science",
              detail:
                "Los Alamos, Sandia, NIST, NIH. Lower ceilings than industry, but genuine research autonomy, publication freedom, and stability that industry labs conspicuously lack.",
            },
          ],
        },
        {
          title: "AI Inside Research",
          icon: "⌗",
          items: [
            {
              name: "Agentic research assistants",
              detail:
                "Multi-agent pipelines that decompose a project into cleaning, EDA, and modeling subtasks now handle a real share of the mechanical work. The reviewing, framing, and deciding stay with you.",
            },
            {
              name: "Empirical work is commoditizing",
              detail:
                "When a competent baseline takes an afternoon, running the experiment stops being the contribution. Theory, evaluation design, and hard-won domain grounding are what still differentiate a paper.",
            },
            {
              name: "The reproducibility problem got worse",
              detail:
                "More output, faster, with less verification. Reviewer load at major ML conferences has become a live crisis, and the field's response to it is itself now an active research area.",
            },
            {
              name: "Human–AI collaboration as a subject",
              detail:
                "Benchmarks like AgentDS explicitly compare AI-only pipelines against human-AI teams on domain-specific problems across healthcare, banking, and manufacturing — the collaboration itself is now measurable.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Product & Decision Science",
      icon: "🧪",
      color: C.blue,
      anchor: 130,
      roles: ["Data Analyst", "Data Scientist", "Product DS", "Sr Data Scientist", "Staff DS"],
      reality:
        "The archetypal tech data science role, and it is much less about modeling than the title suggests: experiment design, metric definition, causal inference, and persuading a product team. Entry is the crowded end — thousands of similar résumés per junior opening — while mid-level and senior roles routinely sit unfilled for four to six months. Most hires land at mid-level with two to six years of experience, which means the realistic route in is often analyst first, scientist second.",
      ai: "Moderate. LLMs cover the SQL and exploratory plotting layer; experiment design, metric judgment, and defending a causal claim to a skeptical VP do not automate.",
      salary:
        "BLS median $112,590 (May 2024 OEWS) · Levels.fyi median total comp ~$176K · entry ~$95K → principal ~$260K base · $330K+ total comp at top tech",
    },
    {
      path: "Machine Learning & AI Engineering",
      icon: "🤖",
      color: C.vermillion,
      anchor: 212,
      roles: ["ML Engineer", "AI Engineer", "MLOps Engineer", "Sr MLE", "Principal MLE"],
      reality:
        "The highest-paying mainstream destination and the one with the steepest software engineering bar — you own the full production lifecycle, from training through deployment, monitoring, and the 3am page. Pay bifurcates sharply: enterprise MLEs cluster around $170–245K total, while a small frontier-lab cohort with the same title clears $600K–$1M. Notably, most people in these roles arrived from backend or infrastructure engineering rather than from data science.",
      ai: "Low displacement, high leverage. The work is building the AI systems. LLM fine-tuning and RAG architecture specifically add $20–50K over a generalist.",
      salary:
        "Base $128K–$186K · avg total comp ~$212K (Built In 2026) · Levels.fyi median ~$260K · Meta median ~$430K · frontier labs $600K–$795K+",
    },
    {
      path: "Data & Analytics Engineering",
      icon: "🛠",
      color: C.teal,
      anchor: 130,
      roles: ["Analytics Engineer", "Data Engineer", "Platform Engineer", "Sr Data Engineer"],
      reality:
        "The least glamorous and most consistently hireable path in this whole set. Data engineers out-earn data scientists on base pay at most employers, and the specialized expertise — dbt, Airflow, streaming, warehouse architecture — keeps the role scarce even as analyst pools flood. The World Economic Forum listed big-data specialists as the fastest-growing technology job through 2030. If your priority is a job offer rather than a job title, start here.",
      ai: "Low to moderate. Code generation speeds up pipeline writing; data modeling, governance, and diagnosing why the nightly job silently produced wrong numbers remain human work.",
      salary:
        "Median base $125K–$135K across sources · SF median total ~$180K · Houston surprisingly strong at ~$173K · senior $160K–$210K base",
    },
    {
      path: "Research Scientist",
      icon: "🔬",
      color: C.purple,
      anchor: 300,
      roles: ["Research Scientist", "Applied Scientist", "Research Engineer", "Sr Staff Scientist"],
      reality:
        "PhD-gated in practice, and the compensation numbers at the top are genuinely distorting: Meta research scientists run $280–550K, and OpenAI's posted band is $771K to $1.28M with a median near $1M. Treat those as the extreme tail of a lottery with very few tickets, not a plan. Note also that 'applied scientist' hides two different jobs — a product-science flavor built on experimentation and causal inference, and a research-lab flavor in biostatistics and pharma that is more common than candidates expect.",
      ai: "Low displacement, but the frontier moves fast enough that specific expertise depreciates. The scarce skill is judgment about what's worth studying.",
      salary:
        "Industry research $250K–$563K total comp · Meta RS $280K–$550K+ · OpenAI RS $771K–$1.28M (median ~$1M) · academic postdoc $60K–$80K",
    },
    {
      path: "Quantitative Research (Finance)",
      icon: "📈",
      color: C.slate,
      anchor: 400,
      roles: ["Quant Researcher", "Quant Analyst", "Strategist", "Portfolio Manager"],
      reality:
        "The highest-paying destination per unit of headcount and the narrowest door: systematic hedge funds and prop trading firms recruit from a tiny pool of elite mathematics, physics, and statistics backgrounds, often PhD-level. Buy-side researchers generate alpha directly and are paid accordingly; bank-side quant roles support trading desks and pay perhaps a third as much for comparable experience. Firm type matters as much as seniority. Geographically concentrated in New York, Chicago, and London.",
      ai: "Low. Signal research is adversarial — any edge a widely available model can find has already been arbitraged away. But the tooling floor keeps rising.",
      salary:
        "Mid-level (3–6 yrs) $150K–$280K total at top firms · senior with a track record $500K–$1M+ · bank-side quant materially lower · PhD interns ~$11K/week at Optiver",
    },
    {
      path: "Biostatistics & Health Data",
      icon: "🧬",
      color: C.green,
      anchor: 114,
      roles: ["Biostatistician", "Clinical Data Scientist", "RWE Scientist", "Principal Biostatistician"],
      reality:
        "A quieter, more stable, and much less crowded corridor than tech data science. An MS in biostatistics is the standard entry credential, and the work — clinical trial design, regulatory submissions, real-world evidence — sits behind FDA process requirements that function as a genuine automation moat. Pharma and CROs pay meaningfully more than academic medical centers. R rather than Python is often the house language.",
      ai: "Low. Regulatory statistical analysis plans require traceable, pre-specified, human-accountable methodology. Speed is not the constraint here; defensibility is.",
      salary:
        "Average ~$109K–$114K · typical band $95K–$122K · pharma and CRO roles reach $130K–$175K · academic medical centers lower",
    },
    {
      path: "Public Sector & Policy",
      icon: "🏛",
      color: C.orange,
      anchor: 100,
      roles: ["Statistician (Federal)", "Policy Analyst", "Civic Data Scientist", "Chief Data Officer"],
      reality:
        "Census, BLS, CBO, state health departments, city analytics offices, think tanks, and civic tech nonprofits. Pay ceilings are visibly lower — federal GS scales cap well below industry — and the trade is stability, mission, and problems nobody else is allowed to work on: differential privacy for census releases, benefits fraud detection, epidemiological surveillance. Hiring is slower and more credential-driven; a master's is close to expected.",
      ai: "Low displacement, high procedural friction. Public-sector adoption lags, and transparency and auditability requirements limit what black-box tooling can be used at all.",
      salary:
        "$80K–$130K typical · federal statistician GS-12/13 roughly $90K–$140K depending on locality · senior policy and CDO roles $140K–$180K",
    },
    {
      path: "Analytics Leadership & Consulting",
      icon: "📊",
      color: C.sky,
      anchor: 150,
      roles: ["Analytics Manager", "Head of Data", "Director of Analytics", "Fractional Data Lead"],
      reality:
        "Where a decade of individual-contributor work usually goes, and increasingly a destination in itself: a visible market shift is that companies want someone to build a data system and hand it over rather than staff a permanent team. That favors experienced independents and consultants over junior hires. The skills that get you here are the ones least covered in any curriculum — stakeholder management, prioritization, and knowing which questions are worth answering.",
      ai: "Low. AI increases the number of analyses produced and therefore the value of someone who can tell which ones are trustworthy and which matter.",
      salary:
        "Analytics manager ~$131K average · director of analytics ~$185K · VP and CDO $200K–$300K+ · independent consulting highly variable, $150–$400/hr",
    },
  ],
};

export default function DataScienceRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);

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
    borderRadius: 3,
    border: `1px solid ${C.line}`,
    background: C.paper,
    color: C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  // ── signature: log-scale strip plot of destination compensation ──
  const LO = 80;
  const HI = 700;
  const px = (v) =>
    ((Math.log(v) - Math.log(LO)) / (Math.log(HI) - Math.log(LO))) * 100;
  const ticks = [100, 200, 400];

  const StripPlot = () => (
    <div
      style={{
        background: C.paper,
        border: `1px solid ${C.line}`,
        borderRadius: 4,
        padding: "16px 18px 12px",
        marginTop: 22,
      }}
    >
      <div
        style={{
          fontFamily: font.mono,
          fontSize: 10.5,
          letterSpacing: "0.12em",
          color: C.faint,
          marginBottom: 14,
        }}
      >
        FIG. 1 — TYPICAL TOTAL COMPENSATION BY DESTINATION · LOG SCALE · USD THOUSANDS
      </div>

      <div style={{ position: "relative", height: 58 }}>
        {/* axis */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 18,
            height: 1,
            background: C.line,
          }}
        />
        {ticks.map((t) => (
          <div key={t}>
            <div
              style={{
                position: "absolute",
                left: `${px(t)}%`,
                bottom: 18,
                width: 1,
                height: 34,
                background: C.grid,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: `${px(t)}%`,
                bottom: 0,
                transform: "translateX(-50%)",
                fontFamily: font.mono,
                fontSize: 10,
                color: C.faint,
              }}
            >
              ${t}K
            </div>
          </div>
        ))}
        {/* points */}
        {data.careers.map((c, i) => (
          <div
            key={c.path}
            title={`${c.path} · ~$${c.anchor}K`}
            style={{
              position: "absolute",
              left: `${px(c.anchor)}%`,
              bottom: 18 + (i % 3) * 11,
              width: 9,
              height: 9,
              marginLeft: -4.5,
              marginBottom: -4.5,
              borderRadius: "50%",
              background: c.color,
              border: `1.5px solid ${C.paper}`,
            }}
          />
        ))}
      </div>

      <p
        style={{
          margin: "8px 0 0",
          fontSize: 12.5,
          lineHeight: 1.5,
          color: C.dim,
          maxWidth: 620,
        }}
      >
        Each dot is one of the eight destinations below. The axis is logarithmic because the
        spread demands it — quantitative research and frontier-lab research sit an order of
        magnitude above public-sector work doing recognizably similar analysis.
      </p>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        backgroundImage: `linear-gradient(${C.grid} 1px, transparent 1px), linear-gradient(90deg, ${C.grid} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        color: C.ink,
        fontFamily: font.body,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
      `}</style>

      <header style={{ padding: "34px 20px 8px", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 10.5,
            color: C.vermillion,
            letterSpacing: "0.16em",
            marginBottom: 14,
          }}
        >
          FIELD ROADMAP · DATA SCIENCE · COMPILED JUL 2026
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 800,
            fontSize: "clamp(38px, 8.5vw, 68px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            margin: 0,
            color: C.ink,
          }}
        >
          Data Science
        </h1>
        <p
          style={{
            color: C.dim,
            fontSize: 15.5,
            maxWidth: 640,
            margin: "16px 0 0",
            lineHeight: 1.55,
          }}
        >
          The fastest-growing major with the most crowded front door. Four years, three
          degrees, eight destinations — with the entry-level squeeze and the AI exposure
          marked honestly on every one.
        </p>

        <StripPlot />
      </header>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 20px 60px" }}>
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
                  borderBottom: `3px solid ${on ? p.color : C.line}`,
                  color: on ? p.color : C.dim,
                  background: on ? C.paper : C.panel,
                  fontWeight: on ? 600 : 400,
                }}
              >
                {p.label}
                <span style={{ color: C.faint, marginLeft: 8, fontSize: 10 }}>{p.years}</span>
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
              borderBottom: `3px solid ${showCareers ? C.vermillion : C.line}`,
              color: showCareers ? C.vermillion : C.dim,
              background: showCareers ? C.paper : C.panel,
              fontWeight: showCareers ? 600 : 400,
            }}
          >
            Career Paths
            <span style={{ color: C.faint, marginLeft: 8, fontSize: 10 }}>N = 8</span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            <div
              style={{
                background: C.paper,
                border: `1px solid ${C.line}`,
                borderLeft: `4px solid ${phase.color}`,
                borderRadius: 4,
                padding: "16px 18px",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 10.5,
                  color: phase.color,
                  letterSpacing: "0.14em",
                  marginBottom: 8,
                }}
              >
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 15, lineHeight: 1.62, maxWidth: 760 }}>
                {phase.intro}
              </p>
            </div>

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
                      padding: "8px 12px",
                      fontSize: 11.5,
                      border: `1px solid ${on ? phase.color : C.line}`,
                      color: on ? phase.color : C.dim,
                      background: on ? C.paper : "transparent",
                      fontWeight: on ? 600 : 400,
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{s.icon}</span>
                    {s.title}
                  </button>
                );
              })}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <button
                    key={item.name}
                    onClick={() => setExpandedItem(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: C.paper,
                      border: `1px solid ${open ? phase.color : C.line}`,
                      borderRadius: 4,
                      padding: "13px 16px",
                      cursor: "pointer",
                      color: C.ink,
                      transition: "all .15s",
                      display: "flex",
                      gap: 12,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: font.mono,
                        fontSize: 10.5,
                        color: open ? phase.color : C.faint,
                        width: 20,
                        flexShrink: 0,
                        paddingTop: 3,
                        userSelect: "none",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: font.display,
                            fontWeight: 700,
                            fontSize: 15.5,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontFamily: font.mono,
                            fontSize: 14,
                            color: open ? phase.color : C.faint,
                            flexShrink: 0,
                          }}
                        >
                          {open ? "−" : "+"}
                        </span>
                      </div>
                      {open && (
                        <p
                          style={{
                            margin: "9px 0 0",
                            color: C.dim,
                            fontSize: 14,
                            lineHeight: 1.62,
                            maxWidth: 720,
                          }}
                        >
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                background: C.paper,
                border: `1px solid ${C.line}`,
                borderLeft: `4px solid ${C.vermillion}`,
                borderRadius: 4,
                padding: "16px 18px",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 10.5,
                  color: C.vermillion,
                  letterSpacing: "0.14em",
                  marginBottom: 8,
                }}
              >
                EIGHT DESTINATIONS · SOURCES NOTED PER CARD
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.62, color: C.ink, maxWidth: 760 }}>
                Base wages anchor to BLS OEWS; total-compensation figures come from Levels.fyi,
                Built In, and recruiter placement data, which sample equity-heavy tech employers
                and therefore read higher. Both are accurate for the market they measure. Every
                card carries an honest read on AI exposure.
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
                      background: C.paper,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderTop: `4px solid ${c.color}`,
                      borderRadius: 4,
                      padding: 16,
                      cursor: "pointer",
                      color: C.ink,
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                      <span style={{ fontSize: 20 }} aria-hidden="true">
                        {c.icon}
                      </span>
                      <span
                        style={{
                          fontFamily: font.display,
                          fontWeight: 700,
                          fontSize: 16,
                          color: c.color,
                          letterSpacing: "-0.01em",
                          lineHeight: 1.2,
                        }}
                      >
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
                            padding: "3px 7px",
                            borderRadius: 2,
                            border: `1px solid ${C.grid}`,
                            color: C.dim,
                            background: C.panel,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    {open && (
                      <div style={{ marginTop: 13 }}>
                        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 1.62, color: C.dim }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 11,
                            lineHeight: 1.55,
                            color: C.dim,
                            borderTop: `1px solid ${C.grid}`,
                            paddingTop: 10,
                            marginBottom: 10,
                          }}
                        >
                          <span style={{ color: c.color, fontWeight: 600 }}>AI EXPOSURE ▸ </span>
                          {c.ai}
                        </div>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 11.5,
                            fontWeight: 500,
                            color: C.ink,
                            background: "#F1F5F1",
                            border: `1px solid #C9DDCE`,
                            borderRadius: 3,
                            padding: "9px 10px",
                            lineHeight: 1.55,
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
            marginTop: 34,
            paddingTop: 14,
            borderTop: `1px solid ${C.line}`,
            fontFamily: font.mono,
            fontSize: 10.5,
            color: C.faint,
            letterSpacing: "0.05em",
            lineHeight: 1.7,
          }}
        >
          TAP ANY ROW OR CARD TO EXPAND · SOURCES: BLS OEWS MAY 2024 &amp; OOH PROJECTIONS,
          LEVELS.FYI 2026, BUILT IN 2026, ROBERT HALF 2026 SALARY GUIDE, GLASSDOOR, INDEED,
          KORE1 PLACEMENT DATA, MOTION RECRUITMENT, NSF SURVEY OF EARNED DOCTORATES, ASA
          DATAFEST, PROGRAM CATALOGS (STANFORD, NORTHWESTERN, RUTGERS, GEORGIA TECH, DUKE)
        </footer>
      </main>
    </div>
  );
}
