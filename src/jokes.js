import jokesData from "./jokeData";
import React from "react";
import DisplayJoke from "./DisplayJokes";

function Jokes() {
  return jokesData.map((joke) => {
    return (
      <DisplayJoke
        key={joke.id}
        jokeSetup={joke.setup}
        jokePunchline={joke.punchline}
        jokeId={joke.id}
      />
    );
  });
}

export default Jokes;
