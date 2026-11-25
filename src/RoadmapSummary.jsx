import data from './career-data.json';
import { metrics } from './metrics.js';

const outlook = data.employmentOutlook;
const earnings = data.datasets.find(dataset => dataset.id === outlook.earningsDatasetId);
const formatWage = metrics.find(metric => metric.id === 'earnings').format;
const count = new Intl.NumberFormat('en-US');
const percent = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1,
  signDisplay: 'exceptZero',
});

export default function RoadmapSummary({ slug, accent }) {
  const { careerId, note } = data.roadmapSummaries[slug];
  const career = data.careers.find(item => item.id === careerId);
  const wage = earnings.scores.find(score => score.careerId === careerId).value;
  const { jobs, growthPercent, annualOpenings } = outlook.values[careerId];
  const projectionPeriod = `${outlook.baseYear}–${outlook.projectionYear}`;
  const figures = [
    { label: 'Median annual wage', value: formatWage(wage), period: earnings.period },
    { label: 'Projected job growth', value: percent.format(growthPercent / 100), period: projectionPeriod },
    { label: 'Projected annual openings', value: count.format(annualOpenings), period: projectionPeriod },
    { label: 'Jobs', value: count.format(jobs), period: outlook.baseYear },
  ];

  return (
    <section className="roadmap-summary" aria-labelledby="roadmap-summary-title" style={{ '--summary-accent': accent }}>
      <div className="roadmap-summary-heading">
        <div>
          <h2 id="roadmap-summary-title">Career snapshot</h2>
          <p>{career.title}</p>
        </div>
        <a href={outlook.source.url} aria-label={`${outlook.source.name}, ${outlook.geography}`}>
          BLS · {outlook.geography}
        </a>
      </div>
      <dl>
        {figures.map(({ label, value, period }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}<span>{period}</span></dd>
          </div>
        ))}
      </dl>
      {note && <p className="roadmap-summary-note">{note}</p>}
    </section>
  );
}
