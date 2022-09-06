import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav>
      <NavLink className="logo-home-button" exact to="/">
      <div className="name-box">
        <img className="logo" src="../disk.png" alt="Save Game icon" />
        <h1><span className="dollar">Save</span>Game</h1>
      </div>
      </NavLink>
      <div className="nav-buttons-box">
        <NavLink className="button" exact to="/">HOME</NavLink>
        <NavLink className="button" to="/search">SEARCH</NavLink>
      </div>
    </nav>
  )
}

export default Nav;