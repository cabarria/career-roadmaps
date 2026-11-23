# Career Roadmaps

Interactive, research-backed career roadmaps for students choosing a field of study. Each roadmap follows one field from undergraduate study through the master's stage and into PhD or advanced research, then maps the career paths a graduate can actually reach, with salary ranges and honest notes on how competitive each one is.

## Layout

```
career-roadmaps/
├── artifacts/                  Interactive roadmaps (one React file per field)
│   └── <field>-roadmap.jsx
├── research/                   Source research each roadmap is built from
│   └── <field>-research.md
├── field-roadmap-builder.md    The two-stage instructions used to build a roadmap
├── LICENSE                     MIT
└── README.md
```

## What each folder holds

### artifacts/

- 28 single-file React components, one per field, named `<field>-roadmap.jsx`.
- Each has a default export and takes no props, and holds state in React only (no browser storage).
- Four tabs: Undergraduate, Master's, PhD or research, and Career Paths.
- Each phase has sub-section tabs with expandable items. Career Paths is a card grid with role titles, a realistic picture of the path, and a salary range.
- Every field gets its own visual style, so the roadmaps do not look alike.

Fields covered: architecture, art and design, astronomy and astrophysics, biomedical engineering, business administration, civil engineering, computer science, data science, economics, education, electrical engineering, English, environmental engineering, finance, game development, law, mathematics, mechanical engineering, medicine (pre-med), molecular biology, neuroscience, nursing, pharmacy, philosophy, physics, political science, psychology, social work.

### research/

- Markdown research files that back a roadmap, named `<field>-research.md`.
- Sections: TL;DR, Key Findings, Undergraduate, Master's, PhD or research, Tools and AI, Career Paths, Uncertainties and Regional Variation, Sources.
- Every figure carries a source URL and the date it was accessed.
- Every roadmap has a matching research file.

### field-roadmap-builder.md

- The reusable instruction set that produces a roadmap from a single input, a field of study.
- Stage 1 is research, saved as a markdown file. Stage 2 builds the React artifact, populated only from that research file.

## Building a new roadmap

1. Open `field-roadmap-builder.md` and paste its contents into a new conversation.
2. Replace `{{FIELD_OF_STUDY}}` with the field.
3. Save the results as `research/<field>-research.md` and `artifacts/<field>-roadmap.jsx`.

## Using a roadmap

Each file in `artifacts/` is a standalone component that needs only React. Drop it into any React project, or render it as an artifact in Claude.

## Notes on the data

- Salary and job-market figures change quickly. Check the date on each source in the matching research file before relying on a number.
- Degree norms differ by field and by country. The research files flag where a figure is US-specific or where sources disagree.

## License

MIT. See `LICENSE`.
