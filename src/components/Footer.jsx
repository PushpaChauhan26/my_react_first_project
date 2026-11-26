
function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-about">
          <h2>TechSolutions</h2>
          <p>
            We provide modern web development, AI solutions,
            and digital services to help businesses grow.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>Web Development</li>
            <li>AI Solutions</li>
            <li>Python Development</li>
            <li>Digital Marketing</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TechSolutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
