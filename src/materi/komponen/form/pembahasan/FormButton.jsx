import React from "react";
import './style.css';

function FormButton({primary, children, onClick }) {
    const buttonType = primary ? 'Submit' : 'Button'

    return(
    <div>
        <button className="form-button" onClick={onClick} type={buttonType}>{children}</button>
    </div>
    )
}
export default FormButton