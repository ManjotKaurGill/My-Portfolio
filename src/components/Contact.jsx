import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" id="contact">
      <Container>
        <h2 className="text-center" data-aos="fade-up">📞 Contact Me</h2>

        <Row className="justify-content-center">
          <Col md={8}>
            {/* Optional social icons */}
            <div className="text-center mt-4" data-aos="fade-in">
              <p className="mb-3">Feel free to connect with me on:</p>
              <a
                href="https://www.linkedin.com/in/manjot-kaur-944a94287/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-4 text-decoration-none"
              >
                🔗 LinkedIn
              </a>
              <a
                href="mailto:manjotkaurgill26@gmail.com"
                className="text-decoration-none"
              >
                📧 Email
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
