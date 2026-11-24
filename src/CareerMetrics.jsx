import data from './career-data.json';
import { roadmaps } from './catalog.js';
import { metrics, rankCareers } from './metrics.js';
import { useQueryParams } from './use-query-params.js';

const titles = new Map(roadmaps.map(roadmap => [roadmap.slug, roadmap.title]));

function Rankings({ dataset, metric }) {
  const careers = rankCareers(data.careers, dataset);

  return (
    <>
      <dl className="dataset-details">
        <div><dt>Source</dt><dd><a href={dataset.source.url}>{dataset.source.name}</a></dd></div>
        <div><dt>Geography</dt><dd>{dataset.geography}</dd></div>
        <div><dt>Period</dt><dd>{dataset.period}</dd></div>
      </dl>
      <p className="methodology">{dataset.methodology}</p>
      <div className="table-wrap">
        <table>
          <caption className="sr-only">{metric.label} by occupation, highest first</caption>
          <thead>
            <tr><th scope="col">Occupation</th><th scope="col">Related roadmaps</th><th scope="col">{metric.unit}</th></tr>
          </thead>
          <tbody>
            {careers.map(career => (
              <tr key={career.id}>
                <th scope="row">{career.title}</th>
                <td>
                  <ul>{career.roadmapSlugs.map(slug => (
                    <li key={slug}><a href={`/roadmaps/${slug}`}>{titles.get(slug)}</a></li>
                  ))}</ul>
                </td>
                <td>{metric.format(career.value)}</td>
              </tr>
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
        <p>Explore how occupations compare on earnings, job satisfaction, and resilience to AI disruption.</p>
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
        {dataset ? <Rankings dataset={dataset} metric={metric} /> : (
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
