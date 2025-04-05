import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
//import TrustedBrands from './components/Brands';
import ServicesSection from "./components/Services";
import TrustedBrands from "./components/TrustedBrands";
import ExperienceSection from "./components/Experience";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/Form";
import StatsSection from "./components/Stats";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Navbar */}
      <div className="w-full fixed top-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with Padding to Prevent Overlapping */}
      <div className="pt-[4rem] lg:pt-[5rem]">
        <HeroSection />
      </div>

      {/* Trusted Brands Section */}
      <div className="mt-10">
        <TrustedBrands />
      </div>
      <div>
        <ServicesSection />
      </div>

      <div>
        <ExperienceSection />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <StatsSection />
      </div>

      <div>
        <ContactForm />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
