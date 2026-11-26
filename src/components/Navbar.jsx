
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h2>TRUE VALUE</h2>

      
<ul className={menuOpen ? "nav-links active" : "nav-links"}>
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#company" onClick={() => setMenuOpen(false)}>Company</a></li>
  <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
  <li><a href="#technologies" onClick={() => setMenuOpen(false)}>Technologies</a></li>
  <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
</ul>

<div className="nav-actions">

  <a href="#contact" className="nav-btn">
    Get Started
  </a>

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

</div>
    </nav>
  );
}

export default Navbar;
