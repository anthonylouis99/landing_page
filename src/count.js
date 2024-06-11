import "./App.css";
import Display from "./display";
import React from "react";

function Count() {
  const [num, setNum] = React.useState(0);
  function add() {
    setNum((prevNum) => prevNum + 1);
  }

  function subtract() {
    setNum((prevNum) => prevNum - 1);
  }

  return (
    <div className="container">
      <div onClick={add} className="add">
        <p>+</p>
      </div>
      <Display number={num} />
      <div onClick={subtract} className=" subtract">
        <p>-</p>
      </div>
    </div>
  );
}

export default Count;
