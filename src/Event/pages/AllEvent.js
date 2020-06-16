import React, {useState, useEffect} from 'react'
import axios from 'axios'
const AllEvent = () => {
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/event`)
        .then(response => console.log(response))
        .catch(err => alert(err))
    },[])
    return(
        <React.Fragment>
            test
        </React.Fragment>
    )
}
export default AllEvent;