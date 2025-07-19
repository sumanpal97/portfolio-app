import React from "react";
import workData from "../data/work.json";
import "../styles/main.css";

const Work = () => {
  return (
    <div className="work-timeline">
      <h2 className="section-title">Experience : 5yrs</h2>
      {workData.map((job, idx) => (
        <div className="timeline-entry" key={idx}>
          {/* Vertical line + logo */}
          <div className="timeline-line-container">
            <div className="timeline-logo">
              <img
                src={require(`../assets/company_logos/${job.logo}`)}
                alt={`${job.company} logo`}
                className="company-logo"
              />
            </div>
          </div>

          {/* Job content */}
          <div className="timeline-content">
            <div className="timeline-row">
              {/* Left block */}
              <div className="timeline-left">
                <h5 className="company-name">{job.company}</h5>
                <small className="timeline-duration">
                  {job.duration} @ {job.location}
                </small>
              </div>

              {/* Right block */}
              <div className="timeline-right">
                <h6 className="role-title">{job.role}</h6>
                <ul className="responsibilities">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {job.skills && job.skills.length > 0 && (
                  <div className="skills-list mt-2">
                    {job.skills.map((skill, i) => (
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

export default Work;
