import { Link } from 'react-router-dom';
import './About.css';

const SKILL_GROUPS = [
  {
    label: 'Languages & Frameworks',
    items: [
      'C#',
      'JavaScript',
      'TypeScript',
      'SQL',
      'HTML',
      'CSS',
      '.NET',
      'Angular',
      'React',
      'Node.js',
    ],
  },
  {
    label: 'Databases & Practices',
    items: [
      'Cosmos DB',
      'SQL Server',
      'Relational & Graph Databases',
      'Microservices',
      'REST APIs',
      'Test-Driven Development',
      'Mixpanel',
      'CI/CD',
    ],
  },
  {
    label: 'AI & Agentic Tools',
    items: [
      'Claude Code',
      'GitHub Copilot',
      'Prompt Engineering',
      'LLM API Integration',
    ],
  },
];

const EXPERIENCE = [
  {
    period: '2019 — now',
    role: 'Senior Full-stack Software Engineer @ Blackbaud, Inc.',
    description:
      'Ships an average of 14 features a year in close partnership with product, design, and engineering leadership, using agentic tools like Claude Code and GitHub Copilot to move faster without sacrificing quality.',
  },
  {
    period: '2018 — 2019',
    role: 'Backend Software Developer @ Kapsch TrafficCom',
    description:
      'Built and maintained RESTful APIs in a microservices architecture powering data-sharing between toll road organizations, backed by test-driven development.',
  },
  {
    period: '2017',
    role: 'Creative Technology Intern @ R/GA',
    description:
      'Designed and user-tested a quantity counter for a commercial food-ordering app, and brought a technical lens to an auto insurance marketing campaign.',
  },
];

const VOLUNTEER = [
  {
    period: '2025 — now',
    role: 'Web Design Consultant @ Ruth Ellis Center',
    description:
      'Setting technical direction for a team of 3 engineers building a custom WordPress theme, redesigning navigation for faster access to time-sensitive resources, and training nonprofit staff to manage the site independently.',
  },
];

function ExperienceList({ items }) {
  return (
    <ul className="experience-list">
      {items.map((item) => (
        <li className="experience-item" key={item.role}>
          <span className="experience-period">{item.period}</span>
          <div className="experience-details">
            <p className="experience-role">{item.role}</p>
            <p className="experience-description">{item.description}</p>
            {item.link && (
              <Link to={item.link.to} className="experience-link">
                → {item.link.label}
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <p className="section-label">// ABOUT</p>

        <div className="tui-card">
          <div className="tui-card-header">
            <span className="tui-card-dot" />
            <span className="tui-card-filename">readme.md</span>
          </div>

          <div className="tui-card-body">
            <div className="card-block">
              <h3 className="block-label"># bio</h3>
              <p className="bio-text">
                I graduated from college in May 2018 with a Computer Science
                degree and was 3 courses shy of a Graphic Design degree.
                Sometimes people ask why I never finished, and I tell them
                that I filled my time with as much design and coding as I
                possibly could, but by the end of 4 years I had simply taken
                more Computer Science courses than Graphic Design courses.
                During that time I made a natural progression from graphic
                design to UX to engineering, but I am most effective when I'm
                able to move freely between the disciplines with ownership
                over the outcome. My greatest strength is that I can visualize
                an app, a feature, or a bug from top to bottom—the design, the
                UX, and the technical solution. I care deeply about the user
                and the quality of what I build.
              </p>
            </div>

            <div className="card-block">
              <h3 className="block-label"># skills</h3>
              <div className="skills-groups">
                {SKILL_GROUPS.map((group) => (
                  <div className="skill-group" key={group.label}>
                    <p className="skill-group-label">{group.label}</p>
                    <div className="skills-list">
                      {group.items.map((skill) => (
                        <span className="skill-pill" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-block">
              <h3 className="block-label"># experience</h3>
              <ExperienceList items={EXPERIENCE} />
            </div>

            <div className="card-block">
              <h3 className="block-label"># volunteer</h3>
              <ExperienceList items={VOLUNTEER} />
            </div>

            <div className="card-block">
              <h3 className="block-label"># education</h3>
              <p className="bio-text">
                St. Edward's University — B.A. Computer Science (minor in
                Graphic Design), Magna Cum Laude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
