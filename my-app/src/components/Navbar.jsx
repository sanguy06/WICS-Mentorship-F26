import WoodButton from "./WoodButton";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Main">
        <a href="#home" className="navbar-logo">
          Farm the <span>Code</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <WoodButton href="#game" size="sm">
            Play
          </WoodButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
