const pillars = [
  {
    num: "01",
    title: "Our Mission",
    desc: "Deliver farm-fresh mushrooms directly to retailers, restaurants, and bulk buyers — zero compromise on quality or freshness.",
  },
  {
    num: "02",
    title: "Our Approach",
    desc: "Same-day harvest and dispatch, hygienic packing, and transparent pricing. No middlemen, no delays.",
  },
  {
    num: "03",
    title: "Future Vision",
    desc: "Scaling into value-added products including cold-pressed mustard oil, dried mushroom flakes, and packaged retail lines.",
  },
];

const founders = [
  {
    initials: "RS",
    name: "Raushan Singh Parmar",
    role: "Primary Contact & Operations",
    phones: [{ display: "+91-9288229455", tel: "919288229455" }, { display: "+91-7992329456", tel: "917992329456" }],
  },
  {
    initials: "NK",
    name: "N.K. Singh",
    role: "Co-Founder & Business Development",
    phones: [{ display: "+91-7002465462", tel: "917002465462" }],
  },
];

const AboutSection = () => (
  <div className="about-page">
    <div className="section about-intro">
      <p>
        NovaCrest एक integrated agri-processing startup है जो Gaya, Bihar से operate करता है।
        हमारा focus है high-quality Button & Oyster mushrooms और future-ready cold-pressed
        mustard oil line पर। हमारा approach simple है — fresh quality, clean handling,
        and reliable business relationships built on trust.
      </p>
    </div>

    <section className="section">
      <div className="section-heading">
        <h2>What Drives Us</h2>
        <p>Three principles that guide every harvest, every dispatch, every relationship.</p>
      </div>
      <div className="pillars-grid">
        {pillars.map(({ num, title, desc }) => (
          <div className="pillar-card" key={num}>
            <span className="pillar-num">{num}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section founders-section">
      <div className="section-heading">
        <h2>The People Behind NovaCrest</h2>
        <p>Founders committed to building a reliable agri supply chain from Bihar.</p>
      </div>
      <div className="founders-grid">
        {founders.map(({ initials, name, role, phones }) => (
          <div className="founder-card" key={name}>
            <div className="founder-avatar">{initials}</div>
            <div className="founder-info">
              <h4>{name}</h4>
              <p className="founder-role">{role}</p>
              <div className="founder-phones">
                {phones.map(({ display, tel }) => (
                  <a key={tel} href={`tel:+${tel}`} className="founder-phone-link">
                    {display}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default AboutSection;
