import React, { useState } from "react";
import { Link } from "react-router-dom";
// Packages
import { AnimatePresence, motion } from "framer-motion";
// Components
import Modal from "../../components/modal/Modal";
import ProfileModal from "../../components/about/ProfileModal";
import SoftSkillsModal from "../../components/about/SoftSkillsModal";
//Sub-components
import SocialMediasLinks from "../../sub-components/Links/SocialMediasLinks";
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";
//Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.jpg";
import Github from "../../../assets/img/imgSocialMedias/Github.png";
import Linkedin from "../../../assets/img/imgSocialMedias/Linkedin.png";
// Animations
import {
  descriptionAnim,
  imageAnim,
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
      <section id="about" className="w-full h-screen">
        <article className="sections-sub-containers">
          <div className="presentation">
            <motion.aside
              className=""
              variants={descriptionAnim}
              initial="initial"
              animate="animate"
            >
              <p className="text-5xl">Kévin</p>
              <p className="text-6xl">MARAIS</p>
              <p className="text-3xl">Recherche Alternance</p>
              <p className="text-xl">Développeur Web Full-Stack</p>
            </motion.aside>
            <motion.aside
              className="picture-scoial-medias"
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
              <div className="links-social-medias">
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
              </div>
            </motion.aside>
          </div>
          <Link to="/portofolio" >
            <ButtonCallToActionText
              text={"Qui suis-je ?"}
            ></ButtonCallToActionText>
          </Link>
        </article>
      </section>
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
    </>
  );
}

export default About;