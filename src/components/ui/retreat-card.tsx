
import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RetreatCardProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
}

const RetreatCard: React.FC<RetreatCardProps> = ({
  id,
  title,
  location,
  duration,
  price,
  image,
  description
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow flex flex-col h-full">
      {/* Image container with hover effect */}
      <Link to={`/retreats/${id}`} className="image-hover-zoom h-56 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-arogya-teal text-white px-3 py-1 rounded-full text-sm font-medium">
          {price}
        </div>
      </Link>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          <Link to={`/retreats/${id}`} className="hover:text-arogya-teal transition-colors">
            {title}
          </Link>
        </h3>
        
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4 text-arogya-teal" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4 text-arogya-teal" />
            <span>{duration}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
      </div>
      
      <div className="p-6 pt-0">
        <Link 
          to={`/retreats/${id}`} 
          className="btn-primary w-full flex justify-center items-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RetreatCard;
