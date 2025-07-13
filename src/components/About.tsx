import React, { useEffect } from 'react';
import { Leaf, Users, LineChart, Target, Award } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useCountUp from '../hooks/useCountUp';

const About = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>();
  const [statsRef, isStatsVisible] = useIntersectionObserver<HTMLDivElement>();
  
  const yearsCount = useCountUp({ end: 12, duration: 2500 });
  const clientsCount = useCountUp({ end: 250, duration: 2500 });
  const campaignsCount = useCountUp({ end: 500, duration: 2500 });
  const growthCount = useCountUp({ 
    end: 35, 
    duration: 2500,
    formatter: (value) => `${Math.floor(value)}%`
  });
  
  useEffect(() => {
    if (isStatsVisible) {
      yearsCount.startCount();
      clientsCount.startCount();
      campaignsCount.startCount();
      growthCount.startCount();
    }
  }, [isStatsVisible]); // Only run when isStatsVisible changes
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-gray-50 dark:bg-gray-900/50 py-20 md:py-32 overflow-hidden"
    >
      {/* Background leaf decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  
        <Leaf 
          className="absolute bottom-[10%] right-[-5%] text-green-600 opacity-5 rotate-180"
          size={300}
        />
        <Leaf 
          className="absolute top-[30%] right-[10%] text-green-600 opacity-5 rotate-45"
          size={100}
        />
        <Leaf 
          className="absolute bottom-[50%] left-[10%] text-green-600 opacity-5 -rotate-45"
          size={120}
        />
      </div>
      
      <div className="container-section relative">
        {/* Section header */}
        <div className="section-title">
          <h2 className="text-green-600">About Us</h2>
          <div className="leaf-divider">
            <Leaf className="w-8 h-8 text-green-600 mx-4" />
          </div>
        </div>
        
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Tree diagram */}
          <div className={`relative transition-all duration-1000 delay-300 ${isSectionVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="relative mx-auto max-w-md">
              
              {/* Nodes */}
              <div className="space-y-16 relative">
                {/* Budget Node */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-skin-primary rounded-full p-4 text-white z-10">
                      <LineChart className="w-8 h-8" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Budget Analysis</h3>
                      <p className="text-gray-600 dark:text-gray-400">Maximizing every dollar for ROI</p>
                    </div>
                  </div>
                  <div className="pl-20 pr-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      We analyze your marketing budget to determine the most effective allocation across channels to maximize your return on investment.
                    </p>
                  </div>
                </div>
                
                {/* Strategy Node */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-skin-primary rounded-full p-4 text-white z-10">
                      <Target className="w-8 h-8" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Strategic Planning</h3>
                      <p className="text-gray-600 dark:text-gray-400">Data-driven approach</p>
                    </div>
                  </div>
                  <div className="pl-20 pr-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Our team develops comprehensive marketing strategies based on market analysis, competitor research, and audience insights.
                    </p>
                  </div>
                </div>
                
                {/* Execution Node */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-skin-primary rounded-full p-4 text-white z-10">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Execution</h3>
                      <p className="text-gray-600 dark:text-gray-400">Flawless implementation</p>
                    </div>
                  </div>
                  <div className="pl-20 pr-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      We handle all aspects of campaign execution, from creative development to media buying, ensuring consistent messaging across all channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className={`transition-all duration-1000 delay-500 ${isSectionVisible ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <h3 className="text-2xl font-bold mb-6">Rooted in Excellence Since 2012</h3>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Vishnuspire LLP's Brand Marketing Division combines strategic thinking with creative execution to help brands grow organically in today's competitive landscape.
            </p>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Our approach is rooted in understanding your business goals, audience needs, and market opportunities. We believe in sustainable growth that builds strong foundations for long-term success.
            </p>
            
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              With expertise across digital and traditional marketing channels, we create integrated campaigns that deliver measurable results within your budget constraints.
            </p>
            
            <a href="#services" className="btn btn-outline">
              Discover Our Services
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
        >
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800/50 shadow-md">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {yearsCount.formattedValue}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800/50 shadow-md">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {clientsCount.formattedValue}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800/50 shadow-md">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {campaignsCount.formattedValue}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Campaigns Delivered</div>
          </div>
          
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800/50 shadow-md">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {growthCount.formattedValue}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Avg. Growth Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;