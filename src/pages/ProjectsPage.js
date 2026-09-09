import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const PROJECTS = [
  {
    name: 'Job Search Tracker',
    description: 'A tool for tracking job applications and search progress.',
    url: 'https://job-search-tracker-liart.vercel.app/',
    tags: ['React', 'Next.js', 'Design', 'Product Design'],
  },
];

function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="projects-page-inner">
        <Link to="/#top" className="back-link">
          ← back home
        </Link>

        <p className="section-label">// PROJECTS</p>
        <h1 className="projects-page-title">Projects</h1>

        <div className="projects-list">
          {PROJECTS.map((project) => {
            const CardTag = project.internal ? Link : 'a';
            const linkProp = project.internal
              ? { to: project.url }
              : {
                  href: project.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                };

            return (
              <CardTag className="project-card" key={project.name} {...linkProp}>
                <div className="project-card-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-arrow">↗</span>
                </div>
                <p className="project-description">{project.description}</p>
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
