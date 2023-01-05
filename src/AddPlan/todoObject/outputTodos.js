import React,{useState} from "react";
import "./outputTodo.css";
import { OutputTodo } from "./outputTodo";

export const OutputTodos = (props) => {
    const [info, setInfo] = useState()
    setInfo(props.Object)
  return(
        <>
            {info.map(x => {
                <OutputTodo id = {x.id} plane = {x.plane} time = {x.time}/>
                console.log(x.id)
            })}
        </>
    )
  }