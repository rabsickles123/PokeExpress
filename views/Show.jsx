import React from "react";

export default function Show({pokemon}) {
    return(
        <div>
            <h1>Here's your pokemon!</h1>
            {pokemon.name} <br></br>
            <img src= {pokemon.img}/>
        </div>
    )
}