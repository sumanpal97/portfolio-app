import React from 'react';
import workData from '../data/work.json';

const Work = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Work Experience</h2>
      <div className="list-group">
        {workData.map((job, idx) => (
          <div className="list-group-item" key={idx}>
            <h5 className="mb-1">{job.role} @ {job.company}</h5>
            <p className="mb-1">{job.description}</p>
            <small className="text-muted">{job.duration}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
