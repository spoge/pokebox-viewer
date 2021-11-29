import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import PokeBox from "./components/PokeBox";
import PokeDexInfo from "./components/PokeDexInfo";
import PokemonInfo from "./components/PokemonInfo";
import PokeDexType from "./types/PokeDexType";

const App: React.FC = () => {
  const pokeboxRef = useRef<HTMLDivElement>(null);

  const [pokedex, setPokedex] = useState({});
  const [pokedexName, setPokedexName] = useState("");
  const [pokenum, setPokenum] = useState(1);

  useEffect(() => {
    fetchThenChangePokedex("National");
    // eslint-disable-next-line
  }, []);

  const maxPokedexNum = (pokedex: PokeDexType) => Object.keys(pokedex).length;

  const changePokedex = useCallback(
    (name: string, pokedex: PokeDexType) => {
      setPokedex(pokedex);
      setPokedexName(name);

      const maxNum = maxPokedexNum(pokedex);
      if (pokenum > maxNum) {
        setPokenum(maxNum);
      }
    },
    [pokenum]
  );

  const fetchPokedex = useCallback((name: string) => {
    return fetch("dex/" + name + ".json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function (response) {
      return response.json();
    });
  }, []);

  const fetchThenChangePokedex = (name: string) => {
    const pokedexPromise = fetchPokedex(name);
    pokedexPromise.then((pokedex) => {
      changePokedex(name, pokedex);
      pokeboxRef.current?.focus();
    });
  };

  const validateThenSetPokenum = (input: string) => {
    if (!Number.isNaN(input)) {
      const number = Number.parseInt(input);
      if (number >= 1 && number <= maxPokedexNum(pokedex)) {
        setPokenum(number);
        return;
      }
    }
  };

  return (
    <div className="app">
      <h2>Pokémon Box Viewer</h2>
      <div>
        <PokeBox
          pokeboxRef={pokeboxRef}
          pokeNum={pokenum}
          setPokenum={setPokenum}
          maxDexNum={maxPokedexNum(pokedex)}
          pokedex={pokedex}
        />
        {pokedexName !== "" ? (
          <PokemonInfo
            pokedex={pokedex}
            pokenum={pokenum}
            validateThenSetPokenum={validateThenSetPokenum}
          />
        ) : null}
        <PokeDexInfo
          pokedexName={pokedexName}
          changeToPokedex={fetchThenChangePokedex}
        />
      </div>
    </div>
  );
};

export default App;
