import React, { Component } from 'react';
import StudentCard from './student_card';

class StudentList extends Component {

    render() {
        const list = this.props.students.map((item, index) => {
            return <StudentCard key={index} contact={item} />
        });

        return (
            <div className="col-8">
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
}

export default StudentList;
