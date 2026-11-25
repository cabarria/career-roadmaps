import { useState } from "react";

/* ── COMPUTER SCIENCE ROADMAP ─ code-editor aesthetic ──
   Deep-indigo editor theme (Tokyo-Night lineage). Per-phase accents
   are real syntax-highlight roles; signature = line-number gutter +
   editor status bar. Hero renders the field as a compiled declaration.
   display: Space Grotesk · body: Sora · mono: JetBrains Mono */

const C = {
  bg: "#1A1B26",
  panel: "#20222F",
  panelUp: "#262A3D",
  line: "#30344B",
  text: "#C8D3F5",
  dim: "#9AA5CE",
  faint: "#565F89",
  blue: "#7AA2F7",
  purple: "#BB9AF7",
  cyan: "#7DCFFF",
  red: "#F7768E",
  orange: "#FF9E64",
  green: "#9ECE6A",
  amber: "#E0AF68",
};

const font = {
  display: "'Space Grotesk', system-ui, sans-serif",
  body: "'Sora', system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

const statusBar = [
  { k: "⎇", v: "CS · 2026", tone: C.dim },
  { k: "◆", v: "BLS median $134K", tone: C.green, inSummary: true },
  { k: "▲", v: "+10% jobs 2025–35", tone: C.green, inSummary: true },
  { k: "▼", v: "entry-level 4.5% of postings", tone: C.red },
  { k: "⚠", v: "recent-grad unemp 5.2% (all majors)", tone: C.orange },
  { k: "⌁", v: "84% of devs use AI (SO 2025)", tone: C.cyan },
];

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "YRS 1–4",
      color: C.blue,
      intro:
        "Computer science is the field in this series where a bachelor's is the normal entry credential: BLS lists a bachelor's as typical entry education for software developers, security analysts, and data scientists. But the entry point is narrow. Indeed puts entry-level at 4.5% of US software-development postings in Q1 2026, and total postings remain about 27.5% below pre-pandemic levels, with 71% of the recent rebound in senior roles. Graduate supply has also more than doubled since 2011. What you build outside class (internships, projects, a visible GitHub) matters as much as the transcript.",
      sections: [
        {
          title: "Core Curriculum",
          icon: "📘",
          items: [
            {
              name: "Intro Programming & Abstraction",
              detail:
                "The first courses (often Python, or a Scheme/Java sequence). They teach decomposition, recursion, and managing complexity — the mental model everything else is built on.",
            },
            {
              name: "Data Structures & Algorithms",
              detail:
                "The defining course of the major and the first serious weeder. Arrays, trees, graphs, hashing, and Big-O analysis — the material tested in nearly every technical interview you'll ever take.",
            },
            {
              name: "Discrete Mathematics",
              detail:
                "Logic, proofs, sets, combinatorics, graph theory. The other classic weeder; instructors note the difficulty comes almost entirely from unfamiliarity with mathematical rigor, not the topics themselves.",
            },
            {
              name: "Computer Architecture & Systems",
              detail:
                "How code becomes voltage: assembly, the memory hierarchy, caches, pipelining. Demystifies the machine sitting under every abstraction you'll use.",
            },
            {
              name: "Operating Systems",
              detail:
                "Processes, threads, scheduling, virtual memory, file systems. Often the heaviest coding load in the whole degree — you build large chunks of an OS yourself, each week's assignment stacked on the last.",
            },
            {
              name: "Theory of Computation",
              detail:
                "Automata, formal languages, computability, and complexity (the P vs NP question). The proof-heavy course where CS reveals itself as a mathematical science.",
            },
            {
              name: "Compilers or Databases",
              detail:
                "A capstone systems elective: build a working compiler, or learn query processing, indexing, and transactions. Where theory finally meets a shippable artifact.",
            },
          ],
        },
        {
          title: "Skills You'll Develop",
          icon: "🛠️",
          items: [
            {
              name: "Fluency in 2–3 languages",
              detail:
                "Typically Python, C/C++, and one of Java/Go/Rust. Employers care less about which and more about depth — reasoning about memory, types, and performance.",
            },
            {
              name: "Version control & collaboration",
              detail:
                "Git, pull requests, code review, working inside a shared codebase. Table stakes now — you're expected to arrive fluent, not learn it on the job.",
            },
            {
              name: "System design thinking",
              detail:
                "Turning a vague problem into components, APIs, and data models. As AI absorbs routine coding, employers quoted by IEEE Spectrum expect juniors to work at a higher level almost from day one.",
            },
            {
              name: "Debugging & reading others' code",
              detail:
                "You spend far more time reading and fixing code than writing it fresh. The under-taught skill that actually defines day-to-day engineering work.",
            },
            {
              name: "Testing & correctness",
              detail:
                "Unit tests, edge cases, and reasoning about why code works — increasingly the skill of validating AI-generated output rather than producing every line yourself.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🚀",
          items: [
            {
              name: "Internships and demonstrated experience",
              detail:
                "NACE's Job Outlook 2026 lists industry experience and demonstrated proficiencies among the top factors employers weigh. With entry-level hiring at the largest tech firms about 65% below 2019 (SignalFire), an internship is the most direct way to show both. SignalFire's 2025 report put new grads at 7% of Big Tech hires, down over 50% from 2019 (data year not labeled, likely 2024). Starting to apply early is common advice, not a sourced finding.",
            },
            {
              name: "A real project portfolio",
              detail:
                "Shipped side projects, open-source contributions, a populated GitHub. Employers in 2026 want proof you can build and contribute immediately — there's no long onboarding runway anymore.",
            },
            {
              name: "Competitive programming & hackathons",
              detail:
                "LeetCode fluency for interviews; hackathons and ICPC/Codeforces for signal and network. Common interview preparation (general knowledge, not sourced in this research).",
            },
            {
              name: "Undergraduate research / REUs",
              detail:
                "The on-ramp to a PhD and to AI-lab roles. A published paper or a strong faculty recommendation can outweigh another course on the transcript.",
            },
            {
              name: "Specialize early",
              detail:
                "Backend + cloud, ML, security, or systems. The 2026 market rewards a demonstrated niche over a generic 'full-stack' résumé — specialists command premiums, generalists compete on volume.",
            },
          ],
        },
        {
          title: "Tools & AI",
          icon: "⚙️",
          items: [
            {
              name: "AI coding assistants",
              detail:
                "Copilot and Cursor are common assistants, and 84% of developers use AI tools (Stack Overflow 2025 survey, via SoftwareSeni). Learn them. IEEE Spectrum reports AI is absorbing the grunt work juniors used to learn on, so the risk is skipping the learning, not skipping the tool.",
            },
            {
              name: "Learn the fundamentals raw first",
              detail:
                "A common practitioner argument (opinion, not outcome data): you have to be able to check the AI's work. Master data structures, algorithms, and debugging by hand before you delegate them. The CRA's 2026 Beyond Code report warns AI can deskill less experienced developers.",
            },
            {
              name: "The Unix / Linux command line",
              detail:
                "Shell, SSH, package managers, and containers (Docker). The environment real software is actually built and deployed in — expected knowledge, rarely a formal course.",
            },
            {
              name: "Cloud fundamentals",
              detail:
                "AWS / GCP / Azure basics. Career guides pair a CS degree with a cloud certification; no outcome data was found on how much it helps an entry-level résumé.",
            },
          ],
        },
      ],
    },
    {
      id: "masters",
      label: "Master's",
      years: "YRS ~5–7",
      color: C.purple,
      intro:
        "A master's in CS is optional. BLS lists a bachelor's as typical entry education for software developers and security analysts, and a master's only for computer and information research scientists. The standout is Georgia Tech's online MS (OMSCS): 30 credit hours for roughly $8.9K to $9.5K in total tuition and fees at Fall 2026 rates, usually taken while working. One review site says its graduation rate falls below 50%; that figure is single-source. Funding norms for on-campus CS master's programs were not verified here: a thesis MS may carry RA/TA support while a coursework MS is commonly self-funded, but treat that as a general pattern. Pursue a master's to move into ML, security, or systems, or to pivot in from a non-CS background.",
      sections: [
        {
          title: "Why (or Whether) to Go",
          icon: "🎯",
          items: [
            {
              name: "The credential for specialization",
              detail:
                "Most useful for targeting ML, AI, security, or systems roles. BLS lists a master's as typical only for computer and information research scientists. A PayScale figure cited by Pace University puts MS graduates at about 17% higher career earnings than bachelor's holders; Research.com says the degree pays off most when matched to a specific role.",
            },
            {
              name: "The career-changer's on-ramp",
              detail:
                "For non-CS graduates, an MS (or OMSCS after completing prerequisites) is the cleanest way to re-enter the internship / new-grad pipeline in a new field.",
            },
            {
              name: "Often redundant if you're already in",
              detail:
                "If you hold a CS bachelor's and a job, a master's may add little unless you're targeting a specific niche. No source in this research compares outcomes either way.",
            },
            {
              name: "The funding split",
              detail:
                "General pattern, not verified for CS in this research: a thesis MS can be funded via RA/TA, while a coursework MS is typically self-funded. OMSCS (about $9K total at Fall 2026 rates) is a low-cost alternative.",
            },
          ],
        },
        {
          title: "Specialization Tracks",
          icon: "🧭",
          items: [
            {
              name: "Machine Learning & AI",
              detail:
                "Deep learning, reinforcement learning, learning theory. Offered as an OMSCS specialization; BLS projects 22% growth for computer and information research scientists, the occupation where a master's is typical.",
            },
            {
              name: "Computing Systems",
              detail:
                "Advanced OS, networks, distributed systems, and databases. The path to infrastructure and backend roles. One analysis argues tacit system-level knowledge is what AI substitutes for least (SoftwareSeni).",
            },
            {
              name: "Cybersecurity",
              detail:
                "Cryptography, network security, secure systems. Many defense and government roles require US citizenship for classified access (32 CFR 117.10); the share of cyber roles that are cleared was not found.",
            },
            {
              name: "Computer Vision & Robotics",
              detail:
                "Perception, autonomy, and control for self-driving, drones, and physical AI, bridging CS and hardware. OMSCS offers it as Computational Perception and Robotics.",
            },
            {
              name: "Human-Computer Interaction",
              detail:
                "Design, user research, and interaction. The bridge track toward product and UX-adjacent roles for those who want the human side of software.",
            },
          ],
        },
        {
          title: "Advanced Skills",
          icon: "🔬",
          items: [
            {
              name: "Deep learning frameworks",
              detail:
                "PyTorch (research-dominant) and JAX — training, fine-tuning, and evaluating models, not just calling a hosted API.",
            },
            {
              name: "Distributed systems in practice",
              detail:
                "Consensus, sharding, fault tolerance, and designing systems that stay up at scale.",
            },
            {
              name: "Research methods",
              detail:
                "Reading papers, reproducing results, and running rigorous experiments — the skills that separate an ML engineer from an ML researcher.",
            },
            {
              name: "MLOps & data engineering",
              detail:
                "Pipelines, feature stores, deployment, and monitoring: the infrastructure around the models.",
            },
          ],
        },
      ],
    },
    {
      id: "phd",
      label: "PhD / Research",
      years: "YRS ~8+",
      color: C.cyan,
      intro:
        "Supported doctoral students in US CS programs are funded mainly through assistantships: in the 2025 Taulbee survey about 52% were on research assistantships, 41% on teaching assistantships, and 6% on fellowships, so the cost is opportunity cost rather than debt. Median time to degree is 5.7 years from program start (NSF, 2024 graduates). Stipends are modest: median 9-month figures of $26.5K to $34K, about $38K to $40K at private institutions. The arc is coursework, qualifying exams, then a novel dissertation, and the currency is published papers at top venues. Most new PhDs go to industry: of 2025 graduates with known outcomes, 61.7% went to industry and 32.2% to academia.",
      sections: [
        {
          title: "How the PhD Works",
          icon: "🎓",
          items: [
            {
              name: "Funded, about 5.7 years",
              detail:
                "Duke commits to five years of funding for students in good standing, and Stanford guarantees funding with satisfactory progress; ProFellow advises prioritizing fully funded programs. Median 9-month stipends in 2025-26 were $27,438 (RA), $26,500 (TA), and $34,000 (fellowship).",
            },
            {
              name: "Advisor & qualifying exams",
              detail:
                "Early coursework and quals establish breadth; then you commit to an advisor and a research area. Fit with the advisor matters more than the department's ranking.",
            },
            {
              name: "The dissertation is novel research",
              detail:
                "Not a large project but a genuine contribution to knowledge, defended before a committee. Publishing at top peer-reviewed venues is the real milestone along the way.",
            },
            {
              name: "Industry is the main destination",
              detail:
                "Of 2,093 US computing PhDs awarded in 2025, 1,515 had known outcomes: 61.7% industry, 32.2% academia, 2.9% government, 2.4% other, 0.7% unemployed. Industry labs also fund PhD students directly (for example, Google's PhD Fellowship).",
            },
          ],
        },
        {
          title: "Research Frontiers",
          icon: "🛰️",
          items: [
            {
              name: "Agentic AI & LLM systems",
              detail:
                "Reasoning agents, tool use, evaluation, and agentic programming. 2026 arXiv work includes surveys of agentic programming and verifier-grounded reinforcement learning for provably correct code.",
            },
            {
              name: "ML systems & AI infrastructure",
              detail:
                "Training and serving efficiency, compilers for ML, and hardware–software co-design: the infrastructure behind the models.",
            },
            {
              name: "Formal verification & program synthesis",
              detail:
                "Proving software correct and generating it from specifications, increasingly LLM-assisted (agentic program verification and verified Dafny synthesis appear in 2026 arXiv work). The CRA's 2026 report names neuro-symbolic assurance as a research area.",
            },
            {
              name: "Post-quantum cryptography",
              detail:
                "NIST finalized its PQC standards in August 2024 (ML-KEM, ML-DSA, SLH-DSA) and NSA's CNSA 2.0 mandates full migration by 2030. The 'harvest now, decrypt later' threat is driving urgent migration research across the software stack.",
            },
            {
              name: "Quantum computing",
              detail:
                "Algorithms, error correction, and hybrid classical-quantum systems. The Quantum Insider's 2026 predictions say quantum computers could emerge as early as 2029; that is a forecast, not a result.",
            },
            {
              name: "Systems, security & HCI",
              detail:
                "Distributed systems, privacy, and human-AI interaction. The CRA's 2026 report lists security-by-construction and goal-driven security interfaces among its research areas; no funding data was retrieved.",
            },
          ],
        },
        {
          title: "Tools of Research",
          icon: "🧪",
          items: [
            {
              name: "PyTorch, JAX & the paper stack",
              detail:
                "The research idiom: prototype in PyTorch/JAX, run on GPU/TPU clusters, write in LaTeX, share on arXiv.",
            },
            {
              name: "Large-scale compute",
              detail:
                "The CRA's 2026 report says industry dominance of compute and models limits what academic researchers can attempt. Access to large-scale compute is an unequal constraint on the research you can even try.",
            },
            {
              name: "AI as a research collaborator",
              detail:
                "LLMs for literature review, coding experiments, and drafting — powerful, but the field is still actively working out where they genuinely help vs. mislead.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "Software Engineering",
      icon: "🖥️",
      color: C.blue,
      roles: ["SWE Intern", "New-Grad SWE", "SWE II", "Senior SWE", "Staff Eng", "Principal"],
      reality:
        "The default and largest destination: BLS counts about 1.9 million software developer jobs and projects 10% growth for 2025-35. But the on-ramp is narrow. Software-development postings are up about 15% since February 2025 yet remain about 27.5% below pre-pandemic, 71% of the recent growth is senior roles, and entry-level is 4.5% of postings (Indeed). SignalFire finds entry-level hiring at the largest tech firms about 65% below 2019 while total engineering hiring there is down only about 11%. Differentiate with shipped projects, internships, and a niche.",
      ai:
        "Highest exposure of the seven paths. Stanford's ADP payroll study finds workers aged 22-25 in the most AI-exposed occupations about 19% below trend relative to less-exposed peers (15% a year earlier); the authors call it descriptive, not causal, and a February 2026 follow-up says several factors are at work. Offshoring: a January 2026 Blind survey (2,392 self-selected respondents) found 52% expect more India hiring and 38% say it replaces US roles. India holds about half of the world's global capability center workforce. The $100K H-1B fee was vacated by a court on 2026-06-08 and is not being collected while the appeal runs.",
      salary: "BLS median $134,040 · new grad $80K–$130K base · FAANG new-grad ~$140K TC · senior FAANG roughly $300K–$480K TC depending on source · Levels.fyi median TC ~$192K (self-reported, skewed to big tech)",
    },
    {
      path: "AI / ML Engineering & Research",
      icon: "🧠",
      color: C.purple,
      roles: ["ML Intern", "ML Engineer", "Applied Scientist", "Research Engineer", "Research Scientist"],
      reality:
        "The strongest demand and pay. BLS projects 22% growth for computer and information research scientists and lists a master's as typical education; sources put the wage premium for AI skills anywhere from about 15% to 56%. Engineering roles (building, deploying, integrating models) are accessible with an MS or a strong portfolio; research-scientist roles at frontier labs are very selective and typically want a PhD and publications, though no placement data for those seats was found.",
      ai:
        "Demand is the clearest signal: Robert Half counts 49,200 AI, ML, and data science postings in 2025, up 163% from 2024, and Indeed finds tech postings that mention AI about 45% above February 2020 while all tech postings sit 34% below. Quant firms and AI labs now compete for the same scientists. The top is a narrow funnel, and no placement data for frontier-lab seats was found. Offshoring: India's global capability centers (GCCs) account for an estimated 30% to 35% of AI-related hiring in India, and Alphabet's planned Bengaluru expansion is described as including thousands of ML and AI roles. No study of AI's effect on ML jobs themselves was found.",
      salary: "BLS median $140,300 · ML engineer entry/mid $112K–$128K, $160K+ senior (career-site figures) · OpenAI research scientist median ~$1.0M TC (Levels.fyi; HeroHunt cites ~$1.25M), Anthropic highest reported $892K · frontier-lab figures are self-reported and equity-heavy",
    },
    {
      path: "Data Science & Engineering",
      icon: "📊",
      color: C.cyan,
      roles: ["Data Analyst", "Data Scientist", "Data Engineer", "Sr. Data Scientist", "Analytics Lead"],
      reality:
        "A broad destination spanning analytics, modeling, and the pipelines that feed both. BLS projects 35% growth for 2025-35 from about 275,600 jobs, with a bachelor's typical for entry. Strong stats/math and SQL fluency are the usual entry bar; one career guide says roughly 80% of the work is data preparation (aggregator source).",
      ai:
        "Mixed signals, and no study isolating AI's effect on US data-science employment was found. Indeed finds data and analytics has the highest AI share of any sector (45% of postings mention AI in December 2025), and Microsoft's Copilot-usage study calls AI highly applicable to data scientists' work, which measures relevance, not job loss. Meanwhile Robert Half counts AI, ML, and data science postings up 163% in 2025. Offshoring: a Swarajya report says nearly two in three new India GCC roles in 2026 require AI or data skills; the US versus India split was not found.",
      salary: "BLS median $120,230 · Robert Half 2026 starting ranges: data scientist $121,750–$182,500, data engineer $127,000–$180,750",
    },
    {
      path: "Cybersecurity",
      icon: "🔒",
      color: C.red,
      roles: ["Security Analyst", "Pen Tester", "Security Engineer", "Security Architect", "CISO"],
      reality:
        "BLS projects 21% growth for 2025-35 from about 192,900 jobs, with a bachelor's typical for entry, and post-quantum migration adds work. US citizenship is generally required for classified access (Executive Order 12968, 32 CFR 117.10), so many defense and intelligence roles are closed to non-citizens; the share of cyber roles that are cleared was not found. ISC2's 2025 survey finds 33% of organizations lack the budget to staff teams and 30% cannot find the skills, with 39% reporting hiring freezes.",
      ai:
        "No occupation-level study of AI's effect on security jobs was found. ISC2 finds 63% of AI-tool users report a significant productivity boost and 73% expect AI to create more specialized skills needs; Robert Half counts security postings up 124% in 2025. Offshoring: cleared work is shielded because the rules limit classified access to US citizens with rare exceptions. For uncleared work, India's GCCs report strong cybersecurity demand, but no US versus India split was found.",
      salary: "BLS median $129,180 · Robert Half 2026 starting range for cybersecurity engineers $118,500–$190,750 · cleared professionals average $126,125 total compensation, $149,875 with a polygraph (ClearanceJobs 2026; no cyber-specific or cleared-vs-uncleared comparison)",
    },
    {
      path: "Systems, Cloud & DevOps",
      icon: "☁️",
      color: C.orange,
      roles: ["DevOps Engineer", "SRE", "Cloud Engineer", "Platform Engineer", "Infra Architect"],
      reality:
        "The infrastructure backbone: CI/CD, Kubernetes, Terraform, and keeping large systems reliable. Robert Half lists DevOps and cloud engineers among consistently in-demand roles, and BLS projects faster-than-average growth for the computer and IT group as a whole, with about 280,000 openings a year. No source describes entry paths; that it is usually grown into from software or systems roles is general knowledge.",
      ai:
        "No study of AI automation of DevOps, SRE, or cloud work was found. Demand looks steady: Robert Half lists DevOps engineers among roles with consistent demand and reports 0.4% Q1 2026 unemployment for network and systems administrators against 4.3% nationally. One analysis argues tacit system-level knowledge is what AI substitutes for least. Offshoring: India's GCCs report their strongest demand in platform engineering and cloud, so pressure is plausible; no US versus India split was found.",
      salary: "BLS medians for related occupations: network architects $134,050 · database administrators and architects $126,760 · network and systems administrators $99,130 · Robert Half 2026 starting ranges: DevOps $118,000–$173,750, network/cloud engineer $110,000–$155,000 · cloud architect average ~$218K (aggregator, unverified)",
    },
    {
      path: "Academia & Research",
      icon: "🏛️",
      color: C.green,
      roles: ["PhD Student", "Postdoc", "Research Scientist", "Assistant Prof", "Tenured Prof"],
      reality:
        "Requires a PhD. Of 2025 US computing PhD recipients with known outcomes, 61.7% went to industry and 32.2% to academia; the data do not separate tenure-track from other academic roles. Tenure-track scarcity is commonly reported but was not verified in this research. Choose it for the research problems, not the salary.",
      ai:
        "No study of AI's effect on CS faculty or research jobs was found. The CRA says industry dominance of compute and models limits academic research. The exposure visible in the data is international: nonresidents earned 50.4% of 2025 CS doctorates and make up 57.2% of enrolled CS PhD students, so visa and immigration policy plausibly matters more to this path than offshoring does.",
      salary: "PhD stipend median $26.5K–$34K (~$38K–$40K at private institutions) · postdoc $67,000 · assistant prof $131,115 · associate $149,579 · full $205,116 (Taulbee 2025 medians, CS units; pay-period basis unconfirmed) · industry research pay: see AI/ML",
    },
    {
      path: "Product, Quant & Founder",
      icon: "🚀",
      color: C.amber,
      roles: ["Product Manager", "Quant Developer", "Solutions Eng", "Technical Co-founder", "CTO"],
      reality:
        "Adjacent destinations where a CS foundation is leverage: technical PMs, quant developers at trading firms, solutions engineers, and startup founders. SignalFire finds top-20 CS graduates are twice as likely to call themselves founders as the class of 2022. Quant firms recruit from a very small slice of graduates (secondary source), and more than 80% of seed and Series A startups reportedly exit at zero (CB Insights, secondhand).",
      ai:
        "No source on AI or offshoring exposure for product managers or founders was found. Ceipal's Q4 2025 postings sample put project managers first by volume and product managers outside the top 20 (one vendor's data). For quant, Selby Jennings lists quant developers among the most constrained talent supplies and cites AI integration as a driver of demand; London and New York remain the anchor markets, with Singapore, Hong Kong, and nearshore hubs emerging. No evidence of AI or offshoring displacing quant roles was found.",
      salary: "Technical PM median TC $260,000 (Levels.fyi; 25th–75th percentile $180K–$354K, skewed to big tech) · quant developer average base $129,614 (PayScale, 11 profiles) · Jane Street ~$350K and HRT ~$410K entry TC (secondary site) · first-year pay for ML PhDs at quant firms $450K–$650K, up to $800K (one recruiter, via Bloomberg)",
    },
  ],
};

export default function ComputerScienceRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.orange : phase.color;

  const selectPhase = (id) => {
    setShowCareers(false);
    setActivePhase(id);
    setActiveSection(0);
    setExpandedItem(null);
  };

  const tabBase = {
    fontFamily: font.mono,
    fontSize: 12,
    letterSpacing: "0.04em",
    padding: "10px 14px",
    borderRadius: 6,
    border: `1px solid ${C.line}`,
    background: C.panel,
    color: C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  const gutter = (n) => (
    <span
      style={{
        fontFamily: font.mono,
        fontSize: 12,
        color: C.faint,
        width: 26,
        flexShrink: 0,
        textAlign: "right",
        userSelect: "none",
        paddingTop: 1,
      }}
      aria-hidden="true"
    >
      {String(n + 1).padStart(2, "0")}
    </span>
  );

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Sora:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');
        @keyframes blink { 0%,49%{opacity:1;} 50%,100%{opacity:0;} }
        .caret { animation: blink 1.05s steps(1) infinite; }
        @media (prefers-reduced-motion: reduce) { .caret { animation: none; } }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
      `}</style>

      {/* header */}
      <header style={{ padding: "30px 20px 18px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontFamily: font.mono, fontSize: 11, color: accent, letterSpacing: "0.16em", marginBottom: 12 }}>
          FIELD ROADMAP · ~/paths/computer-science
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 700,
            fontSize: "clamp(36px, 8vw, 64px)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Computer Science
          <span className="caret" style={{ color: C.blue, fontWeight: 500, marginLeft: 2 }}>_</span>
        </h1>
        <p style={{ color: C.dim, fontSize: 15, maxWidth: 660, margin: "16px 0 0", lineHeight: 1.55 }}>
          One degree, seven destinations. From the first weeder course to the research frontier — degrees,
          specializations, and career paths priced honestly, with the AI-automation and offshoring pressure
          marked on every one.
        </p>
      </header>

      {summary}

      {/* signature: editor status bar */}
      <div
        className="hscroll"
        style={{
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
          background: "#16171F",
          padding: "7px 20px",
          maxWidth: "100%",
        }}
      >
        {statusBar.filter(stat => !summary || !stat.inSummary).map((s, i) => (
          <span
            key={i}
            style={{
              fontFamily: font.mono,
              fontSize: 11.5,
              color: C.dim,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              paddingRight: 18,
              borderRight: i < statusBar.length - 1 ? `1px solid ${C.line}` : "none",
              marginRight: 4,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: s.tone }}>{s.k}</span>
            {s.v}
          </span>
        ))}
      </div>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 60px" }}>
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
                  border: `1px solid ${on ? p.color : C.line}`,
                  color: on ? p.color : C.dim,
                  background: on ? C.panelUp : C.panel,
                }}
              >
                <span style={{ fontWeight: 700 }}>{p.label}</span>
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
              border: `1px solid ${showCareers ? C.orange : C.line}`,
              color: showCareers ? C.orange : C.dim,
              background: showCareers ? C.panelUp : C.panel,
              fontWeight: 700,
            }}
          >
            Career Paths <span style={{ color: C.faint, marginLeft: 8, fontSize: 10 }}>7 LISTED</span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* phase intro */}
            <div style={{ borderLeft: `3px solid ${phase.color}`, paddingLeft: 16, marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: phase.color,
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                }}
              >
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.text, fontSize: 15, lineHeight: 1.6, maxWidth: 760 }}>
                {phase.intro}
              </p>
            </div>

            {/* section tabs */}
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
                      border: `1px solid ${on ? phase.color : C.line}`,
                      color: on ? C.text : C.dim,
                      background: on ? C.panelUp : "transparent",
                    }}
                  >
                    {s.icon} {s.title}
                  </button>
                );
              })}
            </div>

            {/* expandable items with line-number gutter */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {phase.sections[activeSection].items.map((item, i) => {
                const open = expandedItem === i;
                return (
                  <button
                    key={item.name}
                    onClick={() => setExpandedItem(open ? null : i)}
                    style={{
                      textAlign: "left",
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? phase.color : C.line}`,
                      borderRadius: 8,
                      padding: "14px 16px",
                      cursor: "pointer",
                      color: C.text,
                      transition: "all .15s",
                      display: "flex",
                      gap: 12,
                    }}
                  >
                    {gutter(i)}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 15.5 }}>
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontFamily: font.mono,
                            fontSize: 15,
                            color: open ? phase.color : C.faint,
                            flexShrink: 0,
                          }}
                        >
                          {open ? "−" : "+"}
                        </span>
                      </div>
                      {open && (
                        <p style={{ margin: "10px 0 0", color: C.dim, fontSize: 14, lineHeight: 1.6 }}>
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
            <div style={{ borderLeft: `3px solid ${C.orange}`, paddingLeft: 16, marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: C.orange,
                  letterSpacing: "0.14em",
                  marginBottom: 6,
                }}
              >
                DESTINATIONS · SALARY: BLS OOH MAY 2025 + LEVELS.FYI / INDUSTRY (NOTED)
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.text, maxWidth: 760 }}>
                Seven distinct destinations. Base wages anchor to BLS (May 2025); total-comp figures come from
                Levels.fyi and industry reports, which are self-reported, equity-heavy, and skewed toward large
                tech employers. Every card carries a read on AI-automation and offshoring exposure; where no
                source was found, the card says so.
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
                      background: open ? C.panelUp : C.panel,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderTop: `3px solid ${c.color}`,
                      borderRadius: 8,
                      padding: 16,
                      cursor: "pointer",
                      color: C.text,
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 22 }} aria-hidden="true">
                        {c.icon}
                      </span>
                      <span
                        style={{
                          fontFamily: font.display,
                          fontWeight: 700,
                          fontSize: 15.5,
                          color: c.color,
                          letterSpacing: "0.01em",
                        }}
                      >
                        {c.path}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontFamily: font.mono,
                            fontSize: 10.5,
                            padding: "3px 8px",
                            borderRadius: 4,
                            border: `1px solid ${C.line}`,
                            color: C.dim,
                            background: C.bg,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    {open && (
                      <div style={{ marginTop: 12 }}>
                        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 1.6, color: C.dim }}>
                          {c.reality}
                        </p>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 11.5,
                            lineHeight: 1.55,
                            color: C.faint,
                            borderTop: `1px solid ${C.line}`,
                            paddingTop: 10,
                            marginBottom: 10,
                          }}
                        >
                          <span style={{ color: c.color }}>AI + OFFSHORE ▸ </span>
                          {c.ai}
                        </div>
                        <div
                          style={{
                            fontFamily: font.mono,
                            fontSize: 12,
                            fontWeight: 500,
                            color: C.green,
                            background: "#182118",
                            border: `1px solid #2C3B26`,
                            borderRadius: 6,
                            padding: "8px 10px",
                            lineHeight: 1.5,
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
            marginTop: 36,
            paddingTop: 14,
            borderTop: `1px solid ${C.line}`,
            fontFamily: font.mono,
            fontSize: 11,
            color: C.faint,
            letterSpacing: "0.06em",
            lineHeight: 1.6,
          }}
        >
          TAP ANY LINE OR CARD TO EXPAND · SOURCES: BLS OOH MAY 2025, INDEED HIRING LAB, SIGNALFIRE,
          STANFORD DIGITAL ECONOMY LAB, CRA TAULBEE 2025, NSF SED, NACE, LEVELS.FYI, NY FED, ISC2, ROBERT HALF, SELBY JENNINGS, BLIND ·
          COMPILED NOV 2026 · FULL SOURCES IN computer-science-research.md
        </footer>
      </main>
    </div>
  );
}
