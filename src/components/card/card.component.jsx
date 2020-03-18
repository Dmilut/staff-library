import React from "react";

import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="employee"
      src={`https://robohash.org/${props.employee.id}?set=set2`}
    ></img>
    <h2>{props.employee.name}</h2>
    <p>{props.employee.email}</p>
  </div>
);
