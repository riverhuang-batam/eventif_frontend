import React, {useState, useEffect} from 'react'
import UsersEvent from './UsersEvent'
import EventJumbotron from '../../Event/components/EventJumbotron'
import EventList from '../components/EventList'
import SharedSlider from '../../Shared/UIElements/SharedSlider'
import Slider from 'react-slick'
import axios from 'axios'
const AllEvent = () => {
    const [event, setEvent] = useState([])
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/event`)
        .then(response => setEvent(response.data))
        .catch(err => alert(err))
    },[])
    return(
        <React.Fragment>
            <EventJumbotron/>
            <UsersEvent/>
            <div className="container">
            <div className="row ">
            {event.map(items => 
            <div className="col-md-3">
                <EventList items={items}/>    
                </div>
            )}
            </div>
            </div>
        </React.Fragment>
    )
}
export default AllEvent;