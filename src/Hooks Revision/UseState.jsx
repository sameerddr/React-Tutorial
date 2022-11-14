import React, { useState } from "react";
import { useEffect } from "react";

function UseState() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(0);

  useEffect(() => {
    console.log("useeffect is Calling");
  }, [count]);
  //   useEffect(() => {
  //     console.log("useeffect is Calling");
  //   }, []);
  return (
    <>
      <h1>USeState Hook</h1>
      <h2>{count}</h2>
      <h2>{item}</h2>
      <button onClick={() => setcount(count + 1)}>Update +</button>
      <button onClick={() => setitem(item - 1)}>Update -</button>
    </>
  );
}

export default UseState;
