import React, { useEffect, useState } from "react";
import "./App.css";
import PokeBox from "./components/PokeBox";
import pokemons from "./pokemon";

const App: React.FC = () => {
  const [pokenum, setPokenum] = useState(1);
  const [pokenumInput, setPokenumInput] = useState("1");
  const [validInput, setValidInput] = useState(true);
  const validateThenSetPokenum = (input: string) => {
    setPokenumInput(input);
    if (!Number.isNaN(input)) {
      const number = Number.parseInt(input);
      if (number >= 1 && number <= 893) {
        setPokenum(number);
        setValidInput(true);
        return;
      }
    }
    setValidInput(false);
  };

  // Update input field when pokenum changes. I.E. on cell-click
  useEffect(() => {
    setPokenumInput(pokenum.toString());
    return () => {};
  }, [pokenum]);

  return (
    <div className="app">
      <h2>Pokémon Box Viewer</h2>
      <div>
        <PokeBox pokeNum={pokenum} setPokenum={setPokenum} />
        <div className="pokemon-info">
          <div>Name: {pokemons[pokenum.toString().padStart(3, "0")]}</div>
          <div>
            <span>Pokédex #</span>
            <input
              className="input-field"
              type="number"
              min={1}
              max={893}
              value={pokenumInput}
              onChange={(e) => validateThenSetPokenum(e.target.value)}
            />
          </div>
        </div>
        <div className="input-error-label">
          {validInput ? " " : "Invalid Pokédex number"}
        </div>
      </div>
    </div>
  );
};

export default App;
