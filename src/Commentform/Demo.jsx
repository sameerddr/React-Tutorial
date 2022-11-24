import axios from "axios";
import React from "react";

function Demo() {
  const options = {
    method: "GET",
    url: "https://latest-stock-price.p.rapidapi.com/price",
    params: { Indices: "NIFTY 50" },
    headers: {
      "X-RapidAPI-Key": "e2595f9623msh8d4d9269923832fp1a0459jsn559c87f21bec",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <h1>o</h1>
    </div>
  );
}

export default Demo;
