import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";  // Make sure axios is installed
import "./Login.css";
import Navbar from "../components/Navbar";

const LoginPage = ({ setIsLoggedIn }) => {
  const [currentBg, setCurrentBg] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("user"); // default value
  const navigate = useNavigate();

  const backgrounds = [
    "https://i.pinimg.com/474x/3a/14/ab/3a14ab23ca2b56c750228348a9de758c.jpg",
    "https://i.pinimg.com/474x/34/ed/d9/34edd9f3a4473c48b149ba6f3bfbd61a.jpg",
    "https://i.pinimg.com/736x/45/37/04/453704e2c174a0091d21bb4335a355f2.jpg",
    "https://i.pinimg.com/736x/25/27/18/252718ea4db177755a2c50c48bfbf9f0.jpg",
  ];

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:8001/api/auth/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        
        if (profession === "employee") {
          navigate("/employee-dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      alert("Invalid credentials. Try again!");
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        {backgrounds[currentBg].includes("mp4") ? (
          <video autoPlay loop muted key={currentBg} className="background-video">
            <source src={backgrounds[currentBg]} type="video/mp4" />
          </video>
        ) : (
          <div
            className="background-image"
            style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
          ></div>
        )}

        <div className="background-overlay"></div>

        <div className="login-container">
          <h2 className="neon-text">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Profession Selector */}
            <select
              name="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
              className="profession-select"
            >
              <option value="USER">User</option>
              <option value="EMPLOYEE">Employee</option>
            </select>

            <button type="submit">Login</button>
          </form>
          <p>
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
