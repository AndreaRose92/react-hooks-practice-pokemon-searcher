import React from "react";

function Search({pokeSearch}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={e=>pokeSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
