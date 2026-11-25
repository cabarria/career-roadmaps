---
name: research-ai-resilience
description: Research AI exposure, human responsibilities, hiring pathways and student preparation for one or more Career Roadmaps, maintaining cited occupation profiles and evidence and coverage ledgers. Use for AI resilience research, not generic comparison UI changes.
---

# Research AI resilience

Read [research-workflow.md](references/research-workflow.md) for the definitions, occupation-mapping procedure, research leads, scoring criteria and deliverables. Use current catalog and career data, not the reference's historical inventory, as the authoritative scope. Read `docs/ai-resilience/comparison-indicators.md` for current published measures and reproduction steps.

1. Establish scope and evidence cutoff; default to all catalog entries only for a requested full refresh. Read the matching roadmap and research notes, including every Career Paths card. For a partial update preserve unrelated profiles and ledger rows.
2. Verify original sources. Map the featured occupation and each career path, distinguish proxy/grouped matches, and record 4–8 sourced tasks for each featured occupation. Separate observable use, exposure, adoption, productivity, demand and conditional scenarios. Retain uncertainty, source limitations, and missing matches; do not infer risk percentages from task counts.
3. Update `research/ai-resilience/report.md`, `roadmaps/<slug>.md`, `evidence.csv` and `coverage.csv` as appropriate. Read existing profiles, CSV headers and `scripts/build-ai-research.py` before writing: preserve the expected Markdown headings, stable path IDs and date/data contract. All generated profiles currently use a shared evidence cutoff; reconcile this explicitly without falsely relabeling old evidence as newly verified.
4. Keep any proposed new dataset separate from production until its methodology and occupation matches are supported and approved for integration. Existing published exposure indicators and job-growth context are separate measures, not a validated composite resilience score. If appropriate, use `update-career-comparisons` to integrate or refresh the comparison.
5. When updating production inputs, regenerate `python scripts/build-ai-research.py`, verify with `python scripts/build-ai-research.py --check` and run `npm run build`. Confirm in-scope profiles, paths, source links and task counts reconcile; report gaps and evidence needed to resolve them.
