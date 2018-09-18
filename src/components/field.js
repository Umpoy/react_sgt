import React from "react";

export default props => {
    return (
        <div className="form-group">
            <label htmlFor="">{props.label}</label>
            <input {...props} className="form-control" />
        </div>
    )
}