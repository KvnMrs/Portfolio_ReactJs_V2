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
              <h1 className="sections-titles">En quelques mots...</h1>
            </header>
            <div className="description-part">
              <motion.aside
                className="description-text"
                variants={descriptionAnim}
                initial="initial"
                animate="animate"
              >
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  auctor lacus nec sem volutpat tristique. Interdum et malesuada
                  fames ac nte ipsum primis in faucibus. Aenean rutrum eros
                  vitae metus mollis bibendum. Aenean ultricies euismod turpis,
                  et maximsex. Mauris blandit, est accumsan molestie rutrum,
                  nisl urnamaximus ligula, nec condimentum lectus mauris eu leo.
                  Morbi euismod, magna id auctor volutpat, sem tellus pulvinar
                  eros, vel accumsan arcu felis et nibh. Nulla convallis massa
                  in lacus lacinia, in placerat elit mattis. Suspendisse et
                  lacinia leo.
                </p>
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
