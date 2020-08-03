import React from "react";
import { Link } from "react-router-dom"

export default ()=>{
  return(
    <>
      <h1>Hello World</h1>
      <Link
        to={"/flames"}
      >Flames</Link>
      <Link
        to={"/calculator"}
      >Calculator</Link>
    </>
  )
}