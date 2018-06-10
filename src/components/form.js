import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        console.log("props from table: ", this.props.user)
    }

    SubmitInfo() {
        console.log('worked');
    }

    render() {
        return (
            <div className="student-add-form col-md-3 col-sm-12">
                <h4>Add Student</h4>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-plus"></i></span>
                    </div>
                    <input type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name" />
                </div>
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-list-alt"></i></span>
                    </div>
                    <input type="text" className="form-control" name="course" id="course"
                        placeholder="Student Course" />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-graduation-cap"></i></span>
                    </div>
                    <input type="text" className="form-control" name="studentGrade" id="studentGrade"
                        placeholder="Student Grade" />
                </div>
                <button type="button" className="btn btn-success btn-block add" onClick={this.SubmitInfo}>Add</button>
                <button type="button" className="btn btn-default cancel btn-block">Cancel</button>
                <button type="button" className="btn btn-info getData btn-block">Get Data From Server</button>
            </div>
        )
    }
}

export default Form;