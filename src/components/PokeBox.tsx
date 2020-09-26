import React from "react";
import Cell from "./Cell";

interface Props {
  pokeNum: number;
}

const PokeBox: React.FC<Props> = ({ pokeNum }) => {
  const boxNum = Math.ceil(pokeNum / 30);
  const numInBox = pokeNum % 30 === 0 ? 30 : pokeNum % 30;
  const r = Math.ceil(numInBox / 6);
  const c = numInBox % 6 === 0 ? 6 : numInBox % 6;

  const minThreeDigits = (n: number) => n.toString().padStart(3, "0");

  return (
    <div>
      <div>Box: {boxNum}</div>
      <div className="box">
        {[
          [1, 2, 3, 4, 5, 6].map((column) => (
            <div key={column}>
              {[
                [1, 2, 3, 4, 5].map((row) => (
                  <Cell
                    key={row}
                    img={
                      r === row && c === column
                        ? `https://serebii.net/pokedex-swsh/icon/${minThreeDigits(
                            pokeNum
                          )}.png`
                        : ""
                    }
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
