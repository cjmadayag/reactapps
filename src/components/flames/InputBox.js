import React from "react";
import {Input} from "reactstrap";

const InputBox = ({label1,label2,setName,name})=>{
  return(
    <>
      <span>{label1}</span>
      <Input
        placeholder="Enter name here"
        onChange={e=>setName(e.target.value)}
        value={name}
      />
      <p>{label2}: <span className="font-weight-bold">{name}</span></p>
    </>
  )
}

export default InputBox;