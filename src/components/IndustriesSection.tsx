
import React from "react";
import { Shield, Building, AlertTriangle, Lock, Monitor, Zap } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      title: "Law Enforcement Agencies",
      description: "Accelerate investigations with AI-powered forensic tools and evidence analysis",
      icon: Shield
    },
    {
      title: "BFSI and Fintech",
      description: "Prevent financial fraud and secure digital transactions with advanced verification",
      icon: Building
    },
    {
      title: "National Security and Defence",
      description: "Protect against sophisticated threats with intelligence fusion and analysis",
      icon: AlertTriangle
    },
    {
      title: "Enterprise and Corporate Security",
      description: "Safeguard digital assets and maintain operational integrity",
      icon: Lock
    },
    {
      title: "Media, Journalism and Content Verification",
      description: "Verify authenticity of digital content and combat misinformation",
      icon: Monitor
    },
    {
      title: "Critical Infrastructure and Smart Cities",
      description: "Secure essential services and urban systems with intelligent monitoring",
      icon: Zap
    }
  ];

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 relative" 
      id="industries"
    >
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">Industries we serve</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] group text-center border border-white/20"
            >
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pulse-200 transition-colors">
                <industry.icon className="w-8 h-8 text-pulse-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {industry.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
