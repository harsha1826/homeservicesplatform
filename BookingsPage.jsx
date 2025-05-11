import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";


// Sample services array
const services = [
  {
    title: 'Maintenance & Repair-Services',
    image: 'https://th.bing.com/th/id/OIP.lnuc8hCRE-MYYQea2vNNgAHaEU?cb=iwc1&rs=1&pid=ImgDetMain',
  },
  {
    title: 'Cleaning Services',
    image: 'https://th.bing.com/th/id/OIP.d5yZWVOYmmkT1e91IhCfLQHaF-?cb=iwc1&rs=1&pid=ImgDetMain',
  },
  {
    title: 'Home Improvement',
    image: 'https://happycozyhouse.com/wp-content/uploads/2020/08/pexels-photo-3797991.jpeg',
  },
  {
    title: 'Outdoor and Seasonal Services',
    image: 'https://lawnhiro.com/wp-content/uploads/2023/05/LH-Blog-Infographic-SeasonalLawnCareGuide-3.png',
  },
  {
    title: 'Construction and Renovation',
    image: 'https://mykonosestates.com/wp-content/uploads/2015/07/MykonosEstates.com-Renovation-Repairs-Construction-Vip.jpg',
  },
  {
    title: 'Security and Utility',
    image: 'https://northeastsecuritysolutions.com/img/house-services-new-r.jpg',
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
    // Logic to logout
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
          <h1>Bookings</h1>
        </header>

        <section className="service-selection">
          <h2>Select a Service</h2>
          
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
                  <p>{service.description}</p>
                  <button
                    className="book-btn"
                    onClick={() => navigate(`/book/${service.title.toLowerCase().replace(" ", "-")}`)}
                  >
                    Explore
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
