import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import shorttextform from './shorttextform';
import longtextform from './longtextform';

const Studentform = (title) => {
    return (
        <div id = 'student-border1' className='student-border container'>
            <div className='student-container'>
            <h1 className='main-title' style={{margin: "0"}}>{title}</h1>
            {shorttextform('Full Name', 'student-name')}
            {shorttextform('E-Mail', 'student-mail')}
            {shorttextform('Link facebook', 'student-facebook')}
            {shorttextform('Phone number', 'student-phone')}
            {shorttextform('School', 'student-school')}

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
            {shorttextform('List out academic awards (if applicable)', 'academicawards')}

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
)
}

export default Studentform;