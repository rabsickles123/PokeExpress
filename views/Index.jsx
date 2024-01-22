import React from "react";

export default function Index( { pokemon }) {
  return (
    <div>
        <h1>See All The Pokemon!</h1>
        <ul>
            {pokemon.map((pokemon, i) =>
            {return (
                <li>
                       The{' '}
                            <a href={`/pokemon/${i}`}>
                                {pokemon.name}
                            </a>
                            <br />
                </li>
            )})}
        </ul>
    </div>
  );
}