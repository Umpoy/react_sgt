import React from 'react';

export default props => {
    const { firstName, lastName, student_course, student_grade } = props.contact
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">{lastName}</div>
                <div className="card-block">
                    <h4 className="cart-title">{firstName} {lastName}</h4>
                    <div className="card-text">
                        <p><b>Course: </b>{student_course}</p>
                        <p><b>Grade: </b>{student_grade}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}