"""Rebuild the AI-resilience tab's two independent indicators from pinned source CSVs."""

import csv
import json
import sys
from decimal import Decimal
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/career-data.json"
INPUTS = ROOT / "research/ai-resilience/comparison-inputs.csv"

# BLS Table 1.2, 2025 employment; rounded published component counts.
# Normalize across components, rather than using the rounded parent count.
COMPONENTS = {
    "19-3030": {"19-3032": 4000, "19-3033": 81300, "19-3034": 64000, "19-3039": 60000},
    "21-1020": {"21-1021": 405100, "21-1022": 194800, "21-1023": 138900, "21-1029": 77400},
}
MISSING = {"21-1029"}  # Neither source publishes a value for the residual group.

SOURCES = (
    {
        "id": "anthropic-observed-exposure-2026",
        "label": "Anthropic — observed exposure",
        "metric": "ai-resilience",
        "scale": "exposure-percent",
        "sortOrder": "ascending",
        "source": {
            "name": "Anthropic, Labor market impacts of AI (March 2026)",
            "url": "https://www.anthropic.com/research/labor-market-impacts",
        },
        "geography": "US occupations; Claude usage data",
        "period": "August and November 2025 usage; published March 2026",
        "methodology": (
            "Combines task feasibility, work-related Claude use, automation weighting and estimated task time. "
            "This percentage is tool-specific, not a job-loss or adoption probability. Psychologists are "
            "employment-weighted across four SOC groups; social workers cover three groups (90.5% of 2025 jobs)."
        ),
    },
    {
        "id": "microsoft-ai-applicability-2026",
        "label": "Microsoft — AI applicability",
        "metric": "ai-resilience",
        "scale": "applicability-points",
        "sortOrder": "ascending",
        "source": {
            "name": "Microsoft Research, Working with AI (v1.1, 2026)",
            "url": "https://www.microsoft.com/en-us/research/publication/working-with-ai-measuring-the-occupational-implications-of-generative-ai/",
        },
        "geography": "United States",
        "period": "January–September 2024 Copilot usage; v1.1 (2026)",
        "methodology": (
            "Combines 200,000 Bing Copilot conversations, O*NET activity weights, estimated success and scope. "
            "The source index is multiplied by 100; it is not the percentage of work automated. Psychologists are "
            "employment-weighted across four SOC groups; social workers cover three groups (90.5% of 2025 jobs)."
        ),
    },
)


def read_scores(path, code, value):
    with Path(path).open(encoding="utf-8-sig", newline="") as source:
        scores = {}
        for row in csv.DictReader(source):
            key = row[code]
            if key in scores:
                raise ValueError(f"Duplicate source code: {key}")
            fraction = Decimal(row[value])
            if not fraction.is_finite() or not 0 <= fraction <= 1:
                raise ValueError(f"Invalid source fraction: {key}")
            scores[key] = fraction
        return scores


def main(anthropic_path, microsoft_path):
    source_scores = (
        read_scores(anthropic_path, "occ_code", "observed_exposure"),
        read_scores(microsoft_path, "SOC Code", "ai_applicability_score"),
    )
    data = json.loads(DATA.read_text(encoding="utf-8"))
    inputs = []
    for dataset in SOURCES:
        dataset["scores"] = []
    for career in data["careers"]:
        career_id = career["id"]
        code = career["occupationCode"]
        jobs = data["employmentOutlook"]["values"][career_id]["jobs"]
        components = COMPONENTS.get(code, {code: jobs})
        for component, count in components.items():
            values = [source.get(component) for source in source_scores]
            if any(value is None for value in values) and component not in MISSING:
                raise ValueError(f"Unexpected missing source value: {component}")
            inputs.append([career_id, component, count, *values])
        for dataset, source in zip(SOURCES, source_scores, strict=True):
            covered = {component: count for component, count in components.items() if component in source}
            count = sum(covered.values())
            value = sum(source[component] * jobs for component, jobs in covered.items()) / count
            row = {"careerId": career_id, "value": float(round(100 * value, 2))}
            if count < sum(components.values()):
                coverage = 100 * count / sum(components.values())
                row["sourceTitle"] = f"{career['title']} (covered groups: {coverage:.1f}% of jobs)"
            dataset["scores"].append(row)
    old = [dataset for dataset in data["datasets"] if dataset["metric"] != "ai-resilience"]
    data["datasets"] = old + list(SOURCES)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    with INPUTS.open("w", encoding="utf-8", newline="") as output:
        writer = csv.writer(output, lineterminator="\n")
        writer.writerow(["careerId", "occupationCode", "employment2025", "observedExposure", "aiApplicability"])
        writer.writerows(inputs)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit("Usage: python scripts/update-ai-indicators.py job_exposure.csv ai_applicability_scores.csv")
    main(*sys.argv[1:])
