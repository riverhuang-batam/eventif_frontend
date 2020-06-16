import React from 'react'

const SharedButton = props => {
    return(
        <div className={`btn ${props.className}`}>
            {props.children}
        </div>
    )
}
export default SharedButton;