import "./Home.css";
import React from "react";
// Animations
import { motion } from "framer-motion";
import { onNavigateAnim } from "../../animations/common/commonAnimations.js";
import {
  presentationContainerAnim,
  afterPresentation,
  presentationBoxAnim,
} from "../../animations/homeAnimations.js";
// Components
import SocialMediasLinks from "../../components/common/Link/SocialMediasLinks.jsx";
import ButtonCallToActionText from "../../components/common/button/ButtonCallToActionText.jsx";
import HomeNavButton from "../../components/common/navigation/HomeNavButton.jsx";
// Assets
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
import CV from "../../../assets/document/Kévin_MARAIS_CV_FR.pdf";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";
import HomeIllustration from "../../components/home/HomeIllustration.jsx";

function Home() {
  const navigation = [
    {
      linkName: "<A propos/> ",
      link: "about",
      svg: <SvgProfile />,
    },
    {
      linkName: "<Mes projets/>",
      link: "projects",
      svg: <SvgProject />,
    },
    {
      linkName: "<Contact/>",
      link: "contact",
      svg: <SvgContact />,
    },
  ];

  return (
    <>
      <motion.section
        variants={onNavigateAnim}
        initial="initial"
        animate="animate"
        id="home"
        className="section-containers lg:px-16 lg:justify-between | xl:flex-row"
      >
        <aside className="presentation-container">
          <HomeIllustration />
          <div className="presentation-box ">
            <motion.header
              variants={afterPresentation}
              className=" presentation-header"
            >
              <span className="emoji-anim">✌️</span>{" "}
              <h1 className="presentation-title">
                Hi there ! Moi c'est Kévin !
              </h1>
            </motion.header>
            <motion.div
              variants={presentationContainerAnim}
              className="presentation-text"
            >
              <motion.p
                variants={presentationBoxAnim}
                className="text-5xl text-start "
              >
                Développeur Front-End Junior
              </motion.p>
              <motion.p
                variants={presentationBoxAnim}
                className="text-3xl text-start"
              >
                En recherche d'une{" "}
                <span className="text-wild_red">alternance</span>
              </motion.p>
              <motion.p
                variants={presentationBoxAnim}
                className="text-3xl text-start"
              >
                {" "}
                en tant que
              </motion.p>
              <motion.p
                variants={presentationBoxAnim}
                className="text-4xl text-start home-title"
              >
                {" "}
                Développeur Full-Stack
              </motion.p>
            </motion.div>
            <motion.div variants={afterPresentation} className="home-cta-box">
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
            </motion.div>
          </div>
        </aside>
        <div className="divider lg:hidden"></div>
        <motion.div variants={afterPresentation} className="home-links-box">
          {navigation.map((el) => (
            <HomeNavButton linkName={el.linkName} svg={el.svg} link={el.link} />
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default Home;
