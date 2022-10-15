import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const para = useParams();
  const { name } = para;
  return (
    <div>
      User
      <h1>This is {name}</h1>
    </div>
  );
}

export default User;
