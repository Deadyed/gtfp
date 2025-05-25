import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Greater Toronto Fire Protection" className="h-12" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-red-600 font-medium">Home</a>
          <a href="#about" className="text-gray-800 hover:text-red-600 font-medium">About</a>
          <a href="#services" className="text-gray-800 hover:text-red-600 font-medium">Services</a>
          <a href="#work" className="text-gray-800 hover:text-red-600 font-medium">Our Work</a>
          <a href="#faqs" className="text-gray-800 hover:text-red-600 font-medium">FAQs</a>
          <a href="#partners" className="text-gray-800 hover:text-red-600 font-medium">Partners</a>
          <a href="#contact" className="text-gray-800 hover:text-red-600 font-medium">Contact</a>
          <a href="#emergency" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
            Emergency Service
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Services</a>
            <a href="#work" className="text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Our Work</a>
            <a href="#faqs" className="text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>FAQs</a>
            <a href="#partners" className="text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Partners</a>
            <a href="#contact" className="text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Contact</a>
            <a href="#emergency" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-center" onClick={toggleMenu}>
              Emergency Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
