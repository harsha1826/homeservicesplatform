import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // <-- Make sure axios is installed
import "./Signup.css";
import Navbar from "../components/Navbar";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "USER", // Backend expects uppercase
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "role") {
      value = value.toUpperCase(); // Convert to match enum in backend
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending signup data:", formData);
      const response = await axios.post("http://localhost:8000/api/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Signup Success:", response.data);
      alert("Signup successful!");
      // You can redirect or clear form here
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert("Signup failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-page">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="role-select"
              required
            >
              <option value="USER">User</option>
              <option value="EMPLOYEE">Employee</option>
            </select>

            <button type="submit">Sign Up</button>
          </form>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
