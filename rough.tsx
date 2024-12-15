import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // React Icons for GitHub and LinkedIn
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap for primary color

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
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              About Me
            </h2>
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

        {/* Timeline Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
            >
              Timeline
            </h3>

            {/* Timeline */}
            <div className="timeline-container">
              <div className="timeline-line">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <p className="timeline-title">Schooling</p>
                  <p className="timeline-year">2010</p>
                  <p className="timeline-text">Completed my schooling in 2010 from ABC High School.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <p className="timeline-title">Undergraduate</p>
                  <p className="timeline-year">2018</p>
                  <p className="timeline-text">Graduated with a Bachelor's degree in Computer Science from XYZ University.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <p className="timeline-title">Web Developer</p>
                  <p className="timeline-year">2019</p>
                  <p className="timeline-text">Started working as a Full Stack Web Developer.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <p className="timeline-title">AI/ML Enthusiast</p>
                  <p className="timeline-year">2021</p>
                  <p className="timeline-text">Started exploring Artificial Intelligence and Machine Learning.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <p className="timeline-title">Current</p>
                  <p className="timeline-year">2024</p>
                  <p className="timeline-text">Currently working on personal AI projects and learning new web technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

        .timeline-container {
          position: relative;
          padding: 20px 0;
        }

        .timeline-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          width: 100%;
          border-top: 2px solid white; /* Single line */
          margin-left: 10px;
          margin-right: 10px;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-bottom: 40px; /* Spacing between items */
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          border: 3px solid #007bff;
          position: absolute;
          top: -10px; /* Adjusting position to align with line */
        }

        .timeline-title {
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
          margin-top: 50px; /* Added space from dot */
        }

        .timeline-year {
          font-size: 0.9rem;
          color: #fff;
          font-weight: bold;
          margin-top: 5px;
        }

        .timeline-text {
          font-size: 1rem;
          text-align: center;
          color: #ccc;
          max-width: 300px; /* Consistent max-width for all texts */
        }

        @media (max-width: 768px) {
          .timeline-line {
            flex-direction: column;
            border-left: 2px solid white; /* Vertical line */
            height: 100%;
            width: 2px;
          }

          .timeline-item {
            margin-bottom: 30px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin-left: 15px;
          }

          .timeline-dot {
            margin-right: 15px;
            margin-bottom: 0;
          }

          .timeline-title, .timeline-year, .timeline-text {
            margin-left: 10px;
            text-align: left;
          }

          .timeline-text {
            max-width: 400px; /* Increased max-width on mobile */
          }

          .timeline-container {
            align-items: flex-end; /* Aligning content to the right on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default About;
