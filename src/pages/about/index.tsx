
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { Heart, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-arogya-blue-dark to-arogya-teal py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Arogya Bliss</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Our story, mission, and vision to create a mentally stronger society
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                centered={false}
              />
              <p className="text-gray-600 mb-6">
                Arogya Bliss was founded in 2023 by Mr. Samrat in Bokaro Steel City, Jharkhand. Having experienced the 
                transformative power of therapy firsthand, Mr. Samrat recognized the need for accessible mental health 
                services in India.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small practice has grown into a comprehensive mental wellness platform, offering various 
                therapy formats, retreats, and educational resources. For over a year, we have been privileged to be part 
                of hundreds of healing journeys.
              </p>
              <p className="text-gray-600">
                At Arogya Bliss, we believe in treating the whole person—mind, body, and spirit. We combine modern 
                therapeutic techniques with traditional wellness practices to provide a holistic approach to mental health.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/AB Logo.jpeg" 
                  alt="Arogya Bliss Logo" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-arogya-teal/20 blur-xl"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-arogya-aqua/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-full bg-arogya-teal/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-arogya-teal" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                "To help people feel seen, heard, and mentally at peace. We strive to create a safe space 
                where individuals can explore their emotions, heal from past trauma, and develop the skills 
                needed for lasting mental wellness."
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-full bg-arogya-teal/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-arogya-teal" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                "To build a safer, mentally strong society where seeking help for mental health is normalized 
                and accessible to all. We envision a world where everyone has the tools and support needed to 
                maintain their mental wellbeing."
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-full bg-arogya-teal/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-arogya-teal" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li><span className="font-medium">Compassion:</span> We approach every interaction with empathy and understanding</li>
                <li><span className="font-medium">Safety:</span> Creating a secure environment for healing is our priority</li>
                <li><span className="font-medium">Integrity:</span> We uphold the highest professional and ethical standards</li>
                <li><span className="font-medium">Growth:</span> We believe in continuous development and learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Founder" 
            subtitle="The driving force behind Arogya Bliss"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mr. Samrat</h3>
              <p className="text-gray-500 mb-6">Founder & Therapist</p>
              
              <p className="text-gray-600 mb-4">
                Mr. Samrat is a dedicated mental health professional with a passion for helping others find their 
                path to wellbeing. With a background in psychology and specialized training in various therapeutic 
                modalities, he brings a wealth of knowledge and experience to Arogya Bliss.
              </p>
              
              <p className="text-gray-600 mb-4">
                His approach combines evidence-based therapy techniques with holistic wellness practices, recognizing 
                that true healing encompasses the mind, body, and spirit. Mr. Samrat is particularly skilled at creating 
                a safe, non-judgmental space where clients feel comfortable expressing themselves.
              </p>
              
              <p className="text-gray-600 mb-6">
                Beyond one-on-one therapy, he is passionate about community education and destigmatizing mental health. 
                Through Arogya Bliss, he aims to make mental wellness resources accessible to more people across India.
              </p>
              
              <Link to="/contact" className="btn-primary inline-block">
                Book a Session
              </Link>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
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
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-arogya-teal to-arogya-blue rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start a Safe Conversation Now</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Take the first step towards mental wellbeing. Reach out for a free 15-minute consultation 
                with Mr. Samrat and begin your healing journey.
              </p>
              <Link to="/contact" className="bg-white text-arogya-teal hover:bg-white/90 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
