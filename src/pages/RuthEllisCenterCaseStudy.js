import { Link } from 'react-router-dom';
import './RuthEllisCenterCaseStudy.css';

function RuthEllisCenterCaseStudy() {
  return (
    <section className="case-study">
      <div className="case-study-inner">
        <Link to="/#projects" className="back-link">
          ← back to projects
        </Link>

        <p className="section-label">// CASE STUDY</p>
        <h1 className="case-study-title">Ruth Ellis Center</h1>
        <p className="case-study-summary">Case study — details coming soon.</p>

        <div className="tui-card">
          <div className="tui-card-header">
            <span className="tui-card-dot" />
            <span className="tui-card-filename">ruth-ellis-center.md</span>
          </div>

          <div className="tui-card-body">
            <div className="card-block">
              <h3 className="block-label"># overview</h3>
              <p className="case-study-text">Placeholder — add project overview here.</p>
            </div>

            <div className="card-block">
              <h3 className="block-label"># approach</h3>
              <p className="case-study-text">Placeholder — add approach and process details here.</p>
            </div>

            <div className="card-block">
              <h3 className="block-label"># outcome</h3>
              <p className="case-study-text">Placeholder — add outcome and impact details here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RuthEllisCenterCaseStudy;
