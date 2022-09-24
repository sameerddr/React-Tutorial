import React from "react";
import { useState } from "react";
import Showtodo from "./Showtodo";
function Todo() {
  const [task, settask] = useState("");
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState(false);

  function onChangeHandler(e) {
    // console.log(e.target.value);
    settask(e.target.value);
  }

  function submit(e) {
    console.log("submit");
    e.preventDefault();
    settask("");
    const newdata = task;
    setdata([...data, newdata]);
  }
  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      // console.log(curEle);
      // console.log(index);
      console.log(index !== a);
      return index !== a;
    });
    setdata(finalData);
  };

  function editItem() {
    console.log("trying");
  }

  return (
    <>
      <div className="container">
        <label>
          Your Todo
          <input type="text" value={task} onChange={onChangeHandler} />
        </label>
        <button type="submit" onClick={submit}>
          Create Todo
        </button>
        {data.map((val, index) => {
          return (
            <Showtodo
              key={index}
              id={index}
              task={val}
              onSelcet={deleteItem}
              onDel={editItem}
            />
          );
        })}
      </div>
    </>
  );
}

export default Todo;
