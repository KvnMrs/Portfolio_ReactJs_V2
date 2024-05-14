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
      linkName: "< A propos /> ",
      link: "about",
      svg: <SvgProfile className={"w-10 h-10"} />,
    },
    {
      linkName: "< Mes projets />",
      link: "projects",
      svg: <SvgProject className={"w-10 h-10"} />,
    },
    {
      linkName: "< Contact />",
      link: "contact",
      svg: <SvgContact className={"w-10 h-10"} />,
    },
  ];

  return (
    <>
      <section id="home" className=" section-containers">
        <article className="article-containers contrast-bg-1 gap-16 justify-between |  md:px-8 lg:gap-0 lg:flex-row-reverse lg:self-start">
          <aside className="presentation-container">
            <div className="md:flex">
              <div className="flex flex-col gap-2 justify-center md:gap-4">
                <span>
                  <p className="text-5xl | md:text-6xl">Kévin</p>
                  <p className="text-6xl | md:text-7xl">MARAIS</p>
                </span>
                <span>
                  <p className="text-3xl | md:text-4xl">Recherche Alternance</p>
                  <p className="text-xl | md:text-2xl">
                    Développeur Web Full-Stack
                  </p>
                </span>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <a href={CV} download>
                <ButtonCallToActionText
                  text={"Télécharger CV"}
                ></ButtonCallToActionText>
              </a>
              <div className="flex gap-2 md:gap-3">
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
          <div className="w-full flex gap-2 flex-wrap justify-around | md:w-auto md:self-center lg:flex-col md:justify-between lg:border-r-2 lg:pr-12">
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
