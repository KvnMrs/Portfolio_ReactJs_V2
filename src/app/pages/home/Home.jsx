import React from "react";

// Packages
import { Link } from "react-router-dom";

//Sub-component
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";

function Home() {
  return (
    <>
      <div id="home" className="home-container h-screen relative">
        <header className="home-header z-10">
          <h1 className="welcome">Bienvenue sur mon Portfolio</h1>
          <p>
            <span className="name">Kévin Marais</span>
            <br />
            Développeur Web full stack.
          </p>
          <Link to="/portofolio">
            <ButtonCallToActionText text={"Continuer"}></ButtonCallToActionText>
          </Link>
        </header>
      </div>
    </>
  );
}

export default Home;
