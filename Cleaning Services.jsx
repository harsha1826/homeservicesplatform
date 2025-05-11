import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cleaning.css";

// Sample services array
const services = [
  {
    title: 'Home Deep Cleaning',
    image: 'https://homevacuumzone.com/wp-content/uploads/2017/09/Depositphotos_65902465_m-2015-web.jpg',
    cost: '₹1000 - ₹3000',
  },
  {
    title: 'Sofa/Carpet Cleaning',
    image: 'https://th.bing.com/th/id/OIP.rH86UG5fwIjAP3ko2SIPNwAAAA?cb=iwc1&rs=1&pid=ImgDetMain',
    cost: '₹800 - ₹2500',
  },
  {
    title: 'Bathroom and Kitchen Cleaning',
    image: 'https://cdn.homedit.com/wp-content/uploads/cleaning/bathroom/Bathroom-Deep-Cleaning-Tasks-768x473.jpg',
    cost: '₹1200 - ₹4000',
  },
  {
    title: 'Window and Glass Cleaning',
    image: 'https://th.bing.com/th/id/OIP.zXBxbb12Vd2flwO8yaVDmwHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
    cost: '₹500 - ₹1500',
  },
  {
    title: 'Water Tank/Sump Cleaning',
    image: 'https://www.smartmaterials.pk/wp-content/uploads/2021/10/water-tank-cleaning-21.jpg',
    cost: '₹2000 - ₹6000',
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
          <h1>Cleaning Services</h1>
        </header>

        {/* Back Button */}
        <section className="back-button-container">
          <Link to="/bookings" className="back-button">
            &larr; Back to Bookings
          </Link>
        </section>

        {/* Service Selection */}
        <section className="service-selection">
          <h2>Select a Cleaning Service</h2>
          
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
