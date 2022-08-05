import React from "react";

function BarNav() {
  return (
    <>
      <nav className="BarNav-container">
        <h1 className="logo">
          <span className="text-blue-400">K</span>
          <span className="text-green-400">M</span>
        </h1>
        <ol className="links">
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">A propos de moi</a>
          </li>
          <li>
            <a href="#skills">Mes experiences</a>
          </li>
          <li>
            <a href="#projects">Mes Projets</a>
          </li>
          <li>
            <a href="#contact">Contactez moi</a>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default BarNav;
