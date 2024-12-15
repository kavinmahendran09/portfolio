import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // React Icons for GitHub and LinkedIn
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap for primary color
import Timeline from './Timeline';

const About: React.FC = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '20px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section with Profile Picture */}
          <div
            className="col-lg-6 text-center"
            style={{
              opacity: 0,
              animation: 'fadeIn 1s forwards',
              animationDelay: '0.5s', // Delay to create staggered effect
            }}
          >
            <img
              src="ProfilePicture.jpeg" // Replace with your profile picture URL
              alt="Profile"
              style={{
                width: '200px', // Increased size for the profile picture
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '20px',
              }}
            />
            <p
              style={{
                fontSize: '1.2rem',
                fontWeight: '500',
                marginBottom: '20px',
              }}
            >
              Kavin Bharathi
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} color="white" /> {/* Black GitHub icon */}
              </a>
              <a href="https://www.linkedin.com/in/yourlinkedin/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} color="lightblue" /> {/* LinkedIn primary color */}
              </a>
            </div>
          </div>
          {/* Right Section with About Text */}
          <div
            className="col-lg-6"
            style={{
              opacity: 0,
              animation: 'fadeIn 1s forwards',
              animationDelay: '1s', // Delay to create staggered effect
            }}
          >
            <h2
              style={{
                fontSize: '2.5rem', // Reduced font size for the heading
                fontWeight: 'bold',
                marginBottom: '15px',
                letterSpacing: '2px',
              }}
            >
              About Me
            </h2>
            <hr style={{ borderColor: '#ffffff', width: '100%' }} />
            <p
              style={{
                fontSize: '1.2rem', // Reduced font size
                maxWidth: '800px',
                margin: '0 auto',
                opacity: 0.9,
                fontWeight: '500',
              }}
            >
              Hi, I'm Kavin Bharathi, a Full Stack Web Developer passionate about creating dynamic web apps. I work with technologies like JavaScript, React, Node.js, and am constantly exploring AI/ML.
            </p>
            <p
              style={{
                fontSize: '1.2rem', // Reduced font size
                maxWidth: '800px',
                margin: '20px auto 0',
                opacity: 0.9,
                fontWeight: '500',
              }}
            >
              I enjoy experimenting with new tech, contributing to open-source projects, and learning more about the latest trends in technology.
            </p>
          </div>
        </div>
      </div>
      
      {/* Timeline Component */}
      <div style={{ width: '100%' }}>
        <Timeline />
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
