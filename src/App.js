import React from 'react'
import './App.css';
import './fonts/Ohio Bro - Free.otf'

function App() {

   const date = new Date();
   const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  return (
    <div className='DateDiv'>
       <div className='Div--Date'><h1 className='Date'>Date:{today}</h1></div>
      <label htmlFor='EnterText' className='dailyPlanText' > Type Daily Plan </label>
      <input className='inputDailyPlan' type="text" id='EnterText' maxLength={50} placeholder="you can type only 50 word"/>
        
    </div>
  );
}

export default App;
