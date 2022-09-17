import { useState } from "react";
function Profile() {
  //   const [loggedin, setloggedin] = useState(true);
  const [loggedin, setloggedin] = useState();
  return (
    <div className="name">
      {loggedin === 1 ? (
        <h1>1</h1>
      ) : loggedin == 2 ? (
        <h1>2</h1>
      ) : loggedin == 3 ? (
        <h1>3</h1>
      ) : (
        "wrong choice"
      )}
    </div>
    // {loggedin ? <h1>Sameer</h1> : <h1>Varshney</h1>}
  );
}
export default Profile;
