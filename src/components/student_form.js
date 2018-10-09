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
        this.reset = this.reset.bind(this);
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
        this.props.add(this.state.form);
    }

    reset() {
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                studentCourse: '',
                studentGrade: ''
            }
        })
    }

    render() {
        const { firstName, lastName, studentCourse, studentGrade } = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange} />
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange} />
                <Field name="studentCourse" label="Student Course" type="text" value={studentCourse} onChange={this.handleInputChange} />
                <Field name="studentGrade" label="Student Grade" type="text" value={studentGrade} onChange={this.handleInputChange} />
                <button className="form-control btn btn-primary">Add Student</button>
                <button className="form-control btn btn-danger" type="button" onClick={this.reset}>Reset</button>
            </form >
        );
    }
}

export default StudentForm; 