import React, {useState} from 'react'
import './App.css';
import './fonts/Ohio Bro - Free.otf'
import { ObjectPlan } from './AddPlan/todoObject/objectPlan';
import Main from './MainPage/main'
import { OutputTodos } from './AddPlan/todoObject/outputTodos';
import { ObjectPlans } from './AddPlan/todoObject/objectPlans';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { OutputTodo } from './AddPlan/todoObject/outputTodo';
function App() {
  const [info, setInfo] = useState("")
  var sinfo = 5;
  const DataAccumulation = (arg) => {
    setInfo(arg)
  }
  console.log(info)
    
  
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main Object = {info} sola = {info}/>} />
          <Route path='/Daily-Plan' element={<OutputTodos soma = {info}/>} />
          <Route path='/Plan-Add' element={<ObjectPlans OnSaves={DataAccumulation}/>} />
          <Route path="/s" element={<OutputTodo />} />
        

        </Routes>
      </Router>      
    </div>
  )
}

export default App;
