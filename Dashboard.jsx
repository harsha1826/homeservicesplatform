import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import Link from React Router and useNavigate
import "./Dashboard.css";

export default function CustomerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility
  const navigate = useNavigate();  // Initialize navigate

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar state
  };

  const handleLogout = () => {
    // Here you can also add logic to clear authentication data (e.g., clear token from localStorage)
    navigate("/login"); // Navigate to login page
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
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

      {/* Main Content */}
      <main className="main">
        <header className="header">
          <button onClick={toggleSidebar} className="sidebar-toggle-btn">
            {isSidebarOpen ? "<" : ">"}
          </button>
          <h1>Welcome, Team 15</h1>
          
        </header>

        <section className="cards">
          {["Active Bookings", "Upcoming Appointments", "Payments Due", "Recent Reviews"].map((title, i) => (
            <div key={i} className="card">
              <p className="card-title">{title}</p>
              <h2 className="card-value">0</h2>
            </div>
          ))}
        </section>

        <section className="service-status">
          <h2>Active Bookings</h2>
          <div className="status-card">
            <h3>Cleaning Service</h3>
            <p>Status: In Progress</p>
            <p>Scheduled: 2025-05-10</p>
          </div>
          <div className="status-card">
            <h3>Plumbing Service</h3>
            <p>Status: Scheduled</p>
            <p>Scheduled: 2025-05-20</p>
          </div>
        </section>

        <section className="service-history">
          <h2>Service History</h2>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cleaning</td>
                <td>2025-03-15</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Electrician</td>
                <td>2025-03-20</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Plumbing</td>
                <td>2025-03-25</td>
                <td>Cancelled</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
