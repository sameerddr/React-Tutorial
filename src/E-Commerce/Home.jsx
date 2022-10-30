import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  const GetApi = async () => {
    const Apidata = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDsL2a4LF6H7icdV9LTM7Ug_82NDD5s78Q&type=video&q=ajax"
    );
    setdata(Apidata.data.items);
    console.log(Apidata.data.items);
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
          // ?.filter((val) => {
          //   if (search == "") {
          //     return val;
          //   } else if (
          //     val.title.toLowerCase().startsWith(search.toLowerCase())
          //   ) {
          //     return val;
          //   }
          // })
          ?.map((item) => (
            <div className="data">
              {/* <img src={item.image} className="imagemain" alt="" /> */}
              <h1 className="title"> Etag {item.etag}</h1>
              <h3 className="title">
                Channel Title {item.snippet.channelTitle}
              </h3>
              <p className="title">{item.snippet.thumbnails.medium.url}</p>
              <p className="title">{item.snippet.description}</p>
              {/* <p className="category"> Category- {item.category}</p>
              <p className="desc"> {item.description}</p>
              <p className="price"> Price- {item.price}$</p>
              <p className="rating"> Rating- {item.rating.rate}</p> */}
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
//
