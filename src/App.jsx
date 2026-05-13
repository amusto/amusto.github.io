import React from 'react';
import './App.css';

import roadmapScreenshot from './assets/images/roadmap-screenshot.png';
import gridSensorScreenshot from './assets/grid-sensor-architecture.svg';
import hyperscaleDashboard from './assets/images/hyperscale-dashboard.png';
import hyperscalePorts from './assets/images/hyperscale-ports.png';

const App = () => {
  return (
    <>
<nav>
  <a href="#" className="nav-logo"><span className="nav-dot"></span>AM / Principal Engineer</a>
  <ul className="nav-links">
    <li><a href="#expertise">Expertise</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#articles">Writing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="mailto:armando.musto@gmail.com" className="nav-cta">Hire Me</a>
</nav>

{/*HERO*/}
<div className="hero">
  <div className="hero-left">
    <div className="hero-eyebrow fade d1">
      <span className="eyebrow-line"></span>
      <span className="eyebrow-text">Washington DC · Remote-ready · Open to opportunities</span>
    </div>
    <h1 className="hero-name fade d2">Armando<span className="hero-name-last">Musto</span></h1>
    <p className="hero-tagline fade d3">Principal Engineer · Solutions Architect · Technical Lead</p>
    <p className="hero-bio fade d4">
      I design and build <strong>cloud-native systems at enterprise scale</strong> — event-driven microservices,
      serverless AWS pipelines, and full-stack platforms that replace legacy infrastructure.
      20+ years of hands-on engineering across aviation, edtech, government, and enterprise software.
    </p>
    <div className="hero-actions fade d5">
      <a href="#projects" className="btn btn-dark">View My Work</a>
      <a href="mailto:armando.musto@gmail.com" className="btn btn-outline">Get in Touch</a>
    </div>
  </div>
  <div className="hero-right">
    <div className="hero-stats">
      <div className="stat-item"><div className="stat-num">20+</div><div className="stat-label">Years in the trenches</div></div>
      <div className="stat-item"><div className="stat-num">120+</div><div className="stat-label">GitHub repositories</div></div>
      <div className="stat-item"><div className="stat-num">∞</div><div className="stat-label">Problems left to solve</div></div>
    </div>
    <div className="hero-stack">
      <div className="stack-label">Current stack</div>
      <div className="stack-chips">
        <span className="chip hot">AWS</span>
        <span className="chip hot">Kafka</span>
        <span className="chip hot">Kubernetes</span>
        <span className="chip cool">NestJS</span>
        <span className="chip cool">React / Next.js</span>
        <span className="chip cool">TypeScript</span>
        <span className="chip go">Terraform</span>
        <span className="chip go">PostgreSQL</span>
        <span className="chip">Java / Spring Boot</span>
        <span className="chip">Docker</span>
        <span className="chip">CI/CD</span>
        <span className="chip">Event-Driven Arch</span>
        <span className="chip">Mapbox / GeoJSON</span>
        <span className="chip">Electron</span>
      </div>
    </div>
  </div>
</div>

{/*EXPERTISE*/}
<section id="expertise">
  <div className="inner">
    <div className="section-head"><span className="s-num">01 —</span><h2 className="s-title">Areas of Expertise</h2></div>
    <div className="exp-grid">
      <div className="exp-card">
        <span className="exp-glyph">⬡</span>
        <h3>Cloud Architecture</h3>
        <p>Resilient, serverless-first systems on AWS and Azure. Lambda orchestration, API Gateway, SQS, DynamoDB, S3 — wired together with Terraform so infrastructure is code, not a wiki page.</p>
        <div className="exp-tags"><span className="chip hot">AWS</span><span className="chip hot">Azure</span><span className="chip go">Terraform</span><span className="chip">Serverless</span></div>
      </div>
      <div className="exp-card">
        <span className="exp-glyph">⇄</span>
        <h3>Event-Driven Systems</h3>
        <p>Mission-critical streaming pipelines using Kafka and ActiveMQ. I've processed real-time satellite aviation data at Aireon and built choreographed microservices that hold up under production load.</p>
        <div className="exp-tags"><span className="chip hot">Kafka</span><span className="chip">ActiveMQ</span><span className="chip cool">Microservices</span></div>
      </div>
      <div className="exp-card">
        <span className="exp-glyph">◎</span>
        <h3>Full-Stack Engineering</h3>
        <p>I own the full vertical — NestJS APIs, React/Redux UIs, Postgres schemas. My boilerplate repos reflect a decade of stack evolution and real opinions about how a production system should be wired.</p>
        <div className="exp-tags"><span className="chip cool">NestJS</span><span className="chip cool">React</span><span className="chip cool">TypeScript</span><span className="chip">MFE</span></div>
      </div>
      <div className="exp-card">
        <span className="exp-glyph">◈</span>
        <h3>Platform Modernization</h3>
        <p>Replacing legacy systems — ServiceNow backends, monolithic APIs, aging Java apps — with maintainable cloud-native replacements. Currently doing exactly this at Cisco.</p>
        <div className="exp-tags"><span className="chip">Legacy → Cloud</span><span className="chip">API-First</span><span className="chip">ETL</span></div>
      </div>
      <div className="exp-card">
        <span className="exp-glyph">⬕</span>
        <h3>Technical Leadership</h3>
        <p>Led teams of 5 to 20 engineers across government, enterprise, and startup contexts. I write the architecture docs, run the grooming sessions, and still ship code every single day.</p>
        <div className="exp-tags"><span className="chip">Tech Lead</span><span className="chip">Agile</span><span className="chip">Mentoring</span></div>
      </div>
      <div className="exp-card">
        <span className="exp-glyph">▣</span>
        <h3>Geospatial & Data Viz</h3>
        <p>Built isochrone generators on both the Mapbox Matrix API and Google Maps with CONREC polygonization and GeoJSON output. Chart-heavy UIs using Recharts, D3, Highcharts, and Plotly.</p>
        <div className="exp-tags"><span className="chip cool">Mapbox</span><span className="chip">GeoJSON</span><span className="chip">D3</span><span className="chip">Recharts</span></div>
      </div>
    </div>
  </div>
</section>

{/*EXPERIENCE*/}
<section id="experience">
  <div className="inner">
    <div className="section-head"><span className="s-num">02 —</span><h2 className="s-title">Career History</h2></div>
    <div className="timeline">

      <div className="tl-item">
        <div className="tl-meta">
          <span className="tl-date">Apr 2025 — Present</span>
          <div className="tl-co">Cisco</div>
          <div className="tl-role">Technical Lead</div>
        </div>
        <div className="tl-body">
          <h4>Greenfield Source-of-Truth Platform</h4>
          <p>Defining architecture and leading a team building a custom issue-tracking platform to replace a legacy ServiceNow backend. Daily hands-on work in NestJS, React/Redux, Terraform, Kubernetes, and Postgres on AWS — with CI/CD pipelines that actually ship.</p>
          <div className="tl-pills"><span className="pill win">↑ Delivery velocity</span><span className="pill win">↑ Platform scalability</span><span className="pill">NestJS · React · K8s · Terraform · AWS</span></div>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-meta">
          <span className="tl-date">Apr 2024 — Apr 2025</span>
          <div className="tl-co">Aireon</div>
          <div className="tl-role">Senior Software Engineer</div>
        </div>
        <div className="tl-body">
          <h4>Mission-Critical ADS-B Satellite Streaming</h4>
          <p>Managed product teams processing real-time global aircraft surveillance data. Architected Kafka-driven microservices and AWS Lambda pipelines handling streams where dropped data has real-world safety consequences.</p>
          <div className="tl-pills"><span className="pill win">↓ Pipeline latency</span><span className="pill win">↑ Fault tolerance</span><span className="pill">Kafka · Node.js · AWS Lambda · Azure DevOps</span></div>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-meta">
          <span className="tl-date">Jun 2023 — May 2024</span>
          <div className="tl-co">Northstrat</div>
          <div className="tl-role">Senior Software Engineer</div>
        </div>
        <div className="tl-body">
          <h4>Java Messaging Platform · Kafka + ActiveMQ</h4>
          <p>Led design and implementation of dual-broker message integrations for satellite data systems. Drove an API-first approach using Spring Boot, Gradle/Kotlin builds, and consistent ORM/Hibernate patterns across the team.</p>
          <div className="tl-pills"><span className="pill">Spring Boot · Kafka · ActiveMQ · Hibernate · Gradle/Kotlin</span></div>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-meta">
          <span className="tl-date">Nov 2020 — Jun 2023</span>
          <div className="tl-co">uExamS</div>
          <div className="tl-role">Principal Engineer</div>
        </div>
        <div className="tl-body">
          <h4>EdTech Platform: Electron App + AWS Rekognition Proctoring</h4>
          <p>80% coding, 20% architecture. Built and maintained an Electron/React/TypeScript desktop app and a fully serverless AWS backend — Lambdas, API Gateway, S3, Rekognition for ML-based video analysis, and Twilio for live collaborative sessions.</p>
          <div className="tl-pills"><span className="pill win">ML proctoring at scale</span><span className="pill">Electron · React · Rekognition · Twilio · Terraform</span></div>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-meta">
          <span className="tl-date">Aug 2019 — Nov 2020</span>
          <div className="tl-co">College Board</div>
          <div className="tl-role">Senior SWE & Tech Lead</div>
        </div>
        <div className="tl-body">
          <h4>Micro-Frontend Architecture + Elasticsearch ETL Pipeline</h4>
          <p>Led a true Micro-Frontend React application serving millions of students. Also independently designed a multi-Lambda ETL pipeline (SQS → S3 → DynamoDB → Elasticsearch bulk ingest) using raw ES REST verbs rather than the AWS SDK for full control over indexing behavior.</p>
          <div className="tl-pills"><span className="pill win">MFE serving millions of students</span><span className="pill">React · Lerna · Elasticsearch · Lambda · SQS · DynamoDB</span></div>
        </div>
      </div>

      <div className="tl-item">
        <div className="tl-meta">
          <span className="tl-date">2012 — 2019</span>
          <div className="tl-co">Broadsoft/Cisco · NuWave · USPTO</div>
          <div className="tl-role">Lead Developer & Architect</div>
        </div>
        <div className="tl-body">
          <h4>Enterprise Products, Federal Government & Isomorphic Apps</h4>
          <p>Seven years spanning: Angular/Node enterprise products at Broadsoft/Cisco; an isomorphic React/Redux/Node app with custom Webpack config, Sequelize ORM, and Plotly/ChartJS data viz at NuWave; and leading a team of 20 at USPTO to build the Patent Trial &amp; Appeal Board portal — a federally mandated project to modernize the US patent process.</p>
          <div className="tl-pills"><span className="pill win">Led 20-dev team · USPTO federal mandate</span><span className="pill">React · Redux · Angular · Node · Sails · Webpack · oAuth</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

{/*PROJECTS*/}
<section id="projects">
  <div className="inner">
    <div className="section-head"><span className="s-num">03 —</span><h2 className="s-title">Selected Projects</h2></div>
    <div className="proj-grid">

      <a
        href="https://github.com/amusto/Grid-Sensor-Pipeline/blob/main/docs/diagrams/system-overview.md"
        className="proj-card hero-proj"
        target="_blank"
        rel="noopener"
      >
        <span className="proj-arrow">↗</span>
        <div>
          <p className="proj-type">
            Serverless · TypeScript · AWS · Production-Grade POC
          </p>
          <h3>Grid Sensor Pipeline</h3>
          <p>
            Serverless IoT event-processing pipeline in TypeScript — application
            code, AWS CDK infrastructure, and a Model Context Protocol server
            that exposes the pipeline's data to LLM agents as read-only tools.
            Sensor telemetry from a grid of IoT devices flows through AWS IoT
            Core into two parallel paths: a Kinesis-backed persistence path that
            validates and archives every reading, and a Step Functions workflow
            that uses Bedrock to enrich threshold-breach notifications with
            LLM-classified severity, channel routing, and per-channel narratives.
          </p>

          <p>
            Three architectural decisions worth noticing. Step Functions +
            LangGraph composition — durable workflow at one layer, agentic
            decisioning at another, not one or the other. Fail-soft Bedrock
            fallback — AI-generated content is best-effort, never load-bearing,
            so the alert always reaches its destination even when the model
            fails. Cost guardrails at three time horizons — per-call retry cap,
            per-window aggregate alarm, per-output schema bounds — each catching
            a different failure mode at a different time scale. Architectural
            invariants codified in CLAUDE.md, decision logs per phase,
            end-to-end live verification against deployed AWS.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <img
              src={gridSensorScreenshot}
              alt="Grid Sensor Pipeline Architecture"
              width={'400px'}
            />
          </div>
          <div
            style={{
              height: '1px',
              background: 'rgba(247,244,239,0.12)',
              marginBottom: '1.5rem',
            }}
          ></div>
          <div className="proj-meta-label">Stack</div>
          <div className="proj-chips">
            <span className="proj-chip">TypeScript</span>
            <span className="proj-chip">AWS CDK</span>
            <span className="proj-chip">Step Functions</span>
            <span className="proj-chip">Bedrock</span>
            <span className="proj-chip">LangGraph</span>
            <span className="proj-chip">MCP</span>
          </div>
        </div>
      </a>

      <a href="https://github.com/amusto/Hyperscale-Dashboard-POC" className="proj-card" target="_blank" rel="noopener">
        <span className="proj-arrow">↗</span>
        <p className="proj-type">Cloud Architecture · Java · AWS · Public</p>
        <h3>Hyperscale Ops POC</h3>
        <p>Greenfield full-stack POC for a hyperscale data center operations app — Java 21 + Spring Boot 3 on ECS Fargate, React + AWS Cloudscape design system on S3/CloudFront, and a DynamoDB single-table model designed access-pattern-first rather than entity-first. Infrastructure defined in AWS CDK Java, so the entire stack — API, data layer, deployment — lives in one language ecosystem. Built as the interview-prep artifact for a hyperscale role; the architectural choices are ones I'd defend in a Staff-level system-design interview, not the ones a tutorial picks.</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <figure style={{ margin: 0 }}>
            <img
              src={hyperscaleDashboard}
              alt="Hyperscale Ops POC — Default Dashboard"
              style={{ width: '100%', display: 'block', border: '1px solid rgba(14,14,14,0.08)' }}
            />
            <figcaption style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginTop: '0.4rem' }}>
              Default Dashboard
            </figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            <img
              src={hyperscalePorts}
              alt="Hyperscale Ops POC — Ports Section"
              style={{ width: '100%', display: 'block', border: '1px solid rgba(14,14,14,0.08)' }}
            />
            <figcaption style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginTop: '0.4rem' }}>
              Ports Section
            </figcaption>
          </figure>
        </div>
        <div className="proj-divider"></div>
        <div className="proj-chips">
          <span className="proj-chip">Spring Boot</span><span className="proj-chip">React</span>
          <span className="proj-chip">Cloudscape</span><span className="proj-chip">DynamoDB</span>
          <span className="proj-chip">AWS CDK</span><span className="proj-chip">ECS Fargate</span>
        </div>
      </a>

      <a href="https://roadmap.musto.io/" className="proj-card" target="_blank" rel="noopener">
        <span className="proj-arrow">↗</span>
        <div>
          <p className="proj-type">Full-Stack Product · TypeScript · Active</p>
          <h3>Development Roadmap Tracker</h3>
          <p>A self-built project management tool that reflects real engineering opinions — not a tutorial project. NestJS backend, React frontend, PostgreSQL persistence, Recharts for metrics visualization, and drag-and-drop (DnD) for requirement management. The kind of system principal engineers build for themselves.</p>
        </div>
        <div>
          <p style={{fontSize: '14px', color: 'rgba(247,244,239,0.65)', lineHeight: '1.72', marginBottom: '1.5rem'}}>
            Demonstrates full-stack ownership with real concerns: proper API layer, drag-and-drop UX patterns, charted progress metrics, and a Postgres schema designed to hold up. A living example of my current preferred stack.
          </p>
          <div style={{marginBottom: '1.5rem'}}>
            <img src={roadmapScreenshot} alt="Roadmap Screenshot" width={'400px'} />
          </div>
          <div style={{height: '1px', background: 'rgba(247,244,239,0.12)', marginBottom: '1.5rem'}}></div>
          <div className="proj-meta-label">Stack</div>
          <div className="proj-chips">
            <span className="proj-chip">NestJS</span><span className="proj-chip">React</span>
            <span className="proj-chip">PostgreSQL</span><span className="proj-chip">Recharts</span>
            <span className="proj-chip">DnD</span><span className="proj-chip">TypeScript</span>
          </div>
        </div>
      </a>

      <a href="https://github.com/amusto/mapbox-isochrone" className="proj-card geo-proj" target="_blank" rel="noopener">
        <span className="proj-arrow">↗</span>
        <p className="proj-type">Geospatial · JavaScript · Public</p>
        <h3>Mapbox Isochrone Generator</h3>
        <p>Travel-time polygon generator built atop the Mapbox Matrix API using CONREC polygonization — the same contouring algorithm used in topographic mapping — applied to drive-time reachability. Returns GeoJSON feature collections at configurable time thresholds with support for both divergent and convergent travel modes.</p>
        <div className="proj-divider"></div>
        <div className="proj-chips">
          <span className="proj-chip">Mapbox Matrix API</span><span className="proj-chip">CONREC</span>
          <span className="proj-chip">GeoJSON</span><span className="proj-chip">JavaScript</span>
        </div>
      </a>

      <a href="https://github.com/amusto/isochrone-isodistance-with-google-maps" className="proj-card" target="_blank" rel="noopener">
        <span className="proj-arrow">↗</span>
        <p className="proj-type">Geospatial · JavaScript · Public</p>
        <h3>Google Maps Isodistance Polygons</h3>
        <p>Companion geospatial tool that draws network-based reachability polygons on Google Maps. Demonstrates understanding of spatial algorithms that most frontend engineers never touch: the difference between straight-line buffers and true network-distance isodistance shapes.</p>
        <div className="proj-divider"></div>
        <div className="proj-chips">
          <span className="proj-chip">Google Maps API</span><span className="proj-chip">Distance Matrix</span>
          <span className="proj-chip">Isodistance</span><span className="proj-chip">GeoJSON</span>
        </div>
      </a>

      <a href="https://github.com/amusto/lerna-mfe-example" className="proj-card" target="_blank" rel="noopener">
        <span className="proj-arrow">↗</span>
        <p className="proj-type">Architecture · JavaScript · Public</p>
        <h3>Lerna Micro-Frontend Example</h3>
        <p>Working reference implementation of true Micro-Frontend architecture using Lerna for monorepo management. Built directly from production MFE experience at College Board, where this pattern served millions of students. Not module federation marketing — actual MFE composition.</p>
        <div className="proj-divider"></div>
        <div className="proj-chips">
          <span className="proj-chip">Lerna</span><span className="proj-chip">React</span>
          <span className="proj-chip">MFE</span><span className="proj-chip">Monorepo</span><span className="proj-chip">JavaScript</span>
        </div>
      </a>

      <a href="https://github.com/amusto/job-pipeline-app" className="proj-card" target="_blank" rel="noopener">
        <span className="proj-arrow">↗</span>
        <p className="proj-type">Full-Stack · TypeScript · Private</p>
        <h3>Full-Stack Job Pipeline App</h3>
        <p>Infrastructure-included full-stack application: Terraform provisions VPC and database, NestJS powers the API, React drives the UI, MySQL handles persistence. End-to-end ownership from cloud config to browser — the way I think every full-stack project should be built.</p>
        <div className="proj-divider"></div>
        <div className="proj-chips">
          <span className="proj-chip">Terraform</span><span className="proj-chip">NestJS</span>
          <span className="proj-chip">React</span><span className="proj-chip">MySQL</span><span className="proj-chip">TypeScript</span>
        </div>
      </a>

      <a href="https://github.com/amusto/serverless-aws-api-project" className="proj-card" target="_blank" rel="noopener">
        <span className="proj-arrow">↗</span>
        <p className="proj-type">Cloud · Shell · Public</p>
        <h3>Serverless AWS API Project</h3>
        <p>A structured serverless API reference demonstrating Lambda orchestration, API Gateway configuration, and IAM wiring — with shell scripts for deployment automation. A clean, repeatable starting point for the serverless patterns I apply across production systems.</p>
        <div className="proj-divider"></div>
        <div className="proj-chips">
          <span className="proj-chip">AWS Lambda</span><span className="proj-chip">API Gateway</span>
          <span className="proj-chip">IAM</span><span className="proj-chip">Shell</span>
        </div>
      </a>

    </div>
    <p style={{marginTop: '2rem', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-faint)'}}>
      → 120+ repositories at <a href="https://github.com/amusto" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>github.com/amusto</a> — spanning Angular to NestJS, ColdFusion to Kafka, jQuery Mobile to Kubernetes.
    </p>
  </div>
</section>

{/*ARTICLES*/}
<section id="articles">
  <div className="inner">
    <div className="section-head"><span className="s-num">04 —</span><h2 className="s-title">Writing & Thinking</h2></div>
    <p className="articles-intro">
      Twenty years of engineering decisions, hard lessons, and strong opinions — condensed into articles you can actually use. Publishing on <a href="https://dev.to" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>Dev.to</a> and <a href="https://medium.com" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>Medium</a>.
    </p>
    <div className="article-list">

      <a href="#" className="article-item">
        <div>
          <div className="article-title">Kafka vs SQS: When Event Streaming Beats a Queue (And When It Doesn't)</div>
          <div className="article-hook">I've run both in production — Kafka at Aireon for real-time satellite surveillance, SQS at College Board for ETL fan-out. Here's the real decision matrix, not the marketing version. Covers throughput, ordering guarantees, consumer groups, and the cost curves nobody talks about.</div>
        </div>
        <div className="article-meta">
          <span className="article-tag">Architecture</span>
          <span className="article-read">~8 min read</span>
          <span className="article-status">Draft</span>
        </div>
      </a>

      <a href="#" className="article-item">
        <div>
          <div className="article-title">How I Structure a NestJS Project From Scratch (With Real Opinions)</div>
          <div className="article-hook">My nestjs-backend-boilerplate distilled into prose — module boundaries, the Repository pattern, DTOs, guards, interceptors, and why I stopped fighting the framework's opinions and started leaning into them. Includes the folder structure I actually ship with.</div>
        </div>
        <div className="article-meta">
          <span className="article-tag">NestJS</span>
          <span className="article-read">~10 min read</span>
          <span className="article-status">Draft</span>
        </div>
      </a>

      <a href="#" className="article-item">
        <div>
          <div className="article-title">Micro-Frontend Architecture: What the Blog Posts Leave Out</div>
          <div className="article-hook">I ran true MFE in production at College Board. The Lerna monorepo worked. Module federation is not the same thing. This covers shell app coordination, shared dependency hell, independent deployability, and the organizational alignment you need before writing a line of code.</div>
        </div>
        <div className="article-meta">
          <span className="article-tag">React / MFE</span>
          <span className="article-read">~12 min read</span>
          <span className="article-status">Draft</span>
        </div>
      </a>

      <a href="#" className="article-item">
        <div>
          <div className="article-title">Geospatial for JavaScript Developers: Building Isochrone Maps With Mapbox</div>
          <div className="article-hook">Most frontend engineers never touch GeoJSON. I built two isochrone generators — one with the Mapbox Matrix API using CONREC polygonization, one with Google Maps Distance Matrix. Explains the spatial math, the API calls, and why "as the crow flies" is the wrong buffer for human movement.</div>
        </div>
        <div className="article-meta">
          <span className="article-tag">Geospatial</span>
          <span className="article-read">~11 min read</span>
          <span className="article-status">Draft</span>
        </div>
      </a>

      <a href="#" className="article-item">
        <div>
          <div className="article-title">Terraform First: Why I Provision Infrastructure Before Writing a Single Route</div>
          <div className="article-hook">Full-stack doesn't stop at the API layer. My boilerplate repos include VPC, DB, and compute config because IaC is a first-class concern, not an afterthought. A practical walkthrough of spinning up a NestJS + React + Postgres stack entirely from HCL before touching application code.</div>
        </div>
        <div className="article-meta">
          <span className="article-tag">DevOps</span>
          <span className="article-read">~9 min read</span>
          <span className="article-status">Draft</span>
        </div>
      </a>

      <a href="#" className="article-item">
        <div>
          <div className="article-title">Senior vs. Principal Engineer: What Actually Changes</div>
          <div className="article-hook">After 20 years the answer isn't about skills — it's about surface area. How much of the system, the team, and the business are you willing to own? A candid breakdown of the shift, the traps, and what it looks like when it's working.</div>
        </div>
        <div className="article-meta">
          <span className="article-tag">Career</span>
          <span className="article-read">~7 min read</span>
          <span className="article-status">Draft</span>
        </div>
      </a>

    </div>
  </div>
</section>

{/*CONTACT*/}
<section id="contact">
  <div className="inner">
    <div className="section-head"><span className="s-num">05 —</span><h2 className="s-title">Get in Touch</h2></div>
    <div className="contact-grid">
      <div className="contact-left">
        <h2>Let's build something that lasts.</h2>
        <p>Open to Staff / Principal Engineer, Solutions Architect, and Technical Lead roles — as well as fractional engineering leadership and advisory engagements. Based in Washington DC, remote-first.</p>
        <div className="avail-row"><span className="avail-dot"></span>Available for new opportunities</div>
        <a href="mailto:armando.musto@gmail.com" className="btn btn-dark">Send me a message</a>
      </div>
      <div>
        <div className="contact-links">
          <a href="mailto:armando.musto@gmail.com" className="contact-link">
            <div><div className="cl-label">Email</div><div className="cl-value">armando.musto@gmail.com</div></div>
            <span className="cl-arrow">→</span>
          </a>
          <a href="https://github.com/amusto" target="_blank" rel="noopener" className="contact-link">
            <div><div className="cl-label">GitHub</div><div className="cl-value">github.com/amusto</div></div>
            <span className="cl-arrow">→</span>
          </a>
          <a href="https://linkedin.com/in/armandoMusto" target="_blank" rel="noopener" className="contact-link">
            <div><div className="cl-label">LinkedIn</div><div className="cl-value">linkedin.com/in/armandoMusto</div></div>
            <span className="cl-arrow">→</span>
          </a>
          <div className="contact-link" style={{cursor: 'default'}}>
            <div><div className="cl-label">Location</div><div className="cl-value">Washington, DC Metro · Remote-friendly</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="footer-wrap">
  <footer>
    <p>© 2025 Armando Musto — <a href="https://github.com/amusto">github.com/amusto</a></p>
    <p>Principal Engineer · Solutions Architect · Washington DC</p>
  </footer>
</div>
    </>
  );
};

export default App;
