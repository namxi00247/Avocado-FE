import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const my_student_table = (students, link) => {
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
                        <button onClick={link} className='table_button'>Create</button>
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
                        <button onClick={link} className='table_button'>Create</button>
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

export default my_student_table;