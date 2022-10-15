import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      Navbar
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/user/sameer">Sameer</NavLink>
        </li>
        <li>
          <NavLink to="/user/anil">Anil</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
