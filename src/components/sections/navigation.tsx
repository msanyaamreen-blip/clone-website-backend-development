"use client";

import { useState, useEffect } from "react";
import { Droplet, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#office" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "py-3 bg-gradient-to-r from-[#2c5f7c] to-[#1e4d63] shadow-lg backdrop-blur-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex shrink-0 items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
              <Droplet className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-semibold text-white">Amphitrite</span>
              <p className="text-sm text-blue-200">Technologies</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white transition-all duration-300 hover:text-blue-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#lead-form">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request Free Consultation
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#1e4d63] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-5 p-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-white hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="#lead-form" className="w-full pt-4">
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;