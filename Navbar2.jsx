/* eslint-disable no-undef */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar2.css';

const pages = ["Dashboard", "Service", "My Bookings", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img
            src="https://th.bing.com/th/id/OIP.ciV0O0hYJglmmVKAc02gmQHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Logo"
            className="logo-image"
          />
          <Link to="/" className="logo-text">Home Servicing</Link>
        </div>

        {/* Nav Links */}
        <div className="nav-links">
          {pages.map((page) => (
            <Link
              key={page}
              to={`/${page.toLowerCase()}`}
              className="nav-link"
            >
              {page}
            </Link>
          ))}
        </div>

        {/* Avatar and User Profile Menu */}
        <div className="user-avatar">
          <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <img
              src="https://avatar.iran.liara.run/public/41"
              alt="User Avatar"
              className="avatar-image"
            />
          </button>

          {userMenuOpen && (
            <div className="user-menu">
              {settings.map((setting) => (
                // If it's "Logout", clear localStorage and redirect
                <button
                  key={setting}
                  className="user-menu-item"
                  onClick={() => {
                    if (setting === "Logout") {
                      // Clear session data
                      localStorage.removeItem("user");  // Remove user data
                      // Redirect to the Home page
                      navigate("/");  // Redirect to Home
                    } else {
                      setUserMenuOpen(false);
                    }
                  }}
                >
                  {setting}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
