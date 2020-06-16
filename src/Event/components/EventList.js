import React from "react";
import SharedCard from "../../Shared/UIElements/SharedCard";
import EventItem from "./Eventitem";
import { Link } from "react-router-dom";
const EventList = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      
          <div className="container">
          <div className="row ">
              <div className="col-md-4">
              <Link to={`/event/${props.items._id}`}>
        <SharedCard
          className="shadow"
          
        >
         <EventItem 
         image={
            `${process.env.REACT_APP_API_URL}/${props.items.eventImage}`
          }
          title={props.items.title}
          price={props.items.price}/>
        </SharedCard>
        
        </Link>
        </div>
        </div>
        </div>
      
    </React.Fragment>
  );
};
export default EventList;
