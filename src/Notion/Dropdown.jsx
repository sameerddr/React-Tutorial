import React, { useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="dropdown">
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button>Menu 1</button>
            </li>
            <li className="menu-item">
              <button>Menu 2</button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
