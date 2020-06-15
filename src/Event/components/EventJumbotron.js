import React from 'react'
import SharedJumbotron from '../../Shared/UIElements/SharedJumbotron'
import './EventJumbotron.css'
const EventJumbotron = props => {
    return(
        <React.Fragment>
            <SharedJumbotron className="jumbotron-image">
            {props.children}
            </SharedJumbotron>
        </React.Fragment>
    )
}
export default EventJumbotron;