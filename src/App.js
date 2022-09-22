import React from "react";
import { useState } from "react";
import "./App.css";
// import User from "./users";
// import Event from "./event";
// import State from "./state";
// import Props from "./props";
// import logo from "./logo.svg";
// import Profile from "./ifelse";
// import Valid from "./valid";
// import Insta from "./Instafeed";
import FunProps from "./FunProps";

function App() {
  function getdata() {
    alert("sameer is passing function as props");
  }
  return (
    <div className="name">
      <h1>Props in Functional Component</h1>
      <FunProps name={"aman"} email={"sam@gmail.com"} />
      <FunProps func={getdata} />
    </div>
  );
}

export default App;
