import React from "react";
import SharedCard from "../../Shared/UIElements/SharedCard";
import EventItem from "./Eventitem";
import SharedSlider from "../../Shared/UIElements/SharedSlider";
import { Link } from "react-router-dom";
const EventList = (props) => {
  console.log(props);
  
  return (
    <React.Fragment>
      
              
                <SharedCard className="shadow">
                  <EventItem
                    image={`${process.env.REACT_APP_API_URL}/${props.items.eventImage}`}
                    title={props.items.title}
                    price={props.items.price}
                    location={props.items.location}
                    description={props.items.description}
                    link_id={`/event/${props.items._id}`}
                  />
                </SharedCard>
              
      
    </React.Fragment>
  );
};
export default EventList;
