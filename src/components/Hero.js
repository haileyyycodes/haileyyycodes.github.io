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
          Hailey Johnson<span className="accent-dot">.</span>
        </h1>

        <p className="hero-description">
          I graduated from college in May 2018 with a Computer Science degree
          and was 3 courses shy of a Graphic Design degree. Sometimes people
          ask why I never finished, and I tell them that I filled my time with
          as much design and coding as I possibly could, but by the end of 4
          years I had simply taken more Computer Science courses than Graphic
          Design courses.
        </p>
        <p className="hero-description">
          During that time I made a natural progression from graphic design to
          UX to engineering, but I am most effective when I'm able to move
          freely between the disciplines with ownership over the outcome. My
          greatest strength is that I can visualize an app, a feature, or a
          bug from top to bottom—the design, the UX, and the technical
          solution. I care deeply about the user and the quality of what I
          build.
        </p>

        <div className="hero-actions">
          <Link to="/#projects" className="btn btn-primary">
            View projects
          </Link>
          <a
            href="mailto:haileymariejohn@gmail.com"
            className="btn btn-secondary"
          >
            Get in touch
          </a>
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
