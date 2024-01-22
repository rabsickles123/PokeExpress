import React from "react";

export default function Show({ pokemon }) {
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1> <br />
      <h2>{pokemon.name.toUpperCase()}</h2>
      <br />
      <img src={pokemon.img} />
    </div>
  );
}
