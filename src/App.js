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
// import Constrructor from "./lifecycle/Constrructor";
// import Reuse from "./ReuseComponent/Reuse";
// import ValidForm from "./Form-Vald/ValidForm";
import Showtodo from "./TodoApp/Showtodo";
import Todo from "./TodoApp/Todo";
function App() {
  return (
    <div className="name">
      <h1>Todo App By SameerDDR</h1>
      <Todo></Todo>
    </div>
  );
}

export default App;
