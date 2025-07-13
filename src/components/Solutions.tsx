import React, { useState, useRef, useCallback } from 'react';
import { Leaf, ArrowLeft, ArrowRight, Globe, Building, Users, Tv } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const solutions = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital strategies including SEO, SEM, social media marketing, content marketing, email campaigns, and analytics.',
    icon: Globe,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Outdoor Advertising',
    description: 'Strategic billboard placements, transit advertising, and other outdoor media to increase brand visibility in high-traffic areas.',
    icon: Building,
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Influencer Marketing',
    description: 'Partnerships with relevant influencers to amplify your brand message and reach new, engaged audiences authentically.',
    icon: Users,
    image: 'https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Traditional Media',
    description: 'Strategic television, radio, and print advertising campaigns designed to complement your digital marketing efforts.',
    icon: Tv,
    image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Solutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>();
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  }, []);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  }, []);
  
  return (
    <section 
      id="solutions" 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background leaf decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Leaf 
          className="absolute top-[10%] left-[10%] text-green-600 opacity-5 rotate-15"
          size={150}
        />
        <Leaf 
          className="absolute bottom-[10%] right-[10%] text-green-600 opacity-5 -rotate-15"
          size={150}
        />
      </div>
      
      <div className="container-section relative">
        {/* Section header */}
        <div className="section-title">
          <h2 className="text-green-600">Our Solutions</h2>
          <div className="leaf-divider">
            <Leaf className="w-8 h-8 text-green-600 mx-4" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            We offer tailored marketing solutions across multiple channels to ensure your brand reaches its target audience effectively.
          </p>
        </div>
        
        {/* Solutions slider */}
        <div 
          className={`mt-16 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative">
            {/* Slider */}
            <div 
              ref={sliderRef}
              className="overflow-hidden relative rounded-xl"
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out h-[500px]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {solutions.map((solution, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm p-6 md:p-8 rounded-xl max-w-2xl">
                        <div className="flex items-center mb-4">
                          <div className="bg-skin-primary rounded-full p-3 text-white mr-4">
                            <solution.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold">{solution.title}</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded-full p-3 shadow-md text-green-600 hover:bg-opacity-100 transition-all"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded-full p-3 shadow-md text-green-600 hover:bg-opacity-100 transition-all"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-skin-primary w-6' 
                      : 'bg-white/50 dark:bg-gray-600/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;