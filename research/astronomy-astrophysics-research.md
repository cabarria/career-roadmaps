# The Astronomy and Astrophysics Undergraduate-to-Career Roadmap (USA, 2026 Edition)

Research notes behind `artifacts/astronomy-astrophysics-roadmap.jsx`. Bracketed numbers such as [34] point to the Sources list at the end. Sources were retrieved in two passes: the first pass on 2026-11-22 (dated from the artifact's creation) and a refresh pass on 2026-11-23 that replaced older figures with May 2025 BLS data and current mission and budget status.

## TL;DR

- **Astronomy is applied physics with a very narrow academic funnel.** BLS counts about 2,400 astronomers in the US (2025) and projects 8% growth over 2025-35, which is about 200 jobs [39]. About two-thirds of new astronomy PhDs take a postdoc first [34]. Among astronomers hired into tenure-track jobs, PhDs outnumber openings roughly 3 to 1 and the average gap from PhD to hire is about 5 years [35]. Physics-wide estimates of the share who ever reach a permanent academic research job run from about 10% to 21% [37].
- **The common non-academic destination is data science and software.** For new astronomy PhDs in "potentially permanent" jobs (classes of 2018-20), the most common fields were data science or computer software; the median private-sector starting salary was $120,000 against postdoc medians of $62,500 (academia) and $67,000 (government) [34].
- **The master's is rarely a destination in US astronomy.** Many PhD programs admit no master's-only students and award an MS or MA along the way [28]. PhD students are funded; terminal master's programs often have less financial support [27].
- **The funding climate is the live risk.** Congress rejected the deepest proposed FY2026 cuts (NSF $8.75B, NASA Science $7.25B) [64], but the FY2027 White House request again proposes a 55% NSF cut and zeroes the NSF astronomy postdoctoral fellowship [65]. House appropriators propose roughly 20% cuts; a Senate draft released November 2026 is roughly flat [65].
- **The research frontier is unusually active right now.** Roman launched on 2026-08-30 [60], Euclid released its first major dataset on 2026-11-12 [61], Rubin began issuing real-time alerts in February 2026 [59], and JWST keeps finding luminous galaxies about 300 million years after the Big Bang [62].

## Key Findings

1. **The undergraduate core is physics plus math plus astronomy electives.** Princeton requires prerequisite mechanics, electromagnetism, quantum physics, calculus and linear algebra, then upper-level astrophysics courses including a computational and observational methods course and a junior independent work sequence [1]. UCSD pairs classical, modern and statistical physics with stars, galaxies, planets and cosmology electives and several laboratory courses [2]. Yale requires a data-analysis course with programming and statistics [5].
2. **Graduate admission turns on physics preparation and research.** The University of Washington says astronomy graduate admission is highly competitive, that strong preparation in physics is extremely important, that most of its students major in physics as well, and that several credits of independent research help admission [8]. Cornell recommends at least one semester or summer of research for its astrophysics concentration [4].
3. **Most programs no longer require the Physics GRE.** Berkeley, Chicago, Wisconsin, Vanderbilt and Northwestern's astronomy PhD do not require it, and several (Berkeley, Wisconsin, Northwestern astronomy) do not accept scores at all [14].
4. **The PhD is direct-admit and funded; the master's is usually en route.** Harvard cites five to six years as typical and guarantees funding for six [15]; Berkeley sets six years as normative [22]; RIT cites about four to five [17]. Stipends in the programs sampled run from about $27,000 (a nine-month TA line) to about $50,000 (Columbia's twelve-month stipend) [19, 25, 26].
5. **The postdoc is the default next step, and it is long.** About two-thirds of new astronomy PhDs accept a postdoc [34]. BLS says a postdoc typically lasts 2 to 3 years [39], but among astronomers hired into tenure-track jobs the average time from PhD to hire was 4.9 years, which is itself a lower bound [35].
6. **Industry pays much more than postdocs.** AIP's median private-sector starting salary for new astronomy PhDs was $120,000 (range $47,000 to $210,000), with the highest salaries going to data scientists and engineers [34].
7. **AI and computation are reshaping the research.** Rubin's alert stream is expected to reach about 7 million alerts a night and is routed through community brokers [59]; exoplanet-atmosphere retrievals that take hundreds of CPU-hours are being replaced by neural inference [58]; ML galaxy classification now reportedly matches human experts [55].
8. **Federal funding and citizenship rules gate parts of the field.** NSF REUs are limited to US citizens and permanent residents [12]; GRFP is limited to citizens, nationals and permanent residents [19]; some federal roles require citizenship or a clearance [39].

## Undergraduate (Years 1-4)

### Core curriculum

- **Physics and math prerequisites.** Princeton: mechanics, electromagnetism, a classical-to-quantum course, two semesters of calculus, advanced multivariable calculus and linear algebra [1]. Yale: prerequisite physics sequence plus multivariable calculus and linear algebra or ODEs [5]. UW: three quarters of introductory physics and a calculus series [8]. UCSD recommends its PHYS 4 series for BS students and requires one programming course [2].
- **Upper-division physics.** Princeton's astrophysics major requires three of five courses from quantum mechanics, thermal physics, advanced dynamics, advanced electromagnetism and a second quantum course [1]. UCSD covers classical physics, quantum mechanics and statistical mechanics with astrophysical applications [2]. UF's BS requires 20 credits of math and physics foundation plus 42 major credits, with a minimum grade of C [6].
- **Astronomy courses.** Stellar structure and evolution, galaxies and cosmology, high-energy astrophysics, and observational and computational methods appear across Princeton, Yale, UCSD and Cornell [1, 2, 4, 5]. Cornell splits its major into an Astrophysics concentration (for graduate-bound students; entry normally needs a GPA above 3.2 in core courses) and a General Astronomy concentration [4].
- **Capstones.** Princeton requires a senior thesis and junior independent work [1]; Yale a senior essay or project [5]; UMN a directed-research capstone or senior thesis [7].

### Hard courses

- The upper-division physics core (E&M, quantum, mechanics) is where the degree turns demanding. This is carried over from the sibling physics research file and from the required-course lists above [1, 2]; no astronomy-specific source calls these "weeder" courses (see Uncertainties).
- Textbook names used in the roadmap (Griffiths to Jackson, Taylor, Thornton and Marion) are also carried over from the physics research file.

### Skills, tools and methods

- **Python is the working language.** A 2024 IOP text calls Python the de facto standard for data science in both industry and astronomy, with simulations and other extreme-scale computing as the exception [10]. Astropy handles FITS files, coordinates, units and tables, and scikit-learn the ML basics [11].
- **Observing and data reduction.** Yale offers a hands-on observing lab and a data-analysis and research-techniques course with programming and statistics [5]. UW students work with telescopes at Manastash Ridge, Apache Point and a campus observatory [8]. Princeton's methods course is computational and observational [1].
- **Unix and programming.** UW strongly recommends programming before its 400-level courses and expects UNIX knowledge [8]. OSU offers an astronomy data-analysis course as one way to meet its computing prerequisite [3].
- **Statistics and error analysis, LaTeX, Git.** Carried over from the physics research file; statistics is also part of Yale's research-techniques course [5].

### High-value extracurriculars

- **Undergraduate research.** UW: several credits of independent research help graduate admission [8]. Cornell: at least one semester or summer recommended [4]. Princeton: junior independent work [1].
- **NSF REU programs.** Ten-week summer programs. Posted 2026 stipends: $7,000 (Rochester, East Texas A&M, Kentucky), $700 a week for 10 weeks (UH Institute for Astronomy), $6,300 over nine weeks (Northwestern CIERA), $6,000 for ten weeks with housing (UF, for 2027). Several add housing and travel [12]. All REU-funded sites require US citizenship or permanent residency [12].
- **Observatory programs.** NRAO runs an REU, a National Radio Astronomy Consortium program and a summer student program in Green Bank, with a stipend set in the offer letter [12]. UH IfA internships are funded through NASA and NSF grants [12].
- **AAS winter meeting.** The largest annual gathering of American astronomers; student posters compete for the Chambliss awards (46 of 480 student presenters were recognized at one meeting) [13]. NRAO and CIERA REU programs fund student travel to present [13].
- **Double major or minor.** UW notes that most of its astronomy students also major in physics [8]. Cornell does not allow a double major in its astrophysics concentration and physics because of overlap [4]. UCSD requires a programming course [2].

### What astronomy bachelor's recipients do (AIP, classes of 2014-16)

- Over half entered the job market and 32% went to graduate school in astronomy, astrophysics or physics [9].
- About a fifth worked at colleges and universities, typically as research assistants at an observatory [9].
- Median starting salary: $55,000 for private-sector STEM jobs and $34,000 at colleges and universities [9].

## Master's (Years ~5-7)

### Program types

- **MS or MA en route to the PhD (the common case).** Boston University admits no master's-only students and awards an MA en route (or a terminal MA after the PhD exam track) [28]. UT Austin does not offer master's-only admission; admitted PhD students may apply for a master's in their second or third year [28]. Wisconsin and UMass accept PhD candidates only, with the master's obtained along the way [28]. Vanderbilt does not admit students seeking a terminal master's [23]. Columbia awards an MA and an MPhil during the PhD [18].
- **Terminal MS programs exist but are the exception.** New Mexico State offers thesis and coursework-only terminal tracks (33 credits minimum, about six for the thesis) and says a thesis is nearly always required [28]. The University of Hawaii Institute for Astronomy offers a terminal MS built on 30 credits of graduate astronomy [28]. AIP notes terminal programs are more common in engineering than in physics or astronomy [27]. AIP-affiliated research counts hundreds of terminal physics and astronomy master's degrees a year in the US, with a subset going on to PhDs [29].
- **Bridge programs.** Fisk-Vanderbilt and similar master's-to-PhD bridge programs are designed for students from non-traditional backgrounds and bring more mentoring and research [27, 29].
- **International route.** In Germany a master's is the default before a three-year PhD; IMPRS PhD programs pay stipends above 1,500 euros a month with very low fees [30]. Dutch universities (Leiden, Groningen, Amsterdam) run two-year astronomy MSc programs [32, 33]. Many European PhD programs require a master's, many UK PhD places are restricted to UK residents, and the Physics GRE is not used in Europe [31].
- **Adjacent and professional degrees.** A physics or astronomy major qualifies for many adjacent graduate and professional programs; professional degrees vary widely in cost and are not always as well funded as PhDs [27].

### Funding norms

- **PhD students are funded; terminal master's students often are not.** AIP: terminal programs often have less financial support than combined programs, and many master's and professional programs fall on the student [27].
- **Posted PhD stipends.** University of Alabama: TA stipends $27,270 (nine months) to about $35,000 with full summer support; RA up to about $36,360 (undated page) [19]. Vanderbilt: $34,000-$38,000 for 2024-25 with full tuition waiver and health insurance [25]. Columbia: about $50,000 expected twelve-month stipend for 2025-26 [26].
- **Fellowships.** NSF GRFP: $37,000 a year for three years plus a $12,000 cost-of-education allowance; one application, in the first or second year of graduate school; US citizens, nationals and permanent residents only. NASA FINESST: $45,000 a year including tuition and fees, up to three years; international students may apply with restrictions [19].
- **Early-career squeeze.** AAS reports physics and astronomy graduate enrollment fell 7-9% in fall 2025, largely because of research-funding uncertainty, and that NASA Science Mission Directorate grant programs face delays and reductions [66]. The FY2026 request would have cut GRFP by more than 50% and fully defunded the NSF astronomy postdoctoral fellowship [63]; Congress did not adopt that request [64], but FY2027 again proposes zero for the postdoctoral fellowship [65].

### Advanced skills introduced

- ASU's PhD requires an instrumentation and techniques course plus options in astro-statistics, radio astronomy and spectroscopy [21].
- RIT offers tracks in astrophysics, computational and gravitational astrophysics (including numerical relativity) and astronomical instrumentation [17].
- Nested-sampling Bayesian retrievals and simulation-based inference appear in current exoplanet work [58].
- LSST has run a data science fellowship for graduate students to teach big-data skills [53].

### Is the master's a terminal degree, a PhD bridge, or skipped?

In US astronomy it is most often skipped or earned en route. A standalone master's is mainly for record repair, pivoting in from another field, or an international route; paying for a generic terminal MS to reach a funded PhD is rarely the efficient path.

## PhD and Research (Years ~8+)

### What training looks like

- **Duration and funding.** Harvard: five to six years for nearly all students, funding guaranteed for six [15]. Berkeley: six years normative [22]. RIT: four to five years, seven allowed after the first qualifying attempt [17]. Vanderbilt offers a five-year support package and ProFellow lists guaranteed funding at several programs [16, 25].
- **Coursework.** UCSD: 10 graduate courses (38 units) completed by the end of year two, plus at least two quarters of directed studies before the qualifying exam [24]. Vanderbilt: five core courses and 72 total credit hours [23]. Columbia: five required courses plus three electives [18].
- **Exams.** Columbia replaces a single qualifying exam with research exams at the end of the first and second year and a dissertation proposal in the first semester of year three [18]. Harvard requires its initial research project and exam by the end of year three [15]. RIT's qualifying exam is a defended master's-level research project by the start of year three [17]. Chicago and Johns Hopkins describe a qualifying exam or thesis topic by year three [16].
- **Teaching.** Vanderbilt requires at least two semesters of a teaching practicum before the qualifying exam; students typically teach four to six semesters at about 15 hours a week [23].
- **Advisor and committee.** Columbia assigns a three-member faculty committee [18]; RIT appoints a committee after the qualifying exam [17].

### Outcomes (AIP, classes of 2018-20; about 162 PhDs a year at 45 departments; 65% response) [34]

- About two-thirds accepted a postdoc, about one-quarter accepted potentially permanent jobs, 5% took other temporary positions, and 3% were unemployed and seeking work.
- Non-US citizens were more likely to take postdocs (80%) than US citizens (63%); US citizens were more likely to take permanent jobs (30% versus 15%).
- 79% of postdocs were at colleges or universities; only 21% of permanent positions were in academia. Government held about a tenth of positions and "other" sectors (nonprofits, museums) about 9%.
- Most common fields for permanent positions: data science or computer software; over a quarter worked in astronomy or physics; about a fifth in engineering or computer hardware.
- Median starting salaries: $62,500 (academic postdocs), $67,000 (government postdocs), $120,000 (private-sector permanent positions, range $47,000-$210,000).
- About 17% left the US after graduation, mostly for postdocs abroad.
- Long-run academic outcomes: a study of 1,063 astronomers from 28 US programs over 13 graduating years found about 65% reached long-term employment in astronomy or closely related academic disciplines, a definition that includes research staff as well as faculty [36].
- Tenure-track rates: one peer-reviewed estimate puts physics at 21% holding a tenure-track position 5-6 years after the PhD (chemistry 23%, biology 14%) [37]. Across STEM, the share with a tenure-track job within five years fell from 27.0% (1993) to 17.7% (2015) [38].
- Timing: among 245 astronomers hired into tenure-track jobs (2010-11 through 2016-17 cycles), the average time from PhD to hire was 4.9 years (4.2 for women, 5.3 for men); PhDs were awarded at roughly three times the rate of tenure-track openings [35].

### Research frontiers (current as of November 2026)

- **Exoplanets and atmospheres.** More than 6,000 confirmed planets; JWST routinely takes transmission spectra with precision approaching tens of parts per million per bin; ESA's Ariel (launch scheduled for 2029) will survey about 1,000 transiting planets [58]. Exoplanets and JWST were among the most common keywords in 2025 astrophysics papers [57].
- **Gravitational waves and multimessenger astronomy.** The LIGO-Virgo-KAGRA O4 run resumed in June 2025 and logged its 200th detection, with multiple events a week (secondary source) [55]. The FY2026 NSF request proposed closing one LIGO site [67]; the final FY2026 outcome for LIGO was not verified here.
- **Time-domain astronomy.** Rubin released first images in June 2025 (3.2-gigapixel camera) [55]; it issued its first alerts on 2026-02-24 (800,000 that night) and is expected to produce up to about 7 million alerts per night, distributed to seven full-stream community brokers [59]. LSST was due to begin later in 2026 [59].
- **Cosmology, dark matter and dark energy.** Euclid (launched July 2023) released DR1-Foundation on 2026-11-12: about 1,900 square degrees (roughly 14% of the survey), 1.7 million GB, more than a billion galaxies and other objects; full DR1 is planned for mid-2027 [61]. NASA's Roman Space Telescope launched on 2026-08-30 on a Falcon Heavy, about eight months ahead of its commitment date [60].
- **Galaxy formation and the early universe.** JWST spectroscopically confirmed luminous galaxies about 300 million years after the Big Bang, more common than pre-JWST models expected, and not explained by black-hole accretion alone [62]. The highest confirmed redshift is z = 14.44 [62]. Claims of broken cosmology have softened; researchers favor astrophysical explanations such as higher star-formation efficiency, bursty star formation or a different initial mass function [62].
- **Black holes and high-energy astrophysics.** Black holes and supermassive black holes are among the top 25 keywords in 2025 astrophysics papers [57]. Chandra (X-ray) and Fermi (gamma-ray) are named for defunding in the White House requests [63].
- **Star and planet formation.** JWST and Hubble imaging of protostars such as IRAS 04302+2247 was a 2025 highlight [56]; Berkeley lists star formation and stellar evolution among its research areas [22].
- **Giant telescopes.** In 2025 the GMT was about 40% complete (25.4 m) and the ELT about 60% complete (39 m, first light about 2028) [55]. The FY2026 NSF request backed only one US giant telescope; Senate language later directed support for two [67]. These timelines are dated 2025 and were not refreshed.

## Tools and AI

- **Standard tools.** Python with NumPy, SciPy, Matplotlib, Pandas, Jupyter and astropy; SQL and Spark for industry-scale data; Unix, Git and remote servers for research computing [8, 10, 11].
- **Where AI and ML fit.** ML galaxy-morphology classifiers reportedly match human experts on tens of thousands of training images [55]. Neural posterior estimation, flow-matching posterior estimation and amortized networks (such as FASTER) cut atmospheric-retrieval costs that otherwise run to hundreds of CPU-hours per spectrum [58]. Rubin's alert brokers (ALeRCE, AMPEL, Lasair, Pitt-Google and others) ingest and classify the full alert stream [59].
- **Honest practitioner view.** The sources describe ML as the natural response to extreme data volume, not as a replacement for physical modeling. Astronomy-specific practitioner opinion on AI hype was thin in the sources retrieved; the roadmap's framing (an accelerant for scale problems, with modeling and interpretation remaining human) is a synthesis, not a survey result.

## Career Paths

Salary figures are US figures. BLS data are May 2025 unless noted. Aggregator figures are labeled as such.

### Anchor data

BLS: astronomers' median annual wage was $128,820 in May 2025 (10th percentile below $78,010; 90th percentile above $195,190); physicists' median was $172,250. Astronomers held about 2,400 jobs in 2025 (employment projections base, which includes the self-employed); the wage survey counts 2,120 wage-and-salary astronomers with a mean of $132,920. Industries employing astronomers: research and development 47%, federal government 21%, state colleges and universities 16%, private colleges and universities 9%, self-employed 6%. Median wages by industry: federal government $174,120; R&D $127,290; state colleges $102,390; private colleges $102,330 [39, 40]. Locations employing the most astronomers and physicists: Hawaii County, the Pasadena area, and Middlesex County (Cambridge), Massachusetts [41].

### Path 1: Academic research (professor, research staff)

- **Titles.** Graduate researcher, postdoc, assistant professor, associate professor, full professor, staff astronomer.
- **Reality.** Extremely competitive. About two-thirds of new PhDs take a postdoc [34]; PhDs outnumber tenure-track openings roughly 3 to 1 and the average gap from PhD to hire is about 5 years [35]. Physics-wide estimates of permanent academic outcomes range from about 10% to 21% [37]; the 28-program astronomy study found about 65% in long-term astronomy or closely related academic jobs, including research staff [36]. BLS counts about 2,400 astronomers [39].
- **Salary.** Postdoc medians $62,500 (academia) and $67,000 (government), classes of 2018-20 [34]. Astronomers at colleges and universities: median about $102,000 [39]. Full-professor averages across all fields in 2025-26: $172,101 (men) and $150,245 (women) [46].
- **Source.** [34, 35, 36, 37, 39, 46].

### Path 2: NASA, observatory and national-lab research

- **Titles.** Research scientist, instrument scientist, mission scientist, staff scientist.
- **Reality.** BLS: 21% of astronomers work for the federal government and 47% in R&D services (which includes federally funded labs) [39]. A PhD is typically required [39]; some federal roles require US citizenship and a clearance [39]. Exposed to federal budget swings; BLS notes that the federal budget may directly affect employment growth [39].
- **Salary.** Federal-government astronomers: median $174,120; R&D-sector astronomers: median $127,290 [39]. Aggregator guides to the 2026 GS scale put GS-13 and GS-14 research astrophysicists at roughly $119,000-$184,000 with locality, and JPL research scientists at about $95,000-$170,000 [47]. A 2020 USAJOBS posting for a GS-13/14 astronomer listed $102,663-$157,709 [48].
- **Source.** [39, 47, 48].

### Path 3: Data scientist and ML engineer

- **Titles.** Data scientist, ML engineer, senior or staff data scientist, data science manager.
- **Reality.** Data science or computer software was the most common field for new astronomy PhDs in permanent jobs [34]. Industry has courted astronomers for this for years [51], and practitioners advise learning Python, SQL and ML basics [11, 51]. Practitioners also report the field is competitive and that experience can matter more than additional degrees (2013 blog, anecdotal) [52].
- **Salary.** BLS data scientists: median $120,230; 10th percentile below $67,240; 90th above $199,130; employment projected to grow 35% over 2025-35 [42]. New astronomy PhDs in private-sector permanent jobs: median start $120,000, range $47,000-$210,000, with the highest pay for data scientists and engineers [34].
- **Source.** [11, 34, 42, 51, 52].

### Path 4: Quantitative finance

- **Titles.** Quantitative researcher, quant analyst, quant trader, quant developer.
- **Reality.** AIP data summarized by UMN list "quantitative researcher" among typical data-science job titles for astronomy PhDs [9]. Firms post PhD-level roles open to physics PhDs [49]. A QuantNet thread (anecdotal) reports firms wanting solid ML and data-science skills, not just math, and a PhD from a related field struggling to get interviews [50]. Live postings cluster in New York, Chicago, London, Philadelphia and Miami [49].
- **Salary.** Posted new-grad PhD base pay: $300,000 (Jane Street, SIG), $225,000-$300,000 (Citadel and Citadel Securities, plus discretionary bonus), $200,000-$220,000 (Two Sigma) [49]. Candidate-reported first-year total compensation at top firms is about $250,000-$450,000 and about $150,000-$250,000 in the broader market (self-reported, not verified) [49].
- **Source.** [9, 49, 50].

### Path 5: Aerospace and instrumentation

- **Titles.** Optical engineer, detector scientist, systems engineer, payload scientist.
- **Reality.** BLS: aerospace engineers work mostly in aerospace product and parts manufacturing (37%), engineering services (15%) and the federal government (15%), per the 2024 employment base; a secondary 2025 summary shows 38%, 16% and 15%. Defense-related projects may require a security clearance [44]. Instrumentation is a formal PhD track at RIT [17] and a core strength at UF [6].
- **Salary.** BLS aerospace engineers: median $134,960 (May 2025); one secondary summary gives a 10th percentile of $86,700 and a 90th of $205,890 [44]. Astronomers and physicists in aircraft and parts manufacturing averaged about $230,000 in 2024 (Data USA) [41].
- **Source.** [6, 17, 41, 44].

### Path 6: Scientific software and research computing

- **Titles.** Research software engineer, pipeline developer, HPC engineer, scientific software engineer.
- **Reality.** Rubin's alert stream alone is expected to reach millions of alerts per night and goes to community brokers built by science teams [59]. AIP lists software among the common fields for astronomy PhDs in permanent jobs [34], and astronomy PhDs regularly report doing programming [34]. BLS notes developers need a strong programming background [43].
- **Salary.** BLS software developers: median $135,980; 10th percentile below $82,460; 90th above $214,670 [43].
- **Source.** [34, 43, 59].

### Path 7: Science communication and education

- **Titles.** Planetarium educator, science writer, museum educator, outreach lead.
- **Reality.** AIP finds about 9% of new astronomy PhDs work in "other" sectors such as nonprofits and museums [34]. BLS (2024 employment data): 63% of writers and authors are self-employed and some work part time [45].
- **Salary.** BLS writers and authors: median $76,910 (May 2025) [45]. AAAS Mass Media Science and Engineering Fellowship: a $10,000 stipend for a 10-week newsroom placement [54]. Pay for planetarium and museum educator roles was not separately sourced.
- **Source.** [34, 45, 54].

### Path 8: Science policy and program management

- **Titles.** AAAS policy fellow, program officer, policy analyst, technical program manager.
- **Reality.** The AAAS Science and Technology Policy Fellowships place scientists in congressional offices and executive-branch agencies for a year; the newer Pathways to Policy track places fellows at nonprofits, think tanks and companies and requires US citizenship [54].
- **Salary.** Pathways to Policy stipends start at $85,000 with locality [54]; an aggregator lists $101,401-$131,826 for the 12-month STPF stipend [54]; a university funding page lists $89,000 [54].
- **Source.** [54].

## Uncertainties and Regional Variation

- **US focus.** Salaries, funding programs (GRFP, FINESST, REU) and BLS data are US-specific. The master's route differs sharply in Europe (a master's is the norm before a PhD) and the UK (three-year PhDs, funding often limited to UK residents) [30, 31].
- **Tenure-track rates are a range, not a statistic.** The 10-21% figure is physics-wide and comes from a peer-reviewed estimate plus older IOP and NSF analyses [37]; the astronomy-specific 65% figure [36] counts research staff and comes from a sample of 28 mostly strong programs, so the two are not directly comparable.
- **AIP outcome data are older.** The PhD outcome and salary figures are for the classes of 2018-20 and the bachelor's figures for 2014-16 [9, 34]; current salaries are likely higher.
- **BLS counts differ by method.** 2,400 (employment projections, includes self-employed) versus 2,120 (wage survey) astronomers [39, 40].
- **Aggregator and self-reported pay.** NASA and JPL pay comes from aggregator guides citing the GS scale, not OPM tables directly [47]. Quant compensation is partly job postings and partly candidate-reported figures [49]. AAAS stipends differ across sources [54].
- **Stipends come from different years.** The Alabama figures are undated, Vanderbilt's are 2024-25 and Columbia's 2025-26 [19, 25, 26]. Leiden's tuition figure has no stated year [32].
- **Claims carried over from the physics research file, not re-verified for astronomy:** the "weeder" reputation of upper-division E&M, quantum and mechanics, the Griffiths-to-Jackson transition, specific textbook names, and LaTeX and error-analysis emphasis.
- **Secondary sources for frontier claims.** O4 detection counts, Rubin's first-image details, GMT and ELT progress, and ML galaxy-classification accuracy come from an aggregator article [55]. Telescope timelines are dated 2025.
- **The budget picture is moving.** The Senate FY2027 draft was published on 2026-11-13 with a December 11 funding deadline [65]; nothing is final. The final FY2026 outcome for specific items (for example LIGO and US-ELT) was not verified.
- **Practitioner opinion on AI in astronomy** was thin in the sources; see Tools and AI.
- **Source dating.** Sources retrieved in the first pass are dated 2026-11-22 based on the artifact's creation date in the repository.

## Sources

Accessed 2026-11-22 unless marked 2026-11-23.

1. Princeton Astrophysical Sciences, major requirements: https://web.astro.princeton.edu/academic/undergraduate-program/major-requirements
2. UC San Diego catalog, Astronomy and Astrophysics: https://catalog.ucsd.edu/curric/ASTR-ug.html
3. Ohio State Astronomy major: https://astronomy.osu.edu/undergraduates/major
4. Cornell Astronomy undergraduate: https://astro.cornell.edu/undergraduate
5. Yale catalog, Astronomy: https://catalog.yale.edu/ycps/subjects-of-instruction/astronomy/
6. University of Florida catalog, Astrophysics BS: https://catalog.ufl.edu/UGRD/colleges-schools/UGLAS/ATY_BA_ASP_BS/ASP_BS/
7. University of Minnesota MIfA degree requirements: https://cse.umn.edu/mifa/undergrad/degree
8. University of Washington Astronomy undergraduate program: https://astro.washington.edu/undergraduate-program
9. AIP, Astronomy degree recipients one year after degree (classes of 2014-16): https://www.aip.org/statistics/astronomy-degree-recipients-one-year-after-degree (accessed 2026-11-22); UMN career statistics summary of AIP data: https://spa-cab.umn.edu/career-statistics/astronomy-degrees
10. IOP, Astronomical Python (2024): https://iopscience.iop.org/book/mono/978-0-7503-5147-8
11. Heads or Tails blog, Astronomy to Data Science (2019): https://heads0rtai1s.github.io/2019/09/19/first-six-months/
12. REU and observatory programs (all accessed 2026-11-23): https://www.sas.rochester.edu/pas/undergraduate/reu/index.html ; https://inside.tamuc.edu/academics/colleges/scienceEngineeringAgriculture/departments/physicsAstronomy/Physics-REU/default.aspx ; https://pa.as.uky.edu/summer-reu-program-research-projects ; https://student.ifa.hawaii.edu/reu/ ; https://ciera.northwestern.edu/?p=10120 ; https://astro.ufl.edu/reu/ ; https://curf.upenn.edu/content/national-radio-astronomy-summer-research-assistantships ; https://www.uwyo.edu/physics/reu-info.html
13. AAS winter meeting (all accessed 2026-11-23): https://ciera.northwestern.edu/2025/02/03/reu-students-present-at-245th-aas-jessica-cotturone-wins-chambliss/ ; https://science.nrao.edu/opportunities/student-programs/NRAOstudents_aas ; https://www-cdn.american.edu/cas/news/student-awards-national-astronomy-conference.cfm
14. GRE policies (all accessed 2026-11-23): https://www.bu.edu/astronomy/graduate/admissions/faq ; https://astro.berkeley.edu/graduate/how-apply ; https://astronomy.utexas.edu/academics/graduate-program/prospective-student-information/admissions-faqs ; https://physics.northwestern.edu/graduate/doctoral-program/admissions/index.html ; https://www.astro.wisc.edu/graduate-program/prospective-students ; https://as.vanderbilt.edu/physics-astronomy/phd-astrophysics-admissions/ ; https://astrophysics.uchicago.edu/academics/graduate-programs/how-to-apply/ ; https://astronomy.osu.edu/grad/prospective-students/applying ; https://www.pa.ucla.edu/graduate-students.html
15. Harvard Astronomy PhD requirements: https://astronomy.fas.harvard.edu/requirements
16. ProFellow, fully funded astronomy PhD programs (page dated 2025-02-05): https://www.profellow.com/fellowships/fully-funded-phd-programs-in-astronomy-and-astrophysics/
17. RIT Astrophysical Sciences and Technology PhD: https://www.rit.edu/study/astrophysical-sciences-and-technology-phd
18. Columbia Astronomy graduate degree requirements: https://www.astro.columbia.edu/content/graduate-degree-requirements
19. University of Alabama Physics and Astronomy financial support (undated): https://physics.ua.edu/graduate-program/financial-support/
20. University of Chicago Astronomy and Astrophysics graduate programs: https://astrophysics.uchicago.edu/academics/graduate-programs/
21. Arizona State University Astrophysics PhD: https://degrees.apps.asu.edu/masters-phd/major/ASU00/LAASTPHPHD/astrophysics-phd
22. UC Berkeley Graduate Division, Astrophysics PhD (page dated 2025-08-20): https://grad.berkeley.edu/program/astrophysics/
23. Vanderbilt Astrophysics PhD requirements guide: https://as.vanderbilt.edu/physics-astronomy/astrophysics-phd-guide/ ; https://as.vanderbilt.edu/physics-astronomy/phd-in-astrophysics-degree-requirements/
24. UCSD Astronomy graduate courses: https://astro.ucsd.edu/grad/courses/index.html
25. Vanderbilt Physics and Astronomy PhD financial aid (accessed 2026-11-23): https://as.vanderbilt.edu/physics-astronomy/phd-financial-aid/
26. Columbia Astronomy graduate handbook, fall 2025 (accessed 2026-11-23): https://www.astro.columbia.edu/sites/www.astro.columbia.edu/files/content/docs/graduate-handbook.pdf
27. AIP Observer, Graduate programs 101 and Master's and professional degree programs (accessed 2026-11-23): https://students.aip.org/observer/graduate-programs-101 ; https://students.aip.org/observer/masters-and-professional-degree-programs
28. Master's pages (all accessed 2026-11-23): https://www.bu.edu/astronomy/academics/graduate/ma-in-astronomy ; https://astronomy.utexas.edu/academics/graduate-program/prospective-student-information/admissions-faqs ; https://guide.wisc.edu/graduate/astronomy/astronomy-ms/ ; https://catalog.umass.edu/gradbulletin/2019-2020/Page16110.html ; https://nmsu.edu/degree-programs/graduate/astronomy.html ; https://www2.ifa.hawaii.edu/gradprog/ms_degree.shtml
29. arXiv 1909.02103, terminal master's degrees in physics and astronomy (accessed 2026-11-23): https://web3.arxiv.org/pdf/1909.02103
30. AstroBetter, Masters and bridge programs (accessed 2026-11-23): https://astrobetter.com/wiki/Masters+Bridge+Programs
31. Astrobites, How to apply for grad school in Europe (2014; accessed 2026-11-23): https://astrobites.org/2014/06/13/how-to-apply-for-grad-school-in-europe/
32. StudyinNL, Leiden Astronomy MSc (accessed 2026-11-23): https://www.studyinnl.org/dutch-education/studies/astronomy-349-leiden-university
33. University of Groningen MSc Astronomy (accessed 2026-11-23): https://www.rug.nl/fse/mscastro ; University of Amsterdam: https://www.uva.nl/en/masters/masters-programmes/astronomy-and-astrophysics
34. AIP, New astronomy PhDs: what comes next (published 2023-01-25, modified 2026-03-06; accessed 2026-11-23): https://www.aip.org/statistics/new-astronomy-phds-what-comes-next
35. Flaherty, The leaky pipeline for postdocs (accessed 2026-11-23): https://arxiv.org/abs/1810.01511
36. Perley, Gender and the career outcomes of PhD astronomers in the US: https://arxiv.org/pdf/1903.08195
37. Tregellas et al., Predicting academic career outcomes by predoctoral publication record, PeerJ 2018: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174868/
38. Astro2020 APC white paper, "Mind the gap": https://arxiv.org/pdf/1904.04311
39. BLS Occupational Outlook Handbook, Physicists and Astronomers (page modified 2026-10-29; accessed 2026-11-23): https://www.bls.gov/ooh/life-physical-and-social-science/physicists-and-astronomers.htm
40. BLS OEWS national table, May 2025: https://www.bls.gov/news.release/ocwage.t01.htm
41. Data USA, Astronomers and physicists: https://datausa.io/profile/soc/astronomers-physicists
42. BLS, Data Scientists (page modified 2026-08-27; accessed 2026-11-23): https://www.bls.gov/ooh/math/data-scientists.htm
43. BLS, Software Developers, Quality Assurance Analysts, and Testers (accessed 2026-11-23): https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm
44. BLS, Aerospace Engineers (accessed 2026-11-23): https://www.bls.gov/ooh/architecture-and-engineering/aerospace-engineers.htm ; secondary percentile summary: https://www.teamblind.com/news/see-how-aerospace-engineer-salaries-vary-by-industry-experience-and-location-wit
45. BLS, Writers and Authors (accessed 2026-11-23): https://www.bls.gov/ooh/media-and-communication/writers-and-authors.htm
46. AAUP, Annual Report on the Economic Status of the Profession, 2025-26 (published June 2026; accessed 2026-11-23): https://www.aaup.org/reports-publications/aaup-policies-reports/topical-reports/annual-report-economic-status-profession-25-26
47. Zero G Talent NASA pay guides (aggregator; accessed 2026-11-23): https://zerogtalent.com/blog/astrophysics-nasa-salary-2026 ; https://zerogtalent.com/blog/salary-for-nasa-scientist-2026 ; https://zerogtalent.com/blog/how-much-do-nasa-workers-make-2026
48. USAJOBS posting, GS-13/14 astronomer (2020; accessed 2026-11-23): https://www.usajobs.gov/job/584375800
49. Quant pay (all accessed 2026-11-23): https://quantvault.org/two-sigma-quant-salary.html ; https://quantvault.org/quant-researcher-salary.html ; https://www.tradermath.org/salaries/quant-researcher ; https://careers-sig.icims.com/jobs/9436/quantitative-researcher-%e2%80%93-phd%3a-2026/job ; https://simplify.jobs/p/6a5a374d-834e-4bb6-992d-4cc74f3f8e8e/Quantitative-Researcher--PhD-Graduate
50. QuantNet, Transition from PhD astronomy to quant (2022): https://quantnet.com/threads/transition-from-phd-astronomy-to-quant.52266/
51. Nature Careers podcast, physics to data science (2019): https://www.nature.com/articles/d41586-019-02408-8
52. Women in Astronomy blog, Astronomer to data scientist (2013): https://womeninastronomy.blogspot.com/2013/01/datascience.html
53. Astrobites, Alternative careers: leveraging your astronomy degree for data science (2016): https://astrobites.org/2016/06/01/alternative-careers-leveraging-your-astronomy-degree-for-data-science/
54. AAAS fellowships (all accessed 2026-11-23): https://www.aaas.org/group/109 ; https://atomgrants.com/grant/science-technology-policy-fellowships-aaas ; https://seas.umich.edu/student-services/financial-aid/funding/american-association-advancement-science-aaas-science-and ; https://casrai.org/guides/aaas-mass-media-fellowship
55. ts2.tech, Major astronomy news in June 2025 (secondary): https://ts2.tech/en/major-astronomy-news-in-june-2025-webbs-exoplanet-discovery-rubins-first-images-space-missions-more/
56. AAS Nova, Looking back on astronomy in 2025: https://aasnova.org/2025/12/31/looking-back-on-astronomy-in-2025-with-aas-nova/
57. arXiv, Astrophysics Wrapped 2025 (2026-02): https://arxiv.org/html/2602.12303v1
58. arXiv, Machine learning for exoplanet detection and characterization with JWST and Ariel: https://arxiv.org/pdf/2606.23766
59. Rubin Observatory alerts (all accessed 2026-11-23): https://rubinobservatory.org/explore/how-rubin-works/alerts ; https://rubinobservatory.org:443/for-scientists/data-products/alerts-and-brokers ; https://news.stanford.edu/stories/2026/02/rubin-observatory-real-time-alerts-astronomical-events
60. NASA, Roman Space Telescope launch (accessed 2026-11-23): https://science.nasa.gov/?p=1225642 ; https://science.nasa.gov/mission/roman-space-telescope/roman-launch-countdown/
61. Euclid DR1-Foundation (all accessed 2026-11-23): https://physicsworld.com/a/esas-euclid-mission-unveils-treasure-trove-of-cosmic-data/ ; https://www.cosmos.esa.int/web/euclid/dr1-timeline ; https://www.ucl.ac.uk/mathematical-physical-sciences/ucl-department-space-and-climate-physics/euclid-lays-foundation-best-ever-3d-map-universe
62. JWST early galaxies (all accessed 2026-11-23): https://arxiv.org/pdf/2405.18485 ; https://www.scientificamerican.com/article/jwsts-puzzling-early-galaxies-dont-break-cosmology-but-they-do-bend-astrophysics/ ; https://www.quantamagazine.org/the-beautiful-confusion-of-the-first-billion-years-comes-into-view-20241009/ ; https://arxiv.org/pdf/2507.20606
63. FY2026 President's budget request: https://astrobites.org/2025/06/02/budget-cuts-threaten-astronomy/ ; https://aas.org/posts/news/2025/06/fy26-presidents-budget-request
64. FY2026 final appropriations (all accessed 2026-11-23): https://www.commerce.senate.gov/press/dem/release/science-survives-existential-threat-from-trump-budget-as-senate-rejects-gutting-nasa-nsf-nist/ ; https://ofr.harvard.edu/news/2026/01/congress-moves-finalize-fy26-appropriations ; https://thebridge.agu.org/2026/02/05/science-funding-for-fy26-secured/
65. FY2027 request and appropriations: https://aas.org/posts/news/2026/04/fy27-presidents-budget-request-nasa-nsf-and-doe-details ; https://astrobites.org/2026/04/16/budget-request-fy2027/ ; https://aas.org/posts/news/2026/05/house-fy27-cjs-report-nasa-nsf-and-doe-details (accessed 2026-11-23) ; https://www.aip.org/fyi/senate-science-funding-proposals-revealed (published 2026-11-13; accessed 2026-11-23)
66. AAS one-pager on astronomical sciences funding (September 2026; accessed 2026-11-23): https://aas.org/sites/default/files/2026-09/OnePager_AAS_AAPT.pdf
67. Giant telescope funding: https://www.science.org/content/article/final-nsf-budget-proposal-jettisons-one-giant-telescope-amid-savage-agencywide-cuts ; https://spacenews.com/as-shutdown-continues-science-community-keeps-focus-on-long-term-budget-concerns/
