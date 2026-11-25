# Job satisfaction by occupation

Six of the 28 featured occupations have estimates in the General Social Survey dataset at `/careers?metric=satisfaction&dataset=gss-job-satisfaction-2004-2024`. Each value is the weighted percentage of employed U.S. respondents who reported being very or moderately satisfied with their work. The comparison shows unweighted respondent counts and 95% confidence intervals alongside the estimates. Differences in the order can reflect sampling uncertainty. See the [survey comparison notes](satisfaction-and-degree-regret.md) for the other datasets.

## Source and method

- **Survey.** NORC’s General Social Survey cumulative cross-section, 1972–2024 release 3a (July 2026, file version `7224.31`). The analysis pools 11 waves from 2004 through 2024. This window uses all waves with NORC’s post-stratified nonresponse weight `WTSSNRPS`. Pre-2012 occupations in these waves were recoded by NORC from the original job descriptions. Larger waves contribute more to the pooled estimate. [Data download](https://gss.norc.org/get-the-data/stata.html) · [Codebook and release notes](https://gss.norc.org/get-documentation.html) · [Occupation coding notes](https://gss.norc.org/content/dam/gss/get-documentation/pdf/other/OCCIND%20New%20Variables%20and%20Instructions.pdf)
- **Measure.** Include respondents working full time or part time, or with a job while temporarily away (`WRKSTAT` 1–3). Within each occupation, divide the `WTSSNRPS`-weighted sum of `SATJOB` responses 1–2 by the weighted sum of valid responses 1–4. `SATJOB` asks about satisfaction with the work people do. Reserve codes and alternate satisfaction questions are excluded. [GSS codebook](https://gss.norc.org/get-documentation.html) · [Question wording experiment](https://gss.norc.org/content/dam/gss/get-documentation/pdf/reports/methodological-reports/MR127%20-%20Question%20Wording%20Experiments.pdf)
- **Occupation match.** Match `OCC10` through the 2010 Census occupation list and the BLS 2010-to-2018 SOC crosswalk. Publish only when the survey category covers the same occupation as the roadmap snapshot. Grouped categories can match when both sources cover the same group, as with social workers. [2010 Census occupation list](https://www.bls.gov/cps/cenocc2010.htm) · [BLS SOC crosswalk](https://www.bls.gov/soc/2018/crosswalks.htm)
- **Precision.** Estimate sampling variance by Taylor linearization using `VSTRAT` and `VPSU`, with the variance stratum nested within survey wave. Back-transform a two-sided 95% logit interval to percentage units. Publish estimates with at least 30 valid responses, a design-based effective sample size of at least 30, and an interval no wider than 30 percentage points. Boundary proportions with no estimable variance are withheld. These are project criteria adapted from the NCHS sample size and interval checks. [GSS design variables](https://gss.norc.org/content/dam/gss/get-documentation/pdf/other/GSS%20design%20variables.pdf) · [NCHS standards](https://www.cdc.gov/nchs/data/series/sr_02/sr02_175.pdf)

The estimates represent the pooled period. Occupation, career stage, and survey mode can affect responses. A comparison restricted to 2012–2024 meets the same precision criteria for five of the six published occupations. Mechanical engineers fall below the sample minimum in the shorter window. Point estimates for the other five shift by up to 3.5 percentage points.

## Coverage across the roadmaps

`n` counts working respondents with a valid satisfaction response for the listed survey category. For grouped categories, the count covers the whole group. Seven occupations matched but fell below the sample or precision criteria. Fifteen occupations had no equivalent category in the public survey.

| Roadmap occupation | GSS occupation code | n | Result |
| --- | --- | ---: | --- |
| Architects, except landscape and naval | 1300 | 36 | Group includes landscape architects |
| Graphic designers | 2630 | 110 | Group includes other designers |
| Astronomers | 1700 | 1 | Group combines astronomers and physicists |
| Bioengineers and biomedical engineers | 1340 | 4 | Sample too small |
| Management analysts | 0710 | 117 | 95.9% (91.3–98.1%) |
| Civil engineers | 1360 | 56 | 96.5% (90.2–98.8%) |
| Software developers | 1020 | 189 | Historical category includes some software QA jobs |
| Data scientists | 1240 | 8 | Historical category groups miscellaneous mathematical science occupations |
| Economists | 1800 | 3 | Sample too small |
| High school teachers | 2320 | 167 | Includes secondary career and technical education teachers |
| Electrical engineers | 1410 | 34 | Group combines electrical and electronics engineers |
| Writers and authors | 2850 | 33 | Effective sample below 30 |
| Environmental engineers | 1420 | 9 | Sample too small |
| Financial and investment analysts | 0840 | 20 | Historical category includes some financial risk specialists |
| Special effects artists and animators | 2600 | 34 | Group includes other artists and related workers |
| Lawyers | 2100 | 118 | 81.7% (70.5–89.2%) |
| Mathematicians | 1210 | 1 | Sample too small |
| Mechanical engineers | 1460 | 41 | 94.2% (80.4–98.5%) |
| Family medicine physicians | 3060 | 90 | Group combines physician and surgeon specialties |
| Biochemists and biophysicists | 1610 | 21 | Group includes other biological scientists |
| Medical scientists, except epidemiologists | 1650 | 23 | Group includes epidemiologists |
| Registered nurses | 3255 | 324 | 91.5% (87.0–94.6%) |
| Pharmacists | 3050 | 23 | Sample too small |
| Postsecondary philosophy and religion teachers | 2200 | 207 | Group includes postsecondary teachers across subjects |
| Physicists | 1700 | 1 | Group combines astronomers and physicists |
| Political scientists | 1860 | 9 | Group includes other social scientists and related workers |
| Psychologists | 1820 | 35 | Effective sample below 30 |
| Social workers | 2010 | 127 | 89.0% (82.0–93.4%) |

The 2023 National Survey of College Graduates is a candidate for a future dataset about employed degree holders. Its published satisfaction table uses broader occupation groups for many of the roadmap occupations. Design-based intervals for custom estimates require replicate weights from NCSES. [NSCG technical notes](https://ncses.nsf.gov/surveys/national-survey-college-graduates/2023) · [NSCG satisfaction table](https://ncses.nsf.gov/pubs/nsf25322/assets/data-tables/tables/nsf25322-tab003-002.pdf)

## Reproduce the scores

Download the cumulative Stata file from [NORC](https://gss.norc.org/get-the-data/stata.html) and extract `gss7224_r3a.dta`. In an analysis environment with `pyreadstat==1.3.8` installed, run:

```sh
python scripts/estimate-gss-satisfaction.py /path/to/gss7224_r3a.dta
```

The script prints the `scores` array for `gss-job-satisfaction-2004-2024` in [`src/career-data.json`](../src/career-data.json). Values and confidence interval bounds are percentages. `sampleSize` is the unweighted count of respondents. The site build uses the aggregate JSON. The source microdata and analysis package are outside the site’s build dependencies.
