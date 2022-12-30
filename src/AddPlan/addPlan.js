import React from "react";
import "./addPlan.css";
import "../fonts/Ohio Bro - Free.otf";

export const AddPlan = () => {
  const date = new Date();
  const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const submit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="DateDiv">
      <div className="Div--Date">
        <h1 className="Date">Date:{today}</h1>
      </div>
      <div className="InfoDiv--1">
        <label htmlFor="EnterText" className="g">
          {" "}
          Type Daily Plan{" "}
        </label>
        <input
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
    </div>
  );
};
