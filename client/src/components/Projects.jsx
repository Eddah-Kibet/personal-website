import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = ({ projects, onProjectClick }) => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => onProjectClick(project.name, 'live')}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => onProjectClick(project.name, 'code')}
              >
                <FaCode /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;