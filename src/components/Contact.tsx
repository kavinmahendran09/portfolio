import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section style={{ padding: '50px 20px' }}>
      <Container>
        <Row className="mb-4">
          {/* Title Section */}
          <Col xs={12}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'left',  // Left-align the title
                marginBottom: '20px',
              }}
            >
              Contact
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
