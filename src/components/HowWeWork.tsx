import React from 'react';
import { Leaf, Search, BarChart4, Lightbulb, Send } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const steps = [
  {
    title: 'Understand',
    description: 'We begin by deeply understanding your business goals, target audience, and current market position to establish a solid foundation for our strategy.',
    icon: Search
  },
  {
    title: 'Analyze',
    description: 'Our team analyzes your competitive landscape, identifies growth opportunities, and determines the most effective channels for your budget and objectives.',
    icon: BarChart4
  },
  {
    title: 'Align',
    description: 'We develop a comprehensive marketing strategy aligned with your business goals and budget constraints, establishing clear KPIs for success measurement.',
    icon: Lightbulb
  },
  {
    title: 'Execute',
    description: 'Our team handles end-to-end campaign execution, from creative development to media buying and performance tracking for optimal results.',
    icon: Send
  }
];

const HowWeWork = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>();
  
  return (
    <section 
      id="how-we-work" 
      ref={sectionRef}
      className="relative bg-gray-50 dark:bg-gray-900/50 py-20 md:py-32 overflow-hidden"
    >
      {/* Background leaf decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Leaf 
          className="absolute top-0 left-[30%] text-green-600 opacity-5 rotate-45"
          size={150}
        />
        <Leaf 
          className="absolute bottom-0 right-[30%] text-green-600 opacity-5 -rotate-45"
          size={150}
        />
      </div>
      
      <div className="container-section relative">
        {/* Section header */}
        <div className="section-title">
          <h2 className="text-green-600">How We Work</h2>
          <div className="leaf-divider">
            <Leaf className="w-8 h-8 text-green-600 mx-4" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            Our strategic approach ensures that every marketing initiative is rooted in data, aligned with your goals, and designed for sustainable growth.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-skin-primary transform md:translate-x-[-50%] hidden md:block"></div>
          
          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row md:justify-between items-start md:items-center relative mb-12 transition-all duration-1000 delay-${index * 200} ${
                  isSectionVisible 
                    ? 'opacity-100' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-3'}`}>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                
                {/* Icon */}
                <div className="bg-skin-primary rounded-full p-4 text-white z-10 mt-4 md:mt-0 md:order-2">
                  <step.icon className="w-8 h-8" />
                </div>
                
                {/* Empty div for alignment */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#solutions" className="btn btn-primary">
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;