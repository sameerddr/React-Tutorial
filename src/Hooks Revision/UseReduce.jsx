import React, { useReducer, useState } from "react";

function UseReduce() {
  let initialvalue = 0;
  function reducer(state, action) {
    console.log(state);
    console.log(action);
    if (action.type == "decrement") {
      return state - 1;
    }
    if (action.type == "increment") {
      return state + 1;
    }
  }

  const [count, dispatch] = useReducer(reducer, initialvalue);

  return (
    <div>
      <h1>UseReduce</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default UseReduce;
