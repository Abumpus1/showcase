import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav>
      <h1>SaveGame</h1>
      <div className="nav-buttons-box">
        <NavLink className="button" exact to="/">HOME</NavLink>
        <NavLink className="button" to="/search">SEARCH</NavLink>
      </div>
    </nav>
  )
}

export default Nav;