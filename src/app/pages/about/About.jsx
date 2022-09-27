import React, { useState } from "react";

// Package
import { AnimatePresence, motion } from "framer-motion";

// Components
import SoftSkills from "../../components/about/SoftSkills";
import Modal from "../../components/modal/Modal";
import ProfileModal from "../../components/about/ProfileModal";
import SoftSkillsModal from "../../components/about/SoftSkillsModal";

//Sub-components
import SocialMediasLinks from "../../sub-components/Links/SocialMediasLinks";

//Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.jpg";
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";

//Datas
import dataSkills from "../../../datas/datasSkills";

// Animations
import {
  descriptionAnim,
  imageAnim,
  softSkillsAnim,
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
      <section id="about" className="sections-containers">
        <div className="sections-surfaces">
          <article className="sections-sub-containers">
            <header className="sections-headers">
              <h1 className="sections-titles">Qui suis-je ?</h1>
            </header>
            <div className="description-part">
              <motion.aside
                className="description-text"
                variants={descriptionAnim}
                initial="initial"
                animate="animate"
              >
                <div className="text">
                  <p className="description-paragraph">
                    À la suite de 10 années passées dans le domaine du commerce,
                    (coiffure et restauration) j'ai décidé de suivre une
                    reconversion professionnelle dans le but de devenir
                    Développeur Web. Depuis mes débuts en autodidacte, j'ai
                    suivi une formation auprès de la wild Code School ainsi
                    qu'un stage au sein de l'entreprise Cascade8.
                  </p>

                  <p className="description-paragraph">
                    J'aimerais à <span className="font-bold">présent</span>{" "}
                    intégré un poste en tant que{" "}
                    <span className="font-bold">Développeur Web Front-end</span>{" "}
                    et metre mon <span className="font-bold">experience</span>{" "}
                    aquise au service d'une nouvelle équipe.
                  </p>
                </div>
              </motion.aside>
              <motion.aside
                className="img-part"
                variants={imageAnim}
                initial="initial"
                animate="animate"
              >
                <button type="button" onClick={openModal}>
                  <motion.img
                    className="profile-img"
                    alt="Profil"
                    src={imgProfil}
                    variants={imageHoverAnim}
                    whileHover="whileHover"
                    transition="transition"
                  />
                </button>
              </motion.aside>
            </div>

            <motion.aside
              className="softSkills-part"
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
                    openModal={openModal}
                  />
                ))}
            </motion.aside>
          </article>
        </div>
        <AnimatePresence>
          {activeModal && (
            <Modal
              showModal={openModal}
              component1={<ProfileModal />}
              component2={<SoftSkillsModal />}
              tab={"Profil"}
              tab2={"Savoir-être"}
            />
          )}
        </AnimatePresence>
      </section>
      {/* <div className="links-social-medias">
        <SocialMediasLinks
          link={"https://www.linkedin.com/in/k%C3%A9vin-marais-861314216/"}
          img={Linkedin}
          alt={"Lien vers Linkedin"}
        />
        <SocialMediasLinks
          link={"https://github.com/KvnMrs"}
          img={Github}
          alt={"Lien vers Github"}
        />
      </div> */}
    </>
  );
}

export default About;
