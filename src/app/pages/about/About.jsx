import React, { useState } from "react";

// Components
import SoftSkills from "../../components/about/SoftSkills";
import Modal from "../../components/modal/Modal";
import Profil from "../../components/about/Profile";

//Sub-components
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";

// Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.jpg";
import SvgInfo from "../../../assets/svg/SvgInfo.jsx";

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
              <aside className="picture">
                <img src={imgProfil} />
                <div className="text-end ">
                  <ButtonsSvg fct={openModal} svg={<SvgInfo />} />
                </div>
              </aside>
            </aside>
          </article>
          <article className="softskills-part">
            <SoftSkills />
          </article>
        </div>
        {activeModal ? (
          <Modal showModal={openModal} component={<Profil />} tab={"Profil"} />
        ) : null}
      </section>
    </>
  );
}

export default About;
