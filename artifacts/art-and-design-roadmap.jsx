import { useState } from "react";

/* ── ART & DESIGN ROADMAP ─ studio / color-specimen aesthetic ──
   canvas #EFE9DD · specimen card #FBF8F1 · warm ink #211D17
   painter's palette accents: vermilion #D64500 · ultramarine #27508A
   viridian #2E7D5B · ochre #B8770E · aubergine #7A3B6B · crimson #A81E3C
   display: Fraunces · body: Spectral · label/data: Space Mono
   signature: a marquee of paint-chip swatches carrying the field's key numbers */

const C = {
  bg: "#EFE9DD",
  panel: "#FBF8F1",
  panelUp: "#F4EEE0",
  line: "#DDD4C2",
  ink: "#211D17",
  dim: "#6A6353",
  faint: "#9A9384",
  vermilion: "#D64500",
  ultramarine: "#27508A",
  viridian: "#2E7D5B",
  ochre: "#B8770E",
  aubergine: "#7A3B6B",
  crimson: "#A81E3C",
  slate: "#3E6B7A",
  sienna: "#8A5A2B",
};

const swatches = [
  { c: C.ultramarine, stat: "$159K", label: "PRODUCT DESIGNER · 8+ YRS AVG" },
  { c: C.vermilion, stat: "−2%", label: "GRAPHIC DESIGNERS · PROJECTED 2025–35", inSummary: true },
  { c: C.crimson, stat: "$114,850", label: "ART DIRECTOR · MEDIAN" },
  { c: C.aubergine, stat: "$102,030", label: "SFX ARTIST / ANIMATOR · MEDIAN" },
  { c: C.viridian, stat: "58%", label: "FINE ARTISTS SELF-EMPLOYED" },
  { c: C.ochre, stat: "2028", label: "FIRST MASTER'S LOAN CUTS POSSIBLE" },
  { c: C.slate, stat: "$83,910", label: "INDUSTRIAL DESIGNER · MEDIAN" },
  { c: C.sienna, stat: "−1%", label: "CRAFT & FINE ARTISTS · PROJECTED 2025–35" },
];

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "YRS 1–4",
      color: C.vermilion,
      intro:
        "A BFA is the professional degree (the College Art Association sets at least 70 credits, about 60%, in the specialization) while a BA is the liberal-arts version and a BS leans technical. But the piece of paper isn't what gets you hired: the portfolio is. Year one is a shared 'foundation' in the grammar of making, and the field's real weeder isn't a course — it's the critique, where you stand up and defend your work in the room.",
      sections: [
        {
          title: "Foundation & Core",
          icon: "🎨",
          items: [
            {
              name: "Foundation Year (2D / 3D / 4D)",
              detail:
                "A transdisciplinary first year common to every major: composition, color, three-dimensional form, and time-based work. It gives every student a shared vocabulary before they specialize.",
            },
            {
              name: "Drawing & Observation",
              detail:
                "Sighting, perspective, foreshortening, light and shadow, life drawing. Even in screen-heavy tracks, observational drawing is the discipline underneath everything else.",
            },
            {
              name: "Design Principles & Typography",
              detail:
                "Gestalt, hierarchy, grid, and the craft of setting type. Typography carries across graphic, UX, and editorial work.",
            },
            {
              name: "Art & Design History",
              detail:
                "12–18 credit hours are typically required. Cultural and critical literacy is what lets you situate your own work — and it's the part AI can't fake for you.",
            },
            {
              name: "Declaring a Concentration",
              detail:
                "Around sophomore year you commit: graphic/communication design, illustration, industrial design, media/animation, or fine art. The choice shapes every studio that follows.",
            },
            {
              name: "BFA vs. BA vs. BS",
              detail:
                "BFA is the pre-professional, studio-intensive track; BA pairs art with a broader degree (easy to double-major); BS adds math/science. All three require a portfolio to get in.",
            },
          ],
        },
        {
          title: "The Studio & Critique",
          icon: "🖼️",
          items: [
            {
              name: "The critique ('crit')",
              detail:
                "Your work goes on the wall and the room takes it apart. Learning to give, take, and survive critique is the field's version of the weeder sequence — and the skill clients later pay for.",
            },
            {
              name: "Studio hours",
              detail:
                "The unspoken curriculum. Studio work bleeds well past scheduled class time; the students who thrive treat the studio as a second home, not a classroom.",
            },
            {
              name: "The portfolio — your real credential",
              detail:
                "BLS calls portfolios essential for artists and expects industrial designers to show one. Everything you make in four years is auditioning for this document.",
            },
            {
              name: "The BFA thesis exhibition",
              detail:
                "Most programs require seniors to mount a public show. It's the capstone — a rehearsal for exhibiting, pitching, and presenting your body of work to strangers.",
            },
            {
              name: "Comfort with failure",
              detail:
                "Foundation-year faculty explicitly teach risk-taking, missteps, and constructive listening. Iteration — not first-try genius — is how design actually gets made.",
            },
          ],
        },
        {
          title: "Tools & Software",
          icon: "🖥️",
          items: [
            {
              name: "Adobe Creative Cloud",
              detail:
                "Photoshop, Illustrator, and InDesign remain the industry baseline. Fluency is assumed, not impressive — it's the floor, not the ceiling.",
            },
            {
              name: "Figma — learn it early",
              detail:
                "UX and product designers use Figma more than other designers do (Fast Company). Fluency opens product design, the best-paid mainstream route found.",
            },
            {
              name: "Motion & 3D",
              detail:
                "After Effects for motion graphics; Blender, Cinema 4D, or Maya for 3D. Motion has moved from a specialty into the core of interaction and brand work.",
            },
            {
              name: "Procreate & the iPad",
              detail:
                "The modern illustration workflow. Cheap, portable, and the entry point for concept art, editorial illustration, and building a sketch practice.",
            },
            {
              name: "Generative AI — learn to direct it",
              detail:
                "Image tools such as Midjourney, Firefly, and DALL·E exist, and BLS expects AI to reduce demand for some design work. The skill worth building is art-directing model output to a brief.",
            },
            {
              name: "Physical craft",
              detail:
                "Letterpress, screenprint, wood and metal shops, ceramics. As AI floods the digital, hands-on craft is becoming a differentiator, not a relic.",
            },
          ],
        },
        {
          title: "Beyond the Classroom",
          icon: "🌱",
          items: [
            {
              name: "Internships",
              detail:
                "The bridge from school to salary. A studio or in-house internship — even unpaid-adjacent — is often what converts a portfolio into a first offer.",
            },
            {
              name: "A portfolio site & Behance",
              detail:
                "A clean personal site plus a presence on Behance, Dribbble, or Instagram is how work gets found. In this field, being seen is half the job.",
            },
            {
              name: "Competitions & student shows",
              detail:
                "Juried competitions and annual student exhibitions are low-cost proof-of-talent signals — and a way to build a public record before you graduate.",
            },
            {
              name: "Freelance & commissions",
              detail:
                "Paid gigs while enrolled build both a client-facing portfolio and the business instincts (scoping, invoicing, revisions) that school rarely teaches.",
            },
            {
              name: "The alumni pipeline",
              detail:
                "Design hiring runs heavily on referral and reputation. Faculty connections and alumni working at studios are among your most valuable assets.",
            },
          ],
        },
      ],
    },
    {
      id: "graduate",
      label: "Graduate Study",
      years: "YRS ~5–7",
      color: C.ultramarine,
      intro:
        "Here's the fact that resets everything: the MFA is the terminal degree in studio art and design — professionally equivalent to a PhD, with no doctorate above it for practitioners. It's a genuine bridge to college teaching and to a serious, structured practice. But in most design jobs it's optional; a bachelor's plus a portfolio is fully employable. And the money math is unforgiving.",
      sections: [
        {
          title: "The Degrees",
          icon: "🎓",
          items: [
            {
              name: "MFA — the terminal degree",
              detail:
                "A 2–3 year, practice-based studio degree culminating in a thesis body of work. Recognized as equivalent to a PhD for teaching and professional standing.",
            },
            {
              name: "MDes / MA in design",
              detail:
                "Professional or research-oriented master's in design, interaction, or design research. Common for those moving toward strategy, systems, or academia.",
            },
            {
              name: "MA vs. MFA",
              detail:
                "An MA is theory- and analysis-driven (you write about art); an MFA is studio-driven (you make it). Choose by whether your future is practice or scholarship.",
            },
            {
              name: "Do you even need it?",
              detail:
                "For most industry design roles, no — the MFA gates college teaching, not employment. Enroll to deepen a practice or to teach, not to unlock a job a portfolio already unlocks.",
            },
          ],
        },
        {
          title: "The Funding Reality",
          icon: "💰",
          items: [
            {
              name: "Funded MFAs exist",
              detail:
                "Some programs cover tuition and pay a stipend: Notre Dame's three-year MFA waives tuition and pays $28,500 a year. If you go, aim for full funding.",
            },
            {
              name: "The debt trap",
              detail:
                "Critics inside the field, such as Hyperallergic's essay on the art school debt trap, argue that MFA programs are marketed as gateways to success while the fine print tells a different story. Ask about funding before you apply.",
            },
            {
              name: "The federal earnings test",
              detail:
                "A federal rule effective July 1, 2026 requires master's programs to show graduates out-earn bachelor's holders. Calculations begin in 2027, and failing programs can lose Direct Loan eligibility, with the earliest designations in the 2028–29 award year. Early Education Department modelling put about 4% of master's programs at risk overall, with fine arts among the most exposed fields.",
            },
            {
              name: "Compare funding, not prestige",
              detail:
                "A funded program at a lesser-known school can beat an expensive brand name on lifetime ROI. Ask every program for recent graduate outcomes in writing.",
            },
          ],
        },
        {
          title: "What You Actually Do",
          icon: "🖌️",
          items: [
            {
              name: "A cohesive body of work",
              detail:
                "The core of the degree: sustained, self-directed studio production that adds up to a thesis exhibition and a defensible artistic position.",
            },
            {
              name: "Graduate critique & visiting artists",
              detail:
                "Higher-stakes crits plus a rotating circuit of visiting artists and critics — the network and feedback that a studio practice can't generate alone.",
            },
            {
              name: "The thesis show + writing",
              detail:
                "A public exhibition paired with a written component articulating the ideas behind the work. Both the making and the framing are assessed.",
            },
            {
              name: "Teaching assistantship",
              detail:
                "Leading undergrad sections is the on-ramp to academia — and, for funded students, the labor that pays for the degree.",
            },
          ],
        },
        {
          title: "Skills & AI at This Level",
          icon: "⚙️",
          items: [
            {
              name: "Specialized software mastery",
              detail:
                "Deep, concentration-specific fluency — advanced motion pipelines, design systems, generative tooling — beyond the generalist undergrad toolkit.",
            },
            {
              name: "Fabrication & prototyping",
              detail:
                "CNC, laser cutting, 3D printing, rapid prototyping. Graduate facilities are often the real draw — access you won't have on your own afterward.",
            },
            {
              name: "AI as medium and subject",
              detail:
                "Grad programs are where the field's hardest arguments about generative AI play out — as a material to work with and a topic to interrogate, not just a shortcut.",
            },
            {
              name: "Professional practice",
              detail:
                "Artist statement, CV, grant writing, and pricing. Programs increasingly teach the survival skills that determine whether a practice is sustainable.",
            },
          ],
        },
      ],
    },
    {
      id: "practice",
      label: "Professional Practice",
      years: "YRS ~7+",
      color: C.viridian,
      intro:
        "For artists and designers, mastery doesn't happen in a doctoral lab — it happens in the studio and the market. This is the stage of residencies, representation, reputation, and business. A doctorate exists only on the edges of the field: the practice-based or design-research PhD, mostly for those bound for research and theory, not for making a living as a designer.",
      sections: [
        {
          title: "Building a Practice",
          icon: "🏗️",
          items: [
            {
              name: "Residencies & fellowships",
              detail:
                "Funded time, space, and a cohort. Competitive, but a residency can do more for a practice than another degree — and often costs nothing.",
            },
            {
              name: "Gallery representation",
              detail:
                "How fine artists reach a market — and how few actually secure it. Representation is built on relationships and a track record of shows, not applications.",
            },
            {
              name: "Grants & commissions",
              detail:
                "The patchwork income of a working artist: public art, grants, editorial and brand commissions. Diversification, not a single salary, is the norm.",
            },
            {
              name: "The freelance business",
              detail:
                "58% of craft and fine artists are self-employed. Contracts, rates, scope, and taxes become as important as the work — most artists run a small business whether they meant to or not.",
            },
          ],
        },
        {
          title: "The Academic Route",
          icon: "📚",
          items: [
            {
              name: "Teaching with an MFA",
              detail:
                "The MFA qualifies you to teach at the college level — but adjunct work is common and tenure-track lines are scarce and shrinking. Go in clear-eyed about the odds.",
            },
            {
              name: "Practice-based / research PhD",
              detail:
                "A doctorate combining studio work with written research. Few exist in the US, such as Northeastern's Interdisciplinary Design and Media PhD and Texas Tech's praxis-based program. For design-research and theory careers, not industry.",
            },
            {
              name: "Art history & education doctorates",
              detail:
                "A separate scholarly track — the PhD in art history or the doctorate in art education — leading to research, curatorial scholarship, or teacher preparation.",
            },
          ],
        },
        {
          title: "Frontiers of the Field",
          icon: "🔬",
          items: [
            {
              name: "AI as a medium",
              detail:
                "Generative and human-in-the-loop workflows are becoming their own practice — artists directing, curating, and subverting models rather than being replaced by them.",
            },
            {
              name: "Design systems & product maturity",
              detail:
                "As software eats everything, mature design systems and product design have become the discipline's most stable, best-paid frontier.",
            },
            {
              name: "Immersive & spatial design",
              detail:
                "XR, spatial computing, and experiential design — where visual craft meets interaction in three dimensions.",
            },
            {
              name: "Socially engaged & speculative work",
              detail:
                "Practices that treat art and design as research into how people live — community-based, activist, and future-oriented.",
            },
            {
              name: "The craft revival",
              detail:
                "As generative tools commoditize the digital, hand skills and material practice are gaining a premium. Scarcity is becoming the analog artist's advantage.",
            },
          ],
        },
        {
          title: "Sustaining It",
          icon: "🛠️",
          items: [
            {
              name: "Directing AI, not fearing it",
              detail:
                "The durable skill is art direction over model output: taste, judgment, and the ability to hold a coherent style across dozens of pieces without drift.",
            },
            {
              name: "Documentation as ongoing work",
              detail:
                "Photographing, writing about, and archiving your work is a permanent part of the job — the portfolio is never finished.",
            },
            {
              name: "Audience & reputation",
              detail:
                "Direct relationships with an audience — clients, collectors, followers — are the moat generative tools can't copy. Reputation compounds; commodity output doesn't.",
            },
          ],
        },
      ],
    },
  ],
  careers: [
    {
      path: "UX & Product Design",
      icon: "📱",
      color: C.ultramarine,
      roles: ["UX Designer", "Product Designer", "Sr. Product Designer", "Design Lead", "Director of Design"],
      reality:
        "The best-paid mainstream destination found for a design graduate. A Fast Company analysis of job listings has product designers offered about $70K at entry, $149,850 at four to five years of experience, and $197,579 at eight or more; UX designers were offered $123,720 and $153,920 at the same stages. A strong portfolio and Figma fluency matter more than any degree.",
      ai: "Fast Company's analysis found UX design more vulnerable to AI than product design. Production UI work looks the most exposed; research and cross-functional judgment are harder to hand to a model (an inference, not a measured result).",
      salary: "~$70K entry → ~$124K UX / ~$150K product at 4–5 yrs → ~$154K UX / ~$198K product at 8+ yrs (Fast Company 2025) · Salary.com avg $112K",
    },
    {
      path: "Graphic & Visual Design",
      icon: "🎨",
      color: C.vermilion,
      roles: ["Junior Designer", "Designer", "Senior Designer", "Art Director"],
      reality:
        "The classic path, and one BLS projects to shrink. There are 253,100 graphic-design jobs, projected growth is -2% through 2035, and the roughly 16,000 yearly openings all come from replacing people who leave. BLS expects AI design tools to make designers more productive and reduce the need for them, while branding and layout work continue. Twenty percent are self-employed. Art direction, which BLS says typically takes five or more years of related experience, is the step up.",
      ai: "BLS: automated design tools such as AI are projected to reduce the need for graphic designers. Production work looks the most exposed; the view that brand and art direction stay human is an inference.",
      salary: "$39,520–$104,910 · median $62,960 (BLS May 2025) · art director median $114,850",
    },
    {
      path: "Illustration & Concept Art",
      icon: "✏️",
      color: C.ochre,
      roles: ["Illustrator", "Concept Artist", "Senior Illustrator", "Art Lead"],
      reality:
        "Mostly freelance and self-employed. BLS says AI-generated illustrations may compete with illustrators, and it reports no illustrator-specific pay. A distinctive personal style paired with a direct audience relationship is the likely hedge. Pay in the wider craft and fine artist group runs from under $31,490 to over $131,810.",
      ai: "BLS names illustrators as the group AI-generated images may compete with. A distinctive hand and voice is the likely hedge (an inference, not a measured result).",
      salary: "Folded into craft/fine artists (median $55,290, BLS May 2025) · no illustrator-specific pay found",
    },
    {
      path: "Animation, Motion & VFX",
      icon: "🎬",
      color: C.aubergine,
      roles: ["Motion Designer", "Animator", "VFX Artist", "Animation Director"],
      reality:
        "Film, TV, games, and advertising. Special-effects artists and animators earn a median of $102,030, one of the best-paid creative roles, but the range runs from under $58,600 to over $177,110, projected growth is 0%, and 63% are self-employed. BLS says AI may dampen demand.",
      ai: "BLS says AI may dampen demand. The sources did not establish which tasks are most exposed; creative direction and complex character animation are likely more durable (an inference).",
      salary: "median $102,030 · $58,600–$177,110 (BLS May 2025)",
    },
    {
      path: "Industrial & Product Design",
      icon: "🪑",
      color: C.slate,
      roles: ["Jr. Industrial Designer", "Industrial Designer", "Senior Designer", "Design Manager"],
      reality:
        "Designing physical objects: furniture, appliances, consumer hardware, toys. A small field (35,400 jobs, about 2,800 openings a year, +2% growth) that expects a bachelor's in industrial design, architecture, engineering, or fine arts, an electronic portfolio, and CAD skills. Adobe's analysis found real pay 8.0% below its 2015 level in 2025.",
      ai: "BLS names no AI effect on this occupation. Physical constraints and manufacturing knowledge probably limit exposure, but that is an inference, not a measured result.",
      salary: "$53,460–$139,770 · median $83,910 (BLS May 2025)",
    },
    {
      path: "Art Direction & Creative Leadership",
      icon: "🎯",
      color: C.crimson,
      roles: ["Senior Designer", "Art Director", "Creative Director", "VP / Chief Creative Officer"],
      reality:
        "The management ceiling for the field. Art directors set the visual direction of campaigns and lead teams of designers; median pay is $114,850 with the top 10% above $213,050, growth is 4%, and BLS lists five or more years of related experience as typical. It's not an entry point: it requires years of craft first, plus taste, communication, and the ability to sell an idea.",
      ai: "No BLS statement on AI for art directors was found. The judgment-and-direction nature of the work suggests resilience, but that is an inference.",
      salary: "median $114,850 · $64,900–$213,050 (BLS May 2025) · creative directors avg ~$146K (Indeed, aggregator)",
    },
    {
      path: "Fine Art & Studio Practice",
      icon: "🖼️",
      color: C.viridian,
      roles: ["Working Artist", "Exhibiting Artist", "Represented Artist", "+ Teaching"],
      reality:
        "The romantic path and the hardest to monetize. Median pay for craft and fine artists is $55,290 with projected growth of -1%, 58% are self-employed, and pay runs from under $31,490 to over $131,810. BLS says portfolios are essential. Success depends on reputation, exhibition history, grants, and gallery access far more than any credential.",
      ai: "BLS flags AI competition for illustrators. For fine art, your hand and vision are the point, though that view is an inference.",
      salary: "median $55,290 · $31,490–$131,810 (BLS May 2025) · 58% self-employed",
    },
    {
      path: "Art Education & Museums",
      icon: "🏛️",
      color: C.sienna,
      roles: ["Teaching Artist", "K-12 Art Teacher", "Professor", "Curator", "Museum Director"],
      reality:
        "The mission-driven path. K-12 art teaching requires a bachelor's and a state license; college teaching generally expects the MFA. Curators typically need a master's, and BLS projects 5% growth for curators with a median of $63,420. Pay is institutional and these roles are competitive.",
      ai: "No BLS statement on AI for teachers or curators was found. Human-facing, pedagogical work is probably slower to automate (an inference).",
      salary: "curators median $63,420 · high school teachers (all subjects) $72,040 (BLS May 2025) · no art-specific K-12 pay found · professors vary by institution",
    },
  ],
};

const font = {
  display: "'Fraunces', serif",
  body: "'Spectral', serif",
  mono: "'Space Mono', monospace",
};

export default function ArtDesignRoadmap({ summary } = {}) {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.aubergine : phase.color;
  const visibleSwatches = swatches.filter(stat => !summary || !stat.inSummary);

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
    borderRadius: 2,
    border: `1px solid ${C.line}`,
    background: C.panel,
    color: C.dim,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all .15s",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: font.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=Spectral:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
        @keyframes chipScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .chipTrack { display: inline-flex; animation: chipScroll 44s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .chipTrack { animation: none; } }
        .hscroll { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .hscroll::-webkit-scrollbar { display: none; }
        button:focus-visible { outline: 2px solid ${C.ink}; outline-offset: 2px; }
      `}</style>

      {/* header */}
      <header style={{ padding: "34px 20px 18px", maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 11,
            color: accent,
            letterSpacing: "0.22em",
            marginBottom: 12,
          }}
        >
          FIELD ROADMAP · SPECIMEN No. 19
        </div>
        <h1
          style={{
            fontFamily: font.display,
            fontWeight: 900,
            fontSize: "clamp(38px, 8vw, 74px)",
            lineHeight: 0.98,
            margin: "0 0 14px",
            letterSpacing: "-0.02em",
          }}
        >
          Art{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400, color: C.vermilion }}>&amp;</span>{" "}
          Design
        </h1>
        <p
          style={{
            color: C.dim,
            fontSize: 16.5,
            maxWidth: 620,
            margin: 0,
            lineHeight: 1.55,
          }}
        >
          From the foundation year to a working practice — the portfolio that gets you hired, the
          terminal degree that gates teaching, and eight destinations priced honestly, with AI's
          split down the middle marked on every one.
        </p>
      </header>

      {summary}

      {/* signature: paint-chip swatch marquee */}
      <div
        style={{
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
          background: "#E8E1D2",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "12px 0",
        }}
        aria-hidden="true"
      >
        <div className="chipTrack">
          {[...visibleSwatches, ...visibleSwatches].map((s, i) => (
            <div
              key={i}
              style={{
                width: 168,
                flexShrink: 0,
                margin: "0 7px",
                background: C.panel,
                border: `1px solid ${C.line}`,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div style={{ height: 40, background: s.c }} />
              <div style={{ padding: "8px 10px 10px" }}>
                <div
                  style={{
                    fontFamily: font.display,
                    fontWeight: 900,
                    fontSize: 20,
                    lineHeight: 1,
                    color: C.ink,
                  }}
                >
                  {s.stat}
                </div>
                <div
                  style={{
                    fontFamily: font.mono,
                    fontSize: 8.5,
                    letterSpacing: "0.06em",
                    color: C.faint,
                    marginTop: 6,
                    whiteSpace: "normal",
                    lineHeight: 1.35,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 64px" }}>
        {/* phase tabs */}
        <nav className="hscroll" style={{ marginBottom: 24 }}>
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
                  borderBottom: on ? `3px solid ${p.color}` : `1px solid ${C.line}`,
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
              border: `1px solid ${showCareers ? C.aubergine : C.line}`,
              color: showCareers ? C.aubergine : C.dim,
              background: showCareers ? C.panelUp : C.panel,
              borderBottom: showCareers ? `3px solid ${C.aubergine}` : `1px solid ${C.line}`,
              fontWeight: 700,
            }}
          >
            Career Paths <span style={{ color: C.faint, marginLeft: 8, fontSize: 10 }}>8 SWATCHES</span>
          </button>
        </nav>

        {!showCareers ? (
          <>
            {/* phase intro */}
            <div style={{ borderLeft: `3px solid ${phase.color}`, paddingLeft: 18, marginBottom: 26 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: phase.color,
                  letterSpacing: "0.16em",
                  marginBottom: 8,
                }}
              >
                {phase.years} · {phase.label.toUpperCase()}
              </div>
              <p style={{ margin: 0, color: C.ink, fontSize: 17, lineHeight: 1.6, maxWidth: 780 }}>
                {phase.intro}
              </p>
            </div>

            {/* section tabs */}
            <div className="hscroll" style={{ marginBottom: 18 }}>
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
                      fontSize: 12,
                      padding: "8px 12px",
                      border: `1px solid ${on ? phase.color : C.line}`,
                      color: on ? C.ink : C.dim,
                      background: on ? C.panelUp : "transparent",
                    }}
                  >
                    {s.icon} {s.title}
                  </button>
                );
              })}
            </div>

            {/* expandable items */}
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
                      borderLeft: `3px solid ${open ? phase.color : C.line}`,
                      borderRadius: 2,
                      padding: "15px 17px",
                      cursor: "pointer",
                      color: C.ink,
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                      <span style={{ fontFamily: font.display, fontWeight: 600, fontSize: 17 }}>
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
                        {open ? "–" : "+"}
                      </span>
                    </div>
                    {open && (
                      <p style={{ margin: "11px 0 0", color: C.dim, fontSize: 15, lineHeight: 1.62 }}>
                        {item.detail}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div style={{ borderLeft: `3px solid ${C.aubergine}`, paddingLeft: 18, marginBottom: 26 }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: C.aubergine,
                  letterSpacing: "0.16em",
                  marginBottom: 8,
                }}
              >
                DESTINATIONS · SALARY: BLS OEWS MAY 2025 + INDUSTRY SOURCES
              </div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: C.ink, maxWidth: 780 }}>
                Eight swatches across the field's range — from the six-figure product-design ceiling
                to the flat, self-employed reality of studio practice. Screen-and-strategy work pays the most;
                BLS projects graphic design, the largest production occupation here, to shrink.
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
                      background: C.panel,
                      border: `1px solid ${open ? c.color : C.line}`,
                      borderRadius: 2,
                      padding: 0,
                      cursor: "pointer",
                      color: C.ink,
                      transition: "all .15s",
                      overflow: "hidden",
                    }}
                  >
                    {/* paint-chip color band */}
                    <div
                      style={{
                        height: open ? 14 : 10,
                        background: c.color,
                        transition: "height .15s",
                      }}
                    />
                    <div style={{ padding: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                        <span style={{ fontSize: 22 }} aria-hidden="true">
                          {c.icon}
                        </span>
                        <span
                          style={{
                            fontFamily: font.display,
                            fontWeight: 900,
                            fontSize: 18,
                            color: c.color,
                            lineHeight: 1.05,
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
                              fontSize: 10,
                              padding: "3px 8px",
                              borderRadius: 2,
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
                        <div style={{ marginTop: 13 }}>
                          <p style={{ margin: "0 0 12px", fontSize: 14.5, lineHeight: 1.62, color: C.dim }}>
                            {c.reality}
                          </p>
                          <div
                            style={{
                              fontFamily: font.mono,
                              fontSize: 11.5,
                              lineHeight: 1.55,
                              color: C.dim,
                              borderTop: `1px solid ${C.line}`,
                              paddingTop: 11,
                              marginBottom: 11,
                            }}
                          >
                            <span style={{ color: c.color, fontWeight: 700 }}>AI EXPOSURE ▸ </span>
                            {c.ai}
                          </div>
                          <div
                            style={{
                              fontFamily: font.mono,
                              fontSize: 12,
                              fontWeight: 700,
                              color: C.ink,
                              background: C.bg,
                              border: `1px solid ${c.color}`,
                              borderLeft: `4px solid ${c.color}`,
                              borderRadius: 2,
                              padding: "9px 11px",
                              lineHeight: 1.45,
                            }}
                          >
                            {c.salary}
                          </div>
                        </div>
                      )}
                    </div>
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
            fontFamily: font.mono,
            fontSize: 11,
            color: C.faint,
            letterSpacing: "0.06em",
            lineHeight: 1.6,
          }}
        >
          TAP ANY ITEM OR SWATCH TO EXPAND · SALARY SOURCES: BLS OEWS MAY 2025, SALARY.COM, FAST
          COMPANY, ADOBE, INDEED · COMPILED NOV 2026
        </footer>
      </main>
    </div>
  );
}
