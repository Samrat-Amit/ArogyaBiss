
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionHeading 
              title="About Arogya Bliss" 
              centered={false}
            />
            <p className="text-gray-600 mb-6">
              Arogya Bliss is a sanctuary for mental wellness founded by Mr. Samrat in Bokaro Steel City, Jharkhand. 
              For over a year, we have been providing a safe space for individuals seeking mental peace and emotional balance.
            </p>
            <p className="text-gray-600 mb-6">
              At Arogya Bliss, we believe that every person deserves to be heard and valued. Our approach combines 
              modern therapeutic techniques with traditional wellness practices to help you achieve holistic mental wellbeing.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center w-32">
                <span className="text-3xl font-bold text-arogya-teal">1000+</span>
                <span className="text-gray-600 text-sm">Sessions Done</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center w-32">
                <span className="text-3xl font-bold text-arogya-teal">100+</span>
                <span className="text-gray-600 text-sm">Clients Helped</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center w-32">
                <span className="text-3xl font-bold text-arogya-teal">5+</span>
                <span className="text-gray-600 text-sm">Retreats Hosted</span>
              </div>
            </div>
            <Link to="/about" className="btn-primary mt-8 inline-block">
              Learn More
            </Link>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl animate-float">
              <img 
                src="/Samrat.jpeg" 
                alt="Mr. Samrat - Founder of Arogya Bliss" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-arogya-aqua/20 blur-xl"></div>
            <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-arogya-teal/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
