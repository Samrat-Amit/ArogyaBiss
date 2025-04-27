
import React, { useState } from 'react';
import SectionHeading from '@/components/ui/section-heading';
import VideoCard from '@/components/ui/video-card';
import VideoPlayer from '@/components/ui/video-player';
import { Button } from '@/components/ui/button';
import { meditationVideos, categories } from '@/data/meditation-videos';
import { cn } from '@/lib/utils';

const MeditationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(meditationVideos[0]);

  const filteredVideos = selectedCategory === "All"
    ? meditationVideos
    : meditationVideos.filter(video => video.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-arogya-teal-dark to-arogya-blue py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meditation & Self-Help</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Browse through our curated collection of meditation videos for peace, focus, and well-being
          </p>
        </div>
      </div>
      
      {/* Categories Filter */}
      <div className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full",
                  selectedCategory === category && "bg-arogya-teal hover:bg-arogya-teal/90"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Video Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Video"
            subtitle={selectedVideo.description}
          />
          
          <div className="max-w-4xl mx-auto mb-8">
            <VideoPlayer
              videoUrl={selectedVideo.videoUrl}
              title={selectedVideo.title}
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedVideo.title}</h3>
            <p className="text-gray-600">{selectedVideo.duration}</p>
          </div>
        </div>
      </section>
      
      {/* Video Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Browse Videos"
            subtitle="Explore our collection of guided meditations and relaxation videos"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              >
                <VideoCard
                  id={video.id}
                  title={video.title}
                  category={video.category}
                  duration={video.duration}
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm max-w-3xl mx-auto">
            <p className="text-gray-600 text-center">
              Our meditation videos are carefully curated to help you find peace, focus, and relaxation. 
              New content is added regularly to support your mindfulness journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeditationPage;
