import React from "react";

function BarNav() {
  return (
    <>
      <nav className="BarNav-container">
        <ol>
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
            <a href="">Mes Projets</a>
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
