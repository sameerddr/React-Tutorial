import React, { Component } from "react";

class Constrructor extends Component {
  constructor() {
    console.log("Inside The Constructor");
    super();
    this.state = {
      data: 0,
    };
  }
  componentDidMount() {
    console.log("Inside componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("Inside shouldComponentUpdate ");
  }
  render() {
    console.log("Inside The Render");
    return (
      <>
        <h1>Sameer {this.state.data} </h1>
        <button
          onClick={() => {
            this.setState(this.state.data + 1);
          }}
        >
          Upadate Button
        </button>
      </>
    );
  }
}

export default Constrructor;
