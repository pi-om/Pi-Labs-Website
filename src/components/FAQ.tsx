import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "What does pi-labs specialize in?",
      answer: "pi-labs specializes in AI-driven cybersecurity and digital forensics solutions. Our key offerings include deepfake detection, data fusion and analytics, video and audio forensics, and blockchain-based evidence management—empowering organizations to detect threats, secure evidence, and accelerate investigations with technology."
    },
    {
      question: "How does pi-labs help in detecting deepfakes?",
      answer: "Our deepfake detection platform, Authentify, uses advanced AI to analyze video, audio, and images for signs of manipulation. It supports multi-format analysis and integrates seamlessly into enterprise and law enforcement workflows, ensuring high-accuracy detection of synthetic media before it can cause harm."
    },
    {
      question: "Who can benefit from pi-labs' AI-powered investigation tools?",
      answer: "pi-labs' solutions are designed for law enforcement agencies, intelligence units, financial institutions, government bodies, and enterprises. Whether it's securing identity verification, preventing fraud, or conducting complex investigations, our tools are tailored for critical use cases across industries."
    },
    {
      question: "What makes pi-labs different from other cybersecurity companies?",
      answer: "pi-labs combines AI innovation with forensic-grade precision. Unlike traditional cybersecurity providers, we offer specialized platforms for deepfake detection, blockchain-based evidence tracking, and audio/video forensic intelligence, making us a trusted partner in safeguarding digital truth and operational integrity."
    },
    {
      question: "How does pi-labs ensure the integrity of digital evidence?",
      answer: "Our solution, Securechain, leverages blockchain to create a tamper-proof chain of custody for digital evidence. It guarantees authenticity from collection to courtroom, making it ideal for legal, forensic, and regulatory environments that require verified and auditable digital records."
    },
    {
      question: "Can pi-labs' solutions integrate with existing enterprise systems?",
      answer: "Yes. All pi-labs products are enterprise-ready and API-integrated, designed to work seamlessly with existing workflows. Our tools support rapid deployment, scalability, and easy integration for smooth onboarding and operational use."
    },
    {
      question: "How does pi-labs support investigations for law enforcement and intelligence agencies?",
      answer: "With tools like pi-scout, pi-sense and pi-vox, we empower agencies to analyze vast volumes of structured and unstructured data, detect video tampering, uncover hidden patterns, and generate actionable intelligence—significantly reducing time-to-resolution in high-stakes investigations."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="faq">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Get answers to the most common questions about pi-labs and our AI-driven solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-pulse-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-pulse-600" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
