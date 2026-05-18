const features = [
  {
    num: "01",
    title: "Fresh Daily Harvest",
    desc: "Same-day handling and dispatch-focused workflow for maximum freshness on every order.",
  },
  {
    num: "02",
    title: "Hygiene First",
    desc: "Clean production process with disciplined packaging and careful handling at every step.",
  },
  {
    num: "03",
    title: "Bulk & Retail Supply",
    desc: "Flexible quantities for mandi buyers, restaurants, retailers, and local distributors.",
  },
  {
    num: "04",
    title: "Bihar-Based Trusted Source",
    desc: "Ground-level agri business with local knowledge, direct support, and reliable delivery.",
  },
];

const WhyChooseUs = () => (
  <section className="why-us-section">
    <div className="section">
      <div className="section-heading">
        <h2>Why Choose NovaCrest</h2>
        <p>Clean supply, better handling, and dependable business support — straight from Gaya.</p>
      </div>
      <div className="feature-grid">
        {features.map(({ num, title, desc }) => (
          <div className="feature-card" key={num}>
            <div className="feature-card-top">
              <span className="feature-card-num">{num}</span>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
