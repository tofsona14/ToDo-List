import React,{useState} from "react";
import "./outputTodo.css";
import { OutputTodo } from "./outputTodo";

export const OutputTodos = (props) => {
    const info = props.soma
    console.log(info)
    
    return(
        <div>
            {info.map((x) => 
                <OutputTodo id = {x.id} plane = {x.plane} time = {x.time}/>
            )}
            
        </div>
        )
  }