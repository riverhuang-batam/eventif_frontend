import React, {useState, useEffect} from 'react'
import UsersEvent from './UsersEvent'
import EventJumbotron from '../../Event/components/EventJumbotron'
import EventList from '../components/EventList'
import axios from 'axios'
const AllEvent = () => {
    const [event, setEvent] = useState([])
    const te = process.env.REACT_APP_API_URL
    console.log(te)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/event`)
        .then(response => setEvent(response.data))
        .catch(err => alert(err))
    },[])
    return(
        <React.Fragment>
            <EventJumbotron/>
            <UsersEvent/>
            {event.map(items => 
                <EventList items={items}/>    
            )}
        </React.Fragment>
    )
}
export default AllEvent;