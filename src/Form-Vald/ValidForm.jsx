import React, { useState } from "react";

function ValidForm() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
  }
  function getdata(e) {
    console.log(e.target.value.length);
    let a = e.target.value.length;
    if (a < 3) {
      console.log("Length");
      seterror(true);
    } else {
      seterror(false);
    }
  }
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <h1>LogIn Form</h1>
        <input type="text" placeholder="Enter Username" onChange={getdata} />
        <span>{error ? <h2>User Not Find</h2> : " "} </span>
        <br /> <br />
        <input type="text" placeholder="Enter Password" />
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}

export default ValidForm;
