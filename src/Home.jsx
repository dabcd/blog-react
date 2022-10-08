import React from "react";

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Home({ data }) {
  let randomChoice = null;
  if (data) {
    randomChoice = data[randomInt(data.length)].imageUrl;
    randomChoice = <img className="image" src={randomChoice} />
  }
  return (
    <div className="Home">
      <h1>Welcome to my travel blog!</h1>
      {randomChoice}
    </div>
  );
}
