import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        // this.props.user.test = 'ian'
        // console.log("props from table: ", this.props.user)
    }

    render() {
        return (
            <div className="col-xs-12 student-list-container col-md-9" >
                <table className="student-list table table-hover">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Course</th>
                            <th>Student Grade</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;