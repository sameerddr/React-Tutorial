import React, { useContext } from "react";
import { data, data1 } from "../App";
function ChildC() {
  const first = useContext(data);
  const second = useContext(data1);
  return (
    <div>
      <h1>
        {first}
        <br />
        {second}
      </h1>
    </div>
  );
}

export default ChildC;
