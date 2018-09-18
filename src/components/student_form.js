import React, { Component } from 'react';
import Field from "./field";

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                studentCourse: '',
                studentGrade: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({
            form: { ...form }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);
    }

    render() {
        const { firstName, lastName, studentCourse, studentGrade } = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange} />
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange} />
                <Field name="studentCourse" label="Student Course" type="text" value={studentCourse} onChange={this.handleInputChange} />
                <Field name="studentGrade" label="Student Grade" type="text" value={studentGrade} onChange={this.handleInputChange} />
                <button>Add Student</button>
            </form >
        );
    }
}

export default StudentForm; 