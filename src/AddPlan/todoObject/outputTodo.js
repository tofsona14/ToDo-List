import React from "react";
import "./outputTodo.css";

export const OutputTodo = (props) => {
  return (
    <div className="outputTexts">
      <div className="both">
        <div className="bothDiv">
        <h1>
          <span>{props.id} . </span>
          {props.plane}
        </h1>
        </div>
        <h1 className="bothTime">{props.time}</h1>
        <input className="bothCheckbox" type='checkbox'></input>
      </div>
    </div>
  );
};
