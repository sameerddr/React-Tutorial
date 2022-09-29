import React, { forwardRef } from "react";

function ForwardRefUser(props, userref) {
  return (
    <div className="ref">
      <input type="text" ref={userref} />{" "}
    </div>
  );
}
export default forwardRef(ForwardRefUser);

// -- -- -- -- -- -- -- -- --App.js data
// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import "./App.css";
// import ForwardRef from "./hooks/ForwardRefUser";

// import ForwardRefUser from "./hooks/ForwardRefUser";
// function App() {
//   const inputRef = useRef(null);

//   function controlhandle() {
//     inputRef.current.style.color = "red";
//     inputRef.current.style.backgroundColor = "blue";
//     inputRef.current.focus();
//   }

//   return (
//     <div className="name">
//       <h1>UseRef</h1>
//       <ForwardRefUser ref={inputRef} />
//       <button onClick={controlhandle}>Handle Input</button>
//     </div>
//   );
// }

// export default App;
