import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Directory from './Directory.jsx';
import RoadmapSummary from './RoadmapSummary.jsx';
import { roadmaps } from './catalog.js';
import licenseText from '../LICENSE?raw';
import './site.css';

const licenseUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(licenseText)}`;
const artifacts = import.meta.glob('../artifacts/*-roadmap.jsx');
const CareerMetrics = lazy(() => import('./CareerMetrics.jsx'));
const research = import.meta.glob('../research/*-research.md', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const roadmap = roadmaps.find(item => path === `/roadmaps/${item.slug}`);
const Roadmap = roadmap ? lazy(artifacts[`../artifacts/${roadmap.slug}-roadmap.jsx`]) : null;
const researchUrl = roadmap && research[`../research/${roadmap.slug}-research.md`];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">✦</span>
          Career Roadmaps
        </a>
        <nav aria-label="Main navigation">
          <a href="/" aria-current={path === '/' || roadmap ? 'page' : undefined}>Roadmaps</a>
          <a href="/careers" aria-current={path === '/careers' ? 'page' : undefined}>Career metrics</a>
        </nav>
      </div>
    </header>
  );
}

function RoadmapPage() {
  return (
    <>
      <div className="roadmap-nav">
        <div className="roadmap-toolbar container" style={{ '--accent': roadmap.accent }}>
          <a href="/#roadmaps">All roadmaps</a>
          {researchUrl && <a href={researchUrl} download={`${roadmap.slug}-research.md`}>Download research notes</a>}
        </div>
      </div>
      <Suspense fallback={<p className="container loading" role="status">Loading {roadmap.title}…</p>}>
        <Roadmap summary={<RoadmapSummary slug={roadmap.slug} accent={roadmap.accent} />} />
      </Suspense>
    </>
  );
}

function NotFound() {
  return (
    <div className="container page-intro">
      <h1>Page not found</h1>
      <a className="button primary" href="/#roadmaps">Browse roadmaps</a>
    </div>
  );
}

function App() {
  const Content = roadmap ? 'div' : 'main';
  let page = <NotFound />;
  if (path === '/') page = <Directory />;
  if (path === '/careers') page = (
    <Suspense fallback={<p className="container loading" role="status">Loading career metrics…</p>}>
      <CareerMetrics />
    </Suspense>
  );
  if (roadmap) page = <RoadmapPage />;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <Content id="main-content" tabIndex={-1}>{page}</Content>
      <footer className="site-footer container">
        <span>Career Roadmaps is licensed under the <a href={licenseUrl} download="LICENSE.txt">MIT License</a>.</span>
        <a href="https://github.com/cabarria/career-roadmaps">View the project on GitHub</a>
      </footer>
    </>
  );
}

const pageTitle = roadmap?.title ?? (path === '/careers' ? 'Career Metrics' : '');
if (pageTitle) document.title = `${pageTitle} | Career Roadmaps`;

createRoot(document.getElementById('root')).render(<App />);
