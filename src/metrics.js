const dollars = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const score = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

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
    unit: 'Out of 100',
    max: 100,
    format: value => `${score.format(value)} / 100`,
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

export function rankCareers(careers, dataset) {
  const byId = new Map(careers.map(career => [career.id, career]));

  return dataset.scores
    .map(({ careerId, value }) => ({ ...byId.get(careerId), value }))
    .sort((left, right) => right.value - left.value || left.title.localeCompare(right.title));
}
