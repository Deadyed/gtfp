import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: '24 Hour Emergency Service',
      description: 'We provide 24 Hour fire protection services within 1 hour with qualified, on-call technicians.',
      icon: <Clock className="h-12 w-12 text-red-600" />,
      link: '#emergency'
    },
    {
      title: 'Fire Inspections',
      description: 'Comprehensive and cost effective fire inspection packages designed to comply with local Fire and Building Codes.',
      icon: <CheckCircle className="h-12 w-12 text-red-600" />,
      link: '#inspections'
    },
    {
      title: 'Sprinkler Systems',
      description: 'Installation and maintenance of automatic sprinkler systems (wet and dry) as mandated by the Ontario Fire Code.',
      icon: <Shield className="h-12 w-12 text-red-600" />,
      link: '#sprinklers'
    },
    {
      title: 'Fire Alarm Systems',
      description: 'Installation and inspection of fire alarm systems in conformance with ULC-S536 per the Ontario Fire Code.',
      icon: <AlertTriangle className="h-12 w-12 text-red-600" />,
      link: '#alarms'
    },
    {
      title: 'Emergency Lighting',
      description: 'Testing and inspection of emergency lighting systems performed monthly and annually as required.',
      icon: <Shield className="h-12 w-12 text-red-600" />,
      link: '#lighting'
    },
    {
      title: 'New Installations & Renovations',
      description: 'Design and installation of new fire protection systems or modifications to existing systems.',
      icon: <CheckCircle className="h-12 w-12 text-red-600" />,
      link: '#installations'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fire Protection Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the critical role that fire protection systems have in life safety and property protection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.link} 
                className="text-red-600 font-medium hover:text-red-800 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md inline-block transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
