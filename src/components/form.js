import React, { Component } from 'react';
import $ from "jquery";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            course: '',
            grade: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handleCourse = this.handleCourse.bind(this);
        this.handleGrade = this.handleGrade.bind(this);
        this.submitInfo = this.submitInfo.bind(this);

        console.log("props from form: ", this.props.value.students)
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleCourse(event) {
        this.setState({ course: event.target.value });
    }

    handleGrade(event) {
        this.setState({ grade: event.target.value });
    }

    submitInfo() {
        if (!this.state.name || !this.state.course || !this.state.grade) {
            return
        }
        this.props.value.students.push(this.state);
        console.log(this.props.value.students);
        <StudentList />
    }

    render() {
        return (
            <div className="student-add-form col-md-3 col-sm-12">
                <h4>Add Student</h4>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-plus"></i></span>
                    </div>
                    <input type="text" className="form-control" name="studentName" id="studentName" value={this.state.name} onChange={this.handleName} placeholder="Student Name" />
                </div>
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-list-alt"></i></span>
                    </div>
                    <input type="text" className="form-control" name="course" id="course" value={this.state.course} onChange={this.handleCourse}
                        placeholder="Student Course" />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-graduation-cap"></i></span>
                    </div>
                    <input type="text" className="form-control" name="studentGrade" id="studentGrade" value={this.state.grade} onChange={this.handleGrade} placeholder="Student Grade" />
                </div>
                <button type="button" className="btn btn-success btn-block add" onClick={this.submitInfo}>Add</button>
                <button type="button" className="btn btn-default cancel btn-block">Cancel</button>
                <button type="button" className="btn btn-info getData btn-block">Get Data From Server</button>
            </div>
        )
    }
}

export default Form;