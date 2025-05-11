import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Support.css";

export default function Support() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support Message:", formData);
    alert("Support request submitted!");
    // TODO: send to backend
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="support-container">
      <aside className="sidebar open">
        <h2 className="logo">HomeServices</h2>
        <nav className="menu">
          {["Dashboard", "Bookings", "Service-History", "Profile", "Payment-Info", "Support"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace("-", "-")}`}
              className={`menu-item ${item === "Support" ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={() => navigate("/login")}>Logout</button>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Customer Support</h1>
        </header>

        <div className="support-section">
          <section className="contact-info">
            <h2>We're here to help!</h2>
            <p>☎ Toll-Free: <strong>1800-123-456</strong></p>
            <p>📧 Email: <strong>support@homeservices.com</strong></p>
            <p>⏰ Working Hours: <strong>Mon–Sat | 9:00 AM – 8:00 PM</strong></p>
          </section>

          <section className="faq">
            <h3>Common Questions</h3>
            <ul>
              <li>How do I reschedule a booking?</li>
              <li>What payment methods are supported?</li>
              <li>How can I rate a completed service?</li>
              <li>How do I update my profile or contact info?</li>
            </ul>
          </section>

          <section className="support-form">
            <h3>Still need help?</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Describe your issue..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Submit Request</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
