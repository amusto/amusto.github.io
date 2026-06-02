import React from 'react';
import './App.css';

import Projects from './components/Projects/Projects';

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
    <Projects />
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

      <div className="article-item">
        <div>
          <div className="article-title">
            <a href="https://dev.to/amusto/soc-2-isnt-a-project-its-a-reflection-of-how-your-engineering-team-already-works-1mf9" target="_blank" rel="noopener" style={{color: 'inherit', textDecoration: 'none'}}>SOC 2 Isn't a Project. It's a Reflection of How Your Engineering Team Already Works.</a>
          </div>
          <div className="article-hook">Every few months a founder asks me how fast they can "get" SOC 2. The honest answer is uncomfortable: SOC 2 isn't something you get — it's something an auditor confirms about how your team already operates. A field guide for technical leaders on building operational maturity incrementally so compliance becomes a status check, not a fire drill.</div>
          <div className="article-hook" style={{marginTop: '0.6rem', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.05em'}}>
            Read on <a href="https://dev.to/amusto/soc-2-isnt-a-project-its-a-reflection-of-how-your-engineering-team-already-works-1mf9" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>Dev.to</a> · <a href="https://medium.com/@armando.musto/soc-2-isnt-a-project-it-s-a-reflection-of-how-your-engineering-team-already-works-26087fe6a255" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>Medium</a>
          </div>
        </div>
        <div className="article-meta">
          <span className="article-tag">Leadership</span>
          <span className="article-read">~10 min read</span>
          <span className="article-status">Published</span>
        </div>
      </div>

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
