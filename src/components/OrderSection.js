import React from "react";

const LOCATIONS = [
  "Gaya",
  "Bodh Gaya",
  "Manpur",
  "Wazirganj",
  "Tekari",
  "Dobhi",
  "Sherghati",
  "Aurangabad",
  "Patna",
];

const QUANTITIES = [
  "1 kg",
  "2 kg",
  "5 kg",
  "10 kg",
  "20 kg",
  "50 kg",
  "100 kg",
];

const OrderSection = ({
  orderData,
  handleChange,
  selectedDistance,
  deliveryDay,
  deliveryDateText,
  whatsappOrderLink,
}) => (
  <section className="section order-section" id="order-now">
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
          <select
            name="product"
            value={orderData.product}
            onChange={handleChange}
          >
            <option>Button Mushroom</option>
            <option>Oyster Mushroom</option>
          </select>
        </div>
        <div className="form-group">
          <label>Select Quantity</label>
          <select
            name="quantity"
            value={orderData.quantity}
            onChange={handleChange}
          >
            {QUANTITIES.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>
        <div className="form-group full-width">
          <label>Select Delivery Location</label>
          <select
            name="location"
            value={orderData.location}
            onChange={handleChange}
          >
            {LOCATIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
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
);

export default OrderSection;
