import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Notion.css";
function Notion() {
  const [popup, setpopup] = useState(false);
  const [data, setdata] = useState("");
  const [email, setemail] = useState({
    email1: "sameer.var@gmail.com",
    email2: "sameer@gmail.com",
    email3: "sam@gmail.com",
  });
  const [getemail, setgetemail] = useState("");
  function handleClickOpen() {
    setpopup(!popup);
  }
  function closepopup() {
    setpopup(false);
  }
  function handleInvite() {
    // console.log(email);
    console.log(Object.values(email));
    let a = Object.values(email);
    // console.log(data);

    a.forEach((item) => {
      if (item == data) {
        console.log(item);
        setgetemail([...item, item]);
      }
    });
  }
  return (
    <div>
      <button onClick={handleClickOpen}>Share</button>
      <div>
        {popup ? (
          <div className="popup">
            <div className="popup-header">
              <h1>Notion-Account</h1>
              <h3 onClick={closepopup}>Close</h3>
            </div>
            <div className="drop">
              <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) => {
                  setdata(e.target.value);
                }}
              />
              <button onClick={handleInvite}>Invite</button>
              <Dropdown />
            </div>
            <div>{data}</div>

            <div>
              {/* {getemail.map((item) => (
                <h1>{item}</h1>
              ))} */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Notion;
