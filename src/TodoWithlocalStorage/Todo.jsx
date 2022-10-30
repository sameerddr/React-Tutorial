import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Todo() {
  const [text, SetText] = useState("");
  const [task, setTask] = useState(getLocalItem());

  function getLocalItem() {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  function handleform(e) {
    e.preventDefault();
    setTask([...task, text]);
    SetText(" ");
  }

  function removeTask(a) {
    const filterdata = task.filter((currele, index) => {
      return index !== a;
    });
    setTask(filterdata);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <div
        className="todo"
        style={{
          backgroundImage: `url("https://thumbs.dreamstime.com/b/seamless-illustration-theme-biology-education-light-contour-blue-background-92517277.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
        }}>
        <form onSubmit={handleform}>
          <div className="form">
            <Form.Control
              type="search"
              placeholder="Enter todo"
              style={{
                width: "25%",
                display: "inline",
                textAlign: "center",
                margin: " 20px 0px 10px 540px  ",
                padding: "10px",
              }}
              onChange={(e) => {
                SetText(e.target.value);
              }}
            />
            <Button type="submit" variant="dark" style={{ marginLeft: "50px" }}>
              Create
            </Button>
          </div>
        </form>
        {task.map((item, index) => (
          <div
            className="container"
            key={item}
            style={{ padding: "20px  0px 0px 420px ", textAlign: "center" }}>
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {item}
                  <CloseButton
                    onClick={() => removeTask(index)}
                    style={{ paddingLeft: "40px", textAlign: "center" }}
                  />
                  <Button variant="outline-info">Info</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
