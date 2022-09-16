import React, { useState } from "react";
import "./App.css";
import User from "./users";
import Event from "./event";
import State from "./state";
import Props from "./props";
import logo from "./logo.svg";

export function App() {
  const [name, setname] = useState("");
  const [tnc, settnc] = useState(false);
  const [interest, setinterest] = useState("");
  function getformdata(e) {
    console.log(name, tnc, interest);
    e.preventDeafault();
  }

  return (
    <div className="name">
      <form onSubmit={getformdata}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
        />{" "}
        <br /> <br />
        <select
          onChange={(e) => {
            setinterest(e.target.value);
          }}
        >
          <option value="">Virat</option>
          <option value="">Dhoni</option>
          <option value="">Rohit</option>
        </select>{" "}
        <br /> <br />
        <input type="checkbox" onChange={(e) => {settnc(e.target.checked) }} />
        <span>Terms And Conditions</span> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
