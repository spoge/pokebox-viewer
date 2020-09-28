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

  return (
    <div>
      <div className="box-label">Box: {boxNum}</div>
      <div className="box">
        {[
          [1, 2, 3, 4, 5, 6].map((column) => (
            <div key={column}>
              {[
                [1, 2, 3, 4, 5].map((row) => (
                  <PokeCell
                    key={row}
                    active={r === row && c === column}
                    onClick={() =>
                      setPokenum(pokeNumByBoxPosition(boxNum, row, column))
                    }
                    img={`https://serebii.net/pokedex-swsh/icon/${minThreeDigits(
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
