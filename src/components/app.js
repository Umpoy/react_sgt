import React, { Component } from 'react';
import StudentList from "./student_list";
import StudentForm from "./student_form";
import '../assets/css/app.css';

export default () => {
    return (
        <div className="container">
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

