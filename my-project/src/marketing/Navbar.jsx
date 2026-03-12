import { useContext, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/imagecopy.png";
import { AuthContext } from "../context/authContext";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Navbar = () => {
  const { state } = useContext(AuthContext);
  const router = useNavigate();
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { key: "home", href: "/" },
    { key: "about", href: "/aboutus" },
    { key: "products", href: "/products" },
    { key: "services", href: "/services" },
    { key: "contact", href: "/contactus" },
  ];

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router("/")}
        >
          <img src={logo} alt="Company Logo" className="h-14 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-semibold text-lg">
          {state?.adminEmail && (
            <p
              onClick={() => router("/dashboard")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("navbar.dashboard")}
            </p>
          )}

          {navLinks.map((link) => (
            <p
              key={link.key}
              onClick={() => router(link.href)}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t(`navbar.${link.key}`)}
            </p>
          ))}

          {/* 🌍 Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 border px-3 py-1 rounded-lg"
            >
              <Globe size={18} />
              {i18n.language.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md overflow-hidden">
                <p
                  onClick={() => changeLang("en")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🇺🇸 English
                </p>

                <p
                  onClick={() => changeLang("hi")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🇮🇳 Hindi
                </p>

                <p
                  onClick={() => changeLang("fr")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🇫🇷 French
                </p>

                <p
                  onClick={() => changeLang("es")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🇪🇸 Spanish
                </p>

                <p
                  onClick={() => changeLang("de")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🇩🇪 German
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <p
              key={link.key}
              onClick={() => {
                router(link.href);
                setMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {t(`navbar.${link.key}`)}
            </p>
          ))}

          {/* Mobile Language */}
          <div className="pt-3 border-t">
            <p className="font-semibold mb-2">{t("navbar.language")}</p>
            <div className="flex gap-3">
              <button onClick={() => changeLang("en")}>EN</button>
              <button onClick={() => changeLang("hi")}>HI</button>
              <button onClick={() => changeLang("fr")}>FR</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
