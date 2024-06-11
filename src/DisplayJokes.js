import React from "react";
function DisplayJoke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggle() {
    setIsShown((prvValue) => !prvValue);
    console.log(isShown);
  }

  return (
    <div>
      {props.jokeSetup && <h5>{props.jokeSetup}</h5>}
      {isShown ? <p>{props.jokePunchline}</p> : ""}
      <button id={props.jokeId} onClick={toggle}>
        {isShown ? "hide Punchline" : "show punchline"}
      </button>
      <hr />
    </div>
  );
}

export default DisplayJoke;
