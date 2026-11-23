# Field-of-Study Roadmap Builder

A reusable, two-stage instruction set. Give it **one input** — a field of study — and it produces a researched, interactive career-roadmap artifact, the same way the Molecular Biology roadmap was built.

**Usage:** Paste everything below the line into a new conversation, then replace `{{FIELD_OF_STUDY}}` with your field. Examples: Psychology, Electrical Engineering, Materials Engineering, Mathematical Physics, Astronomy, Computer Science, Economics, Mechanical Engineering, Neuroscience, Chemistry.

---

# ROADMAP BUILDER — INPUT: `{{FIELD_OF_STUDY}}`

You will build an interactive career roadmap for a student about to begin an undergraduate program in **{{FIELD_OF_STUDY}}**. Work in two stages: **(1) Research**, then **(2) Artifact creation**. Do not skip the research stage — the artifact's quality depends on grounding it in current, accurate information.

## STAGE 1 — RESEARCH

Run a focused research pass before writing any code. Aim for roughly 8–15 searches; scale up for broad fields, down for narrow ones. Prioritize current information (degree structures, tool adoption, and especially salary/job-market data change over time).

Investigate and take notes on each of the following. If something does not apply to the field, drop it rather than forcing it.

1. **Undergraduate foundation (Years 1–4)**
   - Core required courses and the conceptual backbone of the discipline.
   - The "weeder" or notoriously hard courses students should brace for.
   - Hands-on / lab / studio / project / fieldwork skills developed.
   - Foundational tools, software, instruments, or methods taught early.
   - High-value extracurriculars: undergraduate research, named internships/REUs, competitions, societies, portfolio-building.

2. **Master's stage (Years ~5–7)**
   - The main *types* of master's programs in this field (e.g. thesis vs. coursework/professional; named specializations) and who each is for.
   - Funding norms (funded research degrees vs. self-funded professional degrees).
   - Advanced technical skills, methods, and tools introduced.
   - Whether a master's is a common terminal degree, a PhD bridge, or often skipped entirely (varies a lot by field — verify, don't assume).

3. **PhD / advanced research stage (Years ~8+)**
   - What doctoral training actually looks like in this field (rotations? quals/comps? thesis structure? typical duration? funding model?).
   - The current cutting-edge / active research frontiers — be specific and current, name real subfields and recent directions.
   - How AI/computation is (or isn't) reshaping the field's research, if relevant.

4. **Tools, software, and AI adoption**
   - The genuinely standard tools/instruments/software at each level.
   - Where AI or computational methods fit — and, where you can find it, the honest practitioner view of utility vs. hype.

5. **Career paths (the centerpiece)**
   - Identify 6–8 *distinct* destinations a graduate can reach. Cover the full breadth, not just the obvious one. Typically: academia; the dominant industry sector(s) for this field; an adjacent technical/quantitative path; a policy/regulatory/standards path; a clinical/applied/professional path if relevant; entrepreneurship/startups; communication/education/media. Adapt to the field.
   - For each: representative job titles laddered junior→senior, a realistic 2–4 sentence picture of how competitive/accessible it is and what it actually requires, and a current salary range (search for this — don't guess).

**Research output (two parts, both required):**

1. Save the full research as a markdown file named `{{field-slug}}-research.md` (for example `law-research.md`). Required sections: TL;DR, Key Findings, Undergraduate, Master's, PhD/Research, Tools and AI, Career Paths (titles, reality, salary, and source for each), Uncertainties and Regional Variation, Sources (URL and date accessed for every figure).
2. Then give a one-screen conversational synthesis in chat so the user can sanity-check it before Stage 2. Flag anything you're uncertain about or that varies widely by region/institution.

Do not start Stage 2 until the research file exists. If a one-shot request says "do the research and build the artifact", still produce both files. Skip the research file only if the user explicitly says to.

## STAGE 2 — ARTIFACT CREATION

First read the frontend-design skill if available (`/mnt/skills/public/frontend-design/SKILL.md`). Then build a **single-file React artifact** that mirrors the structure of the reference roadmap below, populated entirely from Stage 1 research. Populate the JSX only from the research file. If the JSX needs a fact the file lacks, add it to the file first.

### Required structure
- A header with the field name and a one-line framing.
- A top navigation bar with **four tabs**: three life-stage phases (Undergraduate, Master's, PhD/Research) plus a fourth **Career Paths** tab.
- Each phase has: a short intro paragraph, then a set of **sub-section tabs** (e.g. "Core Curriculum", "Skills You'll Develop", "Tools & AI", "Beyond the Classroom" — adapt section names per phase and per field), and under each, a list of **expandable items** (title + a 1–2 sentence detail revealed on tap).
- The Career Paths tab shows a responsive **card grid**, one card per path: icon, colored title, a row of role-title chips, and on expand, the realistic-picture paragraph plus a highlighted salary range.
- State: track active phase, active sub-section, which item is expanded, and whether the careers view is shown. Tapping an expanded item collapses it.

### Design requirements (per the frontend-design skill)
- **Pick a distinctive aesthetic tailored to the field**, don't reuse Molecular Biology's exact palette. Each field should feel different — Astronomy might be deep-space dark with luminous accents; Materials Engineering might be industrial/metallic; Psychology might be warm and editorial; Mathematical Physics might be precise, monochrome, grid-based. Choose intentional fonts (avoid Inter/Roboto/Arial), a cohesive color system via inline style constants, and per-phase accent colors.
- Mobile-first: horizontally scrollable tab bars, responsive card grid (`repeat(auto-fill, minmax(280px, 1fr))`), readable tap targets.
- No external UI libraries beyond what the artifact environment supports; **no localStorage/sessionStorage** (use React state only). Use a default export and require no props.
- Include a short footer hint telling users to tap items to expand.

### Reference implementation
Match this shape and interaction model (adapt content and visuals to the field). The data object should hold `phases` (each with `id`, `label`, `years`, `color`, `intro`, and `sections[]` of `{title, icon, items[{name, detail}]}`) and `careers` (each with `path`, `icon`, `color`, `roles[]`, `reality`, `salary`).

```jsx
import { useState } from "react";

const data = {
  phases: [
    { id: "undergrad", label: "Undergraduate", years: "Years 1–4", color: "#...",
      intro: "...",
      sections: [
        { title: "Core Curriculum", icon: "📘", items: [ { name: "...", detail: "..." } ] }
      ] }
    // masters, research ...
  ],
  careers: [
    { path: "...", icon: "🏛️", color: "#...", roles: ["...","..."], reality: "...", salary: "$...–$..." }
  ]
};

export default function FieldRoadmap() {
  const [activePhase, setActivePhase] = useState("undergrad");
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCareers, setShowCareers] = useState(false);
  // header → phase tabs + Career Paths tab → phase intro → section tabs →
  // expandable item list  /  OR  career card grid
  // (collapse expandedItem on phase/section change; tapping an open item closes it)
}
```

### Quality bar
- Every list item and career card must be populated with **real, field-specific content from Stage 1** — no placeholder text, no generic filler.
- Salary ranges and "reality" paragraphs must reflect what the research actually found, including honest notes on competitiveness (e.g. tenure-track scarcity, licensure requirements, geographic concentration).
- 6–8 career paths covering genuine breadth.
- Deliver both files with `present_files`: `{{field-slug}}-research.md` and `{{field-slug}}-roadmap.jsx`. Then save both to the project with `project_write`. Then give a short summary that surfaces 3–4 of the most useful or non-obvious insights from the research — not a description of the artifact's features.

## NOTES ON ADAPTING PER FIELD
- **Degree norms vary.** In some fields (much of engineering, CS) a bachelor's is fully employable and a master's is optional; in others (psychology clinical work, academia broadly) advanced degrees are gatekeepers. In some (law-adjacent, medicine) the path is entirely different. Let the research reset your assumptions — don't force every field into the Molecular Biology mold.
- **"Research" may mean studio, fieldwork, observation, proof, or simulation** depending on the field. Rename sections honestly.
- **Licensure/certification** matters in some fields (PE for engineering, clinical licensure for psychology) — surface it where it gates careers.
- If the field is interdisciplinary, note the most common entry routes and which adjacent skills create the biggest advantage.

## DONE CHECKLIST
- [ ] Research file written and delivered
- [ ] JSX written, validated, and delivered
- [ ] Both saved to the project
- [ ] Chat summary lists both file names
