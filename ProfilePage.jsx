import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./profile.css";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "T. Harsha vardhan",
    email: "2300031826@kluniversity.com",
    phone: "+91 90523 97987",
    address: "Guntur, Andhra Pradesh",
    gender: "Male",
    dob: "2006-05-03",
    role: "Admin",
    profession: "Developer",
  });

  const [profileImage, setProfileImage] = useState("https://media.licdn.com/dms/image/v2/D4D03AQG04PKx0ZwUzg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726587951625?e=1752105600&v=beta&t=zS6No1kt2zFiyYJ7XLtSw1rlz1d6MFvzu0z6v4Np4T4");
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      // Save changes (currently in-memory)
      console.log("Saved:", user);
    }
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <aside className="sidebar open">
        <h2 className="logo">HomeServices</h2>
        <nav className="menu">
          {["Dashboard", "Bookings", "Service-History", "Profile", "Payment-Info", "Support"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace("-", "-")}`}
              className={`menu-item ${item === "Profile" ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>User Profile</h1>
          <button onClick={toggleEdit} className="edit-btn">
            {isEditing ? "Save" : "Edit"}
          </button>
        </header>

        <div className="profile-details">
          <div className="profile-avatar-section">
            <img
              src={profileImage}
              alt="User Avatar"
              className="profile-avatar"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="upload-input"
              />
            )}
          </div>

          <div className="profile-info">
            {Object.entries(user).map(([key, value]) => (
              <div className="profile-field" key={key}>
                <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                {isEditing ? (
                  <input
                    type={key === "dob" ? "date" : "text"}
                    name={key}
                    value={value}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
