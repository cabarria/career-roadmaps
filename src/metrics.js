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
    description: 'Compare estimates of how resilient occupations are to AI-driven disruption.',
    unit: 'Out of 100',
    max: 100,
    format: value => `${score.format(value)} / 100`,
  },
];

export function metricScale(metric, dataset) {
  return dataset.scale === 'stars' ? stars : metric;
}

export function rankEntries(entries, dataset) {
  const byId = new Map(entries.map(entry => [entry.id, entry]));

  return dataset.scores
    .map(({ careerId, degreeFieldId, ...score }) => ({ ...score, ...byId.get(careerId ?? degreeFieldId) }))
    .sort((left, right) => right.value - left.value || (left.sourceTitle ?? left.title).localeCompare(right.sourceTitle ?? right.title));
}
