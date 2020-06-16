import React from 'react'
import './SharedInput.css'
const SharedInput = (props) => {
    // console.log(props)
    return(
        <React.Fragment>
        <label>{props.label}</label>
        <input type={props.type} className={`form-control input-style ${props.className}`} placeholder={props.placeholder}/>
        </React.Fragment>
    )
}
export default SharedInput;