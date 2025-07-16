import React from 'react';
import projectData from '../data/projects.json';

const Projects = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projectData.map((project, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.tech}</h6>
                <p className="card-text">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="card-link">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
