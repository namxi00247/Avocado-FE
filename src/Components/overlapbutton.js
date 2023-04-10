import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const overlapbutton = (title, yesfunction, cancelfunction, overlapsize) => {
    return(
        <div className='saving-container'>
            <div className={overlapsize}></div>
            <div className='saving-box'>
                <h2 className='main-title'>{title}</h2>
                <button onClick={yesfunction} className='btn green-btn'>Yes</button>
                <button onClick={cancelfunction} className='btn'>Cancel</button>
            </div>
        </div>
    )

}
export default overlapbutton;