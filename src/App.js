import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
// import PropsUseEffect from "./hooks/PropsUseEffect";
// import Form from "./Form";
// import User from "./users";
// import Event from "./event";

// import FunProps from "./FunProps";
// import Constrructor from "./lifecycle/Constrructor";
// import Reuse from "./ReuseComponent/Reuse";
import ValidForm from "./Form-Vald/ValidForm";
function App() {
  return (
    <div className="name">
      <ValidForm />
    </div>
  );
}

export default App;
