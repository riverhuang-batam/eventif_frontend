import React from 'react'
import './EventItem.css'
const EventItem = props => {
    return(
        <React.Fragment>
            <img src={props.image} className="card-img-top"/>
            <div className="container">
            <h5>{props.title} <span className="float-right">{props.price}</span></h5>
            </div>
        </React.Fragment>
    )
}
export default EventItem;