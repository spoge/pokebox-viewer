import React from "react";
import "./styles/PokemonInfo.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PokeDexType from "../types/PokeDexType";

interface Props {
  pokenum: number;
  pokedex: PokeDexType;
  validateThenSetPokenum: (input: string) => void;
}

const PokemonInfo: React.FC<Props> = ({
  pokenum,
  pokedex,
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
        blurOnSelect
        value={selectedOption}
        options={allOptions}
        getOptionLabel={(option) => `#${option.id} - ${option.name}`}
        onChange={(event, value) => validateThenSetPokenum(value.id)}
        renderInput={(params) => (
          <TextField {...params} label="Pokémon" variant="outlined" />
        )}
      />
      <div>
        National: #{pokedex[pokenum.toString().padStart(3, "0")].nationalId}
      </div>
    </div>
  );
};

export default PokemonInfo;
