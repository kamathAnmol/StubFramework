import React from "react";

function Description(props) {

  return (
    <div className="toggle-container">
      <p>
        <span>Title: </span>
        <span>{props.content.title}</span>
      </p>
      <p>
        <span>Description: </span>
        <span>{props.content.description}</span>
      </p>
      <p>
        <span>Type: </span>
        <span>{props.content.type}</span>
      </p>
    </div>
  );
}

export default Description;
