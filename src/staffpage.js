import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import StudentForms from './studentforms';
import StaffLogin from './stafflogin';

// Test dictionary
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
// Staff login links

const Staff_dashboard_link = () => {
    return(
        ReactDOM.render(< Staff_dashboard/>, document.getElementById('root'))
    );
}
const All_students_link = () => {
    console.log('hello');
    return(
        ReactDOM.render(< All_students/>, document.getElementById('root'))
    );
}
const My_students_link = () => {
    console.log('hello');
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
                {my_student_table(student_dict)}
                </div>
                <div id="container-container">
                    <div className='overlapper'>
                    </div>
                    <div style = {{opacity: '2'}} id="contract-container" className='student-border'>
                        <div className='student-container'>
                            {shorttextform('form-div', 'Full name', 'name')}
                            {shorttextform('form-div', 'Email', 'mail')}
                            {shorttextform('form-div', 'Link facebook', 'facebook')}
                            {shorttextform('form-div', 'Phone number', 'phone')}
                            {shorttextform('form-div', 'Grade', 'grade')}
                            {shorttextform('form-div', `Parent's name`, 'grade')}
                            {shorttextform('form-div', `Parent's ID number`, 'grade')}
                            {shorttextform('form-div', `Parent's phone number`, 'grade')}
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

const Save_contract = () => { 
    function Save_contract_confirm() {
        return(
            <div className='saving-container'>
                <div className='overlapper2'></div>
                <div className='saving-box'>
                    <h2 className='main-title'>Saving contract information</h2>
                    <button onClick={save_contract_button} className='btn green-btn'>Yes</button>
                    <button className='btn'>Cancel</button>
                </div>
            </div>
        )
    };
    ReactDOM.render(< Save_contract_confirm/>, document.getElementById('container-container'));
}
const save_contract_button = () => {
    return(
        ReactDOM.render(< My_students/>, document.getElementById('root'))
    )
}

// Staff-pages section
const staffNavbar = (a) =>  {
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
                    <button onClick={Staff_dashboard_link} style={css_choosen_title} id='staff-personal-dashboard'>Personal Dashboard</button>
                    <button onClick={All_students_link} id='staff-all-student'>All students</button>
                    <button onClick={My_students_link} id='staff-my-students'> My students</button>
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
                    <button onClick={Staff_dashboard_link} id='staff-personal-dashboard'>Personal Dashboard</button>
                    <button onClick={All_students_link} style={css_choosen_title} id='staff-all-student'>All students</button>
                    <button onClick={My_students_link} id='staff-my-students'> My students</button>
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
                    <button onClick={Staff_dashboard_link} id='staff-personal-dashboard'>Personal Dashboard</button>
                    <button onClick={All_students_link} id='staff-all-student'>All students</button>
                    <button onClick={My_students_link} style={css_choosen_title} id='staff-my-students'> My students</button>
                </div>
                <hr className='divider'></hr>
            </div>
        )
    }
}
const footer = () => {
    return(
        <footer>
            <h6>Copyright © Avocado Prep 2022. All rights reserved</h6>
        </footer>
    )
}

// for staff personal information - add in img link/personal information as parameters
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
// my student information table
const my_student_table = (students) => {
    function loadStudentsTable(dic){
        const list = [];
        dic.forEach((sublist) => {
            if (sublist[0]%2 == 0){
                list.push(
                <tr className='t0'>
                    <td>{sublist[1]}</td>
                    <td>{sublist[2]}</td>
                    <td>{sublist[8]}</td>
                    <td><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td><div className='buttons_heading'>
                        <button onClick={create_Contract_link} className='table_button'>Create</button>
                    </div></td>
                    <td><div className='buttons_heading'>
                        <button className='table_button'>Edit</button>
                    </div></td>
                </tr>)
            } else{
                list.push(
                <tr>
                    <td  className='t1'>{sublist[1]}</td>
                    <td  className='t1'>{sublist[2]}</td>
                    <td  className='t1'>{sublist[8]}</td>
                    <td  className='t1'><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td  className='t1'><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td  className='t1'><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td  className='t1'><div className='checkbox-container'><input className='checkbox-input' type='checkbox'></input></div></td>
                    <td><div className='buttons_heading'>
                        <button onClick={create_Contract_link} className='table_button'>Create</button>
                    </div></td>
                    <td><div className='buttons_heading'>
                        <button className='table_button'>Edit</button>
                    </div></td>
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
                            <th>Course interested</th>
                            <th id='not-reach-out'><div className='checkbox-container'>Not reach out</div></th>
                            <th  id='in-progress'><div className='checkbox-container'>In progress</div></th>
                            <th id='success'><div className='checkbox-container'>Success</div></th>
                            <th id='fail'><div className='checkbox-container'>Fail</div></th>
                            <th><div className='checkbox-container'>Contract</div></th>
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

// random function to re-use :3
const shorttextform = (length,label, id, default_value) => {
    return(
        <div class = "mb-3" className={length} id="student-name-div">
                <label className='form-label'>{label}</label>
                <input placeholder={default_value} className='input-shorttext' type = 'text' id={id}></input>
            </div>
    )
};
const longtextform = (label, id) => {
    return(
        <div class = "mb-3" className='form-div' id="student-name-div">
                <label className='form-label'>{label}</label>
                <input className='input-longtext' type = 'text' id={id}></input>
            </div>
    )
};
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

// load 
const Staff_dashboard = () => {
    return(
        <div className='container'>
            {staffNavbar('dashboard')}
            {staff_personalinformation('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1200px-Black_colour.jpg', 'Staff A', '123', '0132491034', 'staffA@gmail.com', '20/3/2020', 'Sales', 'Sales')}
            {staff_personalreport(12, 12, 12, 1200000)}
            {footer()}
        </div>
    );
}
const All_students = () => {
    return(
        <div className='container'>
            {staffNavbar('all-students')}
            {student_table(student_dict)}
            {footer()}
        </div>
    );
}
const My_students = () => {
    return(
        <div className='container'>
            {staffNavbar('my-students')}
            {my_student_table(student_dict)}
            {footer()}
        </div>
    );
}
const Student_details = () => {
    return(
        <div className='container'>
            {staffNavbar('all-students')}
            <div>
                <h2 className='main-title' style = {{margin: '2vw 0 0 0'}}>Student's detail</h2>
                <div style = {{margin: '-2vw 0 0 0'}} className='student-container'>
                {shorttextform('form-div', 'Full Name', 'student-name')}
                {shorttextform('form-div','E-Mail', 'student-mail')}
                {shorttextform('form-div','Link facebook', 'student-facebook')}
                {shorttextform('form-div','Phone number', 'student-phone')}
                {shorttextform('form-div','School', 'student-school')}

                <div class = "mb-3" className='form-div' id="student-facebook-div">
                    <label className='form-label'>Grade</label>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>10</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>11</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>12</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Gap year</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>
                            <input className='checkbox-others' type = "text" placeholder='Other'></input></label>
                    </div>
                </div>
                <div class = "mb-3" className='form-div' id="student-facebook-div">
                    <label className='form-label'>How did you hear about us</label>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Avocado facebook page</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Abroad in Vietnam community</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Friends/Relatives</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Our former mentees</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>
                            <input className='checkbox-others' type = "text" placeholder='Other'></input></label>
                    </div>
                </div>
                <div class = "mb-3" className='form-div' id="student-facebook-div">
                    <label className='form-label'>Your intended career field</label>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Business  (Business Adminstration, Finance, Professional Communication, etc.)</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>STEM technical (Computer Science, Data Science, Mechanical Engineering, etc.) </label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Health Science (Medical Doctor, Nursing, Psychology)</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Unknown</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>
                            <input className='checkbox-others' type = "text" placeholder='Other'></input></label>
                    </div>
                </div>
                <div class = "mb-3" className='form-div' id="student-facebook-div">
                    <label className='form-label'>Where do you want to study</label>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>United States</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>United Kingdom</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Netherlands/ Poland</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Australia</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Vietnam</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>
                            <input className='checkbox-others' type = "text" placeholder='Other'></input></label>
                    </div>
                </div>


                {/* table list */}
                <div class = "mb-3" className='form-div' id="student-name-div">
                    <h5 className='form-label'>Tick on the interested international university in Vietnam</h5>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='table-heading'>First Choice</th>
                                <th className='table-heading'>Second Choice</th>
                                <th className='table-heading'>Third Choice</th>
                                <th className='table-heading'>Not interested</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='checkbox-label'>VinUniversity</td>
                                <td><input  className='checkbox-input table-column' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                            </tr>
                            <tr>
                                <td className='checkbox-label'>British University Vietnam</td>
                                <td><input  className='checkbox-input table-column' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                            </tr>
                            <tr>
                                <td className='checkbox-label'>Fullbright</td>
                                <td><input  className='checkbox-input table-column' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                            </tr>
                            <tr>
                                <td className='checkbox-label'>RMIT</td>
                                <td><input  className='checkbox-input table-column' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                            </tr>
                            <tr>
                                <td className='checkbox-label'>Swinburne</td>
                                <td><input  className='checkbox-input table-column' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                                <td><input className='checkbox-input' type = 'checkbox'></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class = "mb-3" className='form-div' id="student-name-div">
                    <label className='form-label'>Please state the interested abroad university <span>(other than Vietnam)</span></label>
                    <input className='input-shorttext' type = 'text' id='student-name'></input>
                </div>
                <div class = "mb-3" className='form-div' id="student-name-div">
                    <label className='form-label'>GPA (10th grade and 11th grade)</label>
                    <input className='input-shorttext' type = 'text' id='student-name'></input>
                </div>

                <div class = "mb-3" className='form-div' id="student-facebook-div">
                    <label className='form-label'>English Proficiency</label>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>8.0++ IELTS ~ 110++ TOEFL</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>7.5 IELTS ~ 102 TOEFL</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>7.0 IELTS ~ 94 TOEFL</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>6.5 IELTS ~ 79 TOEFL</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>Have not taken any test</label>
                    </div>
                    <div className='checkboxdiv'>
                        <input className='checkbox-input' type = "checkbox"></input>
                        <label className='checkbox-label'>
                            <input className='checkbox-others-long' type = "text" placeholder='Other foreign language or english certificate (clear state the score)'></input></label>
                    </div>
                </div>

                {longtextform('List out position and your past work experience or extracurricular activities', 'extra-curricular')}
                {shorttextform('form-div', 'List out academic awards (if applicable)', 'academicawards')}

                <div class = "mb-3" className='form-div' id="student-name-div">
                    <label className='form-label'>Estimate the amount that your parents can pay for your school tuition fees</label>
                    <label className='form-label' id = "small-info">(per year)</label>
                    <label className='form-label' id = "small-info">** Both parties shall keep strictly confidential and shall not disclose</label>
                    <label className='form-label' id = "small-info">We hope to know the right amount in order to give a proper advice</label>
                            
                    <input className='input-shorttext' type = 'text' id='fee-estimation'></input>
                </div>

                {longtextform('List out name and the amount aiming scholarship for each  institution (if applicable)', 'scholarship-aim')}
                {longtextform('Any questions for our Avocado team/mentors?', 'student-question')}
            </div>
            </div>
            <button className='btn green-btn'>Choose this student</button>
            {footer()}
        </div>
    )
}

export default Staff_dashboard_link;
