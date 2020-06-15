import React from 'react'

const SharedCard = props => {
    return(
        <div className={`card ${className}`}>
            {props.children}
        </div>
    )
}
export default SharedCard;