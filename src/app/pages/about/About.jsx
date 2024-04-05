import React from "react";
import { Link } from "react-router-dom";
// Packages
import { motion } from "framer-motion";
// Animations
import { descriptionAnim, softSkillsAnim } from "../../animations/aboutAnimation";
// Components
import SoftSkills from "../../components/about/SoftSkills";
//Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.png";
// Sub-components
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";
// Datas
import dataSkills from "../../../datas/datasSkills";

function About() {
  return (
    <>
      <section id="about" className="section-containers">
        <article className="article-containers">
          <aside className="about-aside-containers p-2 text-center gap-4">
            <motion.img
              className="w-40 h-40 object-cover self-center"
              alt="Profil"
              src={imgProfil}
            />
            <div className="flex justify-around">
              <p>Kévin Marais</p>
              <p>30 ans</p>
              <p>Nantes</p>
            </div>
            <div className="">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </aside>

          <div className="w-4/5 mx-auto my-8 border border-t-0"> </div>

          <aside className="about-aside-containers">
            <div className="about-img-containers self-end rotate-12">
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

          <div className="w-4/5 mx-auto my-8 border border-t-0"> </div>

          <aside className="about-aside-containers">
            <div className="about-img-containers self-start rotate-[168deg]">
              <div className="about-img"></div>
            </div>
            <motion.div
              className="about-description-container text-end"
              variants={descriptionAnim}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-3xl">Titre 1.</h2>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
            <motion.div
              className="flex gap-4 flex-wrap justify-around"
              variants={softSkillsAnim}
              initial="initial"
              animate="animate"
            >
              {dataSkills
                .filter((atout) => atout.catégorie === "Compétence")
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
        <Link className="flex justify-end" to="/portofolio" >
          <ButtonCallToActionText
            text={"Mes projets ?"}
          ></ButtonCallToActionText>
        </Link>
      </section>
    </>
  );
}

export default About;
