
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import ServiceCard from '@/components/ui/service-card';
import { MessageCircle, Phone, Video } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: "text-therapy",
      title: "Text Therapy",
      description: "Text therapy allows you to communicate with your therapist through written messages. It's ideal for those who express themselves better in writing or need flexibility in their therapy schedule. All sessions are recorded and kept confidential for your future reference.",
      icon: <MessageCircle size={24} />,
      priceOptions: [
        { duration: "30 mins", price: "199" },
        { duration: "60 mins", price: "249" }
      ],
      linkTo: "/contact"
    },
    {
      id: "call-therapy",
      title: "Call Therapy",
      description: "Voice-based therapy sessions over the phone provide the personal connection of hearing your therapist's voice. This option is perfect for when you need immediate support or prefer verbal communication. All calls are recorded and kept confidential for your future reference.",
      icon: <Phone size={24} />,
      priceOptions: [
        { duration: "30 mins", price: "299" },
        { duration: "60 mins", price: "399" }
      ],
      linkTo: "/contact"
    },
    {
      id: "video-therapy",
      title: "Video Therapy",
      description: "Face-to-face virtual sessions offer the most comprehensive therapy experience with visual cues and expressions. Video therapy creates a personal connection similar to in-person sessions from the comfort of your home. All sessions are recorded and kept confidential for your future reference.",
      icon: <Video size={24} />,
      priceOptions: [
        { duration: "30 mins", price: "499" },
        { duration: "60 mins", price: "749" }
      ],
      linkTo: "/contact"
    }
  ];

  // Therapy session visuals
  const visuals = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs and goals",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Meditation Practice",
      description: "Guided meditation sessions to help calm the mind and reduce stress",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop"
    },
    {
      title: "Nature Therapy",
      description: "Connecting with nature to enhance mental well-being and inner peace",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-arogya-teal to-arogya-blue py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Flexible and personalized therapy options to support your mental wellness journey
          </p>
        </div>
      </div>
      
      {/* Free Consultation Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Start with a Free 15-Minute Consultation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We believe in finding the right fit for your therapeutic journey. That's why we offer a complimentary 
              15-minute initial consultation to understand your needs and determine how we can best support you.
            </p>
            <a 
              href="#services-list" 
              className="btn-primary inline-flex items-center"
            >
              Explore Our Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section id="services-list" className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Therapy Options" 
            subtitle="Choose the therapy format that works best for you"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className="scroll-mt-24"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  priceOptions={service.priceOptions}
                  linkTo={service.linkTo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Therapy Session Visuals */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="What to Expect" 
            subtitle="A glimpse into your therapy journey with Arogya Bliss"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visuals.map((visual, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={visual.image} 
                    alt={visual.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{visual.title}</h3>
                  <p className="text-gray-600">{visual.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              All sessions are recorded and kept confidential for your future reference and growth tracking.
            </p>
            <a href="/contact" className="btn-primary">
              Book Your Session Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
