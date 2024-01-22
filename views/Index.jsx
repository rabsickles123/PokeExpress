import React from "react";

// const myStyle = {
//     color: '#ffffff',
//     backgroundColor: '#000000',
//     };

export default function Index({ pokemon }) {
  return (
    // style = {myStyle} inside div
    <div>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((pokemon, i) => {
          return (
            <li key={i}>
              <a href={`/pokemon/${i}`}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </a>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
