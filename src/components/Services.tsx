import React from 'react';
import { 
  Leaf, 
  LineChart, 
  Users, 
  BarChartBig, 
  Megaphone, 
  Share2, 
  Monitor, 
  Camera 
} from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const services = [
  {
    title: 'Business & Market Analysis',
    description: 'We analyze your business goals, market trends, and competitive landscape to identify growth opportunities.',
    icon: LineChart
  },
  {
    title: 'Audience Segmentation',
    description: 'Strategic audience targeting to ensure your message reaches the right people at the right time.',
    icon: Users
  },
  {
    title: 'Budget-based Planning',
    description: 'Customized marketing strategies designed to maximize ROI within your specific budget constraints.',
    icon: BarChartBig
  },
  {
    title: 'Multi-Channel Marketing',
    description: 'Integrated campaigns across digital and traditional channels for comprehensive brand exposure.',
    icon: Megaphone
  },
  {
    title: 'Content Strategy',
    description: 'Engaging content creation that resonates with your audience and drives meaningful engagement.',
    icon: Share2
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital solutions including SEO, SEM, social media, email marketing and more.',
    icon: Monitor
  },
  {
    title: 'Brand Development',
    description: 'Strategic brand positioning, identity design, and messaging that sets you apart from competitors.',
    icon: Camera
  },
  {
    title: 'Performance Analytics',
    description: 'Data-driven measurement and optimization of your marketing campaigns for continuous improvement.',
    icon: LineChart
  }
];

const Services = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Leaf 
          className="absolute top-[10%] right-[5%] text-green-500 opacity-10 rotate-45"
          size={200}
        />
        <Leaf 
          className="absolute bottom-[10%] left-[5%] text-green-500 opacity-10 -rotate-45"
          size={200}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-600 dark:text-green-400">Our Services</h2>
          <div className="flex justify-center items-center my-4">
            <Leaf className="w-8 h-8 text-green-600 dark:text-green-400 mx-4" />
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We offer a comprehensive suite of marketing services designed to help your brand grow organically and establish strong roots in your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-700 delay-${index * 100} hover:shadow-xl hover:-translate-y-1 ${
                  isSectionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="bg-green-100 dark:bg-green-900 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#how-we-work" 
            className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            See How We Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;