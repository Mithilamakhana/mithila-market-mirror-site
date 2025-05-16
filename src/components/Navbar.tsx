
import React, { useState, useEffect } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-serif font-bold text-primary">
            Makhana <span className="text-accent">Mithila</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#products" className="font-medium hover:text-primary transition-colors">
            Products
          </a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="bg-accent text-white hover:bg-accent/90">Shop Now</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 p-4 transition-all">
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="font-medium p-2 hover:bg-secondary rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="font-medium p-2 hover:bg-secondary rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="font-medium p-2 hover:bg-secondary rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="font-medium p-2 hover:bg-secondary rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="font-medium p-2 hover:bg-secondary rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-accent text-white hover:bg-accent/90">Shop Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
