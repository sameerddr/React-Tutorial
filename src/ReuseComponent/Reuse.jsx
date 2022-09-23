// function Reuse(props) {
//   return (
//     <div className="names">
//       <h1>IN Reuse {props.data.name} </h1>
//       <h1>IN Reuse {props.data.email} </h1>
//       <h1>IN Reuse {props.data.contactus} </h1>
//     </div>
//   );
// }
// export default Reuse;

// -------------------------- App.js ka Content----------------

// import React from "react";
// import { useEffect, useState } from "react";
// import "./App.css";
// // import PropsUseEffect from "./hooks/PropsUseEffect";
// // import Form from "./Form";
// // import User from "./users";
// // import Event from "./event";
// // import State from "./state";
// // import Props from "./props";
// // import logo from "./logo.svg";
// // import Profile from "./ifelse";
// // import Valid from "./valid";
// // import Insta from "./Instafeed";
// // import FunProps from "./FunProps";
// // import Constrructor from "./lifecycle/Constrructor";
// import Reuse from "./ReuseComponent/Reuse";
// function App() {
//   const Users = [
//     {
//       name: "sameer",
//       email: "sam@gmail.com",
//       contactus: "32656532465",
//     },
//     {
//       name: "aman",
//       email: "aman@gmail.com",
//       contactus: "32656532465",
//     },
//     {
//       name: "lokesh",
//       email: "lokesh@gmail.com",
//       contactus: "32656532465",
//     },
//     {
//       name: "manan",
//       email: "manan@gmail.com",
//       contactus: "32656532465",
//     },
//     {
//       name: "honey",
//       email: "honey@gmail.com",
//       contactus: "32656532465",
//     },
//   ];
//   return (
//     <div className="name">
//       <h1>Reusing Component Using List</h1>
//       {Users.map((item, i) => (
//         <Reuse data={item} />
//       ))}
//     </div>
//   );
// }

// export default App;
