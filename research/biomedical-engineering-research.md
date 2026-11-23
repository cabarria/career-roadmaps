# The Biomedical Engineering Career Roadmap (USA): Undergraduate to PhD, Stage 1 Research Synthesis

Prepared 2026-11-23. This file is the source of record for `artifacts/biomedical-engineering-roadmap.jsx`. It was written after the artifact was built (the artifact was produced before the research file existed), so it was reconstructed from the original search results and then extended with new fetches for every figure that had no source. Where a figure remains weakly sourced, it is listed under Uncertainties.

## TL;DR

- **BME is a broad bachelor's that rewards specialization.** The BLS median for bioengineers and biomedical engineers is $106,950 (May 2024), with a 10th percentile of $71,860 and a 90th percentile of $165,060. The BME bachelor's is often less directly employable for device jobs than mechanical or electrical engineering, so a hard adjacent skill (FEA, embedded firmware, ML, or deep wet-lab work), early internships, or a graduate degree carry unusual weight.[^1][^2]
- **The master's matters more here than in most engineering fields.** One university source reports master's holders earning about 30% more one year after graduation and about 13% more five years out. Regulatory affairs and clinical engineering exist as professional master's tracks far more than in ME or EE.[^3]
- **The senior-tier gate in device work is regulatory ownership.** A recruiter salary guide describes a roughly $30K mid-to-senior jump that is bridged by being the named technical lead on a cleared FDA submission or owning design controls on a shipped device. Device specialty staff roles reach $190K to $210K, and California, Massachusetts, and Minnesota hold about 40% of employment while paying 12% to 22% above the national median.[^4]
- **AI is expanding the field, but regulated deployment is slow.** The FDA had authorized 1,451 AI-enabled devices by the end of 2025, about 76% of them in radiology.[^5]

## Key Findings

1. **Demand is steady, not explosive.** BLS projects 5% growth from 2024 to 2034 and about 1,300 openings per year, a small occupation. Some secondary sources still quote 7% (an older projection cycle); use the BLS figure.[^1][^2]
2. **The PhD is funded and takes about 6 years.** Case Western's published doctoral statistics show median time to degree of 5.7 to 5.9 years for BME PhD recipients. Programs such as Johns Hopkins support all BME PhD students with tuition, stipend, and health insurance for the duration.[^6][^7]
3. **A PhD is not a general salary booster.** One recruiter guide reports it is roughly neutral on first-job device salary, because four years of industry experience shipping devices often outpaces the premium. It is a genuine asset for research roles, biomaterials, and a few imaging-algorithm teams.[^4]
4. **Regulatory affairs is a stable, structural career.** O*NET-based figures put regulatory affairs specialists at a median of $78,420 and managers at $136,550. The RAC credential adds roughly 8% to 12% on the regulatory and quality track.[^4][^8]
5. **Clinical engineering is a distinct track.** Hospital-based clinical engineers are reported at $75K to $120K, and new-graduate clinical biomedical roles at $58K to $72K. The CCE certification dates from 2002.[^4][^9][^10]
6. **MD-PhD is a long, separate path.** AAMC states most MD-PhD students complete both degrees in 7 to 8 years.[^11]

## Details

### 1. Undergraduate Foundation (Years 1 to 4)

**Conceptual backbone.** ABET-style BME curricula (checked against Marquette, Arkansas, Baylor, UTSA, UMass, North Dakota, Rutgers, and Columbia catalogs) combine engineering math and physics with cell and molecular biology, organic chemistry, and a quantitative physiology sequence. Common core courses: physiology and quantitative physiology, biomechanics, biomaterials, bioinstrumentation, biosignals and systems, biotransport and biothermodynamics, and a two-semester senior capstone design with a clinical or industry sponsor.[^12]

**Weeder courses.** Quantitative physiology, biosignals and systems (shared with EE), biotransport, and organic chemistry are the courses repeatedly described as hardest. The "weeder" labels are student and program-guide consensus, not measured failure rates.[^13]

**Hands-on skills.** MATLAB for biosignals, CAD (SolidWorks), circuit building and bioinstrumentation, wet-lab technique (cell culture, assays, sterile technique), Python for data and ML, design controls documentation, and statistics and experimental design.

**Foundational tools.** MATLAB and Simulink, SolidWorks, Python (NumPy, PyTorch), COMSOL and ANSYS, ImageJ and FIJI, LabVIEW.

**High-value extracurriculars.** Internships and co-ops at device firms (Medtronic, Stryker, Boston Scientific, Abbott), biotech, and hospitals; NSF REUs; BMES; iGEM and design competitions; a hard adjacent skill. Example REU stipends found: $6,000 for a 10-week program (University of Virginia Systems Bioengineering REU) and $6,500 (Washington University mechanobiology program). Stipends vary by site.[^14]

### 2. Master's Stage (Years 5 to 7)

**Program types.** Thesis (research) MS, usually funded through a research assistantship; professional or coursework MS, usually self-funded; regulatory affairs or regulatory science MS; clinical engineering MS.

**Is it necessary?** Not required for many device roles, but in BME it is often strategic. The University of Iowa reports master's holders earn about 30% more one year out and about 13% more at five years, and notes the premium decays with time. This is one university's framing, not a national dataset.[^3]

**Specializations.** Medical devices and instrumentation; tissue engineering and regenerative medicine; biomechanics and rehabilitation; medical imaging; neural engineering; computational and systems biology; biomaterials and drug delivery.[^15]

**Certifications.** RAC (RAPS) for regulatory affairs; CCE (ACCE) for clinical engineering; CQE and Six Sigma for quality.[^8][^9]

**Advanced tools and standards.** ANSYS and ABAQUS for implant FEA, CFD for hemodynamics, PyTorch for imaging, ISO 13485, 21 CFR 820, ISO 14971, and IEC 62304 for software as a medical device.

### 3. PhD / Advanced Research Stage (Years 6 to 12)

**Structure.** Coursework, a qualifying exam (often an NIH-style proposal), candidacy, and a dissertation. Median time to degree is 5.7 to 5.9 years at Case Western's BME program; cohort completion rates in that report range from 56% to 71% across entry cohorts (period labels in the source PDF were unclear).[^6]

**Funding.** Johns Hopkins supports all BME PhD students (tuition, stipend, health and dental insurance) for the duration, with NIH training grants available to US citizens and permanent residents. Boston University lists a $46,350 stipend as of September 2025. The federal NRSA predoctoral stipend for FY2026 is $29,364, the floor for NIH-funded trainees; most programs pay more.[^7][^16][^17]

**Postdocs.** The FY2026 NRSA postdoctoral stipend starts at $63,480 (Level 0) and reaches $77,076 at 7 or more years of experience.[^17]

**MD-PhD.** AAMC states most students complete the dual degrees in 7 to 8 years, organized as roughly two years of medical school, four of graduate study, and two of clinical training.[^11]

**Research frontiers (2025 to 2026).** Organ-on-chip and organoids; 3D bioprinting; neural interfaces and BCI; immunoengineering; drug delivery and nanomedicine; wearable and implantable sensors; AI for imaging and drug discovery; computational modeling and digital twins.[^18] The FDA's April 2025 plan to phase out animal-testing requirements applies to monoclonal antibodies and other drugs, and is a tailwind for organ-chip validation work; it does not remove animal testing across all products.[^19]

### 4. Tools and AI

- **Imaging AI is real and shipping.** FDA's count reached 1,451 AI-enabled devices by end of 2025, with 221 clearances in 2023, 253 in 2024, and 295 in 2025. Radiology accounts for 76% (1,104 devices). GE HealthCare leads with 120 radiology authorizations, followed by Siemens Healthineers (89), Philips (50), and Canon (45). The source cautions the count includes multiple clearances per company across indications.[^5]
- **Honest practitioner view.** IBM sold its Watson Health assets to Francisco Partners in 2022 for roughly $1B, far below IBM's investment; the lesson drawn is that narrow scope, prospective validation, and workflow integration separate winners from hype.[^5]
- **Displacement risk.** One automation-risk tracker rates BME at 26% displacement risk (low); this is a modeled estimate, not a labor-market measurement.[^20]
- **Skill stack at the senior tier.** IEC 62304 plus Python or embedded C plus regulatory fluency is described by one recruiter guide as a scarce combination for software as a medical device.[^4]

### 5. Career Paths

Salary figures below are the ranges shown on each artifact card. Basis and confidence are stated for each.

1. **Medical Device R&D / Product Design.** Titles: R&D Engineer, Design Engineer, Sr. R&D Engineer, Principal Engineer, R&D Director. Reality: designing implants and instruments at Medtronic, Stryker, Boston Scientific, Abbott, Edwards, J&J MedTech, and Intuitive; the mid-to-senior jump of about $30K is gated by a cleared FDA submission or ownership of design controls; staff roles in device specialties reach $190K to $210K; concentrated in CA, MA, and MN. Salary on card: $70K to $210K. Source: KORE1 for the $190K to $210K ceiling, the $30K jump, and the geographic concentration. The $70K entry floor is indicative from salary-aggregator results (Glassdoor, Payscale, Indeed Medtronic pages) and no single exact figure was recorded.[^4][^21]
2. **Regulatory Affairs and Quality.** Titles: Regulatory Affairs Specialist, Quality Engineer, Sr. RA Specialist, RA Manager, Director of Regulatory. Reality: stable, structural demand; RAC adds roughly 8% to 12%. Salary on card: $78K to $150K+. Source: specialist median $78,420 and manager median $136,550 (O*NET figures reported by MHA Online, 2026); the $150K+ upper end is an extrapolation for directors, not a sourced figure.[^8][^4]
3. **Clinical Engineering / HTM.** Titles: Clinical Engineer, Biomedical Engineer (Hospital), HTM Manager, Sr. Clinical Engineer, Director of Clinical Engineering. Reality: hospital-based, separate from device R&D; CCE signals expertise. Salary on card: $58K to $120K. Source: $75K to $120K for clinical engineers (Research.com) combined with $58K to $72K new-graduate clinical biomedical roles (KORE1). The card's "under 8% cross over" claim is from the same recruiter source and is a single-source claim.[^10][^4]
4. **Medical Imaging and Healthcare AI.** Titles: Imaging Engineer, ML Engineer (Medical), Computer Vision Scientist, Sr. Algorithm Engineer, AI Research Scientist. Reality: usually MS or PhD plus Python, PyTorch, and DICOM; roles at GE HealthCare, Siemens, Philips, Viz.ai, Tempus. Salary on card: $100K to $200K+. Source: job-board listings only (Indeed, ZipRecruiter, Glassdoor search pages); no authoritative figure was captured. Treat as indicative.[^5][^22]
5. **Biotech and Pharma.** Titles: Process Engineer, Bioprocess Engineer, Drug Delivery Scientist, Sr. Process Engineer, Principal Scientist. Reality: compensation close to device at senior levels, with biotech process engineering peaking near $175K. Salary on card: $75K to $175K. Source: KORE1 for the $175K peak; the $75K floor is indicative.[^4]
6. **Biomedical Data Science.** Titles: Bioinformatics Analyst, Health Data Scientist, Computational Biologist, Sr. Data Scientist, Principal Data Scientist. Reality: tracks the broader data-science market. Salary on card: $90K to $190K+. Source: not individually sourced in the research pass; indicative only.
7. **Academia and Research.** Titles: PhD Researcher, Postdoc, Research Scientist, Assistant to Full Professor, Lab Director. Reality: competitive; multi-year postdocs are standard. Salary on card (before this update): $55K postdoc to $160K+ tenured. Sourced correction: NRSA Level 0 postdoc is $63,480 (FY2026), and BLS reports engineering teachers (postsecondary, all engineering fields) at a median of $106,910 with a 90th percentile of $200,030 (May 2023).[^17][^23]
8. **Medicine (MD / MD-PhD).** Titles: Pre-Med to Medical Student, Resident, Physician, Physician-Scientist, Attending. Reality: separate long path; MD-PhD takes 7 to 8 years. Salary on card (before this update): $65K resident to $250K+ physician. Sourced correction: AAMC's 2025 survey reports an average PGY-1 stipend of $68,166 (as of July 1, 2025); Resolve's 2026 physician report, summarized by the AMA, gives a national average base salary of $387,000 across specialties.[^24][^25]

## Uncertainties and Regional Variation

- **Provenance.** Most figures in the first pass came from search-result excerpts, not full-page reads. Figures verified from full pages on 2026-11-23: NIH NRSA stipends, AAMC MD-PhD duration, Case Western PhD statistics, AAMC resident pay (via AMA), Resolve physician pay (via AMA), UVA REU stipend, BLS engineering-teacher wages.
- **Growth rate conflict.** BLS says 5% (2024 to 2034). Research.com and some others quote 7%, from an older cycle or different framing. The artifact uses 5%.
- **Geography.** CA, MA, and MN concentrate device employment and pay 12% to 22% above the national median (KORE1). Salary ranges elsewhere will be lower.
- **Unsourced or weakly sourced artifact claims** (flagged, not fabricated): the $70K device entry floor, the imaging-AI range, the biomedical data science range, the $75K biotech floor, and the "under 8% cross over" statistic.
- **Postdoc and faculty pay.** The BLS engineering-teacher wage is for all engineering disciplines and all ranks (May 2023), so it is a loose proxy for BME faculty pay. BME tenured faculty at research universities can earn above the median.
- **US-specific.** All salary, licensure, and FDA content is US-specific.

## Sources

All pages accessed 2026-11-23 unless noted. "Snippet" means the figure was read from a search-result excerpt rather than the full page.

[^1]: U.S. BLS, Occupational Outlook Handbook, Bioengineers and Biomedical Engineers (median $106,950; P10 $71,860; P90 $165,060; 5% growth 2024 to 2034; about 1,300 openings per year): https://www.bls.gov/ooh/architecture-and-engineering/biomedical-engineers.htm
[^2]: Research.com, demand for biomedical engineering graduates (cites 7% growth, older cycle; snippet): https://research.com/advice/is-demand-for-biomedical-engineering-degree-graduates-growing-or-declining
[^3]: University of Iowa, Is a master's degree in biomedical engineering worth it (about 30% higher earnings one year out, 13% at five years; snippet): https://uiowa.edu/explore/biomedical-engineering-degree/is-a-masters-degree-in-biomedical-engineering-worth-it
[^4]: KORE1, Biomedical Engineer Salary Guide (CA/MA/MN about 40% of employment, 12% to 22% above median; about $30K mid-to-senior jump gated by a cleared 510(k); device specialty ceiling $190K to $210K; biotech process peak near $175K; RAC adds 8% to 12%; PhD roughly neutral on first-job device salary; new-grad clinical roles; snippet): https://www.kore1.com/biomedical-engineer-salary-guide/
[^5]: Pinggy, AI medical imaging diagnostics 2026 (1,451 FDA AI-enabled devices by end of 2025; 76% radiology; yearly clearances; manufacturer counts; Watson Health sale; snippet): https://pinggy.io/blog/ai_medical_imaging_diagnostics_2026/
[^6]: Case Western Reserve University, CNGLS 2026 Biomedical Engineering statistics (median time to degree 5.7 to 5.9 years; completion rates 56% to 71%; column labels garbled in the PDF): https://case.edu/gradstudies/sites/default/files/2026-07/CNGLS%202026%20-%20Biomedical%20Engineering.pdf
[^7]: Johns Hopkins University catalogue, Biomedical Engineering PhD (all PhD students supported with tuition, stipend, health and dental insurance; NIH training grants for US citizens and permanent residents; MSTP route; snippet): https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/biomedical-engineering/biomedical-engineering-phd/
[^8]: MHA Online, What is the Regulatory Affairs Certification (RAC) (regulatory affairs specialist median $78,420 and manager median $136,550, attributed to O*NET Online 2026; snippet): https://www.mhaonline.com/faq/what-is-rac-regulatory-affairs-certification and RAPS credential page https://www.raps.org/certify-advance/credentials/rac.html
[^9]: Wikipedia, Clinical engineering (CCE certification began 2002 under ACCE sponsorship; snippet): https://en.wikipedia.org/wiki/Clinical_engineering
[^10]: Research.com, careers with a biomedical engineering degree (clinical engineers $75,000 to $120,000; snippet): https://research.com/advice/what-careers-can-you-pursue-with-a-biomedical-engineering-degree-salary-potential-job-outlook-next-steps
[^11]: AAMC, Education and training in MD-PhD programs (most students finish in 7 to 8 years; 2-4-2 structure): https://students-residents.aamc.org/md-phd-dual-degree-training/education-and-training-md-phd-programs
[^12]: Undergraduate catalogs consulted for curriculum structure: https://bulletin.marquette.edu/engineering/biomedical-engineering/ ; https://www.umass.edu/engineering/undergraduate-curriculum/curriculum-bs-biomedical-engineering ; https://bme.rutgers.edu/course-curriculum ; https://www.bme.columbia.edu/courses ; https://catalog.baylor.edu/undergraduate/courses-instruction/bme/
[^13]: Research.com, Is biomedical engineering a hard major (snippet): https://research.com/advice/is-biomedical-engineering-a-hard-major-what-students-should-know
[^14]: University of Virginia Systems Bioengineering REU (10 weeks, $6,000 stipend): https://engineering.virginia.edu/systems-bioengineering-reu/about ; Washington University mechanobiology REU ($6,500 stipend; snippet): https://mechanobiology.wustl.edu/?p=269
[^15]: Research.com, biomedical engineering specialization options (snippet): https://research.com/careers/biomedical-engineering-specialization-options
[^16]: Boston University BEST/PiBS graduate funding ($46,350 stipend as of September 2025; snippet): https://www.bumc.bu.edu/gms/pibs/ ; Stanford Bioengineering graduate funding: https://bioengineering.stanford.edu/academics-admission/graduate-funding
[^17]: NIH, NOT-OD-26-044, FY2026 NRSA stipend levels (predoctoral $29,364; postdoctoral Level 0 $63,480 rising to $77,076 at 7+ years; effective for awards on or after Oct 1, 2025): https://www.grants.nih.gov/grants/guide/notice-files/NOT-OD-26-044.html
[^18]: Frontier reviews consulted (snippets): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12163327/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC12656030/ ; https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202507317
[^19]: FDA, plan to phase out animal testing requirement for monoclonal antibodies and other drugs (April 2025): https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs
[^20]: What About AI, Will AI replace biomedical engineers (26% displacement risk; modeled estimate; snippet): https://whataboutai.com/jobs/engineering/biomedical-engineer
[^21]: Salary aggregator pages consulted for entry R&D pay, no single figure recorded: https://www.glassdoor.com/Salary/Medtronic-Research-and-Development-Engineer-Salaries-E436_D_KO10,43.htm ; https://www.indeed.com/cmp/Medtronic/salaries/R&D-Engineer ; https://www.payscale.com/research/US/Industry=Medical_Device_Research_and_Development/Salary
[^22]: Job-board search pages for imaging AI roles (indicative only): https://www.indeed.com/q-medical-imaging-ai-jobs.html ; https://www.ziprecruiter.com/Jobs/Medical-Imaging-Machine-Learning
[^23]: U.S. BLS OEWS, Engineering Teachers, Postsecondary (25-1032): median $106,910; P10 $60,250; P90 $200,030; data year May 2023: https://www.bls.gov/OES/Current/oes251032.htm
[^24]: AMA, Resident physician pay still rising (AAMC 2025 survey: average program year 1 stipend $68,166, as of July 1, 2025): https://ama-assn.org/medical-residents/residency-life/resident-physician-pay-still-rising-growth-trails-inflation
[^25]: AMA, How does physician compensation in 2026 differ by specialty (Resolve 2026 Physician Salary and Employment Report; national average base salary $387,000): https://www.ama-assn.org/medical-residents/transition-resident-attending/how-does-physician-compensation-2026-differ
