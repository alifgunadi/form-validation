import React from "react";

function FormTextInput(props) {
    return(
        <div>
            <input type="text" {...props} className='form-text-input'/>
        </div>
    )
}
export default FormTextInput