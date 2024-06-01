import React, { useRef } from "react";
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
  skillsContainerAnim2,
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
    margin: "-20% 0px",
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
        className="section-containers | lg:py-12 lg:gap-12"
      >
        <aside className="about-aside-containers lg:h-screen90">
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
                Je m'appelle Kévin, j'ai 30 ans et je suis originaire de Nantes.
                Fort de dix années d'expériences dans le secteur du commerce,
                j'ai exercé principalement les métiers de barbier et de serveur.
                Ces expériences m'ont permis de développer un sens aigu du
                service client, de la précision et une capacité à travailler
                sous pression.
              </p>
              <p className="text-xl">
                De nature curieux, j'aime voyager pour découvrir et m'adapter à
                de nouveaux environnements, quitter ma zone de confort me fais
                me sentir plus vivant. Professionnellement, cette soif de
                découverte m'a conduit à me réorienter vers le développement
                web, un domaine qui m'a toujours intrigué...
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
        <aside className="about-aside-containers lg:h-screen ">
          <motion.div
            ref={refParagraph1}
            variants={comeFromLeftAnim}
            initial="initial"
            animate={isInViewParagph1 ? "animate" : "initial"}
            className="about-surfaces about-paragph-container"
          >
            <H2>De serveur aux serveurs</H2>
            <div className="about-paragph">
              <p className="text-xl | md:w-1/3">
                C'est au cours d'un voyage de plusieurs mois en Asie du sud-est,
                que mon questionnement sur une reconversion est né, conscient
                que je ne projetterais pas le reste de ma vie professionnelle
                dans ce même domaine.
              </p>
              <p className="text-xl | md:w-1/3 md:mr-2">
                Mon choix pour le développement web s'est présenté de manière
                naturelle. Je me suis souvent demandé comment les choses qui
                m'entouraient et avec lesquelles j’interagissais fonctionnaient.
                Cette curiosité s'est développée proportionnellement à l'avancée
                technologique dans notre quotidien.
              </p>
              <p className="text-xl | md:w-1/3">
                Mon passé professionel m'a permis de développer un attrait pour
                la création, en équipe et en autonomie, souvent dans des temps
                impartis. Elles m'ont aussi appris l'importance et l'enjeu d'un
                bon relationnel et d'un bon suivi client afin de délivrer la
                meilleure expérience à ce dernier. Soucieux de celle-ci par le
                passé, j'apporte aujourd'hui un réel intérêt à l'UI/UX.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={refSoftSkills}
            variants={skillsContainerAnim2}
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
        <aside className="about-aside-containers | md:gap-36 md:mt-4">
          <motion.div
            ref={refParagraph2}
            variants={comeFromRightAnim}
            initial="inital"
            animate={isInViewParagph2 ? "animate" : "initial"}
            className="about-surfaces about-paragph-container"
          >
            <H2>
              Le développement <span className="line-through">web</span>{" "}
              <br></br>de mes compétences
            </H2>
            <div className="about-paragph">
              <p className="relative text-xl md:w-1/3 ">
                Tout comme le web, mes compétences se développent avec le temps.
                Depuis mes débuts en autodidacte, j'ai autofinancé ma formation
                au sein de la Wild Code School. Une formation Full-Stack d'une
                durée de 5 mois, axée sur l'environnement JavaScript avec React,
                NodeJs et MySQL pour les bases de données relationnelles.
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
                du cinéma, dans le cadre d'un stage d'une durée de 5 mois.
                Durant celui-ci, j'ai eu le plaisir d'utiliser un nouveau
                framework JavaScript avec Angular, ainsi que de découvrir le
                'NoSQL' avec Firebase.
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
                J'ai eu l'occasion d'éffectuer un second stage en tant que
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
