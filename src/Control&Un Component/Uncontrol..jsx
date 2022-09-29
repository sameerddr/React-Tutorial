// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);

//   function submit(e) {
//     console.log("calling ");
//     e.preventDefault();
//     console.log(ref1.current.value);
//     console.log(ref2.current.value);
//     console.log(document.getElementById("text").value);
//   }

//   return (
//     <div className="name">
//       <h1> Uncontrol Component </h1>{" "}
//       <form>
//         <input type="x" ref={ref1} /> <br /> <br /> <br />
//         <input type="x" ref={ref2} /> <br /> <br /> <br />
//         <input type="x" id="text" /> <br /> <br /> <br />
//         <button type="submit" onClick={submit}>
//           Submit{" "}
//         </button>{" "}
//       </form>{" "}
//     </div>
//   );
// }

// export default App;
