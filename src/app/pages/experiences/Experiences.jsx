import React, { useState } from "react";

// Datas
import datasExperiences from "../../../datas/datasExperiences";
import dataTraining from "../../../datas/datasTraining";

// Components
import ExperiencesLegend from "../../components/experiences/ExperiencesLegend";

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
              {/* Experience or Trainings */}
              {showExperiences ? (
                <>
                  <h1 className="sections-titles ml-6">Experiences</h1>
                  <ButtonCallToActionSvg
                    svg={<RightArrowSvg />}
                    fct={() => toggleList()}
                    customClass={"ml-5"}
                  />
                </>
              ) : (
                <>
                  <ButtonCallToActionSvg
                    svg={<LeftArrowSvg />}
                    fct={() => toggleList()}
                    customClass={"mr-5"}
                  />

                  <h1 className="sections-titles mr-6">Formations</h1>
                </>
              )}
            </header>

            {/* Center list for Trainning */}
            <div
              className={
                showExperiences
                  ? "lists-container"
                  : "lists-container place-content-center"
              }
            >
              {/* Show Legend for Experience */}
              {showExperiences ? <ExperiencesLegend /> : null}

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
