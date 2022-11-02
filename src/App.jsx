import React, { createContext, useState, useRef, useReducer } from "react";
import { useEffect } from "react";
import "./App.css";
import Usememo from "./Usememo/Usememo";
// import ChildA from "./UseContext/ChildA";
// import axios from "axios";
// import { useEffect, useState, useRef, useContext } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Child from "./ContextAPI/Child";
import Usereducer2 from "./UseReducer/Usereducer2";
// import Home from "./Rout/Home";
// import About from "./Rout/About";
// import Contact from "./Rout/Contact";
// import Content from "./Rout/Content";
// import Header from "./Rout/Header";
// import User from "./Rout/User";
// import LoginForm from "./LogIn/LoginForm";
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
// import Test from "./test/Test";
// import Api from "./test/Api";
// import Ecom from "./E-Commerce/Ecom";
// import Show from "./Movie/Show";
// import LoginForm from "./LogIn/LoginForm";
// import Usememo from "./Usememo/Usememo";
// import Usereducer from "./UseReducer/Usereducer";
// import About from "./Router/About";
// import Contact from "./Router/Contact";
// import Home from "./Router/Home";
// import Navbar from "./Router/Navbar";
// import Services from "./Router/Services";
// import Error from "./Router/Error";
// import User from "./Router/User";
// import Nexting1 from "./Router/Nexting1";
// import Nexting2 from "./Router/N/Nexting2";
// import Ecom from "./E-Commerce/Ecom";
// import UserDetailsComponent from "./ContextAPI/UserDetailsComponent";
// import Todo from "./TodoWithlocalStorage/Todo";
function App() {
  const [count, Setcount] = useState(0);
  const [item, Setitem] = useState(0);

  const ref1 = useRef(null);
  useEffect(() => {
    console.log("useeffect item ");
  }, [item]);

  function handleref() {
    ref1.current.style.color = "red";
    ref1.current.style.backgroundColor = "blue";
    ref1.current.focus();
  }
  return (
    <>
      <div className="name">
        <h1>UseState Hooks </h1>
        <h1>{count}-Count</h1>
        <h1>{item}-Item</h1>
        <button onClick={() => Setcount(count + 1)}>Update</button>
        <button onClick={() => Setitem(item + 1)}>Item Update</button>

        <input type="text" ref={ref1} />
        <button onClick={handleref}>RefButton</button>
      </div>
      <Usereducer2 />
      <Usememo />
    </>
  );
}

export default App;
