
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
const staff_personalreport = (title, arr) => {
    function load_items(arr1) {
        const list = [];
        arr1.forEach((item) => {
            list.push(
                <div className='col'>
                    <button className='personal-btn'>{item[0]}</button>
                    <h3 className='h2 green'>{item[1]}</h3>
                </div>
            )
        })
        return list;
    }


    return(
        <div style={{marginTop: '3vw'}} className='personalreport-container'>
            <h2 className='staff-sub-title'>{title}</h2>
            <div className='row'>
                {load_items(arr)}
            </div>
        </div>
    )
}
export default staff_personalreport;