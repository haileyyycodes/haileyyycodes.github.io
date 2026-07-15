import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          AVAILABLE FOR WORK
        </div>

        <p className="hero-command">$ whoami</p>

        <h1 className="hero-heading">
          Hailey — full stack engineer<span className="accent-dot">.</span>
        </h1>

        <p className="hero-description">
          8+ years building rock-solid web applications and polished UX. My
          design background and deep engineering knowledge let me move
          fluidly between both worlds — shipping fast without ever
          compromising the user experience and the technical integrity of a
          project.
        </p>

        <div className="hero-actions">
          <Link to="/#projects" className="btn btn-primary">
            View projects
          </Link>
          <Link to="/#contact" className="btn btn-secondary">
            Get in touch
          </Link>
        </div>

        <p className="hero-footer">
          ( building since 2017
          <span className="cursor" />
        </p>
      </div>
    </section>
  );
}

export default Hero;
