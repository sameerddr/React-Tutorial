import React from "react";
import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <div>
      Contact
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        repellat.
      </h2>
      <Link to="nexting1">nexting1</Link>
      <Link to="nexting2">nexting2</Link>
      <Outlet />
    </div>
  );
}

export default Contact;
