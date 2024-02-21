import React, { useEffect, useState } from "react";
import pokidexEntries from "./pokemon";
import PokemonDetails from "./componets/PokemonDetails";
import "./App.css";
import PokemonCardCollection from "./componets/PokemonCardCollection";

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
      <PokemonCardCollection
        pokidex={pokidex}
        onPokemonCardClick={setSelectedPokemon}
      />
    </main>
  );
}

export default App;
