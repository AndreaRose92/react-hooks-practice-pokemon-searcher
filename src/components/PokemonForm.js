import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokeSubmit}) {

  const [pokeID, setPokeID] = useState('')
  const [pokeName, setPokeName] = useState('')
  const [pokeHP, setPokeHP] = useState('')
  const [pokeFront, setPokeFront] = useState('')
  const [pokeBack, setPokeBack] = useState('')

  const newPokemon = {
    'id': pokeID,
    "name": pokeName,
    'hp': pokeHP,
    'sprites': {
      "front": pokeFront,
      "back": pokeBack
    }
  }

  function handleSubmit() {
    fetch(`http://localhost:3001/pokemon`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPokemon)
    })
      .then(r=>r.json())
      .then(newPokemon=>pokeSubmit(newPokemon))

  }

  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={e=>setPokeID(e.target.value)} fluid label="ID" placeholder="ID" name="id" />
          <Form.Input onChange={e=>setPokeName(e.target.value)} fluid label="Name" placeholder="Name" name="name"  />
          <Form.Input onChange={e=>setPokeHP(e.target.value)} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={e=>setPokeFront(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input onChange={e=>setPokeBack(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
