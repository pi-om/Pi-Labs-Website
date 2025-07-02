import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PiLabsImpact from "@/components/PiLabsImpact";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQ from "@/components/FAQ";
import BlogsShowcaseSection from "@/components/BlogsShowcaseSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href")?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Reduced offset to account for shorter header
        const offset = window.innerWidth < 768 ? 80 : 60;

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      });
    });
  }, []);

  useEffect(() => {
    // Scroll to top when landing on homepage
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PiLabsImpact />
        <div className="bg-white">
          <ProductsSection />
        </div>
        <IndustriesSection />
        <div className="bg-gray-50">
          <BlogsShowcaseSection />
        </div>
        <div className="bg-white">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
