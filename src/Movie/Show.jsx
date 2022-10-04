// https://api.tvmaze.com/search/shows?q=girls
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Show.css";

function Show() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const GetApi = async () => {
    const Apidata = await axios.get(
      "https://api.tvmaze.com/search/shows?q=girls"
    );
    // console.log(Apidata);
    console.log(Apidata.data);
    setdata(Apidata.data);
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      <div className="container">
        <nav className="nav">
          <div>
            <h1>
              {" "}
              <a href="">Movies Adda</a>
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Movie"
              className="inputtext"
              onChange={(e) => setsearch(e.target.value)}
            />
            <button className="btn" value={search} type="submit">
              Submit
            </button>
          </div>
        </nav>
      </div>
      <div className="moviedata">
        {data
          ?.filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.show.name.toLowerCase().startsWith(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <div className="boxx" key={item.show.id}>
              <h1 className="showname">{item.show.name}</h1>
              <img src={item.show.image.medium} alt="" className="showimage" />
              {/* <p className="showsum">{item.show.summary}</p> */}
            </div>
          ))}
      </div>
    </>
  );
}

export default Show;
