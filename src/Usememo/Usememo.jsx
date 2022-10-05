import React, { useEffect, useState, useMemo } from "react";

function Usememo() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);

  const apple = useMemo(
    function sub() {
      console.log("sub usememo");
      return count - 1;
    },
    [count]
  );

  return (
    <>
      <h1>useMemo</h1>
      <h1>{count}</h1>
      <h1>{item}</h1>
      <h1>{apple}</h1>
      <button onClick={() => setcount(count + 1)}> Add count </button>
      <button onClick={() => setitem(item * 10)}> Mul item </button>
    </>
  );
}

export default Usememo;
