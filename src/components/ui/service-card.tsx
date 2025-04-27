
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PriceOption {
  duration: string;
  price: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  priceOptions: PriceOption[];
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  priceOptions,
  linkTo
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 flex items-center">
        <div className="mr-4 text-arogya-teal">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-4 mb-6">
          {priceOptions.map((option, index) => (
            <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
              <span className="font-medium text-gray-700">{option.duration}</span>
              <span className="font-bold text-arogya-teal">₹{option.price}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <Link 
          to={linkTo} 
          className="btn-primary w-full flex justify-center items-center gap-2"
        >
          Book Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
