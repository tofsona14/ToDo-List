import React, { useState } from "react";
import { OutputTodo } from "./outputTodo";
import { AddPlan } from "../addPlan";
import "./outputTodo.css";
export const ObjectPlan = () => {
  
  const object = [
    {
      id: 1,
      plane: "Wake Up early",
      time: "08:00",
    },
  ];
  const [fullInfo, setFullInfo] = useState(object)
  const AddInfo = (arg) => {
    setFullInfo((prev) => {
      return [...prev, arg]
    })
  }

  

  return (
    <div>
      <div className="ourTodo">
        <h1 className="TodoList">Your Todo List</h1>
      </div>
      {fullInfo.map((x) => (
        <OutputTodo key={fullInfo.indexOf(x) +1} id={fullInfo.indexOf(x) +1} plane={x.plane} time={x.time} />
        
      ))}
      <AddPlan onSave = {AddInfo}/>
    </div>
  );
};
