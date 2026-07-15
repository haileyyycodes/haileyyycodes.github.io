import { Link } from 'react-router-dom';
import './Projects.css';

const PROJECTS = [
  {
    name: 'Case Study: Ruth Ellis Center',
    description: 'Case study — details coming soon.',
    url: '/case-studies/ruth-ellis-center',
    internal: true,
    tags: ['Design', 'Wordpress', 'React', 'Team Lead'],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <p className="section-label">// PROJECTS</p>

        <div className="projects-list">
          {PROJECTS.map((project) => {
            const CardTag = project.internal ? Link : 'a';
            const linkProp = project.internal
              ? { to: project.url }
              : { href: project.url };

            return (
              <CardTag
                className="project-card"
                key={project.name}
                {...linkProp}
              >
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

export default Projects;
