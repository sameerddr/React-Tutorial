import axios from "axios";
import React from "react";
import { useEffect, useState, useRef } from "react";

function Test() {
  const [userdata, setuserdata] = useState("");
  const [print, setprint] = useState({});

  async function Getdata(username) {
    try {
      const dataPeople = await axios.get(
        "https://jsonplaceholder.typicode.com/" + `${username}`,
        {
          pramas: {
            q: `${username}`,
          },
        }
      );
      // console.log(dataPeople);
      setprint(dataPeople.data);
      console.log(dataPeople.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    Getdata(userdata);
  }
  return (
    <div>
      <h1>Search Your Git Profile </h1>
      <div className="container">
        <input
          type="text"
          placeholder="Type The Username"
          onChange={(e) => setuserdata(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className="print">
        <h1> The Username You Are Searching For -: {userdata}</h1>
      </div>
      <div className="box">
        {setprint.map((post) => (
          <div key={post.id}>
            <h1>{post.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
