import React, { Component } from 'react';
import StudentCard from './student_card';
import studentData from '../data/students';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: studentData
        }
    }
    render() {
        console.log("Student Data", this.state.students)
        return <h1>Sometext</h1>
    }
}

export default StudentList;