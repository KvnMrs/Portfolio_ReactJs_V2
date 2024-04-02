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
            <div className="w-full row-span-1 content-end">
              <div className="h-3/5 w-3/4 mt-auto ml-auto rotate-6 rounded-3xl bg-white"></div>
            </div>
            <motion.div
              className="row-span-2"
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
              className="w-full flex flex-wrap self-center justify-between"
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
