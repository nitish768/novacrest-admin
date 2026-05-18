import React from "react";

const products = [
  {
    badge: "Best Seller",
    name: "Button Mushroom",
    desc: "Ideal for mandi, hotels, restaurants, and regular fresh supply buyers.",
    points: [
      "Fresh daily harvest",
      "200g retail to bulk crate supply",
      "Suitable for high-volume buyers",
    ],
    upcoming: false,
  },
  {
    badge: "Premium",
    name: "Oyster Mushroom",
    desc: "Fast-growing premium mushroom for chefs, specialty buyers, and retail packs.",
    points: [
      "Fresh and premium quality",
      "Ideal for gourmet segment",
      "Value-add potential available",
    ],
    upcoming: false,
  },
  {
    badge: "Upcoming",
    name: "Cold-Pressed Mustard Oil",
    desc: "Traditional kachi-ghani style mustard oil line under setup for future launch.",
    points: [
      "Traditional process",
      "Filtered packaging plan",
      "Retail-ready upcoming product",
    ],
    upcoming: true,
  },
];

const Products = () => (
  <section className="section products" id="products">
    <div className="product-grid">
      {products.map(({ badge, name, desc, points, upcoming }) => (
        <div
          className={`product-card${upcoming ? " upcoming" : ""}`}
          key={name}
        >
          <div className={`product-badge${upcoming ? " upcoming-badge" : ""}`}>
            {badge}
          </div>
          <h3>{name}</h3>
          <p>{desc}</p>
          <ul>
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
