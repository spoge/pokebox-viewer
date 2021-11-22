import React from "react";
import Card from "./Card";

interface Props {
  pokedexName: string;
  setPokedexName: React.Dispatch<React.SetStateAction<string>>;
}

const PokeDexInfo: React.FC<Props> = ({ pokedexName, setPokedexName }) => {
  return (
    <div className="pokemon-info2">
      <div className="pokedex-select">
        <div className="pokedex-select-label">Pokedex: </div>
        <div className="pokedex-dropdown">
          <Card
            possibleValues={[
              "National",
              "I - Kanto",
              "II - Johto",
              "III - Hoenn",
              "IV - Sinnoh",
              "V - Unova",
              "VI - Kalos Central",
              "VI - Kalos Coastal",
              "VI - Kalos Mountain",
              "VII - Alola",
              "VIII - Galar",
              "VIII - Isle of Armor",
              "VIII - Crown Tundra",
            ]}
            selectedValue={pokedexName}
            setSelectedValue={setPokedexName}
          />
        </div>
      </div>
    </div>
  );
};

export default PokeDexInfo;
