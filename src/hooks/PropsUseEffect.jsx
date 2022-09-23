import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App(props) {
  useEffect(() => {
    console.warn("use Effect");
  }, [props.count, props.data]);

  return (
    <div className="name">
      <h1> Count Props {props.count} </h1>
      <h1> Data Props {props.data} </h1>
    </div>
  );
}

export default App;

// ------------------- App.js ka code

// import React from "react";
// import { useEffect, useState } from "react";
// import "./App.css";

// import PropsUseEffect from "./PropsUseEffect";
// function App() {
//   const [count, setcount] = useState(0);
//   const [data, setdata] = useState(0);

//   return (
//     <div className="name">
//       <PropsUseEffect count={count} data={data} />
//       <button onClick={() => setcount(count + 1)}>Upadate count</button>
//       <button onClick={() => setdata(data + 1)}>Upadate data</button>
//     </div>
//   );
// }

// export default App;
