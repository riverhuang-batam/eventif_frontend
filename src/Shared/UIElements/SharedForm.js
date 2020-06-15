import React from 'react'

const SharedForm = props => {
    return(
        <form onSubmit={props.submit}>
            {props.children}
        </form>
    )
}
export default SharedForm