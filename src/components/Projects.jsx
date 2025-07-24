import { useState } from 'react';

const moreProjects = [
  {
    title: 'AgriTech',
    description: 'An AI-driven crop recommendation system leveraging soil and climate data to optimize yield.',
    link: 'https://agritechai.vercel.app',
    github: 'https://github.com/ManjotKaurGill/AgriTech',
    tech: ['python', 'flask', 'machine-learning', 'mongodb', 'nextjs', 'numpy', 'scikit-learn', 'pandas', 'seaborn', 'matplotlib', 'generative-ai', 'insight-generation'],
  },
  {
    title: 'VibeRise',
    description: 'A motivational quotes app that delivers daily inspiration via sleek UI and daily push notifications, built with React Native for a smooth user experience.',
    // link: 'https://yourweather.link',
    github: 'https://github.com/ManjotKaurGill/VibeRise',
    tech: ['React Native', 'Node', 'MongoDB', 'Express'],
  },
  {
    title: 'Tic Tac Toe',
    description: 'Tic Tac Toe 2-Player Game with win/draw logic, sound effects, and responsive Tailwind UI.',
    link: 'https://tic-tac-toe-fun-24.vercel.app/',
    github: 'https://github.com/ManjotKaurGill/Tic-Tac-Toe',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Calculator',
    description: 'A sleek and responsive React portfolio showcasing projects, skills, and contact info with smooth UI powered by Tailwind CSS.',
    link: 'https://calculator-nu-two-15.vercel.app/',
    github: 'https://github.com/ManjotKaurGill/Calculator',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
  }
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container my-5 px-3" id="projects">
      <h2 className="mb-4 fw-bold text-center">Projects</h2>

      {/* SmartCanvas (Main Project) */}
      <div className="card border-0 rounded-4 shadow-lg overflow-hidden mx-auto mb-4" style={{ maxWidth: '900px' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="/taskCanvas.png"
              alt="SmartCanvas"
              className="img-fluid h-100"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="col-md-6 p-4 d-flex flex-column justify-content-between">
            <div>
              <h4 className="fw-bold mb-2">TaskCanvas</h4>
              <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
                A modern task planner with canvas-based sketching, draggable & touchable task boards, and team collaboration.
              </p>
              <div className="mb-3">
                {['React', 'Firebase', 'Context API', 'Canvas API', 'Modern CSS', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="badge bg-light text-dark border border-secondary-subtle me-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <a
                href="https://task-canvas-bice.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/ManjotKaurGill/Task-Canvas"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="text-center mb-4">
        <button
          className="btn btn-outline-primary rounded-pill"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Hide Other Projects' : 'More Projects'}
        </button>
      </div>

      {/* Additional Projects Grid */}
      {showMore && (
        <div className="row justify-content-center">
          {moreProjects.map((proj, index) => (
            <div className="col-md-6 col-lg-5 mb-4" key={index}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold">{proj.title}</h5>
                  <p className="text-muted" style={{ fontSize: '0.94rem' }}>{proj.description}</p>
                  <div className="mb-3">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-light text-dark border border-secondary-subtle me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex justify-content-between">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                      GitHub
                    </a>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
