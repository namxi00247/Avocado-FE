import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import StaffLogin from './stafflogin';
import Studentform from './Components/studentform';
import image1 from './Components/image1.png';

// Form after clicked to "Student" on the landing page
const Completeform = () => {
  return(
    <div>
      <h2 className = "main-title container">Mentorship registration form</h2>
      {Studentform('')}
      <div className='container'>
         <h1 className='h1'>We value your <span className='green'>trust </span> and <span className='green'> confidence </span> in us</h1>
         <h4 className='h1' id='content1'>We look forward to serve you </h4>
         <button id = 'student-submit'className='btn green-btn'>Submit</button>
         <h5 className='h5'>**Our team will reach out to you in 24-48 hours after this form is completed</h5>
    </div>
      <img src={image1} alt = '' style={{width: '100vw'}}/>
    </div>

  )
}

// Load landing page
const Landing = () => {
  const openStudent = () => {
    ReactDOM.render(< Completeform/>, document.getElementById('root'));
};

  const openStaff = () => {
    ReactDOM.render(< StaffLogin/>, document.getElementById('root'));
  }

  return (
    <div className = "big-container">
      <div className = "landing-background">
        <div id = "landing-container">
          <h2 id="landing-title" className = "main-title">Who are you?</h2>
          <button onClick={openStudent} id = "students-btn" className = "btn">Students</button>
          <button onClick = {openStaff} id = "team-btn" className = "btn">Avocado Team</button>
        </div>
      </div>
    </div>
  );
}


export default Landing;


