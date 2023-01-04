import React from 'react'
import './main.css'


const Main = () => {
    return(
        <div className='main'>
            <div className='main-child'>
                <div className='main-button'>
                    <div>
                        <button type="button" disabled>Daily Plan</button>
                    </div>
                    <br></br>
                    <div>
                        <button type='button' disabled>Add Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main