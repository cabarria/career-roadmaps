import { useState } from "react";

/* ------------------------------------------------------------------ *
 *  LIBRARY SCIENCE: Field Roadmap
 *  Aesthetic: "The Card Catalog": cream catalog cards in oak drawers.
 *  Typewriter labels, call-number marks and a punched hole on every card.
 *  Each stage is a drawer, each expandable item a card you pull out, and
 *  the header carries a drawer label with the field's own class number.
 *  Content comes from research/library-science-research.md.
 * ------------------------------------------------------------------ */

const C = {
  paper: "#F4ECD8",
  card: "#FBF6E8",
  cardUp: "#FFFDF4",
  oak: "#5A3B22",
  ink: "#2A2118",
  dim: "#5B4E3F",
  faint: "#85765F",
  line: "#D6C6A3",
  lineSoft: "#E4D7B8",
};

const font = {
  display: "'Fraunces', 'Georgia', serif",
  body: "'Source Serif 4', Georgia, serif",
  type: "'Courier Prime', 'Courier New', ui-monospace, monospace",
};

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "Years 1–4",
      mark: "020.1",
      color: "#1F5F4C",
      intro:
        "There is no library major to declare. BLS lists a master's degree as the typical entry education for librarians, and the research found no required undergraduate major. The bachelor's years are for building a subject, practising research and teaching skills, and finding out whether library work suits you, ideally by working in a library.",
      sections: [
        {
          title: "Choosing a Major",
          icon: "🎓",
          items: [
            {
              name: "Any major can lead to library school",
              detail:
                "BLS lists a master's as the typical entry education for librarians and media collections specialists and no related work experience (BLS Table 1.2). BLS says a bachelor's degree in any major is enough to enter MLS programs, which usually take 1 to 2 years. The credential is the graduate degree, not the bachelor's major. Library Journal found 51% of the class of 2023 were in a second career, with an average age of 34.5.",
            },
            {
              name: "Humanities and social sciences: public and academic reference",
              detail:
                "Reference, instruction and outreach are among the most common assignments for new graduates (46%, 39%). A subject you can research deeply, plus clear writing, helps. That subject-expertise link is an inference from setting-specific roles; the research did not measure hiring advantage by major.",
            },
            {
              name: "Sciences, health and law: special libraries",
              detail:
                "Special libraries and government libraries each took 3% of new graduates, and health sciences librarians can earn the Medical Library Association's AHIP credential. Law and health collections reward subject fluency. BLS says special librarians usually supplement the MLS with knowledge of their field, some employers require a subject degree, and a law librarian may be required to have a law degree.",
            },
            {
              name: "Education: the school library route",
              detail:
                "AASL notes that many states first require certification as a teacher in another subject before school librarian certification, and some also require a master's. Students who expect to work in schools can take education coursework and check their state department of education early.",
            },
            {
              name: "Computing and data: metadata and digital services",
              detail:
                "Digital content work was 20% of new graduates' assignments, up from 3.4% a decade earlier, and posted data-services librarian ranges in 2025 ran from about $58,566 to $90,000 by rank. Statistics, databases and introductory programming give a head start.",
            },
          ],
        },
        {
          title: "Skills You'll Develop",
          icon: "🔎",
          items: [
            {
              name: "Research and source evaluation",
              detail:
                "Reference and information services was the most common assignment (46%) for the class of 2023. Practise finding, comparing and citing sources, and judging what is reliable. That skill matters more as generative AI produces fluent but sometimes inaccurate text.",
            },
            {
              name: "Teaching and explaining",
              detail:
                "83% of academic library leaders expect more demand for AI-literacy instruction over the next three years (Ithaka S+R, 2025). Tutoring, peer-teaching and presenting are early practice for instruction librarianship.",
            },
            {
              name: "Service and community work",
              detail:
                "Outreach (39%), circulation (32%) and patron programming (31%) are standard parts of a new librarian's job. Retail, tutoring and volunteering develop the patience and judgment these require.",
            },
            {
              name: "Organizing information",
              detail:
                "Cataloging and metadata turn collections into something findable. Any experience organizing files, data or collections, even a spreadsheet well designed, shows the habit.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🤖",
          items: [
            {
              name: "Databases, discovery tools and spreadsheets",
              detail:
                "The research did not find a ranked list of undergraduate tools. Library work runs on catalogs, discovery systems, subscription databases and spreadsheets, so learn to search one subject database well and keep clean data.",
            },
            {
              name: "Generative AI is already common among librarians",
              detail:
                "In a survey of 272 librarians, 66.5% used generative AI at work and rated its effectiveness 6.76 out of 10. The top concerns were inconsistent accuracy, ethics and privacy, and writing effective prompts. It is a convenience sample, not a national estimate.",
            },
            {
              name: "Verify before you trust",
              detail:
                "The Library of Congress found models strong on simple fields (up to 99% accuracy on title and author) but under 50% on subject and genre. Check every AI-generated citation or summary against the source; that habit is the job.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🏛️",
          items: [
            {
              name: "Work in a library before the master's",
              detail:
                "Of the class of 2023, 33% worked in a library both before and during the degree, 15% only before, 28% only during and 24% not at all. One graduate said the employer posted the job only once they were close to graduating, and they were hired the week they finished.",
            },
            {
              name: "The support-staff ladder is shrinking",
              detail:
                "BLS projects library technicians and clerical library assistants both at −6.4% from 2025 to 2035, even as librarians grow 2.6%. Entry jobs may be harder to find, so volunteering, student jobs and paid internships carry weight.",
            },
            {
              name: "Internships and the money question",
              detail:
                "One new academic librarian said a paid part-time internship produced several offers, but acknowledged that many people cannot afford unpaid or low-paid work. Ask about paid options and credit-bearing internships.",
            },
            {
              name: "It is not too late to change course",
              detail:
                "51% of the class of 2023 came from another career, including education, the arts and business, and 20% already held a master's or PhD. Library school welcomes career changers.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "Years 5–6",
      mark: "020.2",
      color: "#8A2F2B",
      intro:
        "The master's is the professional credential. ALA says the majority of US employers require an ALA-accredited master's for professional positions, and some states require it for public or school librarians. Degree names vary (MLS, MLIS, MSIS), but accreditation is what counts. Programs run about two years full time, many online, and are mostly self-funded.",
      sections: [
        {
          title: "Program Types",
          icon: "🏫",
          items: [
            {
              name: "ALA-accredited degrees",
              detail:
                "Programs are in the US, Canada and Puerto Rico and carry names such as Master of Library Science, Master of Library and Information Studies, Master of Science and Master of Arts. Wikipedia counts 64 institutions with 68 accredited programs (unverified against ALA's directory, which could not be read).",
            },
            {
              name: "Online and on campus",
              detail:
                "A 2019 American Libraries article reported 64% of accredited programs offered fully online degrees (dated). Online study suits career changers, but one graduate said the program gave remote students little help finding an internship or job.",
            },
            {
              name: "Dual degrees and certificates",
              detail:
                "7% of the class of 2023 pursued a dual degree or certificate: archives and special collections, museum studies, school media, another arts or humanities master's, or management. UW lists a law librarianship option and a new Certificate in AI.",
            },
            {
              name: "School media is its own licensure path",
              detail:
                "Many states require a teaching license first, some require a master's, and rules vary and change. The ALA degree alone may not qualify you to work in a school, so check your state before choosing a program.",
            },
          ],
        },
        {
          title: "Core Curriculum",
          icon: "📚",
          items: [
            {
              name: "Foundations and ethics",
              detail:
                "Syracuse's 36-credit MLIS opens with a 12-credit core. Its introductory course covers the professional, social, ethical and legal issues that affect information professionals, and the program emphasizes information justice and equity.",
            },
            {
              name: "Organization of information",
              detail:
                "Cataloging, classification and metadata are standard in accredited curricula. The Library of Congress is evaluating BIBFRAME against MARC, so learn the principles behind both formats rather than one system.",
            },
            {
              name: "Reference and user services",
              detail:
                "Reference interviews, instruction and outreach map to what new graduates report doing: reference (46%), outreach (39%) and programming (31%). The exact required list varies by school.",
            },
            {
              name: "Collection management and research methods",
              detail:
                "Collection development and acquisitions (43% of new graduates' assignments) and basic research methods are typical core areas. The research did not read any school's full catalog, so check each program's required courses.",
            },
          ],
        },
        {
          title: "Specializations",
          icon: "🧭",
          items: [
            {
              name: "Public libraries and youth services",
              detail:
                "Public libraries hired 30% of the class of 2023, though the share has fallen for three years. Programming, community partnerships and intellectual freedom are daily concerns.",
            },
            {
              name: "Academic and research libraries",
              detail:
                "Academic libraries hired 20%. Liaison roles, instruction, scholarly communication and research data services are growth areas, and many US public universities give librarians faculty status (76% of ARL's US public universities).",
            },
            {
              name: "Archives, special collections and digital curation",
              detail:
                "Archivists and curators typically need a master's (BLS). Only 4% of new graduates started in archives or special collections, so pair this track with a certificate, an internship and flexibility about where you work.",
            },
            {
              name: "Data, metadata and systems",
              detail:
                "Digital content, metadata and research-data work has grown as a share of new graduates' assignments. The Library of Congress's finding that AI is weakest on subject and genre keeps human metadata judgment in the loop.",
            },
            {
              name: "Law, health and special libraries",
              detail:
                "These are small markets (3% each for special and government libraries) but they pay well in places: AALL's 2025 survey found law firm research directors at a median of $184,453.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "🤖",
          items: [
            {
              name: "Library systems and metadata tools",
              detail:
                "Expect integrated library systems and discovery platforms, MARC and linked-data cataloging, metadata schemas, citation managers and basic scripting for data cleanup. The research did not rank these by market share.",
            },
            {
              name: "AI in cataloging: human in the loop",
              detail:
                "The Library of Congress tested GPTs and open-source models on eBook records. Title and author fields reached up to 99% accuracy; subject and genre fell below 50%; the 95% quality bar for full automation was not met. The plan is human-in-the-loop workflows.",
            },
            {
              name: "AI in the academic library",
              detail:
                "Ithaka S+R's 2025 survey of 483 library leaders found AI used in discovery and access (40%), research support (29%) and internal data analysis (26%). 24% used none. Barriers were low priority (50%), limited staff skills (48%) and ethical opposition (46%).",
            },
            {
              name: "AI literacy is a new teaching duty",
              detail:
                "83% of library leaders expect more demand for AI-literacy instruction, 74% expect AI in discovery systems and 55% expect staffing change or reskilling. Courses and certificates that teach prompt evaluation and AI policy are becoming part of the degree.",
            },
          ],
        },
        {
          title: "Cost & Placement",
          icon: "💼",
          items: [
            {
              name: "What the degree costs",
              detail:
                "Syracuse's on-campus MLIS lists 36 credits at $2,086 a credit ($75,096). The University of Washington's is 63 credits at a tentative $990 a credit for 2026-27, an estimated $64,992 with fees. Lower-cost online programs cost less; check each school's page.",
            },
            {
              name: "What it pays at the start",
              detail:
                "Library Journal's class of 2023 averaged $61,872 in starting salary, 36% above the class of 2013's $45,560, while 6% were unemployed. Averages mask a regional gap: $75,526 in the Pacific region and $54,189 in the South Central region.",
            },
            {
              name: "Funding is thin",
              detail:
                "Professional master's programs are mostly self-funded. The IMLS Laura Bush 21st Century Librarian grants that funded some library education were terminated in 2025 and reinstated in December 2025; the research did not confirm current awards.",
            },
            {
              name: "Practicum and mentoring",
              detail:
                "Programs commonly offer practicums or internships (the research did not measure this), and 26% of MLIS-granting schools offer a formal mentoring program. One respondent called prior library work essential to getting hired.",
            },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD / Research",
      years: "Years 7+",
      mark: "020.3",
      color: "#27406E",
      intro:
        "The doctorate is not required to practise librarianship. It leads to research and teaching in library and information science, usually in an iSchool or information school. BLS counts only 4,500 postsecondary library science teachers and about 300 openings a year, so the tenure-track market is small. Doctoral placement data was not found.",
      sections: [
        {
          title: "Doctoral Training",
          icon: "🎓",
          items: [
            {
              name: "Who needs a PhD",
              detail:
                "Faculty and research roles, plus some senior leadership. Library science teachers have a $80,340 median and a doctoral typical entry education in BLS Table 1.2. Practising librarians, including most directors, do not need one.",
            },
            {
              name: "Where the programs are",
              detail:
                "LIS doctoral programs are in information schools such as the University of Washington, Michigan, Western and Florida State. Degree titles and emphases vary, so choose by faculty research fit.",
            },
            {
              name: "Funding",
              detail:
                "UW states that admitted doctoral students receive guaranteed funding for at least four years, with a tuition waiver and stipend from assistantships and grants. Other programs set their own terms; stipend amounts were not read.",
            },
            {
              name: "What the research did not find",
              detail:
                "Completion rates, time to degree and faculty placement for LIS doctoral graduates. ALISE publishes student-achievement data for accredited programs, but the 2024 report PDF could not be read.",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🔬",
          items: [
            {
              name: "Evaluating AI for cataloging and discovery",
              detail:
                "The Library of Congress's tests (up to 99% on title and author, under 50% on subject and genre) leave open questions about quality control, bias in training data, copyright and when human review can be sampled instead of universal.",
            },
            {
              name: "AI literacy and information behavior",
              detail:
                "83% of library leaders expect more AI-literacy demand and 51% expect closer scrutiny of research integrity. How people judge and use machine-generated answers is a live empirical question.",
            },
            {
              name: "Research data and scholarly communication",
              detail:
                "Libraries support research data management and repositories, and 26% of library leaders already use AI for internal data analysis (Ithaka S+R, 2025). How AI changes research support and scholarly publishing is an open question.",
            },
            {
              name: "Intellectual freedom and information equity",
              detail:
                "ALA recorded 4,235 unique titles challenged in 2025, the second highest total on record, with 92% initiated by pressure groups and officials. Studying who challenges what, and how libraries respond, is a growing research area.",
            },
            {
              name: "Preservation and the workforce",
              detail:
                "Digital preservation, born-digital archives and library labor, funding and staffing (such as the school librarian shortfall) are active topics. No single source catalogs every LIS research area.",
            },
          ],
        },
        {
          title: "Methods & Tools",
          icon: "🧪",
          items: [
            {
              name: "Surveys and mixed methods",
              detail:
                "The studies this roadmap draws on use surveys of librarians and library leaders (272 and 483 respondents), placement surveys and expert-written reports. Knowing sample, response rate and bias matters, since many convenience samples are self-selected.",
            },
            {
              name: "Evaluating model output",
              detail:
                "The Library of Congress experiments compare AI-generated records with human-created ones field by field. Designing a fair test, with a benchmark and an error taxonomy, is central research skill.",
            },
            {
              name: "Computation and data stewardship",
              detail:
                "Metadata analysis, text processing and reproducible data practices appear in research data services and digital libraries. The research did not rank specific languages or packages.",
            },
          ],
        },
        {
          title: "Beyond the Dissertation",
          icon: "🧭",
          items: [
            {
              name: "Faculty roles",
              detail:
                "4,500 library science teachers, +2.7% growth to 2035, about 300 openings a year. Expect competition and mobility. The data does not show how many openings go to new doctorates.",
            },
            {
              name: "Leadership and practice",
              detail:
                "ARL libraries report executive leadership averaging $177,800 and 22 years of experience. A doctorate helps in some research-library leadership roles but experience matters more in the data read.",
            },
            {
              name: "Credentials after the degree",
              detail:
                "Health sciences librarians can pursue the Medical Library Association's AHIP credential. The research did not verify other credentials such as archival certification.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Public Libraries",
      icon: "🏙️",
      color: "#1F5F4C",
      roles: ["Library Assistant / Page", "Librarian", "Branch Manager", "Library Director"],
      reality:
        "The largest single destination: 30% of the class of 2023, though the share has fallen three years running. BLS counts all librarians (public, school, academic and special) together at a $68,270 median. Work centers on reference, programming, outreach and digital access. Politics and funding shape jobs: 51% of 2025 censorship attempts were at public libraries, and small and rural libraries were hit hardest when IMLS grants were terminated in 2025, then reinstated in December.",
      salary:
        "New graduates averaged $54,189 (South Central) to $75,526 (Pacific) in full-time pay; $68,270 median for all librarians (BLS May 2025).",
    },
    {
      path: "Academic & Research Libraries",
      icon: "🏛️",
      color: "#8A2F2B",
      roles: ["Library Assistant", "Subject / Instruction Librarian", "Department Head", "University Librarian"],
      reality:
        "20% of new graduates, down from 24%. At ARL libraries, 76% of US public universities offered librarians faculty appointments. Roles combine liaison work, teaching, collection development, scholarly communication and data services. Ithaka S+R found 40% of library leaders use AI in discovery and access, and 83% expect more demand for AI-literacy instruction.",
      salary:
        "Posted data and metadata librarian ranges ran about $58K–$90K by rank; ARL executive leadership averaged $177,800 (ARL 2024).",
    },
    {
      path: "School Library Media",
      icon: "📖",
      color: "#27406E",
      roles: ["Teacher / Library Aide", "School Librarian", "Media Specialist", "District Coordinator"],
      reality:
        "Most states require a teaching license first, some require a master's, and rules differ by state. BLS reports no separate wage for school librarians. The pipeline is fragile: about 35% of districts had no librarian in 2021–22 (NCES, as cited in a search result), and only 7% of new graduates started in K–12 libraries. Teaching AI and digital literacy is a new part of the role.",
      salary:
        "District-set; BLS medians for secondary and elementary teachers are $72,040 and $63,970 (May 2025).",
    },
    {
      path: "Law, Health & Government Libraries",
      icon: "⚖️",
      color: "#6B4C9A",
      roles: ["Research Librarian", "Senior Librarian", "Associate Director", "Director"],
      reality:
        "Small specialist markets: special libraries and government libraries each took 3% of the class of 2023. AALL's 2025 survey shows law pay well above the BLS librarian median at senior levels. Health sciences librarians can hold the Medical Library Association's AHIP credential. BLS says a law librarian may be required to have a law degree, and some employers require a master's, professional degree or PhD in the subject.",
      salary:
        "Academic law reference and research librarians $84,250; law-firm senior research librarians $116,075; directors of research services $184,453 (AALL 2025 medians, via a news summary).",
    },
    {
      path: "Archives & Digital Curation",
      icon: "🗃️",
      color: "#8A6420",
      roles: ["Archives Assistant", "Archivist / Curator", "Senior Archivist", "Special Collections Director"],
      reality:
        "BLS lists archivists (10,300 jobs, +3.4%) and curators (14,200 jobs, +4.9%) with a master's typical, and openings of only about 1,100 and 1,600 a year. Only 4% of new graduates began in archives or special collections. Many positions are small, grant-funded or contract-based, so funding turmoil matters (inferred).",
      salary:
        "Archivists $64,550, curators $63,420, museum technicians and conservators $51,440 (BLS May 2025 medians).",
    },
    {
      path: "Data, Metadata & Digital Services",
      icon: "🗂️",
      color: "#1B6F8A",
      roles: ["Metadata Assistant", "Metadata / Data Librarian", "Head of Digital Library", "Associate Dean for Technology"],
      reality:
        "Digital content was 20% of new graduates' assignments, up from 3.4% a decade earlier; 4% reported AI work. Roles cover cataloging, repositories, research data support and discovery systems. The Library of Congress found AI weakest on subject and genre fields, which keeps human metadata judgment central. Law-library metadata librarians report a $75,746 median.",
      salary:
        "Posted 2025 ranges of about $58,566–$90,000 by rank; one aggregator reported a $67,730 average for data librarians (excerpt, not a survey).",
    },
    {
      path: "Corporate, Vendor & Knowledge Work",
      icon: "💼",
      color: "#A04B20",
      roles: ["Research Analyst", "Knowledge Manager", "Taxonomist", "Director of Research Services"],
      reality:
        "16% of the class of 2023 went into private industry (including large technology employers), 2% into consulting and 1% to library vendors. Titles often do not include 'librarian' (only 37% overall do). No BLS occupation matches this path, and pay data outside law firms was not found.",
      salary:
        "No general sourced range. Law-firm research roles: $116,075–$184,453 medians (AALL 2025).",
    },
    {
      path: "LIS Teaching & Research",
      icon: "🔬",
      color: "#3F5A2E",
      roles: ["Doctoral Student", "Instructor / Postdoc", "Assistant Professor", "Professor / Dean"],
      reality:
        "A very small market: BLS counts 4,500 library science teachers and about 300 openings a year. Doctoral programs commonly fund students, with UW guaranteeing at least four years. Faculty placement data was not found, and this path is the only one in this roadmap that requires a doctorate.",
      salary: "$80,340 median for postsecondary library science teachers (BLS May 2025).",
    },
  ],
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&display=swap');
`;

const globalCSS = `
* { box-sizing: border-box; }
.hscroll {
  display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;
  scrollbar-width: none; -webkit-overflow-scrolling: touch;
}
.hscroll::-webkit-scrollbar { display: none; }
.lib-btn:focus-visible, .lib-item:focus-visible { outline: 2px solid #2A2118; outline-offset: 2px; }
.lib-item { transition: border-color .18s ease, background .18s ease; }
.lib-card { transition: transform .18s ease, border-color .18s ease; }
@media (hover: hover) {
  .lib-card:hover { transform: translateY(-2px); }
}
@media (prefers-reduced-motion: reduce) {
  .lib-item, .lib-card { transition: none !important; }
}
`;

function DrawerLabel({ children }) {
  // Brass label holder like the one on a card-catalog drawer.
  return (
    <div
      style={{
        display: "inline-block",
        fontFamily: font.type,
        fontSize: 12,
        letterSpacing: "0.18em",
        color: C.ink,
        background: C.card,
        border: `1px solid ${C.oak}`,
        boxShadow: "inset 0 0 0 3px #B8893A33",
        padding: "6px 14px",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

export default function LibraryScienceRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const careerColor = "#5A3B22";

  const selectPhase = (id) => {
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
    setShowCareers(false);
  };

  const tabBase = {
    fontFamily: font.type,
    fontSize: 13,
    whiteSpace: "nowrap",
    padding: "10px 15px",
    borderRadius: 3,
    cursor: "pointer",
    flex: "0 0 auto",
  };

  return (
    <div
      style={{
        fontFamily: font.body,
        background: C.paper,
        color: C.ink,
        minHeight: "100vh",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(90,59,34,0.035) 0, rgba(90,59,34,0.035) 1px, transparent 1px, transparent 28px)",
      }}
    >
      <style>{fontImport}</style>
      <style>{globalCSS}</style>

      <header style={{ borderBottom: `4px double ${C.oak}` }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "34px 20px 26px" }}>
          <DrawerLabel>020 · LIBRARY &amp; INFORMATION SCIENCES</DrawerLabel>
          <h1
            style={{
              fontFamily: font.display,
              fontWeight: 600,
              fontSize: "clamp(38px, 8.5vw, 68px)",
              lineHeight: 1.02,
              margin: "0 0 10px",
              color: C.oak,
            }}
          >
            Library Science
          </h1>
          <p style={{ margin: 0, maxWidth: 720, fontSize: 18, lineHeight: 1.55, color: C.dim }}>
            Any major in, one required master's degree, and eight kinds of work beyond the circulation desk:
            how librarians and information professionals are trained and where the degree leads.
          </p>
        </div>
      </header>

      {summary ? (
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "20px 20px 0" }}>{summary}</div>
      ) : null}

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 20px 72px" }}>
        <nav className="hscroll" style={{ marginBottom: 24 }} aria-label="Roadmap phases">
          {data.phases.map((p) => {
            const on = !showCareers && activePhase === p.id;
            return (
              <button
                key={p.id}
                className="lib-btn"
                onClick={() => selectPhase(p.id)}
                style={{
                  ...tabBase,
                  border: `1px solid ${on ? p.color : C.line}`,
                  color: on ? "#FFFDF4" : C.dim,
                  background: on ? p.color : C.card,
                  fontWeight: on ? 700 : 400,
                }}
              >
                <span style={{ marginRight: 8, opacity: 0.75 }}>{p.mark}</span>
                {p.label}
                <span style={{ marginLeft: 8, fontSize: 11, opacity: 0.8 }}>{p.years}</span>
              </button>
            );
          })}
          <button
            className="lib-btn"
            onClick={() => {
              setShowCareers(true);
              setExpandedCareer(null);
            }}
            style={{
              ...tabBase,
              border: `1px solid ${showCareers ? careerColor : C.line}`,
              color: showCareers ? "#FFFDF4" : C.dim,
              background: showCareers ? careerColor : C.card,
              fontWeight: showCareers ? 700 : 400,
            }}
          >
            <span style={{ marginRight: 8, opacity: 0.75 }}>020.4</span>
            Career Paths
            <span style={{ marginLeft: 8, fontSize: 11, opacity: 0.8 }}>{data.careers.length} LISTED</span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            <div style={{ borderLeft: `4px solid ${phase.color}`, paddingLeft: 18, marginBottom: 24 }}>
              <div
                style={{
                  fontFamily: font.type,
                  fontSize: 12,
                  color: phase.color,
                  letterSpacing: "0.14em",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                CALL NO. {phase.mark} · {phase.years.toUpperCase()} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.62, maxWidth: 780 }}>{phase.intro}</p>
            </div>

            <div className="hscroll" style={{ marginBottom: 18 }}>
              {phase.sections.map((s, i) => {
                const on = activeSection === i;
                return (
                  <button
                    key={s.title}
                    className="lib-btn"
                    onClick={() => {
                      setActiveSection(i);
                      setExpandedItem(null);
                    }}
                    style={{
                      ...tabBase,
                      fontSize: 12.5,
                      padding: "8px 13px",
                      border: `1px solid ${on ? phase.color : C.line}`,
                      color: on ? phase.color : C.dim,
                      background: on ? C.cardUp : "transparent",
                      fontWeight: on ? 700 : 400,
                    }}
                  >
                    <span style={{ marginRight: 7 }}>{s.icon}</span>
                    {s.title}
                  </button>
                );
              })}
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
              {phase.sections[activeSection].items.map((item, idx) => {
                const key = `${activePhase}-${activeSection}-${idx}`;
                const open = expandedItem === key;
                return (
                  <li key={key}>
                    <button
                      className="lib-item"
                      onClick={() => setExpandedItem(open ? null : key)}
                      aria-expanded={open}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        font: "inherit",
                        color: "inherit",
                        background: open ? C.cardUp : C.card,
                        border: `1px solid ${open ? phase.color : C.line}`,
                        borderRadius: 3,
                        padding: "14px 16px",
                        boxShadow: open ? "0 2px 0 rgba(90,59,34,0.15)" : "none",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                        <span
                          aria-hidden="true"
                          style={{
                            flex: "0 0 auto",
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            border: `2px solid ${phase.color}`,
                            alignSelf: "center",
                          }}
                        />
                        <span style={{ fontSize: 17, fontWeight: 600, flex: 1, lineHeight: 1.4 }}>
                          {item.name}
                        </span>
                        <span
                          aria-hidden="true"
                          style={{ fontFamily: font.type, fontSize: 16, color: C.faint, flex: "0 0 auto" }}
                        >
                          {open ? "−" : "+"}
                        </span>
                      </div>
                      {open ? (
                        <p style={{ margin: "10px 0 0 24px", color: C.dim, fontSize: 16, lineHeight: 1.6 }}>
                          {item.detail}
                        </p>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <div style={{ borderLeft: `4px solid ${careerColor}`, paddingLeft: 18, marginBottom: 24 }}>
              <div
                style={{
                  fontFamily: font.type,
                  fontSize: 12,
                  color: careerColor,
                  letterSpacing: "0.14em",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                CALL NO. 020.4 · CAREER PATHS
              </div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.62, maxWidth: 780 }}>
                Eight destinations. Pay figures are US BLS medians (May 2025) unless noted. BLS groups public,
                school, academic and special librarians in one occupation, so the $68,270 median is not a
                wage for any one setting. Placement shares and starting salaries come from Library Journal's
                survey of the class of 2023.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 14,
              }}
            >
              {data.careers.map((c, i) => {
                const open = expandedCareer === i;
                return (
                  <button
                    key={c.path}
                    className="lib-card lib-item"
                    onClick={() => setExpandedCareer(open ? null : i)}
                    aria-expanded={open}
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                      font: "inherit",
                      color: "inherit",
                      alignSelf: "start",
                      background: open ? C.cardUp : C.card,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderTop: `4px solid ${c.color}`,
                      borderRadius: 3,
                      padding: "16px 16px 18px",
                    }}
                  >
                    <div style={{ fontSize: 26, lineHeight: 1, marginBottom: 10 }} aria-hidden="true">
                      {c.icon}
                    </div>
                    <h3
                      style={{
                        margin: "0 0 12px",
                        fontFamily: font.display,
                        fontWeight: 600,
                        fontSize: 21,
                        lineHeight: 1.2,
                        color: c.color,
                      }}
                    >
                      {c.path}
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontFamily: font.type,
                            fontSize: 11.5,
                            color: C.dim,
                            border: `1px solid ${C.line}`,
                            borderRadius: 999,
                            padding: "3px 9px",
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    {open ? (
                      <div style={{ marginTop: 14 }}>
                        <p style={{ margin: "0 0 12px", color: C.dim, fontSize: 15.5, lineHeight: 1.6 }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            background: C.paper,
                            border: `1px solid ${c.color}`,
                            borderRadius: 3,
                            padding: "10px 12px",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: font.type,
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: "0.16em",
                              color: c.color,
                              marginBottom: 4,
                            }}
                          >
                            PAY
                          </div>
                          <div style={{ fontSize: 15, lineHeight: 1.5 }}>{c.salary}</div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ marginTop: 12, fontFamily: font.type, fontSize: 12, color: C.faint }}>
                        TAP TO EXPAND +
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
            marginTop: 40,
            paddingTop: 16,
            borderTop: `1px solid ${C.line}`,
            fontFamily: font.type,
            fontSize: 12,
            color: C.faint,
            lineHeight: 1.7,
          }}
        >
          Tap any item or card to expand it, and tap again to close it. Figures come from
          research/library-science-research.md, with sources and access dates listed there.
        </footer>
      </main>
    </div>
  );
}
