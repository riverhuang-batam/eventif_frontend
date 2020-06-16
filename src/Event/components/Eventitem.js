import React from 'react'
import './EventItem.css'
const EventItem = props => {
    console.log(props)
    return(
        <React.Fragment>
            <img src={props.image} className="card-img-top"/>
            <div className="container">
            <h5>{props.title}</h5>
            <h5>Price: {props.price}</h5>
            <h5>Location: {props.location}</h5>
            <h5>Description: {props.description}</h5>
            </div>
        </React.Fragment>
    )
}
export default EventItem;