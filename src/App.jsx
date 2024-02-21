import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import pokidexEntries from "./pokemon";
import PokemonDetails from "./PokemonDetails";

import "./App.css";

function App() {
  const [pokidex, setPokidex] = useState(pokidexEntries);
  const [selectedPokemon, setSelectedPokemon] = useState(pokidex[0]);

  useEffect(() => {}, [selectedPokemon]);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>
      <div className="selected-pokemon">
        {selectedPokemon && (
          <PokemonDetails
            name={selectedPokemon.name}
            picture={selectedPokemon.icon}
            typeIcon={selectedPokemon.typeIcon}
            description={selectedPokemon.description}
          />
        )}
      </div>
      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                icon={pokemon.icon}
                typeIcon={pokemon.typeIcon}
                onClickHandler={() => {
                  setSelectedPokemon(pokemon);
                }}
              />
            );
          })}
      </div>
    </main>
  );
}

export default App;
