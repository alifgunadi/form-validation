import React from "react";
import './style.css';


function FormElement({htmlFor, children}) {
    return(
        <div className="form-label">
            <label htmlFor={htmlFor}>{children}</label>
        </div>
        )
}

export default FormElement