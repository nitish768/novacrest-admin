const WHATSAPP_NUMBER = "917002465462";

const contacts = [
  {
    role: "Primary Contact",
    name: "Raushan Singh Parmar",
    detail: "Operations & Supply",
    phones: [
      { display: "+91-9288229455", tel: "919288229455" },
      { display: "+91-7992329456", tel: "917992329456" },
    ],
  },
  {
    role: "Co-Founder",
    name: "N.K. Singh",
    detail: "Business Development",
    phones: [
      { display: "+91-7002465462", tel: "917002465462" },
    ],
  },
  {
    role: "Location",
    name: "Gaya, Bihar",
    detail: "Bulk supply and direct enquiry support available",
    phones: [],
  },
];

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello NovaCrest, I have a business enquiry."
)}`;

const ContactSection = () => (
  <div className="contact-page">
    <section className="section contact-section" id="contact">
      <div className="contact-grid">
        {contacts.map(({ role, name, detail, phones }) => (
          <div className="contact-card" key={role}>
            <span className="contact-card-role">{role}</span>
            <h3>{name}</h3>
            <p className="contact-card-detail">{detail}</p>
            {phones.length > 0 && (
              <div className="contact-phones">
                {phones.map(({ display, tel }) => (
                  <a key={tel} href={`tel:+${tel}`} className="contact-phone-link">
                    {display}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <section className="section contact-whatsapp">
      <div className="whatsapp-cta">
        <div className="whatsapp-cta-text">
          <h3>Prefer to chat directly?</h3>
          <p>Send us a message on WhatsApp for quick enquiries, bulk pricing, or order confirmation.</p>
        </div>
        <a
          className="btn primary whatsapp-btn"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  </div>
);

export default ContactSection;
