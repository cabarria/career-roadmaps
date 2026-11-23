# Education (Teaching, School Leadership, and Learning Design): Research Notes for the Field Roadmap

**Field:** Education, the US teacher-preparation bachelor's and the careers around it: K-12 teaching, school and district leadership, curriculum, instructional design, higher education, policy, and edtech (US-centered)
**Compiled:** 2026-11-23
**Companion artifact:** `artifacts/education-roadmap.jsx` (corrected on 2026-11-23 to match this file)

## Provenance note

This file was written after the JSX, not before it. The artifact was built earlier in the same working session from a first pass of six searches (undergraduate curricula, EdD versus PhD, BLS teacher pay, BLS pay for coordinators and postsecondary roles, instructional designer pay, and AI in education). The builder instructions require a research file before any code, and that file was skipped. The JSX also carried claims none of those searches supported, and its pay figures were May 2024 data. On 2026-11-23 the research was extended with 6 page fetches (4 BLS Occupational Outlook Handbook pages and 2 BLS OEWS pages; 2 further fetch attempts were refused over URL casing and retried) and 23 searches, and every claim in the artifact was checked against the combined sources. The section "Audit of the JSX" lists each claim that was contradicted, unsupported, or out of date, and what was changed.

Source codes (S1, S2, ...) point to the Sources tables at the end, which give the URL, the date on the source where one is shown, and the date accessed (all 2026-11-23). "Seen as" says whether a page was fetched or only read as a search excerpt. BLS Occupational Outlook Handbook pages S21 to S24 were fetched in full. Everything else was read as search excerpts, so figures from excerpts deserve a second look on the page before they are quoted anywhere important. Sources of low reliability (aggregators, university program marketing, job boards) are marked "low". The roadmap uses them only for descriptive statements or posted pay ranges, and the posted ranges are labeled as such.

## TL;DR

- Teaching is a professional-entry degree: admission to an educator preparation program (a minimum GPA such as 2.75 at Texas State, background checks, logged field hours), a semester of student teaching, and state licensure tests are the gates. All states also offer an alternative route for people who already hold a bachelor's degree, and 18% of public school teachers in 2015-16 had entered that way (S1, S6, S21, S61).
- BLS May 2025 medians for K-12 teachers run from $62,680 (kindergarten) to $72,040 (high school), with the top 10% earning roughly $102,000 to $108,000. Employment is projected flat (0%) for 2025-35, with about 200,000 openings a year across elementary, middle, and high school, almost all from turnover (S21 to S23).
- Shortages are uneven. For 2024-25, 45 states reported special education shortage areas, 41 science, 40 math, and 31 bilingual instruction. LPI found the deepest shortage positions in special education, elementary education, language arts, and career and technical education, so the first JSX claim that elementary education is oversupplied was wrong (S52, S53).
- The master's pay premium is modest and varies widely. NCTQ's 2025 sample of 135 premium-paying districts averaged $3,581 for a novice teacher and $9,315 at 25 years, 15 states mandate a premium, and NCTQ summarizes research finding no average effectiveness gain. Since July 1, 2026, Grad PLUS is gone and federal loans for most master's and doctoral programs, including the EdD, are capped at $20,500 a year and $100,000 total (S35, S37).
- Leadership and coordination pay more than the classroom: principals $105,870, instructional coordinators $77,440, postsecondary education administrators $104,590 (BLS, May 2025). Superintendents had a median of $158,721 in AASA's 2024-25 study (S24, S25, S27, S66).
- The doctorate forks. EdD students are mostly working professionals and full funding is rare; full-time PhD programs may fund tuition and a stipend. The median US education doctorate recipient finished about 16 years after the bachelor's in 2024 (S63, S64).
- Federal education research funding was disrupted in 2025: IES staff fell by roughly 90%, no new IES grant competitions launched in fiscal 2026, and $224 million of fiscal 2025 funds was released only in May 2026 (S62).
- Student teaching is a full-time semester of 10 to 15 or more weeks depending on the state, traditionally unpaid; at least nine states had paid programs by December 2025 (S44 to S48).
- About half of the states that mandated edTPA in 2019 no longer do, and edTPA is being redesigned as edTPA Essentials from August 2026 (S49 to S51).
- AI: 60% of public school teachers used AI in 2024-25, 32% weekly, and weekly users reported saving 5.9 hours a week. Only 19% said their school had an AI policy and 68% reported no training (S60).
- Non-classroom pay is mixed. Posted education policy ranges run from $50,000 (analyst) to $105,000 (manager). Posted edtech learning-design ranges run from $53,000 to $145,000. Instructional design postings run from about $54,000 (entry) to $122,000 (senior) (S17, S18, S69, S70).

## Key Findings

- **Pay and outlook (BLS, wages May 2025, projections 2025-35).** These replace the May 2024 figures in the first JSX.

| Occupation | Median | Bottom 10% under | Top 10% over | Growth | Jobs, 2025 | Openings per year | Source |
|---|---|---|---|---|---|---|---|
| Elementary school teachers, except special ed | $63,970 | $47,960 | $104,340 | 0% | 1,419,300 | 99,400 (kindergarten and elementary combined) | S21 |
| Kindergarten teachers, except special ed | $62,680 | $46,990 | $101,830 | 0% | 111,200 | included above | S21 |
| Middle school teachers | $64,370 | $48,080 | $102,540 | 0% | 630,100 | 38,800 | S22 |
| High school teachers | $72,040 | $48,780 | $107,600 | 0% | 1,087,500 | 63,500 | S23 |
| Special education teachers | $67,170 | not read | not read | 0% | 584,100 | not read | S26 |
| Instructional coordinators | $77,440 | $47,980 | $121,670 | 2% | 248,700 | 23,100 | S24 |
| Elementary, middle, and high school principals | $105,870 | not read | not read | 0% | 343,800 | 20,600 | S25 |
| Postsecondary education administrators | $104,590 | $64,560 | $215,620 | 2% | 231,800 | not read | S27, S28 |
| Postsecondary teachers (all fields) | $85,330 | not read | not read | 7% | 1,378,200 | not read | S29 |
| School and career counselors and advisors | $64,330 | not read | not read | not read | not read | not read | S21 (similar-occupations table) |
| Training and development specialists | $69,280 | not read | not read | not read | not read | not read | S24 (similar-occupations table) |
| Training and development managers | $133,000 | not read | not read | not read | not read | not read | S24 (similar-occupations table) |
| Teacher assistants | $36,780 | not read | not read | not read | not read | not read | S21 (similar-occupations table) |
| Psychologists (all types) | $99,110 | not read | not read | 6% | 209,400 | not read | S30 |

- **Two occupations only have older primary data.** The BLS OEWS profile for postsecondary education teachers that I could fetch is May 2023 data (modified April 3, 2024): median $73,240, mean $80,750, bottom 10% under $39,670, top 10% over $130,000, 60,860 jobs (S31). The OEWS profile for school psychologists that I could fetch is also May 2023: median $84,940, mean $91,990, bottom 10% under $59,250, top 10% over $131,470, 62,790 jobs (S32). Two aggregator pages that republish OEWS report a May 2025 school psychologist median of $95,990 (bottom 10% $63,070, top 10% $142,330, 63,940 jobs), but I did not verify that at bls.gov (S33, S34, both low).
- **The BLS pages changed between data years.** First-pass excerpts (May 2024) gave elementary teachers $62,340 (bottom 10% under $46,440, top 10% over $102,010), kindergarten $61,430, middle school $62,970, high school $64,580, instructional coordinators $74,720, principals $104,070, postsecondary teachers $83,980, postsecondary administrators $103,960, special education $64,270, and teacher assistants $35,240, with employment projected to fall 1% to 2% for 2024-34 in most K-12 categories. The 2025 pages show a flat 0% outlook, and high school teachers moved from $64,580 to $72,040, a bigger jump than the other teacher categories. The pages read do not explain the shifts, and these are survey estimates, not same-worker raises. A BLS release table excerpt also listed figures such as $72,650 for elementary teachers without showing which statistic the column held, so the OOH medians are used instead.
- **What BLS says about entering teaching.** Public school teachers need at least a bachelor's degree and a state license. Licensure generally involves a minimum GPA, completed student teaching, a background check, and passing a general teaching test plus a subject test. All states offer an alternative route for people who hold a bachelor's degree but lack education coursework, and some of those programs let candidates begin teaching under supervision. Some states require a master's after certification and hiring. Most states have tenure laws (S21 to S23).
- **Master's premium (NCTQ, 2025).** In the 135 sampled districts that pay master's premiums, the average 2025 premium was $3,581 for a novice teacher and $9,315 for a teacher with 25 years of experience. Fifteen states mandate premiums. Albuquerque paid a new teacher with a master's $547 more than a colleague with a bachelor's. NCTQ describes districts where bachelor's-lane teachers are capped at step 7. NCTQ also summarizes research as finding that teachers with master's degrees are no more effective on average and that earning a master's does not improve a practicing teacher's effectiveness (S35).
- **Earlier master's premium data.** NEA's 2020-21 data put the average beginning salary for a teacher with a master's at $45,391, which was $3,621 (8.7%) above the bachelor's starting salary. The top of the scale averaged $76,540 and typically required a PhD or 15 to 30 graduate credits beyond a master's plus 25 to 30 years of experience (S36).
- **Federal loans after July 1, 2026.** Grad PLUS ended for new borrowers. Most master's degrees and research doctorates (ETS names the PhD and the EdD) fall in the general graduate bucket: $20,500 a year and $100,000 total. Professional programs get $50,000 a year and $200,000. A $257,500 lifetime cap applies to all borrowers except Parent PLUS. Students who borrowed before July 1, 2026 and stay in the same program can keep the old rules for up to three more years. A federal court preliminarily stayed part of the Education Department's professional-degree definition on June 24, 2026 (S37, S38, S39).
- **Forgiveness and grants.** Teacher Loan Forgiveness cancels up to $17,500 for highly qualified special education teachers and secondary math or science teachers, and up to $5,000 for other teachers, after five complete and consecutive years at a qualifying low-income school. PSLF forgives the Direct Loan balance after 120 qualifying payments, and final revised PSLF rules took effect July 1, 2026. TEACH Grants give up to $4,000 a year in return for four years teaching a high-need field at a low-income school (S40, S41, S42). Texas's 2025-26 federally approved critical shortage areas for TEACH Grants and PSLF were bilingual and ESL, secondary career and technical education, computer science, and special education (S43).
- **Shortages (LPI, 2024-25 federal data).** States most often reported special education (45 states), science (41), and math (40), and 31 reported bilingual or multilingual instruction. The deepest shortage positions, measured by vacancies, temporary certifications, and out-of-field assignments, were in special education, elementary education, language arts, and career and technical education (S52, S53). Colorado's 2026-27 shortage list includes elementary education, social studies, mathematics, science, and special education (S54).
- **Alternative routes.** NCES found that about 18% of public school teachers in 2015-16 (about 676,000 of 3.8 million) had entered through an alternative route. Traditionally prepared teachers were more likely to have substituted before their first year (15%) than alternative-route teachers (13%). These data are old (S61).
- **Student teaching.** Required length depends on the state: at least 10 weeks in Connecticut, 12 in Pennsylvania and Minnesota, and 15 in Maine. It has traditionally been unpaid and full-time. At least nine states had active statewide paid student teaching programs by December 2025, Illinois barred programs from requiring it to be unpaid in 2025, and stipends include $9,600 in Michigan, $6,000 in Utah, and $5,000 in Kentucky. A Connecticut survey found unpaid student teaching was an extreme or considerable financial stress for 88% of aspiring educators (S44 to S48).
- **edTPA.** By 2019, 19 states required a standardized performance assessment, most often edTPA. About half of those states no longer do (one Rutgers post says ten, another says at least 11), including Georgia (2020), New York (by 2022), New Jersey, and Illinois (suspended through August 2025); Tennessee phases it out on July 1, 2026. The edTPA is being redesigned as edTPA Essentials from August 2026, with the last current-format submissions in December 2027 (S49 to S51).
- **Science of reading.** As of August 2026, 43 states and DC had passed laws or implemented policies on evidence-based reading instruction since 2013. As of 2025, 43 states required teacher preparation programs to address it for at least some candidates, and in 2024, 31 states required elementary teachers to pass a credential exam measuring it. NCTQ found about 1 in 5 programs still use outdated practices. A federal science of reading bill passed the House on September 17, 2026. Education Week's math tracker counts 23 states with math laws or policies since 2022. Experts say it is unclear whether the reading laws will raise achievement (S55 to S59).
- **AI and teachers (Gallup and Walton Family Foundation, April 2025 survey of 2,232 public school teachers).** 60% used AI tools in the 2024-25 school year; 32% used them weekly, 28% less often, and 40% not at all. Weekly users estimated saving 5.9 hours a week (about six weeks a year) and monthly users 2.9 hours. The most common monthly uses were preparing to teach (37%), making worksheets (33%), modifying materials (28%), administrative work (28%), and making assessments (25%). Only 19% said their school had an AI policy, and 68% reported no training on AI in 2024-25 (S60).
- **AI and research.** A 2025 Frontiers in Education study says research on how teachers actually experience and shape AI integration is limited (S16). A separate 2025 study found less than half of surveyed teachers used AI daily and that students' use exceeded teachers' use (S15). Many schools first banned AI, bans are often unenforceable, and designing assessments that a chatbot cannot complete is a stated challenge (S14).
- **Federal research funding (IES).** In February 2025 the Education Department canceled IES contracts: it counted 89 contracts and about $881 million, while AERA and COPAFS counted about 170. AERA reports IES staff were cut by roughly 90% and NCES from 105 to 3. Review panels for the National Center for Education Research and the National Center for Special Education Research were suspended. By August 2026 IES had launched no new grant competitions in fiscal 2026, $224 million of fiscal 2025 funds withheld for over a year was released in May 2026, and Education Week said funding may be coming back online but details were unclear. AERA moved for summary judgment in its lawsuit on March 27, 2026 (S62).
- **Doctorates.** Drexel's full-time PhD covers tuition and pays a stipend and health insurance in exchange for a 20-hour-a-week fellowship, and it admits 6 to 8 students a year. Its EdD is part-time and online or hybrid. Inside Higher Ed says PhD programs tend to fund students while it is rare to find an EdD program with full funding, and that EdD cohorts are often working administrators. Rutgers says tuition support for its EdD usually comes from employers. JHU puts EdD completion at 3 to 4 years and PhD completion at 4 to 6 years. The University of Delaware compares a PhD dissertation of generalizable significance with an EdD leadership portfolio addressing a problem of local practical importance (S9, S63).
- **Time to doctorate (NSF Survey of Earned Doctorates).** For 2024 education research doctorate recipients, the median time since the bachelor's degree was 16.0 years for all education fields, 18.0 for education leadership and administration, 15.2 for education research, and 15.1 for teacher education. About 96% held a master's. In the 2022 data, median age at doctorate was 39.0 for all education fields and 40.7 for leadership and administration, against 37.9 for education research. The tables are for research doctorates, and I did not verify how EdDs are classified (S64).
- **Academic labor market.** In fall 2023, 31.8% of US faculty held full-time tenured or tenure-track appointments, against 53.1% in 1987, and 68.2% were part-time or full-time contingent (AAUP, all fields, not education specifically). BLS projects postsecondary teaching employment to grow 7% for 2025-35 (S29, S65).
- **Superintendents (AASA).** The 2024-25 study (2,077 respondents) reported a median salary of $158,721 and a mean of $169,343. It reported pay trailing inflation-adjusted 2013 pay by about $7,000 at the median. The nation's 500 largest districts had 23% superintendent turnover in 2024-25 (ILO Group). The 2025-26 study reported an average current tenure of 5.4 years (S66).
- **Teacher well-being (RAND, State of the American Teacher).** In 2026, 55% of K-12 public school teachers reported frequent job-related stress (62% in 2025) against 34% of similar working adults; 18% said they were likely to leave their job by the end of 2025-26 (23% in 2022-23); only 23% planned to remain in teaching as long as able. Student behavior was the most commonly named source of stress, ahead of low pay. K-12 Dive notes growing teacher layoffs in 2026 in districts with budget and enrollment pressure (S67).
- **Learning outcomes (Education Scorecard, May 2026).** 23% of students were chronically absent in 2024-25 against a pre-pandemic 15%. Reading declines from 2017 to 2019 were as large as during the pandemic, and from 2015 to 2025 83% of districts lost ground in reading. Math recovered after 2022 and reading showed early recovery from 2024 to 2025. Recovery is U-shaped, with middle-income districts improving least, and federal relief dollars boosted gains in the highest-poverty districts (S68).
- **Policy postings.** Analyst-level postings were $50,000 to $65,000 (Bipartisan Policy Center), $65,000 to $70,000 (Education Commission of the States), $65,000 to $75,000 (SHEEO), $70,000 to $90,000 (National Governors Association, 1 to 3 years of experience), and $79,673 to $89,764 (MassBudget). Senior or manager postings were $85,000 to $100,000 (Third Way), $80,000 to $95,000 (SHEEO senior analyst), and $85,000 to $105,000 (Education Reform Now, 5 to 7 years of experience, postgraduate degree preferred but not required) (S69, all low).
- **Edtech postings.** Learning Experience Designer I at HMH $53,000 to $58,000; Learning Designer at Cengage $60,000 to $75,000; Learning Experience Designer, Core at Newsela $60,000 to $70,000 (5 or more years of secondary ELA curriculum experience); Instructional Designer, Science at Kiddom $75,000 to $85,000 plus equity; Senior Curriculum Designer at NoRedInk $90,000 to $115,000; Learning Experience Designer at Pathstream $100,000 to $145,000; Principal Learning Designer at Edmentum $120,000 to $130,000 (7 or more years); Product Designer at Discovery Education $111,842 to $117,300 (S70, all low).
- **Instructional design pay.** Research.com gives a typical range of $72,000 to $121,000, with most designers at $78,000 to $90,000 and entry roles at $54,000 to $65,000. PayScale's average is $72,653 and ReadySetHire's is $77,140. Corporate postings: Exelon senior instructional designer $88,800 to $122,100 plus a 15% bonus; Central Arizona Project $90,292 to $108,388; National Debt Relief Instructional Designer I $68,500 to $83,000; nCino $58,700 to $93,900 (S17 to S20, all low).

## Undergraduate

### Curriculum

- **Pedagogical core.** Common education courses include educational psychology and human development, philosophy of education, child development from infancy to adolescence, and a multicultural or race and ethnicity course (NYU and Michigan require a version) (S2, S3). Troy lists lesson development and planning, classroom management, educator dispositions, curriculum implementation, theories of learning, instruction, and motivation, and educational technology (S5). UT Dallas lists curriculum and instruction, educational technology, and classroom management, and requires a certification focus before the junior year (S7).
- **Content and certification areas.** Texas State offers certification tracks including early childhood through grade 6 core subjects, grades 4 to 8 core subjects, mathematics, and ELA and reading with social studies. It offers secondary certification with a double major in another subject (S1). Penn State offers elementary and early childhood, middle level, and secondary majors in math, English, science, and social studies, and prepares all candidates to work with emergent bilingual students and students with special needs (S4). BLS says many states require middle and high school teachers to have majored in a content area, and some require elementary teachers to do so (S21 to S23).
- **Admission and time.** Texas State requires application and acceptance to its Office of Educator Preparation, an overall GPA of at least 2.75, and grades of C or better in the major, teaching field, and certification courses. Texas requires multiple background checks, and a criminal history may make a candidate ineligible for a certificate. Texas State's catalog says the four-year course sequence will most likely require summer sessions and that plans of 122 or more hours may be considered five-year programs (S1). WTAMU requires a documented minimum of 50 field-experience hours, a passing TExES pedagogy exam, and a passing TExES content exam (S6).

### In the classroom

- **Field placements.** Penn State pairs coursework with concurrent field experiences in classrooms (S4). St. Olaf moves students from observer to teacher's assistant to tutor before student teaching (S2).
- **Student teaching.** See Key Findings for state minimum lengths, pay, and stipends (S44 to S48). BLS says programs typically include student teaching with a mentor teacher (S21 to S23).
- **Performance assessment.** See Key Findings for edTPA status (S49 to S51).
- **Lesson planning.** BLS lists creating lesson plans first among teacher duties (S21 to S23).

### Tools and extracurriculars

- BLS says teachers must be comfortable using and learning new technology, may maintain websites for parent communication, and may use text-messaging applications and discussion boards (S21 to S23).
- BLS says teachers who coach or advise clubs usually do so before or after school (S22, S23). Teacher assistants (median $36,780, some college, no degree) and substitute teaching are common ways into schools (S21, S61).

### Not found

- Which education courses are hardest. The first JSX claimed there are no weeder courses without a source, so that claim was removed.
- Any source for named learning theorists in the first course, for learning management system market share, or for named student organizations. Those claims were removed or replaced.

## Master's

- **Program types.** TCU lists M.Ed. specializations in Curriculum Studies, Language and Literacy, and Science Education as 30-credit programs, with full-time or part-time options and evening classes in its science education version, plus an accelerated option that combines a bachelor's and an M.Ed. in five years (S8). A guide from Teachers of Tomorrow says master's programs often include a research project or thesis and an internship, and lead to roles such as curriculum specialist, administrator, instructional designer, or researcher (S3, low). Penn State lists M.Ed. degrees in educational leadership and counselor education and an M.A. in educational theory and policy (S4).
- **What BLS requires.** Principals typically need a master's in education administration or leadership plus teaching experience, with five or more years of related experience (S25). Instructional coordinators need a master's in education or curriculum and instruction and five or more years of related experience (S24). Postsecondary education administrators typically need a master's (S27). School and career counselors have a master's as typical entry education (S21). Some states require teachers, and special education teachers specifically, to earn a master's after certification and hiring (S21 to S23, S26).
- **Pay premium and research.** See Key Findings (S35, S36).
- **Money.** See Key Findings for loan caps, Teacher Loan Forgiveness, PSLF, and TEACH Grants (S37 to S43). No source documented district tuition-reimbursement programs.
- **Not found.** Share of teachers holding a master's, the share of master's programs that are self-funded, MAT-specific details such as whether student teaching is included, and earnings or placement data for standalone education master's.

## PhD / Research

- **EdD versus PhD.** JHU, Northeastern, and USC describe the EdD as a practice-based professional doctorate for working professionals and the PhD as a research degree aimed at academia (S9 to S11). The PhD came first (Columbia, 1893) and the EdD followed (Harvard, 1921) (S12, low). USC says PhD coursework emphasizes qualitative and quantitative methods and includes oral and written exams, while some EdD programs require a dissertation in practice (S10). A Georgian Court University page says an EdD requires 60 credits beyond the master's and that PhD research skills with large datasets and analysis software transfer to many careers (S12b, low). Walden says many EdD candidates plan to become superintendents, principals, or curriculum designers (S12, low). Arizona Online says EdD classmates are often current administrators and deans (S13, low).
- **Duration and funding.** See Key Findings (S9, S63, S64).
- **Research areas with evidence.** Science of reading and math policy (S55 to S59), learning loss and chronic absenteeism (S68), AI in education (S14 to S16, S60), special education shortages (S52), and the 2025 IES disruption (S62).
- **Not found.** Placement data for education PhDs (tenure-track share), EdD career outcomes, the share of EdDs counted in the Survey of Earned Doctorates, and any source describing learning analytics methods. The first JSX's "Learning Sciences & Analytics" item is a definition that was left in place as descriptive.

## Tools and AI

- **Adoption.** See Key Findings (S60). The survey data are from April 2025, so a newer wave may exist.
- **Integrity and assessment.** Frontiers in Education says many schools first banned AI, bans are often unenforceable, and the trend is toward incorporating it, which requires designing assessments that reward genuine engagement (S14). Students' use exceeds teachers' use (S15).
- **Practitioner view.** Gallup's weekly users reported higher-quality work and larger time savings than monthly users, and schools with an AI policy saw a 26% larger time dividend (2.3 hours versus 1.7 hours a week). These are self-reports (S60).
- **Technology in teaching.** BLS says teachers use computers to present information and must be comfortable with new technology. O*NET lists screen reader and screen magnification software among tools for elementary special education teachers (S26b). Newsela's posting prefers Universal Design for Learning knowledge (S70).
- **Instructional design tools.** Postings name Articulate 360, Rise 360, Storyline, Captivate, Camtasia, Adobe Creative Cloud, Elucidat, Canva, Descript, and Wistia, and the ADDIE and SAM frameworks. One posting asks for AI tools to improve instructional design processes (S18).

## Career Paths

### 1. K-12 classroom teacher

- **Titles:** Teacher; lead or mentor teacher (BLS names mentor and lead teacher as advancement); department chair and instructional coach (descriptive, not individually sourced).
- **Reality:** A bachelor's plus state licensure is the entry route, and all states offer alternative routes. Shortage fields are special education, science, math, and bilingual instruction. Employment is flat with about 200,000 openings a year across elementary, middle, and high school, mostly from turnover. Most states have tenure laws. RAND's 2026 survey found 55% of teachers reported frequent job-related stress and 18% were likely to leave their job (S21 to S23, S52, S67).
- **Salary:** Medians of $63,970 (elementary), $64,370 (middle), and $72,040 (high school); bottom 10% under about $48,000; top 10% over about $103,000 to $108,000 (BLS, May 2025).
- **Source:** S21, S22, S23, S52, S67.

### 2. School and district leadership

- **Titles:** Assistant principal; principal; curriculum director; superintendent.
- **Reality:** Principals typically need a master's and five or more years of related experience. There are 343,800 jobs, 0% projected growth, and about 20,600 openings a year, and principals work year-round. Superintendent pay trails inflation-adjusted 2013 pay and the largest districts had 23% turnover in 2024-25 (S25, S66).
- **Salary:** Principals median $105,870 (BLS, May 2025); superintendents median $158,721 and mean $169,343 (AASA, 2024-25).
- **Source:** S25, S66.

### 3. Instructional design and learning and development

- **Titles:** Instructional designer; learning and development specialist; senior instructional designer; learning and development manager.
- **Reality:** A bachelor's is commonly the minimum, a master's helps for higher education and leadership roles, and a portfolio showing analysis, design rationale, and results can make a candidate more competitive than a resume listing tools. Postings often ask for 2 or more years of experience, authoring tools, and ADDIE or SAM. The work involves juggling projects, reviewers, and deadlines (S17, S18).
- **Salary:** About $54,000 to $65,000 entry, $78,000 to $90,000 typical, $89,000 to $122,000 senior (Research.com and 2025 postings). BLS training and development specialists median $69,280 and managers $133,000 (May 2025).
- **Source:** S17, S18, S19, S20, S24.

### 4. Curriculum and instructional coordination

- **Titles:** Curriculum specialist; instructional coordinator; assessment lead; director of curriculum and instruction.
- **Reality:** BLS lists a master's and five or more years of related experience as typical, and licensure may be required in public schools. Duties include developing curricula, training and coaching teachers, and analyzing test data. Projected growth is 2% with about 23,100 openings a year, and BLS says state and local budget constraints may limit demand (S24).
- **Salary:** Median $77,440; bottom 10% under $47,980; top 10% over $121,670; government (excluding state and local education and hospitals) $89,920; local school districts $82,130 (BLS, May 2025).
- **Source:** S24.

### 5. Higher education and academic research

- **Titles:** Doctoral researcher; postdoc; assistant to full professor; dean (descriptive); postsecondary education administrator.
- **Reality:** Only 31.8% of US faculty held full-time tenured or tenure-track jobs in fall 2023 (AAUP, all fields). BLS projects postsecondary teaching to grow 7% for 2025-35. Postsecondary education administrators typically need a master's, with 231,800 jobs and 2% projected growth. No education-specific tenure-track placement data was found (S27, S29, S65).
- **Salary:** Postsecondary education teachers median $73,240 and top 10% over $130,000 (BLS OEWS, May 2023; newer figure not found). Postsecondary education administrators median $104,590 and top 10% over $215,620 (BLS, May 2025).
- **Source:** S27, S28, S29, S31, S65.

### 6. Education policy and nonprofit

- **Titles:** Program associate (descriptive); policy analyst; senior policy advisor; program or state policy manager.
- **Reality:** Postings at think tanks, associations, and advocacy groups ask for 1 to 3 years of K-12 policy experience at analyst level and 5 to 7 years at manager level, and a postgraduate degree is often preferred but not required. Work includes 50-state policy comparisons, briefs, and support for state leaders. BLS has no category for education policy analysts, so pay comes from posted ranges (S69).
- **Salary:** Analyst postings $50,000 to $90,000; senior and manager postings $80,000 to $105,000 (posted ranges, 2025 to 2026).
- **Source:** S69.

### 7. Edtech and learning products

- **Titles:** Learning experience designer; curriculum designer; principal learning designer; product designer.
- **Reality:** Curriculum publishers and learning platforms post designer and curriculum roles that ask for classroom or curriculum experience (Newsela 5 or more years, Edmentum 7 or more years). Several postings include equity (Kiddom, NoRedInk, Newsela), and many roles are remote. Entry and mid-level roles are posted near or below typical teacher pay (S70).
- **Salary:** About $53,000 to $75,000 entry to mid, $75,000 to $115,000 senior curriculum, $120,000 to $130,000 principal, up to $145,000 at one workforce-learning firm (posted ranges, 2026).
- **Source:** S70.

### 8. Specialized and licensed school roles

- **Titles:** Special education teacher; reading specialist (descriptive); school counselor; school psychologist.
- **Reality:** Each role needs its own endorsement or license. Special education is the most consistently reported shortage field (45 states) and states may require a master's in special education after hiring. School and career counselors have a master's as typical entry education. School psychologist pay depends on the data year (see below) (S21, S26, S32, S52).
- **Salary:** Special education teachers median $67,170 and school and career counselors $64,330 (BLS, May 2025). School psychologists median $84,940 (BLS OEWS, May 2023); aggregator pages relaying May 2025 OEWS show about $95,990 (unverified).
- **Source:** S21, S26, S32, S33, S34, S52.

## Uncertainties and Regional Variation

- **US-centered.** Licensure, student teaching length, pay schedules, tenure laws, shortage lists, and edTPA status are set by states or districts. Texas, Pennsylvania, Connecticut, and Minnesota examples here show the range, not a national rule.
- **Data years differ.** Most BLS figures are May 2025. Postsecondary education teacher and school psychologist OEWS pages that I could fetch are May 2023. Policy, edtech, and instructional design pay come from job postings, which show posted ranges and not realized pay.
- **BLS medians versus other measures.** BLS medians are used throughout. NEA and NCTQ salary figures use different samples and years and are not mixed with BLS medians.
- **Survey caveats.** Gallup's AI survey is April 2025 data and a newer wave may exist. RAND's intent-to-leave figures are intentions, not exits. The AAUP faculty figures cover all fields.
- **Posted ranges.** Postings used the pay-transparency ranges employers published, which can be wide and often cover several locations or levels.
- **Master's premium.** NCTQ's sample covers districts that pay premiums and varies widely by district.
- **Survey of Earned Doctorates.** The tables cover research doctorates, and I did not verify how EdDs are classified.
- **Not found.** Weeder courses, share of master's programs that are self-funded, district tuition support, MAT specifics, education PhD placement, EdD outcomes, learning management system market share, and effects of AI on the job market for teachers or instructional designers.

## Audit of the JSX

The first JSX was checked claim by claim. "Action" says what changed in `artifacts/education-roadmap.jsx`. Descriptive items that no source contradicted were left as they were.

| Where | First version said | Evidence | Action |
|---|---|---|---|
| Header tagline | The master's is "mostly a raise" and "the real money" lives outside the classroom | Premium averages are small and vary (S35); higher pay outside the classroom is supported (S24, S25, S27) | Reworded to a pay-schedule decision and "higher pay mostly sits outside the classroom" |
| Careers intro | Highest ceilings in leadership, instructional design, and edtech | Instructional design and edtech ranges are wide; training and development managers $133,000 (S24, S70) | Reworded to leadership, training management, and some edtech roles |
| Undergraduate intro | No weeder course; basic-skills test; "4.5 to 5 years" | No source on weeders; GPA, background checks, and field hours are documented; summer sessions and five-year plans are documented (S1, S6) | Rewritten around documented gates and the summer-or-fifth-year note |
| Educational Psychology | Named theorists (behaviorism, Piaget, Vygotsky) | Not in any source (S2, S3, S5) | Replaced with development from infancy to adolescence and theories of learning, instruction, and motivation |
| Foundations of Education | Sociology and how the system is funded | Only philosophy and history are supported (S2) | Rewritten |
| Classroom Management | "Single skill new teachers most wish they'd learned"; rooms of 25+ | Unsupported; RAND shows student behavior is the top stressor (S67) | Rewritten around the RAND finding |
| Literacy and Science of Reading | "Heavily tested on licensure exams" | 43 states require programs to address it; 31 require an exam (S56) | Replaced with those numbers |
| Content-Area Coursework | Secondary candidates come close to a second major | BLS says many states require a content major; Texas State pairs secondary certification with a second major (S1, S21 to S23) | Rewritten |
| Escalating Field Placements | "Frequently 50+ hours before admitted" | One program documents 50 hours (S6); St. Olaf progression (S2) | Rewritten |
| Student Teaching | 12 to 16 weeks, university supervisor, typically unpaid, "make-or-break" | Minimums range from 10 to 15 weeks by state; stipends and paid programs are spreading (S44 to S48); supervisor and "make-or-break" unsourced | Rewritten |
| Lesson Planning | "Backward design" sequence | Not in any source; BLS lists lesson plans first among duties (S21) | Renamed "Lesson Planning" and rewritten |
| Teaching Portfolio and edTPA | edTPA scored for licensure "in many states" | About half of the 2019 mandate states dropped it; redesign from August 2026 (S49 to S51) | Renamed "Performance Assessments (edTPA and Alternatives)" and rewritten |
| Learning from Mentor Teachers | "Craft in no textbook" and "surviving versus thriving" | Unsourced; BLS describes mentor teachers in student teaching and advancement (S21) | Rewritten |
| Learning Management Systems | Named Canvas, Google Classroom, Schoology | No source on brands or market share; BLS says teachers must be comfortable with technology (S21) | Brand names removed |
| The AI Inflection | Educator use "jumped sharply year-over-year"; districts "shifting from banning to integrating" | The jump came from an aggregator; Gallup gives usage, time, policy, and training numbers (S60) | Replaced with the Gallup figures |
| Data and Assessment Platforms | Using data is "now a routine part of the job" | Only BLS accountability language is supported (S24) | Rewritten |
| Accessibility and Assistive Tech | Text-to-speech, translation, UDL | Screen readers, UDL preferred in a posting, Penn State preparation (S4, S70, O*NET) | Rewritten |
| Get Licensed | Praxis exams | BLS lists the typical requirement set; WTAMU names TExES (S6, S21) | Rewritten |
| Substitute and Paraprofessional Work | "Paid classroom time" | Teacher assistant median $36,780; 15% of traditionally prepared teachers had substituted (S21, S61) | Rewritten with those figures |
| Tutoring, Camps and Coaching | "Reliable fallback income stream" | Unsourced | Removed; BLS coaching note added |
| Know Your Market | Elementary and social studies "oversupplied"; signing bonuses | LPI lists elementary education among the deepest shortage positions; Colorado lists elementary and social studies (S52, S54) | Rewritten with LPI figures |
| Alternative Certification | Named Teach For America, residencies, post-bacc | Not in sources; BLS and NCES support the route and 18% share (S21, S61) | Rewritten |
| Professional Organizations | Named Student NEA and Kappa Delta Pi | Not verified | Rewritten around associations that publish the data used here (NEA, AFT, AASA, AERA) |
| Master's intro | "Five-figure raise over a career"; premium is "automatic"; "large share" earn one "part-time and online"; "most are self-funded" | NCTQ averages $3,581 to $9,315; 15 states mandate premiums; no effectiveness gain (S35); share and funding not found | Rewritten; loan caps added |
| M.Ed. | "The most common education master's" | Unsourced | Sentence removed; TCU detail added |
| Research MA | Many go "straight from BA to PhD" | 96% of 2024 education doctorate recipients held a master's; median 16 years after the bachelor's (S64) | Rewritten (the claim was backwards) |
| Counseling and School Psychology | "Often better-paid" | Counselors $64,330; school psychologist pay by data year (S21, S32, S33) | Rewritten with figures |
| Mostly Self-Funded | Education master's "typically paid out of pocket" | Not directly sourced; loan caps documented (S37) | Rewritten with loan caps |
| Salary-Schedule Bump | "Five-figure raise compounded" | NCTQ averages and range (S35) | Rewritten |
| Loan-Forgiveness Levers | Generic mention | Amounts and rules documented (S40 to S42) | Rewritten with amounts |
| Employer and Shortage-Area Support | Districts subsidize coursework | District support not documented; shortage lists key TEACH Grants and PSLF (S43) | Rewritten |
| "Wait, Usually" | Wait until employed | Premium grows with experience; some states require the degree only after hire (S21, S35) | Renamed "Timing the Degree" and rewritten |
| Action Research / Capstone | Most M.Ed. programs end in an applied project | Only a research project or thesis and TCU's two emphases are documented (S3, S8) | Rewritten |
| The EdD | "Common route to superintendent" | Walden lists superintendent, principal, and curriculum designer as goals (S12) | Rewritten |
| Duration and Format | 3 to 4 and 4 to 6 years | Supported (S9); the SED time-to-degree data are new | SED figures added |
| The Funding Split | EdDs "usually self-funded" | Supported (S63); loan caps are new | Loan caps and Drexel and Inside Higher Ed detail added |
| The Science of Reading (frontier) | "Rewriting curricula and licensure exams across the country" | State counts and NCTQ detail (S55 to S59) | Rewritten with numbers |
| AI and Education Research | "Heavily funded" and "hype" | Not sourced; federal funding disrupted (S62); research gap (S16) | Rewritten |
| Equity, Policy and Outcomes | "Causal research ... econometrics" | Scorecard findings (S68) | Rewritten around the Scorecard |
| Learning Loss and Chronic Absenteeism | Generic description | 23% versus 15%; reading declines predate the pandemic (S68) | Rewritten with figures |
| Special Education and Neurodiversity | "Well-funded" research area | IES review panels for NCSER suspended; 45 states report special education shortages (S52, S62) | Rewritten |
| Quantitative and Qualitative Methods | Named methods | Only the qualitative and quantitative emphasis is sourced (S10) | Rewritten |
| The Research Apprenticeship | "Matters far more than coursework" | Opinion; Northeastern and Drexel describe publishing and assistantships (S11, S63) | Rewritten |
| Advisor and Cohort Fit | PhD "hinges on a single advisor" | Unsourced; EdD cohort detail is supported (S63) | Rewritten |
| Doctoral Training (new item) | none | IES disruption (S62) | Added "Research Funding Turbulence" |
| K-12 Teacher card | May 2024 pay; "hard ceiling near $100K"; "unionized" | May 2025 data; top decile $102,540 to $107,600; BLS says tenure laws, not unions (S21 to S23) | Rewritten; flat outlook and RAND added |
| School and District Leadership card | Principals $104K; superintendents "$150K+"; "EdD" gating | $105,870 (May 2025); AASA median $158,721; BLS lists master's and 5+ years (S25, S66) | Rewritten |
| Instructional Design card | "Most common exit"; "best-paid non-leadership path"; portfolio beats any degree | Unsupported; Research.com says a bachelor's is commonly the minimum and a portfolio can beat a tools list (S17) | Rewritten; salary string re-sourced |
| Curriculum and Coordination card | $75K; "more stable than the principalship" | $77,440 (May 2025); stability claim unsourced (S24) | Rewritten |
| Higher Education card | Education professors "$80K to $90K"; tenure market "tight and shrinking" | OEWS May 2023 median $73,240; tenure data are all-field only; admin $104,590 (S27, S31, S65) | Rewritten |
| Policy and Nonprofit card | "$50K to $100K+"; "foundations and federal agencies pay best" | Posted ranges; the ranking is unsourced (S69) | Rewritten |
| Edtech card | "$70K to $140K+"; "often the highest ceiling"; Product Manager and Teacher-in-Residence chips | Posted ranges $53,000 to $145,000; those two titles were not in any posting (S70) | Rewritten; chips changed |
| Specialized and Licensed Roles card | "Above the generalist scale"; school psychologists "severely short-staffed"; $80K to $85K labeled 2024 | Special education $67,170 is below high school $72,040; counselors near teacher pay; $84,940 is May 2023 (S21, S23, S26, S32) | Rewritten |

Items left as written because no source contradicted them and they are descriptive: the MAT description, the Educational Leadership and Curriculum and Instruction program descriptions (supported by S24, S25), Methods and Curriculum and Instruction, Assessment and Measurement (S24), Teaching Diverse and Multilingual Learners (S2, S4), A Named Endorsement, Reading and Evaluating Research, Coaching and Mentoring, Program and Assessment Design (S24), Learning Sciences and Analytics (a definition), The Integrity Problem (S14, S15), Coursework and Qualifying Exams (S10), and the PhD and dissertation-in-practice descriptions (S10, S63).

## Sources

All pages were accessed on 2026-11-23. "Seen as" is "fetched" for pages read in full and "excerpt" for search excerpts.

### First-pass and academic sources

| Code | Source | URL | Date on source | Seen as | Reliability |
|---|---|---|---|---|---|
| S1 | Texas State catalog, B.S. Education (Middle Level) | https://mycatalog.txstate.edu/undergraduate/education/curriculum-instruction/education-middle-teacher-certification-48-bs/ | not shown | excerpt | high |
| S2 | BestColleges, bachelor's in education courses | https://www.bestcolleges.com/education/bachelors/program-classes/ | 2024-04-16 | excerpt | medium |
| S3 | Teachers of Tomorrow, classes to become a teacher | https://www.teachersoftomorrow.org/blog/insights/classes-to-become-a-teacher/ | 2025-03-09 | excerpt | low |
| S4 | Penn State College of Education, undergraduate teacher education | https://ed.psu.edu/academics/departments/department-curriculum-and-instruction/undergraduate-teacher-education-pk-12 | not shown | excerpt | high |
| S5 | Troy University, Education courses | https://www.troy.edu/academics/catalogs/undergraduate-catalog/course-descriptions/education-courses.html | not shown | excerpt | high |
| S6 | WTAMU, teacher preparation with bachelor's degree | https://www.wtamu.edu/academics/college-education-social-sciences/department-education/how-do-i-become-a-teacher/undergrad-teacher-certification/index.html | not shown | excerpt | high |
| S7 | UT Dallas 2025 catalog, Education (BA) 4-8 | https://catalog.utdallas.edu/2025/undergraduate/programs/is/education-48-core | 2025-04-18 | excerpt | high |
| S8 | TCU, Curriculum and Instruction | https://coe.tcu.edu/academics/graduate-programs/curriculum-instruction.php | 2025-11-11 | excerpt | high |
| S9 | JHU School of Education, EdD versus PhD | https://education.jhu.edu/news/doctoral-dilemma-deciding-between-an-edd-and-a-phd-in-education/ | 2024-12-16 | excerpt | medium |
| S10 | USC Rossier, PhD versus EdD | https://rossier.usc.edu/news-insights/news/phd-vs-edd-education-nine-expert-tips-help-you-choose-infographic | not shown | excerpt | medium |
| S11 | Northeastern, EdD versus PhD | https://graduate.northeastern.edu/knowledge-hub/edd-vs-phd-in-education/ | 2026-04-16 | excerpt | medium |
| S12 | Walden University, EdD or PhD | https://www.waldenu.edu/programs/education/resource/how-to-tell-if-i-want-an-edd-or-a-phd-in-education | "1 month ago" | excerpt | low |
| S12b | Georgian Court University, EdD versus PhD | https://www.gmercyu.edu/academics/learn/edd-vs-phd-difference | not shown | excerpt | low |
| S13 | Arizona Online, EdD versus PhD | https://online.arizona.edu/news/edd-vs-phd-key-differences-compared | 2025-02-21 | excerpt | low |
| S14 | Frontiers in Education, learning with rather than through AI | https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1716353/full | 2025-10-17 | excerpt | medium |
| S15 | Frontiers in Education, teacher training in the age of AI | https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1671306/full | 2025-12-05 | excerpt | medium |
| S16 | Frontiers in Education, K-12 teachers' use of AI | https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1651217/full | 2025-07-23 | excerpt | medium |
| S17 | Research.com, how to become an instructional designer | https://research.com/advice/how-to-become-a-instructional-designer-education-salary-and-job-outlook | "1 month ago" | excerpt | low |
| S18a | Edtech.com, Central Arizona Project posting | https://www.edtech.com/jobs/instructional-designer-7833 | 2025-07-30 | excerpt | low |
| S18b | Edtech.com, National Debt Relief posting | https://www.edtech.com/jobs/instructional-designer-i-5507 | 2025-04-24 | excerpt | low |
| S18c | Edtech.com, nCino posting | https://www.edtech.com/jobs/instructional-designer-6744 | 2025-11-06 | excerpt | low |
| S18d | Edtech.com, Exelon senior instructional designer posting | https://www.edtech.com/jobs/sr-instructional-designer-6664 | 2025-10-07 | excerpt | low |
| S19 | PayScale, instructional designer salary | https://www.payscale.com/research/US/Job=Instructional_Designer/Salary | 2026-05-24 | excerpt | low |
| S20 | ReadySetHire, instructional designer salaries | https://www.readysethire.com/job-search/position-salary/instructional-designer | 2026-03-10 | excerpt | low |

### BLS and federal data

| Code | Source | URL | Date on source | Seen as | Reliability |
|---|---|---|---|---|---|
| S21 | BLS OOH, kindergarten and elementary school teachers | https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm | modified 2026-08-27 | fetched | high |
| S22 | BLS OOH, middle school teachers | https://www.bls.gov/ooh/education-training-and-library/middle-school-teachers.htm | modified 2026-08-27 | fetched | high |
| S23 | BLS OOH, high school teachers | https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm | modified 2026-08-27 | fetched | high |
| S24 | BLS OOH, instructional coordinators | https://www.bls.gov/ooh/education-training-and-library/instructional-coordinators.htm | modified 2026-08-27 | fetched | high |
| S25 | BLS OOH, elementary, middle, and high school principals | https://www.bls.gov/ooh/management/elementary-middle-and-high-school-principals.htm | not shown | excerpt | high |
| S26 | BLS OOH, special education teachers | https://www.bls.gov/ooh/education-training-and-library/special-education-teachers.htm | not shown | excerpt | high |
| S26b | O*NET OnLine, special education teachers, elementary school (tools used) | https://onetonline.org/link/details/25-2056.00 | not shown | excerpt | high |
| S27 | BLS OOH, postsecondary education administrators | https://www.bls.gov/ooh/management/postsecondary-education-administrators.htm | not shown | excerpt | high |
| S28 | O*NET OnLine, national wages 11-9033 (BLS 2025 wage data) | https://www.onetonline.org/link/localwages/11-9033.00 | not shown | excerpt | high |
| S29 | BLS OOH, postsecondary teachers | https://www.bls.gov/ooh/education-training-and-library/postsecondary-teachers.htm | not shown | excerpt | high |
| S30 | BLS OOH, psychologists | https://www.bls.gov/ooh/life-physical-and-social-science/psychologists.htm | not shown | excerpt | high |
| S31 | BLS OEWS, education teachers, postsecondary (May 2023) | https://www.bls.gov/Oes/current/oes251081.htm | modified 2024-04-03 | fetched | high |
| S32 | BLS OEWS, school psychologists (May 2023) | https://www.bls.gov/OES/Current/oes193034.htm | modified 2024-04-03 | fetched | high |
| S33 | Wagedex, school psychologists card (relays May 2025 OEWS) | https://wagedex.com/card/school-psychologists | not shown | excerpt | low |
| S34 | Therighttrader, school psychologists salary (relays May 2025 OEWS) | https://therighttrader.com/salaries/school-psychologists | updated 2026-05-15 | excerpt | low |
| S35 | NCTQ, The Degree Dilemma (2025 master's premiums) | https://www.nctq.org/research-insights/the-degree-dilemma-school-districts-spend-millions-on-ineffective-masters-degree-premiums | 2025 | excerpt | high |
| S36 | NEA teacher salary report (2020-21 data), hosted by Courthouse News | https://www.courthousenews.com/wp-content/uploads/2022/04/nea-teacher-salary-report.pdf | 2022 | excerpt | medium |
| S37 | ETS, student loan changes 2026 | https://www.ets.org/grad-school-journey/student-loan-changes-2026.html | not shown | excerpt | medium |
| S38 | Georgetown financial aid, federal loan changes July 2026 | https://finaid.georgetown.edu/key-changes-to-federal-student-loans-expected-in-july-2026/ | updated June 2026 | excerpt | medium |
| S39 | US Education Department fact sheet on the Act | https://www.ed.gov/about/news/press-release/fact-sheet-trump-administration-making-college-more-affordable | not shown | excerpt | high |
| S40 | StudentAid.gov, loan forgiveness programs for teachers | https://studentaid.gov/articles/teacher-loan-forgiveness-options/ | not shown | excerpt | high |
| S41 | MOHELA and StudentAid.gov announcements (PSLF rules effective July 1, 2026) | https://mohela.studentaid.gov/DL/resourceCenter/TeacherLoanForgiveness.aspx | not shown | excerpt | high |
| S42 | Kentucky Department of Education, loan forgiveness and TEACH Grant | https://www.education.ky.gov/federal/fed/Pages/Teacher-Loan-Forgiveness.aspx | not shown | excerpt | medium |
| S43 | Texas Education Agency, teacher shortage areas 2025-2026 | https://tea.texas.gov/texas-educators/educator-initiatives-and-performance/teacher-shortage-areas-2025-2026 | not shown | excerpt | high |

### Licensure, shortages, and policy

| Code | Source | URL | Date on source | Seen as | Reliability |
|---|---|---|---|---|---|
| S44 | ECS, paid clinical service for novice teachers | https://www.ecs.org/?p=44102 | not shown | excerpt | high |
| S45 | CEA policy brief on student teacher compensation | https://cea.org/wp-content/uploads/2025/12/CEA-State-Level-Student-Teacher-Compensation-Programs-Policy-Brief_Dec-17-2025.pdf | 2025-12-17 | excerpt | medium |
| S46 | Spotlight PA, Pennsylvania student teaching stipend | https://www.spotlightpa.org/news/2026/03/pennsylvania-teacher-shortage-student-stipend-program-education/ | 2026-03 | excerpt | medium |
| S47 | Maine Legislature, student teacher compensation report | https://legislature.maine.gov/doc/12320 | 2025 | excerpt | high |
| S48 | Minnesota Legislative Reference Library, stipend pilot report | https://www.lrl.mn.gov/docs/2025/Mandated/251215.pdf | 2025-12-15 | excerpt | high |
| S49a | Rutgers Policy Lab, states and performance assessments | https://policylab.rutgers.edu/?p=6308 | not shown | excerpt | medium |
| S49b | Rutgers Policy Lab, authority devolves to preparation programs | https://policylab.rutgers.edu/what-happens-when-authority-devolves-from-the-state-to-educator-preparation-programs-tensions-between-professionalization-and-deregulation/ | 2024-10-03 | excerpt | medium |
| S49c | Education Week, Georgia drops the edTPA requirement | https://www.edweek.org/teaching-learning/georgia-eliminates-the-edtpa-requirement-for-teacher-candidates/2020/06 | 2020-06 | excerpt | high |
| S49d | NYSUT, edTPA changes in New York | https://www.nysut.org/news/nysut-united/issues/2022/may/edtpa | 2022-05 | excerpt | medium |
| S49e | Northern Illinois University, edTPA suspension (PA 103-0488) | https://niu.edu/educator-licensure/teacher-candidates/edtpa/index.shtml | not shown | excerpt | high |
| S50 | Tennessee State Board of Education, policy 5.105 (edTPA phase-out) | https://www.tn.gov/content/dam/tn/stateboardofeducation/documents/2025-sbe-meetings/may-30%2c-2025-sbe-meeting/5-30-25%20VI%20D%20Professional%20Assessments%20for%20TN%20Educators%20Policy%205.105%20Cover.pdf | 2025-05-30 | excerpt | high |
| S51 | Minnesota PELSB, edTPA Essentials overview memo | https://mn.gov/pelsb/assets/EdTPA%20Essentials%20Overview%20-%20memorandum%20Final_tcm1113-764726.pdf | 2026-08-14 | excerpt | high |
| S52 | Learning Policy Institute, state teacher shortages 2026 factsheet | https://learningpolicyinstitute.org/product/state-teacher-shortages-2026-factsheet | 2026 | excerpt | high |
| S53 | AAUW and CTQ letter citing LPI (bilingual 31 states) | https://www.aauw.org/app/uploads/2026/04/FY27-CTQ-Letter_FY27-Appropriations_April-2026.pdf | 2026-04 | excerpt | medium |
| S54 | Colorado Department of Education, educator shortage survey results | https://ed.cde.state.co.us/educatortalent/researchandimpact/educator-shortage-survey-results | 2026 | excerpt | high |
| S55 | Education Week, science of reading laws tracker | https://www.edweek.org/teaching-learning/which-states-have-passed-science-of-reading-laws-whats-in-them/2022/07 | updated 2026-08-04 | excerpt | high |
| S56 | Hunt Institute, science of reading brief | https://hunt-institute.org/wp-content/uploads/2025/07/TPF-2025_IB-DIGITAL.pdf | 2025-07 | excerpt | medium |
| S57 | Education Week, teacher-preparation programs and the science of reading | https://www.edweek.org/teaching-learning/more-teacher-preparation-programs-follow-the-science-of-reading-but-some-still-lag/2026/06 | 2026-06-09 | excerpt | high |
| S58 | Education Week, math policy tracker | https://www.edweek.org/teaching-learning/which-states-are-overhauling-math-education-see-our-tracker/2026/07 | 2026-07-31, updated 2026-10-21 | excerpt | high |
| S59 | Education Week, federal science of reading bill passes the House | https://www.edweek.org/teaching-learning/federal-science-of-reading-legislation-passes-the-house/2026/09 | 2026-09-17 | excerpt | high |
| S60a | Gallup, teachers using AI tools | https://news.gallup.com/poll/691967/teachers-using-ai-tools-save-hours-week.aspx | 2025-06 | excerpt | high |
| S60b | Walton Family Foundation, the AI dividend press release | https://www.waltonfamilyfoundation.org/the-ai-dividend-new-survey-shows-ai-is-helping-teachers-reclaim-valuable-time | 2025-06-25 | excerpt | high |
| S60c | Walton Family Foundation and Gallup report PDF | https://nextgeninsights.waltonfamilyfoundation.org/wp-content/uploads/2025/06/Teachers_AI_Report.pdf | 2025-06 | excerpt | high |
| S60d | The 74 and Stacker, survey summary (training and policy figures) | https://stacker.com/stories/education/survey-60-teachers-used-ai-year-and-saved-6-hours-work-week | 2025-08-12, updated 2026-02-18 | excerpt | medium |
| S61 | NCES, alternative route to certification indicator | https://nces.ed.gov/programs/coe/indicator/tlc/alternative-route-certification | 2015-16 data | excerpt | high |

### Research funding, doctorates, and academic labor

| Code | Source | URL | Date on source | Seen as | Reliability |
|---|---|---|---|---|---|
| S62a | Education Week, Education Department contract cancellations | https://www.edweek.org/policy-politics/trump-admin-suddenly-cancels-dozens-of-education-department-contracts/2025/02 | 2025-02 | excerpt | high |
| S62b | Education Week, "Educators reeling" (review panels) | https://www.edweek.org/policy-politics/educators-reeling-as-trump-takes-sledgehammer-to-education-department-contracts/2025/02 | 2025-02 | excerpt | high |
| S62c | Education Week, new federal research funding announced | https://www.edweek.org/policy-politics/after-months-of-standstill-ed-dept-announces-new-federal-research-funding/2026/08 | 2026-08-11 | excerpt | high |
| S62d | AERA, protecting education research at the Education Department | https://www.aera.net/tabid/22032/mid/55201/default.aspx | updated 2026-03 | excerpt | medium (advocacy) |
| S62e | Washington Times, $881 million in canceled contracts | https://www.washingtontimes.com/news/2025/feb/14/education-department-cancels-881-million-research-/ | 2025-02-14 | excerpt | medium |
| S63a | Drexel School of Education, doctoral programs | https://drexel.edu/soe/academics/doctoral | not shown | excerpt | medium |
| S63b | Inside Higher Ed, EdD versus PhD funding | https://insidehighered.com/node/14263 | not shown | excerpt | medium |
| S63c | Rutgers Graduate School of Education, EdD FAQs | https://gse.rutgers.edu/?p=1919 | not shown | excerpt | medium |
| S63d | University of Delaware School of Education, PhD versus EdD | https://education.udel.edu/?p=4268 | not shown | excerpt | medium |
| S64a | NSF NCSES, Survey of Earned Doctorates 2024, Table 8-14 | https://ncses.nsf.gov/pubs/nsf25349/assets/data-tables/tables/nsf25349-tab008-014.pdf | 2024 data | excerpt | high |
| S64b | NSF NCSES, Survey of Earned Doctorates 2022, Table 8-14 | https://ncses.nsf.gov/pubs/nsf24300/assets/data-tables/tables/nsf24300-tab008-014.pdf | 2022 data | excerpt | high |
| S65a | AAUP, annual report on the economic status of the profession 2025-26 | https://www.aaup.org/news/annual-report-economic-status-profession-now-available | 2025-26 | excerpt | high |
| S65b | AAUP, data snapshot on tenure and contingency, fall 2023 | https://www.aaup.org/sites/default/files/Colby_Tenure_Contingency.pdf | 2025-05 | excerpt | high |
| S66a | K-12 Dive, AASA 2024-25 salary study | https://www.k12dive.com/news/superintendents-younger-aasa-salary-report-2024-2025/744520/ | 2025-04 | excerpt | medium |
| S66b | Education Week, AASA 2024-25 mean salary | https://www.edweek.org/leadership/women-people-of-color-still-underrepresented-in-superintendent-ranks/2025/07 | 2025-07 | excerpt | high |
| S66c | AASA, 2024-25 study release | https://www.aasa.org/news-media/news/2025/04/01/aasa-releases-2024-25-superintendent-salary-benefits-study | 2025-04-01 | excerpt | high |
| S66d | Education Week, superintendent turnover (ILO Group) | https://www.edweek.org/leadership/superintendents-increasingly-report-economic-pressures-on-their-districts/2026/03 | 2026-03 | excerpt | high |
| S66e | K-12 Dive, AASA 2025-26 tenure | https://k12dive.com/news/the-average-length-of-current-superintendent-tenures-54-years/815908/ | 2026 | excerpt | medium |
| S67a | RAND, 2026 State of the American Teacher press release | https://www.rand.org/news/press/2026/06/teachers-stress-burnout-continue-to-outpace-those-of.html | 2026-06-08 | excerpt | high |
| S67b | Education Week, student behavior and teacher stress | https://www.edweek.org/teaching-learning/more-teachers-name-classroom-management-as-a-job-stress-than-low-pay/2026/06 | 2026-06 | excerpt | high |
| S67c | K-12 Dive, signs of stabilization in the teacher workforce | https://www.k12dive.com/news/signs-of-stabilization-stress-exit-plans-down-for-teacher-workforce/822932/ | 2026 | excerpt | medium |
| S68a | Harvard Graduate School of Education, Education Scorecard 2026 | https://www.gse.harvard.edu/ideas/news/26/05/us-learning-rebound-underway-according-education-scorecard | 2026-05-13 | excerpt | high |
| S68b | Harvard Graduate School of Education, U-shaped recovery | https://gse.harvard.edu/ideas/news/26/05/new-education-scorecard-finds-u-shaped-recovery | 2026-05-13 | excerpt | high |
| S68c | Stanford Graduate School of Education, findings | https://ed.stanford.edu/news/us-student-achievement-was-falling-long-pandemic-study-finds | 2026 | excerpt | high |
| S68d | AEI, Education Scorecard looks beyond recovery | https://cosm.aei.org/education-scorecard-looks-beyond-recovery/ | 2026-05-14 | excerpt | medium |

### Postings for non-classroom roles (all low reliability, posted ranges)

| Code | Source | URL | Date on source | Seen as |
|---|---|---|---|---|
| S69a | Bipartisan Policy Center, policy analyst K-12 ($50,000 to $65,000) | https://pac.org/job/policy-analyst-k-12-education | posted 2025-11-11 | excerpt |
| S69b | Education Commission of the States, policy analyst ($65,000 to $70,000) | https://www.ecs.org/wp-content/uploads/Policy-Analyst-Job-Posting-1.pdf | 2026-08 | excerpt |
| S69c | SHEEO, policy analyst ($65,000 to $75,000) | https://sheeo.org/now-hiring-policy-analyst/ | not shown | excerpt |
| S69d | National Governors Association, policy analyst K-12 ($70,000 to $90,000) | https://pac.org/?p=167262 | posted 2026-01-29 | excerpt |
| S69e | MassBudget, education policy analyst ($79,673 to $89,764) | https://pac.org/job/education-policy-analyst | posted 2025-11-17 | excerpt |
| S69f | Third Way, senior K-12 education policy advisor ($85,000 to $100,000) | https://pac.org/job/senior-k-12-education-policy-advisor-2 | posted 2026-01-20 | excerpt |
| S69g | SHEEO, senior policy analyst ($80,000 to $95,000) | https://sheeo.org/now-hiring-senior-policy-analyst | not shown | excerpt |
| S69h | Education Reform Now, manager of K-12 state policy ($85,000 to $105,000) | https://apply.workable.com/erna/jobs/view/0CC89307F3.md | posted 2026-10-09 | excerpt |
| S70a | Newsela, learning experience designer, core ($60,000 to $70,000) | https://ixdf.org/jobs/learning-experience-designer-core-remote-us-remote | "1 month ago" | excerpt |
| S70b | Cengage, learning designer ($60,000 to $75,000) | https://hireaniner.charlotte.edu/jobs/ab9d3400b69bc3c83df562cfccb1ab4c | closes 2026-05-28 | excerpt |
| S70c | HMH, learning experience designer I ($53,000 to $58,000) | https://www.edtech.com/jobs/learning-experience-designer-i-8690 | 2026-02-20 | excerpt |
| S70d | Kiddom, instructional designer, science ($75,000 to $85,000) | https://jobs.khoslaventures.com/companies/kiddom/jobs/72853429-instructional-designer-science | 2026-03-31 | excerpt |
| S70e | NoRedInk, senior curriculum designer ($90,000 to $115,000) | https://www.themuse.com/jobs/noredink/senior-curriculum-designer | not shown | excerpt |
| S70f | Pathstream, learning experience designer ($100,000 to $145,000) | https://www.edtech.com/jobs/learning-experience-designer-49548 | 2026-09-20 | excerpt |
| S70g | Edmentum, principal learning designer ($120,000 to $130,000) | https://job-boards.greenhouse.io/edmentum/jobs/6122612004 | deadline 2026-08-07 | excerpt |
| S70h | Discovery Education, product designer ($111,842 to $117,300) | https://www.edtech.com/jobs/product-designer-3613 | 2026-05-08 | excerpt |
