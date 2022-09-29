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
// import ChildA from "./UseContext/ChildA";
import Test from "./test/Test";
import Api from "./test/Api";

function App() {
  return (
    <div>
      {/* <Test /> */}
      <Api />
    </div>
  );
}

export default App;
