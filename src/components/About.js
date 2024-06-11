import React, { useState } from 'react'

export default function About() {
  const [mystyle,setmystyle]=useState({
    color:"white",
    backgroundColor:"black"
  })
  const [btnclick,setbtnclick]=useState("Change mode to light")
  const changeMode=()=>{
    if (mystyle.backgroundColor==="black"){
      setmystyle({
        color:"black",
        backgroundColor:"white"
      })
      setbtnclick("Change mode to dark")
    }else{
      setmystyle({
        color:"white",
        backgroundColor:"black"
      })
      setbtnclick("Change mode to light")
    }
  }

  return (
      <div className="container" style={mystyle}>
        <h1 className="my-4">About</h1>
          <button className="btn btn-primary my-4" type="button" onClick={changeMode}>{btnclick}</button>
      </div>
  );
}