import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{ pointerEvents: props.disabled ? "auto" : "none" }}
      className={`circle ${props.active ? "active" : ""}`} // based on the active state update the className of the circle to display an image
      onClick={props.click}
    >
      {props.id};
    </div>
  );
};

export default Circle;
