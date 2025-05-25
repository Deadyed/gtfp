import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Greater Toronto Fire Protection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing you with quality fire protection services since 2004.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Life Safety and Property Protection</h3>
            <p className="text-gray-700 mb-4">
              Greater Toronto Fire Protection, Ltd. opened its doors in December 2004 to provide you with quality fire protection services through hard work, excellent service, and knowledgeable employees who believe that integrity matters.
            </p>
            <p className="text-gray-700 mb-4">
              We understand the critical role that fire protection systems have in life safety and property protection. Our goal is to provide the fire protection system that best meets your needs.
            </p>
            <p className="text-gray-700">
              We employ a dedicated staff of technicians and service providers who have the training, experience, and attitude needed to get the job done right. From estimating and sales, through design, fabrication, and the construction phase of the project, our employees strive to provide you with the best service possible.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Fire Protection Systems Installation</h3>
            <p className="text-gray-700 mb-4">
              Our designers are knowledgeable in government and local codes and their application. We utilize the latest in computer aided drafting and fire protection software to produce detailed drawings and hydraulic calculations for the fire protection systems we install.
            </p>
            <p className="text-gray-700 mb-4">
              The installation crews employed by Greater Toronto Fire Protection, Ltd., are second to none in the industry and are members of the U.A. Local 853 Sprinkler Fitters of Ontario. Our installers have an average of 15 years of experience installing fire protection systems with some individuals having over 25 years of experience.
            </p>
            <p className="text-gray-700">
              Greater Toronto Fire Protection, Ltd. and its dedicated employees are ready to provide any and all of your fire protection needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
