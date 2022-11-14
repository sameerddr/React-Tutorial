// import React, { useRef } from "react";

// function UseRef() {
//   let inputref = useRef(null);
//   function handleref() {
//     console.log(inputref);
//     inputref.current.value = "sameer";
//     inputref.current.style.color = "red";
//     inputref.current.focus();
//   }
//   return (
//     <div>
//       <h2>useRef Hook</h2>
//       <input type="text" ref={inputref} />
//       <button onClick={handleref}>Save</button>
//     </div>
//   );
// }

// export default UseRef;

// The below for Forward Ref
import React, { useRef } from "react";
import UseRef2 from "./UseRef2";

function UseRef() {
  let inputref = useRef(null);
  function handleref() {
    console.log(inputref);
    inputref.current.value = "sameer";
    inputref.current.style.color = "red";
    inputref.current.focus();
  }
  return (
    <div>
      <h2>useRef Hook</h2>
      <UseRef2 ref={inputref} />
      <button onClick={handleref}>Save</button>
    </div>
  );
}

export default UseRef;
