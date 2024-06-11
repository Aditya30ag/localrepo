import React from "react";
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <nav className={`navbar bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          NavBar
        </a>
        <a className="navbar-brand" href="/">
          About
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} mode</label>
        </div>
      </div>
    </nav>
  );
}
