import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Assets
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";
import videoBg from "../../../assets/video/videoBg.mp4";
//Sub-component
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
      <div id="home" className="home-container h-screen relative">
        <video
          src={videoBg}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        />
        <header className="home-header z-10">
          <h1 className="welcome">Bienvenue sur mon Portfolio</h1>
          <p>
            <span className="name">Kévin Marais</span>
            <br />
            Développeur Web full stack.
          </p>
          <Link to="/portofolio">
            <ButtonCallToActionText
              text={"Visiter"}
              customClass={"z-50 mt-20"}
            />
          </Link>
        </header>

        {/* <div
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
        </div> */}
      </div>
    </>
  );
}

export default Home;
