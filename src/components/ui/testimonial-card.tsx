
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  name: string;
  location: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  text, 
  name, 
  location,
  rating = 5
}) => {
  return (
    <div className="testimonial-card">
      <Quote className="h-8 w-8 text-arogya-teal mb-4" />
      <p className="text-gray-600 mb-6 italic">{text}</p>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
