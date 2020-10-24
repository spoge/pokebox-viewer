import React, { useEffect, useState } from "react";
import "./App.css";
import PokeBox from "./components/PokeBox";
import NationalDex from "./NationalDex";
import GalarDex from "./GalarDex";
import Card from "./components/Card";

const App: React.FC = () => {
  const [pokedex, setPokedex] = useState(NationalDex);
  const [pokedexName, setPokedexName] = useState("National");
  const [pokenum, setPokenum] = useState(1);
  const [pokenumInput, setPokenumInput] = useState("1");
  const [validInput, setValidInput] = useState(true);
  const validateThenSetPokenum = (input: string) => {
    setPokenumInput(input);
    if (!Number.isNaN(input)) {
      const number = Number.parseInt(input);
      if (number >= 1 && number <= maxPokedexNum(pokedex)) {
        setPokenum(number);
        setValidInput(true);
        return;
      }
    }
    setValidInput(false);
  };

  const maxPokedexNum = (pokedex: {
    [id: string]: {
      nationalId: string;
      name: string;
    };
  }) => Object.keys(pokedex).length;

  // Update pokedex if new have been selected
  useEffect(() => {
    if (pokedexName === "National") {
      setPokedex(NationalDex);
      const maxNum = maxPokedexNum(NationalDex);
      if (pokenum > maxNum) {
        setPokenum(maxNum);
      }
    } else if ("Galar") {
      setPokedex(GalarDex);
      const maxNum = maxPokedexNum(GalarDex);
      if (pokenum > maxNum) {
        setPokenum(maxNum);
      }
    }
    return () => {};
  }, [pokedexName]);

  // Update input field when pokenum changes. I.E. on cell-click
  useEffect(() => {
    setPokenumInput(pokenum.toString());
    setValidInput(true);
    return () => {};
  }, [pokenum]);

  return (
    <div className="app">
      <h2>Pokémon Box Viewer</h2>
      <div>
        <PokeBox
          pokeNum={pokenum}
          setPokenum={setPokenum}
          maxDexNum={maxPokedexNum(pokedex)}
          pokedex={pokedex}
        />
        <div className="pokemon-info">
          <div>Name: {pokedex[pokenum.toString().padStart(3, "0")].name}</div>
          <div>
            <span>Pokédex #</span>
            <input
              className="input-field"
              type="number"
              min={1}
              max={maxPokedexNum(pokedex)}
              value={pokenumInput}
              onChange={(e) => validateThenSetPokenum(e.target.value)}
            />
          </div>
        </div>
        <div className="input-error-label">
          {validInput ? " " : "Invalid Pokédex number"}
        </div>
        <div className="pokedex-select">
          <div>Pokedex: </div>
          <div className="pokedex-dropdown">
            <Card
              possibleValues={["National", "Galar"]}
              selectedValue={pokedexName}
              setSelectedValue={setPokedexName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
