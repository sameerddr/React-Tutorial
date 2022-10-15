import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <div className="name">
        <button onClick={() => navigate("/about")}>Go to about</button>
      </div>
    </div>
  );
}

export default Home;
