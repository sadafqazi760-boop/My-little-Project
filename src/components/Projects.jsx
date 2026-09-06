
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-heading">

        <p className="projects-tag">
          ✦ MY LITTLE CREATIONS
        </p>

        <h2>
          Things I've <span>built</span> 💜
        </h2>

        <p className="projects-description">
          A collection of projects I've created during
          my frontend journey.
        </p>

      </div>


      {/* Projects Grid */}

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
};

export default Projects;