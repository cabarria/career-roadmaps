# Contributing to Career Roadmaps

Contributions are welcome, including corrections to research, new roadmaps, accessibility improvements, and fixes to the site. Please keep discussions respectful and focused on the evidence and the needs of students.

## Propose a change

1. Check existing [issues](https://github.com/cabarria/career-roadmaps/issues) and [pull requests](https://github.com/cabarria/career-roadmaps/pulls). Open an issue for substantial changes or to report a bug; include the affected roadmap or page, expected behavior, and relevant sources or reproduction steps.
2. [Fork the repository](https://github.com/cabarria/career-roadmaps/fork), clone your fork, and create a branch from its current `main`.
3. Make a focused change and run the applicable checks below. Avoid unrelated edits.
4. Commit and push the branch to your fork. Open a pull request against the upstream `main` branch, summarizing the change, the checks performed, and any limitations. Include screenshots for visible changes and link supporting sources for research changes.
5. Respond to review feedback. Maintainers decide whether to merge the contribution. You do not need write access to the upstream repository to submit a pull request.

## Set up locally

Use Node.js 24 (the pinned version is in `.node-version`). From the repository root:

```sh
npm ci
npm run dev
```

On Windows, `scripts\start-local.cmd` is an alternative launcher. No hosting account, credentials, or personal machine configuration is required.

## Make research and roadmap changes

- Follow the [build-roadmap skill](.ai/skills/build-roadmap/SKILL.md) and the [new roadmap checklist](README.md#building-a-new-roadmap).
- Keep source research in `research/`, roadmap components in `artifacts/`, and contributor-facing instructions and methods in `docs/`. The files under `research/ai-resilience/` are application inputs, including Markdown profiles and downloadable reports.
- Cite primary sources where possible, include observation and access dates, describe geography and scope, and clearly distinguish measured values from estimates or qualitative judgments. Never invent missing data or silently change a metric's definition.
- For AI resilience inputs, follow the [comparison methodology](docs/ai-resilience/comparison-indicators.md), update the underlying evidence and coverage, and regenerate the affected data.
- For new roadmaps, evaluate every current comparison dataset using the [original source register](docs/roadmap-metrics.md#comparison-source-register) and [update-career-comparisons](.ai/skills/update-career-comparisons/SKILL.md). Document coverage and reasons for unavailable values. Use [research-ai-resilience](.ai/skills/research-ai-resilience/SKILL.md) for changes to AI-related research.

## Validate your change

| Change | Checks before submitting |
| --- | --- |
| General documentation or this guide | Review formatting and links; no application tests needed. |
| Site, roadmap, research or metric data, dependencies, or build configuration | Run `npm run build` (includes the Node test suite); check affected pages and downloads locally. |
| AI resilience research profiles or evidence/coverage ledgers | Run `python scripts/build-ai-research.py` to regenerate the data, then `python scripts/build-ai-research.py --check` and `npm run build`. |
| AI exposure indicator inputs | Follow the [reproduction instructions](docs/ai-resilience/comparison-indicators.md) and run `npm run build`. |
| Development or data scripts | Exercise the affected script using the inputs documented for it. |
| AI instructions or skills | Edit canonical sources under `.ai/`, regenerate native files and run `python scripts/sync_ai_instructions.py --check`; see [the AI instruction guide](.ai/README.md). No application tests needed for instruction-only changes. |

Do not commit credentials, machine-specific settings, dependencies, generated build output, or personal data. Contributions should be compatible with the repository's [MIT license](LICENSE); preserve source attributions and respect the licenses of third-party data.
