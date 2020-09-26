import React, { useState } from "react";
import "./App.css";
import PokeBox from "./components/PokeBox";

const App: React.FC = () => {
  const [pokenum, setPokenum] = useState(1);
  const [validInput, setValidInput] = useState(true);
  const validateThenSetPokenum = (input: string) => {
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
  return (
    <div className="app">
      <h2>Pokémon Box Calculator</h2>
      <div>
        <PokeBox pokeNum={pokenum} />
        <div>
          <span>Pokédex #</span>
          <input
            className="input-field"
            type="number"
            min={1}
            max={893}
            defaultValue={pokenum}
            onChange={(e) => validateThenSetPokenum(e.target.value)}
          />
        </div>
        <div className="input-error-label">
          {validInput ? " " : "Invalid Pokédex number"}
        </div>
      </div>
    </div>
  );
};

export default App;
