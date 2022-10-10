import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
// import PropsUseEffect from "./hooks/PropsUseEffect";
// import Form from "./Form";
// import User from "./users";
// import Event from "./event";
// import State from "./state";
// import Props from "./props";
// import logo from "./logo.svg";
// import Profile from "./ifelse";
// import Valid from "./valid";
// import Insta from "./Instafeed";
// import FunProps from "./FunProps";
function App() {
  var std = ["sam", "aman", "lokesh", "manan"];
  var arr = [
    {
      name: "sameer",
      number: 3267,
    },
    {
      name: "sasjh",
      number: 3267,
    },
    {
      name: "aman",
      number: 3267,
    },
  ];
  return (
    <div className="name">
      {" "}
      {std.map((key) => (
        <h1> The Name is {key} </h1>
      ))}{" "}
      {arr.map((item) => (
        <div className="try">
          <h1> Lets Check {item.name} </h1> <h1> Lets Check {item.number} </h1>{" "}
        </div>
      ))}{" "}
    </div>
  );
}

export default App;
