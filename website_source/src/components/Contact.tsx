import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact GTFP</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us to get a quote for fire protection services: sprinkler system installation, fire inspections, fire alarm systems and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Greater Toronto Fire Protection Services</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-gray-700">
                    111 Warren Road<br />
                    Whitby, Ontario L1N 2C4
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-gray-700">
                    Toronto: <a href="tel:6472563473" className="hover:text-red-600 transition-colors">647-256-3473</a><br />
                    Durham: <a href="tel:9057253473" className="hover:text-red-600 transition-colors">905-725-3473</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-red-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Contact Person:</p>
                  <p className="text-gray-700">
                    Denny Deruchie, President
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">24/7 Emergency Service</h4>
              <p className="mb-4">
                We provide 24 Hour fire protection services within 1 hour with qualified, on-call technicians.
              </p>
              <a 
                href="tel:6472563473" 
                className="bg-white text-red-600 font-bold py-2 px-6 rounded-md inline-block hover:bg-gray-100 transition-colors"
              >
                Call Now: 647-256-3473
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name (required)</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email (required)</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Your Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  <option value="inspection">Fire Inspection</option>
                  <option value="sprinkler">Sprinkler System</option>
                  <option value="alarm">Fire Alarm System</option>
                  <option value="emergency">Emergency Lighting</option>
                  <option value="extinguisher">Fire Extinguishers</option>
                  <option value="installation">New Installation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
