import React from "react";

const SharedJumbotron = props => {
  return (
    <div className={`jumbotron jumbotron-fluid ${props.className}`}>
      
        {props.children}
      
    </div>
  );
};
export default SharedJumbotron;
