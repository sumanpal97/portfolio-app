import React from 'react';
import educationData from '../data/education.json';

const Education = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Education</h2>
      <div className="row">
        {educationData.map((edu, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{edu.institute}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{edu.degree}</h6>
                <p className="card-text">{edu.year}</p>
                <p className="card-text"><small className="text-muted">{edu.location}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
