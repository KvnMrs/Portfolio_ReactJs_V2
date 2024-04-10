import React from "react";
// Components
import SoftSkills from "../../components/about/SoftSkills";
// Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.png";
// Datas
import dataSkills from "../../../datas/datasSkills";

function About() {
  return (
    <>
      <section id="about" className="section-containers">
        <article className="article-containers">
          <aside className="about-aside-containers flex-col p-2 text-center gap-4  md:w-1/2 md:self-center">
            <img
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </aside>

          <div className="w-4/5 mx-auto my-8 border border-t-0"> </div>

          <aside className="about-aside-containers flex-col md:flex-row">
            <div className="about-description-container">
              <div className="about-img-containers rotate-[16deg] self-end">
                <div className="about-img"></div>
              </div>
              <h2 className="text-3xl">Titre 1.</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="md:w-1/3 flex gap-4 md:gap-8 flex-wrap justify-around ">
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
            </div>
          </aside>
          <div className="w-4/5 mx-auto my-8 border border-t-0"> </div>
          <aside className="about-aside-containers flex-col-reverse md:flex-row ">
            <div className="md:w-1/3 flex gap-4 md:gap-8 flex-wrap justify-around">
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
            </div>
            <div className="about-description-container text-end">
              <div className="about-img-containers self-start rotate-[168deg]">
                <div className="about-img"></div>
              </div>
              <h2 className="text-3xl">Titre 2.</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}

export default About;
