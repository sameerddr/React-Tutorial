import React, { useState, useEffect } from "react";
import axios from "axios";
function Api() {
  const [posts, setPosts] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts([posts, ...response.data]);
      setFilteredData([posts, ...response.data]);
    });
  }, []);

  useEffect(() => {
    const afterFilterData = posts.filter((post) => {
      if (post.title) {
        return post.title.includes(search);
      }
    });
    setFilteredData(afterFilterData);
  }, [search]);
  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredData.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
