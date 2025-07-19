import React from "react";
import projectData from "../data/projects.json";
import "../styles/main.css";

const Projects = () => {
  return (
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="row">
        {projectData.map((project, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="project-card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="project-title mb-2">{project.name}</h5>
                <div className="tech-stack mb-2">
                  {project.tech.split(",").map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <p className="project-description flex-grow-1">
                  {project.description}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="view-btn"
                  >
                    View Project →
                  </a>
                ) : project.associatedWith == "Self" ? (
                  <span className="in-progress-label">In Progress</span>
                ) : (
                  <span className="in-progress-label">
                    <strong>Associated With:</strong> {project.associatedWith}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
