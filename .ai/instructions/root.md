# Career Roadmaps project instructions

- Read `README.md` and `CONTRIBUTING.md` for the repository layout and contribution process. Work from the repository root and use repository-relative paths.
- Keep source research in `research/`, standalone roadmap components in `artifacts/`, application data and behavior in `src/`, and human-facing methodology in `docs/`. The application consumes files in `research/` directly; do not relocate those inputs into documentation.
- Use the `build-roadmap` skill for new or substantially revised roadmaps, `update-career-comparisons` for the metrics and comparison datasets, and `research-ai-resilience` for AI-related occupational and career-path research. Read only the relevant workflow.
- Preserve evidence scope, units, dates, source attributions and stable identifiers. Never invent missing observations or conflate occupational exposure with job loss.
- Validate according to the change: `npm run build` includes the Node tests; generated AI research has a separate `python scripts/build-ai-research.py --check`. General documentation alone does not require application tests.
- Keep machine-specific configuration, credentials and hosting accounts out of committed files; no hosting access is necessary for local development. Do not deploy or merge unless requested.
- Edit canonical AI guidance under `.ai/` and regenerate with `python scripts/sync_ai_instructions.py`; commit canonical sources, native outputs and manifests together. Do not edit generated files directly.
