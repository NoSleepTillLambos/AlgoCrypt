import React from "react";
import Home from "./Home";
import Comparison from "./Comparison";
import Timeline from "./Timeline";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <h1>ALGO CRYPT</h1>
      <img src="./unnamed.jpg"></img>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Comparison">Comparison</Link>
          </li>
          <li>
            <Link to="/Timeline">Timeline</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
