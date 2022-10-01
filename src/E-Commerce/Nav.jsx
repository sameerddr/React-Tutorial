import React from "react";
import Home from "./Home";

function Nav() {
  return (
    <div>
      {
        <header>
          <nav className="navbar">
            <div className="list">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <div className="search">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search this website"
                  />
                </div>
              </ul>
            </div>
          </nav>
        </header>
      }{" "}
    </div>
  );
}

export default Nav;
