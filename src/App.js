import React, { useState } from "react";
import "./App.css";
import User from "./users";
import Event from "./event";
import State from "./state";
import Props from "./props";
import logo from "./logo.svg";

export function App() {
  const [status, setstatus] = useState();

  return (
    <div className="name">
      {status ? <h1>Hello</h1> : null}

      <button onClick={() => setstatus(false)}>Hide</button>
      <button onClick={() => setstatus(true)}>Show</button>
      <button onClick={() => setstatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
