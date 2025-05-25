import React from 'react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Durham Construction Association',
      logo: '/assets/durham_construction.png',
      url: '#'
    },
    {
      id: 2,
      name: 'U.A. Local 853 Sprinkler Fitters of Ontario',
      logo: '/assets/ua_local_853.png',
      url: '#'
    }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with other great service providers and being a member of many fire protection organizations helps us to continue to provide you with the best possible service.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4 h-48 w-48 flex items-center justify-center">
                {/* Logo placeholder - in production, would use actual logos */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                  <span className="text-gray-500 font-medium text-center px-4">{partner.name}</span>
                </div>
              </div>
              <h3 className="text-lg font-medium">{partner.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            We are proud to be affiliated with these businesses and organizations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
