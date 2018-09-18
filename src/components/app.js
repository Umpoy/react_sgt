import React, { Component } from 'react';
import StudentList from "./student_list";
import StudentForm from "./student_form";
import '../assets/css/app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="container" >
                <h1 className="text-center my-3">Grade Table</h1>
                <div className="row">
                    <div className="col-4">
                        <StudentForm />
                    </div>
                    <StudentList />

                </div>
            </div>
        )
    }
}

export default App;
