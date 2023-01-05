import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'


const Main = (props) => {
console.log(props.sola)
    return(
        <div className='main'>
            <div className='main-child'>
                <div className='main-button'>
                    <div>
                        <button type="button" disabled><Link to="/s">Daily Plan</Link></button>
                    </div>
                    <br></br>
                    <div>
                        <button type='button' disabled><Link to="/Plan-Add">Add Plan</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main