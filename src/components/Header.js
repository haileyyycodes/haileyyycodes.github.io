import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/#top" className="logo">
          <span className="logo-prefix">~/</span> hailey
        </Link>
        <nav className="nav-links">
          <Link to="/#about">./about</Link>
          <Link to="/#projects">./projects</Link>
          <Link to="/#contact">./contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
