import React, { Component } from 'react';
import StudentList from "./student_list"
import '../assets/css/app.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Grade Table</h1>
                <StudentList />
            </div>
        )
    }
}

export default App;
