# Computer Science: Research Notes for the Field Roadmap

**Field:** Computer Science (US-centered)
**Compiled:** 2026-11-23
**Companion artifact:** `artifacts/computer-science-roadmap.jsx` (corrected on 2026-11-23 to match this file)

## Provenance note

This file was written after the JSX, not before it. Stage 1 research ran first (7 searches) and the artifact was built from it, but the research file the builder instructions require was never saved. This file reconstructs that research from the original search excerpts and adds a gap-fill pass run on 2026-11-23 (14 searches and 35 fetch attempts, 30 of which returned usable text) to check the claims the artifact made. A second gap-fill pass on 2026-11-23 (11 searches and 16 fetch attempts, 14 of them usable) targeted the AI-exposure and offshoring lines for five career paths (Data, Cybersecurity, Systems, Academia, Product/Quant) that the first pass had left as unsourced estimates; its sources are S67 to S79. The original pass ran on or before 2026-11-22 (the repo copy of the JSX is timestamped Nov 22; the exact day was not recorded).

Decision on whether a new session was needed: no. The original context alone was not enough to support the artifact (7 searches, mostly secondary career-site excerpts, and several artifact claims with no source at all). But the gaps were specific and fillable with primary sources (BLS, CRA, NSF, Georgia Tech, Indeed, SignalFire, Stanford), so the research was extended in place.

Source codes (S1, S2, ...) point to the Sources table at the end. "Seen as" in that table says whether a page was read in full (fetch) or only as a search excerpt (snippet). Figures seen only as snippets deserve a second look before they are quoted anywhere important. Section "Audit of the JSX" lists every claim in the original artifact that these sources do not support, contradict, or have superseded; the JSX was corrected on 2026-11-23.

## TL;DR

- Computer science is a field where a bachelor's is the normal entry credential. BLS (May 2025) reports a $134,040 median for software developers, QA analysts, and testers, about 1,905,400 jobs, and 10 percent projected growth for 2025-35 (S37). A master's is optional; BLS lists one as typical entry education only for computer and information research scientists ($140,300 median, 22 percent growth, about 38,600 jobs) (S39).
- The entry point is the problem, not the field. Indeed data reported by CIO (July 2026) show US software-development postings up 15 percent since February 2025 but still about 27.5 percent below pre-pandemic, with 71 percent of the growth in senior roles (S46). Indeed Hiring Lab puts entry-level at 4.5 percent of software-development postings in Q1 2026 (S45). SignalFire reports entry-level hiring at the largest tech firms about 65 percent below 2019 while total engineering hiring there is down only about 11 percent (S43).
- The AI link to the young-worker decline is real but descriptive. Stanford's ADP payroll study (revised 2026-08-12, data through June 2026) finds workers aged 22 to 25 in the most AI-exposed occupations 19 percent below trend relative to less-exposed peers, up from 15 percent a year earlier (S47, S48). The authors call this descriptive, not causal. A February 2026 follow-up finds interest rates a poor explanation but says AI is not the only factor (S49).
- Offshoring pressure exists, and the H-1B piece is in legal limbo. A January 2026 Blind survey (2,392 self-selected US and India professionals) found 52 percent expect their firms to raise India hiring and 38 percent say it replaces US roles (S66). India holds about half of the world's global capability center workforce, about 2 million people (S65). The $100,000 H-1B fee was extended through 2027-09-21 by a 2026-09-18 proclamation, but a federal court vacated the fee policy on 2026-06-08 and USCIS is not collecting it while the appeal runs (S61, S62).
- The PhD is funded and mostly leads to industry. Of supported doctoral students, 52 percent are on research assistantships, 41 percent on teaching assistantships, 6 percent on fellowships (S52). Median 9-month stipends in US CS units are $26.5K to $34K. Median time to degree is 5.7 years from program start (S55). Of new US computing PhDs with known outcomes in 2025, 61.7 percent went to industry and 32.2 percent to academia (S53).
- Pay at the top is self-reported and equity-heavy. Levels.fyi shows an OpenAI research scientist median of about $1.0M (S57), against a BLS median of $140,300 for the occupation (S39). Read the gap as a measure of who reports, not of a typical outcome.

## Key Findings

- **BLS figures moved.** The May 2025 BLS median for software developers is $134,040 with 10 percent growth for 2025-35 (S37). Earlier snippets showed $130,160, $133,080, and 17 percent growth through 2033, which are older vintages (S5, S11, S17, S18).
- **Postings are recovering from a low base, and the recovery is senior.** Software-development postings are up 15 percent since February 2025, still about 27.5 percent below pre-pandemic, and 71 percent of the May 2025 to May 2026 growth was senior-level (S46). Senior roles were 69.3 percent of software-development postings in Q1 2026 and entry-level 4.5 percent (S45).
- **Big Tech entry-level hiring is far below 2019, but engineering hiring overall is not.** SignalFire 2026: entry-level hiring at Tech Majors is down roughly 65 percent versus 2019, early-stage startups about 76 percent; engineering hiring at Tech Majors is down 11 percent since 2019 versus 25 percent for overall hiring. The report says the "AI Code Apocalypse" has not happened (S43). SignalFire 2025: new grads were 7 percent of Big Tech hires, down 25 percent from 2023 and over 50 percent from 2019; the data year is not labeled, most likely 2024 (S44).
- **Top-20 CS graduates are shifting.** They are 45 percent less likely to take an engineering role at a Tech Major than a few years earlier and twice as likely to call themselves founders as the class of 2022 (S43).
- **Stanford's finding is a gap, not a causal estimate.** Employment of 22-to-25-year-olds in highly AI-exposed occupations is about 19 percent below where it would be relative to less-exposed peers (15 percent at the July 2025 vintage). Adjustment is through reduced hiring, not separations. The authors call the patterns descriptive (S48). Their February 2026 post finds interest-rate exposure a poor explanation and says the decline for young software developers reflects several factors (S49).
- **The $100K H-1B fee is not currently owed.** The District of Massachusetts vacated the policy on 2026-06-08; the First Circuit refused to pause that on 2026-07-24; the extension signed 2026-09-18 runs through 2027-09-21 but is unlikely to be enforced while the order stands. A separate federal court allowed the fee in another case, and the appeal is pending (S61, S62).
- **OMSCS costs about $9K, not $7K.** Fall 2026 tuition is $227 per credit hour plus a per-semester online learning fee of $212 (under 4 credit hours) or $531 (4 or more) (S42). Thirty credits come to roughly $8.9K to $9.5K depending on course load (my calculation).
- **PhD stipends are lower than commonly assumed.** Median 2025-26 academic-year stipends in US CS units were $27,438 (RA), $26,500 (TA), and $34,000 (fellowship); private units paid about $38K to $40K (S52).
- **Faculty pay (Taulbee 2025 CS units medians):** assistant $131,115, associate $149,579, full $205,116, postdoc $67,000 (S51). The pay-period basis (9-month or 12-month) was not stated in the text retrieved.
- **BLS growth is strongest outside generic software development.** Data scientists +35 percent, computer and information research scientists +22 percent, information security analysts +21 percent, software developers +10 percent (all 2025-35) (S37 to S40).

- **Exposure evidence for the non-software paths is mostly about demand.** Robert Half reports 2025 postings up 124 percent for security, up 163 percent for AI, ML, and data science, and a 0.4 percent Q1 2026 unemployment rate for network and systems administrators (S73). No source measured AI's employment effect on data, security, infrastructure, academic, product, quant, or ML roles specifically. Cleared security work is protected from offshoring by citizenship rules (S68, S69), and academia's visible exposure is its dependence on international students, who earned 50.4 percent of 2025 CS doctorates (S53).

## Undergraduate

### Core structure

- The sequence is intro programming and abstraction, data structures and algorithms, discrete mathematics, computer architecture and systems, operating systems, theory of computation, and a compilers or databases elective. Course names come from Berkeley's CS 61A/61B/61C plus Math 54 (S1), a general list of hardest core courses (S2), and a practitioner list that adds automata theory and discrete math (S3). The sequence is the common shape, not any one catalog.
- Research.com says algorithms and data structures is often the most important and difficult course because students must explain why a solution works and how it performs, not only code it (S2).

### The weeder question

- Data structures and algorithms (S2, S3), discrete math (S3), operating systems (S3), and at Berkeley CS 61A and Math 54 (S1).
- On discrete math, an instructor quoted in S3 says the difficulty "is almost entirely in unfamiliarity."
- On operating systems, a Harvard graduate quoted in S3 says each week's assignment builds on the last, and one assignment ran to 92 pages of code.

### Skills and methods

- No source retrieved lists skills for CS. The artifact's items on languages, Git, debugging, and testing are general knowledge, left unchanged and listed in the audit.
- IEEE Spectrum quotes Kelly Services' Hugo Malan: with AI taking the grunt work juniors used to learn on, "you need to slot in at a higher level almost from day one" (S4). The Stanford-adjacent and CCC material support a shift toward specifying intent and verifying output (S64).

### Beyond the classroom

- NACE Job Outlook 2026: industry experience and demonstrated proficiencies are among the top factors employers consider (S4). Employers rated the graduate job market their most pessimistic since 2020, though 49 percent still called it good or very good (S4).
- NACE reported computer science tied for the top spot in employer demand, with 67.1 percent of respondents planning to hire CS majors; projected pay for the Class of 2025 was $76,251 for CS and $82,536 for software engineering majors (S6, secondhand). Another summary says employers project only a 1.6 percent increase in hiring for the Class of 2026 (S5, secondhand).
- Handshake: 70 percent of Class of 2026 CS majors feel at least somewhat pessimistic, 14 percent optimistic (S6, secondhand).
- No CS-specific REU, competition, or society source was retrieved. The artifact's mentions of REUs, competitive programming, and hackathons are general knowledge.

### Market backdrop

- The number of US CS graduates has more than doubled since 2011 (NCES, as reported in S7).
- NY Fed, 2026:Q3: recent-graduate unemployment 5.2 percent, underemployment 42.5 percent (S50). A CS figure of 6.1 percent unemployment (computer engineering 7.5 percent) appears in S7 (December 2025) citing a Federal Reserve report. The vintage was not confirmed, and the NY Fed page's by-major table did not render as text (S50).
- Counterpoint: a University of Washington professor told CS students most majors still take full-time engineering jobs, and a Boston University researcher argues automation has historically grown employment in fields that become cheaper to practice (S9).
- Forrester's 2026 predictions forecast a 20 percent drop in CS enrollments (S10, secondhand).

## Master's

### The degree fork

- No source retrieved describes thesis versus coursework master's norms for CS. The artifact's statement that professional master's students self-fund is a general pattern carried over from the EE and ME research files in this repo and was not verified for CS.
- BLS lists a master's as typical entry education for computer and information research scientists (S39). For software developers and information security analysts, a bachelor's is typical (S37, S38).
- A Pace University page citing PayScale says MS graduates earn about 17 percent more in career earnings than bachelor's holders, with average base around $114,000 (S31). Research.com says the degree is strongest when matched to a specific role and valued differently by employer type (S32).

### OMSCS

- Georgia Tech's online MS requires 30 credit hours, about 10 courses, with a 3.0 minimum GPA (S30).
- Specializations: one review lists four (Machine Learning, Computing Systems, Interactive Intelligence, Computational Perception and Robotics) (S28); another lists five including HCI (S29). The official specialization page's names were not retrieved.
- Cost, Fall 2026 (S42): tuition $227 per semester credit hour; online learning fee $212 per semester for under 4 credit hours, $531 for 4 or more. My arithmetic: $6,810 tuition for 30 credits, plus $2,120 in fees at one 3-credit course per term (10 terms), or $2,655 at two courses per term (5 terms at $531). Total: about $8.9K to $9.5K. The Bursar notes charges are subject to change.
- Graduation rate: one review site says it "falls below 50%" (S28). No second source; unverified.
- One review says most students work full-time and take one to two courses per semester (S29).

### Skills

- Advanced skills named in the artifact (deep learning frameworks, distributed systems, research methods, MLOps) are general knowledge and unsourced in this pass.

## PhD / Research

### Structure and funding

- Support mix across all reporting US and Canadian units, 2025: research assistants 9,631 of 18,695 supported students (about 52 percent), teaching assistants 7,722 (about 41 percent), full-support fellows 1,211 (about 6 percent). About 60 percent of RA funding came from external sources (S52).
- Median 9-month stipends, 2025-26, US CS units: fellowship $34,000, RA $27,438, TA $26,500. Public units: $32,880, $26,000, $25,148. Private units: $40,500, $38,399, $40,014 (S52). The page's RA institutional-funding summary is internally inconsistent with its table, so treat the support shares as approximate.
- Duke commits to five years of funding for students in good standing (S22). Stanford guarantees funding with satisfactory progress (S23). ProFellow describes full funding as tuition plus stipend for three to six years and recommends prioritizing programs that fund fully (S24).
- Median time to degree for computer science doctorates, 2024: 5.7 years from doctoral program start, 6.8 years from graduate school start, 8.0 years since the bachelor's (S55).
- Quals, candidacy, and dissertation structure were not researched for CS; the artifact's description is general knowledge.

### Placement

- Of 2,093 US-awarded computing PhD recipients in 2025, 1,515 had known outcomes: industry 61.7 percent, academia 32.2 percent, government 2.9 percent, other or self-employed 2.4 percent, unemployed 0.7 percent. The page does not split academia into tenure-track and other roles (S53).
- CS doctoral degrees granted in 2025: 1,909 across all respondents, 1,763 from CS units (S53).
- Faculty hiring tables ("Anticipated Faculty Hiring," "Hiring Outcomes," "Sources of New Hires") exist in Taulbee 2025 but their contents were not retrieved (S54).

### Research frontiers (as supported by retrieved sources)

- **AI-assisted software engineering.** The CRA Computing Community Consortium's August 2026 report says development is shifting from writing code to specifying intent, orchestrating agents, and verifying output. It names nine research areas: bridging the intent gap, neuro-symbolic assurance, cross-layer orchestration, goal-driven security interfaces and secure-by-construction, training data transparency and IP governance, robustness through transpilation, AI-assisted deployments, industrial-academic alliances, and reskilling the developer (S64).
- **Agentic programming and verification.** 2026 arXiv excerpts include a survey of agentic programming, a "Hitchhiker's Guide to Agentic AI," agentic program verification with automated lemma discovery, verifier-grounded agentic RL for provably correct code, and verified Dafny synthesis (S36).
- **Post-quantum cryptography.** NIST published FIPS 203 (ML-KEM), 204 (ML-DSA), and 205 (SLH-DSA) in August 2024. NSA's CNSA 2.0 mandates full PQC migration by 2030. "Harvest now, decrypt later" drives urgency (S34). The IEEE Computer Society expects AI to be central to migration on both defense and offense (S35).
- **Quantum computing.** The Quantum Insider's 2026 predictions say quantum computers could emerge as early as 2029 (S33). That is a forecast.
- **Industry-academia gap.** The CCC report says industry dominance of compute and models limits academic research (S64).
- No source retrieved supports the artifact's earlier labels "most active and best-funded" for agentic AI or "major hiring hotspot" for ML systems; both were removed.

## Tools and AI

- **Adoption.** 84 percent of developers use AI tools, up 14 points from 2023, per the Stack Overflow 2025 Developer Survey as reported by SoftwareSeni (S10, secondhand). Copilot and Cursor are named as common assistants (S8).
- **Automation versus augmentation.** SoftwareSeni says 79 percent of Claude Code conversations in the Anthropic Economic Index were classed as automation rather than augmentation (S10). I did not verify this against the index itself and the artifact does not use it.
- **Benchmarks.** SoftwareSeni cites SWE-Bench performance rising from 4.4 percent to 71.7 percent of problems solved between 2023 and 2024 (S10). Benchmark variants differ; not used in the artifact.
- **Practitioner view.** IEEE Spectrum quotes Hugo Malan: AI agents will realign which jobs exist rather than replace workers one for one, yet "the biggest impact by far would be on programmers" (S4). SignalFire 2026 says routine junior tasks (boilerplate, unit tests, routine debugging) are being automated but that overall engineering hiring has not collapsed (S43). The CCC report warns AI can deskill less experienced developers (S64).
- **Contested causes.** A career-site analysis argues interest-rate hikes, not AI, are the primary driver of the junior squeeze (S8, opinion). Stanford's authors find rates a poor explanation (S49). Treat attribution as unsettled.
- **Fundamentals-first advice** appears in practitioner guides (S8) and is opinion, not outcome data.

## Career Paths

Salary note: BLS figures are base wages for the occupation (May 2025). Levels.fyi and similar figures are self-reported total compensation skewed toward large tech employers and include equity that may be illiquid.

### 1. Software Engineering

- Titles: SWE Intern, New-Grad SWE, SWE II, Senior SWE, Staff Engineer, Principal Engineer.
- Reality: well paid, but the on-ramp is thin. Postings are rebounding from a low base and the rebound is senior (S46); entry-level is 4.5 percent of software-development postings (S45); entry-level hiring at the largest firms is about 65 percent below 2019 while total engineering hiring is down about 11 percent (S43). BLS projects 10 percent growth for 2025-35 (S37).
- Salary: BLS median $134,040 (S37). Levels.fyi median total compensation about $192K in mid-2026 (25th percentile $135K, 75th $277K), skewed to big tech (S13). New-grad base $80K to $130K, FAANG new-grad total compensation about $140K median (S13). Senior at FAANG roughly $300K to $480K total compensation depending on source: Google L5 $425K and Meta E5 $478K (S16); Meta senior about $380K and Google senior about $302K (S18). NACE projected Class of 2025 pay: $76,251 CS, $82,536 software engineering (S6, secondhand).
- AI and offshoring: Highest exposure of the seven paths. Stanford's study (S47, S48, S49) and SignalFire (S43) show the squeeze falling on early-career workers in AI-exposed jobs. Offshoring: Blind's January 2026 survey (n=2,392, self-selected) found 52 percent expect more India hiring, 38 percent say it replaces US roles, 23 percent say it complements them, 28 percent cite H-1B restrictions (S66). A Rest of World piece cites a 2024 study estimating 0.4 to 0.9 hires abroad per H-1B rejection and reports Alphabet exploring up to 2.4 million square feet in Bengaluru (S65). The H-1B fee status is in S61 and S62.
- Sources: S13, S16, S18, S37, S43 to S49, S61, S62, S65, S66.

### 2. AI / ML Engineering and Research

- Titles: ML Intern, ML Engineer, Applied Scientist, Research Engineer, Research Scientist.
- Reality: the strongest demand and pay. BLS lists computer and information research scientists at a $140,300 median, 22 percent growth for 2025-35, about 38,600 jobs, and a master's as typical education (S39). Wage premium for AI skills: PwC 56 percent (S13, S16), about 20 percent (S15, S18), 15 to 25 percent (S19). Frontier-lab research seats are very selective; no placement data was retrieved.
- Salary: BLS $140,300 (S39). ML engineer entry and mid $112K to $128K, $160K and up senior (career-site figures, S12). Levels.fyi, self-reported: OpenAI research scientist median total compensation about $1.0M (updated 2026-08-01; L4 average $818K, L5 $1.47M; highest reported $1.75M) (S57). HeroHunt, citing Levels.fyi, gives an OpenAI research scientist or research engineer median of about $1.25M (S56). Anthropic research scientist: Levels.fyi has too little data for a median; highest reported $892K (S58). H-1B filings put OpenAI technical staff median base near $310K and Anthropic near $300K (S56, secondhand). xAI median total compensation about $600K across engineers (S15).
- AI and offshoring: This is where hiring demand is concentrated, so the evidence is about demand rather than displacement. Robert Half counts 49,200 AI, ML, and data science postings in 2025, up 163 percent from 2024 (S73). Indeed finds tech postings mentioning AI about 45 percent above February 2020 at the end of 2025 while total tech postings were 34 percent below (S72). BLS projects 22 percent growth for research scientists (S39), and quant firms and AI labs are competing for the same scientists (S78, S79). The top is a narrow funnel, and no placement data for frontier-lab seats was found. Offshoring: GCCs account for an estimated 30 to 35 percent of AI-related hiring in India (S74), nearly two in three new GCC roles in 2026 require AI, data science, or intelligent automation skills (S75), and Alphabet's planned Bengaluru expansion is described as including thousands of ML and AI roles (S65). The US-versus-India split of that hiring was not found.
- Sources: S12, S13, S15, S16, S18, S19, S39, S56 to S58, S65, S72 to S75, S78, S79.

### 3. Data Science and Engineering

- Titles: Data Analyst, Data Scientist, Data Engineer, Senior Data Scientist, Analytics Lead.
- Reality: BLS projects 35 percent growth for 2025-35 from about 275,600 jobs, with a bachelor's as typical entry education (S40). One career guide says roughly 80 percent of the work is data preparation (S12, aggregator).
- Salary: BLS median $120,230 (May 2025) (S40). Robert Half's 2026 starting-salary ranges (low, mid, high): data scientist $121,750, $153,750, $182,500 and data engineer $127,000, $156,250, $180,750 (S73).
- AI and offshoring: Mixed signals, and no study isolating AI's effect on US data-science employment was found. Indeed's January 2026 update finds data and analytics has the highest AI share of any sector, with 45 percent of postings mentioning AI as of December 2025, while total tech postings sat 34 percent below pre-pandemic (S72). The Microsoft Copilot-usage study names data scientists among occupations where AI is highly applicable but says the score measures relevance, not productivity or job loss, and gives no numeric score for the occupation (S76). Anthropic's Economic Index shows Claude proficiency across large parts of database architects' work and cautions that even 90 percent task coverage does not necessarily indicate large job impacts (S71). On the demand side, Robert Half counts 49,200 AI, ML, and data science postings in 2025, up 163 percent from 2024, and flags data scientists as seeing increased demand (S73). Offshoring: nearly two in three new GCC roles in India in 2026 require AI, data science, or intelligent automation skills, per a Swarajya report that does not name its underlying data source (S75), and TechRepublic reports GCC demand strongest in AI, platform, cloud, security, and data roles (S74). The US-versus-India split for data roles was not found.
- Sources: S12, S40, S71 to S76.

### 4. Cybersecurity

- Titles: Security Analyst, Penetration Tester, Security Engineer, Security Architect, CISO.
- Reality: BLS projects 21 percent growth for 2025-35 from about 192,900 jobs, bachelor's typical (S38). Post-quantum migration adds work (S34). US citizenship is generally required for access to classified information: ClearanceJobs, citing Executive Order 12968, says eligibility is limited to US citizens with rare exceptions (S69), and 32 CFR 117.10 tells contractors to make every effort not to employ non-citizens on cleared duties, with a Limited Access Authorization possible only in rare cases where a cleared or clearable citizen is not readily available (S68). The DCSA adjudication FAQs list non-citizenship as a reason for a 'no determination made' outcome but state no general rule themselves (S67). The share of cyber roles that are cleared was not found. ISC2's 2025 survey (16,029 respondents, fieldwork July to August 2025) finds 33 percent of organizations lack the budget to staff teams adequately and 30 percent cannot find people with the skills they need; 39 percent report hiring freezes and 24 percent layoffs (S70).
- Salary: BLS median $129,180 (May 2025) (S38). Robert Half's 2026 starting-salary ranges (low, mid, high) for cybersecurity engineers are $118,500, $144,000, and $190,750 (S73). ClearanceJobs' 2026 report: average cleared-professional total compensation $126,125, up nearly 6 percent in 2025; $149,875 for those with a lifestyle or full-scope polygraph, nearly $30K more than cleared professionals without one. It gives no cleared-versus-uncleared comparison and no cybersecurity-specific figure (S63).
- AI and offshoring: No occupation-level AI-exposure score for security analysts was found; the Microsoft Copilot-usage study reports only a group-level score for all computer occupations (0.29) (S76). ISC2's survey finds 69 percent of organizations are using, testing, or evaluating AI tools, 63 percent of active users report a significant productivity boost, and 73 percent expect AI to create more specialized skills needs (S70); the IEEE Computer Society expects AI to be central on both defense and offense (S35). Robert Half counts 66,800 security postings in 2025, up 124 percent from 2024, and a 2.7 percent unemployment rate for security analysts (S73). Offshoring: cleared work is shielded by the citizenship rules above (S68, S69). For uncleared work, TechRepublic reports Indian GCCs' strongest demand is in AI, platform engineering, cloud, cybersecurity, and data roles (S74), but no US-versus-India split for security roles was found.
- Sources: S34, S35, S38, S63, S67 to S70, S73, S74, S76.

### 5. Systems, Cloud and DevOps

- Titles: DevOps Engineer, Site Reliability Engineer, Cloud Engineer, Platform Engineer, Infrastructure Architect.
- Reality: no source retrieved describes entry paths for these titles. Robert Half's June 2026 report lists DevOps engineers and network/cloud engineers among consistently in-demand roles (S73). BLS lists related occupations: computer network architects $134,050, database administrators and architects $126,760, network and computer systems administrators $99,130 (May 2025) (S41). The group-level BLS outlook is "faster than the average," about 280,000 openings a year across the whole computer and IT group (S41).
- Salary: the BLS figures above. Robert Half's 2026 starting-salary ranges (low, mid, high): DevOps engineer $118,000, $145,750, $173,750; network or cloud engineer $110,000, $132,000, $155,000 (S73). A career-site figure puts cloud architect average pay at $218,609 (Nexford via S12, unverified aggregator).
- AI and offshoring: No occupation-level study of AI automation of DevOps, SRE, or cloud work was found, and the Microsoft Copilot-usage study does not score these occupations (S76). Demand evidence is positive: Robert Half's June 2026 report lists DevOps engineers among roles with above-average sequential growth and consistent 12-month demand, and reports a Q1 2026 unemployment rate of 0.4 percent for network and computer systems administrators against 4.3 percent nationally in May 2026 (S73). SoftwareSeni argues experienced engineers' tacit system-level knowledge is what AI substitutes for least (S10, secondhand). Offshoring: TechRepublic reports Indian GCCs' strongest demand is in AI, platform engineering, cloud, cybersecurity, and data roles, and that GCCs added nearly 200,000 net employees in fiscal 2026 (S74), so offshoring pressure is plausible; a US-versus-India split for infrastructure roles was not found.
- Sources: S10, S12, S41, S73, S74, S76.

### 6. Academia and Research

- Titles: PhD Student, Postdoc, Research Scientist, Assistant Professor, Associate Professor, Full Professor.
- Reality: requires a PhD. Of new US computing PhDs with known outcomes in 2025, 61.7 percent went to industry and 32.2 percent to academia (S53). The tenure-track share and faculty openings were not retrieved (S54). The claims that tenure-track positions are scarce and geographically inflexible are common but not verified in this pass.
- Salary: PhD 9-month stipend medians $26.5K to $34K in US CS units, about $38K to $40K at private units (S52). Taulbee 2025 CS-unit medians: postdoc $67,000, assistant professor $131,115, associate $149,579, full professor $205,116 (S51); pay-period basis not confirmed.
- AI and offshoring: No study of AI's effect on CS faculty or research jobs was found, and the Microsoft Copilot-usage study does not score these occupations (S76). The CRA's 2026 report says industry dominance of compute and models limits academic research (S64). The exposure visible in the data is international: nonresidents earned 962 of 1,909 (50.4 percent) of CS doctorates in 2025, are 57.2 percent of enrolled CS PhD students and 64.1 percent of new CS admits, and international students were 71.3 percent of PhD acceptances in the survey; international PhD applications rose 87.9 percent from 2022 to 2025 (S53). Among PhDs with a known employment location, 92.9 percent stayed in the US (the page's text says 93.5 percent) (S53). My reading: visa and immigration policy shapes this pipeline more than offshoring does.
- Sources: S51 to S54, S64, S76.

### 7. Product, Quant and Founder

- Titles: Product Manager, Quant Developer, Solutions Engineer, Technical Co-founder, CTO.
- Reality: adjacent destinations where the CS foundation is leverage. SignalFire's 2026 report finds top-20 CS graduates are twice as likely to call themselves founders as the class of 2022 (S43). Quant firms recruit from a very small slice of graduates per a secondary source (S14). More than 80 percent of seed and Series A startups reportedly exit at zero (CB Insights, quoted by S16 and S19, secondhand).
- Salary: Levels.fyi technical product manager median total compensation $260,000 (25th percentile $180K, 75th $354K, 90th $461K), updated 2026-11-20, skewed to big tech (S60). PayScale quantitative developer average base $129,614 (range $66K to $186K, 11 profiles, updated 2026-04-08; small sample) (S59). Top trading-firm entry total compensation: Jane Street about $350K, Hudson River Trading about $410K (S14, secondary site); S15 puts those firms' medians above $430K. Per one recruiter quoted by Bloomberg, first-year compensation for ML-focused PhDs at quant firms runs $450,000 to $650,000 and can reach $800,000 (S78). For comparison, the finance research file in this repo cites $150K to $250K junior quant researcher base from Myntbit, which was not checked here.
- AI and offshoring: No source on AI or offshoring exposure for product managers or founders was found, and the Microsoft Copilot-usage study does not score them (S76). Posting data: Ceipal's Q4 2025 analysis of 19,958 IT and engineering postings put project manager first by volume (768) and left product manager outside the top 20, from one vendor's sample (S77); Robert Half lists IT project managers among the highest-demand roles but gives no product-management figures (S73). Quant: Selby Jennings (January 2026) lists quantitative developers among the most constrained talent supplies, cites AI integration as a driver of quant demand, and calls London and New York the anchor markets with Singapore, Hong Kong, and select nearshore locations emerging (S79). Bloomberg (via Staffing Industry Analysts, October 2026) reports quant firms recruiting AI scientists against AI labs, with Jump's CTO saying AI-assisted coding has blurred the line between researchers and engineers (S78). Evidence of AI or offshoring displacing quant roles was not found.
- Sources: S14 to S16, S19, S43, S59, S60, S73, S76 to S79.

## Uncertainties and Regional Variation

- **US focus.** Degree structure, funding, salaries, and policy are US. The only non-US datapoint retrieved is a University of Glasgow studentship stipend of GBP 22,437 for 2027-28 (S26). No non-US CS source was researched.
- **BLS data year.** Direct fetches on 2026-11-23 show May 2025 wages and 2025-35 projections. Earlier snippets showed May 2024 wages and 2023-33 projections. The next release will move these again.
- **Snippet-only evidence.** Sources S1 to S35 were read as search excerpts, not full pages. Most salary aggregator figures, the NACE and Handshake figures, the Stack Overflow survey figure, and the Forrester forecast are secondhand.
- **Internal inconsistency in one source.** S5 states both a 28 percent and a roughly 40 percent decline in entry-level postings from 2022. Neither is used; verified alternatives replace them.
- **Self-reported compensation.** Levels.fyi and HeroHunt figures are self-reported, equity-heavy, skewed to top firms, and in OpenAI's and Anthropic's case based on private-company equity. HeroHunt and Levels.fyi medians for OpenAI research roles differ by about $250K (S56, S57).
- **Pay-period basis.** Taulbee faculty salaries and stipends: the stipend page says 9-month; the salary page text retrieved did not state a basis (S51, S52).
- **OMSCS cost.** Computed from a Bursar PDF read through a fetch summary. The fee threshold (per semester, by credit hours) may be mis-summarized; verify on the Bursar page before quoting. Graduation rate below 50 percent is single-source (S28).
- **NY Fed by-major figures.** The CS 6.1 percent and computer engineering 7.5 percent unemployment figures could not be confirmed on the NY Fed page, which showed only overall recent-graduate rates (S50).
- **Stanford specifics.** The fetched pages for the paper and its August 2026 update did not mention software developers by name. The software-specific figure (nearly 20 percent below the late-2022 peak by July 2025) comes from secondary reports of the earlier version (S7, S10).
- **Blind surveys.** Anonymous, self-selected app users, not a probability sample (S66). The Blind blog post on rehiring in India could not be fetched.
- **H-1B.** The legal status can change with little notice; the appeal is pending (S62).
- **Blocked or failed fetches.** Hiring Lab's canonical URL and SignalFire's 2025 canonical URL were off the fetch allowlist (a mirror and an alternate URL were used); one vnexpress page returned empty; the Blind blog failed.
- **Missing figures.** Tenure-track hiring counts, CS master's funding norms, CS REU and competition sources, security clearance share of cyber roles (the citizenship rule itself is now sourced), cloud-certification effect, PM and founder outcomes beyond Levels.fyi, US-versus-India splits of hiring by role for any path, and any study measuring AI's employment effect on data, security, infrastructure, academic, product, quant, or ML roles specifically.
- **Exposure evidence caveats.** The Microsoft study scores usage in Bing Copilot (US, 2024) and gives only a group-level figure for computer occupations (S76). Anthropic's index measures Claude usage and warns task coverage is not job impact (S71). Indeed's 45 percent is a share of postings that mention AI, not a measure of displacement (S72). The Robert Half and Ceipal counts each come from one vendor (S73, S77). The Swarajya GCC statistic does not name its source (S75). Bloomberg's quant pay range is one recruiter's estimate (S78). The DCSA FAQ page states no general citizenship rule; the rule comes from 32 CFR 117.10 and the ClearanceJobs summary of Executive Order 12968 (S67 to S69).
- **Paths not researched.** Government and public-sector technology, IT services and consulting, game development (see the separate game-development roadmap), and computing education.
- **Location.** Software and AI pay concentrates in the Bay Area, Seattle, New York, and Boston: Levels.fyi Bay Area median total compensation $273,170 versus New York $193,000 (S13).

## Audit of the JSX

Comparison of the original `artifacts/computer-science-roadmap.jsx` (identical, apart from line endings, to the file first delivered) against the sources above. Rows marked wrong, superseded, unsupported, overstated, or estimate were corrected, softened, or labeled in the JSX on 2026-11-23. Rows marked correct were kept.

| Claim in JSX | Status | What the sources show |
|---|---|---|
| Status bar and salary text: BLS median $130K / $130,160 | Superseded | $134,040 in May 2025 (S37). $130,160 and $133,080 are older or aggregator figures (S13, S17, S18). |
| Status bar: "+15% jobs by 2033" | Superseded | BLS projects 10 percent for 2025-35 (S37). Snippets said 17 percent through 2033 (S8, S11); none said 15. |
| Status bar and card: "entry -40% vs '22", "entry-level postings down about 40% from 2022" | Unsupported | S5 gives both 28 and 40 percent. Verified: all software-development postings about 27.5 percent below pre-pandemic (S46), entry-level 4.5 percent of postings (S45), entry-level hiring at Tech Majors about 65 percent below 2019 (S43). |
| "New grads were just 7% of Big Tech hires in 2025, down from 32% in 2019" | Misdated, partly unsupported | SignalFire: 7 percent, data year unlabeled and likely 2024; down 25 percent from 2023 and over 50 percent from 2019 (S44). The 32 percent figure appears only in S11. |
| "Stanford study found about 20% decline for developers aged 22-25 since 2022" | Partly supported, secondhand | Current paper: about 19 percent below trend relative to less-exposed peers for ages 22-25 in the most AI-exposed jobs, through June 2026 (S47, S48). The software-specific figure is from the earlier version via S7 and S10. Descriptive, not causal (S48, S49). |
| "H-1B costs spike (fee now $100K/petition)" | Wrong as of today | Extended through 2027-09-21 but vacated by court 2026-06-08; not being collected (S61, S62). |
| Offshoring: "'solid but mid' implementation roles are migrating to India" | Anecdote | One Meta employee quoted on Blind (S20). Replaced with survey figures (S66) and GCC data (S65). |
| Status bar "grad unemp 6.1%" | Dated, vintage unconfirmed | Secondhand via S7. NY Fed page shows overall 5.2 percent unemployment and 42.5 percent underemployment, 2026:Q3 (S50). Label added. |
| Status bar "84% of devs use AI" | Secondhand | Stack Overflow 2025 via S10. Label added. |
| Undergrad intro: "most competitive entry-level market in a generation" | Unsupported | Rhetorical. Replaced with verified posting figures (S45, S46). |
| "Internship-to-return-offer pipeline is the most reliable way in"; "start applying sophomore year" | Unsupported | NACE (via S4) says industry experience and demonstrated proficiency are top employer factors. Reworded. |
| "Competitive programming ... still how a large share of first interviews are won" | Unsourced | Relabeled as general knowledge. |
| "Cloud certification measurably helps an entry-level resume" | Overstated | Career guides pair degrees with cloud certs (S8, S12); no outcome data. Softened. |
| "Juniors who offload the learning to AI become the ones automation replaces" | Opinion | IEEE Spectrum says AI absorbs grunt work juniors learned on (S4). Reworded. |
| "Consistent practitioner view: learn fundamentals raw first" | Opinion | S8 only. Labeled as opinion. |
| OMSCS "around $7K total" | Wrong | About $8.9K to $9.5K at Fall 2026 rates (S42, my calculation). |
| OMSCS "under half of students finish it" | Single source | S28 only. Labeled unverified. |
| "Classic master's funding trap still applies; professional MS students self-fund" | Unsupported for CS | Carried over from other research files. Labeled as general pattern. |
| Master's "increasingly list an MS as preferred"; "+17% career earnings" | Partly supported | S31 (PayScale via Pace). BLS lists master's typical only for research scientists (S39). Reworded. |
| Computing Systems: "the corner of CS that AI is automating least" | Unsupported | S10 argues tacit systems knowledge is what AI substitutes for least. Reworded and attributed. |
| Cybersecurity master's: clearance "invisible barrier standard guides rarely mention" | Unsupported | General knowledge, no source. Reworded and labeled. |
| MLOps "most real AI work turns out to be" | Unsupported | Removed. |
| Distributed systems "hard to automate and durably in demand" | Unsupported | Removed. |
| PhD "fully funded" and "5-6 years" | Overstated | Funding mix 52/41/6 percent (S52); guarantees at Duke (S22) and Stanford (S23); median 5.7 years from program start (S55). Rewritten. |
| "An unfunded offer is a red flag" | Opinion | ProFellow advises prioritizing funded programs (S24). Reworded. |
| Industry lab summers "frequently convert into full-time offers" | Unsourced | Removed; added placement data (S53). |
| Frontier labels: agentic AI "most active and best-funded", ML systems "major hiring hotspot", systems/security/HCI "fundable" | Unsupported | Removed or replaced with CCC and arXiv evidence (S36, S64). |
| Quantum "inches toward useful scale later this decade" | Unattributed | S33 says quantum computers could emerge as early as 2029. Attributed. |
| GPU clusters "now the difference" | Unattributed | CCC says compute dominance limits academia (S64). Attributed. |
| Careers: BLS "median $130,160", Levels.fyi median TC $192K | Mixed | BLS superseded (S37). Levels.fyi figure correct (S13). |
| AI/ML wage premium "20-56%" | Range widened | 15 to 56 percent depending on source (S13, S15, S16, S18, S19). |
| "The one corner of CS whose demand AI is increasing" | Overstated | Softened. BLS growth is 22 percent for research scientists but data scientists are 35 percent (S39, S40). |
| Frontier-lab researchers "$400K-$600K+ total compensation" | Wrong | OpenAI research scientist median about $1.0M to $1.25M (S56, S57); Anthropic highest reported $892K, no median (S58); $600K is the xAI median across engineers (S15). |
| ML engineer "$112K-$160K+" | Aggregator | S12 only. Labeled. |
| "The safe harbor: you're building the automation" | Opinion | Reworded as unsourced estimate. |
| Data science "~$122K average", "senior roles clear $180K+", "durable", "data engineering more defensible" | Superseded or unsupported | BLS $120,230, +35 percent, about 275,600 jobs (S40). $180K and the defensibility claim had no source and were removed or labeled; Robert Half 2026 starting ranges now fill the pay gap (S73). |
| Cybersecurity "analysts ~$113K", "senior $150K-$220K+" | Superseded or unsupported | BLS $129,180, +21 percent, about 192,900 jobs (S38). Senior range unsourced; removed. |
| "Cleared roles carry a further premium" | Partly supported | Polygraph holders average $149,875, nearly $30K more than cleared without one; no cleared-versus-uncleared comparison (S63). |
| Clearance-gated roles "legally can't leave the country" | Now sourced, reworded | 32 CFR 117.10 and ClearanceJobs on Executive Order 12968 support citizenship being generally required for classified access, with rare exceptions (S68, S69). The JSX says cleared work is shielded by rule and that uncleared security work has no offshoring evidence either way. |
| Systems/DevOps "~$130K average", architects "$180K-$220K+" | Aggregator, unsupported lower bound | BLS related occupations $99,130 to $134,050 (S41); Robert Half 2026 starting ranges added (S73). $218,609 cloud architect average stays as an unverified aggregator figure (S12). |
| "Among the least-automatable CS work" | Unsupported | Labeled unsourced estimate. |
| Academia "PhD stipend $40K-$50K" | Overstated | Medians $26.5K to $34K, private about $38K to $40K (S52). |
| "Postdoc $60K-$80K; assistant professor $100K-$150K" | Superseded | Taulbee 2025 medians: postdoc $67,000, assistant $131,115, associate $149,579, full $205,116 (S51). |
| "Tenure-track path is scarce"; "failed academic stigma barely exists" | Unsupported | 61.7 percent of new PhDs with known outcomes go to industry, 32.2 percent to academia; tenure-track not separated (S53, S54). Rewritten. |
| "PM $120K-$200K+" | Superseded | Levels.fyi median $260,000, 25th to 75th percentile $180K to $354K (S60). |
| "Quant developers $150K-$250K junior" | Unsupported here | PayScale average base $129,614 from 11 profiles (S59). The $150K to $250K figure traces to the finance research file (Myntbit), unchecked. |
| "Founder outcomes are bimodal" | Unsourced | Removed; SignalFire founder statistic added (S43). |
| "Human-premium skills AI tends to raise the value of" | Unsourced | Removed. |
| AI-exposure reads on AI/ML, Data, Cyber, Systems, Academia, Product paths | Researched 2026-11-23 | Each now states what the sources show or says plainly that no study was found (S67 to S79). The "Unsourced estimate" labels were removed from the JSX. |
| Footer "COMPILED JUL 2026"; "BLS OEWS MAY 2024" | Wrong | Compiled November 2026; sources line and Career Paths header updated. |
| Core curriculum items, weeder descriptions | Supported | S1 to S3. Kept. |
| PQC standards and "harvest now, decrypt later" | Correct | S34. Kept. |
| Formal verification "increasingly LLM-assisted" | Supported | S36, S64. Kept. |
| Items kept as general knowledge, unsourced | Unchanged | Skills list (languages, Git, system design, debugging, testing), REU and research advice, "specialize early" (partly S5, S15), advisor-fit advice, HCI track, career-changer on-ramp, project portfolio advice, Unix/Linux and PyTorch/JAX tooling, deep learning frameworks, research methods, advisor-and-quals description, "AI as research collaborator." A few untouched items still contain older em-dashes in their text; they were left alone because the edit was limited to claims the research changed. |

## Sources

Original pass (on or before 2026-11-22), all read as snippets unless noted. Gap-fill pass (2026-11-23) pages are marked fetch or snippet.

| Code | Source and URL | Published | Seen as |
|---|---|---|---|
| S1 | College Magazine, "Save the GPA: Top 10 Hardest Classes at UC Berkeley", https://www.collegemagazine.com/save-the-gpa-top-10-hardest-classes-at-uc-berkeley/ | 2020-11-04 | snippet |
| S2 | Research.com, "2026 Hardest and Easiest Courses in a Computer Science Degree Program", https://research.com/advice/hardest-and-easiest-courses-in-a-computer-science-degree-program | 2026 (date approximate) | snippet |
| S3 | Comp Sci Central, "Hardest Computer Science Classes of Undergrad", https://compscicentral.com/hardest-computer-science-classes/ | 2023-04-01 | snippet |
| S4 | IEEE Spectrum, "AI Shifts Expectations for Entry Level Jobs", https://spectrum.ieee.org/ai-effect-entry-level-jobs | 2026-02-17 | snippet |
| S5 | Final Round AI, "Software Engineering Job Market 2026", https://www.finalroundai.com/blog/software-engineering-job-market-2026 | 2026-05-20 | snippet (vendor; internally inconsistent) |
| S6 | Rockstar Developer University, "Entry-Level Software Engineer Job Market Statistics 2026", https://rockstardeveloperuniversity.com/entry-level-software-engineer-job-market-statistics/ | 2026-04-13 | snippet (secondhand NACE, NY Fed, Handshake) |
| S7 | Stack Overflow Blog, "AI vs Gen Z", https://stackoverflow.blog/2025/12/26/ai-vs-gen-z/ | 2025-12-26 | snippet |
| S8 | FrontierWisdom, "The Real AI Impact on Software Engineer Jobs in 2026", https://frontierwisdom.com/ai-impact-on-software-engineer-jobs-2026/ | 2026-04-16 | snippet (opinion) |
| S9 | CNN Business, "The demise of software engineering jobs has been greatly exaggerated", https://www.cnn.com/2026/04/08/tech/ai-software-developer-jobs | 2026-04-08 | snippet |
| S10 | SoftwareSeni, "What the Data Actually Shows About AI and Junior Developer Employment Decline", https://www.softwareseni.com/what-the-data-actually-shows-about-ai-and-junior-developer-employment-decline/ | 2026-03-13 | snippet (secondhand) |
| S11 | Boundev, "Software Engineer Job Market 2026", https://www.boundev.ai/blog/software-engineering-job-market-2026 | 2026 (date approximate) | snippet (vendor) |
| S12 | bestjobsearchapps.com, "Best Jobs for Computer Science Students in 2026", https://bestjobsearchapps.com/articles/en/best-jobs-for-computer-science-students-in-2026-top-careers-salaries-entry-paths | 2026 | snippet (aggregator, low quality) |
| S13 | Articuler, "Software Engineer Salary 2026", https://www.articuler.ai/resources/learn/software-engineer-salary/ | 2026-06-03 | snippet |
| S14 | Rockstar Developer University, "Software Developer Salary Statistics 2026", https://rockstardeveloperuniversity.com/software-developer-salary-statistics/ | 2026 | snippet (secondary) |
| S15 | Hakia, "Software Engineer Career Guide", https://hakia.com/careers/software-engineer-salary-guide/ | 2026 | snippet |
| S16 | Core MBA, "Software engineer salary 2026", https://www.core-mba.pro/tool-hub/software-engineer-salary | 2026-05-29 | snippet |
| S17 | whatisthesalary.com, "Software Engineer Salary by State 2026", https://whatisthesalary.com/it-salaries/software-engineer-salary-by-state/ | 2026-05-31 | snippet |
| S18 | whatisthesalary.com, "Software Engineer Salary US", https://whatisthesalary.com/it-salaries/software-engineer-salary-united-states/ | 2026-05-05 | snippet |
| S19 | Veriipro, "Software Engineer Salary in 2026", https://veriipro.com/blog/blog-software-engineer-salary/ | 2026 | snippet |
| S20 | IBTimes UK, "Big Tech to Offshore More Jobs to India in 2026", https://www.ibtimes.co.uk/big-tech-offshore-more-jobs-india-2026-us-layoffs-push-workers-brink-1771284 | 2026-01-16 | snippet |
| S21 | Husys, "Hire Developers in India", https://husys.com/blogs/hire-developers-in-india-instead-h1b/ | 2026-06-04 | snippet (vendor) |
| S22 | Duke CS, PhD financial support, https://cs.duke.edu/graduate/phd/financial | undated | snippet |
| S23 | Stanford CS, PhD funding, https://www.cs.stanford.edu/phd-program-overview/funding | undated | snippet |
| S24 | ProFellow, "Fully Funded PhD Programs in Computer Science", https://www.profellow.com/fellowships/fully-funded-phd-programs-in-computer-science/ | 2024-04-17 | snippet |
| S25 | Google PhD Fellowship program, https://research.google/programs-and-events/phd-fellowship/ | 2026 | snippet |
| S26 | University of Glasgow, Computing Science PhD projects, https://www.gla.ac.uk/schools/computing/postgraduateresearch/prospectivestudents/phd-projects/ | 2026 | snippet |
| S27 | Medium, "Considering OMSCS?", https://abhijith0505.medium.com/considering-omscs-267093f667f5 | 2025-03-15 | snippet |
| S28 | Hakia, "Georgia Tech OMSCS Review", https://hakia.com/news/georgia-tech-omscs-review/ | 2026-03-27 | snippet |
| S29 | The Wandering Engineer, OMSCS review, https://thewanderingengineer.medium.com/georgia-tech-omscs-program-a-comprehensive-review-a588b570f4e4 | 2026-04-20 | snippet |
| S30 | Leland, "Georgia Tech OMSCS", https://www.joinleland.com/library/a/georgia-tech-omscs | 2025-11-06 | snippet |
| S31 | Pace University, "Is a Master's in Computer Science Right for You?", https://www.pace.edu/news/should-you-get-masters-computer-science | 2026-04-06 | snippet |
| S32 | Research.com, "Is a Computer Science Master's Degree Worth It?", https://research.com/advice/is-a-computer-science-masters-degree-worth-it-roi-salary-career-impact | 2026 | snippet |
| S33 | The Quantum Insider, "TQI's Expert Predictions on Quantum Technology in 2026", https://thequantuminsider.com/2025/12/30/tqis-expert-predictions-on-quantum-technology-in-2026/ | 2026-01-12 | snippet |
| S34 | arXiv 2604.00560, "Quantum-Safe Code Auditing", https://arxiv.org/pdf/2604.00560 | 2026 | snippet |
| S35 | IEEE Computer Society, "AI and Post Quantum Cryptography Migration", https://www.computer.org/publications/tech-news/trends/ai-quantum-cryptography | 2026 | snippet |
| S36 | arXiv excerpts (2026): 2508.11126v2, 2606.24937, 2603.22114, 2610.19298, 2608.29841, 2602.15241 (https://arxiv.org/html/2508.11126v2 and sibling pages) | 2025 to 2026 | snippet (2026-11-23 search) |
| S37 | BLS OOH, Software Developers, QA Analysts, and Testers, https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm | May 2025 data | fetch 2026-11-23 |
| S38 | BLS OOH, Information Security Analysts, https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm | May 2025 data | fetch 2026-11-23 |
| S39 | BLS OOH, Computer and Information Research Scientists, https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm | May 2025 data | fetch 2026-11-23 |
| S40 | BLS OOH, Data Scientists, https://www.bls.gov/ooh/math/data-scientists.htm | May 2025 data | fetch 2026-11-23 |
| S41 | BLS OOH, Computer and Information Technology Occupations (group page), https://www.bls.gov/ooh/computer-and-information-technology/ | May 2025 data | fetch 2026-11-23 |
| S42 | Georgia Tech Bursar, Fall 2026 OMSCS tuition, https://bursar.gatech.edu/student/tuition/fa26/fa26_omscs.pdf | Fall 2026 | fetch 2026-11-23 |
| S43 | SignalFire, State of Talent Report 2026, https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026 | 2026-06-22 | fetch 2026-11-23 |
| S44 | SignalFire, State of Tech Talent Report 2025 (mirror), https://gwern.net/doc/www/www.signalfire.com/31ce33604fa889b41a44ce0f3cb666fae70221e5.html | 2025 | fetch 2026-11-23 |
| S45 | Indeed Hiring Lab, "The labor market is tilting toward seniority", https://hiringlab.indeed.com/?p=20778 | 2026-07-23 | fetch 2026-11-23 |
| S46 | CIO.com, "IT hiring sees a boost as software development jobs slowly bounce back", https://www.cio.com/article/4195780/it-hiring-sees-a-boost-as-software-development-jobs-slowly-bounce-back.html | 2026-07-13 | fetch 2026-11-23 |
| S47 | Stanford Digital Economy Lab, "Canaries in the Coal Mine?", https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/ | revised 2026-08-12 | fetch 2026-11-23 |
| S48 | Stanford Digital Economy Lab, August 2026 update, https://digitaleconomy.stanford.edu/news/canariesaug26/ | 2026-08-12 | fetch 2026-11-23 |
| S49 | Stanford Digital Economy Lab, "Canaries, interest rates, and timing", https://digitaleconomy.stanford.edu/news/canaries-interest-rates-and-timinga-more-on-recent-drivers-of-employment-changes-for-young-workers | 2026-02-09 | fetch 2026-11-23 |
| S50 | NY Fed, Labor Market for Recent College Graduates, https://www.newyorkfed.org/research/college-labor-market | 2026:Q3 | fetch 2026-11-23 (by-major table did not render) |
| S51 | CRA Taulbee Survey 2025, Salaries, https://datavisualization.cra.org/TaulbeeReports/2025/salaries.html | 2025 | fetch 2026-11-23 |
| S52 | CRA Taulbee Survey 2025, Graduate Support, https://datavisualization.cra.org/TaulbeeReports/2025/graduate_support.html | 2025 | fetch 2026-11-23 |
| S53 | CRA Taulbee Survey 2025, Doctoral, https://datavisualization.cra.org/TaulbeeReports/2025/doctoral.html | 2025 | fetch 2026-11-23 |
| S54 | CRA Taulbee Survey 2025, What's new, https://datavisualization.cra.org/TaulbeeReports/2025/new.html | 2025 | fetch 2026-11-23 (no hiring figures on page) |
| S55 | NSF NCSES, Survey of Earned Doctorates, table 8-5, https://ncses.nsf.gov/pubs/nsf25349/assets/data-tables/tables/nsf25349-tab008-005.pdf | 2024 graduates | fetch 2026-11-23 |
| S56 | HeroHunt, "What OpenAI and Anthropic pay engineers 2026", https://www.herohunt.ai/blog/what-openai-and-anthropic-pay-engineers-2026/ | 2026-08-11 | fetch 2026-11-23 (cites Levels.fyi, h1bdata.info) |
| S57 | Levels.fyi, OpenAI Research Scientist, https://www.levels.fyi/companies/openai/salaries/software-engineer/title/research-scientist | updated 2026-08-01 | fetch 2026-11-23 |
| S58 | Levels.fyi, Anthropic Research Scientist, https://www.levels.fyi/companies/anthropic/salaries/software-engineer/title/research-scientist | updated 2026-11-23 | fetch 2026-11-23 |
| S59 | PayScale, Quantitative Developer salary, https://www.payscale.com/research/US/Job=Quantitative_Developer/Salary | updated 2026-04-08 | fetch 2026-11-23 |
| S60 | Levels.fyi, Technical Product Manager salaries, https://www.levels.fyi/Salaries/Product-Manager/Technical/ | updated 2026-11-20 | fetch 2026-11-23 |
| S61 | Yale OISS, "Presidential Proclamation Extends H-1B $100,000 Fee Policy; Fee Remains Blocked by Court Order", https://oiss.yale.edu/news/presidential-proclamation-extends-h-1b-100000-fee-policy-fee-remains-blocked-by-court-order | 2026-09 | fetch 2026-11-23 |
| S62 | Fragomen, "President Trump Extends $100,000 H-1B Fee but Policy Currently Vacated by Court Order", https://www.fragomen.com/insights/united-states-president-trump-extends-dollar100000-h-1b-fee-but-policy-currently-vacated-by-court-order.html | 2026-09 | fetch 2026-11-23 |
| S63 | ClearanceJobs, "New report reveals security clearance compensation climbs to record high", https://news.clearancejobs.com/2026/03/31/new-report-reveals-security-clearance-compensation-climbs-to-record-high-amid-federal-workforce-uncertainty/ | 2026-03-31 | fetch 2026-11-23 |
| S64 | CRA Computing Community Consortium, "Beyond Code: Engineering Trustworthy Software Systems with AI at Scale", https://cra.org/ccc/wp-content/uploads/sites/2/2026/08/Beyond-Code-Engineering-Trustworthy-Software-Systems-with-AI-at-Scale.pdf | 2026-08 | fetch 2026-11-23 |
| S65 | Rest of World, "How H-1B visa changes are fueling tech hiring in India", https://restofworld.org/2026/h1b-visa-impact-india-tech-hiring-faamng/ | 2026-02-09 | fetch 2026-11-23 |
| S66 | IBTimes India, Blind survey on India hiring, https://www.ibtimes.co.in/big-tech-companies-offshore-more-jobs-india-2026-amid-us-mass-layoffs-896008 | 2026-01-14 | fetch 2026-11-23 |
| S67 | DCSA Consolidated Adjudication Services FAQs, https://www.dcsa.mil/mc/pv/dcsa_cas/FAQs | undated | fetch 2026-11-23 (no general citizenship rule stated) |
| S68 | 32 CFR 117.10 (NISPOM), Cornell LII, https://www.law.cornell.edu/cfr/text/32/117.10 | current | fetch 2026-11-23 |
| S69 | ClearanceJobs, "Can you ask about citizenship for national security positions", https://news.clearancejobs.com/2025/07/31/can-you-ask-about-citizenship-for-national-security-positions/ | 2025-07-31 | fetch 2026-11-23 |
| S70 | ISC2, 2025 Cybersecurity Workforce Study, https://www.isc2.org/Insights/2025/12/2025-ISC2-Cybersecurity-Workforce-Study | 2025-12 | fetch 2026-11-23 (n=16,029; fieldwork Jul to Aug 2025) |
| S71 | Anthropic Economic Index, January 2026 report, https://www.anthropic.com/research/anthropic-economic-index-january-2026-report | 2026-01 | fetch 2026-11-23 (page was 101,298 characters; last 1,298 not read) |
| S72 | Indeed Hiring Lab, January 2026 labor market update, https://hiringlab.indeed.com/?p=20272 | 2026-01-22 | fetch 2026-11-23 |
| S73 | Robert Half, "2026 Technology Job Market: In-Demand Roles and Hiring Trends", https://www.roberthalf.com/us/en/insights/landing-job/the-state-of-us-tech-hiring | 2026-06-09 | fetch 2026-11-23 |
| S74 | TechRepublic, "India GCCs Lead AI and Cloud Hiring as IT Services Trail", https://www.techrepublic.com/article/news-gcc-ai-cloud-hiring-apac-india/ | 2026-06-09 | fetch 2026-11-23 (hiring figures from TeamLease Digital via Economic Times) |
| S75 | Swarajya, "AI, data skills now drive two in three new GCC jobs in India", https://swarajyamag.com/amp/story/economy%2Fai-data-skills-now-drive-two-in-three-new-gcc-jobs-in-india-as-hiring-rises-11-per-cent | 2026-07-02 | fetch 2026-11-23 (source of figures not named) |
| S76 | Microsoft Research, "Working with AI: Measuring the Occupational Implications of Generative AI", https://arxiv.org/html/2507.07935v6 | 2025 (v6) | fetch 2026-11-23 (first 100,000 of 156,943 characters read) |
| S77 | Staffing Industry Analysts on Ceipal's 2026 In-Demand Jobs Report, https://www.staffingindustry.com/news/global-daily-news/project-managers-emerge-as-most-in-demand-tech-role | 2026-02-09 | fetch 2026-11-23 |
| S78 | Staffing Industry Analysts, republishing Bloomberg, "AI talent war has quant firms racing to recruit top talent", https://www.staffingindustry.com/news/global-daily-news/ai-talent-war-has-quant-firms-racing-to-recruit-top-talent | 2026-10-27 | fetch 2026-11-23 |
| S79 | Selby Jennings, "Where firms will compete hardest for quant talent in 2026", https://www.selbyjennings.com/en-ca/industry-insights/hiring-advice/where-firms-will-compete-hardest-for-quant-talent-in-2026 | 2026-01 | fetch 2026-11-23 (recruiter marketing content) |
