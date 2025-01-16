import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFile } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section style={{ padding: '50px 20px' }}>
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'left',  
                marginBottom: '20px',
              }}
            >
              Contact
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={12} md={5}>
            <a
              href="https://drive.google.com/file/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%' }}
            >
              <Button
                variant="outline-primary"
                className="custom-button"
                style={{
                  width: '100%',
                  height: '200px',  
                  borderRadius: '50px',  
                  fontSize: '1.5rem',  
                  padding: '0 20px',  
                  borderColor: 'white', 
                }}
              >
                <FaFile style={{ marginRight: '10px' }} /> 
                Resume
              </Button>
            </a>
          </Col>

          <Col xs={12} md={1} className="d-flex justify-content-center">
            <div
              className="d-none d-md-block"
              style={{
                borderLeft: '2px solid #ccc',
                height: '200px', 
              }}
            ></div>
            <div
              className="d-block d-md-none"
              style={{
                borderTop: '2px solid #ccc',
                width: '100%', 
                margin: '10px 0', 
              }}
            ></div>
          </Col>

          <Col xs={12} md={5} className="d-flex flex-column align-items-center">
            <a
              href="https://www.linkedin.com/in/kavin-bharathi-081577252/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%' }}
            >
              <Button
                variant="outline-primary"
                className="social-button mb-2"
                style={{ width: '100%', height: '66px' }}
              >
                LinkedIn
              </Button>
            </a>

            <a
              href="https://github.com/kavinmahendran09" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%' }}
            >
              <Button
                variant="outline-primary"
                className="social-button mb-2"
                style={{ width: '100%', height: '66px' }}
              >
                GitHub
              </Button>
            </a>

            <a
              href="mailto:kavinbharathi.mahendran@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%' }}
            >
              <Button
                variant="outline-primary"
                className="social-button"
                style={{ width: '100%', height: '66px' }}
              >
                Email
              </Button>
            </a>
          </Col>
        </Row>
      </Container>


      <style>
        {`
          .custom-button, .social-button {
            color: white;
            transition: all 0.3s ease;
            border-radius: 50px;
          }

          .custom-button:hover, .social-button:hover {
            background-color: white;
            color: #0f1217;
            border-color: #0f1217;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
