import React, { Component } from 'react';
import StudentList from "./student_list";
import StudentForm from "./student_form";
import studentData from '../data/students';
import '../assets/css/app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: studentData
        }
        this.addContact = this.addContact.bind(this);
    }

    addContact(student) {
        console.log('App: addComponent:', student);

        this.setState({
            students: [student, ...this.state.students]
        })
    }

    render() {
        return (
            <div className="container" >
                <h1 className="text-center my-3">Grade Table</h1>
                <div className="row">
                    <div className="col-4">
                        <StudentForm add={this.addContact} />
                    </div>
                    <StudentList students={this.state.students} />

                </div>
            </div>
        )
    }
}

export default App;
