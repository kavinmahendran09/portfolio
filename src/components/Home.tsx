import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0f1217', color: '#ffffff', padding: '20px' }}>
      <Navbar />
      <HeroSection />
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
