import React, { useEffect, useState } from "react";
import "./App.css";
import PokeBox from "./components/PokeBox";
import NationalDex from "./dex/NationalDex";
import GalarDex from "./dex/GalarDex";
import IsleOfArmorDex from "./dex/IsleOfArmorDex";
import CrownTundraDex from "./dex/CrownTundraDex";
import PokeDexInfo from "./components/PokeDexInfo";
import PokemonInfo from "./components/PokemonInfo";

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
  }, [pokedexName, pokenum]);

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
        <PokemonInfo
          pokedex={pokedex}
          pokenum={pokenum}
          pokenumInput={pokenumInput}
          maxPokedexNum={maxPokedexNum(pokedex)}
          validateThenSetPokenum={validateThenSetPokenum}
        />
        <div className="input-error-label">
          {validInput ? " " : "Invalid Pokédex number"}
        </div>
        <PokeDexInfo
          pokedex={pokedex}
          pokedexName={pokedexName}
          pokenum={pokenum}
          setPokedexName={setPokedexName}
        />
      </div>
    </div>
  );
};

export default App;
