import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const shorttextform = (label, id) => {
    return(
        <div class = "mb-3" className='form-div' id="student-name-div">
                <label className='form-label'>{label}</label>
                <input className='input-shorttext' type = 'text' id={id}></input>
            </div>
    )
};

export default shorttextform;