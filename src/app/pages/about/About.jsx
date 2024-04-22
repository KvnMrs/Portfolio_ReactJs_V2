import React from "react";
// Components
import SoftSkills from "../../components/about/SoftSkills";
// Assets
import imgProfil from "../../../assets/img/imgAbout/Kevin.png";
// Datas
import dataSkills from "../../../datas/datasSkills";
import img_ReactJs from "../../../assets/img/imgHardSkills/ReactJs.png";
import img_Angular from "../../../assets/img/imgHardSkills/Angular.png";
import img_VueJs from "../../../assets/img/imgHardSkills/VueJs.png";

function About() {
  return (
    <>
      <section id="about" className="section-containers">
        <article className="article-containers">
          <aside className="about-aside-containers | md:self-center">
            <img
              className="w-40 h-40 object-cover self-center | md:w-48 md:h-48"
              alt="Profil"
              src={imgProfil}
            />
            <div className="px-2 flex flex-col gap-3 | md:w-8/12 md:px-4">
              <p className="text-xl">
                Je m'appelle Kévin, j'ai 30 ans et j'habite la ville culturelle
                et historique de Nantes. C'est peut être de la que vient mon
                intêret pour l'histoire et ces différentes époques, qui par
                moment nous amêne à l'interogation, parfois à la compréhention
                de certaines choses.
              </p>
              <p className="text-xl">
                De nature curieux j'aime aussi beaucoup voyager dans le but de
                découvrir et m'adapter à de nouveaux environnement. Il est
                possible aussi que ma variable 'lookingForChallenge' soit une
                constante initialiser à 'true'..
              </p>
              <p className="text-xl">
                Vous l'avez peut-être compris, cette même curiosité m'a amenée
                un jour à découvrir le domaine du développement web. C'est en
                autonomie et par le biais de différents support que j'ai
                commencé à m'initer à ces bases.
              </p>
            </div>
            <div className="w-11/12 flex gap-4 md:gap-8 flex-wrap justify-between | md:w-2/3 ">
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
          </aside>

          <div className="w-4/5 mx-auto my-8 border border-t-0"> </div>

          <aside className="about-aside-containers flex-col |">
            <div className="about-description-container">
              <div className="about-img-containers rotate-[16deg] self-end">
                <div className="about-img"></div>
              </div>
              <div className="px-2 flex flex-col gap-4 |  md:px-0">
                <h2 className="mb-4 text-3xl">
                  {"<"} Une Aventure <br></br>avec un grand "A" {"/>"}
                </h2>
                <div className="flex flex-col gap-3 | md:flex-row md:gap-6">
                  <p className="text-xl md:w-1/3">
                    C'est après dix années passées dans le domaine du commerce
                    et suite à mon engouement pour le développement web que j'ai
                    choisi de me réorienter dans ce domaine, encore nouveau pour
                    moi il y'a quelques années..
                  </p>
                  <p className="text-xl md:w-1/3 md:mr-2">
                    Si dans un premier temps mes sept année passé en tant que
                    coiffeur/barbier semble loin du développement web, je me
                    suis très vite rendu compte que mon expérience dans le
                    suivit clientèl (relationnel, diagnostic, conseils,
                    adaptation, réalisation) pourrait m'être utile. Soucieux de
                    celui-ci par le passé, j'apporte aujourd'hui un réel intérêt
                    à l'UI/UX.
                  </p>
                  <p className="text-xl md:w-1/3">
                    Ma réorientation actuelle n'est pas ma première. Je me suis
                    aussi épanoui en tant que serveur en restauration. Un
                    domaine demandant de la rigueur, une bonne estimation des
                    timings et respect de ces derniers pour le bon déroulement
                    des services. Mais aussi un esprit d'esprit d'équipe et une
                    analyse rapide des priorité par instants.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 flex-wrap justify-between | md:w-2/3 ">
              {dataSkills
                .filter((atout) => atout.part === 2)
                .map((el) => (
                  <SoftSkills
                    key={el.element}
                    softSkill={el.element}
                    categorie={el.catégorie}
                    img={el.image}
                    customClass={"min-w-[8rem]"}
                  />
                ))}
            </div>
          </aside>
          <div className="w-4/5 mx-auto my-8 border border-t-0"> </div>
          <aside className="about-aside-containers md:gap-36">
            <div className="about-description-container">
              <div className="about-img-containers self-start rotate-[168deg]">
                <div className="about-img"></div>
              </div>
              <div className="px-2 flex flex-col gap-4 |  md:px-0">
                <h2 className="mb-4 text-3xl">
                  {"<"} Le développement{" "}
                  <span className="line-through">web</span> <br></br>des
                  compétences
                  {" />"}
                </h2>
                <div className="flex flex-col gap-16 | md:flex-row md:gap-6">
                  <p className="text-xl md:w-1/3 relative">
                    Tout comme le web, les compétences se développent avec le
                    temps. Depuis mes débuts en autodiacte, j'ai auto-financé ma
                    formation au sein de la Wild Code School. Une formation
                    Full-Stack axée sur l'environnement JavaScript et MySQL,
                    d'une durée de 5 mois.
                    <img
                      src={img_ReactJs}
                      className="max-h-full md:-bottom-28 -bottom-14 inset-x-0 m-auto md:flex absolute bg-cover opacity-20"
                    />
                  </p>
                  <p className="text-xl md:w-1/3 relative">
                    A la suite de cette formation j'ai eu l'opportunité
                    d'intégrer l'équipe de Cascade8 pour un stage d'une durée de
                    5 mois également. Toujours dans un environnement JavaScript,
                    c'est durant ce stage que j'ai eu le plaisir de découvrir le
                    'NoSQL' avec Firebase.
                    <img
                      src={img_Angular}
                      className="max-h-full md:-bottom-28 -bottom-14 inset-x-0 m-auto md:flex absolute bg-cover opacity-20"
                    />
                  </p>
                  <p className="text-xl md:w-1/3 relative">
                    J'ai également eu l'occasion d'accomplir un second stage au
                    sein de XRATOR, d'une duré de 4 mois. Toujours dans un
                    environnement Javascript, avec cette foic-ci Prisma pour la
                    base de donnée.
                    <img
                      src={img_VueJs}
                      className="max-h-full md:-bottom-28 -bottom-14 inset-x-0 m-auto md:flex absolute bg-cover opacity-20"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-11/12 flex flex-col gap-12 | md:gap-20">
              <div className="flex flex-col gap-4 | md:gap-8">
                <h2 className="text-2xl">Front-End:</h2>
                <div className="flex flex-wrap gap-4 | md:gap-8 ">
                  {dataSkills
                    .filter(
                      (atout) =>
                        atout.stack === "front-end" || atout.stack === "full"
                    )
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
              <div className="flex flex-col gap-4 | md:gap-8">
                <h2 className="text-2xl">Back-End:</h2>
                <div className="flex flex-wrap gap-4 | md:gap-8 ">
                  {dataSkills
                    .filter(
                      (atout) =>
                        atout.stack === "back-end" || atout.stack === "full"
                    )
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
              <div className="w-11/12 flex flex-col gap-4 | md:gap-8">
                <h2 className="text-2xl">Outils:</h2>
                <div className="flex flex-wrap gap-8 | md:gap-8 ">
                  {dataSkills
                    .filter((atout) => atout.catégorie === "Outil")
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
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}

export default About;
