import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cleaning.css";

// Sample services array
const services = [
  {
    title: 'CCTV Installation',
    image: 'https://th.bing.com/th/id/OIP.8LcWfCuZrnig400wyhASMwHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
    cost: '₹5000 - ₹15000',
  },
  {
    title: 'Locksmith Services',
    image: 'https://www.diamondlocksmiths.com.au/wp-content/uploads/2023/08/locksmith-repairing-door-lock.jpg',
    cost: '₹1000 - ₹5000',
  },
  {
    title: 'Solar Panel Installation and Maintenance',
    image: 'https://th.bing.com/th/id/OIP.lvvvscx37qRp4aN8K0WzXAHaEK?cb=iwc1&rs=1&pid=ImgDetMain',
    cost: '₹20000 - ₹80000',
  },
  {
    title: 'Water Purifier Services',
    image: 'https://th.bing.com/th/id/OIP.tJSdDLBM-fJbLoVSP_peQwHaG_?w=175&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.5&pid=1.7',
    cost: '₹1000 - ₹4000',
  },
  {
    title: 'Smart Home Setup',
    image: 'https://www.architectureartdesigns.com/wp-content/uploads/2017/07/AAEAAQAAAAAAAAm5AAAAJGIyMDk5NmYyLTQyNDItNGYxZi05MTE3LWM3M2M1MTU5NDFjZg.jpg',
    cost: '₹10000 - ₹50000',
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
          <h1>Security and Utility Services</h1>
        </header>

        {/* Back Button */}
        <section className="back-button-container">
          <Link to="/bookings" className="back-button">
            &larr; Back to Bookings
          </Link>
        </section>

        {/* Service Selection */}
        <section className="service-selection">
          <h2>Select a Security and Utility Service</h2>
          
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
