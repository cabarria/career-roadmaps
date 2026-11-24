import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import { filterRoadmaps, roadmaps } from '../src/catalog.js';
import { metrics, rankCareers } from '../src/metrics.js';

const catalogSlugs = roadmaps.map(roadmap => roadmap.slug);
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

test('each comparison dataset has sourced, comparable values linked to known careers', () => {
  const data = JSON.parse(readFileSync(new URL('../src/career-data.json', import.meta.url), 'utf8'));
  const careerIds = new Set();
  const datasetIds = new Set();

  for (const { id, title, roadmapSlugs } of data.careers) {
    assert.ok(isSlug(id) && !careerIds.has(id) && isText(title), `Invalid or duplicate career ${id}`);
    assert.ok(roadmapSlugs.length && roadmapSlugs.every(slug => catalogSlugs.includes(slug)), `Unknown roadmap for ${id}`);
    assert.equal(new Set(roadmapSlugs).size, roadmapSlugs.length, `Duplicate roadmap link for ${id}`);
    careerIds.add(id);
  }

  for (const dataset of data.datasets) {
    const { id, label, metric, source, geography, period, methodology, scores } = dataset;
    const definition = metrics.find(item => item.id === metric);
    assert.ok(isSlug(id) && !datasetIds.has(id) && definition, `Invalid or duplicate dataset ${id}`);
    assert.ok([label, source?.name, geography, period, methodology].every(isText), `Missing context for ${id}`);
    assert.ok(['https:', 'http:'].includes(new URL(source.url).protocol), `Invalid source link for ${id}`);
    assert.ok(scores.length > 0, `Empty dataset ${id}`);
    assert.equal(new Set(scores.map(score => score.careerId)).size, scores.length, `Duplicate career score in ${id}`);

    for (const { careerId, value } of scores) {
      assert.ok(careerIds.has(careerId), `Unknown career ${careerId} in ${id}`);
      assert.ok(Number.isFinite(value) && value >= 0 && value <= (definition.max ?? Infinity), `Invalid value for ${careerId} in ${id}`);
    }

    datasetIds.add(id);
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

  assert.deepEqual(rankCareers(careers, { scores }).map(career => [career.id, career.value]), [['a', 82], ['z', 82], ['m', 0]]);
});
