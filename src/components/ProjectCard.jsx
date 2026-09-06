

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-icon">
        {project.icon}
      </div>

      <h3>{project.title}</h3>

      <div className="tech-tags">
        {project.tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <p className="open-project">
        Open Project <span>↗</span>
      </p>
    </a>
  );
};

export default ProjectCard;