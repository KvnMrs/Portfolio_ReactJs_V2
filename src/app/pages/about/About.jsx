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
          <aside className="about-aside-containers | md:self-center">
            <div className="p-2 flex flex-col gap-8 items-center | md:gap-12 md:py-0">
              <img
                className="w-40 h-40 object-cover self-center | md:w-48 md:h-48"
                alt="Profil"
                src={imgProfil}
              />
              <div className="px-2 flex flex-col gap-3 | md:w-8/12 md:px-4">
                <p>
                  Je m'appelle Kévin, j'ai 30 ans et j'habite la ville
                  culturelle et historique de Nantes. C'est peut être de la que
                  vient mon intêret pour l'histoire et ces différentes époques,
                  qui par moment nous amêne à l'interogation, parfois à la
                  compréhention de certaines choses.
                </p>
                <p>
                  De nature curieux j'aime aussi beaucoup voyager dans le but de
                  découvrir et m'adapter à de nouveaux environnement. Il est
                  possible aussi que ma variable 'lookingForChallenge' soit une
                  constante initialiser à 'true'..
                </p>
                <p>
                  Vous l'avez peut-être compris, cette même curiosité m'a amenée
                  un jour à découvrir le domaine du développement web. C'est en
                  autonomie et par le biais de différents support que j'ai
                  commencé à m'initer à ces bases.
                </p>
              </div>
              <div className="w-11/12 mt-2 flex gap-4 flex-wrap justify-around | | md:w-10/12 md:gap-8 ">
                {dataSkills
                  .filter((atout) => atout.part === 1)
                  .map((el) => (
                    <SoftSkills
                      key={el.element}
                      softSkill={el.element}
                      categorie={el.catégorie}
                      img={el.image}
                    />
                  ))}
              </div>
            </div>
          </aside>

          <div className="w-4/5 mx-auto my-8 border border-t-0"> </div>

          <aside className="about-aside-containers flex-col md:flex-row">
            <div className="about-description-container">
              <div className="about-img-containers rotate-[16deg] self-end">
                <div className="about-img"></div>
              </div>
              <h2 className="text-3xl">
                {"<"}Une aventure professionnelle{"/>"}
              </h2>
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
