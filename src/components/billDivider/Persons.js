import React from "react";
import PersonRow from "./PersonRow";

const Persons = ({persons})=>{

  const handle = ()=>{
    persons.forEach(person=>console.log(person))
  }

  return(
    <>
      {persons.map((person,index)=>{
        return(
          <PersonRow
            key={index}
            person = {person}
            onClick={handle}
          />
        )
      })}
    </>
  )
}

export default Persons;