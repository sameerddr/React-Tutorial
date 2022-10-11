import React, { useReducer } from "react";

function Usereducer2() {
  //   var initialvalue = 0;

  function reducer(state, action) {
    console.log(state, action);

    if (action.type == "increment") {
      return state + 1;
    }
    if (action.type == "decrement") {
      return state - 1;
    }
    if (action.type == "reset") {
      return initialvalue;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialvalue);
  // We call dispatch() to change the state only

  return (
    <div>
      <h1>Usereducer2</h1>
      <h2>{count}</h2>
      <div className="box">
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default Usereducer2;
