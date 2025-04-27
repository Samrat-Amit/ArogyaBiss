
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import RetreatCard from '@/components/ui/retreat-card';
import { MapPin, Calendar, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { retreats } from '@/data/retreats';
import { motion } from 'framer-motion';

const RetreatsPage = () => {
  // Get the featured retreat (first one in the list)
  const featuredRetreat = retreats[0];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-arogya-blue to-arogya-teal py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Healing Retreats
          </motion.h1>
          <motion.p 
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Immersive experiences in serene locations designed to reconnect you with yourself and accelerate your healing journey
          </motion.p>
        </div>
      </div>
      
      {/* Featured Retreat */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Featured Retreat" 
            subtitle="Experience our most popular healing journey"
          />
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={featuredRetreat.image} 
                alt={featuredRetreat.title} 
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{featuredRetreat.title}</h3>
              
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-arogya-teal" />
                  <span>{featuredRetreat.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-arogya-teal" />
                  <span>{featuredRetreat.duration}</span>
                </div>
                
                <div className="inline-block px-4 py-2 bg-arogya-teal/10 text-arogya-teal rounded-full text-sm font-medium mb-2">
                  {featuredRetreat.price} per person
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{featuredRetreat.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Highlights:</h4>
              <ul className="space-y-2 mb-6">
                {featuredRetreat.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{highlight.description}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={`/retreats/${featuredRetreat.id}`} className="btn-primary inline-flex items-center">
                View Complete Itinerary
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* All Retreats */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Upcoming Retreats" 
            subtitle="Find the perfect retreat for your healing journey"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((retreat) => (
              <motion.div
                key={retreat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <RetreatCard 
                  id={retreat.id}
                  title={retreat.title}
                  location={retreat.location}
                  duration={retreat.duration}
                  price={retreat.price}
                  image={retreat.image}
                  description={retreat.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="What's Included" 
            subtitle="Each retreat is carefully designed to provide a comprehensive healing experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-arogya-teal/10 text-arogya-teal w-10 h-10 flex items-center justify-center rounded-full mr-3">1</span>
                Therapeutic Services
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Individual therapy sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Group therapy activities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Art and music therapy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Journaling and self-reflection</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-arogya-teal/10 text-arogya-teal w-10 h-10 flex items-center justify-center rounded-full mr-3">2</span>
                Wellness Activities
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Daily yoga and meditation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Nature walks and hikes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Breathwork and relaxation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sound healing sessions</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-arogya-teal/10 text-arogya-teal w-10 h-10 flex items-center justify-center rounded-full mr-3">3</span>
                Accommodation & Meals
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comfortable accommodation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Nutritious vegetarian meals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Herbal teas and refreshments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Return transportation from meeting point</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Inquire About Retreats
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetreatsPage;
