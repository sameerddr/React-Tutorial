import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <div className="nav">
        <h1>Hi</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sevices">Sevices</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
