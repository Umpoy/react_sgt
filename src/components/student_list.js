import React from "react";

const StudentList = ({ student }) => {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>{student.grade}</td>
            <td><button className="btn btn-danger">Delete</button></td>
        </tr>
    )
}

export default StudentList;