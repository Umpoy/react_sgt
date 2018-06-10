import React from 'react';


export default () => {
    return (
        <div className="page-header">
            <h1 className="d-none d-sm-block ">Student Grade Table
                    <small>Grade Average : <span className="label label-default avgGrade">100</span></small>
            </h1>
            <h3 className="d-block d-sm-none">Student Grade Table
                <small>Grade Average : <span className="label label-default avgGrade"></span></small>
            </h3>
        </div>
    )
}