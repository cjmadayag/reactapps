import React from "react";

const Button = ({label,setValue,className})=>{
  return(
    <div
      className={className}
    >
      <button
        className="btn btn-secondary w-75"
        onClick={()=>setValue(label)}
      >{label}</button>
    </div>
  )
}

export default Button;