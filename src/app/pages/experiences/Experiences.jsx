import React, { useState } from "react";

// Datas
import datasExperiences from "../../../datas/datasExperiences";
import dataTraining from "../../../datas/datasTraining";

// Sub-Component
import ExperiencesList from "../../components/experiences/ExperiencesList";
import TrainingsList from "../../components/experiences/TrainingsList";
import ButtonCallToActionSvg from "../../sub-components/buttons/ButtonCallToActionSvg";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

function Experiences() {
  const [showExperiences, setShowExperiences] = useState(true);

  const toggleList = () => {
    return setShowExperiences(!showExperiences);
  };
  return (
    <>
      <section id="experiences" className="sections-containers">
        <div className="sections-surfaces">
          <article className="sections-sub-containers">
            <header className="sections-headers">
              {!showExperiences ? (
                <ButtonCallToActionSvg
                  svg={<LeftArrowSvg />}
                  fct={() => toggleList()}
                  customClass={"mr-5"}
                />
              ) : null}
              <h1 className="sections-titles">
                {showExperiences ? "Experiences" : "Formations"}
              </h1>
              {showExperiences ? (
                <ButtonCallToActionSvg
                  svg={<RightArrowSvg />}
                  fct={() => toggleList()}
                  customClass={"ml-5"}
                />
              ) : null}
            </header>
            <div className="lists-container">
              <div className="test my-auto w-3/12 h-5/6 flex flex-col">
                <div className="w-5/6  m-auto">
                  <p className="my-5">Types expériences</p>
                  <ul className="w-full h-full flex flex-col">
                    <li className="w-5/6 self-center h-10 flex  items-center my-1">
                      <div className="w-5 h-5 rounded bg-red-400"></div>
                      <p className="ml-2">developement web</p>
                    </li>
                    <li className="w-5/6 self-center h-10 flex items-center my-1">
                      <div className="w-5 h-5 rounded bg-green-400"></div>
                      <p className="ml-2">restauration</p>
                    </li>
                    <li className="w-5/6 self-center h-10 flex  items-center my-1">
                      <div className="w-5 h-5 rounded bg-blue-400"></div>
                      <p className="ml-2">Coiffure</p>
                    </li>
                    <li className="w-5/6 self-center h-10 flex  items-center my-1">
                      <div className="w-5 h-5 rounded bg-yellow-400"></div>
                      <p className="ml-2">autres</p>
                    </li>
                  </ul>
                </div>
              </div>

              <aside className="lists-experience-training">
                {showExperiences
                  ? // Show experiences
                    datasExperiences.map((experience) => (
                      <div className="experiences-trainings-lists">
                        <ExperiencesList datas={experience} />
                      </div>
                    ))
                  : // Show trainings
                    dataTraining.map((training) => (
                      <div className="experiences-trainings-lists">
                        <TrainingsList datas={training} />
                      </div>
                    ))}
              </aside>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Experiences;
