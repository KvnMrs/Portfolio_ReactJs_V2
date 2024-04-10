import React, { useState } from "react";
import { Link } from "react-router-dom";
//Sub-components
import SocialMediasLinks from "../../sub-components/Links/SocialMediasLinks";
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";
import HomeNavButton from "../../components/navigation/HomeNavButton.jsx";
//Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.png";
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import CV from "../../../assets/document/Kévin_MARAIS_CV_FR.pdf";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";
// Animations
import {
  descriptionAnim,
  imageHoverAnim,
} from "../../animations/aboutAnimation";

function About() {
  const [activeModal, setActiveModal] = useState(false);
  const navigation = [
    {
      linkName: "< A propos /> ",
      link: "about",
      svg: <SvgProfile className={"w-10 h-10 mb-3 md:w-20 md:h-20"} />,
    },
    {
      linkName: "< Mes projets />",
      link: "projects",
      svg: <SvgProject className={"w-10 h-10 mb-3 md:w-20 md:h-20"} />,
    },
    {
      linkName: "< Contact />",
      link: "contact",
      svg: <SvgContact className={"w-12 h-12 md:w-20 md:h-20 md:mb-1.5"} />,
    },
  ];

  // OpenModal
  const openModal = () => {
    setActiveModal(!activeModal);
  };

  return (
    <>
      <section id="home" className="section-containers">
        <article className="article-containers">
          <aside className="presentation-container md:mb-16">
            <div className="md:flex">
              <div className="flex flex-col gap-2 justify-center  md:gap-4">
                <span>
                  <p className="text-5xl">Kévin</p>
                  <p className="text-6xl">MARAIS</p>
                </span>
                <span>
                  <p className="text-3xl">Recherche Alternance</p>
                  <p className="text-xl">Développeur Web Full-Stack</p>
                </span>
              </div>
              <img className="profile-img" alt="Profil" src={imgProfil} />
            </div>

            <div className="flex gap-8 items-center">
              <a href={CV} download>
                <ButtonCallToActionText
                  text={"Télécharger CV"}
                ></ButtonCallToActionText>
              </a>
              <div className="flex gap-2">
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
        </article>
      </section>
      <div className="w-4/5 mx-auto mt-4 mb-8 border border-t-0 | md:mb-16"></div>
      <div className=" m-auto flex justify-around | md:w-10/12 md:self-center md:justify-between">
        {navigation.map((el) => (
          <HomeNavButton linkName={el.linkName} svg={el.svg} link={el.link} />
        ))}
      </div>
    </>
  );
}

export default About;