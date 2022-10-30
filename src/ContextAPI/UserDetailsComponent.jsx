import React, { useState, useEffect, useContext } from "react";
import ChildComponent from "./ChildComponent";
// function UserDetailsComponent() {
//   var [userDetails, setUserDetails] = useState({
//     name: "Mayank",
//     age: 30,
//   });
//   return (
//     <div className="name">
//       <h1>This is the Parent Component</h1>
//       <hr />
//       <ChildComponent userDetails={userDetails}></ChildComponent>
//     </div>
//   );
// }

// export default UserDetailsComponent;

function UserDetailsComponent() {
  var userDetailContext = React.createContext(null);
  var [userDetails] = useState({
    name: "Mayank",
    age: 30,
  });
  return (
    <div>
      <userDetailContext.Provider value={userDetails}>
        <h1>This is the Parent Component</h1>
        <hr />
        <ChildComponent userDetails={userDetails} />
      </userDetailContext.Provider>
    </div>
  );
}

export default UserDetailsComponent;
