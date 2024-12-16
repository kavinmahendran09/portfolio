import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px',
        color: '#ffffff',
        background: '#0f1217', 
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: '8vw', 
            fontWeight: 'bold',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}
        >
          Kavin Bharathi
        </h1>
        <div
          style={{
            fontSize: '1.5rem', // Increased font size for the description
            maxWidth: '1000px',
            margin: '0 auto',
            opacity: 0.9,
            fontWeight: '500',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'inline-block',
            width: '100%',
          }}
        >
          <p
            style={{
              animation: 'scrollText 10s linear infinite', 
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Full Stack Web Developer | Artificial Intelligance | Machine Learning
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Media Queries for responsive font sizes */
        @media (max-width: 768px) {
          h1 {
            font-size: 8vw; /* Adjust font size for smaller screens */
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 12vw; /* Adjust font size for very small screens */
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
