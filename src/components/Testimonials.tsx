
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Pi-Labs' deepfake detection technology has been instrumental in securing our digital evidence integrity. The accuracy and speed of analysis have transformed our investigation capabilities.",
  author: "Detective Sarah Chen",
  role: "Digital Forensics Unit",
  company: "Metropolitan Police Department"
}, {
  content: "The AI-powered video analytics from Pi-Labs helped us prevent a major fraud attempt. Their technology identified sophisticated deepfakes that would have fooled traditional systems.",
  author: "Michael Rodriguez",
  role: "Chief Security Officer",
  company: "Global Financial Services"
}, {
  content: "Pi-Labs' evidence management platform has streamlined our entire workflow. The blockchain-based security gives us complete confidence in chain of custody.",
  author: "Dr. Amara Patel",
  role: "Senior Forensic Analyst",
  company: "Federal Bureau of Investigation"
}, {
  content: "As a cybersecurity firm, we rely on Pi-Labs' cutting-edge AI solutions to stay ahead of emerging threats. Their technology is simply unmatched in the industry.",
  author: "Jason Lee",
  role: "CEO",
  company: "CyberShield Solutions"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  company
}: TestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] group border border-gray-100">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-pulse-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6 italic">
          "{content}"
        </p>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <h4 className="font-semibold text-gray-900 mb-1">{author}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-pulse-600 font-medium">{company}</p>
      </div>
    </div>
  );
};
const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by law enforcement, enterprises, and cybersecurity professionals worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
