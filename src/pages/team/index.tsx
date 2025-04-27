
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone } from 'lucide-react';

const TeamPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-arogya-teal to-arogya-blue py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the dedicated professional behind Arogya Bliss
          </p>
        </div>
      </div>
      
      {/* Team Member Profile */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header with background */}
              <div className="h-48 bg-gradient-to-r from-arogya-teal to-arogya-blue relative">
                <div className="absolute -bottom-20 left-8">
                  <div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden">
                    <img 
                      src="/Samrat.jpeg" 
                      alt="Mr. Samrat" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-24 pb-8 px-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Mr. Samrat</h2>
                  <p className="text-arogya-teal font-medium">Founder & Therapist</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Biography</h3>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Mr. Samrat is the visionary founder of Arogya Bliss, a mental wellness center based in 
                        Bokaro Steel City, Jharkhand. With a deep commitment to helping others achieve mental 
                        balance and emotional wellbeing, he has dedicated his career to providing accessible 
                        therapy services.
                      </p>
                      <p>
                        His therapeutic approach combines modern psychological techniques with traditional 
                        mindfulness practices, creating a unique blend that addresses the whole person. Mr. Samrat 
                        specializes in anxiety management, depression, relationship issues, and personal growth.
                      </p>
                      <p>
                        Beyond his clinical work, Mr. Samrat is passionate about mental health education and 
                        advocacy. He regularly conducts workshops and retreats aimed at teaching practical mental 
                        wellness techniques and breaking the stigma surrounding mental health issues in India.
                      </p>
                      <p>
                        Arogya Bliss reflects his belief that everyone deserves to be heard and valued on their 
                        journey toward mental wellbeing. The center has helped hundreds of clients over the past 
                        year through individual therapy, group sessions, and transformative retreats.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Contact Information</h3>
                    <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-arogya-teal mr-3" />
                        <a href="tel:+917050525808" className="text-gray-600 hover:text-arogya-teal transition-colors">
                          +91 70505 25808
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-arogya-teal mr-3" />
                        <a href="mailto:samrat@arogyabliss.com" className="text-gray-600 hover:text-arogya-teal transition-colors">
                          samrat@arogyabliss.com
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-arogya-teal mr-3 mt-1" />
                        <div className="text-gray-600">
                          <p>Monday - Saturday</p>
                          <p>9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link 
                        to="/contact" 
                        className="btn-primary w-full flex justify-center items-center"
                      >
                        Book a Session
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
