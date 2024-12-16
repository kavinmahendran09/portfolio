import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px 0', width: '100%' }}>
      <Container>
        {/* White line at the top */}
        <Row>
          <Col xs={12}>
            <hr style={{ borderTop: '2px solid white' }} />
          </Col>
        </Row>

        {/* Footer content with 10%, 80%, 10% split */}
        <Row className="d-flex align-items-center justify-content-between">
          {/* Left Section: Date - Hidden on mobile */}
          <Col xs={12} md={2} className="d-flex justify-content-start d-none d-md-flex">
            <p style={{ margin: 0, fontSize: '0.8rem' }}>16 Dec 2024</p>
          </Col>

          {/* Middle Section: Name and Description */}
          <Col xs={12} md={8} className="d-flex justify-content-center">
            <p style={{ margin: 0, fontSize: '0.8rem', textAlign: 'center' }}>
              Kavin Bharathi
            </p>
          </Col>

          {/* Right Section: Emoji - Hidden on mobile */}
          <Col xs={12} md={2} className="d-flex justify-content-end d-none d-md-flex">
            <p style={{ margin: 0, fontSize: '1rem' }}>🧿</p>
          </Col>
        </Row>
      </Container>

      {/* Responsive Layout Adjustments */}
      <style>
        {`
          @media (max-width: 767px) {
            footer p {
              font-size: 0.9rem; /* Smaller font for mobile */
            }
            .d-none.d-md-flex {
              display: none; /* Hide date and emoji on mobile */
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
