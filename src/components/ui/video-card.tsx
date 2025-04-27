
import React from 'react';
import { PlayCircle } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  category,
  duration,
  thumbnail,
  videoUrl
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow flex flex-col h-full">
      {/* Video thumbnail with play button */}
      <div className="relative aspect-video group cursor-pointer">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
          <PlayCircle className="h-14 w-14 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 text-xs rounded">
          {duration}
        </span>
      </div>
      
      <div className="p-5">
        <span className="inline-block px-2 py-0.5 bg-arogya-aqua/10 text-arogya-aqua rounded-full text-xs font-medium mb-2">
          {category}
        </span>
        
        <h3 className="text-lg font-medium text-gray-800 line-clamp-2 hover:text-arogya-teal transition-colors">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
