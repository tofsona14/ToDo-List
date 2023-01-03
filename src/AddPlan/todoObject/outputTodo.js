import React,{useState} from "react";
import "./outputTodo.css";

export const OutputTodo = (props) => {
  const [done, setDone] = useState(true)
  const [notDone, setNotDone] = useState(true)
  const doneCheckbox = () => {
    if(done == false) { 
      setDone(true)
      console.log(done)
    }else {
      setDone(false)
      console.log(done)
    }
  }
  const notDoneCheckbox = (arg) => {
    if(notDone == false) {
      setNotDone(true)
      console.log(arg.target.id)
      console.log(`button 2 is in ${notDone}`)
    }else {
      setNotDone(false) 
      console.log(`button 2 is in ${notDone}`)

      }
    }
  
  
  return (
    <div className="outputTexts">
      <div className="both">
        <div className="bothDiv">
          <h1>
            <span>{props.id} . </span>
            {props.plane}
          </h1>
        </div>
        <div className="timeDiv">
        <h1 className="bothTime">{props.time}</h1>
        </div>
        <div className="bothInput">
          <input id={props.id} onClick={notDoneCheckbox} className="firstCheckbox" type='checkbox'></input>
          <input onClick={doneCheckbox} className="secondCheckbox" type='checkbox'></input>
        </div>
      </div>
    </div>
  );
  }