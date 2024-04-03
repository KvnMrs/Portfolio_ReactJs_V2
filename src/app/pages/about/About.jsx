import React from "react";
import { Link } from "react-router-dom";
// Packages
import { motion } from "framer-motion";
// Animations
import { descriptionAnim, softSkillsAnim } from "../../animations/aboutAnimation";
// Components
import SoftSkills from "../../components/about/SoftSkills";
// Sub-components
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";
// Datas
import dataSkills from "../../../datas/datasSkills";

function About() {
  return (
    <>
      <section id="about" className="sections-containers">
        <article className="articles-containers">
          <aside className="about-aside-containers">
            <div className="about-img-container">
              <div className="about-img"></div>
            </div>
            <motion.div
              className="about-description-container"
              variants={descriptionAnim}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-3xl">Titre 1.</h2>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </motion.div>
            <motion.div
              className="flex gap-4 flex-wrap justify-around"
              variants={softSkillsAnim}
              initial="initial"
              animate="animate"
            >
              {dataSkills
                .filter((atout) => atout.catégorie === "Atout")
                .map((el) => (
                  <SoftSkills
                    key={el.element}
                    softSkill={el.element}
                    categorie={el.catégorie}
                    img={el.image}
                  />
                ))}
            </motion.div>
          </aside>
        </article>
        <Link to="/portofolio" >
          <ButtonCallToActionText
            text={"Mes projets ?"}
          ></ButtonCallToActionText>
        </Link>
      </section>
    </>
  );
}

export default About;
