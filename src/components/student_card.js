import React from 'react';

export default props => {
    const { firstName, lastName, studentCourse, studentGrade } = props.contact
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">{lastName}</div>
                <div className="card-block">
                    <h4 className="cart-title">{firstName} {lastName}</h4>
                    <div className="card-text">
                        <p><b>Course: </b>{studentCourse}</p>
                        <p><b>Grade: </b>{studentGrade}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}