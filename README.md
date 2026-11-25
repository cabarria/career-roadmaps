# Career Roadmaps

Interactive, research-backed career roadmaps for students choosing a field of study. Each roadmap follows one field from undergraduate study through the master's stage and into PhD or advanced research, then maps the career paths a graduate can actually reach, with salary ranges and honest notes on how competitive each one is.

The site groups 28 roadmaps into six subject areas and sorts both the groups and the roadmaps within them alphabetically. Search by field or topic, use the subject filters, and open a roadmap to explore its stages and download the research notes. Each roadmap card has its own [Lucide icon](https://lucide.dev/icons/) and accent color.

Career Metrics (`/careers`) compares earnings by occupation, job satisfaction across three surveys, and degree regret by surveyed major field. Job satisfaction opens with CareerExplorer, followed by the General Social Survey and PayScale in the dataset picker. The AI resilience tab combines Anthropic observed exposure, Microsoft AI applicability, BLS projected job growth and our own qualitative task and career-path assessments, with no composite job-resilience score.

## Layout

```
career-roadmaps/
├── artifacts/                  Interactive roadmaps (one React file per field)
│   └── <field>-roadmap.jsx
├── research/                   Source research each roadmap is built from
│   └── <field>-research.md
├── docs/                       Roadmap builder, metrics documentation and research prompts
│   └── field-roadmap-builder.md
├── scripts/                    Tools for reproducing career metric estimates
├── src/                        Site, roadmap catalog, and career metric data
├── test/                       Catalog and career metric checks
├── LICENSE                     MIT
└── README.md
```

## What each folder holds

### artifacts/

- 28 single-file React components, one per field, named `<field>-roadmap.jsx`.
- Each has a default export, runs on its own, and holds state in React only (no browser storage). The website passes a `summary` element to display the shared career snapshot.
- Four tabs: Undergraduate, Master's, PhD or research, and Career Paths.
- Each phase has sub-section tabs with expandable items. Career Paths is a card grid with role titles, a realistic picture of the path, and a salary range.
- Every field gets its own visual style, so the roadmaps do not look alike.

Fields covered: architecture, art and design, astronomy and astrophysics, biomedical engineering, business administration, civil engineering, computer science, data science, economics, education, electrical engineering, English, environmental engineering, finance, game development, law, mathematics, mechanical engineering, medicine (pre-med), molecular biology, neuroscience, nursing, pharmacy, philosophy, physics, political science, psychology, social work.

### research/

- Markdown research files that back a roadmap, named `<field>-research.md`.
- Sections: TL;DR, Key Findings, Undergraduate, Master's, PhD or research, Tools and AI, Career Paths, Uncertainties and Regional Variation, Sources.
- Every figure carries a source URL and the date it was accessed.
- Every roadmap has a matching research file.

### docs/

- The [roadmap builder](docs/field-roadmap-builder.md) is a reusable instruction set that produces a roadmap from a single input, a field of study.
- Stage 1 is research, saved as a markdown file. Stage 2 builds the React artifact, populated only from that research file.

## Building a new roadmap

1. Open [`docs/field-roadmap-builder.md`](docs/field-roadmap-builder.md) and paste its contents into a new conversation.
2. Replace `{{FIELD_OF_STUDY}}` with the field.
3. Save the results as `research/<field>-research.md` and `artifacts/<field>-roadmap.jsx`.
4. Add the field to its subject group in `src/catalog.js` and assign it a distinct icon.
5. Accept an optional `summary` prop and render it after the roadmap header, before the phase navigation. Add its featured occupation and four snapshot figures to `src/career-data.json`. See the [metrics inventory](docs/roadmap-metrics.md) for definitions and sources.
6. Assess the new field using the [AI resilience research prompt](docs/ai-resilience-research-prompt.md). Update its profile, evidence and coverage ledgers, and regenerate the comparison data using the scripts documented in [comparison indicators](docs/ai-resilience/comparison-indicators.md). Document unsupported occupation matches instead of inventing scores, and update the test coverage expectations to match the verified inventory.
7. Run `npm run check` and `npm run build`.

## Using a roadmap

Each file in `artifacts/` is a standalone component that needs only React. Drop it into any React project, or render it as an artifact in Claude.

## Running the site

Use Node.js 24. The project's pinned Node version is in `.node-version`.

On Windows, start the local development server from the repository root:

```powershell
.\scripts\start-local.cmd
```

The launcher uses the installed project Node version when available, installs dependencies if needed, and serves the site at `http://127.0.0.1:5173/`. Use `--open` to open it in your browser or `--port 5174` to choose a different port. Press Ctrl+C to stop it.

On other platforms, or when Node and npm are configured normally:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Individual roadmaps have shareable `/roadmaps/<field>` URLs.

`npm run check` checks the catalog, icon assignments, and career metric data. `npm run build` runs those checks and creates the static site in `dist/`. `npm run preview` serves the production build locally.

If NVM for Windows reports `NVM4306` and the project already has its dependencies installed, `node node_modules/vite/bin/vite.js` starts the dev server directly. See the [NVM error reference](https://docs.nvm-windows.com/troubleshooting/error-codes/) for npm trust repair.

### Deployment

Build the static site from the repository root with `npm ci` followed by `npm run build`, then publish `dist/` with a static hosting provider.

For repository-connected hosting, configure the deployment branch, hosting project name, account, and optional custom domain in your hosting provider, not in this repository. Configure single-page app fallback to `index.html` so direct visits to routes such as `/careers` and `/roadmaps/architecture` work. No hosting credentials are needed to build or run the app locally.

### Adding career metric datasets

The roadmap snapshots and `/careers` view read `src/career-data.json`. The snapshots use the May 2025 earnings dataset and the 2025–35 employment outlook for a featured occupation. The earnings ranking uses the same wages. The [metrics inventory](docs/roadmap-metrics.md) documents the original roadmap summaries, available research figures, and JSON structure.

Add each occupation once to `careers` and each surveyed major category once to `degreeFields`, with an `id`, a `title`, and its related `roadmapSlugs`. Add each set of comparable values to `datasets` with an `id`, `label`, `metric`, `source` (`name` and `url`), `geography`, `period`, `methodology`, and `scores`. Each score has a numeric `value` and either a `careerId` or a `degreeFieldId` for degree regret. Use lowercase hyphenated IDs. Occupation scores can specify `sourceTitle` when the survey category differs from the roadmap occupation and `sourceUrl` for individual survey pages.

| Metric ID | Value |
| --- | --- |
| `earnings` | Median annual earnings in USD |
| `satisfaction` | Percentage reporting job satisfaction, or an original 1–5 rating for datasets with `scale` set to `stars` |
| `degree-regret` | Percentage of graduates regretting their choice of academic major, by survey major field |
| `ai-resilience` | Published AI exposure indicators: `scale: exposure-percent` or `applicability-points`, with `sortOrder: ascending`; projected growth is separate |

Keep each comparison within one geography, period, and method. Leave occupations with missing values out of the dataset so that a displayed zero always represents a measured value. The explorer displays the source and methodology and ranks occupations within the selected dataset.

The [survey comparison notes](docs/satisfaction-and-degree-regret.md) document CareerExplorer, PayScale, and ZipRecruiter. The [GSS research](docs/job-satisfaction.md) explains how to reproduce the GSS estimates. See the [AI resilience research report](docs/ai-resilience/report.md) and [comparison-indicator methodology](docs/ai-resilience/comparison-indicators.md) for the exposure metrics, source data and reproduction instructions. After editing the AI resilience profiles or ledgers, run `python scripts/build-ai-research.py` to refresh the comparison-page research data.

## Notes on the data

- Salary and job-market figures change quickly. Check the date on each source in the matching research file before relying on a number.
- Degree norms differ by field and by country. The research files flag where a figure is US-specific or where sources disagree.

## License

MIT. See `LICENSE`.
