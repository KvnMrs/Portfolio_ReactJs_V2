import "./Home.css";

import React from "react";
//Sub-components
import SocialMediasLinks from "../../components/common/Link/SocialMediasLinks.jsx";
import ButtonCallToActionText from "../../components/common/button/ButtonCallToActionText.jsx";
import HomeNavButton from "../../components/common/navigation/HomeNavButton.jsx";
//Assets
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import CV from "../../../assets/document/Kévin_MARAIS_CV_FR.pdf";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";

function About() {
  const navigation = [
    {
      linkName: "<A propos/> ",
      link: "about",
      svg: <SvgProfile className={"w-10 h-10"} />,
    },
    {
      linkName: "<Mes projets/>",
      link: "projects",
      svg: <SvgProject className={"w-10 h-10"} />,
    },
    {
      linkName: "<Contact/>",
      link: "contact",
      svg: <SvgContact className={"w-10 h-10"} />,
    },
  ];

  return (
    <>
      <section id="home" className="section-containers">
        <article className="article-containers lg:gap-0 lg:flex-row">
          <aside className="presentation-container">
            <div className="presentation-box ">
              <header className="home-surfaces presentation-header ">
                <span className="emoji-anim">✌️</span>{" "}
                <h1 className=" presentation-title">
                  Hi there, Moi c'est Kévin !
                </h1>
              </header>
              <p className="presentation-text">
                <span className="text-5xl ">Développeur Front-End Junior</span>{" "}
                en recherche d'une <span className="text-4xl">alternance</span>{" "}
                en tant que
                <span className="text-4xl"> Développeur Full-Stack</span>
              </p>
            </div>

            <div className="home-cta-box ">
              <a href={CV} download>
                <ButtonCallToActionText
                  text={"Télécharger CV"}
                ></ButtonCallToActionText>
              </a>
              <div className="flex gap-4">
                <SocialMediasLinks
                  link={
                    "https://www.linkedin.com/in/k%C3%A9vin-marais-861314216/"
                  }
                  img={Linkedin}
                  alt={"Lien vers Linkedin"}
                />
                <SocialMediasLinks
                  link={"https://github.com/KvnMrs"}
                  img={Github}
                  alt={"Lien vers Github"}
                />
              </div>
            </div>
          </aside>
          <div className="divider lg:hidden"></div>
          <div className="home-nav-box">
            {navigation.map((el) => (
              <HomeNavButton
                linkName={el.linkName}
                svg={el.svg}
                link={el.link}
              />
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default About;
