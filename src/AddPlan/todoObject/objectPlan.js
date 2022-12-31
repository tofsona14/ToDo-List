import React, { useState } from "react";
import { OutputTodo } from "./outputTodo";
import { AddPlan } from "../addPlan";
import "./outputTodo.css";
export const ObjectPlan = () => {
  
  const object = [
    {
      ob: 0,
      id: 1,
      plane: "Wake Up early",
      time: 8,
    },
  ];
  const [fullInfo, setFullInfo] = useState(object)
  const AddInfo = (arg) => {
    setFullInfo((prev) => {
      return [...prev, arg]
    })
  }
  const Statement = (x) => {
    if (Number(x.time) < 10) {
      return `0${x.time}:00`
    }else {
      return `${x.time}:00`
    }
  }

  return (
    <div>
      <div className="ourTodo">
        <h1 className="TodoList">Your Todo List</h1>
      </div>
      {fullInfo.map((x) => 

        <OutputTodo key={fullInfo.indexOf(x) + 1} id={fullInfo.indexOf(x) + 1} plane={x.plane} time={Statement(x)} />
        
      )}
      <AddPlan onSave = {AddInfo}/>
    </div>
  );
};
