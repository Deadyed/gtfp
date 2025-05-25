import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import FAQs from './components/FAQs';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Work />
      <FAQs />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
