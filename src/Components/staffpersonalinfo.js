import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const staff_personalinformation = (staff_img, staff_name, staff_id, staff_phone, staff_mail, staff_date, staff_role) => {
    return(
        <div className='personal_info_container'>
            <div className='image-container'>
                <img src={staff_img} alt='abc'></img>
            </div>
            <div className='information-container'>
                <h2 className='staff-sub-title'>Personal Information</h2>
                <p><span className='bold'>Name: </span>{staff_name}</p>
                <p><span className='bold'>Staff ID: </span>{staff_id}</p>
                <p><span className='bold'>Phone: </span>{staff_phone}</p>
                <p><span className='bold'>E-Mail: </span>{staff_mail}</p>
                <p><span className='bold'>D.O.B: </span>{staff_date}</p>
                <p><span className='bold'>Role: </span>{staff_role}</p>

            </div>
        </div>
    )
}
const staff_personalreport = (pending, ongoing, success, income) => {
    return(
        <div className='personalreport-container'>
            <h2 className='staff-sub-title'>Personal Report</h2>
            <div className='row'>
                <div className='col'>
                    <button className='personal-btn'>Pending reach out</button>
                    <h3 className='h2 green'>{pending}</h3>
                </div>
                <div className='col'>
                    <button className='personal-btn'>Ongoing case</button>
                    <h3 className='h2 green'>{ongoing}</h3>
                </div>
                <div className='col'>
                    <button className='personal-btn'>Success rate</button>
                    <h3 className='h2 green'>{success}</h3>
                </div>
                <div className='col'>
                    <button className='personal-btn'>Income</button>
                    <h3 className='h2 green'>{income}</h3>
                </div>
            </div>
        </div>
    )
}
const staff_info = (a, b, c, d, e, f, g, h, i, j, k) => {
    return(
        <div className='container'>
            {staff_personalinformation(a, b, c, d, e, f, g)}
            {staff_personalreport(h, i, j, k)}  
        </div>
    )
}

export default staff_info;