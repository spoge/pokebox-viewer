import React from "react";
import "./styles/PokeCell.css";

interface Props {
  selected?: boolean;
  obtained?: boolean;
  img?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Cell: React.FC<Props> = ({
  onClick,
  img = "",
  selected = false,
  obtained = false,
}) => {
  return (
    <div
      className={`pokecell ${selected ? "selected" : "notselected"} ${
        obtained ? "obtained" : "unobtained"
      }`}
      onClick={onClick}
    >
      <img src={img} alt={""} className="pokeimage" />
      {/* <img
        src={`${process.env.PUBLIC_URL}/checkmark.png`}
        alt={""}
        className="checkmark"
      /> */}
    </div>
  );
};

export default Cell;
