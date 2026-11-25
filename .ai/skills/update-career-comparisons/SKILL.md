---
name: update-career-comparisons
description: Research, add, verify or refresh comparable metrics on Career Roadmaps, including occupational earnings and outlook, job satisfaction, degree regret, and published AI exposure indicators. Use for comparison datasets and roadmap snapshot data, not a full roadmap build.
---

# Update career comparisons

Work from the repository root. Determine the requested metric and scope before changing data. Read `src/career-data.json`, `src/metrics.js`, `src/CareerMetrics.jsx`, `src/catalog.js` and the relevant section of `test/site.test.js`. Use the current catalog rather than hard-coding its size.

## Select the applicable methodology

- **Earnings and employment:** `docs/roadmap-metrics.md` documents the shared BLS snapshot and JSON contract. Keep occupation code, source release, baseline year, wage statistic, geography, projection years, job counts, growth and openings aligned. Explain representative occupation scope for broad fields.
- **Job satisfaction or degree regret:** read `docs/satisfaction-and-degree-regret.md`. Preserve the original survey question, population, period, category, scale and source title. For GSS, read `docs/job-satisfaction.md` and use `scripts/estimate-gss-satisfaction.py` with the documented source file and precision criteria. Avoid making unlike surveys or major fields appear interchangeable.
- **AI exposure and task context:** read `docs/ai-resilience/comparison-indicators.md` and `research/ai-resilience/report.md`. Use pinned inputs and `scripts/update-ai-indicators.py` to reproduce the supported exposure datasets, with `research/ai-resilience/comparison-inputs.csv` recording the source observations. Use `research-ai-resilience` for changes to underlying profiles and ledgers and regenerate `src/ai-resilience-research.json` with `scripts/build-ai-research.py`.

## Update safely

1. Find primary sources and verify the observation period, geography, taxonomy, sample or denominator and unit. Compare only like measures within a dataset. Do not interpret missing values as zero; keep actual zero values, explicitly label proxy or partial coverage, and omit unsupported estimates.
2. Preserve existing `careerId` and `degreeFieldId` values and their links to roadmap slugs. Keep new ID and dataset metadata consistent with `docs/roadmap-metrics.md`. Degree regret is keyed by surveyed major field, not occupation. Retain `sourceTitle`, row-specific sources, sample sizes and confidence intervals when available.
3. For an authorized new dataset, state the age, methodology, scale, and limitations; make the ranking direction and display format explicit in `src/metrics.js` if the existing scale does not apply. Do not concatenate unrelated values or fabricate a composite. Update methodology documentation and source notes alongside data. For proposed datasets awaiting review, keep candidate data separate from production.
4. Update any genuinely affected coverage assertions, not just hard-coded totals to make a failing check pass. Run `npm run build`; for AI profile changes also run `python scripts/build-ai-research.py --check`. Reproduce at least one changed value from original inputs and check dataset selectors, units, ordering, missing data and roadmap summaries in the browser if available.

Report what changed, its coverage and limitations, the sources used and the checks actually run.
