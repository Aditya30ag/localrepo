import "./App.css";
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import Alert from "./components/Alert";
import React, { useState } from "react";
//import About from "./components/About";
//import { createBrowserRouter,RouterProvider} from "react-router-dom";

document.body.style.backgroundColor = "#65666C";

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is been activated", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dart mode is been activated", "success");
    }
  };
  /*const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar mode={mode} toggleMode={toggleMode} /><Hello mode={mode}/></>
    },
    {
      path:"/about",
      element:<><Navbar mode={mode} toggleMode={toggleMode} /><About/></>
    }
  ])*/

  
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Hello mode={mode}/>
    </>
  );
}

export default App;
