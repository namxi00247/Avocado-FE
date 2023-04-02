import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import StudentForms from './studentforms';
import StaffLogin from './stafflogin';

let billing_report_example = [
    [1, 'Chocolate Chip', '11', 'Mentor 1-1 MV', '20,000,000', 'Fri, 5th Nov 2022', '10,000,000', '7'],
    [2, 'Chocolate Chip', '11', 'Mentor 1-1 MV', '20,000,000', 'Fri, 5th Nov 2022', '10,000,000', '7'],
    [3, 'Chocolate Chip', '11', 'Mentor 1-1 MV', '20,000,000', 'Fri, 5th Nov 2022', '10,000,000', '7'],
]

let student_dict = [
    [
        '0',
        'chocolate chips',
        '11',
        'Business',
        'Vietnam',
        'VinUniversity, RMIT',
        'None',
        '10000',
        'checked'
    ],
    [
        '1',
        'snicker doodle',
        '10',
        'Unknown',
        'United States',
        'FUV',
        'Mount Holyoke College',
        '121312',
        'not'
    ],
    [
        '2',
        'chocolate chips',
        '11',
        'Business',
        'Vietnam',
        'VinUniversity, RMIT',
        'None',
        '10000',
        'not'
    ],
]


const Manager_dashboard_link = () => {
    ReactDOM.render(< ManagerDashboard/>, document.getElementById('root'))
}

const Manager_all_students_link = () => {
    ReactDOM.render(< Manager_all_students/>, document.getElementById('root'))
}



const ManagerDashboard = () => {
    return(
        <div className='container'>
            {ManagerNavbar('dashboard')}
            {staff_personalinformation('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1200px-Black_colour.jpg', 'Staff A', '123', '0132491034', 'staffA@gmail.com', '20/3/2020', 'Sales', 'Sales')}
            {staff_personalreport('Sales Report', [['Pending Reach Out', 12], ['Ongoing Case', 12], ['Success Case', 12], ['Salary', 12000]])}
            {staff_personalreport('Revenue Report', [['Expected', 123423], ['Actual', 1223424], ['Remaining', 12234]])}
            {Overdue_Billing(billing_report_example)}
            {staff_personalreport('Salary Report', [['StaffA', 123423], ['StaffB', 1223424], ['StaffC', 12234], ['StaffA', 123423], ['StaffB', 1223424], ['StaffC', 12234], ['StaffB', 1223424], ['StaffC', 12234]])}
            {footer()}
        </div>
    )
}
const Manager_all_students = () => {
    return(
        <div className='container'>
            {ManagerNavbar('all-students')}
            {All_students(student_dict)}
            {footer()}
        </div>
    )
}


const ManagerNavbar = (a) =>  {
        const css_choosen_title =  {
            fontWeight: "bold",
            borderBottom: "1px solid black"
        }
    
        if (a == 'dashboard'){
            return(
                <div className='Container'>
                    <h2 className='main-title'>Avocado</h2>
                    <h3 className='h3'>for managers</h3>
                    <hr className='divider'></hr>
                    <div className='Content-selector'>
                        <button onClick={Manager_dashboard_link} style={css_choosen_title} id='staff-personal-dashboard'>Personal Dashboard</button>
                        <button onClick={Manager_all_students_link} id='staff-all-student'>All students</button>
                        <button id='staff-my-students'> My students</button>
                        <button id='staff-my-students'> All-services</button>
                    </div>
                    <hr className='divider'></hr>
                </div>
            )
        }
    
        if (a == 'all-students'){
            return(
                <div className='Container'>
                    <h2 className='main-title'>Avocado</h2>
                    <h3 className='h3'>for managers</h3>
                    <hr className='divider'></hr>
                    <div className='Content-selector'>
                        <button onClick={Manager_dashboard_link} id='staff-personal-dashboard'>Personal Dashboard</button>
                        <button onClick={Manager_all_students_link} style={css_choosen_title} id='staff-all-student'>All students</button>
                        <button id='staff-my-students'> My students</button>
                        <button id='staff-my-students'> All-services</button>
                    </div>
                    <hr className='divider'></hr>
                </div>
            )
        }
    
        if (a == 'my-students'){
            return(
                <div className='Container'>
                    <h2 className='main-title'>Avocado</h2>
                    <h3 className='h3'>for managers</h3>
                    <hr className='divider'></hr>
                    <div className='Content-selector'>
                        <button onClick={Manager_dashboard_link} id='staff-personal-dashboard'>Personal Dashboard</button>
                        <button id='staff-all-student'>All students</button>
                        <button style={css_choosen_title} id='staff-my-students'> My students</button>
                        <button id='staff-my-students'> All-services</button>
                    </div>
                    <hr className='divider'></hr>
                </div>
            )
        }

        if (a == 'all-services'){
            return(
                <div className='Container'>
                    <h2 className='main-title'>Avocado</h2>
                    <h3 className='h3'>for managers</h3>
                    <hr className='divider'></hr>
                    <div className='Content-selector'>
                        <button onClick={Manager_dashboard_link} id='staff-personal-dashboard'>Personal Dashboard</button>
                        <button id='staff-all-student'>All students</button>
                        <button id='staff-my-students'> My students</button>
                        <button style={css_choosen_title} id='staff-my-students'> All-services</button>
                    </div>
                    <hr className='divider'></hr>
                </div>
            )
        }
 }
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
const Overdue_Billing = (billing_report) => {
    function loadStudentsTable(dic){
        const list = [];
        dic.forEach((sublist) => {
            if (sublist[0]%2 == 0){
                list.push(
                <tr className='t0'>
                    <td>{sublist[1]}</td>
                    <td>{sublist[2]}</td>
                    <td>{sublist[3]}</td>
                    <td>{sublist[4]}</td>
                    <td>{sublist[5]}</td>
                    <td>{sublist[6]}</td>
                    <td>{sublist[7]}</td>
                </tr>)
            } else{
                list.push(
                <tr>
                    <td  className='t1'>{sublist[1]}</td>
                    <td  className='t1'>{sublist[2]}</td>
                    <td  className='t1'>{sublist[3]}</td>
                    <td  className='t1'>{sublist[4]}</td>
                    <td  className='t1'>{sublist[5]}</td>
                    <td  className='t1'>{sublist[6]}</td>
                    <td  className='t1'>{sublist[7]}</td>

                </tr>)
            }
        })
        return(
                list
        )
    }

    return(
        <div style={{marginTop: '3vw'}} className='biling_table_container'>
            <h2 className='staff-sub-title'>Overdue billing report</h2>
            <div className='student_table'>
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Grade</th>
                            <th>Course</th>
                            <th>Total contract</th>
                            <th>Second date of transaction</th>
                            <th>Remain amount</th>
                            <th>Days overdue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadStudentsTable(billing_report)}
                    </tbody>
                </table>
            </div>
    </div>
    )
}
const All_students = (all_student_report) => {
    function loadStudentsTable(dic){
        const list = [];
        dic.forEach((sublist) => {
            if (sublist[0]%2 == 0){
                list.push(
                <tr className='t0'>
                    <td>{sublist[1]}</td>
                    <td>{sublist[2]}</td>
                    <td>{sublist[3]}</td>
                    <td>{sublist[4]}</td>
                    <td>{sublist[5]}</td>
                    <td>{sublist[6]}</td>
                    <td>{sublist[7]}</td>
                    <td style={{backgroundColor:'#FEFEFE'}}><input type={'checkbox'}></input></td>
                </tr>)
            } else{
                list.push(
                <tr>
                    <td  className='t1'>{sublist[1]}</td>
                    <td  className='t1'>{sublist[2]}</td>
                    <td  className='t1'>{sublist[3]}</td>
                    <td  className='t1'>{sublist[4]}</td>
                    <td  className='t1'>{sublist[5]}</td>
                    <td  className='t1'>{sublist[6]}</td>
                    <td  className='t1'>{sublist[7]}</td>
                    <td className='t1'><input type={'checkbox'}></input></td>
                </tr>)
            }
        })
        return(
                list
        )
    }

    return(
        <div style={{marginTop: '3vw'}} className='student_table_container'>
            <div className='student_table'>
                <table style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Grade</th>
                            <th>Intended Career</th>
                            <th>Study Place</th>
                            <th>Interested school in Vietnam</th>
                            <th>Other interested school</th>
                            <th>contribution</th>
                            <th>Assigned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadStudentsTable(all_student_report)}
                    </tbody>
                </table>
            </div>
    </div>
    )
}



const footer = () => {
    return(
        <footer>
            <h6>Copyright © Avocado Prep 2022. All rights reserved</h6>
        </footer>
    )
}


export default Manager_dashboard_link;