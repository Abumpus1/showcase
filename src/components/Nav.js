import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav>
      <h1>CREATIVE TITLE WIP</h1>
      <div className="nav-buttons-box">
        <NavLink exact to="/">HOME</NavLink>
        <NavLink to="/search">SEARCH</NavLink>
      </div>
    </nav>
  )
}

export default Nav;