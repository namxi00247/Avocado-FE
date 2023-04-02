import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import StudentForms from './studentforms';
import StaffLogin from './stafflogin';

const Landing = () => {
  const openStudent = () => {
    ReactDOM.render(< StudentForms/>, document.getElementById('root'));
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


