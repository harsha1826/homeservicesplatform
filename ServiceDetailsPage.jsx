import React from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import "./ServiceDetails.css"

// Sample data for Service History
const serviceDetails = [
  {
    id: 1,
    service: "Home Cleaning",
    date: "2025-03-15",
    status: "Completed",
    details: "Complete home cleaning, including dusting, mopping, and sanitizing.",
  },
  {
    id: 2,
    service: "Plumbing",
    date: "2025-03-18",
    status: "Completed",
    details: "Leaking pipe repair in the kitchen and bathroom.",
  },
  {
    id: 3,
    service: "Electrical Repairs",
    date: "2025-03-22",
    status: "Cancelled",
    details: "Repair of electrical wiring in living room (service was cancelled).",
  },
  {
    id: 4,
    service: "Pest Control",
    date: "2025-03-25",
    status: "Completed",
    details: "Pest control treatment for termites and rodents in the attic.",
  },
];

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Find the service by ID
  const service = serviceDetails.find((s) => s.id === parseInt(serviceId));

  if (!service) {
    return <div>Service not found</div>;
  }

  const { service: serviceName, date, status, details } = service;

  const handleBack = () => {
    navigate("/service-history");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar open">
        <h2 className="logo">HomeServices</h2>
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
        <button className="logout-btn" onClick={() => navigate("/login")}>Logout</button>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="header">
          <button onClick={handleBack} className="sidebar-toggle-btn">Back to Service History</button>
          <h1>Service Details</h1>
        </header>

        <section className="service-details">
          <h2>{serviceName}</h2>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Details:</strong> {details}</p>
        </section>
      </main>
    </div>
  );
}
