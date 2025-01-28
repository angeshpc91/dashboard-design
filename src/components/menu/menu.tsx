import React, { useState } from "react";
import "./menu.scss";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = (value: boolean) => {
    setIsActive(value);
  };

  return (
    <div className="menu-bar">
      <div
        className="menu-icon"
        onClick={() => toggleMenu(!isActive)}
        onBlur={() => toggleMenu(!isActive)}
      >
        ☰ Menu
      </div>
      <ul className={`menu-items ${isActive ? "active" : ""}`}>
        <li className="menu-item">Your insurance plan</li>
        <li className="menu-item">Foundations</li>
        <li className="menu-item">Partners</li>
      </ul>
    </div>
  );
};

export default Menu;
