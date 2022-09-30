import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [Data, setData] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [search, setsearch] = useState("");

  const getapi = async () => {
    try {
      const dataApi = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData([Data, ...dataApi.data]);
      setfilterdata([Data, ...dataApi.data]);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    const afterFilterData = Data.filter((post) => {
      if (post.title) {
        return post.title.includes(search);
      }
    });
    setfilterdata(afterFilterData);
  }, [search]);

  useEffect(() => {
    getapi();
  }, []);

  return (
    <div>
      <h1>Project</h1>
      <input
        type="text"
        placeholder="Enter The Text"
        onClick={(e) => {
          setsearch(e.target.value);
        }}
      />
      <button>Search</button>
      {filterdata?.map((item) => (
        <>
          <div>
            <h1>ID-: {item.id}</h1>
            <h2> TITLE-: {item.title}</h2>
            <h4> Body-: {item.body}</h4>
          </div>
        </>
      ))}
    </div>
  );
}

export default Api;
