import React from "react";
import Childb from "./Childb";

function ChildA() {
  return (
    <div>
      <Childb />
    </div>
  );
}

export default ChildA;

// const data = createContext();
// const data1 = createContext();

// function App() {
//   const name = "sameer";
//   const age = 21;

//   return (
//     <div className="name">
//       <data.Provider value={name}>
//         <data1.Provider value={age}>
//           <ChildA />
//         </data1.Provider>
//       </data.Provider>
//     </div>
//   );
// }

// export default App;
// export { data, data1 };
