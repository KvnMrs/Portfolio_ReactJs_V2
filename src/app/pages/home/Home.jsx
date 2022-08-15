import React from "react";

// Assets
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import SocialMediasLinks from "../../sub-components/Links/SocialMediasLinks";

function Home() {
  return (
    <>
      <div id="home" className="Home-container">
        <header className="home-header">
          <h1 className="home-title">
            Bonjour et bienvenue sur mon Portfolio. 🙂
          </h1>
          <p>Je suis Kévin Marais Développeur Web full stack.</p>
          <div className="social-medias-onscroll">
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
