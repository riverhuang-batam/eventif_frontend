import React from 'react'

const SharedFormGroup = (props) => {
    return(
        <div className="form-group">
            {props.children}
        </div>
    )
}
export default SharedFormGroup;