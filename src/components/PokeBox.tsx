import React from "react";
import PokeCell from "./PokeCell";

interface Props {
  pokeNum: number;
  setPokenum: React.Dispatch<React.SetStateAction<number>>;
  maxDexNum: number;
  pokedex: {
    [id: string]: {
      nationalId: string;
      name: string;
    };
  };
}

const PokeBox: React.FC<Props> = ({
  pokeNum,
  setPokenum,
  maxDexNum,
  pokedex,
}) => {
  const boxNum = Math.ceil(pokeNum / 30);
  const numInBox = pokeNum % 30 === 0 ? 30 : pokeNum % 30;
  const r = Math.ceil(numInBox / 6);
  const c = numInBox % 6 === 0 ? 6 : numInBox % 6;

  const minThreeDigits = (n: number) => n.toString().padStart(3, "0");
  const pokeNumByBoxPosition = (box: number, row: number, column: number) =>
    (boxNum - 1) * 30 + (row - 1) * 6 + column;

  const doesPokemonExist = (pn: number) => pn >= 1 && pn <= maxDexNum;
  const getPokeDexNumIfExists = (id: string) =>
    pokedex[id] === undefined ? "000" : pokedex[id].nationalId;

  return (
    <div>
      <div className="box-header">
        <button
          className="button"
          onClick={() => {
            if (boxNum > 1) setPokenum(pokeNum - 30);
          }}
          disabled={boxNum === 1}
        >
          Box {boxNum - 1}
        </button>
        <div className="box-label">
          Box {boxNum} ({boxNum * 30 - 29}-{boxNum * 30})
        </div>
        <button
          className="button"
          onClick={() => {
            if (boxNum < Math.ceil(maxDexNum / 30)) {
              if (pokeNum > maxDexNum - 30) {
                setPokenum(maxDexNum);
              } else {
                setPokenum(pokeNum + 30);
              }
            }
          }}
          disabled={boxNum >= Math.ceil(maxDexNum / 30)}
        >
          Box {boxNum + 1}
        </button>
      </div>
      <div className="box">
        {[
          [1, 2, 3, 4, 5, 6].map((column) => (
            <div key={column}>
              {[
                [1, 2, 3, 4, 5].map((row) => (
                  <PokeCell
                    key={row}
                    active={r === row && c === column}
                    doesExist={doesPokemonExist(
                      pokeNumByBoxPosition(boxNum, row, column)
                    )}
                    onClick={() =>
                      setPokenum(pokeNumByBoxPosition(boxNum, row, column))
                    }
                    img={`${
                      process.env.PUBLIC_URL
                    }/pokemon-icons/${getPokeDexNumIfExists(
                      minThreeDigits(pokeNumByBoxPosition(boxNum, row, column))
                    )}.png`}
                  />
                )),
              ]}
            </div>
          )),
        ]}
      </div>
    </div>
  );
};

export default PokeBox;
