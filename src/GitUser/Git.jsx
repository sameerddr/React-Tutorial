import axios from "axios";
import React from "react";
import { useEffect, useState, useRef } from "react";

function Git() {
  const [userdata, setuserdata] = useState("");
  const [print, setprint] = useState({});

  async function Getdata(username) {
    try {
      const dataPeople = await axios.get(
        "https://api.github.com/users/sameerddr",
        {
          pramas: {
            q: `${username}`,
          },
        }
      );
      //   console.log(dataPeople);
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
      <h1> Search Your Git Profile </h1>{" "}
      <div className="container">
        <input
          type="text"
          placeholder="Type The Username"
          onChange={(e) => setuserdata(e.target.value)}
        />{" "}
        <button type="submit" onClick={handleSubmit}>
          Search{" "}
        </button>{" "}
      </div>{" "}
      <div className="print">
        <h1> The Username You Are Searching For -: {userdata} </h1>{" "}
        <div className="box">
          {" "}
          {print.bio ? (
            <p> Bio: {print.bio} </p>
          ) : (
            <p> Please enter User name. </p>
          )}{" "}
          {print.location ? (
            <p> location: {print.location} </p>
          ) : (
            <p> Please enter User name. </p>
          )}{" "}
          {print.name ? (
            <p> Name: {print.name} </p>
          ) : (
            <p> Please enter User name. </p>
          )}{" "}
          {print.repos_url ? (
            <p> repos_url: {print.repos_url} </p>
          ) : (
            <p> Please enter User name. </p>
          )}{" "}
          {print.avatar_url ? (
            <p>
              {" "}
              avatar_url: <img src={print.avatar_url} />{" "}
            </p>
          ) : (
            <p> Please enter User name. </p>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Git;

// Create
// https://api.github.com/users/sameerddr

// Create  a input Field Ang get the User Name
// Fetch The Api using axios
// print The Data
