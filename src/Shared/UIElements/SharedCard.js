import React from "react";

const SharedCard = (props) => {
  console.log(props)
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  );
};
export default SharedCard;
