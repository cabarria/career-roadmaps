import research from './ai-resilience-research.json';
import reportUrl from '../docs/ai-resilience/report.md?url&no-inline';
import evidenceUrl from '../docs/ai-resilience/evidence.csv?url&no-inline';
import coverageUrl from '../docs/ai-resilience/coverage.csv?url&no-inline';

const profileUrls = import.meta.glob('../docs/ai-resilience/roadmaps/*.md', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

export const profiles = research.profiles;
const taskRoles = ['human-led', 'AI-assisted', 'delegated with review'];

export function ResearchDownloads() {
  return (
    <div className="research-downloads" aria-label="Download AI resilience research">
      <span>Research as of {research.evidenceCutoff}:</span>
      <a href={reportUrl} download="ai-resilience-report.md">Research report</a>
      <a href={evidenceUrl} download="ai-resilience-evidence.csv">Evidence ledger (CSV)</a>
      <a href={coverageUrl} download="ai-resilience-coverage.csv">Coverage ledger (CSV)</a>
    </div>
  );
}

export function TaskCounts({ tasks }) {
  const counts = taskRoles.map(role => tasks.filter(task => task.role === role).length);
  return (
    <span className="task-counts">
      <span aria-hidden="true">{counts.join(' / ')}</span>
      <span className="sr-only">{counts.map((count, index) => `${count} ${taskRoles[index]}`).join(', ')}</span>
    </span>
  );
}

export function ResearchProfile({ careerId, title }) {
  const profile = profiles[careerId];
  const headingId = `research-heading-${careerId}`;
  return (
    <section className="research-detail" id={`research-${careerId}`} aria-labelledby={headingId}>
      <h3 id={headingId}>{title}: research assessment</h3>
      <p className="methodology">{profile.scope}</p>

      <div className="research-grid">
        <div>
          <h4>Current evidence</h4>
          <p>{profile.current}</p>
        </div>
        <div>
          <h4>2029–31 conditional scenario</h4>
          <p>{profile.scenario}</p>
        </div>
        <div>
          <h4>Student preparation</h4>
          <ul>{profile.preparation.map(action => <li key={action}>{action}</li>)}</ul>
        </div>
        <div>
          <h4>Evidence limitations</h4>
          <p>{profile.limitations}</p>
        </div>
      </div>

      <details className="research-section">
        <summary>Selected tasks and human responsibilities ({profile.tasks.length})</summary>
        <p className="methodology">
          Tasks from the <a href="https://www.onetcenter.org/database.html">O*NET 31.0 Database</a>
          {' '}(USDOL/ETA, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>).
          AI-role labels are researcher judgments, not measured delegation rates. Importance is a 1–5 rating, not time spent.
        </p>
        <ul className="research-list">
          {profile.tasks.map(task => (
            <li key={`${task.code}-${task.id}`}>
              <strong>{task.task}</strong>
              <p className="task-role"><span>{task.role}</span> — {task.interpretation}</p>
              <small>
                <a href={`https://www.onetonline.org/link/summary/${task.code}`}>O*NET {task.code}</a>
                {' '}· task {task.id} · importance {task.importance === null ? 'not reported' : `${task.importance}/5`}
                {task.ratingDate && <> · {task.ratingDate}</>}
              </small>
            </li>
          ))}
        </ul>
      </details>

      <details className="research-section">
        <summary>Career path implications ({profile.paths.length})</summary>
        <p className="methodology">Path assessments are qualitative and occupational matches can cover more or less than the displayed path.</p>
        <ul className="research-list">
          {profile.paths.map(path => (
            <li key={path.id}>
              <strong>{path.title}</strong>
              <p>{path.assessment}</p>
              <small>{path.setting} · {path.matchQuality} occupation match</small>
            </li>
          ))}
        </ul>
      </details>

      <details className="research-section">
        <summary>Independent evidence sources ({profile.sources.length})</summary>
        <ul className="research-list">
          {profile.sources.map(source => (
            <li key={source.url}>
              <a href={source.url}>{source.name}</a>
              <small>{source.type} · {source.date} · {source.locator}</small>
              <p>{source.caveats}</p>
            </li>
          ))}
        </ul>
      </details>

      <a className="research-profile-download" href={profileUrls[`../docs/ai-resilience/roadmaps/${profile.slug}.md`]} download={`${profile.slug}-ai-resilience.md`}>
        Download full research profile
      </a>
    </section>
  );
}
