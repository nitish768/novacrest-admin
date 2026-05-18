import { useState } from "react";
import OrderSection from "../components/OrderSection";

const WHATSAPP_NUMBER = "917002465462";

const LOCATION_DISTANCE = {
  Gaya: 0, "Bodh Gaya": 15, Manpur: 8, Wazirganj: 28,
  Tekari: 35, Dobhi: 32, Sherghati: 52, Aurangabad: 78, Patna: 110,
};

const formatDate = (date) =>
  date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    product: "Button Mushroom",
    quantity: "5 kg",
    location: "Gaya",
    customerName: "",
    customerPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const selectedDistance = LOCATION_DISTANCE[orderData.location] || 0;
  const isToday         = selectedDistance <= 50;
  const deliveryDay     = isToday ? "Today Delivery" : "Tomorrow Delivery";

  const today    = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const deliveryDateText = formatDate(isToday ? today : tomorrow);

  const whatsappOrderLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello NovaCrest, I want to place an order.\n\nCustomer Name: ${orderData.customerName || "Not provided"}\nPhone Number: ${orderData.customerPhone || "Not provided"}\nProduct: ${orderData.product}\nQuantity: ${orderData.quantity}\nDelivery Location: ${orderData.location}\nApprox Distance: ${selectedDistance} km\nExpected Delivery: ${deliveryDay} (${deliveryDateText})\n\nPlease confirm availability and final price.`
  )}`;

  return (
    <>
      <div className="page-header">
        <h1>Place Your Order</h1>
        <p>Select product, quantity, and location — confirm directly on WhatsApp.</p>
      </div>
      <div className="page-content">
        <OrderSection
          orderData={orderData}
          handleChange={handleChange}
          selectedDistance={selectedDistance}
          deliveryDay={deliveryDay}
          deliveryDateText={deliveryDateText}
          whatsappOrderLink={whatsappOrderLink}
        />
      </div>
    </>
  );
};

export default OrderPage;
