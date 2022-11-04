import React, { useContext } from "react";
import ChildC from "./ChildC";
import { data, data1 } from "../App";
function Childb() {
  var name = useContext(data);
  var age = useContext(data1);
  return (
    <div>
      <h1> We are in Child B {name}</h1>
      <h1>We are in Child B{age}</h1>
      <ChildC></ChildC>
    </div>
  );
}

export default Childb;
