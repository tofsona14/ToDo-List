import React from "react";
import "./outputTodo.css";

export const OutputTodo = (props) => {
  return (
    <div className="outputTexts">
      <div className="ourTodo">
        <h1 className="TodoList">Your Todo List</h1>
      </div>
      <div className="both">
        <h1>
          <span>{props.id} . </span>
          {props.plane}
        </h1>
        <h1>{props.time}</h1>
      </div>
    </div>
  );
};
