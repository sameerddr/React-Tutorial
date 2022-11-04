import React from "react";

function Form() {
  return (
    <div data-testid="datatest">
      <h1>Testing</h1>
      <input type="text" placeholder="Enter Text" />
      <button>Test Button</button>
      <ul>
        <li>Item1</li>
        <li>Item2</li>
      </ul>
    </div>
  );
}

export default Form;
