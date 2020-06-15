import React from 'react'
import {NavLink} from 'react-router-dom'

const NavLinks = () => {
    return(
        <React.Fragment>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/createevent" className="nav-link">Create Event</NavLink>
        <NavLink to="/event" className="nav-link">Event</NavLink>
        </React.Fragment>
    )
}
export default NavLinks