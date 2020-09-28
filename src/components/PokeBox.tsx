import React from "react";
import PokeCell from "./PokeCell";

interface Props {
  pokeNum: number;
  setPokenum: React.Dispatch<React.SetStateAction<number>>;
}

const PokeBox: React.FC<Props> = ({ pokeNum, setPokenum }) => {
  const boxNum = Math.ceil(pokeNum / 30);
  const numInBox = pokeNum % 30 === 0 ? 30 : pokeNum % 30;
  const r = Math.ceil(numInBox / 6);
  const c = numInBox % 6 === 0 ? 6 : numInBox % 6;

  const minThreeDigits = (n: number) => n.toString().padStart(3, "0");
  const pokeNumByBoxPosition = (box: number, row: number, column: number) =>
    (boxNum - 1) * 30 + (row - 1) * 6 + column;

  const doesPokemonExist = (pn: number) => pn >= 1 && pn <= 893;

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
        <div className="box-label">Box {boxNum}</div>
        <button
          className="button"
          onClick={() => {
            if (boxNum < 30) {
              if (pokeNum > 863) {
                setPokenum(893);
              } else {
                setPokenum(pokeNum + 30);
              }
            }
          }}
          disabled={boxNum === 30}
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
                    }/pokemon-icons/${minThreeDigits(
                      pokeNumByBoxPosition(boxNum, row, column)
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
