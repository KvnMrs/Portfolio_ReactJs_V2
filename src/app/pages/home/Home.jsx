import React, { useState } from "react";
import { Link } from "react-router-dom";
//Sub-components
import SocialMediasLinks from "../../sub-components/Links/SocialMediasLinks";
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";
//Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.png";
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import CV from "../../../assets/document/Kévin_MARAIS_CV_FR.pdf";
// Animations
import {
  descriptionAnim,
  imageHoverAnim,
} from "../../animations/aboutAnimation";

function About() {
  const [activeModal, setActiveModal] = useState(false);

  // OpenModal
  const openModal = () => {
    setActiveModal(!activeModal);
  };

  return (
    <>
      <section id="home" className="section-containers">
        <article className="article-containers">
          <aside className="presentation-container">
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
    </>
  );
}

export default About;