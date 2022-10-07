import React, { useState } from "react";
function Valid() {
  function refresh(e) {
    e.preventDeafault();
  }
  return (
    <div className="name">
      <h1>Yes</h1>
      <form>
        <input type="text" placeholder="Enter Name" /> <br /> <br />
        <input type="text" placeholder="Enter Password" /> <br /> <br />
        <button type="submit" onClick={refresh}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Valid;
