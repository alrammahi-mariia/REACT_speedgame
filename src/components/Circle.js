import React from "react";

const Circle = (props) => {
  return (
    <div className="circles" onClick={props.click}>
      {props.id};
    </div>
  );
};

export default Circle;
