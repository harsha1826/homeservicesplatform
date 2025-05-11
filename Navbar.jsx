/* eslint-disable no-undef */
import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const pages = ["Home","Services", "Signup", "Login"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
      <div className="relative-closure">
          
            <img
              src="https://th.bing.com/th/id/OIP.ciV0O0hYJglmmVKAc02gmQHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="User Avatar"
              className="rounded-full w-10 h-10 border-2 border-white"
            />
          
          </div>
        <div className="text-2xl font-bold">
          <Link to="/">Home Servicing</Link>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page}
              to={`/${page.toLowerCase()}`}
              className="px-4 py-2 hover:bg-sky-500 hover:text-red-500 transition"
            >
              {page}
            </Link>
          ))}
        </div>

        {/* User Avatar and Menu
        <div className="relative">
          <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <img
              src="https://avatar.iran.liara.run/public/41"
              alt="User Avatar"
              className="rounded-full w-10 h-10 border-2 border-white"
            />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden">
              {settings.map((setting) => (
                <button
                  key={setting}
                  className="block w-full text-left px-4 py-2 hover:bg-sky-500 hover:text-red-500 transition"
                  onClick={() => setUserMenuOpen(false)}
                >
                  {setting}
                </button>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
