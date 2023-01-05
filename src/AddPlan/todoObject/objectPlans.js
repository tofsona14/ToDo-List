import React, { useState } from "react";
import { OutputTodo } from "./outputTodo";
import { AddPlan } from "../addPlan";
import "./outputTodo.css";
import 'font-awesome/css/font-awesome.min.css';
export const ObjectPlans = (props) => {
  //https://chat.openai.com/chat
  
  const object = {
    id:0,
    time:4,
    plane:'sarancha'
  }
  const [fullInfo, setFullInfo] = useState([object])
  const AddInfo = (arg) => {
    setFullInfo((prev) => {
      return [
        ...prev,
        arg
      ]
    })
    props.OnSaves(fullInfo)
  }
  return(
  <div>
      <AddPlan onSave = {AddInfo}/>
    </div>
  )
  
};