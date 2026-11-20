
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">Farm Adventure</h2>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#game">Play</a>
      </div>

      <div className="footer-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </footer>
  );
}

export default Footer;
