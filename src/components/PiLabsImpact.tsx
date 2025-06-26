
import React, { useState, useEffect, useRef } from "react";

const PiLabsImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const impactStats = [
    {
      number: "1000+",
      numericValue: 1000,
      title: "Investigations Empowered Daily",
      description: "Supporting law enforcement and forensic teams across high-stakes cases—every single day."
    },
    {
      number: "60%",
      numericValue: 60,
      title: "Reduction in Manual Workloads",
      description: "Automating analysis to save time, cut errors, and accelerate critical decisions."
    },
    {
      number: "25+",
      numericValue: 25,
      title: "Years of Cyber Forensics Expertise",
      description: "A legacy of trusted innovation in cybersecurity, digital forensics, and investigative technology."
    },
    {
      number: "5",
      numericValue: 5,
      title: "Patents & Counting",
      description: "Pioneering patented technologies to stay ahead of evolving digital threats."
    }
  ];

  const formatDisplayValue = (value, index) => {
    if (index === 0) return `${value}+`; // 1000+
    if (index === 1) return `${value}%`; // 60%
    if (index === 2) return `${value}+`; // 25+
    return value.toString(); // 5
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Start the counter animation
            impactStats.forEach((stat, index) => {
              const targetValue = stat.numericValue;
              const duration = 2000; // 2 seconds
              const startTime = Date.now();
              
              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(easeOutQuart * targetValue);
                
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = currentValue;
                  return newCounters;
                });
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              
              // Stagger the animations slightly
              setTimeout(() => animate(), index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const clientLogos = [
    {
      name: "Dell",
      logo: "/lovable-uploads/f283a4cd-87ca-4e61-9b23-0a9e5be542d1.png"
    },
    {
      name: "NVIDIA Inception Program",
      logo: "/lovable-uploads/e8ce71fe-2100-4b9c-820d-289edc111666.png"
    },
    {
      name: "Nextechno Gen",
      logo: "/lovable-uploads/0ba7852e-f6c6-49ab-9055-53ba2f2bac01.png"
    },
    {
      name: "Pelorus",
      logo: "/lovable-uploads/c6c44a47-9cd6-4bc7-bed9-0f0378e9bc84.png"
    },
    {
      name: "Starlight Data Solutions",
      logo: "/lovable-uploads/0864af1f-909a-4426-8ea3-c5dabd0d4489.png"
    },
    {
      name: "Pi-Labs",
      logo: "/lovable-uploads/e540ef49-6d5c-4ae4-9b7e-e5eba814e2e0.png"
    }
  ];

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gray-50" id="impact">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* Pi-Labs Impact Section */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">The Pi-Labs Impact</h2>
          <p className="section-subtitle mx-auto">
            Transforming investigations and intelligence operations worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-4 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] text-center"
            >
              <div className="text-3xl font-bold text-pulse-500 mb-3">
                {formatDisplayValue(counters[index], index)}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clients and Partners Section */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">Trusted by Industry Leaders</h2>
          <p className="section-subtitle mx-auto">
            We are proud to work with leading organizations and partners worldwide
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 lg:space-x-16">
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 sm:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiLabsImpact;
