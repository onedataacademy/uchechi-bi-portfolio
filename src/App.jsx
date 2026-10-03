import { useEffect, useState } from 'react'
import portrait from './assets/uchechi-portrait.jpeg'
import { education, experience, profile, projects, skills } from './data'

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? 'open' : ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const links = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label="Go to top">
          <span className="brand-mark">UN</span>
          <span className="brand-copy">
            <strong>Uchechi Nwachukwu</strong>
            <small>Business Intelligence Analyst</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="nav-cta desktop-cta" href="#contact">Let’s Talk</a>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Let’s Talk</a>
        </nav>
      )}
    </header>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function App() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Open to BI & Data Analytics opportunities
            </div>

            <p className="hero-kicker">Business Intelligence Analyst · Data Analyst</p>
            <h1>
              Turning data into
              <span> clear business decisions.</span>
            </h1>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Work <ArrowUpRight />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-proof" aria-label="Core focus areas">
              <div>
                <strong>BI</strong>
                <span>Dashboards</span>
              </div>
              <div>
                <strong>SQL</strong>
                <span>Analysis</span>
              </div>
              <div>
                <strong>KPI</strong>
                <span>Reporting</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Uchechi Nwachukwu">
            <div className="portrait-frame">
              <img src={portrait} alt="Uchechi Nwachukwu" />
              <div className="portrait-badge">
                <span>Focus</span>
                <strong>Business Intelligence</strong>
              </div>
            </div>
            <div className="data-card data-card-one">
              <span>Decision-ready</span>
              <strong>Insights</strong>
            </div>
            <div className="data-card data-card-two">
              <span>Clear</span>
              <strong>Reporting</strong>
            </div>
          </div>
        </section>

        <section className="metric-strip" aria-label="Professional focus">
          <div className="section-shell metric-grid">
            <div><span>01</span><strong>Analyse</strong><p>Find what matters in the data.</p></div>
            <div><span>02</span><strong>Visualise</strong><p>Make performance easy to understand.</p></div>
            <div><span>03</span><strong>Communicate</strong><p>Translate findings into business language.</p></div>
            <div><span>04</span><strong>Improve</strong><p>Support better, faster decisions.</p></div>
          </div>
        </section>

        <section id="about" className="section section-shell about-grid">
          <div>
            <SectionHeading eyebrow="About" title="Analysis that connects data to action." />
          </div>
          <div className="about-copy">
            <p className="lead">
              I’m Uchechi Nwachukwu, a Business Intelligence and Data Analyst focused on making business data easier to understand, use and act on.
            </p>
            <p>
              My work centres on reporting, dashboard development, KPI monitoring, data preparation and insight generation. I enjoy taking scattered or complex information and turning it into a structured view of performance that supports confident decisions.
            </p>
            <p>
              My earlier background in architecture and project environments contributes a practical appreciation for structure, precision, processes and operational detail. Today, that perspective supports the way I approach analytics: understand the problem, organise the information, identify the signal and communicate it clearly.
            </p>
          </div>
        </section>

        <section id="skills" className="section section-tinted">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Capabilities"
              title="A practical BI toolkit."
              copy="Focused on the tools and analytical workflows that turn raw information into useful business intelligence."
            />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-number">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-shell">
          <div className="projects-heading">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects built around business questions."
              copy="The portfolio is being expanded progressively. Each project will document the business problem, analysis, dashboard, findings and recommendations."
            />
            <div className="project-note">
              <span className="availability-dot" />
              New analytics projects are being added continuously.
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-preview">
                  <div className="chart-bars" aria-hidden="true">
                    <span style={{ height: '42%' }} />
                    <span style={{ height: '68%' }} />
                    <span style={{ height: '55%' }} />
                    <span style={{ height: '82%' }} />
                    <span style={{ height: '72%' }} />
                  </div>
                  <div className="preview-line" />
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span className="status">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tool-list">
                    {project.tools.map(tool => <span key={tool}>{tool}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-dark">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Experience"
              title="Structured thinking, now applied to data."
              copy="A concise view of the professional foundation behind my analytical approach."
            />
            <div className="experience-layout">
              <div className="experience-card">
                {experience.map(item => (
                  <div key={item.role} className="timeline-item">
                    <div className="timeline-dot" />
                    <div>
                      <span className="timeline-period">{item.period}</span>
                      <h3>{item.role}</h3>
                      <p className="timeline-company">{item.company}</p>
                      <p>{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="education-card">
                <span className="mini-label">Education</span>
                {education.map(item => (
                  <div key={item.qualification}>
                    <h3>{item.qualification}</h3>
                    <p>{item.institution}</p>
                    <span>{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-shell contact-card">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Let’s turn data into better decisions.</h2>
              <p>
                I’m open to Business Intelligence, Data Analyst and reporting opportunities, as well as analytics collaborations and freelance projects.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${profile.email}`}>
                Email Me <ArrowUpRight />
              </a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-inner">
          <div>
            <strong>Uchechi Nwachukwu</strong>
            <span>Business Intelligence Analyst</span>
          </div>
          <p>© {new Date().getFullYear()} Uchechi Nwachukwu. Built for clarity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
