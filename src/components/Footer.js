import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <h3>NovaCrest</h3>
        <p className="footer-tagline">From Soil to Soul</p>
        <p className="footer-location">Fresh Mushroom Supply • Gaya, Bihar</p>
      </div>

      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul className="footer-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/order">Order Now</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <p>Gaya, Bihar, India</p>
        <a href="tel:+919288229455" className="footer-link">+91-9288229455</a>
        <a href="tel:+917002465462" className="footer-link">+91-7002465462</a>
        <a
          href="https://wa.me/917002465462"
          target="_blank"
          rel="noreferrer"
          className="footer-link footer-wa"
        >
          WhatsApp Us
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} NovaCrest. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
