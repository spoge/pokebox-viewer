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
      <button className="big-button" onClick={showMenu}>
        {selectedValue}
      </button>

      {shouldShowMenu ? (
        <div className="dropdown-menu">
          {[...possibleValues].map((value) => (
            <button
              className="big-button"
              key={value}
              onClick={() => setSelectedValue(value)}
            >
              {value}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
