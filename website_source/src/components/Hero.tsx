import React from 'react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protecting Lives & Property Since 2004
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Greater Toronto Fire Protection provides quality fire protection services through hard work, excellent service, and knowledgeable employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md text-center transition-colors"
            >
              Get a Free Quote
            </a>
            <a 
              href="tel:6472563473" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md text-center transition-colors"
            >
              24/7 Emergency Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
