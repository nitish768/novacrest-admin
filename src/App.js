import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import logo from "./novacrest-logo.png";
import featuredMushroom from "./button-mushroom.png";

/*
  Reusable Collapsible Component
  Why:
  - Long content ko fold/unfold karne ke liye
  - Same UI ko multiple jagah reuse karne ke liye
*/
const Collapsible = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="arrow">{isOpen ? "▾" : "▸"}</span>
      </button>

      <div
        ref={contentRef}
        className="collapsible-content"
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          overflow: "hidden",
        }}
      >
        <div className="collapsible-inner">{children}</div>
      </div>
    </div>
  );
};

export default function App() {
  const [showModal, setShowModal] = useState(false);

  /*
    Featured product quantity selector
    Why:
    - product showcase section me user quick pack size choose kar sake
  */
  const [featuredQty, setFeaturedQty] = useState("200g");

  /*
    Order form state
    Why:
    - user jo details select karega, wo yahan save hongi
    Impact:
    - WhatsApp message dynamic banega
  */
  const [orderData, setOrderData] = useState({
    product: "Button Mushroom",
    quantity: "5 kg",
    location: "Gaya",
    customerName: "",
    customerPhone: "",
  });

  const cardImage = `${process.env.PUBLIC_URL}/novacrest-visitingcard.png`;

  /*
    Final order WhatsApp number
    Note:
    - 91 country code + mobile number
  */
  const whatsappNumber = "917002465462";

  /*
    Approx distance map
    Why:
    - without backend / maps API, simple rule lagane ke liye
    Rule:
    - 50 km ke andar => today
    - 50 km se zyada => tomorrow
  */
  const locationDistanceMap = {
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

  const selectedDistance = locationDistanceMap[orderData.location] || 0;
  const deliveryDay = selectedDistance <= 50 ? "Today Delivery" : "Tomorrow Delivery";

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date) =>
    date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const deliveryDateText =
    selectedDistance <= 50 ? formatDate(today) : formatDate(tomorrow);

  /*
    Generic input/select change handler
    Why:
    - same function se multiple fields update ho jayen
  */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
    Full order message for WhatsApp
    Impact:
    - aapko structured order message milega
  */
  const whatsappMessage = `Hello NovaCrest, I want to place an order.

Customer Name: ${orderData.customerName || "Not provided"}
Phone Number: ${orderData.customerPhone || "Not provided"}
Product: ${orderData.product}
Quantity: ${orderData.quantity}
Delivery Location: ${orderData.location}
Approx Distance: ${selectedDistance} km
Expected Delivery: ${deliveryDay} (${deliveryDateText})

Please confirm availability and final price.`;

  const whatsappOrderLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const featuredProductLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello NovaCrest, I want to order Button Mushroom.

Selected Pack Size: ${featuredQty}
Delivery Location: ${orderData.location}
Expected Delivery: ${deliveryDay} (${deliveryDateText})

Please confirm availability and final price.`
  )}`;

  return (
    <div className="app">
      <div className="top-strip">
        Fresh Harvest Available • Bulk Orders Open • Gaya, Bihar Supply
      </div>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <img src={logo} alt="NovaCrest Logo" className="hero-logo" />

          <p className="hero-kicker">Farm to Market Supply</p>

          <h1>Fresh Mushroom Supply for Retail, Hotels & Bulk Buyers</h1>

          <p className="tagline">NovaCrest — From Soil to Soul</p>

          <p className="subtitle">
            Premium Button & Oyster Mushrooms from Gaya, Bihar with hygienic
            handling, fresh harvest, and reliable dispatch.
          </p>

          <div className="hero-buttons">
            <a className="btn primary" href="#order-now">
              Order Now
            </a>

            <a className="btn outline" href="#products">
              View Products
            </a>

            <button className="btn tertiary" onClick={() => setShowModal(true)}>
              View Visiting Card
            </button>
          </div>
        </div>
      </header>

      {/* FEATURED PRODUCT SECTION */}
      {/* Why added:
          - large product image + clear product info
          - product-first premium UI feel
      */}
      <section className="section featured-product">
        <div className="featured-product-card">
          <div className="featured-image-wrap">
            <img
              src={featuredMushroom}
              alt="Fresh Button Mushroom"
              className="featured-image"
            />
          </div>

          <div className="featured-details">
            <p className="featured-label">Featured Product</p>
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
                <strong>200g • 1kg • 5kg</strong>
              </div>
            </div>

            <ul className="highlight-list">
              <li>Fresh and hygienically handled</li>
              <li>Suitable for daily cooking and bulk business supply</li>
              <li>Fast dispatch based on location availability</li>
            </ul>

            <div className="featured-action-row">
              <div className="featured-select-box">
                <label htmlFor="featuredQty">Select Pack Size</label>
                <select
                  id="featuredQty"
                  value={featuredQty}
                  onChange={(e) => setFeaturedQty(e.target.value)}
                >
                  <option value="200g">200g</option>
                  <option value="1kg">1kg</option>
                  <option value="5kg">5kg</option>
                </select>
              </div>

              <a
                className="btn primary"
                href={featuredProductLink}
                target="_blank"
                rel="noreferrer"
              >
                Order This Product
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-us">
        <div className="section-heading">
          <h2>Why Choose NovaCrest</h2>
          <p>Clean supply, better handling, and dependable business support.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Fresh Daily Harvest</h3>
            <p>Same-day handling and dispatch focused workflow for better freshness.</p>
          </div>

          <div className="feature-card">
            <h3>Hygiene First</h3>
            <p>Clean production process with packaging and handling discipline.</p>
          </div>

          <div className="feature-card">
            <h3>Bulk & Retail Supply</h3>
            <p>Suitable for mandi buyers, restaurants, retailers, and local distributors.</p>
          </div>

          <div className="feature-card">
            <h3>Bihar-Based Trusted Source</h3>
            <p>Ground-level agri business with local understanding and direct support.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="section products" id="products">
        <div className="section-heading">
          <h2>Our Products</h2>
          <p>Fresh produce and upcoming value-added agri products.</p>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-badge">Best Seller</div>
            <h3>Button Mushroom</h3>
            <p>Ideal for mandi, hotels, restaurants, and regular fresh supply buyers.</p>
            <ul>
              <li>Fresh daily harvest</li>
              <li>200g retail to bulk crate supply</li>
              <li>Suitable for high-volume buyers</li>
            </ul>
          </div>

          <div className="product-card">
            <div className="product-badge">Premium</div>
            <h3>Oyster Mushroom</h3>
            <p>Fast-growing premium mushroom for chefs, specialty buyers, and retail packs.</p>
            <ul>
              <li>Fresh and premium quality</li>
              <li>Ideal for gourmet segment</li>
              <li>Value-add potential available</li>
            </ul>
          </div>

          <div className="product-card upcoming">
            <div className="product-badge upcoming-badge">Upcoming</div>
            <h3>Cold-Pressed Mustard Oil</h3>
            <p>Traditional kachi-ghani style mustard oil line under setup for future launch.</p>
            <ul>
              <li>Traditional process</li>
              <li>Filtered packaging plan</li>
              <li>Retail-ready upcoming product</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ORDER SECTION */}
      <section className="section order-section" id="order-now">
        <div className="section-heading">
          <h2>Place Your Order</h2>
          <p>Select product, quantity, location and send order directly on WhatsApp.</p>
        </div>

        <div className="order-box">
          <div className="order-grid">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="customerName"
                value={orderData.customerName}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Your Phone Number</label>
              <input
                type="text"
                name="customerPhone"
                value={orderData.customerPhone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Select Product</label>
              <select name="product" value={orderData.product} onChange={handleChange}>
                <option>Button Mushroom</option>
                <option>Oyster Mushroom</option>
              </select>
            </div>

            <div className="form-group">
              <label>Select Quantity</label>
              <select name="quantity" value={orderData.quantity} onChange={handleChange}>
                <option>1 kg</option>
                <option>2 kg</option>
                <option>5 kg</option>
                <option>10 kg</option>
                <option>20 kg</option>
                <option>50 kg</option>
                <option>100 kg</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Select Delivery Location</label>
              <select name="location" value={orderData.location} onChange={handleChange}>
                <option>Gaya</option>
                <option>Bodh Gaya</option>
                <option>Manpur</option>
                <option>Wazirganj</option>
                <option>Tekari</option>
                <option>Dobhi</option>
                <option>Sherghati</option>
                <option>Aurangabad</option>
                <option>Patna</option>
              </select>
            </div>
          </div>

          <div className="delivery-preview">
            <h3>Delivery Preview</h3>
            <p>
              <strong>Selected Location:</strong> {orderData.location}
            </p>
            <p>
              <strong>Approx Distance:</strong> {selectedDistance} km
            </p>
            <p>
              <strong>Expected Delivery:</strong> {deliveryDay}
            </p>
            <p>
              <strong>Delivery Date:</strong> {deliveryDateText}
            </p>
          </div>

          <div className="order-actions">
            <a
              className="btn primary"
              href={whatsappOrderLink}
              target="_blank"
              rel="noreferrer"
            >
              Confirm Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about">
        <div className="section-heading">
          <h2>About NovaCrest</h2>
        </div>

        <p>
          NovaCrest एक integrated agri-processing startup है। हमारा focus है
          high-quality Button & Oyster mushrooms और future-ready cold-pressed
          mustard oil line पर। हमारा approach simple है — fresh quality, clean
          handling, and reliable business relationships.
        </p>
      </section>

      {/* DETAILED SECTION */}
      <section className="section details">
        <Collapsible title="Mushroom — Button & Oyster (Detailed)" defaultOpen={true}>
          <div className="grid large">
            <div className="card big">
              <h4>Button Mushroom</h4>
              <p>High-yield, consistent quality — ideal for mandi, hotels, and restaurants.</p>
              <ul>
                <li>Crop cycle: 18–22 days</li>
                <li>Packing: 200-g clamshells, 2–5 kg crates</li>
                <li>Distribution: daily harvest → same-day dispatch</li>
              </ul>
            </div>

            <div className="card big">
              <h4>Oyster Mushroom</h4>
              <p>Fast growing variety for premium chefs & retail packs.</p>
              <ul>
                <li>Crop cycle: 12–16 days</li>
                <li>Value-adds: dried flakes, mushroom powder</li>
                <li>Target: gourmet restaurants & packaged retail</li>
              </ul>
            </div>

            <div className="card big">
              <h4>Production Notes</h4>
              <p>
                Substrate: wheat/paddy straw compost; spawn from certified labs;
                hygiene + cold chain for fresh dispatch.
              </p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact-section">
        <div className="section-heading">
          <h2>Contact & Business Enquiry</h2>
          <p>For bulk supply, retail enquiry, and business collaboration.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Primary Contact</h3>
            <p>Raushan Singh Parmar</p>
            <p>+91-9288229455 / 7992329456</p>
          </div>

          <div className="contact-card">
            <h3>Co-Founder</h3>
            <p>N.K. Singh</p>
            <p>+91-7002465462</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Gaya, Bihar</p>
            <p>Bulk supply and direct enquiry support available</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>NovaCrest</h3>
        <p>From Soil to Soul</p>
        <p>Fresh Mushroom Supply • Gaya, Bihar</p>
      </footer>

      {/* VISITING CARD MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={cardImage} alt="NovaCrest Visiting Card" className="visiting-card" />
            <div className="modal-actions">
              <a
                href={cardImage}
                download="novacrest-visitingcard.png"
                className="btn download-btn"
              >
                Download
              </a>
              <button className="btn close-btn" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}