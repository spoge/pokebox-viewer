import React, { useEffect, useState } from "react";
import "./App.css";
import PokeBox from "./components/PokeBox";
import NationalDex from "./dex/NationalDex";
import GalarDex from "./dex/GalarDex";
import IsleOfArmorDex from "./dex/IsleOfArmorDex";
import CrownTundraDex from "./dex/CrownTundraDex";
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

  const changePokedex = (pokedex: {
    [id: string]: {
      nationalId: string;
      name: string;
    };
  }) => {
    setPokedex(pokedex);
    const maxNum = maxPokedexNum(pokedex);
    if (pokenum > maxNum) {
      setPokenum(maxNum);
    }
  };

  // Update pokedex if new have been selected
  useEffect(() => {
    if (pokedexName === "National") {
      changePokedex(NationalDex);
    } else if (pokedexName === "Galar") {
      changePokedex(GalarDex);
    } else if (pokedexName === "Isle of Armor") {
      changePokedex(IsleOfArmorDex);
    } else if (pokedexName === "Crown Tundra") {
      changePokedex(CrownTundraDex);
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
        </div>

        <div className="input-error-label">
          {validInput ? " " : "Invalid Pokédex number"}
        </div>
        <div className="pokemon-info2">
          <div className="pokedex-select">
            <div className="pokedex-select-label">Pokedex: </div>
            <div className="pokedex-dropdown">
              <Card
                possibleValues={[
                  "National",
                  "Galar",
                  "Isle of Armor",
                  "Crown Tundra",
                ]}
                selectedValue={pokedexName}
                setSelectedValue={setPokedexName}
              />
            </div>
          </div>
          <div>
            National #{pokedex[pokenum.toString().padStart(3, "0")].nationalId}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
