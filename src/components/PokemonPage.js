import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const url = 'http://localhost:3001/pokemon'
  const [pokemonArray, setPokemonArray] = useState([])
  const [query, setQuery] = useState('')

  useEffect(()=>{
    fetch(`${url}`).then(r=>r.json()).then(pokemon=>setPokemonArray(pokemon))}, [])

    const handleSearch = queryData => {setQuery(queryData)}

    function submitNewPokemon(newPokemon) {
      setPokemonArray([newPokemon, ...pokemonArray])
    }

    const searchedPokemon = pokemonArray.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(query.toLowerCase())
    }).sort(function (a,b) { if (a.id<b.id) {return -1}; if (a.id>b.id) {return 1}; return 0})


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokeSubmit={submitNewPokemon} />
      <br />
      <Search pokeSearch={handleSearch} />
      <br />
      <PokemonCollection pokeData={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
