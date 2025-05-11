import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './BookingForm.css'; // Reuse the same CSS

export default function PaymentPage() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
    amount: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");
    // // TODO: Send payment data to backend securely
    navigate("/Bookings"); // Redirect to bookings page after payment
  };
  const handleLogout = () => {
    // Add logout logic here
  };
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
      <h2 className="logo">HomeServices</h2>
        <nav className="menu">
          {["Dashboard", "Bookings", "Service-History", "Profile", "Payment-Info", "Support"].map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(" ", "")}`} className="menu-item">
              {item}
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>
      {/* Payment Form */}
      <div className="booking-form-container">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <label>Select Payment Method:</label><br />
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required style={{ width: "100%", padding: "10px", marginBottom: "15px" }}>
            <option value="card">Debit/Credit Card</option>
            <option value="upi">UPI</option>
          </select>

          {/* Card Payment */}
          {paymentMethod === "card" && (
            <>
              <input
                name="name"
                placeholder="Cardholder Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
              />
              <input
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength="16"
                required
                style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
              />
              <input
                name="expiry"
                placeholder="Expiry Date (MM/YY)"
                value={formData.expiry}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
              />
              <input
                name="cvv"
                placeholder="CVV"
                type="password"
                maxLength="4"
                value={formData.cvv}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
              />
            </>
          )}

          {paymentMethod === "upi" && (
  <>
    <input
      name="upiId"
      placeholder="UPI ID (e.g., user@upi)"
      value={formData.upiId}
      onChange={handleChange}
      required
      style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
    />
    
    {/* QR Code Image */}
    <div style={{ textAlign: "center", marginBottom: "15px" }}>
      <p>Scan this QR Code to pay:</p>
      <img
        src="https://th.bing.com/th/id/OIP.75m8FRaW9DRQtRHMAaXS8gHaIL?w=169&h=187&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7"
        alt="UPI QR"
        style={{ width: "200px", height: "200px", objectFit: "contain", border: "1px solid #ccc", padding: "10px" }}
      />
    </div>
  </>
)}


          <input
            name="amount"
            placeholder="Amount (₹)"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          />

          <button type="submit" style={{ width: "100%", padding: "10px", fontSize: "16px" }}>Pay Now</button>
        </form>
      </div>
    </div>
  );
}