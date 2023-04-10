// Log in page for Staff/Manager
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Staff_dashboard_link from './staffpage';
import Manager_dashboard_link from './managerpage';

// Just a navbar
const staff_login_navbar = (b) => {
    if (b == "staff"){
        return(
            <div id = "landing-container">
            <div className='row1'>
                <button class = 'col' className='staff manager'id='staff-signin' >Staffs<hr className='choosen-hr'></hr></button>
                <button onClick={openManager} class = 'col' className='manager' id='manager-signin'>Managers<hr className='notchoosen-hr'></hr></button>
             </div>
                    <div class = 'row'>
                        {shorttextform('form-div2','Username', 'staff-username')}
                        {shorttextform('form-div2','Password', 'staff-password')}
                        <div className='row2'>
                            <div className='row3'>
                                <input className='checkbox-input' type = 'checkbox'></input>
                                <label className='font-inter'>Remember Me</label>
                            </div>
                            <a className='font-inter' id = 'light-blue'>Password reset</a>
                        </div>
                    </div>
                    <div class = 'row'>
                        <button onClick={Staff_dashboard_link} className='btn green-btn'>Login</button>
                    </div>
            </div>
        )
    } else if (b == "manager"){
        return(
            <div id = "landing-container">
            <div className='row1'>
                <button onClick={openStaff} class = 'col' className='staff manager'id='staff-signin' >Staffs<hr className='notchoosen-hr'></hr></button>
                <button class = 'col' className='manager' id='manager-signin'>Managers<hr className='choosen-hr'></hr></button>
             </div>
                    <div class = 'row'>
                        {shorttextform('form-div2','Username', 'staff-username')}
                        {shorttextform('form-div2','Password', 'staff-password')}
                        <div className='row2'>
                            <div className='row3'>
                                <input className='checkbox-input' type = 'checkbox'></input>
                                <label className='font-inter'>Remember Me</label>
                            </div>
                            <a className='font-inter' id = 'light-blue'>Password reset</a>
                        </div>
                    </div>
                    <div class = 'row'>
                        <button onClick={Manager_dashboard_link} className='btn green-btn'>Login</button>
                    </div>
            </div>
        )
    }
}

// Branching out to Manager of Staff page
const openStaff = () => {
    ReactDOM.render(< StaffLogin/>, document.getElementById('root'));
  }
const openManager = () => {
    ReactDOM.render(< ManagerLogin/>, document.getElementById('root'));
}


const shorttextform = (length,label, id, default_value) => {
    return(
        <div class = "mb-3" className={length} id="student-name-div">
                <label className='form-label'>{label}</label>
                <input placeholder={default_value} className='input-shorttext' type = 'text' id={id}></input>
            </div>
    )
};


// Section load depending on navbar
const StaffLogin = () => {
    return(
        <div className = "big-container" id = "staff-login-container">
                <div className = "landing-background">
            <div id = "landing-container">
                {staff_login_navbar('staff')}
            </div>
        </div>
    </div>
    );
  }
const ManagerLogin = () => {
    return(
        <div className = "big-container" id = "staff-login-container">
                <div className = "landing-background">
            <div id = "landing-container">
                {staff_login_navbar('manager')}
            </div>
        </div>
    </div>
    );
}







export default StaffLogin;


