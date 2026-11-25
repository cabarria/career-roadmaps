"""Print occupation-level satisfaction scores from NORC's GSS cross-sections."""

import argparse
from collections import defaultdict
import json
from math import exp, fsum, isfinite, log, sqrt
from pathlib import Path
from statistics import NormalDist

import pyreadstat


# 2010 Census categories that match the roadmap occupations after the SOC crosswalk.
OCCUPATIONS = {
    710: "management-analysts",
    1210: "mathematicians",
    1340: "biomedical-engineers",
    1360: "civil-engineers",
    1420: "environmental-engineers",
    1460: "mechanical-engineers",
    1800: "economists",
    1820: "psychologists",
    2010: "social-workers",
    2100: "lawyers",
    2850: "writers-and-authors",
    3050: "pharmacists",
    3255: "registered-nurses",
}
FIELDS = ["year", "wrkstat", "occ10", "satjob", "wtssnrps", "vstrat", "vpsu", "fileversion"]
Z95 = NormalDist().inv_cdf(0.975)


def estimate(rows, strata):
    """Estimate a weighted domain proportion with a stratified, clustered variance."""
    n = len(rows)
    if n < 30:
        return None

    total_weight = fsum(weight for _, _, weight, _ in rows)
    share = fsum(weight for _, _, weight, satisfied in rows if satisfied) / total_weight
    if not 0 < share < 1:
        return None

    # Linearize the weighted ratio and sum its influence in each sampled PSU.
    influence = defaultdict(float)
    for stratum, psu, weight, satisfied in rows:
        influence[stratum, psu] += weight * (satisfied - share) / total_weight

    variance = 0.0
    for stratum, psus in strata.items():
        # PSUs without respondents from the occupation have zero influence.
        values = [influence.get((stratum, psu), 0) for psu in psus]
        count = len(values)
        mean = fsum(values) / count
        variance += count / (count - 1) * fsum((value - mean) ** 2 for value in values)

    if variance <= 0 or share * (1 - share) / variance < 30:
        return None

    # Back-transform the logit confidence interval to keep limits within 0–100%.
    center = log(share / (1 - share))
    margin = Z95 * sqrt(variance) / (share * (1 - share))
    low, high = (100 / (1 + exp(-limit)) for limit in (center - margin, center + margin))
    if high - low > 30:
        return None

    return {
        "value": round(100 * share, 1),
        "sampleSize": n,
        "confidenceInterval": [round(low, 1), round(high, 1)],
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("data_file", type=Path, help="Path to NORC's gss7224_r3a.dta")
    args = parser.parse_args()

    data, _ = pyreadstat.read_dta(
        args.data_file, usecols=FIELDS, output_format="dict", encoding="WINDOWS-1252"
    )
    if set(data["fileversion"]) != {7224.31}:
        raise ValueError("Expected NORC's 1972–2024 cumulative release 3a (7224.31)")

    strata = defaultdict(set)
    occupations = defaultdict(list)
    observations = zip(*(data[field] for field in FIELDS[:-1]))
    for year, employment, code, response, weight, stratum, psu in observations:
        if not (2004 <= year <= 2024 and weight is not None and isfinite(weight) and weight > 0):
            continue
        if stratum is None or psu is None:
            raise ValueError(f"Missing survey design value in {year}")

        stratum = (year, stratum)
        strata[stratum].add(psu)
        if employment in (1, 2, 3) and code in OCCUPATIONS and response in (1, 2, 3, 4):
            occupations[code].append((stratum, psu, weight, response <= 2))

    if any(len(psus) < 2 for psus in strata.values()):
        raise ValueError("Expected at least two PSUs in every survey stratum")

    scores = []
    for code, career_id in OCCUPATIONS.items():
        result = estimate(occupations[code], strata)
        if result is not None:
            scores.append({"careerId": career_id, **result})
    print(json.dumps(scores, indent=2))


if __name__ == "__main__":
    main()
