// for functional component

// function App() {
//   const [data, setdata] = useState(0);
//   function updatedata() {
//     setdata(data + 1);
//   }

//   return (
//     // Functional Component
//     // <div className="class">
//     //   <h1>{data}</h1>
//     //   <button onClick={updatedata}>Update</button>
//     {
//       /* <Props
//         name={"sameer"}
//         email="sameer.com"
//         other={{ address: "sasni gate", mobile: "4243" }}
//       />
//       <Props
//         name={"manan"}
//         email="sameer.com"
//         other={{ address: "sasni gate", mobile: "4243" }}
//       />
//       <Props
//       name={"lokesh"}
//         email="sameer.com"
//         other={{ address: "sasni gate", mobile: "4243" }}
//       /> */
//     }
//     /* <User />
//       <Event />
//       <User />
//       <State />
//     <Props /> */
//     // </div>

//     // class component
//   );
// }

// below code for props.js
// function student(prop) {
//   console.log(prop);
//   return (
//     <div>
//       <h1>Hello {prop.name}</h1>
//       <h1>Hello {prop.email}</h1>
//       <h1>Hello {prop.other.address}</h1>
//     </div>
//   );
// }

// export default student;

// for class component

import React from "react";
export default class student extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="name">
        <h1>Class {this.props.name} </h1>
        <h1>Class {this.props.email} </h1>
        <h1>Sameer IS Genious</h1>
      </div>
    );
  }
}

// Props with class component in app .js

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "anil",
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Props</h1>
//         <Props name={this.state.name} email="sam@skj" />
//       </div>
//     );
//   }
// }
