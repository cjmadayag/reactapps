import React from "react";
import {Input} from "reactstrap";

const AmountInput = ({amount,setAmount})=>{  
  return(
    <div className="d-flex">
      <h5 className="w-50 text-center my-auto"
      >Amount:</h5>
      <Input
        className="w-50"
        value={amount}
        onChange={e=>{
          if(e.nativeEvent.data>=0 
            || e.nativeEvent.inputType==="deleteContentBackward" 
            || e.nativeEvent.inputType==="deleteContentForward")
            setAmount(e.target.value)
        }}
      
      />
    </div>
  )
}

export default AmountInput;