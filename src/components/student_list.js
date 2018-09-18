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
        const list = this.state.students.map((item, index) => {
            return <StudentCard key={index} firstName={item.firstName} lastName={item.lastName} />
        });
        return <div>{list}</div>
    }
}

export default StudentList;