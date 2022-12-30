import React, { useState } from "react";
import "./addPlan.css";
import "../fonts/Ohio Bro - Free.otf";
import { ObjectPlan } from "./todoObject/objectPlan";

export const AddPlan = () => {
  const [plan, setPlan] = useState("");
  const [clock, setClock] = useState("");

  const planChangeHandler = (arg) => {
    setPlan(arg.target.value);
  };
  const clockChangeHandler = (arg) => {
    setClock(arg.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const info = {
      plan: plan,
      clock: clock,
    };
    console.log(info);
  };

  const date = new Date();
  const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <>
      <div>
        <ObjectPlan />
      </div>
      <form onSubmit={submitHandler} className="DateDiv">
        <div className="Div--Date">
          <h1 className="Date">Date:{today}</h1>
        </div>
        <div className="InfoDiv--1">
          <label htmlFor="EnterText" className="g">
            {" "}
            Type Daily Plan{" "}
          </label>
          <input
            onChange={planChangeHandler}
            className="inputDailyPlan"
            type="text"
            id="EnterText"
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
            min={0}
            max={24}
            step={1}
            placeholder="Enter Time ex:8 (24 Hour standard)"
          />
        </div>
        <br></br>
        <br></br>
        <div className="ButtonsOfAdd">
          <button className="firstButton">Add</button>
          <button className="secondButton">Cancel</button>
        </div>
      </form>
    </>
  );
};
