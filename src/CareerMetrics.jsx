import { Fragment, useState } from 'react';
import data from './career-data.json';
import { roadmaps } from './catalog.js';
import { metrics, metricScale, rankEntries } from './metrics.js';
import { useQueryParams } from './use-query-params.js';
import { profiles, ResearchDownloads, ResearchProfile, TaskCounts } from './AIResilienceResearch.jsx';

const titles = new Map(roadmaps.map(roadmap => [roadmap.slug, roadmap.title]));
const growthFormat = new Intl.NumberFormat('en-US', {
  style: 'percent', maximumFractionDigits: 1, signDisplay: 'exceptZero',
});

function Rankings({ dataset, metric }) {
  const [expandedCareer, setExpandedCareer] = useState(null);
  const byMajor = metric.id === 'degree-regret';
  const subject = byMajor ? 'Major field' : 'Occupation';
  const entries = rankEntries(byMajor ? data.degreeFields : data.careers, dataset);
  const { unit, format } = metricScale(metric, dataset);
  const showResearch = metric.id === 'ai-resilience';
  const order = dataset.sortOrder === 'ascending' ? 'lowest' : 'highest';
  const outlook = data.employmentOutlook;
  const showUncertainty = entries.every(entry => entry.sampleSize && entry.confidenceInterval);

  return (
    <>
      <dl className="dataset-details">
        <div><dt>Source</dt><dd><a href={dataset.source.url}>{dataset.source.name}</a></dd></div>
        <div><dt>Geography</dt><dd>{dataset.geography}</dd></div>
        <div><dt>Period</dt><dd>{dataset.period}</dd></div>
      </dl>
      <p className="methodology">{dataset.methodology}</p>
      {showResearch && (
        <>
          <p className="methodology">
            Lower values first. The <a href={outlook.source.url}>BLS job growth projection</a> covers the full occupation
            and all labor-market factors, not AI alone. Zero exposure does not mean immunity.
            Assessed task counts reflect selected researcher judgments, not work time or replacement risk.
          </p>
          <ResearchDownloads />
        </>
      )}
      <div className="table-wrap">
        <table>
          <caption className="sr-only">{unit} by {subject.toLowerCase()}, {order} first</caption>
          <thead>
            <tr>
              <th scope="col">{subject}</th>
              <th scope="col">Related roadmaps</th>
              <th scope="col">{unit}</th>
              {showResearch && <>
                <th scope="col">Projected job growth ({outlook.baseYear}–{outlook.projectionYear})</th>
                <th scope="col">Assessed tasks <small className="task-count-legend">Human-led / assisted / delegated</small></th>
              </>}
              {showUncertainty && <>
                <th scope="col">95% confidence interval</th>
                <th scope="col">Respondents</th>
              </>}
            </tr>
          </thead>
          <tbody>
            {entries.map(({ id, title, sourceTitle, sourceUrl, roadmapSlugs, value, confidenceInterval, sampleSize }) => (
              <Fragment key={id}>
              <tr>
                <th scope="row">
                  {sourceUrl ? <a href={sourceUrl}>{sourceTitle ?? title}</a> : sourceTitle ?? title}
                  {showResearch && (
                    <button type="button" className="research-toggle" aria-expanded={expandedCareer === id}
                      aria-controls={expandedCareer === id ? `research-${id}` : undefined} aria-label={`Research details for ${title}`}
                      onClick={() => setExpandedCareer(expandedCareer === id ? null : id)}>
                      {expandedCareer === id ? 'Hide research' : 'Research details'}
                    </button>
                  )}
                </th>
                <td>
                  <ul>{roadmapSlugs.map(slug => (
                    <li key={slug}><a href={`/roadmaps/${slug}`}>{titles.get(slug)}</a></li>
                  ))}</ul>
                </td>
                <td>{format(value)}</td>
                {showResearch && <>
                  <td>{growthFormat.format(outlook.values[id].growthPercent / 100)}</td>
                  <td><TaskCounts tasks={profiles[id].tasks} /></td>
                </>}
                {showUncertainty && <>
                  <td>{confidenceInterval.map(format).join('–')}</td>
                  <td>{sampleSize.toLocaleString('en-US')}</td>
                </>}
              </tr>
              {showResearch && expandedCareer === id && (
                <tr className="research-detail-row">
                  <td colSpan={showUncertainty ? 7 : 5}>
                    <ResearchProfile careerId={id} title={title} />
                  </td>
                </tr>
              )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function CareerMetrics() {
  const [params, update] = useQueryParams();
  const metric = metrics.find(item => item.id === params.get('metric')) ?? metrics[0];
  const datasets = data.datasets.filter(item => item.metric === metric.id);
  const dataset = datasets.find(item => item.id === params.get('dataset')) ?? datasets[0];

  return (
    <div className="metrics container">
      <div className="page-intro">
        <h1>Compare <em>careers.</em></h1>
        <p>Compare earnings, job satisfaction, degree regret, and AI resilience.</p>
      </div>

      <div className="metric-options" role="group" aria-label="Choose a career metric">
        {metrics.map(item => (
          <button key={item.id} type="button" className="metric-option" aria-pressed={item.id === metric.id}
            style={{ '--accent': item.accent }} onClick={() => {
              if (item.id !== metric.id) update({ metric: item.id, dataset: '' });
            }}>
            <span className="emblem" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <section className="metric-panel" aria-labelledby="metric-title" style={{ '--accent': metric.accent }}>
        <div className="metric-heading">
          <div>
            <h2 id="metric-title">{metric.label}</h2>
            <p>{metric.description}</p>
          </div>
          {datasets.length > 1 && (
            <label className="dataset-picker">
              Dataset
              <select value={dataset.id} onChange={event => update({ dataset: event.target.value })}>
                {datasets.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
          )}
        </div>
        {dataset ? <Rankings key={metric.id} dataset={dataset} metric={metric} /> : (
          <div className="empty-state">
            <h3>No comparison data yet</h3>
            <p>Rankings will appear when a dataset covers multiple occupations using the same measure.</p>
            <a className="button secondary" href="/#roadmaps">Browse roadmaps</a>
          </div>
        )}
      </section>
    </div>
  );
}
