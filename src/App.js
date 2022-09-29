import React, { createContext } from "react";
import axios from "axios";
import { useEffect, useState, useRef, useContext } from "react";
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
// import ForwardRefUser from "./hooks/ForwardRefUser";
// import HOC from "./HOC/HOC";
// import Weather from "./Weather/Weather";
// import Git from "./GitUser/Git";
import ChildA from "./UseContext/ChildA";
const data = createContext();
const data1 = createContext();
function App() {
  // Usecontext - create,provider,useContext

  const name = "sameer";
  const gender = "male";
  return (
    <div className="name">
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA></ChildA>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, data1 };
