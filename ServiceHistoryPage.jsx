import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ServiceHistoryPage.css";

export default function ServiceHistory() {
  const [serviceHistory, setServiceHistory] = useState([
    {
      id: 1,
      service: "AC Repair",
      provider: "Raj Kumar",
      date: "2024-05-02",
      time: "10:00 AM",
      status: "Completed",
      cost: "₹800",
      rating: 4,
    },
    {
      id: 2,
      service: "Plumbing",
      provider: "Suresh Yadav",
      date: "2024-04-22",
      time: "3:30 PM",
      status: "Completed",
      cost: "₹650",
      rating: 3,
    },
    {
      id: 3,
      service: "Electrician",
      provider: "Anil Reddy",
      date: "2024-03-18",
      time: "12:00 PM",
      status: "Cancelled",
      cost: "₹0",
      rating: null,
    },
  ]);

  const navigate = useNavigate();

  const handleRatingChange = (id, newRating) => {
    setServiceHistory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, rating: newRating } : item
      )
    );
  };

  const renderStars = (id, currentRating) => {
    const maxStars = 5;
    return (
      <div className="star-rating">
        {[...Array(maxStars)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <span
              key={index}
              className={`star ${ratingValue <= currentRating ? "filled" : ""}`}
              onClick={() => handleRatingChange(id, ratingValue)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="history-container">
      <aside className="sidebar open">
        <h2 className="logo">HomeServices</h2>
        <nav className="menu">
          {["Dashboard", "Bookings", "Service-History", "Profile", "Payment-Info", "Support"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace("-", "-")}`}
              className={`menu-item ${item === "Service-History" ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={() => navigate("/login")}>Logout</button>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Service History</h1>
        </header>

        <div className="history-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Service</th>
                <th>Provider</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Cost</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {serviceHistory.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.service}</td>
                  <td>{item.provider}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
                  <td>{item.cost}</td>
                  <td>
                    {item.status === "Completed"
                      ? renderStars(item.id, item.rating || 0)
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
