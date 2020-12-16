import React, { useEffect } from "react";
import "./Card.scss";

function Card(props) {
  const { data } = props;

  return (
    <div className="card-wrapper">
      {data.map((job) => {
        return (
          <div className="card">
            <h1>{job.title}</h1>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>Salary:${Math.round(job.salary)}</p>
            <p>{job.fulltime ? "Full Time" : "Part Time"}</p>
            <p>{job.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
