import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(1);

  const apple = useMemo(
    function sub() {
      console.log("sub usememo");
      return count - 1;
    },
    [count]
  );
  return (
    <div>
      <h1>{count}</h1>
      <h1>{item}</h1>
      <h2>{apple}</h2>
      <button onClick={() => setcount(count + 1)}>Add</button>
      <button onClick={() => setitem(item * 10)}>Mul</button>
    </div>
  );
}

export default UseMemo;
