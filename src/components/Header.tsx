
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" }, // Anchors remain as-is
    { name: "Portfolio", href: "/portfolio" },
    { name: "Partners", href: "#ecosystem" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-royalgold/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-midnight">1 Asset <span className="text-royalgold">Exchange</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-midnight hover:text-royalgold transition-colors font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-midnight hover:text-royalgold transition-colors font-medium"
              >
                {link.name}
              </Link>
            )
          )}
          <Link to="/contact">
            <Button
              className="ml-4 px-5 py-2 text-sm rounded-full font-semibold bg-royalgold text-midnight hover:shadow-gold transition-all duration-200"
            >
              Book a Call
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-midnight hover:text-royalgold transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-royalgold/10 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-midnight hover:text-royalgold transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-midnight hover:text-royalgold transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="mt-2 px-5 py-2 text-sm rounded-full font-semibold bg-royalgold text-midnight hover:shadow-gold transition-all duration-200 w-full"
              >
                Book a Call
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
