import React, { useState, useEffect, useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
  }
};

function Usereducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <h1>Count {count} </h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </>
  );
}

export default Usereducer;
