import React, { useState, useEffect, useRef } from "react";

// Assets
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import videoBg from "../../../assets/video/video-bg.webm";

//Sub-component
import SocialMediasLinks from "../../sub-components/Links/SocialMediasLinks";

//Modules
import { gsap } from "gsap";

function Home() {
  const [activeScroll, setActiveScroll] = useState(false);

  const homeRef = useRef();

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
        <header ref={homeRef} className="home-header z-10">
          <h1 className="welcome">Bienvenue sur mon Portfolio</h1>
          {/* <p>
            <span className="name">Kévin Marais</span> <br />
            Développeur Web full stack.
          </p> */}
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
