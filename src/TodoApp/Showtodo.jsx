import React from "react";
import { useState } from "react";
function Showtodo(props) {
  return (
    <>
      <h1>{props.task}</h1>
      <div className="button">
        <button
          onClick={() => {
            props.onSelcet(props.id);
          }}
        >
          Drop Todo
        </button>
        <button
          onClick={() => {
            props.onDel(props.id);
          }}
        >
          Edit Todo
        </button>
      </div>
    </>
  );
}

export default Showtodo;
