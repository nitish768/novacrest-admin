import { useState } from "react";
import featuredMushroom from "../assets/button-mushroom.png";

const WHATSAPP_NUMBER = "917002465462";

const LOCATION_DISTANCE = {
  Gaya: 0,
  "Bodh Gaya": 15,
  Manpur: 8,
  Wazirganj: 28,
  Tekari: 35,
  Dobhi: 32,
  Sherghati: 52,
  Aurangabad: 78,
  Patna: 110,
};

const formatDate = (d) =>
  d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const FeaturedProduct = () => {
  const [qty, setQty] = useState("200g");
  const [location, setLocation] = useState("Gaya");

  const dist = LOCATION_DISTANCE[location] || 0;
  const isToday = dist <= 50;
  const today = new Date();
  const target = isToday ? today : new Date(today.setDate(today.getDate() + 1));
  const delivery = `${isToday ? "Today" : "Tomorrow"} (${formatDate(target)})`;

  const orderLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello NovaCrest, I want to order Button Mushroom.\n\nSelected Pack Size: ${qty}\nDelivery Location: ${location}\nExpected Delivery: ${delivery}\n\nPlease confirm availability and final price.`,
  )}`;

  return (
    <section className="featured-product-section">
      <div className="section">
        <div className="section-heading">
          <h2>Our Featured Product</h2>
          <p>Straight from the farm — order your pack and get it dispatched the same day.</p>
        </div>
        <div className="featured-product-card">
          <div className="featured-image-wrap">
            <img
              src={featuredMushroom}
              alt="Fresh Button Mushroom"
              className="featured-image"
            />
          </div>
          <div className="featured-details">
            <p className="featured-label">Fresh &amp; Available Now</p>
            <h2>Button Mushroom</h2>
            <p className="featured-subtitle">
              Fresh daily harvest for retail, hotels, restaurants, and bulk buyers.
            </p>
            <div className="product-meta">
              <div className="meta-box">
                <span className="meta-title">Starting Price</span>
                <strong className="price-tag">₹60 / 200g</strong>
              </div>
              <div className="meta-box">
                <span className="meta-title">Available Packs</span>
                <strong>200g &bull; 1kg &bull; 5kg</strong>
              </div>
            </div>
            <ul className="highlight-list">
              <li>Fresh and hygienically handled from our Gaya farm</li>
              <li>Suitable for daily cooking and bulk business supply</li>
              <li>Fast dispatch based on location availability</li>
            </ul>
            <div className="featured-action-row">
              <div className="featured-select-box">
                <label htmlFor="featuredQty">Pack Size</label>
                <select
                  id="featuredQty"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  <option value="200g">200g</option>
                  <option value="1kg">1kg</option>
                  <option value="5kg">5kg</option>
                </select>
              </div>
              <div className="featured-select-box">
                <label htmlFor="featuredLocation">Location</label>
                <select
                  id="featuredLocation"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {Object.keys(LOCATION_DISTANCE).map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>
              <a
                className="btn primary"
                href={orderLink}
                target="_blank"
                rel="noreferrer"
              >
                Order via WhatsApp
              </a>
            </div>
            <p className="delivery-estimate">
              Estimated delivery: <strong>{delivery}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
