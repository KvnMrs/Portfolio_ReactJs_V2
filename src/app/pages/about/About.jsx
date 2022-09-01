import React, { useState, useEffect, useRef, useCallback } from "react";

//Modules
import { gsap } from "gsap";

// Components
import SoftSkills from "../../components/about/SoftSkills";
import Modal from "../../components/modal/Modal";
import Experiences from "../../components/about/Experiences";
import Profile from "../../components/about/Profile";
import Training from "../../components/about/Training";

//Sub-components
import ButtonCallToAction from "../../sub-components/buttons/ButtonCallToAction";

//Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.jpg";

//Datas
import dataSkills from "../../../datas/datasSkills";

//Hooks
import { useOnScreen } from "../../hooks/useOnScreen";

function About() {
  const [activedAnimation, setActivedAnimation] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const refAbout = useRef();

  const onScreen = useOnScreen(refAbout);

  // OpenModal
  const openModal = () => {
    setActiveModal(!activeModal);
  };

  // Animations
  const animationTextDescription = useCallback(
    (element) => {
      setActivedAnimation(true);
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.1,
        },
        {
          duration: 1,
          opacity: 1,
          scale: 1,
        }
      );
    },
    [onScreen]
  );

  const animationImage = (element) => {
    setActivedAnimation(true);
    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.1,
      },
      {
        delay: 1,
        duration: 2,
        opacity: 1,
        scale: 1,
      }
    );
  };

  const animationSoftSkills = (element) => {
    setActivedAnimation(true);
    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.1,
      },
      {
        delay: 2,
        duration: 3,
        opacity: 1,
        scale: 1,
      }
    );
  };
  // End animations

  useEffect(() => {
    onScreen && !activedAnimation && animationTextDescription("#box1");
  }, [onScreen]);

  useEffect(() => {
    onScreen && !activedAnimation && animationImage("#box2");
  }, [onScreen]);

  useEffect(() => {
    onScreen && !activedAnimation && animationSoftSkills("#box3");
  }, [onScreen]);

  return (
    <>
      <section id="about" ref={refAbout} className="about-container">
        <div className="card">
          <article className="description-part">
            <aside className="text-part" id="box1">
              <h2 className="text-title">En quelques mots...</h2>
              <p className="text-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                auctor lacus nec sem volutpat tristique. Interdum et malesuada
                fames ac nte ipsum primis in faucibus. Aenean rutrum eros vitae
                metus mollis bibendum. Aenean ultricies euismod turpis, et
                maximsex. Mauris blandit, est accumsan molestie rutrum, nisl
                urnamaximus ligula, nec condimentum lectus mauris eu leo. Morbi
                euismod, magna id auctor volutpat, sem tellus pulvinar eros, vel
                accumsan arcu felis et nibh. Nulla convallis massa in lacus
                lacinia, in placerat elit mattis. Suspendisse et lacinia leo.
              </p>
            </aside>
            <aside className="img-infos-part" id="box2">
              <img className="prolfile-img" alt="Profil" src={imgProfil} />

              <ButtonCallToAction
                text={"En savoir plus"}
                customClass="md:mt-16"
                fct={openModal}
              >
                Plus d'informations
              </ButtonCallToAction>
            </aside>
          </article>
          <article className="softSkills-part" id="box3">
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
          </article>
        </div>
        {activeModal ? (
          <Modal
            showModal={openModal}
            component1={<Profile />}
            component2={<Experiences />}
            component3={<Training />}
            tab={"Profil"}
            tab2={"Expériences"}
            tab3={"Formations"}
          />
        ) : null}
      </section>
    </>
  );
}

export default About;
