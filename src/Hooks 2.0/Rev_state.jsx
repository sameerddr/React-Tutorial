import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState, useReducer, useMemo } from "react";

function Rev_state() {
  //   const [data, Setdata] = useState(0);
  //   const [item, Setitem] = useState(10);
  //   useEffect(() => {
  //     console.log("useEffcet");
  //   }, [data]);
  //   let initialValue = 0;

  //   const reducer = (state, action) => {
  //     console.log(state, action);
  //     if (action.type == "increment") {
  //       return state + 1;
  //     }
  //     if (action.type == "decrement") {
  //       return state - 1;
  //     }
  //   };
  //   const [count, dispatch] = useReducer(reducer, initialValue);

  //   const [count, setcount] = useState(0);
  //   const [item, setitem] = useState(10);

  //   const mul = useMemo(
  //     function mul() {
  //       console.log("multiply function");
  //       return count * 100;
  //     },
  //     [count]
  //   );

  const inputref = useRef(null);

  const handleControl = () => {
    console.log(inputref);
    inputref.current.value = "sameer";
    inputref.current.style.color = "red";
    inputref.current.focus();
  };

  return (
    <div>
      {/* <h1>{data}</h1>
      <h1>{item}</h1>
      <button onClick={() => Setdata(data + 1)}>click</button>
      <button onClick={() => Setitem(item + 10)}>click</button> */}

      {/* <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <h1>{count}</h1> */}

      {/* <h1>{count}</h1>
      <h1>{item}</h1>
      <h1>{mul}</h1>

      <button onClick={() => setcount(count + 1)}>Count</button>
      <button onClick={() => setitem(item + 10)}>Item</button> */}

      <input type="text" ref={inputref} />
      <button onClick={handleControl}>control</button>
    </div>
  );
}

export default Rev_state;
