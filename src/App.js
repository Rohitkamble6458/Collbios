import React from 'react';
import Section from './components/Section.js';
import Header from './Components/Header.js';
import Features from './components/Features.js';
import Testimonials from './components/Testimonials.js';
import Join from './components/Join.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';

const App = () => {
  return (
    <div className="font-poppins bg-gray-50 text-gray-900">
      <NavBar/>
      <Header/>
      <Section />
      <Features/>
      <Testimonials/>
      <Join/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default App;
