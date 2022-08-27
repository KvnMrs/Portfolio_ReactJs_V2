import React, { useState, useEffect } from "react";

// Assets
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import SocialMediasLinks from "../../sub-components/Links/SocialMediasLinks";

function Home() {
  const [activeScroll, setActiveScroll] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      function (event) {
        setActiveScroll(event.isTrusted);
      },
      true
    );
  }, []);

  return (
    <>
      <div id="home" className="home-container">
        <header className="home-header">
          <h1 className="welcome">Bienvenue sur mon Portfolio</h1>
          <p>
            <span className="name">Kévin Marais</span> <br />
            Développeur Web full stack.
          </p>
          <div
            className={
              activeScroll
                ? "social-medias-onscroll transition-opacity duration-2000 opacity-100"
                : "social-medias-onscroll opacity-0"
            }
          >
            <SocialMediasLinks
              link={"https://www.linkedin.com/in/k%C3%A9vin-marais-861314216/"}
              img={Linkedin}
              alt={"Lien vers Linkedin"}
            />
            <SocialMediasLinks
              link={"https://github.com/KvnMrs"}
              img={Github}
              alt={"Lien vers Github"}
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default Home;
