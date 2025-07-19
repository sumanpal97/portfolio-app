import React from "react";
import educationData from "../data/education.json";

const Education = () => {
  return (
    <div className="work-timeline">
      <h2 className="section-title">Education</h2>
      {educationData.map((edu, idx) => (
        <div className="timeline-entry" key={idx}>
          {/* Vertical line + logo */}
          <div className="timeline-line-container">
            <div className="timeline-logo">
              <img
                src={require(`../assets/institute_logos/${edu.logo}`)}
                alt={`${edu.institution} logo`}
                className="company-logo"
              />
            </div>
          </div>

          {/* edu content */}
          <div className="timeline-content">
            <div className="timeline-row">
              {/* Left block */}
              <div className="timeline-left">
                <h5 className="company-name">{edu.institution}</h5>
                <small className="timeline-duration">
                  {edu.duration} @ {edu.location}
                </small>
              </div>

              {/* Right block */}
              <div className="timeline-right">
                <h6 className="role-title">{edu.degree}</h6>
                <ul className="responsibilities">
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {edu.skills && edu.skills.length > 0 && (
                  <div className="skills-list mt-2">
                    {edu.skills.map((skill, i) => (
                      <span className="skill-tag" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
