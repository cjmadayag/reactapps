import React from "react";
import {Input,Button} from "reactstrap";

const PersonInput = ({setName,name,setShare,share,handleAddPerson})=>{
  return (
    <div className="d-flex justify-content-between">
      <Input
        className="w-50"
        placeholder="name"
        value = {name}
        onChange={e=>setName(e.target.value)}
      />
      <Input
        className="w-25"
        placeholder="share"
        value = {share}
        onChange={e=>{
            if(e.nativeEvent.data>=0 
                || e.nativeEvent.inputType==="deleteContentBackward" 
                || e.nativeEvent.inputType==="deleteContentForward")
                setShare(e.target.value)}}
      />
      <Button
        className="btn btn-success"
        onClick = {handleAddPerson}
      >
        Add
      </Button>
    </div>
  )
}

export default PersonInput