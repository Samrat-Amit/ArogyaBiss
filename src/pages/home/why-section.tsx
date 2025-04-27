
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import FeatureCard from '@/components/ui/feature-card';
import { Heart, Smile, Shield, Clock, Users, MessageCircle } from 'lucide-react';

const WhySection = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Experience therapy with empathy and understanding in a judgment-free environment."
    },
    {
      icon: Shield,
      title: "Safe Space",
      description: "Your privacy and comfort are our priority, with complete confidentiality guaranteed."
    },
    {
      icon: Smile,
      title: "Holistic Approach",
      description: "We address mental, emotional, and spiritual aspects for complete wellbeing."
    },
    {
      icon: Clock,
      title: "Flexible Sessions",
      description: "Choose from text, call, or video therapy based on your comfort and needs."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join retreats and group sessions to connect with like-minded individuals."
    },
    {
      icon: MessageCircle,
      title: "Continuous Support",
      description: "Stay connected through follow-ups and resources between sessions."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Why Arogya Bliss?" 
          subtitle="Discover what makes our approach to mental wellness unique and effective"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
