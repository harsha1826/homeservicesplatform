import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cleaning.css";

// Sample services array
const services = [
  {
    title: 'Painting',
    image: 'https://intheluuup.com/wp-content/uploads/2021/11/Zen-Vibes-Painting-1.jpeg',
    cost: '₹1000 - ₹5000',
  },
  {
    title: 'Wallpaper and Wall Panels',
    image: 'https://i.pinimg.com/originals/86/7e/fe/867efe08d09039a21ae08e2133835cd0.jpg',
    cost: '₹1500 - ₹7000',
  },
  {
    title: 'Interior Design',
    image: 'https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room.jpg',
    cost: '₹5000 - ₹25000',
  },
  {
    title: 'Furniture Assembly',
    image: 'https://goloadup.com/wp-content/uploads/2021/09/dresser-assembly.jpg',
    cost: '₹500 - ₹3000',
  },
  {
    title: 'Smart Home Setup',
    image: 'https://th.bing.com/th/id/OIP.hcLpXXs2DE4YWcWGhy6q4AHaFj?cb=iwc1&rs=1&pid=ImgDetMain',
    cost: '₹5000 - ₹20000',
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
          <h1>Home Improvement Services</h1>
        </header>

        {/* Back Button */}
        <section className="back-button-container">
          <Link to="/bookings" className="back-button">
            &larr; Back to Bookings
          </Link>
        </section>

        {/* Service Selection */}
        <section className="service-selection">
          <h2>Select a Home Improvement Service</h2>
          
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
