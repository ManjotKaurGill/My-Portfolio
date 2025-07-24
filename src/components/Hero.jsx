import { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-dark text-white d-flex align-items-center" style={{ height: '100vh' }}>
      <Container className="text-center" data-aos="fade-up">
        <h1 className="display-4">
          Hey there👋, I'm <span className="text-info fw-semibold">Manjot Kaur</span>
        </h1>
        <h3 className="mt-3">Full Stack Web Developer 💻</h3>
        <p className="lead mt-4">
          3rd Year Computer Science Student | Passionate about building modern web & mobile apps
        </p>
      </Container>
    </section>
  );
}

export default Home;
