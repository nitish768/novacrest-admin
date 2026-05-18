import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpeg";

const Hero = ({ onViewCard }) => (
  <header className="hero">
    <div className="hero-inner">
      <div className="hero-content">
        <span className="hero-kicker">Farm to Market Supply</span>
        <h1>
          Fresh Mushroom Supply
          <br />
          for Retail, Hotels
          <br />
          &amp; Bulk Buyers
        </h1>
        <p className="hero-tagline">NovaCrest — From Soil to Soul</p>
        <p className="hero-subtitle">
          Premium Button &amp; Oyster Mushrooms from Gaya, Bihar. Hygienic
          handling, fresh harvest, and same-day dispatch.
        </p>
        <div className="hero-actions">
          <Link className="btn hero-btn-solid" to="/order">
            Order Now
          </Link>
          <Link className="btn hero-btn-ghost" to="/products">
            View Products
          </Link>
        </div>
        <div className="hero-trust">
          <span>Same-day dispatch</span>
          <span className="hero-trust-dot" />
          <span>No middlemen</span>
          <span className="hero-trust-dot" />
          <span>Farm fresh</span>
        </div>
        <button className="hero-card-link" onClick={onViewCard}>
          View Visiting Card
        </button>
      </div>

      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img
            src={heroImg}
            alt="NovaCrest fresh mushrooms"
            className="hero-featured-img"
          />
          <div className="hero-img-badge">
            <strong>Daily</strong>
            <span>Fresh Harvest</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
