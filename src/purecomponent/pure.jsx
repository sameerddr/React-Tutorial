// import React, { PureComponent } from "react";
import React, { Component } from "react";
class Pure extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }
  render() {
    console.log("check Rendering");
    return (
      <>
        <h1>Pure Component {this.state.data} </h1>
        <button
          onClick={() => {
            this.setState({ data: 1 });
          }}
        >
          Update Data
        </button>
      </>
    );
  }
}
export default Pure;
