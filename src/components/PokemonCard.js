import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {

  let [sprite, setSprite] = useState(true)

  function handleClick() {
    setSprite(sprite = !sprite)
  }

  return (
    <Card onClick={handleClick} >
      <div>
        <div className="image">
          <img src={sprite ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
