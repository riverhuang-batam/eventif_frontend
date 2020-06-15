import React from 'react'

const SharedInput = (props) => {
    return(
        <React.Fragment>
        <label>{props.label}</label>
        <input type={props.type} className={`form-control ${props.className}`} placeholder={props.placeholder}/>
        </React.Fragment>
    )
}
export default SharedInput;