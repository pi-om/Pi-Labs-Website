
import React from "react";
import { ArrowRight, Shield, Video, Database, Lock, Mic } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      name: "Authentify",
      title: "Deepfake Detection Solution",
      description: "Advanced AI-powered deepfake detection for video, audio, and images",
      icon: Shield,
      href: "/pi-authentify",
      bgColor: "bg-blue-50",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
    },
    {
      name: "Sense",
      title: "AI-Driven Video Forensics",
      description: "Transform video evidence into actionable intelligence",
      icon: Video,
      href: "/pi-sense",
      bgColor: "bg-gray-50",
      image: "/lovable-uploads/ddcc5ea3-82f4-43a4-81fc-349521291ed2.png"
    },
    {
      name: "Scout",
      title: "AI-Powered Data Fusion and Analytics Platform",
      description: "Unify disparate data sources into actionable intelligence",
      icon: Database,
      href: "/pi-scout",
      bgColor: "bg-blue-50",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
    },
    {
      name: "SecureChain",
      title: "Blockchain-Based Digital Case and Evidence Management",
      description: "Secure, tamper-proof evidence management with blockchain technology",
      icon: Lock,
      href: "/pi-securechain",
      bgColor: "bg-gray-50"
    },
    {
      name: "Vox",
      title: "AI-powered Audio Intelligence",
      description: "Convert voice to verifiable intelligence with multilingual support",
      icon: Mic,
      href: "/pi-vox",
      bgColor: "bg-blue-50",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 pb-24 sm:pb-32 md:pb-40 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our products
          </h2>
        </div>

        {/* 3+2 Grid Layout */}
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {products.slice(0, 3).map((product, index) => (
              <div key={product.name} className={`${product.bgColor} rounded-3xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {React.createElement(product.icon, { className: "w-6 h-6 text-[#3355FF] mr-3" })}
                      <span className="text-xl font-bold text-[#3355FF]">{product.name}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-medium text-gray-700 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                    KNOW MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
                {product.image && (
                  <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
                    <img src={product.image} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.slice(3, 5).map((product, index) => (
              <div key={product.name} className={`${product.bgColor} rounded-3xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {React.createElement(product.icon, { className: "w-6 h-6 text-[#3355FF] mr-3" })}
                      <span className="text-xl font-bold text-[#3355FF]">{product.name}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-medium text-gray-700 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                    KNOW MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
                {product.image && (
                  <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
                    <img src={product.image} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
