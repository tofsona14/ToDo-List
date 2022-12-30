import React, { useState } from "react";
import { OutputTodo } from "./outputTodo";
import { AddPlan } from "../addPlan";
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
      return [arg, ...prev,]
    })
  }

  return (
    <div>
      {fullInfo.map((x) => (
        <OutputTodo key={x.id} id={x.id} plane={x.plane} time={x.time} />
        
      ))}
      <AddPlan onSave = {AddInfo}/>
    </div>
  );
};
