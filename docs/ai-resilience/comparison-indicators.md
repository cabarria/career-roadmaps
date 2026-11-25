# AI resilience comparison indicators

The [AI resilience review](report.md) did not establish a validated composite job-resilience score. The site's comparison tab instead presents two separate published indicators of AI exposure, plus BLS projected job growth as demand context. Neither indicator estimates the probability of losing a job, and low exposure does not guarantee employment resilience.

## Sources and display

| Dataset | Source and period | Published measure | Display |
| --- | --- | --- | --- |
| Observed AI exposure | [Massenkoff and McCrory, Anthropic, March 2026](https://www.anthropic.com/research/labor-market-impacts); August and November 2025 usage | Theoretically feasible O*NET tasks with sufficiently frequent work-related Claude use, weighted by automation/augmentation and estimated task time | Fraction × 100, presented as a percentage; lower values first |
| AI applicability | [Tomlinson et al., Microsoft Research, NeurIPS 2026](https://github.com/microsoft/working-with-ai); January–September 2024 US Bing Copilot conversations; v1.1 | Work activity coverage, estimated completion and moderate-or-greater impact, weighted using O*NET 29.0 activity relevance and importance; user-goal and AI-action scores averaged | Original index × 100, displayed as points out of 100; lower values first |
| Projected job growth | [BLS Employment Projections Table 1.2](https://www.bls.gov/emp/tables/occupational-projections-and-characteristics.htm), 2025–35 | Employment change across all factors | Existing signed percentage, shown beside each exposure indicator; not a component of the indicators |

The first two use different measures and observation periods; compare occupations *within* each dataset, not raw values between them. Both rely on tool-specific activity and classification; neither measures representative employer adoption, future capability, human accountability or causal employment effects. Microsoft explicitly states that applicability should not be interpreted as a replacement estimate. Its data are [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Anthropic's zero values mean the exposure measure did not reach its threshold, not that the occupation cannot be affected by AI.

BLS also publishes [four relative AI exposure categories](https://www.bls.gov/emp/publications/ai-exposure-categories.htm) (August 27, 2026), combining theoretical and observed sources; those classifications are not a 0–100 resilience measure. They reinforce the need to distinguish exposure from outcomes.

## Occupation match

Each row is joined by the six-digit 2018 SOC code in the site's BLS National Employment Matrix data. Twenty-six detailed occupations have direct source matches. The game-art, family medicine and neuroscience (among others) anchors represent only the specific featured occupation, not an entire field; see the individual research profiles.

Psychologists (19-3030) combines four detailed SOCs; social workers (21-1020) combines four. The values are employment-weighted averages over covered components, using the [BLS 2025 component employment counts](https://www.bls.gov/emp/tables/occupational-projections-and-characteristics.htm). Normalize the component values by their sum rather than a separately rounded parent total. No source value is available for social workers, all other (21-1029). The published social-work comparison row is therefore **only the covered 90.5% of employment**, not the full occupation: (405,100 + 194,800 + 138,900) / 816,200. The adjacent BLS growth projection explicitly describes the entire occupation. No missing value is treated as zero.

Example: Anthropic financial and investment analysts (13-2051) = 0.5716 × 100 = **57.16%** (shown as 57.2%). Microsoft uses a different scale for the same occupation, 0.2783547531305114 × 100 = **27.84 points**. Neither value is a job-loss percentage.

## Reproduce

1. Download the original [Anthropic job_exposure.csv](https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/01eb1d0ba708f2c26d78c3b42c57776ef1383ab7/labor_market_impacts/job_exposure.csv) (revision `01eb1d0ba708f2c26d78c3b42c57776ef1383ab7`) and [Microsoft ai_applicability_scores.csv](https://raw.githubusercontent.com/microsoft/working-with-ai/550c00c9d1b054ac78b87da3a26165bace334779/ai_applicability_scores.csv) (revision `550c00c9d1b054ac78b87da3a26165bace334779`). Accessed November 25, 2026.
2. From the repository root run `python scripts/update-ai-indicators.py /path/to/job_exposure.csv /path/to/ai_applicability_scores.csv`.
3. The script writes the selected source fractions and weights to [comparison-inputs.csv](comparison-inputs.csv) and the derived rows to `src/career-data.json`; `npm run check` verifies coverage, score bounds, ordering and agreement with the recorded inputs. The full-source Git revisions above make the input data reproducible.

The report's decision to withhold a composite resilience ranking stands. A correctly scoped exposure indicator can be published independently; it is not used to infer a total resilience score.
