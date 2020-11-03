import React from "react";

interface Props {
  pokenum: number;
  maxPokedexNum: number;
  pokenumInput: string;
  pokedex: {
    [id: string]: {
      nationalId: string;
      name: string;
    };
  };
  validateThenSetPokenum: (input: string) => void;
}

const PokemonInfo: React.FC<Props> = ({
  pokedex,
  pokenum,
  pokenumInput,
  maxPokedexNum,
  validateThenSetPokenum,
}) => {
  return (
    <div className="pokemon-info">
      <div>Name: {pokedex[pokenum.toString().padStart(3, "0")].name}</div>
      <div>
        <div>
          <span>Pokédex #</span>
          <input
            className="input-field"
            type="number"
            min={1}
            max={maxPokedexNum}
            value={pokenumInput}
            onChange={(e) => validateThenSetPokenum(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
