import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cleaning.css";

// Sample services array
const services = [
  {
    title: 'Plumbing',
    image: 'https://img.freepik.com/premium-photo/plumbing-works_705203-15118.jpg',
    cost: '₹500 - ₹1500',
  },
  {
    title: 'Electrical Work',
    image: 'https://i.pinimg.com/originals/45/ad/f0/45adf0b23778aebb929d0a5493739ce2.jpg',
    cost: '₹800 - ₹2000',
  },
  {
    title: 'Appliance Repair',
    image: 'https://th.bing.com/th/id/OIP.JGWgqHPIARLNWpt10t49DAAAAA?cb=iwc1&w=386&h=272&rs=1&pid=ImgDetMain',
    cost: '₹600 - ₹1800',
  },
  {
    title: 'AC Services',
    image: 'https://5.imimg.com/data5/RE/JW/MY-3188213/ac-service-500x500.jpg',
    cost: '₹1000 - ₹3000',
  },
  {
    title: 'Roofing and Guttering',
    image: 'https://i.pinimg.com/originals/be/1c/01/be1c018a7e04986a350d4f90161e3ea8.jpg',
    cost: '₹1500 - ₹5000',
  },
  {
    title: 'Pest Control',
    image: 'https://static.vecteezy.com/system/resources/previews/009/951/662/original/pest-control-service-with-exterminator-of-insects-sprays-and-house-hygiene-disinfection-in-flat-cartoon-background-illustration-vector.jpg',
    cost: '₹800 - ₹2500',
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
          <h1>Maintenance and Repair Services</h1>
        </header>

        {/* Back Button */}
        <section className="back-button-container">
          <Link to="/bookings" className="back-button">
            &larr; Back to Bookings
          </Link>
        </section>

        {/* Service Selection */}
        <section className="service-selection">
          <h2>Select a Maintenance and Repair Service</h2>
          
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
                  <p className="service-cost">{service.cost}</p> {/* Display cost here */}
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
