import React, { useEffect, useState } from "react";
import "./menu.scss";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = (value: boolean) => {
    setIsActive(value);
  };
  const toggleOff = (event: MouseEvent) => {
    const menuButton = document.getElementById("menu-icon-id");
    if (!menuButton?.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", toggleOff);
    return () => {
      window.removeEventListener("click", toggleOff);
    };
  }, []);

  return (
    <div className="menu-bar">
      <div
        className="menu-icon"
        id="menu-icon-id"
        onClick={() => toggleMenu(!isActive)}
        onBlur={toggleOff}
      >
        ☰ Menu
      </div>
      <ul className={`menu-items ${isActive ? "active" : ""}`}>
        <li className="menu-item" onClick={toggleOff}>
          Your insurance plan
        </li>
        <li className="menu-item" onClick={toggleOff}>
          Foundations
        </li>
        <li className="menu-item" onClick={toggleOff}>
          Partners
        </li>
      </ul>
    </div>
  );
};

export default Menu;
