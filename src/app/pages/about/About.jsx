import React from "react";
// Components
import SoftSkill from "../../components/about/skills/SoftSkill";
import HardSkill from "../../components/about/skills/HardSkill";
import H2 from "../../components/about/H2";
// Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.png";
// Datas
import dataSkills from "../../../datas/datasSkills";
import img_ReactJs from "../../../assets/img/imgHardSkills/ReactJs.png";
import img_Angular from "../../../assets/img/imgHardSkills/Angular.png";
import img_VueJs from "../../../assets/img/imgHardSkills/VueJs.png";

import SideBar from "../../../app/components/common/navigation/SideBar";

function About() {
  return (
    <>
      <section id="about" className="section-containers">
        <aside className="about-aside-containers">
          <div className="about-me-box">
            <img className="about-me-img " alt="Profil" src={imgProfil} />
            <div className="about-me-text">
              <p className="text-xl">
                Je m'appelle Kévin, j'ai 30 ans et j'habite la ville culturelle
                et historique de Nantes. C'est peut être de la que vient mon
                intêret pour l'histoire et ces différentes époques, qui par
                moment nous amêne à l'interogation, parfois à la compréhention
                de certaines choses.
              </p>
              <p className="text-xl">
                De nature curieuse, j'aime aussi beaucoup voyager dans le but de
                découvrir et de m'adapter à de nouveaux environnements. Il est
                également possible que ma variable 'lookingForChallenge' soit
                une constante initialisée à 'true'.
              </p>
              <p className="text-xl">
                Vous l'avez peut-être compris, cette même curiosité m'a amené un
                jour à découvrir le domaine du développement web. C'est en
                autonomie et par le biais de différents supports que j'ai
                commencé à m'initier à ces bases.
              </p>
            </div>
          </div>
          <div className="w-full softSkills-box">
            {dataSkills
              .filter((atout) => atout.part === 1)
              .map((el) => (
                <SoftSkill
                  key={el.element}
                  softSkill={el.element}
                  categorie={el.catégorie}
                  img={el.image}
                />
              ))}
          </div>
          <div className="divider"> </div>
        </aside>
        <aside className="about-aside-containers">
          <div className="about-surfaces about-paragph-container">
            <H2>
              Une Aventure <br></br> avec un grand 'A'
            </H2>
            <div className="about-paragph">
              <p className="text-xl | md:w-1/3">
                C'est après dix années passées dans le domaine du commerce et
                suite à mon engouement pour le développement web que j'ai choisi
                de me réorienter dans ce domaine, encore nouveau pour moi il y a
                quelques années.
              </p>
              <p className="text-xl | md:w-1/3 md:mr-2">
                Si dans un premier temps mes sept années passées en tant que
                coiffeur/barbier semblent loin du développement web, je me suis
                très vite rendu compte que mon expérience dans le suivi
                clientèle (relationnel, diagnostic, conseils, adaptation,
                réalisation) pourrait m'être utile. Soucieux de celui-ci par le
                passé, j'apporte aujourd'hui un réel intérêt à l'UI/UX.
              </p>
              <p className="text-xl | md:w-1/3">
                Ma réorientation actuelle n'est pas ma première. Je me suis
                aussi épanoui en tant que serveur en restauration. Un domaine
                demandant de la rigueur, une bonne estimation des timings et le
                respect de ces derniers pour le bon déroulement des services.
                Mais aussi un esprit d'équipe et une analyse rapide des
                priorités par instants.
              </p>
            </div>
          </div>
          <div className="softSkills-box">
            {dataSkills
              .filter((atout) => atout.part === 2)
              .map((el) => (
                <SoftSkill
                  key={el.element}
                  softSkill={el.element}
                  categorie={el.catégorie}
                  img={el.image}
                />
              ))}
          </div>
          <div className="divider"> </div>
        </aside>
        <aside className="about-aside-containers | md:gap-36">
          <div className="about-surfaces about-paragph-container">
            <H2>
              Le développement <span className="line-through">web</span>{" "}
              <br></br>des compétences
            </H2>
            <div className="about-paragph">
              <p className="relative text-xl md:w-1/3 ">
                Tout comme le web, les compétences se développent avec le temps.
                Depuis mes débuts en autodidacte, j'ai autofinancé ma formation
                au sein de la Wild Code School. Une formation Full-Stack d'une
                durée de 5 mois, axée sur l'environnement JavaScript avec React,
                NodeJs et MySQL pour les bases de donées relationnel.
                <img
                  src={img_ReactJs}
                  className="paragraph-frameworks-logos"
                  alt="ReactJs"
                />
              </p>
              <p className="relative text-xl | md:w-1/3">
                À la suite de cette formation, j'ai eu l'opportunité d'intégrer
                l'équipe de Cascade8, une start-up travaillant dans le domaine
                du cinéma. Un stage d'une durée de 5 mois, dans un environnement
                JavaScript avec Angular. C'est également durant ce stage que
                j'ai eu le plaisir de découvrir le 'NoSQL' avec Firebase.
                <img
                  src={img_Angular}
                  className="paragraph-frameworks-logos"
                  alt="Angular"
                />
              </p>
              <p className="relative text-xl | md:w-1/3">
                J'ai eu l'occasion d'accomplir un second stage en tant que
                développeur Front-End au sein de XRATOR, une start-up opérant
                dans le domaine de la cybersécurité. D'une durée de 4 mois, ce
                stage m'a permis de me familiariser avec le dernier framework
                JavaScript : Vue.js, ainsi qu'avec Prisma pour les bases de
                données relationnelles.
                <img
                  src={img_VueJs}
                  className="paragraph-frameworks-logos"
                  alt="VueJs"
                />
              </p>
            </div>
          </div>
          <div className="hardSkills-container">
            <div className="hardSkills-boxes">
              <H2>Front-End</H2>
              <div className="hardSkills-elements">
                {dataSkills
                  .filter(
                    (atout) =>
                      atout.stack === "front-end" || atout.stack === "full"
                  )
                  .map((el) => (
                    <HardSkill
                      key={el.element}
                      hardSkill={el.element}
                      categorie={el.catégorie}
                      img={el.image}
                    />
                  ))}
              </div>
            </div>
            <div className="hardSkills-boxes">
              <H2>Back-End</H2>
              <div className="hardSkills-elements">
                {dataSkills
                  .filter(
                    (atout) =>
                      atout.stack === "back-end" || atout.stack === "full"
                  )
                  .map((el) => (
                    <HardSkill
                      key={el.element}
                      hardSkill={el.element}
                      categorie={el.catégorie}
                      img={el.image}
                    />
                  ))}
              </div>
            </div>
            <div className="hardSkills-boxes">
              <H2>Outils</H2>
              <div className="hardSkills-elements">
                {dataSkills
                  .filter((atout) => atout.catégorie === "Outil")
                  .map((el) => (
                    <HardSkill
                      key={el.element}
                      hardSkill={el.element}
                      categorie={el.catégorie}
                      img={el.image}
                    />
                  ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

export default About;
