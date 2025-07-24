import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <Navbar expand="lg" fixed="top" bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} className="shadow">
      <Container>
        <Navbar.Brand href="/">🌐 Manjot Kaur</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-secondary" size="sm" className="ms-3" onClick={toggleDarkMode}>
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
