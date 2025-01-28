import React from "react";
import { JobContentProps } from "./job.content.types";
import "./job.content.scss";

const JobContent: React.FC<JobContentProps> = ({ data }) => {
  return (
    <ul className="job-list">
      {data.map((job, index) => (
        <li
          key={index}
          className={`job-list-item ${
            index % 2 === 0 ? "job-list-item-even" : "job-list-item-odd"
          }`}
        >
          <div>
            <h3 className="job-name">{job.name}</h3>
            <p className="job-type">{job.type}</p>
          </div>
          <span className="job-duration">{job.duration}</span>
        </li>
      ))}
    </ul>
  );
};

export default JobContent;
