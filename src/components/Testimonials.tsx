import React, { useState } from 'react';
import { Leaf, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: "Vishnuspire transformed our marketing approach with their strategic insights. Their budget-based planning helped us achieve a 40% increase in lead generation while actually reducing our overall spend.",
    author: "Sarah Johnson",
    title: "Marketing Director, TechVision Corp",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Their multi-channel approach breathed new life into our brand. The team's creativity and attention to detail helped us stand out in a crowded market and connect with our audience in meaningful ways.",
    author: "Michael Chen",
    title: "CEO, Innovate Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Working with Vishnuspire has been a game-changer for our retail business. Their strategic approach to audience segmentation helped us target the right customers at the right time, resulting in a 35% increase in sales.",
    author: "Emma Rodriguez",
    title: "Brand Manager, Urban Style Co.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>();
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative bg-gray-50 dark:bg-gray-900/50 py-20 md:py-32 overflow-hidden"
    >
      {/* Background leaf decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Leaf 
          className="absolute top-0 right-0 text-green-600 opacity-5 rotate-45"
          size={200}
        />
        <Leaf 
          className="absolute bottom-0 left-0 text-green-600 opacity-5 -rotate-45"
          size={200}
        />
      </div>
      
      <div className="container-section relative">
        {/* Section header */}
        <div className="section-title">
          <h2 className="text-green-600">Client Testimonials</h2>
          <div className="leaf-divider">
            <Leaf className="w-8 h-8 text-green-600 mx-4" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            Don't just take our word for it. Hear what our clients have to say about their experience working with Vishnuspire.
          </p>
        </div>
        
        {/* Testimonials slider */}
        <div 
          className={`mt-16 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Large quote icon */}
            <div className="absolute -top-12 left-0 text-green-600 opacity-20">
              <Quote size={80} />
            </div>
            
            {/* Testimonial slider */}
            <div className="relative overflow-hidden">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                  display: 'flex' 
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Author image */}
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-skin-primary">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Content */}
                        <div>
                          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.author}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-md text-green-600 hover:bg-skin-primary hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Indicators */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index 
                        ? 'bg-skin-primary w-6' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-md text-green-600 hover:bg-skin-primary hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;