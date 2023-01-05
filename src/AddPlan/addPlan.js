import React, { useState } from "react";
import "./addPlan.css";
import "../fonts/Ohio Bro - Free.otf";
import { Link } from "react-router-dom";


export const AddPlan = (props) => {
  const [plan, setPlan] = useState("");
  const [clock, setClock] = useState("");
  var s;
  const CancelButton = () => {
    s = false
  }
  const AddButton = () => {
    s = true
  }
  const planChangeHandler = (arg) => {
    setPlan(arg.target.value);
  };
  const clockChangeHandler = (arg) => {
    setClock(arg.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if(s === true) {

      const info = {
        
        plane: plan,
        time: clock,
      };
      props.onSave(info)
    } else {
      console.log('you canceled')
    }
    setPlan("")
    setClock("")
  };

  const date = new Date();
  const today = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  return (
    <>
      
      <form onSubmit={submitHandler} className="DateDiv">
        <div className="Div--Date">
          <h1 className="Date">Date:{today}</h1>
        </div>
        <div className="InfoDiv--1">
          <label htmlFor="EnterText" className="g">
            Type Daily Plan
          </label>
          <input
            onChange={planChangeHandler}
            className="inputDailyPlan"
            value={plan}
            type="text"
            id="EnterText"
            minLength={6}
            maxLength={50}
            placeholder="you can type only 50 word"
          />
        </div>
        <br></br>
        <div className="InfoDiv--2">
          <label htmlFor="EnterDate">Enter Clock Of Current Daily plan</label>
          <input
            onChange={clockChangeHandler}
            className="inputOfTime"
            id="EnterDate"
            type="number"
            value={clock}
            min={0}
            max={24}
            step={1}
            placeholder="Enter Time ex:8 (24 Hour standard)"
          />
        </div>
        <br></br>
        <br></br>
        <div className="ButtonsOfAdd">
          <button onClick={AddButton} type="submit" className="firstButton">Add</button>
          <button onClick={CancelButton} className="secondButton">Cancel</button>
        </div>
        <button><Link to="/Daily-Plan">add</Link></button>
        <button><Link to="/">back</Link></button>
      </form>
    </>
  );
};
