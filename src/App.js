import React from "react";
import { useEffect, useState, useRef } from "react";
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
// import Constrructor from "./lifecycle/Constrructor";
// import Reuse from "./ReuseComponent/Reuse";
// import ValidForm from "./Form-Vald/ValidForm";
// import Showtodo from "./TodoApp/Showtodo";
// import Todo from "./TodoApp/Todo";
// import Pure from "./purecomponent/Pure";

function App() {
  const inputRef = useRef(null);

  function controlhandle() {
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "blue";
    inputRef.current.focus();
  }

  return (
    <div className="name">
      <h1>UseRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={controlhandle}>Handle Input</button>
    </div>
  );
}

export default App;
