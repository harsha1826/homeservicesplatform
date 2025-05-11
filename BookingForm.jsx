import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import './BookingForm.css';

export default function BookingForm() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  // Cost ranges for all services
  const costRanges = {
    // Home Improvement
    painting: [3000, 7000],
    "wallpaper-and-wall-panels": [4000, 9000],
    "interior-design": [10000, 25000],
    "furniture-assembly": [1000, 3000],
    "smart-home-setup": [8000, 20000],

    // Cleaning Services
    "kitchen-cleaning": [800, 1500],
    "bathroom-cleaning": [500, 1200],
    "sofa-cleaning": [700, 2000],
    "carpet-cleaning": [600, 1800],

    // Appliance Repair
    "ac-repair": [500, 1500],
    "refrigerator-repair": [800, 2000],
    "washing-machine-repair": [600, 1800],
    "microwave-repair": [400, 1200],

    // Default fallback
    default: [1000, 2000],
  };

  // Format service name
  const formattedService = serviceName.replace(/-/g, " ");
  const [randomCost, setRandomCost] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
  });

  // Generate random cost on mount
  useEffect(() => {
    const range = costRanges[serviceName] || costRanges.default;
    const random = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
    setRandomCost(random);
  }, [serviceName]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Store formData and randomCost in localStorage
    navigate("/payment");
  };

  const handleLogout = () => {
    // Add logout logic here
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <p1 className="logo">HomeServices</p1>
        <nav className="menu">
          {["Dashboard", "Bookings", "Service-History", "Profile", "Payment-Info", "Support"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="menu-item"
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      {/* Booking Form */}
      <div className="booking-form-container" style={{ padding: "20px", flex: 1 }}>
        <h2>Booking: {formattedService}</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          /><br />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          /><br />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          /><br />

          {/* Display Random Total Cost */}
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
            Total Cost: ₹{randomCost}
          </p>

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
