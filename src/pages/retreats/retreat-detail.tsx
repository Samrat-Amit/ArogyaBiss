
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { retreats } from '@/data/retreats';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CalendarDays, Check, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const RetreatDetail = () => {
  const { retreatId } = useParams<{ retreatId: string }>();
  const retreat = retreats.find(r => r.id === retreatId);

  if (!retreat) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Retreat Not Found</h1>
        <p className="text-gray-600 mb-6">The retreat you're looking for doesn't exist or may have been removed.</p>
        <Link to="/retreats" className="btn-primary inline-block">
          Back to Retreats
        </Link>
      </div>
    );
  }

  // Convert icon string to Lucide icon component
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      mountain: <MapPin className="h-6 w-6" />,
      brain: <div className="h-6 w-6 flex items-center justify-center">🧠</div>,
      yoga: <div className="h-6 w-6 flex items-center justify-center">🧘</div>,
      utensils: <div className="h-6 w-6 flex items-center justify-center">🍽️</div>,
      tree: <div className="h-6 w-6 flex items-center justify-center">🌲</div>,
      spa: <div className="h-6 w-6 flex items-center justify-center">💆</div>,
      headphones: <div className="h-6 w-6 flex items-center justify-center">🎧</div>,
      coffee: <div className="h-6 w-6 flex items-center justify-center">☕</div>,
      droplets: <div className="h-6 w-6 flex items-center justify-center">💧</div>,
      bed: <div className="h-6 w-6 flex items-center justify-center">🛌</div>,
      compass: <div className="h-6 w-6 flex items-center justify-center">🧭</div>,
      flame: <div className="h-6 w-6 flex items-center justify-center">🔥</div>,
      music: <div className="h-6 w-6 flex items-center justify-center">🎵</div>,
      users: <div className="h-6 w-6 flex items-center justify-center">👥</div>,
      sun: <div className="h-6 w-6 flex items-center justify-center">☀️</div>,
      wind: <div className="h-6 w-6 flex items-center justify-center">💨</div>,
      pencil: <div className="h-6 w-6 flex items-center justify-center">✏️</div>,
    };
    
    return iconMap[iconName] || <Check className="h-6 w-6" />;
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${retreat.image})`,
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
          <div className="container-custom pb-12">
            <Link 
              to="/retreats" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Retreats
            </Link>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {retreat.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap gap-4 items-center text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                {retreat.location}
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-1" />
                {retreat.duration}
              </div>
              <div className="inline-block px-4 py-2 bg-arogya-teal/80 text-white rounded-full text-sm font-medium">
                {retreat.price} per person
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Retreat Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column: Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <SectionHeading 
                  title="About This Retreat" 
                  centered={false}
                  className="mb-8"
                />
                <p className="text-gray-700 leading-relaxed mb-10">{retreat.longDescription}</p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h3>
                <div className="space-y-8">
                  {retreat.itinerary.map((day, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-semibold text-arogya-teal mb-4">{day.day}</h4>
                      <ul className="space-y-3">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {retreat.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-arogya-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Right column: Highlights and booking */}
            <div>
              <motion.div
                className="bg-white shadow-md rounded-xl overflow-hidden sticky top-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-6 bg-arogya-teal text-white">
                  <h3 className="text-xl font-bold mb-2">Book This Retreat</h3>
                  <p className="opacity-90">Experience transformation in {retreat.location}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-2xl font-bold text-gray-800 mb-1">{retreat.price}</p>
                  <p className="text-gray-500 mb-6">per person</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-arogya-teal mr-3" />
                      <span className="text-gray-700">{retreat.location}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="h-5 w-5 text-arogya-teal mr-3" />
                      <span className="text-gray-700">{retreat.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-arogya-teal mr-3" />
                      <span className="text-gray-700">Multiple sessions daily</span>
                    </div>
                  </div>
                  
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-arogya-teal hover:bg-arogya-teal/90">
                      Book Now
                    </Button>
                  </Link>
                </div>
                
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-800 mb-4">Key Highlights</h4>
                  <div className="space-y-4">
                    {retreat.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-arogya-teal/10 text-arogya-teal p-2 rounded-full mr-3">
                          {getIcon(highlight.icon)}
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">{highlight.title}</h5>
                          <p className="text-sm text-gray-600">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Healing Journey?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Spaces for our retreats fill quickly. Secure your spot today and take the first step toward renewed mental wellness and inner peace.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-arogya-teal hover:bg-arogya-teal/90">
                  Book This Retreat
                </Button>
              </Link>
              <Link to="/retreats">
                <Button variant="outline">
                  Explore Other Retreats
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RetreatDetail;
