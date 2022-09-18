import React, { useState } from "react";
import "./App.css";
import User from "./users";
import Event from "./event";
import State from "./state";
import Props from "./props";
import logo from "./logo.svg";
import Profile from "./ifelse";
import Valid from "./valid";
export function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="name">
      <h1>Counter Project </h1>
      <h1>{count}</h1>
      {/* <button onClick={() => setcount(count - 1)}>Decrement</button> */}
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(0)}>Reset</button>
    </div>
  );
}

export default App;
