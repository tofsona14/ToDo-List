import React, {useState} from 'react'
import './App.css';
import './fonts/Ohio Bro - Free.otf'
import { ObjectPlan } from './AddPlan/todoObject/objectPlan';
import Main from './MainPage/main'
import { OutputTodos } from './AddPlan/todoObject/outputTodos';
import { ObjectPlans } from './AddPlan/todoObject/objectPlans';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  const [info, setInfo] = useState([])
  const DataAccumulation = (arg) => {
    setInfo((prev) => {
      return {...prev, arg}

    })
  }
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<OutputTodos Object = {info}/>} />
          <Route path='/Daily-Plan' element={<Main />} />
          <Route path='/Plan-Add' element={<ObjectPlans OnSaves={DataAccumulation}/>} />
        

        </Routes>
      </Router>      
    </div>
  )
}

export default App;
