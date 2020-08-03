import React from "react";
import { Link } from "react-router-dom"

export default ()=>{
  return(
    <>
      <Link
        to={"/flames"}
      >Flames</Link>
      <Link
        to={"/calculator"}
      >Calculator</Link>
    </>
  )
}