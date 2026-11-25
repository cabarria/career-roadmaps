"""Extract the comparison-page research profiles from the checked-in research."""

import csv
import json
import sys
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RESEARCH = ROOT / "docs/ai-resilience"
OUTPUT = ROOT / "src/ai-resilience-research.json"


def rows(name):
    with (RESEARCH / name).open(encoding="utf-8-sig", newline="") as source:
        return list(csv.DictReader(source))


def section(markdown, heading):
    return markdown.split(f"\n## {heading}\n", 1)[1].split("\n## ", 1)[0].strip()


def paragraph(markdown, heading):
    return section(markdown, heading).split("\n\n", 1)[0]


def build():
    data = json.loads((ROOT / "src/career-data.json").read_text(encoding="utf-8"))
    coverage = rows("coverage.csv")
    evidence = rows("evidence.csv")
    anchors = {row["path_id"]: row for row in coverage if row["record_type"] == "featured occupation"}
    assert set(anchors) == {career["id"] for career in data["careers"]}
    assert len(anchors) == len(data["roadmapSummaries"])
    assert len({row["path_id"] for row in coverage}) == len(coverage)
    profiles = {}
    cutoffs = set()

    for career_id, anchor in anchors.items():
        slug = anchor["roadmap_slug"]
        assert data["roadmapSummaries"][slug]["careerId"] == career_id
        markdown = (RESEARCH / "roadmaps" / f"{slug}.md").read_text(encoding="utf-8")
        cutoffs.add(markdown.split("Evidence cutoff **", 1)[1].split("**", 1)[0])
        relevant = [row for row in evidence if row["path_id"] == career_id and row["roadmap_slug"] == slug]
        task_rows = [row for row in relevant if row["task_id"]]
        assert 4 <= len(task_rows) <= 8
        assert len({(row["code"], row["task_id"]) for row in task_rows}) == len(task_rows)
        keys = dict.fromkeys(key.strip() for row in task_rows for key in row["related_evidence"].split(";") if key.strip())
        source_rows = {row["source_key"]: row for row in relevant if row["source_key"] in keys}
        assert set(source_rows) == set(keys)
        tasks = [
            {
                "id": row["task_id"],
                "code": row["code"],
                "task": row["claim"],
                "role": row["task_label"],
                "interpretation": row["interpretation"],
                "importance": float(row["importance"]) if row["importance"] else None,
                "ratingDate": row["rating_date"],
            }
            for row in task_rows
        ]
        assert {task["role"] for task in tasks} <= {"human-led", "AI-assisted", "delegated with review"}
        paths = [
            {
                "id": row["path_id"],
                "title": row["displayed_title"],
                "setting": row["setting"],
                "matchQuality": row["match_quality"],
                "assessment": row["path_assessment"],
            }
            for row in coverage
            if row["record_type"] == "career card" and row["roadmap_slug"] == slug
        ]
        assert paths and all(path["assessment"] for path in paths)
        sources = [
            {
                "name": source_rows[key]["title"],
                "url": source_rows[key]["url"],
                "type": source_rows[key]["evidence_type"],
                "date": source_rows[key]["publication_date"],
                "locator": source_rows[key]["locator"],
                "caveats": source_rows[key]["caveats"],
            }
            for key in keys
        ]
        assert sources and all(source["url"].startswith("https://") for source in sources)
        preparation = [
            line[2:].removesuffix(".") if line.endswith("..") else line[2:]
            for line in section(markdown, "Student preparation").splitlines()
            if line.startswith("- ")
        ]
        profiles[career_id] = {
            "slug": slug,
            "scope": anchor["mapping_note"],
            "current": paragraph(markdown, "Current evidence"),
            "scenario": paragraph(markdown, "2029–31 conditional scenario"),
            "preparation": preparation,
            "limitations": paragraph(markdown, "Limits and scoring"),
            "tasks": tasks,
            "paths": paths,
            "sources": sources,
        }
        assert 2 <= len(preparation) <= 3

    totals = Counter(row["record_type"] for row in coverage)
    assert sum(len(profile["paths"]) for profile in profiles.values()) == totals["career card"]
    assert sum(len(profile["tasks"]) for profile in profiles.values()) == sum(bool(row["task_id"]) for row in evidence)
    assert len(cutoffs) == 1
    return {"evidenceCutoff": cutoffs.pop(), "profiles": profiles}


if __name__ == "__main__":
    output = json.dumps(build(), ensure_ascii=False, indent=2) + "\n"
    if sys.argv[1:] == ["--check"]:
        if OUTPUT.read_text(encoding="utf-8") != output:
            sys.exit("AI resilience research data is out of date; run scripts/build-ai-research.py")
    elif not sys.argv[1:]:
        OUTPUT.write_text(output, encoding="utf-8")
    else:
        sys.exit("Usage: python scripts/build-ai-research.py [--check]")
