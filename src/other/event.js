function events() {
  function apple() {
    alert("Hi Sameer");
  }

  return (
    <div className="app">
      {/* it will call itself */}
      {/* <button onClick={apple()}>Click On me </button> */}
      <button onClick={apple}>Click On me </button>
    </div>
  );
}

export default events;
