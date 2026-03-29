// src/components/Footer.jsx
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import logo from "../assets/logo/imagecopy.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
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
            <p className="text-sm mt-5 leading-relaxed">
              {t("footer.aboutText")}
            </p>
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            {" "}
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-blue-400 transition-colors duration-200 text-left"
              >
                {t("footer.home")}

              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/aboutus")}
                className="hover:text-blue-400 transition-colors duration-200 text-left"
              >
               {t("footer.about")}
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/products")}
                className="hover:text-blue-400 transition-colors duration-200 text-left"
              >
                {t("footer.products")}
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/services")}
                className="hover:text-blue-400 transition-colors duration-200 text-left"
              >
                {t("footer.services")}
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/contactus")}
                className="hover:text-blue-400 transition-colors duration-200 text-left"
              >
                {t("footer.contact")}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4"> {t("footer.contactInfo")}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
              <span>
                Adarsh Trading Company <br />
                Ground Floos S.No.222, Gala No. B-4 <br /> Raj Rajeshwari Compound,
                Sonale Bhiwandi,Maharashtra(India)421302
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <a href="tel:+91 9860680435" className="hover:text-blue-400">
                +91 9860680435
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="kumarjay2050@gmail.com" className="hover:text-blue-400">
                kumarjay2050@gmail.com info@adarshtradingcompany.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.followUs")}  </h3>
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

    </footer>
  );
};

export default Footer;
