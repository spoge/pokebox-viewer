import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import PokeBox from "./components/PokeBox";
import NationalDex from "./dex/NationalDex";
import KantoDex from "./dex/KantoDex";
import JohtoDex from "./dex/JohtoDex";
import HoennDex from "./dex/HoennDex";
import SinnohDex from "./dex/SinnohDex";
import UnovaDex from "./dex/UnovaDex";
import KalosCentralDex from "./dex/KalosCentralDex";
import KalosCoastalDex from "./dex/KalosCoastalDex";
import KalosMountainDex from "./dex/KalosMountainDex";
import AlolaDex from "./dex/AlolaDex";
import GalarDex from "./dex/GalarDex";
import IsleOfArmorDex from "./dex/IsleOfArmorDex";
import CrownTundraDex from "./dex/CrownTundraDex";
import PokeDexInfo from "./components/PokeDexInfo";
import PokemonInfo from "./components/PokemonInfo";

const App: React.FC = () => {
  const pokeboxRef = useRef<HTMLDivElement>(null);

  const [pokedex, setPokedex] = useState(NationalDex);
  const [pokedexName, setPokedexName] = useState("National");
  const [pokenum, setPokenum] = useState(1);

  const validateThenSetPokenum = (input: string) => {
    if (!Number.isNaN(input)) {
      const number = Number.parseInt(input);
      if (number >= 1 && number <= maxPokedexNum(pokedex)) {
        setPokenum(number);
        return;
      }
    }
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
    } else if (pokedexName === "I - Kanto") {
      changePokedex(KantoDex);
    } else if (pokedexName === "II - Johto") {
      changePokedex(JohtoDex);
    } else if (pokedexName === "III - Hoenn") {
      changePokedex(HoennDex);
    } else if (pokedexName === "IV - Sinnoh") {
      changePokedex(SinnohDex);
    } else if (pokedexName === "V - Unova") {
      changePokedex(UnovaDex);
    } else if (pokedexName === "VI - Kalos Central") {
      changePokedex(KalosCentralDex);
    } else if (pokedexName === "VI - Kalos Coastal") {
      changePokedex(KalosCoastalDex);
    } else if (pokedexName === "VI - Kalos Mountain") {
      changePokedex(KalosMountainDex);
    } else if (pokedexName === "VII - Alola") {
      changePokedex(AlolaDex);
    } else if (pokedexName === "VIII - Galar") {
      changePokedex(GalarDex);
    } else if (pokedexName === "VIII - Isle of Armor") {
      changePokedex(IsleOfArmorDex);
    } else if (pokedexName === "VIII - Crown Tundra") {
      changePokedex(CrownTundraDex);
    }

    pokeboxRef.current?.focus();

    return () => {};
  }, [pokedexName, pokenum]);

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
          pokedexName={pokedexName}
          setPokedexName={setPokedexName}
        />
        <PokemonInfo
          pokedex={pokedex}
          pokenum={pokenum}
          validateThenSetPokenum={validateThenSetPokenum}
        />
        <PokeDexInfo
          pokedexName={pokedexName}
          setPokedexName={setPokedexName}
        />
      </div>
    </div>
  );
};

export default App;
