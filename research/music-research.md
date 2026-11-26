# Music: Research Notes for the Field Roadmap

**Field:** Music, the US undergraduate path in performance, composition, music education, theory and history, music technology and music business, and the careers it opens (US-centered)

**Compiled:** 2026-11-26

**Companion artifact:** `artifacts/music-roadmap.jsx`

## Provenance note

This file was written before the JSX. Source codes (S1, S2, ...) point to the Sources table at the end, which gives the URL, what each source supports and how it was seen.

"Seen as" values:

- **fetched** means the page or file was downloaded or read in full during this session (BLS pages were first read through a separate fetch worker, because www.bls.gov blocks command-line clients, and were all re-read directly in Chrome on 2026-11-26; see the next paragraph).
- **file** means a CSV or table was downloaded and parsed locally.
- **excerpt** means the page appeared only as a search-result summary. Excerpt-only figures should be rechecked on the page before reuse.

BLS Table 1.2 (employment projections) was first read from the same data on `data.bls.gov` because the `www.bls.gov` table URL returned "Access Denied" to automated requests. On 2026-11-26 the `www.bls.gov` pages were opened in Chrome and checked directly: the two Occupational Outlook Handbook (OOH) pages (both last modified 2026-08-27), Table 1.2 (all twelve occupation rows cited here), Table 1.12 (last modified 2026-10-22, all 937 rows) and the `data.bls.gov` National Employment Matrix for 27-2042. Every BLS figure in this note matched, and no BLS number was changed. The values for graphic designers (253.1 thousand jobs, -1.7%, 16.0 thousand openings, $62,960) matched the figures already published in this repository, which confirms the page is the same vintage.

All sources predate the repository's shared AI-resilience evidence cutoff of 2026-11-25.

## TL;DR

- Music is two labor markets. The salaried one (K-12 and college teaching, church and school ensemble direction, orchestras, studios, industry offices) requires credentials and pays in the BLS $58,000 to $90,000 range. The performing and songwriting one has no entry credential, is about half self-employed, and mostly pays in fragments (S1, S3, S4).
- BLS publishes no annual median wage for musicians and singers, only an hourly one: $47.80 per hour in May 2025 (10th percentile under $20.35, 90th percentile over $132.56). BLS counts 170,400 jobs, 47.8% self-employed, projected change of +0.3% (about 600 jobs) over 2025-35, and 17,400 openings a year, almost all replacement (S1, S3, S4).
- The featured site occupation is music directors and composers (27-2041): $73,710 median, bottom 10% under $39,880, top 10% over $165,760, 51,100 jobs, +1.2% growth and 4,200 annual openings (S2, S3). It was chosen because musicians and singers have no annual wage for the site's earnings dataset. It covers conductors, school and church music directors and composers, not the whole field.
- A bachelor's degree is the entry credential for directing and composing and for teaching, but BLS lists "no formal educational credential" for musicians and singers (S1, S2). Conservatory-style admission usually involves an audition (Curtis, for example, requires a prescreening video and then a live audition) (S41). The BM is a professional degree with at least 65% of credits in music, versus about 45% in a liberal arts BA (S13).
- Music education is the largest salaried destination. BLS does not split K-12 music teachers out of elementary and secondary teachers (median $63,970 for elementary, $72,040 for secondary, both projected roughly flat) (S3). The NFHS claim of a 14% fall in music-education graduates could not be verified (its PDF has no extractable statistic) and has been removed (S17).
- AI pressure is concentrated in production music, stock and library music and cheap commercial audio, not in live performance. Deezer said fully AI-generated tracks were more than 28% of its daily uploads in September 2025 and about 44% in April 2026, yet only about 0.5% of streams in September 2025 and 1% to 3% by April 2026 (S30). A CISAC study commissioned by creator societies projects 24% of music creators' revenue at risk by 2028 and 60% of music-library revenue from generative AI, which is a scenario, not an outcome (S29).
- The two published exposure indicators (Anthropic, Microsoft) rate music occupations low, because they measure text-and-chat task use. They do not measure audio generation tools such as Suno or Eleven Music, so a low score here is weak evidence of safety (S11, S12).

## Key Findings

- **Pay and outlook (BLS, wages May 2025, projections 2025-35).**

| Occupation | Median | Bottom 10% under | Top 10% over | Growth | Jobs, 2025 | Annual openings | Source |
|---|---|---|---|---|---|---|---|
| Music directors and composers (27-2041) | $73,710 | $39,880 | $165,760 | 1.2% | 51,100 | 4,200 | S2, S3 |
| Musicians and singers (27-2042) | $47.80 per hour (no annual figure) | $20.35 per hour | $132.56 per hour | 0.3% | 170,400 | 17,400 | S1, S3 |
| Art, drama and music teachers, postsecondary (25-1121) | $78,620 | not read | not read | 2.2% | 116,900 | 8,000 | S3 |
| Secondary school teachers (25-2031) | $72,040 | not read | not read | -0.2% | 1,087,500 | 63,500 | S3 |
| Elementary school teachers (25-2021) | $63,970 | not read | not read | -0.4% | 1,419,300 | 87,500 | S3 |
| Sound engineering technicians (27-4014) | $73,130 | not read | not read | -3.1% | 15,000 | 1,000 | S3 |
| Audio and video technicians (27-4011) | $58,100 | not read | not read | 3.9% | 87,600 | 6,600 | S3 |
| Agents and business managers of artists, performers and athletes (13-1011) | $82,890 | not read | not read | 9.7% | 26,900 | 2,400 | S3 |
| Therapists, all other (29-1129; includes music therapists) | $77,930 | not read | not read | 12.6% | 56,100 | 3,600 | S3 |

- **Self-employment and part-time work.** 81,300 of 170,400 musician and singer jobs (47.8%) are self-employed, and the OOH says many musicians find only part-time or intermittent work. 35% of jobs are in religious, grantmaking, civic and professional organizations and 12% in performing arts and spectator sports. Music directors and composers are 25% self-employed and 58% in religious and similar organizations (S1, S2, S4).
- **Why growth is flat.** BLS attributes weak demand to declining classical-music attendance and reduced church participation for musicians, and to nonprofit funding strain and school arts cuts for directors (S1, S2). BLS Table 1.12 lists school-system arts-education cuts as the demand factor lowering music directors' employment share in public and private elementary and secondary schools (S5). The OOH job-outlook sections for both occupations do not mention AI (S1, S2).
- **Handbook details read directly (Chrome, 2026-11-26).** Music directors and composers: bachelor's typical, work experience under 5 years, and median wages by employer of $78,760 in performing arts companies and $64,770 in religious, grantmaking, civic and professional organizations; the OOH says directors in public schools may need a teaching license. Musicians and singers: no formal educational credential, long-term on-the-job training, and median hourly wages of $53.16 in religious and similar organizations and $50.56 in performing arts, spectator sports and related industries (S1, S2).
- **Degrees awarded.** US institutions awarded 14,190 bachelor's degrees in music in 2023-24, behind fine arts (23,030) and design and visual communications (19,700), per an NEA analysis of NCES data (S16). That is far more graduates than the 4,200 plus 17,400 annual openings in the two core BLS occupations, and the gap is filled by teaching, other jobs and leaving the field (inference, not a measured placement rate).
- **Income outside BLS.** MIDiA puts the median annual music income of independent artists near $10,180. Xposure's 2025 survey found 13.3% earn their living solely from music and 77.8% earned under $15,000 from music. Ditto's 2026 report found 22% say music is their full-time job. These are self-selected online surveys of independent artists (S36).
- **Streaming concentration.** Spotify's 2026 report says more than 13,800 artists generated at least $100,000 on the platform in 2025 and more than 1,500 generated over $1 million (Spotify's figures, including recording and publishing royalties). The report does not give the total number of artists, so no share can be computed (S35).

## Undergraduate

### Curriculum

- **Two degree types.** The Bachelor of Music (BM) is a professional degree with at least 65% of credits in music, while the Bachelor of Arts in music is a liberal arts degree with about 45% (James Madison University's description; other schools vary) (S13). Music-education and music-therapy tracks are separate professional programs. An older NASM handbook (2017-18) set the baccalaureate minimum at 120 semester hours and four academic years; the current handbook was not read (S15).
- **Theory and aural skills.** Colorado runs a first-year theory and aural-skills pair and a second-year Theory 3 and 4 pair. Boston University requires a six-term theory sequence alongside a four-term aural-skills sequence. Rochester's standard core is five semesters. Placement exams let students test out of some courses but not all (S14).
- **Gates and weeders.** Programs use juries, pre-recital hearings, sophomore proficiency checkpoints and grade floors. UTEP requires a C or better in the fourth theory and aural-skills course plus a Theory Advancement Test before upper-level theory. Stetson requires a C- or better in all aural-training courses to advance to the junior level. Colorado lists a zero-credit sophomore proficiency. The sources show grade floors and checkpoints, not failure rates (S14).
- **Music history and literature, keyboard skills, ensembles and applied lessons** are standard in BM programs. BA programs are more flexible: San Francisco State does not require private lessons for the BA, and Colorado caps BA ensemble credit at 4 hours (S13).
- **Music education.** Licensure-track degrees add pedagogy, methods courses and student teaching. State requirements differ: Alabama requires a minimum of 161 on the Praxis Music: Content Knowledge test (5113) for initial licensure, Connecticut's music endorsement asks for a passing Praxis Music score plus a bachelor's degree, and Maryland requires the PPAT or edTPA from July 1, 2025 (S18). Check the state licensing board for any specific state.
- **Music therapy.** Board certification (MT-BC) is awarded by CBMT after completing all academic and clinical training requirements for an approved music-therapy degree and passing the exam; third-party guides cite 1,200 clinical hours, and the credential runs on a five-year cycle (S19). CBMT's certification, FAQ and examination pages do not state an hours figure, so the 1,200-hour breakdown was not verified against the CBMT handbook.

### Skills

- Primary instrument or voice at a professional level, sight-reading, ear training, score reading, ensemble and chamber collaboration, keyboard fluency, conducting basics, arranging and orchestration, and presenting under pressure (juries, recitals, auditions).
- Transferable skills (self-directed daily practice, delivery to a deadline, collaboration in real time, teaching) are general observations from the program structures above, not measured outcomes.

### Tools and extracurriculars

- Notation software, digital audio workstations (DAWs) and recording gear. Berklee names Pro Tools as the most widely used DAW platform, requires Logic Pro for its on-campus Contemporary Writing and Production major, and lists Ableton Live as common in electronic and live-performance work (S24). Specific notation programs (Finale, Sibelius, Dorico, MuseScore) are standard in practice but were not checked against a source.
- Ensembles (orchestra, band, choir, jazz, chamber, opera and musical theater), summer festivals and fellowships, competitions, studio and church or community work, and early-career gigging. BLS says musicians typically start young with private lessons and school classes and then move to camps, festivals or fellowships (S1).

### Not found

- A national count of full-time orchestral jobs. The League of American Orchestras figures first cited here (2,218 orchestras, 22.5 million attendees) were not in the League's own PDF and have been removed (S37).
- Reliable admission rates. Consultant and forum pages put Curtis under 5% and Juilliard near 7%, but figures conflict and the sources are low authority, so no rate is used in the roadmap (S41).
- A national count of K-12 music teachers.

## Master's

- **Performance and composition (MM).** The Master of Music is applied-focused and requires an audition. Examples: Minnesota's performance MM requires at least 30 credits beyond the bachelor's; another program breaks down 16 credits of applied study, 2 to 10 emphasis credits, 9 credits of theory and musicology and 1 to 2 ensemble credits. Candidates typically finish with a recital (S20).
- **Music education (MM, MME or MA).** An MM option keeps performance as a strong secondary focus. The MA version leans toward research methods, measurement, curriculum and the history and philosophy of music education (S20).
- **Theory, musicology and ethnomusicology (usually MA).** Research- and thesis-heavy; students prepare original research. One musicology MA requires 45 credits. No audition is required except at some programs (S20).
- **Who needs a master's.** BLS lists a master's as the typical entry credential for postsecondary art, drama and music teachers (S3). It is a common step for college teaching, advanced school-music roles and conservatory-track performers, and is not required for most orchestral auditions, studio work, composition or industry roles (inference from the BLS entry requirements; no placement data found).
- **Funding.** The search found assistantship and funding terms only for doctoral programs. Master's funding was not verified. A federal earnings test for graduate programs takes effect from the 2028-29 award year and could affect loan eligibility for low-earning master's programs; no music-specific effect was found (S9 in the Art and Design research; Department of Education fact sheet, `https://www.ed.gov/media/document/fact-sheet-trump-administration-implements-accountability-provisions-of-working-families-tax-cuts-act-june-29-2026-114288.pdf`).

## PhD / Research

- **Two doctoral tracks.** The DMA (Doctor of Musical Arts) combines advanced performance or composition with research and is the usual credential for conservatory and university applied faculty. Students aiming at musicology, theory or ethnomusicology typically enter PhD programs, and music education has its own doctorates (PhD, EdD, DME) (S21).
- **Duration and funding.** Michigan's DMA is three years of full-time study (six terms) beyond the master's, with nearly all DMA students on full-tuition fellowships. Bowling Green funds graduate students for a maximum of four years. Other programs grant tuition remission and a living stipend in exchange for teaching assistantships (S21).
- **Academic market.** One article argues most postsecondary music jobs now ask for a DMA or ABD status, though some still accept a master's. A 2021 analysis of 25 US assistant-professor postings found employers look for qualifications beyond the doctorate itself (S21). The Humanities Indicators' 2024 department survey counted 65 US departments awarding musicology degrees, 33 of them awarding PhDs, with roughly 830 students working toward graduate degrees in musicology as of fall 2023 (S22). No current national placement rate was found.
- **Research frontiers.** Music information retrieval (MIR) and computational musicology (ISMIR 2025 topics include cognitive MIR, computational musicology, digital and systematic musicology, and music heritage), generative audio and symbolic music generation, and critical studies of representation: a 2025 bibliometric study of 2,458 ISMIR papers (2000-2024) found the field remains Western-centric (S23). Ethnomusicology and music-cognition frontiers were not covered by the sources found.
- **AI and computation.** MIR is a sub-field of audio signal processing and machine learning. A 2025 retrospective notes the field's structure changed in 2025 with new categories for music analysis, signal processing, production and separation, and audio and symbolic music generation (S23).

## Tools and AI

- **Standard tools.** DAWs (Pro Tools, Logic Pro, Ableton Live), notation software, sample libraries and virtual instruments, plus an instrument or voice (S24).
- **Producer and artist adoption surveys differ by sample and wording.** Tracklib's 2024 producer survey found 25% use AI in creating music, 73.9% of those mainly for stem separation, 21.2% for generating elements, and 3% for whole songs (S25). LANDR's October 2025 survey of 1,241 of its own users found 87% use AI somewhere in their workflow (S26). Water and Music for Moises (1,525 musicians, late 2025) found 78% of professionals and 60% of hobbyists use AI (S27). Sonarworks' roughly 1,200 respondents (70% experienced professionals) split on whether automation is the likely future (21% "major automation with human oversight", 9% "full automation") (S28). An Oxford Internet Institute survey of about 1,200 musicians in five countries found 89% do not use AI or automation tools when interacting with fans (S36).
- **Platform flooding.** Luminate's year-end report counts 106,000 ISRCs (track identifiers) delivered to streaming services per day in 2025, up 7% from 99,000 in 2024, and 253 million total audio ISRCs. Its AI-artist section charts streams for five named AI artists; the earlier "125 million AI streams" figure is not in the report and has been removed (S31, verified in the PDF text). Deezer's newsroom reports fully AI-generated tracks at more than 28% of daily uploads in September 2025 (S30), about 44% in April 2026 and above 50% of daily uploads at a June 2026 peak. TechCrunch gives 34% for November 2025 (single outlet). Their share of streams was about 0.5% in September 2025 and 1% to 3% by April 2026, so the stream share is rising but remains small. Deezer says the great majority of AI-track streams (85% in its 2026 report) are fraudulent (S30).
- **Licensing and litigation.** Universal and Warner settled with Udio and Warner settled with Suno in late 2025, moving both toward licensed models. Sony remained in litigation against Udio, and Universal and Sony's suits against Suno were still ongoing in the sources found. A report says Suno launched V6 models with Warner, BMG and Believe as industry partners (MBW, September 9, 2026; its training data excludes Universal and Sony); Eleven Music launched with Merlin and Kobalt licensing deals (S32). Single-outlet reports of launch dates should be checked against company announcements.
- **Authorship and rights.** The US Copyright Office (January 29, 2025) says copyrightability requires sufficient human creative input; copyright protects human expression, not purely AI-generated material or material with insufficient human control; the report says prompts do not currently provide sufficient control, while using AI to assist, or including AI material in a human work, does not bar protection (S33, verified in the report text). The 2024 SAG-AFTRA Sound Recordings Code (unverified: the SAG-AFTRA page blocked automated access) requires explicit consent and compensation for digital replicas of artists' voices and defines "artist" and "singer" as human; it does not require consent for AI training (S34). The AFM film and TV agreement is reported to stipulate that musicians are human beings (unverified: the cited article returned 404) (S34).
- **Revenue scenarios.** The CISAC and PMP Strategy study (December 2024) estimates generative AI puts 24% of music creators' (songwriters') revenue at risk in 2028, with generative music about 20% of streaming platform revenue and 60% of library music revenue. It was commissioned by creator societies and is a scenario (S29).
- **Practitioner view.** Producers describe stem separation, corrective EQ and dynamics and other "bread and butter" mixing steps as moving to AI tools; Sonarworks and others suggest session players and studio engineers are the most exposed groups, but the primary report was not opened (S28). Game audio (GameSoundCon 2025, 654 usable responses): AI use is limited, most often for dialogue generation and scripting; outsourcing doubled from 5% of workers in 2016 to 14.7% in 2025 (S38).
- **Official projections.** BLS Table 1.12 cites AI systems as a productivity driver for sound engineering technicians, and school arts cuts (not AI) for music directors. The table (projected 2025–35) has no 27-2042 musicians-and-singers row; the rows run 27-2022, 27-2041, 27-3011. This was checked across all 937 rows of the page, opened in Chrome on 2026-11-26 (S5). The OOH pages for both music occupations do not mention AI (S1, S2).

## Career Paths

Salaries below are BLS May 2025 unless stated. BLS publishes no annual median for musicians and singers, so hourly figures are not annualized because work is part-time and irregular.

### 1. Orchestral and classical performance

- **Titles:** Freelance or substitute player, section member, associate or assistant principal, principal, chamber and opera musician.
- **Reality:** Full-time orchestral jobs are filled by audition, and no count of full-time seats was found. Orchestras range from large professional ensembles to community groups, and employment models run from 52-week salaried to per-service to volunteer. Most classical musicians build a mix of orchestra services, teaching, chamber work and church jobs. BLS expects declining classical attendance to slow growth.
- **Salary:** Major-orchestra minimums are far above BLS medians. Reported contracts: Philadelphia base $176,280 with a tentative deal to $200,008, Baltimore Symphony minimum reaching $101,350 by 2027-28 (the orchestra's own release, September 2025), New York Philharmonic a $205,000 basic minimum for strings (2024 report, phased in over three years). These are top-tier; BLS musicians and singers median is $47.80 per hour and performing arts companies' median is $50.56 per hour (S1, S37).
- **Sources:** S1, S37.

### 2. Popular, jazz and session performance, songwriting and artist careers

- **Titles:** Gigging or independent artist, session or touring musician, songwriter, artist-producer, bandleader.
- **Reality:** No credential gate. Income is portfolio-based and concentrated: Xposure found 13.3% living only from music, MIDiA a median independent-artist income near $10,180 and professional songwriters averaging $25,400 from songwriting. Streaming is the largest income source (about 46%) with live performance at about 22% (MIDiA 2025). Spotify's top-earner counts show a thin high tail (13,800 artists at $100,000 or more in 2025). Deezer reports AI-generated tracks as a rising share of its new uploads (about 44% in April 2026).
- **Salary:** BLS musicians and singers: median $47.80 per hour, bottom 10% under $20.35, top 10% over $132.56 (hourly; no annual figure). Independent-artist medians come from self-selected online surveys (S1, S35, S36).
- **Sources:** S1, S35, S36.

### 3. Composition for media, concert and games

- **Titles:** Orchestrator, copyist or assistant, composer, music director, music editor or supervisor, game audio composer.
- **Reality:** BLS says composers are needed for film, television and commercials and that growth is slow (1%) with about 4,200 openings a year. Commercial and library music is the segment most exposed to generative AI according to the CISAC scenario. Game audio is the other large market: GameSoundCon 2025 found layoffs affecting 16% of salaried employees and outsourcing rising to 14.7%.
- **Salary:** Music directors and composers median $73,710, bottom 10% under $39,880, top 10% over $165,760 (BLS May 2025). Game audio salary survey (North America, mixed audio roles, not composer-specific): average $155,198, median $127,070 (S2, S38).
- **Sources:** S2, S29, S38.

### 4. Music education (K-12)

- **Titles:** General music, choral, band or orchestra teacher, department chair, district fine-arts coordinator.
- **Reality:** The most common salaried destination for BM and BA graduates. It needs state licensure (Praxis and often a teaching-performance assessment). BLS does not separate music teachers from elementary and secondary teachers. Demand is shaped by school budgets: Table 1.12 lists arts-education cuts as lowering music directors' share in schools; UNC Chapel Hill paused its K-12 music-education track amid falling teacher-education enrollment (S5, S17, S18).
- **Salary:** BLS median $63,970 (elementary), $64,370 (middle), $72,040 (secondary), with projected employment changes of -0.4%, -0.4% and -0.2% (S3).
- **Sources:** S3, S5, S17, S18.

### 5. College and conservatory teaching and scholarship

- **Titles:** Adjunct or lecturer, assistant professor (applied, composition, musicology, theory, ethnomusicology or education), associate and full professor, department chair or dean.
- **Reality:** A doctorate (DMA or PhD) or ABD is increasingly expected for full-time posts, and the market is described as competitive. There is no current national placement rate in the sources found. BLS lists a master's as the typical entry credential for art, drama and music teachers, postsecondary, a broad group with +2.2% projected growth.
- **Salary:** Median $78,620 for art, drama and music teachers, postsecondary (BLS May 2025; includes art and drama) (S3, S21).
- **Sources:** S3, S21, S22.

### 6. Recording, production, audio engineering and music technology

- **Titles:** Assistant or studio engineer, recording or mixing engineer, producer, live sound engineer, music technologist or product specialist.
- **Reality:** Digital audio workstations let more artists produce their own recordings, which BLS Table 1.12 gives as a demand-lowering factor in the sound-recording industry, and cites AI systems as a productivity driver for sound engineering technicians. Entry typically needs a postsecondary nondegree award (BLS). Corrective mixing and mastering tasks are moving to AI tools.
- **Salary:** Sound engineering technicians $73,130 (-3.1% growth, 15,000 jobs); audio and video technicians $58,100 (+3.9%, 87,600 jobs) (S3, S5).
- **Sources:** S3, S5, S28.

### 7. Music business and the entertainment industry

- **Titles:** Label or publishing assistant, A&R, licensing and sync coordinator, artist manager or booking agent, tour manager, music supervisor, entertainment attorney (requires a law degree).
- **Reality:** Employers range from labels and publishers to promoters and management firms; programs list these destinations without placement data. BLS agents and business managers of artists, performers and athletes is a narrower slice and projected to grow 9.7% from a small base of 26,900 jobs.
- **Salary:** Agents and business managers of artists, performers and athletes median $82,890 (BLS). One university page lists ZipRecruiter medians (A&R representative $43,000, concert promoter $45,967, tour manager $49,678, artist manager $70,960), which come from an aggregator and are not entry-level specific (S3, S39).
- **Sources:** S3, S39.

### 8. Music therapy and community music

- **Titles:** Music therapist (MT-BC), clinical supervisor or program director, community music or arts-in-health program coordinator.
- **Reality:** Requires an approved degree program, supervised clinical hours and the CBMT exam. BLS has no separate music therapist line; they sit in "therapists, all other", which also includes art therapists. Board certification is voluntary but required in some states for licensure or registries.
- **Salary:** The AMTA 2019 average salary ($54,816) could not be verified (the source URL returns 404) and has been removed. BLS proxies: therapists, all other median $77,930 (+12.6%), recreational therapists $61,960 (+4.8%) (S3, S19, S40).
- **Sources:** S3, S19, S40.

## Uncertainties and Regional Variation

- **No annual wage for the central occupation.** BLS publishes only an hourly median for musicians and singers because work is intermittent. The roadmap does not convert it to a yearly figure.
- **Representative occupation.** The site snapshot uses music directors and composers (27-2041), which covers conductors, school and church directors and composers. It excludes performers, teachers, engineers and business roles. Earnings and exposure for those groups differ.
- **Orchestra pay.** The contract figures come from news excerpts of differing dates and status (one is a tentative deal that still needed ratification). They represent a handful of top orchestras only.
- **Survey bias.** LANDR, Tracklib, Xposure, Ditto, Water and Music, and Sonarworks surveys sample their own users or online communities. Rates differ largely because the definitions and samples differ.
- **Platform statistics move quickly.** Deezer's AI-upload share changed from 28% (September 2025) to 44% (April 2026) and above 50% at a June 2026 peak; its AI stream share moved from 0.5% to 1% to 3% in the same period.
- **Admissions selectivity** came from low-authority consultant pages and is not used.
- **Region.** Degree structures, school-music licensure, church and community-music markets and funding are US-specific. Non-US sources (CISAC, Oxford Internet Institute, Deezer) are global or from other countries and say less about US employment.
- **Music-teaching counts.** No national count of K-12 music teachers or openings was found.
- **BLS Table 1.12** was read in full in Chrome on 2026-11-26 (937 rows; last modified 2026-10-22). It has rows for 27-2022, 27-2041, 27-3011, 27-4011 and 27-4014 and none for 27-2042. Its 27-3011 rows (broadcast announcers, not music) also cite AI-generated voice technology.
- **Master's funding** was not verified.
- **Pages seen only as excerpts** should be rechecked before reuse (see Sources).

## Comparison dataset coverage (new-roadmap check)

Checked on 2026-11-26 against the original sources in `docs/roadmap-metrics.md`. The roadmap's occupation is **music directors and composers (27-2041)** with career ID `music-directors-and-composers`.

| Dataset | Source and row | Outcome |
|---|---|---|
| BLS median wages and employment outlook | Table 1.2, 27-2041: $73,710; 51.1 thousand jobs; +1.2%; 4.2 thousand openings (S3) | Added |
| CareerExplorer career happiness | "Composers" satisfaction page, 4.2 out of 5, top 4% (S7). No page exists for "music director" (404). Musicians (4.1) and singers (4.3) have separate pages | Added with `sourceTitle` Composers (narrower category) |
| NORC General Social Survey 2004-2024 | Census 2010 code 2750 "Musicians, singers, and related workers" has 27 working respondents with a valid SATJOB response (S9) | Unavailable: below 30 respondents, and the category also contains musicians and singers (27-2042), which are outside the featured occupation |
| PayScale high job satisfaction 2013-2015 | "Music Directors and Composers": median pay $46,500, 88% high meaning, 80% high satisfaction (S8). "Musicians and Singers": 83% meaning, 75% satisfaction | Added (exact category match, 80%) |
| ZipRecruiter degree regret 2026 | Surveyed major "Fine Arts, Performing Arts, or Design": 20.7% (S10). No separate music category | Existing value linked: `music` added to the roadmap links of `fine-arts-performing-arts-design` (a broader surveyed category that also covers art, design and game development) |
| Anthropic observed exposure | `job_exposure.csv` row 27-2041: 0.0368 (3.68%). Musicians and singers (27-2042): 0.0 (S11) | Added |
| Microsoft AI applicability | `ai_applicability_scores.csv` row 27-2041: 0.13660 (13.66 points). Musicians and singers: 0.08496 (S12) | Added |

## Sources

| Code | URL | Supports | Seen as |
|---|---|---|---|
| S1 | https://www.bls.gov/ooh/entertainment-and-sports/musicians-and-singers.htm | OOH musicians and singers: $47.80 hourly May 2025, percentiles, 170,400 jobs, 0% outlook, 17,400 openings, 48% self-employed, no credential, outlook text | fetched (worker; re-read in Chrome 2026-11-26) |
| S2 | https://www.bls.gov/ooh/entertainment-and-sports/music-directors-and-composers.htm | OOH music directors and composers: $73,710, percentiles, 51,100 jobs, 1%, 4,200 openings, 25% self-employed, outlook text | fetched (worker; re-read in Chrome 2026-11-26) |
| S3 | https://www.bls.gov/emp/tables/occupational-projections-and-characteristics.htm (first read at https://data.bls.gov/projections/occupationProj) | Table 1.2 rows for all BLS occupations in this file | fetched (data.bls.gov; re-read in Chrome 2026-11-26) |
| S4 | https://data.bls.gov/projections/nationalMatrix?queryParams=27-2042&ioType=o | Musicians and singers employment by class of worker and industry, 2025 | fetched |
| S5 | https://www.bls.gov/emp/tables/factors-affecting-occupational-utilization.htm | Table 1.12 rows for 27-2041, 27-4014, 27-4011 | fetched (worker, partial); re-read in full in Chrome 2026-11-26 |
| S6 | https://www.onetcenter.org/dl_files/database/db_31_0_csv/task_statements.csv and task_ratings.csv | O*NET 31.0 tasks and importance for 27-2041.00 and 27-2042.00 | file |
| S7 | https://www.careerexplorer.com/careers/composer/satisfaction/ ; https://www.careerexplorer.com/careers/musician/satisfaction/ ; https://www.careerexplorer.com/careers/singer/satisfaction/ | Career happiness 4.2, 4.1 and 4.3 out of 5 | fetched |
| S8 | https://www.payscale.com/data-packages/most-and-least-meaningful-jobs/full-list | Music directors and composers 88% meaning, 80% satisfaction | fetched |
| S9 | https://gss.norc.org/get-the-data/stata.html (file `gss7224_r3a.dta`, version 7224.31) | Census code 2750 sample size | file |
| S10 | https://datawrapper.dwcdn.net/2GSs3/1/dataset.csv | ZipRecruiter regret by major | file |
| S11 | https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/01eb1d0ba708f2c26d78c3b42c57776ef1383ab7/labor_market_impacts/job_exposure.csv | Observed exposure rows | file |
| S12 | https://raw.githubusercontent.com/microsoft/working-with-ai/550c00c9d1b054ac78b87da3a26165bace334779/ai_applicability_scores.csv | AI applicability rows | file |
| S13 | https://www.jmu.edu/music/admissions/undergraduate.shtml ; https://music.sfsu.edu/bachelors ; https://music.colostate.edu/ba-music | BM at least 65% music credits, BA about 45%, lessons optional in BA | excerpt |
| S14 | https://www.bu.edu/academics/cfa/programs/school-of-music-undergraduate-curricula/ ; https://catalog.colorado.edu/undergraduate/colleges-schools/music/programs-study/music/music-bachelor-music-bmus ; https://utep.edu/liberalarts/music/resources/student-resources/music-major-test.html ; https://catalog.stetson.edu/undergraduate/music/bachelor-music-music-theory/ | Theory and aural sequences, juries, proficiency checks, grade floors | excerpt |
| S15 | https://sacscoc.shsu.edu/Support%20Docs/10.7/11.%20NASM-Handbook-2017-2018_Credit.pdf | 120 semester hours baseline (2017-18 edition) | excerpt |
| S16 | https://www.arts.gov/sites/default/files/d1-report-202609.pdf | 14,190 music bachelor's degrees in 2023-24 | file (PDF text; 14,190, 23,030 and 19,700 verified) |
| S17 | https://assets.nfhs.org/umbraco/media/7213613/1-building-the-pipeline-encouraging-future-educators.pdf ; https://mediahub.unc.edu/?p=13865 | 14% fall in music-education graduates; UNC pause | UNC page fetched; NFHS PDF downloaded but the 14% figure is not in its text, claim removed |
| S18 | https://southalabama.edu/colleges/music/musiceducationresources.html ; https://portal.ct.gov/sdecertification/knowledge-base/articles/resources/endorsements/endorsement-049 ; https://marylandpublicschools.org/about/Pages/DEE/Certification/testing_info/praxis2.aspx | State music-licensure examples | excerpt |
| S19 | https://www.cbmt.org/candidates/certification/ | MT-BC credential, five-year cycle | fetched (CBMT certification, FAQ and exam pages) |
| S20 | https://www.esm.rochester.edu/admissions/grad/ma/ ; https://cla.umn.edu/music/graduate/degrees/mm-programs/performance ; https://music.uconn.edu/programs/graduate-program-overview/masters-degrees | MM versus MA structure and credits | excerpt |
| S21 | https://smtd.umich.edu/degree/doctor-of-musical-arts-in-piano-pedagogy-performance ; https://www.bgsu.edu/musical-arts/prospective-students/dma/dma-degree ; https://symposium.music.org/index.php/61-1/item/11515-faculty-job-qualifications-vs-dma-curricula-part-i-of-i-equipping-dma-candidates-to-win-tenure-track-jobs-i | DMA length and funding, faculty qualifications | excerpt |
| S22 | https://www.amacad.org/humanities-indicators/musicology-profile | Musicology departments and graduate enrollment | excerpt |
| S23 | https://arxiv.org/html/2511.07205v1 ; https://reference-global.com/article/10.5334/tismir.372 ; https://refworks.reference-global.com/article/10.5334/tismir.265 | MIR frontiers and Western-centric authorship | excerpt |
| S24 | https://online.berklee.edu/takenote/best-daw-digital-audio-workstation/ | DAW usage at Berklee | excerpt |
| S25 | https://www.musicbusinessworldwide.com/25-of-music-producers-are-now-using-ai-survey-says/ | Tracklib producer survey | excerpt |
| S26 | https://www.hypebot.com/new-survey-reveals-how-87-of-artists-really-use-ai/ | LANDR survey, 1,241 respondents | excerpt |
| S27 | https://moises.ai/insights/musician-ai-report-water-and-music | Water and Music for Moises, 1,525 musicians | excerpt |
| S28 | https://www.soundonsound.com/music-business/ai-music-tech-2026 ; https://www.sonarworks.com/blog/research/future-music-production-human-producer-survey-2026 | Sonarworks producer survey | excerpt |
| S29 | https://www.cisac.org/cisacpmp-strategy-ai-study | CISAC and PMP Strategy study (December 2024) | fetched (CISAC release, 2 Dec 2024) |
| S30 | https://www.digitalmusicnews.com/2025/09/11/deezer-ai-tracks-daily-stat/ ; https://engadget.com/entertainment/music/deezer-says-ai-made-songs-make-up-44-percent-of-daily-uploads-163642921.html ; https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/ | Deezer AI upload share and stream share | fetched (DMN, Engadget, TechCrunch, Deezer newsroom) |
| S31 | https://luminatedata.com/reports/yearend-music-industry-report-2025 | New tracks per day, catalog size, AI streams | file (PDF text; 106K ISRCs per day and 253M total ISRCs verified, 125M AI streams not in report) |
| S32 | https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno/ ; https://www.musicbusinessworldwide.com/warner-music-settles-udio-lawsuit-strikes-licensing-deal-with-ai-platform ; https://musicbusinessworldwide.com/suno-v6-ai-music-models-launch-in-partnership-with-wmg-bmg-and-believe ; https://musicbusinessworldwide.com/eleven-music-new-ai-rival-to-suno-launches-with-merlin-kobalt-licensing-deals-in-the-bag | Label settlements and licensed AI models | fetched (MBW and Engadget) |
| S33 | https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf ; https://copyright.gov/newsnet/2025/1060.html | Human authorship requirement | file (PDF text) |
| S34 | https://www.sagaftra.org/sound-recordings-code-2024 ; https://www.aol.com/entertainment/afm-ratifies-deal-ai-protections-155448090.html | SAG-AFTRA and AFM AI provisions | unverified: SAG-AFTRA page blocked (403), AFM article 404 |
| S35 | https://newsroom.spotify.com/loud-and-clear/ | Spotify Loud and Clear 2026 (2025 data) | fetched (Spotify newsroom summary, 11 Mar 2026) |
| S36 | https://www.midiaresearch.com/blog/independent-artists-the-age-of-empowerment ; https://www.midiaresearch.com/blog/the-music-business-is-splitting-in-two-heres-why-songwriters-are-reinventing-their-role ; https://info.xposuremusic.com/article/music-industry-report-2025 ; https://dittomusic.com/en/independent-music-report-2026 ; https://www.oii.ox.ac.uk/news-events/reports/musicians-at-work-in-the-platform-and-ai-era/ | Independent-artist income and AI-use surveys | excerpt |
| S37 | https://americanorchestras.org/wp-content/uploads/2026/07/League-at-a-Glance.pdf ; https://www.inquirer.com/arts/philadelphia-orchestra-musicians-contract-vote-20260914.html ; https://www.bsomusic.org/?p=30366 ; https://slippedisc.com/2024/09/just-in-ny-phil-players-win-205k-basic-pay-deal | Orchestra counts and contract pay | partial: Philadelphia Inquirer, Baltimore Symphony and Slipped Disc fetched; League PDF downloaded and lacks the orchestra counts, claim removed |
| S38 | https://www.gamesoundcon.com/post/gamesoundcon-game-audio-industry-survey-2025 | Game audio pay, outsourcing, AI use | fetched (GameSoundCon, 25 Aug 2025) |
| S39 | https://iep.jsu.edu/degrees/undergraduate/arts-humanities-sciences/music/music-music-industry.html ; https://hofstra.edu/undergraduate/music-business.html | Music-business destinations; ZipRecruiter medians (aggregator, low) | excerpt |
| S40 | https://musictherapy.org/assets/1/7/2019WorkforceAnalysis.pdf | AMTA 2019 average salary $54,816 | URL returns 404; claim removed |
| S41 | https://www.phillymag.com/news/2024/05/11/tuba-curtis-institute/ ; https://www.collegevine.com/faq/49889/hardest-music-schools-to-gain-admission | Conservatory selectivity (low authority, not used) | excerpt |
