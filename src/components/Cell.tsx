import React from "react";

interface Props {
  active?: boolean;
  img?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Cell: React.FC<Props> = ({ onClick, img = "", active = false }) => {
  return (
    <div className={"cell"} onClick={onClick}>
      {img ? <img src={img} alt={""} /> : null}
    </div>
  );
};

export default Cell;
