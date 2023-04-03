import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const dropdownform = (label, choices_array) => {
    const choice_html = []
    choices_array.forEach((choice) => {
        choice_html.push(
            <option className='input-shorttext' value={choice}>{choice}</option>
        )
    })
    return(
        <div class = 'mb-3' className='form-div'>
            <label className='form-label'>{label}</label>
            <select className='input-shorttext'>
                {choice_html}
            </select>
        </div>

    )

}

export default dropdownform;