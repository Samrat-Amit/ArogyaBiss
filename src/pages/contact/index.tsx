
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { Mail, Phone, MapPin, Calendar, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-arogya-teal-dark to-arogya-blue py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Start a Conversation</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Reach out to us for appointments, questions, or to begin your healing journey
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arogya-teal"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arogya-teal"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arogya-teal"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arogya-teal"
                  >
                    <option value="">Select a Service</option>
                    <option value="text-therapy">Text Therapy</option>
                    <option value="call-therapy">Call Therapy</option>
                    <option value="video-therapy">Video Therapy</option>
                    <option value="retreat">Retreats</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arogya-teal"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    I consent to having my information stored and used to be contacted by Arogya Bliss.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full md:w-auto px-8"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-md mb-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-arogya-teal/10 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-arogya-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <a href="tel:+917050525808" className="text-gray-600 hover:text-arogya-teal transition-colors">
                        +91 70505 25808
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-arogya-teal/10 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-arogya-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <a href="mailto:contact@arogyabliss.com" className="text-gray-600 hover:text-arogya-teal transition-colors">
                        contact@arogyabliss.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-arogya-teal/10 flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-arogya-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Location</h3>
                      <p className="text-gray-600">
                        Bokaro Steel City, Jharkhand, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-arogya-teal/10 flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-arogya-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Book a Consultation Box */}
              <div className="bg-arogya-teal text-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-semibold">Free 15-Minute Consultation</h3>
                </div>
                <p className="mb-6">
                  Start your healing journey with a complimentary 15-minute consultation to discuss your needs and how we can help.
                </p>
                <a 
                  href="https://wa.me/917050525808?text=I'd%20like%20to%20book%20a%20free%20consultation%20with%20Arogya%20Bliss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-arogya-teal hover:bg-white/90 font-bold py-3 px-6 rounded-full transition-all duration-300 inline-block shadow-lg"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
