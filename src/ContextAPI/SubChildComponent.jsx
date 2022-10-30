// import React from "react";

// function SubChildComponent(props) {
//   return (
//     <div>
//       <h3>This is Sub Child Component</h3>
//       <h4>User Name: {props.userDetails.name}</h4>
//       <h4>User Age: {props.userDetails.age}</h4>
//     </div>
//   );
// }

// export default SubChildComponent;

import React, { useContext } from "react";

function SubChildComponent(props) {
  var contextData = React.useContext(userDetailContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  );
}

export default SubChildComponent;
