import React, { useCallback, useEffect, useState } from "react";
import "./styles/PokeDexInfo.css";
import Card from "./Card";

interface Props {
  pokedexName: string;
  changeToPokedex: (name: string) => void;
}

const PokeDexInfo: React.FC<Props> = ({ pokedexName, changeToPokedex }) => {
  const [pokedexNames, setPokedexNames] = useState([]);

  const updatePokedexList = () => {
    const pokedexNamesPromise = fetchPokedexNames();
    pokedexNamesPromise.then((fetchedNames) => {
      setPokedexNames(fetchedNames);
    });
  };

  useEffect(() => {
    updatePokedexList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    updatePokedexList();
    // eslint-disable-next-line
  }, [changeToPokedex]);

  const fetchPokedexNames = useCallback(() => {
    return fetch("dex/pokedexes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function (response) {
      return response.json();
    });
  }, []);

  return (
    <div className="pokedex-info">
      <div className="pokedex-select">
        <div className="pokedex-select-label">Pokedex: </div>
        <div className="pokedex-dropdown">
          <Card
            possibleValues={pokedexNames}
            selectedValue={pokedexName}
            setSelectedValue={changeToPokedex}
          />
        </div>
      </div>
    </div>
  );
};

export default PokeDexInfo;
