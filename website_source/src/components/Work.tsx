import React from 'react';

const Work = () => {
  const projects = [
    {
      id: 1,
      name: 'University of Ontario Institute of Technology',
      image: '/assets/uoit.jpg',
      description: 'Fire protection system installation for university campus buildings.'
    },
    {
      id: 2,
      name: 'Shoppers Drug Mart Dupont',
      image: '/assets/shoppers.jpg',
      description: 'Complete fire alarm and sprinkler system for retail location.'
    },
    {
      id: 3,
      name: 'Pickering Sobeys',
      image: '/assets/sobeys.jpg',
      description: 'Fire protection services for grocery store chain location.'
    },
    {
      id: 4,
      name: 'Dollar Tree',
      image: '/assets/dollar_tree.jpg',
      description: 'Fire alarm system installation and inspection services.'
    }
  ];

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've provided quality fire protection services to numerous businesses across Ontario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-300">
                {/* Image placeholder - in production, would use actual images */}
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundColor: '#e2e8f0' // Fallback color
                  }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md inline-block transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
