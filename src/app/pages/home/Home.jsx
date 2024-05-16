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
        <article className="article-containers gap-16 justify-between | lg:pr-0 lg:pl-16 lg:gap-0 lg:flex-row lg:self-start">
          <aside className="presentation-container">
            <div className="flex flex-col gap-8 justify-center | md:gap-16">
              <div className=" w-fit flex gap-2 text-2xl contrast-bg-1">
                <span className="test1 inline-block">✌️</span>{" "}
                <p className="text-2xl font-semibold ">
                  Hi there, Moi c'est Kévin !
                </p>
              </div>
              <div>
                <p className="lg:w-1/2 text-4xl">
                  <span className="text-5xl ">
                    Développeur Front-End Junior
                  </span>{" "}
                  en recherche d'une{" "}
                  <span className="text-4xl">alternance</span> en tant que
                  <span className="text-4xl"> Développeur Full-Stack</span>
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-center">
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
          <div className="w-4/5 mx-auto mt-4 mb-8 border border-t-0 | lg:hidden"></div>
          <div className="flex gap-4 flex-wrap justify-around items-center | md:gap-8 md:self-center | lg:w-1/4 lg:flex-col lg:gap-16  ">
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
