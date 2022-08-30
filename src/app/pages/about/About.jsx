import React, { useState } from "react";

// Components
import SoftSkills from "../../components/about/SoftSkills";
import Modal from "../../components/modal/Modal";
import Experiences from "../../components/about/Experiences";
import Profile from "../../components/about/Profile";
import Training from "../../components/about/Training";

//Sub-components
import ButtonCallToAction from "../../sub-components/buttons/ButtonCallToAction";

// Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.jpg";

function About() {
  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(!activeModal);
  };

  return (
    <>
      <section id="about" className="about-container">
        <div className="card">
          <article className="description-part">
            <aside className="text-part">
              <h2 className="text-title">En quelques mots...</h2>
              <p className="text-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                auctor lacus nec sem volutpat tristique. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Aenean rutrum eros vitae
                metus mollis bibendum. Aenean ultricies euismod turpis, et
                maximusex. Mauris blandit, est accumsan molestie rutrum, nisl
                urnamaximus ligula, nec condimentum lectus mauris eu leo. Morbi
                euismod, magna id auctor volutpat, sem tellus pulvinar eros, vel
                accumsan arcu felis et nibh. Nulla convallis massa in lacus
                lacinia, in placerat elit mattis. Suspendisse et lacinia leo.
              </p>
            </aside>
            <aside className="img-infos-part">
              <img className="prolfile-img" src={imgProfil} />
              <ButtonCallToAction
                text={"En savoir plus"}
                customClass="md:mt-16"
                fct={openModal}
              >
                Plus d'informations
              </ButtonCallToAction>
            </aside>
          </article>
          <article className="softSkills-part">
            <SoftSkills />
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
