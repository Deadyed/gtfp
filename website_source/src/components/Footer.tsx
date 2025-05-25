import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Greater Toronto Fire Protection</h3>
            <p className="text-gray-300 mb-4">
              Providing quality fire protection services through hard work, excellent service, and knowledgeable employees since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#work" className="text-gray-300 hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#partners" className="text-gray-300 hover:text-white transition-colors">Partners</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">24 Hour Emergency Service</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Fire Inspections</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Sprinkler Systems</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Fire Alarm Systems</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Emergency Lighting</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">New Installations & Renovations</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-500 mr-2 mt-1" />
                <div>
                  <p className="text-gray-300">Toronto: 647-256-3473</p>
                  <p className="text-gray-300">Durham: 905-725-3473</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-red-500 mr-2 mt-1" />
                <p className="text-gray-300">info@gtfp.ca</p>
              </div>
              <div>
                <p className="text-gray-300">
                  111 Warren Road<br />
                  Whitby, Ontario L1N 2C4
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Greater Toronto Fire Protection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
