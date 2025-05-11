import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PaymentInfo.css";

export default function PaymentInfo() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardHolder: "T Harsha Vardhan",
    cardNumber: "**** **** **** 2345",
    expiry: "12/26",
    upiId: "9052397987@upi",
    wallet: "PhonePe",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="payment-container">
      <aside className="sidebar open">
        <h2 className="logo">HomeServices</h2>
        <nav className="menu">
          {["Dashboard", "Bookings", "Service-History", "Profile", "Payment-Info", "Support"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace("-", "-")}`}
              className={`menu-item ${item === "Payment Info" ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={() => navigate("/login")}>Logout</button>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Payment Information</h1>
          <button onClick={toggleEdit} className="edit-btn">
            {isEditing ? "Save" : "Edit"}
          </button>
        </header>

        <div className="payment-details">
          <div className="payment-field">
            <label>Cardholder Name:</label>
            {isEditing ? (
              <input name="cardHolder" value={paymentInfo.cardHolder} onChange={handleChange} />
            ) : (
              <p>{paymentInfo.cardHolder}</p>
            )}
          </div>
          <div className="payment-field">
            <label>Card Number:</label>
            {isEditing ? (
              <input name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} />
            ) : (
              <p>{paymentInfo.cardNumber}</p>
            )}
          </div>
          <div className="payment-field">
            <label>Expiry Date:</label>
            {isEditing ? (
              <input name="expiry" value={paymentInfo.expiry} onChange={handleChange} />
            ) : (
              <p>{paymentInfo.expiry}</p>
            )}
          </div>
          <div className="payment-field">
            <label>UPI ID:</label>
            {isEditing ? (
              <input name="upiId" value={paymentInfo.upiId} onChange={handleChange} />
            ) : (
              <p>{paymentInfo.upiId}</p>
            )}
          </div>
          <div className="payment-field">
            <label>Preferred Wallet:</label>
            {isEditing ? (
              <select name="wallet" value={paymentInfo.wallet} onChange={handleChange}>
                <option value="PhonePe">PhonePe</option>
                <option value="Google Pay">Google Pay</option>
                <option value="Paytm">Paytm</option>
                <option value="Amazon Pay">Amazon Pay</option>
              </select>
            ) : (
              <p>{paymentInfo.wallet}</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
