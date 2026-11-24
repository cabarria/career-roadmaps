import { useEffect, useRef } from 'react';
import { filterRoadmaps, roadmapGroups } from './catalog.js';
import { useQueryParams } from './use-query-params.js';

function RoadmapCard({ roadmap }) {
  const { Icon } = roadmap;

  return (
    <li>
      <a className="roadmap-card" href={`/roadmaps/${roadmap.slug}`} style={{ '--accent': roadmap.accent }}>
        <span className="emblem" aria-hidden="true"><Icon size={22} strokeWidth={1.75} /></span>
        <div>
          <h4>{roadmap.title}</h4>
          <p>{roadmap.description}</p>
        </div>
      </a>
    </li>
  );
}

export default function Directory() {
  const [params, update] = useQueryParams();
  const searchInput = useRef(null);
  const library = useRef(null);
  const query = params.get('q') ?? '';
  const groupId = roadmapGroups.find(group => group.id === params.get('group'))?.id ?? '';
  const results = filterRoadmaps(query, groupId);
  const count = results.reduce((total, group) => total + group.roadmaps.length, 0);

  useEffect(() => {
    if (window.location.hash === '#roadmaps') library.current.scrollIntoView();
  }, []);

  return (
    <div className="directory container">
      <section className="hero" aria-labelledby="site-title">
        <div className="hero-content">
          <h1 id="site-title">Find your<br />next <em>direction.</em></h1>
          <p>Explore what to study, what each path takes, and where it can lead.</p>
          <div className="hero-actions">
            <a className="button primary" href="#roadmaps">Browse roadmaps</a>
            <a className="button secondary" href="/careers">Compare careers</a>
          </div>
        </div>
      </section>

      <section className="library" id="roadmaps" ref={library} aria-labelledby="library-title">
        <div className="library-heading">
          <div>
            <h2 id="library-title">Explore the roadmaps</h2>
            <p>Follow each field from undergraduate study to career paths.</p>
          </div>
          <label className="search-field">
            <span className="search-icon" aria-hidden="true" />
            <span className="sr-only">Search roadmaps</span>
            <input ref={searchInput} type="search" placeholder="Search fields or topics" value={query}
              onChange={event => update({ q: event.target.value })} />
          </label>
        </div>

        <div className="filters" role="group" aria-label="Filter by subject">
          <button type="button" aria-pressed={groupId === ''} onClick={() => update({ group: '' })}>All fields</button>
          {roadmapGroups.map(group => (
            <button key={group.id} type="button" aria-pressed={groupId === group.id}
              onClick={() => update({ group: group.id })}>
              <span aria-hidden="true" style={{ color: group.accent }}>{group.icon}</span> {group.filterLabel ?? group.label}
            </button>
          ))}
        </div>

        <p className="result-count" role="status">{count} {count === 1 ? 'roadmap' : 'roadmaps'}</p>

        {count === 0 && (
          <div className="empty-state">
            <h3>No roadmaps found</h3>
            <p>Try a different topic or clear the subject filter.</p>
            <button className="button secondary" type="button" onClick={() => {
              update({ q: '', group: '' });
              searchInput.current.focus();
            }}>Clear filters</button>
          </div>
        )}

        {results.map(group => (
          <section key={group.id} className="subject" aria-labelledby={`${group.id}-title`}>
            <div className="subject-heading" style={{ '--accent': group.accent }}>
              <span className="subject-mark" aria-hidden="true">{group.icon}</span>
              <div>
                <h3 id={`${group.id}-title`}>{group.label}</h3>
                <p>{group.description}</p>
              </div>
            </div>
            <ul className="roadmap-grid">
              {group.roadmaps.map(roadmap => <RoadmapCard key={roadmap.slug} roadmap={roadmap} />)}
            </ul>
          </section>
        ))}
      </section>
    </div>
  );
}
