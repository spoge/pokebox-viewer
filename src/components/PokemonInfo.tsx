import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
  const allOptions = Object.keys(pokedex)
    .map((pokeId) => ({
      name: pokedex[pokeId].name,
      id: pokeId,
    }))
    .sort((a, b) => (a.id < b.id ? -1 : 1));
  const pokeName = pokedex[pokenum.toString().padStart(3, "0")].name;
  const selectedOption = allOptions.find(
    (pokemon) => pokemon.name === pokeName
  );
  return (
    <div className="pokemon-info">
      <Autocomplete
        className="autocomplete"
        disableClearable
        value={selectedOption}
        options={allOptions}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => validateThenSetPokenum(value.id)}
        renderInput={(params) => (
          <TextField {...params} label="Pokémon Name" variant="outlined" />
        )}
      />
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
