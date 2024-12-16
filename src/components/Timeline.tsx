import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section style={{ padding: '50px 20px', color: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                textAlign: 'left',
                display: 'inline-block',
              }}
            >
              Timeline
            </h3>
          </div>
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line">
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-title">Schooling</p>
              <p className="timeline-year">2022</p>
              <p className="timeline-text">Completed my schooling in 2022 from Babaji Vidhyashram with an aggregate of 83.8%.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-title">Undergraduate</p>
              <p className="timeline-year">2022-2026</p>
              <p className="timeline-text">Pursuing a Bachelor's degree in Computer Science and engineering with specialisation in Artificial Intelligance and Machine Learning at SRM Institute of Science and Technology, expected to graduate in 2026.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-title">Web Developer</p>
              <p className="timeline-year">2022</p>
              <p className="timeline-text">Started working on projects as a Full Stack Web Developer.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-title">AI/ML Developer</p>
              <p className="timeline-year">2023</p>
              <p className="timeline-text">Started exploring Artificial Intelligence and Machine Learning.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-title">Current</p>
              <p className="timeline-year">2024</p>
              <p className="timeline-text"> Currently working on <a href="https://github.com/kavinmahendran09/acehive" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Acehive</a> and learning new web technologies.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          padding-top: 20px;
        }

        .timeline-line {
          position: relative;
          width: 100%;
          border-left: 2px solid #ffffff; /* Vertical line */
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .timeline-item.left {
          justify-content: flex-start;
        }

        .timeline-item.right {
          justify-content: flex-start;
        }

        .timeline-dot {
          width: 25px;
          height: 25px;
          background-color: white;
          border-radius: 50%;
          border: 3px solid #007bff;
          position: absolute;
          top: -12px;
          left: -13px;
        }

        .timeline-content {
          max-width: 600px;
          padding-left: 15px;
          padding-right: 15px;
        }

        .timeline-title {
          font-size: 1.6rem;
          font-weight: bold;
          color: #fff;
        }

        .timeline-year {
          font-size: 1.2rem;
          color: #fff;
          font-weight: bold;
          margin-top: 5px;
        }

        .timeline-text {
          font-size: 1.2rem;
          color: #ccc;
          margin-top: 10px;
        }

        @media (min-width: 768px) {
          .timeline-container {
            padding-left: 50px; /* Add significant padding from the left */
          }

          .timeline-line {
            margin-left: 50px; /* Align the vertical line with the container */
          }
        }

        @media (max-width: 768px) {
          .timeline-line {
            border-left: 2px solid #ffffff; /* Vertical line */
          }

          .timeline-item {
            flex-direction: column;
            margin-bottom: 40px;
          }

          .timeline-item.left {
            align-items: flex-start;
          }

          .timeline-item.right {
            align-items: flex-start;
          }

          .timeline-dot {
            margin-left: 0;
            margin-bottom: 15px;
            margin-top: 0;
          }

          .timeline-content {
            padding-left: 20px;
            padding-right: 20px;
          }

          .timeline-title, .timeline-year, .timeline-text {
            text-align: left;
          }

          .timeline-container {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
