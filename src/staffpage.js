import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import StaffLogin from './stafflogin';
import staffNavbar from './Components/StaffNavbar';
import shorttextform from './Components/shorttextform';
import longtextform from './Components/longtextform';
import footer from './Components/footer';
import dropdownform from './Components/dropdownbox';
import staff_info from './Components/staffpersonalinfo';
import Studentform from './Components/studentform';
import my_student_table from './Components/mystudenttable';
import overlapbutton from './Components/overlapbutton';


// Sample data input
var student_dict = [
    [
        '0',
        'chocolate chips',
        '11',
        'Business',
        'Vietnam',
        'VinUniversity, RMIT',
        'None',
        '10000',
        'Course_interested',
        '0'
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
        'Course_interested',
        '0'
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
        'Course_interested',
        '0'
    ],
]

// Staff links
const Staff_dashboard_link = () => {
    return(
        ReactDOM.render(< Staff_dashboard/>, document.getElementById('root'))
    );
}
const All_students_link = () => {
    return(
        ReactDOM.render(< All_students/>, document.getElementById('root'))
    );
}
const My_students_link = () => {
    return(
        ReactDOM.render(< My_students/>, document.getElementById('root'))
    );
}
const Student_details_link = () => {
    return(
        ReactDOM.render(< Student_details/>, document.getElementById('root'))
    )
}
const create_Contract_link = () => {
    const Create_Contracts  = () => {
        return(
            <div>
                <div className='container' id='container'>
                {staffNavbar('my-students')}
                {my_student_table(student_dict, create_Contract_link)}
                </div>
                <div id="container-container">
                    <div className='overlapper'>
                    </div>
                    <div style = {{opacity: '2'}} id="contract-container" className='student-border'>
                        <div className='student-container'>
                            {shorttextform( 'Full name', 'name')}
                            {shorttextform('Email', 'mail')}
                            {shorttextform('Link facebook', 'facebook')}
                            {shorttextform('Phone number', 'phone')}
                            {shorttextform('Grade', 'grade')}
                            {shorttextform(`Parent's name`, 'grade')}
                            {shorttextform(`Parent's ID number`, 'grade')}
                            {shorttextform(`Parent's phone number`, 'grade')}
                            {dropdownform('Signed up course', ['Mentor 1-1', 'class'])}
                            {dropdownform('Total contract amount', ['Mentor 1-1', 'class'])}
                            {/* Do later: using for loops to load correspond for how many transaction */}
                            {dropdownform('How many transaction are there?', ['Mentor 1-1', 'class'])}
                            {dropdownform('First transaction amount', ['Mentor 1-1', 'class'])}
                            {dropdownform('Date of transaction', ['Mentor 1-1', 'class'])}
                            {dropdownform('Second transaction amount', ['Mentor 1-1', 'class'])}
                            {dropdownform('Date of transaction', ['Mentor 1-1', 'class'])}
                            <div>
                                <label className='form-label'>Upload pdf of signed contract</label>
                                <button className='input-button'>Upload File</button>
                            </div>
                            {dropdownform('Mentor PIC', ['Mentor 1-1', 'class'])}
                            {dropdownform('Mentor Support', ['Mentor 1-1', 'class'])}
                            {dropdownform('Mentor Personal Statement', ['Mentor 1-1', 'class'])}
                            {longtextform('Additional note', 'notes')}
    
                            <div className='container btn-container' style = {{width: '100%'}}>
                                <button onClick={Save_contract} className='btn green-btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            
        )
    }
    
    return(
        ReactDOM.render(< Create_Contracts/>, document.getElementById('root'))
    )
}


// All the over-layering part
const student_confirmation = () => {
    const Create_Contracts  = () => {
        return(
            <div>
                <div className='container' id='container'>
                    {staffNavbar('all-students', Staff_dashboard_link, All_students_link, My_students_link)}
                    {Studentform("Student's detail")}
                    <button onClick={student_confirmation} className='btn green-btn'>Choose this student</button>
                    {footer()}
                </div>
                <div id="container-container">
                    {overlapbutton('Confirm your student', All_students_link, Student_details_link, 'overlapper3')}
                </div>

            </div>
    
            
        )
    }
    
    return(
        ReactDOM.render(< Create_Contracts/>, document.getElementById('root'))
    )
}
const Save_contract = () => { 
    function Save_contract_confirm() {
        return(
            overlapbutton('Save Contract Information', save_contract_button, create_Contract_link,'overlapper2')
        )
    };
    ReactDOM.render(< Save_contract_confirm/>, document.getElementById('container-container'));
}
const save_contract_button = () => {
    return(
        ReactDOM.render(< My_students/>, document.getElementById('root'))
    )
}

// students information table
const student_table = (students) => {
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
                    <div style={{display: 'flex'}} className='buttons_heading'>
                        <button onClick={Student_details_link} className='table_button'>Choose</button>
                        <button className='table_button'>Cancel</button>
                    </div>
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
                    <div style={{display: 'flex'}} className='buttons_heading'>
                        <button onClick={Student_details_link} className='table_button'>Choose</button>
                        <button className='table_button'>Cancel</button>
                    </div>

                </tr>)
            }
        })
        return(
                list
        )
    }

    return(
        <div className='student_table_container'>
            <div className='student_table'>
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Grade</th>
                            <th>Intended career</th>
                            <th>Study place</th>
                            <th>Interested school in Vietnam</th>
                            <th>Other interested school</th>
                            <th>Contribution</th>
                            <th className="buttons_heading"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadStudentsTable(students)}
                    </tbody>
                </table>
            </div>
    </div>
    )
}

// load pages
const Staff_dashboard = () => {
    return(
        <div className='container'>
            {staffNavbar('dashboard', Staff_dashboard_link, All_students_link, My_students_link)}
            {staff_info('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1200px-Black_colour.jpg', 'Staff A', '123', '0132491034', 'staffA@gmail.com', '20/3/2020', 'Sales', 12, 12, 12, 1200000)}
            {footer()}
        </div>
    );
}
const All_students = () => {
    return(
        <div className='container'>
            {staffNavbar('all-students', Staff_dashboard_link, All_students_link, My_students_link)}
            {student_table(student_dict)}
            {footer()}
        </div>
    );
}
const My_students = () => {
    return(
        <div className='container'>
            {staffNavbar('my-students', Staff_dashboard_link, All_students_link, My_students_link)}
            {my_student_table(student_dict, create_Contract_link)}
            {footer()}
        </div>
    );
}
const Student_details = () => {
    return(
        <div className='container'>
            {staffNavbar('all-students', Staff_dashboard_link, All_students_link, My_students_link)}
             {Studentform("Student's detail")}
            <button onClick={student_confirmation} className='btn green-btn'>Choose this student</button>
            {footer()}
        </div>
    )
}

export default Staff_dashboard_link;
