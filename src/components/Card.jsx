import React, { useState } from "react";

const Card = ({ possibleValues, selectedValue, setSelectedValue }) => {
  const [shouldShowMenu, setShouldShowMenu] = useState(false);

  const showMenu = (event) => {
    event.preventDefault();

    setShouldShowMenu(true);
    document.addEventListener("click", closeMenu);
  };

  const closeMenu = () => {
    setShouldShowMenu(false);
    document.removeEventListener("click", closeMenu);
  };

  return (
    <div>
      <button onClick={showMenu}>{selectedValue}</button>

      {shouldShowMenu ? (
        <div className="menu">
          {[...possibleValues].map((value) => (
            <button key={value} onClick={() => setSelectedValue(value)}>
              {value}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
