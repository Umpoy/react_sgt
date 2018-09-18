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
    }

    render() {
        return (
            <div className="container" >
                <h1 className="text-center my-3">Grade Table</h1>
                <div className="row">
                    <div className="col-4">
                        <StudentForm />
                    </div>
                    <StudentList students={this.state.students} />

                </div>
            </div>
        )
    }
}

export default App;
