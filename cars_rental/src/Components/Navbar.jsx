// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import logo from "../assets/logo.png";
import "../index.css"; // Make sure your primary button CSS is here

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [theme, setTheme] = useState("light"); // theme toggle

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme + "-theme";
  }, []);

  const toggleMenu = () => setOpen(!open);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme + "-theme";
    localStorage.setItem("theme", newTheme);
  };

  const pages = [
    { name: "Home", href: "#" },
    { name: "Cars", href: "#" },
    { name: "Booking", href: "#" },
    { name: "Dashboard", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0 font-bold text-3xl text-blue-600 dark:text-blue-400">
            <img src={logo} alt="Logo" className="h-32 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400
                           transition-colors duration-300 transform hover:scale-105"
              >
                {page.name}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
            </button>

            {/* Login/Signup button */}
            <button className="ml-4 primary">Login / Signup</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
            </button>

            <button onClick={toggleMenu} className="focus:outline-none">
              {open ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
    {/* Mobile Menu */}
{open && (
  <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-1 shadow-md">
    {pages.map((page) => (
      <a
        key={page.name}
        href={page.href}
        onClick={() => setOpen(false)} // <- close menu on click
        className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700
                   transition-colors duration-300 transform hover:scale-105"
      >
        {page.name}
      </a>
    ))}

    {/* Login/Signup Button */}
    <button
      className="w-full mt-2 primary"
      onClick={() => setOpen(false)} // <- close menu if button clicked
    >
      Login / Signup
    </button>
  </div>
)}

    </nav>
  );
}
