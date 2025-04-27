
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-arogya-teal-light via-arogya-teal to-arogya-blue py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            You're Heard, You're Valued
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            Begin your journey to mental wellness and inner peace with Arogya Bliss. 
            We provide professional therapy, life-changing retreats, and resources 
            for your mental wellbeing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="bg-white text-arogya-teal hover:bg-white/90 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
