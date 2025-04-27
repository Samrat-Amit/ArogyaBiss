
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-arogya-teal/10 flex items-center justify-center mb-4">
        <Icon className="h-7 w-7 text-arogya-teal" />
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
