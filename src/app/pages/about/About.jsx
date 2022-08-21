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
            <aside className="text">
              <h2>En quelques mots...</h2>
              <p>
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
            <aside>
              <img src={imgProfil} />
              <ButtonCallToAction
                text={"Plus d'informations"}
                customClass="mt-10"
                fct={openModal}
              >
                Plus d'informations
              </ButtonCallToAction>
            </aside>
          </article>
          <article className="softskills-part">
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
