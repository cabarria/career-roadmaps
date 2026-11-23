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
  { c: C.ultramarine, stat: "$150K+", label: "SENIOR PRODUCT DESIGNER" },
  { c: C.vermilion, stat: "−33%", label: "GRAPHIC DESIGN POSTINGS · 2025" },
  { c: C.crimson, stat: "$111,040", label: "ART DIRECTOR · MEDIAN" },
  { c: C.aubergine, stat: "$99,800", label: "SFX ARTIST / ANIMATOR · MEDIAN" },
  { c: C.viridian, stat: "57%", label: "FINE ARTISTS SELF-EMPLOYED" },
  { c: C.ochre, stat: "44%", label: "ARTS MASTER'S AT LOAN RISK" },
  { c: C.slate, stat: "$79,450", label: "INDUSTRIAL DESIGNER · MEDIAN" },
  { c: C.sienna, stat: "No.1", label: "\"DESIGN\" · TOP AI-POSTING SKILL" },
];

const data = {
  phases: [
    {
      id: "undergrad",
      label: "Undergraduate",
      years: "YRS 1–4",
      color: C.vermilion,
      intro:
        "A BFA is the professional degree — roughly 70% studio credits — while a BA is the liberal-arts version and a BS leans technical. But the piece of paper isn't what gets you hired: the portfolio is. Year one is a shared 'foundation' in the grammar of making, and the field's real weeder isn't a course — it's the critique, where you stand up and defend your work in the room.",
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
                "Gestalt, hierarchy, grid, and the craft of setting type. Typography is the single most transferable skill across graphic, UX, and editorial work.",
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
                "Employers consistently rank a strong, original portfolio above GPA or school name. Everything you make in four years is auditioning for this document.",
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
                "The default tool for anything on a screen, and what UX and product designers use more than any other. Figma fluency opens the highest-paying door in the field.",
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
                "Roughly 60% of design programs now embed AI (Midjourney, Firefly, DALL·E). The skill that matters isn't prompting for fun — it's art-directing model output to a brief.",
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
                "Top public programs offer teaching assistantships and fellowships with tuition remission plus stipends of roughly $30,000–$40,000. If you go, aim for full funding.",
            },
            {
              name: "The debt trap",
              detail:
                "Unfunded programs routinely run $100,000+. Critics inside the field are blunt: there are too many MFA programs and too many graduates for the market to absorb.",
            },
            {
              name: "The 2025 earnings test",
              detail:
                "A new federal rule ties graduate loan eligibility to out-earning a bachelor's holder. An estimated 44% of arts master's programs are projected to fail — versus 6% of programs overall — risking loss of federal loans as soon as 2028.",
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
                "57% of fine artists are self-employed. Contracts, rates, scope, and taxes become as important as the work — most artists run a small business whether they meant to or not.",
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
                "A doctorate combining studio work with written research, well established in the UK and Europe and growing in the US. For design-research and theory careers, not industry.",
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
        "The single most lucrative — and most AI-resilient — destination for a design graduate. Entry roles start around $70K; mid-career product designers earn $114K–$150K, senior product designers $150K–$200K+, and big-tech total comp can top $300K with equity. A strong portfolio and Figma fluency matter more than any degree. The catch: entry-level is crowded thanks to a bootcamp glut, so juniors must prove real user-research and systems thinking, not just pretty screens.",
      ai: "Most resilient design path — AI can't run user research, information architecture, or cross-functional judgment. Production UI tasks are exposed; strategy is not.",
      salary: "$70K entry → $114K–$150K mid (product) → $150K–$200K+ senior · $300K+ total comp at big tech",
    },
    {
      path: "Graphic & Visual Design",
      icon: "🎨",
      color: C.vermilion,
      roles: ["Junior Designer", "Designer", "Senior Designer", "Art Director"],
      reality:
        "The classic path — and now the most disrupted. There are ~266,000 graphic-design jobs, but projected growth is just 2% and job postings fell 33% in 2025. Commodity production (social graphics, banners, simple layouts) is being commoditized fastest by generative tools. The designers who survive move up into brand, strategy, and art direction, where taste and judgment still command a premium.",
      ai: "Highest displacement risk in the field for production work — roughly 88% risk without AI skills. The brand/art-direction ceiling stays human.",
      salary: "$37,600–$103,030 · median $61,300 (BLS 2024) · art director median $111,040",
    },
    {
      path: "Illustration & Concept Art",
      icon: "✏️",
      color: C.ochre,
      roles: ["Illustrator", "Concept Artist", "Senior Illustrator", "Art Lead"],
      reality:
        "Mostly freelance and self-employed, and among the hardest-hit corners of the field. Generative image models have compressed rates and evaporated commodity commissions at the low end. What survives — and even thrives — is a signature, unfakeable personal style paired with a direct audience relationship. Income is bimodal: a thin top tier does well; most piece it together.",
      ai: "Front line of disruption. A distinctive hand and voice are the moat; generic 'stock-style' illustration is being automated first.",
      salary: "Folded into craft/fine artists (median $56,260) · freelance $20–$150/hr, highly variable",
    },
    {
      path: "Animation, Motion & VFX",
      icon: "🎬",
      color: C.aubergine,
      roles: ["Motion Designer", "Animator", "VFX Artist", "Animation Director"],
      reality:
        "Film, TV, games, and advertising. Special-effects artists and animators earn a median of $99,800 — one of the best-paid creative roles — but hiring is cyclical and geographically concentrated (LA, Vancouver, Atlanta). Roughly 21% of film/TV/animation jobs are projected to face generative-AI pressure by 2026, and special-effects tasks score among the highest AI-exposure of any creative work.",
      ai: "High exposure for mid-pipeline tasks (in-betweening, cleanup, effects). Creative direction and complex character animation are more durable.",
      salary: "median $99,800 (BLS 2024) · ~$50K entry → $130K+ senior; studio and pipeline dependent",
    },
    {
      path: "Industrial & Product Design",
      icon: "🪑",
      color: C.slate,
      roles: ["Jr. Industrial Designer", "Industrial Designer", "Senior Designer", "Design Manager"],
      reality:
        "Designing physical objects — furniture, appliances, consumer hardware, toys. A small field (~35,000 jobs, ~2,500 openings a year) that rewards engineering-adjacent skills: CAD, materials, ergonomics, manufacturing. Because it touches the physical world, it's more insulated from generative AI than screen design — but pay has trailed inflation over the last decade.",
      ai: "Lower exposure — physical constraints, prototyping, and manufacturing knowledge protect it. AI assists ideation more than execution.",
      salary: "$49,390–$134,840 · median $79,450 (BLS 2024)",
    },
    {
      path: "Art Direction & Creative Leadership",
      icon: "🎯",
      color: C.crimson,
      roles: ["Senior Designer", "Art Director", "Creative Director", "VP / Chief Creative Officer"],
      reality:
        "The management ceiling for the entire field. Art directors set the visual direction of campaigns and lead teams of designers; median pay is $111,040 with the top 10% above $211,410. It's not an entry point — it requires years of craft first, plus taste, communication, and the ability to sell an idea. Precisely because it's judgment and direction, it's among the most AI-resilient roles here.",
      ai: "Resilient — this is the 'own the strategy and the taste' tier. AI accelerates the team's output; it doesn't set the direction.",
      salary: "median $111,040 · $61,060–$211,410 (BLS 2024) · CD/CCO $150K–$300K+",
    },
    {
      path: "Fine Art & Studio Practice",
      icon: "🖼️",
      color: C.viridian,
      roles: ["Working Artist", "Exhibiting Artist", "Represented Artist", "+ Teaching"],
      reality:
        "The romantic path and the hardest to monetize. Median pay for craft and fine artists is $56,260 with essentially flat growth, 57% are self-employed, and most sustain a practice with a second job. Success depends on reputation, exhibition history, grants, and gallery access far more than any credential — the market is severe and success is bimodal.",
      ai: "Your hand and vision are the point; AI is more a conceptual provocation than a threat — though it does flood the low-end print/decor market.",
      salary: "median $56,260 (BLS 2024) · income highly bimodal; most modest, a small top tier substantial",
    },
    {
      path: "Art Education & Museums",
      icon: "🏛️",
      color: C.sienna,
      roles: ["Teaching Artist", "K-12 Art Teacher", "Professor", "Curator", "Museum Director"],
      reality:
        "The stable, mission-driven path. K-12 art teaching requires a state license; college teaching requires the MFA. Curatorial and museum roles are growing faster than the field (~11–12%) but are competitive and credential-heavy. Pay is modest and institutional, but the work is durable and among the least exposed to automation in the whole discipline.",
      ai: "Low exposure — human-facing, pedagogical, and institutional work that automation reaches slowly.",
      salary: "art teachers ~$50K–$65K · curators ~$61K median · professors vary widely by institution",
    },
  ],
};

const font = {
  display: "'Fraunces', serif",
  body: "'Spectral', serif",
  mono: "'Space Mono', monospace",
};

export default function ArtDesignRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const phase = data.phases.find((p) => p.id === activePhase);
  const accent = showCareers ? C.aubergine : phase.color;

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
          {[...swatches, ...swatches].map((s, i) => (
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
                DESTINATIONS · SALARY: BLS OEWS MAY 2024 + INDUSTRY SOURCES
              </div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: C.ink, maxWidth: 780 }}>
                Eight swatches across the field's range — from the six-figure product-design ceiling
                to the flat, self-employed reality of studio practice. Screen-and-strategy work pays
                and resists automation; commodity production is being compressed fastest.
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
          TAP ANY ITEM OR SWATCH TO EXPAND · SALARY SOURCES: BLS OEWS MAY 2024, GLASSDOOR, FAST
          COMPANY, ADOBE / FIGMA INDUSTRY REPORTS · COMPILED JUL 2026
        </footer>
      </main>
    </div>
  );
}
