import React from "react";
import "./styles/PokeBox.css";
import PokeCell from "./PokeCell";
import EmptyCell from "./EmptyCell";
import PokeDexType from "../types/PokeDexType";

interface Props {
  pokeNum: number;
  setPokenum: React.Dispatch<React.SetStateAction<number>>;
  maxDexNum: number;
  pokedex: PokeDexType;
  pokeboxRef: React.RefObject<HTMLDivElement>;
}

const PokeBox: React.FC<Props> = ({
  pokeNum,
  setPokenum,
  maxDexNum,
  pokedex,
  pokeboxRef,
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

  const prevPokeBox = () => {
    if (boxNum > 1) {
      setPokenum(pokeNum - 30);
    }
  };

  const nextPokeBox = () => {
    if (boxNum < Math.ceil(maxDexNum / 30)) {
      if (pokeNum > maxDexNum - 30) {
        setPokenum(maxDexNum);
      } else {
        setPokenum(pokeNum + 30);
      }
    }
  };

  const handleMoveCell = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      if (pokeNum > 1) {
        setPokenum(pokeNum - 1);
      }
    } else if (e.key === "ArrowRight") {
      if (pokeNum < maxDexNum) {
        setPokenum(pokeNum + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (pokeNum - 6 >= 1) {
        setPokenum(pokeNum - 6);
      }
    } else if (e.key === "ArrowDown") {
      if (pokeNum + 6 <= maxDexNum) {
        setPokenum(pokeNum + 6);
      }
    }
  };

  const handleNavBox = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      prevPokeBox();
    } else if (e.key === "ArrowRight") {
      nextPokeBox();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey) {
      handleNavBox(e);
    } else {
      handleMoveCell(e);
    }
  };

  return (
    <div>
      <div className="box-header">
        <button
          className="button"
          onClick={prevPokeBox}
          disabled={boxNum === 1}
        >
          Box {boxNum - 1}
        </button>
        <div className="box-label">
          Box {boxNum} ({boxNum * 30 - 29}-{boxNum * 30})
        </div>
        <button
          className="button"
          onClick={nextPokeBox}
          disabled={boxNum >= Math.ceil(maxDexNum / 30)}
        >
          Box {boxNum + 1}
        </button>
      </div>
      <div
        ref={pokeboxRef}
        className="box no-outline"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {[
          [1, 2, 3, 4, 5, 6].map((column) => (
            <div key={column}>
              {[
                [1, 2, 3, 4, 5].map((row) =>
                  doesPokemonExist(
                    pokeNumByBoxPosition(boxNum, row, column)
                  ) ? (
                    <PokeCell
                      key={row}
                      selected={r === row && c === column}
                      obtained={true}
                      onClick={() =>
                        setPokenum(pokeNumByBoxPosition(boxNum, row, column))
                      }
                      img={`${
                        process.env.PUBLIC_URL
                      }/pokemon-icons/${getPokeDexNumIfExists(
                        minThreeDigits(
                          pokeNumByBoxPosition(boxNum, row, column)
                        )
                      )}.png`}
                    />
                  ) : (
                    <EmptyCell key={row} />
                  )
                ),
              ]}
            </div>
          )),
        ]}
      </div>
    </div>
  );
};

export default PokeBox;
