import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeData}) {
  
  const pokemonToRender = pokeData.map((pokemon)=> <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} />)
  
  
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemonToRender}
      </Card.Group>
    </div>
  );
}

export default PokemonCollection;
