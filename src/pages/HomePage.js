import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedProduct from "../components/FeaturedProduct";
import WhyChooseUs from "../components/WhyChooseUs";
import VisitingCardModal from "../components/VisitingCardModal";
import cardImage from "../assets/novacrest-visitingcard.png";

const stats = [
  { value: "500+", label: "Kg Supplied Monthly" },
  { value: "2", label: "Mushroom Varieties" },
  { value: "50km", label: "Same-Day Radius" },
  { value: "Gaya", label: "Bihar, India" },
];

const ctaTrust = [
  "500+ kg supplied monthly",
  "Direct farm-to-buyer delivery",
  "Serving Gaya & 9 districts",
];

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Hero onViewCard={() => setShowModal(true)} />

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-inner">
          {stats.map(({ value, label }) => (
            <div className="stat-item" key={label}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <FeaturedProduct />
      <WhyChooseUs />

      {/* HOME CTA */}
      <div className="home-cta">
        <div className="home-cta-inner">
          <p className="home-cta-eyebrow">Ready to order?</p>
          <h2>Get Fresh Mushrooms Delivered Today</h2>
          <p>Direct supply from farm. Fresh dispatch. No middlemen.</p>
          <div className="home-cta-buttons">
            <Link className="btn hero-btn-solid" to="/order">
              Place Your Order
            </Link>
            <Link className="btn hero-btn-ghost" to="/products">
              Browse Products
            </Link>
          </div>
          <div className="home-cta-trust">
            {ctaTrust.map((item, i) => (
              <span key={i} className="cta-trust-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <VisitingCardModal
          cardImage={cardImage}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default HomePage;
