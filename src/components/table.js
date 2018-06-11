import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

import StudentList from "./student_list";

class Table extends Component {
    constructor(props) {
        super(props);
        console.log('from table: ', this.props.value.students)
    }

    renderStudent() {
        this.props.value.students.map((student) => {
            return <StudentList student={student} />
        })
    }

    render() {
        return (
            <div className="col-xs-12 student-list-container col-md-9" >
                <table className="student-list table table-hover">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Course</th>
                            <th>Student Grade</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {this.renderStudent()}
                    </tbody>
                </table>
            </div>
        )
    }
}





export default Table;