# The Data Science Career Roadmap (USA): Undergraduate to PhD, Stage 1 Research Synthesis

Prepared 2026-11-23. This file is the source of record for `artifacts/data-science-roadmap.jsx`. It was written after the artifact was built (the artifact was produced before the research file existed), so it was reconstructed from the original search results (run in July 2026) and then extended with new fetches on 2026-11-23 for every figure that had no source or whose source had gone stale. Where a figure is still weakly sourced, it is listed under Uncertainties. Sources dated "2026-07" were accessed during the original build; the exact day was not recorded.

## TL;DR

- **A bachelor's is the BLS typical entry credential, and the master's is common but not a gate.** BLS reports a median of $120,230 for data scientists (May 2025), 275,600 jobs, 35% projected growth for 2025 to 2035, and about 24,800 openings per year.[^1] A profile dataset cited by Coursera puts 51% of data scientists at a bachelor's, 34% at a master's, and 13% at a doctorate.[^3]
- **The entry rung is the pinch point.** Career guides describe 0 to 2 year roles as oversupplied while senior, MLOps, and domain-specialist roles take four to six months to fill. One recruiter says the bar for junior analyst roles now includes an internship, a public portfolio, and a real recommendation.[^6][^8][^10]
- **Pay is three markets.** BLS-style base pay (data scientist median $120,230), big-tech total compensation (Levels.fyi median about $176K for data scientists, $212K to $264K for machine learning engineers), and a small frontier-lab cohort at $600K to over $1M.[^1][^4][^17][^18]
- **The cheap online master's is no longer "$10K".** Georgia Tech's online MS in Analytics lists $330 to $360 per credit over 36 credits ($11,880 to $12,960 in tuition) plus mandatory per-semester fees, while a second Georgia Tech page still says "under $10,000". The on-campus program is estimated at $42,064 to $74,034.[^46][^47][^48]
- **AI is eating the routine layer, not the judgment layer.** LLMs now handle SQL, exploratory plotting, and basic feature engineering reliably, and AgentDS found AI-only baselines below the strongest human-AI teams.[^7][^31]

## Key Findings

1. **Credential norms.** BLS lists a bachelor's as the typical entry-level education for data scientists and a master's for mathematicians and statisticians.[^1][^2] Career guides call the master's the standard credential for mid-level roles and the PhD a requirement for research scientist roles.[^9]
2. **Market shape.** Entry-level data science is crowded (thousands of similar candidates per junior opening by one guide's account); senior, domain-specialist, and MLOps roles are not. Entry-level data engineering roles are reported to draw fewer applicants than data science roles.[^8][^10][^11]
3. **BLS figures changed since the original build.** The original artifact cited a $112,590 median (May 2024) and 34% growth through 2034. The BLS page now shows $120,230 (May 2025) and 35% growth for 2025 to 2035. Several secondary sources still quote the older numbers.[^1][^3]
4. **Data engineering versus data science.** One recruiter reports data engineer base medians of $125K to $135K against the older $112,590 BLS data scientist median, while noting that big-tech equity can flip the total-compensation comparison.[^5]
5. **Scarce, premium-paying skills.** Hiring guides name MLOps and production ML, causal inference, domain-specific modeling, and LLM integration as scarce. One recruiter puts the premium for LLM or generative AI work or genuine causal inference at $30K to $60K over a generalist.[^4][^10]
6. **Master's cost spread.** From about $12K in tuition (Georgia Tech online) to $120K or more at top private programs.[^9][^46]
7. **PhD.** Four to six years, usually fully funded at research programs, with a median near five to six years. One low-confidence guide says about 60% of data science PhDs go to industry research.[^12][^13][^14]
8. **Statisticians are a much smaller occupation.** BLS counts 31,300 statisticians (33,500 mathematicians and statisticians combined), about 2,000 openings per year for the combined group, 10% projected growth, and a statistician median of $105,650.[^2]
9. **AI evidence is mixed and mostly practitioner-level.** Model-building is described as the most automatable task category; domain-driven feature engineering beat blind automation in AgentDS; no source reviewed measures AI performance on causal inference specifically.[^30][^31]
10. **Fig. 1 in the artifact** places each destination at one representative figure from its card. The basis differs by card and is listed in the Career Paths section below.

## 1. Undergraduate Foundation (Years 1 to 4)

**Programs checked.** Grand Valley State (foundation courses in computing for data science and an intro data science course; a 48-credit required core including data structures and algorithms CIS 263 and visualization CIS 320; 6 credits in an applied domain; 9 credits of electives).[^39] Stanford (Math 51 and 52; a gateway course DATASCI 112 that uses Python; a proof-writing course; a stochastic modeling course; introductory neuroscience and cognitive psychology; a data, technology, and ethics requirement).[^40] Northwestern (STAT 201 programming for data science, STAT 202 introductory statistics, MATH 220-1 and 220-2, MATH 230-1, MATH 240 linear algebra, a one-unit ethics elective, two units of technical and domain science electives, a capstone).[^41] Rutgers (Statistical Inference for Data Science; Data in Context; students can declare after Data101 and a statistical inference course).[^42] Maryland (data science specialization inside the CS major: MATH140, MATH141, CMSC131, CMSC132, CMSC216, CMSC250, plus CMSC330, CMSC351, STAT400, and MATH240).[^43] Duke (a data science concentration inside the CS major; AI added to the core for students entering in Fall 2026, including COMPSCI 270 and an AI core course).[^44]

**Conceptual backbone.** Calculus and linear algebra, probability, statistical inference, regression and statistical learning, programming (Python is the common language), databases and SQL, visualization, an ethics requirement at some programs, and applied-domain coursework at several.[^39][^40][^41][^42]

**Weeder courses.** Single-sourced. One student-facing guide names linear algebra and probability as the hardest courses ("steepest climb" for students who struggle with abstract math) and calls them the mathematical backbone of machine learning. It also says debugging often takes longer than writing code, that cleaning messy real-world data is tedious and discouraging, and that explaining results to non-technical audiences is underestimated. It rates the overall workload as comparable to other STEM majors. A second planned source (Research.com) failed to load.[^62]

**Hands-on skills.** SQL (appears in nearly every job-posting snippet and interview guide reviewed), Python with pandas, NumPy, and scikit-learn, data cleaning, experiment design (a product data scientist interview guide says experiment design and metric reasoning dominate the loop), and communicating to non-technical stakeholders (listed in Glassdoor posting snippets).[^37][^68]

**Foundational tools.** Python, R, SQL, notebooks, Tableau or Power BI (both appear on 2026 lists of leading data science tools). Analysts who combine SQL, a BI tool, and Python earn more than those with Excel and SQL alone. One stack guide reports Polars at 5 to 50 times faster than pandas on common operations and says scikit-learn covers about 80% of enterprise classification and regression tasks.[^32][^70][^72]

**High-value extracurriculars.**

- Internships and portfolio: one recruiter reports that junior analyst roles which two years ago went to a student with a coursework portfolio now ask for at least one internship, a public GitHub or published Kaggle notebook, and a real recommendation.[^6]
- ASA DataFest: a nationally coordinated undergraduate data analysis competition run by local hosts (48 hours at ASU, three days at RIT), open to any major at the hosts checked, free at ASU, with professionals attending to recruit.[^38]
- Kaggle: some employers value it, many interns have never used it, and a 2026 career guide describes the crowded entry pool as full of course certificates and Titanic-dataset projects.[^8][^69]
- NSF REUs: UMBC's online Big Data REU (June 1 to July 24, 2026; US citizens, nationals, and permanent residents; teams of 4 to 5; applications due March 3, 2026) and SMU's Advancing Data Science in the Public Interest REU (Dallas, June 1 to July 24, 2026; US citizens and permanent residents; after the second or third year; math, CS, or related majors; paid with the amount not published; applications due February 15, 2026).[^60][^61]
- Domain knowledge: industries named as hiring in 2026 guides include healthcare, finance, retail, automotive, and energy, and guides say candidates must show real-world project experience and industry-specific knowledge.[^11][^71]

## 2. Master's Stage (Years 5 to 6)

**Is it necessary?** No. BLS lists a bachelor's as typical entry education for data scientists, and the Zippia split cited by Coursera is 51% bachelor's, 34% master's, 13% doctorate.[^1][^3] Career guides still call the master's the standard credential for mid-level roles, and say a bachelor's alone qualifies for junior analyst and junior data scientist roles.[^9] One salary survey (Zippia, via Coursera) puts the average at $101,455 with a bachelor's and $109,454 with a master's, a difference of $7,999 per year.[^3]

**Program types.**

- MS in Data Science (professional): usually 1 to 2 years, often with a capstone.[^3]
- MS in Statistics or Biostatistics: BLS lists a master's as typical for statisticians.[^2]
- MS in Analytics: Georgia Tech's online program is 36 credits and focused on analytics, modeling, and decision science.[^46][^49]
- MS in CS with an ML concentration: NC State's Foundations of Data Science MS has a computer science concentration with Artificial Intelligence I and Neural Networks and Deep Learning among its electives; its core is statistics, mathematics, algorithms, databases, and machine learning, 30 credit hours in total.[^45]
- Thesis-track research MS: described as a PhD bridge, though most US PhD programs admit directly from a bachelor's and many do not transfer master's credits.[^12]
- Online and part-time: Georgia Tech lists the same diploma for online and on-campus; a 2026 roundup lists UT Austin's online program at about $10,000 total for 30 credits and names Berkeley's MIDS and Johns Hopkins as premium options.[^46][^49]

**Georgia Tech cost detail (the headline price comparison).**

| Item | Figure | Source |
| --- | --- | --- |
| Online MS in Analytics, credits | 36 (12 courses) | [^46] |
| Online tuition per credit | Georgia residents $330, US $343, international $360 | [^46] |
| Online tuition, 36 credits | $11,880 (GA), $12,348 (US), $12,960 (international) | [^46] |
| Mandatory online learning fee | $212 per semester under 4 credits, $531 per semester at 4 or more credits | [^46] |
| Diploma | Same as on-campus; modality does not appear on diploma or transcript | [^46] |
| Second Georgia Tech page | "Under $10,000" online, "approximately $36,000" in-state on-campus, both excluding student fees; no effective date | [^47] |
| On-campus estimate, 2026-27 rates | $42,064 to $52,376 in-state, $60,146 to $72,076 non-Georgia, up to $74,034 out-of-country; includes a $2,000 program fee | [^48] |

The two Georgia Tech online pages disagree. The per-credit page is specific and the comparison page is undated, so this file treats the per-credit page as current. All-in online cost is derived arithmetic, not a published figure: tuition of about $11.9K to $13.0K plus fee tiers of $212 or $531 per semester gives roughly $14K to $16K depending on pace. The older "under $10K" number also persists on third-party pages, one of which (April 2026) notes that current cost pages show materially higher totals.[^49]

**Funding.** Professional master's programs are generally self-funded or employer-funded (general knowledge, not verified in this pass; see Uncertainties). The salary premium arithmetic: $7,999 per year repays a roughly $15K degree in about two years and a $120K degree in about fifteen, before tax.[^3][^9]

**Advanced methods.** Statistical learning theory, causal inference, experimental design (a 2026 interview guide lists A/B testing, CUPED, sequential testing, and causal inference as the core technical foundation of product data science), Bayesian methods (listed as a plus for product-science roles), forecasting (about a $10K premium for product-science roles), deep learning (role-specific: mainly AI, computer vision, and NLP positions), and MLOps.[^35][^36][^37]

**Working stack.** Snowflake or Databricks (Snowflake is SQL-first; Databricks is built around the ML lifecycle with MLflow and GPU clusters), dbt (supports Snowflake, BigQuery, Redshift, Databricks, and Postgres), Airflow 3.0 (released April 2025) and Dagster in Python-first stacks, PyTorch (torch.compile stable), MLflow 3.x and Weights and Biases, cloud ML platforms (cloud fluency lifts pay roughly $14K to $18K above the role baseline), and the LLM and RAG stack (LangGraph, LlamaIndex, vector databases; LLM fine-tuning and RAG add $20K to $50K or more to a machine learning engineer's offer).[^17][^32][^33][^34][^35][^36]

## 3. PhD / Research (Years 7 and beyond)

**Structure.** Typical timeline from two guides: year one coursework and sometimes two or three lab rotations; qualifying exams in year one or two (testing breadth of knowledge or research potential); a thesis proposal in year two or three; year three onward submitting papers to major conferences; internships around year four; dissertation defense. Median time to degree is five to six years (applied ML nearer five, theory and systems six or more, very few in four).[^12][^13] Most US programs admit directly from a bachelor's, and many do not transfer master's credits.[^12]

**Funding.** Research programs are typically fully funded: tuition waiver, stipend, health insurance, and research or conference funding. One guide advises comparing stipends against local cost of living (a $35K stipend in a low-cost city can beat $50K in San Francisco) and treating a request to pay tuition as a red flag.[^12][^13]

**Where the degrees are housed.** Schools of data science, computer science, statistics, engineering, information systems, business, biomedical sciences, and applied mathematics.[^14]

**Research frontiers (each tied to a source).**

- Evaluating AI agents on data science: AgentDS has 17 challenges across six industries (commerce, food production, healthcare, insurance, manufacturing, retail banking) and an open competition of 29 teams and 80 participants. AI-only baselines stayed below the strongest human-AI teams; the top agentic baseline ranked 9th of 29, the best direct-prompting model 11th. Agents defaulted to standard modeling strategies and were weakest on image and PDF data; domain-driven feature engineering consistently outperformed blind automation.[^31]
- Causal machine learning: a review of 133 applied causal-forest papers found most follow the original software package's defaults; a comparison of double/debiased machine learning, generalized random forests, and the modified causal forest finds inference for individual-level effects unreliable across methods and DML and GRF biased under strong selection.[^57][^58]
- Conformal prediction: a distribution-free uncertainty framework with finite-sample coverage guarantees under exchangeability. A 2024 review names open problems for large-scale data, time series and shifting data, graphs, images, and LLM text outputs.[^56]
- Differential privacy: the 2020 Census disclosure avoidance system is based on differential privacy and protects all data products except the apportionment totals. The TopDown Algorithm is documented in a published paper (title seen in search results; paper not read).[^54][^55]
- Post-selection inference: an integrated review of post-model-selection inference in linear regression models appeared in Statistics Surveys (2022), and 2023 to 2026 arXiv papers continue the line (titles only; not read).[^63]
- Fairness testing and auditing: surveys such as "Fairness Testing: A Comprehensive Survey and Analysis of Trends" exist (title only; not read).[^64]
- Machine learning for science: DeepMind's science page lists AlphaFold (protein structures; over 200 million predicted), WeatherNext (weather prediction), GNoME (inorganic crystal discovery), and AlphaGenome and AlphaMissense for genetics; a 2026 arXiv paper examines machine learning emulators for climate science (title only).[^65][^66]

**AI and the research process.** Practitioner writing describes multi-agent pipelines that split a project into cleaning, EDA, and modeling subtasks.[^29] One practitioner reports prototyping an analysis pipeline in 30 minutes that took six hours in 2020.[^28] AgentDS reports the best collaboration pattern as "AI for acceleration, humans for direction."[^31] Peer review at the largest ML venue is under strain: the NeurIPS main track received 21,575 valid submissions in 2025 (up from 9,467 in 2020), accepted 5,290 (24.52%), recruited many first-time area chairs, cited 11 grossly negligent reviewers, and reduced reliance on bidding because of collusion concerns. The chairs' post does not discuss LLM use in reviewing.[^59]

**Where PhDs land.** One low-confidence guide says about 60% of data science PhD graduates enter industry research, naming Google, Meta, and Microsoft among employers (the snippet was truncated after "Micr").[^12] Another describes these doctorates as designed for future professors, academic researchers, research scientists, and advanced technical specialists.[^14] A PythonGuides piece reports a $20K to $50K entry-level PhD premium in research-focused roles and says many ML scientist roles at big tech require or strongly prefer a doctorate.[^15] No source reviewed quantifies tenure-track openings in statistics or data science.

## 4. Tools and AI

- **Routine work is automating.** One 2026 salary guide says LLMs now handle SQL queries, exploratory plotting, and basic feature engineering reliably, ties that to a compressed junior market, and says analytics-focused data science compensation is flat while ML and AI engineer compensation has pulled away by 30 to 50 percent.[^7]
- **Judgment skills.** Commentary from an analytics vendor says AI automates SQL, data cleaning, and reporting but not strategic judgment, and that analysts are replaced by analysts who use AI.[^67] That source sells analytics software; treat it as perspective.
- **AutoML.** A survey of data science automation summarizes earlier work that classes model-building as the most easily automated category because it is less open-ended and less dependent on domain context.[^30] One practitioner essay says he has seen more business decisions torpedoed by overconfident amateurs wielding AutoML than he can count.[^28]
- **Agents.** See AgentDS above.[^31]
- **Standard tools by layer.** Listed in the Master's section above.

## 5. Career Paths

Salary figures below are those printed on the artifact cards, with basis and source stated.

1. **Product and Decision Science.**
   - Titles: Data Analyst, Data Scientist, Product Data Scientist, Senior Data Scientist, Staff Data Scientist.
   - Reality: experiment design, metric definition, causal inference, and stakeholder persuasion. Most hires land at mid-level with two to six years of experience (product data scientist interview guide). Entry is crowded; senior and specialist roles can take four to six months to fill. The analyst-to-data-scientist path takes most people three to five years.[^8][^10][^37][^70]
   - Salary on card: BLS median $120,230 with a 10th to 90th percentile of $67,240 to $199,130 (May 2025); Levels.fyi median total compensation about $176K; recruiter offer range about $95K (entry) to $260K (principal); $330K or more at top tech employers.[^1][^4]
   - AI exposure: moderate (LLMs cover SQL and exploratory plotting; AgentDS found domain judgment still separates top human-AI teams from AI-only baselines).[^7][^31]

2. **Machine Learning and AI Engineering.**
   - Titles: ML Engineer, AI Engineer, MLOps Engineer, Senior MLE, Principal MLE.
   - Reality: owns the full production lifecycle. Pay splits: enterprise ML engineers at $170K to $245K total, frontier-lab staff at $600K to $1M or more. One recruiting platform's survey reports most AI/ML roles are filled by engineers currently titled backend or infrastructure (snippet truncated; low confidence).[^17][^18]
   - Salary on card: base $128K to $186K; Built In average total compensation about $212K; Levels.fyi median about $260K (Metaintro) or $264,400 (Interview Kickstart); Meta median about $430K; frontier labs $600K to $795K or more.[^17][^18][^19]
   - AI exposure: low displacement, high leverage; LLM fine-tuning and RAG add $20K to $50K or more.[^17]

3. **Data and Analytics Engineering.**
   - Titles: Analytics Engineer, Data Engineer, Platform Engineer, Senior Data Engineer.
   - Reality: data engineer medians sit above the older BLS data scientist median on base pay; the World Economic Forum lists big data specialists as the fastest-growing technology job through 2030; entry-level data engineering roles reportedly draw fewer applicants than data science roles.[^5][^11]
   - Salary on card: median base $125K to $135K across most sources; San Francisco median total about $180K (75th percentile $232K, Glassdoor via KORE1); Houston about $173K.[^5]
   - AI exposure: low to moderate (editorial; not measured in the sources).

4. **Research Scientist.**
   - Titles: Research Scientist, Applied Scientist, Research Engineer, Senior Staff Scientist.
   - Reality: many ML scientist roles at big tech require or strongly prefer a doctorate; "applied scientist" covers two roles, a product-science version and a research-lab version (biostatistics, clinical research, biotech) that the posting analysis found more common than candidates expect.[^15][^36]
   - Salary on card: senior (8+ years) ML scientist total compensation $250K to $563K; Levels.fyi median total compensation for ML scientists and engineers at comparable experience $244K to $270K; Meta research scientist $280K to $550K or more; OpenAI research scientist $771K (L4) to $1.28M (L6), median about $1M, as of July 2026.[^15][^16]
   - AI exposure: low displacement, fast-moving field (editorial).

5. **Quantitative Research (Finance).**
   - Titles: Quant Researcher, Quant Analyst, Strategist, Portfolio Manager.
   - Reality: top hedge funds and prop firms pay two to three times what banks pay for comparable experience; buy-side researchers generate alpha directly while bank-side roles support desks. PhD intern programs are posted (Optiver). New York and London appear throughout the sources.[^24][^25]
   - Salary on card: mid-level (3 to 6 years) $150K to $280K total at top firms; senior researchers with a track record $500K to over $1M; Optiver PhD interns $80K to $90K for roughly eight weeks (about $11,250 per week). The Quantt ranges are described by their author as illustrative, aggregated from third-party and anecdotal sources, and the text extraction of the mid-level range was garbled.[^24][^25]
   - AI exposure: low (editorial).

6. **Biostatistics and Health Data.**
   - Titles: Biostatistician, Clinical Data Scientist, RWE Scientist, Principal Biostatistician.
   - Reality: BLS lists a master's as typical for statisticians, counts 31,300 statisticians against 275,600 data scientists, and projects about 2,000 openings per year across mathematicians and statisticians. Glassdoor reports pharma and private-sector biostatisticians generally earn more than those at universities. SAS has long dominated clinical-trial programming, with R and Python increasingly used alongside it (a vendor blog from August 2025; it does not address regulatory acceptance).[^2][^22][^53]
   - Salary on card: BLS statisticians median $105,650 and 10th to 90th percentile $64,000 to $174,050 (May 2025); Salary.com average about $109K with a typical band of $96K to $122K; Indeed about $114K; Glassdoor range for 8+ years $92K to $176K; Payscale average about $88K (the low outlier).[^2][^20][^21][^22][^23]
   - AI exposure: not measured in the sources reviewed.

7. **Public Sector and Policy.**
   - Titles: Statistician (Federal), Economist/Statistician, Survey Statistician, Policy Analyst, Civic Data Scientist.
   - Reality: federal statistical agencies such as the Census Bureau and BLS post statistician roles on the GS scale; the Census Bureau's 2020 disclosure avoidance system is based on differential privacy. A BLS Economist/Statistician posting spans GS-7 to GS-13 across two postings reviewed.[^51][^52][^54]
   - Salary on card: BLS statisticians median $105,650 (May 2025); 2026 GS base pay GS-7 step 1 $43,106, GS-12 $76,463 to $99,404, GS-13 $90,925 to $118,204 (the OPM page shows annual rates by grade and step without locality columns); a BLS GS-13 Economist/Statistician posting lists $106,437 to $138,370 (Rest of US locality); a GS-7 posting lists $58,827 to $76,476 (locality not stated).[^2][^50][^51][^52]
   - AI exposure: not measured in the sources reviewed.

8. **Analytics Leadership and Consulting.**
   - Titles: Analytics Manager, Head of Data, Director of Analytics, Fractional Data Lead.
   - Reality: one practitioner essay argues companies increasingly want someone to build a data system and hand it over rather than staff a permanent team; this is a single author's observation. Commentary on AI and analysts stresses moving from execution skills to judgment skills.[^27][^67]
   - Salary on card: analytics manager about $131K average, director of analytics about $185K (Glassdoor figures cited by Coursera, 2026).[^26]
   - AI exposure: low to moderate (vendor commentary).

**Fig. 1 anchor values (one representative figure per destination; basis varies).**

| Destination | Anchor ($K) | Basis |
| --- | --- | --- |
| Product and Decision Science | 176 | Levels.fyi median total compensation (KORE1) |
| Machine Learning and AI Engineering | 212 | Built In average total compensation |
| Data and Analytics Engineering | 130 | Midpoint of $125K to $135K median base |
| Research Scientist | 257 | Midpoint of $244K to $270K median total compensation |
| Quantitative Research | 215 | Midpoint of $150K to $280K mid-level total compensation |
| Biostatistics and Health Data | 106 | BLS statisticians median, May 2025 |
| Public Sector and Policy | 122 | Midpoint of a BLS GS-13 posting, $106,437 to $138,370 |
| Analytics Leadership | 131 | Glassdoor average analytics manager (via Coursera) |

## Uncertainties and Regional Variation

**Source quality.** Only the BLS, OPM, Census Bureau, Georgia Tech, NeurIPS, and arXiv figures come from primary pages. Most salary and job-market figures come from recruiter blogs, aggregators, and content-marketing sites (KORE1, Cadence, Careery, Hakia, SuccessCribe, Research.com, Pin, PythonGuides). Several are vendors with a commercial interest. Treat them as indicative.

**Staleness.** Sources dated "2026-07" were not re-fetched on 2026-11-23 and may have moved. The BLS figures are the clearest example: secondary sources still quote $112,590 and 34% growth, which the BLS page has superseded.

**Conflicts.**

- Growth: BLS now says 35% for 2025 to 2035; earlier vintages said 34% (2024 to 2034) and 36% (2023 to 2033). Research.com says employment in "the sector" is projected to grow around 15%, which is not reconciled with BLS.[^1][^3][^8][^11]
- Degree growth: Research.com says data science degrees "surged by more than 35%" in one passage and "over 35% annually" in another. The period is unclear; low confidence.[^11]
- Data scientist pay: BLS $120,230 versus recruiter figures from $95K (entry) to $260K (principal) and Glassdoor or Levels.fyi totals above $160K. They measure different populations (all employers versus equity-heavy tech).[^1][^4]
- Georgia Tech OMSA cost: the per-credit page ($11,880 to $12,960 tuition plus fees) conflicts with the comparison page ("under $10,000").[^46][^47]
- Biostatistician pay: Payscale average about $88K versus Salary.com about $109K and Indeed about $114K.[^20][^21][^23]

**Single-source or anecdotal claims used in the artifact.** Weeder courses (one student guide); the 60% industry-research figure (a content-farm style guide, snippet truncated); builder-handoff trend (one Medium essay); AutoML overconfidence (one Medium essay); 71% AI/ML hires from backend roles (a recruiting platform, snippet truncated); Quantt compensation ranges (author says illustrative); Optiver intern pay (one Substack).

**Retained from the original build without a source (general knowledge or editorial).** These stay in the artifact but were not verified in this pass: professional master's programs are generally self-funded; employer tuition assistance is a common funding route; "linear algebra underpins most modeling"; the framing of the statistical learning theory item; the "better fit for ML engineering" framing of the CS master's; the low-exposure assessments on the Research Scientist and Quantitative Research cards; the MLE card's "highest-paying mainstream" phrasing.

**Not covered.** Entrepreneurship and startups, and communication, education, or media destinations, were not researched, and the artifact has no card for them. Faculty (tenure-track) placement was not quantified. International degree norms (for example three-year bachelor's degrees in Europe or the UK) were not researched.

**Regional and eligibility variation.**

- San Francisco average base is about $172,345, roughly 30% above the national figure, and fully remote roles average about $159,290 (KORE1).[^4]
- NSF REUs are limited to US citizens, nationals (UMBC only), and permanent residents.[^60][^61]
- GS salaries carry locality pay; the OPM table shown has no locality columns, and the BLS GS-13 posting uses the Rest of US locality.[^50][^51]
- Quant compensation is concentrated at firms in New York and London in the sources reviewed.[^24][^25]
- Zippia and other aggregator splits are US-only.

**Claims corrected in the artifact on 2026-11-23.**

- Master's phase intro no longer calls the master's "the working credential" (contradicted by BLS and the Zippia split).
- Georgia Tech OMSA cost changed from "about $10K total" to the per-credit figures plus fees.
- BLS data scientist figures updated to May 2025 and the 2025 to 2035 projection.
- Fig. 1 anchors were previously unsourced or inconsistent with the cards; they now follow the table above.
- "One AI is worst at" removed from the causal inference item (no source measures this).
- The AgentDS item no longer says benchmark work "finds agents strong on model-building subtasks"; that framing came from a survey of automation literature, not from AgentDS.
- Unsourced specifics removed: "60 to 70% of data work is cleaning", "failing is the most common exit point" for qualifying exams, "six-month review cycle", employer reimbursement of "$5 to $10K a year", academic postdoc pay, Public Sector and Leadership salary bands, and the claim that Stanford, Northwestern, and Rutgers all mandate an ethics course (Rutgers was not verified).
- Footer sources trimmed to those actually consulted.

## Sources

Access dates: "2026-07" means the original build session (exact day not recorded); "2026-11-23" means this revision. Dates in parentheses are the dates shown on the page.

[^1]: BLS, Occupational Outlook Handbook, Data Scientists. https://www.bls.gov/ooh/math/data-scientists.htm. Accessed 2026-11-23.
[^2]: BLS, Occupational Outlook Handbook, Mathematicians and Statisticians. https://www.bls.gov/ooh/math/mathematicians-and-statisticians.htm. Accessed 2026-11-23.
[^3]: Coursera, "Data Scientist Salary: Your 2026 Pay Guide" (2025-10-22). https://www.coursera.org/articles/data-scientist-salary. Accessed 2026-07. Cites BLS (older vintage) and Zippia.
[^4]: KORE1, Data Scientist Salary Guide 2026. https://www.kore1.com/data-scientist-salary-guide/. Accessed 2026-07.
[^5]: KORE1, Data Engineer Salary Guide 2026 (2026-06-08). https://www.kore1.com/data-engineer-salary-guide/. Accessed 2026-07.
[^6]: KORE1, Data Analyst Salary Guide 2026 (2026-05-22). https://www.kore1.com/data-analyst-salary-guide/. Accessed 2026-07.
[^7]: Cadence, "Data scientist salary in 2026" (2026-05-23). https://cadence.withremote.ai/blog/data-scientist-salary-2026. Accessed 2026-07.
[^8]: Careery, "Data Scientist Job Outlook 2026" (2026-02-17). https://careery.pro/blog/data-science-careers/data-scientist-job-outlook. Accessed 2026-07.
[^9]: Careery, "Is a Data Science Degree Worth It in 2026" (2026-02-17). https://careery.pro/blog/data-science-careers/is-data-science-degree-worth-it. Accessed 2026-07.
[^10]: GrowthGear, "Is Data Science Oversaturated" (2026-04-05). https://ai.growthgear.com.au/machine-learning/is-data-science-oversaturated/. Accessed 2026-07.
[^11]: Research.com, "Are Too Many Students Choosing Data Science?" (2026-06-05). https://research.com/advice/are-too-many-students-choosing-data-science-oversaturation-competition-hiring-reality. Accessed 2026-07.
[^12]: Hakia, Best Data Science Doctoral Degree Programs 2026. https://hakia.com/degrees/data-science/best-doctoral-programs/. Accessed 2026-07.
[^13]: SuccessCribe, "PhD in Data Science in USA 2026" (2026-02-06). https://www.successcribe.com/phd-in-data-science-in-usa/. Accessed 2026-07.
[^14]: TechGuide, "Best PhD in Data Science Programs for 2026". https://techguide.org/analytics/phd-in-data-science/. Accessed 2026-07.
[^15]: PythonGuides, "Machine Learning Scientist Salary" (2026-06-10). https://pythonguides.com/machine-learning-scientist-salary/. Accessed 2026-07.
[^16]: Levels.fyi, OpenAI Research Scientist compensation (page showed last updated 2026-07-23). https://www.levels.fyi/companies/openai/salaries/software-engineer/title/research-scientist. Accessed 2026-07.
[^17]: Interview Kickstart, "Machine Learning Engineer Salary 2026" (2026-05-27). https://interviewkickstart.com/blogs/articles/machine-learning-engineer-salary. Accessed 2026-07.
[^18]: Pin, "AI Compensation Benchmarks 2026" (2026-06-02). https://www.pin.com/blog/ai-compensation-salary-guide/. Accessed 2026-07.
[^19]: Metaintro, "Machine Learning Engineer Salary 2026". https://www.metaintro.com/blog/machine-learning-engineer-salary-2026-ai-job-over-200k. Accessed 2026-07.
[^20]: Salary.com, Biostatistician salary (as of 2026-07-01). https://www.salary.com/research/salary/core/biostatistician-salary. Accessed 2026-07.
[^21]: Indeed, Biostatistician salary. https://www.indeed.com/career/biostatistician/salaries. Accessed 2026-07.
[^22]: Glassdoor, Biostatistician salary. https://www.glassdoor.com/Salaries/biostatistician-salary-SRCH_KO0,15.htm. Accessed 2026-07.
[^23]: Payscale, Biostatistician salary. https://www.payscale.com/research/US/Job=Biostatistician/Salary. Accessed 2026-07.
[^24]: Quantt, "Quant Researcher Salary" (2026-04-09). https://www.quantt.co.uk/resources/quant-researcher-salary-guide. Accessed 2026-07.
[^25]: Young and Calculated, "The Detailed and Honest Reality of Quant Pay in 2026" (2026-04-12). https://youngandcalculated.substack.com/p/the-detailed-and-honest-reality-of. Accessed 2026-07.
[^26]: Coursera, "How Much Do Data Analysts Earn in 2026" (2026-03-10). https://www.coursera.org/articles/how-much-do-data-analysts-make-salary-guide. Accessed 2026-07.
[^27]: Medium (Analyst Uttam), "I Said Data Science Is a Dead Career in 2025" (2026-05-16). https://medium.com/ai-analytics-diaries/i-said-data-science-is-a-dead-career-in-2025-26ab9ee21e73. Accessed 2026-07.
[^28]: Medium (Analyst Uttam), "Data Science in 2026: Prepare to Be Uncomfortable" (2025-12-22). https://medium.com/ai-analytics-diaries/data-science-in-2026-prepare-to-be-uncomfortable-c05a5dedc0fa. Accessed 2026-07.
[^29]: KDnuggets, "How AI Agents Will Transform Data Science Work in 2026" (2026-05-13). https://www.kdnuggets.com/how-ai-agents-will-transform-data-science-work-in-2026. Accessed 2026-07.
[^30]: arXiv 2506.08800, "Measuring Data Science Automation: A Survey of Evaluation Tools for AI Assistants and Agents." https://arxiv.org/pdf/2506.08800. Accessed 2026-07 (search snippet).
[^31]: arXiv 2603.19005, "AgentDS Technical Report." https://arxiv.org/pdf/2603.19005. Abstract accessed 2026-07; findings fetched 2026-11-23.
[^32]: Ikasia, "7 ML Tools 2026" (2026-03-03). https://ikasia.ai/en/blog/machine-learning-tools-frameworks-2026. Accessed 2026-07.
[^33]: Dataforest, "Databricks vs. Snowflake (2026)" (2026-05-08). https://dataforest.ai/blog/databricks-vs-snowflake. Accessed 2026-07.
[^34]: Uvik, "Data Engineering Tools 2026." https://uvik.net/blog/data-engineering-tools/. Accessed 2026-07.
[^35]: Win in Life Academy, "Top 20 Data Science Tools in 2026" (2026-01-03). https://wininlifeacademy.com/top-data-science-tools/. Accessed 2026-07.
[^36]: InterviewStack, "Applied Scientist Skills Companies Want in 2026" (2026-05-12). https://www.interviewstack.io/blog/applied-scientist-skills-companies-want-2026. Accessed 2026-07.
[^37]: DataInterview, "Product Data Scientist Interview Prep (2026)" (2026-03-16). https://www.datainterview.com/blog/product-data-scientist-interview-prep. Accessed 2026-07.
[^38]: ASA DataFest hosts: Arizona State University (2024 page) https://math.asu.edu/datafest-2024; RIT https://www.rit.edu/science/datafest. Accessed 2026-07.
[^39]: Grand Valley State University, BS in Data Science and Analytics (2025-2026 catalog). https://www.gvsu.edu/catalog/program/bachelor-of-science-in-data-science-and-analytics.htm. Accessed 2026-07.
[^40]: Stanford, Data Science BS degree requirements 2025-2026. https://datasciencemajor.stanford.edu/academics/undergraduate-data-science-bs-program/degree-requirements-2025-2026-data-science-bs. Accessed 2026-07.
[^41]: Northwestern, Data Science major requirements. https://statistics.northwestern.edu/undergraduate/data_science_major/ds_major_requirements.html. Accessed 2026-07.
[^42]: Rutgers, BS in Data Science. https://ds.sas.rutgers.edu/data-science-program/b-s-in-data-science. Accessed 2026-07.
[^43]: University of Maryland, Data Science degree requirements (CS). https://undergrad.cs.umd.edu/data-science-degree-requirements. Accessed 2026-07.
[^44]: Duke, BS Concentration in Data Science. https://cs.duke.edu/undergraduate/degrees/BS/concentrations/data-science. Accessed 2026-07.
[^45]: NC State, Foundations of Data Science (MS), Computer Science Concentration (2025-2026 catalog). https://catalog.ncsu.edu/graduate/interdisciplinary/foundationsofdatascience/computer-science-concentration. Accessed 2026-07.
[^46]: Georgia Tech Professional Education, Online MS in Analytics. https://pe.gatech.edu/index%2Ephp/degrees/analytics. Accessed 2026-11-23.
[^47]: Georgia Tech Professional Education, Online MS in Analytics program comparison. https://pe.gatech.edu/index.php/degrees/analytics/program-comparison. Accessed 2026-11-23.
[^48]: Georgia Tech, On-campus MS in Analytics tuition and funding (2026-2027 rates). https://www.analytics.gatech.edu/admissions/tuition-and-funding. Accessed 2026-11-23.
[^49]: OnlineMastersColleges, "Best Online Master's in Data Science Programs in 2026" (2026-04-17). https://www.onlinemasterscolleges.com/online-data-science-masters/. Accessed 2026-07.
[^50]: OPM, 2026 General Schedule salary table. https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/salary-tables/pdf/2026/GS.pdf. Accessed 2026-11-23.
[^51]: USAJOBS, BLS Economist/Statistician (Economics), GS-13. https://www.usajobs.gov/job/862840200. Accessed 2026-11-23 (postings expire; figures may disappear).
[^52]: USAJOBS, BLS Economist/Statistician (Economics), GS-7. https://www.usajobs.gov/job/871929100. Accessed 2026-11-23.
[^53]: Akkodis, "How Programming Language Choice Drives Biostatistics Success" (2025-08-11). https://www.akkodis.com/blog/articles/programming-language-biostatistics-success. Accessed 2026-11-23. Vendor blog.
[^54]: U.S. Census Bureau, Decennial Census Disclosure Avoidance. https://www.census.gov/programs-surveys/decennial-census/disclosure-avoidance.2020.html. Accessed 2026-11-23.
[^55]: arXiv 2204.08986, "The 2020 Census Disclosure Avoidance System TopDown Algorithm." https://arxiv.org/pdf/2204.08986. Title seen in search results 2026-11-23; not read.
[^56]: arXiv 2410.06494, "Conformal Prediction: A Data Perspective." https://arxiv.org/pdf/2410.06494. Accessed 2026-11-23 (first 100,000 characters read).
[^57]: arXiv 2404.13356, "How do applied researchers use the Causal Forest? A methodological review." https://www.arxiv.org/abs/2404.13356v1. Accessed 2026-11-23.
[^58]: arXiv 2405.10198, "Comprehensive Causal Machine Learning." https://arxiv.org/html/2405.10198v2. Accessed 2026-11-23 (first 100,000 characters read).
[^59]: NeurIPS blog, "Reflections on the 2025 Review Process from the Program Committee Chairs" (2025-09-30). https://blog.neurips.cc/2025/09/30/reflections-on-the-2025-review-process-from-the-program-committee-chairs/. Accessed 2026-11-23.
[^60]: UMBC, NSF Big Data REU 2026 program. https://bigdatareu.umbc.edu/summer2026/2026-program. Accessed 2026-11-23.
[^61]: SMU, NSF REU "Advancing Data Science in the Public Interest" (Award 2447670). https://www.cs.purdue.edu/corporate/internships/nsfreu@smu.html. Accessed 2026-11-23.
[^62]: ClimbTheLadder, "Is Data Science a Hard Major? An Honest Look." https://climbtheladder.com/is-data-science-a-hard-major-an-honest-look/. Accessed 2026-11-23.
[^63]: Statistics Surveys vol. 16, "Post-model-selection inference in linear regression models: An integrated review" (2022). https://projecteuclid.org/journals/statistics-surveys/volume-16/issue-none/Post-model-selection-inference-in-linear-regression-models--An/10.1214/22-SS135.pdf. Title seen in search results 2026-11-23; not read. Related: arXiv 2311.13768, "Valid inference for regression with best subset selection."
[^64]: arXiv 2207.10223, "Fairness Testing: A Comprehensive Survey and Analysis of Trends." https://arxiv.org/html/2207.10223v4. Title seen in search results 2026-11-23; not read.
[^65]: arXiv 2603.22320, "How Can Machine Learning Emulators Best Support Climate Science?" https://arxiv.org/pdf/2603.22320. Title seen in search results 2026-11-23; not read.
[^66]: Google DeepMind, AI for science. https://deepmind.google/about/science. Accessed 2026-11-23.
[^67]: Kissmetrics, "Will AI Replace Data Analysts?" (2026-03-22). https://kissmetrics.io/blog/ai-replace-data-analysts. Accessed 2026-07. Vendor blog.
[^68]: Glassdoor job listing snippets for experimentation and causal inference data scientist roles. https://www.glassdoor.com/Job/menlo-park-data-scientist-experimentation-and-causal-inference-jobs-SRCH_IL.0,10_IC1147371_KO11,62.htm. Accessed 2026-07 (listings change daily).
[^69]: Refonte Learning, "A Beginner's Guide to Landing Your First Data Science Internship" (2025-05-09). https://www.refontelearning.com/blog/a-beginners-guide-to-landing-your-first-data-science-internship. Accessed 2026-07.
[^70]: Coding Temple, "Data Analyst Salary in 2026" (2026-04-30). https://www.codingtemple.com/blog/data-analyst-salary-2026/. Accessed 2026-07.
[^71]: Imarticus, "Are Data Scientists Oversaturated in 2026?" (2026-05-15). https://imarticus.org/blog/too-many-data-scientists-market-trends-in-2025/. Accessed 2026-07.
[^72]: Analytics Insight, "Top 10 Advanced Data Science Tools for Modern Analytics in 2026." https://www.analyticsinsight.net/data-science/top-10-advanced-data-science-tools-for-modern-analytics-in-2026. Accessed 2026-07.
