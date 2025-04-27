
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  category,
  excerpt,
  date,
  readTime,
  image
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300">
      {image && (
        <Link to={`/articles/${id}`} className="image-hover-zoom h-48 block">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </Link>
      )}
      
      <div className="p-6 flex-grow">
        <span className="inline-block px-3 py-1 bg-arogya-teal/10 text-arogya-teal rounded-full text-xs font-medium mb-3">
          {category}
        </span>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-arogya-teal transition-colors">
          <Link to={`/articles/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center text-gray-500 text-sm mt-auto">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
