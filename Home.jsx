// import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Home.css";
import Navbar from "../components/Navbar"; // Importing the Navbar component

const services = [
  { name: "Plumbing", description: "Expert plumbing services for all needs.", icon: "🚰" },
  { name: "Electrical", description: "Professional electrical solutions.", icon: "💡" },
  { name: "Cleaning", description: "Top-notch home and office cleaning.", icon: "🧹" },
  { name: "Painting", description: "Quality painting services for your home.", icon: "🎨" },
];

function Home() {
  return (
    <div className="home-container">
    <Navbar/>
      {/* Background Video */}
      <div className="video-container">
        <ReactPlayer
          url="https://cdn.pixabay.com/video/2023/10/21/185977-876963300_large.mp4" // Replace with your video link
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>

      {/* Overlay Content */}
      <div className="content">
        <h1 className="title">Welcome to Home Service Management</h1>
        <p className="subtitle">Reliable home services at your doorstep.</p>
        <Link to="/services" className="cta-button">
          Explore Services
        </Link>

        {/* Services Section */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
