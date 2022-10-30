// import React from "react";
// function ChildComponent(props) {
//   return (
//     <div>
//       <h2>This is Child Component</h2>
//       <h2>{props.userDetails.name}</h2>
//       <hr />
//       <SubChildComponent userDetails={props.userDetails}></SubChildComponent>
//     </div>
//   );
// }

// export default ChildComponent;

import React from "react";
import SubChildComponent from "./SubChildComponent";

function ChildComponent() {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

export default ChildComponent;
