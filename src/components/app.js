import React, { Component } from 'react';
import StudentList from "./student_list"
import '../assets/css/app.css';

export default () => {
    return (
        <div className="container">
            <h1 className="text-center my-3">Grade Table</h1>
            <div className="row"><StudentList /></div>
        </div>
    )
}

