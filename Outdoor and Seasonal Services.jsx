import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cleaning.css";

// Sample services array
const services = [
  {
    title: 'Landscaping and Gardening',
    image: 'https://www.thespruce.com/thmb/fbS9ar_BQxV_VJuWvkv75vWl_Sk=/1800x1200/filters:fill(auto,1)/PartridgeLandscape-5b5cbf5fc9e77c002cbfff8c.jpg',
    cost: '₹2000 - ₹8000',
  },
  {
    title: 'Pool Maintenance',
    image: 'https://media.istockphoto.com/vectors/pool-maintenance-accessories-vector-id1193373350?k=6&m=1193373350&s=612x612&w=0&h=ZBmIR1xYk8plOy43noV7pLWYC0MYd-3XcQINwUtV4vs=',
    cost: '₹3000 - ₹15000',
  },
  {
    title: 'Snow Removal',
    image: 'https://th.bing.com/th/id/OIP.HY4HmGo5HePe-zr5SV7PgAHaE9?cb=iwc1&rs=1&pid=ImgDetMain',
    cost: '₹1500 - ₹5000',
  },
  {
    title: 'Rain Proofing',
    image: 'https://wp.kalyandevelopers.com/wp-content/uploads/2021/09/blog-image-oct01.jpg',
    cost: '₹2000 - ₹10000',
  },
];


export default function BookingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate(); // Initialize navigate

  // Filter services based on the search query
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    navigate("/login"); // Navigate to login page
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility
  };

  return (
    <div className="page-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <h2 className="logo">HomeServices</h2>
        <nav className="menu">
          {["Dashboard", "Bookings", "Service-History", "Profile", "Payment-Info", "Support"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace("-", "-")}`}
              className={`menu-item ${item === "Bookings" ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <button onClick={toggleSidebar} className="sidebar-toggle-btn">
            {isSidebarOpen ? "<" : ">"}
          </button>
          <h1>Outdoor and Seasonal Services</h1>
        </header>

        {/* Back Button */}
        <section className="back-button-container">
          <Link to="/bookings" className="back-button">
            &larr; Back to Bookings
          </Link>
        </section>

        {/* Service Selection */}
        <section className="service-selection">
          <h2>Select a Outdoor and Seasonal Service</h2>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search services..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
          
          {/* Service Cards */}
          <div className="service-cards">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div key={index} className="service-card">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <h3>{service.title}</h3>
                  <p className="service-cost">{service.cost}</p>  

                  <button
                    className="book-btn"
                    onClick={() => navigate(`/book/${service.title.toLowerCase().replace(" ", "-")}`)}
                  >
                    Book
                  </button>
                </div>
              ))
            ) : (
              <p>No services found</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
