import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show navbar logo when hero logo animation is complete (after 300px scroll)
  const showNavbarLogo = scrollY >= 300;
  
  // Calculate fade-in opacity for header logo
  const getHeaderLogoOpacity = () => {
    if (scrollY < 300) return 0; // Hidden during hero animation
    
    const fadeStart = 300;
    const fadeEnd = 350; // 50px transition zone
    const fadeProgress = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
    
    return fadeProgress;
  };

  const headerLogoOpacity = getHeaderLogoOpacity();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 md:py-6 transition-all duration-300 bg-[#F8FAFC]/95 backdrop-blur-md shadow-sm")}>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo with animation */}
        <div 
          className="flex items-center transition-all duration-500 ease-out"
          style={{
            opacity: headerLogoOpacity,
            transform: `scale(${0.8 + (headerLogoOpacity * 0.2)})`
          }}
        >
          {showNavbarLogo && (
            <img 
              alt="Pi-Labs Logo" 
              className="h-8 transition-all duration-300" 
              src="/pilabs-dark copy.svg" 
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link" onClick={e => {
            e.preventDefault();
            scrollToTop();
          }}>
            Home
          </a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#industries" className="nav-link">Industries</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out", isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a href="#" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={e => {
            e.preventDefault();
            scrollToTop();
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}>
            Home
          </a>
          <a href="#products" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}>
            Products
          </a>
          <a href="#industries" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}>
            Industries
          </a>
          <a href="#contact" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;