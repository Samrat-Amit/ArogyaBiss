
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import ServiceCard from '@/components/ui/service-card';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Video } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Text Therapy",
      description: "Connect through text messages for therapy that fits into your busy schedule. Ideal for those who express themselves better in writing.",
      icon: <MessageCircle size={24} />,
      priceOptions: [
        { duration: "30 mins", price: "199" },
        { duration: "60 mins", price: "249" }
      ],
      linkTo: "/services#text-therapy"
    },
    {
      title: "Call Therapy",
      description: "Voice-based therapy sessions over the phone. Perfect for when you need to hear a supportive voice during challenging times.",
      icon: <Phone size={24} />,
      priceOptions: [
        { duration: "30 mins", price: "299" },
        { duration: "60 mins", price: "399" }
      ],
      linkTo: "/services#call-therapy"
    },
    {
      title: "Video Therapy",
      description: "Face-to-face virtual sessions for a more personal connection. Ideal for comprehensive therapy with visual cues and expressions.",
      icon: <Video size={24} />,
      priceOptions: [
        { duration: "30 mins", price: "499" },
        { duration: "60 mins", price: "749" }
      ],
      linkTo: "/services#video-therapy"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Our Services" 
          subtitle="Flexible therapy options tailored to your comfort and needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              priceOptions={service.priceOptions}
              linkTo={service.linkTo}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
