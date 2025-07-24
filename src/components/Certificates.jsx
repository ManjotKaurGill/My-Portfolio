import { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const certificates = [
  {
    title: 'JavaScript',
    issuer: 'Scaler',
    description: 'Gained strong JavaScript fundamentals through 70+ tutorials, 9 modules, and real-world coding tasks.',
    link: '/JS certificate.jpg',
  },
  {
    title: 'MySQL',
    issuer: 'Scaler',
    description: 'Learned MySQL and database design through 5 modules, 48 videos, and practical challenges.',
    link: '/MySQL certificate.jpg',
  },
  {
    title: 'Data Analysis Training',
    issuer: 'Intel',
    description: `Completed Intel's Data Analysis Training by building a Crop Recommendation System using Python, Pandas, Seaborn and Matplotlib.`,
    link: '/Data analysis certificate.pdf',
  },
  {
    title: 'React Native Certification',
    issuer: 'GeeksforGeeks',
    description: 'Completed a hands-on React Native training covering app structure, navigation, and APIs.',
    link: '/React Native Certification.pdf',
  },
  {
    title: 'Python Programming',
    issuer: 'Infosys Springboard',
    description: 'Completed a hands-on Python fundamentals course under Intel’s Data-Centric Lab initiative.',
    link: '/Python certificate.jpg',
  },
  {
    title: 'Employability Skills Training',
    issuer: 'Rubicon LifeSkills',
    description: ' Completed a 5-day personal development and soft skills training focused on career readiness and communication.',
    link: '/Rubicon certificate.jpg',
  },
];

const Certificates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" id="certificates">
      <Container>
        <h2 className="text-center" data-aos="fade-up">Certificates</h2>
        <p className="text-muted mt-2 mb-5">Here are some certifications I’ve completed during my learning journey, covering frontend development, databases, data analysis, and soft skills.</p>
        <Row>
          {certificates.map((cert, index) => (
            <Col md={4} className="mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card className="h-100 shadow border-0">
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cert.issuer}</Card.Subtitle>
                  <Card.Text style={{ fontSize: '0.95rem' }}>{cert.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0 text-end">
                  {cert.link ? (
                    <Button
                      variant="outline-primary"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </Button>
                  ) : (
                    <Button variant="outline-secondary" disabled>No Link Available</Button>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
