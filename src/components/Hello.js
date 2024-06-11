import React,{useState} from "react";

export default function Hello(props) {

  let a=document.querySelector(".container p");
  let b=document.querySelector(".container .container1 p");

  const handleonclick1=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    b.innerText=text.split(" ").length*0.008+"min"
  }
  const handleonclick2=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    b.innerText=text.split(" ").length*0.008+"min"
  }
  const handleonclick3=()=>{
    let newText="";
    setText(newText);
    a.innerText=""
    b.innerText=""
  }
  const handleonclick4=()=>{
    let newText=text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
  }
  const onchange=(e)=>{
    setText(e.target.value);
  }
  const [text,setText]=useState("");

  return (
    <>
    <div className="container my-4"  style={{color: props.mode==="dark"? 'white':'black'}}>
        <div className="mb-3">
          <h1>Enter Your Text</h1>
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={onchange} style={{backgroundColor: props.mode==="dark"? 'grey':'white',color: props.mode==="dark"? 'white':'black'}}></textarea>
        </div>
        <button className={`btn btn-${props.mode==="dark"? 'success':'primary'} mx-2`} onClick={handleonclick1}>Convert to uppercase</button>
        <button className={`btn btn-${props.mode==="dark"? 'success':'primary'} mx-2`} onClick={handleonclick2}>Convert to lowercase</button>
        <button className={`btn btn-${props.mode==="dark"? 'success':'primary'} mx-2`} onClick={handleonclick3}>Clear Text</button>
        <button className={`btn btn-${props.mode==="dark"? 'success':'primary'} mx-2`} onClick={handleonclick4}>To capitalize the first letter</button>
        
    </div>
    <div className="container" style={{color: props.mode==="dark"? 'white':'black'}}>
      <h4>Your text summary</h4>
      <p>{text.split(" ").length===1?text.split(" ").length-1:text.split(" ").length-1} words {text.length} characters</p>
    </div>
    <div className="container" style={{color: props.mode==="dark"? 'white':'black'}}>
      <div className="container1">
        <h4>time consume to read the words</h4>
        <p>____</p>
      </div>
    </div>
    <div className="container" style={{color: props.mode==="dark"? 'white':'black'}}>
      <h4>Preview</h4>
      <p>Enter come something to Preview--{text}</p>
    </div>
    </>
  );
}
