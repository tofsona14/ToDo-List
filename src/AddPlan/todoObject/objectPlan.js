import React from "react";
import { OutputTodo } from "./outputTodo";
export const ObjectPlan = () => {
  const object = [
    {
      id: 1,
      plane: "Wake Up early",
      time: "08:00",
    },
  ];

  return (
    <div>
      {object.map((x) => (
        <OutputTodo key={x.id} id={x.id} plane={x.plane} time={x.time} />
      ))}
    </div>
  );
};
