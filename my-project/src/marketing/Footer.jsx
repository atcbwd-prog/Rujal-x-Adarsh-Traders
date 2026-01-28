// src/components/Footer.jsx
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import logo from "../assets/logo/imagecopy.png"
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Logo + About */}
        <div>
        <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto object-contain"
          />
          <p className="text-sm mt-5  leading-relaxed ">
            Adarsh Trading  — from machinery trading and
            consulting to digital transformation — empowering mills to optimize
            performance and quality.
          </p>
        </div>

        <div>
  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    
  <li>
      <button
        onClick={() => navigate("/")}
        className="hover:text-blue-400 transition-colors duration-200 text-left"
      >
       Home
      </button>
    </li>


    <li>
      <button
        onClick={() => navigate("/aboutus")}
        className="hover:text-blue-400 transition-colors duration-200 text-left"
      >
        About Us
      </button>
    </li>


    <li>
      <button
        onClick={() => navigate("/products")}
        className="hover:text-blue-400 transition-colors duration-200 text-left"
      >
        Products
      </button>
    </li>

    <li>
      <button
        onClick={() => navigate("/services")}
        className="hover:text-blue-400 transition-colors duration-200 text-left"
      >
        Services
      </button>
    </li>
    

    <li>
      <button
        onClick={() => navigate("/contactus")}
        className="hover:text-blue-400 transition-colors duration-200 text-left"
      >
        Contact Us
      </button>
    </li>
  </ul>
</div>


        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
              <span>
                Adarsh Trading <br />
                Ground Floos S.No.222, Gala No. B-4 Raj Rajeshwari Compound, Sonale Bhiwandi,Maharashtra(India)421302
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <a href="tel:9860690435" className="hover:text-blue-400">
               9860690435
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="kumarjay2050@gmail.com" className="hover:text-blue-400">
                kumarjay2050@gmail.com
                info@adarshtradingcompany.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/texcoms"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.facebook.com/texcoms"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <Youtube className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Adarsh Trading. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
