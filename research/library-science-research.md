# Library Science: Research Notes for the Field Roadmap

**Field:** Librarianship and library and information studies (LIS), the US path from any undergraduate major through the ALA-accredited master's degree to doctoral research, and the careers it opens (US-centered)

**Compiled:** 2026-11-26

**Companion artifact:** `artifacts/library-science-roadmap.jsx`

## Provenance note

This file was written before the JSX. Source codes (S1, S2, ...) point to the Sources table at the end, which gives the URL, what each source supports and how it was seen.

"Seen as" values:

- **fetched** means the page, file or CSV was downloaded and read or parsed during this session.
- **excerpt** means the page appeared only as a search-result summary. Excerpt-only figures should be rechecked on the page before reuse.

`www.bls.gov` returned HTTP 403 to command-line requests, and an attempt to read it through a fetch agent was refused by the session's permission classifier. BLS Table 1.2 was first read from the same data on `data.bls.gov` (S1). The librarians Occupational Outlook Handbook (OOH) page and the `www.bls.gov` Table 1.2 page were then opened in Chrome on 2026-11-26 and read directly (S2, S1). Every Table 1.2 value cited here for the ten occupations was re-checked on `www.bls.gov` and matched. The OOH page showed 2025 data (page last modified 2026-08-27), not the 2024-34 edition that an earlier search excerpt had suggested.

The ALA directory of accredited programs is rendered by JavaScript and could not be counted. The program count comes from Wikipedia (S6) and is unverified against ALA.

All sources predate the repository's shared AI-resilience evidence cutoff of 2026-11-25.

## TL;DR

- Librarianship is a master's-gated profession. BLS lists a master's degree as the typical entry education for librarians and media collections specialists (25-4022), and ALA says most US employers require an ALA-accredited master's for professional positions, and some states require it for public or school library work (S1, S4). There is no required undergraduate major.
- BLS counts 142,300 librarian jobs in 2025, a median wage of $68,270 (May 2025), projected growth of +2.6% to 2035 and 12,600 openings a year, almost all from replacement (S1). That growth is about 3,600 jobs over ten years.
- The support-staff ladder is shrinking. Library technicians (72,800 jobs) are projected at -6.4% and clerical library assistants (89,500 jobs) at -6.4% (S1). Many master's students work in a library first, but 24% of the class of 2023 had no library job before or during the degree (S7).
- New graduates are not guaranteed a job. Library Journal's class of 2023 average starting salary was $61,872 and 6% of respondents were unemployed. The average graduate was 34.5 years old and 51% were in a second career (S7).
- Where graduates land is shifting: public libraries 30% (down from 33% in 2021), academic 20% (down from 24%), private industry 16%, K-12 schools 7%, archives and special collections 4% (S7).
- AI is changing tasks more than headcount so far. The Library of Congress found that models reached up to 99% accuracy on title and author fields but under 50% on subject and genre, below the 95% needed for full automation (S12). 66.5% of 272 surveyed librarians already use generative AI at work (S11), and 83% of academic library leaders expect more demand for AI-literacy instruction (S10).
- The two published exposure indicators place librarians near the middle of the 30 featured occupations: Anthropic observed exposure 20.32% and Microsoft AI applicability 25.43 points (S20, S21). These measure text-and-chat task use, not the whole job.

## Key Findings

- **Pay and outlook (BLS Table 1.2, wages May 2025, projections 2025-35).**

| Occupation | Median | Growth | Jobs, 2025 | Annual openings | Typical entry education | Source |
|---|---|---|---|---|---|---|
| Librarians and media collections specialists (25-4022) | $68,270 | 2.6% | 142,300 | 12,600 | Master's | S1 |
| Library technicians (25-4031) | $44,580 | -6.4% | 72,800 | 10,800 | Postsecondary nondegree award | S1 |
| Library assistants, clerical (43-4121) | $36,910 | -6.4% | 89,500 | 12,300 | High school diploma | S1 |
| Archivists (25-4011) | $64,550 | 3.4% | 10,300 | 1,100 | Master's | S1 |
| Curators (25-4012) | $63,420 | 4.9% | 14,200 | 1,600 | Master's | S1 |
| Museum technicians and conservators (25-4013) | $51,440 | 3.6% | 14,000 | 1,600 | Bachelor's | S1 |
| Library science teachers, postsecondary (25-1082) | $80,340 | 2.7% | 4,500 | 300 | Doctoral or professional | S1 |
| Instructional coordinators (25-9031) | $77,440 | 1.6% | 248,700 | 23,100 | Master's | S1 |
| Secondary school teachers (25-2031) | $72,040 | -0.2% | 1,087,500 | 63,500 | Bachelor's | S1 |
| Elementary school teachers (25-2021) | $63,970 | -0.4% | 1,419,300 | 87,500 | Bachelor's | S1 |

- **Occupational Outlook Handbook (librarians and library media specialists).** Median pay $68,270 (May 2025); the lowest 10% earned under $43,660 and the highest 10% over $103,990; 142,300 jobs in 2025; growth of 3% ("as fast as average", 3,600 jobs) for 2025-35; about 12,600 openings a year, many from replacement. The largest employers were local government excluding education and hospitals (32%), local elementary and secondary schools (31%), state colleges and universities (9%), private colleges (8%) and web search portals, libraries, archives and other information services (5%). Median wages by employer were $74,710 in local schools, $74,490 at state colleges, $73,700 at private colleges, $62,860 in local government and $60,360 in libraries and information services. The Job Outlook text does not mention AI; it says libraries will keep hosting services and activities, and librarians will keep being needed to manage them (S2). BLS does not break out school library media specialists; they sit inside 25-4022 and their pay follows district teacher schedules (S1, S5).
- **Starting salaries and placements (Library Journal, class of 2023).** Average starting salary $61,872, up 36% from $45,560 in 2013. Unemployment 6% (4.3% in 2013). The Pacific region averaged $75,526 for full-time work and the South Central region $54,189. 71% of full-time graduates worked fully in person, 5% fully remote (S7). Respondents are self-selected, and 40 schools answered the school-side survey.
- **Who enters.** 73% women, 72% white (84% in 2021), average age 34.5, 53% aged 26-35, 51% in a second career, 20% already held a master's or PhD (S7).
- **Where graduates work.** Public 30%, academic 20%, private industry 16% (including Spotify, PayPal, Microsoft, Amazon), K-12 school libraries 7%, archives and special collections 4%, special libraries 3%, government libraries 3%, government agencies 3%, consulting 2%, LIS vendors 1%, other 3% (S7). 37% of job titles include "librarian". Reference (46%), collection development (43%), outreach (39%), circulation (32%) and programming (31%) are the most common assignments; digital content work was 20% of assignments, up from 3.4% a decade earlier, and AI was 4% (S7).
- **Credential gate.** ALA states that the majority of US employers require an ALA-accredited master's for professional positions and that some states require it for public or school librarians. Programs are in the US, Canada and Puerto Rico (S4). Wikipedia lists 64 institutions across 68 accredited programs (S6, unverified).
- **Funding and politics.** The March 2025 executive order on IMLS led to grant terminations, including layoffs funded by those grants. After court action, IMLS reinstated all terminated grants on 2025-12-03 (S15). ALA logged 4,235 unique titles challenged in 2025, the second highest on record, with 51% of censorship attempts at public libraries and 37% at school libraries, and 92% of challenges initiated by pressure groups and officials (S16, excerpt).
- **School library staffing.** About 35% of US school districts had no school librarian in 2021-22, per NCES data cited in a search result (S22, excerpt). EdWeek reported a 20% fall (roughly 10,000 positions) from 2009 to 2018 (S22, excerpt).
- **Job satisfaction.** CareerExplorer rates librarians 3.3 of 5, top 46% of careers (S17). PayScale's 2013-15 survey found 81% of librarians highly satisfied and 77% found the work highly meaningful, at a median pay of $49,100 then (S18).

## Undergraduate

### Curriculum and majors

- **No required major.** BLS lists no related work experience for librarians and a master's as the entry degree, and states that a bachelor's degree in any major is enough to enter MLS or similar programs (S1, S2). Students choose a major that suits the library type: humanities and social sciences for public and academic reference, a science for science or health libraries, education for school libraries, computing or data for systems and metadata work. Subject expertise is what separates candidates for academic liaison and special-library roles. This is an inference from the setting-specific credential sources (S4, S5, S24), not a measured hiring finding.
- **Courses worth taking.** Research methods, writing, a second language, statistics or data analysis, introductory programming, history of the book or media, and information-literacy or digital-humanities electives. No source ranks these by hiring value.
- **Not found.** No national count of undergraduate LIS or information-science majors was found, and no source states what share of MLIS entrants hold an LIS bachelor's.

### Skills

- Research and source evaluation, teaching small groups, customer service, organizing information, and comfort with databases and spreadsheets. Respondents to the LJ survey describe these as the work: reference, collection development, outreach, circulation and programming (S7).

### Tools and extracurriculars

- **Work in a library.** Of the class of 2023, 33% worked in a library both before and during graduate school, 15% only before, 28% only during, and 24% not at all. One respondent said the employer posted a job only once they were close to graduating (S7). The entry roles are pages, circulation staff and library assistants, a category BLS projects to shrink 6.4% (S1).
- **Teaching license if school librarianship appeals.** AASL notes that many states require a teaching license in another subject before school librarian certification (S5). Students who know this early can take education coursework.
- **Unpaid or low-paid internships.** One graduate in the LJ survey said a paid part-time internship produced several offers, but also that many cannot afford such work (S7).

## Master's

### Programs

- **Degree names.** Programs offer the MLS, MLIS, MSIS, Master of Arts and Master of Librarianship, among others (S4). The credential that matters is ALA accreditation, not the degree name.
- **Credits and cost.** Syracuse's on-campus MLIS is 36 credits at $2,086 a credit, $75,096 in tuition (S8). The University of Washington MLIS is 63 credits at a tentative $990 a credit for 2026-27, an estimated $64,992 including fees full time (S9). Third-party guides cite tuition from about $11,000 to $16,000 at lower-cost online programs, but these are commercial pages (excerpt only).
- **Length and format.** BLS says MLS programs usually take 1 to 2 years (S2). Many programs are online or hybrid. A 2019 American Libraries piece reported 64% of ALA-accredited programs offered fully online degrees (excerpt, dated). The ALISE 2024 report (59 schools contributing, fall 2023 data) has current enrollment and degree counts, but the PDF could not be downloaded, so those numbers were not read (S29).
- **Dual degrees and certificates.** 7% of the class of 2023 pursued a dual degree or certificate, most often archives and special collections, museum studies, school media, another arts or humanities master's, or management (S7). UW lists an MLIS law librarianship option and a new Certificate in AI (S9).

### Curriculum

- **Core.** Syracuse's 12-credit core has an introductory course on cultural, ethical and legal issues for information professionals, an information-resources group and further required courses (S8). Typical other required areas are organization of information (cataloging and metadata), reference and user services, collection management and research methods. The exact required list varies by school; the Syracuse course catalog was not read in full.
- **Specializations.** Common tracks include public libraries and youth services, academic libraries, archives and special collections, data and digital curation, school media, health and law librarianship, and information systems (S4, S7, S8). School media tracks need state-specific licensure (S5).
- **Practicum.** The research did not read any school's practicum requirement. LJ notes that 26% of MLIS-granting schools offer a formal mentoring program, and one remote student said the program gave little help finding an internship or job (S7).

### Funding

- Professional master's degrees are mostly self-funded. Scholarships and assistantships exist, but no national funding rate was found. ALA's Spectrum Scholarship page returned 404 and was not verified. The IMLS Laura Bush 21st Century Librarian grants funded some library education and were among those terminated in 2025 and reinstated in December 2025 (S15; the program's current award status was not checked).

### Tools and AI

- Integrated library systems and discovery platforms, MARC and linked-data cataloging, metadata schemas, citation managers, research guides, OpenRefine, spreadsheets, SQL or Python for data work. These tool categories come from the program and job descriptions read (S7, S8) and are not ranked by usage in any source.
- **AI in coursework.** UW now advertises a Certificate in AI for MLIS students (S9). Specific AI course requirements elsewhere were not found.

## PhD / Research

- **Who needs it.** The PhD is not required for practice. BLS lists library science teachers (postsecondary) at 4,500 jobs, a $80,340 median, +2.7% growth, 300 openings a year and a doctoral degree (S1). The roadmap path is mostly for faculty and research roles.
- **Programs and funding.** LIS doctoral programs sit in iSchools and information schools. UW guarantees funding of at least four years with a tuition waiver and stipend from assistantships and grants (excerpt, S28). Michigan, Western and Florida State describe funding too, with different terms (S28, excerpt). Stipend amounts were not read.
- **Research frontiers.** Evaluating generative AI for cataloging and discovery (S12, S10), AI literacy instruction (S10), research-data stewardship and open scholarship (S10), digital preservation and born-digital archives, intellectual freedom and information equity (S16), and library workforce and labor studies. These are drawn from the studies read; no source in this session catalogued all active LIS research areas.
- **Not found.** Doctoral completion rates, time to degree and faculty placement for LIS were not found. ALISE reports student-achievement data for ALA-accredited programs but the report was not read (S29).

## Tools and AI

- **Cataloging.** The Library of Congress tested GPTs and open-source models such as MistralAI on eBook records. Title and author fields reached up to 99% accuracy, subject and genre fields fell below 50%, and overall quality missed the 95% threshold for full automation, so human-in-the-loop workflows are the plan (S12, presented 2025-08-15).
- **Academic libraries.** Ithaka S+R surveyed 483 library deans and directors (36% response) in Nov-Dec 2025. The most frequent AI uses were discovery and access (40%), research support (29%) and internal data analysis (26%); 24% reported no AI use. Doctoral institutions were more likely to use AI for metadata (32%) than baccalaureate institutions (11%). Barriers included low priority (50%), limited staff skills (48%), time (46%) and ethical opposition (46%). Over the next three years, 83% expected more demand for AI-literacy instruction, 74% expected AI in discovery systems, 55% staffing change or reskilling, and 51% closer scrutiny of research integrity (S10). Elsevier sponsored related summaries of this survey; the figures here come from the Ithaka report itself.
- **Practitioner use and view.** In a survey of 272 librarians in academic, public, medical, law, government and special libraries, 66.5% used generative AI at work, rating its effectiveness 6.76 on a 0-10 scale. The top concerns were inconsistent accuracy, ethics and privacy, and prompt writing (S11). The study is a convenience sample.
- **LJ graduates.** 4% of the class of 2023 listed AI as part of their assignments, and school and academic librarians described teaching AI to students and staff (S7).

## Career Paths

All salary figures are US. Table 1.2 medians are May 2025 wages from S1. The salary shown for each card is the best sourced range; where no occupation-specific figure exists the card says so.

### 1. Public libraries

- **Titles:** Library Assistant or Page → Librarian (Reference, Adult Services, Youth Services) → Branch or Department Manager → Library Director.
- **Reality:** Public libraries hired the largest share of new graduates (30%), though the share has fallen for three years (S7). Public library librarians fall in BLS 25-4022 (median $68,270); LJ's class of 2023 averaged $61,872 and the Pacific region $75,526 against $54,189 in the South Central region (S1, S7). Work is increasingly programming, community services and digital access. Politics matter: 51% of 2025 censorship attempts were at public libraries (S16, excerpt), and small and rural libraries were hit hardest by the IMLS grant cuts reinstated in December 2025 (S15).
- **Salary:** $54K-$76K typical new-graduate averages by region; $68,270 median for all librarians.
- **Sources:** S1, S7, S15, S16.

### 2. Academic and research libraries

- **Titles:** Library Assistant → Reference, Instruction or Subject Librarian → Head of a Department → Associate Dean or University Librarian.
- **Reality:** Academic libraries took 20% of the class of 2023 (S7). In the ARL survey, 76% of US public universities offered faculty appointments and 41% had bargaining-unit eligibility, against 29% and 16% at private universities; executive leadership averaged $177,800 with 22 years of experience (S14). Subject expertise and data, scholarly-communication or metadata skills help. Ithaka's survey shows AI use is uneven and tied to institution type (S10).
- **Salary:** About $58K to $90K in posted entry-level data and metadata librarian ranges (excerpt, S25); leadership averages above $170K at ARL libraries (S14).
- **Sources:** S7, S10, S14, S25.

### 3. School library media

- **Titles:** Teacher or Library Aide → School Librarian (Library Media Specialist) → District Library Coordinator.
- **Reality:** Most states require a teaching license first, some require a master's, and rules differ by state (S5). School librarians are counted in BLS 25-4022, which has no separate wage; teacher pay is the best proxy (secondary teachers $72,040, elementary $63,970, S1). The pipeline is fragile: about 35% of districts had no librarian in 2021-22 (excerpt, S22), and LJ graduates noted falling school library funding. Only 7% of the class of 2023 started in a school library (S7).
- **Salary:** District-set; BLS teacher medians $64K-$72K.
- **Sources:** S1, S5, S7, S22.

### 4. Law, health and government libraries

- **Titles:** Research or Reference Librarian → Senior Librarian → Manager or Associate Director → Library Director or Chief Law Librarian.
- **Reality:** These are small, specialist markets (special and government libraries 3% each in LJ, S7). AALL's 2025 survey reported academic law library reference and research librarians at a median of $84,250, metadata librarians $75,746, directors $179,509; law firm and corporate senior research librarians $116,075 and directors of research services $184,453 (S13, via a news summary). Health sciences librarians can earn the Medical Library Association's AHIP credential (S24). BLS says special librarians usually supplement the MLS with knowledge of their field, that some employers require a master's, professional degree or PhD in the subject, and that a law librarian may be required to have a law degree (S2).
- **Salary:** $76K-$87K for academic law staff librarians; $116K-$184K at firms (AALL medians).
- **Sources:** S7, S13, S24.

### 5. Archives, special collections and digital curation

- **Titles:** Archives Assistant → Archivist or Curator → Senior Archivist → Director of Special Collections.
- **Reality:** BLS lists archivists at 10,300 jobs, a $64,550 median, +3.4% and 1,100 openings; curators at 14,200 jobs, $63,420, +4.9% and 1,600 openings; museum technicians and conservators at $51,440 with a bachelor's entry degree (S1). Both archivist and curator typically require a master's. Only 4% of the class of 2023 started in archives or special collections (S7). Many roles are grant-funded and contract-based, so the IMLS turmoil mattered (S15); this link is inferred. A*CENSUS II (2021) is the national archivist survey; its findings were not read (S26).
- **Salary:** $51K-$65K median range across the three occupations.
- **Sources:** S1, S7, S15.

### 6. Data, metadata and digital services

- **Titles:** Metadata or Digital Collections Assistant → Metadata, Data Services or Discovery Librarian → Head of Digital Library or Research Data Services → Associate Dean for Technology.
- **Reality:** LJ found digital content in 20% of graduates' assignments, compared with 3.4% a decade earlier (S7). Posted data-services and research-data librarian roles in 2025 listed $58,566 to $90,000 by rank (excerpt, S25). Salary.com's average data librarian pay was $67,730 as of June 2026 (excerpt, aggregator, S25). The LoC finding that AI is weakest on subject and genre fields keeps human metadata judgment in the loop (S12).
- **Salary:** About $58K-$90K in posted ranges.
- **Sources:** S7, S12, S25.

### 7. Corporate, vendor and knowledge work

- **Titles:** Research Analyst or Information Specialist → Knowledge Manager → Taxonomist or Content Strategist → Director of Research and Information Services.
- **Reality:** 16% of the class of 2023 went into private industry, including large technology employers, plus 2% in consulting and 1% at LIS vendors (S7). One respondent working for a vendor said they would prefer to work in a library (S7). No BLS occupation matches this path. Within law firms, AALL medians run $116,075 for senior research librarians and $184,453 for directors (S13).
- **Salary:** No general sourced range; law-firm research medians $116K-$184K (S13).
- **Sources:** S7, S13.

### 8. LIS teaching and research

- **Titles:** Doctoral Student → Postdoctoral Fellow or Instructor → Assistant Professor → Professor or Dean.
- **Reality:** BLS counts only 4,500 library science teachers and 300 openings a year (S1), so tenure-track jobs are rare. ALISE's 2024 report drew on 59 schools (S29). Doctoral programs commonly fund students (S28, excerpt), but faculty placement data was not found.
- **Salary:** $80,340 median for postsecondary library science teachers (S1).
- **Sources:** S1, S28, S29.

## Uncertainties and Regional Variation

- **BLS rounding.** The OOH rounds growth to 3%; Table 1.2 gives 2.6%. The repository uses Table 1.2's one-decimal figure (S1, S2).
- **One occupation, many jobs.** BLS 25-4022 combines public, academic, school and special librarians and media collections specialists. The $68,270 median is not a public-library or school-library wage, and BLS publishes no separate wage for school librarians.
- **Placement survey bias.** LJ responses come from graduates of participating schools; salaries are averages, not medians, and 6% unemployment is among respondents (S7).
- **Program count.** The 64-institution, 68-program figure is from Wikipedia, not ALA (S6).
- **Secondary and excerpt-only sources.** AALL figures come from a news summary (S13); school staffing, ALA State of Libraries, posted salaries, doctoral funding and the A*CENSUS II claim are excerpts (S16, S22, S25, S26, S28).
- **Regional variation.** Pay averaged $75,526 in the Pacific region and $54,189 in the South Central region for LJ graduates (S7). School library certification differs by state (S5). Canada and Puerto Rico have accredited programs; this note is US-centered.
- **Not found.** ALISE enrollment, ALA's program count, ARL median salary, school librarian counts for 2025, doctoral placement and the current Laura Bush program status.

## Comparison dataset coverage (new-roadmap check)

Checked on 2026-11-26 against the original sources in `docs/roadmap-metrics.md`. The roadmap's occupation is **librarians and media collections specialists (25-4022)** with career ID `librarians-and-media-collections-specialists`.

| Dataset | Source and row | Outcome |
|---|---|---|
| BLS median wages and employment outlook | Table 1.2, 25-4022: $68,270; 142.3 thousand jobs; +2.6%; 12.6 thousand openings (S1) | Added |
| CareerExplorer career happiness | "Librarian" satisfaction page, 3.3 out of 5, top 46% (S17). No page exists for "library media specialist" (404). | Added (exact category, "Librarian") |
| NORC General Social Survey 2004-2024 | Census 2010 code 2430 "Librarians" has 29 working respondents with a valid SATJOB response, parsed from `gss7224_r3a.dta` with the repository's filters (S19) | Unavailable: 29 respondents is below the project's 30-respondent minimum. The category matches the occupation (the 2010 SOC "Librarians" maps to 25-4022), so a future wave could make it publishable |
| PayScale high job satisfaction 2013-2015 | "Librarians": median pay $49,100, 77% high meaning, 81% high satisfaction (S18). Also listed: Library Technicians 54%, Library Assistants 60%, Archivists 51%, Curators 60% | Added (exact category match, 81%) |
| ZipRecruiter degree regret 2026 | The 25 surveyed major fields (S23) contain no library or information-science major. Closest broad fields (Education or Teaching 16.4%, Computer Science, Information Technology, or Data Science 19.8%, Other 21.1%) do not represent the master's-level LIS degree or an unrelated undergraduate major | Unavailable: no matching surveyed major; no value linked |
| Anthropic observed exposure | `job_exposure.csv` row 25-4022: 0.2032 (20.32%). Library technicians 0.054, library assistants 0.0978, archivists 0.1348, curators 0.4123, library science teachers 0.018 (S20) | Added |
| Microsoft AI applicability | `ai_applicability_scores.csv` row 25-4022: 0.25429923319962655 (25.43 points). Library technicians 0.2561, library assistants 0.1495, archivists 0.2760, curators 0.2481, library science teachers 0.3409 (S21) | Added |

## Sources

| Code | URL | Supports | Seen as |
|---|---|---|---|
| S1 | https://www.bls.gov/emp/tables/occupational-projections-and-characteristics.htm (first read at https://data.bls.gov/projections/occupationProj) | Table 1.2 rows for 25-4022, 25-4031, 43-4121, 25-4011, 25-4012, 25-4013, 25-1082, 25-9031, 25-2031, 25-2021; accessed 2026-11-26 | fetched (Chrome and data.bls.gov) |
| S2 | https://www.bls.gov/ooh/education-training-and-library/librarians.htm | OOH librarians and library media specialists (last modified 2026-08-27): Quick Facts, percentiles, employer shares and pay, how to become one, Job Outlook text; accessed 2026-11-26 | fetched (Chrome) |
| S4 | https://www.ala.org/educationcareers/accreditedprograms/guidelines-choosing-masters-program-library-and-information-studies | ALA accreditation, employer and state requirements, degree names, US/Canada/Puerto Rico | fetched |
| S5 | https://www.ala.org/aasl/about/ed/recruit/license | School librarian certification, teaching license first in many states | fetched |
| S6 | https://en.wikipedia.org/wiki/List_of_American_Library_Association_accredited_library_schools | 64 institutions, 68 programs (unverified against ALA) | fetched |
| S7 | https://libraryjournal.com/story/challenges-opportunities-placements-and-salaries-2024 (PDF copy read from the NJLA members site) | LJ Placements & Salaries Survey 2024 (class of 2023): salaries, placements, demographics, regions, roles | fetched |
| S8 | https://ischool.syracuse.edu/academics/library-and-information-science-masters-degree/ | 36 credits, $2,086 a credit, 12-credit core | fetched |
| S9 | https://ischool.uw.edu/academics/mlis/tuition-financial-aid | 63 credits, $990 tentative 2026-27, $64,992 estimate, Certificate in AI | fetched |
| S10 | https://sr.ithaka.org/publications/ithaka-sr-us-library-survey-2025/ | Ithaka S+R US Library Survey 2025: 483 respondents, AI use, barriers, expectations | fetched |
| S11 | https://ischool.sjsu.edu/ciri-blog/how-librarians-are-using-generative-ai-insights-nationwide-survey | Survey of 272 librarians: 66.5% use GAI, effectiveness 6.76 | fetched |
| S12 | https://repository.ifla.org/handle/20.500.14598/6861 | Library of Congress AI cataloging experiments (IFLA WLIC, 2025-08-15) | fetched |
| S13 | https://www.lawnext.com/2025/11/what-do-law-librarians-earn-new-aall-salary-survey-provides-details.html | AALL 2025 Biennial Salary Survey medians (news summary) | fetched |
| S14 | https://www.infodocket.com/2025/09/17/association-of-research-libraries-arl-releases-salary-survey-2024-reports-data/ | ARL Annual Salary Survey 2024: coverage, faculty status, leadership pay | fetched |
| S15 | https://npr.org/2025/12/04/nx-s1-5633347/libraries-museums-federal-funding-imls-trump-cuts | IMLS grants reinstated, December 2025 | fetched |
| S16 | https://www.ala.org/news/state-americas-libraries-report-2026 | ALA State of America's Libraries: 4,235 titles challenged in 2025, setting shares | excerpt |
| S17 | https://www.careerexplorer.com/careers/librarian/satisfaction/ | CareerExplorer librarian rating 3.3, top 46% | fetched |
| S18 | https://www.payscale.com/data-packages/most-and-least-meaningful-jobs/full-list | PayScale rows for librarians, technicians, assistants, archivists, curators | fetched |
| S19 | https://gss.norc.org/content/dam/gss/get-the-data/documents/stata/GSS_stata.zip (`gss7224_r3a.dta`) | GSS occ10 2430 "librarians": 29 valid respondents, 2004-2024 | file |
| S20 | https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/01eb1d0ba708f2c26d78c3b42c57776ef1383ab7/labor_market_impacts/job_exposure.csv | Anthropic observed exposure rows | file |
| S21 | https://raw.githubusercontent.com/microsoft/working-with-ai/550c00c9d1b054ac78b87da3a26165bace334779/ai_applicability_scores.csv | Microsoft AI applicability rows | file |
| S22 | https://www.edweek.org/leadership/schools-see-steep-drop-in-librarians-new-analysis-finds/2018/05 and related school-librarian reports | 20% fall 2009-2018; 35% of districts without a librarian in 2021-22 (NCES, as cited) | excerpt |
| S23 | https://datawrapper.dwcdn.net/2GSs3/1/dataset.csv | ZipRecruiter degree-regret chart data, 25 majors | file |
| S24 | https://www.mlanet.org/academy-of-health-information-professionals/ | MLA AHIP credential exists | fetched |
| S25 | Search results for data and metadata librarian postings and Salary.com data librarian page | Posted ranges and $67,730 average | excerpt |
| S26 | https://www.archivists.org/news/2022/read-the-acensus-ii-all-archivists-survey-report | A*CENSUS II exists; findings not read | excerpt |
| S28 | https://ischool.uw.edu/programs/phd/scholarships-funding and program pages for Michigan, Western and Florida State | Doctoral funding guarantees | excerpt |
| S29 | https://www.infodocket.com/2024/08/02/alise-association-for-library-and-information-science-education-releases-2024-statistical-report-library-and-information-science-education-trends-and-key-indicators/ | ALISE 2024 report exists, 59 schools; report PDF not read | fetched (announcement only) |
