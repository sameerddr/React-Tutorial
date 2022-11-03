// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import "./App.css";

// function App() {
//
//   const inputRef = useRef(null);

//   function controlhandle() {
//     inputRef.current.style.color = "red";
//     inputRef.current.style.backgroundColor = "blue";
//     inputRef.current.focus();
//   }

//   return (
//     <div className="name">
//       <h1>UseRef</h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={controlhandle}>Handle Input</button>
//     </div>
//   );
// }

// export default App;

// function App() {
//     const [count, Setcount] = useState(0);
//     const [item, Setitem] = useState(0);

//     const ref1 = useRef(null);
//     useEffect(() => {
//       console.log("useeffect item ");
//     }, [item]);

//     function handleref() {
//       ref1.current.style.color = "red";
//       ref1.current.style.backgroundColor = "blue";
//       ref1.current.focus();
//     }
//     return (
//       <>
//         <div className="name">
//           <h1>UseState Hooks </h1>
//           <h1>{count}-Count</h1>
//           <h1>{item}-Item</h1>
//           <button onClick={() => Setcount(count + 1)}>Update</button>
//           <button onClick={() => Setitem(item + 1)}>Item Update</button>

//           <input type="text" ref={ref1} />
//           <button onClick={handleref}>RefButton</button>
//         </div>
//         <Usereducer2 />
//         <Usememo />
//       </>
//     );
//   }

//   export default App;
