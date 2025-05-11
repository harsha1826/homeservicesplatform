import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cleaning.css";

// Sample services array
const services = [
  {
    title: 'Masonry and Carpentry',
    image: 'https://volpatolasm.com/wp-content/uploads/2022/09/laboratorio-falegnameria.jpg',
    cost: '₹2000 - ₹8000',
  },
  {
    title: 'Bathroom Renovation',
    image: 'https://th.bing.com/th/id/OIP.05QD_KHsHtB6XV90N1WPzgHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
    cost: '₹5000 - ₹15000',
  },
  {
    title: 'Kitchen Remodeling',
    image: 'https://th.bing.com/th/id/R.551161f9bbf724d95d1d5944d2fe6740?rik=SLluhAdbeKNCTw&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f08%2fKitchen-design-ideas-19.jpg&ehk=YQXPEL1Qo7mfJM2mD4%2f6QIqoUK83I6M9YRTAFDdZV0I%3d&risl=&pid=ImgRaw&r=0',
    cost: '₹8000 - ₹25000',
  },
  {
    title: 'Flooring Installation',
    image: 'https://i.pinimg.com/736x/e5/59/18/e55918080dfade535804f30152d8c23f.jpg',
    cost: '₹1500 - ₹5000',
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
          <h1>Construction and Renovation Services</h1>
        </header>

        {/* Back Button */}
        <section className="back-button-container">
          <Link to="/bookings" className="back-button">
            &larr; Back to Bookings
          </Link>
        </section>

        {/* Service Selection */}
        <section className="service-selection">
          <h2>Select a Construction and Renovation Service</h2>
          
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
                    onClick={() => navigate("/book/booking")}
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
