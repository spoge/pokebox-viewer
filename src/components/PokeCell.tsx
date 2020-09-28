import React from "react";

interface Props {
  active?: boolean;
  doesExist: boolean;
  img?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Cell: React.FC<Props> = ({
  onClick,
  doesExist,
  img = "",
  active = false,
}) => {
  return (
    <div
      className={`cell ${active ? "active" : "inactive"}`}
      onClick={(e) => {
        if (doesExist) {
          onClick(e);
        }
      }}
    >
      {doesExist ? <img src={img} alt={""} /> : null}
    </div>
  );
};

export default Cell;
