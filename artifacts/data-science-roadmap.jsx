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
        "Data science is a young bachelor's degree that has grown quickly, which is both the opportunity and the problem. The BLS projects 35% growth for data scientists from 2025 to 2035, about 24,800 openings a year, and lists a bachelor's as the typical entry credential. But degrees and certificates are being awarded in large numbers, and the crowding lands almost entirely at the entry level. The transcript gets you screened; an internship, a public portfolio, and one domain you actually understand get you hired.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "▣",
          items: [
            {
              name: "Calculus Sequence & Linear Algebra",
              detail:
                "Single and multivariable calculus plus matrix theory (Stanford requires Math 51 and 52; Northwestern requires MATH 220, 230, and 240 linear algebra). Linear algebra is the one that matters most later: every model you'll meet, from regression to transformers, is linear algebra with extra steps.",
            },
            {
              name: "Probability Theory",
              detail:
                "Random variables, distributions, expectation, limit theorems. The course that separates people who can run a model from people who can say what its output means.",
            },
            {
              name: "Statistical Inference",
              detail:
                "Estimation, hypothesis testing, confidence intervals, maximum likelihood. Required across the programs checked, and a prerequisite for declaring the major at Rutgers.",
            },
            {
              name: "Programming for Data Science",
              detail:
                "Almost always Python (Stanford's gateway course DATASCI 112 uses Python, and Northwestern requires STAT 201, programming for data science). R appears alongside it in stats-housed programs.",
            },
            {
              name: "Data Structures & Algorithms",
              detail:
                "Borrowed straight from the CS major: arrays, trees, hashing, Big-O. Grand Valley State requires it (CIS 263), and Maryland's data science specialization requires CMSC 351 in the CS major.",
            },
            {
              name: "Regression & Statistical Learning",
              detail:
                "Linear and logistic models, regularization, resampling, tree ensembles. The methodological spine. One 2026 stack guide says scikit-learn covers about 80% of enterprise classification and regression tasks.",
            },
            {
              name: "Databases & SQL",
              detail:
                "Relational modeling, joins, indexing, query optimization. Unglamorous and non-negotiable: SQL appears in nearly every job-posting snippet and interview guide reviewed.",
            },
            {
              name: "Data Visualization",
              detail:
                "Grammar of graphics, perceptual encoding, and when a chart lies. Grand Valley State requires a dedicated visualization course (CIS 320). Treat it as a communication course.",
            },
            {
              name: "Data Ethics Requirement",
              detail:
                "Stanford requires a data, technology, and ethics course, and Northwestern lists a one-unit ethics elective. Consent, bias, privacy, and the provenance of the datasets you'll be handed.",
            },
            {
              name: "Domain Application Requirement",
              detail:
                "Grand Valley State requires 6 credits in an applied domain, Northwestern requires two units of technical and domain electives, and Stanford requires neuroscience and cognitive psychology. Hiring guides stress industry-specific knowledge.",
            },
          ],
        },
        {
          title: "The Hard Parts",
          icon: "△",
          items: [
            {
              name: "Probability",
              detail:
                "One student-facing guide names probability and linear algebra as the hardest courses, calling them the mathematical backbone of machine learning.",
            },
            {
              name: "Linear Algebra Done Properly",
              detail:
                "The same guide calls it the steepest climb for students who struggle with abstract math, and the backbone of machine learning.",
            },
            {
              name: "Algorithms",
              detail:
                "Maryland's data science specialization sits inside the CS major and requires CMSC 351. The same guide says debugging often takes longer than writing code.",
            },
            {
              name: "Your First Genuinely Messy Dataset",
              detail:
                "Not a course, a rite. Duplicate keys, silent encoding failures, undocumented nulls, a timestamp column in three formats. One student guide calls cleaning messy real-world data tedious and discouraging.",
            },
            {
              name: "Proof-Writing",
              detail:
                "Stanford requires a dedicated proof-writing course. Check whether your program does.",
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
                "Window functions, CTEs, query plans. SQL shows up in nearly every posting and interview guide reviewed, across analyst, scientist, and engineer roles.",
            },
            {
              name: "Python: pandas, NumPy, scikit-learn",
              detail:
                "The working stack. One 2026 stack guide reports Polars running 5 to 50 times faster than pandas on common operations.",
            },
            {
              name: "Reproducible Workflow",
              detail:
                "Git, virtual environments, and the discipline of moving analysis out of notebooks into scripts. Hiring guides list a public GitHub as part of the portfolio bar.",
            },
            {
              name: "Data Cleaning & Validation",
              detail:
                "Schema checks, missingness diagnosis, outlier judgment. One 2026 salary guide says LLMs now handle routine SQL and basic feature engineering, so the judgment layer is what you sell.",
            },
            {
              name: "Communicating to Non-Technical Audiences",
              detail:
                "Writing the two-paragraph version of a model result for someone who will make a decision from it. Listed as a requirement in Glassdoor posting snippets for experimentation roles.",
            },
            {
              name: "Experiment Design Basics",
              detail:
                "Randomization, power, multiple comparisons. A 2026 product data scientist interview guide says experiment design and metric reasoning dominate the interview loop.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "⌗",
          items: [
            {
              name: "Jupyter & the Notebook Problem",
              detail:
                "Notebooks are how you'll explore and a bad way to ship. Learn both the notebook and how to graduate code out of it.",
            },
            {
              name: "R and the tidyverse",
              detail:
                "A 2025 Akkodis blog says SAS has long dominated clinical-trial programming, with R and Python increasingly used alongside it. Being bilingual in Python and R keeps the health and policy sector open to you.",
            },
            {
              name: "Tableau or Power BI",
              detail:
                "Both appear on 2026 lists of leading data science tools, and one salary guide says analysts who combine SQL, a BI tool, and Python earn more than those with Excel and SQL alone.",
            },
            {
              name: "LLM Assistants: the honest read",
              detail:
                "One 2026 salary guide says LLMs now handle routine SQL, exploratory plotting, and basic feature engineering reliably, and ties that to a compressed junior market. Use them, and be able to catch them when they're confidently wrong.",
            },
            {
              name: "AutoML and its trap",
              detail:
                "A survey of data science automation work classes model-building as the most easily automated category, being less open-ended and less dependent on context. One practitioner essay says he has seen more business decisions torpedoed by overconfident AutoML users than he can count.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "◇",
          items: [
            {
              name: "Internships: the actual gate",
              detail:
                "One recruiter reports that junior analyst roles which two years ago went to a student with a coursework portfolio now ask for at least one internship, a public GitHub or published Kaggle notebook, and a real recommendation.",
            },
            {
              name: "ASA DataFest",
              detail:
                "A nationally coordinated undergraduate data analysis competition run by local hosts (48 hours at ASU, three days at RIT). Open to any major at the hosts checked, free at ASU, with professionals attending to recruit.",
            },
            {
              name: "Kaggle, with a caveat",
              detail:
                "Some employers value it, but many interns have never used it. A 2026 career guide describes the crowded entry pool as full of course certificates and Titanic-dataset projects, so only original work signals much.",
            },
            {
              name: "Undergraduate Research or an REU",
              detail:
                "The route into a funded PhD. 2026 examples: UMBC's online Big Data REU (June 1 to July 24, teams of 4 to 5) and SMU's Advancing Data Science in the Public Interest REU (Dallas, paid, same dates). Both are limited to US citizens and permanent residents (UMBC also admits nationals).",
            },
            {
              name: "One End-to-End Deployed Project",
              detail:
                "Ingest real data, model it, ship it somewhere a stranger can use, monitor it. Hiring guides say candidates must show real-world project experience.",
            },
            {
              name: "A Domain, Not Just a Toolkit",
              detail:
                "Industries named as hiring in 2026 guides include healthcare, finance, retail, automotive, and energy, and the guides say candidates need industry-specific knowledge.",
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
        "The master's is common but not a gate: BLS lists a bachelor's as the typical entry credential for data scientists, and one profile dataset puts the split at 51% bachelor's, 34% master's, and 13% doctorate. Professional programs are generally self-funded, and the cost spread is wide. Georgia Tech's online analytics MS runs roughly $14K to $16K all-in for the same diploma as its on-campus program (about $12K tuition plus per-semester fees), while the on-campus version is estimated at $42K to $74K and top private programs run $120K or more.",
      sections: [
        {
          title: "Program Types",
          icon: "▣",
          items: [
            {
              name: "MS in Data Science (professional)",
              detail:
                "Coursework-based, usually 1 to 2 years, often with a capstone rather than a thesis. Check the faculty, and whether the capstone involves a real external client.",
            },
            {
              name: "MS in Statistics or Biostatistics",
              detail:
                "Theory-first. BLS lists a master's as the typical entry credential for statisticians, and biostatistics is the direct route to pharma, CROs, and academic medical centers: a narrower door (BLS counts 31,300 statisticians against 275,600 data scientists).",
            },
            {
              name: "MS in Analytics",
              detail:
                "Analytics, modeling, and decision-science focused. Georgia Tech's online OMSA is the archetype: 36 credits (12 courses), usually taken part-time while working.",
            },
            {
              name: "MS in CS with an ML concentration",
              detail:
                "NC State's Foundations of Data Science MS has a computer science concentration with Artificial Intelligence I and Neural Networks and Deep Learning among its electives, on a core of statistics, mathematics, algorithms, databases, and machine learning (30 credit hours).",
            },
            {
              name: "Thesis-track research MS",
              detail:
                "A PhD bridge, though most US PhD programs admit straight from a bachelor's and many do not transfer master's credits.",
            },
            {
              name: "Online and part-time programs",
              detail:
                "Georgia Tech lists the same diploma for online and on-campus. A 2026 roundup reports UT Austin's online program at about $10K for 30 credits (a secondary figure, not checked against UT) and names Berkeley's MIDS and Johns Hopkins as premium options.",
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
                "Unlike a PhD, professional data science master's degrees rarely come with tuition waivers or stipends. Check each program's funding page before assuming otherwise.",
            },
            {
              name: "The $15K vs $120K spread",
              detail:
                "Georgia Tech's online OMSA runs about $12K in tuition plus $212 to $531 per semester in fees, roughly $14K to $16K all-in (our arithmetic). On-campus is estimated at $42K to $74K, and top private programs run $120K or more. Georgia Tech lists the same diploma for both.",
            },
            {
              name: "Employer tuition benefits",
              detail:
                "Part-time online programs are built for people who keep working, so employer tuition assistance is worth asking about. Amounts vary by employer and were not researched.",
            },
            {
              name: "The honest ROI math",
              detail:
                "One salary survey (Zippia, via Coursera) puts data scientists with a bachelor's at about $101K and a master's at about $109K. An $8K annual premium repays a roughly $15K degree in about two years and a $120K degree in about fifteen, before tax. Run the arithmetic before you enroll.",
            },
            {
              name: "What the degree actually buys",
              detail:
                "Career guides call the master's the standard credential for mid-level roles, while a bachelor's alone still qualifies for junior analyst and junior data scientist roles. It does not substitute for experience.",
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
                "Potential outcomes, instrumental variables, difference-in-differences, propensity methods. Named in 2026 hiring guides as a scarce skill, and one recruiter puts a $30K to $60K premium on genuine causal inference.",
            },
            {
              name: "Experimental Design at Scale",
              detail:
                "A 2026 interview guide lists A/B testing, CUPED, sequential testing, and causal inference as the core technical foundation of product data science.",
            },
            {
              name: "Bayesian Methods",
              detail:
                "Hierarchical models, MCMC, Stan or PyMC. Listed as a plus for product-science roles in one 2026 interview guide.",
            },
            {
              name: "Time Series & Forecasting",
              detail:
                "ARIMA through state-space models and modern gradient-boosted forecasting. One 2026 interview guide puts the premium for forecasting skills at about $10K for product-science roles.",
            },
            {
              name: "Deep Learning",
              detail:
                "CNNs, transformers, attention, fine-tuning. Role-specific: mainly AI, computer vision, and NLP positions.",
            },
            {
              name: "MLOps & Production ML",
              detail:
                "Feature stores, model registries, monitoring, drift detection, retraining. Hiring guides name MLOps and production ML among the scarce skills, with senior and MLOps roles taking four to six months to fill.",
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
                "The two platform poles. Per one 2026 comparison, Snowflake is SQL-first while Databricks is built around the ML lifecycle, with MLflow and GPU clusters.",
            },
            {
              name: "dbt",
              detail:
                "Brings version control, testing, and documentation to SQL transformations, and supports Snowflake, BigQuery, Redshift, Databricks, and Postgres.",
            },
            {
              name: "Airflow, Dagster & orchestration",
              detail:
                "Scheduling and dependency management for pipelines. Airflow 3.0 (released April 2025) and Dagster, the latter for Python-first stacks, per one 2026 tools guide.",
            },
            {
              name: "PyTorch",
              detail:
                "A leading deep learning framework, with torch.compile now stable per one 2026 tools guide. XGBoost and LightGBM remain the usual boosted-tree tools for tabular data.",
            },
            {
              name: "MLflow & Weights and Biases",
              detail:
                "Experiment tracking and model lifecycle management. MLflow 3.x now tracks LLMs and agents natively; W&B is the premium alternative for collaboration and visualization.",
            },
            {
              name: "Docker, Kubernetes & cloud ML",
              detail:
                "SageMaker, Vertex AI, or Azure ML. Cloud fluency is worth a documented $14–18K premium on top of the role baseline in one 2026 guide.",
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
        "A PhD is not required for most data science jobs: BLS lists a bachelor's as typical, and the Zippia split cited by Coursera puts about 13% of data scientists at the doctorate level. It is the entry ticket to a narrower set of roles, mainly research scientist roles at big tech and industry labs, plus faculty. Programs run 4 to 6 years, are housed in data science, computer science, statistics, engineering, information, business, and applied mathematics units, and research programs are typically fully funded with a tuition waiver and stipend. One guide treats a request to pay tuition as a red flag.",
      sections: [
        {
          title: "How the PhD Works",
          icon: "▣",
          items: [
            {
              name: "Admission straight from a bachelor's",
              detail:
                "Most US programs admit undergraduates directly. Many programs do not transfer master's credits.",
            },
            {
              name: "Rotations & advisor matching",
              detail:
                "Year one is heavy coursework, and some programs have you rotate through two or three labs before committing.",
            },
            {
              name: "Qualifying exams",
              detail:
                "Usually year one or two, testing breadth of knowledge or research potential, per two program guides. A thesis proposal follows in year two or three.",
            },
            {
              name: "Conference-driven dissertations",
              detail:
                "Guides describe submitting papers to major conferences from about year three. The scale is large: NeurIPS 2025 received 21,575 valid submissions (up from 9,467 in 2020) and accepted 5,290, or 24.52%.",
            },
            {
              name: "Full funding is the norm",
              detail:
                "Research programs typically offer a tuition waiver, stipend, health insurance, and research or conference funding. Compare stipends against local cost of living: one guide says $35K in a low-cost city can beat $50K in San Francisco.",
            },
            {
              name: "Median time to degree: 5–6 years",
              detail:
                "Applied ML tends toward five; theory and systems run six or more; very few finish in four. One guide places internships around year four.",
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
                "Can agentic systems do open-ended data science? AgentDS (17 challenges across six industries, 29 teams in an open competition) found AI-only baselines below the strongest human-AI teams, with agents defaulting to standard modeling strategies and weakest on image and PDF data.",
            },
            {
              name: "Causal machine learning",
              detail:
                "Double machine learning, causal forests, heterogeneous treatment effects. A review of 133 applied causal-forest papers found most follow the software package's defaults, and a method comparison finds inference for individual-level effects unreliable across methods.",
            },
            {
              name: "Uncertainty quantification & conformal prediction",
              detail:
                "Distribution-free prediction intervals with finite-sample coverage guarantees under exchangeability. A 2024 review lists open problems for large-scale data, time series and shifting data, graphs, images, and LLM text outputs.",
            },
            {
              name: "Differential privacy",
              detail:
                "Formal privacy guarantees for released statistics. The Census Bureau's 2020 disclosure avoidance system is based on differential privacy and protects all data products except the apportionment totals.",
            },
            {
              name: "Algorithmic fairness & auditing",
              detail:
                "Defining, measuring, and testing for disparate impact in deployed systems. Survey literature such as the paper titled 'Fairness Testing: A Comprehensive Survey and Analysis of Trends' maps the area.",
            },
            {
              name: "Post-selection inference",
              detail:
                "Valid inference after you've used the data to choose the model. An integrated review of post-model-selection inference in linear regression appeared in Statistics Surveys (2022), and the line of work continues.",
            },
            {
              name: "ML for science",
              detail:
                "Google DeepMind's science page lists AlphaFold (protein structures, over 200 million predicted), WeatherNext (weather prediction), and GNoME (materials discovery). A 2026 arXiv paper examines machine learning emulators for climate science.",
            },
          ],
        },
        {
          title: "Where PhDs Land",
          icon: "◇",
          items: [
            {
              name: "Industry research is a common destination",
              detail:
                "One low-confidence guide says about 60% of data science PhD graduates enter industry research, naming Google, Meta, and Microsoft. Treat the figure as indicative: no source reviewed gives a verified placement rate.",
            },
            {
              name: "The academic market is small",
              detail:
                "No source reviewed quantifies tenure-track openings in statistics or data science. These doctorates are designed to prepare future professors and researchers, but plan for industry as well and ask any program for its placement record.",
            },
            {
              name: "The PhD premium is real but bounded",
              detail:
                "One guide reports a $20K to $50K entry-level premium in research-focused roles, and says many ML scientist roles at big tech require or strongly prefer a doctorate.",
            },
            {
              name: "Government statistical agencies",
              detail:
                "The Census Bureau and BLS post statistician roles on the federal GS scale, and the Census Bureau's disclosure avoidance work is itself differential privacy practice. Pay follows the published GS table rather than industry scales.",
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
                "Practitioner writing describes multi-agent pipelines that split a project into cleaning, EDA, and modeling subtasks, and AgentDS summarizes the best collaboration pattern as AI for acceleration and humans for direction.",
            },
            {
              name: "Baselines are getting cheap",
              detail:
                "One practitioner reports prototyping an analysis pipeline in 30 minutes that took six hours in 2020. In AgentDS, domain-driven feature engineering consistently beat blind automation.",
            },
            {
              name: "Peer review is straining",
              detail:
                "NeurIPS 2025 received 21,575 valid submissions, up from 9,467 in 2020. Its program chairs recruited many first-time area chairs, cited 11 grossly negligent reviewers, and reduced reliance on bidding because of collusion concerns.",
            },
            {
              name: "Human–AI collaboration as a subject",
              detail:
                "AgentDS compares AI-only pipelines against human-AI teams on domain-specific problems across six industries (commerce, food production, healthcare, insurance, manufacturing, retail banking), so the collaboration itself is measurable.",
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
      anchor: 176,
      roles: ["Data Analyst", "Data Scientist", "Product DS", "Sr Data Scientist", "Staff DS"],
      reality:
        "The archetypal tech data science role, and it is much less about modeling than the title suggests: experiment design, metric definition, causal inference, and persuading a product team. Entry is the crowded end, while senior and specialist roles can take four to six months to fill. Most hires land at mid-level with two to six years of experience, which means the realistic route in is often analyst first, scientist second.",
      ai: "Moderate. LLMs cover the SQL and exploratory plotting layer; experiment design, metric judgment, and defending a causal claim to a skeptical VP do not automate.",
      salary:
        "BLS median $120,230 (May 2025; P10 $67,240 to P90 $199,130) · Levels.fyi median total comp ~$176K · recruiter offer range ~$95K entry to ~$260K principal · $330K+ at top tech employers",
    },
    {
      path: "Machine Learning & AI Engineering",
      icon: "🤖",
      color: C.vermillion,
      anchor: 212,
      roles: ["ML Engineer", "AI Engineer", "MLOps Engineer", "Sr MLE", "Principal MLE"],
      reality:
        "The highest-paying mainstream destination and the one with the steepest software engineering bar: you own the full production lifecycle, from training through deployment, monitoring, and the 3am page. Pay bifurcates sharply: enterprise MLEs cluster around $170–245K total, while a small frontier-lab cohort with the same title clears $600K–$1M. One recruiting platform's survey reports most AI/ML roles are filled by engineers currently titled backend or infrastructure (a low-confidence source).",
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
        "The least glamorous path in this set. One recruiter reports data engineer base medians of $125K to $135K, above the older BLS data scientist median that recruiter compared against, and entry-level data engineering roles reportedly draw fewer applicants than data science roles. The World Economic Forum lists big data specialists as the fastest-growing technology job through 2030.",
      ai: "Low to moderate. Code generation speeds up pipeline writing; data modeling, governance, and diagnosing why the nightly job silently produced wrong numbers remain human work.",
      salary:
        "Median base $125K to $135K across most sources · SF median total ~$180K (75th percentile ~$232K) · Houston ~$173K",
    },
    {
      path: "Research Scientist",
      icon: "🔬",
      color: C.purple,
      anchor: 257,
      roles: ["Research Scientist", "Applied Scientist", "Research Engineer", "Sr Staff Scientist"],
      reality:
        "Many ML scientist roles at big tech require or strongly prefer a doctorate, and the compensation numbers at the top are genuinely distorting: Meta research scientists run $280–550K, and OpenAI's posted band is $771K to $1.28M with a median near $1M. Treat those as the extreme tail of a lottery with very few tickets, not a plan. Note also that 'applied scientist' hides two different jobs: a product-science flavor built on experimentation and causal inference, and a research-lab flavor in biostatistics and pharma that is more common than candidates expect.",
      ai: "Low displacement, but the frontier moves fast enough that specific expertise depreciates. The scarce skill is judgment about what's worth studying.",
      salary:
        "Senior (8+ yrs) ML scientist $250K to $563K total comp · Levels.fyi median $244K to $270K · Meta RS $280K to $550K+ · OpenAI RS $771K (L4) to $1.28M (L6), median ~$1M (July 2026)",
    },
    {
      path: "Quantitative Research (Finance)",
      icon: "📈",
      color: C.slate,
      anchor: 215,
      roles: ["Quant Researcher", "Quant Analyst", "Strategist", "Portfolio Manager"],
      reality:
        "The highest-paying destination per unit of headcount and the narrowest door: systematic hedge funds and prop trading firms recruit from a tiny pool of elite mathematics, physics, and statistics backgrounds, often PhD-level. Buy-side researchers generate alpha directly and are paid accordingly; bank-side quant roles support trading desks and pay roughly a third to a half as much for comparable experience. Firm type matters as much as seniority. New York and London appear throughout the sources.",
      ai: "Low. Signal research is adversarial: any edge a widely available model can find has already been arbitraged away. But the tooling floor keeps rising.",
      salary:
        "Mid-level (3–6 yrs) $150K–$280K total at top firms · senior with a track record $500K–$1M+ · bank-side quant materially lower · Optiver PhD interns ~$11K/week · ranges described by their source as illustrative",
    },
    {
      path: "Biostatistics & Health Data",
      icon: "🧬",
      color: C.green,
      anchor: 106,
      roles: ["Biostatistician", "Clinical Data Scientist", "RWE Scientist", "Principal Biostatistician"],
      reality:
        "A smaller corridor than tech data science: BLS counts 31,300 statisticians against 275,600 data scientists and lists a master's as the typical entry credential. The work includes clinical trial design, regulatory submissions, and real-world evidence. Glassdoor reports pharma and private-sector biostatisticians generally earn more than those at universities. SAS has long dominated clinical-trial programming, with R and Python increasingly used alongside it.",
      ai: "Not measured in the sources reviewed.",
      salary:
        "BLS statisticians median $105,650 (May 2025; P10 $64,000 to P90 $174,050) · Salary.com ~$109K (band $96K to $122K) · Indeed ~$114K · Glassdoor 8+ yrs $92K to $176K · Payscale ~$88K",
    },
    {
      path: "Public Sector & Policy",
      icon: "🏛",
      color: C.orange,
      anchor: 122,
      roles: ["Statistician (Federal)", "Economist/Statistician", "Survey Statistician", "Policy Analyst", "Civic Data Scientist"],
      reality:
        "Federal statistical agencies such as the Census Bureau and BLS post statistician roles on the GS scale, and the Census Bureau's 2020 disclosure avoidance system is based on differential privacy. Federal pay follows the published GS table, which sits well below the big-tech figures on the other cards. The BLS Economist/Statistician postings reviewed spanned GS-7 to GS-13.",
      ai: "Not measured in the sources reviewed.",
      salary:
        "BLS statisticians median $105,650 · 2026 GS base pay: GS-7 step 1 $43,106; GS-12 $76,463 to $99,404; GS-13 $90,925 to $118,204 (before locality) · a BLS GS-13 posting listed $106,437 to $138,370",
    },
    {
      path: "Analytics Leadership & Consulting",
      icon: "📊",
      color: C.sky,
      anchor: 131,
      roles: ["Analytics Manager", "Head of Data", "Director of Analytics", "Fractional Data Lead"],
      reality:
        "Where individual-contributor work often leads. One practitioner essay argues companies increasingly want someone to build a data system and hand it over rather than staff a permanent team, which would favor experienced independents; treat that as one author's observation. The skills that get you here are the ones least covered in any curriculum: stakeholder management, prioritization, and knowing which questions are worth answering.",
      ai: "Low to moderate. One vendor commentary says AI automates SQL, cleaning, and reporting but not strategic judgment, so the shift is from execution skills to judgment skills.",
      salary:
        "Analytics manager ~$131K average · director of analytics ~$185K (Glassdoor figures cited by Coursera, 2026)",
    },
  ],
};

export default function DataScienceRoadmap({ summary } = {}) {
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
        FIG. 1 · ONE REPRESENTATIVE FIGURE PER DESTINATION · LOG SCALE · USD THOUSANDS
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
        spread demands it. Each dot uses one representative figure from its card (a BLS median,
        a total-compensation figure, or a posting midpoint), so compare positions loosely.
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
          FIELD ROADMAP · DATA SCIENCE · COMPILED NOV 2026
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
          A rapidly growing field with a crowded front door. Four years, three
          degrees, eight destinations, with the entry-level squeeze and the AI exposure
          marked honestly on every one.
        </p>

        <StripPlot />
      </header>

      {summary}

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
                card carries a read on AI exposure, and says so where no source measured it.
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
          TAP ANY ROW OR CARD TO EXPAND · COMPILED NOV 2026 · FULL SOURCES IN
          DATA-SCIENCE-RESEARCH.MD. PRIMARY: BLS OOH &amp; OEWS MAY 2025, OPM 2026 GS TABLE,
          CENSUS BUREAU, GEORGIA TECH, NEURIPS. SALARY DATA: LEVELS.FYI VIA KORE1, GLASSDOOR,
          INDEED, SALARY.COM, PAYSCALE. PROGRAM CATALOGS: STANFORD, NORTHWESTERN, RUTGERS, GVSU, UMD, DUKE.
        </footer>
      </main>
    </div>
  );
}
