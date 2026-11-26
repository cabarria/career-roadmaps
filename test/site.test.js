import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import { filterRoadmaps, roadmaps } from '../src/catalog.js';
import { metrics, metricScale, rankEntries } from '../src/metrics.js';

const catalogSlugs = roadmaps.map(roadmap => roadmap.slug);
const data = JSON.parse(readFileSync(new URL('../src/career-data.json', import.meta.url), 'utf8'));
const aiResearch = JSON.parse(readFileSync(new URL('../src/ai-resilience-research.json', import.meta.url), 'utf8'));
const isText = value => typeof value === 'string' && value.trim().length > 0;
const isSlug = value => isText(value) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);

test('the directory lists every roadmap artifact exactly once', () => {
  const files = readdirSync(new URL('../artifacts/', import.meta.url));
  const expected = files.filter(file => file.endsWith('-roadmap.jsx')).map(file => file.replace(/-roadmap\.jsx$/, ''));
  assert.deepEqual([...catalogSlugs].sort(), expected.sort());
  assert.ok(catalogSlugs.every(isSlug));
});

test('every roadmap has its own icon', () => {
  for (const { slug, Icon } of roadmaps) assert.ok(Icon, `Missing icon for ${slug}`);
  assert.equal(new Set(roadmaps.map(roadmap => roadmap.Icon)).size, roadmaps.length);
});

test('roadmap search combines keywords and subject filters', () => {
  const matches = (query, groupId) => filterRoadmaps(query, groupId)
    .flatMap(group => group.roadmaps.map(roadmap => roadmap.slug));

  assert.deepEqual(matches('  DEVICES medical ', 'engineering'), ['biomedical-engineering']);
  assert.deepEqual(matches('medical devices', 'computing'), []);
  assert.equal(matches('', '').length, roadmaps.length);
});

test('each dataset has sourced, comparable values linked to the right kind of entry', () => {
  const collections = { careerId: data.careers, degreeFieldId: data.degreeFields };
  const ids = {};
  const datasetIds = new Set();

  for (const [key, entries] of Object.entries(collections)) {
    const known = new Set();
    for (const { id, title, roadmapSlugs } of entries) {
      assert.ok(isSlug(id) && !known.has(id) && isText(title), `Invalid or duplicate ${key} ${id}`);
      assert.ok(roadmapSlugs.length && roadmapSlugs.every(slug => catalogSlugs.includes(slug)), `Unknown roadmap for ${id}`);
      assert.equal(new Set(roadmapSlugs).size, roadmapSlugs.length, `Duplicate roadmap link for ${id}`);
      known.add(id);
    }
    ids[key] = known;
  }

  for (const dataset of data.datasets) {
    const { id, label, metric, source, geography, period, methodology, scores } = dataset;
    const definition = metrics.find(item => item.id === metric);
    assert.ok(isSlug(id) && !datasetIds.has(id) && definition, `Invalid or duplicate dataset ${id}`);
    const permittedScale = dataset.scale === undefined
      || (metric === 'satisfaction' && dataset.scale === 'stars')
      || (metric === 'ai-resilience' && ['exposure-percent', 'applicability-points'].includes(dataset.scale));
    assert.ok(permittedScale, `Invalid scale in ${id}`);
    assert.ok(dataset.sortOrder === undefined || (metric === 'ai-resilience' && dataset.sortOrder === 'ascending'), `Invalid sort order in ${id}`);
    assert.ok([label, source?.name, geography, period, methodology].every(isText), `Missing context for ${id}`);
    assert.ok(['https:', 'http:'].includes(new URL(source.url).protocol), `Invalid source link for ${id}`);
    assert.ok(scores.length > 0, `Empty dataset ${id}`);
    const key = metric === 'degree-regret' ? 'degreeFieldId' : 'careerId';
    const { min = 0, max = Infinity } = metricScale(definition, dataset);
    assert.equal(new Set(scores.map(score => score[key])).size, scores.length, `Duplicate score in ${id}`);

    for (const { [key]: entryId, careerId, degreeFieldId, value, sourceTitle, sourceUrl } of scores) {
      assert.ok(ids[key].has(entryId) && !(careerId && degreeFieldId), `Unknown or ambiguous entry ${entryId} in ${id}`);
      assert.ok(Number.isFinite(value) && value >= min && value <= max, `Invalid value for ${entryId} in ${id}`);
      if (sourceTitle !== undefined) assert.ok(isText(sourceTitle), `Invalid survey category for ${entryId}`);
      if (sourceUrl !== undefined) assert.equal(new URL(sourceUrl).protocol, 'https:', `Invalid row source for ${entryId}`);
    }

    datasetIds.add(id);
  }
});

test('every roadmap has a sourced occupation with all four snapshot figures', () => {
  const { careers, datasets, employmentOutlook: outlook, roadmapSummaries } = data;
  assert.deepEqual(Object.keys(roadmapSummaries).sort(), [...catalogSlugs].sort());
  assert.ok(isText(outlook.source.name) && isText(outlook.geography));
  assert.equal(new URL(outlook.source.url).protocol, 'https:');
  assert.ok(Number.isInteger(outlook.baseYear) && Number.isInteger(outlook.projectionYear));
  assert.ok(outlook.projectionYear > outlook.baseYear);

  const earnings = datasets.find(dataset => dataset.id === outlook.earningsDatasetId);
  assert.equal(earnings?.metric, 'earnings');
  assert.equal(earnings.geography, outlook.geography);
  assert.equal(earnings.source.url, outlook.source.url);
  assert.ok(earnings.period.endsWith(String(outlook.baseYear)));

  for (const [slug, { careerId, note }] of Object.entries(roadmapSummaries)) {
    const career = careers.find(item => item.id === careerId);
    assert.ok(career?.roadmapSlugs.includes(slug), `Unknown occupation for ${slug}`);
    assert.match(career.occupationCode, /^\d{2}-\d{4}$/);
    assert.ok(note === undefined || isText(note), `Invalid occupation note for ${slug}`);
    assert.ok(earnings.scores.some(score => score.careerId === careerId), `Missing wage for ${slug}`);

    const { jobs, growthPercent, annualOpenings } = outlook.values[careerId];
    assert.ok(Number.isInteger(jobs) && jobs >= 0, `Invalid job count for ${slug}`);
    assert.ok(Number.isFinite(growthPercent) && growthPercent >= -100, `Invalid job growth for ${slug}`);
    assert.ok(Number.isInteger(annualOpenings) && annualOpenings >= 0, `Invalid annual openings for ${slug}`);
  }
});

test('metric rankings sort comparable careers and keep zero scores', () => {
  const careers = [
    { id: 'z', title: 'Zoologist' },
    { id: 'a', title: 'Architect' },
    { id: 'm', title: 'Mathematician' },
    { id: 'n', title: 'Nurse' },
  ];
  const scores = [
    { careerId: 'z', value: 82 },
    { careerId: 'm', value: 0 },
    { careerId: 'a', value: 82 },
  ];

  assert.deepEqual(rankEntries(careers, { scores }).map(career => [career.id, career.value]), [['a', 82], ['z', 82], ['m', 0]]);
});

test('AI resilience indicators cover every roadmap, reconstruct source values, and rank lower exposure first', () => {
  const indicators = data.datasets.filter(dataset => dataset.metric === 'ai-resilience');
  assert.deepEqual(indicators.map(dataset => dataset.id), ['anthropic-observed-exposure-2026', 'microsoft-ai-applicability-2026']);
  const [header, ...lines] = readFileSync(new URL('../research/ai-resilience/comparison-inputs.csv', import.meta.url), 'utf8').trim().split(/\r?\n/);
  assert.equal(header, 'careerId,occupationCode,employment2025,observedExposure,aiApplicability');
  const input = lines.map(line => line.split(','));
  assert.equal(input.length, 35);
  assert.equal(new Set(input.map(row => row[1])).size, 35);
  assert.deepEqual(input.filter(row => !row[3] || !row[4]).map(row => row[1]), ['21-1029']);
  const metric = metrics.find(item => item.id === 'ai-resilience');
  const columns = { 'anthropic-observed-exposure-2026': 3, 'microsoft-ai-applicability-2026': 4 };
  const careerIds = data.careers.map(item => item.id).sort();
  for (const dataset of indicators) {
    const column = columns[dataset.id];
    assert.equal(dataset.sortOrder, 'ascending');
    assert.deepEqual(dataset.scores.map(item => item.careerId).sort(), careerIds);
    for (const { careerId, value, sourceTitle } of dataset.scores) {
      const components = input.filter(row => row[0] === careerId);
      const anchor = data.careers.find(item => item.id === careerId);
      if (['psychologists', 'social-workers'].includes(careerId)) assert.equal(components.length, 4);
      else assert.deepEqual(components.map(row => row[1]), [anchor.occupationCode]);
      const covered = components.filter(row => row[column] !== '');
      assert.ok(covered.length, `No source rows for ${careerId}`);
      const jobs = covered.reduce((sum, row) => sum + Number(row[2]), 0);
      const weighted = covered.reduce((sum, row) => sum + Number(row[2]) * Number(row[column]), 0);
      assert.ok(Math.abs(value - 100 * weighted / jobs) <= 0.0051, `Wrong source value for ${careerId}`);
      assert.ok(Number.isFinite(data.employmentOutlook.values[careerId].growthPercent));
      if (covered.length < components.length) assert.match(sourceTitle, /90\.5%/);
    }
    const ranked = rankEntries(data.careers, dataset);
    assert.ok(ranked.every((row, index) => index === 0 || row.value >= ranked[index - 1].value));
  }
  assert.equal(metricScale(metric, indicators[0]).format(57.16), '57.2%');
  assert.equal(metricScale(metric, indicators[1]).format(27.84), '27.8 / 100');
  assert.equal(indicators[0].scores.find(row => row.careerId === 'family-medicine-physicians').value, 0);
});

test('AI resilience research preserves every occupation, selected task, career path, and cited source', () => {
  const { profiles, evidenceCutoff } = aiResearch;
  assert.match(evidenceCutoff, /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(Object.keys(profiles).sort(), data.careers.map(career => career.id).sort());
  const pathIds = new Set();
  let taskCount = 0;
  for (const [careerId, profile] of Object.entries(profiles)) {
    assert.equal(data.roadmapSummaries[profile.slug].careerId, careerId);
    assert.ok([profile.scope, profile.current, profile.scenario, profile.limitations].every(isText));
    assert.ok(profile.preparation.length >= 2 && profile.preparation.every(isText));
    assert.ok(profile.tasks.length >= 4 && profile.tasks.length <= 8);
    const taskIds = new Set();
    for (const task of profile.tasks) {
      const key = `${task.code}/${task.id}`;
      assert.ok(!taskIds.has(key), `Duplicate task ${key}`);
      taskIds.add(key);
      assert.match(task.code, /^\d{2}-\d{4}\.\d{2}$/);
      assert.ok(isText(task.task) && isText(task.interpretation));
      assert.ok(['human-led', 'AI-assisted', 'delegated with review'].includes(task.role));
      assert.ok(task.importance === null || (task.importance >= 1 && task.importance <= 5));
    }
    taskCount += taskIds.size;
    for (const path of profile.paths) {
      assert.ok(!pathIds.has(path.id) && path.id.startsWith(profile.slug + '-path-'));
      pathIds.add(path.id);
      assert.ok([path.title, path.setting, path.assessment, path.matchQuality].every(isText));
    }
    assert.ok(profile.sources.length);
    for (const source of profile.sources) {
      assert.equal(new URL(source.url).protocol, 'https:');
      assert.ok([source.name, source.type, source.locator, source.caveats].every(isText));
    }
  }
  assert.equal(taskCount, 177);
  assert.equal(pathIds.size, 228);
  const roles = ['human-led', 'AI-assisted', 'delegated with review'];
  const counts = careerId => roles.map(role => profiles[careerId].tasks.filter(task => task.role === role).length);
  assert.deepEqual(counts('registered-nurses'), [4, 0, 2]);
  assert.deepEqual(counts('software-developers'), [1, 3, 2]);
});

test('GSS satisfaction rankings retain respondent counts and confidence intervals', () => {
  const dataset = data.datasets.find(item => item.id === 'gss-job-satisfaction-2004-2024');
  assert.equal(dataset?.metric, 'satisfaction');
  assert.equal(dataset.scores.length, 6);

  for (const career of rankEntries(data.careers, dataset)) {
    const { id: careerId, value, sampleSize, confidenceInterval: [low, high] } = career;
    assert.ok(Number.isInteger(sampleSize) && sampleSize >= 30, `Insufficient respondents for ${careerId}`);
    assert.ok(0 <= low && low <= value && value <= high && high <= 100, `Invalid confidence interval for ${careerId}`);
    assert.ok(high - low <= 30, `Imprecise estimate for ${careerId}`);
  }
});

test('career happiness keeps its rating scale and degree regret ranks surveyed major fields', () => {
  const happiness = data.datasets.find(item => item.id === 'careerexplorer-career-happiness');
  const satisfaction = metrics.find(item => item.id === 'satisfaction');
  assert.equal(metricScale(satisfaction, happiness).format(3.1), '3.1 / 5');
  assert.deepEqual(happiness.scores.map(entry => entry.careerId).sort(), data.careers.map(entry => entry.id).sort());

  const regret = data.datasets.find(item => item.id === 'ziprecruiter-degree-regret-2026');
  const entries = rankEntries(data.degreeFields, regret);
  assert.equal(entries[0].id, 'political-science-public-policy');
  assert.equal(entries[0].value, 46.3);
  assert.deepEqual([...new Set(entries.flatMap(entry => entry.roadmapSlugs))].sort(), [...catalogSlugs].sort());
});
