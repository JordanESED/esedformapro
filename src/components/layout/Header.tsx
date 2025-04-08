
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Placeholder ESED logo with updated name
const ESEDLogo = () => (
  <div className="flex items-center">
    <span className="text-esed-blue font-bold text-2xl mr-1">ESED</span>
    <span className="text-esed-gold font-bold">Formation professionnelle</span>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Notre approche", path: "/notre-approche" },
    { name: "Formations", path: "/catalogue" },
    { name: "Financement", path: "/financement" },
    { name: "Équipe", path: "/equipe" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <ESEDLogo />
          </Link>

          <div className="hidden md:block text-esed-gold font-medium italic bg-gray-50 px-4 py-2 rounded">
            Formation sur-mesure à la demande
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-esed-blue font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Demander un devis
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-esed-blue"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full left-0 shadow-md animate-fade-in py-4">
          <nav className="container-custom flex flex-col space-y-4">
            <div className="text-esed-gold font-medium italic bg-gray-50 px-4 py-2 rounded mb-2 text-center">
              Formation sur-mesure à la demande
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-esed-blue font-medium transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary text-center"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
