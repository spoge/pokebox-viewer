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
              "Sinnoh",
              "Galar",
              "Isle of Armor",
              "Crown Tundra",
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
