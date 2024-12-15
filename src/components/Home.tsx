import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import HeroSection from './HeroSection'; // Import the HeroSection component
import About from './About';
import Projects from './Projects';


const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0f1217', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
