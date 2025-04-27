
import React from 'react';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import WhySection from './why-section';
import ServicesSection from './services-section';
import TestimonialsSection from './testimonials-section';
import CTASection from './cta-section';
import Chatbot from '@/components/ui/chatbot';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Chatbot />
    </div>
  );
};

export default HomePage;
