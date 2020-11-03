import React from "react";
import Card from "./Card";

interface Props {
  pokedexName: string;
  setPokedexName: React.Dispatch<React.SetStateAction<string>>;
  pokenum: number;
  pokedex: {
    [id: string]: {
      nationalId: string;
      name: string;
    };
  };
}

const PokeDexInfo: React.FC<Props> = ({
  pokedexName,
  setPokedexName,
  pokedex,
  pokenum,
}) => {
  return (
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
  );
};

export default PokeDexInfo;
