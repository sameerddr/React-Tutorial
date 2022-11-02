import React, { useContext } from "react";
import ChildC from "./ChildC";
import { data, data1 } from "../App";

function Childb() {
  const first = useContext(data);
  const second = useContext(data1);
  return (
    <div>
      <h1>
        {first}
        {second}
      </h1>
      <ChildC></ChildC>
    </div>
  );
}

export default Childb;
