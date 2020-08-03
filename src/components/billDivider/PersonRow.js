import React from "react";

const PersonRow = ({person})=>{
  return(
    <>
      <h5>{person[0]} {person[1]}</h5>
    </>
  )
}

export default PersonRow;