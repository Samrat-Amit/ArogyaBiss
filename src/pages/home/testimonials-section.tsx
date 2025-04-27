
import React, { useState } from 'react';
import SectionHeading from '@/components/ui/section-heading';
import TestimonialCard from '@/components/ui/testimonial-card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Mr. Samrat helped me overcome my anxiety through his thoughtful therapy approach. The sessions were comfortable and I felt genuinely heard for the first time.",
      name: "Rahul S.",
      location: "Mumbai, Maharashtra",
      rating: 5
    },
    {
      text: "The retreat in Shimla was life-changing. The combination of therapy, yoga, and meditation in the mountains gave me a new perspective on my mental health.",
      name: "Priya K.",
      location: "Delhi, NCR",
      rating: 5
    },
    {
      text: "I was skeptical about text therapy at first, but it turned out to be exactly what I needed. Being able to express myself in writing helped me process my emotions better.",
      name: "Anand M.",
      location: "Bangalore, Karnataka",
      rating: 5
    },
    {
      text: "After struggling with depression for years, the personalized care at Arogya Bliss has been transformative. Mr. Samrat's approach is both professional and deeply compassionate.",
      name: "Meera J.",
      location: "Kolkata, West Bengal",
      rating: 5
    },
    {
      text: "The video therapy sessions have been incredibly convenient. I get the same quality of care from the comfort of my home, which has been essential during difficult times.",
      name: "Vikram P.",
      location: "Chennai, Tamil Nadu",
      rating: 5
    },
    {
      text: "The meditation videos on the website have become part of my daily routine. They've helped me maintain the progress I made during my therapy sessions.",
      name: "Neha T.",
      location: "Pune, Maharashtra",
      rating: 4
    },
    {
      text: "As someone dealing with work stress, the call therapy option fits perfectly into my schedule. Mr. Samrat's voice is calming and his guidance practical.",
      name: "Rajesh D.",
      location: "Hyderabad, Telangana",
      rating: 5
    },
    {
      text: "Arogya Bliss truly lives up to its name. The holistic approach to mental wellness has brought a sense of peace I hadn't experienced in years.",
      name: "Kavita S.",
      location: "Jaipur, Rajasthan",
      rating: 5
    },
    {
      text: "The articles on the website are insightful and practical. They complement the therapy sessions by providing resources I can refer to anytime.",
      name: "Arjun R.",
      location: "Ahmedabad, Gujarat",
      rating: 5
    },
    {
      text: "I appreciate how Mr. Samrat tailored the therapy to my specific needs. It wasn't a one-size-fits-all approach, which made all the difference in my recovery.",
      name: "Sunita P.",
      location: "Lucknow, Uttar Pradesh",
      rating: 5
    }
  ];
  
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 4;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const visibleTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="Read what our clients have to say about their experiences with Arogya Bliss"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <TestimonialCard
                text={testimonial.text}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-arogya-teal w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
