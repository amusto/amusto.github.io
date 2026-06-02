import React, { useMemo, useState } from 'react';

const CAPABILITY_PILLARS = [
  { id: 'compute', label: 'Compute', glyph: '▢', description: 'CPU + GPU, containers, serverless, batch' },
  { id: 'data', label: 'Data Layer', glyph: '▤', description: 'SQL, PostGIS, vector stores, caches' },
  { id: 'ai', label: 'AI Platform', glyph: '◉', description: 'Inference, model routing, agent orchestration' },
  { id: 'rag', label: 'Vector / RAG', glyph: '❖', description: 'Embeddings, retrieval, grounded answers' },
  { id: 'events', label: 'Event-Driven', glyph: '⇄', description: 'Async pipelines, queues, step workflows' },
  { id: 'obs', label: 'Observability', glyph: '◈', description: 'Metrics, evals, cost + drift tracking' },
  { id: 'gov', label: 'Security & Governance', glyph: '⛨', description: 'RBAC, multi-tenancy, audit, compliance' },
];

const CATEGORIES = [
  { id: 'ai', label: 'AI & Agentic Platforms' },
  { id: 'geo', label: 'Operational Intelligence & Geospatial' },
  { id: 'data', label: 'Data & Platform Engineering' },
  { id: 'full', label: 'Full-Stack Products & Tools' },
  { id: 'ref', label: 'Architecture References' },
];

const PROJECTS = [
  {
    id: 'caseflow',
    title: 'CaseFlow-AI',
    category: 'ai',
    pillars: ['data', 'ai', 'rag', 'gov'],
    featured: true,
    url: 'https://github.com/amusto/caseflow-ai-showcase',
    demoUrl: 'https://caseflow.musto.io',
    description:
      'Multi-tenant case-management SaaS built end-to-end as a reference implementation of an AI-driven SDLC. NestJS + TypeORM, React + Redux, PostgreSQL with strict tenant isolation, deployed on AWS via Terraform. pgvector embeddings, RAG case search, and AI-assisted triage are on the roadmap.',
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'pgvector (roadmap)', 'RAG (roadmap)', 'React', 'Terraform', 'AWS ECS/RDS', 'Multi-Tenant SaaS'],
  },
  {
    id: 'grid',
    title: 'Grid Sensor Pipeline',
    category: 'ai',
    pillars: ['compute', 'ai', 'events', 'obs', 'gov'],
    featured: true,
    url: 'https://github.com/amusto/Grid-Sensor-Pipeline/blob/main/docs/diagrams/system-overview.md',
    description:
      'Serverless IoT event-processing pipeline with an agentic alert-routing layer (Bedrock + LangGraph + DynamoDB-backed case persistence) and a Model Context Protocol server that exposes pipeline data to LLM agents. Fail-soft Bedrock fallback, cost guardrails, dual CloudWatch + Datadog observability.',
    stack: ['TypeScript', 'AWS CDK', 'Step Functions', 'Bedrock', 'LangGraph', 'MCP', 'DynamoDB', 'Powertools', 'Datadog'],
  },
  {
    id: 'erip',
    title: 'Emergency Response Intelligence Platform',
    category: 'geo',
    pillars: ['data', 'events'],
    featured: true,
    url: 'https://github.com/amusto/emergency-response-intelligence-platform',
    demoUrl: 'https://erip.musto.io',
    description:
      'Multi-agency operational intelligence platform fusing live incidents, responder units, and care facilities into one common operating picture. PostGIS proximity (ST_DWithin / ST_Distance) and Valhalla travel-time routing over OpenStreetMap, degrading to a haversine estimate when offline.',
    stack: ['NestJS', 'React', 'Leaflet', 'PostGIS', 'Valhalla', 'PostgreSQL', 'TypeScript', 'PWA'],
  },
  {
    id: 'mapbox',
    title: 'Mapbox Isochrone Generator',
    category: 'geo',
    pillars: ['data'],
    url: 'https://github.com/amusto/mapbox-isochrone',
    description:
      'Travel-time polygon generator built atop the Mapbox Matrix API using CONREC polygonization — the contouring algorithm used in topographic mapping — applied to drive-time reachability. Returns GeoJSON at configurable thresholds.',
    stack: ['Mapbox Matrix API', 'CONREC', 'GeoJSON', 'JavaScript'],
  },
  {
    id: 'google',
    title: 'Google Maps Isodistance Polygons',
    category: 'geo',
    pillars: ['data'],
    url: 'https://github.com/amusto/isochrone-isodistance-with-google-maps',
    description:
      'Companion geospatial tool that draws network-based reachability polygons on Google Maps — the difference between straight-line buffers and true network-distance isodistance shapes.',
    stack: ['Google Maps API', 'Distance Matrix', 'Isodistance', 'GeoJSON'],
  },
  {
    id: 'etl',
    title: 'Program Analytics ETL Platform',
    category: 'data',
    pillars: ['data', 'compute'],
    featured: true,
    url: 'https://github.com/amusto/Program-Analytics-ETL-Platform',
    description:
      'Miniature enterprise analytics platform — data engineering first, full-stack second. Multi-source CSV ingestion validated with Pydantic v2 (dead-letter sink), transformed into reporting metrics, loaded idempotently into PostgreSQL via ON CONFLICT DO UPDATE, exposed through FastAPI + React.',
    stack: ['Python', 'FastAPI', 'Pydantic v2', 'SQLAlchemy 2.0', 'PostgreSQL', 'React', 'ETL', 'Idempotent UPSERT'],
  },
  {
    id: 'hyper',
    title: 'Hyperscale Ops POC',
    category: 'data',
    pillars: ['compute', 'data'],
    url: 'https://github.com/amusto/Hyperscale-Dashboard-POC',
    description:
      'Greenfield full-stack POC for a hyperscale data center operations app — Java 21 + Spring Boot 3 on ECS Fargate, React + AWS Cloudscape on S3/CloudFront, and an access-pattern-first DynamoDB single-table model. Infrastructure in AWS CDK Java.',
    stack: ['Spring Boot', 'React', 'Cloudscape', 'DynamoDB', 'AWS CDK', 'ECS Fargate'],
  },
  {
    id: 'roadmap',
    title: 'Development Roadmap Tracker',
    category: 'full',
    pillars: ['data'],
    url: 'https://roadmap.musto.io/',
    demoUrl: 'https://roadmap.musto.io/',
    description:
      'A self-built project management tool reflecting real engineering opinions — NestJS backend, React frontend, PostgreSQL persistence, Recharts metrics, and drag-and-drop requirement management.',
    stack: ['NestJS', 'React', 'PostgreSQL', 'Recharts', 'DnD', 'TypeScript'],
  },
  {
    id: 'logi',
    title: 'Logistics Workflow Automation Platform',
    category: 'full',
    pillars: ['data', 'events', 'gov'],
    featured: true,
    isPrivate: true,
    url: '#',
    description:
      'Production-grade multi-tenant SaaS that turned multi-state oversized-freight permitting into a configurable, rules-driven automation engine. Google Maps route traversal in; jurisdiction-aware compliance, dynamic cost calculation, and customer-facing PDFs out, in real time.',
    stack: ['NestJS', 'React', 'PostgreSQL', 'AWS', 'Terraform', 'Google Maps API', 'Rules Engine', 'Multi-Tenant SaaS'],
  },
  {
    id: 'job',
    title: 'Full-Stack Job Pipeline App',
    category: 'full',
    pillars: ['data', 'compute'],
    isPrivate: true,
    url: 'https://github.com/amusto/job-pipeline-app',
    description:
      'Infrastructure-included full-stack app: Terraform provisions VPC and database, NestJS powers the API, React drives the UI, MySQL handles persistence. End-to-end ownership from cloud config to browser.',
    stack: ['Terraform', 'NestJS', 'React', 'MySQL', 'TypeScript'],
  },
  {
    id: 'lerna',
    title: 'Lerna Micro-Frontend Example',
    category: 'ref',
    pillars: [],
    url: 'https://github.com/amusto/lerna-mfe-example',
    description:
      'Working reference implementation of true Micro-Frontend architecture using Lerna for monorepo management — built from production MFE experience at College Board. Actual MFE composition, not module-federation marketing.',
    stack: ['Lerna', 'React', 'MFE', 'Monorepo', 'JavaScript'],
  },
  {
    id: 'sls',
    title: 'Serverless AWS API Project',
    category: 'ref',
    pillars: ['compute', 'events'],
    url: 'https://github.com/amusto/serverless-aws-api-project',
    description:
      'A structured serverless API reference demonstrating Lambda orchestration, API Gateway configuration, and IAM wiring — with shell scripts for deployment automation. A clean, repeatable starting point.',
    stack: ['AWS Lambda', 'API Gateway', 'IAM', 'Shell'],
  },
];

const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

const mono = {
  fontFamily: 'var(--mono)',
  fontSize: '11px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const CapabilityDots = ({ pillars }) => (
  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }} aria-label="AI-ready capabilities">
    {CAPABILITY_PILLARS.map((p) => {
      const on = pillars.includes(p.id);
      return (
        <span
          key={p.id}
          title={on ? `${p.label}: ${p.description}` : `${p.label}: not covered`}
          aria-label={on ? `${p.label}: yes` : `${p.label}: no`}
          style={{
            display: 'inline-block',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            background: on ? 'var(--accent)' : 'transparent',
            border: on ? 'none' : '1px solid var(--ink-faint)',
            opacity: on ? 1 : 0.4,
          }}
        />
      );
    })}
  </div>
);

const Badges = ({ project }) => (
  <span style={{ display: 'inline-flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
    {project.featured && (
      <span style={{ ...mono, color: 'var(--accent)', border: '1px solid var(--accent)', padding: '1px 7px' }}>Featured</span>
    )}
    {project.isPrivate && (
      <span style={{ ...mono, color: 'var(--ink-faint)', border: '1px solid var(--ink-faint)', padding: '1px 7px' }}>Private</span>
    )}
  </span>
);

const DemoLink = ({ project }) =>
  project.demoUrl ? (
    <span
      role="link"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(project.demoUrl, '_blank', 'noopener');
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          window.open(project.demoUrl, '_blank', 'noopener');
        }
      }}
      title={`Open the live demo at ${project.demoUrl.replace(/^https?:\/\//, '')}`}
      aria-label={`Open the ${project.title} live demo (opens in a new tab)`}
      style={{
        ...mono,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'var(--paper)',
        background: 'var(--accent)',
        padding: '0.45rem 0.85rem',
        cursor: 'pointer',
        width: 'fit-content',
      }}
    >
      Live demo ↗
    </span>
  ) : null;

const cardBase = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',
  textDecoration: 'none',
  color: 'var(--ink)',
  border: '1px solid var(--border)',
  background: 'var(--paper)',
  padding: '1.75rem',
};

const GridCard = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener"
    style={{ ...cardBase, borderColor: project.featured ? 'var(--accent)' : 'var(--border)' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
      <div style={{ ...mono, color: 'var(--ink-faint)' }}>{categoryById[project.category]?.label}</div>
      <span style={{ color: 'var(--ink-faint)', flexShrink: 0 }}>↗</span>
    </div>
    <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 400, margin: 0, lineHeight: 1.2 }}>{project.title}</h3>
    <CapabilityDots pillars={project.pillars} />
    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ink-muted)', margin: 0 }}>{project.description}</p>
    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center', marginTop: 'auto', paddingTop: '0.4rem' }}>
      <Badges project={project} />
      <DemoLink project={project} />
    </div>
    <div className="proj-chips">
      {project.stack.slice(0, 6).map((t) => (
        <span key={t} className="proj-chip">{t}</span>
      ))}
    </div>
  </a>
);

const ListRow = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener"
    style={{ ...cardBase, flexDirection: 'row', alignItems: 'center', gap: '1.5rem', borderColor: project.featured ? 'var(--accent)' : 'var(--border)' }}
  >
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem' }}>{project.title}</span>
        <Badges project={project} />
      </div>
      <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--ink-muted)', margin: '0 0 0.6rem' }}>{project.description}</p>
      <div className="proj-chips">
        {project.stack.slice(0, 5).map((t) => (
          <span key={t} className="proj-chip">{t}</span>
        ))}
      </div>
    </div>
    <div style={{ flexShrink: 0, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
      <div style={{ ...mono, color: 'var(--ink-faint)' }}>{categoryById[project.category]?.label}</div>
      <CapabilityDots pillars={project.pillars} />
      <DemoLink project={project} />
    </div>
  </a>
);

const BoardCard = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener"
    style={{ ...cardBase, gap: '0.55rem', padding: '1.1rem', borderColor: project.featured ? 'var(--accent)' : 'var(--border)' }}
  >
    <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 400, margin: 0, lineHeight: 1.25 }}>{project.title}</h3>
    <CapabilityDots pillars={project.pillars} />
    <p style={{ fontSize: '12.5px', lineHeight: 1.6, color: 'var(--ink-muted)', margin: 0 }}>{project.description}</p>
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badges project={project} />
      <DemoLink project={project} />
    </div>
  </a>
);

const Projects = () => {
  const [layout, setLayout] = useState('grid');
  const [activePillars, setActivePillars] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const togglePillar = (id) =>
    setActivePillars((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));

  const clearFilters = () => {
    setActivePillars([]);
    setActiveCategory('all');
    setFeaturedOnly(false);
  };

  const filtered = useMemo(
    () =>
      PROJECTS.filter((p) => {
        if (featuredOnly && !p.featured) return false;
        if (activeCategory !== 'all' && p.category !== activeCategory) return false;
        if (activePillars.length && !activePillars.some((id) => p.pillars.includes(id))) return false;
        return true;
      }),
    [activePillars, activeCategory, featuredOnly]
  );

  const layoutButtons = [
    { mode: 'grid', label: 'Grid' },
    { mode: 'list', label: 'List' },
    { mode: 'board', label: 'Board' },
  ];

  const hasFilters = activePillars.length > 0 || activeCategory !== 'all' || featuredOnly;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Project layout"
        style={{ display: 'inline-flex', width: 'fit-content', border: '1px solid var(--border)', marginBottom: '1.25rem' }}
      >
        {layoutButtons.map((b, i) => {
          const on = layout === b.mode;
          return (
            <button
              key={b.mode}
              role="tab"
              aria-selected={on}
              onClick={() => setLayout(b.mode)}
              style={{
                ...mono,
                padding: '0.55rem 1.1rem',
                border: 'none',
                borderLeft: i ? '1px solid var(--border)' : 'none',
                background: on ? 'var(--accent)' : 'transparent',
                color: on ? 'var(--paper)' : 'var(--ink-muted)',
                cursor: 'pointer',
              }}
            >
              {b.label}
            </button>
          );
        })}
      </div>

      <div style={{ border: '1px solid var(--border)', background: 'var(--paper-warm)', padding: '1rem 1.15rem', marginBottom: '2rem' }}>
        <div style={{ ...mono, color: 'var(--ink-faint)', marginBottom: '0.7rem' }}>Filter by capability</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {CAPABILITY_PILLARS.map((p) => {
            const on = activePillars.includes(p.id);
            return (
              <button
                key={p.id}
                onClick={() => togglePillar(p.id)}
                title={p.description}
                aria-pressed={on}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.7rem',
                  cursor: 'pointer',
                  border: '1px solid var(--accent)',
                  background: on ? 'var(--accent)' : 'transparent',
                  color: on ? 'var(--paper)' : 'var(--accent)',
                }}
              >
                <span aria-hidden>{p.glyph}</span> {p.label}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', alignItems: 'center' }}>
          <span style={{ ...mono, color: 'var(--ink-faint)' }}>Category</span>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            style={{ fontFamily: 'var(--mono)', fontSize: '12px', padding: '0.4rem 0.6rem', border: '1px solid var(--border)', background: 'var(--paper)', color: 'var(--ink)' }}
          >
            <option value="all">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>

          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '13px', color: 'var(--ink-muted)', cursor: 'pointer' }}>
            <input type="checkbox" checked={featuredOnly} onChange={(e) => setFeaturedOnly(e.target.checked)} /> Featured only
          </label>

          {hasFilters && (
            <button
              onClick={clearFilters}
              style={{ ...mono, marginLeft: 'auto', padding: '0.4rem 0.85rem', border: '1px solid var(--border)', background: 'transparent', color: 'var(--ink-muted)', cursor: 'pointer' }}
            >
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      <div style={{ ...mono, color: 'var(--ink-faint)', marginBottom: '1rem' }}>
        {filtered.length} of {PROJECTS.length} projects
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--ink-faint)', fontSize: '14px' }}>
          No projects match these filters.{' '}
          <button onClick={clearFilters} style={{ ...mono, marginLeft: '0.4rem', padding: '0.3rem 0.7rem', border: '1px solid var(--border)', background: 'transparent', color: 'var(--ink-muted)', cursor: 'pointer' }}>
            Reset
          </button>
        </div>
      ) : layout === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((p) => (
            <GridCard key={p.id} project={p} />
          ))}
        </div>
      ) : layout === 'list' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.map((p) => (
            <ListRow key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
          {CATEGORIES.filter((c) => activeCategory === 'all' || activeCategory === c.id).map((category) => {
            const items = filtered.filter((p) => p.category === category.id);
            if (!items.length && activeCategory === 'all') return null;
            return (
              <div key={category.id} style={{ background: 'var(--paper-warm)', border: '1px solid var(--border)', padding: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', padding: '0.15rem 0.25rem 0.85rem' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1rem' }}>{category.label}</span>
                  <span style={{ ...mono, color: 'var(--ink-faint)' }}>{items.length}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {items.length ? (
                    items.map((p) => <BoardCard key={p.id} project={p} />)
                  ) : (
                    <div style={{ fontSize: '12px', color: 'var(--ink-faint)', padding: '0.4rem' }}>No matches</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
