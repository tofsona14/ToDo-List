import React, { useState } from "react";
import { OutputTodo } from "./outputTodo";
import { AddPlan } from "../addPlan";
import "./outputTodo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
export const ObjectPlan = (props) => {
  //https://chat.openai.com/chat
  
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
    props.OnSaves(fullInfo)
  }
  const Statement = (x) => {
    if (Number(x.time) < 10 && Number(x.time) !== 0) {
      return `0${x.time}:00`
    }else if(Number(x.time) > 10) {
      return `${x.time}:00`
    }else {
      return `00:00`
    }
  }

  return (
    <div>
      <div className="wholeTodo">
        <div className="ourTodo">
          <h1 className="TodoList">Your Todo List</h1>
        </div>
        <div className="TodoSecondLine">
          <h2 className="dailyPlans">Your Daily Plans</h2>
          <h2 className="dailyPlanTime">Current Plan Time</h2>
          <div className="bothDailyPlanCondition">
            <h2 className="dailyPlanCondition">Current Plan Condition</h2>
            <div className="oo">
              <div className="ss">
              <FontAwesomeIcon className="hourGlass" icon={faHourglassEnd} />
              <FontAwesomeIcon className="Check" icon={faCheck} />
              </div>
            </div>
          </div>
       </div>
          <div className="buttonsOfTodo">
            <button className="cancelButton">cancel</button>
            <button className="changeButton">change</button>
          </div>
        {fullInfo.map((x) => 

          <OutputTodo key={fullInfo.indexOf(x) + 1} id={fullInfo.indexOf(x) + 1} plane={x.plane} time={Statement(x)} />
        )}
        <br></br>
        <br></br>
      </div>
      <AddPlan onSave = {AddInfo}/>
    </div>
  );
};
