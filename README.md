# Career Roadmaps

Interactive, research-backed career roadmaps for students choosing a field of study. Each roadmap follows one field from undergraduate study through the master's stage and into PhD or advanced research, then maps the career paths a graduate can actually reach, with salary ranges and honest notes on how competitive each one is.

The site groups all 28 roadmaps into six subject areas. Search by field or topic, use the subject filters, and open a roadmap to explore its stages and download the research notes. Each roadmap card has its own [Lucide icon](https://lucide.dev/icons/) and accent color.

## Layout

```
career-roadmaps/
├── artifacts/                  Interactive roadmaps (one React file per field)
│   └── <field>-roadmap.jsx
├── research/                   Source research each roadmap is built from
│   └── <field>-research.md
├── src/                        Site, roadmap catalog, and career metric data
├── test/                       Catalog and career metric checks
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
4. Add the field to its subject group in `src/catalog.js` and assign it a distinct icon.

## Using a roadmap

Each file in `artifacts/` is a standalone component that needs only React. Drop it into any React project, or render it as an artifact in Claude.

## Running the site

Use Node.js 24. The exact version used for the Pages build is in `.node-version`.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Individual roadmaps have shareable `/roadmaps/<field>` URLs.

`npm run check` checks the catalog, icon assignments, and career metric data. `npm run build` runs those checks and creates the static site in `dist/`. `npm run preview` serves the production build locally.

If NVM for Windows reports `NVM4306` and the project already has its dependencies installed, `node node_modules/vite/bin/vite.js` starts the dev server directly. See the [NVM error reference](https://docs.nvm-windows.com/troubleshooting/error-codes/) for npm trust repair.

### Cloudflare Pages

When ready to publish, connect this repository to a Cloudflare Pages project and use these settings. [Cloudflare Pages React guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/)

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `npm run build` |
| Build output directory | `dist` |

Pages serves `index.html` for direct visits to routes such as `/careers` or `/roadmaps/architecture` through its default single-page app fallback. [Cloudflare Pages routing](https://developers.cloudflare.com/pages/configuration/serving-pages/#single-page-application-spa-rendering)

### Adding career metric datasets

The `/careers` view reads `src/career-data.json`. The data file starts empty and the view displays rankings as sourced datasets are added.

Add each occupation once to `careers` with an `id`, a `title`, and its related `roadmapSlugs`. Add each set of comparable values to `datasets` with an `id`, `label`, `metric`, `source` (`name` and `url`), `geography`, `period`, `methodology`, and `scores` (entries with `careerId` and `value`). Use lowercase hyphenated IDs.

| Metric ID | Value |
| --- | --- |
| `earnings` | Median annual earnings in USD |
| `satisfaction` | Job satisfaction on a documented 0–100 scale |
| `ai-resilience` | Estimated AI resilience on a documented 0–100 scale, with higher values indicating greater resilience |

Keep each comparison within one geography, period, and method. Leave occupations with missing values out of the dataset so that a displayed zero always represents a measured value. The explorer displays the source and methodology and ranks occupations within the selected dataset.

## Notes on the data

- Salary and job-market figures change quickly. Check the date on each source in the matching research file before relying on a number.
- Degree norms differ by field and by country. The research files flag where a figure is US-specific or where sources disagree.

## License

MIT. See `LICENSE`.
