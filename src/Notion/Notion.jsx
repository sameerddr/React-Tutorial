import React, { useState } from "react";
import "./Notion.css";
function Notion() {
  const [popup, setpopup] = useState(false);
  const [data, setdata] = useState("");
  const [email, setemail] = useState([
    { name: "Thompson Smith", email: "thompson@gmail.com" },
    { name: "John Doe", email: "doe@gmail.com" },
    { name: "Jane Coker", email: "jane@gmail.com" },
    { name: "Mirabel Ekong", email: "ekong@gmail.com" },
    { name: "Samuel Doe", email: "samuel@gmail.com" },
    { name: "Moses Philips", email: "moses@gmail.com" },
    { name: "Marcus Bowa", email: "marcus@gmail.com" },
    { name: "Peter Touch", email: "touch@gmail.com" },
    { name: "Benson Bruce", email: "bruce@gmail.com" },
  ]);
  const [emaildata, setemaildata] = useState("");
  function handleClickOpen() {
    setpopup(!popup);
  }
  function closepopup() {
    setpopup(false);
  }
  function handleInvite() {
    console.log(email);
    console.log(data);
    let result = email.match(data);
    console.log(result);
    setemaildata(result);
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
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) => {
                  setdata(e.target.value);
                }}
              />
              <button onClick={handleInvite}>Invite</button>
            </div>
            <div>{data}</div>
            <div></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Notion;
