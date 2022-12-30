import React from "react";
import "./outputTodo.css";

export const OutputTodo = (props) => {
  return (
    <div className="outputTexts">
      <h1>{props.time}</h1>
      <h1>{props.plane}</h1>
    </div>
  );
};
