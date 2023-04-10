// Import pre-programmed functions 
// After logged in as a Manager
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import footer from './Components/footer.js';
import ManagerNavbar from './Components/ManagerNavbar';
import StaffLogin from './stafflogin';
import staff_info from './Components/staffpersonalinfo';
import staff_personalreport from './Components/report';
import Studentform from './Components/studentform';
import my_student_table from './Components/mystudenttable';
import Wrench from './Components/Wrench.png';
import Cross from './Components/Cross.png';

// Sample input (somehow em khong dung duoc dic trong react ><)
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
let staff_dict = [
    [0, 'Chocolate Chip', '123', 'Sales', 'Senior sales', '20/10/2002', '091029392', 'awohwdoa@gmail.com', '12', '1000'],
    [1, 'Chocolate Chip', '123', 'Sales', 'Senior sales', '20/10/2002', '091029392', 'awohwdoa@gmail.com', '12', '1000'],
    [2, 'Chocolate Chip', '123', 'Sales', 'Senior sales', '20/10/2002', '091029392', 'awohwdoa@gmail.com', '12', '1000']
]
let class_info = [
    [1, 'Mentor 1-1 MV', 'hihiheihehhiheh', '100000', '3', '12312'],
    [2, 'Mentor 1-1 MV', 'hihiheihehhiheh', '100000', '3', '12312'],
    [3, 'Mentor 1-1 MV', 'hihiheihehhiheh', '100000', '3', '12312']
]

// Link to each page/section
const Manager_dashboard_link = () => {
    ReactDOM.render(< ManagerDashboard/>, document.getElementById('root'))
}
const Manager_all_students_link = () => {
    ReactDOM.render(< Manager_all_students/>, document.getElementById('root'))
}
const Manager_all_staff_link = () => {
    ReactDOM.render(< Manager_all_staff/>, document.getElementById('root'))
}
const Manager_all_services_link = () => {
    ReactDOM.render(< Manager_all_services/>, document.getElementById('root'))
}

// Page layout
const ManagerDashboard = () => {
    return(
        <div className='container'>
            {ManagerNavbar('dashboard', Manager_dashboard_link, Manager_all_students_link, Manager_all_staff_link, Manager_all_services_link)}
            {staff_info('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1200px-Black_colour.jpg', 'Staff A', '123', '0132491034', 'staffA@gmail.com', '20/3/2020', 'Sales', 12, 12, 12, 12000)}
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
            {ManagerNavbar('all-students', Manager_dashboard_link, Manager_all_students_link, Manager_all_staff_link, Manager_all_services_link)}
            {All_students(student_dict)}
            {footer()}
        </div>
    )
}
const Manager_all_staff = () => {
    return(
        <div className='container'>
            {ManagerNavbar('my-students', Manager_dashboard_link, Manager_all_students_link, Manager_all_staff_link, Manager_all_services_link)}
            {Staff_table(staff_dict)}
            {footer()}
        </div>
    )
}
const Manager_all_services = () => {
    return(
        <div className='container'>
            {ManagerNavbar('all-services', Manager_dashboard_link, Manager_all_students_link, Manager_all_staff_link, Manager_all_services_link)}
            {service_table(class_info)}
            {footer()}
        </div>
    )
}
const LoadStudentInfo = () => {
    const LoadStudent = () => {
        return(
            <div>
                {ManagerNavbar('all-students', Manager_dashboard_link, Manager_all_students_link, Manager_all_staff_link)}
                {Studentform('Student detail')}
                {footer()}
            </div>
        )
    }
    return(
        ReactDOM.render(< LoadStudent/>, document.getElementById('root'))
    )
}
const LoadStaffInfo = () => {
    const LoadStaff = () => {
        return(
            <div className='container'>
                {ManagerNavbar('my-students', Manager_dashboard_link, Manager_all_students_link, Manager_all_staff_link, Manager_all_services_link)}
                {staff_info('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1200px-Black_colour.jpg', 'Staff A', '123', '0132491034', 'staffA@gmail.com', '20/3/2020', 'Sales', 12, 12, 12000, 12000)}
                <h2 style={{marginTop: "3vw"}} className='staff-sub-title'>Staff's Student</h2>
                {my_student_table(student_dict, Manager_dashboard_link)}
                {footer()}
            </div>
        )
    }
    return(
        ReactDOM.render(< LoadStaff/>, document.getElementById('root'))
    )
}

// Tables
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
const Staff_table = (dic) => {
    function loadStudentsTable(dic1){
        const list = [];
        dic1.forEach((sublist) => {
            if (sublist[0]%2 == 0){
                list.push(
                <tr className='t0'>
                    <td><button onClick={LoadStaffInfo} className='loadstudentfilet1'>{sublist[1]}</button></td>
                    <td>{sublist[2]}</td>
                    <td>{sublist[3]}</td>
                    <td>{sublist[4]}</td>
                    <td>{sublist[5]}</td>
                    <td>{sublist[6]}</td>
                    <td>{sublist[7]}</td>
                    <td>{sublist[8]}</td>
                    <td>{sublist[9]}</td>
                    
                    <td><button className='loadstudentfilet1'>
                        <img src={Wrench} alt = '' style={{width: '0.9vw'}}/>
                        <img src={Cross} alt = '' style={{width: '0.9vw'}}/>
                    </button></td>
                </tr>)
            } else{
                list.push(
                <tr>
                    <td className='t1'><button onClick={LoadStaffInfo} className='loadstudentfilet1 t1'>{sublist[1]}</button></td>
                    <td className='t1'>{sublist[2]}</td>
                    <td className='t1'>{sublist[3]}</td>
                    <td className='t1'>{sublist[4]}</td>
                    <td className='t1'>{sublist[5]}</td>
                    <td className='t1'>{sublist[6]}</td>
                    <td className='t1'>{sublist[7]}</td>
                    <td className='t1'>{sublist[8]}</td>
                    <td className='t1'>{sublist[9]}</td>
                    <td className='t1'><button className='loadstudentfilet1 t1'>
                        <img src={Wrench} alt = '' style={{width: '0.9vw'}}/>
                        <img src={Cross} alt = '' style={{width: '0.9vw'}}/>
                    </button></td>
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
                            <th>Staff name</th>
                            <th>StaffID</th>
                            <th>Department</th>
                            <th>Role</th>
                            <th>D.O.B</th>
                            <th>Phone number</th>
                            <th>Email</th>
                            <th>No. Students</th>
                            <th>Salary</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadStudentsTable(dic)}
                    </tbody>
                </table>
            </div>
    </div>
    )
}
const service_table = (dic) => {
    function loadStudentsTable(dic1){
        const list = [];
        dic1.forEach((sublist) => {
            if (sublist[0]%2 == 0){
                list.push(
                <tr className='t0'>
                    <td>{sublist[0]}</td>
                    <td>{sublist[1]}</td>
                    <td>{sublist[2]}</td>
                    <td>{sublist[3]}</td>
                    <td>{sublist[4]}</td>
                    <td>{sublist[5]}</td>
                    
                    <td><button className='loadstudentfilet1'>
                        <img src={Wrench} alt = '' style={{width: '0.9vw'}}/>
                        <img src={Cross} alt = '' style={{width: '0.9vw'}}/>
                    </button></td>
                </tr>)
            } else{
                list.push(
                <tr>
                    <td className='t1'>{sublist[0]}</td>
                    <td className='t1'>{sublist[1]}</td>
                    <td className='t1'>{sublist[2]}</td>
                    <td className='t1'>{sublist[3]}</td>
                    <td className='t1'>{sublist[4]}</td>
                    <td className='t1'>{sublist[5]}</td>
                    <td className='t1'><button className='loadstudentfilet1 t1'>
                        <img src={Wrench} alt = '' style={{width: '0.9vw'}}/>
                        <img src={Cross} alt = '' style={{width: '0.9vw'}}/>
                    </button></td>
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
                            <th>No</th>
                            <th>Service</th>
                            <th>Overview</th>
                            <th>Subjected Amount</th>
                            <th>No. Student</th>
                            <th>Actual sale amount</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadStudentsTable(dic)}
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
                <tr>
                    <td><button onClick={LoadStudentInfo} className='loadstudentfile'>{sublist[1]}</button></td>
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
                <tr >
                    <td className='t1'><button onClick={LoadStudentInfo} className='t1 loadstudentfilet1'>{sublist[1]}</button></td>
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


export default (Manager_dashboard_link)