import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Project: React.FC = () => {
  return (
    <section style={{ padding: '50px 20px', color: '#ffffff' }}>
      {/* Title Section */}
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
              Projects
            </h3>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mt-5">
        <Row>
          {/* Second Column - Repository Cards */}
          <Col xs={12} md={12}>
            <Row>
              <Col xs={12} sm={6} md={6} className="mb-3">
                <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <Card.Body style={{ padding: 0, backgroundColor: 'transparent' }}>
                    <a
                      href="https://github.com/kavinmahendran09/acehive"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    >
                      <img
                        src="https://gitmystat.vercel.app/repo?theme=&username=kavinmahendran09&repo=acehive&format=png"
                        width="100%"
                        height="250"
                        alt="Acehive Repo"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                        }}
                      />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={6} className="mb-3">
                <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <Card.Body style={{ padding: 0, backgroundColor: 'transparent' }}>
                    <a
                      href="https://github.com/kavinmahendran09/acehive-admin"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    >
                      <img
                        src="https://gitmystat.vercel.app/repo?theme=&username=kavinmahendran09&repo=acehive-admin&format=png"
                        width="100%"
                        height="250"
                        alt="Acehive Admin Repo"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                        }}
                      />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={6} className="mb-3">
                <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <Card.Body style={{ padding: 0, backgroundColor: 'transparent' }}>
                    <a
                      href="https://github.com/kavinmahendran09/Energy-Consumption-Predictions"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    >
                      <img
                        src="https://gitmystat.vercel.app/repo?theme=&username=kavinmahendran09&repo=Energy-Consumption-Predictions&format=png"
                        width="100%"
                        height="250"
                        alt="Energy Consumption Predictions Repo"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                        }}
                      />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={6} className="mb-3">
                <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <Card.Body style={{ padding: 0, backgroundColor: 'transparent' }}>
                    <a
                      href="https://github.com/kavinmahendran09/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    >
                      <img
                        src="https://gitmystat.vercel.app/repo?theme=&username=kavinmahendran09&repo=portfolio&format=png"
                        width="100%"
                        height="250"
                        alt="Portfolio Repo"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                        }}
                      />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Footer with small text for GitMyStat link */}
      <div className="container mt-4">
        <p className="text-light" style={{ fontSize: '0.875rem' }}>
          *These project cards were generated by{' '}
          <a
            href="https://gitmystat.vercel.app/#builder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            GitMyStat
          </a>
        </p>
      </div>

      {/* Inline Styles for Mobile Adjustments */}
      <style>{`
        /* Reduce bottom margin between cards on small screens */
        @media (max-width: 576px) {
          .card {
            margin-bottom: 10px;  /* Reduces space between cards */
          }

          .container {
            padding: 0 10px;  /* Reduces container padding on small screens */
          }

          .mb-3 {
            margin-bottom: 10px !important;  /* Ensures reduced margin between columns */
          }

          /* Adjust image width and height on smaller screens */
          .card img {
            width: 100% !important;
            height: auto !important;  /* Ensures images maintain aspect ratio */
          }
        }
      `}</style>
    </section>
  );
};

export default Project;
