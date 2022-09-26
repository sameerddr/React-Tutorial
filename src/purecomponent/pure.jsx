// import React, { PureComponent } from "react";
import React, { PureComponent } from "react";
class Pure extends PureComponent {
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
        <button onClick={() => this.setState({ data: 2 })}>Update Data</button>
      </>
    );
  }
}
export default Pure;
