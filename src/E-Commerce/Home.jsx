import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  const GetApi = async () => {
    const Apidata = await axios.get("https://fakestoreapi.com/products");
    setdata(Apidata.data);
    console.log(Apidata.data);
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <div className="container-main">
        {data
          ?.filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.title.toLowerCase().startsWith(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <div className="data" key={item.id}>
              <img src={item.image} className="imagemain" alt="" />
              <p className="title">{item.title}</p>
              <p className="category"> Category- {item.category}</p>
              <p className="desc"> {item.description}</p>
              <p className="price"> Price- {item.price}$</p>
              <p className="rating"> Rating- {item.rating.rate}</p>
            </div>
          ))}
      </div>
    </>
  );
}

// https://fakestoreapi.com/products

export default Home;

// How to connect the home page to navbar link
// how to set the search in original search bar
// products desgins correction
