import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Shield, Video, Database, Lock, Mic } from "lucide-react";

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextExiting, setIsTextExiting] = useState(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const textTimeoutRef = useRef<NodeJS.Timeout>();

  const products = [
    {
      name: "pi-authentify",
      title: "Deepfake Detection Solution",
      description: "Advanced AI-powered deepfake detection for video, audio, and images. Our cutting-edge technology uses sophisticated algorithms to identify manipulated content with high accuracy, helping organizations maintain trust and authenticity in their digital communications.",
      icon: Shield,
      href: "/pi-authentify",
      bgColor: "from-blue-600 to-blue-800",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
    },
    {
      name: "pi-sense",
      title: "AI-Driven Video Forensics",
      description: "Transform video evidence into actionable intelligence with our state-of-the-art forensic analysis tools. Extract insights, enhance quality, and uncover hidden details in video content for law enforcement and security applications.",
      icon: Video,
      href: "/pi-sense",
      bgColor: "from-purple-600 to-purple-800",
      image: "/scout_img.png"
    },
    {
      name: "pi-scout",
      title: "AI-Powered Data Fusion and Analytics Platform",
      description: "Unify disparate data sources into actionable intelligence with our comprehensive analytics platform. Leverage machine learning to discover patterns, correlations, and insights across complex datasets.",
      icon: Database,
      href: "/pi-scout",
      bgColor: "from-green-600 to-green-800",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
    },
    {
      name: "pi-securechain",
      title: "Blockchain-Based Digital Case and Evidence Management",
      description: "Secure, tamper-proof evidence management with blockchain technology. Ensure the integrity and authenticity of digital evidence throughout the investigation lifecycle with immutable record-keeping.",
      icon: Lock,
      href: "/pi-securechain",
      bgColor: "from-red-600 to-red-800",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
    },
    {
      name: "pi-vox",
      title: "AI-powered Audio Intelligence",
      description: "Convert voice to verifiable intelligence with multilingual support. Our advanced audio processing technology extracts meaningful insights from spoken content, supporting multiple languages and dialects.",
      icon: Mic,
      href: "/pi-vox",
      bgColor: "from-orange-600 to-orange-800",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setTimeout(() => {
        showSlider('next');
      }, 5000); // Change slide every 5 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const showSlider = (direction: 'next' | 'prev') => {
    if (isAnimating) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % products.length;
    } else {
      newIndex = (currentIndex - 1 + products.length) % products.length;
    }

    // Start text exit animation
    setIsTextExiting(true);
    setPendingIndex(newIndex);
    setIsAnimating(true);
    
    // Clear existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);

    // After exit animation, change content and start enter animation
    textTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTextExiting(false);
      setPendingIndex(null);
      
      // Reset animation state
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Allow time for enter animation
    }, 400); // Exit animation duration
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    // Start text exit animation
    setIsTextExiting(true);
    setPendingIndex(index);
    setIsAnimating(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);

    // After exit animation, change content and start enter animation
    textTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(index);
      setIsTextExiting(false);
      setPendingIndex(null);
      
      // Reset animation state
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Allow time for enter animation
    }, 400); // Exit animation duration
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="min-h-screen bg-white text-gray-900 relative overflow-hidden flex flex-col" id="products">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 flex-1 flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
        </div>

        {/* Main Layout Container */}
        <div className="flex-1 flex gap-6 max-w-7xl mx-auto w-full mb-8">
          
          {/* Main Product Display - Left Side */}
          <div className="flex-1 relative overflow-hidden rounded-2xl">
            <div className="relative w-full h-full min-h-[600px]">
              {/* Background Image */}
              {currentProduct.image && (
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-100"
                />
              )}
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                
                {/* Top Content */}
                <div className={`transition-opacity duration-500 ease-in-out ${
                  isTextExiting ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                    {currentProduct.title.split(' ').slice(0, 2).join(' ')}
                  </h1>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                      <img src="/Layer 2.svg" alt="pi labs" className="w-6 h-6 mr-2" />
                      <span className="text-xl font-bold text-white">
                        {currentProduct.name.replace('pi-', '').charAt(0).toUpperCase() + currentProduct.name.replace('pi-', '').slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className={`transition-opacity duration-500 ease-in-out delay-100 ${
                  isTextExiting ? 'opacity-0' : 'opacity-100'
                }`}>
                  <p className="text-lg text-gray-100 mb-6 leading-relaxed max-w-2xl">
                    {currentProduct.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={`/products${currentProduct.href}`}
                      className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center"
                    >
                      LEARN MORE
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation - Right Side */}
          <div className="w-80 flex flex-col gap-4">
            {products.map((product, index) => (
              <div
                key={product.name}
                onClick={() => goToSlide(index)}
                className={`relative cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${
                  index === currentIndex 
                    ? 'scale-105 ring-2 ring-blue-500 shadow-2xl' 
                    : 'scale-100 hover:scale-102 opacity-70 hover:opacity-100'
                } ${index === currentIndex ? 'h-56' : 'h-32'}`}
              >
                <div className={`w-full h-full ${index % 2 === 0 ? 'bg-[#8398FF]' : 'bg-[#ABABAB]'} relative`}>
                  
                  {/* Content Layout */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-center text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-2">
                      {React.createElement(product.icon, { 
                        className: `${index === currentIndex ? 'w-8 h-8' : 'w-6 h-6'} text-white transition-all duration-300` 
                      })}
                    </div>
                    
                    {/* Product Name */}
                    <div className="flex items-center justify-center mb-2">
                      <img src="/Layer 2.svg" alt="pi labs" className={`${index === currentIndex ? 'w-5 h-5' : 'w-4 h-4'} mr-1 transition-all duration-300`} />
                      <span className={`text-white font-bold transition-all duration-300 ${index === currentIndex ? 'text-base' : 'text-sm'}`}>
                        {product.name.replace('pi-', '').charAt(0).toUpperCase() + product.name.replace('pi-', '').slice(1)}
                      </span>
                    </div>
                    
                    {/* Main Description - One Line */}
                    <p className={`text-white/90 leading-tight line-clamp-1 transition-all duration-300 ${index === currentIndex ? 'text-sm' : 'text-xs'}`}>
                      {product.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
