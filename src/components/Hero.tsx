
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Array of images for transition
  const images = [
    "/pi-labs web design.png",
    "/pi-labs web design-1.png", 
    "/pi-labs web design-2.png",
    "/pi-labs web design-3.png"
  ];

  useEffect(() => {
    // Set up image transition timer
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Navigation functions for manual control
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Handle scroll for logo animation
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate logo transform based on scroll - positioned left and above
  const getLogoTransform = () => {
    const maxScroll = 300; // Distance to complete the animation
    const progress = Math.min(scrollY / maxScroll, 1);
    
    // Logo shrinks from increased initial size to final header size
    const initialSize = 96; // Further increased size (was 80px)
    const finalSize = 32;
    const currentSize = initialSize - (initialSize - finalSize) * progress;
    
    // Calculate position to move from hero text area to header
    const viewportHeight = window.innerHeight;
    // Position logo higher up and more to the left (around 25% from top)
    const startY = (viewportHeight * 0.25) - 60; 
    const endY = 32; // Final position in header (header height/2)
    const currentY = startY - (startY - endY) * progress;
    
    // Calculate horizontal position (starting from further left)
    const viewportWidth = window.innerWidth;
    const startX = viewportWidth * 0.07; // 7% from left (shifted more left from 10%)
    // End at the actual header logo position (left-aligned with container padding)
    const containerPadding = viewportWidth > 1024 ? 32 : viewportWidth > 640 ? 24 : 16; // lg:px-8, sm:px-6, px-4
    const endX = containerPadding + 16; // Header logo position (container padding + small offset)
    const currentX = startX + (endX - startX) * progress;
    
    // Opacity for buttons
    const buttonOpacity = Math.max(0, 1 - progress * 1.5);
    
    return {
      size: currentSize,
      currentY,
      currentX,
      buttonOpacity,
      logoOpacity: scrollY < maxScroll ? 1 : 0, // Hide when fully scrolled
      showInHeader: scrollY >= maxScroll // Show in header when animation complete
    };
  };

  const { size, currentY, currentX, buttonOpacity, logoOpacity, showInHeader } = getLogoTransform();

  return (
    <section 
      className="overflow-hidden relative flex items-center justify-center" 
      id="hero" 
      style={{
        minHeight: '100vh'
      }}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Pi Labs Design ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Image indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo - positioned left and above text area */}
          <div 
            ref={logoRef}
            className="fixed z-50 transition-all duration-300 ease-out"
            style={{
              top: `${currentY}px`,
              left: `${currentX}px`,
              opacity: logoOpacity,
              pointerEvents: scrollY > 200 ? 'none' : 'auto'
            }}
          >
            <img 
              src="/pilabs-light.svg" 
              alt="Pi-Labs" 
              style={{ 
                height: `${size}px`,
                width: 'auto',
                transition: 'all 0.3s ease-out',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' // Add shadow for better visibility
              }}
            />
          </div>

          {/* Action buttons with fade animation */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ 
              opacity: buttonOpacity, 
              transition: 'opacity 0.3s ease-out',
              marginTop: '60vh' // Position buttons in lower portion of viewport
            }}
          >
            <a 
              href="#products" 
              className="flex items-center justify-center group w-full sm:w-auto text-center" 
              style={{
                backgroundColor: '#3355FF',
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: '20px',
                padding: '16px 24px',
                border: '1px solid white',
              }}
            >
              Explore Products
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center w-full sm:w-auto text-center bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium py-4 px-6 rounded-full transition-all duration-300 hover:bg-white/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
