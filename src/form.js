// import React, { useState } from "react";
// import "./App.css";
// import User from "./users";
// import Event from "./event";
// import State from "./state";
// import Props from "./props";
// import logo from "./logo.svg";

// export function App() {
//   function getformdata(e) {
//     e.preventDeafault();
//     console.log(name, tnc, interest);
//   }
//   const [name, setname] = useState("");
//   const [tnc, settnc] = useState(false);
//   const [interest, setinterest] = useState("");

//   return (
//     <div className="name">
//       <h1>Form</h1>
//       <form onSubmit={getformdata}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           onChange={(e) => setname(e.target.value)}
//         />{" "}
//         <br /> <br />
//         <select
//           onChange={(e) => {
//             setinterest(e.target.value);
//           }}
//         >
//           <option value="">Virat</option>
//           <option value="">Dhoni</option>
//           <option value="">Rohit</option>
//         </select>{" "}
//         <br /> <br />
//         <input
//           type="checkbox"
//           onChange={(e) => {
//             settnc(e.target.checked);
//           }}
//         />
//         <span>Terms And Conditions</span> <br /> <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;