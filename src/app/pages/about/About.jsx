import React, { useRef, useEffect } from "react";
// Animations
import { motion, useInView } from "framer-motion";
import {
  onNavigateAnim,
  comeFromLeftAnim,
  comeFromRightAnim,
} from "../../animations/common/commonAnimations.js";
import {
  aboutMeDescriptionAnim,
  aboutMeImgAnim,
  skillsContainerAnim,
  logoBoxAnim,
} from "../../animations/aboutAnimations.js";
// Components
import SoftSkill from "../../components/about/skills/SoftSkill";
import HardSkill from "../../components/about/skills/HardSkill";
import H2 from "../../components/about/H2";
// Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.png";
// Datas
import dataSkills from "../../../datas/datasSkills";
import img_ReactJs from "../../../assets/img/imgHardSkills/ReactJs.png";
import img_Angular from "../../../assets/img/imgHardSkills/Angular.png";
import img_VueJs from "../../../assets/img/imgHardSkills/VueJs.png";

function About() {
  const refParagraph1 = useRef(null);
  const isInViewParagph1 = useInView(refParagraph1, {
    once: true,
    margin: "-20% 0px",
  });
  const refSoftSkills = useRef(null);
  const isInViewSoftSkills = useInView(refSoftSkills, {
    once: true,
    margin: "-10% 0px",
  });
  const refParagraph2 = useRef(null);
  const isInViewParagph2 = useInView(refParagraph2, {
    once: true,
    margin: "-40% 0px",
  });
  const refLogo1 = useRef(null);
  const isInViewLogo1 = useInView(refLogo1, {
    once: true,
    margin: "10% 0px",
  });
  const refLogo2 = useRef(null);
  const isInViewLogo2 = useInView(refLogo2, {
    once: true,
    margin: "10% 0px",
  });
  const refLogo3 = useRef(null);
  const isInViewLogo3 = useInView(refLogo3, {
    once: true,
    margin: "10% 0px",
  });
  const refHardSkills1 = useRef(null);
  const isInViewHardSkills1 = useInView(refHardSkills1, {
    once: true,
    margin: "10% 0px",
  });
  const refHardSkills2 = useRef(null);
  const isInViewHardSkills2 = useInView(refHardSkills2, {
    once: true,
    margin: "0% 0px",
  });
  const refHardSkills3 = useRef(null);
  const isInViewHardSkills3 = useInView(refHardSkills3, {
    once: true,
    margin: "20% 0px",
  });

  return (
    <>
      <motion.section
        variants={onNavigateAnim}
        initial="initial"
        animate="animate"
        id="about"
        className="section-containers py-8 lg:py-16"
      >
        <aside className="about-aside-containers">
          <div className="about-me-box">
            <motion.img
              variants={aboutMeImgAnim}
              className="about-me-img"
              alt="Profil"
              src={imgProfil}
            />
            <motion.div
              variants={aboutMeDescriptionAnim}
              initial="initial"
              animate="animate"
              className="about-me-text"
            >
              <p className="text-xl">
                Je m'appelle Kévin, j'ai 30 ans et j'habite la ville culturelle
                et historique de Nantes. C'est peut être de la que vient mon
                intêret pour l'histoire et ces différentes époques, qui par
                moment nous amêne à l'interogation, parfois à la compréhention
                de certaines choses.
              </p>
              <p className="text-xl">
                De nature curieuse, j'aime aussi beaucoup voyager dans le but de
                découvrir et de m'adapter à de nouveaux environnements. Il est
                également possible que ma variable 'lookingForChallenge' soit
                une constante initialisée à 'true'.
              </p>
              <p className="text-xl">
                Vous l'avez peut-être compris, cette même curiosité m'a amené un
                jour à découvrir le domaine du développement web. C'est en
                autonomie et par le biais de différents supports que j'ai
                commencé à m'initier à ces bases.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={skillsContainerAnim}
            className="w-full softSkills-box"
          >
            {dataSkills
              .filter((atout) => atout.part === 1)
              .map((el) => (
                <SoftSkill
                  key={el.element}
                  softSkill={el.element}
                  categorie={el.catégorie}
                  img={el.image}
                />
              ))}
          </motion.div>
          <div className="divider"> </div>
        </aside>
        <aside className="about-aside-containers">
          <motion.div
            ref={refParagraph1}
            variants={comeFromLeftAnim}
            initial="initial"
            animate={isInViewParagph1 ? "animate" : "initial"}
            className="about-surfaces about-paragph-container"
          >
            <H2>
              Une Aventure <br></br> avec un grand 'A'
            </H2>
            <div className="about-paragph">
              <p className="text-xl | md:w-1/3">
                C'est après dix années passées dans le domaine du commerce et
                suite à mon engouement pour le développement web que j'ai choisi
                de me réorienter dans ce domaine, encore nouveau pour moi il y a
                quelques années.
              </p>
              <p className="text-xl | md:w-1/3 md:mr-2">
                Si dans un premier temps mes sept années passées en tant que
                coiffeur/barbier semblent loin du développement web, je me suis
                très vite rendu compte que mon expérience dans le suivi
                clientèle (relationnel, diagnostic, conseils, adaptation,
                réalisation) pourrait m'être utile. Soucieux de celui-ci par le
                passé, j'apporte aujourd'hui un réel intérêt à l'UI/UX.
              </p>
              <p className="text-xl | md:w-1/3">
                Ma réorientation actuelle n'est pas ma première. Je me suis
                aussi épanoui en tant que serveur en restauration. Un domaine
                demandant de la rigueur, une bonne estimation des timings et le
                respect de ces derniers pour le bon déroulement des services.
                Mais aussi un esprit d'équipe et une analyse rapide des
                priorités par instants.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={refSoftSkills}
            variants={skillsContainerAnim}
            initial="inital"
            animate={isInViewSoftSkills ? "animate" : "initial"}
            className="softSkills-box"
          >
            {dataSkills
              .filter((atout) => atout.part === 2)
              .map((el) => (
                <SoftSkill
                  key={el.element}
                  softSkill={el.element}
                  categorie={el.catégorie}
                  img={el.image}
                />
              ))}
          </motion.div>
          <div className="divider"> </div>
        </aside>
        <aside className="about-aside-containers | md:gap-36">
          <motion.div
            ref={refParagraph2}
            variants={comeFromRightAnim}
            initial="inital"
            animate={isInViewParagph2 ? "animate" : "initial"}
            className="about-surfaces about-paragph-container"
          >
            <H2>
              Le développement <span className="line-through">web</span>{" "}
              <br></br>des compétences
            </H2>
            <div className="about-paragph">
              <p className="relative text-xl md:w-1/3 ">
                Tout comme le web, les compétences se développent avec le temps.
                Depuis mes débuts en autodidacte, j'ai autofinancé ma formation
                au sein de la Wild Code School. Une formation Full-Stack d'une
                durée de 5 mois, axée sur l'environnement JavaScript avec React,
                NodeJs et MySQL pour les bases de donées relationnel.
                <motion.img
                  ref={refLogo1}
                  variants={logoBoxAnim}
                  initial="inital"
                  animate={isInViewLogo1 ? "animate" : "initial"}
                  src={img_ReactJs}
                  className="paragraph-frameworks-logos"
                  alt="ReactJs"
                />
              </p>
              <p className="relative text-xl | md:w-1/3">
                À la suite de cette formation, j'ai eu l'opportunité d'intégrer
                l'équipe de Cascade8, une start-up travaillant dans le domaine
                du cinéma. Un stage d'une durée de 5 mois, dans un environnement
                JavaScript avec Angular. C'est également durant ce stage que
                j'ai eu le plaisir de découvrir le 'NoSQL' avec Firebase.
                <motion.img
                  ref={refLogo2}
                  variants={logoBoxAnim}
                  initial="inital"
                  animate={isInViewLogo2 ? "animate" : "initial"}
                  src={img_Angular}
                  className="paragraph-frameworks-logos"
                  alt="Angular"
                />
              </p>
              <p className="relative text-xl | md:w-1/3">
                J'ai eu l'occasion d'accomplir un second stage en tant que
                développeur Front-End au sein de XRATOR, une start-up opérant
                dans le domaine de la cybersécurité. D'une durée de 4 mois, ce
                stage m'a permis de me familiariser avec le dernier framework
                JavaScript : Vue.js, ainsi qu'avec Prisma pour les bases de
                données relationnelles.
                <motion.img
                  ref={refLogo3}
                  variants={logoBoxAnim}
                  initial="inital"
                  animate={isInViewLogo3 ? "animate" : "initial"}
                  src={img_VueJs}
                  className="paragraph-frameworks-logos"
                  alt="VueJs"
                />
              </p>
            </div>
          </motion.div>
          <div className="hardSkills-container">
            <div className="hardSkills-boxes">
              <H2>Back-End</H2>
              <motion.div
                ref={refHardSkills2}
                variants={skillsContainerAnim}
                initial="inital"
                animate={isInViewHardSkills2 ? "animate" : "initial"}
                className="hardSkills-elements"
              >
                {dataSkills
                  .filter(
                    (atout) =>
                      atout.stack === "back-end" || atout.stack === "full"
                  )
                  .map((el) => (
                    <HardSkill
                      key={el.element}
                      hardSkill={el.element}
                      categorie={el.catégorie}
                      img={el.image}
                    />
                  ))}
              </motion.div>
            </div>
            <div className="hardSkills-boxes">
              <H2>Front-End</H2>
              <motion.div
                ref={refHardSkills1}
                variants={skillsContainerAnim}
                initial="inital"
                animate={isInViewHardSkills1 ? "animate" : "initial"}
                className="hardSkills-elements"
              >
                {dataSkills
                  .filter(
                    (atout) =>
                      atout.stack === "front-end" || atout.stack === "full"
                  )
                  .map((el) => (
                    <HardSkill
                      key={el.element}
                      hardSkill={el.element}
                      categorie={el.catégorie}
                      img={el.image}
                    />
                  ))}
              </motion.div>
            </div>
            <div className="hardSkills-boxes">
              <H2>Outils</H2>
              <motion.div
                ref={refHardSkills3}
                variants={skillsContainerAnim}
                initial="inital"
                animate={isInViewHardSkills3 ? "animate" : "initial"}
                className="hardSkills-elements"
              >
                {dataSkills
                  .filter((atout) => atout.catégorie === "Outil")
                  .map((el) => (
                    <HardSkill
                      key={el.element}
                      hardSkill={el.element}
                      categorie={el.catégorie}
                      img={el.image}
                    />
                  ))}
              </motion.div>
            </div>
          </div>
        </aside>
      </motion.section>
    </>
  );
}

export default About;
