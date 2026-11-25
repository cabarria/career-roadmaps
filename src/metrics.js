const dollars = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const score = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
const stars = {
  unit: 'Out of 5',
  min: 1,
  max: 5,
  format: value => `${value.toFixed(1)} / 5`,
};
const exposurePercent = {
  unit: 'Observed AI exposure',
  min: 0,
  max: 100,
  format: value => `${score.format(value)}%`,
};
const applicabilityPoints = {
  unit: 'AI applicability (0–100)',
  min: 0,
  max: 100,
  format: value => `${score.format(value)} / 100`,
};

export const metrics = [
  {
    id: 'earnings',
    label: 'Earning potential',
    icon: '$',
    accent: '#a2e3c1',
    description: 'Compare median annual earnings by occupation.',
    unit: 'USD per year',
    format: value => dollars.format(value),
  },
  {
    id: 'satisfaction',
    label: 'Job satisfaction',
    icon: '◡',
    accent: '#efbb99',
    description: 'Compare how workers rate their satisfaction with their jobs.',
    unit: 'Percent satisfied',
    max: 100,
    format: value => `${score.format(value)}%`,
  },
  {
    id: 'degree-regret',
    label: 'Degree regret',
    icon: '↶',
    accent: '#9ac5ed',
    description: 'Compare how often recent graduates regret their choice of major.',
    unit: 'Percent who regret their major',
    max: 100,
    format: value => `${score.format(value)}%`,
  },
  {
    id: 'ai-resilience',
    label: 'AI resilience',
    icon: '✦',
    accent: '#c0aaff',
    description: 'Compare published AI exposure indicators alongside projected job growth. Lower exposure does not guarantee job security.',
    unit: 'Out of 100',
    max: 100,
    format: value => `${score.format(value)} / 100`,
  },
];

export function metricScale(metric, dataset) {
  if (dataset.scale === 'stars') return stars;
  if (dataset.scale === 'exposure-percent') return exposurePercent;
  if (dataset.scale === 'applicability-points') return applicabilityPoints;
  return metric;
}

export function rankEntries(entries, dataset) {
  const byId = new Map(entries.map(entry => [entry.id, entry]));

  return dataset.scores
    .map(({ careerId, degreeFieldId, ...score }) => ({ ...score, ...byId.get(careerId ?? degreeFieldId) }))
    .sort((left, right) => (
      dataset.sortOrder === 'ascending' ? left.value - right.value : right.value - left.value
    ) || (left.sourceTitle ?? left.title).localeCompare(right.sourceTitle ?? right.title));
}
