// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/image.png";

const Navbar = () => {
  const router = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <p
              key={link.name}
              onClick={() => router(link.href)}
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </p>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-start px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <p
                key={link.name}
                onClick={() => {
                  router(link.href);
                  setMenuOpen(false);
                }}
                className="w-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {link.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
