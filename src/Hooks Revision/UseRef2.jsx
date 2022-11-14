import React, { forwardRef } from "react";

function UseRef2(props, inputref) {
  return (
    <div>
      <input type="text" ref={inputref} />
    </div>
  );
}

export default forwardRef(UseRef2);
