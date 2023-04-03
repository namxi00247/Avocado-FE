import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const staffNavbar = (a, link1, link2, link3) =>  {
    const css_choosen_title =  {
        fontWeight: "bold",
        borderBottom: "1px solid black"
    }

    if (a == 'dashboard'){
        return(
            <div className='Container'>
                <h2 className='main-title'>Avocado</h2>
                <h3 className='h3'>for staffs</h3>
                <hr className='divider'></hr>
                <div className='Content-selector'>
                    <button onClick={link1} style={css_choosen_title} id='staff-personal-dashboard'>Personal Dashboard</button>
                    <button onClick={link2} id='staff-all-student'>All students</button>
                    <button onClick={link3} id='staff-my-students'> My students</button>
                </div>
                <hr className='divider'></hr>
            </div>
        )
    }

    if (a == 'all-students'){
        return(
            <div className='Container'>
                <h2 className='main-title'>Avocado</h2>
                <h3 className='h3'>for staffs</h3>
                <hr className='divider'></hr>
                <div className='Content-selector'>
                    <button onClick={link1} id='staff-personal-dashboard'>Personal Dashboard</button>
                    <button onClick={link2} style={css_choosen_title} id='staff-all-student'>All students</button>
                    <button onClick={link3} id='staff-my-students'> My students</button>
                </div>
                <hr className='divider'></hr>
            </div>
        )
    }

    if (a == 'my-students'){
        return(
            <div className='Container'>
                <h2 className='main-title'>Avocado</h2>
                <h3 className='h3'>for staffs</h3>
                <hr className='divider'></hr>
                <div className='Content-selector'>
                    <button onClick={link1} id='staff-personal-dashboard'>Personal Dashboard</button>
                    <button onClick={link2} id='staff-all-student'>All students</button>
                    <button onClick={link3} style={css_choosen_title} id='staff-my-students'> My students</button>
                </div>
                <hr className='divider'></hr>
            </div>
        )
    }
}

export default staffNavbar;