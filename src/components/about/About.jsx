import React from "react";
import imgProfil from "../../assets/imgAbout/Kevin.jpg";
import SoftSkills from "../../sub-components/about/SoftSkills";

function About() {
  return (
    <>
      <section id="about" className="About-container">
        <article className="description-part">
          <aside>
            <h2>En quelques mots...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              auctor lacus nec sem volutpat tristique. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aenean rutrum eros vitae
              metus mollis bibendum. Aenean ultricies euismod turpis, et maximus
              ex. Mauris blandit, est accumsan molestie rutrum, nisl urna
              maximus ligula, nec condimentum lectus mauris eu leo. Morbi
              euismod, magna id auctor volutpat, sem tellus pulvinar eros, vel
              accumsan arcu felis et nibh. Nulla convallis massa in lacus
              lacinia, in placerat elit mattis. Suspendisse et lacinia leo.
            </p>
          </aside>
          <img src={imgProfil} />
        </article>
        <article className="softskills-part">
          <SoftSkills />
        </article>
      </section>
    </>
  );
}

export default About;
